import { Card,  Button } from 'antd';
import Image from 'next/image';
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
            cover={
            <Image
                objectFit='cover'
                height={360}
                width={400}
                alt={props.anime.title}
                src={props.anime.urlImage}
            />
            }
            actions={[
                <Button
                type='primary'
                    key={"view-details"}
                    onClick={() => {
                        router.push(`/animeDetails/${props.anime.id}`)
                    }}
                >
                    About
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
