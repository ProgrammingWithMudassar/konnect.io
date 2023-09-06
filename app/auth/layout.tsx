import TopNavigation from "@/components/shared/Navigation/TopNavigation"
import { Fragment } from "react";
import Footer from "@/components/shared/Footer";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            <TopNavigation />
            {children}
            <Footer />
        </Fragment>
    )
}