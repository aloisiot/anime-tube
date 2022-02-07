import { Col, Typography } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import Trailer from "../../components/template/Trailer";
import useAppData from "../../data/hooks/useAppContext";
const { Title } = Typography;

const AnimeDetails : NextPage = () => {
    const router = useRouter()
    const [videoId, setVideoId] = useState<string>()
    const [idAnime, setId] = useState<any>(router.query.idAnime)
    const [anime, setAnime] = useState<any>()
    const { appStore, findAnimeById } = useAppData()

    useEffect(() => {
        setId(router.query.idAnime)
    }, [router.query])
    
    useEffect(() => {
        if(! anime){
            findAnimeById?.(idAnime)
        }
    }, [anime, idAnime, findAnimeById])

    useEffect(() => {
        appStore.subscribe(() => {
            const store = appStore.getState()
            const currentAnime = store.currentAnime
            if(currentAnime != undefined && (! anime)) {
                setAnime(store.currentAnime)
            }
        })
    }, [appStore, anime])

    useEffect(() => {
        setVideoId(anime?.attributes?.youtubeVideoId)
    }, [anime])

    return (
        <>
        {anime && (
            <>
                <Head>
                    <title>
                        AnimeTube {anime.attributes.canonicalTitle}
                    </title>
                </Head>

                <Layout>
                    <Col>
                        <Title>{anime?.attributes?.canonicalTitle}</Title>
                        {videoId && (
                            <Trailer
                                className="trailer-anime"
                                videoId={videoId}
                            />
                        )}
                        <div className="anime-description">
                            <Title level={2}>
                                Description
                            </Title>
                            <Typography>
                                {anime.attributes?.synopsis}
                            </Typography>
                            <div style={{marginTop: "1rem"}}>
                            <Typography>
                                    <strong>Started date: </strong>
                                    {anime.attributes?.startDate}
                                </Typography>
                                <Typography>
                                    <strong>Status: </strong>
                                    {anime.attributes?.status}
                                </Typography>
                            </div>
                        </div>
                    </Col>
                </Layout>
            </>
        )}
        </>
    )
}

export default AnimeDetails