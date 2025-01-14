document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const closeLightbox = document.getElementById('close-lightbox');
    const lightboxItems = document.getElementById('lightbox-items');
    const categoryTitle = document.getElementById('category-title');

    const categories = {
        architectural: {
            name: "Architectural Visualization",
            items: [
                { type: 'image', src: 'assets/images/archviz/interior.png', alt: 'interior', title: 'interior' },
                { type: 'image', src: 'assets/images/archviz/interior2.png', alt: 'interior', title: 'interior' },
                { type: 'image', src: 'assets/images/archviz/interior3.png', alt: 'interior', title: 'interior' },
				{ type: 'image', src: 'assets/images/archviz/interior4.png', alt: 'interior', title: 'interior' },
				{ type: 'image', src: 'assets/images/archviz/interior5.png', alt: 'interior', title: 'interior' },
				{ type: 'image', src: 'assets/images/archviz/interior6.png', alt: 'interior', title: 'interior' },
				{ type: 'image', src: 'assets/images/archviz/interior7.jpg', alt: 'interior', title: 'interior' },
				{ type: 'image', src: 'assets/images/archviz/exterior.jpg', alt: 'exterior', title: 'exterior' },
				{ type: 'image', src: 'assets/images/archviz/exterior2.png', alt: 'exterior', title: 'exterior' },
				{ type: 'image', src: 'assets/images/archviz/exterior3.png', alt: 'exterior', title: 'exterior' },
				{ type: 'image', src: 'assets/images/archviz/exterior4.jpg', alt: 'exterior', title: 'exterior' },
				{ type: 'image', src: 'assets/images/archviz/exterior5.png', alt: 'exterior', title: 'exterior' },
				{ type: 'image', src: 'assets/images/archviz/exterior6.png', alt: 'exterior', title: 'exterior' },
            ]
        },
        product: {
            name: "Product Visualization",
            items: [
                { type: 'image', src: 'assets/images/product/product1.png', alt: 'Cabernet Franc', title: 'Cabernet Franc' },
				{ type: 'image', src: 'assets/images/product/product2.png', alt: 'Cabernet Franc', title: 'Cabernet Franc' },
				{ type: 'image', src: 'assets/images/product/product3.png', alt: 'Cabernet Franc', title: 'Cabernet Franc' },
				{ type: 'image', src: 'assets/images/product/product4.png', alt: 'Cabernet Franc', title: 'Cabernet Franc' },
                { type: 'video', src: 'assets/videos/product/wine.mp4', alt: 'Cabernet Franc', title: 'Cabernet Franc' },
                { type: 'video', src: 'assets/videos/product/cola.mp4', alt: 'Coco-Cola', title: 'Coco-Cola' },
				{ type: 'video', src: 'assets/videos/product/headphone.mp4', alt: 'Headphones', title: 'Headphones' },
            ]
        },
        character: {
            name: "CGI Advertisement",
            items: [
                { type: 'video', src: 'assets/videos/cgi/Lemonade VFX.mp4', alt: 'Lemonade Drink CG Visualization', title: 'Lemonade Drink Animation' },
                { type: 'video', src: 'assets/videos/cgi/Nike.mp4', alt: 'Nike Jordans CG Visualization', title: 'Nike Jordans Animation' },
            ]
        },
        environment: {
            name: "Environment Design",
            items: [
                { type: 'image', src: 'assets/images/env/environment1.png', alt: 'Ennvironment 1', title: 'Ennvironment 1' },
                { type: 'video', src: 'assets/videos/env/env1.mp4', alt: 'Ennvironment 1', title: 'Ennvironment 1' },
                { type: 'image', src: 'assets/images/env/environment2.png', alt: 'Ennvironment 2', title: 'Ennvironment 2' },
				{ type: 'image', src: 'assets/images/env/environment3.png', alt: 'Ennvironment 3', title: 'Ennvironment 3' },
				{ type: 'video', src: 'assets/videos/env/env2.mp4', alt: 'Ennvironment 3', title: 'Ennvironment 3' },
				{ type: 'image', src: 'assets/images/env/environment4.png', alt: 'Ennvironment 2', title: 'Ennvironment 2' },
				{ type: 'image', src: 'assets/images/env/environment5.png', alt: 'Ennvironment 2', title: 'Ennvironment 2' },
				{ type: 'image', src: 'assets/images/env/environment6.png', alt: 'Ennvironment 2', title: 'Ennvironment 2' },
            ]
        }
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            openLightbox(category);
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    function openLightbox(category) {
        const categoryData = categories[category];
        categoryTitle.textContent = categoryData.name;
        lightboxItems.innerHTML = '';

        categoryData.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('lightbox-item');

            if (item.type === 'image') {
                itemElement.innerHTML = `
                    <img src="${item.src}" alt="${item.alt}">
                    <div class="lightbox-item-title">${item.title}</div>
                `;
            } else if (item.type === 'video') {
                itemElement.innerHTML = `
                    <video src="${item.src}" controls>
                        Your browser does not support the video tag.
                    </video>
                    <div class="lightbox-item-title">${item.title}</div>
                `;
            }

            lightboxItems.appendChild(itemElement);
        });

        lightbox.classList.remove('hidden');
    }
});

