const yourName = prompt("Siapa Namamu?");
const area = prompt("Kamu dari Daerah mana?");
 const kotq = alert("Wahhh senang bertemu denganmu:) ");
const user = {
   name: {
       first: yourName,
   },
   area: area
};
 
if (user.area === "sunda") {
   alert("Kumaha Kabarna " + user.name.first + "!");
} else if (user.area === "jawa") {
   alert("Piye Kabare " + user.name.first + "!");
} else if (user.area === "nias") {
   alert("Ya'ahowu " + user.name.first + "! "  + "Selamat Datang Di Halaman website HALAWA27:)");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + "!");
}