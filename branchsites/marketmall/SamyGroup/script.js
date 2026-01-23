// Product data by category
const productsByCategory = {
    electronics: {
        title: "موبايلات",
        products: {
            1: {
                title: "شاحن سامسونج adapter   ",
                price: "150 ج.م",
                image: "img/product/charger1.png",
                description: "شاحن سامسونج adapter 150 جنيه مصري موجود بكميات .",
                specs: [" شاحن سريع", " سعر رائع ", "حالة ممتازة ", " adapter  ", " شاحن سامسونج ", "   بكميات  "]
            },
            2: {
                title: "ايفون xs ",
                price: "15000 ج.م",
                image: "img/product/iphonexls1.png",
                description: "ايفون xs مساحة 256 بطارية 73    .",
                specs: ["مساحة 256 . ", "بطارية 73 ", " نموذج M ", "شريحة 👆", "وتر بروف   ", "كسر كسر زيرو عليه ضريبه", "الموبايل وارد من الخارج", "لا يوجد شاحن نهائي"]
            },
            3: {
                title: "هواوي نوفا Y61  ",
                price: "4000 ج.م",
                image: "img/product/phone2.png",
                description: "تليفون هواوي نوفا Y61 رامات اربعه جيجاذاكرة64 جيجا.",
                specs: ["رامات 4 جبجا", "ذاكرة 64 جيجا", "بالكرتونه بجميع مشتملاته", "استعمال حريمي 3 شهور", "يدعم مستشعر البصمه مدمج مع زر الباور", "منفذ Type C مع شاحن سريع بقوة  22.5واط", "البطارية تصمد للعمل لفترةطويلة خلال اليوم", "شاشة كبيرة بشكل النوتش كافية لمشاهدة الفيديوهات والالعاب"]
            },
            4: {
                title: "سماعات رياضية بلوتوث",
                price: "299 ج.م",
                image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "سماعات لاسلكية مثالية للرياضة والاستخدام اليومي. صوت نقي عالي الجودة مع خاصية إلغاء الضوضاء. مقاومة للعرق والماء مع بطارية تدوم طوال اليوم.",
                specs: ["بلوتوث 5.3 للاتصال المستقر", "إلغاء الضوضاء النشط (ANC)", "مقاومة للماء IPX7", "عمر البطارية 24 ساعة مع العلبة", "صوت استريو عالي الجودة", "ميكروفونات مدمجة للمكالمات"]
            }
        }
    },
    fashion: {
        title: "أثاث منزلي",
        products: {
            5: {
                title: "2 سرير عمولة  ",
                price: "6500 ج.م",
                image: "img/product/bed2.jpg",
                description: "اتنين سرير عمولة.",
                specs: ["سريرين عمولة", "خشب زان", "حالة جيده"]
            },
            6: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            },
            7: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            },
            8: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            }
        }
    },
    home: {
        title: "أجهزة منزلية",
        products: {
            9: {
                title: "  ثلاجة 18 قدم",
                price: "15000 ج.م",
                image: "img/product/fridge.png",
                description: "تلاجه تمنتاشر قدم.",
                specs: ["18 قدم", "الكومبو 500", "الباب الزجاج", "عرض الجمله"]
            },
            10: {
                title: "شاشة LG",
                price: "مفاجاءه ج.م",
                image: "img/product/tv.jpg",
                description: "شاشة ال جي 42 بوصه نوعها LCD.",
                specs: ["42 بوصه", "LCD", "استعمال خفيف"]
            },
            11: {
                title: "تلاجة اليكتروستار",
                price: "عرض ج.م",
                image: "img/product/FRIDE4.jpg",
                description: "تلاجة اليكتروستار فرز تاني.",
                specs: ["340 لتر", "12 قدم مكعب", "ضمان 5 سنين", "فرز تاني", "عرض"]
            },
            12: {
                title: "فريزر",
                price: "مفاجاءه ج.م",
                image: "img/product/fridge3.png",
                description: "فريزرات فرز تاني بساب.",
                specs: ["فريزرات فرز تاني", "غريزر بساب", "ماتور LG", "السعة 341 لتر", "السعر مفاجاءه"]
            }
        }
    },
    sports: {
        title: "أخري",
        products: {
            13: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            },
            14: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            },
            15: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            },
            16: {
                title: "انتظرونا قريبا",
                price: "عرض ج.م",
                image: "img/product/ad.png",
                description: ".",
                specs: ["قريبا", "", "", "", "", ""]
            }
        }
    }
};

