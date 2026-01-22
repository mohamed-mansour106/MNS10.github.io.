// Product data by category
const productsByCategory = {
    electronics: {
        title: "الكترونيات",
        products: {
            1: {
                title: "لابتوب للألعاب",
                price: "4999 ر.س",
                image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
                description: "لابتوب قوي مثالي للألعاب والأعمال الثقيلة. يتميز بمعالج من الجيل الأخير وكرت شاشة RTX 4080 للحصول على أفضل تجربة ألعاب. شاشة 15.6 بوصة بدقة عالية مع معدل تحديث 144Hz.",
                specs: ["معالج Intel Core i9 الجيل الثاني عشر", "بطاقة رسومات NVIDIA RTX 4080 8GB", "ذاكرة RAM 32GB DDR5", "قرص صلب SSD 1TB NVMe", "شاشة 15.6 بوصة FHD 144Hz", "لوحة مفاتيح RGB قابلة للتخصيص"]
            },
            2: {
                title: "كاميرا احترافية",
                price: "2499 ر.س",
                image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "كاميرا DSLR احترافية مثالية للمصورين المحترفين والهواة. تأتي مع عدسة متعددة الاستخدامات وجودة تصوير استثنائية في جميع الظروف. مثالية للتصوير الفوتوغرافي والفيديو.",
                specs: ["مستشعر 24.2 ميجابكسل", "تصوير فيديو 4K بمعدل 60 إطار/ثانية", "عدسة 18-55mm متضمنة", "شاشة لمس دوارة 3 بوصة", "واي فاي وبلوتوث مدمج", "عمر بطارية يصل إلى 800 صورة"]
            },
            3: {
                title: "ساعة ذكية متطورة",
                price: "599 ر.س",
                image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "ساعة ذكية متطورة تتتبع صحتك ولياقتك البدنية على مدار الساعة. شاشة AMOLED عالية الدقة مع مقاومة للماء حتى 50 متر. متوافقة مع جميع الهواتف الذكية.",
                specs: ["شاشة AMOLED 1.4 بوصة", "مقاومة للماء IP68", "مراقبة معدل ضربات القلب 24/7", "تتبع النوم والأكسجين بالدم", "أكثر من 100 وضع رياضي", "عمر البطارية 7 أيام"]
            },
            4: {
                title: "سماعات رياضية بلوتوث",
                price: "299 ر.س",
                image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "سماعات لاسلكية مثالية للرياضة والاستخدام اليومي. صوت نقي عالي الجودة مع خاصية إلغاء الضوضاء. مقاومة للعرق والماء مع بطارية تدوم طوال اليوم.",
                specs: ["بلوتوث 5.3 للاتصال المستقر", "إلغاء الضوضاء النشط (ANC)", "مقاومة للماء IPX7", "عمر البطارية 24 ساعة مع العلبة", "صوت استريو عالي الجودة", "ميكروفونات مدمجة للمكالمات"]
            }
        }
    },
    fashion: {
        title: "أزياء",
        products: {
            5: {
                title: "فستان نسائي عصري",
                price: "299 ر.س",
                image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "فستان أنيق وعصري مصنوع من أفضل الأقمشة. مريح وسهل الحركة مع تصميم عصري يناسب جميع المناسبات.",
                specs: ["نسيج قطني 100%", "مريح وسهل الحركة", "متوفر بأحجام متعددة", "يمكن غسله بسهولة", "تصميم عصري أنيق", "مناسب للمناسبات الرسمية"]
            },
            6: {
                title: "تي شيرت رجالي",
                price: "99 ر.س",
                image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "تي شيرت عالي الجودة مريح وسهل الحركة. مصنوع من أفضل الأقمشة القطنية مع تصميم بسيط وأنيق.",
                specs: ["قطن 100% عالي الجودة", "مريح وخفيف الوزن", "ألوان متنوعة", "مقاوم للتمزق", "سهل الغسل والتنشيف", "متوفر بأحجام مختلفة"]
            },
            7: {
                title: "جاكيت شتوي دافئ",
                price: "449 ر.س",
                image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "جاكيت شتوي دافئ وأنيق مصنوع من مواد عازلة للحرارة. يوفر الدفء والحماية من البرد مع الحفاظ على المظهر الجميل.",
                specs: ["مواد عازلة عالية الجودة", "دافئ وخفيف الوزن", "مقاوم للماء", "جيوب عملية", "تصميم أنيق", "سهل الغسل"]
            },
            8: {
                title: "حذاء رياضي عصري",
                price: "199 ر.س",
                image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "حذاء رياضي عصري وقوي. مناسب للرياضة والاستخدام اليومي مع تصميم حديث وألوان جذابة.",
                specs: ["نعل قوي ومرن", "تهوية جيدة", "دعم كامل للقدم", "مرتاح وخفيف الوزن", "ألوان عصرية متنوعة", "متين وعملي"]
            }
        }
    },
    home: {
        title: "منزل وديكور",
        products: {
            9: {
                title: "مصباح ذكي LED",
                price: "149 ر.س",
                image: "https://images.pexels.com/photos/459319/pexels-photo-459319.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "مصباح ذكي LED متعدد الألوان يمكن التحكم به عن بعد. يوفر إضاءة دافئة وباردة مع قدرة على التحكم في شدة الإضاءة.",
                specs: ["ألوان RGB متعددة", "تحكم عن بعد", "توفير الطاقة 80%", "عمر بطارية طويل", "متوافق مع الهواتف الذكية", "تركيب سهل"]
            },
            10: {
                title: "سجادة عصرية فاخرة",
                price: "499 ر.س",
                image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "سجادة عصرية وفاخرة مصنوعة من مواد ناعمة جداً. تضيف جمالاً وراحة إلى أي غرفة في المنزل.",
                specs: ["مادة ناعمة عالية الجودة", "ألوان أنيقة متنوعة", "مقاومة للأوساخ", "سهلة التنظيف", "أحجام مختلفة", "عازلة للحرارة والصوت"]
            },
            11: {
                title: "طاولة قهوة حديثة",
                price: "699 ر.س",
                image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "طاولة قهوة حديثة وأنيقة تناسب جميع أنواع الديكور. مصنوعة من مواد عالية الجودة مع تصميم بسيط وعملي.",
                specs: ["مواد عالية الجودة", "تصميم بسيط أنيق", "سطح قوي ومتين", "تخزين إضافي", "سهل التنظيف", "وزن معقول"]
            },
            12: {
                title: "وسادات مريحة",
                price: "149 ر.س",
                image: "https://images.pexels.com/photos/4282460/pexels-photo-4282460.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "وسادات مريحة جداً توفر دعماً كاملاً للرقبة والرأس. تساعد على النوم الهانئ والراحة الكاملة.",
                specs: ["مادة إسفنجية مريحة", "دعم كامل للرقبة", "قابلة للغسل", "متينة وطويلة الأمد", "أحجام مختلفة", "صحية وآمنة"]
            }
        }
    },
    sports: {
        title: "رياضة",
        products: {
            13: {
                title: "دراجة ثابتة للمنزل",
                price: "899 ر.س",
                image: "https://images.pexels.com/photos/2318904/pexels-photo-2318904.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "دراجة ثابتة عالية الجودة مثالية للتدريب المنزلي. توفر تمريناً فعالاً مع راحة وأمان كاملين.",
                specs: ["حمولة تصل إلى 150 كجم", "شاشة رقمية للمراقبة", "مقعد قابل للتعديل", "مقاومة سلسة", "ضوضاء منخفضة", "سهل التخزين"]
            },
            14: {
                title: "حقيبة رياضية",
                price: "199 ر.س",
                image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "حقيبة رياضية قوية وعملية توفر مساحة تخزين كبيرة. مناسبة للألعاب الرياضية والتمارين اليومية.",
                specs: ["مادة متينة ومقاومة", "حجرات تنظيم متعددة", "حزام ظهر مريح", "جيوب إضافية", "ألوان متنوعة", "خفيفة الوزن"]
            },
            15: {
                title: "أوزان حديدية للتدريب",
                price: "349 ر.س",
                image: "https://images.pexels.com/photos/417047/pexels-photo-417047.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "مجموعة أوزان حديدية عالية الجودة للتدريب المنزلي. توفر تمارين متنوعة لتقوية العضلات.",
                specs: ["حديد عالي الجودة", "أوزان متعددة متضمنة", "قبضة مريحة وآمنة", "سهل الاستخدام", "آمن وموثوق", "يدوم طويلاً"]
            },
            16: {
                title: "حصيرة تمارين سميكة",
                price: "129 ر.س",
                image: "https://images.pexels.com/photos/4327058/pexels-photo-4327058.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "حصيرة تمارين سميكة وناعمة توفر راحة وحماية. مثالية لجميع أنواع التمارين والحركات.",
                specs: ["سمك 10 مم للحماية الكاملة", "مادة ناعمة جداً", "مقاومة للرطوبة", "سهل التنظيف", "خفيف الوزن وقابل للطي", "ألوان متنوعة"]
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
    
    // Add products
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
    loadProducts(currentCategory);
    
    // Initialize Firebase
    initializeFirebase();
    
    // Setup add product modal
    setupAddProductModal();
});

// ==================== Firebase Configuration ====================
let db;
let firebaseInitialized = false;

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
        
        // Initialize Firebase
        if (!window.firebase) {
            console.error('🔴 Firebase SDK not loaded. Make sure Firebase scripts are in HTML.');
            firebaseInitialized = false;
            return;
        }

        console.log('✅ Firebase SDK loaded');
        console.log('📊 FIREBASE_CONFIG:', FIREBASE_CONFIG);
        console.log('📊 firebase.apps.length:', firebase.apps.length);

        // Try to initialize if not already initialized
        if (firebase.apps.length === 0) {
            console.log('🚀 Initializing Firebase app...');
            firebase.initializeApp(FIREBASE_CONFIG);
            console.log('✅ Firebase app initialized');
        }
        
        console.log('🚀 Getting Firestore instance...');
        db = firebase.firestore();
        firebaseInitialized = true;
        
        console.log('✅ Firebase initialized successfully!');
        console.log('✅ Firestore is ready to save products');
        console.log('💾 Database reference:', db);
    } catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        console.error('❌ Error message:', error.message);
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
        
        // Get form values
        const title = document.getElementById('productTitle').value;
        const category = document.getElementById('productCategory').value;
        const price = document.getElementById('productPrice').value;
        const image = document.getElementById('productImage').value;
        const description = document.getElementById('productDescription').value;
        const specsText = document.getElementById('productSpecs').value;
        
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
                price: price + ' ر.س',
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
                        price: price + ' ر.س',
                        image: image,
                        description: description,
                        specs: specs
                    });
                    
                    const docRef = await db.collection('products').add({
                        title: title,
                        category: category,
                        price: price + ' ر.س',
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
            
            // Success message
            alert('تم إضافة المنتج بنجاح! ✓');
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = 'حفظ المنتج';
            
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