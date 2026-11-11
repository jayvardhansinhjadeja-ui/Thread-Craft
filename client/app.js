/**
 * THREAD & CRAFT CO. - CLIENT STORE APPLICATION JAVASCRIPT
 * Includes 7 detailed T-shirt products, dynamic filters, cart state,
 * size chart, delivery date estimator, promo discounts, and JavaScript validations.
 */

// Default 7 T-Shirt Products with Complete Manufacturing and Material Details
const DEFAULT_PRODUCTS = [
  {
    id: "tee-01",
    title: "Classic Heavyweight Organic Crewneck",
    category: "Organic",
    price: 29.99,
    originalPrice: 39.99,
    discountPercent: 25,
    rating: 4.8,
    reviewsCount: 142,
    stock: 45,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    material: "100% GOTS-Certified Organic Combed Cotton (240 GSM heavy jersey knit).",
    manufacture: "Ethically knit, cut, and sewn in Tirupur, India in a solar-powered Fair Trade Certified facility. Pre-shrunk with sustainable enzymatic biowashing and dyed using zero-discharge OEKO-TEX Standard 100 reactive dyes.",
    fit: "Classic relaxed fit with reinforced 1x1 ribbed collar and double-needle bottom hem.",
    care: "Machine wash cold inside out with similar colors. Line dry in shade to preserve organic fibers.",
    colors: ["Classic White", "Charcoal Slate", "Sage Green"]
  },
  {
    id: "tee-02",
    title: "Vintage Acid-Wash Streetwear Tee",
    category: "Streetwear",
    price: 34.99,
    originalPrice: 49.99,
    discountPercent: 30,
    rating: 4.9,
    reviewsCount: 98,
    stock: 28,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    material: "100% Ring-Spun Cotton (220 GSM single jersey with custom mineral acid-wash).",
    manufacture: "Hand-treated and stone-washed in Barcelos, Portugal. Each garment receives an artisan wash technique that produces subtle, one-of-a-kind fades and an ultra-soft broken-in feel from day one.",
    fit: "Modern drop-shoulder oversized boxy silhouette with wide collar ribbing.",
    care: "Cold gentle cycle, do not bleach. Tumble dry on low heat. Iron inside-out.",
    colors: ["Washed Onyx", "Faded Rust", "Vintage Indigo"]
  },
  {
    id: "tee-03",
    title: "Bamboo Performance Moisture-Wicking Tee",
    category: "Athletic",
    price: 27.99,
    originalPrice: 35.00,
    discountPercent: 20,
    rating: 4.7,
    reviewsCount: 86,
    stock: 50,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80",
    material: "70% Organic Bamboo Viscose, 25% Recycled Poly, 5% Spandex (180 GSM).",
    manufacture: "Produced in a closed-loop zero-waste textile mill in Da Nang, Vietnam. High bamboo fiber content provides inherent UV protection (UPF 50+), natural antibacterial properties, and thermo-regulating breathability.",
    fit: "Athletic athletic-tapered fit with 4-way mechanical stretch and side gusset panels.",
    care: "Machine wash delicate in cold water. Lay flat to dry; do not iron on reflective logos.",
    colors: ["Arctic Blue", "Heather Grey", "Midnight Black"]
  },
  {
    id: "tee-04",
    title: "French Terry Loopback Boxy Tee",
    category: "Streetwear",
    price: 39.99,
    originalPrice: 55.00,
    discountPercent: 27,
    rating: 4.9,
    reviewsCount: 114,
    stock: 20,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80",
    material: "100% Unbrushed French Terry Loopback Cotton (280 GSM premium heavyweight).",
    manufacture: "Milled and crafted in Wakayama, Japan using rare vintage loopwheel knitting machines. High loop density provides structure without stiffness, resisting shrinkage and deformation after continuous laundering.",
    fit: "High-fashion boxy cut with elbow-length sleeves and split side seams.",
    care: "Gentle machine wash cold. Do not dry clean. Hang to dry.",
    colors: ["Sand Dune", "Off-White", "Raw Olive"]
  },
  {
    id: "tee-05",
    title: "Supima Cotton Textured Slub V-Neck",
    category: "Casual",
    price: 24.99,
    originalPrice: 32.00,
    discountPercent: 22,
    rating: 4.6,
    reviewsCount: 67,
    stock: 35,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80",
    material: "100% American Grown Supima Extra-Long Staple Cotton (160 GSM slub yarn).",
    manufacture: "Grown in California, USA and spun using uneven slub tensioning for subtle visual texture. Garment-dyed and enzyme washed in Los Angeles for unrivaled softness and silk-like drape.",
    fit: "Tailored modern fit with reinforced shallow V-neck tape to prevent sagging.",
    care: "Machine wash cold with mild detergent. Warm iron if needed.",
    colors: ["Crisp White", "Navy Blue", "Heather Mocha"]
  },
  {
    id: "tee-06",
    title: "Repreve Recycled Active Training Tee",
    category: "Athletic",
    price: 22.99,
    originalPrice: 29.99,
    discountPercent: 23,
    rating: 4.7,
    reviewsCount: 75,
    stock: 60,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    material: "88% REPREVE® Recycled Ocean Plastic Polyester, 12% Spandex (150 GSM).",
    manufacture: "Responsibly woven in Colombo, Sri Lanka under strict WRAP Gold social standards. Diverts approximately 8 recycled plastic bottles per shirt with quick-dry capillary moisture dispersion.",
    fit: "Streamlined active fit with ergonomic raglan sleeves and flatlock anti-chafing seams.",
    care: "Machine wash cold. Dries in less than 30 minutes on clothesline. No fabric softener.",
    colors: ["Volt Neon", "Steel Grey", "Deep Obsidian"]
  },
  {
    id: "tee-07",
    title: "Waffle Knit Thermal Long-Sleeve Tee",
    category: "Casual",
    price: 36.99,
    originalPrice: 48.00,
    discountPercent: 23,
    rating: 4.8,
    reviewsCount: 104,
    stock: 30,
    image: "https://images.unsplash.com/photo-1622445268994-0a3eb71efd39?auto=format&fit=crop&w=700&q=80",
    material: "96% Aegean Turkish Cotton, 4% Elastane Honeycomb Waffle Knit (250 GSM).",
    manufacture: "Woven in Izmir, Turkey using high-gauge micro-thermal waffle knitting. Traps warm air pockets while remaining breathable. Features custom horn buttons on the three-button placket.",
    fit: "Standard layering fit with 2.5-inch ribbed storm cuffs.",
    care: "Machine wash cold inside-out. Reshape while damp and dry flat.",
    colors: ["Oatmeal Heather", "Forest Moss", "Dark Walnut"]
  }
];

