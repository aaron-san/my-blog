import Link from 'next/link';
import React, { useContext } from 'react';
import clsx from 'clsx';
import { LuSun } from 'react-icons/lu';
import { ThemeContext } from '../../pages/_app';
import { LeftArrow, UpArrow } from '../icons';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import classes from './SingleBlog.module.scss';

function SingleBlog({ MdxSource, frontmatter }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={classes.blogContainer}>
      <div className={classes.homeThemeContainer}>
        <Link href="/">
          <a className={classes.link}>
            <LeftArrow />
            Home
          </a>
        </Link>
        <LuSun
          size="40px"
          color="orange"
          onClick={() => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
          }}
          className={classes.pageThemeButton}
        />
      </div>
      <BlogHeader frontmatter={frontmatter} />
      <BlogContent MdxSource={MdxSource} />
      <button
        className={clsx(
          classes.scrollToTop,
          classes.btnLight
          // theme === 'dark' ? classes.btnDark : classes.btnLight
        )}
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Scroll To Top
        <UpArrow />
      </button>
    </div>
  );
}

export default SingleBlog;
