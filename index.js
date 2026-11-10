const PRODUCTS = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra 256GB Titanium Gray",
    category: "electronics",
    sub: "phones",
    price: 72999,
    originalPrice: 89999,
    discount: 19,
    rating: 4.5,
    reviews: 12847,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    category: "electronics",
    sub: "phones",
    price: 134900,
    originalPrice: 159900,
    discount: 16,
    rating: 4.7,
    reviews: 8432,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "electronics",
    sub: "audio",
    price: 22990,
    originalPrice: 34990,
    discount: 34,
    rating: 4.6,
    reviews: 15623,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 4,
    name: "MacBook Air M3 Chip 8GB 256GB SSD Midnight",
    category: "electronics",
    sub: "laptops",
    price: 99990,
    originalPrice: 114900,
    discount: 13,
    rating: 4.8,
    reviews: 5234,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 5,
    name: 'LG 55" C3 OLED 4K Smart TV Dolby Vision',
    category: "electronics",
    sub: "tvs",
    price: 84990,
    originalPrice: 95990,
    discount: 43,
    rating: 4.7,
    reviews: 3891,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE installation",
  },
  {
    id: 6,
    name: "Canon EOS R50 Mirrorless Camera 18-45mm",
    category: "electronics",
    sub: "cameras",
    price: 62990,
    originalPrice: 74990,
    discount: 16,
    rating: 4.4,
    reviews: 2103,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 7,
    name: "JBL Flip 6 Portable Bluetooth Speaker Black",
    category: "electronics",
    sub: "audio",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.5,
    reviews: 22341,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 8,
    name: "Apple Watch Series 9 GPS 45mm Midnight",
    category: "electronics",
    sub: "wearables",
    price: 37900,
    originalPrice: 44900,
    discount: 16,
    rating: 4.6,
    reviews: 6782,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 9,
    name: "Samsung 1TB T7 Portable SSD USB 3.2",
    category: "electronics",
    sub: "storage",
    price: 6499,
    originalPrice: 10999,
    discount: 41,
    rating: 4.7,
    reviews: 31204,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 10,
    name: "Logitech MX Master 3S Wireless Mouse",
    category: "electronics",
    sub: "accessories",
    price: 7995,
    originalPrice: 9950,
    discount: 20,
    rating: 4.6,
    reviews: 8921,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 11,
    name: "boAt Airdopes 141 TWS Earbuds 42H Playtime",
    category: "electronics",
    sub: "audio",
    price: 999,
    originalPrice: 4490,
    discount: 78,
    rating: 4.1,
    reviews: 456123,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 3 days",
  },
  {
    id: 12,
    name: "HP Pavilion 15 i5 12th Gen 16GB 512GB SSD",
    category: "electronics",
    sub: "laptops",
    price: 54990,
    originalPrice: 74356,
    discount: 26,
    rating: 4.3,
    reviews: 4521,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 31,
    name: "OnePlus 12 5G 256GB Flowy Emerald",
    category: "electronics",
    sub: "phones",
    price: 54999,
    originalPrice: 69999,
    discount: 21,
    rating: 4.4,
    reviews: 6234,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop&q=80",
    badge: "new",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 34,
    name: "Fire TV Stick 4K Max 2nd Gen",
    category: "electronics",
    sub: "accessories",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    rating: 4.4,
    reviews: 89234,
    image:
      "https://images.unsplash.com/photo-1600267185393-e158a98703de?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 13,
    name: "Levi's Men 511 Slim Fit Dark Blue Jeans",
    category: "fashion",
    sub: "jeans",
    price: 1799,
    originalPrice: 3999,
    discount: 55,
    rating: 4.3,
    reviews: 34521,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 14,
    name: "Allen Solly Men's Slim Fit Formal Shirt White",
    category: "fashion",
    sub: "shirts",
    price: 899,
    originalPrice: 2199,
    discount: 59,
    rating: 4.2,
    reviews: 12304,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 15,
    name: "Nike Air Max 270 Running Shoes Black/White",
    category: "fashion",
    sub: "shoes",
    price: 7995,
    originalPrice: 13995,
    discount: 43,
    rating: 4.5,
    reviews: 8932,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 16,
    name: "Women's Floral Print A-Line Knee Length Dress",
    category: "fashion",
    sub: "dresses",
    price: 649,
    originalPrice: 1999,
    discount: 68,
    rating: 4.1,
    reviews: 21345,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 3 days",
  },
  {
    id: 17,
    name: "Ray-Ban Aviator Classic Gold Frame Green",
    category: "fashion",
    sub: "accessories",
    price: 5490,
    originalPrice: 8990,
    discount: 39,
    rating: 4.6,
    reviews: 15234,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 18,
    name: "Puma Men's Polo T-Shirt Navy Blue",
    category: "fashion",
    sub: "tshirts",
    price: 549,
    originalPrice: 1499,
    discount: 63,
    rating: 4.2,
    reviews: 56789,
    image:
      "https://images.unsplash.com/photo-1625910513413-5fc421e0e2f0?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 19,
    name: "Women's Embroidered Silk Saree Blouse Piece",
    category: "fashion",
    sub: "sarees",
    price: 1299,
    originalPrice: 4999,
    discount: 74,
    rating: 4.3,
    reviews: 9876,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 4 days",
  },
  {
    id: 20,
    name: "Adidas Ultraboost Light Running Core Black",
    category: "fashion",
    sub: "shoes",
    price: 9999,
    originalPrice: 16999,
    discount: 41,
    rating: 4.7,
    reviews: 6782,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 21,
    name: "Men's Slim Fit Cotton Casual Blazer Navy",
    category: "fashion",
    sub: "blazers",
    price: 1899,
    originalPrice: 4999,
    discount: 62,
    rating: 4.1,
    reviews: 7654,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 22,
    name: "Women's Anarkali Kurta Set with Dupatta",
    category: "fashion",
    sub: "kurtas",
    price: 899,
    originalPrice: 2999,
    discount: 70,
    rating: 4.2,
    reviews: 15432,
    image:
      "https://images.unsplash.com/photo-1583391733981-8b530b07c18f?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 3 days",
  },
  {
    id: 23,
    name: "Tommy Hilfiger Men's Leather Belt Brown",
    category: "fashion",
    sub: "accessories",
    price: 1499,
    originalPrice: 3499,
    discount: 57,
    rating: 4.4,
    reviews: 5432,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 24,
    name: "Women's Wedge Heel Sandals Beige",
    category: "fashion",
    sub: "shoes",
    price: 799,
    originalPrice: 2499,
    discount: 68,
    rating: 4.0,
    reviews: 11234,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 3 days",
  },
  {
    id: 35,
    name: "H&M Women's Denim Jacket Light Blue",
    category: "fashion",
    sub: "jackets",
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.3,
    reviews: 8765,
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery in 2 days",
  },
  {
    id: 36,
    name: "US Polo Men's Casual Sneakers White",
    category: "fashion",
    sub: "shoes",
    price: 1799,
    originalPrice: 3999,
    discount: 55,
    rating: 4.2,
    reviews: 19876,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 39,
    name: "Fossil Women's Rose Gold Analog Watch",
    category: "fashion",
    sub: "accessories",
    price: 7495,
    originalPrice: 12995,
    discount: 42,
    rating: 4.5,
    reviews: 5432,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 25,
    name: "Prestige Iris 750W Mixer Grinder 3 Jars",
    category: "home",
    sub: "kitchen",
    price: 2499,
    originalPrice: 4995,
    discount: 50,
    rating: 4.3,
    reviews: 45678,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 26,
    name: "Wakefit Orthopedic Memory Foam Mattress Queen",
    category: "home",
    sub: "furniture",
    price: 11999,
    originalPrice: 21999,
    discount: 45,
    rating: 4.4,
    reviews: 67890,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery in 3 days",
  },
  {
    id: 27,
    name: "Philips Air Fryer HD9200/90 4.1L Black",
    category: "home",
    sub: "kitchen",
    price: 4999,
    originalPrice: 8995,
    discount: 44,
    rating: 4.5,
    reviews: 23456,
    image:
      "https://images.unsplash.com/photo-1626509653295-0d9a004fb4c0?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 28,
    name: "IKEA KALLAX Shelf Unit White 77x77cm",
    category: "home",
    sub: "furniture",
    price: 5990,
    originalPrice: 7990,
    discount: 25,
    rating: 4.6,
    reviews: 8901,
    image:
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: false,
    delivery: "Delivery in 5-7 days",
  },
  {
    id: 41,
    name: "Prestige PIC 20.0 1600W Induction Cooktop",
    category: "home",
    sub: "kitchen",
    price: 2199,
    originalPrice: 3995,
    discount: 45,
    rating: 4.4,
    reviews: 34567,
    image:
      "https://images.unsplash.com/photo-1556909114-928b80144e4c?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 43,
    name: "Urban Ladder Solid Wood Coffee Table",
    category: "home",
    sub: "furniture",
    price: 7999,
    originalPrice: 14999,
    discount: 47,
    rating: 4.5,
    reviews: 5678,
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "Delivery in 5-7 days",
  },
  {
    id: 44,
    name: "Cello 32-Piece Opalware Dinner Set",
    category: "home",
    sub: "kitchen",
    price: 899,
    originalPrice: 2199,
    discount: 59,
    rating: 4.2,
    reviews: 23456,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 45,
    name: "Godrej Interio 6-Door Wardrobe Walnut",
    category: "home",
    sub: "furniture",
    price: 18999,
    originalPrice: 34999,
    discount: 46,
    rating: 4.3,
    reviews: 3456,
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: false,
    delivery: "Free assembly in Chennai",
  },
  {
    id: 29,
    name: "Atomic Habits by James Clear Hardcover",
    category: "books",
    sub: "self-help",
    price: 349,
    originalPrice: 699,
    discount: 50,
    rating: 4.8,
    reviews: 123456,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 30,
    name: "The Psychology of Money Morgan Housel",
    category: "books",
    sub: "finance",
    price: 249,
    originalPrice: 499,
    discount: 50,
    rating: 4.7,
    reviews: 98765,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 46,
    name: "Rich Dad Poor Dad Robert Kiyosaki",
    category: "books",
    sub: "finance",
    price: 199,
    originalPrice: 499,
    discount: 60,
    rating: 4.6,
    reviews: 234567,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 47,
    name: "Ikigai: The Japanese Secret to Long Life",
    category: "books",
    sub: "self-help",
    price: 299,
    originalPrice: 499,
    discount: 40,
    rating: 4.5,
    reviews: 87654,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=300&fit=crop&q=80",
    badge: null,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 48,
    name: "The Alchemist Paulo Coelho Paperback",
    category: "books",
    sub: "fiction",
    price: 179,
    originalPrice: 350,
    discount: 49,
    rating: 4.7,
    reviews: 156789,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 49,
    name: "Sapiens: A Brief History of Humankind",
    category: "books",
    sub: "non-fiction",
    price: 399,
    originalPrice: 799,
    discount: 50,
    rating: 4.8,
    reviews: 67890,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=300&fit=crop&q=80",
    badge: "best",
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 50,
    name: "Power of Your Subconscious Mind Murphy",
    category: "books",
    sub: "self-help",
    price: 149,
    originalPrice: 299,
    discount: 50,
    rating: 4.4,
    reviews: 45678,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop&q=80",
    badge: "deal",
    prime: false,
    delivery: "FREE delivery in 3 days",
  },
];

