const ghpages = require('gh-pages');
const config = require('../package.json');
const domain = process.env.GH_TOKEN ? `${process.env.GH_TOKEN}@github.com` : 'github.com';

ghpages.publish('build', {
    dotfiles: false,
    branch: 'gh-pages',
    repo: config.repository.url.replace('github.com', domain),
    message: 'Deploy to GitHub Pages.',
    silent: true
}, function (err) {
    if (err) {
        throw new Error(err.message);
    } else {
        console.log('Published');
    }
});

