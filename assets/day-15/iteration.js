const scientists = ["Nikola Tesla", "Thomas Edison", "Albert Einstein"];

scientists.forEach((scientist) => {
  console.log(scientist);
});

const selectedScientists = scientists.filter((scientist) => {
  return scientist.includes("o");
});

console.log(selectedScientists);