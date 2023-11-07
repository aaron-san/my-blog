import { createContext, useState } from 'react';
import Head from 'next/head';
import { LuSun } from 'react-icons/lu';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'highlight.js/styles/night-owl.css';

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  return (
    <>
      <Head>
        <title>Aaron&apos;s Blog</title>
        {/* <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deserunt"
        /> */}
      </Head>
      <ThemeContext.Provider value={theme}>
        <div
          style={
            theme === 'dark'
              ? {
                  backgroundColor: 'rgba(32,32,32,1)',
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

          {/* <div style={{ width: '20px', height: '20px' }}> */}
          <LuSun
            size="40px"
            color="orange"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            className="theme-button"
          />
          {/* </div> */}
          {/* <button 
            type="button"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            className="theme-button"
          >
            Change theme
          </button> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
