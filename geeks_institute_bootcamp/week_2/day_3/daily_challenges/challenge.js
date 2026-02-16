class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}


// const video1 = new Video("JavaScript Tutorial", "Alice", 300);
// video1.watch();

// const video2 = new Video("React Basics", "Bob", 600);
// video2.watch();


const videoData = [
  { title: "HTML Basics", uploader: "John", time: 200 },
  { title: "CSS Tutorial", uploader: "Emma", time: 180 },
  { title: "JavaScript ES6", uploader: "Liam", time: 300 },
  { title: "Node.js Intro", uploader: "Sophia", time: 400 },
  { title: "React Hooks", uploader: "Noah", time: 500 }
];

const videos = [];

for (let i = 0; i < videoData.length; i++) {
  const data = videoData[i];
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
}

videos.forEach(video => video.watch());
