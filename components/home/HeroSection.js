import Image from 'next/image';
import React from 'react';
import profileImage from '../../images/noah.jpg';
import Heading from '../typography/Heading';
import Text from '../typography/Text';
import classes from './HeroSection.module.scss';

function HeroSection() {
  return (
    <div className={classes.heroSection}>
      <dir className={classes.profileImg}>
        <Image src={profileImage} alt="My Blog" height="200" width="200" />
      </dir>
      <Heading className={classes.name}>Aaron&apos;s Blog</Heading>
      <Text className={classes.description}>
        Please enjoy reading about my family&apos;s adventures and daily life.
      </Text>
    </div>
  );
}

export default HeroSection;
