const urlwebmention='https://www.kajrietberg.nl/.netlify/functions/webmentions';
const listWebmentions = document.querySelector('#webmentions');

fetch(urlwebmention).then(
    response => {
        if (response.status === 200) {
            response.json()
                .then(data => {
                    const entries =  Object.entries(data.children);
                    entries.forEach(onderdeel => {
                        console.log(onderdeel[1]);
                        if (window.location.href === onderdeel[1]["like-of"] + '/' | window.location.href === onderdeel[1]["like-of"] | window.location.href === onderdeel[1]["bookmark-of"] | window.location.href === onderdeel[1]["in-reply-to"] | window.location.href === onderdeel[1]["repost-of"] ) {
                            listWebmentions.innerHTML += `<li class="webmention h-card">Mention url: <a class="webmention_url u-url" href="${onderdeel[1].url}">${onderdeel[1].url}</a> <img class="webmention__img u-photo" src="${onderdeel[1].author.photo}"> Door: <span class="p-name">${onderdeel[1].author.name}</span> </li>`;
                        }
                    })
                })
        } else {
            throw new Error('Webmentions API call failed!')
        }
    },
    reject => console.log('rejected!', reject)
);
