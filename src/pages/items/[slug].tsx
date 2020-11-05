import { GetServerSideProps } from 'next'
import React from 'react'
import MainLayout from '../../components/layouts/main'
import { useApi } from '../../hooks/useApi'
import { IItem } from '../../interfaces/item'
import { api } from '../../services/api'
import { useRouter } from 'next/router'
import ItemDetails from '../../components/pages/items/ItemDetails'

const fetchItemsUrl = '/items'

const ItemsDetails: React.FC<{ initialItem: IItem }> = ({ initialItem }) => {
  const { query } = useRouter()

  const { data: item } = useApi<IItem>(
    `${fetchItemsUrl}?item=${query.slug}`,
    initialItem
  )

  return (
    <MainLayout>
      <>{item && <ItemDetails item={item} />}</>
    </MainLayout>
  )
}

export default ItemsDetails

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await api.get<IItem[]>(fetchItemsUrl, {
    params: {
      item: context.params.slug,
    },
  })
  return { props: { initialItem: data } }
}
