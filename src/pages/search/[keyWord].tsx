import { NextPage } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import { Typography } from "antd";
import useAppData from "../../data/hooks/useAppContext";
import CardGrid from "../../components/template/CardGrid";

const { Title } = Typography

const SearchPage: NextPage = () => {
    const router = useRouter()
    const [keyWord, setKeyWord]  = useState(router.query.keyWord)
    const [animes, setAnimes] = useState<any>()
    const { appStore , searchAnimeByKeyWord } = useAppData()

    useEffect(() => {
        setKeyWord(router.query.keyWord)
    }, [router.query])

    useEffect(() => {
        if(! appStore.filteredAnimes){
            searchAnimeByKeyWord?.(keyWord)
        }
    }, [searchAnimeByKeyWord, keyWord, appStore])
  
    useEffect(() => {
        appStore.subscribe(() => {
            const store = appStore.getState()
            setAnimes(store.filteredAnimes)
        })
    },[appStore])

    return (
        <>
        <Head>
            <title>AnimeTube</title>
        </Head>
        <Layout>
            {animes?.length ? (
                <>
                    <div className="container">
                        <Title>Result</Title>
                        <Typography>
                            Key word: <strong>{keyWord}</strong>
                        </Typography>
                    </div>
                    <CardGrid data={animes} />
                </>
            ) : (
                <Typography>No result</Typography>
            )}
        </Layout>
        </>
    )
}

export default SearchPage