import React from 'react';

import { 
	FaEbay, 
	FaCcPaypal, 
	FaShopware,
	FaStarOfLife,
} from 'react-icons/fa';
import { GiLifeBar, GiMilkCarton, GiClothes } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { SiSpacex } from 'react-icons/si';
import { MdOutlineLocalGroceryStore, MdAudiotrack } from 'react-icons/md'
import { RiBillFill } from 'react-icons/ri';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const featuresData = [
	{
		name: 'Ebay',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(FaEbay),
		imgClass: 'one',
	},
	{
		name: 'Aspire Lifestyle',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(GiLifeBar),
		imgClass: 'two',
	},
	{
		name: 'PayPal',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(FaCcPaypal),
		imgClass: 'three',
	},
	{
		name: 'Courts',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(FaShopware),
		imgClass: 'four',
	},
	{
		name: 'Friso',
		description: 'Worldwide, Multinational Companies',
		icon: iconStyle(GiMilkCarton),
		imgClass: 'five',
	},
	{
		name: 'Priceline Pharmacy',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(FaStarOfLife),
		imgClass: 'six',
	},
	{
		name: 'Lotte',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(MdOutlineLocalGroceryStore),
		imgClass: 'seven',
	},
	{
		name: 'Smartbox',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(MdAudiotrack),
		imgClass: 'eight',
	},
	{
		name: 'SpaceX',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(SiSpacex),
		imgClass: 'nine',
	},
	{
		name: 'Dreamworks',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(BiCameraMovie),
		imgClass: 'ten',
	},
	{
		name: 'Eway',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(RiBillFill),
		imgClass: 'eleven',
	},
	{
		name: 'Club 21',
		description:
			'Worldwide, Multinational Companies',
		icon: iconStyle(GiClothes),
		imgClass: 'twelve',
	},
];

export default featuresData