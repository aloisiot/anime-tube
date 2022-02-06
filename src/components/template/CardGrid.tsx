import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import resumeText from "../../functions/resumeText";
import splitList from "../../functions/splitList";
import Anime from "../../Model/Anime";
import AnimeCard from "./AnimeCard";

interface CardGridProps {
    data?: any
}

export default function CardGrid(props: CardGridProps){
    const [qtdColumns, setQtdColumns] = useState<number>(4)

    useEffect(() => {
        // Controla o número de colunas de acordo com a largura da tela
        window.addEventListener("resize", () => {
            if(window.innerWidth < 1200 && 960 <= window.innerWidth) {
                setQtdColumns(3)
            } else {
                setQtdColumns(4)
            }
        })
    },[])

    const cards = props.data?.map?.((data: any, i: number) => {
        const description = (
            data.attributes.description.length > 20 ?
            `${resumeText(data.attributes.description, 120)} ...`
            : data.attributes.description.length
        )
        const urlImage = (
            data.attributes.coverImage?.original ||
            data.attributes.posterImage.medium ||
            "/images/noImage.png"
        )

        const anime = new Anime(
            data.id,
            data.attributes.youtubeVideoId,
            data.attributes.canonicalTitle,
            urlImage,
            description
        )
        return <AnimeCard anime={anime} key={`anime-card-${i}`} />
    })

    function renderCardColumns(){
        const columns = splitList(cards, qtdColumns)
        return columns?.map((col: any, i: number) => {
            return <Col key={`cardCol-${i}`}>{col}</Col>
        })
    }

    return (
        <div className="container">
            <Row justify="space-between">
                {props.data && (renderCardColumns())}
            </Row>
        </div>
    )
}