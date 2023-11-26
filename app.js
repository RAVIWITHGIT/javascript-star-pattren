// WEBSITE LINK - https://www.tutorialstonight.com/js/javascript-star-pattern#google_vignette

/*--------------------------------------- Q1. Square Star Pattern in Javascript
 
    *****
    *****
    *****
    *****
    *****

*/

// ------  MY SOLUTION
// let range = 5
// for (let i = 0; i < range; i++) {
//     console.log('*****')

// }


// ------  WEBSITE SOLUTION
// let range = 5
// string = ''
// for (let i = 0 ; i<range; i++){
//     for (let j = 0; j < range; j++) {
//         string +='*'

//     }
//     string += '\n'


// }
// console.log(string)


/*------------------------------------- Q2. Hollow Square Pattern

    *****
    *   *
    *   *
    *   *
    *****

*/

// ------  MY SOLUTION
// let n = 5
// strin = ''
// for (let i = 0; i < n; i++) {
//     for(let j = 0; j<n ; j++){
//         if(i==0 || i == n-1){
//             strin +='*'
//         }
//         else{
//             if(j ==0 || j== n-1){
//                 strin +='*'

//             }
//             else{
//                 strin +=' '

//             }
//         }

//     }
//     strin += '\n'

// }
// console.log(strin)


/*------------------------------------Q3. Right Triangle Pattern in Javascript

        *
       **
      ***
     ****
    *****

*/

// ------  MY SOLUTION
// let range = 5
// let mystar = ''

// newrange = range-1
// for (let i = 0; i < range; i++) {
//     for (let j = 0; j <newrange-i ; j++) {
//         mystar += ' '
//     }
//     for (let k = 0; k <i+1 ; k++) {
//         mystar += '*'
//     }
//     mystar +='\n'

// }
// console.log(mystar)

// ------  WEBSITE SOLUTION
// let range = 5
// let mystar = ""
// for (let i = 1; i <= range; i++) {
//     for (let j = 0; j < range-i; j++) {
//         mystar += " "

//     }
//     for (let k = 0; k < i; k++) {
//         mystar +="*"

//     }
//     mystar +='\n'

// }
// console.log(mystar)



/*------------------------------------Q4. Left Triangle Pattern in Javascript
 
    *
    **
    ***
    ****
    *****

*/

// ------  MY SOLUTION

// let range = 5
// let mystar = ''

// for (let i = 0; i < range; i++) {
//     for (let k = 0; k < i+1; k++) {
//         mystar += "*"

//     }
//     mystar +='\n'

// }
// console.log(mystar)

// ------  WEBSITE SOLUTION
// let range = 5
// let mystar = ""

// for (let i = 1; i <= range; i++) {
//     for (let k = 0; k < i; k++) {
//         mystar += "*"

//     }
//     mystar +='\n'

// }
// console.log(mystar)


/*------------------------------------Q5. Downward Triangle Star Pattern

    *****
    ****
    ***
    **
    *

*/

// ---------- MY SOLUTION

// let range = 5
// let mystar = ''

// for (let i = 0; i < range; i++) {
//     for (let j = range; j > i; j--) {
//         mystar += "*"
//         // console.log(j)

//     }
//     mystar += "\n"

// }
// console.log(mystar)

// ---------- WEBSITE SOLUTION

// let range = 5
// let mystar = ''
// for (let i = 0; i < range; i++) {
//     for (let j = 0; j < range-i; j++) {
//         mystar += "*"

//     }
//     mystar += "\n"

// }
// console.log(mystar)



/*------------------------------------Q6. Hollow Triangle Star Pattern

    *
    **
    * *
    *  *
    *   *
    ******

*/

// ---------- MY SOLUTION 
// let range = 6
// let mystar = ""
// for (let i = 0; i < range; i++) {
//     for (let k = 0; k < i + 1; k++) {
//         if (i == 0 || i == 1 || i == range - 1) {
//             mystar += "*"
//         }
//         else {
//             if (k == 0 || k == i) {
//                 mystar += "*"
//             }
//             else {
//                 mystar += " "
//             }
//         }
//     }
//     mystar += '\n'
// }
// console.log(mystar)


// ----------- WEBSITE SOLUTION 
// let range = 6
// let mystar = ""
// for (let i = 1; i <= range; i++) {
//     for (let j = 0; j < i; j++) {
//         if(i===range){
//             mystar +="*"
//         }
//         else{
//             if(j==0 || j==i-1){
//                 mystar +="*"
//             }
//             else{
//                 mystar +=" "
//             }
//         }
        
//     }
//     mystar +='\n'
    
// }
// console.log(mystar)