// Size Chart Data (Inches & CM)
const SIZE_CHART = [
  { size: "S", chestIn: '36-38"', lengthIn: '27.5"', shoulderIn: '17.5"', chestCm: "91-96 cm", lengthCm: "70 cm" },
  { size: "M", chestIn: '39-41"', lengthIn: '28.5"', shoulderIn: '18.5"', chestCm: "99-104 cm", lengthCm: "72 cm" },
  { size: "L", chestIn: '42-44"', lengthIn: '29.5"', shoulderIn: '19.5"', chestCm: "107-112 cm", lengthCm: "75 cm" },
  { size: "XL", chestIn: '45-47"', lengthIn: '30.5"', shoulderIn: '20.5"', chestCm: "114-119 cm", lengthCm: "77 cm" },
  { size: "XXL", chestIn: '48-50"', lengthIn: '31.5"', shoulderIn: '21.5"', chestCm: "122-127 cm", lengthCm: "80 cm" }
];

// Active Promo Discounts Table
const PROMO_CODES = {
  "SAVE20": { discountPercent: 20, description: "20% Off Storewide", minOrder: 30 },
  "TEES10": { discountPercent: 10, description: "10% Off Any Order", minOrder: 0 },
  "SUMMER25": { discountPercent: 25, description: "25% Summer Special", minOrder: 50 }
};

