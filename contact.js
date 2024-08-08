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
  