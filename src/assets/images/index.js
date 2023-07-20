
function processURL(url) {
  return url.replace('http://', 'https://');
}

const images = {
    logo: require('~/assets/images/logo.svg').default,
    noImage: processURL('https://placehold.co/160x160?text=No%20Images'),
}

export default images;