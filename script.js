// Array of quotes
const quotes = [
    "Hack the planet!",
    "There is no security on this earth, only opportunity.",
    "The quieter you become, the more you are able to hear.",
    "Talk is cheap. Show me the code.",
    "In a world of locked doors, the man with the key is king.",
    "The first step to securing your data is not giving it out.",
    "Access the system, exploit the vulnerability.",
    "404 - Inspiration not found. Keep hacking!",
    "With great power comes great responsibility… to secure the network.",
    "Code hard, hack smart."
];

const quoteDisplay = document.getElementById('quoteDisplay');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display the new random quote
function displayNewQuote() {
    quoteDisplay.textContent = `"${getRandomQuote()}"`;
}

// Run the display function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    displayNewQuote();
});

    // script.js
    function showAlert() {
            const alertMessage = document.getElementById('alertMessage');
            const overlay = document.getElementById('overlay');
            const customAlert = document.getElementById('customAlert');

            alertMessage.innerText = "Welcome To My Profile 👨🏼‍💻 Still Under CONSTRUCTION ⚠️";
            overlay.style.display = 'block'; // Show overlay
            customAlert.classList.add('show'); // Trigger slide down and fade in

            // Set timeout to fade out the close button after the alert is shown
            const closeButton = document.getElementById('closeButton');
            setTimeout(() => {
                closeButton.classList.add('fade-out'); // Start fade out
            }, 3000); // Wait for 3 seconds before fading out
        }

        function closeAlert() {
            const overlay = document.getElementById('overlay');
            const customAlert = document.getElementById('customAlert');
            const closeButton = document.getElementById('closeButton');

            closeButton.classList.remove('fade-out'); // Reset fade out class
            overlay.style.display = 'none'; // Hide overlay
            customAlert.classList.remove('show'); // Remove the show class
        }

        // Automatically show the alert when the page loads
        window.onload = showAlert;
    // Functions
    function showSection(id) {
      document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
      });
    
      const targetSection = document.getElementById(id);
      targetSection.classList.add('active');
    
      // Custom smooth scroll behavior
      const yOffset = -50; // Optional: Offset to account for fixed headers
      const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
    
    function toggleMenu() {
      document.querySelector('.navbar').classList.toggle('active');
    }
    
      // Click animation effect
      document.addEventListener('click', function(e) {
        let x = e.clientX;
        let y = e.clientY;
        let clickEffect = document.createElement('div');
        clickEffect.className = 'click-animation';
        clickEffect.style.left = `${x}px`;
        clickEffect.style.top = `${y}px`;
        document.body.appendChild(clickEffect);
        setTimeout(() => {
          clickEffect.classList.add('active');
          setTimeout(() => {
            clickEffect.remove();
          }, 300);
        }, 0);
      });
     document.getElementById("fullscreen-btn").addEventListener("click", function() {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                    document.documentElement.msRequestFullscreen();
                }
            }); 
    
    const keys = document.querySelectorAll('.key');
    const inputField = document.getElementById('keyboard-input');
    
    // Handle clicks from the virtual keyboard
    
    
    // Show section with smooth scroll behavior
    function showSection(id) {
      document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
      });
    
      const targetSection = document.getElementById(id);
      targetSection.classList.add('active');
    
      // Custom smooth scroll behavior
      const yOffset = -50; // Optional: Offset for fixed header
      const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
    
    // Toggle navigation menu
    function toggleMenu() {
      document.querySelector('.navbar').classList.toggle('active');
    }
    
    // Scroll indicator logic
    window.onscroll = function() {
      updateScrollIndicator();
    };
    
    function updateScrollIndicator() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
    }
    
    
    // Handle key presses from the physical keyboard
   
    // Make sure to refocus input on fullscreen change if needed
    document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                inputField.focus(); // Refocus the input field when entering fullscreen
            }
        });
    
        // Optional: Check for fullscreen API compatibility
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    // Function to toggle fullscreen mode
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    // Event listener for button click
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Event listener for key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'f' || event.key === 'F') {
            toggleFullscreen();
        }
    });
        const terminalContent = document.getElementById('terminal-content');
        const terminalInput = document.getElementById('terminal-input');
        const terminal = document.getElementById('terminal');

        // List of available commands with their responses
        const commands = {
            help: 'Available commands: help, clear, about, exit, ipconfig, git status, ls, pwd, echo, whoami, date, uname',
            clear: '',
            about: 'This is a simple hacker-themed terminal. Author: Joe6905',
            exit: 'Closing terminal...',
            ipconfig: `IP Configuration:
    IPv4 Address: 192.168.1.2
    Subnet Mask: 255.255.255.0
    Default Gateway: 192.168.1.1`,
            'git status': `On branch main
    Your branch is up to date with 'origin/main'.

    Nothing to commit, working tree clean`,
            ls: `file1.txt
file2.txt
directory1/
directory2/`,
            pwd: '/home/user/projects',
            echo: 'Echo is a command used to display a line of text.',
            whoami: 'You are user.',
            date: new Date().toLocaleString(),
            uname: 'Operating System: Linux 5.4.0-42-generic'
        };

        // Function to process and display terminal commands
        function processCommand(command) {
            let response = '';
            
            // Check if the command exists
            if (commands[command]) {
                response = commands[command];

                // Clear the terminal if 'clear' is entered
                if (command === 'clear') {
                    terminalContent.innerHTML = '';
                    return;
                }

                // Close the terminal if 'exit' is entered
                if (command === 'exit') {
                    terminal.style.display = 'none';
                    return;
                }

            } else {
                // Unknown command
                response = `Unknown command: ${command}`;
            }

            // Append the new command and response to the terminal
            appendToTerminal(`$ ${command}`);
            appendToTerminal(response);
        }

        // Function to append new content to the terminal
        function appendToTerminal(text) {
            const newLine = document.createElement('p');
            newLine.classList.add('command-line');
            newLine.textContent = text;
            terminalContent.appendChild(newLine);
            terminalContent.scrollTop = terminalContent.scrollHeight; // Scroll to bottom
        }

        // Handle Enter key press to display terminal on 'cmd'
        document.getElementById('command').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const inputValue = event.target.value.toLowerCase();
                
                if (inputValue === 'cmd') {
                    // Show the terminal
                    terminal.style.display = 'block';
                    appendToTerminal('$ Welcome to the hacker terminal.');
                    event.target.value = ''; // Clear input field
                }
            }
        });

        // Handle terminal input and execute commands
        document.addEventListener('keydown', function(event) {
            if (terminal.style.display === 'block') {
                // Capture command input inside the terminal
                if (event.key === 'Enter') {
                    const command = terminalInput.textContent.trim();
                    if (command) {
                        processCommand(command);
                        terminalInput.textContent = ''; // Clear the input line
                    }
                } else if (event.key === 'Backspace') {
                    terminalInput.textContent = terminalInput.textContent.slice(0, -1); // Handle backspace
                } else if (event.key.length === 1) {
                    terminalInput.textContent += event.key; // Append characters to terminal input
                }
            }
        });

        // Make the terminal draggable
        const header = document.querySelector(".terminal-header");
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - terminal.offsetLeft;
            offsetY = e.clientY - terminal.offsetTop;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                terminal.style.left = (e.clientX - offsetX) + 'px';
                terminal.style.top = (e.clientY - offsetY) + 'px';
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
