let date = document.getElementById('what');





//function to change the date, text, short blurb, and image to February 7, 1812
function overview(){
    date.innerText= 'In Depth Overview:'
    document.getElementById('text').innerText= ""
    document.getElementById('image').src= 'imgs/CharlesDickens.jpg'
}

//function to change the date, text, short blurb, and image to February 7, 1964
function requirements(){
    date.innerText= 'Requirements:'
    document.getElementById('text').innerText= ""
    document.getElementById('image').src= 'imgs/TheBeatles.jpg'
}

//function to change the date, text, short blurb, and image to February 7, 1984
function earnings(){
    document.getElementById('what').innerText= 'Earning Potential:'
    document.getElementById('text').innerText= ""
    document.getElementById('image').src= 'imgs/SpaceWalk.webp'
}

//function to change the date, text, short blurb, and image to February 7, 2007
function why(){
    document.getElementById('what').innerText= 'Why for Me:'
    document.getElementById('text').innerText= "I was sceptical about this career at first. However, I think I will enjoy the work and the enviornment. I prefer to be in quiet small groups when working, so this job would be great for me. There is also position in this career that wouldn't mandate communication with strangers, which I also prefer."
    document.getElementById('image').src= 'smileAndHeartImage.webp'
}