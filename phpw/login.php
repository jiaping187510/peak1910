<?php
header("Content-type:text/html;charset=utf-8");
$username = $_POST['username'];
$passwords = $_POST['userpass'];
$conn = mysql_connect("localhost","root","root");
if(!$conn){
    echo("数据库出错".mysql_error());
}else{
    mysql_select_db("mydb1908",$conn);
    $sqlstr="select * from diorlogin where username='$username' and userpass='$passwords' ";
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