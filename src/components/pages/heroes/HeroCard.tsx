import { GridItem, Image, Text } from '@chakra-ui/core'
import React from 'react'
import { IHero } from '../../../interfaces/hero'

const HeroCard: React.FC<{ hero: IHero }> = ({ hero }) => {
  return (
    <GridItem position="relative" overflow="hidden">
      <Image
        src={hero.avatar}
        w="100%"
        transition="ease-in-out"
        transitionDuration=".1s"
        _hover={{ transform: 'scale(1.2)' }}
      />
      <Text
        position="absolute"
        bottom="0"
        right="0"
        left="0"
        pl="2"
        bg="primary"
      >
        {hero.name}
      </Text>
    </GridItem>
  )
}

export default HeroCard
