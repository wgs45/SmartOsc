import React from 'react';
import { motion } from 'framer-motion';
import { CounterData } from '../Data/CounterData';
import './CounterStyle.css';
import Maps from '../assets/images/maps-icon.jpeg'

import { Container, Section } from '../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureTextWrapper,
} from '../Data/FeaturesStyles';

const Counter = () => {

    return (
    <Section className = "counter" smPadding = "50px 10px" position="relative">
        <Container>
            <FeatureTextWrapper>
                <FeatureTitle>Our Track Record</FeatureTitle>
            </FeatureTextWrapper>
                <img src = {Maps} alt = "World maps" />
            <motion.div
                initial={{opacity: 0}}
                whileInView={{y: [-50, 0], opacity: 1}}
                className="counter_container"
            >
                {CounterData.map(counter => {
                return (
                    <div className='CounterData' key={counter.id}>
                    <div className='number'>{counter.number}</div>
                    <h4 className='item_name'>{counter.itemName }</h4>
                    </div>
                    )
                })}
            </motion.div>
            <FeatureText>Our track record on helping company digital transformation is proven throughout many years in global scale.</FeatureText>
        </Container>
    </Section>
    )
}

export default Counter