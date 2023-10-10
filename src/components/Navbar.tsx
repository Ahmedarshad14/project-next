import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="flex justify-between items-center max-w-[1440px] sm:px-16 px-6 py-4 lg:px-6 mx-auto">
				<Link href="/" className="flex justify-center items-center">
					<Image src="logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
				</Link>
        <CustomButton title='Sign in' btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
			</nav>
		</header>
	);
};

export default Navbar;