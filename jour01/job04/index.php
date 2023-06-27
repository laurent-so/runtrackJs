<!DOCTYPE html>
<html>
<head>
    <title>Ma page</title>
    <script src="script.js"></script>
</head>
<body>
    <?php
        $annee = 2024; // Année à vérifier
        $resultat = "<script>console.log(bisextile($annee));</script>";
        echo $resultat;
    ?>
</body>
</html>
