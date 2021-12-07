import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PageHeader from '../../components/PageHeader';
import {api,busca} from '../../services/api';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [users, setUsers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setIsFiltersVisible] = useState(false);

    const [skill, setSkill] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nivel, setNivel] = useState('');

    useEffect(()=>{
        busca('http://192.168.0.25:3333/busca/user',setUsers)
    },[])
    
    

    async function searchDev(e:Event) {
        e.preventDefault();

        const response = await api.get('busca/user', {
            params: {
                categoria,
                skill,
                nivel
            }
        });

        setUsers(response.data);
    }
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then((response) => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritesTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritesTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    })

    function handleToggleFiltersVisble() {
        setIsFiltersVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        
        const response = await api.get('busca/user', {
            params: {
                categoria,
                skill,
                nivel
            }
        });

        
        
        setIsFiltersVisible(false);
        
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Devs disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisble}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Categoria</Text>
                        <TextInput
                            style={styles.input}
                            value={skill}
                            onChangeText={text => setSkill(text)}
                            placeholder="Ex : Desenvolvimento mobile"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Tecnologia</Text>
                                <TextInput
                                    style={styles.input}
                                    value={categoria}
                                    onChangeText={text => setCategoria(text)}
                                    placeholder="Ex: Flutter"
    
                                /> 
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Nivel</Text>
                                <TextInput
                                    style={styles.input}
                                    value={nivel}
                                    onChangeText={text => setNivel(text)}
                                    placeholder="Ex: Pleno"
    
                                /> 
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                               Filtrar 
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >

            {users.map((teacher: Teacher) => {
                return (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                )
            })}

            </ScrollView>
        </View>
    )
}

export default TeacherList;