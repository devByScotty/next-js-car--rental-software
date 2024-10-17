import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10 py-2">
      <nav className="max-width flex-between padding-x padding-y bg-transparent">
        <Link href="/" className="flex-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-white z-10 rounded-full bg-primary-blue min-w-[130px]"
        />

        <CustomButton
          title="Sign up"
          btnType="button"
          containerStyles="text-white z-10 rounded-full bg-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
