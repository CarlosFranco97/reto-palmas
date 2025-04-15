import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./header/Header";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;