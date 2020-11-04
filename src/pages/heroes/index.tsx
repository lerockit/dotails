import { Grid, Link, Wrap } from '@chakra-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import MainLayout from '../../components/layouts/main'
import HeroCard from '../../components/pages/heroes/HeroCard'
import { useApi } from '../../hooks/useApi'
import { IHero } from '../../interfaces/hero'
import { api } from '../../services/api'
import NextLink from 'next/link'

const fetchHeroesUrl = '/heroes'

const HeroesIndex: React.FC<{ initialHeroes: IHero[] }> = ({
  initialHeroes,
}) => {
  const { data: heroes } = useApi<IHero[]>(fetchHeroesUrl, initialHeroes)

  return (
    <MainLayout>
      <Grid templateColumns="repeat(6, 1fr)" gap="8">
        {heroes.map(hero => (
          <NextLink href={`heroes/${hero.slug}`} key={hero.slug} passHref>
            <Link>
              <HeroCard hero={hero} />
            </Link>
          </NextLink>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default HeroesIndex

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<IHero[]>(fetchHeroesUrl)
  return { props: { initialHeroes: data } }
}
