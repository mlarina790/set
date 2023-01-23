import Team from '../team';

test('Should add an archer to the team', () => {
  const archer = { name: 'Лучник' };
  const team = new Team();
  team.add(archer);
  const expected = [archer];
  const result = team.toArray();

  expect(result).toEqual(expected);
});

test('Should add an archer and warrior to the team', () => {
  const archer = { name: 'Лучник' };
  const warrior = { name: 'Воин' };
  const team = new Team();
  team.addAll(archer, warrior, archer);

  const expected = [archer, warrior];
  const result = team.toArray();

  expect(result).toEqual(expected);
});

test('Should throw an error as the character already exists', () => {
  const archer = { name: 'Лучник' };
  const team = new Team();
  team.add(archer);

  const expected = Error('Такой персонаж уже есть в команде!');

  expect(() => team.add(archer)).toThrow(expected);
});
