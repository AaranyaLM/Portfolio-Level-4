var mainNumber=0;


const value = document.querySelector("#value");
const btns = document.querySelectorAll(".button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        mainNumber--;
      } else if (styles.contains("increase")) {
        mainNumber++;
      } else {
        mainNumber = 0;
      }
      if (mainNumber>0){
        value.style.color='green';
      }
      if (mainNumber<0){
        value.style.color='red';
      }
      if(mainNumber==0){
        value.style.color='black';
      }
  
      value.textContent = mainNumber;
    });
  });
