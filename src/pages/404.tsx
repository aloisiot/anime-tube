import { Typography } from "antd";
import { NextPage } from "next";
import Layout from "../components/template/Layout";

const { Title } = Typography

const NotFound: NextPage = () => {
    return (
        <Layout>
            <Title>
                <div className="no-found">
                    <span className="text-404">404</span>
                    <span>Not Found</span>
                </div>
            </Title>
        </Layout>
    )
}

export default NotFound