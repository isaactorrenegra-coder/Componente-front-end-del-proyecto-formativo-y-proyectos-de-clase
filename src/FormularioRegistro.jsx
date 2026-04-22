import React, { useState } from 'react';

/**
 * COMPONENTE: FormularioRegistro
 * DESCRIPCIÓN: Módulo para capturar los datos de nuevos usuarios.
 * REQUERIMIENTO: Basado en las Historias de Usuario de gestión de acceso.
 * ESTÁNDAR: Uso de Hooks (useState), variables descriptivas y camelCase.
 */
const FormularioRegistro = () => {
    // 1. Definición del estado inicial del formulario
    const [datosUsuario, setDatosUsuario] = useState({
        nombreCompleto: '',
        correoElectronico: '',
        password: ''
    });

    // 2. Función para manejar los cambios en los inputs de texto
    const manejarCambioInput = (evento) => {
        setDatosUsuario({
            ...datosUsuario,
            [evento.target.name]: evento.target.value
        });
    };

    // 3. Función para procesar y enviar el formulario
    const procesarFormulario = (evento) => {
        evento.preventDefault(); // Evita que la página se recargue
        
        // Aquí iría la conexión con el backend o la API
        console.log("Datos capturados del nuevo usuario:", datosUsuario);
        alert("¡Registro validado exitosamente en el módulo front-end!");
    };

    return (
        <div className="registro-container">
            <h2>Crear Cuenta</h2>
            <form onSubmit={procesarFormulario}>
                <div className="form-group">
                    <label>Nombre Completo:</label>
                    <input 
                        type="text" 
                        name="nombreCompleto" 
                        placeholder="Ej. Juan Pérez"
                        onChange={manejarCambioInput} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico:</label>
                    <input 
                        type="email" 
                        name="correoElectronico" 
                        placeholder="usuario@correo.com"
                        onChange={manejarCambioInput} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="********"
                        onChange={manejarCambioInput} 
                        required 
                    />
                </div>
                <button type="submit" className="btn-primary">Registrar Usuario</button>
            </form>
        </div>
    );
};

export default FormularioRegistro;