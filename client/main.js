document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };



document.getElementById("furtunesButton").onclick = function () {
axios.get("http://localhost:4000/api/furtune")
  .then(function (res) {
    const data = res.data;
    alert(data);
  });
};  





