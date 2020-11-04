import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  list,
  List,
  ListItem,
  Text,
} from '@chakra-ui/core'
import React from 'react'
import { IHero } from '../../../interfaces/hero'

const HeroDetails: React.FC<{ hero: IHero }> = ({ hero }) => {
  return (
    <Box>
      <Flex alignItems="flex-start">
        <Image src={hero.avatar} />
        <Flex pl="8" flexDirection="column">
          <Heading fontSize="5xl" as="h1">
            {hero.name}
          </Heading>
          <Text pt="4" fontWeight="light" lineHeight="2">
            {hero.bio}
          </Text>
          <Heading as="h2" pt="4">
            Roles
          </Heading>
          <HStack spacing="4" pt="4" as="ul">
            {hero.roles.map(role => (
              <Box key={role} as="li" ml="0" listStyleType="none">
                <Text fontSize="xl">{role}</Text>
              </Box>
            ))}
          </HStack>
          <Link
            href={hero.info_url}
            pt="4"
            textDecoration="underline"
            display="flex"
            fontSize="2xl"
            _hover={{ color: 'primary' }}
            alignSelf="flex-start"
          >
            Saiba mais...
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HeroDetails
