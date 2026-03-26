const MindMap = {
    nodes: JSON.parse(localStorage.getItem('mindmapNodes')) || [],
    links: JSON.parse(localStorage.getItem('mindmapLinks')) || [],
    scale: 1,
    offsetX: 0,
    offsetY: 0,

    init() {
        this.setupCanvas();
        this.render();
        this.initInteractions();
        window.addEventListener('resize', () => this.setupCanvas());
    },

    // تهيئة التفاعل مع اللوحة (Zoom & Pan)
    initInteractions() {
        const viewport = document.getElementById('mindmap-viewport');
        const container = document.getElementById('mindmap-container');

        // 1. Zoom باستخدام بكرة الماوس
        viewport.onwheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            window.zoomMindMap(delta);
        };

        // 2. التحريك (Panning) عند سحب الخلفية
        viewport.onmousedown = (e) => {
            if (e.target !== viewport && e.target.id !== 'mindmap-board') return;
            
            let startX = e.clientX - this.offsetX;
            let startY = e.clientY - this.offsetY;
            viewport.style.cursor = 'grabbing';

            document.onmousemove = (e) => {
                this.offsetX = e.clientX - startX;
                this.offsetY = e.clientY - startY;
                this.updateTransform();
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                viewport.style.cursor = 'grab';
            };
        };
    },

    updateTransform() {
        const container = document.getElementById('mindmap-container');
        container.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
    },

    setupCanvas() {
        const canvas = document.getElementById('mindmap-canvas');
        const container = document.getElementById('mindmap-container');
        if (!canvas || !container) return;
        canvas.width = 5000; // عرض ثابت كبير جداً
        canvas.height = 5000; // ارتفاع ثابت كبير جداً
        this.drawLinks();
    },

    // ... باقي دالات drawLinks و render كما هي ...

    save() {
        localStorage.setItem('mindmapNodes', JSON.stringify(this.nodes));
        localStorage.setItem('mindmapLinks', JSON.stringify(this.links));
        this.render();
    },

    setupCanvas() {
        const canvas = document.getElementById('mindmap-canvas');
        const container = document.getElementById('mindmap-container');
        if (!canvas || !container) return;

        // ضبط حجم الكانفاس ليكون بنفس حجم الحاوية الكبيرة
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        
        this.drawLinks();
    },


    drawLinks() {
        const canvas = document.getElementById('mindmap-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        // 1. Force the canvas to match its display size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Line Style
        ctx.strokeStyle = '#6366f1'; 
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        this.links.forEach(link => {
            const fromNode = this.nodes.find(n => n.id === link.from);
            const toNode = this.nodes.find(n => n.id === link.to);

            if (fromNode && toNode) {
                // Center of the node (Node width is 200, height is roughly 80)
                const startX = fromNode.x + 100; 
                const startY = fromNode.y + 40;
                const endX = toNode.x + 100;
                const endY = toNode.y + 40;

                ctx.beginPath();
                ctx.moveTo(startX, startY);

                // Control point for the curve (vertical middle)
                const cp1y = startY + (endY - startY) / 2;
                
                // Draw a smooth S-curve
                ctx.bezierCurveTo(startX, cp1y, endX, cp1y, endX, endY);
                ctx.stroke();
            }
        });
    },

    render() {
        const board = document.getElementById('mindmap-board');
        if (!board) return;

        board.innerHTML = this.nodes.map((node) => {
            return `
            <div class="mindmap-node" 
                 onmousedown="window.startDraggingMindMap(event, '${node.id}')"
                 style="position: absolute; left: ${node.x}px; top: ${node.y}px; width: 200px; 
                        background: #1e293b; padding: 15px; border-radius: 12px; 
                        border: 1px solid #334155; cursor: grab; box-shadow: 0 10px 15px rgba(0,0,0,0.2); z-index: 20;">

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; pointer-events:none;">
                    <small style="color:#6366f1; font-weight:bold;">NODE</small>
                    <span onclick="event.stopPropagation(); window.deleteNode('${node.id}')" style="color:#ef4444; cursor:pointer; pointer-events:auto;">🗑️</span>
                </div>
                
                <input type="text" value="${node.text}" 
                       onclick="event.stopPropagation()" 
                       onchange="window.updateNodeText('${node.id}', this.value)"
                       style="background:transparent; border:none; color:white; width:100%; font-size:14px; outline:none; text-align:center;">
                
                <div onclick="event.stopPropagation(); window.addChildNode('${node.id}')" 
                     style="position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); 
                            background: #4f46e5; width: 26px; height: 24px; border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center; 
                            color: white; cursor: pointer; border: 2px solid #0b0f1a; z-index: 30;">
                    <span style="font-size: 20px; line-height: 0;">+</span>
                </div>
            </div>`;
        }).join('');
        this.drawLinks();
    }
};

