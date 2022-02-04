import { Card, Avatar, Button } from 'antd';
import Anime from '../../Model/Anime';

const { Meta } = Card;

interface AnimeCardProps {
    anime: Anime
}

export default function AnimeCard(props: AnimeCardProps){
    return (
        <Card
            style={{ width: 260, margin: 16 }}
            cover={
            <img
                alt={props.anime.title}
                src={props.anime.urlImage}
            />
            }
            actions={[
                <Button type='primary' key={"view-details"}>Mais detalhes</Button>
            ]}
        >
            <Meta
                title={props.anime.title}
                description={props.anime.description}
            />
        </Card>

    )
}
