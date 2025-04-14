import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits For Sellers",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Endless Variety",
      desc: "Discover thousands of products from independent sellers and top brands",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Secure Payments",
      desc: "Shop with confidence through our encrypted checkout system.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Fast Delivery",
      desc: "TEnjoy reliable and tracked shipping on every order.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits For Sellers",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Launch Your Store in Minutes",
      desc: " Easy setup with zero coding skills required.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Reach New Customers",
      desc: "Tap into a growing community of active shoppers.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Manage with Ease",
      desc: "From inventory to shipping, our tools handle it all.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
