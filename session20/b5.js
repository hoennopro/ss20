let physicsScore = 0;
let chemistryScore = 0;
let biologyScore = 0;


console.log("Nhập điểm Vật lý: ");
physicsScore = Number(prompt());
console.log("Nhập điểm Hóa học: ");
chemistryScore = Number(prompt());
console.log("Nhập điểm Sinh học: ");
biologyScore = Number(prompt());


let totalScore = physicsScore + chemistryScore + biologyScore;


let averageScore = totalScore / 3;


console.log("Tổng điểm của sinh viên là: " + totalScore);
console.log("Điểm trung bình của sinh viên là: " + averageScore);