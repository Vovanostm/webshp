var scrll_old=0,scrll=0;function aref_click(d){d.preventDefault();var e=new XMLHttpRequest();hrf=this.getAttribute("href");var a="";for(var b=0;b<hrf.length;b++){if((b==0)&&(hrf[b]!="/")){a+=hrf[b]}else{a+=hrf[b]}}alert(a);var c="name=get_page&page="+a;alert(a);e.open("POST","/work.php?",true);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.setRequestHeader("X-Requested-With","XMLHttpRequest");e.send(c);e.onreadystatechange=function(){if(e.readyState!=4){return}if(e.status!=200){}else{window.history.pushState(null,null,hrf);document.getElementsByTagName("main")[0].innerHTML=e.responseText;alert(e.responseText)}}}var hrefs=main_nav.getElementsByTagName("a");for(var i=0;i<hrefs.length;i++){console.log(hrefs[i].innerHTML);hrefs[i].addEventListener("click",aref_click)}var menu_bottom=main_nav.getBoundingClientRect().bottom+window.pageYOffset;window.onscroll=function(){scrll=window.pageYOffset;if(scrll<scrll_old){console.log("up");main_nav.setAttribute("style","top:0px")}else{main_nav.setAttribute("style","top:-"+menu_bottom+"px");console.log(menu_bottom);console.log("down")}scrll_old=scrll};