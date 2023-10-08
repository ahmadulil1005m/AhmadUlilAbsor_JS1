// if condition
var nama = "Ulil";
var umur = 20;

if (umur >= 17 && nama == "Ulil") {
   console.log("Anda diperbolehkan membuat SIM!");
}


console.log('                                 ');
//if condition
function cekumur(umur) {
   if (umur >= 17) {
       console.log("Anda memenuhi syarat untuk mendapatkan KTP");
   }
}

const umurorang = 18; 
cekumur(umurorang);


console.log('                                 ');
//if else condition
var daerah = "Tanjungpinang";

if (daerah == "Tanjungpinang"){
   console.log("Ikon Tanjungpinang adalah Kota Gurindam");
}
else {
   console.log("Ikon daerah lain tidak tersedia!");
}


console.log('                                 ');
// if else condition
var ipmatkul = 4.0;

if (ipmatkul >= 2.0 && ipmatkul <=4.0) {
       console.log("Anda Lulus Mata Kuliah Ini!");
   } else {
       console.log("Maaf, Anda mengulang Maata Kuliah ini tahun depan!");
   }

console.log('                                 ');
//else if condition
var month = "November";
var NumberOfDay;

if (month == "Januari" || month == "Maret" || month == "Mei" || month == "Juli" || month == "Agustus" || month == "Oktober" || month == "Desember") {
   NumberOfDay = 31;
} 
else if (month == "April" || month == "Juni" || month == "September" || month == "November") {
   NumberOfDay = 30;
} 
else if (month == "Februari") {
   NumberOfDay = "28 atau 29";
} 
else {
   NumberOfDay = "Tidak ada";
}
console.log("Jumlah hari dalam bulan " + month + " adalah " + NumberOfDay + " hari ");


console.log('                                 ');
//nested if condition
var uang = 100000;

if (uang >= 30000){
   if( uang >= 200000){
      if(uang >= 1000000){
         console.log("Bisa membeli Handphone");
      }
      else{
         console.log("Bisa membeli Headshet");
      }
   }
   else{
      console.log("Bisa membeli Mouse");
   }
}
else{
   console.log("Tidak bisa membeli!");
}


console.log('                                 ');
//switch case
let monthName = 11;

switch(monthName){
   case 1:
      console.log("Ke 1 adalah bulan Januari")
      break;
   case 2:
      console.log("Ke 2 adalah bulan Februari")
      break;
   case 3:
      console.log("Ke 3 adalah bulan Maret")
      break;
   case 4:
      console.log("Ke 4 adalah bulan April")
      break;
   case 5:
      console.log("Ke 5 adalah bulan Mei")
      break;
   case 6:
      console.log("Ke 6 adalah bulan Juni")
      break;
   case 7:
      console.log("Ke 7 adalah bulan Juli")
      break;
   case 8:
      console.log("Ke 8 adalah bulan Agustus")
      break;
   case 9:
      console.log("Ke 9 adalah bulan September")
      break;
   case 10:
      console.log("Ke 10 adalah bulan Oktober")
      break;
   case 11:
      console.log("Ke 11 adalah bulan November")
      break;
   case 12:
      console.log("Ke 12 adalah bulan Desember")
      break;
   default:
      console.log("Tidak ada dalam Opsi!")
      break;
}


console.log('                                 ');
// switch case
let software = 'Figma';

switch(software){
   case 'Javascript':
   case 'HTML':
   case 'CSS':
      console.log("Bahasa Pemrograman")
      break;
   case 'Figma':
      console.log("Desain Interface")
      break
   default:
      console.log("Tidak ada dalam Opsi!")
      break;
}


console.log('                                 ');
//for statement
const pelajar = [
   { nama: 'Ahmad', status: 'SMA' },
   { nama: 'Ulil', status: 'SMK' },
   { nama: 'Andi', status: 'SMP' },
   { nama: 'Putra', status: 'SMA' },
   { nama: 'Thoyibah', status: 'SD' }
];

console.log('Status sekolah anak-anak:');
for (let i = 0; i < pelajar.length; i++) {
   const anak = pelajar[i];
   console.log(`${anak.nama} bersekolah di tingkat ${anak.status}`);
}


console.log('                                 ');
//for statement
var suhuCelsius = [27, 23, 31, 16, 35];
var suhuFahrenheit = [];

