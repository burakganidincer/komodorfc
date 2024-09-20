// utils/urlUtils.js
export function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/ş|ş/g, "s")
    .replace(/ı|ı/g, "i")
    .replace(/ç|ç/g, "c")
    .replace(/ğ|ğ/g, "g")
    .replace(/ü|ü/g, "u")
    .replace(/ö|ö/g, "o")
    .replace(/[^a-z0-9]/g, "-") // sadece a-z, 0-9 ve '-' karakterlerini kabul et
    .replace(/--+/g, "-") // ardışık '-' karakterlerini tek '-' ile değiştir
    .trim("-"); // baştaki ve sondaki '-' karakterlerini kaldır
}
