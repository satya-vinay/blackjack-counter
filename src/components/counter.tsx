import { CloseIcon, SettingsIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Container, Grid, GridItem, IconButton, Select, Spacer, VStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
function Counter(){
    return (
      <VStack p={4} background="#F7F1EA" w="full" h="100vh">
        <Link to="/" className="links">
        <IconButton aria-label="settings" icon={<CloseIcon/>} isRound={true} size="lg" alignSelf="flex-start"/>
        </Link>
        <Grid h="200px" gap={10} templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)">
          <GridItem rowStart={1} rowSpan={2} colSpan={1}>

          <Select placeholder="Decks in Play">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="6">6</option>
        </Select>

          </GridItem>

          
          
          <GridItem  rowStart={3}  colSpan={1}>
        <Button p={3} colorScheme="red" mr="4">New Count</Button>
        <Spacer />
      <Button p={3} colorScheme="green" mr="4">Start Count</Button>
      <Spacer />
      <Button p={3} colorScheme="blue" mr="4">True Count</Button>
      <Spacer />
      <Button p={3} colSpan={2} colorScheme="teal" mr="4">Pause Count</Button>
      </GridItem>
      </Grid>
      
      </VStack>
      

    )
}

export default Counter