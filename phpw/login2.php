<?php
header("Content-type:text/html;charset=utf-8");
$tel = $_POST['tel'];
$conn = mysql_connect("localhost","root","root");
if(!$conn){
    echo("数据库出错".mysql_error());
}else{
    mysql_select_db("mydb1908",$conn);
    $sqlstr="select * from diorlogin where username='$tel'";
    $result = mysql_query($sqlstr,$conn);
    $rows = mysql_num_rows($result);
    if($rows>0){
        mysql_close($conn);
        echo "1";
    }else{
        echo "0";
    }
}
?>