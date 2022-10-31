const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setLs() {
  localStorage.setItem("id", `${user.id}`);
  localStorage.setItem("name", `${user.name}`);
  localStorage.setItem("age", `${user.age}`);
  console.log(localStorage);
}

setLs();
