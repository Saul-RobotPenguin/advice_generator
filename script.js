import axios from "axios";
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  try {
    let response = await axios.get(`https://api.adviceslip.com/advice`);
    let advice = response.data.slip.advice;
    console.log(advice);

    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = advice;
  } catch (error) {
    console.error(error);
  }
});
