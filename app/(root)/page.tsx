import Hero from "@/components/Hero";
import Features from "@/components/Features/Features";
import BrandsContainer from "@/components/Brands/BrandsContainer";
import CommunityForm from "@/containers/CommunityForm";

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
