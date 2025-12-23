import { ReactNode } from "react";
import Header from "@/components/public-layout/header";
import dynamic from "next/dynamic";
import { getAllCarsForHomepage } from "@/queries/car.query";

const Footer = dynamic(() => import("@/components/public-layout/footer"));
const MessengerBtn = dynamic(
  () => import("@/components/public-layout/messenger-btn")
);
const ContactBtns = dynamic(
  () => import("@/components/public-layout/contact-btns")
);

interface Props {
  children: ReactNode;
}

const PulbicPagesLayout = async ({ children }: Props) => {
  const cars = (await getAllCarsForHomepage()) as any[];

  return (
    <>
      <Header cars={cars} />
      {children}
      <ContactBtns />
      <MessengerBtn />
      <Footer />
    </>
  );
};

export default PulbicPagesLayout;
