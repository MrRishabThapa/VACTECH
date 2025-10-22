import {
  Facebook,
  Instagram,
  Mail,
  MapPinned,
  PhoneIcon,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 pt-20 text-white, md:py-4 md:px-13 lg:px-14 ">
      <div className="flex justify-between py-6">
        <div className="max-w-md  ">
          <h2 className="text-xl font-medium text-gray-800 mb-4">About us</h2>

          <p className="text-gray-800 text-sm ">
            Your Pathway to Innovation and Success.Empowering students with
            knowledge, skills, and confidence to shape the future.{" "}
          </p>

          <div className="gap-x-4 pt-4">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Connect</h2>
            <div className="flex flex-row items-center gap-x-3 mb-3">
              <a
                href=" "
                className="hover: underline bg-white/80 text-gray-600 p-2 rounded-full shadow text-gray-400="
              >
                <Facebook />
              </a>
              <a
                href=" "
                className="hover: underline  bg-white/80 text-gray-600 p-2 rounded-full shadow text-gray-400="
              >
                <Twitter />
              </a>
              <a
                href=" "
                className="hover: underline bg-white/80 text-gray-600 p-2 rounded-full shadow text-gray-400="
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Quick links{" "}
          </h2>
          <ul>
            <li>
              <a
                href=" "
                className=" text-sm text-size-3  text-gray-600  hover:text-white/490 focus:text-gray "
              >
                {" "}
                Home
              </a>
            </li>
            <li>
              <a
                href=" "
                className="text-sm text-size-3  text-gray-600 hover:text-white/490 focus:text-gray "
              >
                {" "}
                service
              </a>
            </li>
            <li>
              <a
                href=" "
                className="text-sm text-size-3   text-gray-600 hover:text-white/490 focus:text-gray"
              >
                {" "}
                contact{" "}
              </a>
            </li>
            <li>
              <a
                href=" "
                className="text-sm text-size-3   text-gray-600 hover:text-white/490 focus:text-gray"
              >
                {" "}
                about us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-4">Resources</h2>
          <div className=" gap-x-3 py-1.5">
            <ul>
              <li className="text-sm cursor-pointer text-gray-600 px-1 hover:text-white/490 focus:text-gray">
                {" "}
                Support
              </li>
              <li className="text-sm cursor-pointer text-gray-600 px-1 hover:text-white/490 focus:text-gray">
                {" "}
                Security
              </li>
              <li className="text-sm cursor-pointer text-gray-600 px-1 hover:text-white/490 focus:text-gray ">
                {" "}
                Help center
              </li>
              <li className="text-sm cursor-pointer text-gray-600 px-1 hover:text-white/490 focus:text-gray">
                {" "}
                Terms of use
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-4">Contact</h2>
          <ul>
            <div className="flex gap-x-3 py-1.5 text-sm">
              {" "}
              <PhoneIcon /> 025-584505
              <a href=" " className=" text-gray-600">
                {" "}
              </a>
            </div>
            <div className="flex gap-3 py-1.5 text-sm">
              {" "}
              <Mail /> official.vactechjr@gmail.com
              <a href=" " className=" text-gray-600">
                {" "}
              </a>
            </div>
            <div className="flex gap-3 py-1.5 text-sm">
              {" "}
              <MapPinned /> Aaitbare-itahari, sunsari
              <a href=" " className=" text-gray-600">
                {" "}
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-900 my-5" />

      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p className="text-gray-800 ">@2024 Vac Tec jr. All Right Reserved.</p>
        <div className="flex items-centre gap-4  text-sm text-gray-800 ">
          <a href="/terms" className="hover:text-black-700 underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-black-700 underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
