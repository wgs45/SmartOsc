import React from 'react';
import { Container, Section } from '../globalStyles';
import {
	FeatureText,
	FeatureTitle, 
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './PartnerStyle';
import PartnerData from './PartnerData';

const Partner = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" reverse id="">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>We Partner</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{PartnerData.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Partner;
