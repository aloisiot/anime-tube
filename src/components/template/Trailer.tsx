interface TrailerProps {
    videoId?: string
}

export default function Trailer(props: TrailerProps) {
    return (
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}