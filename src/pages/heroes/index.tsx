import { Grid, Link, Wrap } from '@chakra-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import MainLayout from '../../components/layouts/main'
import Card from '../../components/Card'
import { useApi } from '../../hooks/useApi'
import { IHero } from '../../interfaces/hero'
import { api } from '../../services/api'
import NextLink from 'next/link'

const fetchHeroesUrl = '/heroes'

const HeroesIndex: React.FC<{ initialHeroes: IHero[] }> = ({
  initialHeroes,
}) => {
  const { data } = useApi<IHero[]>(fetchHeroesUrl, initialHeroes)

  const heroes = {
    intelligence: data.filter(hero => hero.main_attribute === 'intelligence'),
    strength: data.filter(hero => hero.main_attribute === 'strength'),
    agility: data.filter(hero => hero.main_attribute === 'agility'),
  }

  return (
    <MainLayout>
      <Grid templateColumns="repeat(6, 1fr)" gap="8">
        {heroes.intelligence.map(hero => (
          <NextLink href={`heroes/${hero.slug}`} key={hero.slug} passHref>
            <Link>
              <Card image={hero.avatar} text={hero.name} color="blue" />
            </Link>
          </NextLink>
        ))}
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" gap="8" pt="20">
        {heroes.agility.map(hero => (
          <NextLink href={`heroes/${hero.slug}`} key={hero.slug} passHref>
            <Link>
              <Card image={hero.avatar} text={hero.name} color="green" />
            </Link>
          </NextLink>
        ))}
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" gap="8" pt="20">
        {heroes.strength.map(hero => (
          <NextLink href={`heroes/${hero.slug}`} key={hero.slug} passHref>
            <Link>
              <Card image={hero.avatar} text={hero.name} color="primary" />
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
