import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CadastroUsuario(){
    return(
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{fontSize:'22px',ml:'10px'}}>
                <span style={{color:'white'}}>Cadastro / </span>
                <span style={{color:'#0CB50C'}}>Usuários</span>
            </Box>
            <Box>
                <Button variant="contained" sx={{bgcolor:'#0CB50C !important',display:'flex',gap:'5px',paddingLeft:'8px',alignItems:'center'}}>
                    <AddIcon sx={{fontSize:'25px !important'}}/>
                    <span style={{fontWeight:'700'}}>NOVO</span> 
                </Button>
            </Box>
        </Box>
    )
}

export default CadastroUsuario;