// Keep old products object for backward compatibility
const products = productsByCategory.electronics.products;

// Get modal elements
const modal = document.getElementById('productModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Get navigation elements
const navLinks = document.querySelectorAll('.nav-link');
const productsGrid = document.getElementById('productsGrid');
const sectionTitle = document.getElementById('sectionTitle');

// Current category
let currentCategory = 'electronics';

// Add click event to nav links for tab switching
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get category and load products
        currentCategory = this.getAttribute('data-category');
        loadProducts(currentCategory);
    });
});

// Function to load products by category
function loadProducts(category) {
    const categoryData = productsByCategory[category];
    
    // Update title
    sectionTitle.textContent = categoryData.title;
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Add hardcoded products
    Object.keys(categoryData.products).forEach(productId => {
        const product = categoryData.products[productId];
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product', productId);
        productCard.setAttribute('data-category', category);
        
        productCard.innerHTML = `
            <div class="product-badge">${product.price}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-desc">${product.description}</p>
                <button class="btn-buy">شراء الآن</button>
            </div>
        `;
        
        // Add click event
        productCard.addEventListener('click', function() {
            const prodId = this.getAttribute('data-product');
            const cat = this.getAttribute('data-category');
            showProductDetails(prodId, cat);
        });
        
        productsGrid.appendChild(productCard);
    });

    // Add Firestore products from this category
    if (window.firestoreProducts) {
        Object.entries(window.firestoreProducts).forEach(([docId, product]) => {
            if (product.category === category) {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.setAttribute('data-product', docId);
                productCard.setAttribute('data-category', category);
                productCard.setAttribute('data-firestore', 'true');
                
                productCard.innerHTML = `
                    <div class="product-badge">${product.price}</div>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-desc">${product.description}</p>
                        <button class="btn-buy">شراء الآن</button>
                    </div>
                `;
                
                // Add click event for Firestore product
                productCard.addEventListener('click', function() {
                    showFirestoreProductDetails(docId);
                });
                
                productsGrid.appendChild(productCard);
            }
        });
    }
    
    console.log(`📦 Loaded ${productsGrid.querySelectorAll('.product-card').length} products for category: ${category}`);
}

