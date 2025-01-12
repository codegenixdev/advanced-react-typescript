type Bird = {
  name: string;
  canFly: boolean;
};

type Fish = {
  name: string;
  canSwim: boolean;
};

const isBird = (animal: Bird | Fish): animal is Bird => {
  return (animal as Bird).canFly !== undefined;
};

const usage = (animal: Bird | Fish) => {
  if (isBird(animal)) {
    console.log(`${animal.name} is flying: ${animal.canFly}`);
  } else {
    console.log(`${animal.name} is swimming: ${animal.canSwim}`);
  }
};
