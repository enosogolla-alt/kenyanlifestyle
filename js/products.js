// Product filter
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const searchInput = document.getElementById('searchInput');

// filter by category
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        
        filterBtns.forEach(b => b.classList.remove('active'));
       
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// search filter
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();

    productCards.forEach(card => {
        const name = card.querySelector('.product-name').textContent.toLowerCase();
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});