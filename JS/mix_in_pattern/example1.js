const flyMixin = {
    fly: function() {
        console.log('Flying');
    }
};

const swimMixin = {
    swim() {
        console.log('Swimming');
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Duck.prototype, flyMixin, swimMixin);

const donald = new Duck('Donald');
donald.fly();  // Flying
donald.swim(); // Swimming
