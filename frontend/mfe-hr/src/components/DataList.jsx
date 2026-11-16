export function DataList({ items, empty = null, render }) {
  if (!items || items.length === 0) return empty;
  return <>{items.map((item) => render(item))}</>;
}