/*------------------------------ Q7. Javascript Pyramid Pattern

    *
   ***
  *****
 *******
*********

*/

// ---------- MY SOLUTION AND WEBSITE SOLUTION IS SAME
// let range = 5
// let mystar = ''
// for (let i = 1; i <= range; i++) {
//     for (let j = 0; j < range-i; j++) {
//         mystar += " "
        
//     }
//     for (let k = 0; k < 2*i-1; k++) {
//         mystar +="*"
        
//     }
//     mystar +="\n"
    
// }
// console.log(mystar)


/*------------------------------ Q8. Reversed Pyramid Star Pattern

    *********
     *******
      *****
       ***
        *

*/

// let range = 5
// let mystar = ""

// for (let i = 1; i <= range; i++) {
//     for (let k = 0; k < i; k++) {
//         // const element = array[k];
//         mystar +=" "
        
//     }
//     for (let j = 0; j < 2*range-i; j++) {
//         mystar +="*"
        
//     }
//     mystar +="\n"
    
// }
// console.log(mystar)


/* ----------------------------------- Q9. Hollow Pyramid Star Pattern
    *
   * *
  *   *
 *     *
*********

*/

// ------- MY SOLUTION AND WEBSITE SOLUTION IS SAME
// let range = 5
// let star = ''
// for (let i = 1; i <= range; i++) {
//     for (let j = 0; j < range-i; j++) {
//         star +=' '
        
//     }
//     for (let k = 0; k <2*i-1; k++) {
//         if(i==1 || i == range){
//             star+="*"

//         }else{
//             if(k==0 || k == 2*i-2){
//                 star +="*"
//             }
//             else{
//                 star +=" "
//             }
//         }
        
//     }
//     star+='\n'
    
// }
// console.log(star)



/* ----------------------------------- Q10. Diamond Pattern in Javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

// --------- MY SOLUTION

// let range = 5
// let star = ''
// for(let i = 1; i<range;i++){
//     for (let j = range; j >i ; j--) {
//         star +=' '
        
//     }
//     for (let k = 0; k <2*i-1 ; k++) {
//         // const element = array[k];
//         star +="*"
        
//     }
//     star +='\n'
// }

// for(let i = 1; i<=range; i++){
//     for(let k = 1; k<i; k++){
//         star += " "
//     }
//     for(let j =2*range-i; j>=i; j--){
//         star += "*"

//     }
//     star +="\n"
// }
// console.log(star)

//------------ WEBSITE SOLUTION

// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k > 0; k--) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);


/* ----------------------------------- Q11. Hollow Diamond Pattern
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

*/

// --------- MY SOLUTION 

// let range = 5
// let star = ''
// for(let i = 1; i<range;i++){
//     for (let j = range; j >i ; j--) {
//         star +=' '
        
//     }
//     for (let k = 0; k <2*i-1 ; k++) {
//         // const element = array[k];
//         if(i==1){
//             star +="*"
//         }
//         else{
//             if(k == 0 || k == 2*i-2){
//                 star +="*"

//             }else{
//                 star +=" "

//             }
//         }
        
//     }
//     star +='\n'
// }

// for(let i = 1; i<=range; i++){
//     for(let k = 1; k<i; k++){
//         star += " "
//     }
//     for(let j =2*range-i; j>=i; j--){
//         if(i==range){
//             star += "*"

//         }
//         else{
//             if(j==2*range-i || j==i){
//                 star += "*"

//             }
//             else{
//                 star += " "

//             }
//         }

//     }
//     star +="\n"
// }

// console.log(star)

/*---------------------------------Q12. Hourglass Star Pattern
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/
// let range = 5
// let str = ''

// for (let i = 1; i <= range; i++) {
//     for (let k = 0; k < i; k++) {
//         str+=' '
        
//     }
//     for (let j = 2*range-i; j >= i; j--) {
//         str+= '*'
        
//     }
//     str+='\n'
    
// }

// for (let i = 1; i <= range-1; i++) {
//     for (let j = range-1; j >= i; j--) {
//         str+=' '

        
//     }
//     for (let k = 0; k < 2*(i+1)-1; k++) {
//         str+='*'
        
//     }
//     str+='\n'
    
// }
// console.log(str)

/*---------------------------------Q13. Right Pascal Star Pattern
*
**
***
****
*****
****
***
**
*

*/
// let range = 5
// let str = ''
// for (let i = 1; i <= range; i++) {
//     for (let j = 1; j <i+1 ; j++) {
//         str+='*'
        
//     }
//     str+='\n'

    
// }
// for (let i = 1; i < range; i++) {
//     for (let j = range-1; j >=i; j--) {
//         str+='*'
        
//     }
//     str+='\n'
    
// }
// console.log(str)