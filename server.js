const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://air-quality-data6.p.rapidapi.com/geoJoinId?index=0&limit=500&orderBy=asc&value=0"
);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "7c864e1764msh628e4607741ef8ep141620jsn9ea4aa183474"
);
xhr.setRequestHeader("x-rapidapi-host", "air-quality-data6.p.rapidapi.com");

xhr.send(data);
