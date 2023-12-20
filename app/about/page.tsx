import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import CommunityForm from "@/containers/CommunityForm";
import AboutInformation from "@/components/AboutInformation";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutInformation />
        <CommunityForm />
      </main>
      <Footer />
    </>
  );
}
