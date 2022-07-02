/*
Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

Your code should declare a glideMixin variable that is a function.
Your code should use the glideMixin on the bird object to give it the glide method.
Your code should use the glideMixin on the boat object to give it the glide method.

*/

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {};
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
