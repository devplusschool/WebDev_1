<?php
header('Content-Type:text/html;charset=utf-8');

   if($_REQUEST['cod']==1){
      echo "<strong>BATMAN BEGINS</strong> El caballero de la noche inicia su travesís con esta película del año 2001";
   } if($_REQUEST['cod']==2){
      echo "<strong>BATMAN:THE DARK KNIGHT</strong> Segunda entrega de la trilogía de Nolan dónde Batman no sólo enfrenta al Guasón sino que además ve el nacer de un nuevo villano: Harvey Dent";
   } if($_REQUEST['cod']==3){
      echo "<strong>BATMAN:THE DARK KNIGHT RISES</strong> Última película de la saga de Nolan y sin lugar a duda el punto más alto dentro de esta trilogía dónde el villano principal no es Bane o Gatúbela sino la hija de su mentor Raz Al-Gul, Tania Al-Gul";
   }

?>