canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


r_w=100;
r_h=90;
b_img="B_IMG.jpg";
r_img="C_1.png";
red_img_2="C_2.jpg";

r_x=10;
r_y=10;

red_w=100;
red_h=90;
red_x=10;
red_y=100;

function add(){
    b_imgTag= new Image();
    b_imgTag.onload=uploadBackground;
    b_imgTag.src=b_img;

    r_imgTag= new Image();
    r_imgTag.onload=uploadRover;
    r_imgTag.src=r_img;

    red_img_2Tag= new Image();
    red_img_2Tag.onload=uploadRover;
    red_img_2Tag.src=red_img_2;
}

function uploadBackground(){
    ctx.drawImage(b_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover(){
    ctx.drawImage(r_imgTag , r_x , r_y , r_w , r_h);
    ctx.drawImage(red_img_2Tag , red_x , red_y , red_w , red_h);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    k_p=e.keyCode;

    if(k_p=='38'){
        up();
        console.log("up");
    }

    if(k_p=='40'){
       down();
        console.log("down");
    }

    if(k_p=='37'){
       left();
        console.log("left");
    }

    if(k_p=='39'){
       right();
        console.log("right");
    }
}

function up(){
    if (r_y > 0){
        r_y=r_y-10;
        (red_y > 0)
            red_y=red_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (r_y < 500){
        r_y=r_y+10;
        (red_y < 500)
            red_y=red_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (r_x > 0){
        r_x=r_x-10;
        (red_x > 0)
            red_x=red_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (r_x < 700){
        r_x=r_x+10;
        (red_x < 700)
            red_x=red_x+10;
        uploadBackground();
        uploadRover();
    }
}