// Vaughn Zamudio — Lab 8

// Part 2: Arrays and Loops for Goals List
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");

if (goalsList) {
  goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
  });
} else {
  console.warn("goals-list not found on this page");
}

// Part 1, 3, & 5: Like Counter State, Object Grouping, and Conditionals
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

const LikeCounter = {
  likes: 0,
  increment() {
    this.likes = this.likes + 1;
    this.render();
  },
  render() {
    if (likeCount) {
      likeCount.textContent = `${this.likes} likes`;
    }
    
    if (likeMessage) {
      if (this.likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
      } else if (this.likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
      } else {
        likeMessage.textContent = "";
      }
    }
  }
};

// Part 4: Defensive Code Check
if (likeBtn) {
  likeBtn.addEventListener("click", function() {
    LikeCounter.increment();
  });
} else {
  console.warn("like-btn not found on this page");
}

// Part 4: Theme Toggle with Defensive Check
const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });
} else {
  console.warn("theme-btn not found on this page");
}