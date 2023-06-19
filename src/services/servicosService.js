import axios from "axios";

var servicosService = {

    getServico: async()=>{
        //var servicosApi = axios.get(`http://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.get(`http://127.0.0.1:5000/api/servicos/`);
        
        return await servicosApi;
    },

    createServico: async(servico)=>{
        //var servicosApi = axios.get(`http://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.post(`http://127.0.0.1:5000/api/servicos/`, servico);
        
        return await servicosApi;
    },

    // método para validar o login do usuário
    deleteServico: async (user) => {
      console.log(user)
      var servicoAPI = axios.delete(`http://127.0.0.1:5000/api/servicos/`+user);
      return await servicoAPI;
    }, 
    getServicoById: async(id)=>{
        //var servicosApi = axios.get(`http://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.put(`http://127.0.0.1:5000/api/servicos/`+id);
        
        return await servicosApi;
    },
    updateServico: async(id,servico)=>{
        //var servicosApi = axios.get(`http://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.put(`http://127.0.0.1:5000/api/servicos/`+id, servico);
        
        return await servicosApi;
    },
    

    



}

export default servicosService;