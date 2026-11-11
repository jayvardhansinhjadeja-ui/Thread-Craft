# Thread & Craft Co. - Responsive E-Commerce T-Shirt Platform

A complete, responsive e-commerce web application for selling premium, ethically manufactured t-shirts. Built with cleanly separated **Client-Side** and **Admin-Side** codebases, featuring 7 detailed products with material/manufacturing specs, interactive size chart, dynamic delivery date estimation, promo discounts, and robust JavaScript validations.

---

## 📁 Project Structure

```text
tshirt-ecommerce/
│
├── client/                     # CLIENT SIDE APPLICATION
│   ├── index.html              # Main store: 7 products, size chart modal, delivery calculator, cart drawer
│   ├── login.html              # Customer login & registration portal with real-time validations
│   ├── style.css               # Responsive store styling (grid, modals, animations, drawer)
│   └── app.js                  # Storefront logic, cart state, discounts, delivery dates, validations
│
├── admin/                      # ADMIN SIDE APPLICATION
│   ├── index.html              # Admin dashboard: metrics, search, inventory table, add/edit modal
│   ├── login.html              # Admin authentication portal with credentials verification
│   ├── admin.css               # Dashboard styling (dark sidebar, stats cards, tables, modals)
│   └── admin.js                # Inventory management, form validation, sync with client store
│
└── README.md                   # Documentation, setup guide, and 5 JS validations explanation
```

---

## 👕 7 Included T-Shirt Products

1. **Classic Heavyweight Organic Crewneck**
   - *Material:* 100% GOTS-Certified Organic Combed Cotton (240 GSM heavy jersey knit).
   - *Manufacture:* Ethically knit, cut, and sewn in Tirupur, India in a solar-powered Fair Trade Certified facility. Pre-shrunk with sustainable enzymatic biowashing and dyed using zero-discharge OEKO-TEX Standard 100 reactive dyes.
   - *Pricing:* \$29.99 (Retail: \$39.99 - **25% OFF**)

2. **Vintage Acid-Wash Streetwear Tee**
   - *Material:* 100% Ring-Spun Cotton (220 GSM single jersey with custom mineral acid-wash).
   - *Manufacture:* Hand-treated and stone-washed in Barcelos, Portugal. Artisan wash produces unique fades and broken-in drape.
   - *Pricing:* \$34.99 (Retail: \$49.99 - **30% OFF**)

3. **Bamboo Performance Moisture-Wicking Tee**
   - *Material:* 70% Organic Bamboo Viscose, 25% Recycled Poly, 5% Spandex (180 GSM).
   - *Manufacture:* Closed-loop zero-waste textile mill in Da Nang, Vietnam. UPF 50+ UV protection, naturally antibacterial and thermo-regulating.
   - *Pricing:* \$27.99 (Retail: \$35.00 - **20% OFF**)

4. **French Terry Loopback Boxy Tee**
   - *Material:* 100% Unbrushed French Terry Loopback Cotton (280 GSM premium heavyweight).
   - *Manufacture:* Milled and crafted in Wakayama, Japan using vintage loopwheel knitting machines. High loop density prevents deformation.
   - *Pricing:* \$39.99 (Retail: \$55.00 - **27% OFF**)

5. **Supima Cotton Textured Slub V-Neck**
   - *Material:* 100% American Grown Supima Extra-Long Staple Cotton (160 GSM slub yarn).
   - *Manufacture:* Grown in California, USA and spun using uneven slub tensioning. Garment-dyed and enzyme washed in Los Angeles.
   - *Pricing:* \$24.99 (Retail: \$32.00 - **22% OFF**)

6. **Repreve Recycled Active Training Tee**
   - *Material:* 88% REPREVE® Recycled Ocean Plastic Polyester, 12% Spandex (150 GSM).
   - *Manufacture:* Responsibly woven in Colombo, Sri Lanka under strict WRAP Gold social standards. Diverts ~8 plastic bottles per shirt.
   - *Pricing:* \$22.99 (Retail: \$29.99 - **23% OFF**)

7. **Waffle Knit Thermal Long-Sleeve Tee**
   - *Material:* 96% Aegean Turkish Cotton, 4% Elastane Honeycomb Waffle Knit (250 GSM).
   - *Manufacture:* Micro-thermal waffle knitting woven in Izmir, Turkey. Traps insulating air pockets; finished with tortoiseshell buttons.
   - *Pricing:* \$36.99 (Retail: \$48.00 - **23% OFF**)

---

## 🔒 Login Credentials

- **Client Login:** Any registered user or test email (e.g. `customer@example.com` / `Secret@123`).
- **Admin Portal Login:**
  - **Email:** `admin@tees.com`
  - **Password:** `Admin@123`
  - *(Includes a 1-click "Quick Autofill" button on the admin login page)*

---

## 🔍 The 5 JavaScript Validations

Here are the 5 JavaScript validations implemented and extracted directly from the codebase:

### 1. Email Format RFC 5322 Validation (`validateEmail`)
```javascript
// Location: client/app.js & client/login.html & admin/login.html
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
```

### 2. Strict Password Strength Validation (`validatePassword`)
```javascript
// Location: client/app.js & client/login.html
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
```

### 3. Postal / Pincode Delivery Check Validation (`validatePincode`)
```javascript
// Location: client/app.js
function validatePincode(pincode) {
  if (!pincode) {
    return { isValid: false, message: "Please enter a delivery pincode or zip code." };
  }
  const cleanPincode = pincode.toString().trim();
  // Validates standard 6-digit postal code (first digit 1-9)
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!pincodeRegex.test(cleanPincode)) {
    return { isValid: false, message: "Invalid postal code. Must be a 6-digit numeric code." };
  }
  return { isValid: true, message: "Postal code verified for delivery." };
}
```

### 4. Admin Product Creation & Inventory Form Validation (`validateProductForm`)
```javascript
// Location: admin/admin.js
function validateProductForm(data) {
  const errors = {};

  if (!data.title || data.title.trim().length < 3) {
    errors.title = "Product title must be at least 3 characters long.";
  }
  if (!data.category || data.category.trim() === "") {
    errors.category = "Please select a valid t-shirt category.";
  }
  const priceNum = parseFloat(data.price);
  if (isNaN(priceNum) || priceNum <= 0) {
    errors.price = "Sale price must be a valid number greater than $0.00.";
  }
  const origPriceNum = parseFloat(data.originalPrice);
  if (isNaN(origPriceNum) || origPriceNum < priceNum) {
    errors.originalPrice = "Original retail price must be greater than or equal to the sale price.";
  }
  const stockNum = parseInt(data.stock, 10);
  if (isNaN(stockNum) || stockNum < 0 || !Number.isInteger(Number(data.stock))) {
    errors.stock = "Stock must be a whole non-negative integer (0 or more).";
  }
  if (!data.material || data.material.trim().length < 15) {
    errors.material = "Please specify fabric composition and GSM weight (minimum 15 characters).";
  }
  if (!data.manufacture || data.manufacture.trim().length < 15) {
    errors.manufacture = "Please provide manufacturing, dye, or origin details (minimum 15 characters).";
  }
  if (!data.image || !/^https?:\/\/.+/i.test(data.image.trim())) {
    errors.image = "Please provide a valid web image URL (HTTP/HTTPS).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}
```

### 5. Promotional Coupon Code & Minimum Order Validation (`validatePromoCode`)
```javascript
// Location: client/app.js
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
```
