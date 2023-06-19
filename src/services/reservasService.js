import axios from "axios";

var reservasService = {

    getReservas: async(id)=>{
        var reservasApi = axios.get(`http://10.0.2.2:5000/api/reservas/cliente/`+id);
        return await reservasApi;
    },

    getHorariosDisponiveis: async(barbeiro,id)=>{
        var reservasApi = axios.get(`http://localhost:5000/api/reservas/horas/`+barbeiro+'/'+id+'/');
        return await reservasApi;
    },
    
    createReserva: async(reserva)=>{


        try {
            var reservasApi = axios.post(`http://127.0.0.1:5000/api/reservas/`, reserva);
            return await reservasApi;
        } catch (error) {
            alert(error)
            console.error(error)
            alert("ESPERA")
        }
        
    }

}

export default reservasService;