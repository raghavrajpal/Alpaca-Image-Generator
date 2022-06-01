const btn_type = [
    'background',
    'neck',
    'ears',
    'leg',
    'hair',
    'mouth',
    'eyes',
    'accessories',
]

const seciton_type=[
    'section_background',
    'section_neck',
    'section_ears',
    'section_leg',
    'section_hair',
    'section_mouth',
    'section_eyes',
    'section_accessories',
]


const back_arr=[
    'blue50',
    'blue60',
    'blue70',
    'darkblue30',
    'darkblue50',
    'darkblue70',
    'green50',
    'green60',
    'green70',
    'grey40',
    'grey70',
    'grey80',
    'red50',
    'red60',
    'red70',
    'yellow50',
    'yellow60',
    'yellow70',
]

const neck_arr = [
    'bend-backward',
    'bend-forward',
    'default',
    'thick',
]

const ears_arr = [
    'default',
    'tilt-backward',
    'tilt-forward'
]

const eyes_arr = [
    'angry',
    'default',
    'naughty',
    'panda',
    'smart',
    'star',
]

const hair_arr = [
    'bang',
    'curls',
    'default',
    'elegant',
    'fancy',
    'quiff',
    'short',
]

const leg_arr = [
    'bubble-tea',
    'cookie',
    'default',
    'game-console',
    'tilt-backward',
    'tilt-forward',
]

const mouth_arr = [
    'astonished',
    'default',
    'eating',
    'laugh',
    'tongue',
]

const accessories_arr = [
    'earings',
    'flower',
    'glasses',
    'headphone',
]

// Primary Buttons select
const background_btn = document.getElementById('background');
const neck_btn = document.getElementById('neck');
const ears_btn = document.getElementById('ears');
const leg_btn = document.getElementById('leg');
const hair_btn = document.getElementById('hair');
const mouth_btn = document.getElementById('mouth');
const eyes_btn = document.getElementById('eyes');
const accessories_btn = document.getElementById('accessories');

//section select
const background_section = document.getElementById('section_background');
const neck_section = document.getElementById('section_neck');
const ears_section = document.getElementById('section_ears');
const leg_section = document.getElementById('section_leg');
const hair_section = document.getElementById('section_hair');
const mouth_section = document.getElementById('section_mouth');
const eyes_section = document.getElementById('section_eyes');
const accessories_section = document.getElementById('section_accessories');           


//display & hide secrions on primary button click


background_btn.onclick = function() {
    background_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}

neck_btn.onclick = function() {
    neck_section.style.display = "block";
    background_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}

ears_btn.onclick = function() {
    ears_section.style.display = "block";
    neck_section.style.display = "none";
    background_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}
leg_btn.onclick = function() {
    leg_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    background_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}
hair_btn.onclick = function() {
    hair_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    background_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}
mouth_btn.onclick = function() {
    mouth_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    background_section.style.display = "none";
    eyes_section.style.display = "none";
    accessories_section.style.display = "none";
}
eyes_btn.onclick = function() {
    eyes_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    background_section.style.display = "none";
    accessories_section.style.display = "none";
}
accessories_btn.onclick = function() {
    accessories_section.style.display = "block";
    neck_section.style.display = "none";
    ears_section.style.display = "none";
    leg_section.style.display = "none";
    hair_section.style.display = "none";
    mouth_section.style.display = "none";
    eyes_section.style.display = "none";
    background_section.style.display = "none";
}









