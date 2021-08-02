import ListItem from '../ListItem';

describe('ListItem()', () => {
  it('should print list item', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    App();

    expect(consoleSpy).toHaveBeenCalledWith('List item');
  })
})
