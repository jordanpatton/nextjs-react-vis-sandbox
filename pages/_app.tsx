import React from 'react';
import { AppProps as NextAppProps } from 'next/app'

import 'react-vis/dist/main.scss';

const App = ({ Component, pageProps }: NextAppProps) => <Component {...pageProps} />;

export default App;
