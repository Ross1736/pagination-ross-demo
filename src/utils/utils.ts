export const listItems = Array.from({ length: 250 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  category: ["Books", "Electronics", "Clothing", "Toys", "Food"][i % 5],
}));
