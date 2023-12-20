import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import CommunityForm from "@/containers/CommunityForm";
import PricingContainer from "@/components/Pricing/PricingContainer";

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PricingContainer />
        <CommunityForm />
      </main>
      <Footer />
    </>
  );
}
