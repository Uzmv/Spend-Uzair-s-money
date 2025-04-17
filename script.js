let money = 0;

const products = [
  {
    name: "World Cup 🏆",
    price: 100000000,
    image: "https://images.unsplash.com/photo-1637203723757-a9b26181e1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Private Jet ✈️",
    price: 5000000,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Diamond 💎",
    price: 299,
    image: "https://images.unsplash.com/photo-1697479665524-3e06cf37b2b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bitcoin 🪙",
    price: 99999,
    image: "https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Monster 🟢",
    price: 42000,
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Basil's Toilet 🚽",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1556228149-d8f523f77b5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chewing Gum",
    price: 20,
    image: "https://images.unsplash.com/photo-1576644461179-ddd318c669e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pitch for Friends",
    price: 100000,
    image: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Squid Game Guard",
    price: 100000,
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Personal Worker",
    price: 2,
    image: "https://plus.unsplash.com/premium_photo-1664301171216-9e0e0cd8d103?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dream Setup",
    price: 4500000,
    image: "https://plus.unsplash.com/premium_photo-1678112179122-50605ebc5697?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "1 Man 1 Jar",
    price: 666666,
    image: "https://images.unsplash.com/photo-1622428051717-dcd8412959de?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Roblox",
    price: 90000,
    image: "https://images.unsplash.com/photo-1656639969809-ebc544c96955?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Button",
    price: 1,
    image: "https://images.unsplash.com/photo-1656639969809-ebc544c96955?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cloud",
    price: 700,
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?auto=format&fit=crop&w=800&q=80"
  }
];

function startSpending() {
  money = parseFloat(document.getElementById("moneyInput").value);
  document.getElementById("remaining").innerText = `Remaining: $${money.toFixed(2)}`;
  document.getElementById("items").classList.remove("hidden");
  showItems();
}

function showItems() {
  const container = document.getElementById("items");
  container.innerHTML = "";

  products.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%; border-radius:10px;">` : ''}
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button onclick="buyItem(${item.price})">Buy</button>
    `;

    container.appendChild(div);
  });
}

function buyItem(price) {
  if (money >= price) {
    money -= price;
    document.getElementById("remaining").innerText = `Remaining: $${money.toFixed(2)}`;
  } else {
    alert("Not enough money!");
  }
}
