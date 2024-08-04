const button = document.querySelector("button");
const image = document.querySelector("img");
const loading = document.querySelector(".loading");

let isLoading = true;
image.src = localStorage.getItem("imageURL") || null;

const fetchHandler = async () => {
  if (isLoading) loading.innerText = "Loading...";

  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  image.src = data.message;
  isLoading = false;
  if (!isLoading) loading.innerText = "";

  saveToLocalStorage(data.message);
};

const saveToLocalStorage = (URL) => {
  localStorage.setItem("imageURL", URL);
};

button.addEventListener("click", fetchHandler);
