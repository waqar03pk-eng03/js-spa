
if (!window.location.hash) {
    window.location.hash = '#home';
};

const LoadPage = () => {
    var request = new XMLHttpRequest();
    request.onload = function() {
        if (request.status >= 200 && request.status <400) {
            document.getElementById('app').innerHTML = request.responseText;
        } else {
            console.log('Error loading page:', request.status);
        }
    };
    request.open('GET', window.location.hash.substring(1) + '.html', true);
    request.send();

}

window.addEventListener('hashchange', LoadPage);

LoadPage();
