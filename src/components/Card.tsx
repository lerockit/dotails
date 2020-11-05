import { GridItem, Image, Text } from '@chakra-ui/core'
import React from 'react'

interface Props {
  image: string
  text: string
  color: string
}

const Card: React.FC<Props> = ({ image, text, color }) => {
  return (
    <GridItem position="relative" overflow="hidden" h="full">
      <Image
        src={image}
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
        bg={color}
        fontWeight="light"
        isTruncated
      >
        {text}
      </Text>
    </GridItem>
  )
}

export default Card
