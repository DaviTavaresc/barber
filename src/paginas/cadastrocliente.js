import React, {useState, useEffect} from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import clientesService from '../services/clienteService';

import './styles.css';
import Logo from '../imgs/logo preta.png';
import usuarioService from '../services/usuarioService';


function Cadastro() {

  const { id } = useParams();
  const [cliente, setFormData] = useState({});
  const history = useNavigate();

  useEffect(() => {

    async function fetchFormData () {
    
    try {        
      //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
      const response = await clientesService.getClienteById(id)
      console.log(response.data)
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchFormData();
  },[id]); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      alert("AAAAAAAA")
      //const id = event.target._id.value;
      if (event.nativeEvent.submitter.name === "salvar") {

        if (event.nativeEvent.submitter.name === "salvar") {
          //alert(id);
          if (id === ":id") {
            try {
              const usuario = {
                nome: cliente.nome,
                email: cliente.email,
                tel: cliente.telefone,
                senha: cliente.nome+"@12355",
                role: "cliente",
              };
              const user = await usuarioService.postUsuario(usuario);
              try {
                cliente._id = user.data;
                alert(cliente._id)
                alert(cliente.nome)
                alert(cliente.email)
                alert(cliente.telefone)
                await clientesService.postClientes(cliente);
                alert('Inserido com Sucesso!');
              } catch (error) {
                console.error(error);
              }
            } catch (error) {
              console.error(error);
            }
          }
          else {
            const usuario = {
              nome: cliente.nome,
              email: cliente.email,
              tel: cliente.telefone,              
            };
            await usuarioService.updateUsuario(id,usuario);
            await clientesService.updateClientes(id,cliente);
            alert('alterado com sucesso!');
         }
        }
        
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...cliente, [name]: value });
  };





  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar Cliente</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome</p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: José Medeiros " value={cliente.nome} onChange={handleChange}/>

            <p className="tituloInput">E-mail</p>
            <input className="Input" type="text" name="email" id="email" placeholder="ex: JoséMedeiros@gmail.com" value={cliente.email} onChange={handleChange}/>

            <p className="tituloInput">Celular</p>
            <input className="Input" type="text" name="telefone" id="telefone" placeholder="ex: 92 9999-99999" value={cliente.tel} onChange={handleChange} />
            <input className="confirmaCadastro" type="submit" value="Cadastrar" name='salvar' />

          </form>

        </div>
      </div>
    </div>
  );
}

export default Cadastro;
