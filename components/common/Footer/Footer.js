import React from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FooterNav from "./FooterNav/FooterNav";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto  py-14">
      <div>
        <h2 className="text-white text-3xl">Minisque.</h2>
      </div>
        <div className="flex gap-14 mt-14">
          <div className="flex flex-col gap-6 h-[300px] w-1/4  border-2 border-white">
          
            <div className="">
              <p className="text-white font-light text-opacity-90">
                Sign up for email updates on products, launches, and events.
                Unsubscribe anytime{" "}
              </p>
            </div>
            <div>
              <Form className="flex gap-5 justify-between">
                <Input className=""/>
                <Button variant="primary">Submit</Button>
              </Form>
            </div>
          </div>
          <div className="h-[300px] w-1/4 border-2 border-white">
           
            <div>
              <FooterNav variant="about" title="About Minisque"/>
            </div>
          </div>
          <div className="h-[300px] w-1/4 border-2 border-white">
          <div>
          <FooterNav variant="help" title="Help"/>
        </div></div>
          <div className="h-[300px] w-1/4 border-2 border-white">
          <div>
          <h2 className="text-white text">
            Contact Us
          </h2></div>

          <div>
            <p className=" text-gray-">
            127 West 30th Street, 9th Floor New York, NY 10001
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
