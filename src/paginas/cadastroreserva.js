import React from 'react';
import './styles.css';
import Logo from '../imgs/logo preta.png';

function CadastroReserva() {
  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar reserva</h1>

          <form className="areaInput">
            
          <p className="tituloInput">Numero da Reserva</p>
            <input className="Input" type="text" name="numero" id="numero" placeholder="ex: 1" />
            
            <p className="tituloInput">data</p>
            <input className="Input" type="date" name="data" id="data" placeholder="" />

            <p className="tituloInput">Hora</p>
            <input className="Input" type="time" name="hora" id="hora" placeholder=" ex: 12:00"/> 

            <p className="tituloInput">Cliente</p>
            <input className="Input" type="text" name="cliente" id="cliente" placeholder="ex: José Medeiros" />

            <p className="tituloInput">Corte</p>
            <input className="Input" type="text" name="Corte" id="Corte" placeholder="ex: Combo" />

            <p className="tituloInput">Barbeiro</p>
            <input className="Input" type="text" name="barbeiro" id="barbeiro" placeholder="ex: Lucas Silva" />

            <p className="tituloInput">Valor Total</p>
            <input className="Input" type="text" name="valortotal" id="valortotal" placeholder="ex: 35" />
          
            <p className="tituloInput">Unidade</p>
            <input className="Input" type="text" name="unidade" id="unidade" placeholder="ex: zona leste" />
          
            <p className="tituloInput">Status</p>
            <input className="Input" type="text" name="status" id="status" placeholder="ex: concluido" />
          
          </form>

          <input className="confirmaCadastro" type="button" value="Cadastrar" />
        </div>
      </div>
    </div>
  );
}

export default CadastroReserva;