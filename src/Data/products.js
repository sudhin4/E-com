// Data for the product
// Mobiles data
import Samsunggalaxy from "../Image/Products-image/Mobiles/Samsung galaxy.jpg";
import Apple14pro from "../Image/Products-image/Mobiles/Apple 14pro max image.png";
import pixal from "../Image/Products-image/Mobiles/Google pixal image.png";
import Redmi from "../Image/Products-image/Mobiles/Redmi 13 pro plus.jpg";
import iphone15 from "../Image/Products-image/Mobiles/Iphone 15 image.jpg";

import Villain from "../Image/Products-image/perfumes/perfume 1.jpg";
import Bellavita from "../Image/Products-image/perfumes/perfume 2.jpg";
import Wildstone from "../Image/Products-image/perfumes/perfume 3.jpg";
import Beardo from "../Image/Products-image/perfumes/perfume 4.jpg";
import Yardly from "../Image/Products-image/perfumes/perfume 5.jpg";

// t-shirt section
// Images

import shirt1 from "../Image/Products-image/T-shirt/t-shirt image 1.jpg";
import shirt2 from "../Image/Products-image/T-shirt/t-shirt image 2.jpg";
import shirt3 from "../Image/Products-image/T-shirt/t-shirt image 3.jpg";
import shirt4 from "../Image/Products-image/T-shirt/t-shirt image 4.jpg";

// watches data
// watches imagess

import Applewatch from "../Image/Products-image/watches/Apple watch.jpg";
import applewatch from "../Image/Products-image/watches/apple watch series 5.jpg";
import casio from "../Image/Products-image/watches/casio watch.jpg";
import gshock from "../Image/Products-image/watches/g-shock.jpg";
import watch from "../Image/Products-image/watches/Watches Image.jpg";

// Home appliance
//Images

import gastove from "../Image/Products-image/Home appliances/Lpg gas stove.jpg";
import ironbox from "../Image/Products-image/Home appliances/Iron Box.jpg";
import Oven from "../Image/Products-image/Home appliances/Oven.jpg";
import ac from "../Image/Products-image/Home appliances/samsung-air-conditioner.jpg";
import Chimini from "../Image/Products-image/Home appliances/chimini.jpg";

// shoes Image
import Shoe1 from '../Image/Products-image/Shoes/Daily Trendy shoe.jpg';
import shoe2 from '../Image/Products-image/Shoes/Nike Air max.png';
import shoe3 from '../Image/Products-image/Shoes/Nike Air zoom.jpg';
import shoe4 from '../Image/Products-image/Shoes/Nike Revolution 7.png';
import shoe5 from '../Image/Products-image/Shoes/Nike shoe frontImage.png';

// Bag images
import Bag1 from '../Image/Products-image/Bag/halfMoon Laptop Bag.jpg';
import Bag2 from '../Image/Products-image/Bag/Red Lemon.jpg';
import Bag3 from '../Image/Products-image/Bag/Zalhin travel Bag.jpg';
import Bag5 from '../Image/Products-image/Bag/water Resistant Bag.jpg';



