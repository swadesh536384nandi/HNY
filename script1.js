 const targetDate = new Date("January 1, 2026 00:00:00").getTime();
const waitingScreen = document.getElementById('waiting-screen');
const longCountdownEl = document.getElementById('long-countdown');
const startOverlay = document.getElementById('overlay');
const mainContainer = document.querySelector('.container');

function checkTimeGate() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        // BEFORE 2026: Show the long countdown
        waitingScreen.style.display = 'flex';
        startOverlay.style.display = 'none';
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        longCountdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // IT IS 2026: Show the Start Celebration button
        clearInterval(gateInterval);
        waitingScreen.style.display = 'none';
        startOverlay.style.display = 'flex';
    }
}

// Check every second
const gateInterval = setInterval(checkTimeGate, 1000);
checkTimeGate(); // Run once immediately
 
 
 
 
 
 const bgMusic = document.getElementById('celebrationMusic');
        const countdownEl = document.getElementById('countdown');
        const yearDisplay = document.getElementById('year-display');
        const redB = document.getElementById('red-balloon');
        const greenB = document.getElementById('green-balloon');
        const num5 = document.getElementById('num5');
        const num6 = document.getElementById('num6');
        const fire = document.getElementById('fire');
        const title = document.getElementById('title');
        const overlay = document.getElementById('overlay');

        let count = 11;

        // Interaction to allow audio
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            runCountdown();
        });

        function runCountdown() {
			bgMusic.play();
            const interval = setInterval(() => {
                count--;
                if (count > 0) {
                    countdownEl.innerText = count;
                } else {
                    clearInterval(interval);
                    startShow();
                }
            }, 1000);
        }

function startShow() {
   // bgMusic.play();
    countdownEl.style.display = 'none';
    yearDisplay.style.display = 'flex';
    title.style.display = 'block';

    // 1. Red balloon lifts '5' away
    setTimeout(() => {
        redB.style.transition = "bottom 1.2s ease-out";
        redB.style.bottom = "50px";
        
        setTimeout(() => {
            redB.style.bottom = "120vh";
            num5.style.transition = "top 2.5s ease-in";
            num5.style.top = "-120vh";

            // 2. Green balloon brings '6' in
            setTimeout(() => {
                greenB.style.transition = "bottom 3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                greenB.style.bottom = "140px";
                num6.style.transition = "top 3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                num6.style.top = "0";

                // 3. Fire and Confetti celebration
                setTimeout(() => {
                    fire.style.display = 'flex';
                    launchConfetti();
                    greenB.style.transition = "bottom 2s ease-in, opacity 1s";
                    greenB.style.bottom = "120vh";
                    greenB.style.opacity = "0";

                    // 4. TRIGGER REDIRECT AFTER CELEBRATION
                    // Wait 5 seconds to enjoy the confetti before moving
                    setTimeout(() => {
                        document.body.style.transition = "opacity 1.5s";
                        document.body.style.opacity = "0";
                        setTimeout(() => { 
                            window.location.href = 'greeting.html'; 
                        }, 1500);
                    }, 5000); 

                }, 3000);
            }, 500);
        }, 1000);
    }, 500);
}

// Remove the standalone 22-second auto-redirect at the bottom 
// so it only triggers when the animation actually finishes.

        function launchConfetti() {
            var duration = 6 * 1000;
            var end = Date.now() + duration;
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ffcc00', '#ff4500', '#ffffff'] });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffcc00', '#ff4500', '#ffffff'] });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());
        }

        // Auto-redirect
        /*setTimeout(() => {
            document.body.style.transition = "opacity 1.5s";
            document.body.style.opacity = "0";
            setTimeout(() => { window.location.href = 'greeting.html'; }, 1500);
        }, 22000);*/


