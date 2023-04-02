const { generateUUID } = require('../index');

test('Generated UUIDs should be unique', () => {
  const uuidSet = new Set();

  for (let i = 0; i < 1000; i++) {
    const uuid = generateUUID();
    expect(uuidSet.has(uuid)).toBe(false);
    uuidSet.add(uuid);
  }
});
