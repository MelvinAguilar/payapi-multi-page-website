import Image from "next/image";
import Header from "@/containers/Header";
import Hero from "@/components/Hero";
import Footer from "@/containers/Footer";
import CommunityForm from "@/containers/CommunityForm";
import Features from "@/components/Features/Features";
import BrandsContainer from "@/components/Brands/BrandsContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandsContainer />
        <Features />
        <CommunityForm />
      </main>
      <Footer />
    </>
  );
}