const MOCK_ORDERS = [
  {
    id: "SZ-4028195671",
    date: "Jan 15, 2025",
    total: 72999,
    status: "delivered",
    items: [
      { productId: 1, qty: 1 },
      { productId: 11, qty: 1 },
      { productId: 29, qty: 2 },
    ],
  },
  {
    id: "SZ-4035128834",
    date: "Feb 3, 2025",
    total: 24493,
    status: "delivered",
    items: [
      { productId: 13, qty: 1 },
      { productId: 18, qty: 2 },
      { productId: 23, qty: 1 },
    ],
  },
  {
    id: "SZ-4041982207",
    date: "Mar 10, 2025",
    total: 122980,
    status: "shipped",
    items: [
      { productId: 4, qty: 1 },
      { productId: 3, qty: 1 },
    ],
  },
  {
    id: "SZ-4052847610",
    date: "Apr 2, 2025",
    total: 8643,
    status: "processing",
    items: [
      { productId: 16, qty: 1 },
      { productId: 22, qty: 1 },
      { productId: 24, qty: 1 },
    ],
  },
];

// ===== CART =====
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("sz_cart")) || [];
  }
  save() {
    localStorage.setItem("sz_cart", JSON.stringify(this.items));
    this.updateCount();
  }
  add(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const e = this.items.find((i) => i.id === id);
    if (e) e.qty += 1;
    else this.items.push({ id: p.id, qty: 1 });
    this.save();
    return p;
  }
  remove(id) {
    this.items = this.items.filter((i) => i.id !== id);
    this.save();
  }
  updateQty(id, q) {
    const i = this.items.find((x) => x.id === id);
    if (i) {
      i.qty = Math.max(1, q);
      this.save();
    }
  }
  getItems() {
    return this.items
      .map((i) => {
        const p = PRODUCTS.find((x) => x.id === i.id);
        return p ? { ...p, qty: i.qty } : null;
      })
      .filter(Boolean);
  }
  getTotal() {
    return this.getItems().reduce((s, i) => s + i.price * i.qty, 0);
  }
  getOriginalTotal() {
    return this.getItems().reduce((s, i) => s + i.originalPrice * i.qty, 0);
  }
  getSavings() {
    return this.getOriginalTotal() - this.getTotal();
  }
  getCount() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  }
  clear() {
    this.items = [];
    this.save();
  }
  updateCount() {
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = this.getCount();
      el.classList.toggle("show", this.getCount() > 0);
    });
  }
}
const cart = new Cart();

