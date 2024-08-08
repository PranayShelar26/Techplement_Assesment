// script.js



document.querySelectorAll(".benefits-info").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.querySelector("#benefits-icons").classList.add("rotate-icon");
  });
  item.addEventListener("animationend", () => {
    item.querySelector("#benefits-icons").classList.remove("rotate-icon");
  });
});

const courses = [
  {
    image: "./images/generativeai.png",
    title: "Generative AI",
    tutor: "CodeWithHarry",
    duration: "5 hours • 30 lectures • Beginner",
    discountPrice: 499,
    originalPrice: 999,
  },
  {
    image: "./images/frontendimg.png",
    title: "Web Development",
    tutor: "Geeks for Geeks",
    duration: "10 hours • 50 lectures • Intermediate",
    discountPrice: 799,
    originalPrice: 1999,
  },
  {
    image: "./images/cybersecurity.png",
    title: "Intro to CyberSecurity",
    tutor: "Edureka",
    duration: "8 hours • 55 lectures • Beginner",
    discountPrice: 599,
    originalPrice: 1999,
  },
  {
    image: "./images/probackendcourse.png",
    title: "Pro Backend Developer Course",
    tutor: "Hitesh Choudary",
    duration: "28 hours • 152 lectures • Beginner",
    discountPrice: 799,
    originalPrice: 1999,
  },
  {
    image: "./images/pythoncourse.png",
    title: "Learn Python Zero to Hero",
    tutor: "Geeks for Geeks",
    duration: "10 hours • 50 lectures • Intermediate",
    discountPrice: 799,
    originalPrice: 1999,
  },
  {
    image: "./images/devopscourse.png",
    title: "DevOps Beginner to Advanced with Projects",
    tutor: "Imran Teli",
    duration: "55 hours • 321 lectures • All Levels",
    discountPrice: 3499,
    originalPrice: 4999,
  },

  // Add more course objects here
];

