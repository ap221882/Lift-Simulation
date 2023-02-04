class Levels {
  constructor() {
    this.totalLevels = 1;
  }

  buildLevel() {
    this.totalLevels++;
  }

  removeLevel(level) {
    this.totalLevels--;
  }
}
