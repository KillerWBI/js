let m = prompt("ведите массу тела в килограммах:");
console.log(`маса ${m} `);

let h = prompt("ведите рост в метрах: Например(1.70)");
console.log(`маса ${h} `); 

let sum = m / (h * h);
sum = sum * 100;
sum = Math.round(sum);
sum = sum / 100;
console.log(`Индекс масы тела ${sum} кг/м2`);


if (sum<16){
     console.log("Выраженный дефицит массы тела")
}else if(sum<18.5){
    console.log("Недостаточная (дефицит) масса тела")
}else if(sum<25){
    console.log("Норма")
}else if(sum<30){
    console.log("Избыточная масса тела (предожирение)")
}else if(sum<35){
    console.log("Ожирение 1 степени")
}else if(sum<40){
    console.log("Ожирение 2 степени")
}else if(sum>40){
    console.log("Ожирение 3 степени")
}


