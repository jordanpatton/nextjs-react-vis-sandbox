import React from 'react';
import { AppProps as NextAppProps } from 'next/app'

const App = ({ Component, pageProps }: NextAppProps) => <Component {...pageProps} />;

export default App;
