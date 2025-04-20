import { Container } from "./Container";
import AmazonLogo from "../public/img/brands/amazon.svg";
import MicrosoftLogo from "../public/img/brands/microsoft.svg";
import NetflixLogo from "../public/img/brands/netflix.svg";
import SonyLogo from "../public/img/brands/sony.svg";
import VerizonLogo from "../public/img/brands/verizon.svg";

export const TrustedBy = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white">
          Trusted by <span className="text-indigo-600">2000+</span> customers worldwide
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <AmazonLogo />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            <VerizonLogo />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            <MicrosoftLogo />
          </div>
          <div className="pt-1 text-gray-400 dark:text-gray-400">
            <NetflixLogo />
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <SonyLogo />
          </div>
        </div>
      </div>
    </Container>
  );
};
