$(document).ready(function () {
  $(".card").each(function () {
    $(this).click(function () {
      $("#gambar").remove();
      $("#suara").remove();
      let binatang = $(this).find("h2").attr("id");
      if (binatang == "ayam") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset.kompas.com/crops/TfUM4Aft1Jxz-uSdBF-W7Gwtj0k=/0x0:4246x2831/750x500/data/photo/2021/12/11/61b4a4c236bdc.jpg" alt="">`);
        $(this).append(`<audio src="https://divedigital.id/mp3/wp-content/uploads/2021/10/5-Ayam-Berkokok.mp3" id="suara" autoplay></audio>`);
      } else if (binatang == "bebek") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://cdn-2.tstatic.net/bali/foto/bank/images/9-arti-mimpi-bebek-pertanda-bahwa-anda-harus-mencoba.jpg" alt="">`);
        $(this).append(`<audio src="https://bit.ly/2qETvdi " id="suara" autoplay></audio>`);
      } else if (binatang == "burung") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://media.suara.com/pictures/original/2021/11/26/14063-ilustrasi-burung-lovebird-pixabayhoppelpoppel82.jpg" alt="">`);
        $(this).append(`<audio src="https://bit.ly/2IZwHKq " id="suara" autoplay></audio>`);
      } else if (binatang == "angsa") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset.kompas.com/crops/BxuqUTUU3khTvatzOGp0UlTzxio=/0x0:1000x667/750x500/data/photo/2022/04/21/626137cb8caa0.jpg" alt="">`);
        $(this).append(`<audio src="https://drive.google.com/uc?export=download&id=1dIctK6piTxAYmwDrQYM2P-_MPAdyZhcs" id="suara" autoplay></audio>`);
      } else if (binatang == "sapi") {
        $(this).prepend(
          `<img class="card-img-top" id="gambar" src="https://cdn0-production-images-kly.akamaized.net/gguGbmrwc96ojT1ek-9hPg-CEgo=/0x130:1920x1212/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4048720/original/077671600_1654846143-pexels-pixabay-248337.jpg" alt="">`
        );
        $(this).append(`<audio src="https://mkicau.com/wp-content/uploads/2021/07/1-sapi.mp3 " id="suara" autoplay></audio>`);
      } else if (binatang == "babi") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://www.deheus.id/globalassets/hero-contentpage/de-heus-animal-nutrition_animals_swine_piglets_hero.jpeg?mode=crop&width=500&height=350" alt="">`);
        $(this).append(
          `<audio src="https://mbeta.123tokyo.xyz/get.php/c/1d/0qRWpMscGbs.mp3?cid=MTI0LjE1OC4xODkuODN8TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuMTAyIFNhZmFyaS81MzcuMzYgT1BSLzkwLjAuNDQ4MC4xMTd8SUQ%3D&h=7qr4Ige9Y__0g5Kp75lbig&s=1664038014&n=Suara-Pikat-Babi-Hutan-Celeng-Jantan-dan-Betina-Siang-dan-Malam-Sus-scrofa&dom=Iframe " id="suara" autoplay></audio>`
        );
      } else if (binatang == "kambing") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://awsimages.detik.net.id/community/media/visual/2022/07/09/torpedo-kambing-4.jpeg?w=1200" alt="">`);
        $(this).append(`<audio src="https://mkicau.com/wp-content/uploads/2021/05/1-Kambing.mp3 " id="suara" autoplay></audio>`);
      } else if (binatang == "kuda") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://akcdn.detik.net.id/visual/2016/02/19/74990601-4c0c-4cc7-bda0-32df5c9abcb5_169.jpg?w=650" alt="">`);
        $(this).append(`<audio src="https://apiyt.com/converted.php?utm_source=api&sid=RF7FI8SSrKE;1664031136;01c91499a903968cc2429f392a7ce90&t=&engine=undefined " id="suara" autoplay></audio>`);
      } else if (binatang == "harimau") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://awsimages.detik.net.id/community/media/visual/2022/01/02/harimau-malaya.png?w=1200" alt="">`);
        $(this).append(
          `<audio src="https://mgamma.123tokyo.xyz/get.php/2/86/v2xvZlED7Iw.mp3?cid=MTI0LjE1OC4xODkuODN8TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuMTAyIFNhZmFyaS81MzcuMzYgT1BSLzkwLjAuNDQ4MC4xMTd8SUQ%3D&h=3zUUQuz9uJLskD8kR4WQFw&s=1664038832&n=Harimau-Putih-Mengaum-Suara-Harimau-Tiger-White&dom=Iframe " id="suara" autoplay></audio>`
        );
      } else if (binatang == "gajah") {
        $(this).prepend(`<img class="card-img-top" id="gambar" src="https://images.theconversation.com/files/415221/original/file-20210809-19-558jz0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="">`);
        $(this).append(
          `<audio src="https://malpha.123tokyo.xyz/get.php/2/34/1OfnPzhIJhY.mp3?cid=MTI0LjE1OC4xODkuODN8TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuMTAyIFNhZmFyaS81MzcuMzYgT1BSLzkwLjAuNDQ4MC4xMTd8SUQ%3D&h=R5zgdXAWy4-9SBgg4b2pbw&s=1664038904&n=Efek-suara-Gajah&dom=Iframe " id="suara" autoplay></audio>`
        );
      } else if (binatang == "beruang") {
        $(this).prepend(
          `<img class="card-img-top" id="gambar" src="https://cdn1-production-images-kly.akamaized.net/x1C5yiJK6LVmEIvUe_TgWQvFqQc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3309527/original/090134200_1606535983-bear-422682_1280.jpg" alt="">`
        );
        $(this).append(
          `<audio src="https://mgamma.123tokyo.xyz/get.php/2/af/zgr6YWC_3ls.mp3?cid=MTI0LjE1OC4xODkuODN8TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuMTAyIFNhZmFyaS81MzcuMzYgT1BSLzkwLjAuNDQ4MC4xMTd8SUQ%3D&h=Ci_4Fnk0FRV94VnuTnXnfQ&s=1664039320&n=suara-beruang-bear&dom=Iframe " id="suara" autoplay></audio>`
        );
      } else {
        $(this).prepend(
          `<img class="card-img-top" id="gambar" src="https://cdn.idntimes.com/content-images/community/2021/07/northwestern-wolf-65b9b0e4-20da-4e5e-b561-29dd433f796-resize-750-a338ebee7963a0de04272cb76e2b071d-80e5576abe4787dad925e4ab483491da_600x400.jpeg" alt="">`
        );
        $(this).append(
          `<audio src=" https://malpha.123tokyo.xyz/get.php/0/2b/bJulMn5BgOU.mp3?cid=MTI0LjE1OC4xODkuODN8TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuMTAyIFNhZmFyaS81MzcuMzYgT1BSLzkwLjAuNDQ4MC4xMTd8SUQ%3D&h=Kp9HnaDsk-EmltpTfUOPKA&s=1664039506&n=nada-dering-suara-serigala&dom=Iframe" id="suara" autoplay></audio>`
        );
      }
    });
  });
});
