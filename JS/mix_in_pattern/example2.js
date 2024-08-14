function flyMixin(target) {
    target.prototype.fly = function() {
        console.log('Flying');
    };
}

function swimMixin(target) {
    target.prototype.swim = function() {
        console.log('Swimming');
    };
}

class Duck {}

flyMixin(Duck);
swimMixin(Duck);

const donald = new Duck();
donald.fly();  // Flying
donald.swim(); // Swimming
