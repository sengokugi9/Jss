
let totalPrice = 0;
function show1() {
    let one = 30
    let scan = prompt("จำนวน")
    var total1 = one * scan
    totalPrice += total1;
    document.getElementById("title").innerHTML = "รายการ"
    document.getElementById("item").innerHTML +=   "ฮิโตคาเงะ : " + scan + " ชิ้น " + " ราคา " + total1 + " บาท" + "<br>"
    document.getElementById("total").innerHTML = ("ยอดทั้งหมด " + totalPrice + " บาท"); // แสดงผลราคารวมทั้งหมด
}
function show2() {
    let one = 40
    let scan = prompt("จำนวน")
    var total2 = one * scan
    totalPrice += total2;
    document.getElementById("title").innerHTML = "รายการ"
    document.getElementById("item").innerHTML +=   "เซนิกาเมะ : " + scan + " ชิ้น " + " ราคา " + total2 + " บาท" + "<br>"
    document.getElementById("total").innerHTML = ("ยอดทั้งหมด " + totalPrice + " บาท"); // แสดงผลราคารวมทั้งหมด
    
}
function show3() {
    let one = 50
    let scan = prompt("จำนวน")
    var total3 = one * scan
    totalPrice += total3;
    document.getElementById("title").innerHTML = "รายการ"
    document.getElementById("item").innerHTML +=   "ฟุชิกิดาเนะ : " + scan + " ชิ้น " + " ราคา " + total3 + " บาท" + "<br>"
    document.getElementById("total").innerHTML = ("ยอดทั้งหมด " + totalPrice + " บาท"); // แสดงผลราคารวมทั้งหมด

}
function show4() {
    let one = 60
    let scan = prompt("จำนวน")
    var total4 = one * scan
    totalPrice += total4;
    document.getElementById("title").innerHTML = "รายการ"
    document.getElementById("item").innerHTML +=   "คาเมล : " + scan + " ชิ้น " + " ราคา " + total4 + " บาท" + "<br>"
    document.getElementById("total").innerHTML = ("ยอดทั้งหมด " + totalPrice + " บาท"); // แสดงผลราคารวมทั้งหมด

}

