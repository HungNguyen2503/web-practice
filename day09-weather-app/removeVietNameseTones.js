export default function removeVietnameseTones(str) {
  return str.normalize("NFD")  // Tách ký tự và dấu
            .replace(/[\u0300-\u036f]/g, "")  // Xóa dấu
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
}