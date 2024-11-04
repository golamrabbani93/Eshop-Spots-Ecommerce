import React from 'react';
import {Link} from 'react-router-dom';
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi';
const Footer = () => {
	return (
		<div className="bg-[#24262b] overflow-hidden">
			<div className="container mx-auto px-[40px] md:px-[120px]">
				{/* !footer top */}
				<div className="footer-top pt-[100px]  pb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-7">
					<div>
						<h2 className="font-extrabold uppercase text-white text-base pb-4">INFORMATION</h2>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:translate-x-3 duration-500 pb-2">
							Delivery Information
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Terms & Conditions
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Contact
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Returns
						</Link>
					</div>
					<div>
						<h2 className="font-extrabold uppercase text-white text-base pb-4">My account</h2>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:translate-x-3 duration-500 pb-2">
							My Account
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Wishlist
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Privacy Policy
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Frequently Questions
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Order History
						</Link>
					</div>
					<div>
						<h2 className="font-extrabold uppercase text-white text-base pb-4">CATEGORIES</h2>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:translate-x-3 duration-500 pb-2">
							Decorative
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Kitchen utensils
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Chair & Bar stools
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Sofas and Armchairs
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Interior lighting
						</Link>
					</div>
					<div>
						<h2 className="font-extrabold uppercase text-white text-base pb-4">ABOUT US</h2>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:translate-x-3 duration-500 pb-2">
							We are a team of designers and developers that create high quality Magento,
							Prestashop, Opencart.
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Address: Your address goes here.
						</Link>
						<Link className="block text-sm text-[#9B9B97] hover:text-white transition-all hover:ml-4 duration-500 pb-2">
							Email:demo@example.com
						</Link>
					</div>
				</div>
			</div>
			<div className="divider after:bg-slate-400 before:bg-slate-400 before:h-[1px] after:h-[1px]"></div>
			{/* Footer Middle */}
			<div className="container mx-auto px-[40px] md:px-[120px]">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
					{/* Social */}
					<div className="py-[60px] xl:pl-36">
						<h2 className="font-extrabold uppercase text-white text-base pb-4">FOLLOW US</h2>
						<div className="social list-none inline-flex gap-4 ">
							<li className="">
								<Link className="flex justify-center items-center w-10 h-10 rounded-full bg-[#2f3239] text-white hover:bg-primary  transition-all duration-500">
									<BiLogoFacebook className="w-5 h-5" />
								</Link>
							</li>
							<li className=" ">
								<Link className="flex justify-center items-center w-10 h-10 rounded-full bg-[#2f3239] text-white hover:bg-primary  transition-all duration-500">
									<BiLogoTwitter className="w-5 h-5" />
								</Link>
							</li>
							<li className=" ">
								<Link className="flex justify-center items-center w-10 h-10 rounded-full bg-[#2f3239] text-white hover:bg-primary  transition-all duration-500">
									<BiLogoInstagram className="w-5 h-5" />
								</Link>
							</li>
							<li className=" ">
								<Link className="flex justify-center items-center w-10 h-10 rounded-full bg-[#2f3239] text-white hover:bg-primary  transition-all duration-500">
									<BiLogoLinkedin className="w-5 h-5" />
								</Link>
							</li>
						</div>
					</div>
					{/* Newsletter */}
					<div className="">
						<h2 className="font-extrabold uppercase text-white text-base pb-4">
							DON'T MISS OUT ON THE LATEST
						</h2>

						<div className="flex">
							<input
								type="text"
								className="w-full h-[50px] border rounded-l border-[#9B9B97] outline-none px-4 text-white bg-transparent focus:border-primary transition-all duration-500"
								placeholder="Enter your email"
							/>
							<button className="btn btn-primary rounded-none h-[50px]">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
			<div className="divider after:bg-slate-400 before:bg-slate-400 before:h-[1px] after:h-[1px]"></div>
			<div className="container mx-auto px-[40px] md:px-[120px]">
				<div className="flex flex-wrap justify-between items-center ">
					<div className="copyright py-[20px]">
						<h2 className="text-white uppercase text-sm">
							© {new Date().getFullYear()} Eshop-spots. Made by{' '}
							<Link to={`https://dev-rabbani.web.app/`} className="text-primary">
								Golam rabbani
							</Link>
						</h2>
					</div>
					<div className="company">
						<img src="https://i.ibb.co/340xmC5/payment.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
