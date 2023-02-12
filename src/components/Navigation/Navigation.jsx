import { Link } from "react-router-dom";
import { Button, Flex, Box, Spacer, ButtonGroup, BreadcrumbLink, Breadcrumb } from '@chakra-ui/react';


export const Navigation = () => {
    return (
        <Box width="100%" height='80px' p='3' mb={4} borderBottom='2px' borderColor='gray.200' boxShadow='lg'>
            <Flex  alignItems='center' gap='2'>
                
                <Breadcrumb fontWeight='medium' fontSize={20} >
                    <ButtonGroup gap='2' >
                        <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                        <BreadcrumbLink as={Link} to='phonebook'>Phonebook</BreadcrumbLink>
                    </ButtonGroup>
                </Breadcrumb>
                
                    
                <Spacer />

                <Breadcrumb>
                    <ButtonGroup gap='2' variant='solid' fontSize={18} color='white'>
                        <BreadcrumbLink as={Link} to='register'>
                            <Button colorScheme='teal' type="submit" >
                                Registred</Button></BreadcrumbLink>

                        <BreadcrumbLink as={Link} to='login'>
                            <Button colorScheme='teal' type="submit">
                                LogIn</Button></BreadcrumbLink>
                    </ButtonGroup>
                </Breadcrumb>
                
                {/* <ButtonGroup gap='2' fontSize={18} color='white'>
                    <Button p='2' boxShadow='lg' rounded='md' bg='teal'
                        _hover={{background: "#55AAAA", color: "#0f0f0f",}}>
                        <NavLink to='register'>Registred</NavLink></Button>
                    <Button p='2' boxShadow='lg' rounded='md' bg='teal'
                        _hover={{background: "#55AAAA", color: "#0f0f0f",}}>
                        <NavLink to='login'>LogIn</NavLink></Button>
                </ButtonGroup> */}
                
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