// ===== WISHLIST =====
class Wishlist {
  constructor() {
    this.ids = JSON.parse(localStorage.getItem("sz_wish")) || [];
  }
  save() {
    localStorage.setItem("sz_wish", JSON.stringify(this.ids));
    this.updateCount();
  }
  toggle(id) {
    const i = this.ids.indexOf(id);
    if (i > -1) {
      this.ids.splice(i, 1);
      return false;
    } else {
      this.ids.push(id);
      return true;
    }
  }
  has(id) {
    return this.ids.includes(id);
  }
  getItems() {
    return this.ids
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter(Boolean);
  }
  updateCount() {
    document.querySelectorAll(".wish-ct").forEach((el) => {
      el.textContent = this.ids.length;
      el.style.display = this.ids.length ? "inline" : "none";
    });
  }
}
const wishlist = new Wishlist();

// ===== AUTH =====
function getUser() {
  return JSON.parse(localStorage.getItem("sz_user")) || null;
}
function setUser(u) {
  localStorage.setItem("sz_user", JSON.stringify(u));
  updateAcctUI();
}
function logoutUser() {
  localStorage.removeItem("sz_user");
  closeAuth();
  updateAcctUI();
  showToast("Signed out successfully");
}
function updateAcctUI() {
  const u = getUser(),
    l = document.querySelector(".hdr-link.acct-link");
  if (!l) return;
  if (u) {
    l.querySelector(".hl-sm").textContent = "Hello, " + u.name.split(" ")[0];
    l.querySelector(".hl-bg").innerHTML =
      'Account <i class="fas fa-caret-down" style="font-size:10px"></i>';
  } else {
    l.querySelector(".hl-sm").textContent = "Hello, Sign in";
    l.querySelector(".hl-bg").innerHTML =
      'Account & Lists <i class="fas fa-caret-down" style="font-size:10px"></i>';
  }
}
function toggleAcctDD() {
  const dd = document.querySelector(".acct-dd"),
    u = getUser();
  if (!u) {
    openAuth();
    return;
  }
  if (dd.classList.contains("show")) {
    dd.classList.remove("show");
    return;
  }
  dd.innerHTML = `<div class="dd-user"><div class="dd-avatar">${u.name.charAt(0).toUpperCase()}</div><div><div class="dd-name">${u.name}</div><div class="dd-email">${u.email}</div></div></div><a href="#" onclick="showOrders();return false"><i class="fas fa-box"></i> Your Orders</a><a href="#" onclick="showWishlist();return false"><i class="fas fa-heart"></i> Your Wishlist <span class="wish-ct" style="font-size:11px;background:var(--deal-red);color:#fff;padding:1px 6px;border-radius:10px;margin-left:4px;">${wishlist.ids.length}</span></a><a href="#"><i class="fas fa-map-marker-alt"></i> Your Addresses</a><a href="#"><i class="fas fa-credit-card"></i> Payment Methods</a><a href="#"><i class="fas fa-cog"></i> Settings</a><div class="dd-div"></div><a href="#" class="dd-signout" onclick="logoutUser();return false"><i class="fas fa-sign-out-alt"></i> Sign Out</a>`;
  dd.classList.add("show");
}
document.addEventListener("click", (e) => {
  const dd = document.querySelector(".acct-dd"),
    l = document.querySelector(".hdr-link.acct-link");
  if (dd && l && !l.contains(e.target) && !dd.contains(e.target))
    dd.classList.remove("show");
});