// Application State
let products = [];
let cart = [];
let appliedDiscount = null; // { code, percent, amount }
let selectedSize = "M";

// Initialize Local Storage & Load Products
function initStore() {
  const savedProducts = localStorage.getItem("tshirt_store_products");
  if (savedProducts) {
    try {
      products = JSON.parse(savedProducts);
    } catch (e) {
      products = DEFAULT_PRODUCTS;
    }
  } else {
    products = DEFAULT_PRODUCTS;
    localStorage.setItem("tshirt_store_products", JSON.stringify(DEFAULT_PRODUCTS));
  }

  const savedCart = localStorage.getItem("tshirt_store_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }

  renderProducts(products);
  updateCartBadge();
  setupEventListeners();
  renderSizeChart();
  calculateDefaultDeliveryEstimate();
}

/**
 * =========================================================================
 * 5 JAVASCRIPT VALIDATIONS IMPLEMENTED IN CLIENT & ADMIN CODE
 * =========================================================================
 * 
 * 1. validateEmail(email)         -> Client & Admin login/signup forms
 * 2. validatePassword(password)   -> Strict password strength verification
 * 3. validatePincode(pincode)     -> Postal delivery date estimation checker
 * 4. validatePromoCode(code, sub) -> Cart discount promo verification & min order
 * 5. validateQuantity(qty, stock) -> Add to cart & quantity limits validation
 * =========================================================================
 */

// VALIDATION 1: Email Format Validation (RFC 5322 standard regex)
function validateEmail(email) {
  if (!email || typeof email !== "string") {
    return { isValid: false, message: "Email address is required." };
  }
  const cleanEmail = email.trim();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { isValid: false, message: "Please enter a valid email address (e.g., name@domain.com)." };
  }
  return { isValid: true, message: "Valid email address." };
}

// VALIDATION 2: Password Strength Validation (Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
function validatePassword(password) {
  if (!password || password.length < 8) {
    return { isValid: false, message: "Password must be at least 8 characters long." };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: "Password must contain at least one uppercase letter (A-Z)." };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: "Password must contain at least one lowercase letter (a-z)." };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: "Password must contain at least one number (0-9)." };
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { isValid: false, message: "Password must contain at least one special character (!@#$%^&*)." };
  }
  return { isValid: true, message: "Strong password accepted." };
}

// VALIDATION 3: Postal / Pincode Delivery Check Validation (Exact 6 digits numeric)
function validatePincode(pincode) {
  if (!pincode) {
    return { isValid: false, message: "Please enter a delivery pincode or zip code." };
  }
  const cleanPincode = pincode.toString().trim();
  const pincodeRegex = /^[1-9][0-9]{5}$/; // Standard 6-digit postal code not starting with 0
  if (!pincodeRegex.test(cleanPincode)) {
    return { isValid: false, message: "Invalid postal code. Must be a 6-digit numeric code." };
  }
  return { isValid: true, message: "Postal code verified for delivery." };
}

// VALIDATION 4: Promo / Discount Coupon Code Validation
function validatePromoCode(couponCode, cartSubtotal) {
  if (!couponCode || couponCode.trim() === "") {
    return { isValid: false, message: "Please enter a promotional discount code." };
  }
  const normalizedCode = couponCode.trim().toUpperCase();
  const coupon = PROMO_CODES[normalizedCode];

  if (!coupon) {
    return { isValid: false, message: `Coupon code '${normalizedCode}' is invalid or has expired.` };
  }

  if (cartSubtotal < coupon.minOrder) {
    return { 
      isValid: false, 
      message: `Code '${normalizedCode}' requires a minimum order of $${coupon.minOrder.toFixed(2)}. Your subtotal is $${cartSubtotal.toFixed(2)}.` 
    };
  }

  return { 
    isValid: true, 
    coupon: {
      code: normalizedCode,
      discountPercent: coupon.discountPercent,
      description: coupon.description
    },
    message: `Coupon '${normalizedCode}' applied! You saved ${coupon.discountPercent}%.`
  };
}

