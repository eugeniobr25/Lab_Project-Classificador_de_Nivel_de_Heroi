const nickname = "Cataclisma";
const raca = "Anjo"
const casta = "Querubim"
const xp = 100;

let nivel;

switch (true) {
    case xp < 1000:
      nivel = "Novato";
      break;
    case xp >= 1001 && xp <= 2000:
      nivel = "Ferro";
      break;
    case xp >= 2001 && xp <= 5000:
      nivel = "Broze";
      break;
    case xp >= 6001 && xp <= 7000:
      nivel = "Prata";
      break;
    case xp >= 7001 && xp <= 8000:
      nivel = "Ouro";
      break;
    case xp >= 8001 && xp <= 9000:
      nivel = "Safira";
      break;
    case xp >= 9001 && xp <= 10000:
      nivel = "Rubi";
      break;
    case xp >= 9001 && xp <= 10000:
      nivel = "Diamante";
      break;
    case xp >= 9001 && xp <= 10000:
      nivel = "Imortal";
      break;case xp >= 10001 && xp <= 20000:
      nivel = "Entidade";
      break;
    case xp >= 20001 && xp <= 30000:
      nivel = "Deus";
      break;
    case xp >= 30001:
      nivel = "One-Above-All";
      break;
    default:
      console.log(`O Herói de nome ${nickname} tem que Upar mais!`);
      break;
  }
  

  console.log(`O Herói de nome ${nickname} está no nível de ${nivel}`);