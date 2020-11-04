import { Flex, Link } from '@chakra-ui/core'
import React from 'react'

import NextLink from 'next/link'

import heroesImage from '../assets/heroes.png'
import itemsImage from '../assets/items.png'
import HomeImage from '../components/pages/home/HomeImage'
import HomeTitle from '../components/pages/home/HomeTitle'

const Home: React.FC = () => {
  return (
    <Flex overflow="hidden" minH="vh">
      <NextLink href="/heroes" passHref>
        <Link
          display="flex"
          w="50%"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <HomeImage src={heroesImage} bottom="-60px" />
          <HomeTitle text="Heros" />
        </Link>
      </NextLink>
      <NextLink href="/wip">
        <Link
          display="flex"
          w="50%"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <HomeImage src={itemsImage} />
          <HomeTitle text="Items" />
        </Link>
      </NextLink>
    </Flex>
  )
}

export default Home
