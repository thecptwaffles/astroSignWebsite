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
   signElement.innerText = signs[10];
   signImage.src = signImages[10];
 } else if (formattedDate >= "02-19" && formattedDate <= "03-20") {
   signElement.innerText = signs[11];
   signImage.src = signImages[11];
 } else if (formattedDate >= "03-21" && formattedDate <= "04-19") {
   signElement.innerText = signs[0];
   signImage.src = signImages[0];
 } else if (formattedDate >= "04-20" && formattedDate <= "05-20") {
   signElement.innerText = signs[1];
   signImage.src = signImages[1];
 } else if (formattedDate >= "05-21" && formattedDate <= "06-20") {
   signElement.innerText = signs[2];
   signImage.innerText = signImages[2];
 } else if (formattedDate >= "06-21" && formattedDate <= "07-22") {
   signElement.innerText = signs[3];
   signImage.innerText = signImages[3];
 } else if (formattedDate >= "07-23" && formattedDate <= "08-22") {
   signElement.innerText = signs[4];
   signImage.src = signImages[4];
 } else if (formattedDate >= "08-23" && formattedDate <= "09-22") {
   signElement.innerText = signs[5];
   signImage.src = signImages[5];
 } else if (formattedDate >= "09-23" && formattedDate <= "10-22") {
   signElement.innerText = signs[6];
   signimage.src = signImages[6];
 } else if (formattedDate >= "10-23" && formattedDate <= "11-21") {
   signElement.innerText = signs[7];
   signimage.src = signImages[7];
 } else if (formattedDate >= "11-22" && formattedDate <= "12-21") {
   signElement.innerText = signs[8];
   signImage.src = signImages[8];
 } else if (formattedDate >= "12-22" && formattedDate <= "12-31") {
   signElement.innerText = signs[9];
   signImage.src = signImages[9];
 } else if (formattedDate >= "01-01" && formattedDate <= "01-19") {
   signElement.innerText = signs[9];
   signImage.src = signImages[9];
 } else {
   signElement.innerText = "Plese Enter a Valid Date"
   signImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuststickers.in%2Fwp-content%2Fuploads%2F2021%2F01%2Ferror-418-i-am-a-teapot-300x300.png&f=1&nofb=1&ipt=ed8a75499888f4f4e6a0b904913a6fefbee332bc469e15eaf6b892b59f970b21&ipo=images";
 }

console.log(formattedDate)
}
