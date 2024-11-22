import Forms from "../components/form";
import ContactCard from "../components/contactCard";

export default function Contact() {
  return (
    <div className="p-[50px] max-w-[1600px] m-auto ">
      <div className="relative">
        <div className="flex items-start ">
          <div className="pt-[50px] w-[50%]">
            <h1 className="text-[3rem] font-[700]">Contact Us</h1>
            <p className="w-[70%]">
              We'd love to help us find and apply to top universities around the
              world. Explore programs, manage applications, and find your ideal
              student home, Here are a few ways to reach out to our teram.
            </p>
          </div>
          <div className="w-[50%]">
            <figure className="h-[400px] w-full">
              <img
                className="h-[100%] w-[100%]"
                src="https://media.istockphoto.com/id/1644960114/photo/mid-adult-man-working-on-a-call-center-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=2mSy9mY8hqg4TEtQV2U2-axcVEx0bBZD3LYOtNiX4w0="
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="absolute top-[300px]">
          <ContactCard />
        </div>
      </div>
      <div className="mt-[130px] ">
        <Forms />
      </div>
    </div>
  );
}
