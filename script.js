window.onload = function() {
    const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to draw random shapes
    function drawRandomShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 50;
            const shapeType = Math.floor(Math.random() * 3);
            ctx.fillStyle = getRandomColor();
            switch (shapeType) {
                case 0:
                    // Draw circle
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    break;
                case 1:
                    // Draw rectangle
                    ctx.fillRect(x, y, size, size);
                    break;
                case 2:
                    // Draw triangle
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + size, y);
                    ctx.lineTo(x + size / 2, y - size);
                    ctx.closePath();
                    break;
            }
            ctx.fill();
        }
    }

    // Draw initial shapes
    drawRandomShapes();
};
