function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}

function StartRecording() {
  return (
    <div>
      <button>Record</button>
      <button>Play</button>
      <button>Stop</button>
    </div>
  );

  // let recorder = new MediaRecorder(stream);
  // let data = [];

  // recorder.ondataavailable = event => data.push(event.data);
  // recorder.start();
  // console.log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");

  // let stopped = new Promise((resolve, reject) => {
  //   recorder.onstop = resolve;
  //   recorder.onerror = event => reject(event.name);
  // });

  // let recorded = wait(lengthInMS).then(
  //   () => recorder.state == "recording" && recorder.stop()
  // );

  // return Promise.all([
  //   stopped,
  //   recorded
  // ])
  // .then(() => data);
}

export default StartRecording;
