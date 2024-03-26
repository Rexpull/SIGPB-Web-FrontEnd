import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Login({ setIsAuthenticated }){
    const handleLogin = () => {
        // Lógica de autenticação aqui
        setIsAuthenticated(true); // Define o usuário como autenticado
      };

      
    return(
        <div>
            <h2>Login</h2>
        <Button variant="contained" onClick={handleLogin}>Entrar</Button>
      </div>
    )
}

export default Login;