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

function show_date() { 
  var in_date = new Date();
  var str=in_date.getDate() +'/'+(in_date.getMonth()+1)+'/'+in_date.getFullYear()
  document.getElementById('display2').innerHTML=str
  }
  
  function changeBack() {
    document.body.style.background = "url('https://wallpaperaccess.com/full/6043682.jpg') no-repeat right top";
  }



