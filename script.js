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
