<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据
    $query = $_GET['query'];

    //2、查询数据库
    $conn = mysql_connect("localhost","root","root");

    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("mydb1908",$conn);

        //3)、执行SQL语句（数据传输）
        //3.1)
        $sqlstr="select * from query where name like '%$query%'";
        // echo $sqlstr;
        $result = mysql_query($sqlstr,$conn);
        $rows = mysql_num_rows($result);//获得结果的行数
        if($rows>0){
            //4)、关闭数据库
            mysql_close($conn);
            $str = "[";
            $row = mysql_fetch_array($result);//拿出下一行
            while($row){
                $str = $str.'{"id":"'.$row[0].'","name":"'.$row[1].'","money":"'.$row[2].'","new":"'.$row[3].'","img":"'.$row[4].'"}';
                $row = mysql_fetch_array($result);//拿出下一行
                if($row){
                    $str=$str.",";
                }
            }
            $str = $str.']';
            echo $str;//登录成功
        }else{
            echo "[]";//登录失败
        }
    }
?>