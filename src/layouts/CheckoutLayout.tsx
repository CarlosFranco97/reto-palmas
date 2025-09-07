import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";
import CheckoutHeader from "./headers/CheckoutHeader";
import CheckoutFooter from "./footers/CheckoutFooter";

const CheckoutLayout = ({children}: {children: ReactNode}) => {

    return (
        <BaseLayout
            header={<CheckoutHeader />}
            footer={<CheckoutFooter />}
            bgColor="rgba(229, 231, 235, 0.35)"
        >
            {children}
        </BaseLayout>
    )

}

export default CheckoutLayout;