
<!DOCTYPE html>
<html lang="ru">

  <head>
    <meta charset="utf-8">
    <title>О нас</title>
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="О школе и о преподавателях">
    <meta name="keywords" content="Школа программистов, Веб-дизайн, кто мы">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/styles/style.css">
  </head>

  <body>
    <?php
      $nav = $_SERVER['DOCUMENT_ROOT'].'/nvg/main';
      echo file_get_contents("$nav");
     ?>
    <main>
      <header>
        <h1>Раздел в разработке</h1>
      </header>
      <article>
        <header>
          <h2>Наши ресурсы</h2>
        </header>
        <p>
          <a href="http://informatics.ru/">informatics.ru</a> - Сайт Мытищинской школы
          программистов
        </p>
        <p>
          <a href="http://xn--l1ag0a.xn--p1ai/">мшп.рф</a> - Сайт школы
          программистов
        </p>
        <p>
          <a href="https://my.informatics.ru/">EduApp</a> - Учебное веб-приложение
        </p>
      </article>
      <p>


      </p>
    </main>
    <footer>
      <a href="https://my.informatics.ru">my.informatics.ru</a>
      <p>Делайте уроки! =)</p>
    </footer>
    <script async src="/scripts/ya_metrica.js" type="text/javascript"></script>
    <script async src="/scripts/font.js" type="text/javascript"></script>
    <script async src="/scripts/menu.js" type="text/javascript"></script>
  </body>
</html>
