(function(){
    function addStyle() {
        var style = document.createElement('style');
        style.rel = 'stylesheet';
        document.head.appendChild(style);
        style.textContent = localStorage.sourceMainStyle;
    }
    try {
        if (localStorage.sourceMainStyle) {
            // The font is in localStorage, we can load it directly
            addStyle();
        } else {
            // We have to first load the font file asynchronously
            var request = new XMLHttpRequest();
            request.open('GET', '/styles/style.css', true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // We save the file in localStorage
                    localStorage.sourceMainStyle = request.responseText;

                    // ... and load the font
                    addStyle();
                }
            }

            request.send();
        }
    } catch(ex) {
        // maybe load the font synchronously for woff-capable browsers
        // to avoid blinking on every request when localStorage is not available
    }
}());
