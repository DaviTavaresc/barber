import axios from "axios";

var barbeirosService = {

    getBarbeiro: async()=>{
        var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/barbeiro`);
        //var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/barbeiro`);
        return await barbeirosApi;


    },

    getBarbeiroId: async(id)=>{
        var barbeirosApi = axios.get(`http://10.0.2.2:5000/api/funcionarios/`+id);
        //var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/`+id);
        return await barbeirosApi;


    },
    getBarbeiroByUnidade: async(id)=>{
        var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/unidades/`+id);
        //var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/`+id);
        return await barbeirosApi;
    },
    createFuncionario: async(barbeiro,id)=>{
        try {
            var barbeirosApi = axios.post(`http://127.0.0.1:5000/api/funcionarios`,barbeiro,id);
        //var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/`+id);
        return await barbeirosApi;
        } catch (error) {
            alert(error);
        }
        
    },
    getAllFuncionarios: async() =>{
        try {
            var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios`);
        //var barbeirosApi = axios.get(`http://127.0.0.1:5000/api/funcionarios/`+id);
        return await barbeirosApi;
        } catch (error) {
            alert(error);
        }
    },
    deletefuncionarios: async(id) => {
        var funcionarioAPI = axios.delete(`http://localhost:5000/api/funcionarios/${id}`);
        return await funcionarioAPI;
    
      }, 
    



}

export default barbeirosService;