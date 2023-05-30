import '../styles/global.css';

// How global styles are applied here
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}