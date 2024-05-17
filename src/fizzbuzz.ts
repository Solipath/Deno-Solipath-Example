export class FizzBuzz{
    execute(input: number): string {
        let returnString = "";
        if(this.isDivisibleBy3(input)){
            returnString += "Fizz";
        }
        if(this.isDivisibleBy5(input)){
            returnString += "Buzz";
        }
        if(returnString.length == 0){
            returnString = input.toString(10);
        }
        return returnString;
    }

    private isDivisibleBy3(input: number) {
        return input % 3 == 0;
    }

    private isDivisibleBy5(input: number) {
        return input % 5 == 0;
    }
}