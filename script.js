const duration = 1000; // Duration in milliseconds (1 second)

function updateProgress() {
  const birthDate = new Date(document.getElementById('birth-date').value);
  const lifespan = parseInt(document.getElementById('lifespan').value);

  const now = new Date();
  const currentTime = now.getTime();
  const birthTime = birthDate.getTime();
  const elapsedTime = currentTime - birthTime;
  const remainingTime = lifespan * 365.25 * 24 * 60 * 60 * 1000 - elapsedTime;

  const yearsLeft = Math.floor(remainingTime / (365.25 * 24 * 60 * 60 * 1000));
  const yearsProgress = 1 - (yearsLeft / lifespan);

  const monthsLeft = Math.floor((remainingTime % (365.25 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
  const monthsProgress = 1 - (monthsLeft / 12);

  const daysLeft = Math.floor((remainingTime % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  const daysProgress = 1 - (daysLeft / 31);

  const hoursLeft = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const hoursProgress = 1 - (hoursLeft / 24);

  const minutesLeft = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
  const minutesProgress = 1 - (minutesLeft / 60);

  const secondsLeft = Math.floor((remainingTime % (60 * 1000)) / 1000);
  const secondsProgress = 1 - (secondsLeft / 60);

  const progressBars = [
    {
      id: 'years-progress',
      progress: yearsProgress,
    },
    {
      id: 'months-progress',
      progress: monthsProgress,
    },
    {
      id: 'days-progress',
      progress: daysProgress,
    },
    {
      id: 'hours-progress',
      progress: hoursProgress,
    },
    {
      id: 'minutes-progress',
      progress: minutesProgress,
    },
    {
      id: 'seconds-progress',
      progress: secondsProgress,
    },
  ];

  // Update progress bars and apply pulse effect when values change
  progressBars.forEach((bar) => {
    const progressBar = document.getElementById(bar.id);
    const currentWidth = parseFloat(progressBar.style.width) || 0;
    const newWidth = bar.progress * 100;

    const widthDifference = Math.abs(newWidth - currentWidth)

    if (widthDifference > 0.1) {
      progressBar.style.width = newWidth + '%';
      progressBar.classList.add('pulse');
    } else {
      progressBar.classList.remove('pulse');
    }

  });


  document.getElementById('years-left').textContent = yearsLeft;
  document.getElementById('months-left').textContent = monthsLeft;
  document.getElementById('days-left').textContent = daysLeft;
  document.getElementById('hours-left').textContent = hoursLeft;
  document.getElementById('minutes-left').textContent = minutesLeft;
  document.getElementById('seconds-left').textContent = secondsLeft;
}

setInterval(updateProgress, duration);

// Initial update

updateProgress();


const quotes = [
  {
    quote: "Remember that you are mortal.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
    author: "Norman Cousins",
  },
  {
    quote: "Do not act as if you had ten thousand years to live. The inescapable is hanging over your head. While you have life in you, while you still can, make yourself good.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life.",
    author: "Steve Jobs",
  },
  {
    quote: "The only way to live is to accept each minute as an unrepeatable miracle, which is exactly what it is: a miracle and unrepeatable.",
    author: "Storm Jameson",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    author: "J.K. Rowling",
  },
  {
    quote: "Remember, you have been criticizing yourself for years and it hasn't worked. Try approving of yourself and see what happens.",
    author: "Louise L. Hay",
  },
  {
    quote: "The idea is to die young as late as possible.",
    author: "Ashley Montagu",
  },
  {
    quote: "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius",
  },
  {
    quote: "We all die. The goal isn't to live forever, the goal is to create something that will.",
    author: "Chuck Palahniuk",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Death is no more than passing from one room into another. But there's a difference for me, you know. Because in that other room I shall be able to see.",
    author: "Helen Keller",
  },
  {
    quote: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
    author: "Mark Twain",
  },
  {
    quote: "The fear of death is the most unjustified of all fears, for there's no risk of accident for someone who's dead.",
    author: "Albert Einstein",
  },
  {
    quote: "If you live each day as if it was your last, someday you'll most certainly be right.",
    author: "Steve Jobs",
  },
  {
    quote: "We are all here for a spell, get all the good laughs you can.",
    author: "Will Rogers",
  },
  {
    quote: "The fear of death is more to be dreaded than death itself.",
    author: "Publilius Syrus",
  },
  {
    quote: "Death is not the opposite of life, but a part of it.",
    author: "Haruki Murakami",
  },
  {
    quote: "Death smiles at us all, but all a man can do is smile back.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
    author: "Isaac Asimov",
  }
];


function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = `"${randomQuote.quote}"<br><br><span>${randomQuote.author}</span>`;

  fadeIn(quoteElement);
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = 'block';

  let opacity = 0;
  const fadeInInterval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      setTimeout(function () {
        fadeOut(element);
      }, 10000); // 10 seconds delay before fading out
    }

    element.style.opacity = opacity;
    opacity += 0.05;
  }, 50); // Adjust the interval for a smoother fade-in effect
}

function fadeOut(element) {
  let opacity = 1;
  const fadeOutInterval = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      element.style.display = 'none';
      setTimeout(function () {
        displayRandomQuote();
      }, 100); 
    }

    element.style.opacity = opacity;
    opacity -= 0.05;
  }, 50); 
}

// Initial quote display
displayRandomQuote();
