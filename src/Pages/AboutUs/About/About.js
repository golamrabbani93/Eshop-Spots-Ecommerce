import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import Featured from '../Featured/Featured';
import Store from '../Store/Store';
import Team from '../Team/Team';

const About = () => {
	// !breaditems list
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'About us',
			path: '/about-us',
		},
	];

	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto my-[100px]">
				<Store />
			</div>
			<div className="container mx-auto">
				<Featured />
			</div>
			<div className="container mx-auto my-[100px]">
				<Team />
			</div>
		</div>
	);
};

export default About;
