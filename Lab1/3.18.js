function showGraph() {
    const canvas = document.getElementById("graph");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const stepX = width / arguments.length;
    const max = Math.max(...arguments);
    const min = Math.min(...arguments);
    const range = max - min;

    context.beginPath();
    context.moveTo(0, height - (arguments[0] - min) / range * height);

    for (let i = 1; i < arguments.length; i++) {
        const x = i * stepX;
        const y = height - (arguments[i] - min) / range * height;
        context.lineTo(x, y);
    }

    context.lineWidth = 3;
    context.strokeStyle = randomColor();
    context.stroke();
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
