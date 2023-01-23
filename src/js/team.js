export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Такой персонаж уже есть в команде!');
    } else {
      this.members.add(person);
    }
  }

  addAll(...persons) {
    persons.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