// ===== AUTH MODAL =====
function openAuth() {
  document.getElementById("authOverlay").classList.add("show");
  showStep("email");
}
function closeAuth() {
  document.getElementById("authOverlay").classList.remove("show");
  resetAuth();
}
function resetAuth() {
  document
    .querySelectorAll(".auth-step")
    .forEach((s) => s.classList.remove("active"));
  document.querySelectorAll(".auth-err").forEach((e) => {
    e.classList.remove("show");
    e.textContent = "";
  });
  ["authEmail", "authPass", "suName", "suEmail", "suPass"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  showStep("email");
}
function showStep(step) {
  document
    .querySelectorAll(".auth-step")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("step-" + step).classList.add("active");
}
function authContinue(e) {
  e.preventDefault();
  const email = document.getElementById("authEmail").value.trim(),
    err = document.getElementById("emailErr");
  if (!email) {
    err.textContent = "Enter your email or mobile number";
    err.classList.add("show");
    return;
  }
  err.classList.remove("show");
  document.getElementById("passEmailShow").textContent = email;
  showStep("password");
  document.getElementById("authPass").focus();
}
function authBackToEmail() {
  showStep("email");
}
function switchToSignup() {
  resetAuth();
  showStep("signup");
}
function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById("authEmail").value.trim(),
    pass = document.getElementById("authPass").value,
    err = document.getElementById("passErr");
  if (!pass) {
    err.textContent = "Enter your password";
    err.classList.add("show");
    return;
  }
  err.classList.remove("show");
  const users = JSON.parse(localStorage.getItem("sz_users")) || [];
  let found = users.find((u) => u.email === email && u.password === pass);
  if (!found) {
    found = {
      name: email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      password: pass,
    };
    users.push(found);
    localStorage.setItem("sz_users", JSON.stringify(users));
  }
  setUser(found);
  closeAuth();
  showToast("Welcome back, <strong>" + found.name + "</strong>!");
}
function handleSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("suName").value.trim(),
    email = document.getElementById("suEmail").value.trim(),
    pass = document.getElementById("suPass").value,
    err = document.getElementById("suErr");
  if (!name || !email || !pass) {
    err.textContent = "All fields are required";
    err.classList.add("show");
    return;
  }
  if (pass.length < 6) {
    err.textContent = "Password must be at least 6 characters";
    err.classList.add("show");
    return;
  }
  err.classList.remove("show");
  const users = JSON.parse(localStorage.getItem("sz_users")) || [];
  if (users.find((u) => u.email === email)) {
    err.textContent = "Email already exists. Sign in instead.";
    err.classList.add("show");
    return;
  }
  const user = { name, email, password: pass };
  users.push(user);
  localStorage.setItem("sz_users", JSON.stringify(users));
  setUser(user);
  closeAuth();
  showToast("Account created! Welcome, <strong>" + name + "</strong>!");
}