// --- الدوال المصلحة باستخدام الـ ID ---

window.addNode = function() {
    const text = prompt("Node Text:");
    if (!text) return;
    const newNode = {
        id: 'node_' + Date.now(), // ID فريد
        text: text,
        x: 100,
        y: 100
    };
    MindMap.nodes.push(newNode);
    MindMap.save();
};

window.addChildNode = function(parentId) {
    // 1. اطلب النص من المستخدم الأول
    const text = prompt("Enter sub-topic title:");
    
    // لو المستخدم داس Cancel أو ساب الخانة فاضية، ما تعملش حاجة
    if (!text) return;

    const parent = MindMap.nodes.find(n => n.id === parentId);
    if (!parent) return;

    // 2. إنشاء النود الجديدة بالنص اللي اتكتب
    const newNode = {
        id: 'node_' + Date.now(),
        text: text,
        x: parent.x + (Math.random() * 100 - 50), // إزاحة أفقية بسيطة
        y: parent.y + 150 // مسافة تحت الأب
    };

    // 3. إضافة النود والربط في المصفوفات
    MindMap.nodes.push(newNode);
    MindMap.links.push({ from: parentId, to: newNode.id });

    // 4. حفظ ورسم كل شيء (بما في ذلك الخطوط)
    MindMap.save();
    
    // تأكيد إضافي لرسم الخطوط فوراً
    setTimeout(() => {
        MindMap.setupCanvas(); 
    }, 50);
};



window.startDraggingMindMap = function(e, nodeId) {
    if (e.target.tagName === 'INPUT' || e.target.innerText === '+' || e.target.innerText === '🗑️') return;

    const nodeElement = e.currentTarget;
    const nodeData = MindMap.nodes.find(n => n.id === nodeId);
    const board = document.getElementById('mindmap-board').getBoundingClientRect();
    const rect = nodeElement.getBoundingClientRect();
    
    const offset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

    function move(e) {
        let x = e.clientX - board.left - offset.x;
        let y = e.clientY - board.top - offset.y;
        
        nodeElement.style.left = x + 'px';
        nodeElement.style.top = y + 'px';
        
        nodeData.x = x;
        nodeData.y = y;
        MindMap.drawLinks(); 
    }

    function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
        localStorage.setItem('mindmapNodes', JSON.stringify(MindMap.nodes));
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
};

window.updateNodeText = (id, val) => {
    const node = MindMap.nodes.find(n => n.id === id);
    if (node) node.text = val;
    localStorage.setItem('mindmapNodes', JSON.stringify(MindMap.nodes));
};

window.deleteNode = (id) => {
    if(!confirm("Delete node?")) return;
    MindMap.nodes = MindMap.nodes.filter(n => n.id !== id);
    MindMap.links = MindMap.links.filter(l => l.from !== id && l.to !== id);
    MindMap.save();
};


// --- دالات الـ Zoom العالمية ---
window.zoomMindMap = function(factor) {
    MindMap.scale *= factor;
    // تحديد حدود للزوم (بين 0.2 و 3 أضعاف)
    MindMap.scale = Math.min(Math.max(0.2, MindMap.scale), 3);
    MindMap.updateTransform();
};

window.resetZoom = function() {
    MindMap.scale = 1;
    MindMap.offsetX = 0;
    MindMap.offsetY = 0;
    MindMap.updateTransform();
};

// تشغيل
document.addEventListener('DOMContentLoaded', () => MindMap.init());
