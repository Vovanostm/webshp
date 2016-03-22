/*load_scripts*/

var _scripts=["/scripts/font.js","/scripts/menu.js"];
for (var i=0; i<_scripts.length; i++) {LoadScript(_scripts[i]); };

function LoadScript(_script_path){
    function addScript() {
        var script = document.createElement('script');
        script.type = "text/javascript";
        document.head.appendChild(script);
        script.textContent = localStorage.getItem(_script_path);
    }
    try {
        if (localStorage.getItem(_script_path)) {
            addScript();
        } else {
            var request = new XMLHttpRequest();
            request.open('GET', _script_path, true);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    localStorage.setItem(_script_path, request.responseText);
                    addScript();
                }
            }
            request.send();
        }
    }catch(e){
    }
};
