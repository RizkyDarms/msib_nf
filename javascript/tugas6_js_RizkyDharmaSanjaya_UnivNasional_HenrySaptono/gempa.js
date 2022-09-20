let tbl = document.getElementById("tbl");
let nomor = 1;
class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }
  dampakGempa() {
    if (this.skala <= 2) {
      this.dampak = "Tidak Terasa";
    } else if (this.skala <= 4) {
      this.dampak = "Bangunan Retak-Retak";
    } else if (this.skala <= 6) {
      this.dampak = "Bangunan Roboh";
    } else {
      this.dampak = "Bangunan roboh dan berpotensi tsunami";
    }
    return this.dampak;
  }
  infoGempa() {
    tbl.innerHTML += `
    <tr>
          <td>${nomor++}</td>
          <td>${this.lokasi}</td>
          <td>${this.skala}</td>
          <td>${this.dampakGempa()}</td>
    </tr>`;
  }
}
const g1 = new Gempa("Aceh", 5);
g1.infoGempa();

const g2 = new Gempa("Jakarta", 2.5);
g2.infoGempa();

const g3 = new Gempa("Bogor", 1);
g3.infoGempa();

const g4 = new Gempa("NTT", 7);
g4.infoGempa();

const g5 = new Gempa("Madura", 4);
g5.infoGempa();

const g6 = new Gempa("Bandung", 6);
g6.infoGempa();

const g7 = new Gempa("Surabaya", 10);
g7.infoGempa();

const g8 = new Gempa("Bali", 8);
g8.infoGempa();

const g9 = new Gempa("Lampung", 3);
g9.infoGempa();

const g10 = new Gempa("Lombok", 9);
g10.infoGempa();
