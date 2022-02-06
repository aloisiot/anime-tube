import { Content } from "antd/lib/layout/layout";
import useAppData from "../../data/hooks/useAppContext";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    const { theme } = useAppData()

    return (
        <div className={`layout ${theme}`}>
            <Header onSearch={() => false} />
            <Content className="main-content container">
                {props.children}
            </Content>
            <Footer />
        </div>
    )
}