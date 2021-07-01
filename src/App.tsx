import { Heading, VStack,IconButton,Image, Container,Box } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import React from 'react';
import Sample from './components/sample';


function App() {
  return  (
    <VStack p={4} background="#F7F1EA" w="full" h="100vh">
      <IconButton aria-label="settings" icon={<SettingsIcon/>} isRound={true} size="lg" alignSelf="flex-end"/>
      <Image src='/images/queen.png' alt="Queen"  />
      <Heading fontSize="3xl"  fontWeight="400" fontFamily="Neuton" size="2xl"><span style={{color:"#9A6E3A"}}>BLACKJACK</span><span style={{color:"#0000000"}}> COUNTER</span></Heading>
      <Container maxW="container.md" fontFamily="Courier New" textAlign="center">The Hi-Lo Count strategy is basically a simple way to keep track of high cards left in the deck. This system is called a 'balanced system'; if every card in the deck was counted down the balance would be zero.</Container>
      <Box p={2} fontFamily="Courier New" fontWeight="bold" as="button" bg="black" color="white"  >Start Counting</Box> 
    </VStack>
  )
}

export default App;
