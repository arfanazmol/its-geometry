/**
 * উদ্দেশ্য: একটি ত্রিভুজের ভিত্তি উচ্চতা পান প্রদত্ত সূত্রটি ব্যবহার করে ক্ষেত্রফল গণনা করুন এবং তারপর ক্ষেত্রফল প্রদর্শন করুন
  * ধাপ 1 ত্রিভুজের ভিত্তি মান পান
  * ধাপ 2 যোগ করা হয়েছে এবং বেস ইনপুট ক্ষেত্রে আইডি
  * ধাপ 3 ইনপুট ক্ষেত্র অ্যাক্সেস করতে getElementById ব্যবহার করুন
  * ধাপ 4 ইনপুট ক্ষেত্র থেকে মান পান। (মান এখন স্ট্রিং)
  * ধাপ 5 মানটিকে একটি সংখ্যায় রূপান্তর করুন। পার্সফ্লোট ব্যবহার করুন
 * 
 * objective: get base height of a triangle calculate the area by using the provided formula and then display the area 
 * step 1 get base value of the triangle 
 * step 2 added and ID in the base input field
 * step 3 use getElementById to access the input field
 * step 4 get value from the input field. (value is string now)
 * step 5 convert the value to a number . use parseFloat
 */


function triangleArea(){
   //get triangle base value
const triangleBaseInput = document.getElementById('triangle_base');
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat(triangleBaseText);
console.log( base);

// get triangle height value:

const triangleheightInput = document.getElementById('triangle_height');
const triangleText = triangleheightInput.value;
const height = parseFloat(triangleText);
console.log(height);


// calculate triangle area:
const area = 0.5 * base * height;
console.log( ' area of the triangle is:',area );


// display triangle area:
const triangleAreaSpan = document.getElementById('triangle_area');
triangleAreaSpan.innerText = area;

}