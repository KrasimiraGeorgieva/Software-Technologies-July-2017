<html lang="en">

<head>
    <meta charset="UTF-8">
</head>
<ul>
    <?php for ($num=1;$num<=20;$num++): ?>
           <?php $color = $num % 2 == 0 ? 'green' : 'blue';?>
        <li><span style="color: <?=$color;?>"><?php echo $num;?></span></li>
    <?php endfor; ?>
</ul>