import Image from "next/image";

import Button from "../ui/Button";
import Icon from "../ui/Icon";

// user image
import userImage from "@/public/user/user1.png";

const EnrollCard = () => {
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="rounded-3xl p-10 bg-white md:w-122.25 mb-6 md:mb-0 border border-[#CED0D3]">
      <h2 className="text-lg md:text-[20px] font-semibold tracking-[-1%] leading-[1.2]">
        112 Lessons (24 hours)
      </h2>

      {/* duration  */}
      <div className="mt-6 flex flex-col gap-6">
        <div className=" flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[#242528] font-medium text-base">
              <span> 01 </span>
              <h4>Introduction to Digital Assets</h4>
            </div>
            <span className="text-[#003BE2] text-base font-normal leading-[1.6]">
              12 mins
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[#242528] font-medium text-base">
              <span> 02 </span>
              <h4>Design Principles for Impacts</h4>
            </div>
            <span className="text-[#003BE2] text-base font-normal leading-[1.6]">
              21 mins
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[#242528] font-medium text-base">
              <span> 03 </span>
              <h4>Advanced Techniques in Digital Creation</h4>
            </div>
            <span className="text-[#003BE2] text-base font-normal leading-[1.6]">
              16 mins
            </span>
          </div>

          <p className="text-[#4F4F4F] text-base leading-[1.6] font-normal">
            99 more videos
          </p>
        </div>

        <p className="text-[#4F4F4F]">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div>
          <span className="text-[36px] font-semibold text-[#003BE2]">
            {priceFormatter.format("25")}
          </span>
          <span className="ml-0.5 text-[12px] font-normal text-[#4F4F4F] leading-[1.6] ">
            /lifetime
          </span>
        </div>

        <Button> Enroll Now </Button>

        <h2 className="font-semibold text-[20px] text-[#000000] leading-[1.2] tracking-[-1%]">
          This course include
        </h2>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#4F4F4F] font-normal text-base leading-[1.6]">
            <Icon name="FolderBookmark" className="text-[#003BE2]" size={18} />
            Learning Resources
          </div>
          <div className="flex items-center gap-2 text-[#4F4F4F] font-normal text-base leading-[1.6]">
            <Icon name="Video" className="text-[#003BE2]" size={18} />
            Quality Lesson Videos
          </div>
          <div className="flex items-center gap-2 text-[#4F4F4F] font-normal text-base leading-[1.6]">
            <Icon name="StickyNote" className="text-[#003BE2]" size={18} />
            Certificate of Completion
          </div>
          <div className="flex items-center gap-2 text-[#4F4F4F] font-normal text-base leading-[1.6]">
            <Icon name="GlobeLock" className="text-[#003BE2]" size={18} />
            Private Consultation
          </div>
        </div>

        <hr className="text-[#D1D1D1]" />

        {/* profile  */}
        <div className="flex items-center gap-3">
          <div className="w-[52px] h-[52px]">
            <Image src={userImage} alt="user" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[18px] leading-[1.2] text-[#242528]">
              PurePearl Studio
            </span>
            <span className="text-[#4F4F4F] font-normal text-base leading-[1.6]">
              Professional Creator
            </span>
          </div>
        </div>

        <p className="font-normal text-base leading-[1.6] text-[#4B4C53]">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button className="rounded-3xl py-2 px-4 border border-[#CED0D3] font-medium text-base leading-[1.2] text-[#4B4C53] cursor-pointer w-fit">
          See Full Profile
        </button>
      </div>
    </div>
  );
};

export default EnrollCard;
