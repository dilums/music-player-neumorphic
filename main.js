const app = new Vue({
    el: "#app",
    data: {
      bars: Array(49)
        .fill(0)
        .map(() => 5 + Math.random() * 20),
      isPlaying: false,
      currentTick: 0,
      counter: null
    },
    methods: {
      update: function() {
        this.bars.shift();
        this.bars.push(5 + Math.random() * 20);
      },
      onPlayingChange: function() {
        if (this.isPlaying) {
          this.isPlaying = false;
          clearInterval(this.counter);
        } else {
          this.isPlaying = true;
          this.counter = setInterval(() => {
            this.update();
          }, 150);
        }
      }
    },
    created: function() {
      this.onPlayingChange();
    }
  });
  