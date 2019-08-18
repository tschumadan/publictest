<?php

// creating in xml

//create array bookstore
$bookstore=array("bens books","cates cooks");

// create 2dimensional array books
$books=array
    (
        array("Book1 subject","book1 title", "book title"),
        array("Book2 subject","book2 title", "book title"),
        array("Book3 subject","book3 title", "book title")
    );

$html = "<p id='xml'><stores>";
?>
<html>
<head>
</head>
<body>

<?php
foreach($bookstore as $val)
{
    // .= appending a value
    $html.="<bookstore>"."<name>".$val."</name">;
    foreach($books as $info)
    {
        $html.=""."<subject>".$info[0]."</subject>"."<title>".$info[1]."</title>"."author".$info[2]."<author>";
    }
    $html.="</bookstore>";
}

$html.="</stores></p>";
echo $html;
?>
</body>
</html>