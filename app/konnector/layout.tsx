import TopNavigation from "@/components/shared/Navigation/TopNavigation"
import { Fragment } from "react";
import Footer from "@/components/shared/Footer";
import KNavigation from "@/components/shared/Navigation/Konnector/KNavigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            <KNavigation>
                {children}
            </KNavigation>
            <Footer additionMenu={false} />
        </Fragment>
    )
}