const buttonListener = () => {
  while (true) {
    const screenDisplay = document.querySelector("#screen");
    let allButtons = document.querySelectorAll("#number-button");
    console.log(allButtons);
    allButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        document.querySelector("#screen").innerText =
          document.querySelector("#screen").innerText + event.target.innerText;
      });
    });
    /* const clearAll = () => {    // AC button function
      const screenText = document.querySelector("#screen")
      screentText.innerText = "";
    } */
  }
};
buttonListener();
