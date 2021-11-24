import React, { useState,useEffect} from 'react';

import PageHeader from '../../components/PageHeader';
import DevItem from '../../components/DevItem';
import Select from '../../components/Select';

import {api,busca} from '../../services/api';

import './styles.css';




function DevList({url}) {
    const [users, setUsers] = useState([])
    const [skill, setSkill] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [nivel, setNivel] = useState('');
    


    useEffect(()=>{
        busca(url,setUsers)
    },[])
    
    

    async function searchDev(e) {
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

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os devs disponíveis.">
                <form id="search-teachers" onSubmit={searchDev}>
                    <Select 
                        name="categoria" 
                        label="Categoria"
                        value={categoria}
                        onChange={(e) => {
                            setCategoria(e.target.value)
                        }}
                        options={[
                            {value: 'Desenvolvimento Web', label: 'Desenvolvimento Web'},
                            {value: 'Programação', label: 'Programação'},
                            {value: 'Banco de Dados', label: 'Banco de Dados'},
                            {value: 'Desenvolvimento Mobile', label: 'Desenvolvimento Mobile'},
                            {value: 'Data Science', label: 'Data Science'},
                            {value: 'Machine Learning', label: 'Machine Learning'}
                          
                        ]}
                    />
                    <Select 
                        name="skill" 
                        label="Skill"
                        value={skill}
                        onChange={(e) => {
                            setSkill(e.target.value)
                        }}
                        options={[
                            {value: 'HTML/CSS', label: 'HTML/CSS'},
                            {value: 'Javascript', label: 'Javascript'},
                            {value: 'React', label: 'React'},
                            {value: 'Node.js', label: 'Node.js'},
                            {value: 'C', label: 'C'},
                            {value: 'MYSQL', label: 'MYSQL'},
                            {value: 'Python', label: 'Python'},
                            {value: 'React Native', label: 'React Native'},
                            {value: 'Java', label: 'Java'},
                            {value: 'Tensorflow', label: 'Tensorflow'},
                           
                        ]}    
                    />
                 <Select 
                        name="" 
                        label="Nível"
                        value={nivel}
                        onChange={(e) => {
                            setNivel(e.target.value)
                        }}options={[
                        { value: 'Junior', label: 'Junior'},
                        {value: 'Pleno', label: 'Pleno'},
                        {value: 'Senior', label: 'Senior'}]}
                        /> 

                    <button onSubmit={searchDev} type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
            
                {users.map((user) => {
                    return <DevItem key={user.id} user={user} />
                })}
            </main>
        </div>
    )
}

export default DevList;