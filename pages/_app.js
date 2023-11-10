import { createContext, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'highlight.js/styles/night-owl.css';

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

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
                  backgroundColor: 'rgb(56,56,56)',
                  color: 'rgba(247,249,253,1)',
                  // color: 'white',
                }
              : {
                  backgroundColor: 'rgba(247,249,253,1)',
                  color: 'rgba(32,32,32,1)',
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
