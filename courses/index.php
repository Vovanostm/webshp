
<!DOCTYPE html>
<html lang="ru">

  <head>
    <meta charset="utf-8">
    <title>Учебные направления</title>
    <meta name="viewport" content="width=device-width">
    <meta name="keywords" content="Школа программистов, Веб-дизайн, занятия">
    <meta name="description" content="Раздел о занятиях в школе">
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
        <h1>Учебные направления</h1>
      </header>
      <article id="courses">
        <header>
          <h2>Основные курсы</h2>
        </header>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li> <a href="/courses/html5_css3.html">HTML5/CSS3</a></li>
          <li>PHP</li>
          <li>CMS</li>
        </ul>
      </article>
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
