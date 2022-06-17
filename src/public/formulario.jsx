import React, { useState } from "react";
import "../styles.css";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputApellido, cambiarInputApellido] = useState("");
  const [inputCedula, cambiarInputCedula] = useState("");
  const [inputEdad, cambiarInputEdad] = useState("");
  const [inputCelular, cambiarInputCelular] = useState("");
  const [inputBarrio, cambiarInputBarrio] = useState("");
  const [inputEmpresa, cambiarInputEmpresa] = useState("");
  const [inputCiudad, cambiarInputCiudad] = useState("");
  const [inputProfesion, cambiarInputProfesion] = useState("");

  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // Funcion que se encarga de cambiar el estado del inputCorreo
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputApellido
  const handleInputApellido = (e) => {
    cambiarInputApellido(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputCedula
  const handleInputCedula = (e) => {
    cambiarInputCedula(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputEdad
  const handleInputEdad = (e) => {
    cambiarInputEdad(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputCelular
  const handleInputCelular = (e) => {
    cambiarInputCelular(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputBarrio
  const handleInputBarrio = (e) => {
    cambiarInputBarrio(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputEmpresa
  const handleInputEmpresa = (e) => {
    cambiarInputEmpresa(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputCiudad
  const handleInputCiudad = (e) => {
    cambiarInputCiudad(e.target.value);
  };

  //Función que se encarga de cambiar el estado del InputProfesion
  const handleInputProfesion = (e) => {
    cambiarInputProfesion(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            id="apellido"
            value={inputApellido}
            onChange={handleInputApellido}
          />
        </div>

        <div>
          <label htmlFor="cedula">CI</label>
          <input
            type="number"
            name="cedula"
            placeholder="Cedula de identidad"
            id="cedula"
            value={inputCedula}
            onChange={handleInputCedula}
          />
        </div>

        <div>
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            id="edad"
            value={inputEdad}
            onChange={handleInputEdad}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputCorreo}
            onChange={handleInputCorreo}
          />
        </div>

        <div>
          <label htmlFor="celular">Celular</label>
          <input
            type="number"
            name="celular"
            placeholder="Celular"
            id="celular"
            value={inputCelular}
            onChange={handleInputCelular}
          />
        </div>

        <div>
          <label htmlFor="barrio">Barrio</label>
          <input
            type="text"
            name="barrio"
            placeholder="Barrio"
            id="barrio"
            value={inputBarrio}
            onChange={handleInputBarrio}
          />
        </div>

        <div>
          <label htmlFor="ciudad">Ciudad</label>
          {
            <select
              name="ciudad"
              id="ciudad"
              value={inputCiudad}
              onChange={handleInputCiudad}
            >
              <option>Montevideo</option>
              <option>Cerro Largo</option>
              <option>Rivera</option>
              <option>Maldonado</option>
              <option>San Jose</option>
              <option>Colonia</option>
              <option>Artigas</option>
              <option>Durazno</option>
              <option>Río Negro</option>
              <option>Paysandu</option>
              <option>Salto</option>
              <option>Flores</option>
              <option>FLorida</option>
              <option>Treinta y Tres</option>
              <option>Lavalleja</option>
              <option>Rocha</option>
              <option>Tacuarembo</option>
              <option>Soriano</option>
              <option>Canelones</option>
            </select>
          }
        </div>

        <div>
          <label htmlFor="profesion">Profesión</label>
          {
            <select
              name="profesion"
              id="profesion"
              value={inputProfesion}
              onChange={handleInputProfesion}
            >
              <option>Ingeniero</option>
              <option>Diseñador</option>
              <option>Programador Web</option>
              <option>Analista</option>
            </select>
          }
        </div>

        <div>
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            name="empresa"
            placeholder="Empresa en la que trabajas"
            id="empresa"
            value={inputEmpresa}
            onChange={handleInputEmpresa}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
