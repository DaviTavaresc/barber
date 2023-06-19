import axios from 'axios';


var usuarioService = {
  
  // método para cadastrar um usuário
  postUsuario: async (Cadastro) => {
    var usuarioAPI = axios.post(`http://127.0.0.1:5000/users/cadastrar/`,Cadastro);
    return await usuarioAPI;
  },

  // método para validar o login do usuário
  loginUsuario: async (user) => {
    console.log(user)
    var usuarioAPI = axios.post(`http://10.0.2.2:5000/users/login`, user);
    return await usuarioAPI;
  },

  // método para validar o login do usuário
  deleteUsuario: async (user) => {
    console.log(user)
    var usuarioAPI = axios.delete(`http://127.0.0.1:5000/users/deletar/`+user);
    return await usuarioAPI;
  },
  getAllUsuarios: async () => {
    var usuarioAPI = axios.get(`http://127.0.0.1:5000/users/`);
    return await usuarioAPI;
  },
  updateUsuario: async (id,user) => {
    var usuarioAPI = axios.put(`http://127.0.0.1:5000/users/atualizar/`+id,user);
    return await usuarioAPI;

  }
}

export default usuarioService;