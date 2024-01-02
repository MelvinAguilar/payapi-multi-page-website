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
      <Hero />
      <BrandsContainer />
      <Features />
      <CommunityForm />
    </>
  );
}
