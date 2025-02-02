const fakePic = "https://thispersondoesnotexist.com/";

function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

function game() {
  const imageCon = document.getElementById("images");
  const resultCon = document.getElementById("result");

  function draw() {
    imageCon.innerHTML = "";
    resultCon.innerHTML = "";

    const again = document.createElement("button");
    again.textContent = "Play again!";
    again.onclick = draw;

    const rand = Math.random() > 0.5;
    const arr = [rand, !rand];

    for (const isReal of arr) {
      const img = document.createElement("img");
      img.src = isReal ? realPic() : fakePic;
      imageCon.appendChild(img);

      img.onclick = function () {
        resultCon.textcontent = isReal
          ? "you are correct!"
          : "you are incorrect";
        streak = isReal ? streak + 1 : 0;
        streakcon.innerHTML = "streak:" + streak;
        resultCon.appendChild(again);
      };
    }
  }

  draw();
  const streakcon = document.getElementById("streak");

  let streak = 0;

  for (const isReal of arr) {
    img.onclick = function () {
      console.log("new streak", streak);
    };
  }
}

game();
