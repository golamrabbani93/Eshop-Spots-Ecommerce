import {Link} from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter} from 'react-icons/bi';
import toast from 'react-hot-toast';
import {useState} from 'react';

const Contact = () => {
	// !breaditems list
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Contact us',
			path: '/contact-us',
		},
	];

	// !submit contact
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const submitContact = () => {
		if (!formData.name || !formData.email || !formData.subject || !formData.message) {
			toast.error('All fields are required');
			return;
		}
		const loading = toast.loading('Sending message...');
		setTimeout(() => {
			toast.success('Message sent successfully', {id: loading});
			setFormData({name: '', email: '', subject: '', message: ''});
		}, 2000);
		// You can add any logic here to send the data to a server or handle it as needed
	};
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto my-[100px]">
				<div className="lg:flex  bg-gray-50 p-8 space-y-8 lg:space-y-0 lg:space-x-8">
					<div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg space-y-6">
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<span className="bg-primary text-white p-2 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 10l9-7 9 7-9 7-9-7z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 22V13"
										/>
									</svg>
								</span>
								<div>
									<p className="text-gray-700">0123456789</p>
									<p className="text-gray-700">0123456789</p>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<span className="bg-primary text-white p-2 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16.707 3.293a1 1 0 00-1.414 0l-8 8a1 1 0 000 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414l-4-4z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9.75 6.75L15 12M5 5h6M5 9h3M5 13h2"
										/>
									</svg>
								</span>
								<div>
									<p className="text-gray-700">demo@example.com</p>
									<p className="text-gray-700">www.example.com</p>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<span className="bg-primary text-white p-2 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 8c0-4.418-7-6-7-6s-7 1.582-7 6a7 7 0 0014 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 8a7 7 0 0114 0M12 14v7m0 0l-2-2m2 2l2-2"
										/>
									</svg>
								</span>
								<p className="text-gray-700">Your address goes here.</p>
							</div>
						</div>

						<div className="">
							<h2 className="font-extrabold uppercase text-primary text-base pb-4">FOLLOW US</h2>
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
					</div>

					<div className="w-full lg:w-2/3 p-6 bg-gray-100 rounded-lg">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
						<form className="space-y-4">
							<div className="flex space-x-4">
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									placeholder="Name"
									className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
								/>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									placeholder="Email"
									className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
								/>
							</div>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								placeholder="Subject"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
							/>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								placeholder="Your Message"
								rows="4"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
							></textarea>
							<button
								type="button"
								onClick={submitContact}
								className="btn btn-outline btn-primary w-32"
							>
								SEND
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
