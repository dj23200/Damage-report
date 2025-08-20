const labelsEn = {
    title: "Building Damage Assessment Form",
    lblReportId: "Report ID:",
    lblDate: "Date:",
    lblEngineerName: "Engineer Full Name:",
    lblSyndicateNo: "Syndicate Registration No:",
    lblContact: "Contact Number:",
    lblAddress: "Address:",
    lblBuildingId: "Building ID:",
    lblZoningStatus: "Zoning Status:",
    lblHeritageZone: "Heritage Zone:",
    lblBuildingUse: "Building Use:",
    lblArea: "Area (m²):",
    lblStories: "Stories:",
    lblRooms: "Rooms:",
    lblAge: "Building Age:",
    lblConstructionType: "Construction Type:",
    lblConstructionOther: "Other Construction:",
    lblRoofType: "Roof Type:",
    lblRoofOther: "Other Roof:",
    lblOccupancy: "Occupancy:",
    lblOccupancyOther: "Other Occupancy:",
    lblVacancyBy: "Vacancy by:",
    lblVacancyOther: "Other Vacancy:",
    lblDamageBy: "Damage by:",
    lblDamageOther: "Other Damage:",
    lblHabitability: "Habitability:",
    lblProposedInterventions: "Proposed Interventions:",
    lblNotes: "Notes:",
    lblEngineerNameD: "Engineer Name:",
    lblSignature: "Signature:",
    lblSearchId: "Report ID:",
    sectionA: "Section A - Engineer Information",
    sectionB: "Section B - Location & Building Identification",
    sectionC: "Section C - Damage Overview",
    sectionD: "Section D - Proposed Interventions",
    btnSave: "Save",
    btnSearch: "Search by Report ID",
    btnSearchSearch: "Search",
    btnDelete: "Delete",
    btnBack: "Back",
    btnExport: "Export to PDF",
    alertRequired: "Report ID is required",
    alertUnique: "Report ID must be unique",
    alertSaved: "Saved successfully",
    alertNotFound: "Not found",
    alertDeleted: "Deleted successfully",
    confirmDelete: "Are you sure?",
    resultTitle: "Result"
};

const labelsAr = {
    title: "استمارة تقييم أضرار المباني",
    lblReportId: "رقم التقرير:",
    lblDate: "التاريخ:",
    lblEngineerName: "اسم المهندس:",
    lblSyndicateNo: "رقم القيد:",
    lblContact: "رقم الهاتف:",
    lblAddress: "العنوان:",
    lblBuildingId: "رقم المبنى:",
    lblZoningStatus: "التصنيف التنظيمي:",
    lblHeritageZone: "المنطقة الأثرية:",
    lblBuildingUse: "استخدام المبنى:",
    lblArea: "المساحة (م²):",
    lblStories: "الطوابق:",
    lblRooms: "الغرف:",
    lblAge: "عمر المبنى:",
    lblConstructionType: "نوع الإنشاء:",
    lblConstructionOther: "أخرى إنشاء:",
    lblRoofType: "نوع السقف:",
    lblRoofOther: "أخرى سقف:",
    lblOccupancy: "الإشغال:",
    lblOccupancyOther: "أخرى إشغال:",
    lblVacancyBy: "سبب الإخلاء:",
    lblVacancyOther: "أخرى إخلاء:",
    lblDamageBy: "سبب الأضرار:",
    lblDamageOther: "أخرى أضرار:",
    lblHabitability: "قابلية السكن:",
    lblProposedInterventions: "التوصيات:",
    lblNotes: "الملاحظات:",
    lblEngineerNameD: "اسم المهندس:",
    lblSignature: "التوقيع:",
    lblSearchId: "رقم التقرير:",
    sectionA: "القسم A - معلومات المهندس",
    sectionB: "القسم B - تحديد الموقع والمواصفات",
    sectionC: "القسم C - تقييم الأضرار",
    sectionD: "القسم D - التوصيات",
    btnSave: "حفظ",
    btnSearch: "البحث برقم التقرير",
    btnSearchSearch: "بحث",
    btnDelete: "حذف",
    btnBack: "رجوع",
    btnExport: "تصدير إلى PDF",
    alertRequired: "رقم التقرير مطلوب",
    alertUnique: "رقم التقرير يجب أن يكون فريداً",
    alertSaved: "تم الحفظ بنجاح",
    alertNotFound: "لم يتم العثور",
    alertDeleted: "تم الحذف بنجاح",
    confirmDelete: "هل أنت متأكد؟",
    resultTitle: "النتيجة"
};

