let animeList = [
    { id: 1, name: "Naruto", genre: "Action", desc: "12 yoshli Naruto Uzumaki jinchuriki bo'lib, uzoq vaqt davomida hurmatga sazovor bo'lish uchun kurashadi.", image: "https://m.media-amazon.com/images/I/81L94vkJmXL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 220 }, (_, i) => i + 1) },
    { id: 2, name: "Attack on Titan", genre: "Action", desc: "Insoniyat devorlar ichida yashaydi, ulardan tashqarida ularni yeb yuboradigan titanlar yashaydi.", image: "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg", episodes: Array.from({ length: 94 }, (_, i) => i + 1) },
    { id: 3, name: "Demon Slayer", genre: "Action", desc: "Tanjiro Kamado o'z oilasini himoya qilish uchun iblis ovchisi bo'ladi.", image: "https://m.media-amazon.com/images/I/51njzqvT4ZL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 55 }, (_, i) => i + 1) },
    { id: 4, name: "My Hero Academia", genre: "Action", desc: "Izuku Midoriya super qahramon bo'lishni orzu qiladi.", image: "https://m.media-amazon.com/images/I/91pyoTZQcML._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 150 }, (_, i) => i + 1) },
    { id: 5, name: "Jujutsu Kaisen", genre: "Action", desc: "Yuji Itadori la'natlangan ruhlar bilan kurashadi.", image: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/f96a1751-86f6-4240-86a8-92a86044a9f2._CR0,22,2400,1257_SX920_CB1169409_QL70_.jpg", episodes: Array.from({ length: 47 }, (_, i) => i + 1) },
    { id: 6, name: "Tokyo Revengers", genre: "Action", desc: "Takemichi o'tmishga qaytib, do'stlarini qutqarishga harakat qiladi.", image: "https://m.media-amazon.com/images/I/51dfaTXP1OL._SX300_SY300_QL70_FMwebp_.jpg", episodes: Array.from({ length: 50 }, (_, i) => i + 1) },
    { id: 7, name: "Black Clover", genre: "Action", desc: "Asta sehrsiz dunyoda sehrgar bo'lishni orzu qiladi.", image: "https://i0.wp.com/twincitiesgeek.com/wp-content/uploads/2018/02/black-clover-banner.jpg?ssl=1", episodes: Array.from({ length: 170 }, (_, i) => i + 1) },
    { id: 8, name: "One Punch Man", genre: "Action", desc: "Saitama bitta zarba bilan har qanday dushmanni yengadi.", image: "https://sm.ign.com/ign_in/screenshot/default/one-punch-man-season-3_mw8f.jpg", episodes: Array.from({ length: 24 }, (_, i) => i + 1) },
    { id: 9, name: "Mob Psycho 100", genre: "Action", desc: "Shigeo Kageyama o'zining psixik kuchlarini boshqarishga harakat qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/e4c340e9cd882d8e2e8db3ab4b87b7d359f4e45274fd7544a989657c7c1da23d._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 25 }, (_, i) => i + 1) },
    { id: 10, name: "Dragon Ball Z", genre: "Action", desc: "Goku va do'stlari sayyorani himoya qiladi.", image: "https://m.media-amazon.com/images/I/91pyoTZQcML._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 291 }, (_, i) => i + 1) },
    { id: 11, name: "Gintama", genre: "Action", desc: "Gintoki Sakata kulgili va jangari sarguzashtlarda qatnashadi.", image: "https://m.media-amazon.com/images/S/pv-target-images/37aec2c8be55ac74e45606c289529785ae706b4d48bb85f6bd3c84f4cb05a467._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 367 }, (_, i) => i + 1) },
    { id: 12, name: "Spy x Family", genre: "Action", desc: "Twilight o'z oilasini yashirin topshiriqlar bilan boshqaradi.", image: "https://m.media-amazon.com/images/S/pv-target-images/73801b57744108cb80bd8072a9413df04c08173eb734e4a606ba459dfc508f59._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 37 }, (_, i) => i + 1) },
    { id: 13, name: "Kubo Won't Let Me Be Invisible", genre: "Action", desc: "Nagata ko'rinmas bo'lib, hayotini muvozanatlashga harakat qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/9e003ebe0060eef674c70e9edd3f32b5be275508662cc1396c5900b1226478cb._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 12 }, (_, i) => i + 1) },
    { id: 14, name: "Bleach", genre: "Action", desc: "Ichigo Kurosaki shinigami sifatida ruhlarni himoya qiladi.", image: "https://m.media-amazon.com/images/I/71triFyBxyL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 366 }, (_, i) => i + 1) },
    { id: 15, name: "Chainsaw Man", genre: "Action", desc: "Denji iblis ovchisi sifatida hayot kechiradi.", image: "https://m.media-amazon.com/images/I/81xZ25gNNEL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 12 }, (_, i) => i + 1) },
    { id: 16, name: "One Piece", genre: "Adventure", desc: "Luffy va uning jamoasi One Piece xazinasini qidiradi.", image: "https://m.media-amazon.com/images/I/91DSqxPCfeL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 1100 }, (_, i) => i + 1) },
    { id: 17, name: "Hunter x Hunter", genre: "Adventure", desc: "Gon Freecss ovchi bo'lishni orzu qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/217cd74b1df26114f43449e110c90fd1290429d6044533cfee1b85f54617b4f7._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 148 }, (_, i) => i + 1) },
    { id: 18, name: "Fullmetal Alchemist", genre: "Adventure", desc: "Edvard va Alfonse Elric alkimyo dunyosida sarguzashtlarni boshdan kechiradi.", image: "https://m.media-amazon.com/images/S/pv-target-images/b743d74a9526c5f3fe7c9189c053166a453ae3000d13669e189193db60d9510a._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 51 }, (_, i) => i + 1) },
    { id: 19, name: "Fairy Tail", genre: "Adventure", desc: "Natsu Dragneel va uning jamoasi sehrli dunyoda vazifalarni bajaradi.", image: "https://m.media-amazon.com/images/I/91492e-f2-L._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 328 }, (_, i) => i + 1) },
    { id: 20, name: "Sword Art Online", genre: "Adventure", desc: "Kirito virtual o'yin dunyosida omon qolishga harakat qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/77cc28ad78d959248a01163a780c744dbd74b0c8adb773193dcc27bd524cefff._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 96 }, (_, i) => i + 1) },
    { id: 21, name: "Vinland Saga", genre: "Adventure", desc: "Thorfinn otasining o'limi uchun qasos olishga intiladi.", image: "https://m.media-amazon.com/images/I/81AaErFcDUL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 48 }, (_, i) => i + 1) },
    { id: 22, name: "Cowboy Bebop", genre: "Adventure", desc: "Spike Spiegel va uning jamoasi mukofot ovchilari sifatida ishlaydi.", image: "https://m.media-amazon.com/images/S/pv-target-images/351d5ca6c26a3f6ccf19d1ccdc80f456516e21fb6b5f9a9a83ae0302fcb3867a._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 26 }, (_, i) => i + 1) },
    { id: 23, name: "Dr. Stone", genre: "Adventure", desc: "Senku ilmiy bilimlari orqali sivilizatsiyani qayta quradi.", image: "https://m.media-amazon.com/images/S/pv-target-images/036e40e4b762ebd606751c241dfb185de5675780bad41ab487817e1e0eb1e628._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 57 }, (_, i) => i + 1) },
    { id: 24, name: "Hunter x Hunter (2011)", genre: "Adventure", desc: "Gon Freecss ovchi bo‘lish yo‘lida davom etadi.", image: "https://m.media-amazon.com/images/I/81KDv3MIbPL._AC_UY327_FMwebp_QL65_.jpg ", episodes: Array.from({ length: 148 }, (_, i) => i + 1) },
    { id: 25, name: "Made in Abyss", genre: "Adventure", desc: "Riko va Reg chuqur tubsizlikka sayohat qiladi.", image: "https://m.media-amazon.com/images/I/81KO1MCe4hL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 13 }, (_, i) => i + 1) },
    { id: 26, name: "The Seven Deadly Sins", genre: "Adventure", desc: "Meliodas va uning jamoasi qirollikni qutqaradi.", image: "https://m.media-amazon.com/images/I/71Ufx5FGugL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 100 }, (_, i) => i + 1) },
    { id: 27, name: "Death Note", genre: "Mystery", desc: "Light Yagami o'lim daftarini topib, dunyoni o'zgartirishga harakat qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/b1424bdb31fb516a44cae343b0c4423fc7aa56f7f2496e154fa81b37fefcf0cc._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 37 }, (_, i) => i + 1) },
    { id: 28, name: "Steins;Gate", genre: "Mystery", desc: "Okabe va uning do'stlari vaqt sayohati bilan tajriba o'tkazadi.", image: "https://m.media-amazon.com/images/I/71It5k06pGL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 24 }, (_, i) => i + 1) },
    { id: 29, name: "Code Geass", genre: "Mystery", desc: "Lelouch Geass kuchi yordamida inqilob boshlaydi.", image: "https://m.media-amazon.com/images/S/pv-target-images/2665866f77df431d4eda72f26ec921126c016456d5778b196449c95669eefafe._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 50 }, (_, i) => i + 1) },
    { id: 30, name: "Re:Zero", genre: "Mystery", desc: "Subaru boshqa dunyoda o'limdan qaytish qobiliyatiga ega.", image: "https://m.media-amazon.com/images/S/pv-target-images/a54907f29a9d89e4c6b661ae53343a3bbd6fed51f0deede2e00979c03c982cee._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 50 }, (_, i) => i + 1) },
    { id: 31, name: "Neon Genesis Evangelion", genre: "Mystery", desc: "Shinji Ikari Eva robotlarini boshqarib, dunyoni himoya qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/6aeb860bb0a866b8310d2976f091f94e07988b6d23742ccdc6a195d22e9178aa._UR300,300_BL99_UR640,360_CLs%7C640,360%7C/6aeb860bb0a866b8310d2976f091f94e07988b6d23742ccdc6a195d22e9178aa.jpg%7C0,0,640,360+0,0,640,360_BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 26 }, (_, i) => i + 1) },
    { id: 32, name: "Ergo Proxy", genre: "Mystery", desc: "Re-l Mayer distopik dunyoda sirli voqealarni ochadi.", image: "https://m.media-amazon.com/images/S/pv-target-images/01172386b971c66dfea00b9018e1143b186893904eb9a1028c0e42fdfc2a9fac._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 23 }, (_, i) => i + 1) },
    { id: 33, name: "Psycho-Pass", genre: "Mystery", desc: "Tsunemori Akane jinoyatlar dunyosida ishlaydi.", image: "https://m.media-amazon.com/images/I/81L94vkJmXL._AC_UL480_FMwebp_QL65_.jpg", episodes: Array.from({ length: 41 }, (_, i) => i + 1) },
    { id: 34, name: "Paranoia Agent", genre: "Mystery", desc: "Sirli hujumlar Tokioda sodir bo‘ladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/bc9191063eb675d42812631139b611085ab99568ea13d76b4120bb2c095719db._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 13 }, (_, i) => i + 1) },
    { id: 35, name: "Monster", genre: "Mystery", desc: "Doktor Tenma o‘z hayotini xavf ostiga qo‘yadi.", image: "https://m.media-amazon.com/images/I/51I26I+pe0L._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 74 }, (_, i) => i + 1) },
    { id: 36, name: "Haikyuu", genre: "Sports", desc: "Hinata voleybol jamoasida muvaffaqiyatga erishishga harakat qiladi.", image: "https://m.media-amazon.com/images/S/pv-target-images/03cac0f366372e4af0db23d46c7da0ee357d60690ef269eba348fa88418eb5e9._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 85 }, (_, i) => i + 1) },
    { id: 37, name: "Yuri on Ice", genre: "Sports", desc: "Yuri Katsuki muz konkida uchish bo'yicha musobaqalarda ishtirok etadi.", image: "https://m.media-amazon.com/images/S/pv-target-images/b0b7886740dc15a462e9588d88d6a843e1abe1eb0c96884f4fc87aee79388fee._BR-6_AC_SX720_FMwebp_.jpg", episodes: Array.from({ length: 12 }, (_, i) => i + 1) },
    { id: 38, name: "Blue Lock", genre: "Sports", desc: "Futbolchilar dunyodagi eng yaxshi hujumchi bo'lish uchun kurashadi.", image: "https://m.media-amazon.com/images/S/pv-target-images/69481f020bfc8b018f65301cd4b2a771da6777500dc3109d7c8eae8cb6f29c21._BR-6_AC_SX720_FMwebp_.png", episodes: Array.from({ length: 24 }, (_, i) => i + 1) },
    { id: 39, name: "Kuroko's Basketball", genre: "Sports", desc: "Kuroko Tetsuya basketbol jamoasida o‘ynaydi.", image: "https://m.media-amazon.com/images/I/71a1eYbVVdL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 75 }, (_, i) => i + 1) },
    { id: 40, name: "Run with the Wind", genre: "Sports", desc: "Yosh yuguruvchilar jamoa sifatida rivojlanadi.", image: "https://m.media-amazon.com/images/I/71QhzsjN5yL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 23 }, (_, i) => i + 1) },
    { id: 41, name: "Ping Pong: The Animation", genre: "Sports", desc: "Ping-pong o‘yinlari orqali hayotiy saboqlar o‘rganiladi.", image: "https://m.media-amazon.com/images/I/71VCPkXOyHL._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 11 }, (_, i) => i + 1) },
    { id: 42, name: "Ace of Diamond", genre: "Sports", desc: "Beyzbol jamoasi chempionatga tayyorgarlik ko‘radi.", image: "https://m.media-amazon.com/images/I/71k-oAc8X2L._AC_UY327_FMwebp_QL65_.jpg", episodes: Array.from({ length: 126 }, (_, i) => i + 1) }
  ];
  
  // User data
  let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, name: "Admin", email: "admin@aniwolf.com", password: "admin12345", isAdmin: true }
  ];
  
  // Current user and favorites
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  let favorites = [];
  
  // DOM Elements
  const actionContainer = document.getElementById('action-container');
  const adventureContainer = document.getElementById('adventure-container');
  const mysteryContainer = document.getElementById('mystery-container');
  const sportsContainer = document.getElementById('sports-container');
  const searchInput = document.getElementById('search');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const adminModal = document.getElementById('admin-modal');
  const animeFormModal = document.getElementById('anime-form-modal');
  const closeLogin = document.getElementById('close-login');
  const closeRegister = document.getElementById('close-register');
  const closeAdmin = document.getElementById('close-admin');
  const closeAnimeForm = document.getElementById('close-anime-form');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  const overlay = document.getElementById('overlay');
  const adminLink = document.getElementById('admin-link');
  const mobileAdminLink = document.getElementById('mobile-admin-link');
  const mobileLoginBtn = document.getElementById('mobile-login-btn');
  const mobileRegisterBtn = document.getElementById('mobile-register-btn');
  const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
  const addAnimeBtn = document.getElementById('add-anime-btn');
  const adminAnimeContainer = document.getElementById('admin-anime-container');
  const animeForm = document.getElementById('anime-form');
  const animeFormTitle = document.getElementById('anime-form-title');
  const saveAnimeBtn = document.getElementById('save-anime-btn');
  const adminLogoutBtn = document.getElementById('admin-logout-btn');
  
  // Show toast notification
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
  
  // Initialize the app
  function init() {
    try {
      favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    } catch (e) {
      console.error('localStorage xatosi:', e);
      favorites = [];
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    loadAnimeCards();
    loadEventListeners();
    loadKorishPage();
    checkAuth();
  }
  
  // Load anime cards by category (Limited to 15 per category)
  function loadAnimeCards() {
    const containers = {
      Action: actionContainer,
      Adventure: adventureContainer,
      Mystery: mysteryContainer,
      Sports: sportsContainer
    };
  
    Object.keys(containers).forEach(category => {
      if (containers[category]) {
        containers[category].innerHTML = '';
        const categoryAnimes = animeList.filter(anime => anime.genre === category);
        const limitedAnimes = categoryAnimes.slice(0, 15); // Har bir bo‘limda maksimum 15 ta anime
        if (limitedAnimes.length < 15) {
          console.warn(`"${category}" bo'limida faqat ${limitedAnimes.length} ta anime mavjud. 15 taga yetarli emas!`);
        }
        limitedAnimes.forEach(anime => {
          const isFavorite = favorites.some(fav => fav.id === anime.id);
          containers[category].innerHTML += `
            <div class="anime-card" data-id="${anime.id}">
              <img src="${anime.image}" alt="${anime.name}" class="anime-img">
              <div class="anime-info">
                <h3 class="anime-title">${anime.name}</h3>
                <span class="anime-genre">${anime.genre}</span>
                <p class="anime-desc">${anime.desc}</p>
                <div class="anime-actions">
                  <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${anime.id}">
                    <i class="fas fa-heart"></i>
                  </button>
                  <button class="view-btn" onclick="goToAnime('${anime.name}', '${anime.image}')">Ko'rish</button>
                </div>
              </div>
            </div>
          `;
        });
      }
    });
  }
  
  // Function to navigate to korish.html
  function goToAnime(name, image) {
    window.location.href = `korish.html?anime=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}`;
  }
  
  // Load korish.html page content
  function loadKorishPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const animeName = urlParams.get('anime');
    const animeImage = urlParams.get('image');
  
    if (animeName && animeImage) {
      const anime = animeList.find(a => a.name === decodeURIComponent(animeName));
      if (anime) {
        // Populate anime details
        document.getElementById('anime-title').textContent = anime.name;
        document.getElementById('anime-genre').textContent = anime.genre;
        document.getElementById('anime-desc').textContent = anime.desc;
        document.getElementById('anime-image').src = anime.image;
  
        // Load episodes
        const episodeList = document.getElementById('episode-list');
        const moreBtn = document.getElementById('more-btn');
        const initialLimit = 12; // Dastlab 10 ta qism ko‘rsatiladi
        let visibleEpisodes = anime.episodes.slice(0, initialLimit);
  
        // Dastlabki qismlarni ko‘rsatish
        episodeList.innerHTML = visibleEpisodes.map(episode => `
          <button class="episode-btn">Qism ${episode}</button>
        `).join('');
  
        // Agar qismlar soni 10 tadan ko‘p bo‘lsa, "Yana ko‘rish" tugmasi ko‘rinadi
        if (anime.episodes.length > initialLimit) {
          moreBtn.style.display = 'block';
          moreBtn.addEventListener('click', () => {
            visibleEpisodes = anime.episodes;
            episodeList.innerHTML = visibleEpisodes.map(episode => `
              <button class="episode-btn">Qism ${episode}</button>
            `).join('');
            moreBtn.style.display = 'none'; // Tugma yashiriladi
          });
        } else {
          moreBtn.style.display = 'none'; // Agar qismlar 10 tadan kam bo‘lsa, tugma ko‘rinmaydi
        }
      } else {
        showToast('Anime topilmadi!', 'error');
      }
    }
  }
  
  // Load admin anime list
  function loadAdminAnimeList() {
    if (adminAnimeContainer) {
      adminAnimeContainer.innerHTML = '';
      animeList.forEach(anime => {
        adminAnimeContainer.innerHTML += `
          <div class="admin-anime-card" data-id="${anime.id}">
            <img src="${anime.image}" alt="${anime.name}" class="admin-anime-img">
            <h3>${anime.name}</h3>
            <p>${anime.genre}</p>
            <div class="admin-anime-actions">
              <button class="edit-btn" data-id="${anime.id}">Tahrirlash</button>
              <button class="delete-btn" data-id="${anime.id}">O'chirish</button>
              <input type="file" accept="image/*" class="image-upload-btn" data-id="${anime.id}">
            </div>
          </div>
        `;
      });
    }
  }
  
  // Toggle modal
  function toggleModal(modal) {
    if (modal && overlay) {
      modal.classList.toggle('active');
      overlay.classList.toggle('active');
      if (modal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
  
  // Handle login
  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
  
    if (!email || !password) {
      showToast('Iltimos, email va parolni kiriting!', 'error');
      return;
    }
  
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      currentUser = user;
      try {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      } catch (e) {
        console.error('localStorage saqlash xatosi:', e);
        showToast('Ma\'lumotlarni saqlashda xato!', 'error');
      }
      toggleModal(loginModal);
      checkAuth();
      showToast('Kirish muvaffaqiyatli!', 'success');
    } else {
      showToast('Email yoki parol xato!', 'error');
    }
  }
  
  // Handle register
  function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name')?.value;
    const email = document.getElementById('register-email')?.value;
    const password = document.getElementById('register-password')?.value;
    const confirm = document.getElementById('register-confirm')?.value;
  
    if (!name || !email || !password || !confirm) {
      showToast('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
      return;
    }
  
    if (password !== confirm) {
      showToast('Parollar mos emas!', 'error');
      return;
    }
  
    if (users.some(u => u.email === email)) {
      showToast('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error');
      return;
    }
  
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      isAdmin: false
    };
  
    users.push(newUser);
    currentUser = newUser;
    try {
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } catch (e) {
      console.error('localStorage saqlash xatosi:', e);
      showToast('Ma\'lumotlarni saqlashda xato!', 'error');
    }
    toggleModal(registerModal);
    checkAuth();
    showToast('Ro\'yxatdan o\'tish muvaffaqiyatli!', 'success');
  }
  
  // Handle logout
  function handleLogout() {
    currentUser = null;
    try {
      localStorage.removeItem('currentUser');
    } catch (e) {
      console.error('localStorage o\'chirish xatosi:', e);
      showToast('Chiqishda xato!', 'error');
    }
    toggleModal(adminModal);
    checkAuth();
    showToast('Chiqish muvaffaqiyatli!', 'success');
  }
  
  // Check auth status
  function checkAuth() {
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;
  
    if (currentUser) {
      loginBtn.style.display = 'none';
      registerBtn.style.display = 'none';
      mobileLoginBtn.style.display = 'none';
      mobileRegisterBtn.style.display = 'none';
      mobileLogoutBtn.style.display = 'block';
      
      authButtons.innerHTML = `
        <button class="auth-btn profile-btn">
          <i class="fas fa-user"></i> ${currentUser.name}
        </button>
        <button class="auth-btn logout-btn" id="logout-btn">Chiqish</button>
      `;
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
      }
    } else {
      loginBtn.style.display = 'block';
      registerBtn.style.display = 'block';
      mobileLoginBtn.style.display = 'block';
      mobileRegisterBtn.style.display = 'block';
      mobileLogoutBtn.style.display = 'none';
      
      authButtons.innerHTML = `
        <button class="auth-btn login-btn" id="login-btn">Kirish</button>
        <button class="auth-btn register-btn" id="register-btn">Ro'yxatdan o'tish</button>
      `;
    }
  }
  
  // Toggle favorite
  function toggleFavorite(animeId) {
    const anime = animeList.find(a => a.id === animeId);
    if (!anime) {
      showToast('Anime topilmadi!', 'error');
      return;
    }
  
    const index = favorites.findIndex(fav => fav.id === animeId);
    if (index === -1) {
      favorites.push({ id: anime.id, name: anime.name, genre: anime.genre, desc: anime.desc, image: anime.image });
      showToast(`${anime.name} sevimlilarga qo\'shildi!`, 'success');
    } else {
      favorites.splice(index, 1);
      showToast(`${anime.name} sevimlilardan o\'chirildi!`, 'warning');
    }
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('localStorage saqlash xatosi:', e);
      showToast('Ma\'lumotlarni saqlashda xato!', 'error');
    }
    loadAnimeCards();
  }
  
  // Edit anime
  function editAnime(animeId) {
    const anime = animeList.find(a => a.id === animeId);
    if (!anime) return;
  
    document.getElementById('anime-id').value = animeId;
    document.getElementById('anime-name').value = anime.name;
    document.getElementById('anime-genre').value = anime.genre;
    document.getElementById('anime-desc').value = anime.desc;
    document.getElementById('image-preview').innerHTML = anime.image ? `<img src="${anime.image}" style="max-width: 100%; margin-top: 10px; border-radius: 5px;">` : '';
    animeFormTitle.textContent = 'Anime tahrirlash';
    saveAnimeBtn.textContent = 'Tahrirlash';
    toggleModal(animeFormModal);
  }
  
  // Delete anime
  function deleteAnime(animeId) {
    animeList = animeList.filter(a => a.id !== animeId);
    favorites = favorites.filter(fav => fav.id !== animeId);
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('localStorage saqlash xatosi:', e);
      showToast('Ma\'lumotlarni saqlashda xato!', 'error');
    }
    loadAnimeCards();
    loadAdminAnimeList();
    showToast('Anime o\'chirildi!', 'success');
  }
  
  // Handle anime form
  function handleAnimeForm(e) {
    e.preventDefault();
    const id = document.getElementById('anime-id').value;
    const name = document.getElementById('anime-name').value;
    const genre = document.getElementById('anime-genre').value;
    const desc = document.getElementById('anime-desc').value;
    const file = document.getElementById('anime-image').files[0];
  
    if (!name || !genre || !desc) {
      showToast('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const image = file ? event.target.result : (id ? animeList.find(a => a.id === parseInt(id)).image : 'https://via.placeholder.com/150');
      
      if (id) {
        animeList = animeList.map(anime =>
          anime.id === parseInt(id)
            ? { ...anime, name, genre, desc, image }
            : anime
        );
        showToast('Anime tahrirlandi!', 'success');
      } else {
        animeList.push({
          id: Math.max(...animeList.map(a => a.id), 0) + 1,
          name,
          genre,
          desc,
          image
        });
        showToast('Anime qo\'shildi!', 'success');
      }
      
      loadAnimeCards();
      loadAdminAnimeList();
      toggleModal(animeFormModal);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      reader.onload({ target: { result: null } });
    }
  }
  
  // Handle image upload in admin panel
  function handleImageUpload(animeId, file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      animeList = animeList.map(anime =>
        anime.id === animeId
          ? { ...anime, image: event.target.result }
          : anime
      );
      loadAnimeCards();
      loadAdminAnimeList();
      showToast('Rasm yangilandi!', 'success');
    };
    reader.readAsDataURL(file);
  }
  
  // Open mobile menu
  function openMobileMenu() {
    if (mobileMenu && overlay) {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      console.error('Mobile menu yoki overlay topilmadi!');
      showToast('Menyuni ochishda xato!', 'error');
    }
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    if (mobileMenu && overlay) {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    } else {
      console.error('Mobile menu yoki overlay topilmadi!');
      showToast('Menyuni yopishda xato!', 'error');
    }
  }
  
  // Auto-scroll and arrow navigation
  document.querySelectorAll('.anime-grid-wrapper').forEach(wrapper => {
    const grid = wrapper.querySelector('.anime-grid');
    const leftArrow = wrapper.querySelector('.arrow-left');
    const rightArrow = wrapper.querySelector('.arrow-right');
  
    if (grid && leftArrow && rightArrow) {
      // Arrow click handlers
      leftArrow.addEventListener('click', () => {
        grid.scrollBy({ left: -300, behavior: 'smooth' });
      });
      
      rightArrow.addEventListener('click', () => {
        grid.scrollBy({ left: 300, behavior: 'smooth' });
      });
      
      // Auto-scroll every 3 seconds
      setInterval(() => {
        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
          grid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          grid.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 7000);
    }
  });
  
  // Load event listeners
  function loadEventListeners() {
    // Search
    if (searchInput) {
      searchInput.addEventListener('input', filterAnime);
    }
  
    // Auth buttons
    if (loginBtn) loginBtn.addEventListener('click', () => toggleModal(loginModal));
    if (registerBtn) registerBtn.addEventListener('click', () => toggleModal(registerModal));
    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener('click', () => {
        closeMobileMenu();
        toggleModal(loginModal);
      });
    }
    if (mobileRegisterBtn) {
      mobileRegisterBtn.addEventListener('click', () => {
        closeMobileMenu();
        toggleModal(registerModal);
      });
    }
    if (mobileLogoutBtn) {
      mobileLogoutBtn.addEventListener('click', () => {
        closeMobileMenu();
        handleLogout();
      });
    }
  
    // Close modals
    if (closeLogin) closeLogin.addEventListener('click', () => toggleModal(loginModal));
    if (closeRegister) closeRegister.addEventListener('click', () => toggleModal(registerModal));
    if (closeAdmin) closeAdmin.addEventListener('click', () => toggleModal(adminModal));
    if (closeAnimeForm) closeAnimeForm.addEventListener('click', () => toggleModal(animeFormModal));
  
    // Switch between login and register
    if (showRegister) {
      showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(loginModal);
        toggleModal(registerModal);
      });
    }
  
    if (showLogin) {
      showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(registerModal);
        toggleModal(loginModal);
      });
    }
  
    // Forms
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
  
    // Mobile menu
    if (hamburger) {
      hamburger.addEventListener('click', openMobileMenu);
    }
    if (closeMenu) {
      closeMenu.addEventListener('click', closeMobileMenu);
    }
    if (overlay) {
      overlay.addEventListener('click', closeMobileMenu);
    }
  
    // Admin
    if (adminLink) {
      adminLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser && currentUser.isAdmin) {
          toggleModal(adminModal);
          loadAdminAnimeList();
        } else {
          showToast('Siz admin emassiz!', 'error');
        }
      });
    }
  
    if (mobileAdminLink) {
      mobileAdminLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        if (currentUser && currentUser.isAdmin) {
          toggleModal(adminModal);
          loadAdminAnimeList();
        } else {
          showToast('Siz admin emassiz!', 'error');
        }
      });
    }
  
    // Anime actions
    if (actionContainer) actionContainer.addEventListener('click', handleAnimeClick);
    if (adventureContainer) adventureContainer.addEventListener('click', handleAnimeClick);
    if (mysteryContainer) mysteryContainer.addEventListener('click', handleAnimeClick);
    if (sportsContainer) sportsContainer.addEventListener('click', handleAnimeClick);
  
    function handleAnimeClick(e) {
      const favoriteBtn = e.target.closest('.favorite-btn');
      if (favoriteBtn) {
        const animeId = parseInt(favoriteBtn.getAttribute('data-id'));
        if (!isNaN(animeId)) {
          toggleFavorite(animeId);
          favoriteBtn.classList.toggle('active');
        } else {
          showToast('Anime ID topilmadi!', 'error');
        }
      }
    }
  
    // Admin actions
    if (addAnimeBtn) {
      addAnimeBtn.addEventListener('click', () => {
        animeForm.reset();
        document.getElementById('anime-id').value = '';
        animeFormTitle.textContent = 'Anime qo\'shish';
        saveAnimeBtn.textContent = 'Qo\'shish';
        document.getElementById('image-preview').innerHTML = '';
        toggleModal(animeFormModal);
      });
    }
  
    if (adminAnimeContainer) {
      adminAnimeContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
          const animeId = parseInt(e.target.getAttribute('data-id'));
          editAnime(animeId);
        }
        
        if (e.target.classList.contains('delete-btn')) {
          const animeId = parseInt(e.target.getAttribute('data-id'));
          deleteAnime(animeId);
        }
        
        if (e.target.classList.contains('image-upload-btn')) {
          const animeId = parseInt(e.target.getAttribute('data-id'));
          const file = e.target.files[0];
          if (file) {
            handleImageUpload(animeId, file);
          }
        }
      });
    }
  
    // Anime form
    if (animeForm) {
      animeForm.addEventListener('submit', handleAnimeForm);
    }
  
    // Admin logout
    if (adminLogoutBtn) {
      adminLogoutBtn.addEventListener('click', handleLogout);
    }
  
    // Image preview
    const animeImageInput = document.getElementById('anime-image');
    if (animeImageInput) {
      animeImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(event) {
            document.getElementById('image-preview').innerHTML = `
              <img src="${event.target.result}" style="max-width: 100%; margin-top: 10px; border-radius: 5px;">
            `;
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
  
  // Filter anime
  function filterAnime() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.anime-card');
  
    cards.forEach(card => {
      const title = card.querySelector('.anime-title').textContent.toLowerCase();
      const genre = card.querySelector('.anime-genre').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || genre.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Bottom navigation active state
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item1');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (href !== '#' && href !== '') {
          window.location.href = href;
        }
      });
    });
  
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  });
  
  // Initialize app
  init();