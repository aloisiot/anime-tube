import { useEffect, useState } from "react"
import YouTube, { Options } from 'react-youtube';

interface TrailerProps {
    className?: string
    videoId: string
}

export default function Trailer(props: TrailerProps) {
    const opts: Options = {
        height: "400",
        width: '100%',
        playerVars: {
          autoplay: 0,
        }
    }
    
    function onReady(event: any) {
        event.target.pauseVideo();
    }

    return (
        <div className={props.className}>
            <YouTube
            videoId={props.videoId}
            opts={opts}
            onReady={onReady} />
        </div>
    )
}