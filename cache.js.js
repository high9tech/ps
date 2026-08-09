async function loadOfflineCache() {
    const progressElement = document.getElementById('progress');
    const statusMsg = document.getElementById('statusMsg');

    if (!('caches' in window)) {
        alert('متصفحك لا يدعم تخزين الأوفلاين (Offline Cache).');
        return;
    }

    // الملفات الأساسية للتخزين
    const filesToCache = [
        './',
        './index.html',
        './style.css',
        './cache.js'
    ];

    try {
        const cacheName = 'high-tech-ps-cache-v1';
        const cache = await caches.open(cacheName);
        
        if (statusMsg) statusMsg.innerText = "جاري حفظ الكاش للأوفلاين...";

        const total = filesToCache.length;
        for (let i = 0; i < total; i++) {
            const file = filesToCache[i];
            try {
                await cache.add(file);
            } catch (err) {
                console.warn(`تعذر تخزين الملف: ${file}`, err);
            }

            const percent = Math.round(((i + 1) / total) * 100);
            if (progressElement) {
                progressElement.innerText = `نسبة التحميل: ${percent}%`;
            }
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        if (statusMsg) {
            statusMsg.innerText = "تم حفظ الكاش بنجاح! يمكنك الآن استخدام الموقع بدون إنترنت.";
            statusMsg.style.color = "#00ff88";
        }
        alert('تم تثبيت الأوفلاين كاش بنجاح!');
    } catch (error) {
        console.error('حدث خطأ أثناء تحميل الكاش:', error);
        alert('فشل تثبيت ملفات الكاش.');
    }
}