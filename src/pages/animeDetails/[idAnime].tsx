import { Col, Row, Typography } from "antd";
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
    const [anime, setAnime] = useState<any>(null)
    const [videoId, setVideoId] = useState<string>()
    const [idAnime, setId] = useState<any>(router.query.idAnime)
    const { getAnimeById } = useAppData()

    useEffect(() => {
        setAnime(getAnimeById?.(idAnime))
    }, [getAnimeById, idAnime])
    
    useEffect(() => {
        setId(router.query.idAnime)
    }, [router.query.idAnime])


    useEffect(() => {
        setVideoId(anime?.attributes?.youtubeVideoId)
    }, [anime])

    return (
        <>
            <Head>
                <title>
                    AnimeTube { anime && "| " + anime.attributes.canonicalTitle}
                </title>
            </Head>

            <Layout>
                <Col>
                    <Title>{anime?.attributes?.canonicalTitle}</Title>
                    {videoId && (
                        <Trailer
                            className="trailer-anime"
                            videoId={videoId} />
                    )}
                    {anime && (
                        <div className="anime-description">
                            <Title level={2}>Description</Title>
                            <Typography>
                                {anime.attributes?.description}
                            </Typography>
                        </div>
                    )}
                </Col>
            </Layout>
        </>
    )
}

export default AnimeDetails