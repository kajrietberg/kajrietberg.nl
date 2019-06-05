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
                        console.log(window.location.href);
                        console.log(onderdeel[1]["like-of"] + '/');
                        if (window.location.href === onderdeel[1]["like-of"] + '/') {
                            listWebmentions.innerHTML += `<li>Mention url: <a href="${onderdeel[1].url}">${onderdeel[1].url}</a> <br> <img src="${onderdeel[1].author.photo}" style="width: 100px; height; 100px; border-radius: 50%;"> <br> door: ${onderdeel[1].author.name}  </li>`;

                        }
                    })
                })
        } else {
            throw new Error('Webmentions API call failed!')
        }
    },
    reject => console.log('rejected!', reject)
);
