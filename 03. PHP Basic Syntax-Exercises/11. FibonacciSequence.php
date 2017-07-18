<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
<?php
    if (isset($_GET['num'])){
        $num = intval($_GET['num']);
        $fibNum1 = 0;
        $fibNum2 = 1;

        for ($i = 1 ; $i <= $num; $i++){
            if ($i == 1){
                echo 1 . " ";
            } else if ($i == $num) {
                $result = $fibNum1 + $fibNum2;
                echo $result;
                $fibNum1 = $fibNum2;
                $fibNum2 = $result;
            } else {
                $result = $fibNum1 + $fibNum2;
                echo $result . " ";
                $fibNum1 = $fibNum2;
                $fibNum2 = $result;
            }
        }
    }
?>
</body>
</html>