function calculateDiscountPercent(originalPrice, discountPrice) {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function createCard(course) {
  const card = document.createElement("div");
  card.className = "pcourse-card";

  const discountPercent = calculateDiscountPercent(
    course.originalPrice,
    course.discountPrice
  );

  card.innerHTML = `
        <div class="pcourse-image">
            <img src="${course.image}" alt="${course.title}">
        </div>
        <div class="pcourse-details">
            <div class="course-title">${course.title}</div>
            <div class="course-tutor">${course.tutor}</div>
            <div class="course-duration">${course.duration}</div>
            <div class="buying-mthds">
                <div class="course-pricing">
                    <div class="discount-price">₹${course.discountPrice}</div>
                    <div class="original-price">₹${course.originalPrice}</div>
                    <div class="discount-percent">${discountPercent}% OFF</div>
                </div>
                <a href="" class="add-to-cart-btn"><span id="cart-icon" class="material-symbols-outlined">shopping_cart</span></a>
            </div>
        </div>
    `;

  return card;
}

const pcourse_container = document.getElementById("pcourse-container");

courses.forEach((course) => {
  const card = createCard(course);
  pcourse_container.appendChild(card);
});

const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

function updateButtonState() {
  const maxScrollLeft =
    pcourse_container.scrollWidth - pcourse_container.clientWidth;
  scrollLeftBtn.disabled = pcourse_container.scrollLeft === 0;
  scrollRightBtn.disabled = pcourse_container.scrollLeft >= maxScrollLeft-1;
}

scrollLeftBtn.addEventListener("click", function () {
  pcourse_container.scrollBy({
    left: -340,
    behavior: "smooth",
  });
  updateButtonState();
});

scrollRightBtn.addEventListener("click", function () {
  pcourse_container.scrollBy({
    left: 340,
    behavior: "smooth",
  });
  updateButtonState();
});

pcourse_container.addEventListener("scroll", updateButtonState);
updateButtonState();

//Free course

const freeCourses = [
  {
    image: "./images/pythonfreecourse.png",
    title: "Introduction to Python Programming",
    tutor: "Avinash Jain, The Codex",
    duration: "1 hours • 22 lectures • Beginner",
    pricing: "FREE",
  },
  {
    image: "./images/javafreecourse.png",
    title: "Java Tutorials for Beginner",
    tutor: "John Purcell",
    duration: "16 hours • 73 lectures • All Levels",
    pricing: "FREE",
  },
  {
    image: "./images/awsfreecourse.png",
    title: "Amazon Web Services (AWS), Zero to Hero",
    tutor: "Backspace Academy",
    duration: "3 hours • 14 lectures • All Levels",
    pricing: "FREE",
  },
  {
    image: "./images/powerpointfreecourse.png",
    title: "PowerPoint for Beginner",
    tutor: "Adrew Pach",
    duration: "2 hours • 28 lectures • Beginner",
    pricing: "FREE",
  },
  {
    image: "./images/dmarketingfreecourse.png",
    title: "Digital Marketing Basics Course",
    tutor: "Sourav Jain",
    duration: "6 hours • 22 lectures • All Levels",
    pricing: "FREE",
  },
  // Add more free course objects here
];

function createFreeCourseCard(course) {
  const card = document.createElement("div");
  card.className = "fcourse-card";

  card.innerHTML = `
        <div class="fcourse-image">
            <img src="${course.image}" alt="${course.title}">
        </div>
        <div class="fcourse-details">
            <div class="fcourse-title">${course.title}</div>
            <div class="fcourse-tutor">${course.tutor}</div>
            <div class="fcourse-duration">${course.duration}</div>
              <div class="buying-mthds">
                <div class="fcourse-pricing">
                    <div class="pricing">${course.pricing}</div>
                </div>
                <a href="" class="add-to-cart-btn"><span id="cart-icon" class="material-symbols-outlined">shopping_cart</span></a>
            </div>

        </div>
    `;

  return card;
}

const freeCourseContainer = document.getElementById("fcourse-container");

freeCourses.forEach((course) => {
  const card = createFreeCourseCard(course);
  freeCourseContainer.appendChild(card);
});

const scrollLeftFreeBtn = document.getElementById("scroll-left-free");
const scrollRightFreeBtn = document.getElementById("scroll-right-free");

function updateFreeButtonState() {
  const maxScrollLeft =
    freeCourseContainer.scrollWidth - freeCourseContainer.clientWidth;
  scrollLeftFreeBtn.disabled = freeCourseContainer.scrollLeft === 0;
  scrollRightFreeBtn.disabled = freeCourseContainer.scrollLeft >= maxScrollLeft;
}

scrollLeftFreeBtn.addEventListener("click", function () {
  freeCourseContainer.scrollBy({
    left: -340, // Adjust this value to scroll the desired amount
    behavior: "smooth",
  });
  updateFreeButtonState();
});

scrollRightFreeBtn.addEventListener("click", function () {
  freeCourseContainer.scrollBy({
    left: 340, // Adjust this value to scroll the desired amount
    behavior: "smooth",
  });
  updateFreeButtonState();
});

freeCourseContainer.addEventListener("scroll", updateFreeButtonState);
updateFreeButtonState(); // Initial check


const showallcategories=()=>{
  const moreCategories = document.querySelectorAll('.more-categories');
  const seeBtn = document.getElementById('see-btn');
  const seeAllText=document.querySelector('.see-all-text')

    moreCategories.forEach(category => {
        if (category.style.display === 'none' || category.style.display === '') {
            category.style.display = 'flex';
        } else {
            category.style.display = 'none';
        }
    });

    if (seeAllText.innerText === 'See all') {
        seeAllText.innerText = 'Show Less';
        seeBtn.innerHTML= 'keyboard_arrow_up'
    } else {
        seeAllText.innerText = 'See all';
        seeBtn.innerHTML= 'keyboard_arrow_down';
    }
}

//reviews card

const reviews = [
  {
    image: "./images/student-img2.png",
    name: " Alex Johnson",
    course: "Web Development",
    review: "The Web Development course was fantastic! It covered essential topics from HTML to advanced JavaScript, with clear instruction and practical projects. The support from instructors was excellent, and I now feel confident in my web development skills. Highly recommend!",
  },
  {
    image: "./images/student-img3.png",
    name: "Ryan Smith",
    course: "Cinematography",
    review: "The Cinematography course was incredible! It covered everything from camera basics to advanced techniques. The instructors were experienced and provided great feedback. The hands-on projects really helped me improve my skills. Highly recommend for anyone interested in cinematography!",
  },
  {
    image: "./images/student-img1.png",
    name: "Thomas Richards",
    course: "Interior Design",
    review: "The Interior Designing course was amazing! It covered all aspects from design principles to practical applications. The instructors were knowledgeable and supportive. The hands-on projects helped me bring my creative ideas to life. Highly recommend for aspiring interior designers",
  }
];

function createReviewCard(review) {
  const card = document.createElement("div");
  card.className = "review-card";

  card.innerHTML = `
        <div class="student-info">
            <div class="student-img">
                <img class="students-img" src="${review.image}" alt="${review.name}">
            </div>
            <div class="student-detail">
                <div class="student-name">${review.name}</div>
                <div class="student-learnings">${review.course}</div>
            </div>
        </div>
        <div class="student-review">"${review.review}"</div>
    `;

  return card;
}

const reviewContainer = document.getElementById("reviews-container");

reviews.forEach((review) => {
  const card = createReviewCard(review);
  reviewContainer.appendChild(card);
});
