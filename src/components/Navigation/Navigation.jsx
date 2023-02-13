import { Link } from "react-router-dom";
import { Button, Flex, Box, Spacer, ButtonGroup, BreadcrumbLink, Breadcrumb } from '@chakra-ui/react';
import { useAuth } from "hooks/useAuth";


export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box width="100%" height='70px' p='3' mb={4} mt={2} borderBottom='2px' borderColor='gray.200' boxShadow='base'>
            <Flex  alignItems='center'  gap='2'>
                
                <Breadcrumb fontWeight='medium' fontSize={20} >
                    <ButtonGroup gap='2' >
                        <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>

                        {isLoggedIn && (
                            <BreadcrumbLink as={Link} to='phonebook'>Phonebook</BreadcrumbLink>
                        )}
                    </ButtonGroup>
                </Breadcrumb>
                
                    
                <Spacer />

                <Breadcrumb>
                    <ButtonGroup gap='2' variant='solid' fontSize={18} color='white'>
                        
                        { isLoggedIn === false && (
                            <BreadcrumbLink as={Link} to='register'>
                            <Button colorScheme='teal' type="submit" >
                                Registred</Button></BreadcrumbLink>
                        )}
                        
                        { isLoggedIn === false && (
                            <BreadcrumbLink as={Link} to='login'>
                            <Button colorScheme='teal' type="submit">
                                LogIn</Button></BreadcrumbLink>
                        )}
                        
                        
                        { isLoggedIn === true && (
                            <BreadcrumbLink as={Link} to='usermenu'>
                            <Button colorScheme='teal' variant='outline' type="submit">
                                Profile</Button></BreadcrumbLink>
                        )}
                        
                        
                    </ButtonGroup>
                </Breadcrumb>
                
                {/* <li><NavLink className={css.link} to='usermenu'>Profile</NavLink></li> */}
            
            </Flex>
        </Box>
    )
}
