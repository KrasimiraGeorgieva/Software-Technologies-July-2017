function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.operator = operator;

    this.calculateResult = function () {
        let result = 0;

        switch (this.operator) {
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                this.leftOperand = this.leftOperand || 1;
                this.rightOperand = this.rightOperand || 1;
                break;
            case "/":
                if (this.rightOperand === 0.0) {
                    result = '0';
                } else {
                    result = this.leftOperand / this.rightOperand;
                }
                break;
            case"√":
                result = Math.pow(this.leftOperand, 1 / this.rightOperand);
                break;
            case"|":
                result = (this.leftOperand | this.rightOperand).toString(2);
                result = leadingZero();
                break;
            case"&":
                result = (this.leftOperand & this.rightOperand).toString(2);
                result = leadingZero();
                break;
            case"^":
                result = (this.leftOperand ^ this.rightOperand).toString(2);
                result = leadingZero();
                break;

                function leadingZero(){

                  let num = '0000'.substr(result.length) + result;

                    return num;
                }

        }
        return result;
    }
}

module.exports = Calculator;
