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
    const { setAnimeId, currentAnime } = useAppData()

    useEffect(() => {
        setAnimeId?.(idAnime)
    }, [setAnimeId, idAnime])
    
    useEffect(() => {
        setId(router.query.idAnime)
    }, [router.query.idAnime])

    useEffect(() => {
        setVideoId(currentAnime?.attributes?.youtubeVideoId)
    }, [currentAnime])

    return (
        <>
        {currentAnime && (
            <>
                <Head>
                    <title>
                        AnimeTube {currentAnime.attributes.canonicalTitle}
                    </title>
                </Head>

                <Layout>
                    <Col>
                        <Title>{currentAnime?.attributes?.canonicalTitle}</Title>
                        {videoId && (
                            <Trailer
                                className="trailer-anime"
                                videoId={videoId}
                            />
                        )}
                        {currentAnime && (
                            <div className="anime-description">
                                <Title level={2}>Description</Title>
                                <Typography>
                                    {currentAnime.attributes?.description}
                                </Typography>
                            </div>
                        )}
                    </Col>
                </Layout>
            </>
        )}
        </>
    )
}

export default AnimeDetails