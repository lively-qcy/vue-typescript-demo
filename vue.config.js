module.exports = {
    devServer:{
        before(app){
            app.get('/api/getFeature',(req,res)=>{
                res.json(['feature1','feature2'])
            });
        }
    }
}