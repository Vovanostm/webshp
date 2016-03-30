document.addEventListener("DOMContentLoaded", finishedDCL);
f_s.addEventListener("click", sent_ans);

function finishedDCL() {
  // alert('fin');
  f_s.addEventListener("click", sent_ans);

}


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

function sent_ans(e) {
  e.preventDefault();
  // alert('sended');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/work.php?name=to_work&text=' + f_t.value, true);
  // xhr.setRequestHeader('Content-Type', '');
  xhr.send();
  f_t.value = '';
  alert('Спасибо, Ваше сообщение будет обработано в ближайшее время.')
  xhr.onreadystatechange = function() {
    // if (xhr.status != 200) alert(xhr.responseText);
  }
}
