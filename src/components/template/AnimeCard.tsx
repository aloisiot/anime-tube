import { Card, Avatar, Button } from 'antd';
import { useRouter } from 'next/router';
import Anime from '../../Model/Anime';
const { Meta } = Card;

interface AnimeCardProps {
    anime: Anime
}

export default function AnimeCard(props: AnimeCardProps){
    const router = useRouter()

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
                <Button
                    key={"view-details"}
                    onClick={() => {
                        router.push(`/animeDetails/${props.anime.id}`)
                    }}
                >
                    Mais detalhes
                </Button>
            ]}
        >
            <Meta
                title={props.anime.title}
                description={props.anime.description}
            />
        </Card>

    )
}