// ===== ORDERS =====
function showOrders() {
  document.querySelector(".acct-dd")?.classList.remove("show");
  const u = getUser();
  if (!u) {
    openAuth();
    return;
  }
  let ov = document.getElementById("ordersOverlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "ordersOverlay";
    ov.className = "sr-overlay";
    document.body.appendChild(ov);
  }
  const panel = document.createElement("div");
  panel.className = "orders-panel";
  panel.innerHTML = `<div class="sr-hdr"><h3><i class="fas fa-box" style="margin-right:8px;color:var(--deal-red)"></i>Your Orders</h3><button class="sr-close" onclick="document.getElementById('ordersOverlay').classList.remove('show')"><i class="fas fa-times"></i></button></div><div style="padding:16px 20px">${MOCK_ORDERS.map(
    (o, i) => {
      const sc =
        o.status === "delivered"
          ? "oh-delivered"
          : o.status === "shipped"
            ? "oh-shipped"
            : "oh-processing";
      const st = o.status.charAt(0).toUpperCase() + o.status.slice(1);
      return `<div class="order-card" style="animation-delay:${i * 0.1}s"><div class="order-hdr"><div class="oh-left"><div class="oh-item"><strong>ORDER PLACED</strong>${o.date}</div><div class="oh-item"><strong>TOTAL</strong>₹${o.total.toLocaleString()}</div><div class="oh-item"><strong>SHIP TO</strong>Chennai 600001</div><div class="oh-item"><strong>ORDER #</strong>${o.id}</div></div><span class="oh-status ${sc}">${st}</span></div><div class="order-body">${o.items
        .map((it) => {
          const p = PRODUCTS.find((x) => x.id === it.productId);
          if (!p) return "";
          return `<div class="order-prod"><img src="${p.image}" alt="${p.name}"><div class="order-prod-info"><h4>${p.name}</h4><div class="opi-meta">Qty: ${it.qty}${p.prime ? ' | <span class="prime-badge">PRIME</span>' : ""}</div><div class="opi-price">₹${(p.price * it.qty).toLocaleString()} <span style="font-size:12px;color:var(--text-light);text-decoration:line-through;font-weight:400">₹${(p.originalPrice * it.qty).toLocaleString()}</span></div></div></div>`;
        })
        .join(
          "",
        )}</div><div class="order-foot"><button class="pri" onclick="showToast('Tracking your order...')">Track Package</button><button onclick="showToast('Return request submitted')">Return / Replace</button></div></div>`;
    },
  ).join("")}</div>`;
  const old = ov.querySelector(".orders-panel");
  if (old) old.remove();
  ov.appendChild(panel);
  ov.classList.add("show");
  ov.onclick = (e) => {
    if (e.target === ov) ov.classList.remove("show");
  };
}

// ===== WISHLIST PANEL =====
function showWishlist() {
  document.querySelector(".acct-dd")?.classList.remove("show");
  const items = wishlist.getItems();
  let ov = document.getElementById("wishOverlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "wishOverlay";
    ov.className = "sr-overlay";
    document.body.appendChild(ov);
  }
  const panel = document.createElement("div");
  panel.className = "sr-panel";
  if (!items.length) {
    panel.innerHTML = `<div class="sr-hdr"><h3><i class="fas fa-heart" style="margin-right:8px;color:var(--deal-red)"></i>Your Wishlist</h3><button class="sr-close" onclick="document.getElementById('wishOverlay').classList.remove('show')"><i class="fas fa-times"></i></button></div><div class="sr-empty"><i class="far fa-heart"></i><p>Your wishlist is empty</p><p style="font-size:13px;margin-top:8px">Save items you love for later</p></div>`;
  } else {
    panel.innerHTML = `<div class="sr-hdr"><h3><i class="fas fa-heart" style="margin-right:8px;color:var(--deal-red)"></i>Your Wishlist (${items.length})</h3><button class="sr-close" onclick="document.getElementById('wishOverlay').classList.remove('show')"><i class="fas fa-times"></i></button></div><div class="sr-list">${items.map((p) => `<div class="sr-item"><img src="${p.image}" alt="${p.name}"><div class="sr-details"><h4>${p.name}</h4><div class="sr-price">₹${p.price.toLocaleString()}<span>₹${p.originalPrice.toLocaleString()}</span><em>${p.discount}% off</em></div><div style="margin-top:6px;display:flex;gap:8px"><button onclick="closeWishAndCart(${p.id})" style="padding:5px 12px;background:linear-gradient(to bottom,#f7dfa5,#f0c14b);border:1px solid #a88734;border-radius:4px;font-size:12px;font-weight:600;color:var(--text-dark)"><i class="fas fa-cart-plus"></i> Add to Cart</button><button onclick="removeWishItem(${p.id})" style="padding:5px 12px;border:1px solid var(--border);border-radius:4px;font-size:12px;color:var(--danger)"><i class="fas fa-trash"></i></button></div></div></div>`).join("")}</div>`;
  }
  const old = ov.querySelector(".sr-panel");
  if (old) old.remove();
  ov.appendChild(panel);
  ov.classList.add("show");
  ov.onclick = (e) => {
    if (e.target === ov) ov.classList.remove("show");
  };
}
function closeWishAndCart(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  cart.add(id);
  showToast(
    "<strong>" + p.name.substring(0, 35) + "...</strong><br>Added to cart",
  );
}
function removeWishItem(id) {
  wishlist.toggle(id);
  showWishlist();
  showToast("Removed from wishlist", "error");
}

// ===== SEARCH =====
function initSearch() {
  const input = document.querySelector(".search-input"),
    btn = document.querySelector(".search-btn");
  if (!input) return;
  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) return;
    const r = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.sub.includes(q),
    );
    showSR(q, r);
  }
  if (btn) btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) {
        closeSR();
        return;
      }
      showSR(
        q,
        PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.includes(q) ||
            p.sub.includes(q),
        ).slice(0, 8),
      );
    }, 300);
  });
}
function showSR(q, results) {
  let ov = document.getElementById("srOverlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "srOverlay";
    ov.className = "sr-overlay";
    document.body.appendChild(ov);
    ov.addEventListener("click", (e) => {
      if (e.target === ov) closeSR();
    });
  }
  let p = ov.querySelector(".sr-panel");
  if (!p) {
    p = document.createElement("div");
    p.className = "sr-panel";
    ov.appendChild(p);
  }
  if (!results.length) {
    p.innerHTML = `<div class="sr-hdr"><h3>"${q}"</h3><button class="sr-close" onclick="closeSR()"><i class="fas fa-times"></i></button></div><div class="sr-empty"><i class="fas fa-search"></i><p>No results for "<strong>${q}</strong>"</p></div>`;
  } else {
    p.innerHTML = `<div class="sr-hdr"><h3>"${q}" (${results.length})</h3><button class="sr-close" onclick="closeSR()"><i class="fas fa-times"></i></button></div><div class="sr-list">${results.map((x) => `<div class="sr-item" onclick="closeSR();document.querySelector('.search-input').value=''"><img src="${x.image}" alt="${x.name}"><div class="sr-details"><h4>${x.name}</h4><div class="sr-price">₹${x.price.toLocaleString()}<span>₹${x.originalPrice.toLocaleString()}</span><em>${x.discount}% off</em></div></div></div>`).join("")}</div>`;
  }
  ov.classList.add("show");
}
function closeSR() {
  const o = document.getElementById("srOverlay");
  if (o) o.classList.remove("show");
}

