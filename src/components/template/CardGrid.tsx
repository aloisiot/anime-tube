import { Col, Row } from "antd";
import resumeText from "../../functions/resumeText";
import splitList from "../../functions/splitList";
import Anime from "../../Model/Anime";
import AnimeCard from "./AnimeCard";

interface CardGridProps {
    data?: any
}

export default function CardGrid(props: CardGridProps){

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

    return (
        <div style={{width: "100%"}}>
            <Row justify="center">
                {props.data && (splitList(cards, 4))?.map((col: any, i: number) => {
                    return <Col key={`cardCol-${i}`}>{col}</Col>
                })}
            </Row>
        </div>
    )
}