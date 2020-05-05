import findBy from '../js/app';
import results from '../js/finder';

test('Get find element', () => {
  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];
  const received = results.filter(findBy('name', 'урон'));
  expect(received).toEqual(expected);
});
test('Dont get find element', () => {
  const expected = [];
  const received = results.filter(findBy('name', 'уро'));
  expect(received).toEqual(expected);
});
test('Dont get find element', () => {
  const expected = [];
  const received = results.filter(findBy('nam', 'урон'));
  expect(received).toEqual(expected);
});
