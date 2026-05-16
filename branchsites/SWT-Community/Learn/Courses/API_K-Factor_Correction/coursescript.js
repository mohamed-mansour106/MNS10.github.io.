  let completedLessons = 0;
    const totalLessons = 6;
    let currentLesson = 1;

    function markComplete(lesson, button) {
      if (!button.classList.contains('done')) {
        button.classList.add('done');
        button.innerText = 'Completed';
        button.disabled = true;
        button.classList.remove('bg-green-600');
        button.classList.add('bg-slate-700');

        completedLessons++;
        updateProgress();

        // Hide current lesson and show next
        document.getElementById('lesson' + lesson).classList.add('hidden');
        if (lesson < totalLessons) {
          currentLesson = lesson + 1;
          document.getElementById('lesson' + currentLesson).classList.remove('hidden');
          document.getElementById('lesson' + currentLesson).scrollIntoView({ behavior: 'smooth' });
        } else {
          // Show assessment after last lesson
          document.getElementById('assessment').classList.remove('hidden');
          document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    function updateProgress() {
      const percent = Math.round((completedLessons / totalLessons) * 100);

      document.getElementById('progressBar').style.width = percent + '%';
      document.getElementById('progressText').innerText = percent + '%';
    }

    function checkAnswer(button, correct) {
      const group = button.closest('.space-y-3');
      const options = group ? group.querySelectorAll('.quiz-option') : [button];

      options.forEach(option => {
        option.dataset.selected = 'false';
        option.style.background = '';
        option.style.borderColor = '';
      });

      button.dataset.selected = 'true';
      button.dataset.correct = correct ? 'true' : 'false';

      if (correct) {
        button.style.background = '#14532d';
        button.style.borderColor = '#22c55e';
      } else {
        button.style.background = '#7f1d1d';
        button.style.borderColor = '#ef4444';
      }
    }

    function calculateAPI() {
      const D7 = parseFloat(document.getElementById('apiObs').value);
      const D8 = parseFloat(document.getElementById('tempObs').value);

      if (isNaN(D7) || isNaN(D8)) {
        alert('Please enter all values');
        return;
      }

      let B2 = 141360.198 / (131.5 + D7);
      let C2 = 1 - 0.00001278 * (D8 - 60) - 0.0000000062 * Math.pow(D8 - 60, 2);
      let D2 = B2 * C2;
      let E2 = 341.0957 / Math.pow(D2, 2);
      let F2 = E2 * (D8 - 60);
      let G2 = 0.8 * F2;
      let H2 = F2 * G2;
      let I2 = -1 * (F2 + H2);
      let J2 = Math.exp(I2);
      let K2 = D2 / J2;
      let L2 = (141360.198 / K2) - 131.5;

      document.getElementById('apiResult').innerText = L2.toFixed(2);
    }

    function calculateKFactor() {
      const L2 = parseFloat(document.getElementById('api60').value);
      const D9 = parseFloat(document.getElementById('lineTemp').value);

      if (isNaN(L2) || isNaN(D9)) {
        alert('Please enter all values');
        return;
      }

      let B3 = L2 / 1000;
      let C3 = D9 / 1000;

      let D3 = 1.019803 + 0.16333 * B3 + 1.88499 * Math.pow(B3, 2)
               - 0.3341 * C3 + 0.06800001 * Math.pow(C3, 2);

      let E3 = D3 - 2.65899 * B3 * C3
               - 30.39381 * Math.pow(B3, 2) * C3
               - 1.05185 * B3 * Math.pow(C3, 2);

      let F3 = E3 - 17.25759 * Math.pow(B3, 2) * Math.pow(C3, 2);

      document.getElementById('kfactorResult').innerText = F3.toFixed(5);
    }

    function showCertificate() {
      document.getElementById('certificate').classList.remove('hidden');
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function submitFinalExam() {
      const assessment = document.getElementById('assessment');
      const questions = assessment.querySelectorAll('.space-y-10 > div');
      let answered = 0;
      let score = 0;

      questions.forEach(question => {
        const selected = question.querySelector('.quiz-option[data-selected="true"]');
        if (selected) {
          answered++;
          if (selected.dataset.correct === 'true') {
            score++;
          }
        }
      });

      const result = document.getElementById('examResult');
      result.classList.remove('hidden', 'border-green-500', 'border-red-500', 'bg-green-950', 'bg-red-950');

      if (answered < questions.length) {
        result.classList.add('border-red-500', 'bg-red-950');
        result.innerHTML = `<h3 class="text-3xl font-bold text-red-300 mb-3">Incomplete Exam</h3><p class="text-xl">You answered ${answered} of ${questions.length} questions. Please answer every question before submitting.</p>`;
        result.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const percent = Math.round((score / questions.length) * 100);
      const passed = percent >= 70;
      result.classList.add(passed ? 'border-green-500' : 'border-red-500', passed ? 'bg-green-950' : 'bg-red-950');
      result.innerHTML = `<h3 class="text-3xl font-bold ${passed ? 'text-green-300' : 'text-red-300'} mb-3">${passed ? 'Passed' : 'Review Needed'}</h3><p class="text-xl">Your score: ${score}/${questions.length} (${percent}%).</p><p class="mt-3 text-slate-300">${passed ? 'Great work. Your certificate is ready below.' : 'Review the lessons, then retake the final exam.'}</p>`;

      if (passed) {
        showCertificate();
      } else {
        document.getElementById('certificate').classList.add('hidden');
        result.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function scrollToCourse() {
      document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToAssessment() {
      document.getElementById('assessment').classList.remove('hidden');
      document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });
    }


    /******************************* */
     function legacyCheckAnswer(answer) {
            const result = document.getElementById("result");
            if (answer === true){
                result.innerHTML = "Correct Answer✅";
                result.className = "correct"
            } else {
                result.innerHTML = "wrong Answer❌";
                result.className = "wrong";
            }
        }

    /*********************************** */
     function legacyRadioCheckAnswer(quizId, correctVal) {
            const quiz = document.getElementById(quizId);
            const feedback = quiz.querySelector('.feedback');
            const selected = quiz.querySelector('input[type="radio"]:checked');

            if (!selected) {
                feedback.style.display = "block";
                feedback.className = "feedback incorrect";
                feedback.innerText = "Please select an answer first!";
                return;
            }

            feedback.style.display = "block";
            if (selected.value === correctVal) {
                feedback.className = "feedback correct";
                feedback.innerText = "Correct! You understand this principle.";
            } else {
                feedback.className = "feedback incorrect";
                feedback.innerText = "Incorrect. Review the section above and try again.";
            }
        }

    /****************************************** */
    // =========================
    // API CALCULATION
    // =========================

    const sgSlider = document.getElementById("sgSlider");
    const sgValue = document.getElementById("sgValue");
    const apiValue = document.getElementById("apiValue");
    const classification = document.getElementById("classification");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const finalAPI = document.getElementById("finalAPI");
    const oilFill = document.getElementById("oilFill");
    const tankLabel = document.getElementById("tankLabel");
    const bar = document.getElementById("bar");

    function updateAPI(){

        let sg = parseFloat(sgSlider.value);

        let firstStep = 141.5 / sg;
        let api = firstStep - 131.5;

        sgValue.innerText = sg.toFixed(2);
        apiValue.innerText = api.toFixed(2);

        step1.innerHTML = `
            141.5 ÷ ${sg.toFixed(2)} = 
            <strong>${firstStep.toFixed(2)}</strong>
        `;

        step2.innerHTML = `
            ${firstStep.toFixed(2)} - 131.5 =
            <strong>${api.toFixed(2)}</strong>
        `;

        finalAPI.innerText = `${api.toFixed(2)}° API`;

        // CLASSIFICATION

        if(api >= 31.1){

            classification.className = "classification light";
            classification.innerText = "Light Crude Oil";

            tankLabel.innerText = "Low Density Oil";
            oilFill.style.height = "35%";

            bar.style.width = "85%";
            bar.style.background = "#22c55e";

        }

        else if(api >= 22.3){

            classification.className = "classification medium";
            classification.innerText = "Medium Crude Oil";

            tankLabel.innerText = "Medium Density Oil";
            oilFill.style.height = "55%";

            bar.style.width = "55%";
            bar.style.background = "#eab308";

        }

        else{

            classification.className = "classification heavy";
            classification.innerText = "Heavy Crude Oil";

            tankLabel.innerText = "High Viscosity Oil";
            oilFill.style.height = "85%";

            bar.style.width = "25%";
            bar.style.background = "#ef4444";
        }

    }

    sgSlider.addEventListener("input", updateAPI);

    updateAPI();

    // =========================
    // PARTICLE BACKGROUND
    // =========================

    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for(let i=0;i<100;i++){

        particles.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:Math.random()*3,
            d:Math.random()*1
        });

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = "rgba(56,189,248,0.5)";

        particles.forEach(p=>{

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();

            p.y += p.d;

            if(p.y > canvas.height){
                p.y = 0;
                p.x = Math.random()*canvas.width;
            }

        });

        requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("resize",()=>{

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    });
