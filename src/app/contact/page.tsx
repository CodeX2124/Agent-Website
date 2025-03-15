import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Racx Software Development LLC",
  description: "This is Contact Page for Racx",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Whether you're looking to build a stunning website, automate your processes, or dive into the world of cryptocurrency trading, we have the expertise to help you succeed."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