const optionsEn = {
    zoningStatus: ["Inside the master plan", "Outside the master plan"],
    heritageZone: ["Inside the zone", "Outside the zone"],
    buildingUse: ["Residential", "Commercial", "Governmental"],
    area: ["2-90", "2-150-90", "2-200-150", ">=200"],
    stories: ["2-1", "4-2", "6-4", ">=6"],
    rooms: ["2-1", "4-2", "6-4", ">=6"],
    age: [">=5", "10-5", "50-10", ">=50"],
    constructionType: ["Reinforced Concrete", "Stone", "Loadbearing", "Masonry", "Mixed"],
    roofType: ["Concrete Slab", "Tile", "Vaulted", "Metal Sheet"],
    occupancy: ["Currently Occupied", "Vacant"],
    vacancyBy: ["Structural Safety Risk", "Displacement/Clother"],
    damageBy: ["Shelling", "Gunfire", "Fire", "Vandalism"],
    damageLevels: ["No Damage", "Minor", "Major", "Failed"],
    habitability: ["Habitable after rehabilitation", "Temporarily uninhabitable", "Totally uninhabitable"],
    proposedInterventions: ["Structural Consolidation", "Plumbing/Electrical Restoration", "Crack Injection & Stabilization", "Demolition & Reconstruction", "Roof Waterproofing & Repair", "Window & Door Replacement", "Urgent Temporary Shelter"],
    sectionCItems: ["Structural", "Wall Finishes", "Electrical", "Heating", "Water Infiltration", "Sanitation", "Doors/Windows"]
};

const optionsAr = {
    zoningStatus: ["داخل الخطة الرئيسية", "خارج الخطة الرئيسية"],
    heritageZone: ["داخل المنطقة", "خارج المنطقة"],
    buildingUse: ["سكني", "تجاري", "حكومي"],
    area: ["2-90", "2-150-90", "2-200-150", ">=200"],
    stories: ["2-1", "4-2", "6-4", ">=6"],
    rooms: ["2-1", "4-2", "6-4", ">=6"],
    age: [">=5", "10-5", "50-10", ">=50"],
    constructionType: ["إسمنت مسلح", "حجر", "حامل", "حجرية", "مختلط"],
    roofType: ["لوح إسمنتي", "بلاط", "مقبب", "صفيح"],
    occupancy: ["محتل حالياً", "خالي"],
    vacancyBy: ["مخاطر هيكلية", "تهجير/آخر"],
    damageBy: ["قصف", "إطلاق نار", "حريق", "تخريب"],
    damageLevels: ["لا أضرار", "طفيف", "كبير", "فاشل"],
    habitability: ["صالح بعد التأهيل", "غير صالح مؤقتاً", "غير صالح نهائياً"],
    proposedInterventions: ["تعزيز هيكلي", "ترميم سباكة/كهرباء", "حقن الشقوق واستقرار", "هدم وإعادة بناء", "عزل السقف وإصلاحه", "استبدال النوافذ والأبواب", "ملجأ مؤقت عاجل"],
    sectionCItems: ["هيكلي", "تشطيبات الجدران", "كهرباء", "تدفئة", "تسرب الماء", "صرف صحي", "أبواب/نوافذ"]
};

let currentLanguage = 'en';

