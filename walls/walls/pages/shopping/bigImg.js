var myWrapper;

//  גילוי התמונה הגדולה 

function ShowBig(Obj) {
    //אובייקט התמונה שנלחצה - Obj
    myWrapper = document.querySelector('#Wrapper');   // X שמכיל את התמונה ואת ה div ה 
    var myBigImg = document.querySelector('#BigImg');
    myBigImg.src = Obj.getAttribute('src');  /*העתקת קובץ המקור מהתמונה שנלחצה*/
    myWrapper.style.display = "inline"; /* X + הצגת האלמנט שמכיל תמונה */

}

//  הסתרת התמונה הגדולה

function HideBig() {
    myWrapper.style.display = "none";  /* X + הסתרת האלמנט שמכיל תמונה */
}