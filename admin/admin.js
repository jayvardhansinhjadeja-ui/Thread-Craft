/**
 * THREAD & CRAFT CO. - ADMIN PORTAL SCRIPT
 * Handles product management, inventory tracking, dynamic metrics,
 * synchronized localStorage with Client Store, and strict form validation.
 */

// Fallback Default 7 Products (Matches Client Catalog)
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

let adminProducts = [];
let editingProductId = null;

// Ensure Admin Authentication Check
function checkAdminAuth() {
  const adminUser = localStorage.getItem("tshirt_admin_user");
  if (!adminUser) {
    alert("Unauthorized access. Please log into the Admin portal.");
    window.location.href = "login.html";
    return false;
  }
  return true;
}

// Log out admin
function handleAdminLogout() {
  if (confirm("Are you sure you want to log out of the Admin Dashboard?")) {
    localStorage.removeItem("tshirt_admin_user");
    window.location.href = "login.html";
  }
}

// Load products from localStorage or fallback
function loadAdminProducts() {
  const saved = localStorage.getItem("tshirt_store_products");
  if (saved) {
    try {
      adminProducts = JSON.parse(saved);
    } catch (e) {
      adminProducts = DEFAULT_PRODUCTS;
    }
  } else {
    adminProducts = DEFAULT_PRODUCTS;
    saveProducts();
  }
  renderTable(adminProducts);
  updateMetrics();
}

function saveProducts() {
  localStorage.setItem("tshirt_store_products", JSON.stringify(adminProducts));
}

// Update Top Metric Cards
function updateMetrics() {
  const totalElem = document.getElementById("metric-total");
  const inStockElem = document.getElementById("metric-in-stock");
  const lowStockElem = document.getElementById("metric-low-stock");
  const valueElem = document.getElementById("metric-value");

  const total = adminProducts.length;
  const inStock = adminProducts.filter(p => p.stock > 0).length;
  const lowStock = adminProducts.filter(p => p.stock > 0 && p.stock < 25).length;
  const inventoryValue = adminProducts.reduce((sum, p) => sum + (p.price * p.stock), 0);

  if (totalElem) totalElem.textContent = total;
  if (inStockElem) inStockElem.textContent = inStock;
  if (lowStockElem) lowStockElem.textContent = lowStock;
  if (valueElem) valueElem.textContent = `$${inventoryValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Render Table
function renderTable(list) {
  const tbody = document.getElementById("products-table-body");
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 40px; color: #64748b;">No products found.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(item => {
    let stockBadge = `<span class="badge-tag badge-in-stock">${item.stock} in stock</span>`;
    if (item.stock === 0) {
      stockBadge = `<span class="badge-tag badge-out-of-stock">Out of stock</span>`;
    } else if (item.stock < 25) {
      stockBadge = `<span class="badge-tag badge-low-stock">Low: ${item.stock}</span>`;
    }

    return `
      <tr>
        <td>
          <div class="table-product-cell">
            <img src="${item.image}" alt="${item.title}" class="table-product-thumb">
            <div>
              <strong>${item.title}</strong>
              <div style="font-size: 0.78rem; color: #64748b;">ID: ${item.id}</div>
            </div>
          </div>
        </td>
        <td><span class="badge-tag" style="background: #f1f5f9; color: #475569;">${item.category}</span></td>
        <td><strong>$${item.price.toFixed(2)}</strong> <span style="text-decoration: line-through; color: #94a3b8; font-size: 0.8rem;">$${item.originalPrice.toFixed(2)}</span></td>
        <td><span style="color: #dc2626; font-weight: 700;">-${item.discountPercent}%</span></td>
        <td>${stockBadge}</td>
        <td style="max-width: 250px; font-size: 0.8rem; color: #64748b; line-height: 1.4;">
          <strong>Fabric:</strong> ${item.material.substring(0, 45)}...<br>
          <strong>Origin:</strong> ${item.manufacture.substring(0, 45)}...
        </td>
        <td>
          <div class="action-buttons">
            <button class="btn-sm-action" onclick="openEditProductModal('${item.id}')">Edit</button>
            <button class="btn-sm-action btn-sm-delete" onclick="deleteProduct('${item.id}')">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Search Filter
function filterTable() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filtered = adminProducts.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) ||
    p.material.toLowerCase().includes(query)
  );
  renderTable(filtered);
}

/**
 * =========================================================================
 * JAVASCRIPT VALIDATION: Product Creation & Modification Validation
 * Validates:
 * - Title length >= 3 chars
 * - Category must be non-empty
 * - Price must be a valid positive float > 0
 * - Original Price must be >= Price
 * - Stock must be an integer >= 0
 * - Material text >= 15 characters
 * - Manufacturing text >= 15 characters
 * - Image URL must be valid format
 * =========================================================================
 */
