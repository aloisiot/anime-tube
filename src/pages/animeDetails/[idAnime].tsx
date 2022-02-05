import { Col, Row, Typography } from "antd";
import Layout from "antd/lib/layout/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Trailer from "../../components/template/Trailer";
import useAppData from "../../data/hooks/useAppContext";
const { Title } = Typography;

const AnimeDetails : NextPage = () => {
    const [anime, setAnime] = useState<any>(null)
    const { getAnimeById } = useAppData()
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        if(id){
            setAnime(getAnimeById?.(+ id))
        }
    }, [id, getAnimeById])

    return (
        <Layout>
            <Row>
                <Col>
                    <Trailer videoId={anime?.attributes?.youtubeVideoId} />
                </Col>
                <Col>
                    <Title>{anime?.attributes?.canonicalTitle}</Title>
                </Col>
            </Row>
        </Layout>
    )
}

export default AnimeDetails