<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据

    $username = $_POST['username'];
    $passwords = $_POST['passwords'];

    //2、处理
     //1)、链接数据库(搭桥)
    
     $conn = mysql_connect("localhost","root","root");

    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("mydb1908",$conn);

        //3)、执行SQL语句（数据传输）
        //3.1)
        $sqlstr="select * from diorlogin where username='$username'";//查询该用户名在数据库中有没有。
        $result = mysql_query($sqlstr,$conn);
        $rows = mysql_num_rows($result);//获得结果的行数
        // echo "rows:$rows";
        if($rows>0){
            //4)、关闭数据库
            mysql_close($conn);
            echo "-1";//被使用
        }else{
            $sqlstr="insert into diorlogin(username,userpass) values('$username','$passwords')";
            $result = mysql_query( $sqlstr,$conn);
            //4)、关闭数据库
            mysql_close($conn);
             //3、响应
            // echo "result：$result";
            if($result!=1){
                echo "0";//注册失败，请重新注册
            }else{
                echo "2";//亲，恭喜您，注册成功！
            }
        }
    }
?>