// VALIDATION 5: Quantity & Inventory Stock Validation
function validateQuantity(desiredQty, availableStock) {
  const parsedQty = parseInt(desiredQty, 10);
  if (isNaN(parsedQty) || parsedQty <= 0) {
    return { isValid: false, message: "Quantity must be at least 1 item." };
  }
  if (parsedQty > availableStock) {
    return { 
      isValid: false, 
      message: `Only ${availableStock} units remaining in stock. Please reduce your quantity.` 
    };
  }
  if (parsedQty > 10) {
    return { isValid: false, message: "Maximum order limit is 10 units per customer." };
  }
  return { isValid: true, quantity: parsedQty, message: "Quantity is valid." };
}

/**
 * Delivery Date Calculator
 * Calculates estimated delivery dates dynamically (Standard: 3-5 days; Express: 1-2 days)
 */
function getEstimatedDeliveryDates() {
  const now = new Date();
  
  // Standard Delivery: 3 to 5 business days
  const stdStart = new Date(now);
  stdStart.setDate(now.getDate() + 3);
  const stdEnd = new Date(now);
  stdEnd.setDate(now.getDate() + 5);

  // Express Delivery: 1 to 2 business days
  const expEnd = new Date(now);
  expEnd.setDate(now.getDate() + 2);

  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return {
    standard: `${stdStart.toLocaleDateString('en-US', options)} - ${stdEnd.toLocaleDateString('en-US', options)}`,
    express: `${expEnd.toLocaleDateString('en-US', options)}`
  };
}

// Render Products Grid
function renderProducts(items) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #64748b;">
      <h3>No t-shirts match this filter.</h3>
    </div>`;
    return;
  }

  grid.innerHTML = items.map(product => `
    <div class="product-card" data-id="${product.id}">
      <span class="discount-tag">${product.discountPercent}% OFF</span>
      <span class="stock-tag">${product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}</span>
      
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" alt="${product.title}" loading="lazy">
      </div>

      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.title}</h3>
        
        <div class="product-spec-snippet">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <strong>${product.rating}</strong> (${product.reviewsCount} reviews)
        </div>

        <p class="spec-text" style="font-size: 0.85rem; margin-bottom: 12px; color: #64748b;">
          ${product.material.substring(0, 75)}...
        </p>

        <div class="price-container">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
        </div>

        <div class="card-actions">
          <button class="btn-outline view-details-btn" onclick="openProductModal('${product.id}')">View Details</button>
          <button class="btn-primary" onclick="quickAddToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Open Product Modal With Full Material, Manufacturing, Size, and Delivery Info
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-detail-modal");
  const dates = getEstimatedDeliveryDates();

  document.getElementById("modal-title").textContent = product.title;
  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-price").textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("modal-orig-price").textContent = `$${product.originalPrice.toFixed(2)}`;
  document.getElementById("modal-discount").textContent = `${product.discountPercent}% OFF`;
  document.getElementById("modal-category").textContent = product.category;
  
  // Manufacturing and Material Specifications
  document.getElementById("modal-material").textContent = product.material;
  document.getElementById("modal-manufacture").textContent = product.manufacture;
  document.getElementById("modal-fit").textContent = product.fit;
  document.getElementById("modal-care").textContent = product.care;

  // Set default delivery text
  document.getElementById("modal-delivery-dates").innerHTML = `
    Standard Delivery: <strong>${dates.standard}</strong> (Free on orders over $50)<br>
    Express Dispatch: <strong>${dates.express}</strong> (Order within 3 hrs)
  `;

  // Bind modal Add-To-Cart button
  const addBtn = document.getElementById("modal-add-to-cart-btn");
  addBtn.onclick = () => {
    addToCart(product.id, selectedSize, 1);
    closeProductModal();
  };

  modal.classList.add("active");
}

function closeProductModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) modal.classList.remove("active");
}

// Render Size Chart
function renderSizeChart() {
  const tbody = document.getElementById("size-chart-tbody");
  if (!tbody) return;

  tbody.innerHTML = SIZE_CHART.map(row => `
    <tr>
      <td><strong>${row.size}</strong></td>
      <td>${row.chestIn}</td>
      <td>${row.lengthIn}</td>
      <td>${row.shoulderIn}</td>
      <td>${row.chestCm}</td>
      <td>${row.lengthCm}</td>
    </tr>
  `).join("");
}

function openSizeChartModal() {
  const modal = document.getElementById("size-chart-modal");
  if (modal) modal.classList.add("active");
}

function closeSizeChartModal() {
  const modal = document.getElementById("size-chart-modal");
  if (modal) modal.classList.remove("active");
}

// Delivery Pincode Checker (Validation 3 in action)
function checkDeliveryPincode() {
  const input = document.getElementById("pincode-input");
  const resultDiv = document.getElementById("pincode-result");
  if (!input || !resultDiv) return;

  const validation = validatePincode(input.value);

  if (!validation.isValid) {
    resultDiv.className = "delivery-result error";
    resultDiv.textContent = `❌ ${validation.message}`;
    return;
  }

  const dates = getEstimatedDeliveryDates();
  resultDiv.className = "delivery-result success";
  resultDiv.innerHTML = `
    ✅ Delivery available to <strong>${input.value}</strong>!<br>
    📦 Estimated Arrival: <strong>${dates.standard}</strong> (Standard) or <strong>${dates.express}</strong> (Express Priority).
  `;
}

// Default delivery text on page load
function calculateDefaultDeliveryEstimate() {
  const dates = getEstimatedDeliveryDates();
  const banner = document.getElementById("estimated-delivery-banner");
  if (banner) {
    banner.innerHTML = `⚡ Order today for estimated delivery between <strong>${dates.standard}</strong>`;
  }
}

// Cart Operations
function quickAddToCart(productId) {
  addToCart(productId, "M", 1);
}

