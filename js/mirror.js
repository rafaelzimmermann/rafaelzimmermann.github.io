const video = document.getElementById('video');
const videoContainer = document.getElementById('videoContainer');
const status = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

let stream = null;

function updateStatus(message, type = 'normal') {
    status.textContent = message;
    status.className = type;
}

async function startCamera() {
    try {
        updateStatus('Requesting camera access...', 'normal');
        startBtn.disabled = true;

        const constraints = {
            video: {
                width: { ideal: 1920 },
                height: { ideal: 1080 },
                facingMode: 'user'
            },
            audio: false
        };

        stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;

        videoContainer.classList.add('active');
        updateStatus('Camera active', 'active');

        stopBtn.disabled = false;
        fullscreenBtn.disabled = false;

    } catch (error) {
        console.error('Error accessing camera:', error);
        let errorMessage = 'Failed to access camera';

        if (error.name === 'NotAllowedError') {
            errorMessage = 'Camera access denied. Please allow camera permissions.';
        } else if (error.name === 'NotFoundError') {
            errorMessage = 'No camera found on this device.';
        } else if (error.name === 'NotReadableError') {
            errorMessage = 'Camera is already in use by another application.';
        }

        updateStatus(errorMessage, 'error');
        startBtn.disabled = false;
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        video.srcObject = null;
        videoContainer.classList.remove('active');

        updateStatus('Camera stopped', 'normal');

        startBtn.disabled = false;
        stopBtn.disabled = true;
        fullscreenBtn.disabled = true;
    }
}

async function toggleFullscreen() {
    try {
        if (!document.fullscreenElement) {
            await videoContainer.requestFullscreen();
            fullscreenBtn.textContent = 'Exit Fullscreen';
        } else {
            await document.exitFullscreen();
            fullscreenBtn.textContent = 'Fullscreen';
        }
    } catch (error) {
        console.error('Fullscreen error:', error);
        updateStatus('Fullscreen not supported', 'error');
        setTimeout(() => {
            if (stream) {
                updateStatus('Camera active', 'active');
            }
        }, 2000);
    }
}

// Event listeners
startBtn.addEventListener('click', startCamera);
stopBtn.addEventListener('click', stopCamera);
fullscreenBtn.addEventListener('click', toggleFullscreen);

// Handle fullscreen change events
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.textContent = 'Fullscreen';
    }
});

// Cleanup when page is closed
window.addEventListener('beforeunload', () => {
    stopCamera();
});

// Handle page visibility change (e.g., switching tabs)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && stream) {
        // Optionally stop camera when tab is hidden
        // Uncomment if you want this behavior:
        // stopCamera();
    }
});
