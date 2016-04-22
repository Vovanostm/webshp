<?php
header("Content-Type: text/html; charset=utf-8");

if (count($_GET) > 0){
	$g_name = $_GET['name'];
	if ($g_name == "to_work"){
		$fp = fopen('to_work.txt', 'a+');
		$mytext = $_GET['text']."\n";
		$test = fwrite($fp, $mytext);
		if ($test) echo 'Принято';
		else echo 'Ошибка';
		fclose($fp);
	}
 if ($g_name == "smile"){
	 echo "smiling";
 }
 if ($g_name == "cat"){
	 echo "dog";
 }
 if ($g_name == "help"){
	 echo "try help_me_please";
 }
 if ($g_name == "help_me_please"){
	 echo "okay - smile, help, pleaze, bill, sqr, 2+2";
 }
 if ($g_name == "pleaze"){
	echo "Нет и даже не проси";
 }
 if ($g_name == "pleaze_pleaze"){
	echo "Ну ладно - best";
 }
 if ($g_name == "best"){
	echo "Ты лучший, нашёл оценку 5!";
 }
 if ($g_name == "bill"){
 	echo "cipher";
 }
 if ($g_name == "2+2"){
 	echo "11";
 }
 if ($g_name == "11"){
	 echo "Да, 2+2 равно 11 в двоичной сс";
 }
 if ($g_name == "sqr"){
	echo "Это квадратный корень";
 }

}


if (count($_POST) > 0)
{




	$name = $_POST['name'];
	// echo ("page..$name");

	if ($name == "get_page") {
		$page = $_POST['page'];
		// echo ("page..$page");
		if ( file_exists($page) )
		{
			$content  = file_get_contents($page);
		}
		else
		{
			$content  = file_get_contents("./errors/404.htm");
		}
		$template = '|<main>(.+)</main>|isU';
		$result   = preg_match($template, $content, $matches);
		echo ($matches[1]);
		// echo ($template);
		//
		// echo glob("*");
		// echo scandir(".");
		// $scd = scandir("/");
    // foreach ($scd as $fl) {
    // 	echo $fl;
    // }
		// echo("haha")
	}
}

?>