function validateProductForm(data) {
  const errors = {};

  // Title validation
  if (!data.title || data.title.trim().length < 3) {
    errors.title = "Product title must be at least 3 characters long.";
  }

  // Category validation
  if (!data.category || data.category.trim() === "") {
    errors.category = "Please select a valid t-shirt category.";
  }

  // Price validation
  const priceNum = parseFloat(data.price);
  if (isNaN(priceNum) || priceNum <= 0) {
    errors.price = "Sale price must be a valid number greater than $0.00.";
  }

  // Original Price validation (for discount calculation)
  const origPriceNum = parseFloat(data.originalPrice);
  if (isNaN(origPriceNum) || origPriceNum < priceNum) {
    errors.originalPrice = "Original retail price must be greater than or equal to the sale price.";
  }

  // Stock inventory validation
  const stockNum = parseInt(data.stock, 10);
  if (isNaN(stockNum) || stockNum < 0 || !Number.isInteger(Number(data.stock))) {
    errors.stock = "Stock must be a whole non-negative integer (0 or more).";
  }

  // Material details validation
  if (!data.material || data.material.trim().length < 15) {
    errors.material = "Please specify fabric composition and GSM weight (minimum 15 characters).";
  }

  // Manufacture details validation
  if (!data.manufacture || data.manufacture.trim().length < 15) {
    errors.manufacture = "Please provide manufacturing, dye, or origin details (minimum 15 characters).";
  }

  // Image URL validation
  if (!data.image || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)(\?.*)?$/i.test(data.image.trim()) && !data.image.startsWith("https://images.unsplash.com")) {
    errors.image = "Please provide a valid web image URL (HTTP/HTTPS).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}

// Modal Handlers
function openAddProductModal() {
  editingProductId = null;
  document.getElementById("modal-form-title").textContent = "Add New T-Shirt Product";
  document.getElementById("product-form").reset();
  clearFieldErrors();
  document.getElementById("product-modal").classList.add("active");
}

function openEditProductModal(productId) {
  const product = adminProducts.find(p => p.id === productId);
  if (!product) return;

  editingProductId = productId;
  document.getElementById("modal-form-title").textContent = `Edit T-Shirt (${product.title})`;
  clearFieldErrors();

  document.getElementById("field-title").value = product.title;
  document.getElementById("field-category").value = product.category;
  document.getElementById("field-price").value = product.price;
  document.getElementById("field-originalPrice").value = product.originalPrice;
  document.getElementById("field-stock").value = product.stock;
  document.getElementById("field-image").value = product.image;
  document.getElementById("field-material").value = product.material;
  document.getElementById("field-manufacture").value = product.manufacture;
  document.getElementById("field-fit").value = product.fit;
  document.getElementById("field-care").value = product.care;

  document.getElementById("product-modal").classList.add("active");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("active");
  editingProductId = null;
}

function clearFieldErrors() {
  const errorElements = document.querySelectorAll(".field-error");
  errorElements.forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}

function displayFieldError(fieldId, errorText) {
  const el = document.getElementById(`error-${fieldId}`);
  if (el) {
    el.textContent = errorText;
    el.style.display = "block";
  }
}

// Save or Update Product
function handleProductFormSubmit(e) {
  e.preventDefault();
  clearFieldErrors();

  const formData = {
    title: document.getElementById("field-title").value,
    category: document.getElementById("field-category").value,
    price: document.getElementById("field-price").value,
    originalPrice: document.getElementById("field-originalPrice").value,
    stock: document.getElementById("field-stock").value,
    image: document.getElementById("field-image").value,
    material: document.getElementById("field-material").value,
    manufacture: document.getElementById("field-manufacture").value,
    fit: document.getElementById("field-fit").value || "Classic Regular Fit",
    care: document.getElementById("field-care").value || "Machine wash cold, line dry."
  };

  // Run JavaScript Validation
  const validation = validateProductForm(formData);

  if (!validation.isValid) {
    for (const [field, message] of Object.entries(validation.errors)) {
      displayFieldError(field, message);
    }
    return;
  }

  // Calculate discount percent dynamically
  const price = parseFloat(formData.price);
  const origPrice = parseFloat(formData.originalPrice);
  const discountPercent = Math.round(((origPrice - price) / origPrice) * 100);

  if (editingProductId) {
    // Update existing product
    const index = adminProducts.findIndex(p => p.id === editingProductId);
    if (index > -1) {
      adminProducts[index] = {
        ...adminProducts[index],
        title: formData.title.trim(),
        category: formData.category,
        price: price,
        originalPrice: origPrice,
        discountPercent: discountPercent,
        stock: parseInt(formData.stock, 10),
        image: formData.image.trim(),
        material: formData.material.trim(),
        manufacture: formData.manufacture.trim(),
        fit: formData.fit.trim(),
        care: formData.care.trim()
      };
      alert(`Product "${formData.title}" updated successfully!`);
    }
  } else {
    // Create new product
    const newProduct = {
      id: `tee-${Date.now().toString().slice(-4)}`,
      title: formData.title.trim(),
      category: formData.category,
      price: price,
      originalPrice: origPrice,
      discountPercent: discountPercent,
      rating: 5.0,
      reviewsCount: 1,
      stock: parseInt(formData.stock, 10),
      image: formData.image.trim(),
      material: formData.material.trim(),
      manufacture: formData.manufacture.trim(),
      fit: formData.fit.trim(),
      care: formData.care.trim(),
      colors: ["Standard"]
    };
    adminProducts.unshift(newProduct);
    alert(`New product "${formData.title}" created and published to client store!`);
  }

  saveProducts();
  renderTable(adminProducts);
  updateMetrics();
  closeProductModal();
}

// Delete Product
function deleteProduct(productId) {
  const item = adminProducts.find(p => p.id === productId);
  if (!item) return;

  if (confirm(`Are you sure you want to permanently delete "${item.title}"?`)) {
    adminProducts = adminProducts.filter(p => p.id !== productId);
    saveProducts();
    renderTable(adminProducts);
    updateMetrics();
  }
}

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  if (checkAdminAuth()) {
    loadAdminProducts();
  }
});