const Bags=[
  {
    id: 1001,
    Name: "Half Moon Laptop Bag for men",
    Image: Bag1,
    discount_price: "799.00",
    percentage: 10,
    Price: 699.00,
    category: "Bags",
    discription: "The Half Moon Laptop Bag for men is the perfect blend of style, functionality, and durability. Designed with a sleek, curved silhouette, it offers a modern and sophisticated look. Crafted from high-quality materials, it features a padded laptop compartment for secure storage, multiple pockets for organized essentials, and a strong, adjustable shoulder strap for comfortable carrying. Whether you're heading to work, a business meeting, or traveling, this bag ensures convenience and elegance. Its premium craftsmanship and thoughtful design make it a must-have for professionals who value both fashion and practicality. Elevate your everyday carry with the Half Moon Laptop Bag."
  },
  {
    id: 1002,
    Name: "Red Lemon Siwsslook Polyster 45L Bag for men",
    Image: Bag2,
    discount_price: "2,799.00",
    percentage: 10,
    Price: 2699.00,
    category: "Bags",
    discription: "The Red Lemon Swisslook Polyester 45L Bag for men is a perfect blend of durability, style, and spaciousness. Made from high-quality polyester, it offers a generous 45L capacity, ideal for travel, work, or daily use. Featuring multiple compartments, ergonomic shoulder straps, and a sturdy build, it ensures comfort and convenience. Designed for modern professionals and travelers, this bag is both practical and stylish."
  },
  {
    id: 1003,
    Name: "Zhalin Luxury Travel bag For Men",
    Image: Bag3,
    discount_price: "23,799.00",
    percentage: 10,
    Price: 23299.00,
    category: "Bags",
    discription: "The Zhalin Luxury Travel Bag for men combines elegance, durability, and functionality for the modern traveler. Crafted from premium materials, it features a spacious main compartment, multiple pockets for organized storage, and sturdy handles with an adjustable shoulder strap for comfortable carrying. Designed for business trips or weekend getaways, this sophisticated bag adds a touch of luxury to your travels."
  },
  {
    id: 1004,
    Name: "Water Resistant Business Laptop Backpack with USb",
    Image: Bag5,
    discount_price: "6,799.00",
    percentage: 10,
    Price: 6599.00,
    category: "Bags",
    discription: "The Water-Resistant Business Laptop Backpack with USB is designed for modern professionals on the go. Made from durable, water-resistant material, it keeps your essentials safe in any weather. Featuring a dedicated padded laptop compartment, multiple storage pockets, and a built-in USB charging port, it ensures convenience and organization. With ergonomic shoulder straps for comfort, it’s perfect for work, travel, or daily commutes."
  },
]


