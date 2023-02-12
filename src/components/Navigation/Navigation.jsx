import { NavLink } from "react-router-dom";
// import css from '../Navigation/Navigation.module.css';
import { Button, Heading, Flex, Box, Spacer,ButtonGroup } from '@chakra-ui/react';


export const Navigation = () => {
    return (
        <Box width="100%" height='80px' p='3' mb={4} borderBottom='2px' borderColor='gray.200' boxShadow='lg'>
            <Flex  alignItems='center' gap='2'>
                
                    {/* <Box p='2' fontSize={22}  _hover={{color: "teal",}}>
                        <NavLink to='/'>Home</NavLink>
                    </Box>
                    <Box p='2' fontSize={22} _hover={{color: "teal",}}>
                        <NavLink to='phonebook'>Phonebook</NavLink>  
                    </Box> */}
                <ButtonGroup gap='2' fontSize={22} >
                    <Heading _hover={{color: "teal",}}><NavLink to='/'>Home</NavLink></Heading>
                    <Heading _hover={{color: "teal",}}><NavLink to='phonebook'>Phonebook</NavLink> </Heading>
                </ButtonGroup>
                    
                <Spacer />
                
                <ButtonGroup gap='2' fontSize={18} color='white'>
                    <Button p='2' boxShadow='lg' rounded='md' bg='teal'
                        _hover={{background: "#55AAAA", color: "#0f0f0f",}}>
                        <NavLink to='register'>Registred</NavLink></Button>
                    <Button p='2' boxShadow='lg' rounded='md' bg='teal'
                        _hover={{background: "#55AAAA", color: "#0f0f0f",}}>
                        <NavLink to='login'>LogIn</NavLink></Button>
                </ButtonGroup>
                
                {/* <li><NavLink className={css.link} to='usermenu'>Profile</NavLink></li> */}
            
            </Flex>
        </Box>
    )
}



//  <nav>
//             <li><NavLink className={css.link} to='/'>Home</NavLink></li>
//             <li><NavLink className={css.link} to='phonebook'>Phonebook</NavLink></li>

//             <li><NavLink className={css.link} to='register'>Registred</NavLink></li>
//             <li><NavLink className={css.link} to='login'>Login</NavLink></li>

//             <li><NavLink className={css.link} to='usermenu'>Profile</NavLink></li>
//         </nav> 