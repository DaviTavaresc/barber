import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../imgs/logo preta.png';

function CadastroUser() {
    
    const [cliente, setFormData] = useState({});
    const history = useNavigate();
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        alert("AAAAAAAA")
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          //alert(id);
          //if (id === ":id") {
              //await axios.post('http://localhost:5000/api/clientes/',cliente );
              //await clientesService.createClientes(cliente);
              alert('incluido com sucesso!'); 
          //}
          //else {
              //await axios.put(`http://localhost:5000/api/clientes/${id}`,cliente);
            //  await clientesService.updateClientes(id, cliente)
            //  alert('alterado com sucesso!');
         // }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
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
          <h1 className="tituloCadastro">Cadastrar User</h1>

          <form className="areaInput">
            <p className="tituloInput">Nome </p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: Unidade Leste " />

            <p className="tituloInput">E-mail</p>
            <input className="Input" type="text" name="email" id="localizacao" placeholder="ex: Av. Paulista, 550" />
  
            <p className="tituloInput">Senha</p>
            <option>
                <select>CLIENTE</select>
                <select>FUNCIONARIO</select>
                <select>ADMIN</select>
            </option>


            <p className="tituloInput">Senha</p>
            <input className="Input" type="text" name="senha" id="imagem" placeholder="ex: ...." />

        
          </form>

          <input className="confirmaCadastro" type="button" value="Cadastrar" />
        </div>
      </div>
    </div>
  );
}

export default CadastroUser;