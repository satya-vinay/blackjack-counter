import { Button, ButtonGroup, Flex, Spacer, VStack } from "@chakra-ui/react"

function Counter(){
    return (
      <VStack >
        <Flex p={4}>
        <Button p={3} colorScheme="red" mr="4">New Count</Button>
        <Spacer />
      <Button p={3} colorScheme="green" mr="4">Start Count</Button>
      <Spacer />
      <Button p={3} colorScheme="blue" mr="4">True Count</Button>
      <Spacer />
      <Button p={3} colorScheme="teal" mr="4">Pause Count</Button>
        </Flex>

      </VStack>
      

    )
}

export default Counter