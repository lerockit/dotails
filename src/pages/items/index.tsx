import { Grid, Link } from '@chakra-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import MainLayout from '../../components/layouts/main'
import Card from '../../components/Card'
import { useApi } from '../../hooks/useApi'
import { api } from '../../services/api'
import NextLink from 'next/link'
import { IItem } from '../../interfaces/item'

const fetchItemsUrl = '/items'

const ItemsIndex: React.FC<{ initialItems: IItem[] }> = ({ initialItems }) => {
  const { data: items } = useApi<IItem[]>(fetchItemsUrl, initialItems)

  return (
    <MainLayout>
      <Grid templateColumns="repeat(8, 1fr)" gap="8">
        {items.map(item => (
          <NextLink href={`items/${item.slug}`} key={item.slug} passHref>
            <Link>
              <Card text={item.dname} image={item.img} color="primary" />
            </Link>
          </NextLink>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default ItemsIndex

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<IItem[]>(fetchItemsUrl)
  return { props: { initialItems: data } }
}
