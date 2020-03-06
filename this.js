let Apple = function () {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (w) {
        this.weight = w;
    }
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.say = function () {
        let s = prompt("Nói gì?");
        console.log(s);
    };
    this.eat = function (apple) {
        if (apple.weight > 0) {
            console.log("eating...");
            apple.weight -= 1;
            this.weight += 1;
            console.log("Tang can roi ->>" + this.weight);
        } else {
            console.log("can't eating");
        }
    };
    this.checkApple = function (apple) {
        console.log("Weigth of this apple is " + apple.weight);
    }
};

let eva = new Human("eva", false, 54);
let adam = new Human("adam", true, 56);
let apple = new Apple();


console.table(adam);
console.table(eva);
console.table(apple);