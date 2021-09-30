function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerhealth: 100,
      monsterhealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterhealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerhealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attackdamage = getRandomValue(5, 12);
      this.monsterhealth = this.monsterhealth - attackdamage;
      this.attackPlayer(); //Vue lets you access methods,data because they are merged into an object
    },
    attackPlayer() {
      const attackdamage = getRandomValue(8, 15);
      this.playerhealth = this.playerhealth - attackdamage;
    },
  },
});

app.mount("#game");
