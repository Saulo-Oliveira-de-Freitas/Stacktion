
module.exports = app => {
    app.get('/catalogo', (req,res)=> res.send('rota de catalogo'))
    
    app.post('/catalogo',(req,res) =>{
        console.log(req.body);
        res.send(' post rota de catalogo');
    })
}