// Function to send WhatsApp message with product name
function sendWhatsAppMessage() {
    const productTitle = document.getElementById('modalTitle').textContent;
    const phoneNumber = '201062929804';
    const message = `عايز اشتري ${productTitle}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Function to show product details in modal
function showProductDetails(productId, category) {
    const product = productsByCategory[category].products[productId];

    if (product) {
        // Set modal content
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalDescription').textContent = product.description;

        // Set specs
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to show Firestore product details in modal
function showFirestoreProductDetails(docId) {
    const product = window.firestoreProducts && window.firestoreProducts[docId];

    if (product) {
        // Set modal content
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalDescription').textContent = product.description;

        // Set specs
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = '';
        
        // Handle specs as string or array
        const specsArray = typeof product.specs === 'string' 
            ? product.specs.split('\n').filter(s => s.trim())
            : (Array.isArray(product.specs) ? product.specs : []);
        
        specsArray.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking on X
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle Add to Cart button
document.querySelector('.btn-add-cart').addEventListener('click', function(e) {
    e.stopPropagation();
    alert('تم إضافة المنتج إلى السلة! 🛒');
});

// Handle Buy Now button
document.querySelector('.btn-buy-now').addEventListener('click', function(e) {
    e.stopPropagation();
    alert('جاري تحويلك إلى صفحة الدفع... 💳');
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load initial products on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing app...');
    loadProducts(currentCategory);
    
    // Initialize Firebase with a small delay to ensure SDK is loaded
    setTimeout(function() {
        console.log('🔧 Initializing Firebase...');
        initializeFirebase();
    }, 100);
    
    // Setup add product modal
    setTimeout(function() {
        console.log('🔧 Setting up product modal...');
        setupAddProductModal();
    }, 200);
});

// ==================== Firebase Configuration ====================
let db;
let firebaseInitialized = false;

// اختبار سريع - هل Firebase SDK موجود؟
console.log('🔍 Script.js loaded. Checking firebase availability...');
console.log('window.firebase:', typeof window.firebase);

// تم تحديثها ببيانات مشروعك من Firebase Console
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBWInOFMkiyis2C2267tZD8_uVRkIo0h0g",
    authDomain: "samygroupy.firebaseapp.com",
    projectId: "samygroupy",
    storageBucket: "samygroupy.firebasestorage.app",
    messagingSenderId: "906841923235",
    appId: "1:906841923235:web:de757131a48d9e07f36916"
};

// Initialize Firebase
function initializeFirebase() {
    try {
        console.log('🔍 Checking Firebase SDK...');
        console.log('window.firebase:', window.firebase);
        
        // Initialize Firebase
        if (!window.firebase) {
            console.error('🔴 Firebase SDK not loaded. Make sure Firebase scripts are in HTML.');
            console.error('Checking for firebase in window:', Object.keys(window).filter(k => k.includes('fire')));
            firebaseInitialized = false;
            return;
        }

        console.log('✅ Firebase SDK loaded');
        console.log('📊 FIREBASE_CONFIG:', FIREBASE_CONFIG);
        console.log('📊 firebase.apps:', firebase.apps);
        console.log('📊 firebase.apps.length:', firebase.apps.length);

        // Try to initialize if not already initialized
        if (firebase.apps.length === 0) {
            console.log('🚀 Initializing Firebase app...');
            const app = firebase.initializeApp(FIREBASE_CONFIG);
            console.log('✅ Firebase app initialized:', app.name);
        } else {
            console.log('✅ Firebase app already initialized');
        }
        
        console.log('🚀 Getting Firestore instance...');
        db = firebase.firestore();
        firebaseInitialized = true;
        
        console.log('✅ Firebase initialized successfully!');
        console.log('✅ Firestore is ready to save products');
        console.log('💾 Database reference:', db);
        console.log('📍 firebaseInitialized is now:', firebaseInitialized);
    } catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error name:', error.name);
        console.error('❌ Stack:', error.stack);
        console.warn('📝 App will work in DEMO MODE (localStorage only)');
        firebaseInitialized = false;
    }
}

// ==================== Add Product Modal ====================
function setupAddProductModal() {
    // Get elements - MUST be inside function after DOM loads
    const addProductModal = document.getElementById('addProductModal');
    const btnAddProduct = document.getElementById('btnAddProduct');
    const addProductForm = document.getElementById('addProductForm');
    
    // Check if elements exist
    if (!addProductModal || !btnAddProduct || !addProductForm) {
        console.error('Modal elements not found!');
        return;
    }
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close');
    
    // Open add product modal
    btnAddProduct.addEventListener('click', function() {
        console.log('Add product button clicked');
        addProductModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            addProductModal.style.display = 'none';
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with outside click
    window.addEventListener('click', function(event) {
        if (event.target == addProductModal) {
            addProductModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    addProductForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📝 Form submitted!');
        console.log('✏️ firebaseInitialized:', firebaseInitialized, 'db:', db ? 'exists' : 'null');
        
        // Get form values
        const title = document.getElementById('productTitle').value;
        const category = document.getElementById('productCategory').value;
        const price = document.getElementById('productPrice').value;
        const image = document.getElementById('productImage').value;
        const description = document.getElementById('productDescription').value;
        const specsText = document.getElementById('productSpecs').value;
        
        console.log('📋 Form values:', { title, category, price });
        
        // Convert specs from text to array
        const specs = specsText.split(',').map(spec => spec.trim());
        
        // Validate
        if (!title || !category || !price || !image || !description || !specsText) {
            alert('يرجى ملء جميع الحقول');
            return;
        }
        
        try {
            // Show loading state
            const submitBtn = addProductForm.querySelector('.btn-submit');
            submitBtn.disabled = true;
            submitBtn.textContent = 'جاري الحفظ...';
            
            // Create product object
            const newProduct = {
                id: Date.now().toString(),
                title: title,
                price: price + ' ج.م',
                image: image,
                description: description,
                specs: specs
            };
            
            // If Firebase is available, save to database
            if (firebaseInitialized && db) {
                try {
                    console.log('🚀 Attempting to save to Firestore...');
                    console.log('📊 Product data:', {
                        title: title,
                        category: category,
                        price: price + ' ج.م',
                        image: image,
                        description: description,
                        specs: specs
                    });
                    
                    const docRef = await db.collection('products').add({
                        title: title,
                        category: category,
                        price: price + ' ج.م',
                        image: image,
                        description: description,
                        specs: specs,
                        createdAt: new Date(),
                        id: newProduct.id
                    });
                    
                    newProduct.id = docRef.id;
                    console.log('✅ Product saved to Firebase with ID:', docRef.id);
                    console.log('✅ Check Firestore Console: https://console.firebase.google.com/');
                    submitBtn.textContent = 'تم الحفظ في Firebase! ✅';
                    submitBtn.style.backgroundColor = '#4CAF50';
                } catch (firebaseError) {
                    console.error('❌ Firebase save failed:', firebaseError);
                    console.error('❌ Error message:', firebaseError.message);
                    console.error('❌ Error code:', firebaseError.code);
                    console.warn('ℹ️ Saving to localStorage instead');
                    // Continue anyway - save locally
                }
            } else {
                console.warn('⚠️ Firebase not available.');
                console.warn('firebaseInitialized:', firebaseInitialized);
                console.warn('db:', db);
                console.warn('Saving to localStorage only.');
            }
            
            // Add to current category locally
            productsByCategory[category].products[newProduct.id] = newProduct;
            
            // Save to localStorage as backup
            try {
                const allProducts = JSON.parse(localStorage.getItem('matjariProducts') || '{}');
                if (!allProducts[category]) {
                    allProducts[category] = {};
                }
                allProducts[category][newProduct.id] = newProduct;
                localStorage.setItem('matjariProducts', JSON.stringify(allProducts));
                console.log('✅ Product saved to localStorage');
            } catch (storageError) {
                console.warn('localStorage save failed:', storageError);
            }
            
            // Reload products if current category matches
            if (currentCategory === category) {
                loadProducts(currentCategory);
            }
            
            // Reset form
            addProductForm.reset();
            
            // Close modal
            addProductModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Success message - both console and alert
            console.log('🎉 SUCCESS: Product added successfully!');
            console.log('📍 Product:', newProduct);
            alert('تم إضافة المنتج بنجاح! ✓');
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = 'حفظ المنتج';
            submitBtn.style.backgroundColor = '';
            
        } catch (error) {
            console.error('Error adding product:', error);
            alert('حدث خطأ في إضافة المنتج: ' + error.message);
            
            // Restore button
            const submitBtn = addProductForm.querySelector('.btn-submit');
            submitBtn.disabled = false;
            submitBtn.textContent = 'حفظ المنتج';
        }
    });
    
    // Handle cancel button
    const cancelBtn = document.querySelector('.btn-cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            addProductForm.reset();
            addProductModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
}

// ===== SEARCH FUNCTIONALITY =====
function getAllProducts() {
    let allProducts = [];
    
    // جمع المنتجات من جميع الفئات
    Object.keys(productsByCategory).forEach(category => {
        const categoryProducts = productsByCategory[category].products;
        Object.keys(categoryProducts).forEach(productId => {
            const product = categoryProducts[productId];
            allProducts.push({
                id: productId,
                category: category,
                title: product.title,
                price: product.price,
                image: product.image,
                description: product.description,
                fromFirestore: false
            });
        });
    });
    
    // إضافة منتجات Firestore
    if (window.firestoreProducts && Object.keys(window.firestoreProducts).length > 0) {
        Object.keys(window.firestoreProducts).forEach(docId => {
            const product = window.firestoreProducts[docId];
            allProducts.push({
                id: docId,
                category: product.category,
                title: product.title,
                price: product.price,
                image: product.image,
                description: product.description,
                fromFirestore: true
            });
        });
    }
    
    return allProducts;
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query.length === 0) {
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    const allProducts = getAllProducts();
    const results = allProducts.filter(product => {
        const searchTerm = query.toLowerCase();
        return product.title.toLowerCase().includes(searchTerm) || 
               product.description.toLowerCase().includes(searchTerm) ||
               product.price.toLowerCase().includes(searchTerm);
    });
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = results.length;
    
    if (results.length === 0) {
        resultsList.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>لم نعثر على منتجات مطابقة</p></div>';
    } else {
        resultsList.innerHTML = results.map(product => `
            <div class="result-item" onclick="goToProduct('${product.id}', '${product.category}')">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/50'">
                <div class="result-info">
                    <div class="result-title">${product.title}</div>
                    <div class="result-price">${product.price}</div>
                </div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

function goToProduct(productId, category) {
    // غلق نتائج البحث
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
    
    // إذا كان من Firestore
    if (window.firestoreProducts && window.firestoreProducts[productId]) {
        showFirestoreProductDetails(productId);
    } else {
        // البحث عن المنتج وعرضه
        showProductDetails(productId, category);
    }
}

// إغلاق نتائج البحث عند الضغط خارجها
document.addEventListener('click', function(event) {
    const searchResults = document.getElementById('searchResults');
    const searchWrapper = document.querySelector('.search-wrapper');
    
    if (searchResults && !searchWrapper.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

// إضافة حدث البحث عند الكتابة
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        } else {
            performSearch();
        }
    });
}
