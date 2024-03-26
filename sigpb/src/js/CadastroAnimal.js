import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import boiLogo from '../img/nelore.png';

function CadastroAnimal(){
    return(
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between',mb:'50px'}}>
                <Box sx={{fontSize:'22px',ml:'10px'}}>
                    <span style={{color:'#DCDCDC'}}>Cadastro / </span>
                    <span style={{color:'#0CB50C'}}>Animais</span>
                </Box>
                <Box>
                    <Button variant="contained" sx={{bgcolor:'#0CB50C !important',display:'flex',gap:'5px',paddingLeft:'8px',alignItems:'center'}}>
                        <AddIcon sx={{fontSize:'25px !important'}}/>
                        <span style={{fontWeight:'700'}}>NOVO</span> 
                    </Button>
                </Box>
            </Box>

            <Paper sx={{background: '#3C3C3C !important', height: '90%', margin: 'auto'}}>
                <Box sx={{background: '#3C3C3C !important',padding:'15px',borderRadius:'40px 40px 0px 0px !important'}}>
                    <span style={{color:'white',fontWeight:'700',fontSize:'20px',textTransform:'uppercase'}}>Pasto 1</span>
                </Box>
                <Box sx={{background:'#333'}}>
                    <img src={boiLogo} alt="boi Icon" style={{ width: '40px', height: '40px' }} />
                </Box>
        
            </Paper>
        </Box>
    )
}

export default CadastroAnimal;
