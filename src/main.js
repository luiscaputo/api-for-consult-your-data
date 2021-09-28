// import axios from "axios";
const axios = require('axios')

class API{
    static async getInfo(bi){
        const response = await axios.get(`https://desenvolvimento.gov.ao/dev.api/bi/?bi=${bi}`);
        console.log(response)
    }
}

API.getInfo('006989589LA042');