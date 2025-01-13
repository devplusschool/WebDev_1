<?php
  header("Content-Type:text/html; charset=utf-8");
  $ar = fopen("image.txt","a") or die("No se pudo abrir el archivo...");
  $mov;
  if($_REQUEST['movie']==1){
    $mov = "Batman Begins";
  }
  else if($_REQUEST['movie']==2){
    $mov = "Batman The Dark Knight";
  }
  else if($_REQUEST['movie']==3){
    $mov = "Batman Rises";
  }


  fputs($ar,"Nombre: ".$_REQUEST['name']."<br>");
  fputs($ar,"Película: ".$mov."<br><br>");

  fclose($ar);

  $ar = fopen("image.txt","r") or die("No se pudo abrir el archivo...");
  while(!feof($ar)){
     $line = fgets($ar);
     echo $line;
  }

  fclose($ar);
?>