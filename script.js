function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random()})`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createFloatingHearts, 300);

const gifts = {
    budget: {
        romantic: ["Handmade love coupon book", "Custom photo album", "Heart-shaped succulent"],
        practical: ["Cozy weighted blanket", "Couple's matching phone cases"],
        experience: ["DIY cooking class", "Star-gazing picnic kit"],
        creative: ["Personalized playlist", "Custom relationship poster"]
    }
};

function generateGift() {
    const budget = document.getElementById('giftBudget').value;
    const category = document.getElementById('giftCategory').value;
    const resultBox = document.getElementById('giftResult');

    const giftOptions = gifts[budget][category];
    const randomGift = giftOptions[Math.floor(Math.random() * giftOptions.length)];

    resultBox.innerHTML = `<h3>${randomGift}</h3><p>Perfect for showing your love and appreciation!</p>`;
    showToast('💝 Perfect gift found!');
    resultBox.style.background = '#fff0f3';
}

function generateDate() {
    const location = document.getElementById('dateLocation').value;
    const type = document.getElementById('dateType').value;
    const resultBox = document.getElementById('dateResult');

    const dateOptions = {
        indoor: { active: ["Cooking challenge"], relaxed: ["Movie night"] },
        outdoor: { active: ["Hiking adventure"], relaxed: ["Sunset picnic"] }
    };

    const randomDate = dateOptions[location][type][0];

    resultBox.innerHTML = `<h3>${randomDate}</h3><p>A perfect way to create lasting memories together!</p>`;
    showToast('💑 Perfect date idea generated!');
    resultBox.style.background = '#fff0f3';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.opacity = 1;
    setTimeout(() => { toast.style.opacity = 0; }, 3000);
}
