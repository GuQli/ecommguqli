// get full productList < product list

export async function getProductList(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
}

// get individual product < productDetail
export async function getProductDetail(id) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();

  return data;
}
// get featured product list <featuredProducts.js
export async function getFeaturedList() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
}
