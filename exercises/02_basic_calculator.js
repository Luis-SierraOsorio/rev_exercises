function calculator(n1, n2, operation) {

    switch (operation) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "/":
            return n1 / n2;
        case "*":
            return n1 * n2;
        default:
            return null;
    }

}