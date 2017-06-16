describe("Animal", function() {
    var cat, dog, snake;

    beforeEach(function() {
        cat = new Cat();
        dog = new Dog();
    })

    it("Should be able to say Meow", function() {
        expect(cat.speak()).toEqual("Meow");
    });

    it("Should be able to say Wouf", function() {
        expect(dog.speak()).toEqual("Wouf");
    })
})

