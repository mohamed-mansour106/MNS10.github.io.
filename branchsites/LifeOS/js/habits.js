// --- نظام العادات (Habits) ---
const Habits = {
    list: JSON.parse(localStorage.getItem('userHabits')) || [],
    xp: parseInt(localStorage.getItem('userXP')) || 0,
    level: parseInt(localStorage.getItem('userLevel')) || 1,
    xpPerHabit: 10,

    init() {
        this.render();
        this.updateUI();
    },

    // زرار Add New Habit
    add() {
        const name = prompt("Enter habit name (e.g., Reading, Gym):");
        if (!name) return;
        
        this.list.push({
            id: 'habit-' + Date.now(),
            name: name,
            completed: false,
            history: []
        });
        this.saveAndRender();
    },

    toggle(id) {
        const habit = this.list.find(h => h.id === id);
        if (habit) {
            habit.completed = !habit.completed;
            const today = new Date().toISOString().split('T')[0];
            if (!habit.history) habit.history = [];

            if (habit.completed && !habit.history.includes(today)) {
                habit.history.push(today);
                this.addXP(this.xpPerHabit);
            }

            this.saveAndRender();
        }
    },
    

    addXP(points) {
        this.xp += points;
        let xpNeeded = this.level * 100;
        if (this.xp >= xpNeeded) {
            this.level++;
            this.xp -= xpNeeded;
            alert(`🎉 Congratulations! You reached Level ${this.level}!`);
        }
        localStorage.setItem('userXP', this.xp);
        localStorage.setItem('userLevel', this.level);
        this.updateUI();
    },

    updateUI() {
        let header = document.getElementById('habits-header');
        if(!header){
            header = document.createElement('div');
            header.id = 'habits-header';
            header.style.marginBottom = '15px';
            document.getElementById('habit-list').parentElement.prepend(header);
        }
        header.innerHTML = `<strong>Level:</strong> ${this.level} | <strong>XP:</strong> ${this.xp}`;
    },

    delete(id) {
        if(confirm('Delete this habit?')) {
            this.list = this.list.filter(h => h.id !== id);
            this.saveAndRender();
        }
    },

    delete(id) {
        if(confirm('Delete this habit?')) {
            this.list = this.list.filter(h => h.id !== id);
            this.saveAndRender();
        }
    },

    saveAndRender() {
        localStorage.setItem('userHabits', JSON.stringify(this.list));
        this.save();
        this.render();
        this.updateUI();
    },

    render() {
        const container = document.getElementById('habit-list');
        if (!container) return;

        container.innerHTML = this.list.map(h => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #0f172a; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid ${h.completed ? '#10b981' : '#3b82f6'}">
                <span style="${h.completed ? 'text-decoration: line-through; color: #64748b' : ''}; cursor:pointer;" onclick="Habits.showCalendar('${h.id}')">
                    ${h.name}
                </span>
                <div style="display:flex; gap:10px; align-items:center;">
                    <input type="checkbox" ${h.completed ? 'checked' : ''} onclick="Habits.toggle('${h.id}')">
                    <i class="fa-solid fa-pen-to-square" onclick="Habits.edit('${h.id}')" style="color:#facc15; cursor:pointer; font-size:12px;">🖊️</i>
                    <i class="fa-solid fa-xmark" onclick="Habits.delete('${h.id}')" style="color:#ef4444; cursor:pointer; font-size:12px;">🗑️</i>
                </div>
            </div>
            <div style="margin-top: 5px; color: #94a3b8; font-size: 12px;">
                <small>History: ${h.history ? h.history.join(', ') : 'No history yet'}</small>
            </div>
        `).join('');
    },

    //** */
    addFromModal() {
        const input = document.getElementById('new-habit-name');
        const name = input.value.trim();
        if (!name) return alert('Please enter a habit name.');

        this.list.push({
            id: 'habit-' + Date.now(),
            name: name,
            completed: false,
            history: []
        });

        this.saveAndRender();
        input.value = ''; // تفريغ الحقل
        document.getElementById('add-habit-modal').style.display = 'none'; // إغلاق المودال
    },
    //*****

    save() {
        localStorage.setItem('userHabits', JSON.stringify(this.list));
        localStorage.setItem('userXP', this.xp);
        localStorage.setItem('userLevel', this.level);
    },

    edit(id) {
        this.editingId = id; // حفظ الـ id مؤقتاً
        const habit = this.list.find(h => h.id === id);
        if (!habit) return;
        const input = document.getElementById('edit-habit-name');
        input.value = habit.name; // تعيين الاسم الحالي في الحقل
        document.getElementById('edit-habit-modal').style.display = 'flex';
        this.saveAndRender();
    },

    saveEdit() {
        const input = document.getElementById('edit-habit-name');
        const newName = input.value.trim();
        if (!newName) return alert('Please enter a habit name.');

        const habit = this.list.find(h => h.id === this.editingId);
        if (!habit) return;

        habit.name = newName;
        this.saveAndRender();

        input.value = '';
        document.getElementById('edit-habit-modal').style.display = 'none';
    },

    showCalendar(id) {
        const habit = this.list.find(h => h.id === id);
        if (!habit) return;

        const calendar = document.getElementById('calendar-grid');
        const progressBar = document.getElementById('progress-bar');
        calendar.innerHTML = '';
        progressBar.style.width = '0%';

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth(); 
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const monthHistory = (habit.history || []).filter(d => d.startsWith(`${year}-${String(month+1).padStart(2,'0')}`));
        const completedDays = monthHistory.length;
        const completionPercent = Math.round((completedDays / daysInMonth) * 100);

        // Animate progress bar
        setTimeout(() => {
            progressBar.style.width = completionPercent + '%';
            progressBar.textContent = completionPercent + '%';
        }, 50);

        for (let i = 0; i < firstDay; i++) {
            calendar.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = new Date(year, month, day).toISOString().split('T')[0];
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            dayCell.style.padding = '10px';
            dayCell.style.borderRadius = '8px';
            dayCell.style.textAlign = 'center';
            dayCell.style.cursor = 'default';
            dayCell.style.transition = 'background 0.3s';

            if (habit.history.includes(dateStr)) {
                dayCell.style.backgroundColor = '#10b981';
                dayCell.style.color = 'white';
            } else if (new Date(year, month, day) <= today) {
                dayCell.style.backgroundColor = '#ef4444';
                dayCell.style.color = 'white';
            } else {
                dayCell.style.backgroundColor = '#0f172a';
                dayCell.style.color = '#94a3b8';
            }

            calendar.appendChild(dayCell);
        }

        document.getElementById('habit-calendar-modal').style.display = 'flex';
    }
};

//******************************************************************* */
//**************** Health System ****************//
const Health = {
  stats: JSON.parse(localStorage.getItem('userHealth')) || { weight:70, water:0, sleep:0 },
  lastUpdate: JSON.parse(localStorage.getItem('healthLastUpdate')) || { weight:'--', water:'--', sleep:'--' },
  goal: { weight:90, water:8, sleep:8 },
  unit:'metric',

  init() { this.updateUI(); },

  openModal() { 
    document.getElementById('health-modal').classList.add('show');
    document.getElementById('input-weight').value=this.stats.weight;
    document.getElementById('input-water').value=this.stats.water;
    document.getElementById('input-sleep').value=this.stats.sleep;
    document.getElementById('unit-select').value=this.unit;
  },

  closeModal() { document.getElementById('health-modal').classList.remove('show'); },

  save() {
    const date=new Date().toLocaleDateString();
    this.stats.weight=parseFloat(document.getElementById('input-weight').value);
    this.stats.water=parseInt(document.getElementById('input-water').value);
    this.stats.sleep=parseFloat(document.getElementById('input-sleep').value);
    this.unit=document.getElementById('unit-select').value;

    this.lastUpdate.weight=date;
    this.lastUpdate.water=date;
    this.lastUpdate.sleep=date;

    localStorage.setItem('userHealth',JSON.stringify(this.stats));
    localStorage.setItem('healthLastUpdate',JSON.stringify(this.lastUpdate));
    localStorage.setItem('healthUnit',this.unit);

    this.updateUI();
    this.showFeedback();
    this.closeModal();
  },

  showFeedback(){
    const feedback=document.getElementById('health-feedback');
    feedback.classList.add('show');
    setTimeout(()=>feedback.classList.remove('show'),1500);
  },

  updateUI() {
    const dateOptions={year:'numeric',month:'short',day:'numeric'};
    const today=new Date().toLocaleDateString('en-US',dateOptions);

    // Weight
    let weightPercent=Math.min((this.stats.weight/this.goal.weight)*100,100);
    let weightColor=this.getColor(weightPercent);
    document.getElementById('weight-bar').style.width=weightPercent+'%';
    document.getElementById('weight-bar').style.background=weightColor;
    document.getElementById('weight-text').textContent=`${this.stats.weight} ${this.unit==='metric'?'kg':'lb'}`;
    document.getElementById('weight-last').textContent=`Last updated: ${this.lastUpdate.weight||'--'}`;

    // Water
    let waterPercent=Math.min((this.stats.water/this.goal.water)*100,100);
    let waterColor=this.getColor(waterPercent);
    document.getElementById('water-bar').style.width=waterPercent+'%';
    document.getElementById('water-bar').style.background=waterColor;
    document.getElementById('water-text').textContent=`${this.stats.water}/${this.goal.water} ${this.unit==='metric'?'Glasses':'ml'}`;
    document.getElementById('water-last').textContent=`Last updated: ${this.lastUpdate.water||'--'}`;

    // Sleep
    let sleepPercent=Math.min((this.stats.sleep/this.goal.sleep)*100,100);
    let sleepColor=this.getColor(sleepPercent);
    document.getElementById('sleep-bar').style.width=sleepPercent+'%';
    document.getElementById('sleep-bar').style.background=sleepColor;
    document.getElementById('sleep-text').textContent=`${this.stats.sleep}/${this.goal.sleep} ${this.unit==='metric'?'Hours':'Minutes'}`;
    document.getElementById('sleep-last').textContent=`Last updated: ${this.lastUpdate.sleep||'--'}`;
  },

  getColor(percent){
    if(percent>=80) return '#10b981'; // Green
    if(percent>=50) return '#facc15'; // Yellow
    return '#ef4444'; // Red
  }
}


/************************************************ */


const BMITracker = {
    calculate() {
        const age = parseInt(document.getElementById('bmi-age').value);
        const height = parseFloat(document.getElementById('bmi-height').value)/100; // meters
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const gender = document.getElementById('bmi-gender').value;

        if(!age || !height || !weight) {
        alert("Please fill all fields");
        return;
        }

        // حساب BMI
        const bmi = (weight / (height * height)).toFixed(1);

        // الحالة العامة BMI
        let status='';
        if(bmi<18.5) status='Underweight';
        else if(bmi<25) status='Normal';
        else if(bmi<30) status='Overweight';
        else status='Obese';

        // Estimated Calories (تقريبية حسب Mifflin-St Jeor)
        let bmr;
        if(gender==='male') bmr = 10*weight + 6.25*height*100 - 5*age + 5;
        else bmr = 10*weight + 6.25*height*100 - 5*age - 161;

        // عرض النتائج
        const resultDiv=document.getElementById('bmi-result');
        resultDiv.innerHTML=`
        <p>BMI: ${bmi}</p>
        <p>Status: ${status}</p>
        <p>Estimated Calories: ${Math.round(bmr)} kcal/day</p>
        <div class="progress-container">
            <div id="bmi-bar" class="progress-bar"></div>
        </div>
        `;

        // تحديث progress bar حسب BMI
        const bar=document.getElementById('bmi-bar');
        let percent=Math.min((bmi/40)*100,100);
        let color='';
        if(bmi<18.5) color='#facc15'; // yellow
        else if(bmi<25) color='#10b981'; // green
        else if(bmi<30) color='#f97316'; // orange
        else color='#ef4444'; // red

        setTimeout(()=>{
        bar.style.width=percent+'%';
        bar.style.background=color;
        bar.textContent=bmi;
        },50);
    }
};


//**************** Calories System ****************//
const Calories = {
  // قاعدة بيانات بسيطة (تقدر توسعها)
  foodDB: {
    rice: 130,
    chicken: 165,
    apple: 52,
    banana: 89,
    bread: 265,
    egg: 155,
    milk: 42
  },

  list: JSON.parse(localStorage.getItem('foodHistory')) || [],

  calculate() {
    const name = document.getElementById('food-name').value.toLowerCase().trim();
    const qty = parseFloat(document.getElementById('food-qty').value);

    if (!name || !qty) {
      alert('Enter food and quantity');
      return;
    }

    const calPer100 = this.foodDB[name] || 100; // default لو مش موجود
    const calories = Math.round((calPer100 * qty) / 100);

    // حفظ
    const today = new Date().toLocaleDateString();
    this.list.push({ name, qty, calories, date: today });

    localStorage.setItem('foodHistory', JSON.stringify(this.list));

    this.render(calories);
  },

  render(lastCalories = 0) {
    const today = new Date().toLocaleDateString();
    const todayFoods = this.list.filter(f => f.date === today);

    const total = todayFoods.reduce((sum, f) => sum + f.calories, 0);

    document.getElementById('food-result').innerHTML = `
      <p>Calories: ${lastCalories} kcal</p>
      <p>Total Today: ${total} kcal</p>
    `;

    document.getElementById('food-list').innerHTML = todayFoods.map(f => `
      <div style="background:#0f172a; padding:8px; border-radius:8px; margin-bottom:5px;">
        ${f.name} (${f.qty}g) - ${f.calories} kcal
      </div>
    `).join('');
  }
};

// Extend Calories System
Calories.goal = parseInt(localStorage.getItem('calorieGoal')) || 2000;

Calories.setGoal = function() {
  const goal = parseInt(document.getElementById('calorie-goal').value);
  if (!goal) return alert('Enter goal');
  this.goal = goal;
  localStorage.setItem('calorieGoal', goal);
  this.render();
};

Calories.render = function(lastCalories = 0) {
  const today = new Date().toLocaleDateString();
  const todayFoods = this.list.filter(f => f.date === today);
  const total = todayFoods.reduce((sum, f) => sum + f.calories, 0);

  document.getElementById('food-result').innerHTML = `
    <p>Calories: ${lastCalories} kcal</p>
    <p>Total Today: ${total} kcal</p>
  `;

  document.getElementById('food-list').innerHTML = todayFoods.map(f => `
    <div style="background:#0f172a; padding:8px; border-radius:8px; margin-bottom:5px;">
      ${f.name} (${f.qty}g) - ${f.calories} kcal
    </div>
  `).join('');

  // Progress bar
  const percent = Math.min((total / this.goal) * 100, 100);
  const bar = document.getElementById('calorie-bar');
  bar.style.width = percent + '%';
  bar.style.background = percent > 100 ? '#ef4444' : '#10b981';
  bar.textContent = Math.round(percent) + '%';

  document.getElementById('calorie-progress-text').textContent = `${total} / ${this.goal} kcal`;

  // Weekly chart
  const chart = document.getElementById('calorie-chart');
  chart.innerHTML = '';
  const days = 7;

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString();

    const dayTotal = this.list
      .filter(f => f.date === dateStr)
      .reduce((sum, f) => sum + f.calories, 0);

    const div = document.createElement('div');
    div.className = 'chart-day';

    const p = Math.min((dayTotal / this.goal) * 100, 100);
    div.style.background = p > 80 ? '#10b981' : p > 50 ? '#facc15' : '#ef4444';

    chart.appendChild(div);
  }
};

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  Calories.render();
});


//**************** Initialize ****************//


// تشغيل الأنظمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    Habits.init();
    Health.init();
});
