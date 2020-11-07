//TO NEAREST VOWEL

// let str = "esbbebcdobcdddulllllall";
// let arr = str.split("");
// console.log(arr)
// let locate = []
// let vowel = ["u","e","o","a","i"]

// for(i=0;i<vowel.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j] == vowel[i]){
//             arr[j]=0
//             locate.push(j)
//         }
//     }
// }

// locate.sort(function(a,b){
//     return a-b
// })
//     console.log(arr)
//     console.log(locate)
// window.reach=[]
// const reach =window.reach
// for(l=0;l<locate.length;l++){ 
//     if((locate[l])!=locate[locate.length-1]){
//         let mid = Math.round(((locate[l+1]-1)-locate[l])/2)
//         reach.push(mid)
//     }     
// }
// console.log(reach)
// if(locate[0]!=0){
//     for(i=locate[0];i>0;i--){
//         arr[i-1] = arr[i]+1
//     }
//     for(d=0;d<reach.length;d++){
//         for(a=1;a<=reach[d];a++){
//             arr[locate[d]+a]=arr[locate[d]]+a
//         }
    
//         for(s=reach[d];s>0;s--){
//             arr[locate[d+1]-s]=arr[locate[d+1]]+s
//         }
//     }
//     for(c=locate[locate.length-1];c<arr.length;c++){
//         if(arr[c]!=arr[arr.length-1]){
//             arr[c+1] = arr[c] + 1 
//         } 
//     }
//     console.log(arr)
// } else {
//     for(d=0;d<reach.length;d++){
//         for(a=1;a<=reach[d];a++){
//             arr[locate[d]+a]=arr[locate[d]]+a
//         }
    
//         for(s=reach[d];s>0;s--){
//             arr[locate[d+1]-s]=arr[locate[d+1]]+s
//         }
//     }
//     for(c=locate[locate.length-1];c<arr.length;c++){
//         if(arr[c]!=arr[arr.length-1]){
//             arr[c+1] = arr[c] + 1 
//         } 
//     }
//     console.log(arr)
// } 


//JUNCTION OR SELF

// let num =Number(7)
// let juncnumber = window.juncnumber = []
// let arr =[]
// for(let i=0;i<num;i++){
//     let str=`${i}`
//     arr=str.split("")
//     let sum=0
//     for(j=0;j<arr.length;j++){
//        sum += Number(arr[j])
//     }
//     if((i+sum)==num){
//         console.log(i)
//         juncnumber.push(i)
//     }
// }
// if(juncnumber.length>0){
//     console.log(juncnumber + '\n' 
//    + num + " is a juncnumber")
// } else {
//     console.log(num + " is a selfnumber")
// }

//MORSE CODE DECODED

//decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"


//decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"


// const morseCode = "-.-. .... .- .-.. .-.. . -. --. ."

// const morseToDots = {
//   ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
//   "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
//   "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
//   "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
//   "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
//   "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
//   "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
//   ".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
// }


// let morseCodearr= morseCode.split(" ")
// console.log(morseCodearr)
// let decoded=[]
// for(i=0;i<morseCodearr.length;i++){
//     decoded.push(morseToDots[morseCodearr[i]])
// }
// console.log(decoded.join(""))


//PICTURE FRAME


// function dirtyFrame(a,b,c) {
//     const frame = [a,b,c]
//     let line1 = [""]
//     let line2 = [""]
//     for(i=0;i<frame[0];i++){
//         line1[0] +=frame[2]
//     }
    
    
//     line2[0] += frame[2]
//     for(k=0;k<(frame[0]-2);k++){
//         line2[0] += " "
//     }
//     line2[0] += frame[2]
    
    
//     // console.log(line1)
//     // console.log(line2)
    
//     let iKnowItsDirty = []
    
//     iKnowItsDirty.push(line1)
//     for(d=0;d<frame[1]-2;d++){
//         iKnowItsDirty.push(line2)
//     }
//     iKnowItsDirty.push(line1)
    
//     console.log(iKnowItsDirty)
// }


// dirtyFrame(19,19,"$")


