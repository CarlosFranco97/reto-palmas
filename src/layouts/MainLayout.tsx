import { ReactNode } from "react";
import BaseLayout from "./BaseLayout";
import MainHeader from "./headers/MainHeader";
import MainFooter from "./footers/MainFooter";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <BaseLayout header={<MainHeader />} footer={<MainFooter/>}>
        {children}
      </BaseLayout>
    </>
  );
};

export default MainLayout;
