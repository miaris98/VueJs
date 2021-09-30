function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner:null,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    heal() {
      this.currentRound++;
      const heal = getRandomValue(6, 17);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.attackPlayer();
    },
   
  },
  watch:{
    playerHealth(value){
      if(value <= 0 && this.monsterHealth<=0){
        //draw
        this.winner='draw';
      }else if (value<=0){
        //player lost
        this.winner='monster';
      }
    },
    monsterHealth(value){
      if(value <= 0 && this.playerHealth<=0){
        //draw 
        this.winner='draw';
      }else if (value<=0){
        //monster lost
        this.winner='player';
      }
    },
  }
});
app.mount("#game");
