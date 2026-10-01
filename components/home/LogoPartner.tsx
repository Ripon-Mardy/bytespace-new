// components/sections/LogoPartner.tsx
import Image from "next/image";
import Container from "../ui/Container";

// logo partner
import logo1 from "@/public/logoPartner/Frame1.png";
import logo2 from "@/public/logoPartner/Frame2.png";
import logo3 from "@/public/logoPartner/Frame3.png";
import logo4 from "@/public/logoPartner/Frame4.png";
import logo5 from "@/public/logoPartner/Frame5.png";

const logoPartners = [
  { src: logo1, name: "Partner 1" },
  { src: logo2, name: "Partner 2" },
  { src: logo3, name: "Partner 3" },
  { src: logo4, name: "Partner 4" },
  { src: logo5, name: "Partner 5" },
];

const LogoPartner = () => {
  return (
    <section
      aria-label="Our partners"
      className="bg-[#F5F5F6] py-10 md:py-14 lg:py-16"
    >
      <Container>
        <ul
          className="
            grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8
            sm:grid-cols-3
            lg:flex lg:flex-nowrap lg:justify-between lg:gap-10
          "
        >
          {logoPartners.map((logo) => (
            <li
              key={logo.name}
              className="
                flex h-10 items-center justify-center
                last:col-span-2 sm:last:col-span-1
                lg:h-12
              "
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain w-41.75 lg:max-w-none"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default LogoPartner;
