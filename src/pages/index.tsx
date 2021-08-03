import { Flex, Link } from '@chakra-ui/core'
import React from 'react'

import NextLink from 'next/link'

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
          <HomeImage
            src={'https://citizengo.org/sites/default/files/images/test_3.png'}
            bottom="-60px"
          />
          <HomeTitle text="Heros" />
        </Link>
      </NextLink>
      <NextLink href="/items">
        <Link
          display="flex"
          w="50%"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <HomeImage
            src={'https://citizengo.org/sites/default/files/images/test_3.png'}
          />
          <HomeTitle text="Items" />
        </Link>
      </NextLink>
    </Flex>
  )
}

export default Home
