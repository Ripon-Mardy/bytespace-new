import Image from "next/image";

import logo from "@/public/mainlogo.png";

import Container from "../ui/Container";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* left side  */}
          <div className="space-y-5 col-span-5">
            <Image src={logo} alt="logo" />
            <p className="font-normal text-sm text-[#242528] leading-[1.6]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                className="border border-gray-300 rounded-3xl py-2 px-2 outline-none text-sm w-full"
                placeholder="Enter your email"
                required
              />
              <Button>Search</Button>
            </form>
            <p className="text-[#242528] font-medium text-sm leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* right side  */}
          <div className="col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* right 1  */}
            <ul className="flex flex-col gap-4">
              {[
                "Featured Courses",
                "Featured Categories",
                "Business",
                "IT",
                "Design",
              ].map((cat, index) => (
                <li key={index} className="text-[#242528]">
                  {cat}
                </li>
              ))}
            </ul>

            {/* right 2  */}
            <ul className="flex flex-col gap-4">
              {[
                "Development",
                "Marketing",
                "Photography",
                "Finance",
                "Sport",
              ].map((cat, index) => (
                <li key={index} className="text-[#242528]">
                  {cat}
                </li>
              ))}
            </ul>

            {/* right 3  */}
            <ul className="flex flex-col gap-4">
              {[
                "Become a Creator",
                "Affiliate Program",
                "Contact",
                "Help",
                "About",
              ].map((cat, index) => (
                <li key={index} className="text-[#242528]">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom  */}
        <div className=" mt-5">
          <hr className="text-gray-200" />
          <div className="flex items-center justify-between mt-4">
            <p className="text-[#242528] text-xs">
              © {new Date().getFullYear()} ByteSpace. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-5 text-[#242528] text-xs">
              <li> Privacy Policy </li>
              <li>Terms of Service</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
