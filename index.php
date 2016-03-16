
<!DOCTYPE html>
<html lang="ru">

  <head>
    <meta charset="utf-8">
    <title>Веб-дизайн. Школа программистов</title>
    <meta name="keywords" content="Школа программистов, Веб-дизайн, Москва, Мытищи, Московская область, обучение">
    <meta name="description" content="Сайт для учеников и учителей по направлению веб-дизайн в школе программистов">
    <meta name="viewport" content="width=device-width">
    <meta name = "robots" content = "all">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <meta property = "business:contact_data:country_name" content = "Russia">
    <meta name="tndStatus" content="notShop">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="canonical" href="https://webshp.ru">
  </head>
  <body>
    <?php
      $nav = $_SERVER['DOCUMENT_ROOT'].'/nvg/main';
      echo file_get_contents("$nav");
     ?>
    <main>
      <header>
        <h1>Сайт посвящён отделению веб-дизайна
        школы программистов</h1>
        <a href="http://мшп.рф"><img src="logo.png" alt = "логотип"></a>
      </header>
      <article>
        <header>
          <h2>Полезные материалы</h2>
        </header>
        <h3>Справочная информация</h3>
        <p>
          <a href="https://webref.ru/ref">WebReference</a> - прекрасный справочник по HTML и CSS.
          В нём можно найти описание различных тегов и правила их применения.
        </p>
        <h3>Редакторы</h3>
        <p>
          <a href="http://plnkr.co/">Plunker</a> - удобный и простой онлайн
          редактор HTML + CSS + JS с возможностью сохранения своих работ и обмена ими. Поддерживает возможность работы над одним проектом нескольких разработчиков.
        </p>
        <p>
          <a href="/edtr/atom.html">Atom</a> -  прекрасный, бесплатный, мощный кросплатформенный текстовый редактор от GitHub.
          Для того, чтобы ощутить его мощь, рекомендуем воспользоваться установкой дополнительных <a href="/edtr/atom.html">плагинов</a>, таких как <em>Emmet</em>,
          позволяющий печатать меньше, делать больше,
          <em>HTML Preview</em>, позволяющий видеть все вносимые изменения в соседней вкладке, <em>Live Server</em>, позволющий просматривать
          внесённые изменения в баузере.
        </p>
        <p>
          <a href="http://www.sublimetext.com/3">Sublime Text</a> -  великолепный текстовый редактор, позволяющий ускорить разработку проекта в несколько раз. Единственный минус -
          он условно <em>платный.</em> Легко улучшается до полноценной <dfn title="Интегрированная среда разработки">IDE</dfn> путём установки дополнений.
           Чтобы быстро и просто устанавливать дополнения, скачайте <a href="https://packagecontrol.io/installation">Package control</a>
        </p>
        <h3>Индексирование</h3>
        <p>
          Для того, чтобы ваш сайт отображался при поисковых запросах, его нужно добавить в индексирование поисковыми машинами.
        </p>
        <p>К счастью, это не сложно, так как поисковые машины <a href="yandex.ru">Яндекса</a> и <a href="google.ru">Google</a> предоставляют специальный инструментарий.</p>
        <p>Для Яндекса вы можете найти этот инструментарий в <a href="https://webmaster.yandex.ru/">Яндекс Вебмастер</a></p>
        <p>Для Google вы можете найти этот инструментарий в <a href="https://www.google.com/webmasters/">Google для веб-матеров</a></p>
        <h3>Остальное</h3>
        <p>
          <a href="https://github.com/">GitHub</a> -  крупнейший веб-сервис для
          хостинга IT-проектов и их совместной разработки.
          Основан на системе контроля версий Git
        </p>
        <p>
          <a href="https://glvrd.ru/">Главный редактор</a> -  позволит устранить грамматические ошибки и корректно сформулировать мысль.
        </p>
        <p>
          <a href="http://www.xn----7sbbiparddsgqdgdxrq.xn--p1ai/">Автоисправление ошибок</a> -  позволит устранить грамматические ошибки.
        </p>
        <p>
          <a href="http://fishtext.ru/index.php">Рыба</a> -  наполнит бессмысленным и интересным контентом ваш сайт. Конечно, "рыбу" лучше придумывать самому, но порой сложно.
        </p>
        <p>
          <a href="https://www.google.com/fonts/#ChoosePlace:select/Collection:Open+Sans/Script:cyrillic">Google fonts</a> - шрифты от Google - красивые и приятные. Позволят украсить свой сайт восхитительной типографиой, что очень <em>важно!</em>. Правильно подобранный шрифт сильно влияет.
        </p>
        <p>
        <a href="https://developers.google.com/speed/pagespeed/insights/">Google pagespeed</a> позволит узнать, насколько ваш веб-ресурс оптимизирован по скорости загрузки и по адаптивности содержимого.
        </p>
        <p>
        HTML <a href="https://validator.w3.org/nu/">Validator</a> позволит проверить ваш html-код на наличие ошибок.У CSS тоже есть свой <a href="http://jigsaw.w3.org/css-validator">валидатор</a>, поэтому вы сможете создавать ещё более качественные сайты
        </p>
        <a href="http://git-scm.com/">Git</a> - система контроля версий. На сайте git также можно найти книгу -
        <a href="http://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9E-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B5-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9">справочник</a> на русском языке.
      </article>
    </main>
    <footer>
     <a href="https://my.informatics.ru">my.informatics.ru</a>
     <p>Делайте уроки! =)</p>
     <p>Школа программистов г. Москва, г. Мытищи, г. Пушкино, г. Королёв</p>
    </footer>
    <script async src="/scripts/ya_metrica.js" type="text/javascript"></script>
    <script async src="scripts/font.js" type="text/javascript"></script>
    <script async src="scripts/menu.js" type="text/javascript"></script>
  </body>
</html>