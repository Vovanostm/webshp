
$(".m-n").click(function(event) {
	// console.log(this.getAttribute('href'));
	$('main').addClass('.vis');
  var 
    _href = this.getAttribute('href');
    window.history.pushState(null,null,_href);
	// console.log(this.getAttribute('href'));
	$.ajax({ 
  type: "POST", 
  url: "work.php", 
  data: "name=" + "get_page"+"&page="+_href,
  dataType: "html", 
  success: function(data){ 
      event.preventDefault();
  	  // $('main').animate({opacity: 0}, 1500, function() {});
  	  $('main').empty();
      $('main').append(data);

  	  // $('main').animate({opacity: 1500},
  	  // 	500, function() {});
  	},
  error: function(XMLHttpRequest, textStatus, errorThrown)
  {
      window.location.replace(_href);
      console.log('error');
  }
      
     
  });
});
  
