var
  last_path=window.location.pathname,
  stateObj={"foo":"bar"},
    menu_bottom = main_nav.offsetHeight,
    menu_top = 0,
    scrll_old = window.pageYOffset,
    scrll = window.pageYOffset;

function update_in_arefs() {
  var hrefs = document.getElementsByTagName("a");
  for (var i = 0; i < hrefs.length; i++) {
    if (hrefs[i].getAttribute("href")[0] == "/") {
      if(!hrefs[i].classList.contains("no_aj"))
      hrefs[i].addEventListener("click", aref_click);
    }
  }
}

function aref_click(event) {
  event.preventDefault();
  hrf = this.getAttribute('href');
  navigate(hrf);
  if(hrf[0] != '#') window.history.pushState(stateObj, null, hrf);
}

function navigate(_href) {
  if (_href[0] != '#') {
    var up_hrf = "";
    _hash = _href.indexOf("#");
    if (~_hash) {
      _hash = _href.substring(_hash);
      _href = _href.substring(0, _hash);
    }
    for (var i = 0; i < _href.length; i++) {
      if ((i == 0) && (_href[i] != "/")) up_hrf += _href[i];
      else if (i > 0) up_hrf += _href[i];
    }
    if ((_href[_href.length - 1] != "l") && (_href[_href.length - 1] != "m"))
      up_hrf += "/index.html";
    if (up_hrf == "/index.html") up_hrf = 'index.html';
    var b_d = "name=get_page&page=" + up_hrf
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/work.php?', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(b_d); // 3. Отсылаем запрос
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
        console.log("smbf_wrong");
      } else {
        document.getElementsByTagName("main")[0].innerHTML = xhr.responseText;
        update_in_arefs();
        last_path=window.location.pathname;
        if (~_hash) {
          window.location.hash = _hash;
          _hash = _hash.substring(1);
          document.getElementById(_hash).scrollIntoView();
        } else {
          window.scrollTo(0,0);
        }
      }
    }
  }
}

window.addEventListener("popstate", function(e) {
    if (last_path!=window.location.pathname)
    {
      navigate(window.location.pathname+window.location.hash);
    }
    last_path=window.location.pathname;
}, false);

function append_menu()
{
  update_in_arefs();
  window.onscroll = scroll;
}
function scroll(){
    scrll = window.pageYOffset;
    menu_top=(scrll < scrll_old)?(menu_top < 0)?menu_top+scrll_old-scrll:0:(menu_top > -menu_bottom)?menu_top+scrll_old-scrll:-menu_bottom;
    menu_top=menu_top<-menu_bottom?-menu_bottom:menu_top>0?0:menu_top;
    main_nav.setAttribute('style', "top:"+menu_top+"px");
    scrll_old = scrll;
}
window.onload=append_menu;
