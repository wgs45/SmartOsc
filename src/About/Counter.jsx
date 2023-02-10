import React from 'react';
import { motion } from 'framer-motion';
import { CounterData } from '../About/CounterData';
import './CounterStyle.css';

import { Container, Section } from '../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureTextWrapper,
} from './CounterStyle';

const Counter = () => {

    return (
    <Section className = "counter" smPadding = "50px 10px" position="relative">
        <Container>
            <FeatureTextWrapper>
                <FeatureTitle>Our Team</FeatureTitle>
            </FeatureTextWrapper>
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
            <FeatureText>[Smart] S-haring, M-odesty, A-ction, R-espect, T-ransparent</FeatureText>
        </Container>
    </Section>
    )
}

export default Counter