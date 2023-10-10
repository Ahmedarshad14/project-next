import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
	return (
		<>
			<footer className="border border-t-2 text-black-100">
				<div className="container flex flex-col md:flex-row justify-between mx-auto pt-4 pb-4 max-w-6xl">
					<div className="clm-1 flex-col mt-8 ml-8">
						<Image src="/logo.svg" alt="footer-logo" width={118} height={18} />
						<div className="mt-4">
							<p>Car Club 2023</p>
							<p>All Rights Reserved</p>
						</div>
					</div>
					<div className="clm-2 flex flex-col mt-8  ml-8">
						<h4 className="font-bold">About</h4>
						<div className="mt-4 flex flex-col pt-4 pb-4">
							<Link href="#" className="pb-4">
								How It Works
							</Link>
							<Link href="#" className="pb-4">
								Featured
							</Link>
							<Link href="#" className="pb-4">
								Partnership
							</Link>
							<Link href="#" className="pb-4">
								Business Relation
							</Link>
						</div>
					</div>
					<div className="clm-3 flex flex-col mt-8  ml-8">
						<h4 className="font-bold">Company</h4>
						<div className="mt-4 flex flex-col pt-4 pb-4">
							<Link href="#" className="pb-4">
								Events
							</Link>
							<Link href="#" className="pb-4">
								Blogs
							</Link>
							<Link href="#" className="pb-4">
								Podcasts
							</Link>
							<Link href="#" className="pb-4">
								Invite a Friend
							</Link>
						</div>
					</div>
					<div className="clm-4 flex flex-col mt-8  ml-8">
						<h4 className="font-bold">Social</h4>
						<div className="mt-4 flex flex-col pt-4 pb-4">
							<Link href="#" className="pb-4">
								Facebook
							</Link>
							<Link href="#" className="pb-4">
								Twitter
							</Link>
							<Link href="#" className="pb-4">
								Instagram
							</Link>
							<Link href="#" className="pb-4">
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
