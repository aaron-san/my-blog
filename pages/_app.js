import { createContext, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'highlight.js/styles/night-owl.css';

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { theme, setTheme };
  return (
    <>
      <Head>
        <title>Aaron&apos;s Blog</title>
        {/* <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deserunt"
        /> */}
      </Head>

      <ThemeContext.Provider value={value}>
        <div
          style={
            theme === 'dark'
              ? {
                  backgroundColor: '#373A36',
                  color: '#E1E2E2',
                  // color: 'white',
                }
              : {
                  backgroundColor: '#F7F7F7',
                  color: '#373A36',
                  // color: 'black',
                }
          }
        >
          <header />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
