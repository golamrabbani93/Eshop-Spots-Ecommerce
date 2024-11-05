export default function Featured() {
	const features = [
		{
			icon: '💡', // Replace with actual icon or image
			title: 'Creative Always',
			description:
				'Stay creative with Billey and the huge collection of premade elements, layouts & effects.',
		},
		{
			icon: '✏️', // Replace with actual icon or image
			title: 'Express Customization',
			description:
				'Easy to install and configure the theme customization in a few clicks with Billey.',
		},
		{
			icon: '📄', // Replace with actual icon or image
			title: 'Premium Integrations',
			description:
				'Integrated premium plugins in Billey is the secret weapon for your business to thrive.',
		},
		{
			icon: '🕒', // Replace with actual icon or image
			title: 'Real-time Editing',
			description:
				'Edit your work and preview the changes on the screen live with advanced page builder.',
		},
	];

	return (
		<div className="py-12 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
				{features.map((feature, index) => (
					<div key={index} className="flex flex-col items-center space-y-4">
						{/* Icon */}
						<div className="text-5xl text-primary">{feature.icon}</div>

						{/* Title */}
						<h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>

						{/* Description */}
						<p className="text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
