import React from 'react'
import packageJson from '../../../package.json';

const ghLogo = `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m1324.62 140c-16.355 0-29.616 13.219-29.616 29.527 0 13.04 8.485 24.11 20.256 28.01 1.482.27 2.02-.642 2.02-1.425 0-.7-.025-2.557-.04-5.02-8.238 1.784-9.976-3.958-9.976-3.958-1.347-3.411-3.289-4.317-3.289-4.317-2.689-1.832.204-1.796.204-1.796 2.973.21 4.536 3.043 4.536 3.043 2.642 4.511 6.931 3.208 8.62 2.454.269-1.909 1.033-3.21 1.88-3.948-6.576-.745-13.491-3.279-13.491-14.592 0-3.223 1.155-5.858 3.049-7.922-.305-.747-1.322-3.748.289-7.814 0 0 2.487-.794 8.145 3.03 2.362-.656 4.896-.982 7.415-.995 2.515.013 5.05.339 7.415.995 5.655-3.821 8.136-3.03 8.136-3.03 1.616 4.065.6 7.07.295 7.814 1.898 2.064 3.045 4.7 3.045 7.922 0 11.343-6.925 13.838-13.524 14.569 1.064.912 2.01 2.713 2.01 5.468 0 3.946-.036 7.13-.036 8.098 0 .79.533 1.709 2.036 1.421 11.758-3.913 20.238-14.971 20.238-28.01 0-16.309-13.262-29.527-29.62-29.527" transform="translate(-1295-140)" fill="#0080FF"/></g></svg>')}`;
const doLogo = `data:image/svg+xml,${encodeURIComponent('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 600 101.1" style="enable-background:new 0 0 600 101.1" xml:space="preserve"><style>.st0,.st1{fill:#fff}.st1{fill-rule:evenodd;clip-rule:evenodd}</style><g id="XMLID_2369_"><g id="XMLID_2638_"><g id="XMLID_2639_"><g id="XMLID_44_"><g id="XMLID_48_"><path id="XMLID_49_" class="st0" d="M50.6 101.1V81.5c20.8 0 36.8-20.6 28.9-42.4-3-8.1-9.4-14.5-17.5-17.5-21.8-7.9-42.4 8.1-42.4 28.9L0 50.6C0 17.5 32-8.3 66.7 2.5c15.2 4.7 27.2 16.8 31.9 31.9 10.8 34.7-14.9 66.7-48 66.7z"/></g><path id="XMLID_47_" class="st1" d="M50.6 81.6H31.1V62.1h19.5z"/><path id="XMLID_46_" class="st1" d="M31.1 96.6h-15v-15h15v15z"/><path id="XMLID_45_" class="st1" d="M16.1 81.6H3.5V69h12.6z"/></g></g></g><g id="XMLID_2370_"><path id="XMLID_2635_" class="st0" d="M180 29.2c-5.8-4-13-6.1-21.4-6.1h-18.3v58.1h18.3c8.4 0 15.6-2.1 21.4-6.4 3.2-2.2 5.7-5.4 7.4-9.3 1.7-3.9 2.6-8.5 2.6-13.7 0-5.1-.9-9.7-2.6-13.6-1.7-3.8-4.2-6.8-7.4-9zM151 33h5.8c6.4 0 11.7 1.3 15.7 3.7 4.4 2.7 6.7 7.8 6.7 15.1 0 7.6-2.3 12.9-6.7 15.8-3.8 2.5-9.1 3.8-15.6 3.8H151V33z"/><path id="XMLID_2634_" class="st0" d="M202.8 22.5c-1.8 0-3.3.6-4.5 1.8-1.2 1.2-1.9 2.7-1.9 4.4 0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9 1.8 0 3.3-.6 4.5-1.9 1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z"/><path id="XMLID_2564_" class="st0" d="M197.5 40.4h10.3v41h-10.3z"/><path id="XMLID_2561_" class="st0" d="M245.3 43.8c-3.1-2.8-6.6-4.4-10.3-4.4-5.7 0-10.4 2-14.1 5.8-3.7 3.8-5.5 8.8-5.5 14.7 0 5.8 1.8 10.7 5.5 14.7 3.7 3.8 8.4 5.8 14.1 5.8 4 0 7.4-1.1 10.2-3.3v.9c0 3.4-.9 6-2.7 7.9-1.8 1.8-4.3 2.7-7.4 2.7-4.8 0-7.7-1.9-11.4-6.8l-7 6.7.2.3c1.5 2.1 3.8 4.2 6.9 6.2 3.1 2 6.9 3 11.5 3 6.1 0 11.1-1.9 14.7-5.6 3.7-3.7 5.5-8.7 5.5-14.9V40.4h-10.1v3.4zM242.6 68c-1.8 2-4.1 3-7.1 3s-5.3-1-7-3c-1.8-2-2.7-4.7-2.7-8s.9-6.1 2.7-8.1c1.8-2 4.1-3.1 7-3.1 3 0 5.3 1 7.1 3.1 1.8 2 2.7 4.8 2.7 8.1s-1 6-2.7 8z"/><path id="XMLID_2560_" class="st0" d="M264.2 40.4h10.3v41h-10.3z"/><path id="XMLID_2552_" class="st0" d="M269.5 22.5c-1.8 0-3.3.6-4.5 1.8-1.2 1.2-1.9 2.7-1.9 4.4 0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9 1.8 0 3.3-.6 4.5-1.9 1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z"/><path id="XMLID_2509_" class="st0" d="M297.1 29.3H287v11.1h-5.9v9.4h5.9v17c0 5.3 1.1 9.1 3.2 11.3 2.1 2.2 5.8 3.3 11.1 3.3 1.7 0 3.4-.1 5-.2h.5v-9.4l-3.5.2c-2.5 0-4.1-.4-4.9-1.3-.8-.9-1.2-2.7-1.2-5.4V49.8h9.6v-9.4h-9.6V29.3z"/><path id="XMLID_2508_" class="st0" d="M355 23.2h10.3v58.1H355z"/><path id="XMLID_2470_" class="st0" d="M469.4 66.7c-1.8 2.1-3.7 3.9-5.2 4.8-1.4.9-3.2 1.4-5.3 1.4-3 0-5.5-1.1-7.5-3.4s-3-5.2-3-8.7 1-6.4 2.9-8.6c2-2.3 4.4-3.4 7.4-3.4 3.3 0 6.8 2.1 9.8 5.6l6.8-6.5c-4.4-5.8-10.1-8.5-16.9-8.5-5.7 0-10.6 2.1-14.6 6.1-4 4-6 9.2-6 15.3s2 11.2 6 15.3c4 4.1 8.9 6.1 14.6 6.1 7.5 0 13.5-3.2 17.5-9.1l-6.5-6.4z"/><path id="XMLID_2460_" class="st0" d="M511.7 46.1c-1.5-2-3.5-3.7-5.9-4.9-2.5-1.2-5.3-1.8-8.5-1.8-5.8 0-10.5 2.1-14 6.3-3.4 4.2-5.2 9.3-5.2 15.4 0 6.2 1.9 11.3 5.7 15.3 3.7 3.9 8.8 5.9 14.9 5.9 6.9 0 12.7-2.8 16.9-8.4l.2-.3-6.7-6.5c-.6.8-1.5 1.6-2.3 2.4-1 1-2 1.7-3 2.2-1.5.8-3.3 1.1-5.2 1.1-2.9 0-5.2-.8-7-2.5-1.7-1.5-2.7-3.6-2.9-6.2H516l.1-3.8c0-2.7-.4-5.2-1.1-7.6-.7-2.3-1.8-4.6-3.3-6.6zm-22.5 9.6c.5-2 1.4-3.6 2.7-4.9 1.4-1.4 3.2-2.1 5.4-2.1 2.5 0 4.4.7 5.7 2.1 1.2 1.3 1.9 2.9 2.1 4.8h-15.9z"/><path id="XMLID_2456_" class="st0" d="M551.3 43.4c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6-3.1 2.4-4.7 5.9-4.7 10.2 0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4 3.9 0 7.6-1.6 10.9-4.3v3.4h10.1V55c.2-5-1.4-8.9-4.6-11.6zM533 65.7c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2-.9-.8-1.4-1.7-1.4-3 0-1.4.6-2.4 1.7-3.2z"/><path id="XMLID_2454_" class="st0" d="M595.7 44.2c-2.9-3.2-6.9-4.8-12-4.8-4.1 0-7.4 1.2-9.9 3.5v-2.5h-10.1v41H574V58.7c0-3.1.7-5.6 2.2-7.3 1.5-1.8 3.4-2.6 6.1-2.6 2.3 0 4.1.8 5.4 2.3 1.3 1.6 2 3.7 2 6.4v23.7H600V57.6c0-5.7-1.4-10.2-4.3-13.4z"/><path id="XMLID_2450_" class="st0" d="M342.1 43.4c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6-3.1 2.4-4.7 5.9-4.7 10.2 0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4 3.9 0 7.6-1.6 10.9-4.3v3.4h10.1V55c.1-5-1.5-8.9-4.6-11.6zm-18.3 22.3c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2-.9-.8-1.4-1.7-1.4-3 0-1.4.5-2.4 1.7-3.2z"/><path id="XMLID_2371_" class="st0" d="M402.7 82.2c-16.5 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.5 30-30 30zm0-49.4c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4 19.4-8.7 19.4-19.4-8.7-19.4-19.4-19.4z"/></g></g></svg>')}`;

export const Layout = ({ children }) => {
    return (
        <>
            <div className="main-content">
                <header className="dbr-hero-header uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle uk-contrast">
                    <a className="js--link github-link" data-label="github" rel="noopener noreferrer" target="_blank" href="https://github.com/marcomontalbano/speedtest-for-digitalocean">
                        <img src={ghLogo} alt="GitHub logo" />
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
                                            <span><img src={doLogo} /></span>
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
