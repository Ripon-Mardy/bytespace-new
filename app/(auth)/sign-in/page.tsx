import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// images
import logo from "@/public/logo.png";
import signinImage from "@/public/sign-in.png";
import facebook from "@/public/facebook.png";
import google from "@/public/google.png";

const page = () => {
  return (
    <section>
      <div className="bg-[#0037D9]">
        {/* bakground  */}
        <div
          aria-hidden="true"
          className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_2px)]
          bg-[size:64px_64px] md:bg-[size:96px_96px] lg:bg-[size:120px_120px]
        "
        />

        <Container className="py-10">
          {/* logo  */}
          <Link href={"/"} className="h-30">
            <Image src={logo} alt="logo" />
          </Link>

          {/* sign in form  */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl leading-[1.2] tracking-[-1%]">
                Sign in with ease
              </h2>
              <p className="text-[18px] font-normal text-white leading-[1.6] tracking-normal">
                Experience a seamless and efficient sign-in process that grants
                you instant access to a world of knowledge.
              </p>
              <Image src={signinImage} alt="image" />
            </div>

            <form
              action="#"
              className="flex min-h-175 md:w-144.75 flex-col rounded-3xl bg-white px-8 md:px-15.75 py-8 md:py-15.25"
            >
              <div className="w-full">
                <h4 className="text-[#003BE2] font-normal text-[18px] leading-[1.6]">
                  Sign In
                </h4>
                <h2 className="text-[44px] md:max-w-sm font-semibold tracking-[-1%] leading-[1.2] text-[#242528] mt-2">
                  Welcome Back
                </h2>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="#"
                    className="font-medium block text-sm leading-[1.2] text-[#000000] "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="rounded-xl py-3 px-6 border border-[#E5E6E8] outline-none w-full focus-within:border focus-within:border-gray-500 transition-colors duration-100"
                    placeholder="designer@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="#"
                    className="font-medium block text-sm leading-[1.2] text-[#000000] "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="rounded-xl py-3 px-6 border border-[#E5E6E8] outline-none w-full focus-within:border focus-within:border-gray-500 transition-colors duration-100"
                    placeholder="************"
                    required
                  />
                </div>

                <div className="text-end">
                  <Button
                    type="submit"
                    className="w-fit flex justify-end cursor-pointer"
                  >
                    Sign In
                  </Button>
                </div>
              </div>

              {/* --- or ---  */}
              <div className="flex items-center gap-4 mt-[60px]">
                <div className="h-px flex-1 bg-[#D1D1D1]" />
                <span className="text-sm text-[#888888]">or</span>
                <div className="h-px flex-1 bg-[#D1D1D1]" />
              </div>

              {/* facebook or google login button  */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <button className="border border-[#D1D1D1] p-3 rounded-xl cursor-pointer">
                  <Image src={facebook} className="w-7 h-7" alt="facebook" />
                </button>

                <button className="border border-[#D1D1D1] p-3 rounded-xl cursor-pointer">
                  <Image src={google} className="w-7 h-7" alt="google" />
                </button>
              </div>

              {/* don't have account  */}
              <div className="mt-auto flex items-center justify-center gap-1 pt-8">
                <span className="text-sm text-gray-600">New user?</span>

                <Link
                  href="/sign-in"
                  className="text-sm font-normal text-[#003BE2] hover:underline"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default page;
