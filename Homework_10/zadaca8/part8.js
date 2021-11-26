function print(lugje) {
    let sum = 0;
    for (let i of lugje) {
        sum += i.salary;
    }
    return sum;
}
let lista = [{ fullName: "Viktor Stojkov", jobTitle: "programer", salary: 35000 }, { fullName: "Dejan Dejanoski", jobTitle: "programer", salary: 65000 }];
document.write(`Sumata na vrabotenite e ${print(lista)}`);