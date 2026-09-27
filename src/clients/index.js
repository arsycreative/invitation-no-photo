/**
 * CLIENT DATA REGISTRY
 * ─────────────────────────────────────────────────────────────
 * Demo client data with comprehensive features for all themes.
 * ─────────────────────────────────────────────────────────────
 */

export const CLIENTS = {

  /* ════════════════════════════════════════════════════════
     1. DEMO VEGA — Celestial Luxury (Wedding)
     ════════════════════════════════════════════════════════ */
  'demo': {
    theme: 'vega',
    data: {
      groomName: 'Ardiansyah',
      groomFullName: 'Muhammad Ardiansyah, S.T.',
      groomParents: 'Bapak H. Suharto & Ibu Hj. Rahmawati',
      brideName: 'Khairunnisa',
      brideFullName: 'Khairunnisa Putri Dewi, S.Pd.',
      brideParents: 'Bapak H. Mansyur & Ibu Hj. Nurhayati',
      holyVerse: {
        arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
        translation: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
        ref: 'QS. Ar-Rum: 21',
      },
      akad: {
        name: 'Akad Nikah',
        day: 'Sabtu', date: '15 Februari 2026',
        time: '08.00 — 10.00 WIB',
        venue: 'Masjid Al-Ikhlas',
        address: 'Jl. Mawar No. 12, Kelurahan Sukamaju, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-15T08:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Ardiansyah+%26+Khairunnisa&dates=20261215T010000Z/20261215T030000Z&details=Akad+Nikah+Pernikahan+Ardiansyah+%26+Khairunnisa&location=Masjid+Al-Ikhlas+Bandung',
      },
      resepsi: {
        name: 'Walimatul Ursy',
        day: 'Sabtu', date: '15 Februari 2026',
        time: '11.00 — 15.00 WIB',
        venue: 'Gedung Serbaguna Permata Grand Ballroom',
        address: 'Jl. Melati No. 45, Antapani, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-15T11:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Ardiansyah+%26+Khairunnisa&dates=20261215T040000Z/20261215T080000Z&details=Resepsi+Pernikahan+Ardiansyah+%26+Khairunnisa&location=Gedung+Serbaguna+Permata+Bandung',
      },
      loveStory: [
        { year: '2021', title: 'Pertemuan Pertama', desc: 'Takdir mempertemukan kami di sebuah seminar di Bandung. Percakapan singkat membuka jalan menuju kisah yang lebih bermakna.' },
        { year: '2023', title: 'Menjalin Komitmen', desc: 'Setelah saling mengenal dan memahami, kami memutuskan untuk melangkah bersama dengan niat tulus dan komitmen kuat.' },
        { year: '2025', title: 'Hari Lamaran', desc: 'Di hadapan keluarga besar kedua belah pihak, ikatan suci diresmikan dengan pertunangan penuh haru dan doa restu.' },
        { year: '2026', title: 'Menuju Pelaminan', desc: 'Melangkah bersama dalam ikatan suci pernikahan untuk menyempurnakan ibadah dan membangun keluarga sakinah mawaddah warahmah.' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '8210987654', owner: 'Muhammad Ardiansyah', note: 'Rekening Pria' },
        { bank: 'Bank Mandiri', number: '1310012345678', owner: 'Khairunnisa Putri Dewi', note: 'Rekening Wanita' },
      ],
      physicalAddress: {
        recipient: 'Ardiansyah & Khairunnisa',
        phone: '0812-3456-7890',
        address: 'Jl. Mawar No. 12, Kel. Sukamaju, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40123',
      },
      wishes: [
        { id: 1, name: 'Dimas Prasetyo & Keluarga', attendance: 'Hadir', message: 'Selamat menempuh hidup baru Ardi & Nisa! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.', time: '1 jam yang lalu' },
        { id: 2, name: 'Siti Sarah, S.Pd.', attendance: 'Hadir', message: 'Barakallahu lakuma wa baraka alaika wa jamaa bainakuma fii khoir. Bahagia selalu sampai surga-Nya!', time: '3 jam yang lalu' },
        { id: 3, name: 'Bambang Sudirjo', attendance: 'Masih Ragu', message: 'Selamat ya Ardiansyah! Mohon maaf masih menyesuaikan jadwal dinas, insyaAllah diusahakan hadir.', time: '5 jam yang lalu' },
      ],
      closingMessage: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak / Ibu / Saudara/i berkenan hadir dan memberikan doa restu kepada kami.',
      rsvpLink: 'https://wa.me/628123456789',
      brandName: '✦ Undangan Digital · Tema Vega',
    },
  },

  /* ════════════════════════════════════════════════════════
     2. DEMO LYRA — Soft Botanical Romance (Wedding)
     ════════════════════════════════════════════════════════ */
  'demo-lyra': {
    theme: 'lyra',
    data: {
      groomName: 'Farhan',
      groomFullName: 'Muhammad Farhan Akbar, S.E.',
      groomParents: 'Bapak Drs. Agus Setiawan & Ibu Dra. Sri Wahyuni',
      brideName: 'Aulia',
      brideFullName: 'Aulia Rahma Putri, S.Sos.',
      brideParents: 'Bapak H. Ridwan Santoso & Ibu Hj. Dewi Lestari',
      holyVerse: {
        arabic: 'وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ',
        translation: 'Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat kebesaran Allah.',
        ref: 'QS. Az-Zariyat: 49',
      },
      akad: {
        name: 'Akad Nikah',
        day: 'Minggu', date: '23 Maret 2026',
        time: '09.00 — 11.00 WIB',
        venue: 'Masjid At-Taqwa Indah',
        address: 'Jl. Dahlia No. 8, Kecamatan Buahbatu, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-23T09:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Farhan+%26+Aulia&dates=20261223T020000Z/20261223T040000Z&details=Akad+Farhan+%26+Aulia&location=Masjid+At-Taqwa+Bandung',
      },
      resepsi: {
        name: 'Walimatul Ursy',
        day: 'Minggu', date: '23 Maret 2026',
        time: '12.00 — 16.00 WIB',
        venue: 'The Rose Garden Botanical Pavilion',
        address: 'Jl. Anggrek Raya No. 22, Dago, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-23T12:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Farhan+%26+Aulia&dates=20261223T050000Z/20261223T090000Z&details=Resepsi+Farhan+%26+Aulia&location=The+Rose+Garden+Bandung',
      },
      loveStory: [
        { year: '2020', title: 'Awal Cerita Indah', desc: 'Bertemu di kampus Universitas Padjadjaran dalam organisasi kemahasiswaan yang sama.' },
        { year: '2022', title: 'Tumbuh Bersama', desc: 'Melewati berbagai pencapaian kelulusan dan karir bersama, saling mendukung di setiap langkah.' },
        { year: '2025', title: 'Lamaran Romantis', desc: 'Melangkah ke jenjang yang lebih serius dengan memohon restu dari kedua keluarga besar.' },
        { year: '2026', title: 'Hari Bahagia', desc: 'Menyatukan cinta suci dalam ikatan pernikahan yang penuh rahmat dan keberkahan.' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '7100456123', owner: 'Muhammad Farhan Akbar', note: 'BCA' },
        { bank: 'BSI', number: '7123984510', owner: 'Aulia Rahma Putri', note: 'Bank Syariah Indonesia' },
      ],
      physicalAddress: {
        recipient: 'Farhan & Aulia',
        phone: '0813-9876-5432',
        address: 'Jl. Anggrek Raya No. 22, Dago Atas, Kota Bandung, Jawa Barat 40135',
      },
      wishes: [
        { id: 1, name: 'Annisa Tri Hapsari', attendance: 'Hadir', message: 'Happy wedding Aulia & Farhan! Semoga cintanya abadi sampai maut memisahkan.', time: '2 jam yang lalu' },
        { id: 2, name: 'Rendra & Partner', attendance: 'Hadir', message: 'Selamat bro Farhan! Akhirnya berlabuh juga di pelaminan. Sukses acaranya ya!', time: '4 jam yang lalu' },
      ],
      closingMessage: 'Kehadiran Bapak / Ibu / Saudara/i merupakan kebahagiaan yang tak ternilai bagi kami. Atas doa restu yang diberikan, kami ucapkan terima kasih yang sebesar-besarnya.',
      rsvpLink: 'https://wa.me/628123456789',
      brandName: '✦ Undangan Digital · Tema Lyra',
    },
  },

  /* ════════════════════════════════════════════════════════
     3. DEMO ORION — Galaxy Hero (Boy Birthday)
     ════════════════════════════════════════════════════════ */
  'demo-orion': {
    theme: 'orion',
    data: {
      kidName: 'Reza',
      age: 8,
      day: 'Sabtu',
      date: '12 April 2026',
      time: '14.00 — 17.00 WIB',
      isoDate: '2026-12-12T14:00:00',
      venue: 'Galaxy Adventure Center (Rumah Kak Reza)',
      address: 'Jl. Merdeka No. 88, Bukit Indah, Kota Bandung, Jawa Barat',
      mapsLink: 'https://maps.google.com',
      calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ulang+Tahun+Reza+Ke-8&dates=20261212T070000Z/20261212T100000Z&details=Pesta+Ulang+Tahun+Galaksi+Reza&location=Jl.+Merdeka+No.+88+Bandung',
      dressCode: 'Superhero / Galaxy Cosmic Outfit',
      hostParents: 'Bapak & Ibu Andi Pratama',
      message: `Hei Sobat Pahlawan! 🦸‍♂️\n\nKamu diundang untuk ikut dalam\nMisi Ulang Tahun Galaksi Reza yang ke-8!\n\nAda game seru, laser tag, hadiah keren, dan kejutan yang luar biasa! 🚀`,
      rundown: [
        { time: '14.00 WIB', title: 'Pendaratan Hero & Check-in', desc: 'Registrasi pahlawan cilik, welcome drink galaksi & pembagian topeng superhero' },
        { time: '14.30 WIB', title: 'Misi Rahasia & Games Seru', desc: 'Tantangan labirin laser, kuis interaktif pahlawan super & trivia berhadiah' },
        { time: '15.30 WIB', title: 'Momen Puncak: Tiup Lilin', desc: 'Menyanyikan lagu ulang tahun, tiup lilin kue superhero galaksi & doa bersama' },
        { time: '16.30 WIB', title: 'Pembagian Hadiah & Foto Bersama', desc: 'Goodie bag cosmic superhero & sesi foto bersama Kak Reza' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '5120894311', owner: 'Andi Pratama (Ayah Reza)', note: 'Titip Kado Online' },
        { bank: 'GOPAY / OVO', number: '0812-9988-7766', owner: 'Andi Pratama', note: 'Dompet Digital' },
      ],
      physicalAddress: {
        recipient: 'Reza Pratama',
        phone: '0812-9988-7766',
        address: 'Jl. Merdeka No. 88, Bukit Indah, Kota Bandung, Jawa Barat 40142',
      },
      wishes: [
        { id: 1, name: 'Kenzo & Mama', attendance: 'Hadir', message: 'Selamat ulang tahun Reza! Semoga jadi superhero yang hebat, makin pintar dan sholeh ya!', time: '1 jam yang lalu' },
        { id: 2, name: 'Rafa Sahabat Sekolah', attendance: 'Hadir', message: 'Horeee ga sabar main games bareng Reza! Happy birthday bro!', time: '3 jam yang lalu' },
      ],
      rsvpLink: 'https://wa.me/628123456789',
      rsvpDeadline: 'Senin, 7 April 2026',
      brandName: '✦ Undangan Digital · Tema Orion',
    },
  },

  /* ════════════════════════════════════════════════════════
     4. DEMO DENEB — Pastel Party (Girl Birthday)
     ════════════════════════════════════════════════════════ */
  'demo-deneb': {
    theme: 'deneb',
    data: {
      kidName: 'Zahra',
      age: 7,
      day: 'Minggu',
      date: '20 April 2026',
      time: '13.00 — 16.00 WIB',
      isoDate: '2026-12-20T13:00:00',
      venue: 'Rumah Zahra Sayang (Taman Bunga)',
      address: 'Jl. Bunga Mawar No. 5, Sukasari, Kota Bandung, Jawa Barat',
      mapsLink: 'https://maps.google.com',
      calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pesta+Ulang+Tahun+Zahra+Ke-7&dates=20261220T060000Z/20261220T090000Z&details=Pesta+Pastel+Ulang+Tahun+Zahra&location=Jl.+Bunga+Mawar+No.+5+Bandung',
      dressCode: 'Nuansa Warna Pastel (Pink, Lilac, Mint, Peach)',
      hostParents: 'Bapak & Ibu Dian Kusuma',
      message: `Hii teman-teman tersayang! 🎀\n\nZahra mengundang kamu ke pesta ulang tahunnya yang ke-7!\n\nAda kue lapis pelangi, balon cantik, cupcake manis, dan banyak kejutan seru menanti kamu! 🌈🎂`,
      rundown: [
        { time: '13.00 WIB', title: 'Penyambutan Teman & Welcome Cupcake', desc: 'Registrasi teman-teman, photo booth lucu & bando pita pastel' },
        { time: '13.30 WIB', title: 'Fun Party Games & Karaoke Ceria', desc: 'Tebak lagu Disney, game balon estafet & pembagian boneka lucu' },
        { time: '14.30 WIB', title: 'Tiup Lilin Kue Pelangi & Make a Wish', desc: 'Nyanyi bareng, potong kue ulang tahun pelangi & doa restu' },
        { time: '15.30 WIB', title: 'Goodie Bag Manis & Foto Kenangan', desc: 'Pembagian souvenir kotak ajaib Zahra & foto seru bersama' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '6040129871', owner: 'Dian Kusuma (Ibu Zahra)', note: 'Kado Kasih Zahra' },
        { bank: 'GOPAY / DANA', number: '0813-2211-4455', owner: 'Dian Kusuma', note: 'Dompet Digital' },
      ],
      physicalAddress: {
        recipient: 'Zahra Kusuma',
        phone: '0813-2211-4455',
        address: 'Jl. Bunga Mawar No. 5, Sukasari, Kota Bandung, Jawa Barat 40152',
      },
      wishes: [
        { id: 1, name: 'Alya & Bunda', attendance: 'Hadir', message: 'Selamat ulang tahun Zahra cantik! Semoga makin pintar, sholehah, dan bahagia selalu! 💖', time: '1 jam yang lalu' },
        { id: 2, name: 'Nayla Teman TK', attendance: 'Hadir', message: 'Happy 7th Birthday Zahra! Aku udah siapin gaun pastel buat pesta nanti! 🎉', time: '2 jam yang lalu' },
      ],
      rsvpLink: 'https://wa.me/628123456789',
      rsvpDeadline: 'Kamis, 17 April 2026',
      brandName: '✦ Undangan Digital · Tema Deneb',
    },
  },

  /* ════════════════════════════════════════════════════════
     5. DEMO CASTOR — Royal Prestige (Wedding)
     ════════════════════════════════════════════════════════ */
  'demo-castor': {
    theme: 'castor',
    data: {
      groomName: 'Fauzan',
      groomFullName: 'Fauzan Al-Hakim, S.H., M.H.',
      groomParents: 'Bapak KH. Ahmad Taufik & Ibu Hj. Siti Maryam',
      brideName: 'Aisyah',
      brideFullName: 'Aisyah Nur Fadilah, S.Psi.',
      brideParents: 'Bapak H. Bakri Santoso & Ibu Hj. Fatimah',
      holyVerse: {
        arabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        translation: 'Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta mengumpulkan kalian berdua dalam kebaikan.',
        ref: 'HR. Abu Dawud',
      },
      akad: {
        name: 'Akad Nikah',
        day: 'Jumat', date: '6 Juni 2026',
        time: '08.00 — 10.00 WIB',
        venue: 'Masjid Agung Al-Falah',
        address: 'Jl. Karapitan No. 10, Kewilayahan Bandung, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-06T08:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Fauzan+%26+Aisyah&dates=20261206T010000Z/20261206T030000Z&details=Akad+Nikah+Fauzan+%26+Aisyah&location=Masjid+Agung+Al-Falah+Bandung',
      },
      resepsi: {
        name: 'Walimatul Ursy',
        day: 'Jumat', date: '6 Juni 2026',
        time: '11.00 — 15.00 WIB',
        venue: 'Grand Royal Palace Ballroom',
        address: 'Jl. Asia Afrika No. 99, Kota Bandung, Jawa Barat',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-06T11:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Fauzan+%26+Aisyah&dates=20261206T040000Z/20261206T080000Z&details=Resepsi+Pernikahan+Fauzan+%26+Aisyah&location=Grand+Royal+Palace+Bandung',
      },
      loveStory: [
        { year: '2019', title: 'Pertemuan Takdir', desc: 'Dipertemukan dalam sebuah simposium hukum dan psikologi di Universitas Indonesia.' },
        { year: '2022', title: 'Taaruf & Kesepakatan', desc: 'Menjalani proses taaruf dengan restu penuh dari kedua orang tua dan ulama keluarga.' },
        { year: '2025', title: 'Khitbah Resmi', desc: 'Prosesi khitbah khidmat dihadiri sanak keluarga besar dengan penyerahan tanda ikatan.' },
        { year: '2026', title: 'Walimah Agung', desc: 'Melangsungkan akad nikah dan walimatul ursy sebagai awal peradaban rumah tangga mulia.' },
      ],
      digitalGifts: [
        { bank: 'BSI', number: '7890123456', owner: 'Fauzan Al-Hakim', note: 'Bank Syariah Indonesia' },
        { bank: 'BCA', number: '8110992341', owner: 'Aisyah Nur Fadilah', note: 'BCA' },
      ],
      physicalAddress: {
        recipient: 'Fauzan & Aisyah',
        phone: '0811-2233-4455',
        address: 'Jl. Asia Afrika No. 99, Grand Residence Tower A-12, Kota Bandung, Jawa Barat 40111',
      },
      wishes: [
        { id: 1, name: 'Prof. Dr. H. Mulyadi', attendance: 'Hadir', message: 'Selamat kepada ananda Fauzan dan Aisyah. Semoga berkah selalu dan menjadi keluarga teladan.', time: '1 jam yang lalu' },
        { id: 2, name: 'Keluarga Besar Santoso', attendance: 'Hadir', message: 'Alhamdulillah, selamat atas pernikahan Fauzan & Aisyah. Doa terbaik menyertai kalian berdua.', time: '3 jam yang lalu' },
      ],
      closingMessage: 'Dengan segala kerendahan hati, kami memohon kehadiran Bapak / Ibu / Saudara/i untuk turut mendoakan dan merestui pernikahan kami.',
      rsvpLink: 'https://wa.me/628123456789',
      brandName: '✦ Undangan Digital · Tema Castor',
    },
  },

  /* ════════════════════════════════════════════════════════
     6. DEMO ALTAIR — Modern Minimalist (Wedding)
     ════════════════════════════════════════════════════════ */
  'demo-altair': {
    theme: 'altair',
    data: {
      groomName: 'Daffa',
      groomFullName: 'Daffa Ramadhani, S.Kom.',
      groomParents: 'Bapak Ir. Hendra Wijaya & Ibu Ir. Yuni Astuti',
      brideName: 'Nadia',
      brideFullName: 'Nadia Maharani, S.Ds.',
      brideParents: 'Bapak Dr. Rendra Surya & Ibu Dr. Laila Nurul',
      holyVerse: {
        arabic: 'هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ',
        translation: 'Mereka adalah pakaian bagimu, dan kamu adalah pakaian bagi mereka.',
        ref: 'QS. Al-Baqarah: 187',
      },
      akad: {
        name: 'Akad Nikah',
        day: 'Sabtu', date: '5 Juli 2026',
        time: '09.00 — 11.00 WIB',
        venue: 'Masjid Agung Al-Azhar',
        address: 'Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan, DKI Jakarta',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-05T09:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Daffa+%26+Nadia&dates=20261205T020000Z/20261205T040000Z&details=Akad+Nikah+Daffa+%26+Nadia&location=Masjid+Al-Azhar+Jakarta',
      },
      resepsi: {
        name: 'Resepsi Pernikahan',
        day: 'Sabtu', date: '5 Juli 2026',
        time: '12.00 — 17.00 WIB',
        venue: 'The Glass House at The Ritz-Carlton Pacific Place',
        address: 'SCBD Lot 15, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta',
        mapsLink: 'https://maps.google.com',
        isoDate: '2026-12-05T12:00:00',
        calendarLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Daffa+%26+Nadia&dates=20261205T050000Z/20261205T100000Z&details=Resepsi+Daffa+%26+Nadia&location=The+Ritz-Carlton+Jakarta',
      },
      loveStory: [
        { year: '2021', title: 'Design & Code Met', desc: 'Daffa sebagai software engineer dan Nadia sebagai UI/UX designer berkolaborasi dalam proyek desain teknologi.' },
        { year: '2023', title: 'Shared Vision', desc: 'Menemukan keselarasan prinsip, cita-cita, dan pandangan hidup masa depan bersama.' },
        { year: '2025', title: 'The Proposal', desc: 'Sebuah momen hangat di penghujung tahun saat Daffa meminta restu untuk melangkah ke jenjang pelaminan.' },
        { year: '2026', title: 'A New Chapter', desc: 'Mengikat janji suci seumur hidup dalam perayaan modern yang intim dan berkesan.' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '5271894012', owner: 'Daffa Ramadhani', note: 'BCA Prioritas' },
        { bank: 'Bank Mandiri', number: '1370098451230', owner: 'Nadia Maharani', note: 'Mandiri' },
      ],
      physicalAddress: {
        recipient: 'Daffa & Nadia',
        phone: '0812-1122-3344',
        address: 'Apartment Senopati Penthouse Tower 2, Kebayoran Baru, Jakarta Selatan 12190',
      },
      wishes: [
        { id: 1, name: 'Kevin & Sarah', attendance: 'Hadir', message: 'Congratulations Daffa & Nadia! Wishing you both a lifetime of happiness, love and joy.', time: '1 jam yang lalu' },
        { id: 2, name: 'Tech & Design Team', attendance: 'Hadir', message: 'Selamat bro Daffa & sis Nadia! Pasangan terkeren. Have a wonderful wedding day!', time: '2 jam yang lalu' },
      ],
      closingMessage: 'Kehadiran dan doa restu Anda adalah hadiah terindah untuk kami. Terima kasih atas ketulusan hati Anda.',
      rsvpLink: 'https://wa.me/628123456789',
      brandName: 'Undangan Digital · Tema Altair',
    },
  },

  /* ════════════════════════════════════════════════════════
     7. DEMO SIRIUS — Walimatul Khitan (Sunatan)
     ════════════════════════════════════════════════════════ */
  'demo-sirius': {
    theme: 'sirius',
    data: {
      kidName: 'Muhammad Rayyan Al-Fatih',
      nickName: 'Rayyan',
      parents: 'Bapak H. Ilham Fauzi & Ibu Hj. Annisa Rahma',
      doaKhitan: {
        arabic: 'بَارَكَ اللهُ لَكَ فِي الْمَوْهُوْبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ',
        translation: 'Semoga Allah memberkahimu atas anak yang dianugerahkan kepadamu, semoga engkau bersyukur kepada Sang Pemberi, dan semoga anak ini tumbuh menjadi anak sholeh yang berbakti.',
        ref: 'Doa Keberkahan Anak Sholeh',
      },
      events: [
        {
          tag: '✦ Acara Utama',
          title: 'Walimatul Khitan & Doa Syukuran',
          date: 'Ahad, 14 Juni 2026',
          time: '09.00 — 12.00 WIB',
          venue: 'Kediaman Keluarga Besar Fauzi',
          address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        },
        {
          tag: '✦ Ramah Tamah',
          title: 'Jamuan Makan Siang & Tasyakuran',
          date: 'Ahad, 14 Juni 2026',
          time: '12.00 — 15.00 WIB',
          venue: 'Taman Asri Syukuran Rayyan',
          address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung',
          mapsLink: 'https://maps.google.com',
        }
      ],
      targetDate: '2026-12-14T09:00:00',
      digitalGifts: [
        { bank: 'BSI', number: '7192830192', owner: 'Muhammad Rayyan Al-Fatih', note: 'Tabungan Anak' },
        { bank: 'BCA', number: '7829102931', owner: 'Ilham Fauzi', note: 'Rekening Ayah' },
      ],
      physicalAddress: {
        recipient: 'Rayyan & Keluarga H. Ilham Fauzi',
        phone: '0812-9876-5432',
        address: 'Jl. Emerald Sanctuary No. 8, Antapani, Kota Bandung, Jawa Barat 40291',
      },
      wishes: [
        { id: 1, name: 'Ustadz Ahmad & Keluarga', attendance: 'Hadir', message: 'Selamat atas khitanan ananda Rayyan! Semoga lekas pulih dan tumbuh menjadi pemuda yang sholeh, tangguh, dan berbakti kepada orang tua.', time: '1 jam yang lalu' },
        { id: 2, name: 'Keluarga Om Fariz', attendance: 'Hadir', message: 'Barakallah jagoan Rayyan! Hebat sekali sudah berani disunat. Semoga berkah selalu!', time: '2 jam yang lalu' },
      ],
      closingMessage: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir serta memberikan doa restu untuk ananda kami.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Tamu Undangan',
      brandName: '✦ Undangan Digital · Tema Sirius Khitan',
    },
  },

  /* ════════════════════════════════════════════════════════
     8. DEMO POLLUX — Aqiqah & Tasyakuran Kelahiran
     ════════════════════════════════════════════════════════ */
  'demo-pollux': {
    theme: 'pollux',
    data: {
      babyName: 'Azkadina Rayna Humaira',
      nickName: 'Azkadina',
      meaning: 'Wanita sholehah yang taat pada agama, berjiwa murni laksana ratu pembawa cahaya kedamaian.',
      birthDate: 'Senin, 18 Mei 2026',
      weight: '3.3 kg',
      length: '50 cm',
      parents: 'Bapak Reza Mahendra & Ibu Sarah Amalia',
      holyVerse: {
        arabic: 'كُلُّ غُلَامٍ رَهِينَةٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى',
        translation: 'Setiap anak tergadaikan dengan aqiqahnya, disembelihkan untuknya pada hari ketujuh, dicukur rambutnya dan diberi nama.',
        ref: 'HR. Abu Dawud & At-Tirmidzi',
      },
      events: [
        {
          tag: '✦ Prosesi Utama',
          title: 'Tasyakuran & Pembacaan Sholawat',
          date: 'Ahad, 21 Juni 2026',
          time: '09.30 — 11.30 WIB',
          venue: 'Kediaman Keluarga Mahendra',
          address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        },
        {
          tag: '✦ Jamuan Kasih',
          title: 'Santap Siang & Doa Keberkahan',
          date: 'Ahad, 21 Juni 2026',
          time: '11.30 — 14.30 WIB',
          venue: 'Kediaman Keluarga Mahendra',
          address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung',
          mapsLink: 'https://maps.google.com',
        }
      ],
      targetDate: '2026-12-21T09:30:00',
      digitalGifts: [
        { bank: 'BSI', number: '7123456789', owner: 'Reza Mahendra', note: 'Kado Kasih Aqiqah' },
        { bank: 'BCA', number: '2830192831', owner: 'Sarah Amalia', note: 'Tabungan Bayi' },
      ],
      physicalAddress: {
        recipient: 'Baby Azkadina & Ibu Sarah',
        phone: '0813-8899-7766',
        address: 'Jl. Taman Sari Indah No. 12, Sukajadi, Kota Bandung 40162',
      },
      wishes: [
        { id: 1, name: 'Bude Rini & Om Toni', attendance: 'Hadir', message: 'Alhamdulillah, selamat atas kelahiran putri cantiknya! Semoga baby Azkadina tumbuh sehat, cerdas, dan sholehah.', time: '30 menit yang lalu' },
        { id: 2, name: 'Tante Maya', attendance: 'Hadir', message: 'Barakallahu fiik Sarah & Reza! Senang sekali dengar kabar bahagianya, insyaAllah kami hadir.', time: '2 jam yang lalu' },
      ],
      closingMessage: 'Tiada kata yang dapat kami sampaikan selain rasa syukur dan terima kasih yang mendalam atas kehadiran serta doa restu Bapak / Ibu / Saudara/i untuk putri kecil kami.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Tamu Undangan',
      brandName: '✦ Undangan Digital · Tema Pollux Aqiqah',
    },
  },

  /* ════════════════════════════════════════════════════════
     9. DEMO SPICA — Tunangan / Lamaran (The Engagement)
     ════════════════════════════════════════════════════════ */
  'demo-spica': {
    theme: 'spica',
    data: {
      groomName: 'Farhan',
      groomFullName: 'Farhan Pratama, S.T.',
      groomParents: 'Bapak Ir. Bambang Suryo & Ibu Rina Wati',
      brideName: 'Clarissa',
      brideFullName: 'Clarissa Aurelia, B.A.',
      brideParents: 'Bapak Anton Wijaya & Ibu Diana Sastra',
      quote: 'Ketika dua hati memutuskan untuk saling menggenapi dan melangkah bersama dalam sebuah ikatan suci pertunangan.',
      events: [
        {
          tag: '✦ Prosesi Utama',
          title: 'Prosesi Lamaran & Pertukaran Cincin',
          date: 'Sabtu, 8 Agustus 2026',
          time: '10.00 — 12.00 WIB',
          venue: 'The Terracotta Garden Pavilion',
          address: 'Jl. Dago Giri No. 88, Lembang, Jawa Barat',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        },
        {
          tag: '✦ Jamuan Kasih',
          title: 'Ramah Tamah & Santap Siang Intim',
          date: 'Sabtu, 8 Agustus 2026',
          time: '12.00 — 14.30 WIB',
          venue: 'The Terracotta Garden Pavilion',
          address: 'Jl. Dago Giri No. 88, Lembang, Jawa Barat',
          mapsLink: 'https://maps.google.com',
        }
      ],
      targetDate: '2026-12-08T10:00:00',
      loveStory: [
        { year: '2022', title: 'Pertemuan Tak Disengaja', desc: 'Saling bersua di sebuah kafe arsitektur di Bandung. Obrolan hangat tentang kopi dan seni membuka jalan rasa.' },
        { year: '2024', title: 'Perjalanan Dua Hati', desc: 'Menjelajahi impian bersama, saling menguatkan di tengah kesibukan karier masing-masing.' },
        { year: '2026', title: 'Menyematkan Janji', desc: 'Mengikat komitmen suci lamaran di hadapan kedua keluarga besar tercinta menuju gerbang pernikahan.' },
      ],
      digitalGifts: [
        { bank: 'BCA', number: '7310293847', owner: 'Farhan Pratama', note: 'Rekening Pria' },
        { bank: 'Bank Mandiri', number: '1320019283746', owner: 'Clarissa Aurelia', note: 'Rekening Wanita' },
      ],
      physicalAddress: {
        recipient: 'Farhan & Clarissa',
        phone: '0812-4455-6677',
        address: 'The Terracotta Villa Residence No. 8, Dago Atas, Bandung 40135',
      },
      wishes: [
        { id: 1, name: 'Gita & Rendy', attendance: 'Hadir', message: 'Selamat atas pertunangannya Farhan & Clarissa! Lancar terus sampai hari H yaa.', time: '1 jam yang lalu' },
        { id: 2, name: 'Sahabat Kampus', attendance: 'Hadir', message: 'Finally step ini tercapai! Bahagia banget lihat kalian berdua. Congrats guys!', time: '3 jam yang lalu' },
      ],
      closingMessage: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak / Ibu / Saudara/i berkenan hadir untuk memberikan doa restu bagi langkah awal kami berdua.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Tamu Undangan',
      brandName: '✦ Undangan Digital · Tema Spica Engagement',
    },
  },

  /* ════════════════════════════════════════════════════════
     10. DEMO ANTARES — Ulang Tahun Pernikahan (Anniversary)
     ════════════════════════════════════════════════════════ */
  'demo-antares': {
    theme: 'antares',
    data: {
      coupleNames: 'Darmawan & Ratih',
      husbandFullName: 'Darmawan Sutrisno, S.E.',
      wifeFullName: 'Ratih Ayu Wardhani, S.Pd.',
      anniversaryYear: '25 Tahun',
      anniversarySubtitle: 'Silver Wedding Anniversary',
      quote: 'Dua puluh lima tahun mengarungi samudra kehidupan bersama. Setiap detik adalah saksi bertumbuhnya cinta, kesabaran, dan anugerah terindah dari Tuhan.',
      quoteAuthor: 'Darmawan & Ratih',
      milestones: [
        { year: '2001', title: 'Ikrar Suci Pernikahan', description: 'Menyatukan dua hati dan berjanji saling setia dalam suka maupun duka di hadapan keluarga dan para saksi.' },
        { year: '2005', title: 'Anugerah Buah Hati Pertama', description: 'Keluarga kecil kami diberkahi dengan hadirnya buah hati tercinta yang mengisi hari-hari penuh keceriaan.' },
        { year: '2016', title: 'Membangun Bahtera Impian', description: 'Melewati berbagai tantangan hidup bersama, saling menguatkan dan mendirikan rumah tangga yang penuh kehangatan.' },
        { year: '2026', title: '25 Tahun Penuh Cinta & Syukur', description: 'Merayakan perak pernikahan dengan rasa syukur tak terhingga atas setiap berkah dan kasih yang terus bertumbuh.' },
      ],
      events: [
        {
          tag: '✦ Acara Utama',
          title: 'Ibadah / Syukuran Pembaharuan Janji',
          date: 'Sabtu, 19 September 2026',
          time: '16.00 — 18.00 WIB',
          venue: 'Grand Velvet Ballroom, The Heritage',
          address: 'Jl. Diponegoro No. 42, Citarum, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        },
        {
          tag: '✦ Malam Keakraban',
          title: 'Gala Dinner & Perayaan 25 Tahun',
          date: 'Sabtu, 19 September 2026',
          time: '18.30 — 21.30 WIB',
          venue: 'Grand Velvet Ballroom, The Heritage',
          address: 'Jl. Diponegoro No. 42, Citarum, Kota Bandung',
          mapsLink: 'https://maps.google.com',
        }
      ],
      targetDate: '2026-12-19T16:00:00',
      digitalGifts: [
        { bank: 'BCA', number: '0129837465', owner: 'Darmawan Sutrisno', note: 'Kado Syukur Perak' },
        { bank: 'Bank Mandiri', number: '1310098765432', owner: 'Ratih Ayu Wardhani', note: 'Rekening Bersama' },
      ],
      physicalAddress: {
        recipient: 'Keluarga Darmawan & Ratih',
        phone: '0811-2233-4455',
        address: 'Jl. Diponegoro No. 42, Citarum, Bandung Wetan, Kota Bandung 40115',
      },
      wishes: [
        { id: 1, name: 'dr. Hendra & Keluarga', attendance: 'Hadir', message: 'Happy 25th Silver Anniversary Mas Darmawan & Mbak Ratih! Sungguh inspirasi keluarga panutan bagi kami semua.', time: '1 jam yang lalu' },
        { id: 2, name: 'Anak-Anak Tercinta (Kevin & Audrey)', attendance: 'Hadir', message: 'Terima kasih Papa & Mama atas limpahan kasih sayang selama ini. We love you so much!', time: '2 jam yang lalu' },
      ],
      closingMessage: 'Merupakan kehormatan dan kebahagiaan tak terhingga bagi kami sekeluarga apabila Bapak / Ibu / Sahabat berkenan hadir dan berbagi kebahagiaan dalam malam peringatan penuh syukur ini.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Tamu Terhormat',
      brandName: '✦ Undangan Digital · Tema Antares Anniversary',
    },
  },

  /* ════════════════════════════════════════════════════════
     11. DEMO CAPELLA — Wisuda & Graduation Party
     ════════════════════════════════════════════════════════ */
  'demo-capella': {
    theme: 'capella',
    data: {
      graduateName: 'Aisyah Salsabila',
      graduateFullName: 'dr. Aisyah Salsabila, S.Ked.',
      degree: 'Sarjana Kedokteran (S.Ked.)',
      faculty: 'Fakultas Kedokteran',
      university: 'Universitas Padjadjaran',
      honors: 'Cum Laude · IPK 3.92',
      parents: 'Putri tercinta dari Bapak H. Hendra Gunawan & Ibu Hj. Siti Maryam',
      quote: 'Pendidikan bukan hanya tentang meraih gelar, melainkan tentang dedikasi nurani untuk mengabdi, meringankan beban sesama, dan menebar kemaslahatan bagi umat.',
      quoteAuthor: 'Aisyah Salsabila',
      academicJourney: [
        { year: '2022', title: 'Masa Pre-Klinik & Laboratorium', description: 'Menempa pondasi ilmu anatomi, fisiologi, dan dasar-dasar kedokteran klinis dengan penuh dedikasi.' },
        { year: '2024', title: 'Penelitian & Publikasi Jurnal Ilmiah', description: 'Menuntaskan karya tulis ilmiah mengenai epidemiologi klinis dan mempublikasikan hasil riset di simposium nasional.' },
        { year: '2026', title: 'Yudisium & Kelulusan Sarjana Kedokteran', description: 'Meraih predikat Cum Laude dan bersiap mengawali babak baru pengabdian profesi dokter.' },
      ],
      events: [
        {
          tag: '✦ Sidang Terbuka',
          title: 'Upacara Wisuda Gelombang IV',
          date: 'Rabu, 11 November 2026',
          time: '08.00 — 12.00 WIB',
          venue: 'Graha Sanusi Hardjadinata',
          address: 'Jl. Dipati Ukur No. 35, Lebakgede, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        },
        {
          tag: '✦ Tasyakuran & Syukuran',
          title: 'Graduation Dinner & Ramah Tamah',
          date: 'Rabu, 11 November 2026',
          time: '18.30 — 21.00 WIB',
          venue: 'The Pavilion Sky Garden',
          address: 'Jl. Ir. H. Juanda No. 120, Dago, Kota Bandung',
          mapsLink: 'https://maps.google.com',
        }
      ],
      targetDate: '2026-11-11T08:00:00',
      digitalGifts: [
        { bank: 'BCA', number: '7729102834', owner: 'Aisyah Salsabila', note: 'Kado Wisuda' },
        { bank: 'Bank Mandiri', number: '1310087654321', owner: 'Aisyah Salsabila', note: 'Apresiasi Studi' },
      ],
      physicalAddress: {
        recipient: 'dr. Aisyah Salsabila, S.Ked.',
        phone: '0812-3344-5566',
        address: 'Jl. Dago Asri No. 15, Dago, Coblong, Kota Bandung 40135',
      },
      wishes: [
        { id: 1, name: 'Fakultas Kedokteran Angkatan 2022', attendance: 'Hadir', message: 'Selamat atas gelar dokternya dr. Aisyah! Bangga sekali dengan pencapaian Cum Laude-mu. Sukses co-ass nanti!', time: '1 jam yang lalu' },
        { id: 2, name: 'Keluarga Besar dr. Gunawan', attendance: 'Hadir', message: 'Alhamdulillah, selamat atas kelulusan ananda Aisyah. Semoga berkah ilmunya dan jadi dokter yang amanah.', time: '4 jam yang lalu' },
      ],
      closingMessage: 'Ungkapan terima kasih yang tulus atas segala doa restu, dukungan moral, dan kasih sayang Bapak / Ibu / Sahabat selama perjalanan studi ini hingga meraih kelulusan.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Sahabat & Tamu Terhormat',
      brandName: '✦ Undangan Digital · Tema Capella Graduation',
    },
  },

  /* ════════════════════════════════════════════════════════
     12. DEMO RIGEL — Baby Shower Celebration
     ════════════════════════════════════════════════════════ */
  'demo-rigel': {
    theme: 'rigel',
    data: {
      momName: 'Natasha',
      dadName: 'Randy',
      babyTag: 'A Sweet Little Blessing is on the Way!',
      expectedSeason: 'Perkiraan Lahir: Akhir Oktober 2026',
      quote: 'Sebuah keajaiban kecil telah hadir di dalam rahim, membawa sejuta cinta, harapan hangat, dan kebahagiaan tak terhingga bagi kita semua.',
      quoteAuthor: 'Natasha & Randy',
      activities: [
        { icon: '🍼', name: 'Fun Baby Games & Tebak Gender', desc: 'Permainan seru tebak tanggal lahir, nama bayi, dan doorprize menarik.' },
        { icon: '✨', name: 'Doa Kasih & Restu Ibu Hamil', desc: 'Untaian doa bersama untuk kesehatan, kelancaran persalinan, dan keselamatan.' },
        { icon: '🧁', name: 'Afternoon Tea & Pastry Bar', desc: 'Menikmati hidangan teh sore yang manis, dessert hangat, dan mocktail segar.' },
      ],
      events: [
        {
          tag: '✦ Perayaan Intim',
          title: 'Baby Shower & Afternoon Tea Gathering',
          date: 'Minggu, 18 Oktober 2026',
          time: '14.00 — 17.00 WIB',
          venue: 'Le Petit Glasshouse & Bistro',
          address: 'Jl. Riau No. 54, Citarum, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        }
      ],
      targetDate: '2026-10-18T14:00:00',
      digitalGifts: [
        { bank: 'BCA', number: '5120987654', owner: 'Natasha Pratiwi', note: 'Baby Registry Gift' },
        { bank: 'Bank Mandiri', number: '1370019283745', owner: 'Randy Kusuma', note: 'Perlengkapan Bayi' },
      ],
      physicalAddress: {
        recipient: 'Natasha & Randy (Baby Shower)',
        phone: '0812-7788-9900',
        address: 'Jl. Riau No. 54, Citarum, Bandung Wetan, Kota Bandung 40115',
      },
      wishes: [
        { id: 1, name: 'Priscillia & Geng Arisan', attendance: 'Hadir', message: 'Cant wait to meet the little bundle of joy! Sehat-sehat terus ya calon mama Natasha sayang!', time: '45 menit yang lalu' },
        { id: 2, name: 'Om Bryan', attendance: 'Hadir', message: 'Congrats Natasha & Randy! Semoga persalinannya lancar dan bayinya sehat sempurna.', time: '2 jam yang lalu' },
      ],
      closingMessage: 'Kehadiran, tawa ceria, dan doa tulus dari sahabat serta keluarga tersayang adalah kado terindah yang sangat kami nantikan.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Sahabat Tersayang',
      brandName: '✦ Undangan Digital · Tema Rigel Baby Shower',
    },
  },

  /* ════════════════════════════════════════════════════════
     13. DEMO ALDEBARAN — Pengajian, Tahlilan & Doa Bersama
     ════════════════════════════════════════════════════════ */
  'demo-aldebaran': {
    theme: 'aldebaran',
    data: {
      honoreeName: 'H. Ahmad Baihaqi bin H. Dahlan',
      eventTitle: 'Pengajian, Tahlil & Doa Bersama',
      eventSubtitle: 'Memperingati 100 Hari Berpulangnya ke Rahmatullah',
      hostFamily: 'Keluarga Besar Alm. H. Ahmad Baihaqi',
      verse: {
        arabic: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً فَادْخُلِي فِي عِبَادِي وَادْخُلِي جَنَّتِي',
        translation: 'Wahai jiwa yang tenang! Kembalilah kepada Tuhanmu dengan hati yang ridha dan diridhai-Nya. Maka masuklah ke dalam golongan hamba-hamba-Ku, dan masuklah ke dalam surga-Ku.',
        surah: 'QS. Al-Fajr: 27 — 30',
      },
      agenda: [
        { num: '1', title: 'Pembacaan Ummul Qur’an & Surat Yasin', desc: 'Diawali dengan pembacaan surat Al-Fatihah dan Yasin secara berjamaah.' },
        { num: '2', title: 'Dzikir, Tahlil & Tahmid', desc: 'Melafalkan kalimat thayyibah dan menghadiahkan pahala doa.' },
        { num: '3', title: 'Tausiyah & Mau’idhoh Hasanah', desc: 'Kajian singkat tentang keutamaan silaturahmi dan berbakti kepada orang tua.' },
        { num: '4', title: 'Doa Bersama & Penutup', desc: 'Munajat doa khusyuk memohon maghfirah dan rahmat Allah SWT.' },
        { num: '5', title: 'Ramah Tamah & Santap Berkah', desc: 'Menjalin ukhuwah dan menikmati hidangan berkah bersama keluarga.' },
      ],
      events: [
        {
          tag: '✦ Majelis Utama',
          title: 'Pengajian & Doa Bersama 100 Hari',
          date: 'Kamis Malam Jumat, 5 November 2026',
          time: '19.30 WIB (Ba’da Isya) — Selesai',
          venue: 'Kediaman Keluarga Besar Alm. H. Ahmad Baihaqi',
          address: 'Jl. Cisangkuy No. 18, Cihapit, Bandung Wetan, Kota Bandung',
          mapsLink: 'https://maps.google.com',
          calendarLink: 'https://calendar.google.com',
        }
      ],
      targetDate: '2026-11-05T19:30:00',
      digitalGifts: [
        { bank: 'BSI', number: '7091823746', owner: 'Infaq Majelis Baihaqi', note: 'Sedekah Jariyah & Wakaf' },
        { bank: 'Bank Mandiri', number: '1310029384756', owner: 'M. Faisal Baihaqi', note: 'Infaq Masjid & Yatim' },
      ],
      physicalAddress: {
        recipient: 'Keluarga Besar Alm. H. Ahmad Baihaqi',
        phone: '0812-9900-1122',
        address: 'Jl. Cisangkuy No. 18, Cihapit, Bandung Wetan, Kota Bandung 40114',
      },
      wishes: [
        { id: 1, name: 'Keluarga H. Syukron', attendance: 'Hadir', message: 'InsyaAllah kami sekeluarga hadir. Semoga almarhum ditempatkan di tempat terbaik di sisi Allah SWT dan keluarga diberikan ketabahan.', time: '1 jam yang lalu' },
        { id: 2, name: 'Pengurus DKM Masjid Al-Muttaqin', attendance: 'Hadir', message: 'Kami siap membantu dan hadir bersama jamaah majelis taklim. Rahimahullah rahmatan wasi’ah.', time: '3 jam yang lalu' },
      ],
      closingMessage: 'Merupakan kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak / Ibu / Saudara/i berkenan hadir untuk bersama-sama melantunkan doa bagi almarhum.',
      rsvpLink: 'https://wa.me/628123456789',
      guestName: 'Bapak / Ibu / Jamaah Terhormat',
      brandName: '✦ Undangan Digital · Tema Aldebaran Doa Bersama',
    },
  },

}

export const DEMO_CLIENT = 'demo'

