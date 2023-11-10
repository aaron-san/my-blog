import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { LuSun } from 'react-icons/lu';
import Heading from '../typography/Heading';
import Text from '../typography/Text';
import classes from './HeroSection.module.scss';
import { ThemeContext } from '../../pages/_app';
import profileImage from '../../images/noah.jpg';

function HeroSection() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={classes.heroSection}>
      <div className={classes.profileImg}>
        <Link href="/">
          <Image src={profileImage} alt="My Blog" height="200" width="200" />
        </Link>
      </div>
      <div className="title-name-message">
        <div className="title-button">
          <Heading className={classes.name}>Aaron&apos;s Blog</Heading>
          <LuSun
            size="40px"
            color="orange"
            onClick={() => {
              const newTheme = theme === 'light' ? 'dark' : 'light';
              setTheme(newTheme);
            }}
            className="theme-button"
          />
        </div>

        <Text className={classes.description}>
          Please enjoy reading about my family&apos;s adventures and daily life.
        </Text>
      </div>
    </div>
  );
}

export default HeroSection;
