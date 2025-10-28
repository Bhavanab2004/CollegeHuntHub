const courseSelect = document.getElementById("course-select");
const collegeContainer = document.getElementById("college-container");
const modal = new bootstrap.Modal(document.getElementById("collegeModal"));
let currentCollege = null;
const selectCourseBtn = document.getElementById('selectCourseBtn');
const courseButtonsDiv = document.getElementById('course-buttons');
const courses = ['MBA', 'MCA', 'BCA', 'BBA', 'M.Tech', 'B.Tech'];
selectCourseBtn.addEventListener('click', () => {courseButtonsDiv.innerHTML = '';
  courses.forEach(course => {
            const btn = document.createElement('button');
            btn.textContent = course;
            btn.className = 'btn btn-outline-primary m-2';
            btn.addEventListener('click', () => {
                alert(`You selected ${course}`);
                });
            courseButtonsDiv.appendChild(btn);
        });
    });

function loadReviews(collegeName) {
  const stored = JSON.parse(localStorage.getItem("collegeReviews")) || {};
  const reviews = stored[collegeName] || [];
  const reviewList = document.getElementById("review-list");

  if (reviews.length === 0) {
    reviewList.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
  } else {
    reviewList.innerHTML = reviews.map(r => `<p><b>${r.user}:</b> ${r.text}</p>`).join("");
  }

  document.getElementById("submit-review").onclick = () => addReview(collegeName);
}

function addReview(collegeName) {
  const reviewInput = document.getElementById("review-input");
  const text = reviewInput.value.trim();
  if (!text) return alert("Please write a review!");

  const stored = JSON.parse(localStorage.getItem("collegeReviews")) || {};
  if (!stored[collegeName]) stored[collegeName] = [];

  stored[collegeName].push({
    user: "Anonymous User",
    text
  });

  localStorage.setItem("collegeReviews", JSON.stringify(stored));
  reviewInput.value = "";
  loadReviews(collegeName);
}
