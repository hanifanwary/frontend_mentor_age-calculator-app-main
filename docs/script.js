const hitungButton = document.querySelector(".hitung");

hitungButton.addEventListener("click", function () {
  const hariInput = document.querySelector("#hari").value;
  const bulanInput = document.querySelector("#bulan").value;
  const tahunInput = document.querySelector("#tahun").value;
  const hasilTahun = document.querySelector("#hasiltahun");
  const hasilBulan = document.querySelector("#hasilbulan");
  const hasilHari = document.querySelector("#hasilHari");
  //   error text
  document.querySelector("#error-hari").classList.add("hidden");
  document.querySelector("#error-bulan").classList.add("hidden");
  document.querySelector("#error-tahun").classList.add("hidden");

  // Reset input border color
  document.querySelector("#hari").classList.remove("border-red-500");
  document.querySelector("#bulan").classList.remove("border-red-500");
  document.querySelector("#tahun").classList.remove("border-red-500");
  //   error text
  const eD = document.querySelector(".hDay").classList.remove("text-red-500");
  const eM = document.querySelector(".mMonth").classList.remove("text-red-500");
  const eY = document.querySelector(".yYear").classList.remove("text-red-500");

  const hari = parseInt(hariInput);
  const bulan = parseInt(bulanInput);
  const tahun = parseInt(tahunInput);

  // error bukan angka
  if (isNaN(hari) || isNaN(bulan) || isNaN(tahun)) {
    if (isNaN(hari)) {
      document.querySelector("#error-hari").classList.remove("hidden");
      document.querySelector("#hari").classList.add("border-red-500");
      document.querySelector(".hDay").classList.add("text-red-500");
    }
    if (isNaN(bulan)) {
      document.querySelector("#error-bulan").classList.remove("hidden");
      document.querySelector("#bulan").classList.add("border-red-500");
      document.querySelector(".mMonth").classList.add("text-red-500");
    }
    if (isNaN(tahun)) {
      document.querySelector("#error-tahun").classList.remove("hidden");
      document.querySelector("#tahun").classList.add("border-red-500");
      document.querySelector(".yYear").classList.add("text-red-500");
    }
    return; // Hentikan eksekusi jika input bukan angka
  }

  // Validasi rentang angka yang masuk akal
  if (hari < 1 || hari > 31 || bulan < 1 || bulan > 12 || tahun < 1900 || tahun > 2100) {
    if (hari < 1 || hari > 31) {
      document.querySelector("#error-hari").classList.remove("hidden");
      document.querySelector("#hari").classList.add("border-red-500");
    }
    if (bulan < 1 || bulan > 12) {
      document.querySelector("#error-bulan").classList.remove("hidden");
      document.querySelector("#bulan").classList.add("border-red-500");
    }
    if (tahun < 1900 || tahun > 2100) {
      document.querySelector("#error-tahun").classList.remove("hidden");
      document.querySelector("#tahun").classList.add("border-red-500");
    }
    return;
  }

  // validasi input
  if (!isvalidDate(tahun, bulan, hari)) {
    // tanggal sekarang
    const today = new Date();
    const tahunSekarang = today.getFullYear();

    // hitung usia
    let ageYear = today.getFullYear() - tahun;
    let ageMonth = today.getMonth() + 1 - bulan;
    let ageDay = today.getDate() - hari;

    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    hasilTahun.textContent = ageYear;
    hasilBulan.textContent = ageMonth;
    hasilHari.textContent = ageDay;
  }
});

function isvalidDate(year, month, day) {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