const shoes=[
  {
    id: 2001,
    Name: "Daily Trendy Mens casual shoe 8 Size-10",
    Image: Shoe1,
    discount_price: "1,699.00",
    percentage: 10,
    Price: 1499.00,
    category: "Shoes",
    discription: "The Daily Trendy Men's Casual Shoe in size 10 offers an effortless blend of style and comfort. Designed for everyday wear, these shoes feature a modern silhouette and durable construction. With a focus on lightweight design and reliable traction, they’re perfect for work, social outings, or casual strolls. Elevate your footwear collection with this versatile and fashion-forward option for the contemporary man."
  },
  {
    id: 2002,
    Name: "Nike Air Max 97 Future Womens Shoes Size-7",
    Image: shoe2,
    discount_price: "17,699.00",
    percentage: 10,
    Price: 17499.00,
    category: "Shoes",
    discription: "The Nike Air Max 97 Future Women’s Shoes in size 7 offer a sleek, modern design with ultimate comfort. Featuring the iconic full-length Air cushioning, these sneakers provide superior support and responsiveness. The futuristic silhouette, breathable mesh upper, and durable rubber outsole ensure all-day wearability. Perfect for sports, casual outings, or streetwear fashion, these shoes redefine style and performance.."
  },
  {
    id: 2003,
    Name: "Nike Air Zoom G.T.Jump 2 Ep Basketball shoes Size-11",
    Image: shoe3,
    discount_price: "18,699.00",
    percentage: 10,
    Price: 16499.00,
    category: "Shoes",
    discription: "The Nike Air Zoom G.T. Jump 2 EP Basketball Shoes in size 11 are built for explosive performance on the court. Featuring advanced Zoom Air cushioning for maximum energy return, they offer exceptional responsiveness and support. The durable outsole ensures superior traction, while the lightweight, breathable upper enhances comfort. Designed for serious players, these shoes deliver power, agility, and style in every game."
  },
  {
    id: 2004,
    Name: "Nike Revolution 7 Mens's Road Running Shoes Size-9",
    Image: shoe4,
    discount_price: "4,699.00",
    percentage: 10,
    Price: 3695.00,
    category: "Shoes",
    discription: "The Nike Revolution 7 Men's Road Running Shoes in size 9 offer the perfect balance of comfort, support, and durability. Designed for everyday runners, they feature a lightweight, breathable upper and soft foam cushioning for a smooth stride. The durable rubber outsole provides excellent traction, while the sleek design ensures versatile styling. Ideal for workouts or casual wear, these shoes keep you moving in comfort and style."
  },
  {
    id: 2005,
    Name: "Nike Dunk High By You Custom Men's Shoes",
    Image: shoe5,
    discount_price: "15,699.00",
    percentage: 10,
    Price: 14199.00,
    category: "Shoes",
    discription: "The Nike Dunk High By You Custom Men's Shoes let you create a unique, personalized style with premium materials and iconic design. Featuring a high-top silhouette for ankle support, these sneakers offer durable construction, a padded collar for comfort, and a sturdy rubber outsole for traction. With customizable colors and details, they’re perfect for expressing your individuality in every step."
  },
]

 const Mobiles= [
  {
    id: 3001,
    Name: "Samsung Galaxy S24 Ultra-512GB",
    Image: Samsunggalaxy,
    discount_price: "1,45,999.00",
    percentage: 10,
    Price: 139999.00,
    category: "Mobiles",
    discription: "The Samsung Galaxy S24 Ultra (512GB) combines cutting-edge technology with sleek design. Featuring a stunning 6.8-inch Dynamic AMOLED display, it delivers vibrant, crisp visuals. Powered by a high-performance chipset and a 512GB storage capacity, this flagship phone offers lightning-fast performance and ample space for apps, photos, and videos. With a versatile quad-camera setup, including a 200MP main sensor, it captures stunning images in any light. Perfect for tech enthusiasts and content creators alike, the S24 Ultra is built for excellence."
  },
  {
    id: 3002,
    Name: "Apple Iphone 14 Pro Max 128GB",
    Image: Apple14pro,
    discount_price: "1,35,999.00",
    percentage: 10,
    Price: 123499.00,
    category: "Mobiles",
    discription: "The Apple iPhone 14 Pro Max (128GB) delivers a premium mobile experience with its 6.7-inch Super Retina XDR display, offering stunning clarity and vibrant colors. Powered by the A16 Bionic chip, it ensures fast performance and energy efficiency. Capture professional-grade photos and videos with its advanced triple-camera system, featuring a 48MP main sensor. With 128GB of storage, you have ample space for apps, media, and more. Built with a durable design and enhanced by iOS, the iPhone 14 Pro Max is the ultimate smartphone."
  },
  {
    id: 3003,
    Name: "Google Pixal 7 Pro 128GB",
    Image: pixal,
    discount_price: "47,99.00",
    percentage: 10,
    Price: 43999.00,
    category: "Mobiles",
    discription: "The Google Pixel 7 Pro (128GB) combines sleek design with powerful performance. Featuring a 6.7-inch LTPO AMOLED display, it offers vibrant colors and smooth scrolling with a 120Hz refresh rate. Powered by the Google Tensor G2 chip, it delivers fast, efficient performance for everyday tasks and AI-powered features. Capture stunning photos with its advanced triple-camera system, including a 50MP main sensor and a 5x telephoto lens. With 128GB of storage and the latest Android updates, the Pixel 7 Pro is a top-tier smartphone.",

  },
  {
    id: 3004,
    Name: "Redmi 13 Pro Plus 128Gb",
    Image: Redmi,
    discount_price: "24,99.00",
    percentage: 10,
    Price: 23999.00,
    category: "Mobiles",
    discription: "The Redmi 13 Pro Plus (128GB) offers a perfect balance of performance and value. Featuring a 6.73-inch AMOLED display with a 120Hz refresh rate, it provides vibrant, smooth visuals for gaming and media. Powered by a robust chipset, the device ensures seamless multitasking and fast app launches. Capture detailed photos with its 200MP triple-camera system, designed for stunning shots in any lighting. With 128GB of storage, you have plenty of space for apps, photos, and videos. The Redmi 13 Pro Plus delivers impressive features at an exceptional price.",

  },
  {
    id: 3005,
    Name: "Apple Iphone 15 128GB- Pink",
    Image: iphone15,
    discount_price: "63,99.00",
    percentage: 10,
    Price: 59999.00,
    category: "Mobiles",
    discription: "The Apple iPhone 15 (128GB) in Pink combines style, performance, and innovation. Featuring a 6.1-inch Super Retina XDR display, it delivers vibrant, crisp visuals for all your content. Powered by the A16 Bionic chip, it offers smooth performance and energy efficiency. Capture stunning photos with its advanced dual-camera system, including a 48MP main sensor. With 128GB of storage, it provides ample space for apps, photos, and media. The iPhone 15 in Pink is the perfect blend of elegance and cutting-edge technology.",
  },
]

  

 const Perfumes= [
  {
    id: 4006,
    Name: "VILLAIN Eau De parfum for Men - 100ml",
    Image: Villain,
    discount_price: "600.00",
    Price: 465.00,
    percentage: "10",
    category: "perfumes",
    discription: "Unleash your bold side with VILLAIN Eau De Parfum, a captivating fragrance designed for the modern man. This 100ml bottle offers a rich blend of daring notes, combining smoky, spicy accords with hints of leather and wood. The result is an intense, masculine scent that exudes confidence and strength. Perfect for evening wear or special occasions, VILLAIN leaves a lasting impression that commands attention. Elevate your fragrance game with this daring, sophisticated scent that defines your character.",
  },
  {
    id: 4007,
    Name: "Bella Vita Luxury OUD PARFUM unisex Perfume for men 100ml",
    Image: Bellavita,
    discount_price: "700.00",
    Price: 675.00,
    percentage: "10",
    category: "perfumes",
    discription: "Experience timeless elegance with Bella Vita Luxury OUD Parfum, a captivating unisex fragrance that embodies sophistication and allure. This 100ml bottle offers a luxurious blend of rich, exotic oud notes, paired with subtle hints of amber, vanilla, and spices. Perfect for both men and women, it exudes a warm, opulent aroma that lingers long after application. Whether for a special occasion or everyday wear, this long-lasting, versatile scent adds an air of mystery and refinement to your presence.",
  },
  {
    id: 4008,
    Name: "Wild Stone Hydra Energy Eau De Perfume For men 100ml",
    Image: Wildstone,
    discount_price: "250.00",
    Price: 199.00,
    percentage: "10",
    category: "perfumes",
    discription: "Revitalize your senses with Wild Stone Hydra Energy Eau De Parfum, a refreshing and energetic fragrance for the modern man. This 100ml bottle delivers a dynamic blend of citrus, marine, and woody notes, creating an invigorating scent that lasts all day. The bold and zesty top notes are perfectly balanced with deeper, earthy undertones, making it ideal for both casual and formal occasions. With its long-lasting freshness, Wild Stone Hydra Energy adds a powerful boost to your confidence and charisma."
  },
  {
    id: 4009,
    Name: "Beardo Godfather Perfume For Men 100ml",
    Image: Beardo,
    discount_price: "580.00",
    Price: 480.00,
    percentage: "10",
    category: "perfumes",
    discription: "Command attention with Beardo Godfather Perfume, a bold and charismatic fragrance crafted for the modern man. This 100ml bottle features a rich blend of spicy, woody, and aromatic notes, exuding strength, sophistication, and confidence. The intense opening of citrus and warm spices is balanced with deep, masculine undertones of leather and musk, creating a powerful scent that lingers. Perfect for evening wear or special occasions, Beardo Godfather is designed for men who embrace their inner leader and leave a lasting impression wherever they go.",
  },
  {
    id: 5010,
    Name: "Yardley London Gentleman Classic perfume for Men 100ml",
    Image: Yardly,
    discount_price: "580.00",
    Price: 415.00,
    percentage: "10",
    category: "perfumes",
    discription: "Sophistication meets timeless elegance with Yardley London Gentleman Classic Perfume. This 100ml bottle features a refined blend of fresh citrus, aromatic herbs, and rich woody notes, creating a scent that is both crisp and deeply masculine. The fragrance opens with invigorating citrus and lavender, followed by a heart of spicy cardamom and a warm, earthy base of sandalwood and musk. Perfect for the modern gentleman, this versatile perfume is ideal for everyday wear, offering a classic, enduring fragrance that exudes confidence and grace."
  },
]

 const Dresses=[
  {
    id: 6011,
    Name: "Spab Off-Shoulder Printed T-shirt for men Rop-Black-M",
    Image: shirt1,
    discount_price: "420.00",
    Price: 379.00,
    percentage: 10,
    category: "Dresses",
    discription:
      "Classic Cotton T-ShirtMade from soft, breathable cotton, this t-shirt offers the perfect combination of comfort and style. Ideal for everyday wear, it features a timeless design that pairs effortlessly with jeans, shorts, or casual trousers. The lightweight fabric ensures a cool, relaxed fit, while the durable construction stands up to frequent washes. Whether you're lounging at home, running errands, or out with friends, this versatile cotton tee is your go-to for laid-back style. Available in a range of classic colors to suit any wardrobe.Let me know if you’d like to add more specific details, like the color or a unique graphic!",
  },
  {
    id: 6012,
    Name: "New -18 Black Plain T-shirt men plain casual t-Shirt M-size",
    Image: shirt2,
    discount_price: "420.00",
    Price: 385.00,
    percentage: 10,
    category: "Dresses",
    discription: "Classic Cotton T-ShirtMade from soft, breathable cotton, this t-shirt offers the perfect combination of comfort and style. Ideal for everyday wear, it features a timeless design that pairs effortlessly with jeans, shorts, or casual trousers. The lightweight fabric ensures a cool, relaxed fit, while the durable construction stands up to frequent washes. Whether you're lounging at home, running errands, or out with friends, this versatile cotton tee is your go-to for laid-back style. Available in a range of classic colors to suit any wardrobe.Let me know if you’d like to add more specific details, like the color or a unique graphic!",

  },
  {
    id: 6013,
    Name: "The Souled store men Offical Disney M-size",
    Image: shirt3,
    discount_price: "1,100.00",
    Price: 1049.00,
    percentage: 10,
    category: "Dresses",
    discription: "Classic Cotton T-ShirtMade from soft, breathable cotton, this t-shirt offers the perfect combination of comfort and style. Ideal for everyday wear, it features a timeless design that pairs effortlessly with jeans, shorts, or casual trousers. The lightweight fabric ensures a cool, relaxed fit, while the durable construction stands up to frequent washes. Whether you're lounging at home, running errands, or out with friends, this versatile cotton tee is your go-to for laid-back style. Available in a range of classic colors to suit any wardrobe.Let me know if you’d like to add more specific details, like the color or a unique graphic!",

  },
  {
    id: 6014,
    Name: "Starly Cotton Regular Fit trendy T-shirt for men M-size",
    Image: shirt4,
    discount_price: "450.00",
    Price: 399.00,
    percentage: 10,
    category: "Dresses",
    discription: "Classic Cotton T-ShirtMade from soft, breathable cotton, this t-shirt offers the perfect combination of comfort and style. Ideal for everyday wear, it features a timeless design that pairs effortlessly with jeans, shorts, or casual trousers. The lightweight fabric ensures a cool, relaxed fit, while the durable construction stands up to frequent washes. Whether you're lounging at home, running errands, or out with friends, this versatile cotton tee is your go-to for laid-back style. Available in a range of classic colors to suit any wardrobe.Let me know if you’d like to add more specific details, like the color or a unique graphic!",

  },
]

