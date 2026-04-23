const WA = "919354561146";

async function init() {
  try {
    const res = await fetch("/products");
    const data = await res.json();

    render(data);
  } catch {
    document.body.innerHTML = "Failed to load products";
  }
}

function render(products) {
  const root = document.getElementById("products");

  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `
      <img src="${p.image || ''}" />
      <div class="info">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>${p.model}</p>
        <button onclick="order('${p.name}','${p.model}')">
          Chat on WhatsApp
        </button>
      </div>
    `;

    root.appendChild(el);
  });
}

function order(name, model) {
  const msg = encodeURIComponent(
    `Hi Hylune, I want to order ${name} for ${model}`
  );

  window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
}

init();