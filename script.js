 var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

 var signImages = ["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F05%2FAries-PNG-Picture-180x180.png&f=1&nofb=1&ipt=e579f5520ab998185ab0d2f489f8f28d91b72c13b6ab386b3557bbff0f1e5185&ipo=images", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F05%2FTaurus-PNG-180x180.png&f=1&nofb=1&ipt=7429b2e8920c0b15cbfd0d3fed8933ac6fcd9dd35aab5ddd131054b2d3138033&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjessicadavidsonauthor.files.wordpress.com%2F2014%2F08%2Fgemini-glyph.jpg%3Fw%3D150%26h%3D150&f=1&nofb=1&ipt=94c7732d1825c34f77ac814386e9b4b1019d3d99f82469818162e78f303baee8&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjessicadavidsonauthor.files.wordpress.com%2F2014%2F08%2Fcancer-glyph-e1481307252371.jpg%3Fw%3D150&f=1&nofb=1&ipt=b08c04b7b40ebdc7b9db9285c1d83e82643dea12ade6b0545569363df278e217&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RV2uu_pikDeuXmuKpyJHZwAAAA%26pid%3DApi&f=1&ipt=a0912f8582aad344658057f8d8599d80a125eaabd9cde009f6ef100823a666dd&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0c%2FVirgo.svg%2F40px-Virgo.svg.png&f=1&nofb=1&ipt=fc7bc4043b00de5752dae235f743a4e25b3711bfc1bd5594da0abe038fedaf92&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff7%2FLibra.svg%2F40px-Libra.svg.png&f=1&nofb=1&ipt=db0d619bdd4ce6675b604073e8a66a30fee05126d85f2d84ae180c0ba0a8d0bc&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fea%2FScorpio.svg%2F40px-Scorpio.svg.png&f=1&nofb=1&ipt=6a0221ac59f712f43156c5bf2dc096d01c7943a2dbfdb49a4069d165504ce26b&ipo=images", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F14%2FSagittarius_symbol.png&f=1&nofb=1&ipt=408dee338ad89d11728a4ad26eb7f7838e8a23949329a68fab1ca10c1a3e78f3&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F76%2FCapricorn.svg%2F40px-Capricorn.svg.png&f=1&nofb=1&ipt=d39e75354f0e1cfe22f1d58cb0a967789325ae39ab15a9ee24f2b54b4f40eada&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F24%2FAquarius.svg%2F22px-Aquarius.svg.png&f=1&nofb=1&ipt=ded5bbfc57dd876b46c299c9a5ed344027bf53b10b828cc6fe04eb3b5b3fd986&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FPisces.svg%2F33px-Pisces.svg.png&f=1&nofb=1&ipt=4546f2585ffc28fdc78e3d1262dfdff814548c51793727428b4be37fca854f07&ipo=images"];

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
   signImage.src = signImages[2];
 } else if (formattedDate >= "06-21" && formattedDate <= "07-22") {
   signElement.innerText = signs[3];
   signImage.src = signImages[3];
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
