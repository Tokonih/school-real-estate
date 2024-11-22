import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidChat } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

export default function ContactCard({ bgColor = "#F5F5F5" }) {
  return (
    <div className="flex items-start gap-5 wrap">
      <div
        className={`h-[200px] w-[250px] flex flex-col items-center justify-center gap-4 rounded`}
        style={{ backgroundColor: bgColor }}
      >
        <BsFillTelephoneFill className="text-[25px]" />
        <p className="font-[400] text-[15px]">Call Us Directly</p>
        <p className="font-[700]">+234 706 675 5676</p>
        <p className="text-red-500 text-[10px] font-[700]">See more members</p>
      </div>

      <div
        className={`h-[200px] w-[250px] flex flex-col items-center justify-center gap-4 rounded`}
        style={{ backgroundColor: bgColor }}
      >
        <BiSolidChat className="text-[30px]" />
        <p className="font-[400] text-[15px]">Chat With Us</p>
        <button className="py-2 px-4 text-[13px] rounded bg-[red] text-white">
          Chat with Team
        </button>
      </div>

      <div
        className={`h-[200px] w-[250px] flex flex-col items-center justify-center gap-4 rounded`}
        style={{ backgroundColor: bgColor }}
      >
        <IoMdMail className="text-[30px]" />
        <p className="font-[400] text-[15px]">Send Us an Email</p>
        <button className="py-2 px-4 text-[13px] rounded bg-[red] text-white">
          Send Email
        </button>
      </div>
    </div>
  );
}
