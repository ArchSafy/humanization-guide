document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('library-grid');
    const empty = document.getElementById('library-empty');
    const status = document.getElementById('library-status');
    const errorBox = document.getElementById('library-error');

    const formatDate = (value) => {
        if (!value) return 'بدون تاريخ';
        return new Intl.DateTimeFormat('ar-SA', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(new Date(value));
    };

    const renderCard = (item) => {
        const payload = item.data || {};
        const lanes = Array.isArray(payload.lanes) ? payload.lanes : [];
        const chips = lanes.slice(0, 5).map((lane) => `<span>${lane.label}</span>`).join('');
        const totalWidth = typeof payload.totalWidth === 'number'
            ? `${payload.totalWidth.toFixed(1)} م`
            : `${lanes.reduce((sum, lane) => sum + Number(lane.width || 0), 0).toFixed(1)} م`;

        const article = document.createElement('article');
        article.className = 'builder-library-card';
        article.innerHTML = `
            <div class="builder-library-card-top">
                <div>
                    <h3>${item.name || 'بدون اسم'}</h3>
                    <p>${item.description || 'مقطع طريق محفوظ وجاهز للتعديل.'}</p>
                </div>
                <a class="builder-btn primary" href="street-builder.html?id=${item.id}"><i class="fas fa-pen-ruler"></i> فتح</a>
            </div>
            <div class="builder-library-metrics">
                <div><span>العرض</span><strong>${totalWidth}</strong></div>
                <div><span>العناصر</span><strong>${lanes.length}</strong></div>
                <div><span>آخر تحديث</span><strong>${formatDate(item.updated_at || item.created_at)}</strong></div>
            </div>
            <div class="builder-library-chips">${chips || '<span>لا توجد عناصر</span>'}</div>
        `;
        return article;
    };

    try {
        const rows = await window.roadSectionApi.list();
        grid.innerHTML = '';

        if (!rows.length) {
            empty.classList.remove('hidden');
            status.textContent = 'لا توجد عناصر محفوظة بعد';
            return;
        }

        rows.forEach((row) => grid.appendChild(renderCard(row)));
        status.textContent = `${rows.length} مشروع محفوظ`;
    } catch (error) {
        status.textContent = 'تعذّر تحميل المكتبة';
        errorBox.classList.remove('hidden');
        errorBox.textContent = 'تعذر قراءة المكتبة من Supabase. غالبًا نحتاج إنشاء الجدول أو تفعيل صلاحيات القراءة والكتابة له.';
    }
});
