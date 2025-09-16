import React from 'react';
import { Box, Flex, HStack, Link, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeButton } from './ui/color-mode';
import Resume from '../assets/resume.pdf'

const Navbar = () => {

  
  const linkStyles = {
    as: RouterLink,
    _focus: { boxShadow: 'none', outline: 'none' },
    _hover: { textDecoration: 'none' },
    px: 2,
    py: 1,
    rounded: 'md',
  };

  return (
    <Box position="relative" id="navbar">
      <Flex justify="center" align="center" p={4} position="relative">
        <HStack spacing={8}>
          <Link to="/" {...linkStyles}>Home</Link>
          <Link to="/blog" {...linkStyles}>Blog</Link>
          <Link
            href={Resume}
            download="Harpuneet_resume.pdf"
            px="2" py="1" rounded="md" _focus={{ boxShadow: 'none', outline: "none" }} _hover={{textDecoration:'none'}}
          >
            Resume
          </Link>
          <Link  href="mailto:harpuneet.singh@torontomu.ca" px="2" py="1" rounded="md" _focus={{ boxShadow: 'none', outline: "none" }} _hover={{textDecoration:'none'}}>Contact</Link>
        </HStack>
        <IconButton
          position="absolute"
          right="4"
          // rounded="full"
          variant="subtle"
          // onClick={useColorMode}
          // icon={<FiMoon />}
          aria-label="Toggle theme"
        ><ColorModeButton /></IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
