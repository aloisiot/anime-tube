import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/template/Layout'
import { Button, Typography } from 'antd';
import CardGrid from '../components/template/CardGrid';
import useAppData from '../data/hooks/useAppContext'
import { useEffect, useState } from 'react';
import { PlusIcon } from '../components/icons';

const { Title } = Typography;

const Home: NextPage = () => {
  const [animes, setAnimes] = useState<any>(null)
  const { appStore , findAnimes } = useAppData()

  useEffect(() => {
    if(! appStore.animes){
      findAnimes?.()
    }
  }, [appStore, findAnimes])

  useEffect(() => {
    appStore.subscribe(() => {
      const store = appStore.getState()
      setAnimes(store.animes)
    })
  },[appStore])

  return (
    <div>
      <Head>
        <title>Home - AnimeTube</title>
        <meta name="description" content="The best of the anime world" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <Layout>
        <Title>The best of the anime world you find here</Title>
        <CardGrid data={animes} />
        <Button
          className='plus-btn'
          type='text'
          onClick={() => findAnimes?.()}>
            {PlusIcon}
          </Button>
      </Layout>
    </div>
  )
}

export default Home
