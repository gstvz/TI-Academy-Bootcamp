function maior(x, y) {
    if(x == y) {
        console.log("Os números " + x + " e " + y + " são iguais");
    } else if(x > y) {
        console.log("O número " + x + " é maior que o número " + y);
    } else {
        console.log("O número " + y + " é maior que o número " + x);
    }
}

maior(7, 5);