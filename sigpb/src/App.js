import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import user from './img/user.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import './App.css';

import Dashboard from './js/Dashboard';
import CadastroAnimal from './js/CadastroAnimal';
import CadastroUsuario from './js/CadastroUsuario';
import Relatorio from './js/Relatorio';
import Historico from './js/Historico';
import Configuracao from './js/Configuracao';
import Login from './js/Login'; 


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showCadastroOptions, setShowCadastroOptions] = useState(false); // Estado para controlar a exibição das opções de cadastro

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCadastroOptions = () => {
    setShowCadastroOptions(!showCadastroOptions);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {isAuthenticated && ( // Renderiza AppBar e Drawer somente se o usuário estiver autenticado
          <>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#0DA51C', height: '50px' }}
        >
          <Toolbar sx={{ height: '50px', minHeight: '50px !important' }}>
            <Typography variant="h6" noWrap component="div" sx={{
              height: '50px !important',
              minHeight: '50px !important',
              fontSize: '35px',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ color: '#06350D' }}>SI</span>G<span style={{ color: '#06350D' }}>PB</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={isDrawerOpen}
          onClick={toggleDrawer}
          sx={{
            width: 220,
            flexShrink: 0,
            bgcolor: '#333333',
            '& .MuiDrawer-paper': {
              width: 220,
              boxSizing: 'border-box',
              bgcolor: '#333333',
            },
          }}
        >
          <Toolbar  Toolbar sx={{ justifyContent: 'center', bgcolor: '#333333', height: '90px', flexDirection: 'column', paddingLeft: '5px !important', paddingRight: '5px !important',marginTop:'50px'}}>
            <Button id="menu-user" onClick={handleMenuClick} sx={{ color: 'white', display: 'flex', gap: 1, justifyContent: 'center',textTransform: 'capitalize !important',maxWidth:'206px' }} className={isDrawerOpen ? 'drawer drawer-open' : 'drawer'} >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={user} alt="user Icon" style={{ width: '40px', height: '40px' }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '120px' }}>
                <Typography variant="subtitle1" sx={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif !important', height: '22px' }}>Marcus Vinicius</Typography>
                <Typography variant="body2" sx={{ color: '#0CB50C', fontSize: '13px', fontWeight: 700, fontFamily: 'Inter, sans-serif !important' }}>Administrador</Typography>
              </Box>
              <ExpandMoreIcon sx={{ color: 'white' }} />
            </Button>
            <Menu
              id="menu-account"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              sx={{ minWidth: '210px !important', marginRight:'50px', left:'-10px',top:'5px',  borderRadius: '19px !important',padding:'7px !important'
            }}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem className='menuitem' sx={{display:'flex', alignItems:'center', minWidth: '192px',marginLeft:'7px',marginRight:'7px',mb:'3px'}} onClick={handleMenuClose}>
                <EditIcon sx={{ width: '24px', height: '23px',color:'white',font:700,marginRight:'5px' }} />
                <span>Minha Conta</span>
              </MenuItem>
              <MenuItem className='menuitem' sx={{display:'flex', alignItems:'center', minWidth: '192px ',marginLeft:'7px',marginRight:'7px'}} onClick={handleMenuClose}>               
                <LogoutIcon sx={{ width: '24px', height: '23px',color:'white',font:700,marginRight:'5px' }} />
                <span>Sair</span>
              </MenuItem>
            </Menu>
          </Toolbar>
          
          <Divider  sx={{margin: '0px 7px !important', borderTop: '1px solid #8f8f8f4d !important'}} // Linha Divisoria 
          /> 

          <List sx={{ color: 'white' }}>
          {[
            { text: 'Dashboard', path: '/' },
            { text: 'Cadastro', onClick: toggleCadastroOptions, subItems: [ 
              { text: 'Usuário', path: '/cadastro/usuario' },
              { text: 'Animal', path: '/cadastro/animal'},
            ]},
            { text: 'Configuração', path: '/configuracao' },
            { text: 'Histórico', path: '/historico' },
            { text: 'Relatório', path: '/relatorio' }
          ].map
            ((item, index) => (        
              <React.Fragment key={item.text}>
                <ListItem button key={item.text} component={item.onClick ? 'div' : Link} to={item.path} onClick={item.onClick} sx={{}}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {item.subItems && (
                    <ExpandMoreIcon sx={{ color: 'white' }} />
                  )}
                </ListItem>
                {item.subItems && showCadastroOptions && (
                  <List>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem button key={subItem.text} component={Link} to={subItem.path} sx={{ paddingLeft: '30px' }} onClick={() => setIsDrawerOpen(false)}>
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider />
        </Drawer>
        </>)}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: '#1E1E1E', p: 3,marginTop:'50px', height:'666px', boxSizing:'border-box' }}
          > 
        
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
                <Route path="/cadastro/animal" element={<CadastroAnimal />} />
                <Route path="/configuracao" element={<Configuracao />} />
                <Route path="/relatorio" element={<Relatorio />} />
                <Route path="/historico" element={<Historico />} />
                <Route to="/dashboard" /> {/* Redirecionamento para a Dashboard após o login */}
              </>
            ) : (
              <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> // Rota para a página de login
            )}
          </Routes>

        </Box>
      </Box>
    </Router>
  );
}

export default App;
