import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'
import { IItem } from '../../../interfaces/item'

const ItemDetails: React.FC<{ item: IItem }> = ({ item }) => {
  return (
    <Box>
      <Flex alignItems="flex-start">
        <Image src={item.img} />
        <Flex pl="8" flexDirection="column">
          <Heading fontSize="5xl" as="h1">
            {item.dname}
          </Heading>
          {item.desc && (
            <Text pt="4" fontWeight="light" lineHeight="2">
              {item.desc}
            </Text>
          )}
          {item.notes && (
            <>
              <Heading as="h2" pt="4">
                Notes
              </Heading>
              <Text pt="4" fontWeight="light" lineHeight="2">
                {item.notes}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default ItemDetails
