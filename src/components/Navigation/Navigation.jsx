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
                
                {/* <li><NavLink className={css.link} to='usermenu'>Profile</NavLink></li> */}
            
            </Flex>
        </Box>
    )
}
