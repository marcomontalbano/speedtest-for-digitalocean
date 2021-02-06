import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './app/components/App';
import { Layout } from './app/components/Layout';
import { Disclaimer } from './app/components/Disclaimer';

import '../node_modules/uikit/dist/css/uikit.css';
import './index.css';

function getDomainName() {
    const hostname = window.location.hostname;
    return hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1) + 1);
}

const content = getDomainName() === 'digitalocean.com' ? <App /> : <Disclaimer />;
const rootElement = document.getElementById('st4do-root');

if (rootElement.hasChildNodes()) {
    hydrate(<Layout>{ content }</Layout>, rootElement)
} else {
    render(<Layout>{ content }</Layout>, rootElement)
}
