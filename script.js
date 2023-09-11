 var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

 var signImages = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aries_symbol_%28bold%29.svg/1200px-Aries_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Taurus_symbol_%28bold%29.svg/1200px-Taurus_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gemini_symbol_%28bold%29.svg/1200px-Gemini_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Cancer_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Leo_symbol_%28bold%29.svg/800px-Leo_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Virgo_symbol_%28bold%29.svg/1200px-Virgo_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Libra_symbol_%28bold%29.svg/1200px-Libra_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Scorpius_symbol_%28bold%29.svg/1200px-Scorpius_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sagittarius_symbol_%28bold%29.svg/1200px-Sagittarius_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Capricornus_symbol_%28bold%29.svg/1200px-Capricornus_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Aquarius_symbol_%28bold%29.svg/1200px-Aquarius_symbol_%28bold%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pisces_symbol_%28bold%29.svg/1200px-Pisces_symbol_%28bold%29.svg.png"];

 var signElement = document.getElementById("sign");
 var signImage = document.getElementById("signImage");

 function getDate() {
  var selectedDate = new Date(document.getElementById("dateInput").value);
  var month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
  var day = (selectedDate.getDate() + 1).toString().padStart(2, "0");
  var formattedDate = month + "-" + day;

  if (formattedDate >= "01-20" && formattedDate <= "02-18") {
    signElement.innerHTML = signs[10];
    signImage.src = signImages[10];
  } 

   else if (formattedDate >= "12-22" && formattedDate <= "01-19") {
    signElement.innerHTML = signs[9];
    signImage.innerHTML = signImages[9];
  }

  console.log(formattedDate)
}
