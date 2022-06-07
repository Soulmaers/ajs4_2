// import Bowman from '../Bowman';
// import Swordsman from '../Swordsman';
// import Magician from '../Magician';
// import Undead from '../Undead';
// import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('повышаем уровень', () => {
  const result = new Daemon('Daemon');

  result.damage(20);
  result.levelUp();

  const params = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(result).toEqual(params);
});

test('проверяем ошибку', () => {
  const result = new Daemon();
  result.health = 0;
  result.damage(20);
  expect(() => result.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});
