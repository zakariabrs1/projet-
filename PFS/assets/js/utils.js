if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}
