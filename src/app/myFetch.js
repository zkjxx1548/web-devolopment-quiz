async function fetchData() {
  const url = 'http://localhost:1234/products';
  const xhr = await fetch(url, { method: 'GET' });
  const xhrJsonArray = await xhr.json();
  return xhrJsonArray;
}

export default fetchData;