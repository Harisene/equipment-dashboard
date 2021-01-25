//order by operations : DESCENDING order
export function sortByY(a, b) {
  const yA = a.y;
  const yB = b.y;

  if (yA < yB) return 1;
  else return -1;
}

//order by equipment type : ASCENDING order
export function sortByLabel(a, b) {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();

  if (labelA > labelB) return 1;
  else return -1;
}
