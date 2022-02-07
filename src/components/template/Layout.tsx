import { Content } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import useAppData from "../../data/hooks/useAppContext";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    const { theme } = useAppData()
    const router = useRouter()
    
    function onSearch(keyWord: string){
        router.push(`/search/${keyWord}`)
    }

    return (
        <div className={`layout ${theme}`}>
            <Header onSearch={onSearch} />
            <Content className="main-content container">
                {props.children}
            </Content>
            <Footer />
        </div>
    )
}