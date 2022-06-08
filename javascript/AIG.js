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

//heading select
const seconday_heading = document.getElementById('secondary-heading-2');

//section select
const background_section = document.getElementById('section_background');
const neck_section = document.getElementById('section_neck');
const ears_section = document.getElementById('section_ears');
const leg_section = document.getElementById('section_leg');
const hair_section = document.getElementById('section_hair');
const mouth_section = document.getElementById('section_mouth');
const eyes_section = document.getElementById('section_eyes');
const accessories_section = document.getElementById('section_accessories');           
const style_section = document.getElementById('section-style');


//All secondary buttons select acc to section
const bgBtnAll = document.querySelectorAll('.btn-bg');
const neckBtnAll = document.querySelectorAll('.btn-neck');
const earsBtnAll = document.querySelectorAll('.btn-ears');
const legBtnAll = document.querySelectorAll('.btn-leg');
const hairBtnAll =document.querySelectorAll('.btn-hair');
const mouthBtnAll = document.querySelectorAll('.btn-mouth');
const eyesBtnAll = document.querySelectorAll('.btn-eyes');
const accBtnAll = document.querySelectorAll('.btn-accessories');

//display & hide sections on primary button click

function hide(ids){
    ids.forEach(id => {
      id.style.display ='none';
    });
  }
  
  function show(ids){
    ids.forEach(id => {
      id.style.display ='block';
    });
  }

background_btn.onclick = function() {

    show([
        style_section, 
        seconday_heading, 
        background_section 
    ]);

    hide([
    neck_section,
    ears_section,
    leg_section,
    hair_section,
    mouth_section,
    eyes_section,
    accessories_section
        ]);
}

neck_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        neck_section,
    ]);

    hide([background_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section]);

}

ears_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        ears_section,]);

    hide([neck_section,
        background_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section,]);

}

leg_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        leg_section,]);

    hide([neck_section,
        ears_section,
        background_section,
        hair_section,
        mouth_section,
        eyes_section,
        accessories_section,]);

}

hair_btn.onclick = function() {
    
    show([style_section,
        seconday_heading,
        hair_section,]);

    hide([neck_section,
        ears_section,
        leg_section,
        background_section,
        mouth_section,
        eyes_section,
        accessories_section,]);

}

mouth_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        mouth_section,]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        background_section,
        eyes_section,
        accessories_section,]);

}

eyes_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        eyes_section,]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        background_section,
        accessories_section,]);

}
accessories_btn.onclick = function() {

    show([style_section,
        seconday_heading,
        accessories_section,]);

    hide([neck_section,
        ears_section,
        leg_section,
        hair_section,
        mouth_section,
        eyes_section,
        background_section]);   

}

// Button state Active 


//Image Change Js

bgBtnAll.forEach(item => {

    item.addEventListener('click', (event) => {

        document.getElementById('back_img').src = "/assets/alpaca/backgrounds/" + event.target.value + ".png";
      
        bgBtnAll.forEach(e => {
            e.classList.remove('active-bg');});

            event.target.classList.add('active-bg');

  })
  })

  neckBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('neck_img').src = "/assets/alpaca/neck/" + event.target.value + ".png";
      
      neckBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  })
  })

  earsBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('ears_img').src = "/assets/alpaca/ears/" + event.target.value + ".png";
        
      earsBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');
  
    })
  })

  legBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('leg_img').src = "/assets/alpaca/leg/" + event.target.value + ".png";

      legBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  hairBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('hair_img').src = "/assets/alpaca/hair/" + event.target.value + ".png";

      hairBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  mouthBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('mouth_img').src = "/assets/alpaca/mouth/" + event.target.value + ".png";

      mouthBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  eyesBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('eyes_img').src = "/assets/alpaca/eyes/" + event.target.value + ".png";

      eyesBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  accBtnAll.forEach(item => {
    item.addEventListener('click', (event) => {
      document.getElementById('accessories_img').src = "/assets/alpaca/accessories/" + event.target.value + ".png";

      accBtnAll.forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');


  })
  })

  document.querySelectorAll('.btn-acc').forEach(item => {
    item.addEventListener('click', (event) => {
      document.querySelectorAll('.btn-acc').forEach(e => {
        e.classList.remove('active-bg');});
        
        event.target.classList.add('active-bg');

    });
  });

//random style & button color onclick

loadConfettiPreset(tsParticles);

let confettiContainer;

tsParticles
  .load("tsparticles", {
    particles: {
      shape: {
        type: "character",
        character: {
          value: ["⭐"]
        }
      }
    },
    preset: "confetti",
    emitters: []
  })
  .then((container) => (confettiContainer = container));

const random = document.getElementById('random');

  function randomBtnClick(x){
    x[Math.floor(Math.random() * x.length)].click();
 }

 random.onclick = function(){ 
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  random.style.backgroundColor = "#" + randomColor;
 randomBtnClick(bgBtnAll);
 randomBtnClick(neckBtnAll);
 randomBtnClick(earsBtnAll);
 randomBtnClick(legBtnAll);
 randomBtnClick(hairBtnAll);
 randomBtnClick(mouthBtnAll);
 randomBtnClick(eyesBtnAll);
 randomBtnClick(accBtnAll);
 confettiContainer.addEmitter({
  size: {
    width: 0,
    height: 0
  },
  startCount: 10,
  rate: {
    delay: 0,
    quantity: 0
  },
  life: {
    duration: 0,
    count: 1
  },
  position : {
    x: 15,
    y: 25
  },
});
}

random.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);








