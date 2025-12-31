function toggleCard() {
	const card = document.getElementById('card');
	card.classList.toggle('open');
	// Auto-play music on first open
	const music = document.getElementById('bgMusic');
	if (card.classList.contains('open') && music.paused) {
		music.play().catch(() => {}); // Catch browser block
	}
}

function updateCountdown() {
	const target = new Date(`January 01, 2026 00:00:00`).getTime();
	const now = new Date().getTime();
	const diff = target - now;

	if (diff <= 0) {
		document.getElementById('status-text').innerHTML = "HAPPY NEW YEAR"
	   // document.getElementById('status-text').innerText = "HAPPY NEW YEAR!";
		document.getElementById('countdown').style.display = "none";
		document.getElementById('message-text_2').innerHTML = 
			"<span style='color: #dda4df; font-weight: bold; font-size: 1.1rem;'>The stars align, the clock strikes deep,<br>The old year fades into its sleep.<br>We welcome in another year.<br>May all your brightest dreams come true.<br>Twelve fresh months to start anew,<br>To a happy, healthy, bright New Year!</span>";
		return;
	}

	const d = Math.floor(diff / (1000 * 60 * 60 * 24));
	const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const s = Math.floor((diff % (1000 * 60)) / 1000);

	document.getElementById('days').innerText = d.toString().padStart(2, '0');
	document.getElementById('hours').innerText = h.toString().padStart(2, '0');
	document.getElementById('mins').innerText = m.toString().padStart(2, '0');
	document.getElementById('secs').innerText = s.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

function celebrate() {
	const colors = ['#ff0055', '#87eb30', '#00ffcc', '#3300ff', '#ff00ff', '#ffffff', '#ffd700', '#ae3eae','#eb9430'];
	const shapes = ['circle', 'star', 'triangle','rhombus' ];
	const count = 100;

	for (let i = 0; i < count; i++) {
		const c = document.createElement('div');
		const shape = shapes[Math.floor(Math.random() * shapes.length)];
		c.classList.add('confetti', shape);
		
		// Randomize appearance
		const color = colors[Math.floor(Math.random() * colors.length)];
		c.style.backgroundColor = color;
		c.style.left = '50%';
		c.style.top = '50%';
		c.style.width = Math.random() * 12 + 5 + 'px';
		c.style.height = c.style.width;
		
		document.body.appendChild(c);

		// Create a "Burst" effect from the center/button
		const destinationX = (Math.random() - 0.5) * 1000;
		const massage = "HNY";
		const destinationY = (Math.random() - 0.5) * 1000;
		const rotation = Math.random() * 720;
		const delay = Math.random() * 200;

		c.animate([
			{ 
				transform: 'translate(-50%, -50%) scale(0)', 
				opacity: 1 
			},
			{ 
				transform: `translate(calc(-50% + ${massage}px), calc(-50% + ${massage}px)) rotate(${rotation}deg) scale(1)`, 
				opacity: 0.8 
			},
			{ 
				transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) rotate(${rotation}deg) scale(1)`, 
				opacity: 0.8 
			},
			{ 
				transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px + 200px)) rotate(${rotation * 1.5}deg) scale(0)`, 
				opacity: 0 
			}
		], { 
			duration: 2500 + Math.random() * 1000, 
			easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
			delay: delay
		});

		setTimeout(() => c.remove(), 4000);
	}
}

function createSparkles() {
            for (let i = 0; i < 50; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                const size = Math.random() * 3 + 'px';
                sparkle.style.width = size;
                sparkle.style.height = size;
                sparkle.style.top = Math.random() * 100 + 'vh';
                sparkle.style.left = Math.random() * 100 + 'vw';
                sparkle.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(sparkle);
            }
        }