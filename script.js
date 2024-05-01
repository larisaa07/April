let date = document.getElementById('what');





//function to change the date, text, short blurb, and image to February 7, 1812
function overview(){
    date.innerText= 'In Depth Overview:'
    document.getElementById('text').innerText= "A pharmacist's job entails putting together and reviewing prescriptions, informing others about safe usage of medicine, maintaining records of patients and drugs in the pharmacy, helping people find the right medicine for them, and training interns and new hires. The work enviornment of a pharmacist would be in a store, a lab, or in a separate pharmacy."
    document.getElementById('image').src= 'pharmacyLabImage.jpg'
}

//function to change the date, text, short blurb, and image to February 7, 1964
function requirements(){
    date.innerText= 'Requirements:'
    document.getElementById('text').innerText= "To work in thei field, I will need 7+ years of higher education, a masters in pharmacy, at least a bachelor's degree in chemistry, biology, and/or anatomy, and I'd need to take two tests (knowledge of and laws of pharmacy) to get licenced. Potential colleges to recieve the necessary degrees include: The University of Cincinnati, The University of Kansas, and Palm Beach Atlantic University."
    document.getElementById('image').src= 'checkListImage.jpg'
}

//function to change the date, text, short blurb, and image to February 7, 1984
function earnings(){
    document.getElementById('what').innerText= 'Earning Potential:'
    document.getElementById('text').innerText= "The median yearly income for a pharmacist is $128,570. The projected growth rate for this job is 3.1%, and the projected 10 year openings is 78,400."
    document.getElementById('image').src= 'growthImage.jpeg'
}

//function to change the date, text, short blurb, and image to February 7, 2007
function why(){
    document.getElementById('what').innerText= 'Why for Me:'
    document.getElementById('text').innerText= "I was sceptical about this career at first. However, I think I will enjoy the work and the enviornment. I prefer to be in quiet small groups when working, so this job would be great for me. There is also position in this career that wouldn't mandate communication with strangers, which I also prefer."
    document.getElementById('image').src= 'smileThumbsImage.jpg'
}