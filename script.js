// Vaughn Zamudio — Lab 9

// Part 2 & 3: Promise and Async/Await Greeting
function getGreetingAfterDelay() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello from the future!");
    }, 800);
  });
}

async function showGreeting() {
  const message = await getGreetingAfterDelay();
  console.log(message);
}
showGreeting();

// Part 4: Fetching Real Data From an API (Cat Fact)
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
  if (factDisplay) {
    factDisplay.textContent = "Loading...";
  }
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("Server responded with an error");
    }
    const data = await response.json();
    if (factDisplay) {
      factDisplay.textContent = data.fact;
    }
  } catch (error) {
    if (factDisplay) {
      factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    }
    console.error(error);
  }
}

if (factBtn) {
  factBtn.addEventListener("click", loadFact);
} else {
  console.warn("fact-btn not found on this page");
}

// --- Lab 8 Features (Goals List, Like Counter, Theme Toggle) ---
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

if (likeBtn) {
  likeBtn.addEventListener("click", function() {
    LikeCounter.increment();
  });
} else {
  console.warn("like-btn not found on this page");
}

const themeBtn = document.querySelector("#theme-btn");
if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });
} else {
  console.warn("theme-btn not found on this page");
}