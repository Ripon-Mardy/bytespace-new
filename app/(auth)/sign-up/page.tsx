import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

// images
import logo from "@/public/logo.png";
import signinImage from "@/public/sign-in.png";
import Button from "@/components/ui/Button";

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
                Sign up and come in
              </h2>
              <p className="text-[18px] font-normal text-white leading-[1.6] tracking-normal">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </p>
              <Image src={signinImage} alt="image" />
            </div>

            <form
              action="#"
              className="flex min-h-175 md:w-144.75 flex-col rounded-3xl bg-white px-8 md:px-15.75 py-8 md:py-15.25"
            >
              <div className="w-full">
                <h4 className="text-[#003BE2] font-normal text-[18px] leading-[1.6]">
                  Create an Account
                </h4>
                <h2 className="text-[44px] md:max-w-sm font-semibold tracking-[-1%] leading-[1.2] text-[#242528] mt-2">
                  Welcome to ByteSpace
                </h2>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="#"
                    className="font-medium block text-sm leading-[1.2] text-[#000000] "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="rounded-xl py-3 px-6 border border-[#E5E6E8] outline-none w-full focus-within:border focus-within:border-gray-500 transition-colors duration-100"
                    placeholder="Jamie Davis"
                    required
                  />
                </div>

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
                    Continue
                  </Button>
                </div>
              </div>

              {/* don't have account  */}
              <div className="mt-auto flex items-center justify-center gap-1 pt-8">
                <span className="text-sm text-gray-600">
                  Already have an account?
                </span>

                <Link
                  href="/sign-in"
                  className="text-sm font-normal text-[#003BE2] hover:underline"
                >
                  Login
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
