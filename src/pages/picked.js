import { useState } from "react";
import { RiDropdownList } from "react-icons/ri";
import AccommodationCard from "../components/accomodationCard";
import PreviousNextMethods from "../components/carousel";
import ContactCard from "../components/contactCard";
import Forms from "../components/form";

export default function Picked() {
  const [activeTab, setActiveTab] = useState("Available Programs");
  const tabs = [
    "Available Programs",
    "Admission Requirements",
    "Accommodation",
    "Communities",
    "Student Experience",
    "Contact",
  ];
  const accommodations = [
    {
      title: "Maple Residence",
      image:
        "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE=",
      subtitle: "Off-campus",
    },
    {
      image:
        "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE=",
      title: "Maple Residence",
      subtitle: "On-campus",
    },
  ];

  const availablePrograms = () => {
    return (
      <div className="p-[50px]">
        <h2 className="font-[500] text-[35px]">Accommodation</h2>
        <p className="my-5 w-[50%]">
          Select from a list of available programs to find more information
          specific to the program. Please note that this list...
        </p>

        <div className="flex items-center float-right gap-3 mb-5">
          <button className="p-2 rounded-[15px] bg-[#ff6c69] text-white text-red-500">
            All
          </button>
          <button className="p-2 rounded-[15px] bg-[#fdecf0] text-red-500">
            Private Apartment
          </button>
          <button className="p-2 rounded-[15px] bg-[#fdecf0] text-red-500">
            Shop Apartment
          </button>
          <button className="p-2 rounded-[15px] bg-[#fdecf0] text-red-500">
            Off-campus
          </button>
          <button className="p-2 rounded-[15px] bg-[#fdecf0] text-red-500">
            Shared Apartment
          </button>
          <button className="p-2 rounded-[15px] bg-[#fdecf0] text-red-500">
            Homestay
          </button>
        </div>

        <div className="pt-8 space-y-4 flex iteems-center gap-5">
          {accommodations.map((item, index) => (
            <AccommodationCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    );
  };

  const studentExperience = () => {
    return (
      <div className="flex flex-col lg:flex-row items-start gap-6 my-8 px-4 lg:px-16">
        <div className="lg:w-1/3 w-full">
          <h2 className="text-2xl font-bold ">Student Experience</h2>
          <img
            src="https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE="
            alt="Student Experience"
            className="rounded-lg shadow-lg w-full h-80"
          />
        </div>

        <div className="lg:w-2/3 w-full">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            tempor dolor, non varius est. Suspendisse potenti. Nullam facilisis
            purus a odio ultrices, et malesuada odio venenatis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sed eget ante est. Nulla facilisi. Etiam tincidunt, elit id interdum
            pretium, nisi ex venenatis nisi, eget bibendum velit justo nec
            nulla.
          </p>
        </div>
      </div>
    );
  };

  const contact = () => {
    return (
      <div className="p-[50px]">
        <h2 className="font-[500] text-[35px]">Contact</h2>
        <p className="my-5">
          We'd love to help us find and apply to top universities around the
          world. Explore programs, manage applications, and find your ideal
          student home, Here are
        </p>

        <div className="mt-4 flex items-center justify-center">
          <ContactCard bgColor="#FFF" />
        </div>

        <div className="mt-[50px]">
            <Forms  bgColor="#FFF"/>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="pl-[70px] pt-[50px]">
        <div className="bg-[#fdecf0]">
          <div className=" bg-[#fff] w-[70%] pb-[40px]">
            <h1 className="text-[3rem] font-[700]">Picked For You</h1>
            <p className="text-[gray] w-[38%]">
              we understand your need and have selected a few institutiond that
              you may like. Feel free to provide your feedback and suggestions
              below
            </p>
          </div>
        </div>
        <PreviousNextMethods />

        <div className="flex items-start justify-between  w-[800px] gap-[100px] w-full">
          <div className="flex items-start gap-3">
            <figure className="border rounded-[100%] h-[100px] w-[100px]">
              <img
                src=""
                className="w-[100%] h-[100%] rounded-[100%] object-[contain] oveflow-hidden"
                alt=""
              />
            </figure>
            <div>
              <h3 className="text-[2rem] font-[700]">Covenant University </h3>
              <div className="inline-flex items-center gap-1 font-[600]">
                <figure className="h-[40px] w-[40px] border">
                  <img src="" className="h-[100%] w-[100%]" alt="" />
                </figure>{" "}
                Ola, Ogun state
              </div>
              <p className="bg-[#fdecf0] w-[180px] text-[#ff6c69] rounded-[50px] font-[600] text-center p-[5px] ">
                Admission in progress{" "}
              </p>
            </div>
          </div>
          <div>
            <button className=" flex items-center gap-1 rounded p-[10px] bg-[#ff6c69] text-[white]">
              <RiDropdownList /> Shortlist
            </button>
          </div>
        </div>
        <p className="mt-1">
          Covenant University is a growing, dynamic vision-driven University
          founded on the christain mission and commited to pioneering at the
          cutting edge of learning.{" "}
        </p>
        <div className="pr-[50px] my-[50px]">
          <div className="bg-[#fdecf0] w-full h-[50px] rounded flex items-center justify-center">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-1 text-sm font-medium rounded transition-colors ${
                  activeTab === tab
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-500 hover:text-red-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div></div>
          <div className="mt-1 bg-[#F5F5F5]">
            {activeTab == "Available Programs"
              ? availablePrograms()
              : activeTab == "Student Experience"
              ? studentExperience()
              : activeTab == "Contact"
              ? contact()
              : null}

            <button className="float-right my-[50px] p-3 font-[600] rounded  bg-[#ff6c69] text-white  ">
              Proceed to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
