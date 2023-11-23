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