// ===== TOAST =====
function showToast(msg, type = "success") {
  let c = document.querySelector(".toast-container");
  if (!c) {
    c = document.createElement("div");
    c.className = "toast-container";
    document.body.appendChild(c);
  }
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i><span class="toast-msg">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
  c.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 400);
  }, 3000);
}

// ===== FLY TO CART =====
function flyToCart(btn) {
  const r = btn.getBoundingClientRect(),
    ci = document.querySelector(".cart-link");
  if (!ci) return;
  const cr = ci.getBoundingClientRect(),
    f = document.createElement("div");
  f.className = "fly-to-cart";
  f.innerHTML = '<i class="fas fa-cart-plus"></i>';
  f.style.left = r.left + r.width / 2 - 20 + "px";
  f.style.top = r.top + "px";
  document.body.appendChild(f);
  const dx = cr.left + cr.width / 2 - (r.left + r.width / 2),
    dy = cr.top + cr.height / 2 - r.top;
  f.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      {
        transform: `translate(${dx * 0.5}px,${dy - 80}px) scale(1.2)`,
        opacity: 0.8,
        offset: 0.4,
      },
      { transform: `translate(${dx}px,${dy}px) scale(.3)`, opacity: 0.3 },
    ],
    { duration: 700, easing: "ease-in-out" },
  );
  setTimeout(() => f.remove(), 700);
}

// ===== RENDER HELPERS =====
function renderStars(r) {
  let h = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(r)) h += '<i class="fas fa-star"></i>';
    else if (i - r < 1) h += '<i class="fas fa-star-half-alt"></i>';
    else h += '<i class="far fa-star"></i>';
  }
  return h;
}

function renderCard(p, idx = 0) {
  const b = p.badge
    ? `<span class="badge badge-${p.badge}">${p.badge === "deal" ? "Deal" : p.badge === "best" ? "Best Seller" : "New"}</span>`
    : "";
  const c = p.discount >= 50 ? '<span class="coupon-badge">COUPON</span>' : "";
  const w = wishlist.has(p.id) ? "active" : "";
  return `<div class="product-card" style="animation-delay:${idx * 0.05}s">${b}${c}<div class="prod-img-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"><button class="prod-wish ${w}" onclick="toggleWish(${p.id},this)"><i class="${w ? "fas" : "far"} fa-heart"></i></button></div><div class="prod-info"><div class="prod-name">${p.name}</div><div class="prod-rating"><span class="stars">${renderStars(p.rating)}</span><span class="rating-ct">${p.reviews.toLocaleString()}</span></div><div class="prod-pricing"><span class="price-now">₹${p.price.toLocaleString()}</span><span class="price-was">₹${p.originalPrice.toLocaleString()}</span><span class="price-disc">${p.discount}% off</span></div>${p.prime ? '<div class="prod-prime"><span class="prime-badge">PRIME</span> Free Delivery</div>' : '<div class="prod-prime">Standard Delivery</div>'}<div class="prod-delivery"><strong>${p.delivery}</strong></div><button class="atc-btn" onclick="addToCart(${p.id},this)"><i class="fas fa-cart-plus"></i> Add to Cart</button></div></div>`;
}

function addToCart(id, btn) {
  const p = cart.add(id);
  if (!p) return;
  flyToCart(btn);
  const o = btn.innerHTML;
  btn.classList.add("added");
  btn.innerHTML = '<i class="fas fa-check"></i> Added!';
  const r = document.createElement("span");
  r.className = "btn-ripple";
  r.style.left = "50%";
  r.style.top = "50%";
  r.style.width = r.style.height = "20px";
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerHTML = o;
  }, 1500);
  showToast(
    "<strong>" + p.name.substring(0, 40) + "...</strong><br>Added to cart",
  );
}

function toggleWish(id, btn) {
  const added = wishlist.toggle(id);
  btn.classList.toggle("active", added);
  btn.querySelector("i").className = added ? "fas fa-heart" : "far fa-heart";
  if (added) showToast("Added to ❤️ Wishlist");
  else showToast("Removed from Wishlist", "error");
  // Update dropdown count if visible
  const wc = document.querySelector(".wish-ct");
  if (wc) wc.textContent = wishlist.ids.length;
}

