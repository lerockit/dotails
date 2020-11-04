import { Grid, Link, Wrap } from '@chakra-ui/core'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layouts/main'
import HeroCard from '../../components/pages/heroes/HeroCard'
import { useApi } from '../../hooks/useApi'
import { IHero } from '../../interfaces/hero'
import { api } from '../../services/api'
import NextLink from 'next/link'
import { useRouter } from 'next//router'
import HeroDetails from '../../components/pages/heroes/HeroDetails'

const fetchHeroesUrl = '/heroes'

const HeroesDetails: React.FC<{ initialHeroes: IHero[] }> = ({
  initialHeroes,
}) => {
  const { data: heroes } = useApi<IHero[]>(fetchHeroesUrl, initialHeroes)

  const { query } = useRouter()

  // WORKAROUND TO ADJUST TO API BUG
  const [hero, setHero] = useState<IHero>(null)

  useEffect(() => {
    const hero = heroes.find(hero => hero.slug === query.slug)
    setHero(hero)
  }, [query, heroes])

  return (
    <MainLayout>
      <>{hero && <HeroDetails hero={hero} />}</>
    </MainLayout>
  )
}

export default HeroesDetails

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<IHero[]>(fetchHeroesUrl)
  return { props: { initialHeroes: data } }
}
