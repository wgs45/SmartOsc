import Vision from '../assets/images/About/vision-icon.svg';
import Mission from '../assets/images/About/mission-icon.svg';
import Help from '../assets/images/help-icon.svg';
import NewsLetter from '../assets/images/newsletter-icon.svg';

export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'SmartOsc',
	},
	headline: "Vision",
	description: 'Help grow business / organization through democratizing digital transformation.',
	buttonLabel: 'Learn More',

    linkTo: '/',
	imgStart: 'start',
	img: Vision,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'SmartOsc',
	},
	headline: 'Mission',
	description: 'Consistently enable growth with world class digital transformation.',
	buttonLabel: 'Learn More',

	linkTo: '/',
	imgStart: 'start',
	img: Mission,
	start: 'true',
};

export const heroThree = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'More Info',
	},
	headline: 'NewsLetter',
	description:
		'What can we help to digitalize your business?',
	buttonLabel: 'Contact Us',

	linkTo: '/',
	imgStart: 'start',
	img: NewsLetter,
	start: 'true',
};

export const heroFour = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Tools',
	},
	headline: 'Back To Home Page?',
	description:
		'Please kindly press the logo to redirect back to Home page.',
	buttonLabel: 'Understood',

	linkTo: '/',
	imgStart: 'start',
	img: Help,
	start: 'true',
};