// ===== CAROUSEL =====
function initCarousel() {
  const t = document.querySelector(".carousel-track"),
    s = document.querySelectorAll(".carousel-slide"),
    d = document.querySelectorAll(".carousel-dot"),
    p = document.querySelector(".carousel-prev"),
    n = document.querySelector(".carousel-next");
  if (!t || !s.length) return;
  let c = 0;
  const tot = s.length;
  let at;
  function go(i) {
    c = ((i % tot) + tot) % tot;
    t.style.transform = `translateX(-${c * 100}%)`;
    d.forEach((x, j) => x.classList.toggle("active", j === c));
  }
  function nx() {
    go(c + 1);
  }
  function pv() {
    go(c - 1);
  }
  function st() {
    at = setInterval(nx, 4000);
  }
  function sp() {
    clearInterval(at);
  }
  if (n)
    n.onclick = () => {
      sp();
      nx();
      st();
    };
  if (p)
    p.onclick = () => {
      sp();
      pv();
      st();
    };
  d.forEach(
    (dot, i) =>
      (dot.onclick = () => {
        sp();
        go(i);
        st();
      }),
  );
  let sx = 0;
  t.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sp();
    },
    { passive: true },
  );
  t.addEventListener(
    "touchend",
    (e) => {
      const df = sx - e.changedTouches[0].clientX;
      if (Math.abs(df) > 50) {
        df > 0 ? nx() : pv();
      }
      st();
    },
    { passive: true },
  );
  st();
}

// ===== TIMER =====
function initTimer() {
  const h = document.querySelector(".t-hours"),
    m = document.querySelector(".t-mins"),
    s = document.querySelector(".t-secs");
  if (!h) return;
  let end = parseInt(localStorage.getItem("sz_deal"));
  if (!end || end < Date.now()) {
    end = Date.now() + 8 * 36e5;
    localStorage.setItem("sz_deal", end);
  }
  function up() {
    const d = Math.max(0, end - Date.now());
    h.textContent = String(Math.floor(d / 36e5)).padStart(2, "0");
    m.textContent = String(Math.floor((d % 36e5) / 6e4)).padStart(2, "0");
    s.textContent = String(Math.floor((d % 6e4) / 1e3)).padStart(2, "0");
    if (d <= 0) {
      end = Date.now() + 8 * 36e5;
      localStorage.setItem("sz_deal", end);
    }
  }
  up();
  setInterval(up, 1000);
}