for (var i = 0; i < suhuCelsius.length; i++) {
    var suhuF = (suhuCelsius[i] * 9/5) + 32;
    suhuFahrenheit.push(suhuF);
}

console.log("Suhu ruangan dalam Celsius: " + suhuCelsius);
console.log("Suhu ruangan dalam Fahrenheit: " + suhuFahrenheit);


console.log('                                 ');
//while
const countries = [
   { name: "Indonesia", continent: "Asia" },
   { name: "United States", continent: "North America" },
   { name: "Singapore", continent: "Asia" },
   { name: "Brazil", continent: "South America" },
   { name: "Germany", continent: "Europe" },
   { name: "Nigeria", continent: "Africa" },
   { name: "Australia", continent: "Australia" }
];

let index = 0;
const totalCountries = countries.length;

while (index < totalCountries) {
   const country = countries[index];
   console.log(`Negara ${country.name}, termasuk benua ${country.continent}`);
   index++;
}


console.log('                                 ');
//while
const status_negara = {
   Asia: ['China', 'India', 'Japan', 'Indonesia', 'Singapore'],
   Europe: ['Germany', 'France', 'Spain', 'Italy'],
   Africa: ['Nigeria', 'Egypt', 'South Africa', 'Kenya'],
   NorthAmerica: ['United States', 'Canada', 'Mexico'],
   SouthAmerica: ['Brazil', 'Argentina', 'Colombia'],
   Australia: ['Australia', 'New Zealand']
};

function display(continent) {
   let i = 0;
   console.log(`Negara-negara di benua ${continent}:`);
   while (i < status_negara[continent].length) {
       console.log(status_negara[continent][i]);
       i++;
   }
}

display('Africa');


console.log('                                 ');
//do while
const makanan_negara = {
   'Indonesia': ['Nasi Goreng', 'Sate', 'Rendang', 'Gado-gado'],
   'Italy': ['Pizza', 'Pasta', 'Risotto', 'Gelato'],
   'Japan': ['Sushi', 'Ramen', 'Tempura', 'Matcha'],
   'Mexico': ['Tacos', 'Enchiladas', 'Guacamole', 'Churros'],
   'Spain' : ['Paella', 'Tapas', 'Gazpacho', 'Churros']
};

function tampilkan(country) {
   console.log(`Makanan khas di ${country} adalah: `);

   let u = 0;
   do {
       console.log(makanan_negara[country][u]);
       u++;
   } while (u < makanan_negara[country].length);
}

tampilkan('Indonesia');


console.log('                                 ');
//function
const sports = {
   UnitedStates: ['American Football', 'Baseball', 'Basketball'],
   Brazil: ['Soccer', 'Capoeira', 'Volleyball'],
   Japan: ['Sumo Wrestling', 'Judo', 'Karate'],
   Australia: ['Australian Rules Football', 'Cricket', 'Rugby'],
   Spain: ['Soccer', 'Bullfighting', 'Basketball'],
   Thailand : ['Football Crazy Golf', 'Punch it Muay Thai Gym', 'Battlefield Phuket Laser Tag'],
   Indonesia : ['Badminton', 'Football', 'Vollyball', 'Table tennis']
};

function menampilkan(country) {
   if (sports[country]) {
       console.log(`Olahraga di ${country} berupa:`);
       for (let i = 0; i < sports[country].length; i++) {
           console.log(sports[country][i]);
       }
   } else {
       console.log(`Tidak ada data olahraga khas untuk ${country}.`);
   }
}

menampilkan('Indonesia');


console.log('                                 ');
//funcition
function hitungHarga(jarak, kelas) {
   const hargaPerKm = 700; // Harga per kilometer dalam rupiah 
   let hargaKelas = 0;
   
   if (kelas === 'ekonomi') {
       hargaKelas = 1; 
   } else if (kelas === 'bisnis') {
       hargaKelas = 1.5;
   } else if (kelas === 'eksekutif') {
       hargaKelas = 2;
   } else {
       return 'Kelas kereta tidak tertera dalam Opsi!'; 
   }

   const totalHarga = jarak * hargaPerKm * hargaKelas;
   return `Harga tiket kereta api untuk perjalanan ${jarak}km, dengan status kelas ${kelas} seharga Rp ${totalHarga}`;
}

const jarakPerjalanan = 100; // dalam km
const kelasKereta = 'eksekutif'; 
console.log(hitungHarga(jarakPerjalanan, kelasKereta));