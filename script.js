// Filter Gallery Outfits
function filterGallery(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Database of Multiple Photos for Each Category
const collectionsData = {
    chaniya: {
        title: "Traditional Chaniya Choli Collection",
        subtitle: "Explore magnificent mirror-work, bandhani, and heavy embroidered bridal lehengas",
        items: [
            { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80", name: "Bandhani Print Chaniya", desc: "Vibrant red and pink tie-dye style for Navratri" },
            { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80", name: "Mirror-Work Lehenga", desc: "Handcrafted Abhla work sparkling with colorful threads" },
            { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80", name: "Royal Festive Choli", desc: "Designed for grand celebrations and traditional garba" },
            { img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80", name: "Kutchhi Kutchi Work", desc: "Authentic tribal embroidery from Kutch region" }
        ]
    },
    kediyu: {
        title: "Kutchhi Kediyu Collection",
        subtitle: "Traditional pleated ethnic tunics for men",
        items: [
            { img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80", name: "Colorful Kutchhi Kediyu", desc: "Classic pleated tunic with rich thread work" },
            { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80", name: "Festive White Kediyu", desc: "Traditional cotton attire paired with loose chorno" }
        ]
    },
    patola: {
        title: "Patola Silk Saree Collection",
        subtitle: "The legendary double-ikat weave from Patan",
        items: [
            { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80", name: "Patan Patola Silk", desc: "Intricate geometric double-ikat masterpiece" },
            { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80", name: "Bridal Zari Saree", desc: "Rich gold zari borders with traditional motifs" }
        ]
    },
    phento: {
        title: "Traditional Phento & Kurta Collection",
        subtitle: "Royal headgear and festive ethnic kurta sets",
        items: [
            { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80", name: "Gujarati Turban (Phento)", desc: "Brightly colored traditional headwear" },
            { img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80", name: "Ethnic Kurta Jacket Set", desc: "Complete groom & festive wear ensemble" }
        ]
    }
};

// Open Multi-Photo Collection Modal
function openOutfitGallery(categoryKey) {
    const modal = document.getElementById('outfitModal');
    const data = collectionsData[categoryKey];

    document.getElementById('modalCategoryTitle').innerText = data.title;
    document.getElementById('modalCategorySubtitle').innerText = data.subtitle;

    const container = document.getElementById('modalImageContainer');
    container.innerHTML = ""; // Clear old photos

    // Generate cards dynamically inside modal
    data.items.forEach(item => {
        const cardHtml = `
            <div class="modal-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="modal-card-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });

    modal.style.display = 'flex';
}

// Close Modal Box
function closeModal() {
    const modal = document.getElementById('outfitModal');
    modal.style.display = 'none';
}

// Window click to close modal
window.onclick = function(event) {
    const modal = document.getElementById('outfitModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle Dynamic Review Submission
function submitReview(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value;
    const comment = document.getElementById('userComment').value;
    const outputDiv = document.getElementById('reviewOutput');

    const newReview = document.createElement('div');
    newReview.classList.add('review-box');
    newReview.innerHTML = `<strong>${name}</strong> <p style="margin-top:0.4rem; color:#444;">${comment}</p>`;

    outputDiv.prepend(newReview);

    document.getElementById('userName').value = '';
    document.getElementById('userComment').value = '';

    alert('Thank you! Your feedback has been successfully posted.');
}