import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import classes from './TagFilter.module.scss';
import { ThemeContext } from '../../pages/_app';

function TagFilter({ tags, selectedTag, setSelectedTag, className }) {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <div className={clsx(classes.container, className)}>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          id={selectedTag ? '.selectedTag' : ''}
          className={clsx(
            classes.tagButton,
            theme === 'dark' && classes.buttonDark,
            theme === 'light' && classes.buttonLight,
            selectedTag === tag && theme === 'dark' && classes.selectedDark,
            selectedTag === tag && theme === 'light' && classes.selectedLight
          )}
          onClick={() => {
            setSelectedTag(tag);
            router.push('/');
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
