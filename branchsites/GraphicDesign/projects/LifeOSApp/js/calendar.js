document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    // 1. Load existing events from localStorage, or start with an empty array
    // Using a specific key name to match your OS structure
    let storedEvents = JSON.parse(localStorage.getItem('os_calendar_events')) || [];

    // Optional: Inject some default schedule blocks only if it's completely empty
    if (storedEvents.length === 0) {
        storedEvents = [
            { id: '1', title: 'Deep Work / Study', start: '2026-04-27T06:00:00', end: '2026-04-27T09:00:00', backgroundColor: '#a855f7' },
            { id: '2', title: 'Evening Workout', start: '2026-04-27T20:30:00', end: '2026-04-27T21:30:00', backgroundColor: '#10b981' }
        ];
        localStorage.setItem('os_calendar_events', JSON.stringify(storedEvents));
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        slotMinTime: '05:00:00', // Starts the view at 5 AM
        selectable: true, 
        editable: true, 
        events: storedEvents, // 2. Feed the loaded events into the calendar

        // 3. ADD: Fires when you highlight a blank time slot
        select: function(info) {
            

            tempSelectionInfo = info; // Save the time range
            // استخراج الوقت من اختيار التقويم لوضعه كقيمة افتراضية في المودال
            // startStr تكون بصيغة "2026-04-27T06:00:00"
            const startTime = info.startStr.split('T')[1].substring(0, 5);
            const endTime = info.endStr.split('T')[1].substring(0, 5);
            
            document.getElementById('event-start-time').value = startTime;
            document.getElementById('event-end-time').value = endTime;
            
            document.getElementById('event-modal').style.display = 'flex';
            document.getElementById('event-title-input').focus();
        },

        // 4. MOVE: Fires when you drag and drop an event to a new time/day
        eventDrop: function(info) {
            updateEventInStorage(info.event);
        },

        // 5. RESIZE: Fires when you drag the bottom of an event to make it longer/shorter
        eventResize: function(info) {
            updateEventInStorage(info.event);
        },

        // 6. DELETE: Fires when you click an existing event
        eventClick: function(info) {
            if (confirm(`Do you want to delete the event '${info.event.title}'?`)) {
                info.event.remove(); // Remove from screen
                
                // Filter it out of the array and update localStorage
                storedEvents = storedEvents.filter(e => e.id !== info.event.id);
                localStorage.setItem('os_calendar_events', JSON.stringify(storedEvents));
            }
        }
    });

    calendar.render();

    // Helper function to update the storage when an event is moved or resized
    function updateEventInStorage(updatedEvent) {
        const index = storedEvents.findIndex(e => e.id === updatedEvent.id);
        if (index !== -1) {
            storedEvents[index].start = updatedEvent.startStr;
            // End might be null for all-day events, so we fall back to the start string
            storedEvents[index].end = updatedEvent.endStr || updatedEvent.startStr; 
            localStorage.setItem('os_calendar_events', JSON.stringify(storedEvents));
        }
    };

    // Modal Logic
    const modal = document.getElementById('event-modal');
    const input = document.getElementById('event-title-input');

    // 1. طلب إذن التنبيهات عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    });

    document.getElementById('modal-save').onclick = () => {
        const title = document.getElementById('event-title-input').value;
        const categorySelect = document.getElementById('event-category-input');
        const selectedDate = document.getElementById('event-date-input').value;
        const startTimeManual = document.getElementById('event-start-time').value;
        const endTimeManual = document.getElementById('event-end-time').value || startTimeManual;
        const hasReminder = document.getElementById('event-reminder').checked;

        // Get the color and the text label
        const selectedColor = categorySelect.value;
        const categoryLabel = categorySelect.options[categorySelect.selectedIndex].text;

        if (title && selectedDate) {
            // Combine the manual date with the manual times
            const finalStart = `${selectedDate}T${startTimeManual}:00`;
            const finalEnd = `${selectedDate}T${endTimeManual}:00`;

            const newEvent = {
                id: Date.now().toString(),
                title: `${categoryLabel}: ${title}`,
                start: finalStart, // Use the combined string
                end: finalEnd,     // Use the combined string
                allDay: false,     // Since we are using time, it's not all day
                backgroundColor: selectedColor,
                borderColor: selectedColor,
                reminder: hasReminder,
                notified: false
            };

            calendar.addEvent(newEvent);
            
            storedEvents.push(newEvent);
            localStorage.setItem('os_calendar_events', JSON.stringify(storedEvents));

            document.dispatchEvent(new CustomEvent('calendar:event-saved', { detail: newEvent }));
            
            closeModal();
        } else {
            alert("Please enter a title and date.");
        }
    };

    document.getElementById('modal-cancel').onclick = closeModal;

    function closeModal() {
        modal.style.display = 'none';
        input.value = '';
        tempSelectionInfo = null;
        calendar.unselect();
    }

    // Close modal if clicking outside the content box
    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    };

    setInterval(() => {
        const now = new Date();
        let eventsChanged = false;

        storedEvents.forEach(event => {
            if (event.reminder && !event.notified) {
                const eventTime = new Date(event.start);
                const diffInMinutes = (eventTime - now) / (1000 * 60);

                // لو فاضل 10 دقائق أو أقل على الموعد
                if (diffInMinutes > 0 && diffInMinutes <= 10) {
                    showNotification(event.title, `موعدك القادم بعد قليل: ${eventTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
                    event.notified = true; // علامة إنه تم التنبيه
                    eventsChanged = true;
                }
            }
        });

        if (eventsChanged) {
            localStorage.setItem('os_calendar_events', JSON.stringify(storedEvents));
        }
    }, 60000); // يفحص كل دقيقة

    function showNotification(title, body) {
        if (Notification.permission === "granted") {
            new Notification(title, {
                body: body,
                icon: 'path/to/your/icon.png' // اختياري: لو عندك لوجو للأكاديمية مثلاً
            });
        }
    };

    


});