// ===== SCROLL & BTT =====
function initScroll() {
  const obs = new IntersectionObserver(
    (e) => {
      e.forEach((x) => {
        if (x.isIntersecting) x.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".anim-scroll").forEach((el) => obs.observe(el));
}
function initBTT() {
  const b = document.querySelector(".back-to-top");
  if (!b) return;
  window.addEventListener(
    "scroll",
    () => {
      b.classList.toggle("show", window.scrollY > 400);
    },
    { passive: true },
  );
  b.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== CART PAGE =====
function renderCartPage() {
  const c = document.querySelector(".cart-items"),
    s = document.querySelector(".cart-summary-inner");
  if (!c) return;
  const items = cart.getItems();
  if (!items.length) {
    c.innerHTML =
      '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><h2>Your ShopZone Cart is empty</h2><p>Add items to get started.</p><a href="index.html">Continue Shopping</a></div>';
    if (s) s.style.display = "none";
    return;
  }
  c.innerHTML = items
    .map(
      (i, n) =>
        `<div class="cart-item" style="animation-delay:${n * 0.08}s"><img class="cart-item-img" src="${i.image}" alt="${i.name}"><div class="cart-item-details"><h4>${i.name}</h4><div class="ci-price">₹${i.price.toLocaleString()}</div><span class="ci-orig">₹${i.originalPrice.toLocaleString()}</span><div class="ci-stock"><i class="fas fa-check-circle"></i> In Stock</div><div class="qty-ctrl"><button class="qty-btn" onclick="updQty(${i.id},${i.qty - 1})"><i class="fas fa-minus"></i></button><input class="qty-val" type="text" value="${i.qty}" readonly><button class="qty-btn" onclick="updQty(${i.id},${i.qty + 1})"><i class="fas fa-plus"></i></button></div></div><div class="cart-item-actions"><div class="cart-item-total">₹${(i.price * i.qty).toLocaleString()}</div><button class="remove-btn" onclick="rmItem(${i.id})"><i class="fas fa-trash-alt"></i> Remove</button></div></div>`,
    )
    .join("");
  if (s) {
    s.style.display = "block";
    const sv = cart.getSavings();
    s.innerHTML = `<h3>Order Summary</h3><div class="sum-row"><span>Items (${cart.getCount()}):</span><span>₹${cart.getOriginalTotal().toLocaleString()}</span></div><div class="sum-row"><span>Discount:</span><span style="color:var(--deal-red)">-₹${sv.toLocaleString()}</span></div><div class="sum-row"><span>Delivery:</span><span style="color:var(--success)">FREE</span></div>${sv > 0 ? `<div class="sum-row savings"><i class="fas fa-tag"></i> You save ₹${sv.toLocaleString()}</div>` : ""}<div class="sum-row total"><span>Order Total:</span><span>₹${cart.getTotal().toLocaleString()}</span></div><button class="checkout-btn" onclick="checkout()"><i class="fas fa-lock"></i> Proceed to Checkout</button><a href="index.html" class="continue-btn">Continue Shopping</a>`;
  }
}
function updQty(id, q) {
  if (q < 1) {
    rmItem(id);
    return;
  }
  cart.updateQty(id, q);
  renderCartPage();
}
function rmItem(id) {
  const i = cart.getItems().find((x) => x.id === id);
  cart.remove(id);
  renderCartPage();
  if (i) showToast("Removed from cart", "error");
}
function checkout() {
  if (!cart.getCount()) {
    showToast("Cart is empty!", "error");
    return;
  }
  showToast(
    "<strong>Order placed!</strong><br>Total: ₹" +
      cart.getTotal().toLocaleString() +
      "<br>Delivering to Chennai 600001",
  );
  cart.clear();
  setTimeout(() => renderCartPage(), 500);
}

// ===== CATEGORY PAGE =====
function renderCatPage(cat) {
  const g = document.querySelector(".cat-products-grid");
  if (!g) return;
  let prods = PRODUCTS.filter((p) => p.category === cat);
  const rc = document.querySelector(".res-ct");
  if (rc)
    rc.innerHTML = "Showing <strong>" + prods.length + "</strong> results";
  g.innerHTML = prods.map((p, i) => renderCard(p, i)).join("");
  initScroll();
}
function initFilters(cat) {
  const cbs = document.querySelectorAll('.cat-sidebar input[type="checkbox"]'),
    g = document.querySelector(".cat-products-grid");
  if (!g) return;
  cbs.forEach((cb) => {
    cb.addEventListener("change", () => {
      const ch = Array.from(cbs)
        .filter((c) => c.checked)
        .map((c) => c.value);
      let prods = PRODUCTS.filter((p) => p.category === cat);
      if (ch.length) prods = prods.filter((p) => ch.includes(p.sub));
      g.innerHTML = prods.map((p, i) => renderCard(p, i)).join("");
      const rc = document.querySelector(".res-ct");
      if (rc)
        rc.innerHTML = "Showing <strong>" + prods.length + "</strong> results";
    });
  });
}
function initSort() {
  const ss = document.querySelector(".sort-bar select"),
    g = document.querySelector(".cat-products-grid");
  if (!ss || !g) return;
  ss.addEventListener("change", () => {
    const cards = Array.from(g.children),
      v = ss.value;
    cards.sort((a, b) => {
      const gp = (e) => {
        const p = e.querySelector(".price-now");
        return p ? parseInt(p.textContent.replace(/[₹,]/g, "")) : 0;
      };
      const gd = (e) => {
        const d = e.querySelector(".price-disc");
        return d ? parseInt(d.textContent) : 0;
      };
      switch (v) {
        case "price-low":
          return gp(a) - gp(b);
        case "price-high":
          return gp(b) - gp(a);
        case "discount":
          return gd(b) - gd(a);
        default:
          return 0;
      }
    });
    cards.forEach((c) => g.appendChild(c));
  });
}

// ===== HOME PAGE =====
function renderHome() {
  const dg = document.querySelector(".deal-grid");
  if (dg)
    dg.innerHTML = PRODUCTS.filter((p) => p.badge === "deal")
      .slice(0, 8)
      .map((p, i) => renderCard(p, i))
      .join("");
  const eg = document.querySelector(".elec-grid");
  if (eg)
    eg.innerHTML = PRODUCTS.filter((p) => p.category === "electronics")
      .slice(0, 6)
      .map((p, i) => renderCard(p, i))
      .join("");
  const fg = document.querySelector(".fashion-grid");
  if (fg)
    fg.innerHTML = PRODUCTS.filter((p) => p.category === "fashion")
      .slice(0, 6)
      .map((p, i) => renderCard(p, i))
      .join("");
  const hg = document.querySelector(".home-grid");
  if (hg)
    hg.innerHTML = PRODUCTS.filter((p) => p.category === "home")
      .slice(0, 6)
      .map((p, i) => renderCard(p, i))
      .join("");
  const bg = document.querySelector(".books-grid");
  if (bg)
    bg.innerHTML = PRODUCTS.filter((p) => p.category === "books")
      .slice(0, 6)
      .map((p, i) => renderCard(p, i))
      .join("");
  const bsg = document.querySelector(".best-grid");
  if (bsg)
    bsg.innerHTML = PRODUCTS.filter((p) => p.badge === "best")
      .slice(0, 4)
      .map((p, i) => renderCard(p, i))
      .join("");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  cart.updateCount();
  updateAcctUI();
  initCarousel();
  initTimer();
  initScroll();
  initBTT();
  initSearch();
  const al = document.querySelector(".hdr-link.acct-link");
  if (al)
    al.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleAcctDD();
    });
  const ol = document.querySelector(".hdr-link.orders-link");
  if (ol)
    ol.addEventListener("click", (e) => {
      e.preventDefault();
      showOrders();
    });
  const body = document.body;
  if (body.classList.contains("page-home")) renderHome();
  if (body.classList.contains("page-electronics")) {
    renderCatPage("electronics");
    initFilters("electronics");
    initSort();
  }
  if (body.classList.contains("page-fashion")) {
    renderCatPage("fashion");
    initFilters("fashion");
    initSort();
  }
  if (body.classList.contains("page-home-kitchen")) {
    renderCatPage("home");
    initFilters("home");
    initSort();
  }
  if (body.classList.contains("page-books")) {
    renderCatPage("books");
    initSort();
  }
  if (body.classList.contains("page-deals")) renderCatPage("all-deals");
  if (body.classList.contains("page-cart")) renderCartPage();
});
