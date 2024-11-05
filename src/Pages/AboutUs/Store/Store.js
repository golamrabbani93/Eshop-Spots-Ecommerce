const Store = () => {
	return (
		<div>
			<div className="flex flex-wrap items-center justify-center p-8 lg:p-16 bg-gray-50">
				{/* Image Section */}
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src="https://res.cloudinary.com/dolttvkme/image/upload/v1730805418/banner-style-7-img-1_znsvjd.jpg" // Replace with actual image URL
						alt="About Our Store"
						className="w-full max-w-md rounded-lg shadow-md"
					/>
				</div>

				{/* Text Content Section */}
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT OUR E-ShopSpots</h2>
					<p className="text-lg font-semibold text-gray-700 mb-4">
						We believe that every project existing in digital world is a result of an idea and every
						idea has a cause.
					</p>
					<p className="text-gray-600 leading-relaxed">
						For this reason, our each design serves an idea. Our strength in design is reflected by
						our name, our care for details. Our specialist won't be afraid to go extra miles just to
						approach near perfection. We don't require everything to be perfect, but we need them to
						be perfectly cared for. That's a reason why we are willing to give contributions at
						best. Not a single detail is missed out under Billey's professional eyes. The amount of
						dedication and effort equals to the level of passion and determination. Get better,
						together as one.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Store;
