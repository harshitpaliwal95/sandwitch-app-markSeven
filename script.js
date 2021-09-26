const translateInput = document.querySelector("#textarea");

const translateOutput = document.querySelector("#output");

const translator = document.querySelector("#btn-translate");

let randomNum;

const serverURL = [
  { url: "https://api.funtranslations.com/translate/gungan.json" },
  { url: "https://api.funtranslations.com/translate/morse.json" },
  { url: "https://api.funtranslations.com/translate/mandalorian.json" },
  { url: "https://api.funtranslations.com/translate/navi.json" },
];
console.log(serverURL[1].url);

function createURL() {
  return `${serverURL[randomNum].url}?text=${translateInput.value}`;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

translator.addEventListener("click", () => {
  randomNum = Math.trunc(Math.random() * 4);
  console.log(randomNum);
  if (translateInput.value != "") {
    fetch(createURL(randomNum, translateInput.value))
      .then((response) => response.json())
      .then((json) => {
        let translatedText = json.contents.translated;
        translateOutput.innerText = translatedText; // output
      })
      .catch(errorHandler);
  } else {
    translateOutput.innerText = "write something";
    setTimeout(() => {
      translateOutput.innerText = "";
    }, 2000);
  }
});
