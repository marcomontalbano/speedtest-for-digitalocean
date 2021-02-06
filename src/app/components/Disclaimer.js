import React from 'react'

import './Disclaimer.css';

export const Disclaimer = () => {
    return (
        <div className="Disclaimer uk-container">
            <div className="uk-alert-warning uk-alert">
                <p>Bad news. Unfortunately, this application is no more working from this domain since the speed test service is now validating the domain name.</p>
            </div>

            <div className="uk-alert-success uk-alert">
                <p>I've also good news. I refactored this application to be <b>served as a micro-frontend</b>. If you want to use it, you just need to follow these 2 steps.</p>
            </div>

            <div className="uk-grid uk-child-width-1-2@m uk-grid-small uk-grid-match">
                <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title">Step 1</h3>
                    <p>
                        Drag the following link in your bookmarks.<br />
                        <a className="link" href="javascript:(function()%7B%22use%20strict%22%3Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcomontalbano%2Fspeedtest-for-digitalocean%40latest%2Fstatic%2Fjs%2Fmain.js%22%3Bvar%20l%3Ddocument.createElement(%22link%22)%3Bl.href%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcomontalbano%2Fspeedtest-for-digitalocean%40latest%2Fstatic%2Fcss%2Fmain.css%22%2Cl.rel%3D%22stylesheet%22%2Cdocument.body.setAttribute(%22id%22%2C%22st4do-root%22)%2Cdocument.head.innerHTML%3D%22%22%2Cdocument.head.append(s%2Cl)%3B%7D)()">Speed Test for DigitalOcean</a>
                    </p>
                </div>

                <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title">Step 2</h3>
                    <p>
                        Open <a href="http://speedtest-nyc1.digitalocean.com/" target="_blank">speed test</a> page on DigitalOcean website.<br />
                        Now you just need to click on the just saved bookmark.
                    </p>
                </div>
            </div>
        </div>
    )
}
