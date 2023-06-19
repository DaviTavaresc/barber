import React, { useState, useEffect } from 'react';
import './styles.css';
import Logo from '../imgs/logo preta.png';
import unidadesService from '../services/unidadesService';
import barbeirosService from '../services/barbeirosService';
import usuarioService from '../services/usuarioService';
function Cadastrofunci() {

  const [formData,setFormData] = useState([])
  const [selectedUnidade, setSelectedUnidade] = useState('');
  const [funcionario,setFuncionario] = useState({funcao:"RECEPCIONISTA"});

  useEffect(() => {



    



    async function fetchUnidades() {
      try {
        const unidades = await unidadesService.getUnidades();
        setFormData(unidades.data);
        if (unidades.data.length > 0) {
         
          if(formData.unidade == undefined){
            funcionario.unidade = formData[0]._id

          }
          
        }
       // const response = await reservasService.getHorariosDisponiveis();
       //setHora(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUnidades();

   
    


  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFuncionario({ ...funcionario, [name]: value });
  };




console.log(funcionario)




const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent form submission behavior

  try {
    // Form submission logic
    const usuario = {
      nome: funcionario.nome,
      email: funcionario.email,
      senha: funcionario.nome+"@123",
      role: "funcionario",
    };

    const user = await usuarioService.postUsuario(usuario);
    funcionario._id = user.data;
    await barbeirosService.createFuncionario(funcionario);

    alert("funcionario criado");
    alert("funcionario criado");
    alert("funcionario criado");
    alert("funcionario criado");
  } catch (error) {
    console.error(error);
  }
};









  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar Funcionário</h1>

      
          <form className="areaInputt" onSubmit={handleSubmit}>
          <div className='primeiradiv'>
          <p className="tituloInput">Nome</p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: José " onChange={handleChange}/>

            <p className="tituloInput">E-mail</p>
            <input className="Input" type="text" name="email" id="email" placeholder="ex:  Jose@gmail.com" onChange={handleChange}/>

            <p className="tituloInput">CPF</p>
            <input className="Input" type="text" name="cpf" id="cpf" placeholder="ex: 706.846.826-70" onChange={handleChange}/>

            <p className="tituloInput">CEP</p>
            <input className="Input" type="text" name="cep" id="cep" placeholder="ex: 69084-418" onChange={handleChange} />

            <p className="tituloInput">Função</p>
            <select className='Input' name='funcao' onChange={handleChange} defaultValue="RECEPCIONISTA">
              <option>RECEPCIONISTA</option>
              <option>BARBEIRO</option>
              <option>ZELADOR</option>
            </select>
            {/*<input className="Input" type="text" name="funcao" id="funcao" placeholder="ex: Barbeiro" />*/}
            <p className="tituloInput">Celular</p>
            <input className="Input" type="text" name="telefone" id="telefone" placeholder="ex: (92) 9999-99999" onChange={handleChange} />
            </div>
         
          <div className='segundadiv'>
          <p className="tituloInput">Unidade</p>
          <select className='Input' value={formData.unidade} onChange={handleChange} name='unidade'>
                {
                  formData.map((unidades,index)=>{
                    return(
                      <option className='cor'  key={index} value={unidades._id}>{unidades.unidade}</option>
                    )
                  })

                }
              </select>

            {/*<input className="Input" type="text" name="unidade" id="unidade" placeholder="ex: Centro" />*/}

            <p className="tituloInput">Imagem</p>
            <input className="Input" type="text" name="imagem" id="imagem" placeholder="ex: ......" onChange={handleChange}/>

            <p className="tituloInput">Descrição</p>
            <input className="Input" type="text" name="descricao" id="descricao" placeholder="ex: Especialista em..." onChange={handleChange} />

            <p className="tituloInput">Facebook</p>
            <input className="Input" type="text" name="face" id="face" placeholder="ex: Jose Medeiros" onChange={handleChange}/>


            <p className="tituloInput">Twitter</p>
            <input className="Input" type="text" name="twitter" id="twitter" placeholder="ex: @jose" onChange={handleChange}/>

            <p className="tituloInput">Instagram</p>
            <input className="Input" type="text" name="instagram" id="instagram" placeholder="ex: @jose_" onChange={handleChange}/>

            <input className="confirmaCadastro" type="submit" value="Cadastrar" name='salvar' />
          </div>
        
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default Cadastrofunci;
