import contactNumber from '../assets/images/Contact/contact.svg';
import Email from '../assets/images/Contact/email.svg';
import Social from '../assets/images/Contact/social.svg';
import NewsLetter from '../assets/images/newsletter-icon.svg';
import Help from '../assets/images/help-icon.svg';
  
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Contact',
	},
	headline: "WhatsApp",
	description: 
    <ul>
        <li>Company Number: +62 xxxxxxxxx</li>
        <li>Admin Number: +62 xxxxxxxxx</li>
    </ul>,
	buttonLabel: 'Contact Now',

    linkTo: '/',
	imgStart: 'start',
	img: contactNumber,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Contact',
	},
	headline: 'Email',
	description: 
    <ul>
        <li>Company Email: xxxxxx@gmail.com</li>
        <li>Admin Email: xxxxxx@gmail.com</li>
    </ul>,
	buttonLabel: 'Contact Now',

	linkTo: '/',
	imgStart: 'start',
	img: Email,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Contact',
	},
	headline: 'Social Media',
	description:
		<ul>
            <li>Instagram: <a href = '/'>https://www.instagram.com</a></li>
            <li>Facebook: <a href = '/'>https://www.facebook.com</a></li>
            <li>Twitter: <a href = '/'>https://twitter.com</a></li>
            <li>LinkedIn: <a href = '/'>https://www.linkedin.com</a></li>
            <li>Google: <a href = '/'>https://www.google.com</a></li>
        </ul>,
	buttonLabel: 'Learn More',

	linkTo: '/',
	imgStart: 'start',
	img: Social,
	start: 'true',
};
 
export const heroFour = {
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
 
export const heroSix = {
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