function changeLanguage() {
    currentLanguage = document.getElementById('language').value;
    const lang = currentLanguage === 'ar' ? labelsAr : labelsEn;
    const opts = currentLanguage === 'ar' ? optionsAr : optionsEn;
    document.querySelector('html').lang = currentLanguage;
    document.querySelector('html').dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('formTitle').textContent = lang.title;
    document.getElementById('sectionA').textContent = lang.sectionA;
    document.getElementById('sectionB').textContent = lang.sectionB;
    document.getElementById('sectionC').textContent = lang.sectionC;
    document.getElementById('sectionD').textContent = lang.sectionD;
    document.getElementById('lblReportId').textContent = lang.lblReportId;
    document.getElementById('lblDate').textContent = lang.lblDate;
    document.getElementById('lblEngineerName').textContent = lang.lblEngineerName;
    document.getElementById('lblSyndicateNo').textContent = lang.lblSyndicateNo;
    document.getElementById('lblContact').textContent = lang.lblContact;
    document.getElementById('lblAddress').textContent = lang.lblAddress;
    document.getElementById('lblBuildingId').textContent = lang.lblBuildingId;
    document.getElementById('lblZoningStatus').textContent = lang.lblZoningStatus;
    document.getElementById('lblHeritageZone').textContent = lang.lblHeritageZone;
    document.getElementById('lblBuildingUse').textContent = lang.lblBuildingUse;
    document.getElementById('lblArea').textContent = lang.lblArea;
    document.getElementById('lblStories').textContent = lang.lblStories;
    document.getElementById('lblRooms').textContent = lang.lblRooms;
    document.getElementById('lblAge').textContent = lang.lblAge;
    document.getElementById('lblConstructionType').textContent = lang.lblConstructionType;
    document.getElementById('lblConstructionOther').textContent = lang.lblConstructionOther;
    document.getElementById('lblRoofType').textContent = lang.lblRoofType;
    document.getElementById('lblRoofOther').textContent = lang.lblRoofOther;
    document.getElementById('lblOccupancy').textContent = lang.lblOccupancy;
    document.getElementById('lblOccupancyOther').textContent = lang.lblOccupancyOther;
    document.getElementById('lblVacancyBy').textContent = lang.lblVacancyBy;
    document.getElementById('lblVacancyOther').textContent = lang.lblVacancyOther;
    document.getElementById('lblDamageBy').textContent = lang.lblDamageBy;
    document.getElementById('lblDamageOther').textContent = lang.lblDamageOther;
    document.getElementById('lblHabitability').textContent = lang.lblHabitability;
    document.getElementById('lblProposedInterventions').textContent = lang.lblProposedInterventions;
    document.getElementById('lblNotes').textContent = lang.lblNotes;
    document.getElementById('lblEngineerNameD').textContent = lang.lblEngineerNameD;
    document.getElementById('lblSignature').textContent = lang.lblSignature;
    document.getElementById('lblSearchId').textContent = lang.lblSearchId;
    document.getElementById('tblCondition').textContent = currentLanguage === 'ar' ? 'الحالة' : 'Condition';
    document.getElementById('tblStructural').textContent = opts.sectionCItems[0];
    document.getElementById('tblWallFinishes').textContent = opts.sectionCItems[1];
    document.getElementById('tblElectrical').textContent = opts.sectionCItems[2];
    document.getElementById('tblHeating').textContent = opts.sectionCItems[3];
    document.getElementById('tblWaterInfiltration').textContent = opts.sectionCItems[4];
    document.getElementById('tblSanitation').textContent = opts.sectionCItems[5];
    document.getElementById('tblDoorsWindows').textContent = opts.sectionCItems[6];
    document.getElementById('resultTitle').textContent = lang.resultTitle;
    document.getElementById('btnSave').textContent = lang.btnSave;
    document.getElementById('btnSearch').textContent = lang.btnSearch;
    document.getElementById('btnSearchSearch').textContent = lang.btnSearchSearch;
    document.getElementById('btnDelete').textContent = lang.btnDelete;
    document.getElementById('btnBack').textContent = lang.btnBack;
    document.getElementById('btnExport').textContent = lang.btnExport;

    updateSelectOptions('zoningStatus', opts.zoningStatus);
    updateSelectOptions('heritageZone', opts.heritageZone);
    updateSelectOptions('buildingUse', opts.buildingUse);
    updateSelectOptions('area', opts.area);
    updateSelectOptions('stories', opts.stories);
    updateSelectOptions('rooms', opts.rooms);
    updateSelectOptions('age', opts.age);
    updateSelectOptions('constructionType', opts.constructionType);
    updateSelectOptions('roofType', opts.roofType);
    updateSelectOptions('occupancy', opts.occupancy);
    updateSelectOptions('vacancyBy', opts.vacancyBy);
    updateSelectOptions('damageBy', opts.damageBy);
    updateSelectOptions('structuralDamage', opts.damageLevels);
    updateSelectOptions('wallFinishesDamage', opts.damageLevels);
    updateSelectOptions('electricalDamage', opts.damageLevels);
    updateSelectOptions('heatingDamage', opts.damageLevels);
    updateSelectOptions('waterInfiltrationDamage', opts.damageLevels);
    updateSelectOptions('sanitationDamage', opts.damageLevels);
    updateSelectOptions('doorsWindowsDamage', opts.damageLevels);
    updateSelectOptions('habitability', opts.habitability);
    updateSelectOptions('proposedInterventions', opts.proposedInterventions);
}

function updateSelectOptions(id, options) {
    const select = document.getElementById(id);
    select.innerHTML = '';
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
    });
}

let db;
const request = indexedDB.open('DamageDB', 1);
request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore('reports', { keyPath: 'reportId' });
};
request.onsuccess = (event) => {
    db = event.target.result;
};

