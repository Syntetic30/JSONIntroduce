function hitungAkarPangkatDua(x) {
    if (x < 0) {
      return "Tidak boleh memasukkan bilangan negatif!";
    } else if (x % 2 !== 0) {
      return "Hanya bilangan genap yang diizinkan!";
    } else {
      return `Akar pangkat dua dari ${x} adalah ${Math.sqrt(x)}`;
    }
  }
  
  const inputUser = parseInt(prompt("Masukkan bilangan bulat: "));
  const hasil = hitungAkarPangkatDua(inputUser);
  console.log(hasil);
  