const video = document.getElementById('webcam');
const canvas = document.getElementById('overlay');
const context = canvas.getContext('2d');

// Inicializa a webcam
async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  await new Promise(resolve => video.onloadedmetadata = resolve);
  video.play();
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
}

// Carrega o modelo e detecta objetos
async function detectObjects() {
  const model = await cocoSsd.load();
  console.log("Modelo carregado!");

  // Loop de detecção
  const detect = async () => {
    const predictions = await model.detect(video);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      context.strokeStyle = "#000";
      context.lineWidth = 2;
      context.strokeRect(x, y, width, height);
      context.fillStyle = "#000";
      context.font = "18px Arial";
      context.fillText(prediction.class, x, y - 10);
    });

    requestAnimationFrame(detect);
  };

  detect();
}

// Inicia tudo
setupCamera().then(detectObjects).catch(console.error);
