import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';



function DevList() {
    const [devs, setDevs] = useState([])

    const [skillName, setSkillName] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nivel, setNivel] = useState('');

    async function searchDev(e) {
        e.preventDefault();

        const response = await api.get('dev', {
            params: {
                categoria,
                skillName,
                nivel
            }
        });

        setDevs(response.data);
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
                            {value: 'Design', label: 'Design'},
                            {value: 'Desenvolvimento Mobile', label: 'Desenvolvimento Mobile'},
                            {value: 'Data Science', label: 'Data Science'},
                            {value: 'Machine Learning', label: 'Machine Learning'}
                          
                        ]}
                    />
                    <Select 
                        name="skill" 
                        label="Skill"
                        value={skillName}
                        onChange={(e) => {
                            setSkillName(e.target.value)
                        }}
                        options={[
                            {value: 'HTML/CSS', label: 'HTML/CSS'},
                            {value: 'Javascript', label: 'Javascript'},
                            {value: 'React', label: 'React'},
                            {value: 'Node.js', label: 'Node.js'},
                            {value: 'C', label: 'C'},
                            {value: 'MYSQL', label: 'MYSQL'},
                            {value: 'PHP', label: 'PHP'},
                            {value: 'SASS', label: 'SASS'},
                            {value: 'PostgreSQL', label: 'PostgreSQL'},
                            {value: 'Angular', label: 'Angular'},
                            {value: 'Python', label: 'Python'},
                            {value: 'React Native', label: 'React Native'},
                            {value: 'Kotlin', label: 'Kotlin'},
                            {value: 'Swift', label: 'Swift'},
                            {value: 'Java', label: 'Java'},
                            {value: 'Express', label: 'Express'},
                            {value: 'Graphql', label: 'Graphql'},
                            {value: 'Adobe illustrator', label: 'Adobe illustrator'},
                            {value: 'Pandas', label: 'Pandas'},
                            {value: 'Photoshop', label: 'Photoshop'},
                            {value: 'Tensorflow', label: 'Tensorflow'},
                            {value: 'typescript', label: 'typescript'},
                            {value: 'Vue.js', label: 'Vue.js'},
                            {value: 'oracle', label: 'oracle'},
                            {value: 'matlab', label: 'matlab'},
                            {value: 'Laravel', label: 'Laravel'},
                        ]}    
                    />
                    <Select 
                        name="" 
                        label="Nível"
                        value={nivel}
                        onChange={(e) => {
                            setNivel(e.target.value)
                        }}options={[
                        { value: '0', label: 'Junior'},
                        {value: '1', label: 'Pleno'},
                        {value: '2', label: 'Senior'}]}
                    />

                    <button  type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {devs.map((dev) => {
                    return <TeacherItem key={dev.id} dev={dev} />
                })}
            </main>
        </div>
    )
}

export default DevList;