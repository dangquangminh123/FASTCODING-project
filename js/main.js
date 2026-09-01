/**
 * REANTY - REAL ESTATE LANDING PAGE
 * Pure JavaScript Interactions & Dynamic Behaviors with Font Awesome
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.innerHTML = navMenu.classList.contains('open') 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // 2. Featured Property Tabs Interaction & Data Filtering
  const propertyTabs = document.querySelectorAll('.featured-tabs .tab-btn');
  const propertiesGrid = document.querySelector('.properties-grid');

  const propertyData = {
    appartment: [
      {
        title: 'The Stokes Appartment',
        location: 'Cleveland, United States',
        price: '$2,32,120',
        highlight: true,
        btnActive: true,
        img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'The Stokes Appartment',
        location: 'Cleveland, United States',
        price: '$2,32,120',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'The Stokes Appartment',
        location: 'Cleveland, United States',
        price: '$2,32,120',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      }
    ],
    vila: [
      {
        title: 'Luxury Beverly Hills Villa',
        location: 'Los Angeles, United States',
        price: '$4,85,000',
        highlight: true,
        btnActive: true,
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Modern Seaside Haven',
        location: 'Miami, United States',
        price: '$3,92,500',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Grand Horizon Retreat',
        location: 'San Diego, United States',
        price: '$5,20,000',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
      }
    ],
    land: [
      {
        title: 'Green Valley Estate Land',
        location: 'Austin, Texas',
        price: '$1,15,000',
        highlight: true,
        btnActive: true,
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Pine Forest Hillside Lot',
        location: 'Denver, Colorado',
        price: '$1,85,000',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Sunset Ridge Commercial Lot',
        location: 'Phoenix, Arizona',
        price: '$2,10,000',
        highlight: false,
        btnActive: false,
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
      }
    ]
  };

  function renderProperties(category) {
    if (!propertiesGrid || !propertyData[category]) return;
    
    propertiesGrid.style.opacity = '0';
    propertiesGrid.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      propertiesGrid.innerHTML = propertyData[category].map(item => `
        <div class="property-card">
          <img src="${item.img}" alt="${item.title}" class="property-bg-img" loading="lazy" />
          <div class="property-info-card">
            <div class="property-info-left">
              <h3 class="prop-title">${item.title}</h3>
              <p class="prop-location">
                <i class="fa-solid fa-location-dot"></i>
                ${item.location}
              </p>
              <div class="prop-price ${item.highlight ? 'highlight' : ''}">${item.price}</div>
            </div>
            <button class="prop-action-btn ${item.btnActive ? 'btn-primary-action' : ''}" aria-label="View property">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `).join('');

      propertiesGrid.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      propertiesGrid.style.opacity = '1';
      propertiesGrid.style.transform = 'translateY(0)';
    }, 200);
  }

  propertyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      propertyTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-tab');
      renderProperties(category);
    });
  });

  // 3. Testimonials Slider (Previous & Next with Font Awesome icons)
  const testimonials = [
    {
      text: "We make sure you have a fine distance with the sickness. We make you never lose hope. We make sure you have with the sickness.",
      stars: 5,
      name: "Yunus Seyhan",
      role: "Postgraduate Student",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      text: "Reanty provided me the smoothest real estate experience. Found an outstanding apartment in Cleveland within days without any hassle!",
      stars: 5,
      name: "Sarah Jenkins",
      role: "Architectural Designer",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      text: "Exceptional brokers and top-notch customer guidance. The digital documentation and pricing transparency are truly unmatched.",
      stars: 5,
      name: "Alexander David",
      role: "Commercial Investor",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  let currentTestimonialIndex = 0;
  const testimonialImg = document.getElementById('testimonialImg');
  const testimonialText = document.getElementById('testimonialText');
  const testimonialName = document.getElementById('testimonialName');
  const testimonialRole = document.getElementById('testimonialRole');
  const btnPrevTestimonial = document.getElementById('btnPrevTestimonial');
  const btnNextTestimonial = document.getElementById('btnNextTestimonial');

  function updateTestimonial(index) {
    if (!testimonialText || !testimonialName || !testimonialRole || !testimonialImg) return;

    testimonialText.style.opacity = '0';
    testimonialImg.style.opacity = '0';

    setTimeout(() => {
      const data = testimonials[index];
      testimonialText.textContent = data.text;
      testimonialName.textContent = data.name;
      testimonialRole.textContent = data.role;
      testimonialImg.src = data.img;

      testimonialText.style.opacity = '1';
      testimonialImg.style.opacity = '1';
    }, 200);
  }

  if (btnPrevTestimonial && btnNextTestimonial) {
    btnPrevTestimonial.addEventListener('click', () => {
      btnNextTestimonial.classList.remove('active');
      btnPrevTestimonial.classList.add('active');
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });

    btnNextTestimonial.addEventListener('click', () => {
      btnPrevTestimonial.classList.remove('active');
      btnNextTestimonial.classList.add('active');
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  }

  // 4. Dream Living Spaces list item active state toggle
  const dreamFeatures = document.querySelectorAll('.dream-feature-item');
  dreamFeatures.forEach(item => {
    item.addEventListener('mouseenter', () => {
      dreamFeatures.forEach(f => f.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 5. Stepped House indicators interactive clicks
  const stepBlocks = document.querySelectorAll('.stepped-pager');
  stepBlocks.forEach(pager => {
    const numbers = pager.querySelectorAll('.stepped-numbers span:not(.dash)');
    numbers.forEach((num) => {
      num.style.cursor = 'pointer';
      num.addEventListener('click', () => {
        numbers.forEach(n => n.classList.remove('active'));
        num.classList.add('active');
      });
    });
  });

  // 6. Video Modal ("How it works" popup)
  const howCard = document.getElementById('btnHowItWorks');
  const videoModal = document.getElementById('videoModal');
  const videoClose = document.querySelector('.video-modal-close');
  const videoFrame = document.getElementById('videoFrame');

  if (howCard && videoModal && videoClose) {
    howCard.addEventListener('click', () => {
      videoModal.classList.add('active');
      if (videoFrame) {
        videoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
      }
    });

    videoClose.addEventListener('click', () => {
      videoModal.classList.remove('active');
      if (videoFrame) {
        videoFrame.src = "";
      }
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        if (videoFrame) {
          videoFrame.src = "";
        }
      }
    });
  }

  // 7. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
