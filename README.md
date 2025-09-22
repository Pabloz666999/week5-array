# **Tugas Pemrograman Web Lanjut – Array Methods**

### **Identitas**
- **Nama**  : M. Bayu Aji  
- **NIM**   : F1D02310144  
- **Kelas** : B  

---

## **Deskripsi Tugas**
Tugas ini dibuat untuk mengimplementasikan enam metode array bawaan JavaScript, yaitu:  

- `map()`  
- `filter()`  
- `reduce()`  
- `find()`  
- `some()`  
- `every()`  

Langkah awal adalah membuat sebuah array berisi minimal **10 data objek buatan sendiri** yang mewakili karakter dengan beberapa properti:  

```javascript
{
  nama: "Ling",
  role: "Assassin",
  gender: "M",
  power: "Dragon's Descent",
  umur: 21,
}
```
- Menerapkan ke-enam metode array *(map, filter, reduce, find, some, every)*

1. ***map()*** digunakan untuk mengubah semua nama karakter jadi huruf besar (*uppercase*).
``` javascript
const namaUpperCase = heroes.map(hero => hero.nama.toUpperCase());
console.log("1. map(), Mengubah semua nama menjadi huruf besar (UpperCase) : \n", namaUpperCase);
```

2. ***filter()*** digunakan untuk menyaring nama yang panjangnya lebih dari 5 huruf, lalu menampilkan hanya nama-namanya saja.
``` javascript
const namaLebih5Huruf = heroes.filter(hero => hero.nama.length > 5).map(hero => hero.nama);
console.log("\n2. filter(), Mencari nama dengan panjang lebih dari 5 huruf : \n", namaLebih5Huruf);
```

3. ***reduce()*** saya pakai untuk menjumlahkan total karakter dari semua nama dan juga menjumlahkan semua umur kultivator.
``` javascript
const namaTotal = heroes.reduce((total, hero) => total + hero.nama.length, 0);
console.log("\n3. reduce(), Total semua karakter dari nama : ", namaTotal);

const umurTotal = heroes.reduce((total, hero) => total + hero.umur, 0);
console.log("   Total semua umur dari heroes : ", umurTotal);
```

4. ***find()*** saya gunakan untuk mencari kultivator yang namanya mengandung kata `Ling` .
``` javascript
const namaFind = heroes.find(hero => hero.nama.includes("Ling"));
console.log("\n4. find(), Mencari nama yang mengandung kata 'Ling' : \n", namaFind);
```

5. ***some()*** dipakai untuk mengecek apakah ada karakter yang punya nama lebih dari 9 huruf yang hasilnya akan `true` atau `false`.
``` javascript
const namaSome = heroes.some(hero => hero.nama.length > 9);
console.log("\n5. some(), Mengecek apakah ada nama yang lebih dari 9 karakter : ", namaSome);
```

6. ***every()*** dipakai untuk mengecek apakah semua karakter punya nama lebih dari 6 huruf yang hasilnya `true` atau `false`.
``` javascript
const namaEvery = heroes.every(hero => hero.nama.length > 6);
console.log("\n6. every(), Mengecek apakah semua nama memiliki panjang lebih dari 6 karakter : ", namaEvery);
```

### Screenshot Hasil Program
<img width="641" height="487" alt="image" src="https://github.com/user-attachments/assets/c9471147-765f-4834-9652-0ada4ecf6ad4" />

### Kesimpulan

Program dengan nama file arrayMethods_F1D02310144.js berhasil mendemonstrasikan penggunaan enam metode penting pada array di JavaScript, yaitu map, filter, reduce, find, some, dan every.

map() → Berhasil mengubah semua nama karakter menjadi huruf besar (uppercase).

filter() → Dapat menyaring nama dengan panjang lebih dari 5 huruf dan menampilkannya saja.

reduce() → Berhasil digunakan untuk menghitung total jumlah karakter pada semua nama serta total umur dari seluruh karakter.

find() → Mampu menemukan karakter dengan nama yang mengandung kata tertentu (contoh: "Ling").

some() → Berfungsi untuk memeriksa apakah ada minimal satu karakter dengan panjang nama lebih dari 9 huruf.

every() → Digunakan untuk mengecek apakah semua karakter memiliki panjang nama lebih dari 6 huruf.

Dari hasil percobaan ini, dapat disimpulkan bahwa setiap metode array memiliki fungsi yang berbeda namun saling melengkapi dalam pengolahan data. Dengan memahami dan menggunakan metode-metode ini, pengolahan data array menjadi lebih efektif, ringkas, dan mudah dibaca.