const Watches= [
  {
    id: 7015,
    Name: "Apple Watch series 10 GPS Cellular 46mm jet black Aluminium Watch",
    Image: Applewatch,
    discount_price: "62,999.00",
    Price: 59599.00,
    percentage: 10,
    category: "watches",
    discription: "The Apple Watch Series 10 GPS + Cellular (46mm) in Jet Black Aluminum redefines convenience and style. With an always-on Retina display, it offers stunning clarity, even in bright sunlight. Stay connected with cellular capabilities, allowing you to make calls, send messages, and stream music directly from your wrist. Track your health and fitness with advanced sensors, including heart rate monitoring, GPS, and sleep tracking. The sleek, durable jet black aluminum case is both lightweight and stylish, making it the perfect companion for your active lifestyle.",

  },
  {
    id: 7016,
    Name: "Casio Watch A168WA-1",
    Image: casio,
    discount_price: "2,999.00",
    Price: 2699.00,
    percentage: 10,
    category: "watches",
    discription: "The Casio A168WA-1 is the perfect blend of retro style and modern functionality. Featuring a sleek, stainless steel band and a classic digital display, this timepiece brings iconic 80s design into the present. With features like a backlight, alarm, stopwatch, and calendar, it offers all the essential functions you need in a compact, durable design. Water-resistant and powered by a long-lasting battery, the A168WA-1 is perfect for daily wear, offering both practicality and timeless appeal for the style-conscious individual."

  },
  {
    id: 7017,
    Name: "Casio Men G-Shock GA-100-1A1HDR Black Analog-Digital Dialoge Men watch",
    Image: gshock,
    discount_price: "9,459.00",
    Price: 9495.00,
    percentage: 10,
    category: "watches",
    discription: "Built for durability and style, the Casio G-Shock GA-100-1A1HDR Black Analog-Digital Men's Watch combines rugged performance with bold design. Featuring a hybrid analog-digital display, this timepiece is equipped with shock resistance, water resistance up to 200 meters, and a range of practical features, including a stopwatch, world time, and multiple alarms. The black resin band and oversized case provide a striking, masculine look, while its advanced functionality ensures it’s ready for any adventure. Perfect for active lifestyles, the GA-100-1A1HDR is as tough as it is stylish.",

  },
  {
    id: 7018,
    Name: "Techmaze T500 Smart Watch Bluetooth",
    Image: applewatch,
    discount_price: "4,559.00",
    Price: 3495.00,
    percentage: 10,
    category: "watches",
    discription: "The Techmaze T500 Smart Watch Bluetooth offers a sleek and versatile design with advanced features for your daily needs. Equipped with a vibrant touch display, this smartwatch syncs seamlessly with your phone via Bluetooth, allowing you to receive calls, messages, and notifications directly on your wrist. Track your fitness with built-in health monitoring tools like heart rate, sleep tracking, and step counting. With a long-lasting battery and a stylish, comfortable design, the T500 is the perfect companion for anyone looking to stay connected and motivated throughout the day.",
  },
  {
    id: 7019,
    Name: "Analog watch for men  in 65mm dial",
    Image: watch,
    discount_price: "4,959.00",
    Price: 3295.00,
    percentage: 10,
    category: "watches",
    discription: "Make a bold statement with this striking Analog Watch for Men, featuring an oversized 65mm dial that commands attention. With its classic analog design, this timepiece combines elegance and sophistication, while the large dial ensures clear readability at a glance. The watch is crafted with high-quality materials for durability and style, featuring a sleek, modern finish that pairs perfectly with both casual and formal outfits. Perfect for those who appreciate a larger, statement-making accessory, this watch is the ideal blend of classic appeal and contemporary design."
  },
]


  
  
 const HomeAppliance = [
    {
      id: 8020,
      Name: "Glen 3 Burner Toughened Glass Top| Lpg Gas Stove | fuel Efficient",
      Image: gastove,
      discount_price: "4,500.00",
      Price: 3910.00,
      percentage: 10,
      category: "Home Appliance",
      discription: "The Glen 3 Burner LPG Gas Stove with a toughened glass top combines durability, elegance, and efficiency. Designed for modern kitchens, the toughened glass surface is both stylish and easy to clean, while the three high-efficiency burners offer quick and even heat distribution for cooking convenience. The stove is built to be fuel-efficient, helping you save on gas while delivering powerful performance. With ergonomically designed knobs and a sturdy frame, it provides a safe, reliable, and aesthetically pleasing solution for your cooking needs. Perfect for busy households or culinary enthusiasts!",
    },
    {
      id: 8021,
      Name: "Whirlpool 90cm 142 m3/hr Filterless Autoclean chimney ",
      Image: Chimini,
      discount_price: "15,500.00",
      Price: 14500.00,
      percentage: 10,
      category: "Home Appliance",
      discription: "Elevate your kitchen's ventilation with the Whirlpool 90cm Filterless Autoclean Chimney. Featuring a powerful suction capacity of 142 m³/hr, this chimney efficiently eliminates smoke, fumes, and odors, keeping your kitchen fresh and clean. The innovative filterless technology ensures low maintenance and easy cleaning, while the autoclean function removes grease buildup automatically with just a push of a button. The sleek 90cm design is perfect for larger cooking spaces, offering both style and functionality. With its quiet operation and energy-efficient performance, this chimney is the ideal addition to any modern kitchen.",
    },
    {
      id: 8022,
      Name: "Philps iron Box  ",
      Image: ironbox,
      discount_price: "1,500.00",
      Price: 1200.00,
      percentage: 10,
      category: "Home Appliance",
      discription: "Make ironing easier and more efficient with the Philips Iron Box. Designed for smooth, effortless use, this iron features a ceramic soleplate that glides easily over fabrics, ensuring a wrinkle-free finish every time. With adjustable steam settings, it tackles even the most stubborn creases with precision. The quick heat-up function saves time, while the anti-drip technology prevents water stains on clothes. Lightweight and ergonomic, the Philips Iron Box is perfect for everyday ironing, delivering reliable performance and convenience for a variety of fabrics. Ideal for a crisp, neat look with minimal effort.",
    },
    {
      id: 8023,
      Name: "Samsung 4 spilt Ac Air conditioner 1700w , 1.5 ton | 5 star  ",
      Image: ac,
      discount_price: "24,500.00",
      Price: 21200.00,
      percentage: 10,
      category: "Home Appliance",
      discription: "Stay cool and comfortable with the Samsung 1.5 Ton 4-Star Split AC. Offering 1700W of powerful cooling, this air conditioner efficiently maintains the perfect temperature while consuming less energy, thanks to its 4-Star energy rating. Ideal for medium-sized rooms, it features advanced cooling technology for faster and more consistent air distribution. The sleek, modern design complements any interior, while the air filter ensures cleaner, fresher air. With quiet operation and easy installation, this Samsung split AC is perfect for those looking for reliable, energy-efficient cooling all year round.",

    },
    {
      id: 8024,
      Name: "Prestiage POTG 19 PCR 1380-watt Oven   ",
      Image: Oven,
      discount_price: "6,500.00",
      Price: 5200.00,
      percentage: 10,
      category: "Home Appliance",
      discription: "The Prestige POTG 19 PCR 1380-Watt Oven is your perfect kitchen companion for baking, grilling, and toasting. With a 19-liter capacity, it provides ample space for all your cooking needs, whether you're preparing a small meal or baking a delicious dessert. The powerful 1380-watt heating ensures quick and even cooking, while multiple temperature settings and a 60-minute timer offer precision control. Featuring a durable stainless steel body, the oven is both stylish and long-lasting, making it a great addition to any modern kitchen. Cook with convenience and ease with the Prestige POTG 19 PCR Oven!"
    },
  ]

  // Mainpage content

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
      id: 9001,
      Name: "Samsung Galaxy S24 Ultra-512GB",
      Image: samsungmobile,
      discount_price: "1,45,999.00",
      percentage: 10,
      Price: 139999.00,
      category : "mainpagedata01",
      discription: "The Samsung Galaxy S24 Ultra (512GB) combines cutting-edge technology with sleek design. Featuring a stunning 6.8-inch Dynamic AMOLED display, it delivers vibrant, crisp visuals. Powered by a high-performance chipset and a 512GB storage capacity, this flagship phone offers lightning-fast performance and ample space for apps, photos, and videos. With a versatile quad-camera setup, including a 200MP main sensor, it captures stunning images in any light. Perfect for tech enthusiasts and content creators alike, the S24 Ultra is built for excellence."
    },
    {
      id: 9002,
      Image: Earbuds,
      Name: 'True Wireless Earbud purple Bluetooth 5.3 with microphone',
      Price: 5297.00,
      discount_price:'6,499.00',
      percentage : 10,
      category : "mainpageproduct02",
      discription : "Experience seamless audio with these True Wireless Earbuds in a stunning purple design. Equipped with Bluetooth 5.3, they offer a stable connection, low latency, and crystal-clear sound for music, calls, and gaming. The built-in microphone ensures high-quality voice clarity, making conversations effortless. Enjoy up to 30 hours of total playtime with the charging case, while the ergonomic fit ensures all-day comfort. Touch controls allow easy access to volume, calls, and voice assistants. Sweat-resistant and lightweight, these earbuds are perfect for workouts, travel, and daily use. Elevate your listening experience with superior sound and stylish convenience.",
  
    },
    {
      id: 9003,
      Image: samsungwatch,
      Name: 'Samsung Watch',
      Price: 4500.00,
      percentage : 10,
      discount_price : "5,250.00",
      category : "mainpageproduct03",
      discription : "Stay connected and stylish with the Samsung Watch, a perfect blend of innovation and elegance. Featuring a sleek design and a vibrant AMOLED display, this smartwatch keeps you informed with notifications, fitness tracking, and seamless smartphone integration. With advanced health monitoring, including heart rate tracking, SpO2, sleep analysis, and ECG, it helps you stay on top of your wellness goals. Its long-lasting battery ensures all-day performance, while water and dust resistance make it perfect for any lifestyle. Whether for workouts, calls, or everyday convenience, the Samsung Watch delivers smart functionality with a premium look and feel.",
    },
    {
      id: 9004,
      Image: laptop,
      Name: 'Hp Victus, 12th gen Intel corei5-12450H, NVIDIA RTX 2050',
      Price: 62990.00,
      percentage : 10,
      discount_price : "65,789.00",
      category : "mainpageproduct04",
      discription : "The HP Victus gaming laptop delivers powerful performance with a 12th Gen Intel Core i5-12450H processor and NVIDIA GeForce RTX 2050 graphics, ensuring smooth gameplay and multitasking. Its high-refresh-rate display provides crisp visuals, while the advanced cooling system keeps temperatures in check during intense sessions. With a sleek design and durable build, it’s perfect for gaming, content creation, and productivity. The full-size keyboard with customizable backlighting enhances usability, and fast SSD storage ensures quick boot times. Whether gaming or working, the HP Victus offers a seamless experience with top-tier performance and immersive graphics."
    },
    {
      id: 9005,
      Image: perfume,
      Name: 'Bella vita OCEAN men organic perfume',
      Price: 857.00,
      discount_price : "999.00",
      percentage : 10,
      category : "mainpageproduct05",
      discription : "Bella Vita OCEAN Men Organic Perfume is a refreshing and long-lasting fragrance inspired by the essence of the sea. Crafted with organic ingredients, it offers a blend of aquatic, citrus, and woody notes, creating a crisp and invigorating scent perfect for daily wear. The perfume opens with fresh citrus and marine accords, leading into a heart of aromatic herbs and warm spices, and finishes with a rich woody base. Ideal for the modern man who values sophistication and nature, this eco-friendly fragrance embodies confidence, freshness, and elegance in every spray. Stay refreshed and energized all day long!"
    },
    {
      id: 9006,
      Image: Bag,
      Name: 'Half monn laptop bag for men',
      Price: 699.00,
      discount_price : '899.00',
      percentage : 10,
      category : "mainpageproduct06",
      discription : "The Half Moon Laptop Bag for Men combines style, durability, and functionality for everyday use. Crafted from premium, water-resistant material, it offers excellent protection for your laptop and essentials. With a spacious main compartment, padded laptop sleeve, and multiple pockets, it ensures organized storage for accessories, documents, and gadgets. The ergonomic shoulder strap and sturdy handles provide comfort and ease of carrying. Its sleek and professional design makes it ideal for work, travel, and daily commutes. Whether for business or casual use, the Half Moon Laptop Bag is a perfect blend of elegance and practicality."
    },
    {
      id: 9007,
      Image: fridge,
      Name: 'Whirlpool Fridge 192 litre 3 star single door',
      Price: 15499.00,
      discount_price : '18,450.00',
      percentage : 10,
      category : "mainpageproduct07",
      discription : "The Whirlpool 192-Litre 3-Star Single Door Refrigerator is a perfect blend of efficiency, style, and performance. Designed for small families and bachelors, it features advanced cooling technology to keep your food fresh for longer. The 3-star energy rating ensures optimal power savings, while the spacious 192-litre capacity provides ample storage. Equipped with toughened glass shelves, a large vegetable crisper, and a powerful compressor, it ensures uniform cooling and durability. Its sleek design enhances any kitchen space, and the stabilizer-free operation adds convenience. Enjoy reliable cooling and efficient performance with this Whirlpool single-door refrigerator."
    },
    {
      id: 9008,
      Image: Tshirt,
      Name: "Custom T-shirt premium Quality for men",
      Price: 949.00,
      discount_price : '1,200.00',
      percentage : 10,
      category : "mainpageproduct08",
      discription : "Experience comfort and style with our Custom Premium Quality T-Shirt for Men. Made from high-grade, breathable cotton fabric, it offers a soft feel and long-lasting durability. The premium stitching ensures a perfect fit, while the moisture-wicking properties keep you cool and comfortable all day. Whether for casual wear, sports, or custom branding, this T-shirt provides a sleek and stylish look. Available in multiple colors and sizes, it’s perfect for everyday wear or personalized designs. Elevate your wardrobe with this high-quality, versatile T-shirt that blends fashion with superior comfort."
    },
  ]
  


export const productdatastatic = {Mobiles,HomeAppliance,Dresses,Watches,Perfumes,shoes,Bags,cardData}

 
