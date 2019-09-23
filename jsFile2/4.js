class Bird {
  //初期化時に動作するやつ
  constructor(name) {
    this.name = name;
  }

  //jsではバッククウォートが変数展開できる
  chirp() {
    console.log(`${this.name}が鳴きました`);
  }

  static explain(name) {
    console.log(`${name}は翼があって卵を産みます`);
  }
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛びました`)
  }
}

const bd1 = new Bird('ペンギン');
bd1.chirp();
Bird.explain('カラス');

const bd2 = new FlyableBird('雀');
bd2.fly();