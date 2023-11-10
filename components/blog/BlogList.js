import clsx from 'clsx';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Text from '../typography/Text';
import classes from './BlogList.module.scss';
import { ThemeContext } from '../../pages/_app';

function BlogItemCard({ post }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={clsx(
        classes.item,
        theme === 'dark' ? classes.itemDark : classes.itemLight
      )}
    >
      {post.frontmatter.bannerUrl && (
        <Link href={`/blogs/${post.slug}`}>
          <div className={classes.bannerImg}>
            <Image
              src={post.frontmatter.bannerUrl}
              alt={post.frontmatter.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      )}
      <Link href={`/blogs/${post.slug}`}>
        <a className={classes.blogTitle}>{post.frontmatter.title}</a>
      </Link>
      {post.frontmatter.date && (
        <Text className={classes.blogDate}>
          <i>{format(new Date(post.frontmatter.date), 'PPP')}</i>
        </Text>
      )}
      {/* {post.frontmatter.tags && (
        <Text className={classes.tags}>
          Tags:{' '}
          {post.frontmatter.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {tags.length - 1 > index ? ', ' : ''}
            </span>
          ))}
        </Text>
      )} */}
      {post.frontmatter.description && (
        <Text className={classes.description}>
          <i>{post.frontmatter.description}</i>
        </Text>
      )}
    </div>
  );
}

function BlogList({ posts }) {
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <BlogItemCard post={post} key={post.slug} />
      ))}
    </div>
  );
}

export default BlogList;
