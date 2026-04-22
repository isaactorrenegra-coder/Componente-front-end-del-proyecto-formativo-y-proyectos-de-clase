import React from 'react';
import FormularioRegistro from './components/FormularioRegistro';

/**
 * COMPONENTE: App
 * DESCRIPCIÓN: Componente raíz que renderiza los módulos del sistema.
 */
const App = () => {
    return (
        <div className="app-main">
            <FormularioRegistro />
        </div>
    );
};

export default App;