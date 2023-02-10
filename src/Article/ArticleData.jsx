import clients from '../assets/images/clients.jpg';
import teamwork from '../assets/images/teamwork.jpg';

export const data = [
	{
		title: 'Digital Consultancy',
		description:
			'Which is the best digital transformation consultancy firm for banks.',
		image: clients,
	},
	{
		title: 'Cryptocurrency',
		description: 'Commercetools payment integration: Cryptocurrency and Crypto Payments.',
		image: teamwork,
	},
	{
		title: 'Powerful Ecommerce',
		description: 'Powerful Ecommerce statistics that will guide your strategy in 2023.',
		image: clients,
	},
	{
		title: 'Marketplace',
		description: 'Marketplace vs. Your Own eCommerce Website: Which One is Better?',
		image: teamwork,
	},
	{
		title: 'SmartOsc Ceo',
		description: 'SmartOSC’s CEO Thai Son Nguyen Accepted into Forbes Business Council.',
		image: clients,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
