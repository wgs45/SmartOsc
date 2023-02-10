import Connection from '../assets/images/Connection.svg';
import ChartUp from '../assets/images/ChartUp.svg';
import Deal from '../assets/images/Deal.svg';
import NewsLetter from '../assets/images/newsletter-icon.svg';
import Address from '../assets/images/address-icon.svg';
 
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Let’s work together. Growing your business exponentially, digitally',
	},
	headline: "How’s Future?",
	description: 'As the world becomes more digital, we help you upgrade your business to stay ahead with innovative solutions. We’re a trusted partner who specializes in transforming organizations so they can thrive now and into next generation technologies.',
	buttonLabel: 'Learn More',

    linkTo: '/services',
	imgStart: 'start',
	img: ChartUp,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Digital Transformation',
	},
	headline: 'Transformation Project',
	description: 'Consult and customize your digital transformation with fixed budget and timeline',
	buttonLabel: 'Learn More',

	linkTo: '/services',
	imgStart: 'start',
	img: Connection,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Core Services',
	},
	headline: 'Extended Team & Managed Service',
	description:
		'With more than 800+ specialists, we are ready to be part of your digital growth catalyst',
	buttonLabel: 'Learn more',

	linkTo: '/services',
	imgStart: 'start',
	img: Deal,
	start: 'true',
};

export const heroFour = {
	reverse: false,
	inverse: true,
	topLine: {
		text: 'More info',
	},
	headline: 'Newsletter',
	description:
		'Are you ready to transform your business with digital technology?',
	buttonLabel: 'Contact Us',

	linkTo: '/connect',
	imgStart: 'start',
	img: NewsLetter,
	start: 'true',
};

export const heroFive = {
	reverse: true,
	inverse: false,
	topLine: {
		text: 'More info',
	},
	headline: 'Company Address',
	description:
		'One Pacific Place, Sudirman Central Business District, 15th Floor, Jl. Jend. Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta 12190, Indonesia',
	buttonLabel: 'Find Us',

	linkTo: '/',
	imgStart: 'start',
	img: Address,
	start: 'true',
};
