import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const completeTitle = `${title} | Dotails`
  return (
    <Head>
      <title>{completeTitle}</title>
    </Head>
  )
}

export default SEO
