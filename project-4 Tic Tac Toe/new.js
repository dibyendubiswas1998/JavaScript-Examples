if(top_left && top_left === middle_left && top_left === bottom_left){
    console.log(top_left);
}
if(top_left && top_left === middle_middle && top_left === bottom_right){
    console.log(top_left);
}
// top_middle
if(top_middle && top_middle === top_left && top_middle === top_right){
    console.log(top_middle);
}
if(top_middle && top_middle === middle_middle && top_middle === bottom_middle){
    console.log(top_middle);
}
// top_right
if(top_right && top_right === top_middle && top_right === top_left){
    console.log(top_right);
}
if(top_right && top_right === middle_right && top_right === bottom_right){
    console.log(top_right);
}
if(top_right && top_right === middle_middle && top_right === bottom_left){
    console.log(top_right);
}
// middle_left
if(middle_left && middle_left === top_left && middle_left === bottom_right){
    console.log(middle_left);
}
if(middle_left && middle_left === middle_middle && middle_left === middle_right){
    console.log(middle_left);
}
// middle_middle
if(middle_middle && middle_middle === middle_left && middle_middle === middle_right){
    console.log(middle_middle);
}
if(middle_middle && middle_middle === top_middle && middle_middle === bottom_middle){
    console.log(middle_middle);
}
if(middle_middle && middle_middle === top_left && middle_middle === bottom_right){
    console.log(middle_middle);
}
if(middle_middle && middle_middle === top_right && middle_middle === bottom_left){
    console.log(middle_middle);
}
// bottom_left
if(bottom_left && bottom_left === middle_left && bottom_left === top_left){
    console.log(bottom_left);
}
if(bottom_left && bottom_left === middle_middle && bottom_left === top_right){
    console.log(bottom_left);
}
if(bottom_left && bottom_left === bottom_middle && bottom_left === bottom_right){
    console.log(bottom_left);
}
// bottom_middle
if(bottom_middle && bottom_middle === bottom_left && bottom_middle === bottom_right){
    console.log(bottom_middle);
}
if(bottom_middle && bottom_middle === middle_middle && bottom_middle === top_middle){
    console.log(bottom_middle);
}
// bottom_right
if(bottom_right  && bottom_right === bottom_middle && bottom_right === bottom_left){
    console.log(bottom_right);
}
if(bottom_right  && bottom_right === middle_middle && bottom_right === top_left){
    console.log(bottom_right);
}
if(bottom_right  && bottom_right === middle_right && bottom_right === top_right){
    console.log(bottom_right);
}
