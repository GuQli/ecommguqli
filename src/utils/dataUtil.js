// browser Data

function getSession() {
  const token = JSON.parse(sessionStorage.getItem("Token"));
  const id = JSON.parse(sessionStorage.getItem("Id"));

  return { token, id };
}

// getUser Data < DropdownLoggedInn
export async function getUser() {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.id}`,
    requestOptions
  );

  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }

  const data = await response.json();
  return data;
}

// createOrder Data <cart<components<checkout
export async function createOrder(cartList, total, user) {
  const browserData = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();

  return data;
}

// get User Orders Data <Dashboard

export async function getUserOrders() {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.id}`,
    requestOptions
  );

  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }

  const data = await response.json();

  return data;
}
