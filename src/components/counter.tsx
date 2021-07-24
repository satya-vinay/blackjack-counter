import { CloseIcon, SettingsIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Container, Grid, GridItem, IconButton, Select, Spacer, VStack, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
function Counter(){
    return (
      <VStack p={4} background="#F7F1EA" w="full" h="100vh">
        <Link to="/" className="links">
        <IconButton aria-label="settings" icon={<CloseIcon/>} isRound={true} size="lg" alignSelf="flex-start"/>
        </Link>
        <Grid h="200px" gap={10} templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)">
        <GridItem rowStart={1} rowSpan={2} colSpan={1} colStart={2} >
        <Container maxW="container.md" fontFamily="Courier New" textAlign="center" fontStyle="italic" FontSynthesis="weight" >The Hi-Low Card Counting System</Container>  
        </GridItem>
          <GridItem rowStart={2} rowSpan={2} colSpan={1}>

          <Select placeholder="Decks in Play">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="6">6</option>
        </Select>

          </GridItem>

          
          <GridItem rowStart={3} rowSpan={2} colSpan={1}>


          <Button p={3} colorScheme="blue" mr="4">2-3-4-5-6</Button>
          <Button p={3} colorScheme="gray" mr="4">7-8-9</Button>
          <Button p={3} colorScheme="green" mr="4">10-J-Q-K-A</Button>


          </GridItem> 
          <GridItem  rowStart={6}  colSpan={4}>
        <Button p={3} colorScheme="red" mr="4">New Count</Button>
        
      <Button p={3} colorScheme="green" mr="4">Start Count</Button>
      <Image mr="4" src='/images/blackjack.png' alt="Black Jack" boxSize="100px"  />
      <Button p={3} colorScheme="blue" mr="4">True Count</Button>
        
      <Button p={3} colSpan={2} colorScheme="teal" mr="4">Pause Count</Button>
      </GridItem>
      </Grid>
      
      </VStack>
      

    )
}

export default Counter