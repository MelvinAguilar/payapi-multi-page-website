import ContactForm from "@/components/Form/ContactForm";
import React from "react";

const CommunityForm = () => {
  return (
    <div className="container mb-[6rem] flex flex-col items-center justify-between gap-6 text-police-blue lg:flex-row lg:items-start">
      <h3 className="form-title font-serif">Ready to start?</h3>
      <ContactForm />
    </div>
  );
};

export default CommunityForm;
