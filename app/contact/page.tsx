import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import CommunityForm from "@/containers/CommunityForm";
import ContactContainer from "@/components/Contact/ContactContainer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactContainer />
        <CommunityForm />
      </main>
      <Footer />
    </>
  );
}
