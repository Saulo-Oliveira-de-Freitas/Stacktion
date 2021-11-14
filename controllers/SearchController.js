import {Request, Response} from 'express';
import db from '../models'

export default class ClassesController {
    async index(request, response) {
        const filters = request.query;

        const categoria= filters.categoria ;
        const skills = filters.skills ;
        const nivel = filters.nivel ;

        if (!filters.categoria || !filters.skills || !filters.nivel) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        

        const skills = await db('skills')
            .whereExists(function() {
                this.select('skills.*')
                    .from('skills')
                    .whereRaw('`skills`.`id` = `skills`.`id`')
                    .whereRaw('`skills`.`categoria` == ?', [categoria])
            })
            .where('skills.categoria', '=', categoria)
            .join('devs', 'devskill.devId', '=', 'dev.id')
            .select(['devskill.*', 'devs.*'])

        return response.json(devskill);
    };

    async create(request, response) {
        const {
            nome, 
            bio,
            categoria,
            valor,
            skills
        } = request.body;
    
        const trx = await db.transaction();
    
        try 
        {

            const insertedDevSkill = await trx.insert('devskill').insert({
                devId,
                skillId,
                skillLevel,
            })
            devSkill = insertedDevSkill[0]
            const insertedUsersIds = await trx('devs').insert({
                nome,
                telefone,
                bio,
                valor
            });
        
            const DevId = insertedUsersIds[0];
        
            const insertedSkillIds = await trx('skills').insert({
                subject
                
            });
        


            const skillId = insertedSkillIds[0];
        
            const skillList = devskill.map((skill) => {
                return {
                    id,
                    devId,
                    skillId
                };
            });
        
            await trx('devskill').insert(devskill);
        
            await trx.commit();
        
            return response.status(201).send();
        } catch (e) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new DevCard'
            })
        }
    }
}