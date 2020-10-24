var Car, wall_sprite, wall_sprite_img;
var green_car_img, red_car_img, init_car, init_car_img;
// var input_speed = document.getElementById("speed_input").value;

function preload() {
    wall_sprite_img = loadImage("sprite_0.png");
    init_car_img = loadImage("init_car.png");
    green_car_img = loadImage("green_car.png");
    red_car_img = loadImage("red_car.png");
}

function setup() {
    createCanvas(800, 400);
    //creating car sprite
    Car = createSprite(10, 200);
    Car.velocityX = random(50, 100);
    Car.setCollider("rectangle", 0, 0, 400, 200);
    Car.addImage(init_car_img);
    Car.debug = true;
    Car.scale = 0.5;
    Car_weight = random(400, 1500);

    //creating wall sprite

    wall_sprite = createSprite(650, 200);
    wall_sprite.addImage(wall_sprite_img);
    wall_sprite.debug = true;
    wall_sprite.scale = 3;
}

function draw() {
    background(0, 0, 0);

    Touching_Detect(Car, wall_sprite);


    // text("Damage Taken : " + Dmg, 40, 100);

    drawSprites();
}

function Touching_Detect(Car, wall_sprite) {
    if (Car.x - wall_sprite.x < Car.width / 2 + wall_sprite.width / 2 &&
        wall_sprite.x - Car.x < wall_sprite.width / 2 + Car.width / 2) {
        Car.velocityX = 0;
        var Dmg = 0.5 * Car_weight * Car.velocityX * Car.velocityX / 22500;

        if (Dmg > 180) {
            // Car.shapeColor = "red";
            Car.addImage(red_car_img);
        }

        if (Dmg >= 100 && Dmg <= 180) {
            // Car.shapeColor = "yellow";
        }

        if (Dmg < 100) {
            // Car.shapeColor = "green";
            Car.setCollider("rectangle", 0, 0, 40, 50);
            Car.addImage(green_car_img);
        }
        Car.collide(wall_sprite);
    }

}

function car_vel() {
    var input_speed = document.getElementById("speed_input").value;
    Car.x = 10;
    Car.y = 200;
    Car.velocityX = input_speed;
    Touching_Detect(Car, wall_sprite);
    Car.collide(wall_sprite);
}