<?php
if (count($_POST) > 0)//--Если были приняты данные из HTML-формы
{
	$name = $_POST['name'];
	// echo ("page..$name");
	if ($name == "get_page") {
		$page = $_POST['page'];
		// echo ("page..$page");
		$content  = file_get_contents($page);
		$template = '|<main>(.+)</main>|isU';
		$result   = preg_match($template, $content, $matches);

		// echo ($template);
		echo ($matches[1]);
		// echo("haha")
	}
}
?>