function saveForm() {
    const lang = currentLanguage === 'ar' ? labelsAr : labelsEn;
    const report = {
        language: currentLanguage,
        reportId: document.getElementById('reportId').value,
        date: document.getElementById('date').value,
        engineerName: document.getElementById('engineerName').value,
        syndicateNo: document.getElementById('syndicateNo').value,
        contact: document.getElementById('contact').value,
        address: document.getElementById('address').value,
        buildingId: document.getElementById('buildingId').value,
        zoningStatus: document.getElementById('zoningStatus').value,
        heritageZone: document.getElementById('heritageZone').value,
        buildingUse: Array.from(document.getElementById('buildingUse').selectedOptions).map(opt => opt.value),
        area: document.getElementById('area').value,
        stories: document.getElementById('stories').value,
        rooms: document.getElementById('rooms').value,
        age: document.getElementById('age').value,
        constructionType: Array.from(document.getElementById('constructionType').selectedOptions).map(opt => opt.value),
        constructionOther: document.getElementById('constructionOther').value,
        roofType: Array.from(document.getElementById('roofType').selectedOptions).map(opt => opt.value),
        roofOther: document.getElementById('roofOther').value,
        occupancy: Array.from(document.getElementById('occupancy').selectedOptions).map(opt => opt.value),
        occupancyOther: document.getElementById('occupancyOther').value,
        vacancyBy: Array.from(document.getElementById('vacancyBy').selectedOptions).map(opt => opt.value),
        vacancyOther: document.getElementById('vacancyOther').value,
        damageBy: Array.from(document.getElementById('damageBy').selectedOptions).map(opt => opt.value),
        damageOther: document.getElementById('damageOther').value,
        structuralDamage: document.getElementById('structuralDamage').value,
        wallFinishesDamage: document.getElementById('wallFinishesDamage').value,
        electricalDamage: document.getElementById('electricalDamage').value,
        heatingDamage: document.getElementById('heatingDamage').value,
        waterInfiltrationDamage: document.getElementById('waterInfiltrationDamage').value,
        sanitationDamage: document.getElementById('sanitationDamage').value,
        doorsWindowsDamage: document.getElementById('doorsWindowsDamage').value,
        habitability: document.getElementById('habitability').value,
        proposedInterventions: Array.from(document.getElementById('proposedInterventions').selectedOptions).map(opt => opt.value),
        notes: document.getElementById('notes').value,
        engineerNameD: document.getElementById('engineerNameD').value,
        signature: document.getElementById('signature').value
    };

    if (!report.reportId) {
        alert(lang.alertRequired);
        return;
    }

    const transaction = db.transaction(['reports'], 'readwrite');
    const store = transaction.objectStore('reports');
    const getRequest = store.get(report.reportId);
    getRequest.onsuccess = () => {
        if (getRequest.result) {
            alert(lang.alertUnique);
            return;
        }
        store.put(report);
        transaction.oncomplete = () => {
            alert(lang.alertSaved);
            showResult(report);
        };
    };
}

function showSearch() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('search').style.display = 'block';
}

function searchForm() {
    const lang = currentLanguage === 'ar' ? labelsAr : labelsEn;
    const reportId = document.getElementById('searchId').value;
    const transaction = db.transaction(['reports'], 'readonly');
    const store = transaction.objectStore('reports');
    const request = store.get(reportId);
    request.onsuccess = () => {
        if (request.result) {
            showResult(request.result);
        } else {
            alert(lang.alertNotFound);
        }
    };
}

