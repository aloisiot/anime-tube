import { Typography } from "antd";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="page-footer">
            <Link passHref href={"https://www.aloisiot.dev"}>
                <Typography style={{cursor: "pointer"}}>www.aloisiot.dev</Typography>
            </Link>
        </footer>
    )
}