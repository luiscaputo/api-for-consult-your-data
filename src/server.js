import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    try{
        const bi = req.body.bi;
        const getInfo = await axios.get(`https://desenvolvimento.gov.ao/dev.api/bi/?bi=${bi}`);
        
        return res
            .status(200)
            .json({
                success: true, 
                data: getInfo.data
            })

    }catch(e){
        return res
            .status(400)
            .json({
                success: false, 
                data: e.message
            })
    }

})


app.listen(8080, () => {
    console.log('server is running')
})