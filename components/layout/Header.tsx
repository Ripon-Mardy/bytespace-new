import React from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { Handbag } from "lucide-react";

import logo from "@/public/logo.png";
import byteSpace from "@/public/ByteSpace.png";
import Container from "../ui/Container";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "#about",
  },
  {
    label: "Creators",
    href: "#",
  },
];

const Header = () => {
  return (
    <div>
      <header>
        <Container>
          <nav className="flex items-center justify-between gap-4 py-8">
            {/* logo  */}
            <div>
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <Image src={logo} alt="logo" />
                <Image src={byteSpace} alt="byteSpace" />
              </Link>
            </div>

            {/* navigation  */}
            <div className="space-x-4">
              {navigation.map((item, index) => (
                <Link key={index} href={item?.href} className="text-white">
                  {item?.label}
                </Link>
              ))}
            </div>

            {/* right side  */}
            <div className="flex items-center gap-3 text-white">
              <Link href="/login">Sign in</Link>

              <Link href="/signup">Sign up</Link>
              <Link href={"#"}>
                <Handbag />
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