function addToCart(productId, size = "M", quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Validation 5: Check quantity limits & stock
  const qtyValidation = validateQuantity(quantity, product.stock);
  if (!qtyValidation.isValid) {
    showToast(qtyValidation.message, "error");
    return;
  }

  const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingItemIndex > -1) {
    const newQty = cart[existingItemIndex].quantity + quantity;
    const recheck = validateQuantity(newQty, product.stock);
    if (!recheck.isValid) {
      showToast(recheck.message, "error");
      return;
    }
    cart[existingItemIndex].quantity = newQty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity,
      stock: product.stock
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added "${product.title}" (${size}) to your bag!`);
}

function updateCartQuantity(index, delta) {
  if (!cart[index]) return;
  const newQty = cart[index].quantity + delta;

  if (newQty <= 0) {
    removeFromCart(index);
    return;
  }

  const validation = validateQuantity(newQty, cart[index].stock);
  if (!validation.isValid) {
    showToast(validation.message, "error");
    return;
  }

  cart[index].quantity = newQty;
  saveCart();
  renderCartDrawer();
  updateCartBadge();
}

function removeFromCart(index) {
  if (cart[index]) {
    const itemTitle = cart[index].title;
    cart.splice(index, 1);
    saveCart();
    renderCartDrawer();
    updateCartBadge();
    showToast(`Removed "${itemTitle}" from cart.`);
  }
}

function saveCart() {
  localStorage.setItem("tshirt_store_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (!badge) return;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

// Render Cart Drawer & Calculations with Discounts
function renderCartDrawer() {
  const cartBody = document.getElementById("cart-items-body");
  const subtotalElem = document.getElementById("cart-subtotal");
  const discountElem = document.getElementById("cart-discount-row");
  const discountAmountElem = document.getElementById("cart-discount-amount");
  const totalElem = document.getElementById("cart-final-total");
  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #94a3b8;">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 12px; display: block;">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        <p style="font-weight: 600;">Your shopping cart is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Discover our organic and heavyweight cotton essentials.</p>
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = "$0.00";
    if (discountElem) discountElem.style.display = "none";
    if (totalElem) totalElem.textContent = "$0.00";
    appliedDiscount = null;
    return;
  }

  // Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate Promo Discount
  let discountAmount = 0;
  if (appliedDiscount) {
    discountAmount = (subtotal * appliedDiscount.percent) / 100;
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  cartBody.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">Size: <strong>${item.size}</strong> | $${item.price.toFixed(2)} each</div>
        
        <div class="cart-qty-row">
          <div class="qty-control">
            <button onclick="updateCartQuantity(${idx}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateCartQuantity(${idx}, 1)">+</button>
          </div>
          <span style="font-weight: 700; color: var(--primary);">$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="cart-remove-btn" onclick="removeFromCart(${idx})">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalElem) subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  
  if (appliedDiscount && discountElem && discountAmountElem) {
    discountElem.style.display = "flex";
    discountAmountElem.textContent = `-$${discountAmount.toFixed(2)} (${appliedDiscount.code})`;
  } else if (discountElem) {
    discountElem.style.display = "none";
  }

  if (totalElem) totalElem.textContent = `$${finalTotal.toFixed(2)}`;
}

// Apply Promo Code (Validation 4 in action)
function applyCouponCode() {
  const input = document.getElementById("coupon-input");
  const messageDiv = document.getElementById("coupon-message");
  if (!input) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    showToast("Add items to your cart before applying a coupon.", "error");
    return;
  }

  // Run Validation 4
  const validation = validatePromoCode(input.value, subtotal);

  if (!validation.isValid) {
    if (messageDiv) {
      messageDiv.style.color = "var(--danger)";
      messageDiv.textContent = `❌ ${validation.message}`;
    }
    showToast(validation.message, "error");
    return;
  }

  appliedDiscount = {
    code: validation.coupon.code,
    percent: validation.coupon.discountPercent
  };

  if (messageDiv) {
    messageDiv.style.color = "var(--success)";
    messageDiv.textContent = `✅ ${validation.message}`;
  }

  renderCartDrawer();
  showToast(`Coupon ${validation.coupon.code} applied successfully!`);
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-backdrop");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("active");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-backdrop");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
  }
}

// Toast Notification Utility
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.style.backgroundColor = type === "error" ? "var(--danger)" : "var(--primary)";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Event Listeners Setup
function setupEventListeners() {
  // Category Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");

      if (category === "All") {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderProducts(filtered);
      }
    });
  });

  // Size Selector in Modal
  const sizeButtons = document.querySelectorAll(".size-option-btn");
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.getAttribute("data-size");
    });
  });
}

// Client Side User Status Check
function checkClientAuth() {
  const user = localStorage.getItem("tshirt_client_user");
  const authLink = document.getElementById("nav-auth-link");
  if (authLink && user) {
    try {
      const parsed = JSON.parse(user);
      authLink.textContent = `Hi, ${parsed.name.split(" ")[0]}`;
      authLink.href = "#";
      authLink.title = "Click to log out";
      authLink.onclick = (e) => {
        e.preventDefault();
        if (confirm("Do you want to log out of your account?")) {
          localStorage.removeItem("tshirt_client_user");
          window.location.reload();
        }
      };
    } catch (e) {}
  }
}

// Boot application
window.addEventListener("DOMContentLoaded", () => {
  initStore();
  checkClientAuth();
});
