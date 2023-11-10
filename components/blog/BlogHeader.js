import { format } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Heading from '../typography/Heading';
import Text from '../typography/Text';
import classes from './BlogHeader.module.scss';
// import { ThemeContext } from '../../pages/_app';

function BlogHeader({ frontmatter }) {
  // const theme = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <div>
        {frontmatter.bannerUrl && (
          <div className={classes.bannerImg}>
            <Image
              src={frontmatter.bannerUrl}
              alt={frontmatter.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        )}
        <Heading>{frontmatter.title}</Heading>
        <div className="divider" />

        <div className={classes.dateTagsContainer}>
          {frontmatter.date && (
            <Text className={classes.blogDate}>
              {format(new Date(frontmatter.date), 'PPP')}
            </Text>
          )}
          {frontmatter.tags && (
            <Text className={classes.tags}>
              Tags:{' '}
              {frontmatter.tags.map((tag, index, tags) => (
                <span key={tag}>
                  {tag}
                  {tags.length - 1 > index ? ', ' : ''}
                </span>
              ))}
            </Text>
          )}
        </div>
        {frontmatter.description && (
          <Text className={classes.description}>
            {/* Description: {frontmatter.description} */}
            <i>{frontmatter.description}</i>
          </Text>
        )}
        <div className="divider" />
      </div>
    </>
  );
}

export default BlogHeader;
