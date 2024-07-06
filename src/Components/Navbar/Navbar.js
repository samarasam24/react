// import './Navbar.css'
// export function Navbar() { 
//     return(
//         <>
//         <nav className="navbar navbar-expand-md bg-white shadow mb-5 text-white px-lg-5 position-fixed top-0 w-100">
//             <h5 className='text-secondary ps-4'>React</h5>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//              <i className='ms-auto  d-md-none bx bx-menu text-dark fs-2 '></i>
//             </button>
//             <div className="collapse navbar-collapse" id='navbarSupportedContent'>
//             <ul className="navbar-nav ms-auto ps-4">
//                 <li className="nav-item  text-secondary pt-2 pe-2  position-relative me-2 " id="useState"  >
//                    UseState 
//                    <ul 
//                     className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
//                     id='useStateul'>
//                         <li className="nav-item border-bottom px-0 ps-1">
//                         <a className="nav-link text-secondary px-0" href="/form">With-API</a>
//                         </li>
//                         <li className="nav-item px-0 ps-1">
//                         <a className="nav-link text-secondary px-0" href="/non-api-form">Without-API</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="nav-item text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
//                     UseReducer
//                     <ul 
//                     className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
//                     id='useReducerul'>
//                         <li className="nav-item border-bottom px-0 ps-1">
//                         <a className="nav-link text-secondary px-0 " href="/usereducer/api-form">With-API</a>
//                         </li>
//                         <li className="nav-item px-0 ps-1">
//                         <a className="nav-link text-secondary px-0" href="/usereducer/non-api-form">Without-API</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="nav-item  text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
//                     UseContext
//                     <ul 
//                     className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
//                     id='useReducerul'>
//                         <li className="nav-item border-bottom px-0 ps-1">
//                         <a className="nav-link text-secondary px-0 " href="/">With-API</a>
//                         </li>
//                         <li className="nav-item px-0 ps-1">
//                         <a className="nav-link text-secondary px-0" href="/">Without-API</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="nav-item  text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
//                     UseFormik
//                     <ul 
//                     className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
//                     id='useReducerul'>
//                         <li className="nav-item border-bottom px-0 ps-1">
//                         <a className="nav-link text-secondary px-0 " href="/useformik/form">UseFormik</a>
//                         </li>
//                         <li className="nav-item px-0 ps-1">
//                         <a className="nav-link text-secondary px-0" href="/useformik/reducer-form">Formik-Reducer</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="nav-item  text-secondary pt-2 pe-2     position-relative me-2" id="redux">
//                     Redux
//                     <ul 
//                     className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
//                     id='reduxul'>
//                         <li className="nav-item border-bottom px-0 ps-1">
//                         <a className="nav-link text-secondary px-0 " href="/useformik/form">AuthN & AuthR</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="nav-item position-relative me-2" id="login">
//                    <a id='loginlink' className='nav-link p-2 pt-1 pe-1 ps-1 text-center col-2 col-md-auto mt-1 bg-primary rounded text-white' href='/auth/register'>Register</a>
//                 </li>



//             </ul>
//             </div>
//         </nav>
//         </>
//     );
// };


import { AppBar,Box,Button,IconButton,Menu,MenuItem,Toolbar,Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
export  function Navbar() {
    const navContents = [
        { Names:'UseState',path:'/',types:[ 'Api-Form',  'aaaaApi-Form']},
        { Names:'UseReducer',path:'/',types:['Api-Form','Apqai-Form']},
        { Names:'UseFormik',path:'/',types:['Api-Form','Api-Form']},
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [showThis,setShowThis] = useState(null);
    const handleClick = (event,na) => {
      setAnchorEl(event.currentTarget);
      setShowThis(na);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <AppBar color="" >
            <Toolbar>
                <FaReact fontSize={20}/>
                <Typography sx={{paddingLeft:{xs:0.5},flexGrow:{xs:1,sm:0}}} fontSize={20}>React</Typography>
                <IconButton 
                    edge='end' 
                    
                >
                    <MenuIcon 
                       sx={{
                       display:{xs:'block',sm:'none'},
                       
                    }}
                    />
                 </IconButton>
                 <Box sx={{ flexGrow: 1,display:{sm:'block',xs:'none'} }} />
                  <Box sx={{display:{sm:'block',xs:'none'}}}>
                    {
                        navContents.map(value =>{
                            return(
                                <>
                                  <Button
                                    id="drop-menu"
                                    aria-controls={open ? 'drop-list' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(e)=>handleClick(e,value.Names)}
                                  >
                                    {value.Names}
                                  </Button>
                                  <Menu
                                      id="drop-list"
                                      anchorEl={anchorEl}
                                      open={open}
                                      onClose={handleClose}
                                      MenuListProps={{
                                        'aria-labelledby': 'drop-menu',
                                      }}
                                   >
                                    {console.log(value.Names)}
                                    {console.log(value.types)}
                                    { 
                                      open &&  value?.types.filter( val =>  val === showThis && <MenuItem>{val}</MenuItem> )
                                    }
                                    {/* <MenuItem>{value.types?.api}</MenuItem>
                                    <MenuItem>{value.types?.nonapi}</MenuItem> */}
                                  </Menu>
                                </>
                            )
                        })
                    } 
                  </Box> 
            </Toolbar>  
          
        </AppBar>
    );
};

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import { FaReact } from "react-icons/fa";

// const pages = {
//   UseState: ['Api', 'NoN-Api'],
//   About: ['About 1', 'About 2'],
//   Contact: ['Contact 1', 'Contact 2'],
//   Details: ['Details 1', 'Details 2']
// };

// export function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElMenu, setAnchorElMenu] = React.useState({});

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenMenu = (event, menu) => {
//     setAnchorElMenu({ ...anchorElMenu, [menu]: event.currentTarget });
//   };

//   const handleCloseMenu = (menu) => {
//     setAnchorElMenu({ ...anchorElMenu, [menu]: null });
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
        
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' },alignItems:'center' }}
//           >
//             <FaReact/> React
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {Object.keys(pages).map((page) => (
//                 <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             <FaReact/>
//              React
//           </Typography>
//           <Box sx={{  display: { xs: 'none', md: 'flex' }, flexGrow:1 }}/>
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
//             {Object.keys(pages).map((page) => (
//               <Box key={page}>
//                 <Button
//                   onClick={(e) => handleOpenMenu(e, page)}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//                 <Menu 
//                   sx={{mt:4}}
//                   anchorEl={anchorElMenu[page]}
//                   open={Boolean(anchorElMenu[page])}
//                   onClose={() => handleCloseMenu(page)}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}
//                 >
                   
//                   {pages[page].map((subPage) => {
//                     console.log(subPage)
//                     return(
//                         <MenuItem  key={subPage} onClick={() => handleCloseMenu(page)}>
//                            {subPage}
//                         </MenuItem>
//                     )
//                   })}
//                 </Menu>
//               </Box>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

