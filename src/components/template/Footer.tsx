import { Col, Row, Typography } from "antd";
import Link from "next/link";
import { Logo } from "../icons";

export default function Footer(){
    return (
        <footer className="page-footer">
            <Link passHref href={"https://www.aloisiot.dev"}>
                <Typography style={{cursor: "pointer"}}>www.aloisiot.dev</Typography>
            </Link>
        </footer>
    )
}