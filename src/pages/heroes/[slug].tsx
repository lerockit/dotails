import { GetServerSideProps } from 'next'
import React from 'react'
import MainLayout from '../../components/layouts/main'
import { useApi } from '../../hooks/useApi'
import { IHero } from '../../interfaces/hero'
import { api } from '../../services/api'
import { useRouter } from 'next/router'
import HeroDetails from '../../components/pages/heroes/HeroDetails'

const fetchHeroesUrl = '/heroes'

const HeroesDetails: React.FC<{ initialHero: IHero }> = ({ initialHero }) => {
  const { query } = useRouter()

  const { data: hero } = useApi<IHero>(
    `${fetchHeroesUrl}?hero=${query.slug}`,
    initialHero
  )

  return (
    <MainLayout>
      <>{hero && <HeroDetails hero={hero} />}</>
    </MainLayout>
  )
}

export default HeroesDetails

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await api.get<IHero[]>(fetchHeroesUrl, {
    params: {
      hero: context.params.slug,
    },
  })
  return { props: { initialHero: data } }
}
