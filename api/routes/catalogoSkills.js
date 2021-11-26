const { Router } = require('express');
const SkillsControl = require('../controllers/SkillsControl.js');

const router = Router();

router.get('/catalogoskill/', SkillsControl.selectAllSkills);

router.get('/catalogoskill/:skill', SkillsControl.selectOneSkills);

router.post('/catalogoskill/', SkillsControl.addSkills);

router.patch('/catalogoskill/:skill', SkillsControl.updateSkills);

router.delete('/catalogoskill/:skill', SkillsControl.deleteSkills);





module.exports = router