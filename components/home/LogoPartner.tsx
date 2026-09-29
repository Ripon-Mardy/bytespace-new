import React from "react";
import Image from "next/image";

// logo partner
import logo1 from "@/public/logoPartner/Frame1.png";
import logo2 from "@/public/logoPartner/Frame2.png";
import logo3 from "@/public/logoPartner/Frame3.png";
import logo4 from "@/public/logoPartner/Frame4.png";
import logo5 from "@/public/logoPartner/Frame5.png";
import Container from "../ui/Container";

const logoPartner = [logo1, logo2, logo3, logo4, logo5];

const LogoPartner = () => {
  return (
    <Container>
      <div className="flex items-center justify-between flex-wrap gap-10 h-50.5 py-5">
        {logoPartner.map((logo, index) => (
          <Image src={logo} alt="logo" />
        ))}
      </div>
    </Container>
  );
};

export default LogoPartner;
