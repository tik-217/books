export function isCategories(categories: string[]) {
  if (!categories || categories.length === 0 || categories[0] === "") return;

  const minAuthor = categories[0];

  return minAuthor.trim();
}

export function descLength(desc: string) {
  let text = "";

  if (desc) {
    if (desc.length >= 300) {
      text = `${desc && desc.slice(0, 300)}...`;
    } else {
      text = desc && desc.slice(0, 300);
    }
  }

  return text ?? null;
}

export function isAuthor(author: string[] | undefined) {
  if (!author) return;

  const minAuthor = author.slice(0, 3).join(", ");

  return minAuthor.trim();
}
