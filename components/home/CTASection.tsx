import Container from "../ui/Container";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#003BE2] py-16 sm:py-20 lg:py-24">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero Page/bg-image.png')" }}
      />

      {/* Overlay: keeps the text readable on small screens */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#003BE2]/70 md:bg-transparent"
      />

      {/* Content */}
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:gap-8 lg:gap-10">
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#F5F5F6] sm:text-4xl lg:text-[44px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p className="text-base leading-7 text-[#F5F5F6] sm:text-lg sm:leading-8">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Button className="w-full cursor-pointer text-[18px] text-[#242528] sm:w-auto">
            Join as Creator
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
