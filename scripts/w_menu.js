var
   scrll_old = 0,
   scrll = 0;
var stateObj = { foo: "bar" };


function navigate(_href)
{
  var up_hrf="";
  for (var i=0; i < _href.length; i++)
  {
    if ((i == 0)&&(_href[i]!="/")) up_hrf+=_href[i];
    else if(i>0) up_hrf+=_href[i];
  }
  var b_d = "name=get_page&page="+up_hrf
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/work.php?', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(b_d);  // 3. Отсылаем запрос
  xhr.onreadystatechange = function() { // (3)
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      window.location.replace(_href);
    // alert(xhr.status + ': ' + xhr.statusText);
    } else {
    // document.getElementsByTagName("main")[0].innerHTML = '';
      document.getElementsByTagName("main")[0].innerHTML = xhr.responseText;
      update_in_arefs();
    // alert(xhr.responseText);
  }
  }
}


function aref_click(event)
{
  event.preventDefault();
  hrf = this.getAttribute('href');
  navigate(hrf);
  window.history.pushState(stateObj,null,hrf);
}
window.addEventListener("popstate", function(e) {
    navigate(location.pathname);
}, false);
function update_in_arefs(){
  var hrefs = document.getElementsByName("in_aref");
  for (var i = 0; i < hrefs.length; i++)
  {
   console.log(hrefs[i].innerHTML);
   hrefs[i].addEventListener("click", aref_click);
  }
}
update_in_arefs();

  // // 4. Если код ответа сервера не 200, то это ошибка
  // if (xhr.status != 200) {
  //   // обработать ошибку
  //   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  // } else {
  //   // вывести результат
  //   alert( xhr.responseText ); // responseText -- текст ответа.
  // }

// }

var hrefs = main_nav.getElementsByTagName("a");
for (var i = 0; i < hrefs.length; i++)
{
 console.log(hrefs[i].innerHTML);
 hrefs[i].addEventListener("click", aref_click);
}




var menu_bottom = main_nav.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  scrll = window.pageYOffset;
  if (scrll < scrll_old)
  {
    console.log('up');
    main_nav.setAttribute('style', "top:0px");

  }
  else
  {
    // if (window.pageYOffset > menu_bottom)
    main_nav.setAttribute('style', "top:-"+menu_bottom+"px");

    console.log(menu_bottom);
    console.log('down');
    }
  scrll_old = scrll;
  // window.pageYOffset ||
  // document.getElementById('showScroll').innerHTML = scrolled + 'px';
}










// $("a").click(function(event) {
//   event.preventDefault();
//   var
//     _href = this.getAttribute('href');
//   window.history.pushState(null,null,_href);
// 	$.ajax({
//   type: "POST",
//   url: "work.php",
//   data: "name=" + "get_page"+"&page="+_href,
//   dataType: "html",
//   success: function(data){
//   	  $('main').empty();
//       $('main').append(data);
//   	},
//   error: function(XMLHttpRequest, textStatus, errorThrown)
//   {
//       //window.location.replace(_href);
//       console.log('error');
//   }
//   });
// });
