import { FormControl, FormHelperText, FormLabel, HStack, Input, Radio, RadioGroup } from "@chakra-ui/react"
import { Component } from "react"

function Sample(){
    return (
        <FormControl as="fieldset" className=".">
  <FormLabel as="legend">Favorite  Card suit</FormLabel>
  <RadioGroup defaultValue="Itachi">
    <HStack spacing="24px">
      <Radio value="Clubs">Clubs</Radio>
      <Radio value="Diamonds">Diamonds</Radio>
      <Radio value="Hearts">Hearts</Radio>
      <Radio value="Spades">Spades</Radio>
    </HStack>
  </RadioGroup>
  <FormHelperText>Select only if you play blackjack.</FormHelperText>
</FormControl>
    )
}

export default Sample