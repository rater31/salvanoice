export function withBase(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\/+/, '');
  return `${base}${clean}`;
}

export function media(path = '') {
  const clean = path.replace(/^\/?media\/+/, '');
  return withBase(`media/${clean}`);
}
