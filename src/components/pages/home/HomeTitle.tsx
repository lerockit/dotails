import { Heading, HeadingProps } from '@chakra-ui/core'
import React from 'react'

const HomeTitle: React.FC<{ text: string } & HeadingProps> = ({
  text,
  ...rest
}) => {
  return (
    <Heading
      fontSize="7xl"
      opacity=".3"
      fontWeight="normal"
      _hover={{ opacity: 1 }}
      transition="ease-in-out"
      transitionDuration=".3s"
      {...rest}
    >
      {text}
    </Heading>
  )
}

export default HomeTitle
