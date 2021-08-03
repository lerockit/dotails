import { Box, Flex, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import React from 'react'

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box>
      <Flex as="header" justifyContent="center" alignItems="center">
        <NextLink href="/" passHref>
          <Link my="8"></Link>
        </NextLink>
      </Flex>
      <Flex as="main" py="8" justifyContent="center">
        <Box maxW="7xl" w="full">
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

export default MainLayout
