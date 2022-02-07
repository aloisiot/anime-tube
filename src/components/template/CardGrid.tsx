import { Col, Row } from "antd";
import Anime from "../../Model/Anime";
import AnimeCard from "./AnimeCard";

interface CardGridProps {
    data?: any
}

export default function CardGrid(props: CardGridProps){
    
    function resumeText(text: string, length: number): string {
        return text.slice(0, length)
    }

    const cards = props.data?.map?.((data: any, i: number) => {
        const description = (
            data.attributes.description.length > 20 ?
            `${resumeText(data.attributes.description, 44)} ...`
            : data.attributes.description.length
        )
        const urlImage = (
            data.attributes.posterImage.small ||
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
        <div className="container">
            <Row
                className="card-grid"
                justify="space-around"
                gutter={16}
            >
                {props.data && (
                    cards?.map((col: any, i: number) => {
                        return <Col key={`cardCol-${i}`}>{col}</Col>
                    })
                )}
            </Row>
        </div>
    )
}