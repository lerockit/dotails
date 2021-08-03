import { Image, ImageProps } from '@chakra-ui/core'
import React from 'react'

const HomeImage: React.FC<{ src: string } & ImageProps> = ({
  src,
  ...rest
}) => {
  return (
    <Image
      src={src}
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      {...rest}
    />
  )
}

export default HomeImage
