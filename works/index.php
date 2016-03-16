<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Работы учеников. Веб-дизайн</title>
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="Разел с работами учеников">
    <meta name="keywords" content="Школа программистов, Веб-дизайн, работы, творчество">
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
        <h1>Работы наших учеников</h1>
      </header>
      <h2>Раздел в разработе + checkboxы не работают :)</h2>
      <h2>Курс</h2>
      <menu>
        <li><label><input type="checkbox" checked="checked" name="" id="">Веб-дизайн</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">HTML</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">CSS</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">HTML5/CSS3</label></li>
      </menu>
      <h2>Год</h2>
      <menu>
        <li><label><input type="checkbox" checked="checked" name="" id="">2015</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">2014</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">2013</label></li>
        <li><label><input type="checkbox" checked="checked" name="" id="">2012</label></li>
      </menu>
      <section id="works-students">
        <article>
        <header>
        <h3>2015 год</h3>
        <h4>Веб-дизайн</h4>
          <p><a href="http://web.what7.ru/skyrim/index.html">Колосов Арсений</a></p>
        <h3>2013 год</h3>
        <h4>CSS</h4>
        <p>
          <a href="http://webshp.ru/works/css/2013/Chuiko_N_A/">Чуйко Анастасия</a>
        </p>
          <p><a href="http://webshp.ru/works/css/2013/Chertykovceva_T">Чертыковцева Татьяна</a></p>
          <p><a href=""></a></p>
          <p><a href=""></a></p>

        </article
      </section>
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
