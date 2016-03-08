var 
   scrll_old = 0,
   scrll = 0;

function aref_click(event)
{
  alert(document.getElementsByTagName("main")[0].innerHTML);
  event.preventDefault();
  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  var b_d = "name=get_page&page=index.html";
  xhr.open('POST', 'work.php?', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  // 3. Отсылаем запрос
  xhr.send(b_d);
  xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    window.location.replace(_href);
    // alert(xhr.status + ': ' + xhr.statusText);
  } else {
    

    document.getElementsByTagName("main")[0].innerHTML = xhr.responseText;
    // alert(xhr.responseText);
  }
  }
}

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
  