function showResult(report) {
    const lang = report.language === 'ar' ? labelsAr : labelsEn;
    const opts = report.language === 'ar' ? optionsAr : optionsEn;
    document.getElementById('form').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const content = document.getElementById('resultContent');
    content.innerHTML = `
        <div class="section">
            <h3>${lang.sectionA}</h3>
            <p>${lang.lblReportId} ${report.reportId}</p>
            <p>${lang.lblDate} ${report.date}</p>
            <p>${lang.lblEngineerName} ${report.engineerName}</p>
            <p>${lang.lblSyndicateNo} ${report.syndicateNo}</p>
            <p>${lang.lblContact} ${report.contact}</p>
        </div>
        <div class="section">
            <h3>${lang.sectionB}</h3>
            <p>${lang.lblAddress} ${report.address}</p>
            <p>${lang.lblBuildingId} ${report.buildingId}</p>
            <p>${lang.lblZoningStatus} ${report.zoningStatus}</p>
            <p>${lang.lblHeritageZone} ${report.heritageZone}</p>
            <p>${lang.lblBuildingUse} ${report.buildingUse.join(', ')}</p>
            <p>${lang.lblArea} ${report.area}</p>
            <p>${lang.lblStories} ${report.stories}</p>
            <p>${lang.lblRooms} ${report.rooms}</p>
            <p>${lang.lblAge} ${report.age}</p>
            <p>${lang.lblConstructionType} ${report.constructionType.join(', ')} ${report.constructionOther || ''}</p>
            <p>${lang.lblRoofType} ${report.roofType.join(', ')} ${report.roofOther || ''}</p>
            <p>${lang.lblOccupancy} ${report.occupancy.join(', ')} ${report.occupancyOther || ''}</p>
            <p>${lang.lblVacancyBy} ${report.vacancyBy.join(', ')} ${report.vacancyOther || ''}</p>
            <p>${lang.lblDamageBy} ${report.damageBy.join(', ')} ${report.damageOther || ''}</p>
        </div>
        <div class="section">
            <h3>${lang.sectionC}</h3>
            <table>
                <tr><th>#</th><th>${currentLanguage === 'ar' ? 'الحالة' : 'Condition'}</th></tr>
                <tr><td>${opts.sectionCItems[0]}</td><td>${report.structuralDamage}</td></tr>
                <tr><td>${opts.sectionCItems[1]}</td><td>${report.wallFinishesDamage}</td></tr>
                <tr><td>${opts.sectionCItems[2]}</td><td>${report.electricalDamage}</td></tr>
                <tr><td>${opts.sectionCItems[3]}</td><td>${report.heatingDamage}</td></tr>
                <tr><td>${opts.sectionCItems[4]}</td><td>${report.waterInfiltrationDamage}</td></tr>
                <tr><td>${opts.sectionCItems[5]}</td><td>${report.sanitationDamage}</td></tr>
                <tr><td>${opts.sectionCItems[6]}</td><td>${report.doorsWindowsDamage}</td></tr>
            </table>
        </div>
        <div class="section">
            <h3>${lang.sectionD}</h3>
            <p>${lang.lblHabitability} ${report.habitability}</p>
            <p>${lang.lblProposedInterventions} ${report.proposedInterventions.join(', ')}</p>
            <p>${lang.lblNotes} ${report.notes}</p>
            <p>${lang.lblEngineerNameD} ${report.engineerNameD}</p>
            <p>${lang.lblSignature} ${report.signature}</p>
        </div>
    `;
}

function deleteForm() {
    const lang = currentLanguage === 'ar' ? labelsAr : labelsEn;
    if (confirm(lang.confirmDelete)) {
        const reportId = document.getElementById('searchId').value || document.getElementById('reportId').value;
        const transaction = db.transaction(['reports'], 'readwrite');
        const store = transaction.objectStore('reports');
        store.delete(reportId);
        transaction.oncomplete = () => {
            alert(lang.alertDeleted);
            goBack();
        };
    }
}

function goBack() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const lang = currentLanguage === 'ar' ? labelsAr : labelsEn;
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(lang.title, 10, 10);

    let y = 20;
    doc.text(`${lang.lblReportId} ${document.getElementById('reportId').value}`, 10, y += 10);
    doc.text(`${lang.lblDate} ${document.getElementById('date').value}`, 10, y += 10);
    doc.autoTable({
        startY: y += 20,
        head: [['#', currentLanguage === 'ar' ? 'الحالة' : 'Condition']],
        body: [
            [optionsEn.sectionCItems[0], document.getElementById('structuralDamage').value],
            [optionsEn.sectionCItems[1], document.getElementById('wallFinishesDamage').value],
            [optionsEn.sectionCItems[2], document.getElementById('electricalDamage').value],
            [optionsEn.sectionCItems[3], document.getElementById('heatingDamage').value],
            [optionsEn.sectionCItems[4], document.getElementById('waterInfiltrationDamage').value],
            [optionsEn.sectionCItems[5], document.getElementById('sanitationDamage').value],
            [optionsEn.sectionCItems[6], document.getElementById('doorsWindowsDamage').value]
        ]
    });
    y = doc.autoTable.previous.finalY + 10;
    doc.text(`${lang.lblNotes} ${document.getElementById('notes').value}`, 10, y += 10);
    doc.text(`${lang.lblSignature} ${document.getElementById('signature').value}`, 10, y += 10);

    doc.save(`Damage_Report_${document.getElementById('reportId').value}.pdf`);
    alert(currentLanguage === 'ar' ? 'تم حفظ الـ PDF' : 'PDF saved');
}

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
script.onload = () => window.jspdf = window.jspdf.jsPDF;
document.body.appendChild(script);