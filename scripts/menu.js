var last_path=window.location.pathname;scrll_old=0,scrll=0;var stateObj={foo:"bar"};function update_in_arefs(){var b=document.getElementsByTagName("a");for(var a=0;a<b.length;a++){console.log(b[a].href[0]);if(b[a].getAttribute("href")[0]=="/"){console.log(b[a].innerHTML);b[a].addEventListener("click",aref_click)}}}function navigate(a){if(a[0]!="#"){var b="";_hash=a.indexOf("#");if(~_hash){_hash=a.substring(_hash);a=a.substring(0,_hash)}for(var c=0;c<a.length;c++){if((c==0)&&(a[c]!="/")){b+=a[c]}else{if(c>0){b+=a[c]}}}if((a[a.length-1]!="l")&&(a[a.length-1]!="m")){b+="/index.html"}if(b=="/index.html"){b="index.html"}var d="name=get_page&page="+b;var e=new XMLHttpRequest();e.open("POST","/work.php?",true);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.send(d);e.onreadystatechange=function(){if(e.readyState!=4){return}if(e.status!=200){window.location.replace(a)}else{document.getElementsByTagName("main")[0].innerHTML=e.responseText;update_in_arefs();if(~_hash){window.location.hash=_hash;_hash=_hash.substring(1);document.getElementById(_hash).scrollIntoView()}else{document.body.scrollIntoView()}}}}}function aref_click(a){a.preventDefault();hrf=this.getAttribute("href");navigate(hrf);window.history.pushState(stateObj,null,hrf)}window.addEventListener("popstate",function(a){navigate(window.location.hash)},false);update_in_arefs();var hrefs=main_nav.getElementsByTagName("a");for(var i=0;i<hrefs.length;i++){console.log(hrefs[i].innerHTML);hrefs[i].addEventListener("click",aref_click)}var menu_bottom=main_nav.getBoundingClientRect().bottom+window.pageYOffset;window.onscroll=function(){scrll=window.pageYOffset;if(scrll<scrll_old){console.log("up");main_nav.setAttribute("style","top:0px")}else{main_nav.setAttribute("style","top:-"+menu_bottom+"px");console.log(menu_bottom);console.log("down")}scrll_old=scrll};