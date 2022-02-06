import { Card,  Button } from 'antd';
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
            className='anime-card'
            cover={
            // eslint-disable-next-line @next/next/no-img-element
            <img // O uso do componet Image do Nex poderia ser problemático pois não se sabe previamente o tamanho da imagem
                loading='lazy'
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
