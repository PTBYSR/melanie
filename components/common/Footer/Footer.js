import React from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FooterNav from "./FooterNav/FooterNav";
import LegalLinks from "./LegalLinks/LegalLinks";
import SocialLinks from "./SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto  py-14">
        <div>
          <h2 className="text-3xl text-white">Minisque.</h2>
        </div>
        <div className="mt-14 flex flex-col gap-14 md:flex-row">
          <div className="flex flex-col gap-6 border-white md:h-[300px]   md:w-1/3">
            <div className="">
              <p className="font-light text-white text-opacity-90">
                Sign up for email updates on products, launches, and events.
                Unsubscribe anytime{" "}
              </p>
            </div>
            <div>
              <Form className="mt-8  flex flex-wrap gap-4">
                <Input className="" />
                <Button variant="primary">Submit</Button>
              </Form>
            </div>
          </div>
          <div className="flex gap-14 border-white md:h-[300px]  md:w-1/3">
            <div>
              <FooterNav variant="about" title="About Minisque" />
            </div>
            <div>
              <FooterNav variant="help" title="Help" />
            </div>
          </div>
          <div className="flex  gap-4 flex-col justify-between border-white md:h-[300px] md:w-1/3">
            <div>
              <div>
                <h2 className="text text-white">Contact Us</h2>
              </div>
              <div className="mt-5">
                <p className="text-sm text-white text-opacity-90">
                  127 West 30th Street, 9th Floor New York, NY 10001
                </p>
              </div>
            </div>

            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="mt-7">
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
