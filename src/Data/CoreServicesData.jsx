import React from 'react';

import { 
    FaShopify,
} from 'react-icons/fa';
import { SiAdobe, SiContentful, SiBigcommerce, SiGoogleoptimize } from 'react-icons/si';
import { AiFillDatabase, AiOutlineDashboard, AiOutlineCloudServer } from 'react-icons/ai';
import { BsFillCloudArrowUpFill, BsTools } from 'react-icons/bs';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const featuresData = [
	{
		name: 'Adobe | Magento Commerce',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(SiAdobe),
		imgClass: 'one',
	},
	{
		name: 'SITECORE',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(AiFillDatabase),
		imgClass: 'two',
	},
	{
		name: 'Contentful',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(SiContentful),
		imgClass: 'three',
	},
	{
		name: 'CONTENTSTACK',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(AiOutlineDashboard),
		imgClass: 'four',
	},
	{
		name: 'Salesforce',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(BsFillCloudArrowUpFill),
		imgClass: 'five',
	},
	{
		name: 'ShopifyPlus',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(FaShopify),
		imgClass: 'six',
	},
	{
		name: 'BIGCOMMERCE',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(SiBigcommerce),
		imgClass: 'seven',
	},
	{
		name: 'CommerceTools',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(BsTools),
		imgClass: 'eight',
	},
	{
		name: 'Optimizely',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(SiGoogleoptimize),
		imgClass: 'nine',
	},
	{
		name: 'BESPIN GLOBAL',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(AiOutlineCloudServer),
		imgClass: 'ten',
	},
];

export default featuresData