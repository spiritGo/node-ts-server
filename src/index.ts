import Forest from './space';
import Hero from './hero';

const forest = new Forest('forest')
const forest2 = new Forest('forest2')
const hero = new Hero('tom', 20)
console.log('地点:', forest.getName());
console.log('人物:', hero.name);
hero.lumbering(forest)
hero.lumbering(forest)
hero.lumbering(forest)
hero.lumbering(forest)
hero.lumbering(forest2)
hero.lumbering(forest)
console.log(forest.getAssets());
console.log(forest2.getAssets());
