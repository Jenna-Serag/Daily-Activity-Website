
    var btn = document.querySelector("button");
    var out = document.getElementById("output");
    var actNum =0;
    btn.addEventListener("click", getActivity);




/*
*method: array of activities to 'get' from.
*/
    function getActivity(){
      var activity= [
        'Go on a 15 minute walk.', 
        'Stretch, do yoga.',
        'Dance to 5 of your favorite songs.',
        'Jog 8 times around your block.',
        'Play a sport with some friends.',
        'Jumprope for 10 minutes.',
        'Do 3 of your favorite free-weight exercises, 3 minutes each!',
        'Go for a hike in nature.',
        'Swim 15 laps in the pool.',
        'Do 30 pull-ups.',      
      ];

      actNum = Math.floor(Math.random() * activity.length);
      output.textContent = activity[actNum];
      nextImage();
    }

/*
*images associated to each input of the array from getActivity()
*/
 var activityPics = [
        "images/girlwalkpuppy.jpg",
       "images/yogaaa.jpg",
      "images/danicng.PNG",
       "images/jogger.PNG",
   "images/baksetvba.jpg",
   "images/ropee.jpg",
   "images/dumbbell.webp",
   "images/vlimber.jpg",
   "images/swimming.PNG",
   "images/pullup.PNG",

      ];
/*
*makes and formats the images
*/
function makeImage() {
   var img = document.createElement('img');
   img.src = "images/letmove.avif";
  img.width = 300;
  img.length = 300;
   document.getElementById('content').appendChild(img);
}
function nextImage(){
   var img = document.getElementById('content').getElementsByTagName('img')[0]
   img.src = activityPics[actNum];
}