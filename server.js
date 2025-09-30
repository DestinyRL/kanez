const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'public/' }); // Save images to public folder

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fineststeel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Product Schema
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    img: String,
    category: String
});
const Product = mongoose.model('Product', productSchema);

// Add default products if collection is empty
async function addDefaultProducts() {
    const count = await Product.countDocuments();
    if (count === 0) {
        await Product.insertMany([
            // Iron & Steel
            {
                title: "Basket Cumbi",
                description: "High-quality basket cumbi for various applications.",
                price: 19000,
                img: "basketcumbi.jpg",
                category: "iron"
            },
            {
                title: "Biggest Circle Rosette",
                description: "High-quality biggest circle rosette for various applications.",
                price: 30000,
                img: "circlerossete.jpg",
                category: "iron"
            },
            // Tools
            {
                title: "Iron Tyres 3inches",
                description: "High-quality iron tyres for various applications.",
                price: 23000,
                img: "irontyres.JPG",
                category: "tools"
            },
            {
                title: "Iron Tyres 4inches",
                description: "High-quality iron tyres for various applications.",
                price: 27000,
                img: "irontyres.JPG",
                category: "tools"
            },
            {
                title: "Iron Tyres 5inches",
                description: "High-quality iron tyres for various applications.",
                price: 32000,
                img: "irontyres.JPG",
                category: "tools"
            },
            {
                title: "Door Handle(sothis)",
                description: "High-quality door handle(sothis) for various applications.",
                price: 7000,
                img: "doorhandlesothis.JPG",
                category: "tools"
            },
            // Welding
            {
                title: "Maxmech Welding Generator(WG-200i)",
                description: "WG-200i is a compact and portable inverter welding generator, ideal for both professional and DIY use.",
                price: 400000,
                img: "maxmechweldinggenerator.JPG",
                category: "welding"
            },
            {
                title: "G12 Stonebridge Electrode(per carton of 4packs)",
                description: "High-quality electrode for welding applications.",
                price: 40000,
                img: "g12stonebridge electrode.JPG",
                category: "welding"
            },
            {
                title: "BeandDecker Mini-250amps Welding Maxmech",
                description: "High-quality welding machine for various applications.",
                price: 70000,
                img: "beanddecker.JPG",
                category: "welding"
            },
            {
                title: "MMA 250amps Maxmech Inverter Welding Machine",
                description: "High-quality MMA 250amps Maxmech inverter welding machine for various applications.",
                price: 105000,
                img: "mma250.jpg",
                category: "welding"
            },
            {
                title: "MMA 300amps Maxmech Inverter Welding Machine",
                description: "High-quality MMA 300amps Maxmech inverter welding machine for various applications.",
                price: 140000,
                img: "mma300.jpg",
                category: "welding"
            },
            {
                title: "Mini 200amps Maxmech Inverter Welding Machine",
                description: "High-quality mini 200amps Maxmech inverter welding machine for various applications.",
                price: 70000,
                img: "mini200.jpg",
                category: "welding"
            },
            {
                title: "MMA 200amps Maxmech Inverter Welding Machine",
                description: "High-quality MMA 200amps Maxmech inverter welding machine for various applications.",
                price: 80000,
                img: "mma200.jpg",
                category: "welding"
            },
            // Tools & Accessories
            {
                title: "Bosch Angle Grinder",
                description: "High-performance angle grinder for cutting and grinding tasks.",
                price: 150000,
                img: "anglegrinder.jpg",
                category: "tools"
            },
            {
                title: "Door Handle(Sqiek)",
                description: "High-quality square door handle for modern interiors.",
                price: 7000,
                img: "doorhandlesqiek.JPG",
                category: "tools"
            },
            {
                title: "9inch Homeflower Cutting Disc(5pcs pack)",
                description: "High-quality cutting disc for various applications.",
                price: 14000,
                img: "homeflower9.jpg",
                category: "tools"
            },
            {
                title: "Saffire Cutter",
                description: "High-quality cutter for various applications.",
                price: 32000,
                img: "Saffirecutter.JPG",
                category: "tools"
            },
            {
                title: "Saffire Regulator",
                description: "High-quality regulator for various applications.",
                price: 32000,
                img: "saffireregulator.JPG",
                category: "tools"
            },
            {
                title: "Oxygen Regulator",
                description: "High-quality oxygen regulator for various applications.",
                price: 14000,
                img: "oxygenregulator.JPG",
                category: "tools"
            },
            {
                title: "Butterfly Hinges(10pairs per pack)",
                description: "High-quality butterfly hinges for various applications.",
                price: 14500,
                img: "Butterflyhinges.JPG",
                category: "tools"
            },
            {
                title: "Dewalt Toolbox",
                description: "High-quality toolbox for various applications.",
                price: 70000,
                img: "toolbox.jpg",
                category: "tools"
            },
            {
                title: "Total Spray Gun(450w)",
                description: "High-quality spray gun for various applications.",
                price: 45000,
                img: "totalspray.jpg",
                category: "tools"
            },
            {
                title: "9inch Tiger Force Grinding Disc(5pcs pack)",
                description: "High-quality 9inch Tiger Force Grinding Disc for various applications.",
                price: 14000,
                img: "tigerforce9.jpg",
                category: "tools"
            },
            {
                title: "Green 800amps Electrode Holder",
                description: "High-quality green 800amps electrode holder for various applications.",
                price: 3500,
                img: "green800.jpg",
                category: "tools"
            },
            {
                title: "Yellow 1000amps Electrode Holder",
                description: "High-quality yellow 1000amps electrode holder for various applications.",
                price: 4000,
                img: "yellow1000.jpg",
                category: "tools"
            },
            {
                title: "Elephant 800amps Electrode Holder",
                description: "High-quality elephant 800amps electrode holder for various applications.",
                price: 4000,
                img: "elephant800.jpg",
                category: "tools"
            },
            {
                title: "9inch PowerFlex Grinding Disc(5pcs pack)",
                description: "High-performance 9inch PowerFlex Grinding Disc for various applications.",
                price: 11500,
                img: "powerflex9.jpg",
                category: "tools"
            },
            {
                title: "7inch PowerFlex Grinding Disc(5pcs pack)",
                description: "High-performance 7inch PowerFlex Grinding Disc for various applications.",
                price: 7500,
                img: "powerflex7.jpg",
                category: "tools"
            },
            {
                title: "9inch Powerextra Disc(5pcs pack)",
                description: "High-quality 9inch Powerextra Disc for various applications.",
                price: 14000,
                img: "powerextra9.jpg",
                category: "tools"
            }
        ]);
        console.log("Default products added.");
    }
}
addDefaultProducts();

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add product with image upload
app.post('/api/products', upload.single('img'), async (req, res) => {
    if (req.body.adminPassword !== 'madamkanez') return res.status(403).json({ error: 'Forbidden' });
    const { title, description, price, category } = req.body;
    const img = req.file ? req.file.filename : req.body.img; // Use uploaded file or URL
    const product = new Product({ title, description, price, img, category });
    await product.save();
    res.json(product);
});

app.put('/api/products/:id', async (req, res) => {
    if (req.body.adminPassword !== 'madamkanez') return res.status(403).json({ error: 'Forbidden' });
    const { title, description, price, img, category } = req.body;
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        { title, description, price, img, category },
        { new: true }
    );
    res.json(product);
});

app.delete('/api/products/:id', async (req, res) => {
    if (req.body.adminPassword !== 'madamkanez') return res.status(403).json({ error: 'Forbidden' });
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

// Serve images from public folder
app.use(express.static('public'));

// Start server
app.listen(3001, () => {
    console.log('API server running on http://localhost:3001');
});