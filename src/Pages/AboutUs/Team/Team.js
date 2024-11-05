export default function Team() {
	const teamMembers = [
		{
			name: 'Ms. Veronica',
			title: 'Web Designer',
			image: 'https://res.cloudinary.com/dolttvkme/image/upload/v1730806110/leader4_aalcq4.png', // Replace with actual image URL
		},
		{
			name: 'Missa Santos',
			title: 'CEO Founder',
			image: 'https://res.cloudinary.com/dolttvkme/image/upload/v1730806109/leader2_yeq8yi.png', // Replace with actual image URL
		},
		{
			name: 'Missa Santos',
			title: 'Chief Officer',
			image: 'https://res.cloudinary.com/dolttvkme/image/upload/v1730806109/leader3_yt8xoz.png', // Replace with actual image URL
		},
		{
			name: 'Lisa Antonia',
			title: 'CTO',
			image: 'https://res.cloudinary.com/dolttvkme/image/upload/v1730806109/leader1_khgrfx.png', // Replace with actual image URL
		},
	];

	return (
		<div className="py-12 px-6">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-10">MEET OUR TEAM</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
					>
						{/* Profile Image */}
						<img
							src={member.image}
							alt={member.name}
							className="w-32 h-32 rounded-full object-cover mb-4"
						/>

						{/* Name */}
						<h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>

						{/* Job Title */}
						<p className="text-gray-500">{member.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}
