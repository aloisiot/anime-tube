import Header from "./Header";

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    return (
        <div className="layout">
            <Header onSearch={() => false} />
            <main className="main-content">
                {props.children}
            </main>
        </div>
    )
}