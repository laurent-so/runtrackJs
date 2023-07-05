<!DOCTYPE html>
<html>
<head>
  <title>Arc-en-ciel</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .container img {
      width: 100px;
      height: 100px;
      margin: 5px;
    }
    #message {
      margin-top: 20px;
      font-weight: bold;
    }
    .green {
      color: green;
    }
    .red {
      color: red;
    }
  </style>
</head>
<body>
  <button id="shuffleButton">Mélanger</button>
  <div class="container" id="imageContainer">
    <img src="arc1.png" id="image1" draggable="true" ondragstart="drag(event)">
    <img src="arc2.png" id="image2" draggable="true" ondragstart="drag(event)">
    <img src="arc3.png" id="image3" draggable="true" ondragstart="drag(event)">
    <img src="arc4.png" id="image4" draggable="true" ondragstart="drag(event)">
    <img src="arc5.png" id="image5" draggable="true" ondragstart="drag(event)">
    <img src="arc6.png" id="image6" draggable="true" ondragstart="drag(event)">
  </div>
  <div id="message"></div>

  <script src="script.js"></script>
</body>
</html>
