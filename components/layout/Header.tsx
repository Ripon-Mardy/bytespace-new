"use client";
import Link from "next/link";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

// icons
import { Handbag } from "lucide-react";

import logo from "@/public/logo.png";
import byteSpace from "@/public/ByteSpace.png";
import mainlogo from "@/public/mainlogo.png";

import Container from "../ui/Container";
import Icon from "../ui/Icon";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Creators",
    href: "/creator-profile",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <header>
        <Container>
          <nav className="flex items-center justify-between gap-4 py-8">
            {/* logo  */}
            <div>
              <Link
                href={"/"}
                className="flex items-center justify-end gap-2 w-42.75"
              >
                <Image src={logo} alt="logo" />
                <Image src={byteSpace} className="mt-2" alt="byteSpace" />
              </Link>
            </div>

            {/* desktop navigation  */}
            <div className="space-x-6 hidden md:flex">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item?.href}
                  className="text-(--color-primary) text-base"
                >
                  {item?.label}
                </Link>
              ))}
            </div>

            {/* desktop actions  */}
            <div className="hidden md:flex items-center gap-6 text-white text-base">
              <Link href="/sign-in">Sign in</Link>

              <Link href="/sign-up">Sign up</Link>
              <Link href={"#"}>
                <Handbag />
              </Link>
            </div>

            {/* =-==== mobile menu button ====  */}
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Icon
                name="menu"
                size={22}
                className="text-white cursor-pointer"
              />
            </div>

            {/* mobile menu  */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 z-50 bg-black/50 md:hidden"
                >
                  {/* Mobile Sidebar */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 top-0 h-screen w-[80%] max-w-sm bg-white p-5 shadow-xl sm:w-1/2"
                  >
                    {/* Close button */}
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close mobile menu"
                      className="absolute right-5 top-5 cursor-pointer"
                    >
                      <Icon name="x" size={26} />
                    </button>

                    {/* Logo */}
                    <Image src={mainlogo} alt="ByteSpace" priority />

                    {/* Navigation */}
                    <nav className="mt-10 flex flex-col gap-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-base font-medium text-gray-800 transition-colors hover:text-gray-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>

                    {/* Mobile Actions */}
                    <div className="mt-20 flex flex-col gap-6 text-base text-gray-800 font-semibold">
                      <Link
                        href="/sign-in"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer"
                      >
                        Sign in
                      </Link>

                      <Link
                        href="/sign-up"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer"
                      >
                        Join Us
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
