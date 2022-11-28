/*
ex1:
  input: 
    + số ngày công của nhân miên
    + lương 1 ngày công : 100.000 đ
    algorithm:
    + b1: tạo const nhanVien gồm 3 thuộc tính: soNgayCong, luongNgay:100000, tongLuong
    + b2: tạo biến songaycongEL,tongluongEL
    + b3: gán giá trị cho songayconEL
    + b4: gán giá trị cho nhanVien.soNgayCong
    + b5: tính nhanVien.tongLuong
    + b6: thay đổi value cho <p> id="luongOutput"
  output: 
    + tổng lương trong 1 tháng của nhân viên
*/

const nhanVien = {
  soNgayCong: 0,
  luongNgay: 100000,
  tongLuong: 0,
};
function tinhluong() {
  var songaycongEL = document.getElementById("nhapsongay");
  var tongluongEl = document.getElementById("luongOutput");
  nhanVien.soNgayCong = songaycongEL.value;
  nhanVien.tongLuong = nhanVien.luongNgay * nhanVien.soNgayCong;
  tongluongEl.innerHTML = nhanVien.tongLuong;
  var vndEL = document.getElementById("vnd");
  vndEL.innerHTML = ".đ";
}

/*
ex2:
  input:
    + 5 số tự nhiên bất kì từ người nhập
  algorithm:
    + tạo 5 biến : so1, so2, so3, so4, so5
    + gán giá trị cho 5 biến từ input của người nhập
    + tạo biến tbcong
    + tạo biến trungbinhEL và gán giá trị theo công thức
  output:
    + in ra màn hình số trung bình cộng của 5 số tự nhiên
*/

function tinhgiatriTB() {
  var so1, so2, so3, so4, so5;
  so1 = document.getElementById("nhap-1").value;
  so2 = document.getElementById("nhap-2").value;
  so3 = document.getElementById("nhap-3").value;
  so4 = document.getElementById("nhap-4").value;
  so5 = document.getElementById("nhap-5").value;
  var trungbinh = (so1 * 1 + so2 * 1 + so3 * 1 + so4 * 1 + so5 * 1) / 5;
  var trungbinhEL = document.getElementById("giatriOutput");
  trungbinhEL.innerHTML = trungbinh;
}

/*
ex2:
input: 
  + số tiền USD cần quy đổi từ người nhập
algorithm:
  + tạo biến soUSD
  + gán giá trị input từ id="nhap-usd" cho soUSD
  + tạo biến soVNDEL 
  + tạo biến soVND = soUSD * 23 500
  + gán giá trị soVND cho soVNDEL qua innetHTML
output:
  + số tiền VND tướng ứng 

*/

function quyDoiTien() {
  var soUSD, soVND;
  soUSD = document.getElementById("nhap-usd").value;
  soVND = soUSD * 23500;
  var soVNDEL = document.getElementById("tienVND");
  soVNDEL.innerHTML = soVND;
  var vndEL = document.getElementById("vnd");
  vndEL.innerHTML = ".đ";
}


/*
input: 
  + chiều dài , chiều rồng hình chữ nhật của người dùng nhập vào
algrithm:
  + tạo biến : dai, rong lấy giá trị từ id="nhap-dai",id ="nhap-rong"
  + tạo biến dientichEL, chuviEL 
  + tính dientichEL = dai*rong
  + tính chuviEL = (dai*1+rong*1)*2
  + in kết quả ra màn hình thông qua innerHTML
output:
  + diện tích và chu vi hình chữ nhật theo chiều rộng chiều dài từ người nhập
*/ 

function tinhDTCV(){
  var dai,rong;
  var daiEL = document.getElementById("nhap-dai");
  var rongEL = document.getElementById("nhap-rong");
  dai = daiEL.value;
  rong = rongEL.value;
  var dientichEL = document.getElementById("outDT");
  var chuviEL = document.getElementById("outCV");
  dientichEL.innerHTML = dai*rong;
  chuviEL.innerHTML = (dai*1+rong*1)*2;
  var donviDTEL = document.getElementById("endDT").innerHTML = "(cm2)";
  var donviCVEL = document.getElementById("endCV").innerHTML = "(cm)";
}


/*
input:
  + số tự nhiên có 2 chữ số
algithm:
  + tạo biến : hangDonvi, hangChuc, x
  + tạo biến : xEL lấy giá trị từ id="nhapX"
  + lấy ra 2 kí số và tính tổng 2 số = tong
output:
  + tổng 2 chữ số có trong số tự nhiên có 2 chữ số
*/ 

function tinhTongKiSo(){
  var hangDonvi, hangChuc = 0, x, tong ;
  var xEL = document.getElementById("nhapX");
  x = xEL.value;
  hangChuc = Math.floor(x/10);
  x = xEL.value;
  hangDonvi = x%10;
  tong = hangChuc + hangDonvi;
  var tongkiEL = document.getElementById("tongki");
  tongkiEL.innerHTML = tong;
}