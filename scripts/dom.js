/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEls = document.querySelectorAll(".article__section")

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

//change font color of any section with article body class to blue
const articleBody = document.querySelector(".article__body");
articleBody.classList.add("blueFont");

// article header class 2px border
const articleHeader = document.querySelector(".article__header");
articleHeader.classList.add("border");

//all sections have goldenrod background
// for (let i=0; i<sectionEls.length; i++) {
//   sectionEls[i].classList.add("backgroundGoldenrod");
// }
//Use for-each method:
sectionEls.forEach(currentNode => {
  currentNode.classList.add("backgroundGoldenrod")
})