import React from 'react'
import packageJson from '../../../package.json';

export const Layout = ({ children }) => {
    return (
        <>
            <div className="main-content">
                <header className="dbr-hero-header uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle uk-contrast">
                    <a className="js--link github-link" data-label="github" rel="noopener noreferrer" target="_blank" href="https://github.com/marcomontalbano/speedtest-for-digitalocean">
                        <img src="/images/github-logo.svg" alt="GitHub logo" />
                        <div className="version">v { packageJson.version }</div>
                    </a>
                    <div className="uk-container uk-container-center">
                        <section className="uk-grid uk-grid-match">
                            <div className="uk-width-medium-1-1">
                                <div className="uk-panel uk-text-center">
                                    <h1>Speed Test for DigitalOcean</h1>
                                    <h3>Run speed tests for all DigitalOcean datacenters faster than ever.</h3>
                                    <p>
                                        <small>
                                            This tool uses the same service used by <b>speedtest-*.digitalocean.com</b> so the result should be the same.
                                            <br />
                                            <i>
                                                If for some reason this site violates DigitalOcean copyright,
                                                please <a rel="noopener noreferrer" target="_blank" href="https://github.com/marcomontalbano/speedtest-for-digitalocean/issues/new">open an issue</a>.
                                                I'll modify the project accordingly.
                                            </i>
                                        </small>
                                    </p>
                                    <p className="do-account">
                                        <span>need an account?</span>
                                        <a className="js--link" data-label="digitalocean" href="https://m.do.co/c/45b8cffe90f8" rel="noopener noreferrer" target="_blank">
                                            <span><img src="/images/DO_Logo_Horizontal_White.png" /></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>

                <div>{children}</div>
            </div>

            <ul className="footer">
                <li><a href="https://github.com/marcomontalbano/speedtest-for-digitalocean">View the code</a></li>
                <li><a href="https://github.com/marcomontalbano/speedtest-for-digitalocean/issues/new">Report a bug</a></li>
                <li><a href="https://github.com/marcomontalbano/speedtest-for-digitalocean#privacy">Privacy</a></li>
            </ul>

            <div className="badges">
                <a href="https://travis-ci.org/marcomontalbano/speedtest-for-digitalocean">
                    <img alt="Build Status" src="https://travis-ci.org/marcomontalbano/speedtest-for-digitalocean.svg?branch=master" />
                </a>
                <a href="https://github.com/marcomontalbano/speedtest-for-digitalocean/stargazers">
                    <img alt="GitHub stars" src="https://img.shields.io/github/stars/marcomontalbano/speedtest-for-digitalocean?color=green&style=flat" />
                </a>
                <a href="https://github.com/marcomontalbano/speedtest-for-digitalocean/issues">
                    <img alt="GitHub issues" src="https://img.shields.io/github/issues/marcomontalbano/speedtest-for-digitalocean?color=yellow&style=flat" />
                </a>
                <a href="https://github.com/sponsors/marcomontalbano">
                    <img alt="Sponsor" src="https://img.shields.io/badge/-Sponsor-fafbfc?logo=GitHub%20Sponsors" />
                </a>
            </div>
        </>
    )
}
