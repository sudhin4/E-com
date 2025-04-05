// Product Section//
import samsungmobile from '../Image/Products-image/Samsung galaxy.jpg';
import Earbuds from '../Image/Products-image/True Earbuds wirless.jpg';
import samsungwatch from '../Image/Products-image/Samsung_product_image.jfif';
import laptop from '../Image/Products-image/Hp victus laptop.jpg';
import perfume from '../Image/Products-image/Perfume Image_.jpg';
import Bag from '../Image/Products-image/Bag Image.jpg';
import fridge from '../Image/Products-image/Fridge Image.jfif';
import Tshirt from '../Image/Products-image/T-shirt Image.jpg';

const cardData = [
  {
    id: 100001,
    Name: "Samsung Galaxy S24 Ultra-512GB",
    Image: samsungmobile,
    discount_price: "1,45,999.00",
    percentage: 10,
    price: "1,39,999.00",
    category : "Mobiles",
    discription: "The Samsung Galaxy S24 Ultra (512GB) combines cutting-edge technology with sleek design. Featuring a stunning 6.8-inch Dynamic AMOLED display, it delivers vibrant, crisp visuals. Powered by a high-performance chipset and a 512GB storage capacity, this flagship phone offers lightning-fast performance and ample space for apps, photos, and videos. With a versatile quad-camera setup, including a 200MP main sensor, it captures stunning images in any light. Perfect for tech enthusiasts and content creators alike, the S24 Ultra is built for excellence."
  },
  {
    id: 100002,
    Image: Earbuds,
    Name: 'True Wireless Earbud purple Bluetooth 5.3 with microphone',
    Price: '5,297.00',
    discount_price:'6,499.00',
    percentage : 10,
    category : "Mobiles",
    discription : "Experience seamless audio with these True Wireless Earbuds in a stunning purple design. Equipped with Bluetooth 5.3, they offer a stable connection, low latency, and crystal-clear sound for music, calls, and gaming. The built-in microphone ensures high-quality voice clarity, making conversations effortless. Enjoy up to 30 hours of total playtime with the charging case, while the ergonomic fit ensures all-day comfort. Touch controls allow easy access to volume, calls, and voice assistants. Sweat-resistant and lightweight, these earbuds are perfect for workouts, travel, and daily use. Elevate your listening experience with superior sound and stylish convenience.",

  },
  {
    id: 100003,
    Image: samsungwatch,
    Name: 'Samsung Watch',
    Price: '4,500.00',
    percentage : 10,
    discount_price : "5,250.00",
    category : "Mobiles",
    discription : "Stay connected and stylish with the Samsung Watch, a perfect blend of innovation and elegance. Featuring a sleek design and a vibrant AMOLED display, this smartwatch keeps you informed with notifications, fitness tracking, and seamless smartphone integration. With advanced health monitoring, including heart rate tracking, SpO2, sleep analysis, and ECG, it helps you stay on top of your wellness goals. Its long-lasting battery ensures all-day performance, while water and dust resistance make it perfect for any lifestyle. Whether for workouts, calls, or everyday convenience, the Samsung Watch delivers smart functionality with a premium look and feel.",
  },
  {
    id: 100004,
    Image: laptop,
    Name: 'Hp Victus, 12th gen Intel corei5-12450H, NVIDIA RTX 2050',
    Price: '62,990.00',
    percentage : 10,
    discount_price : "65,789.00",
    category : "Laptops",
    discription : "The HP Victus gaming laptop delivers powerful performance with a 12th Gen Intel Core i5-12450H processor and NVIDIA GeForce RTX 2050 graphics, ensuring smooth gameplay and multitasking. Its high-refresh-rate display provides crisp visuals, while the advanced cooling system keeps temperatures in check during intense sessions. With a sleek design and durable build, it’s perfect for gaming, content creation, and productivity. The full-size keyboard with customizable backlighting enhances usability, and fast SSD storage ensures quick boot times. Whether gaming or working, the HP Victus offers a seamless experience with top-tier performance and immersive graphics."
  },
  {
    id: 100005,
    Image: perfume,
    Name: 'Bella vita OCEAN men organic perfume',
    Price: '857.00',
    discount_price : "999.00",
    percentage : 10,
    category : "Perfumes",
    discription : "Bella Vita OCEAN Men Organic Perfume is a refreshing and long-lasting fragrance inspired by the essence of the sea. Crafted with organic ingredients, it offers a blend of aquatic, citrus, and woody notes, creating a crisp and invigorating scent perfect for daily wear. The perfume opens with fresh citrus and marine accords, leading into a heart of aromatic herbs and warm spices, and finishes with a rich woody base. Ideal for the modern man who values sophistication and nature, this eco-friendly fragrance embodies confidence, freshness, and elegance in every spray. Stay refreshed and energized all day long!"
  },
  {
    id: 100006,
    Image: Bag,
    Name: 'Half monn laptop bag for men',
    Price: '699.00',
    discount_price : '899.00',
    percentage : 10,
    category : "Bags",
    discription : "The Half Moon Laptop Bag for Men combines style, durability, and functionality for everyday use. Crafted from premium, water-resistant material, it offers excellent protection for your laptop and essentials. With a spacious main compartment, padded laptop sleeve, and multiple pockets, it ensures organized storage for accessories, documents, and gadgets. The ergonomic shoulder strap and sturdy handles provide comfort and ease of carrying. Its sleek and professional design makes it ideal for work, travel, and daily commutes. Whether for business or casual use, the Half Moon Laptop Bag is a perfect blend of elegance and practicality."
  },
  {
    id: 100007,
    Image: fridge,
    Name: 'Whirlpool Fridge 192 litre 3 star single door',
    Price: '15,499.00',
    discount_price : '18,450.00',
    percentage : 10,
    category : "Home Appliance",
    discription : "The Whirlpool 192-Litre 3-Star Single Door Refrigerator is a perfect blend of efficiency, style, and performance. Designed for small families and bachelors, it features advanced cooling technology to keep your food fresh for longer. The 3-star energy rating ensures optimal power savings, while the spacious 192-litre capacity provides ample storage. Equipped with toughened glass shelves, a large vegetable crisper, and a powerful compressor, it ensures uniform cooling and durability. Its sleek design enhances any kitchen space, and the stabilizer-free operation adds convenience. Enjoy reliable cooling and efficient performance with this Whirlpool single-door refrigerator."
  },
  {
    id: 100008,
    Image: Tshirt,
    Name: "Custom T-shirt premium Quality for men",
    Price: '949.00',
    discount_price : '1,200.00',
    percentage : 10,
    category : "Dresses",
    discription : "Experience comfort and style with our Custom Premium Quality T-Shirt for Men. Made from high-grade, breathable cotton fabric, it offers a soft feel and long-lasting durability. The premium stitching ensures a perfect fit, while the moisture-wicking properties keep you cool and comfortable all day. Whether for casual wear, sports, or custom branding, this T-shirt provides a sleek and stylish look. Available in multiple colors and sizes, it’s perfect for everyday wear or personalized designs. Elevate your wardrobe with this high-quality, versatile T-shirt that blends fashion with superior comfort."
  },
]
export default cardData;