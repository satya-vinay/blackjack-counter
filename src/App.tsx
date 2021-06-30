import { Flex, Heading, VStack,IconButton,Image, Container,Box,useColorMode, } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import React from 'react';
import Sample from './components/sample';


function App() {
  return  (
    <VStack p={4} background="#F7F1EA" w="full" h="100vh">
      <IconButton aria-label="settings" icon={<SettingsIcon/>} isRound={true} size="lg" alignSelf="flex-end"/>
      <Image src='https://i.pinimg.com/originals/9e/c9/00/9ec90097613a47a1e407cd43e24e4e15.png' alt="Queen" boxSize="sm" />
      <Heading fontSize="3xl"  fontWeight="normal" fontFamily="Neuton" size="2xl"><span style={{color:"#9A6E3A"}}>BLACKJACK</span><span style={{color:"#0000000"}}> COUNTER</span></Heading>
      <Container maxW="container.md" fontFamily="Courier New" textAlign="center">The Hi-Lo Count strategy is basically a simple way to keep track of high cards left in the deck. This system is called a 'balanced system'; if every card in the deck was counted down the balance would be zero.</Container>
      <Box fontFamily="Courier New" fontWeight="bold" as="button" bg="black" color="white" w="12%"  p={3}>Start Counting</Box> 
    </VStack>
  )
}

export default App;
