export type Level = "Dasar" | "Menengah" | "Lanjutan";

export type ModuleItem = {
  id: number;
  tag: Level;
  title: string;
  desc: string;
  duration: string;
  quizCount: number;
  level: Level;
  done: boolean;
  progress: number;
  short: string;
};

export const modules: ModuleItem[] = [
  {
    id: 1,
    tag: "Dasar",
    title: "Apa Itu Koperasi?",
    desc: "Dari mana koperasi berasal, apa yang membuatnya berbeda, dan nilai apa yang mendasarinya.",
    duration: "15 menit",
    quizCount: 4,
    level: "Dasar",
    done: true,
    progress: 100,
    short: "Pengantar",
  },
  {
    id: 2,
    tag: "Dasar",
    title: "Jenis-Jenis Koperasi",
    desc: "KSP, koperasi produsen, konsumen, serba usaha — masing-masing punya cara kerja yang berbeda.",
    duration: "18 menit",
    quizCount: 4,
    level: "Dasar",
    done: true,
    progress: 100,
    short: "Jenis",
  },
  {
    id: 3,
    tag: "Menengah",
    title: "Cara Bergabung & Hak Anggota",
    desc: "Prosedur pendaftaran, simpanan awal yang diperlukan, serta hak dan kewajiban setelah resmi masuk.",
    duration: "20 menit",
    quizCount: 4,
    level: "Menengah",
    done: false,
    progress: 40,
    short: "Bergabung",
  },
  {
    id: 4,
    tag: "Menengah",
    title: "Simpanan & Pinjaman Koperasi",
    desc: "Perbedaan tiga jenis simpanan, cara pengajuan pinjaman, dan kenapa ini lebih sehat dari pinjaman luar.",
    duration: "22 menit",
    quizCount: 4,
    level: "Menengah",
    done: false,
    progress: 0,
    short: "Simpan Pinjam",
  },
  {
    id: 5,
    tag: "Menengah",
    title: "SHU — Sisa Hasil Usaha",
    desc: "Apa itu SHU, bagaimana koperasi menghitungnya, dan cara tahu berapa bagianmu.",
    duration: "16 menit",
    quizCount: 4,
    level: "Menengah",
    done: false,
    progress: 0,
    short: "SHU",
  },
  {
    id: 6,
    tag: "Lanjutan",
    title: "Rapat Anggota Tahunan (RAT)",
    desc: "Forum tertinggi koperasi tempat anggota menilai kinerja, mengesahkan laporan, dan memilih arah.",
    duration: "25 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "RAT",
  },
  {
    id: 7,
    tag: "Lanjutan",
    title: "Koperasi Digital & Fintech",
    desc: "Peran teknologi dalam koperasi masa kini — dan apa yang perlu diwaspadai dari tren ini.",
    duration: "20 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "Digital",
  },
  {
    id: 8,
    tag: "Lanjutan",
    title: "Membangun Koperasi di Desamu",
    desc: "Langkah nyata dari ide sampai badan hukum — cara mendirikan koperasi di komunitas kamu sendiri.",
    duration: "30 menit",
    quizCount: 5,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "Membangun",
  },
  {
    id: 9,
    tag: "Menengah",
    title: "Koperasi Syariah",
    desc: "Prinsip bagi hasil, larangan riba, akad mudharabah — cara kerja koperasi yang berlandaskan nilai Islam.",
    duration: "18 menit",
    quizCount: 4,
    level: "Menengah",
    done: false,
    progress: 0,
    short: "Syariah",
  },
  {
    id: 10,
    tag: "Menengah",
    title: "Manajemen & Tata Kelola Koperasi",
    desc: "Siapa Pengurus, siapa Pengawas, bagaimana AD/ART bekerja, dan kenapa transparansi itu wajib.",
    duration: "20 menit",
    quizCount: 4,
    level: "Menengah",
    done: false,
    progress: 0,
    short: "Tata Kelola",
  },
  {
    id: 11,
    tag: "Lanjutan",
    title: "Mengenal Koperasi Desa Merah Putih",
    desc: "Program nasional Inpres 9/2025: latar belakang, tujuan, target 80.000+ desa, dan peluncurannya.",
    duration: "22 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "KopDes",
  },
  {
    id: 12,
    tag: "Lanjutan",
    title: "Tujuh Pilar Usaha Koperasi Desa",
    desc: "Rincian 7 unit usaha resmi: sembako, klinik, apotek, gudang, logistik, simpan pinjam, dan kantor koperasi.",
    duration: "25 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "7 Unit",
  },
  {
    id: 13,
    tag: "Lanjutan",
    title: "Membentuk Koperasi Desa Merah Putih",
    desc: "Dari Musdesus, BPD, penyusunan AD/ART, sampai pendaftaran badan hukum resmi di Kemenkop.",
    duration: "28 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "Musdesus",
  },
  {
    id: 14,
    tag: "Lanjutan",
    title: "Pemuda & Masa Depan Koperasi",
    desc: "Peran generasi muda, platform SIMKOPDES, cara bergabung, dan peluang besar hingga 2030.",
    duration: "20 menit",
    quizCount: 4,
    level: "Lanjutan",
    done: false,
    progress: 0,
    short: "Pemuda",
  },
];

export const chatSuggestions = [
  "Apa itu SHU dan bagaimana cara hitungnya?",
  "Bagaimana cara mendaftar ke koperasi?",
  "Apa beda simpanan pokok, wajib, dan sukarela?",
];

/* Lesson content — used in the learning page */
export type QuizOption = { id: string; text: string };
export type Quiz = {
  question: string;
  options: QuizOption[];
  correct: string;
  explanation: string;
};
export type LessonSection = {
  heading: string;
  body: string[];
  highlight?: { term: string; def: string };
  bigNumber?: { value: string; label: string };
};
export type Lesson = {
  moduleId: number;
  title: string;
  sections: LessonSection[];
  quizzes: Quiz[];
};

export const lessons: Record<number, Lesson> = {
  1: {
    moduleId: 1,
    title: "Apa Itu Koperasi?",
    sections: [
      {
        heading: "Lebih dari Sekadar Toko atau Simpan Pinjam",
        body: [
          "Sebagian besar orang pertama kali mendengar kata 'koperasi' di bangku sekolah — biasanya dalam konteks toko koperasi sekolah atau koperasi petani di kampung. Gambaran itu tidak salah, tapi jauh dari lengkap. Koperasi sesungguhnya adalah sebuah model bisnis yang berbeda secara mendasar dari perusahaan biasa: sebuah badan usaha yang didirikan oleh dan untuk kepentingan anggotanya sendiri, dijalankan berdasarkan nilai gotong royong, dan keuntungannya dikembalikan ke anggota sesuai kontribusi mereka — bukan ke pemegang saham yang hanya menaruh modal.",
          "Di perusahaan konvensional, ada pemisahan yang jelas antara pemilik dan pengguna. Investor menyuntik modal, pelanggan membeli produk, dan keuntungan mengalir ke investor — bukan ke pelanggan. Di koperasi, dua peran itu menyatu. Petani yang membeli pupuk dari koperasi pertanian yang ia dirikan bersama tetangganya secara harfiah membeli dari dirinya sendiri. Ketika koperasi itu untung di akhir tahun, sebagian laba itu kembali ke si petani sebagai Sisa Hasil Usaha — bukan ke orang luar yang tidak pernah menginjak ladangnya.",
          "Menurut Undang-Undang Nomor 25 Tahun 1992 tentang Perkoperasian, koperasi adalah badan usaha beranggotakan orang-seorang atau badan hukum koperasi yang melandaskan kegiatannya berdasarkan prinsip koperasi, sekaligus sebagai gerakan ekonomi rakyat yang berlandaskan asas kekeluargaan. Frasa 'gerakan ekonomi rakyat' dalam definisi itu bukan hiasan — koperasi memang lahir sebagai respons konkret terhadap ketidakadilan ekonomi. Ia bukan sekadar lembaga bisnis, melainkan instrumen pemberdayaan.",
          "Di dunia, koperasi bukan pemain pinggiran. Prancis punya koperasi pertanian raksasa yang menguasai ekspor anggur dan produk susu ke seluruh Eropa. Jerman punya Raiffeisen Bank yang berakar dari koperasi kredit desa abad ke-19 dan kini menjadi salah satu bank terbesar di dunia. Mondragon di Spanyol adalah grup industri berbasis koperasi yang mempekerjakan lebih dari 80.000 orang dalam lebih dari 100 perusahaan terintegrasi. Indonesia punya potensi yang tidak kalah besar — dan moment kebangkitannya justru sedang terjadi sekarang.",
        ],
        highlight: {
          term: "Asas Kekeluargaan",
          def: "Koperasi berdiri dari anggota, dikelola oleh anggota, dan hasilnya kembali ke anggota. Setiap keputusan besar dibuat bersama melalui musyawarah — bukan oleh satu orang atau segelintir pemilik modal yang tidak terlibat langsung.",
        },
      },
      {
        heading: "Tujuh Prinsip yang Membedakan Koperasi dari Bisnis Lain",
        body: [
          "International Cooperative Alliance (ICA) — organisasi payung koperasi dunia — merumuskan tujuh prinsip yang harus dijalankan oleh setiap koperasi sejati. Prinsip-prinsip ini diadopsi secara internasional sejak 1995 dan menjadi tolok ukur apakah sebuah lembaga benar-benar layak disebut koperasi atau hanya menggunakan nama itu sebagai label. Di Indonesia, prinsip-prinsip ini diadaptasi ke dalam UU 25/1992 dan menjadi acuan Kementerian Koperasi.",
          "Prinsip pertama: keanggotaan sukarela dan terbuka — siapa pun yang memenuhi syarat bisa masuk, tidak ada diskriminasi berdasarkan latar belakang. Prinsip kedua: pengendalian oleh anggota secara demokratis — satu anggota satu suara, tidak peduli siapa yang simpanannya paling besar. Prinsip ketiga: partisipasi ekonomi anggota — anggota berkontribusi secara adil dan mengendalikan modal koperasi bersama. Prinsip keempat: otonomi dan kemandirian — koperasi mengatur dirinya sendiri, tidak tunduk pada kepentingan pihak luar.",
          "Prinsip kelima adalah pendidikan, pelatihan, dan informasi — koperasi wajib mendidik anggotanya agar mereka benar-benar memahami hak dan perannya. Ini yang membuat koperasi berbeda: ia merawat SDM-nya, bukan hanya mengambil manfaat dari mereka. Prinsip keenam: kerja sama antar koperasi — koperasi-koperasi saling membantu dan bermitra agar ekosistemnya semakin kuat. Prinsip ketujuh: kepedulian terhadap komunitas — koperasi tidak hanya mementingkan anggota, tetapi juga bertanggung jawab terhadap lingkungan dan masyarakat sekitarnya.",
          "Ketujuh prinsip ini bukan slogan di dinding kantor. Dalam praktiknya, prinsip-prinsip itu menentukan setiap keputusan operasional: siapa yang bisa masuk jadi anggota, bagaimana voting dilakukan di RAT, bagaimana surplus dibagi, dan bagaimana koperasi berinteraksi dengan komunitas lokal. Koperasi yang mengabaikan prinsip-prinsip ini — misalnya yang memberi suara ekstra ke anggota besar atau menutup akses ke calon anggota tertentu — secara teknis sudah melanggar definisi koperasi itu sendiri.",
        ],
        highlight: {
          term: "Satu Anggota, Satu Suara",
          def: "Tidak peduli seberapa besar simpanannya, setiap anggota koperasi punya bobot suara yang sama di Rapat Anggota. Ini yang membuat koperasi menjadi contoh nyata demokrasi ekonomi.",
        },
      },
      {
        heading: "Dari Rochdale 1844 ke Purwokerto 1895",
        body: [
          "Koperasi modern lahir pada 1844 di Rochdale, Inggris, di tengah masa Revolusi Industri yang keras. Dua puluh delapan buruh pabrik tekstil yang kelelahan oleh upah rendah dan harga barang kebutuhan yang mencekik memutuskan untuk patungan. Mereka membuka toko bersama, menjual barang dengan harga wajar, dan mengembalikan keuntungan ke pembeli secara proporsional. Ide ini terdengar sederhana, tapi dampaknya luar biasa. Model Rochdale Pioneers — nama mereka dikenal dalam sejarah — menyebar ke seluruh Eropa dalam waktu beberapa dekade.",
          "Indonesia tidak perlu menunggu lama untuk punya kisahnya sendiri. Pada 1895, R. Aria Wiriaatmadja, seorang patih di Purwokerto, mendirikan organisasi simpan pinjam untuk menolong para pegawai pemerintahan yang terjerat hutang rentenir. Inilah koperasi pertama di nusantara — lahir bukan dari teori buku teks, melainkan dari kebutuhan hidup yang nyata. Pada masa pergerakan kemerdekaan, Bung Hatta — yang kelak dikenal sebagai Bapak Koperasi Indonesia — menjadikan koperasi sebagai tulang punggung gagasannya tentang ekonomi kerakyatan.",
          "Setelah kemerdekaan, konstitusi Indonesia secara eksplisit mengakui koperasi sebagai bentuk usaha yang paling sesuai dengan karakter bangsa. Pasal 33 UUD 1945 menyebutkan bahwa perekonomian disusun sebagai usaha bersama berdasarkan asas kekeluargaan — sebuah kalimat yang dalam tafsir ekonomi langsung merujuk pada koperasi. Ini bukan kebetulan: para pendiri bangsa melihat koperasi bukan sebagai pilihan alternatif, tetapi sebagai fondasi utama ekonomi nasional.",
          "Perkembangan koperasi Indonesia sempat mengalami pasang surut. Era Orde Baru membawa intervensi pemerintah yang berlebihan — koperasi dipakai sebagai alat politik, sehingga banyak yang kehilangan esensi demokratisnya. Setelah reformasi 1998, gerakan koperasi mulai diperbaharui dengan pendekatan yang lebih otonom dan berpihak pada anggota. Kini, dengan program Koperasi Desa Merah Putih dan dukungan regulasi terbaru, koperasi Indonesia memasuki babak yang benar-benar baru.",
        ],
        bigNumber: {
          value: "1895",
          label: "Tahun koperasi pertama Indonesia berdiri di Purwokerto — diprakarsai R. Aria Wiriaatmadja untuk membebaskan pegawai dari jerat rentenir",
        },
      },
      {
        heading: "Posisi Koperasi di Ekonomi Indonesia Hari Ini",
        body: [
          "Berdasarkan data Kementerian Koperasi dan UKM, Indonesia memiliki lebih dari 127.000 koperasi terdaftar dengan total anggota lebih dari 25 juta orang. Angka ini menempatkan Indonesia sebagai salah satu negara dengan jumlah anggota koperasi terbesar di Asia. Namun, kuantitas belum tentu berbanding lurus dengan kualitas. Sebagian besar koperasi yang ada masih berskala kecil dan belum beroperasi secara optimal — menjadikannya peluang besar, bukan hambatan.",
          "Masalah terbesar yang dihadapi banyak koperasi Indonesia bukan kekurangan modal, melainkan kekurangan anggota yang paham dan terlibat aktif. Ketika anggota hanya datang untuk mengambil SHU setahun sekali tanpa pernah hadir di RAT atau menggunakan layanan koperasi secara rutin, koperasi itu kehilangan daya. Koperasi yang hidup adalah koperasi yang anggotanya benar-benar memanfaatkan layanannya setiap hari — bukan yang anggotanya hanya ada di buku register.",
          "Teknologi membuka peluang yang sebelumnya tidak pernah ada. Koperasi kini bisa menjangkau anggota di pelosok dengan aplikasi simpan pinjam digital, mengelola laporan keuangan secara real-time, dan membangun jaringan pemasaran produk anggota ke pasar nasional lewat e-commerce. Platform SIMKOPDES yang dikembangkan pemerintah khusus untuk Koperasi Desa Merah Putih adalah contoh konkret bagaimana teknologi bisa memperkuat — bukan menggantikan — prinsip gotong royong.",
          "Koperasi bukan masa lalu yang perlu dimuseumkan. Ia adalah model masa depan yang relevan untuk menjawab ketimpangan ekonomi yang semakin menganga, ketidakstabilan lapangan kerja di era gig economy, dan kebutuhan komunitas lokal yang tidak terlayani oleh korporasi besar. Kamu yang membaca ini ada di posisi yang tepat untuk memahami, memilih, bahkan membangun koperasi dari awal — dan kontribusi itu bisa dimulai sekarang.",
        ],
        bigNumber: {
          value: "127.000+",
          label: "Jumlah koperasi terdaftar di Indonesia dengan lebih dari 25 juta anggota aktif",
        },
      },
    ],
    quizzes: [
      {
        question: "Hal paling mendasar yang membedakan koperasi dari perusahaan konvensional adalah?",
        options: [
          { id: "a", text: "Koperasi tidak pernah mencari keuntungan" },
          { id: "b", text: "Pengguna jasa koperasi sekaligus menjadi pemilik dan pengambil keputusan" },
          { id: "c", text: "Koperasi hanya boleh didirikan oleh aparatur pemerintah" },
          { id: "d", text: "Koperasi dilarang beroperasi di sektor keuangan" },
        ],
        correct: "b",
        explanation:
          "Di koperasi, anggota menjalankan dua peran sekaligus: pemilik dan pengguna jasa. Keuntungan mengalir kembali ke mereka, bukan ke investor luar.",
      },
      {
        question: "Berdasarkan UU No. 25 Tahun 1992, koperasi didefinisikan sebagai badan usaha yang berlandaskan asas apa?",
        options: [
          { id: "a", text: "Asas liberalisme ekonomi" },
          { id: "b", text: "Asas kekeluargaan" },
          { id: "c", text: "Asas persaingan bebas" },
          { id: "d", text: "Asas kepemilikan modal" },
        ],
        correct: "b",
        explanation:
          "UU No. 25/1992 secara eksplisit menyebut asas kekeluargaan sebagai landasan koperasi — mencerminkan karakter gotong royong yang menjadi identitas gerakannya.",
      },
      {
        question: "Menurut prinsip ICA, bagaimana hak suara anggota ditentukan dalam koperasi?",
        options: [
          { id: "a", text: "Proporsional terhadap jumlah simpanan masing-masing anggota" },
          { id: "b", text: "Ditentukan oleh lama keanggotaan" },
          { id: "c", text: "Satu anggota mendapat satu suara, tanpa memandang besarnya simpanan" },
          { id: "d", text: "Hanya pengurus yang memiliki hak suara penuh" },
        ],
        correct: "c",
        explanation:
          "Prinsip 'satu anggota satu suara' adalah pilar demokrasi ekonomi koperasi — memastikan tidak ada satu orang pun yang bisa mendominasi hanya karena modalnya lebih besar.",
      },
      {
        question: "Siapa tokoh yang dikenal sebagai pemrakarsa koperasi pertama di Indonesia pada tahun 1895?",
        options: [
          { id: "a", text: "Bung Hatta" },
          { id: "b", text: "Ki Hajar Dewantara" },
          { id: "c", text: "R. Aria Wiriaatmadja" },
          { id: "d", text: "Soekarno" },
        ],
        correct: "c",
        explanation:
          "R. Aria Wiriaatmadja mendirikan organisasi simpan pinjam di Purwokerto pada 1895 untuk membebaskan pegawai dari jerat rentenir — inilah koperasi pertama di nusantara.",
      },
    ],
  },
  2: {
    moduleId: 2,
    title: "Jenis-Jenis Koperasi",
    sections: [
      {
        heading: "Empat Jenis Utama Berdasarkan Bidang Usaha",
        body: [
          "Koperasi tidak datang dalam satu bentuk tunggal. Berdasarkan bidang usahanya, ada empat jenis utama yang diakui dalam sistem perkoperasian Indonesia. Pertama, koperasi konsumen — berfungsi untuk memenuhi kebutuhan sehari-hari anggota dengan menyediakan barang atau jasa pada harga yang lebih terjangkau dari pasar umum. Contoh paling mudah dijumpai adalah toko koperasi sekolah atau koperasi karyawan yang menyediakan kebutuhan rumah tangga bagi para pegawai.",
          "Kedua, koperasi produsen — membantu anggota yang merupakan produsen (petani, pengrajin, nelayan, peternak) untuk mengumpulkan dan memasarkan hasil produksi mereka secara kolektif. Dengan bergabung dalam koperasi, petani tidak perlu menjual hasil panen secara individual kepada tengkulak yang sering memeras dengan harga rendah. Koperasi bertindak sebagai negosiator kolektif yang posisi tawarnya jauh lebih kuat.",
          "Ketiga, koperasi simpan pinjam (KSP) — mengelola tabungan anggota dan menyalurkannya sebagai pinjaman dengan jasa yang wajar. KSP adalah jenis koperasi yang paling banyak ditemukan di Indonesia karena menjawab kebutuhan yang paling mendasar: akses modal. Tanpa KSP, jutaan pelaku UMKM dan masyarakat pedesaan terpaksa bergantung pada pinjol berbunga tinggi atau rentenir yang bisa menghancurkan keuangan keluarga.",
          "Keempat, koperasi jasa — menyediakan berbagai layanan untuk anggota, mulai dari transportasi, asuransi, perumahan, hingga pendidikan. Koperasi angkutan, misalnya, mengorganisir pengemudi untuk berbagi armada dan pendapatan secara lebih adil dibanding sistem setoran yang memeras. Koperasi jasa adalah bukti bahwa gotong royong bisa diterapkan di sektor mana pun, tidak hanya pertanian atau keuangan.",
        ],
        highlight: {
          term: "Koperasi Simpan Pinjam (KSP)",
          def: "Jenis koperasi yang mengelola simpanan anggota dan menyalurkannya sebagai pinjaman berbunga wajar. KSP menjadi alternatif sehat untuk keluar dari jerat pinjaman online berbunga tinggi dan rentenir.",
        },
      },
      {
        heading: "Koperasi Serba Usaha — Ketika Satu Koperasi Melakukan Segalanya",
        body: [
          "Banyak koperasi di Indonesia berkembang menjadi Koperasi Serba Usaha (KSU) — badan yang menjalankan lebih dari satu jenis layanan dalam satu kelembagaan. Sebuah KSU di desa, misalnya, bisa sekaligus mengelola toko sembako, layanan simpan pinjam, dan pengadaan pupuk untuk petani anggotanya. Integrasi ini bukan pemborosan — justru menciptakan efisiensi karena overhead administrasi bisa dibagi antar unit usaha.",
          "Koperasi karyawan perusahaan sering kali berwujud KSU: di satu sisi mengelola simpan pinjam untuk karyawan yang butuh dana darurat, di sisi lain mengelola kafetaria atau toko yang melayani kebutuhan harian. Sinergi ini membuat koperasi karyawan menjadi lembaga yang benar-benar relevan dalam kehidupan sehari-hari anggotanya — bukan sekadar tempat menabung setahun sekali.",
          "Koperasi Desa Merah Putih — program pemerintah 2025 — mengadopsi konsep KSU ini dalam skala yang lebih besar. Dengan tujuh unit usaha (sembako, klinik, apotek, gudang, logistik, simpan pinjam, dan kantor koperasi), setiap Koperasi Desa Merah Putih dirancang menjadi ekosistem ekonomi lengkap yang melayani seluruh kebutuhan warga desa. Ini adalah visi KSU yang paling ambisius yang pernah dirumuskan dalam kebijakan pemerintah Indonesia.",
          "Memilih jenis koperasi yang tepat tergantung pada kebutuhan komunitas. Jika komunitasmu adalah para petani yang kesulitan menjual hasil panen, koperasi produsen adalah jawabannya. Jika masalah utama adalah akses modal untuk usaha kecil, KSP yang dibutuhkan. Jika komunitasmu adalah pekerja kantoran, koperasi konsumen atau karyawan lebih relevan. Tidak ada satu jenis koperasi yang cocok untuk semua situasi — pemahaman tentang kebutuhan spesifik komunitas adalah kunci.",
        ],
        bigNumber: {
          value: "4",
          label: "Jenis koperasi berdasarkan bidang usaha: konsumen, produsen, simpan pinjam, dan jasa — plus banyak yang menggabungkan keduanya",
        },
      },
      {
        heading: "Koperasi Primer dan Sekunder — Soal Skala dan Jaringan",
        body: [
          "Selain dibedakan berdasarkan bidang usaha, koperasi juga dikategorikan berdasarkan tingkatan keanggotaannya. Koperasi primer adalah yang paling umum: anggotanya adalah orang-perorangan dengan jumlah minimal 20 pendiri. Inilah koperasi yang langsung berhadapan dengan anggota — tempat simpanan disetor, pinjaman diajukan, dan SHU dibagikan. Hampir semua koperasi yang kamu temui di lingkunganmu adalah koperasi primer.",
          "Koperasi sekunder satu tingkat lebih tinggi: anggotanya bukan perorangan, melainkan koperasi-koperasi primer. Di Indonesia, koperasi sekunder dikenal dengan berbagai nama: pusat koperasi (anggotanya minimal tiga koperasi primer di satu wilayah kabupaten/kota), gabungan koperasi (anggotanya pusat-pusat koperasi dari berbagai kabupaten), dan induk koperasi (tingkat nasional yang membawahi gabungan-gabungan dari seluruh provinsi).",
          "Mengapa hierarki ini penting? Karena koperasi sekunder memungkinkan koperasi-koperasi kecil untuk bersatu dan bertindak sebagai satu entitas yang lebih kuat di pasar. Petani di sebuah desa mungkin hanya bisa menjual 5 ton padi lewat koperasi primernya — angka yang tidak menarik bagi pembeli besar. Tapi jika 50 koperasi primer bersatu dalam pusat koperasi, mereka bisa menawarkan 250 ton sekaligus — cukup untuk bernegosiasi dengan perusahaan pengolahan beras nasional.",
          "Struktur bertingkat ini juga membantu transfer pengetahuan dan sumber daya. Induk koperasi bisa memberikan pelatihan, sistem akuntansi, dan akses permodalan yang tidak bisa dijangkau oleh koperasi primer secara mandiri. Di negara-negara dengan gerakan koperasi yang kuat seperti Jerman dan Belanda, hierarki koperasi ini berjalan sangat efisien dan menjadi tulang punggung sektor pertanian dan keuangan mereka.",
        ],
        highlight: {
          term: "Koperasi Primer vs Sekunder",
          def: "Koperasi primer beranggotakan orang-perorangan (min. 20 orang). Koperasi sekunder beranggotakan koperasi-koperasi primer — berfungsi sebagai payung yang memperkuat posisi tawar kolektif.",
        },
      },
      {
        heading: "Memilih Koperasi yang Tepat Untukmu",
        body: [
          "Setelah memahami jenis-jenisnya, pertanyaan praktisnya adalah: koperasi mana yang paling relevan untuk situasimu sekarang? Jika kamu adalah pelajar atau mahasiswa, koperasi mahasiswa (Kopma) atau koperasi sekolah adalah titik masuk yang ideal. Selain memberi manfaat langsung berupa harga barang yang lebih murah, bergabung ke Kopma adalah laboratorium langsung untuk memahami tata kelola koperasi — mulai dari menghadiri RAT sampai melihat bagaimana laporan keuangan disusun.",
          "Jika kamu bekerja di perusahaan atau instansi, hampir pasti ada koperasi karyawan. Sayangnya, banyak karyawan bergabung hanya karena pemotongan gaji otomatis tanpa benar-benar memahami hak-haknya sebagai anggota. Ini adalah rugi besar. Kamu berhak hadir di RAT, berhak mengajukan pertanyaan soal laporan keuangan, dan berhak untuk dipilih sebagai pengurus atau pengawas — hak-hak yang nilainya jauh melebihi sekadar bunga simpanan.",
          "Jika kamu tinggal di desa atau kota kecil dan ingin berkontribusi pada ekonomi lokal, periksa apakah sudah ada koperasi yang beroperasi di sana. Jika belum, justru itulah peluang. Mendirikan koperasi tidak membutuhkan modal raksasa — yang paling dibutuhkan adalah 20 orang yang berkomitmen dan pemahaman dasar tentang tata kelola koperasi. Modul-modul berikutnya dalam kurikulum ini akan memandu kamu melalui prosesnya langkah demi langkah.",
          "Yang perlu dihindari adalah bergabung ke lembaga yang mengklaim sebagai koperasi tapi tidak menjalankan prinsip-prinsipnya. Ciri-cirinya antara lain: tidak pernah mengadakan RAT, keputusan ditentukan oleh satu orang, laporan keuangan tidak dibagikan ke anggota, dan suara anggota tidak benar-benar berpengaruh. Koperasi sejati transparan, demokratis, dan berorientasi pada kesejahteraan anggota — bukan pada keuntungan pengelolanya.",
        ],
        bigNumber: {
          value: "20",
          label: "Jumlah minimum pendiri yang dibutuhkan untuk mendirikan koperasi primer secara sah di Indonesia",
        },
      },
    ],
    quizzes: [
      {
        question: "Koperasi yang membantu petani dan pengrajin memasarkan hasil produksi mereka disebut?",
        options: [
          { id: "a", text: "Koperasi konsumen" },
          { id: "b", text: "Koperasi produsen" },
          { id: "c", text: "Koperasi jasa" },
          { id: "d", text: "Koperasi sekunder" },
        ],
        correct: "b",
        explanation:
          "Koperasi produsen mengumpulkan hasil produksi anggota dan memasarkannya secara kolektif — memberi posisi tawar yang lebih kuat dibanding menjual sendiri ke tengkulak.",
      },
      {
        question: "Koperasi Serba Usaha (KSU) adalah koperasi yang?",
        options: [
          { id: "a", text: "Hanya melayani anggota dari satu profesi yang sama" },
          { id: "b", text: "Menjalankan lebih dari satu jenis bidang usaha dalam satu kelembagaan" },
          { id: "c", text: "Didirikan oleh pemerintah untuk daerah terpencil" },
          { id: "d", text: "Khusus bergerak di sektor jasa transportasi" },
        ],
        correct: "b",
        explanation:
          "KSU menggabungkan beberapa jenis layanan — misalnya simpan pinjam sekaligus toko dan pengadaan input produksi — dalam satu badan koperasi yang terintegrasi.",
      },
      {
        question: "Apa yang membedakan koperasi sekunder dari koperasi primer?",
        options: [
          { id: "a", text: "Koperasi sekunder hanya boleh bergerak di sektor pertanian" },
          { id: "b", text: "Koperasi sekunder anggotanya adalah koperasi-koperasi primer, bukan perorangan" },
          { id: "c", text: "Koperasi sekunder tidak perlu mengadakan Rapat Anggota" },
          { id: "d", text: "Koperasi sekunder tidak diakui secara hukum di Indonesia" },
        ],
        correct: "b",
        explanation:
          "Koperasi sekunder (pusat, gabungan, induk) beranggotakan koperasi-koperasi primer, bukan perorangan — berfungsi memperkuat daya tawar kolektif di tingkat yang lebih luas.",
      },
      {
        question: "Ciri khas koperasi yang tidak menjalankan prinsipnya dan perlu diwaspadai adalah?",
        options: [
          { id: "a", text: "Mengadakan RAT terlalu sering setiap bulan" },
          { id: "b", text: "Laporan keuangan tidak dibagikan dan keputusan dikuasai satu orang" },
          { id: "c", text: "Menerima anggota terlalu banyak dari berbagai profesi" },
          { id: "d", text: "SHU yang dibagikan terlalu besar ke anggota" },
        ],
        correct: "b",
        explanation:
          "Koperasi sejati harus transparan dan demokratis. Jika laporan keuangan disembunyikan dan suara anggota tidak benar-benar dihitung, koperasi itu sudah melanggar prinsip dasarnya.",
      },
    ],
  },
  3: {
    moduleId: 3,
    title: "Cara Bergabung & Hak Anggota",
    sections: [
      {
        heading: "Proses Mendaftar yang Lebih Mudah dari Bayangan",
        body: [
          "Banyak orang menunda bergabung ke koperasi karena mengira prosesnya rumit dan birokratis. Pada kenyataannya, mendaftar ke koperasi jauh lebih mudah dibanding membuka rekening bank atau mengajukan kartu kredit. Tidak ada pemeriksaan riwayat kredit yang ketat, tidak ada skor BI Checking, dan tidak ada syarat penghasilan minimum yang besar. Yang utama adalah kamu memenuhi persyaratan keanggotaan yang ditetapkan dalam Anggaran Dasar koperasi tersebut.",
          "Langkah pertamanya adalah mengisi formulir permohonan keanggotaan yang disediakan koperasi. Formulir ini biasanya meminta data diri dasar: nama lengkap, alamat, pekerjaan, dan nomor identitas. Bersama formulir, kamu akan diminta menyerahkan fotokopi KTP dan foto terbaru. Setelah dokumen lengkap diserahkan ke pengurus, koperasi biasanya memerlukan waktu beberapa hari kerja untuk memverifikasi data dan mengesahkan keanggotaanmu.",
          "Setelah permohonan disetujui, kamu diwajibkan membayar simpanan pokok — dibayar sekali saat pertama masuk, besarnya sama untuk semua anggota. Di saat yang sama atau dalam beberapa hari ke depan, kamu mulai diwajibkan membayar simpanan wajib sesuai jadwal yang ditetapkan (biasanya bulanan). Kedua pembayaran ini bukan sekadar iuran — ini adalah modal kerja koperasi yang secara hukum merupakan kepemilikanmu.",
          "Begitu resmi terdaftar, posisimu berbeda secara fundamental dari posisi nasabah bank atau pelanggan toko. Kamu adalah pemilik. Ini bukan istilah kiasan — secara hukum, kamu memiliki bagian dari aset koperasi sebanding dengan kontribusimu. Ketika koperasi itu berkembang dan asetnya bertambah, kepemilikanmu pun bertambah. Ketika koperasi untung di akhir tahun, bagianmu dari laba itu akan dihitung dan diserahkan lewat mekanisme SHU.",
        ],
        highlight: {
          term: "Simpanan Pokok",
          def: "Setoran satu kali saat pertama masuk sebagai anggota — nilainya sama untuk semua anggota dan menjadi tanda kepemilikan yang tidak bisa ditarik selama masih aktif. Ini berbeda dari simpanan wajib yang dibayar rutin.",
        },
      },
      {
        heading: "Tiga Jenis Simpanan yang Perlu Kamu Pahami",
        body: [
          "Ketika bergabung ke koperasi, kamu akan berhadapan dengan tiga jenis simpanan yang masing-masing punya peran berbeda. Pertama, simpanan pokok — dibayar satu kali saat pendaftaran, jumlahnya sama untuk semua anggota, dan tidak bisa ditarik selama kamu masih terdaftar sebagai anggota aktif. Simpanan pokok adalah pernyataan komitmenmu sebagai pemilik, bukan sekadar penabung.",
          "Kedua, simpanan wajib — dibayar secara rutin (biasanya bulanan) sesuai kesepakatan yang tertuang dalam Anggaran Dasar. Besarnya bisa berbeda antar koperasi — ada yang Rp10.000 per bulan, ada yang Rp100.000. Simpanan wajib juga tidak bisa ditarik selama kamu masih aktif sebagai anggota, karena ia adalah bagian dari modal kerja koperasi yang harus terjaga. Ketika kamu keluar dari koperasi secara resmi, barulah simpanan pokok dan wajib dikembalikan.",
          "Ketiga, simpanan sukarela — ini yang paling fleksibel. Kamu bisa menyetorkan kapan saja sesuai kemampuan, dan mencairkannya kapan saja sesuai kebutuhan (dengan pemberitahuan terlebih dahulu sesuai ketentuan). Simpanan sukarela mirip tabungan biasa, bedanya ia tersimpan di lembaga yang kamu miliki bersama — jadi bunga atau bagi hasilnya pun lebih menguntungkan dibanding menabung di bank besar.",
          "Ketiga simpanan ini secara kolektif membentuk modal koperasi. Semakin banyak dan aktif anggota menyetor, semakin besar modal yang tersedia untuk disalurkan kembali sebagai pinjaman atau diputar dalam kegiatan usaha koperasi. Ini adalah siklus yang sehat: uang anggota diputar oleh koperasi untuk kebutuhan anggota itu sendiri — bukan untuk memperkaya pemegang saham luar.",
        ],
        bigNumber: {
          value: "3",
          label: "Jenis simpanan anggota: pokok (sekali bayar), wajib (rutin terikat), dan sukarela (bebas fleksibel)",
        },
      },
      {
        heading: "Hak-Hak Anggota yang Penuh dan Setara",
        body: [
          "Bergabung ke koperasi berarti mendapatkan sejumlah hak yang tidak kamu dapatkan di lembaga keuangan biasa. Hak paling mendasar adalah hak suara di Rapat Anggota — dan bobotnya sama rata untuk setiap anggota, tanpa peduli siapa yang simpanannya paling besar atau paling lama bergabung. Satu orang, satu suara. Di sinilah koperasi menjadi contoh paling nyata dari demokrasi ekonomi yang bisa dipraktikkan.",
          "Kamu juga berhak mendapatkan pelayanan dari koperasi sesuai bidang usahanya. Jika ini KSP, kamu berhak mengajukan pinjaman. Jika ini koperasi konsumen, kamu berhak membeli barang dengan harga anggota yang lebih murah. Jika ini koperasi produsen, kamu berhak menitipkan hasil produksimu untuk dipasarkan melalui jaringan koperasi. Hak-hak layanan ini adalah alasan utama bergabung — manfaat nyata yang bisa dirasakan langsung.",
          "Hak ketiga yang sering dilupakan: hak untuk memilih dan dipilih sebagai pengurus atau pengawas. Setiap anggota yang memenuhi syarat bisa mencalonkan diri sebagai ketua, sekretaris, bendahara, atau pengawas koperasi — jabatan yang memberi kamu peran langsung dalam mengelola organisasi yang kamu miliki. Tidak ada rekrutmen tertutup, tidak ada komisaris yang menunjuk direksi — semua dipilih oleh dan dari anggota.",
          "Hak untuk mendapatkan informasi adalah hak yang sama pentingnya. Sebagai pemilik, kamu berhak mendapatkan laporan keuangan koperasi, laporan pertanggungjawaban pengurus, dan semua informasi yang relevan dengan kondisi koperasi. Jika pengurus menolak memberikan informasi ini, itu adalah pelanggaran serius yang bisa kamu gugat melalui mekanisme RAT. Transparansi bukan hak istimewa — itu adalah hak dasar setiap anggota.",
        ],
        highlight: {
          term: "Demokrasi Satu Suara",
          def: "Di Rapat Anggota, setiap anggota memiliki tepat satu hak suara — tidak proporsional terhadap simpanan. Ini memastikan koperasi tidak dikuasai oleh anggota kaya dan tetap menjadi milik semua.",
        },
      },
      {
        heading: "Kewajiban Anggota yang Tidak Bisa Ditinggalkan",
        body: [
          "Hak dan kewajiban dalam koperasi adalah dua sisi yang tidak bisa dipisahkan. Kewajiban paling dasar adalah membayar simpanan wajib secara rutin dan tepat waktu. Simpanan wajib yang macet bukan hanya masalah keuanganmu sendiri — ia langsung mempengaruhi modal yang tersedia untuk disalurkan ke anggota lain yang membutuhkan pinjaman. Koperasi adalah sistem yang saling bergantung: kepatuhan satu anggota mendukung kebutuhan anggota lain.",
          "Kewajiban kedua adalah berpartisipasi aktif dalam kegiatan koperasi, terutama Rapat Anggota Tahunan (RAT). RAT bukan sekadar formalitas. Di sinilah laporan keuangan disahkan, SHU dibagi, pengurus dipilih, dan arah koperasi ke depan ditentukan. Anggota yang tidak pernah hadir di RAT sama dengan pemegang saham yang tidak pernah menghadiri RUPS — secara teknis masih punya hak, tapi melepaskan kendali atas asetnya.",
          "Kewajiban ketiga adalah mematuhi keputusan-keputusan yang sudah disepakati dalam RAT dan tertuang dalam Anggaran Dasar serta Anggaran Rumah Tangga. Jika RAT memutuskan besaran simpanan wajib naik, semua anggota wajib mengikutinya. Jika AD/ART mengatur prosedur pengajuan pinjaman tertentu, semua anggota tunduk pada prosedur itu. Koperasi berjalan atas dasar kesepakatan bersama — bukan kebijakan satu pihak.",
          "Kewajiban yang sering diremehkan adalah menjaga nama baik dan kepercayaan terhadap koperasi. Anggota yang meminjam dari koperasi dan tidak melunasi tepat waktu bukan hanya merugikan dirinya sendiri — ia merugikan seluruh anggota lain yang simpanannya digunakan sebagai sumber pinjaman itu. Di komunitas yang saling kenal, reputasi keanggotaan koperasi adalah aset berharga yang harus dijaga.",
        ],
        bigNumber: {
          value: "1 : 1",
          label: "Setiap anggota punya satu suara di Rapat Anggota — tidak lebih, tidak kurang, tanpa memandang besar simpanannya",
        },
      },
    ],
    quizzes: [
      {
        question: "Apa perbedaan mendasar antara anggota koperasi dan nasabah bank?",
        options: [
          { id: "a", text: "Anggota koperasi mendapat bunga simpanan yang lebih tinggi" },
          { id: "b", text: "Anggota koperasi adalah pemilik sekaligus pengguna jasa koperasi" },
          { id: "c", text: "Anggota koperasi tidak wajib membayar biaya apapun" },
          { id: "d", text: "Anggota koperasi hanya boleh menabung, tidak bisa mengajukan pinjaman" },
        ],
        correct: "b",
        explanation:
          "Dalam koperasi, anggota adalah pemilik — bukan sekadar pelanggan. Keputusan diambil bersama dan keuntungan dikembalikan ke anggota.",
      },
      {
        question: "Jenis simpanan yang dibayar sekali saat pertama bergabung dan tidak bisa ditarik selama aktif disebut?",
        options: [
          { id: "a", text: "Simpanan sukarela" },
          { id: "b", text: "Simpanan wajib" },
          { id: "c", text: "Simpanan pokok" },
          { id: "d", text: "Simpanan berjangka" },
        ],
        correct: "c",
        explanation:
          "Simpanan pokok hanya dibayar sekali saat mendaftar dan besarnya sama untuk semua anggota — ia adalah tanda kepemilikan atas koperasi.",
      },
      {
        question: "Hak suara anggota dalam Rapat Anggota koperasi ditentukan berdasarkan?",
        options: [
          { id: "a", text: "Besar total simpanan yang dimiliki" },
          { id: "b", text: "Lama keanggotaan dalam koperasi" },
          { id: "c", text: "Satu anggota mendapat satu suara, setara" },
          { id: "d", text: "Jabatan yang dipegang dalam koperasi" },
        ],
        correct: "c",
        explanation:
          "Prinsip satu anggota satu suara menjamin bahwa koperasi tetap demokratis — tidak ada anggota yang bisa mendominasi hanya karena modalnya lebih besar.",
      },
      {
        question: "Simpanan anggota mana yang paling fleksibel — bisa disetor dan ditarik kapan saja?",
        options: [
          { id: "a", text: "Simpanan pokok" },
          { id: "b", text: "Simpanan wajib" },
          { id: "c", text: "Simpanan sukarela" },
          { id: "d", text: "Simpanan penyertaan" },
        ],
        correct: "c",
        explanation:
          "Simpanan sukarela tidak terikat jadwal setor dan bisa ditarik sesuai kebutuhan (dengan pemberitahuan sesuai ketentuan) — paling mirip tabungan biasa.",
      },
    ],
  },
  4: {
    moduleId: 4,
    title: "Simpanan & Pinjaman Koperasi",
    sections: [
      {
        heading: "Bagaimana Modal Koperasi Terbentuk dari Simpanan Anggota",
        body: [
          "Salah satu hal yang paling berbeda dari koperasi dibanding lembaga keuangan lain adalah sumber modalnya. Bank komersial mendapat modal dari investor dan pemegang saham. Pinjol mendapat modal dari venture capital. Koperasi mendapat modalnya dari anggota itu sendiri — lewat tiga jenis simpanan yang masing-masing punya peran spesifik dalam membangun fondasi keuangan organisasi.",
          "Simpanan pokok adalah modal dasar — dibayar sekali saat bergabung dan jumlahnya sama untuk semua anggota. Karena sifatnya sebagai kepemilikan, simpanan pokok tidak bisa dicairkan selama kamu masih terdaftar aktif. Simpanan wajib adalah modal berkelanjutan — disetor secara rutin (biasanya bulanan) dengan besaran yang ditetapkan RAT. Bersama simpanan pokok, simpanan wajib membentuk bagian terbesar dari modal koperasi.",
          "Simpanan sukarela adalah modal tambahan yang sifatnya lebih likuid. Anggota bisa menyetor kapan saja sesuai kemampuan dan mencairkan kapan saja sesuai kebutuhan — dengan prosedur sederhana. Meskipun fleksibel, simpanan sukarela tetap berkontribusi pada kemampuan koperasi menyalurkan pinjaman. Semakin besar total simpanan sukarela anggota, semakin besar dana yang tersedia untuk kebutuhan sesama anggota.",
          "Logikanya melingkar secara positif: semakin banyak anggota yang aktif menyetor, semakin besar modal yang bisa diputar untuk pinjaman; semakin besar pinjaman yang tersalurkan, semakin besar jasa pinjaman yang masuk ke kas koperasi; semakin besar pendapatan koperasi, semakin besar SHU yang bisa dibagikan ke anggota. Ini adalah mesin pertumbuhan kolektif yang benar-benar bekerja untuk kepentingan semua pihak yang terlibat.",
        ],
        highlight: {
          term: "Modal dari Anggota, untuk Anggota",
          def: "Koperasi tidak bergantung pada investor luar. Modal berasal dari simpanan anggota sendiri, sehingga keuntungan yang dihasilkan pun secara adil dikembalikan ke anggota melalui SHU — bukan mengalir keluar ke pemegang saham.",
        },
      },
      {
        heading: "Pinjaman Koperasi vs Sumber Pinjaman Lain",
        body: [
          "Mengapa pinjaman koperasi lebih disarankan dibanding pinjaman dari rentenir atau aplikasi pinjaman online? Pertama, soal bunga. Koperasi tidak bertujuan memaksimalkan margin keuntungan dari jasa pinjaman. Jasa pinjaman (istilah untuk 'bunga' di koperasi) ditetapkan sewajarnya — cukup untuk menutup biaya operasional dan menghasilkan SHU, bukan untuk memperkaya pengelola. Bandingkan dengan pinjol yang bisa mengenakan bunga efektif 200-400% per tahun.",
          "Kedua, soal transparansi. Ketika kamu meminjam dari koperasi, kamu meminjam dari lembaga yang kamu miliki bersama. Pengurus wajib menjelaskan cara penghitungan jasa, jadwal angsuran, dan konsekuensi keterlambatan secara terbuka. Tidak ada biaya tersembunyi, tidak ada provisi misterius yang tiba-tiba muncul setelah pinjaman cair. Semua tertuang dalam akad pinjaman yang bisa kamu baca dan pertanyakan.",
          "Ketiga, soal proses. Koperasi mengenal anggotanya secara personal — ini keuntungan yang tidak dimiliki bank besar atau pinjol. Pengurus bisa mempertimbangkan rekam jejak keanggotaanmu, karakter, dan situasi hidupmu secara lebih holistik. Ini membuat akses pinjaman lebih manusiawi: tidak ditolak hanya karena skor kredit di sistem tertentu, tapi dievaluasi berdasarkan kedekatan komunitas.",
          "Keempat — dan ini yang paling sering diabaikan — jasa pinjaman yang kamu bayarkan kepada koperasi tidak hilang. Sebagian besar dari jasa itu kembali kepadamu dalam bentuk SHU di akhir tahun. Artinya, biaya meminjam dari koperasi secara efektif lebih rendah dari angka nominalnya, karena sebagian 'bunga' itu kembali ke kantongmu sendiri. Tidak ada skema pinjaman di dunia yang lebih adil dari ini.",
        ],
        bigNumber: {
          value: "3",
          label: "Tiga jenis simpanan anggota yang bersama-sama membangun modal koperasi: pokok, wajib, dan sukarela",
        },
      },
      {
        heading: "Syarat dan Proses Pengajuan Pinjaman",
        body: [
          "Untuk mengajukan pinjaman di koperasi, biasanya ada beberapa syarat dasar yang harus dipenuhi. Pertama, kamu harus sudah terdaftar sebagai anggota aktif selama minimal periode tertentu (biasanya 3-6 bulan) — ini memastikan kamu benar-benar bagian dari komunitas, bukan pendatang yang hanya mau pinjam lalu pergi. Kedua, simpanan wajibmu harus tidak ada tunggakan — rekam jejak pembayaran simpanan yang baik adalah sinyal kemampuan dan komitmen bayarmu.",
          "Besarnya pinjaman yang bisa diajukan biasanya dikaitkan dengan besarnya simpananmu. Banyak koperasi menerapkan aturan: plafon pinjaman maksimal adalah tiga sampai lima kali total simpananmu. Ini bukan pembatasan sembarangan — logikanya, jika kamu gagal bayar, simpananmu bisa dijadikan jaminan pelunasan, menjaga koperasi dari kerugian besar yang bisa merugikan anggota lain.",
          "Proses pengajuannya sendiri relatif sederhana: isi formulir permohonan pinjaman, sertakan dokumen pendukung (KTP, slip gaji atau bukti penghasilan, keterangan tujuan pinjaman), lalu ajukan ke pengurus. Pengurus akan mengevaluasi permohonan berdasarkan kemampuan bayar, rekam jejak keanggotaan, dan ketersediaan dana koperasi saat itu. Proses ini biasanya tidak memerlukan agunan besar seperti yang diminta bank.",
          "Setelah disetujui, pinjaman cair dan kamu mulai mengangsur sesuai jadwal yang disepakati. Ketepatan pembayaran angsuran bukan hanya soal kewajibanmu sendiri — ia menjaga likuiditas koperasi agar anggota lain yang sedang membutuhkan pinjaman bisa terlayani. Ingat: uang yang kamu angsur adalah uang simpanan sesama anggotamu yang sedang bekerja — melunasinya tepat waktu adalah bentuk gotong royong yang paling konkret.",
        ],
        highlight: {
          term: "Plafon Pinjaman",
          def: "Batas maksimal pinjaman yang bisa diajukan, biasanya dihitung sebagai kelipatan dari total simpanan anggota. Ini memastikan risiko terjaga dan koperasi tidak memberikan pinjaman yang melampaui kemampuan bayar anggota.",
        },
      },
      {
        heading: "Jasa Pinjaman dan Hubungannya dengan SHU",
        body: [
          "Jasa pinjaman di koperasi — setara dengan 'bunga' di bank — bukan sekadar biaya yang hilang begitu saja. Ia masuk ke pendapatan koperasi dan pada akhir tahun buku, setelah semua biaya operasional dikurangi, sisanya menjadi SHU. SHU inilah yang kemudian dibagikan kembali ke anggota — termasuk ke kamu yang membayar jasa pinjaman itu. Siklus ini membuat koperasi benar-benar berbeda: kamu membayar jasa, dan sebagian jasa itu kembali kepadamu.",
          "Besarnya porsi SHU yang kamu terima dari komponen jasa usaha dihitung berdasarkan seberapa banyak kamu bertransaksi dengan koperasi — termasuk berapa besar total pinjaman yang kamu ambil dan sudah kamu lunasi. Anggota yang aktif menggunakan layanan pinjaman (dan melunasinya tepat waktu) akan mendapat bagian SHU yang lebih besar dibanding anggota pasif yang simpanan wajibnya pun sering terlambat.",
          "Ini menciptakan insentif yang tepat: koperasi mendorong anggota untuk aktif menggunakan layanannya, sementara anggota mendapat keuntungan berlipat dari partisipasinya. Berbeda dengan bank yang keuntungannya mengalir ke pemegang saham, di koperasi justru anggota-anggota yang paling aktif bertransaksilan yang mendapat porsi paling besar dari laba tersebut.",
          "Penetapan besaran jasa pinjaman adalah keputusan demokratis yang dibuat di RAT — bukan kebijakan sepihak pengurus atau keputusan direksi yang tidak melibatkan anggota. Jika kamu merasa jasa pinjaman terlalu tinggi, kamu berhak mengusulkan peninjauan ulang dalam RAT berikutnya. Ini adalah contoh nyata bahwa di koperasi, anggota memiliki kontrol nyata atas kondisi finansial organisasi yang mereka miliki bersama.",
        ],
        bigNumber: {
          value: "Kembali",
          label: "Sebagian jasa pinjaman yang kamu bayar ke koperasi kembali kepadamu dalam bentuk SHU — tidak ada skema pinjaman lain yang sepraktis ini",
        },
      },
    ],
    quizzes: [
      {
        question: "Dari mana sumber modal utama koperasi yang membedakannya dari bank komersial?",
        options: [
          { id: "a", text: "Dari investor dan pemegang saham luar" },
          { id: "b", text: "Dari anggaran pemerintah pusat" },
          { id: "c", text: "Dari simpanan anggota itu sendiri" },
          { id: "d", text: "Dari obligasi yang dijual ke publik" },
        ],
        correct: "c",
        explanation:
          "Modal koperasi berasal dari simpanan pokok, wajib, dan sukarela anggotanya — bukan dari investor luar. Ini menjadikan keuntungan koperasi wajar dikembalikan ke anggota.",
      },
      {
        question: "Mengapa pinjaman koperasi lebih adil dibanding pinjaman online berbunga tinggi?",
        options: [
          { id: "a", text: "Pinjaman koperasi tidak perlu dikembalikan" },
          { id: "b", text: "Jasa pinjaman koperasi ditetapkan wajar dan sebagian kembali sebagai SHU" },
          { id: "c", text: "Koperasi dijamin penuh oleh pemerintah sehingga bebas risiko" },
          { id: "d", text: "Proses pengajuannya tidak perlu dokumen apapun" },
        ],
        correct: "b",
        explanation:
          "Jasa pinjaman koperasi wajar karena berorientasi kesejahteraan anggota, dan sebagian jasa itu kembali ke anggota lewat SHU — membuat biaya efektif meminjam lebih rendah.",
      },
      {
        question: "Plafon pinjaman di koperasi biasanya dikaitkan dengan?",
        options: [
          { id: "a", text: "Jabatan anggota di luar koperasi" },
          { id: "b", text: "Nilai aset properti yang dimiliki anggota" },
          { id: "c", text: "Total simpanan yang telah disetor anggota" },
          { id: "d", text: "Lama keanggotaan semata" },
        ],
        correct: "c",
        explanation:
          "Plafon pinjaman biasanya kelipatan dari total simpanan anggota — memastikan ada jaminan yang cukup jika terjadi gagal bayar dan menjaga keseimbangan risiko koperasi.",
      },
      {
        question: "Siapa yang berhak menentukan besaran jasa pinjaman di koperasi?",
        options: [
          { id: "a", text: "Pengurus koperasi secara sepihak setiap bulan" },
          { id: "b", text: "Bank Indonesia melalui regulasi suku bunga" },
          { id: "c", text: "Anggota melalui keputusan di Rapat Anggota" },
          { id: "d", text: "Dewan Pengawas Syariah jika terdaftar" },
        ],
        correct: "c",
        explanation:
          "Jasa pinjaman ditetapkan secara demokratis di RAT — bukan kebijakan sepihak pengurus. Anggota bisa mengusulkan perubahan jika dirasa tidak wajar.",
      },
    ],
  },
  5: {
    moduleId: 5,
    title: "SHU — Sisa Hasil Usaha",
    sections: [
      {
        heading: "SHU Bukan Dividen — Ini Lebih Adil dari Itu",
        body: [
          "Sisa Hasil Usaha, atau SHU, adalah laba bersih koperasi dalam satu tahun buku — sisa dari seluruh pendapatan setelah semua biaya operasional, penyusutan aset, pajak, dan cadangan wajib dikurangi. Namanya memang mirip 'dividen' di perusahaan, tapi cara pembagiannya sangat berbeda dan jauh lebih adil. Di perusahaan, dividen dibagi berdasarkan jumlah saham yang dimiliki — siapa yang punya modal lebih besar, dapat lebih banyak. Di koperasi, SHU dibagi berdasarkan kontribusi aktif anggota, bukan besarnya modal.",
          "Ini bukan perbedaan kecil — ini perbedaan filosofis yang fundamental. Koperasi percaya bahwa mereka yang paling aktif berkontribusi pada keberhasilan usaha bersama adalah mereka yang paling berhak atas hasilnya. Seorang anggota yang aktif meminjam, rutin menabung, dan sering berbelanja di koperasi mendapat porsi SHU yang lebih besar daripada anggota yang hanya diam dengan simpanan besar tapi tidak pernah menggunakan layanan koperasi.",
          "SHU dihitung dan dibagikan setiap akhir tahun buku, setelah RAT menyetujui laporan keuangan dan rencana alokasi SHU. Tidak semua SHU langsung dibagi ke anggota — sebagian disisihkan untuk cadangan wajib (minimal 20% dari SHU menurut UU), dana pendidikan koperasi, dana sosial, dan kebutuhan pengembangan organisasi lainnya. Hanya porsi yang disepakati RAT yang kemudian dibagi ke anggota.",
          "Memahami SHU berarti memahami salah satu insentif paling kuat untuk berpartisipasi aktif dalam koperasi. Setiap kali kamu menggunakan layanan koperasi — menyetor simpanan, meminjam dan melunasinya, berbelanja di toko koperasi — kamu sedang menumpuk porsi SHU-mu untuk tahun berikutnya. Partisipasi aktif bukan hanya kewajiban moral, tapi juga strategi finansial yang masuk akal.",
        ],
        highlight: {
          term: "SHU vs Dividen",
          def: "Dividen dibagi berdasarkan kepemilikan modal (saham). SHU dibagi berdasarkan partisipasi aktif — seberapa banyak kamu menggunakan jasa koperasi dan berkontribusi padanya. Ini yang membuat SHU lebih adil secara ekonomi.",
        },
      },
      {
        heading: "Dua Komponen Utama Pembagian SHU",
        body: [
          "SHU yang dialokasikan untuk anggota dibagi menjadi dua komponen utama: jasa modal dan jasa usaha. Memahami perbedaan keduanya adalah kunci untuk menghitung berapa yang seharusnya kamu terima dan memverifikasi apakah pembagian SHU di koperasimu sudah dilakukan dengan benar.",
          "Komponen pertama adalah jasa modal — bagian SHU yang dibagi berdasarkan besarnya simpanan anggota. Semakin besar total simpananmu (pokok + wajib + sukarela), semakin besar porsi jasa modal yang kamu terima. Formula dasarnya: (Simpanan Anggota ÷ Total Simpanan Seluruh Anggota) × Total SHU untuk Jasa Modal. Komponen ini mengakui kontribusi modal yang kamu berikan kepada koperasi.",
          "Komponen kedua adalah jasa usaha — bagian SHU yang dibagi berdasarkan volume transaksi anggota dengan koperasi. Untuk anggota yang meminjam, volumenya dihitung dari total pinjaman yang digunakan dan dilunasi. Untuk anggota di koperasi konsumen, volumenya dihitung dari total belanja di toko koperasi. Formula dasarnya: (Transaksi Anggota ÷ Total Transaksi Seluruh Anggota) × Total SHU untuk Jasa Usaha.",
          "Proporsi antara jasa modal dan jasa usaha ditetapkan oleh RAT dan tertuang dalam AD/ART. Beberapa koperasi mengalokasikan 40% SHU untuk jasa modal dan 60% untuk jasa usaha; koperasi lain mungkin 30:70 atau bahkan 20:80. Makin besar porsi jasa usaha, makin kuat insentif bagi anggota untuk aktif bertransaksi — dan itu umumnya mencerminkan koperasi yang lebih berorientasi pada partisipasi anggota.",
        ],
        bigNumber: {
          value: "2",
          label: "Dua komponen SHU anggota: jasa modal (dari besarnya simpanan) dan jasa usaha (dari volume transaksi)",
        },
      },
      {
        heading: "Cara Menghitung Bagian SHU-mu",
        body: [
          "Mari kita hitung dengan contoh nyata. Katakanlah koperasimu menghasilkan SHU bersih Rp50.000.000 dalam satu tahun. RAT memutuskan: 30% (Rp15.000.000) untuk jasa modal, 40% (Rp20.000.000) untuk jasa usaha, 20% untuk cadangan wajib, dan 10% untuk dana pendidikan dan sosial.",
          "Untuk jasa modal: total simpanan seluruh anggota adalah Rp300.000.000. Simpananmu (pokok + wajib + sukarela) adalah Rp6.000.000. Maka bagian SHU jasa modalmu adalah: (6.000.000 ÷ 300.000.000) × 15.000.000 = Rp300.000.",
          "Untuk jasa usaha: total transaksi seluruh anggota tahun ini adalah Rp500.000.000 (total pinjaman yang disalurkan dan dilunasi). Pinjaman yang kamu ambil dan lunasi tahun ini adalah Rp10.000.000. Maka bagian SHU jasa usahamu adalah: (10.000.000 ÷ 500.000.000) × 20.000.000 = Rp400.000.",
          "Total SHU-mu tahun ini: Rp300.000 (jasa modal) + Rp400.000 (jasa usaha) = Rp700.000. Angka ini mungkin terlihat kecil, tapi ingat: ini adalah penghasilan tambahan dari kegiatan yang sudah kamu lakukan untuk kepentinganmu sendiri. Dan semakin aktif kamu menggunakan koperasi, semakin besar porsimu. Koperasi dengan ribuan anggota aktif bisa membagikan SHU jutaan rupiah per anggota.",
        ],
        highlight: {
          term: "Rumus Jasa Usaha",
          def: "(Volume Transaksi Anggota ÷ Total Transaksi Koperasi) × Alokasi SHU Jasa Usaha. Semakin banyak kamu bertransaksi — meminjam, berbelanja, menggunakan jasa — semakin besar bagianmu.",
        },
      },
      {
        heading: "Alokasi SHU dan Bagaimana RAT Menentukannya",
        body: [
          "Tidak seluruh SHU langsung dibagi ke anggota. Undang-Undang No. 25/1992 mewajibkan koperasi menyisihkan minimal 20% dari SHU sebagai cadangan wajib — dana ini disimpan untuk menjaga kelangsungan koperasi dan menghadapi kondisi tak terduga. Selain cadangan wajib, RAT bisa memutuskan alokasi untuk dana pendidikan koperasi, dana sosial (untuk kepentingan umum sekitar koperasi), dan dana pembangunan daerah kerja.",
          "Dalam praktiknya, agenda pembagian SHU adalah salah satu momen paling dinanti dalam RAT. Pengurus mempresentasikan laporan laba rugi, menjelaskan pos-pos pendapatan dan pengeluaran, lalu mengusulkan alokasi SHU. Anggota berhak mempertanyakan setiap baris dalam laporan itu — dan inilah hak yang jarang digunakan padahal sangat penting.",
          "Koperasi yang sehat dan transparan biasanya menerbitkan buku laporan RAT beberapa hari sebelum acara digelar, agar anggota punya waktu membaca dan mempersiapkan pertanyaan. Jika koperasimu tidak melakukan ini, kamu berhak memintanya. Anggota yang hadir RAT tapi tidak membaca laporan keuangan sebelumnya ibarat hadir rapat tanpa membaca agenda — hadir secara fisik tapi tidak sungguh-sungguh berpartisipasi.",
          "Setelah RAT menyetujui pembagian SHU, pengurus menyiapkan daftar perhitungan SHU per anggota berdasarkan data simpanan dan transaksi masing-masing. Pembayaran SHU biasanya dilakukan dalam bentuk pengurangan pinjaman (bagi yang sedang punya pinjaman aktif), penambahan simpanan, atau tunai — sesuai pilihan dan ketentuan yang berlaku. Semua perhitungan ini harus bisa diakses dan diverifikasi oleh setiap anggota.",
        ],
        bigNumber: {
          value: "20%",
          label: "Minimum cadangan wajib yang harus disisihkan dari SHU sebelum dibagikan ke anggota — diatur dalam UU No. 25 Tahun 1992",
        },
      },
    ],
    quizzes: [
      {
        question: "Apa perbedaan mendasar antara SHU koperasi dan dividen perusahaan?",
        options: [
          { id: "a", text: "SHU tidak pernah diberikan ke anggota secara langsung" },
          { id: "b", text: "SHU dibagi berdasarkan partisipasi aktif anggota, bukan hanya besarnya modal" },
          { id: "c", text: "SHU hanya diterima oleh pengurus koperasi" },
          { id: "d", text: "SHU dibagi sama rata tanpa mempertimbangkan kontribusi" },
        ],
        correct: "b",
        explanation:
          "Berbeda dari dividen yang dibagi proporsional berdasarkan saham, SHU koperasi mempertimbangkan seberapa aktif anggota berpartisipasi — lebih adil karena menghargai kontribusi nyata.",
      },
      {
        question: "Apa yang dimaksud dengan komponen 'jasa usaha' dalam pembagian SHU?",
        options: [
          { id: "a", text: "Bagian SHU yang diberikan kepada pengurus sebagai honor" },
          { id: "b", text: "Bagian SHU yang dibagi berdasarkan besarnya simpanan anggota" },
          { id: "c", text: "Bagian SHU yang dibagi berdasarkan volume transaksi anggota dengan koperasi" },
          { id: "d", text: "Bagian SHU untuk dana cadangan koperasi" },
        ],
        correct: "c",
        explanation:
          "Jasa usaha dihitung dari berapa banyak anggota bertransaksi (meminjam, berbelanja, dll) — semakin aktif, semakin besar porsi SHU jasa usaha yang diterima.",
      },
      {
        question: "Berapa minimum persentase SHU yang wajib disisihkan sebagai cadangan menurut UU No. 25/1992?",
        options: [
          { id: "a", text: "10%" },
          { id: "b", text: "15%" },
          { id: "c", text: "20%" },
          { id: "d", text: "25%" },
        ],
        correct: "c",
        explanation:
          "UU Perkoperasian mewajibkan minimal 20% dari SHU sebagai cadangan wajib — untuk menjaga kesehatan finansial koperasi jangka panjang.",
      },
      {
        question: "Siapa yang berhak memutuskan alokasi SHU — berapa persen untuk cadangan, berapa untuk anggota?",
        options: [
          { id: "a", text: "Ketua pengurus koperasi" },
          { id: "b", text: "Kementerian Koperasi" },
          { id: "c", text: "Rapat Anggota Tahunan (RAT)" },
          { id: "d", text: "Auditor independen koperasi" },
        ],
        correct: "c",
        explanation:
          "Alokasi SHU adalah salah satu keputusan paling penting yang diambil di RAT — anggota secara bersama menyetujui atau merevisi usulan pengurus.",
      },
    ],
  },
  6: {
    moduleId: 6,
    title: "Rapat Anggota Tahunan (RAT)",
    sections: [
      {
        heading: "RAT — Tempat Kekuasaan Tertinggi Koperasi Berpusat",
        body: [
          "Dalam struktur pemerintahan negara, kekuasaan tertinggi ada di tangan rakyat yang diwujudkan melalui pemilu dan lembaga legislatif. Dalam struktur koperasi, konsep yang sama berlaku dengan cara yang lebih langsung: kekuasaan tertinggi ada di Rapat Anggota. Bukan di tangan ketua pengurus yang paling berpengalaman, bukan di tangan pengawas yang paling kritis, dan bukan di tangan anggota yang simpanannya paling besar.",
          "Rapat Anggota Tahunan (RAT) adalah forum di mana kekuasaan itu diwujudkan secara nyata, paling tidak sekali dalam setahun. Di sini, setiap anggota — dengan hak suaranya yang setara — menentukan arah koperasi: mengesahkan atau menolak laporan pengurus, menyetujui atau merevisi rencana kerja, memutuskan alokasi SHU, memilih atau mengganti pengurus, dan mengubah aturan main koperasi jika diperlukan.",
          "UU No. 25/1992 mewajibkan setiap koperasi menggelar Rapat Anggota minimal satu kali dalam setahun. Koperasi yang lebih dinamis bahkan menggelar Rapat Anggota Luar Biasa (RALB) ketika ada keputusan mendesak yang tidak bisa menunggu RAT berikutnya — misalnya saat ada perubahan besar pada AD/ART, pergantian pengurus di luar jadwal, atau keputusan strategis yang harus segera diambil.",
          "Tanggal RAT biasanya ditetapkan dalam AD/ART koperasi — umumnya dilaksanakan dalam tiga bulan pertama setelah tahun buku berakhir (Januari-Maret untuk koperasi dengan tahun buku kalender). Seluruh anggota berhak dan diwajibkan hadir. Ketidakhadiran yang berulang bisa menjadi alasan pemberian sanksi sesuai ketentuan AD/ART masing-masing koperasi.",
        ],
        highlight: {
          term: "Rapat Anggota — Mahkamah Tertinggi Koperasi",
          def: "Rapat Anggota adalah lembaga tertinggi koperasi, di atas pengurus dan pengawas. Semua keputusan strategis — dari laporan keuangan sampai pemilihan pengurus — disahkan di sini oleh seluruh anggota.",
        },
      },
      {
        heading: "Agenda Wajib yang Dibahas dalam Setiap RAT",
        body: [
          "RAT bukan rapat biasa — ia punya agenda yang terstruktur dan setiap poin agendanya penting. Agenda pertama yang selalu ada: laporan pertanggungjawaban pengurus atas kinerja koperasi selama satu tahun buku. Laporan ini mencakup laporan keuangan lengkap (neraca, laporan laba rugi, arus kas), capaian program kerja, dan evaluasi atas hambatan yang dihadapi. Anggota berhak mempertanyakan setiap angka dan setiap keputusan yang tertera.",
          "Agenda kedua adalah laporan pengawas. Berbeda dari laporan pengurus yang bersifat eksekutif, laporan pengawas adalah hasil audit internal: apakah pengurus bekerja sesuai AD/ART? Apakah ada penyimpangan keuangan? Apakah prosedur yang ditetapkan dijalankan? Laporan pengawas adalah check and balance internal koperasi — dan anggota perlu mendengarnya secara seksama.",
          "Agenda ketiga — yang paling dinantikan — adalah penetapan alokasi SHU dan pembagiannya ke anggota. Pengurus mengusulkan berapa persen untuk cadangan wajib, berapa untuk dana pendidikan, berapa untuk dana sosial, dan berapa untuk dibagikan ke anggota. Anggota bisa menyetujui, meminta penjelasan tambahan, atau mengusulkan alokasi yang berbeda sebelum pemungutan suara dilakukan.",
          "Agenda keempat adalah penetapan rencana kerja dan Rencana Anggaran Pendapatan dan Belanja (RAPB) untuk tahun berikutnya. Di sinilah anggota berperan sebagai pemilik yang sesungguhnya: menentukan apa yang akan dikerjakan koperasi, berapa anggaran yang dialokasikan, dan target apa yang ingin dicapai. Rencana kerja yang disahkan RAT mengikat pengurus untuk dilaksanakan — bukan sekadar angan-angan.",
        ],
        highlight: {
          term: "Laporan Pertanggungjawaban vs Laporan Pengawas",
          def: "Laporan pengurus melaporkan apa yang sudah dikerjakan. Laporan pengawas menilai apakah pengurus bekerja sesuai aturan. Keduanya wajib dibacakan di RAT — ini adalah mekanisme check and balance internal koperasi.",
        },
      },
      {
        heading: "Bagaimana Mekanisme Suara dan Keputusan Bekerja",
        body: [
          "Setiap keputusan dalam RAT diambil melalui musyawarah mufakat — jika bisa. Ketika musyawarah menemui jalan buntu, barulah pemungutan suara dilakukan. Dalam pemungutan suara, prinsip satu anggota satu suara berlaku mutlak: tidak ada 'suara berganda' bagi anggota dengan simpanan lebih besar, tidak ada suara istimewa bagi pengurus yang sedang menjabat.",
          "Keputusan biasa (seperti pengesahan laporan keuangan dan rencana kerja) cukup dengan suara mayoritas sederhana (50%+1). Keputusan yang lebih berat — seperti perubahan AD/ART atau pembubaran koperasi — biasanya memerlukan kuorum yang lebih tinggi, misalnya 2/3 dari anggota yang hadir, sesuai ketentuan AD/ART masing-masing koperasi.",
          "Agar RAT sah secara hukum, harus ada kuorum — jumlah minimum anggota yang hadir. Jika kuorum tidak tercapai pada undangan pertama, koperasi biasanya memanggil ulang dalam waktu beberapa hari. Pada pemanggilan kedua, RAT biasanya bisa dilaksanakan meskipun jumlah yang hadir lebih sedikit, dengan ketentuan yang sudah ditetapkan dalam AD/ART.",
          "Satu hal yang perlu dipahami: keputusan RAT mengikat semua anggota — termasuk yang tidak hadir dan yang tidak setuju. Itulah mengapa hadir di RAT adalah kewajiban moral yang tidak bisa dianggap enteng. Jika kamu tidak hadir, orang lain yang menentukan arah koperasi yang kamu miliki. Kepasifan di RAT adalah bentuk pelepasan hak kepemilikan yang nyata.",
        ],
        bigNumber: {
          value: "1× / tahun",
          label: "Minimum frekuensi RAT yang wajib digelar setiap koperasi berdasarkan UU No. 25 Tahun 1992",
        },
      },
      {
        heading: "Persiapan RAT yang Sering Diabaikan Anggota",
        body: [
          "Koperasi yang baik mengirim undangan RAT beserta dokumen pendukung paling lambat dua minggu sebelum acara. Dokumen yang harus ada: laporan keuangan tahunan, laporan pengawas, rancangan rencana kerja dan RAPB tahun depan, serta agenda RAT secara rinci. Membaca semua dokumen ini sebelum RAT adalah yang membedakan anggota yang benar-benar berpartisipasi dari yang sekadar hadir untuk mengambil konsumsi.",
          "Datang ke RAT dengan pertanyaan yang sudah disiapkan. Periksa laporan keuangan: apakah ada pos pengeluaran yang tidak wajar? Apakah pendapatan tahun ini lebih besar atau lebih kecil dari tahun lalu? Apakah plafon pinjaman naik atau turun? Apakah cadangan sudah cukup? Pertanyaan-pertanyaan ini bukan bentuk kecurigaan — ini adalah bentuk tanggung jawab anggota sebagai pemilik.",
          "Perhatikan agenda pemilihan pengurus jika tahun ini adalah tahun pemilihan. Siapa saja yang dicalonkan? Apa rekam jejak mereka? Apakah ada calon yang kamu kenal dan percaya? Di koperasi kecil, pemilihan pengurus sering berlangsung cepat tanpa pertimbangan matang karena tidak ada yang mau mencalonkan diri. Jika kamu menilai ada calon yang tidak kompeten, kamu berhak mengajukan keberatan atau mengusulkan calon alternatif.",
          "Setelah RAT selesai dan keputusan disahkan, minta salinan notulen RAT. Notulen adalah catatan resmi semua keputusan yang diambil — kamu berhak memilikinya sebagai anggota. Pada RAT berikutnya, notulen tahun lalu akan dibacakan kembali untuk memastikan semua keputusan sudah dilaksanakan. Inilah siklus akuntabilitas yang membuat koperasi yang sehat terus tumbuh secara konsisten.",
        ],
        highlight: {
          term: "Notulen RAT",
          def: "Catatan resmi semua keputusan yang diambil dalam RAT. Setiap anggota berhak mendapatkan salinannya — ini adalah dokumen yang mengikat pengurus untuk melaksanakan semua yang sudah disepakati.",
        },
      },
      {
        heading: "RAT Luar Biasa dan Kapan Ia Diperlukan",
        body: [
          "Selain RAT reguler tahunan, ada mekanisme Rapat Anggota Luar Biasa (RALB) yang bisa digelar kapan saja ketika ada keputusan mendesak. RALB bisa diinisiasi oleh pengurus, pengawas, atau oleh anggota jika minimal sepertiga dari total anggota memintanya secara tertulis. Ini adalah mekanisme demokrasi langsung yang melindungi anggota dari pengurus yang lalai atau berpotensi menyimpang.",
          "Situasi yang biasanya memerlukan RALB antara lain: pengurus ketahuan melakukan penyimpangan dan harus diganti sebelum masa jabatan berakhir, ada peluang bisnis besar yang memerlukan keputusan segera (misalnya merger dengan koperasi lain, akuisisi aset besar, atau kerja sama strategis), perubahan mendasar pada AD/ART yang tidak bisa menunggu RAT tahunan, atau kondisi darurat keuangan yang memerlukan tindakan segera.",
          "RALB memiliki kekuatan yang sama dengan RAT biasa — keputusan yang diambil di RALB sama mengikatnya. Yang membedakan hanya prosedur pemanggilan dan agenda yang biasanya lebih spesifik. Koperasi yang transparan dan responsif akan menggelar RALB ketika memang dibutuhkan, bukan menunda sambil berharap masalah selesai sendiri.",
          "Sebagai anggota aktif, mengetahui prosedur RALB adalah pengetahuan yang penting. Jika kamu menemukan indikasi penyimpangan atau melihat pengurus mengambil keputusan sepihak yang seharusnya diputuskan bersama, meminta RALB adalah hak konstitusionalmu sebagai anggota koperasi. Ini bukan tindakan konfrontatif — ini adalah mekanisme tata kelola yang memang dirancang untuk situasi seperti itu.",
        ],
        bigNumber: {
          value: "1/3",
          label: "Proporsi minimum anggota yang bisa meminta Rapat Anggota Luar Biasa secara tertulis jika diperlukan",
        },
      },
    ],
    quizzes: [
      {
        question: "Dalam struktur koperasi, siapa yang memegang kekuasaan tertinggi?",
        options: [
          { id: "a", text: "Ketua Pengurus sebagai pimpinan eksekutif" },
          { id: "b", text: "Dewan Pengawas sebagai auditor internal" },
          { id: "c", text: "Rapat Anggota yang dihadiri seluruh anggota" },
          { id: "d", text: "Pemerintah daerah tempat koperasi beroperasi" },
        ],
        correct: "c",
        explanation:
          "Rapat Anggota adalah lembaga tertinggi koperasi — di atas pengurus maupun pengawas. Semua keputusan strategis disahkan di sini.",
      },
      {
        question: "Agenda yang WAJIB ada dalam setiap RAT adalah?",
        options: [
          { id: "a", text: "Pemilihan anggota baru dan pengambilan foto bersama" },
          { id: "b", text: "Laporan pertanggungjawaban pengurus dan pengesahan laporan keuangan" },
          { id: "c", text: "Penentuan harga jual barang koperasi untuk tahun depan" },
          { id: "d", text: "Pelatihan manajemen keuangan untuk semua anggota" },
        ],
        correct: "b",
        explanation:
          "Laporan pertanggungjawaban pengurus dan pengesahan laporan keuangan adalah agenda inti yang selalu ada di setiap RAT — inilah momen akuntabilitas utama koperasi.",
      },
      {
        question: "Apa yang dimaksud Rapat Anggota Luar Biasa (RALB)?",
        options: [
          { id: "a", text: "RAT yang digelar lebih awal dari jadwal tanpa alasan khusus" },
          { id: "b", text: "Rapat yang hanya dihadiri pengurus dan pengawas" },
          { id: "c", text: "Rapat anggota yang digelar sewaktu-waktu untuk keputusan mendesak" },
          { id: "d", text: "Pertemuan informal anggota di luar forum resmi" },
        ],
        correct: "c",
        explanation:
          "RALB digelar di luar jadwal RAT tahunan untuk menangani keputusan mendesak — bisa diminta oleh pengurus, pengawas, atau minimal sepertiga anggota.",
      },
      {
        question: "Berapa minimum proporsi anggota yang dapat mengajukan permintaan RALB secara tertulis?",
        options: [
          { id: "a", text: "1/10 dari total anggota" },
          { id: "b", text: "1/4 dari total anggota" },
          { id: "c", text: "1/3 dari total anggota" },
          { id: "d", text: "Lebih dari separuh total anggota" },
        ],
        correct: "c",
        explanation:
          "Minimal sepertiga anggota bisa mengajukan permintaan RALB secara tertulis — ini adalah mekanisme kontrol demokratis yang melindungi anggota dari penyimpangan pengurus.",
      },
    ],
  },
  7: {
    moduleId: 7,
    title: "Koperasi Digital & Fintech",
    sections: [
      {
        heading: "Ketika Koperasi Masuk ke Genggaman Tangan",
        body: [
          "Dua dekade lalu, bergabung ke koperasi berarti mengisi formulir kertas, menyetor simpanan secara tunai ke kasir, dan mengantre di kantor untuk mengajukan pinjaman. Proses itu efektif untuk zamannya, tapi tidak cocok dengan ritme hidup generasi yang terbiasa menyelesaikan transaksi keuangan dalam hitungan detik dari ponsel. Koperasi yang tidak berevolusi menghadapi risiko kehilangan anggota muda yang lebih nyaman dengan ekosistem digital.",
          "Transformasi digital koperasi bukan sekadar memindahkan formulir dari kertas ke layar. Ia melibatkan perubahan mendasar dalam cara koperasi berinteraksi dengan anggota, mengelola data keuangan, menyalurkan pinjaman, dan melaporan kinerjanya. Koperasi digital yang baik memberi anggota akses penuh ke saldo simpanan, riwayat transaksi, status pinjaman, dan bahkan laporan keuangan koperasi — semua dalam satu aplikasi yang bisa diakses kapan saja.",
          "Di Indonesia, gelombang digitalisasi koperasi mengakselerasi pesat sejak 2019. Kementerian Koperasi meluncurkan berbagai inisiatif digitalisasi, dan banyak koperasi besar — terutama koperasi karyawan BUMN dan koperasi pertanian besar — sudah mengoperasikan sistem informasi terintegrasi yang menghubungkan anggota, pengurus, dan pengawas dalam satu platform digital.",
          "Untuk anggota muda, koperasi digital menawarkan pengalaman yang familiar: aplikasi simpan pinjam dengan UI yang bersih, notifikasi otomatis untuk jatuh tempo angsuran, dashboard personal yang menampilkan riwayat transaksi dan estimasi SHU, serta kemampuan mengajukan pinjaman dari rumah tanpa perlu cuti kerja. Ini adalah pintu masuk yang membuat koperasi relevan bagi generasi yang tumbuh bersama fintech.",
        ],
        highlight: {
          term: "Koperasi Digital",
          def: "Koperasi yang menggunakan platform digital untuk layanan keanggotaan, simpan pinjam, pelaporan, dan komunikasi dengan anggota — mempertahankan prinsip gotong royong tapi menyampaikannya lewat teknologi modern.",
        },
      },
      {
        heading: "Platform Digital yang Mengubah Cara Koperasi Beroperasi",
        body: [
          "SIMKOPDES (Sistem Informasi Manajemen Koperasi Desa) adalah platform digital yang dikembangkan Kementerian Koperasi khusus untuk mengelola Koperasi Desa Merah Putih. Lebih dari sekadar software akuntansi, SIMKOPDES adalah ekosistem manajemen terintegrasi: dari pencatatan keanggotaan, simpanan dan pinjaman, laporan keuangan real-time, hingga pelaporan ke tingkat kecamatan, kabupaten, dan pusat — semuanya terkoneksi dalam satu sistem.",
          "Selain SIMKOPDES yang dikembangkan pemerintah, banyak penyedia teknologi swasta yang membangun solusi digital untuk koperasi. Platform-platform ini biasanya menawarkan fitur-fitur seperti: core banking system untuk simpan pinjam, manajemen anggota dengan KYC digital, sistem scoring kredit berbasis data historis, dan modul RAT digital yang memungkinkan pemungutan suara dilakukan secara online.",
          "Koperasi yang mengadopsi teknologi digital mendapatkan keunggulan operasional yang signifikan. Pertama, efisiensi: tugas-tugas manual seperti rekap simpanan bulanan dan penghitungan jasa pinjaman yang dulu memakan waktu hari kini selesai dalam menit. Kedua, akurasi: sistem otomatis menghilangkan risiko kesalahan manusia dalam perhitungan keuangan. Ketiga, transparansi: laporan keuangan yang diperbarui real-time bisa diakses oleh pengawas dan bahkan anggota biasa kapan saja.",
          "Salah satu dampak paling transformatif dari digitalisasi koperasi adalah kemampuannya menjangkau anggota yang tersebar secara geografis. Koperasi petani di Jawa Timur kini bisa melayani anggota yang sedang merantau di Jakarta — mereka tetap bisa menyetor simpanan dan meminjam melalui aplikasi. Ini membuka kemungkinan baru: koperasi dengan anggota yang tersebar nasional, terhubung bukan oleh kedekatan fisik tapi oleh kepentingan ekonomi yang sama.",
        ],
        highlight: {
          term: "SIMKOPDES",
          def: "Sistem Informasi Manajemen Koperasi Desa — platform digital resmi yang mengelola operasional Koperasi Desa Merah Putih, dari keanggotaan dan keuangan hingga pelaporan ke Kementerian Koperasi.",
        },
      },
      {
        heading: "Fintech dan Koperasi: Kawan atau Lawan?",
        body: [
          "Munculnya platform fintech — pinjaman online, dompet digital, investasi peer-to-peer — sempat membuat banyak orang bertanya: apakah koperasi akan tersisih? Pertanyaan yang wajar, tapi jawabannya adalah tidak, justru sebaliknya. Fintech dan koperasi bisa saling melengkapi, dan model kolaborasi keduanya sudah terbukti berhasil di beberapa negara.",
          "Beberapa koperasi Indonesia sudah bermitra dengan platform fintech untuk memperluas jangkauan layanan mereka. Koperasi menyediakan modal dan keanggotaan berbasis komunitas; fintech menyediakan teknologi dan kemampuan distribusi yang lebih luas. Hasilnya adalah layanan keuangan yang lebih inklusif: anggota koperasi bisa mengakses produk keuangan yang dulu hanya tersedia di bank besar, sementara fintech mendapat basis anggota yang sudah terverifikasi secara komunitas.",
          "Dari sisi anggota, perbedaan antara meminjam dari koperasi berteknologi dan meminjam dari pinjol konvensional tetap sangat mendasar: koperasi dimiliki anggota dan bertujuan menyejahterakan mereka, sementara pinjol dimiliki investor dan bertujuan memaksimalkan keuntungan. Kesamaan teknologinya tidak menghapus perbedaan filosofis ini — dan itulah yang harus selalu diingat ketika memilih platform pinjaman.",
          "Tren yang muncul adalah koperasi yang sepenuhnya digital dari awal (digital-native cooperative) — tidak punya kantor fisik, beroperasi lewat aplikasi, dan menjangkau anggota dari berbagai wilayah yang diikat oleh satu kepentingan bersama (misalnya koperasi freelancer digital, koperasi driver ojek online, atau koperasi guru honorer). Model ini masih berkembang di Indonesia, tapi sudah menunjukkan potensi yang menjanjikan.",
        ],
        bigNumber: {
          value: "24/7",
          label: "Layanan koperasi digital bisa diakses kapan saja dan dari mana saja — tanpa perlu hadir ke kantor koperasi",
        },
      },
      {
        heading: "Yang Perlu Diwaspadai: Bukan Semua yang Berlabel Koperasi Itu Koperasi",
        body: [
          "Digitalisasi membuka peluang, tapi juga membuka celah penipuan. Salah satu masalah terbesar yang dihadapi regulator saat ini adalah banyaknya platform pinjaman online yang menyebut dirinya 'koperasi' untuk menghindari regulasi OJK yang lebih ketat. Dengan menggunakan label koperasi, mereka seolah beroperasi di ranah yang lebih bebas — padahal praktik bisnisnya sama sekali tidak mencerminkan nilai-nilai koperasi.",
          "Ciri-ciri koperasi digital yang perlu dicurigai: tidak memiliki akta pendirian dan pengesahan badan hukum yang bisa diverifikasi, tidak bisa menjawab pertanyaan tentang siapa pengurus dan pengawasnya, tidak menyelenggarakan RAT, menawarkan 'investasi' dengan imbal hasil tetap yang tidak wajar, dan tidak memiliki kantor atau kontak yang bisa dihubungi jika ada masalah.",
          "Cara memverifikasi koperasi digital yang sah: cari di sistem Online Data System (ODS) Kementerian Koperasi yang berisi daftar koperasi yang terdaftar resmi. Koperasi yang sah wajib memiliki nomor badan hukum yang bisa dicek di sana. Selain itu, koperasi digital yang sah juga harus terdaftar atau minimal melapor ke Dinas Koperasi setempat sesuai domisili.",
          "Literasi digital dan literasi keuangan perlu berjalan beriringan. Kemudahan teknologi membuat segalanya lebih mudah diakses — termasuk scam yang dikemas dengan tampilan profesional. Aturan sederhananya: jika sebuah platform menawarkan imbal hasil tetap yang tinggi atas 'simpanan' kamu tanpa ada mekanisme demokratis yang jelas, itu bukan koperasi — itu lebih mirip skema investasi bodong yang menggunakan nama koperasi sebagai tameng.",
        ],
        highlight: {
          term: "Verifikasi Legalitas Koperasi Digital",
          def: "Cek nomor badan hukum koperasi di ODS Kementerian Koperasi (nik.depkop.go.id). Koperasi resmi wajib terdaftar di sana. Jika tidak ketemu, jangan setor uang sebelum verifikasi lebih lanjut.",
        },
      },
    ],
    quizzes: [
      {
        question: "Apa keunggulan utama koperasi digital dibanding koperasi konvensional bagi anggota muda?",
        options: [
          { id: "a", text: "Koperasi digital tidak perlu membayar simpanan wajib" },
          { id: "b", text: "Akses layanan kapan saja dari ponsel tanpa perlu hadir ke kantor" },
          { id: "c", text: "Koperasi digital dibebaskan dari kewajiban RAT tahunan" },
          { id: "d", text: "Bunga pinjaman koperasi digital selalu nol persen" },
        ],
        correct: "b",
        explanation:
          "Digitalisasi memungkinkan anggota mengakses simpanan, pinjaman, dan laporan koperasi kapan saja dari ponsel — tanpa perlu hadir fisik ke kantor.",
      },
      {
        question: "Platform resmi pemerintah untuk manajemen Koperasi Desa Merah Putih secara digital adalah?",
        options: [
          { id: "a", text: "SiCantik Cloud" },
          { id: "b", text: "SIMDES" },
          { id: "c", text: "SIMKOPDES" },
          { id: "d", text: "E-Kopdes" },
        ],
        correct: "c",
        explanation:
          "SIMKOPDES (Sistem Informasi Manajemen Koperasi Desa) adalah platform resmi Kementerian Koperasi yang mengelola operasional Koperasi Desa Merah Putih secara digital.",
      },
      {
        question: "Cara paling tepat untuk memverifikasi apakah sebuah koperasi digital terdaftar secara resmi adalah?",
        options: [
          { id: "a", text: "Melihat apakah aplikasinya tersedia di Google Play Store" },
          { id: "b", text: "Mengecek nomor badan hukumnya di sistem ODS Kementerian Koperasi" },
          { id: "c", text: "Memeriksa berapa banyak ulasan bintang lima yang diterima" },
          { id: "d", text: "Menghitung berapa banyak anggotanya di media sosial" },
        ],
        correct: "b",
        explanation:
          "Koperasi resmi wajib terdaftar di ODS Kementerian Koperasi. Cek nomor badan hukumnya di sana sebelum bergabung atau menyetorkan uang.",
      },
      {
        question: "Tanda bahaya (red flag) yang perlu diwaspadai dari platform yang mengklaim sebagai koperasi adalah?",
        options: [
          { id: "a", text: "Mengadakan RAT setiap tahun dan laporan keuangan terbuka" },
          { id: "b", text: "Menawarkan imbal hasil tetap yang tinggi tanpa mekanisme demokratis yang jelas" },
          { id: "c", text: "Mengharuskan anggota menyetor simpanan pokok saat bergabung" },
          { id: "d", text: "Memerlukan waktu beberapa hari untuk memproses permohonan keanggotaan" },
        ],
        correct: "b",
        explanation:
          "Koperasi sejati tidak menjanjikan imbal hasil tetap — SHU bergantung pada kinerja nyata dan dibagikan sesuai partisipasi. Janji imbal hasil tetap yang tinggi adalah tanda skema investasi bodong.",
      },
    ],
  },
  8: {
    moduleId: 8,
    title: "Membangun Koperasi di Desamu",
    sections: [
      {
        heading: "Gambaran Besar: Dari Ide ke Badan Hukum",
        body: [
          "Mendirikan koperasi adalah proyek komunitas, bukan proyek satu orang. Tidak membutuhkan modal raksasa, tidak memerlukan koneksi ke pejabat tinggi, dan tidak perlu latar belakang bisnis yang kuat. Yang paling dibutuhkan adalah: sekelompok orang dengan kebutuhan ekonomi yang serupa, komitmen untuk bekerja sama, dan pemahaman dasar tentang proses yang harus dilalui.",
          "Proses pendirian koperasi di Indonesia secara garis besar melalui enam tahap: (1) membangun kelompok pendiri, (2) menggelar rapat pembentukan, (3) menyusun Anggaran Dasar dan Anggaran Rumah Tangga, (4) membuat akta pendirian di hadapan notaris, (5) mengajukan pengesahan badan hukum ke Kementerian Koperasi, dan (6) memulai operasional setelah badan hukum terbit. Setiap tahap punya persyaratan spesifik yang akan kita bahas satu per satu.",
          "Yang perlu dipahami sejak awal: mendirikan koperasi membutuhkan kesabaran. Proses legalitas bisa memakan waktu satu hingga tiga bulan tergantung kelengkapan dokumen dan antrian di instansi terkait. Tapi waktu yang diinvestasikan di awal untuk membangun fondasi yang kuat akan menentukan apakah koperasi ini akan bertahan satu tahun atau satu dekade.",
          "Pengalaman koperasi-koperasi yang gagal di Indonesia sebagian besar bukan karena masalah modal — tapi karena fondasi yang rapuh: anggota yang tidak benar-benar paham hak dan kewajibannya, AD/ART yang disusun asal-asalan, atau pengurus yang tidak memiliki rekam jejak dan kompetensi yang memadai. Modul ini akan memandu kamu untuk menghindari semua jebakan itu.",
        ],
        highlight: {
          term: "Prasyarat Utama Pendirian",
          def: "Minimal 20 orang pendiri yang memiliki kepentingan ekonomi yang sama, komitmen bersama untuk menjalankan prinsip koperasi, dan kesediaan untuk menginvestasikan waktu dalam proses legalitas.",
        },
      },
      {
        heading: "Langkah 1–2: Membangun Kelompok Pendiri dan Rapat Pembentukan",
        body: [
          "Langkah pertama adalah mengidentifikasi siapa yang akan menjadi pendiri. UU No. 25/1992 mensyaratkan minimal 20 orang untuk koperasi primer. Tapi lebih penting dari angka ini adalah kualitas para pendirinya: mereka harus punya kebutuhan ekonomi yang benar-benar serupa (misalnya semua petani padi, atau semua pelaku usaha warung, atau semua guru honorer di satu kecamatan), dan mereka harus sudah memahami secara umum apa yang akan dibangun bersama.",
          "Sebelum rapat pembentukan formal, lakukan serangkaian pertemuan informal untuk menyamakan pemahaman. Diskusikan: apa jenis koperasi yang akan didirikan? Apa bidang usaha utamanya? Berapa besaran simpanan pokok dan wajib yang disepakati? Siapa yang bersedia jadi pengurus? Pertanyaan-pertanyaan ini harus sudah punya jawaban sementara sebelum rapat pembentukan digelar — karena di rapat itu semua akan diformalkan.",
          "Rapat pembentukan adalah momen kritis pertama. Ini adalah forum resmi pertama yang harus didokumentasikan secara tertulis. Dalam rapat ini, seluruh calon pendiri hadir dan secara bersama-sama: menyatakan kehendak untuk mendirikan koperasi, menetapkan nama koperasi (harus mengandung kata 'koperasi'), menyetujui AD/ART yang sudah disiapkan, memilih pengurus dan pengawas pertama, dan menetapkan besaran simpanan. Semua ini harus tercatat dalam notulen rapat yang ditandatangani oleh pimpinan rapat dan notulis.",
          "Pemilihan nama koperasi bukan hal sepele. Nama harus mencerminkan identitas dan bidang usaha koperasi, harus mengandung kata 'koperasi', dan tidak boleh sama dengan nama koperasi yang sudah terdaftar di wilayah yang sama. Nama yang baik membuat koperasimu mudah dikenali dan diingat oleh komunitas yang ingin kamu layani.",
        ],
        bigNumber: {
          value: "20",
          label: "Jumlah minimum pendiri yang dibutuhkan untuk mendirikan koperasi primer secara sah",
        },
      },
      {
        heading: "Langkah 3: Menyusun Anggaran Dasar dan Anggaran Rumah Tangga",
        body: [
          "AD/ART adalah konstitusi koperasimu — dokumen paling fundamental yang mengatur semua aspek kehidupan organisasi. AD memuat hal-hal yang bersifat pokok dan permanen: nama, tempat kedudukan, tujuan, bidang usaha, persyaratan keanggotaan, modal, cara pembagian SHU, dan ketentuan tentang pembubaran. ART memuat aturan teknis yang lebih rinci: prosedur rapat, tata cara pemilihan pengurus, mekanisme simpan pinjam, dan hal-hal operasional lainnya.",
          "Kementerian Koperasi menyediakan template AD/ART standar yang bisa digunakan sebagai titik awal. Template ini sudah memuat semua klausul minimum yang diwajibkan secara hukum. Kamu dan para pendiri bisa memodifikasi template ini sesuai kebutuhan spesifik koperasi — misalnya menambahkan ketentuan tentang bidang usaha tertentu atau menyesuaikan mekanisme simpanan dengan kondisi ekonomi anggota.",
          "Beberapa ketentuan dalam AD/ART yang paling sering menjadi sumber konflik di kemudian hari — dan karena itu perlu dirumuskan dengan sangat hati-hati: besaran simpanan pokok dan wajib, syarat dan mekanisme pengajuan pinjaman, prosedur ketika pengurus dituding melakukan penyimpangan, cara menghitung dan membagi SHU, dan kondisi yang memungkinkan anggota dikeluarkan dari koperasi.",
          "Proses penyusunan AD/ART sebaiknya melibatkan seluruh calon pendiri, bukan didelegasikan ke satu-dua orang saja. Anggota yang ikut terlibat menyusun aturan main lebih cenderung untuk mematuhinya — karena mereka memahami mengapa aturan itu ada dan merasa memilikinya. Konsultasikan draft AD/ART dengan Dinas Koperasi setempat sebelum rapat pembentukan — mereka biasanya bersedia memberi masukan gratis.",
        ],
        highlight: {
          term: "Anggaran Dasar (AD)",
          def: "Dokumen konstitusi koperasi yang memuat hal-hal pokok: nama, tujuan, bidang usaha, aturan keanggotaan, dan cara pembagian SHU. AD hanya bisa diubah melalui Rapat Anggota dengan kuorum yang tinggi.",
        },
      },
      {
        heading: "Langkah 4–5: Akta Notaris dan Pengesahan Badan Hukum",
        body: [
          "Setelah AD/ART disahkan dalam rapat pembentukan, langkah berikutnya adalah membuat akta pendirian di hadapan notaris. Notaris yang kamu pilih harus yang sudah mendapat izin dari Kementerian Hukum dan HAM untuk membuat akta koperasi. Bawa dokumen berikut ke notaris: notulen rapat pembentukan yang sudah ditandatangani, daftar nama dan identitas semua pendiri, AD/ART yang sudah disepakati, dan bukti setoran simpanan pokok para pendiri.",
          "Notaris akan membacakan dan mengesahkan akta pendirian di hadapan para pendiri (atau minimal pengurus yang dikuasakan). Setelah akta ditandatangani, notaris akan membuatkan salinannya untuk kamu bawa ke tahap berikutnya. Biaya notaris bervariasi tergantung notaris dan daerah — umumnya antara Rp500.000 sampai Rp2.000.000.",
          "Akta notaris kemudian dibawa ke Kementerian Koperasi (atau Dinas Koperasi di tingkat provinsi/kabupaten untuk koperasi yang cakupannya lokal) untuk proses pengesahan badan hukum. Sejak 2014, proses ini sudah bisa dilakukan secara online melalui sistem OSS (Online Single Submission). Dokumen yang dibutuhkan: akta notaris, daftar nama pengurus dan pengawas beserta KTP, dan dokumen administrasi lainnya yang diminta sistem.",
          "Proses pengesahan biasanya memakan waktu 14-30 hari kerja jika dokumen lengkap dan tidak ada catatan dari verifikator. Setelah disahkan, koperasimu akan mendapatkan nomor badan hukum resmi dan akta pengesahan dari Kementerian Koperasi. Simpan dokumen ini dengan sangat baik — ini adalah 'sertifikat kelahiran' koperasi yang diperlukan untuk semua urusan legal selanjutnya.",
        ],
        highlight: {
          term: "OSS untuk Koperasi",
          def: "Online Single Submission (OSS) adalah portal pemerintah yang bisa digunakan untuk mengajukan pengesahan badan hukum koperasi secara online — tanpa perlu bolak-balik ke kantor Kementerian Koperasi.",
        },
      },
      {
        heading: "Langkah 6: Memulai Operasional dan Menjaga Keberlanjutan",
        body: [
          "Setelah badan hukum terbit, koperasi resmi bisa memulai operasional. Langkah pertama: buka rekening bank atas nama koperasi (bukan atas nama pengurus pribadi). Semua transaksi keuangan koperasi harus melalui rekening ini — bukan rekening pribadi pengurus. Pemisahan keuangan ini adalah prinsip dasar tata kelola yang baik dan wajib dijalankan sejak hari pertama.",
          "Tahun pertama operasional adalah periode paling kritis. Ini adalah masa di mana anggota masih membangun kebiasaan, pengurus masih belajar mengelola, dan sistem yang sudah dirancang di atas kertas diuji oleh kenyataan. Banyak koperasi baru yang kandas di tahun pertama bukan karena tidak ada modal, tapi karena anggota kehilangan semangat ketika ternyata mengelola koperasi lebih rumit dari bayangan.",
          "Bangun kebiasaan transparansi sejak awal. Laporan keuangan bulanan — meskipun sederhana — harus dibuat dan dibagikan ke semua anggota. Anggota yang terbiasa menerima dan membaca laporan keuangan dari bulan ke bulan akan lebih siap dan lebih kritis saat RAT pertama digelar. Transparansi bukan hanya kewajiban hukum, ia adalah cara paling ampuh untuk membangun kepercayaan yang menjadi fondasi koperasi.",
          "Koperasi yang bertahan bukan yang modalnya paling besar, melainkan yang anggotanya paling aktif terlibat. Tiga kebiasaan yang harus dibangun sejak awal: anggota rutin menyetor simpanan tepat waktu, anggota aktif menggunakan layanan koperasi, dan anggota hadir dan berpartisipasi dalam setiap RAT. Ketiga kebiasaan ini adalah tanda bahwa koperasi bukan sekadar nama di sertifikat, tapi komunitas ekonomi yang sungguh-sungguh hidup.",
        ],
        bigNumber: {
          value: "14-30",
          label: "Hari kerja yang dibutuhkan untuk mendapat pengesahan badan hukum koperasi setelah dokumen lengkap diajukan ke Kemenkop",
        },
      },
      {
        heading: "Tantangan Nyata dan Cara Mengatasinya",
        body: [
          "Tantangan pertama yang sering muncul: pengurus kehabisan waktu dan energi. Mengurus koperasi di samping pekerjaan utama memang berat. Solusinya bukan menunggu ada yang punya banyak waktu luang — solusinya adalah membagi tugas secara jelas dan sistematis, memastikan setiap pengurus hanya bertanggung jawab atas bidang yang spesifik, dan jika koperasi sudah cukup besar, mengangkat karyawan tetap yang digaji dari kas koperasi.",
          "Tantangan kedua: anggota yang menunggak simpanan wajib. Ini adalah kanker lambat yang melemahkan modal koperasi. Tangani sejak awal dengan sistem pengingat (bisa via WhatsApp atau aplikasi), dan terapkan konsekuensi yang jelas seperti yang sudah diatur dalam AD/ART — misalnya pembatasan hak pinjaman bagi yang simpanan wajibnya tertunggak lebih dari dua bulan.",
          "Tantangan ketiga: konflik internal antara anggota atau antara anggota dan pengurus. Tidak ada komunitas yang bebas dari konflik — dan koperasi tidak terkecuali. Cara terbaik mengatasinya adalah dengan mekanisme yang sudah ditetapkan di AD/ART: prosedur pengaduan, peran mediasi pengawas, dan jalur ke RAT sebagai forum tertinggi. Konflik yang diselesaikan lewat mekanisme yang sudah disepakati bersama justru memperkuat kepercayaan anggota terhadap sistem koperasi.",
          "Tantangan keempat: anggota yang ingin keluar dan menarik simpanannya. Ini normal dan sudah harus diantisipasi dalam AD/ART. Prosedur pengunduran diri yang jelas — berapa lama proses pencairan, dokumen apa yang dibutuhkan, bagaimana perhitungan SHU yang belum dibagi — melindungi koperasi dari 'rush' pencairan yang mendadak yang bisa mengguncang likuiditas. Koperasi yang sudah punya cadangan yang cukup bisa menghadapi situasi ini dengan tenang.",
        ],
        highlight: {
          term: "Pemisahan Keuangan",
          def: "Keuangan koperasi harus selalu terpisah dari keuangan pribadi pengurus — rekening bank tersendiri, buku kas tersendiri, dan laporan keuangan yang bisa diaudit kapan saja. Ini adalah prinsip tata kelola paling dasar.",
        },
      },
    ],
    quizzes: [
      {
        question: "Berapa jumlah minimum pendiri yang dibutuhkan untuk mendirikan koperasi primer secara sah?",
        options: [
          { id: "a", text: "5 orang" },
          { id: "b", text: "10 orang" },
          { id: "c", text: "20 orang" },
          { id: "d", text: "50 orang" },
        ],
        correct: "c",
        explanation:
          "UU No. 25/1992 mensyaratkan minimal 20 orang pendiri dengan kebutuhan ekonomi yang serupa untuk membentuk koperasi primer.",
      },
      {
        question: "Dokumen yang memuat aturan pokok koperasi seperti nama, tujuan, dan cara pembagian SHU disebut?",
        options: [
          { id: "a", text: "Anggaran Rumah Tangga (ART)" },
          { id: "b", text: "Notulen Rapat Pembentukan" },
          { id: "c", text: "Anggaran Dasar (AD)" },
          { id: "d", text: "Surat Kuasa Pengurus" },
        ],
        correct: "c",
        explanation:
          "Anggaran Dasar adalah konstitusi koperasi yang memuat ketentuan pokok. ART berisi aturan teknis yang lebih rinci.",
      },
      {
        question: "Setelah akta notaris dibuat, ke mana koperasi harus mengajukan pengesahan badan hukum?",
        options: [
          { id: "a", text: "Kantor Bupati atau Walikota setempat" },
          { id: "b", text: "Bank Indonesia di wilayah terdekat" },
          { id: "c", text: "Kementerian Koperasi atau Dinas Koperasi sesuai cakupan wilayah" },
          { id: "d", text: "Pengadilan Negeri setempat" },
        ],
        correct: "c",
        explanation:
          "Pengesahan badan hukum koperasi diajukan ke Kementerian Koperasi (untuk cakupan nasional) atau Dinas Koperasi (untuk koperasi lokal) — bisa dilakukan online lewat OSS.",
      },
      {
        question: "Prinsip tata kelola paling dasar yang harus diterapkan sejak hari pertama koperasi beroperasi adalah?",
        options: [
          { id: "a", text: "Pengurus harus berasal dari satu keluarga yang sama" },
          { id: "b", text: "Keuangan koperasi harus dikelola terpisah dari keuangan pribadi pengurus" },
          { id: "c", text: "Laporan keuangan hanya perlu dibuat sekali setahun saat RAT" },
          { id: "d", text: "Modal awal harus berasal dari pinjaman bank, bukan dari anggota" },
        ],
        correct: "b",
        explanation:
          "Pemisahan keuangan koperasi dan pribadi pengurus adalah prinsip paling fundamental. Rekening bank atas nama koperasi — bukan pribadi — wajib dibuka sejak hari pertama.",
      },
      {
        question: "Faktor utama yang membuat koperasi bisa bertahan jangka panjang adalah?",
        options: [
          { id: "a", text: "Modal awal yang sangat besar dari satu atau dua donatur" },
          { id: "b", text: "Koperasi dikelola oleh orang yang berpendidikan tinggi" },
          { id: "c", text: "Partisipasi aktif anggota dan tata kelola yang transparan" },
          { id: "d", text: "Koperasi membatasi jumlah anggota agar mudah dikelola" },
        ],
        correct: "c",
        explanation:
          "Koperasi hidup dari partisipasi anggotanya. Simpanan yang rutin, transaksi yang aktif, dan kehadiran di RAT adalah tiga pilar yang menjaga koperasi tetap kuat.",
      },
    ],
  },
  9: {
    moduleId: 9,
    title: "Koperasi Syariah",
    sections: [
      {
        heading: "Ketika Gotong Royong Bertemu Nilai Islam",
        body: [
          "Koperasi dan ekonomi Islam sebenarnya punya banyak titik temu. Keduanya menolak eksploitasi, keduanya menekankan keadilan dalam distribusi hasil, dan keduanya menempatkan kepentingan bersama di atas kepentingan pemilik modal semata. Koperasi syariah adalah perpaduan alami dari dua filosofi ini: sebuah lembaga ekonomi kolektif yang sepenuhnya beroperasi sesuai prinsip-prinsip Islam.",
          "Di Indonesia, koperasi syariah diatur melalui Keputusan Menteri Koperasi tentang Koperasi Jasa Keuangan Syariah (KJKS) dan turunannya dalam Usaha Simpan Pinjam dan Pembiayaan Syariah (USPPS-Kop). Regulasi ini memberikan kerangka hukum yang jelas tentang bagaimana koperasi syariah boleh beroperasi, produk apa yang boleh ditawarkan, dan pengawasan seperti apa yang diperlukan.",
          "Perbedaan paling mendasar antara koperasi syariah dan koperasi konvensional bukan pada struktur organisasinya — keduanya tetap punya pengurus, pengawas, RAT, simpanan, dan SHU. Perbedaannya ada pada instrumen keuangan yang digunakan. Koperasi konvensional mengenakan 'jasa pinjaman' yang mirip bunga; koperasi syariah menggantikan ini dengan akad-akad yang bebas riba.",
          "Pengawasan terhadap kepatuhan syariah biasanya dilakukan oleh Dewan Pengawas Syariah (DPS) — biasanya terdiri dari satu atau lebih ulama yang memiliki kompetensi di bidang fiqh muamalah. DPS memeriksa apakah produk dan prosedur koperasi sudah sesuai prinsip Islam, dan memberikan fatwa atau rekomendasi ketika ada pertanyaan tentang kehalalan suatu produk atau transaksi.",
        ],
        highlight: {
          term: "Dewan Pengawas Syariah (DPS)",
          def: "Badan independen yang terdiri dari ulama ahli fiqh muamalah yang mengawasi kepatuhan koperasi syariah terhadap prinsip-prinsip Islam. Fatwa DPS mengikat operasional koperasi syariah.",
        },
      },
      {
        heading: "Larangan Riba dan Implikasinya bagi Praktik Keuangan",
        body: [
          "Riba — dalam bahasa sederhana — adalah keuntungan yang diperoleh dari meminjamkan uang tanpa disertai risiko atau usaha nyata. Bunga tetap pada pinjaman adalah bentuk riba yang paling umum: peminjam wajib membayar X% terlepas dari apakah usaha yang dibiayai pinjaman itu berhasil atau gagal. Dalam pandangan ekonomi Islam, ini tidak adil — pemberi pinjaman mengambil keuntungan pasti sementara peminjam menanggung semua risiko.",
          "Larangan riba bukan hanya soal etika agama — ada argumen ekonomi yang kuat di baliknya. Sistem bunga tetap cenderung memperburuk posisi orang yang sudah lemah secara ekonomi: ketika usaha gagal, utang berbunga tetap menumpuk dan bisa menjerumuskan ke spiral hutang yang sulit keluar. Sistem bagi hasil yang islami, di sisi lain, membuat pemberi modal ikut menanggung risiko — menciptakan insentif untuk memastikan usaha yang dibiayai benar-benar berhasil.",
          "Dalam praktik koperasi syariah, larangan riba diwujudkan dengan cara mengganti instrumen bunga dengan akad-akad yang diakui syariah. Akad-akad ini tidak hanya bebas riba, tapi juga harus bebas dari unsur gharar (ketidakpastian berlebihan yang mengandung spekulasi) dan maysir (perjudian). Setiap transaksi harus jelas objeknya, jelas nilainya, dan jelas waktu pelaksanaannya.",
          "Konsekuensi praktis dari larangan ini: simpanan di koperasi syariah tidak mendapat 'bunga tetap'. Sebagai gantinya, anggota mendapat bagi hasil yang besarannya bergantung pada kinerja usaha koperasi di periode tersebut. Ini berarti ada variabilitas — di tahun yang koperasinya untung besar, bagi hasil bisa lebih dari bunga konvensional; di tahun yang usahanya kurang bagus, bagi hasil bisa lebih kecil. Itulah prinsip berbagi risiko yang adil.",
        ],
        bigNumber: {
          value: "0%",
          label: "Tingkat bunga tetap di koperasi syariah — digantikan dengan nisbah bagi hasil yang proporsional terhadap laba nyata",
        },
      },
      {
        heading: "Empat Akad Utama dalam Pembiayaan Koperasi Syariah",
        body: [
          "Mudharabah adalah akad kerja sama usaha di mana koperasi bertindak sebagai shahib al-mal (pemilik modal) dan anggota sebagai mudharib (pengelola usaha). Keuntungan dibagi sesuai nisbah (rasio) yang disepakati di muka — misalnya 60% untuk pengelola dan 40% untuk pemilik modal. Jika usaha rugi bukan karena kelalaian pengelola, kerugian modal ditanggung oleh pemilik modal (koperasi). Ini adalah akad paling adil karena risiko dibagi secara eksplisit.",
          "Murabahah adalah akad jual beli di mana koperasi membeli barang terlebih dahulu, lalu menjualnya ke anggota dengan harga pokok ditambah keuntungan (margin) yang disepakati dan transparan. Ini berbeda dari pinjaman berbunga: anggota membeli barang, bukan meminjam uang. Murabahah cocok untuk pembiayaan pembelian aset produktif seperti peralatan usaha, kendaraan, atau inventaris toko.",
          "Musyarakah adalah akad kemitraan modal di mana koperasi dan anggota sama-sama menyumbang modal untuk usaha bersama. Keuntungan dibagi sesuai nisbah yang disepakati; kerugian ditanggung proporsional sesuai porsi modal masing-masing. Musyarakah sangat sesuai untuk usaha pertanian, pengolahan, atau usaha produktif lain yang butuh modal gabungan antara anggota dan koperasi.",
          "Ijarah adalah akad sewa manfaat atas aset — koperasi menyewakan aset (mesin, lahan, kendaraan) kepada anggota dengan imbal berupa biaya sewa yang disepakati. Aset tetap milik koperasi; anggota hanya menyewa manfaatnya untuk periode tertentu. Ijarah muntahiya bittamlik adalah variannya — sewa yang di akhir periode bisa dikonversi menjadi kepemilikan anggota jika semua cicilan terpenuhi.",
        ],
        highlight: {
          term: "Nisbah Bagi Hasil",
          def: "Rasio pembagian keuntungan yang disepakati di awal akad mudharabah atau musyarakah — misalnya 60:40 (anggota:koperasi). Keuntungan dibagi sesuai nisbah ini, bukan dengan bunga tetap.",
        },
      },
      {
        heading: "Bergabung ke Koperasi Syariah dan Apa yang Perlu Diperhatikan",
        body: [
          "Bergabung ke koperasi syariah prosesnya sama dengan koperasi konvensional: isi formulir, bayar simpanan pokok, dan mulai menyetor simpanan wajib. Perbedaannya ada pada akad yang ditandatangani — di koperasi syariah, akad keanggotaan dan akad simpanan menggunakan terminologi dan struktur yang sesuai syariah, dan kamu diwajibkan memahami akad yang kamu tanda tangani.",
          "Pertanyaan yang perlu kamu ajukan sebelum bergabung ke koperasi syariah: Apakah DPS-nya terdaftar dan aktif? Produk apa saja yang ditawarkan dan akad apa yang digunakan? Bagaimana mekanisme penetapan nisbah bagi hasil — apakah ditetapkan secara demokratis atau sepihak oleh pengurus? Apakah laporan keuangan dan laporan DPS dibagikan ke anggota setiap tahun?",
          "Hal yang perlu diwaspadai: koperasi yang menyebut dirinya 'syariah' tapi tidak punya DPS yang aktif, menerapkan 'bagi hasil' dengan angka tetap yang tidak berubah dari tahun ke tahun (ini sebenarnya adalah bunga yang disamarkan), atau tidak bisa menjelaskan secara jelas akad apa yang digunakan untuk setiap produknya. Syariah compliance bukan sekadar label — ia harus tercermin dalam setiap aspek operasional.",
          "Koperasi syariah yang baik adalah koperasi yang anggotanya benar-benar memahami akad yang mereka tanda tangani dan merasa nyaman dengan mekanisme bagi hasilnya. Jika kamu bergabung tapi tidak paham apa yang kamu setujui, minta penjelasan langsung dari pengurus atau DPS sebelum menandatangani apapun. Transparansi adalah hak anggota yang tidak bisa ditolak, di koperasi syariah maupun konvensional.",
        ],
        highlight: {
          term: "Akad Keanggotaan Syariah",
          def: "Di koperasi syariah, setiap transaksi — termasuk keanggotaan dan simpanan — menggunakan akad yang diakui syariah. Pahami akad yang kamu tanda tangani sebelum bergabung — ini adalah hakmu sebagai calon anggota.",
        },
      },
    ],
    quizzes: [
      {
        question: "Apa yang dimaksud riba dalam konteks koperasi syariah?",
        options: [
          { id: "a", text: "Keuntungan yang diperoleh dari hasil usaha produktif yang halal" },
          { id: "b", text: "Tambahan nilai tetap atas pinjaman yang tidak bergantung pada kinerja usaha" },
          { id: "c", text: "Simpanan sukarela yang besarannya tidak ditetapkan" },
          { id: "d", text: "Biaya administrasi tahunan yang dibayar anggota" },
        ],
        correct: "b",
        explanation:
          "Riba adalah penambahan nilai tetap atas pinjaman yang dilarang karena pemberi pinjaman mengambil keuntungan pasti sementara peminjam menanggung semua risiko usaha.",
      },
      {
        question: "Akad apa yang digunakan ketika koperasi membeli barang dan menjualnya ke anggota dengan margin yang transparan?",
        options: [
          { id: "a", text: "Mudharabah" },
          { id: "b", text: "Musyarakah" },
          { id: "c", text: "Murabahah" },
          { id: "d", text: "Ijarah" },
        ],
        correct: "c",
        explanation:
          "Murabahah adalah akad jual beli di mana koperasi membeli barang dulu lalu menjualnya ke anggota dengan harga pokok ditambah margin keuntungan yang sudah disepakati secara transparan.",
      },
      {
        question: "Siapa yang bertugas mengawasi kepatuhan koperasi syariah terhadap prinsip-prinsip Islam?",
        options: [
          { id: "a", text: "Ketua pengurus koperasi" },
          { id: "b", text: "Dewan Pengawas Syariah (DPS)" },
          { id: "c", text: "Kementerian Koperasi" },
          { id: "d", text: "Bank Indonesia" },
        ],
        correct: "b",
        explanation:
          "DPS terdiri dari ulama ahli fiqh muamalah yang mengawasi kepatuhan syariah dan mengeluarkan fatwa tentang produk dan prosedur koperasi.",
      },
      {
        question: "Dalam akad musyarakah, bagaimana kerugian usaha ditanggung?",
        options: [
          { id: "a", text: "Seluruhnya ditanggung oleh anggota yang mengelola usaha" },
          { id: "b", text: "Seluruhnya ditanggung oleh koperasi sebagai pemilik modal" },
          { id: "c", text: "Ditanggung secara proporsional sesuai kontribusi modal masing-masing" },
          { id: "d", text: "Tidak ada kerugian karena musyarakah dijamin penuh" },
        ],
        correct: "c",
        explanation:
          "Dalam musyarakah, keuntungan dibagi sesuai nisbah dan kerugian ditanggung proporsional terhadap porsi modal — ini adalah prinsip berbagi risiko yang adil.",
      },
    ],
  },
  10: {
    moduleId: 10,
    title: "Manajemen & Tata Kelola Koperasi",
    sections: [
      {
        heading: "Tiga Pilar Kelembagaan yang Menjaga Keseimbangan",
        body: [
          "Setiap organisasi yang dikelola dengan baik membutuhkan pemisahan fungsi yang jelas. Di perusahaan korporat, ada RUPS (pemegang saham), Dewan Komisaris (pengawas), dan Direksi (pelaksana). Di koperasi, strukturnya analog tapi berbeda dalam filosofi: Rapat Anggota memegang kekuasaan tertinggi, Pengawas memastikan kepatuhan, dan Pengurus menjalankan operasional harian. Ketiga pilar ini harus berjalan seimbang agar koperasi bisa tumbuh sehat.",
          "Kelemahan banyak koperasi Indonesia justru terletak pada ketidakseimbangan ini. Ada koperasi yang dikuasai satu pengurus karismatik sehingga Rapat Anggota hanya menjadi formalitas. Ada koperasi yang Pengawasnya terlalu pasif sehingga penyimpangan bisa berlangsung bertahun-tahun tanpa terdeteksi. Ada juga koperasi yang RAT-nya memang demokratis tapi anggotanya tidak cukup literate untuk membaca laporan keuangan, sehingga pengurus bisa lolos tanpa akuntabilitas nyata.",
          "Memahami struktur tata kelola koperasi bukan hanya soal hapalan — ini adalah bekal untuk menjadi anggota yang kritis dan untuk mengidentifikasi apakah koperasi yang kamu masuki dikelola dengan sehat. Koperasi yang tata kelolanya buruk hampir pasti akan bermasalah di kemudian hari, tidak peduli seberapa besar modalnya.",
          "Yang menarik dari tata kelola koperasi adalah semua posisi — dari ketua pengurus sampai anggota biasa — dipilih dan bisa diganti oleh komunitas anggota sendiri. Tidak ada komisaris yang ditunjuk oleh konglomerat, tidak ada direksi yang diangkat oleh dewan pengurus yang tidak pernah berinteraksi dengan 'pelanggan'. Semua bertanggung jawab langsung kepada anggota yang mereka layani.",
        ],
        highlight: {
          term: "Tiga Pilar Tata Kelola",
          def: "Rapat Anggota (pemegang kekuasaan tertinggi), Pengurus (pelaksana operasional), dan Pengawas (penjaga kepatuhan). Ketiganya harus berfungsi seimbang agar koperasi tidak dikuasai oleh satu pihak.",
        },
      },
      {
        heading: "Tugas, Hak, dan Batas Wewenang Pengurus",
        body: [
          "Pengurus adalah tangan yang menjalankan koperasi setiap harinya. Mereka dipilih oleh dan dari anggota melalui RAT, dan bertanggung jawab langsung kepada Rapat Anggota. Susunan pengurus minimal terdiri dari ketua, sekretaris, dan bendahara — meskipun koperasi yang lebih besar bisa memiliki struktur yang lebih kompleks dengan wakil ketua, kepala bidang, dan sebagainya.",
          "Tugas utama pengurus mencakup: mengelola kegiatan usaha koperasi sehari-hari, menandatangani semua dokumen resmi atas nama koperasi, mengangkat dan memberhentikan karyawan (jika ada), memelihara buku daftar anggota, membuat laporan keuangan bulanan dan tahunan, serta menyelenggarakan RAT tepat waktu setiap tahunnya. Ini bukan pekerjaan ringan — itulah mengapa koperasi yang sudah cukup besar biasanya memberikan honorarium kepada pengurusnya.",
          "Yang tidak boleh dilakukan pengurus: membuat keputusan yang melampaui batas wewenang yang ditetapkan AD/ART tanpa persetujuan RAT, menggunakan aset atau dana koperasi untuk kepentingan pribadi, memberikan pinjaman kepada diri sendiri atau keluarga dengan prosedur yang berbeda dari prosedur standar, dan mengambil keputusan investasi besar tanpa konsultasi ke pengawas dan anggota.",
          "Masa jabatan pengurus ditetapkan dalam AD/ART — umumnya dua atau tiga tahun, dengan kemungkinan dipilih kembali maksimal dua periode. Pembatasan periode jabatan ini penting untuk regenerasi kepemimpinan dan mencegah monopoli kekuasaan oleh satu individu yang kemudian sulit diganti meskipun kinerjanya sudah menurun.",
        ],
        highlight: {
          term: "Batas Wewenang Pengurus",
          def: "Pengurus hanya boleh mengambil keputusan yang sudah ditetapkan dalam AD/ART. Keputusan di luar batas itu — seperti investasi besar atau perubahan kebijakan fundamental — harus dibawa ke RAT.",
        },
      },
      {
        heading: "Peran Pengawas yang Sering Diremehkan",
        body: [
          "Pengawas adalah lembaga yang paling sering diabaikan dalam koperasi — padahal fungsinya sangat kritis. Berbeda dari pengurus yang bersifat eksekutif, pengawas bersifat audit: mereka memeriksa apakah pengurus menjalankan koperasi sesuai AD/ART, peraturan yang berlaku, dan keputusan RAT. Tanpa pengawas yang aktif dan kompeten, koperasi rentan terhadap penyimpangan yang bisa bertahun-tahun tidak terdeteksi.",
          "Tugas pengawas secara spesifik: melakukan pemeriksaan terhadap tata kehidupan koperasi minimal satu kali dalam setahun, memeriksa laporan keuangan dan memverifikasi keakuratannya, meneliti apakah kebijakan pengurus sesuai AD/ART, dan melaporkan hasil pemeriksaan kepada Rapat Anggota. Pengawas berhak memeriksa semua dokumen dan buku koperasi kapan saja — hak ini tidak bisa dibatasi oleh pengurus.",
          "Pengawas yang ideal bukan yang mencari-cari kesalahan pengurus untuk menggulingkannya, tapi yang memberi masukan konstruktif agar pengelolaan koperasi terus membaik. Hubungan sehat antara pengurus dan pengawas adalah hubungan mitra — bukan antagonis. Pengawas yang baik membantu pengurus menghindari kesalahan sebelum kesalahan itu terjadi, bukan menunggu sampai kesalahan besar terungkap di hadapan publik.",
          "Sayangnya, banyak koperasi kecil memiliki pengawas yang dipilih berdasarkan kedekatan personal dengan pengurus, bukan berdasarkan kompetensi audit. Akibatnya, laporan pengawas hanya bersifat ceremonial — dibacakan di RAT tapi tidak berisi temuan substantif. Anggota yang aktif perlu mendorong pemilihan pengawas yang benar-benar independen dan memiliki kemampuan membaca laporan keuangan.",
        ],
        bigNumber: {
          value: "3",
          label: "Tiga lembaga yang menjalankan koperasi: Rapat Anggota (tertinggi), Pengurus (pelaksana), Pengawas (pengawal kepatuhan)",
        },
      },
      {
        heading: "Transparansi sebagai Fondasi Kepercayaan Anggota",
        body: [
          "Transparansi bukan pilihan di koperasi — ia adalah kewajiban hukum dan moral. Secara hukum, pengurus diwajibkan menyajikan laporan keuangan yang akurat kepada anggota di RAT. Secara moral, karena anggota adalah pemilik, mereka berhak mengetahui kondisi persis dari apa yang mereka miliki. Koperasi yang tidak transparan adalah koperasi yang mengkhianati prinsip dasarnya sendiri.",
          "Transparansi dalam koperasi mencakup beberapa dimensi. Dimensi keuangan: neraca, laporan laba rugi, laporan arus kas, dan perhitungan SHU harus disajikan secara lengkap dan akurat. Dimensi keanggotaan: daftar anggota aktif dan data simpanan harus bisa diakses (dengan memperhatikan privasi). Dimensi tata kelola: keputusan-keputusan pengurus, terutama yang menyangkut pinjaman besar atau investasi signifikan, harus dicatat dan bisa ditelusuri.",
          "Salah satu praktik transparansi terbaik yang bisa diterapkan koperasi — terutama yang sudah menggunakan sistem digital — adalah menyediakan dashboard anggota: setiap anggota bisa melihat saldo simpanannya, riwayat transaksinya, status pinjamannya, dan estimasi SHU untuk tahun berjalan kapan saja. Dashboard seperti ini membuat anggota merasa terhubung dengan koperasinya secara real-time, bukan hanya setahun sekali saat RAT.",
          "Ketika koperasi transparan, kepercayaan anggota tumbuh secara alami. Anggota yang percaya akan lebih aktif menyetor simpanan, lebih rajin menggunakan layanan, dan lebih semangat merekrut anggota baru dari lingkaran sosialnya. Kepercayaan adalah aset koperasi yang paling berharga — dan satu-satunya cara membangunnya adalah dengan konsisten menunjukkan bahwa tidak ada yang disembunyikan.",
        ],
        highlight: {
          term: "Dashboard Anggota",
          def: "Fitur di koperasi digital yang memungkinkan anggota mengakses saldo simpanan, riwayat transaksi, status pinjaman, dan estimasi SHU secara real-time — bentuk transparansi paling praktis di era digital.",
        },
      },
    ],
    quizzes: [
      {
        question: "Siapa yang memegang kekuasaan eksekutif (pelaksana operasional harian) dalam koperasi?",
        options: [
          { id: "a", text: "Rapat Anggota" },
          { id: "b", text: "Pengawas koperasi" },
          { id: "c", text: "Pengurus koperasi" },
          { id: "d", text: "Dinas Koperasi setempat" },
        ],
        correct: "c",
        explanation:
          "Pengurus menjalankan operasional koperasi sehari-hari berdasarkan keputusan Rapat Anggota. Mereka adalah tangan eksekutif koperasi.",
      },
      {
        question: "Apa fungsi utama Pengawas dalam koperasi?",
        options: [
          { id: "a", text: "Menjalankan usaha koperasi secara langsung" },
          { id: "b", text: "Memastikan pengurus bekerja sesuai AD/ART dan keputusan RAT" },
          { id: "c", text: "Menentukan harga barang yang dijual koperasi" },
          { id: "d", text: "Mengumpulkan simpanan dari seluruh anggota" },
        ],
        correct: "b",
        explanation:
          "Pengawas bertugas mengaudit dan memastikan pengurus menjalankan koperasi sesuai aturan — bukan mengambil keputusan operasional.",
      },
      {
        question: "Dokumen koperasi yang memuat aturan teknis operasional seperti prosedur rapat dan mekanisme simpan pinjam adalah?",
        options: [
          { id: "a", text: "Anggaran Dasar (AD)" },
          { id: "b", text: "Anggaran Rumah Tangga (ART)" },
          { id: "c", text: "Laporan Pertanggungjawaban Pengurus" },
          { id: "d", text: "Akta Pendirian Koperasi" },
        ],
        correct: "b",
        explanation:
          "ART (Anggaran Rumah Tangga) memuat aturan teknis yang lebih rinci — prosedur rapat, pemilihan pengurus, mekanisme simpan pinjam, dll. AD memuat hal-hal yang lebih pokok.",
      },
      {
        question: "Mengapa transparansi dianggap sebagai kewajiban mendasar koperasi, bukan sekadar pilihan?",
        options: [
          { id: "a", text: "Karena regulator mewajibkannya dalam setiap peraturan koperasi" },
          { id: "b", text: "Karena anggota adalah pemilik koperasi yang berhak tahu kondisi penuh atas apa yang mereka miliki" },
          { id: "c", text: "Karena bank pemberi kredit meminta laporan keuangan terbuka" },
          { id: "d", text: "Karena koperasi tidak dikenakan pajak jika transparan" },
        ],
        correct: "b",
        explanation:
          "Karena anggota adalah pemilik, mereka berhak atas informasi lengkap tentang kondisi koperasinya. Transparansi bukan kemurahan hati pengurus — ini adalah hak anggota.",
      },
    ],
  },
  11: {
    moduleId: 11,
    title: "Mengenal Koperasi Desa Merah Putih",
    sections: [
      {
        heading: "Mengapa Program Ini Lahir dan Apa yang Ingin Diselesaikannya",
        body: [
          "Untuk memahami Koperasi Desa Merah Putih, kita perlu memahami masalah yang coba diselesaikannya. Selama puluhan tahun, perekonomian desa Indonesia menghadapi masalah yang sama berulang kali: rantai distribusi barang yang terlalu panjang sehingga harga sampai ke konsumen jauh lebih mahal dari harga di tingkat produsen; akses layanan kesehatan yang terbatas karena apotek dan klinik terkonsentrasi di kota; modal usaha yang sulit didapat kecuali melalui rentenir atau pinjaman berbunga tinggi; dan hasil pertanian yang dihargai murah oleh tengkulak karena petani tidak punya posisi tawar yang kuat.",
          "Program Koperasi Desa/Kelurahan Merah Putih lahir sebagai jawaban komprehensif atas semua masalah ini. Bukan dengan mendirikan BUMN baru, bukan dengan memberikan bantuan tunai langsung, tapi dengan mengaktifkan kekuatan yang sudah ada di setiap desa: potensi gotong royong masyarakat yang diorganisir dalam bentuk koperasi yang modern, legal, dan terintegrasi.",
          "Inisiatif ini berbeda dari program koperasi pemerintah sebelumnya dalam satu hal krusial: ia bukan koperasi yang 'diberikan' oleh pemerintah kepada masyarakat. Pemerintah menyediakan kerangka hukum, platform digital, dan dukungan pembentukan — tapi koperasinya sendiri adalah milik anggota. Pemerintah adalah fasilitator, bukan pemilik. Ini adalah perbedaan yang sangat signifikan dalam menentukan keberlanjutan program.",
          "Konteks historis juga penting: program ini diluncurkan di tengah momentum yang tepat. Digitalisasi ekonomi desa yang pesat, kesadaran masyarakat tentang pentingnya kedaulatan pangan dan kesehatan yang meningkat setelah pandemi, dan keberhasilan beberapa koperasi percontohan di berbagai daerah — semuanya menciptakan kondisi yang lebih siap untuk program sebesar ini dibanding dekade-dekade sebelumnya.",
        ],
        highlight: {
          term: "Logika Program",
          def: "Koperasi Desa Merah Putih bukan koperasi yang 'diberikan' pemerintah — pemerintah hanya memfasilitasi pembentukan dan menyediakan platform digital. Kepemilikan dan pengelolaannya tetap sepenuhnya di tangan anggota.",
        },
      },
      {
        heading: "Landasan Hukum: Inpres 9/2025 dan Permenkop 2/2025",
        body: [
          "Instruksi Presiden Nomor 9 Tahun 2025 tentang Percepatan Pembentukan Koperasi Desa/Kelurahan Merah Putih adalah fondasi hukum program ini. Sebagai Instruksi Presiden, Inpres ini secara langsung menginstruksikan semua kementerian, lembaga, gubernur, bupati/walikota, dan kepala desa untuk bergerak aktif memfasilitasi pembentukan koperasi di wilayahnya masing-masing. Ini bukan sekadar imbauan — ini adalah perintah langsung dengan konsekuensi administratif.",
          "Peraturan Menteri Koperasi dan UKM Nomor 2 Tahun 2025 memberikan kerangka teknis yang lebih rinci: nama resmi yang harus digunakan ('Koperasi Desa Merah Putih [Nama Desa]' atau 'Koperasi Kelurahan Merah Putih [Nama Kelurahan]'), tujuh unit usaha yang wajib dijalankan, standar tata kelola minimum yang harus dipenuhi, dan mekanisme pelaporan melalui platform SIMKOPDES.",
          "Penamaan yang distandarisasi bukan formalitas belaka. Nama yang seragam memungkinkan sistem nasional untuk mengidentifikasi, memonitor, dan mengevaluasi semua Koperasi Desa Merah Putih secara konsisten. Ini juga membangun identitas merek yang kuat di tingkat nasional — warga desa manapun di Indonesia bisa langsung mengenali 'Koperasi Desa Merah Putih' sebagai lembaga dengan standar tertentu.",
          "Selain Inpres dan Permenkop, program ini juga mendapat dukungan dari berbagai kementerian terkait: Kementerian Desa yang menyediakan dukungan fasilitator desa, Kementerian Kesehatan yang mendukung pendirian klinik desa, Kementerian Pertanian yang mendukung unit pergudangan, dan Kementerian BUMN yang menugaskan beberapa BUMN untuk bermitra dengan koperasi desa dalam rantai pasok.",
        ],
        highlight: {
          term: "Inpres No. 9 Tahun 2025",
          def: "Instruksi Presiden yang menjadi landasan hukum percepatan pembentukan Koperasi Desa/Kelurahan Merah Putih — menginstruksikan semua jenjang pemerintahan untuk aktif memfasilitasi pembentukannya.",
        },
      },
      {
        heading: "Tujuan, Prinsip Dasar, dan Positioningnya",
        body: [
          "Tujuan utama program ini bisa dirangkum dalam satu kalimat: menjadikan koperasi desa sebagai motor penggerak ekonomi lokal yang mandiri, efisien, dan berdaya saing. Setiap kata dalam kalimat itu punya makna spesifik. 'Motor penggerak' berarti bukan sekadar lembaga pelengkap, tapi tulang punggung ekonomi desa. 'Mandiri' berarti tidak bergantung pada subsidi pemerintah secara terus-menerus. 'Efisien' berarti mampu memotong rantai distribusi yang selama ini memakan margin besar. 'Berdaya saing' berarti produk dan layanannya bisa bersaing kualitas dan harga dengan pasar di luar desa.",
          "Program ini juga secara eksplisit menempatkan koperasi desa sebagai alternatif terhadap ketergantungan pada rantai distribusi nasional yang sering merugikan desa. Contoh konkretnya: dengan unit pengadaan sembako, koperasi bisa membeli langsung dari petani lokal dan menjual ke warga desa dengan harga yang lebih adil untuk keduanya — memotong peran distributor besar yang selama ini mengambil margin terbesar.",
          "Penting untuk dipahami bahwa Koperasi Desa Merah Putih dirancang untuk berdampingan — bukan menggantikan — BUMDes (Badan Usaha Milik Desa) yang sudah ada. BUMDes adalah milik pemerintah desa; Koperasi Desa Merah Putih adalah milik anggota perorangan. Keduanya bisa saling melengkapi: BUMDes bisa mengelola aset publik desa, sementara koperasi mengelola usaha yang berorientasi langsung pada anggotanya.",
          "Dari sisi anggota, manfaat yang ditawarkan sangat konkret: harga sembako yang lebih murah karena dibeli kolektif dalam jumlah besar, akses layanan kesehatan dasar yang lebih terjangkau di klinik desa, pinjaman modal untuk usaha dengan jasa yang wajar melalui unit simpan pinjam, dan fasilitas penyimpanan hasil pertanian yang memperpanjang umur simpan sehingga petani tidak terpaksa menjual di harga terendah saat panen raya.",
        ],
        bigNumber: {
          value: "80.000+",
          label: "Target jumlah desa dan kelurahan di seluruh Indonesia yang akan memiliki Koperasi Desa Merah Putih",
        },
      },
      {
        heading: "Perbedaan Program Ini dengan Koperasi Konvensional",
        body: [
          "Koperasi Desa Merah Putih memiliki beberapa karakteristik yang membedakannya dari koperasi konvensional. Pertama, mandatori tujuh unit usaha: tidak seperti koperasi konvensional yang bisa memilih satu bidang usaha, Koperasi Desa Merah Putih diwajibkan menjalankan ketujuh unit usaha yang sudah ditetapkan Permenkop. Ini menciptakan koperasi yang benar-benar komprehensif, tapi juga menuntut kapasitas manajemen yang lebih tinggi.",
          "Kedua, integrasi dengan platform digital nasional: semua Koperasi Desa Merah Putih wajib menggunakan SIMKOPDES untuk manajemen operasional dan pelaporan. Ini berarti data dari setiap koperasi desa masuk ke sistem nasional secara real-time — memungkinkan pemerintah memonitor perkembangan program secara akurat dan cepat mengidentifikasi koperasi yang butuh intervensi atau dukungan.",
          "Ketiga, proses pembentukan yang terfasilitasi: berbeda dari mendirikan koperasi dari nol yang memerlukan banyak inisiatif mandiri, pembentukan Koperasi Desa Merah Putih difasilitasi oleh tim dari pemerintah — mulai dari penyiapan AD/ART standar, pelatihan pengurus, bantuan pendaftaran badan hukum, sampai pendampingan di tahun-tahun pertama operasional.",
          "Keempat, skala yang diperhitungkan sejak awal: seorang kepala desa atau ketua BPD tidak bisa lagi mengatakan 'kami tidak tahu caranya' — pemerintah sudah menyediakan template, panduan, dan fasilitator. Hambatan informasi yang selama ini menjadi alasan banyak desa tidak punya koperasi aktif sudah dieliminasi secara sistematis oleh program ini.",
        ],
        highlight: {
          term: "Tujuh Unit Usaha Wajib",
          def: "Berbeda dari koperasi konvensional yang bebas memilih bidang usaha, Koperasi Desa Merah Putih diwajibkan menjalankan 7 unit: kantor, sembako, klinik, apotek, gudang, logistik, dan simpan pinjam.",
        },
      },
      {
        heading: "Target, Linimasa, dan Momentum Program",
        body: [
          "Linimasa program ini sangat ambisius. Pada Januari hingga Maret 2025, pemerintah melatih ribuan fasilitator yang akan mendampingi proses pembentukan koperasi di seluruh desa Indonesia. April hingga Juni 2025 adalah fase intensif konsultasi dan pengajuan legalitas — setiap desa difasilitasi untuk menyelesaikan proses pendaftaran badan hukumnya. Puncaknya adalah peluncuran serentak nasional pada 12 Juli 2025, bertepatan dengan Hari Koperasi Indonesia.",
          "Target minimal adalah 80.000 koperasi yang aktif dan beroperasi — setara dengan jumlah desa dan kelurahan di Indonesia. Ini adalah target yang sangat besar dan belum pernah ada precedent-nya dalam sejarah gerakan koperasi Indonesia. Untuk konteks: mendaftarkan 80.000 koperasi berarti rata-rata lebih dari 200 koperasi baru terdaftar setiap hari selama periode pembentukan.",
          "Apakah target ini realistis? Jawabannya bergantung pada kapasitas fasilitasi pemerintah dan antusiasme masyarakat desa. Yang jelas, momentumnya nyata: media sosial penuh dengan video warga desa yang menggelar Musdesus (Musyawarah Desa Khusus) untuk mendirikan koperasi, dan banyak desa yang sudah memiliki koperasi sebelumnya menyatakan kesiapan untuk meningkatkan statusnya menjadi Koperasi Desa Merah Putih.",
          "Untuk generasi muda, terutama yang tinggal di desa atau memiliki kampung halaman di daerah, ini adalah momentum yang langka. Bergabung sejak awal ke Koperasi Desa Merah Putih berarti menjadi bagian dari fondasi sebuah ekosistem ekonomi yang dirancang untuk tumbuh selama puluhan tahun. Mereka yang hadir sejak awal akan memiliki peran dan pengaruh yang jauh lebih besar dibanding yang bergabung setelah koperasinya sudah mapan.",
        ],
        highlight: {
          term: "12 Juli 2025 — Hari Peluncuran",
          def: "Tanggal peluncuran serentak nasional Koperasi Desa Merah Putih, bertepatan dengan Hari Koperasi Indonesia. Ratusan koperasi desa diluncurkan bersamaan di seluruh penjuru nusantara.",
        },
      },
    ],
    quizzes: [
      {
        question: "Masalah ekonomi desa apa yang secara langsung coba diselesaikan oleh Koperasi Desa Merah Putih?",
        options: [
          { id: "a", text: "Kelebihan produk ekspor yang tidak terserap pasar internasional" },
          { id: "b", text: "Rantai distribusi panjang, akses modal mahal, dan layanan kesehatan terbatas di desa" },
          { id: "c", text: "Inflasi tinggi di kota besar yang berdampak ke desa" },
          { id: "d", text: "Kelebihan tenaga kerja terdidik di perdesaan" },
        ],
        correct: "b",
        explanation:
          "Program ini dirancang untuk memotong rantai distribusi yang panjang, menyediakan akses modal yang wajar, dan menghadirkan layanan kesehatan dasar di tingkat desa.",
      },
      {
        question: "Landasan hukum utama program Koperasi Desa Merah Putih adalah?",
        options: [
          { id: "a", text: "UU No. 25 Tahun 1992 tentang Perkoperasian" },
          { id: "b", text: "Perpres No. 10 Tahun 2020 tentang Kewirausahaan" },
          { id: "c", text: "Instruksi Presiden No. 9 Tahun 2025" },
          { id: "d", text: "UU No. 6 Tahun 2014 tentang Desa" },
        ],
        correct: "c",
        explanation:
          "Inpres No. 9 Tahun 2025 tentang Percepatan Pembentukan Koperasi Desa/Kelurahan Merah Putih adalah landasan hukum utama yang menginstruksikan seluruh jenjang pemerintahan untuk bergerak.",
      },
      {
        question: "Apa perbedaan utama Koperasi Desa Merah Putih dengan BUMDes yang sudah ada?",
        options: [
          { id: "a", text: "Koperasi Desa Merah Putih adalah milik pemerintah desa, BUMDes milik anggota perorangan" },
          { id: "b", text: "Koperasi Desa Merah Putih adalah milik anggota perorangan, BUMDes adalah milik pemerintah desa" },
          { id: "c", text: "Keduanya sama — Koperasi Desa Merah Putih hanya nama baru BUMDes" },
          { id: "d", text: "BUMDes dibubarkan dan diganti dengan Koperasi Desa Merah Putih" },
        ],
        correct: "b",
        explanation:
          "Koperasi Desa Merah Putih dimiliki oleh anggota perorangan (warga desa). BUMDes dimiliki oleh pemerintah desa. Keduanya berbeda dan bisa saling melengkapi.",
      },
      {
        question: "Kapan peluncuran serentak nasional Koperasi Desa Merah Putih dijadwalkan?",
        options: [
          { id: "a", text: "17 Agustus 2025, bertepatan HUT RI" },
          { id: "b", text: "1 Juni 2025, bertepatan Hari Pancasila" },
          { id: "c", text: "12 Juli 2025, bertepatan Hari Koperasi Indonesia" },
          { id: "d", text: "28 Oktober 2025, bertepatan Hari Sumpah Pemuda" },
        ],
        correct: "c",
        explanation:
          "Peluncuran serentak nasional dijadwalkan pada 12 Juli 2025 — Hari Koperasi Indonesia — sebagai momentum simbolis yang kuat untuk gerakan ini.",
      },
    ],
  },
  12: {
    moduleId: 12,
    title: "Tujuh Pilar Usaha Koperasi Desa",
    sections: [
      {
        heading: "Mengapa Tujuh Unit, Bukan Satu?",
        body: [
          "Ketika pemerintah merancang Koperasi Desa Merah Putih, ada pilihan yang harus dibuat: apakah koperasi ini difokuskan pada satu bidang usaha yang kuat, atau didesain sebagai ekosistem terintegrasi yang mencakup semua kebutuhan dasar warga desa? Pilihan yang diambil adalah yang kedua — dan ini bukan keputusan sembarangan.",
          "Masalah ekonomi desa Indonesia bukan masalah satu titik. Seorang petani padi menghadapi banyak hambatan sekaligus: harga pupuk mahal karena rantai distribusinya panjang, hasil panen mudah rusak karena tidak ada fasilitas penyimpanan, modal untuk musim tanam berikutnya sulit didapat karena bank enggan masuk desa, dan ketika sakit ia harus menempuh jarak jauh ke puskesmas yang kelebihan kapasitas. Solusi yang menjawab satu hambatan saja tidak akan mengubah kondisi hidupnya secara signifikan.",
          "Tujuh unit usaha Koperasi Desa Merah Putih dirancang untuk menjawab semua hambatan itu dalam satu kelembagaan. Permenkop No. 2/2025 menetapkan ketujuhnya: (1) kantor koperasi sebagai pusat operasional, (2) pengadaan sembako, (3) klinik desa/kelurahan, (4) apotek desa/kelurahan, (5) pergudangan/cold storage, (6) logistik desa/kelurahan, dan (7) unit simpan pinjam. Bersama-sama, tujuh unit ini membentuk ekosistem ekonomi lengkap dari hulu ke hilir.",
          "Tentu saja, menjalankan tujuh unit usaha sekaligus adalah tantangan besar — terutama di tahun-tahun pertama ketika kapasitas manajemen masih terbatas. Permenkop memberikan fleksibilitas: koperasi boleh menjalankan unit satu per satu secara bertahap, memprioritaskan unit yang paling dibutuhkan warga dan yang paling siap secara kapasitas. Yang penting, semua unit akhirnya beroperasi penuh.",
        ],
        highlight: {
          term: "Ekosistem Terintegrasi",
          def: "Koperasi Desa Merah Putih bukan satu usaha tunggal, melainkan ekosistem lengkap yang mencakup pangan, kesehatan, keuangan, dan logistik — menjawab semua hambatan ekonomi warga desa dalam satu atap.",
        },
      },
      {
        heading: "Unit 1–3: Kantor, Sembako, dan Layanan Kesehatan",
        body: [
          "Unit pertama adalah kantor koperasi — bukan sekadar tempat pengurus duduk, melainkan pusat operasional terpadu yang menjadi wajah koperasi di mata warga. Di sinilah anggota mendaftar, menyetor simpanan, mengajukan pinjaman, dan mendapatkan informasi tentang semua layanan yang tersedia. Kantor yang baik bersih, rapi, dan mudah diakses — bukan tersembunyi di sudut desa yang sulit dijangkau.",
          "Unit kedua adalah pengadaan sembako — mungkin unit yang paling langsung dirasakan manfaatnya oleh warga desa. Dengan membeli bahan pokok (beras, minyak goreng, gula, tepung, dll.) dalam jumlah besar secara kolektif, koperasi bisa memperoleh harga lebih murah dari distributor dan menjualnya ke anggota dengan margin yang wajar — bukan mengambil keuntungan maksimal seperti pedagang retail biasa. Ini langsung memotong biaya hidup keluarga desa.",
          "Unit ketiga dan keempat — klinik desa dan apotek desa — adalah jawaban atas masalah akses layanan kesehatan yang sudah lama menjadi keluhan utama warga pedesaan. Klinik desa bisa melayani konsultasi dokter, pemeriksaan kesehatan dasar, dan pertolongan pertama. Apotek desa memastikan obat-obatan esensial tersedia di tingkat desa dengan harga yang terjangkau. Dengan ada klinik dan apotek di desa, warga tidak perlu lagi menempuh perjalanan jauh hanya untuk mendapat layanan kesehatan dasar.",
          "Pengelolaan klinik dan apotek memerlukan tenaga kesehatan — dokter, bidan, atau tenaga farmasi yang memiliki kompetensi dan izin yang sah. Koperasi bisa bermitra dengan Kementerian Kesehatan, Puskesmas setempat, atau tenaga kesehatan yang bersedia bertugas di desa. Ini juga membuka peluang kerja nyata bagi tenaga kesehatan muda yang ingin berkhidmat di komunitas pedesaan.",
        ],
        highlight: {
          term: "Manfaat Langsung Unit Sembako",
          def: "Dengan membeli bahan pokok secara kolektif dalam jumlah besar, koperasi bisa mendapat harga lebih murah dari distributor — dan meneruskan penghematan itu ke anggota. Ini adalah penghematan riil yang bisa dirasakan setiap minggu.",
        },
      },
      {
        heading: "Unit 5–7: Pergudangan, Logistik, dan Simpan Pinjam",
        body: [
          "Unit kelima adalah fasilitas pergudangan dan cold storage — salah satu yang paling strategis untuk desa dengan potensi pertanian atau perikanan. Masalah klasik petani Indonesia adalah terpaksa menjual hasil panen langsung setelah panen karena tidak ada tempat penyimpanan, padahal harga di musim panen selalu paling rendah. Dengan cold storage yang dikelola koperasi, petani bisa menunda penjualan sampai harga pulih — atau bahkan mengolah hasil panen menjadi produk bernilai tambah lebih tinggi.",
          "Unit keenam adalah logistik desa — sistem distribusi yang memastikan barang bisa bergerak masuk dan keluar desa dengan efisien. Ini mencakup pengadaan armada transportasi (bisa dimulai dengan satu atau dua kendaraan kecil), pengelolaan rute distribusi, dan potensi kemitraan dengan platform logistik nasional untuk mengantarkan produk desa ke pasar yang lebih luas. Unit logistik yang efektif adalah jembatan yang menghubungkan produksi desa dengan konsumsi kota.",
          "Unit ketujuh — simpan pinjam — adalah unit yang paling dikenal dalam ekosistem koperasi. Di Koperasi Desa Merah Putih, unit ini melayani kebutuhan keuangan anggota: simpanan yang aman dan menghasilkan bagi hasil, serta pinjaman modal usaha dengan jasa yang wajar. Dengan ada unit simpan pinjam yang kuat, warga desa tidak perlu lagi meminjam dari rentenir atau pinjaman online berbunga tinggi untuk membiayai usaha atau kebutuhan mendesak.",
          "Ketujuh unit ini tidak berdiri sendiri-sendiri — mereka saling menopang. Petani yang menyimpan hasil panennya di cold storage koperasi (unit 5) bisa mendapat pinjaman modal dari unit simpan pinjam (unit 7) untuk biaya musim tanam berikutnya, menjual produknya lewat unit logistik (unit 6), memenuhi kebutuhan keluarga dari unit sembako (unit 2), dan berobat ke klinik desa (unit 3) ketika sakit. Inilah ekosistem yang sesungguhnya.",
        ],
        bigNumber: {
          value: "7",
          label: "Unit usaha wajib Koperasi Desa Merah Putih — dari pangan dan kesehatan hingga keuangan dan logistik desa",
        },
      },
      {
        heading: "SIMKOPDES dan KDMP Mobile: Teknologi yang Menyatukan",
        body: [
          "Mengelola tujuh unit usaha sekaligus tanpa sistem yang terintegrasi adalah mimpi buruk administratif. Di sinilah SIMKOPDES berperan. Platform ini dirancang khusus untuk mengelola semua aspek operasional Koperasi Desa Merah Putih dalam satu sistem digital: manajemen keanggotaan, pencatatan simpanan dan pinjaman, stok barang di unit sembako dan pergudangan, laporan keuangan per unit, dan pelaporan ke Kementerian Koperasi.",
          "SIMKOPDES bukan hanya alat pencatatan — ia adalah sistem akuntabilitas. Setiap transaksi yang dimasukkan ke sistem terekam secara permanen dan bisa diaudit kapan saja oleh pengawas, auditor eksternal, atau bahkan Kementerian Koperasi yang memiliki akses dashboard ke semua koperasi desa di seluruh Indonesia. Ini membuat manipulasi keuangan jauh lebih sulit dilakukan dibanding sistem manual.",
          "KDMP Mobile (Koperasi Desa Merah Putih Mobile) adalah aplikasi untuk anggota. Lewat aplikasi ini, anggota bisa memeriksa saldo simpanan mereka, melihat riwayat transaksi, mengajukan permohonan pinjaman, menerima notifikasi jatuh tempo angsuran, dan bahkan membeli sembako dengan sistem pre-order yang diantarkan ke rumah. Ini adalah pengalaman koperasi yang sepenuhnya modern — tidak kalah dengan aplikasi fintech terbaik.",
          "Kombinasi SIMKOPDES dan KDMP Mobile menciptakan koperasi yang transparan secara real-time. Tidak ada lagi pengurus yang menyembunyikan kondisi keuangan sampai RAT tiba, tidak ada lagi anggota yang tidak tahu berapa sebenarnya simpanan mereka, dan tidak ada lagi pengelolaan yang bergantung pada satu orang yang punya kunci lemari arsip. Teknologi ini bukan sekadar efisiensi — ia adalah revolusi akuntabilitas.",
        ],
        highlight: {
          term: "KDMP Mobile",
          def: "Aplikasi untuk anggota Koperasi Desa Merah Putih — memungkinkan pengecekan saldo, pengajuan pinjaman, pembelian sembako, dan komunikasi dengan pengurus dari ponsel tanpa perlu hadir ke kantor.",
        },
      },
    ],
    quizzes: [
      {
        question: "Mana dari tujuh unit usaha yang berfungsi menyediakan bahan kebutuhan pokok dengan harga lebih wajar?",
        options: [
          { id: "a", text: "Unit Pergudangan/Cold Storage" },
          { id: "b", text: "Unit Pengadaan Sembako" },
          { id: "c", text: "Unit Logistik Desa" },
          { id: "d", text: "Unit Simpan Pinjam" },
        ],
        correct: "b",
        explanation:
          "Unit Pengadaan Sembako membeli bahan pokok secara kolektif dalam jumlah besar — mendapat harga lebih murah dan meneruskan penghematan itu ke anggota desa.",
      },
      {
        question: "Mengapa unit pergudangan/cold storage sangat strategis bagi koperasi desa berbasis pertanian?",
        options: [
          { id: "a", text: "Karena petani bisa menyimpan uang di dalamnya" },
          { id: "b", text: "Karena petani tidak perlu menjual langsung saat panen ketika harga paling rendah" },
          { id: "c", text: "Karena cold storage menggantikan fungsi bank di desa" },
          { id: "d", text: "Karena semua produk desa wajib melewati cold storage sebelum dijual" },
        ],
        correct: "b",
        explanation:
          "Dengan cold storage, petani bisa menunda penjualan sampai harga pulih setelah musim panen — tidak terpaksa menjual murah kepada tengkulak saat semua petani menjual bersamaan.",
      },
      {
        question: "Platform digital resmi untuk mengelola operasional Koperasi Desa Merah Putih adalah?",
        options: [
          { id: "a", text: "SIMDES milik Kementerian Desa" },
          { id: "b", text: "SiCantik Cloud milik Kemendagri" },
          { id: "c", text: "SIMKOPDES milik Kementerian Koperasi" },
          { id: "d", text: "OSS milik BKPM" },
        ],
        correct: "c",
        explanation:
          "SIMKOPDES (Sistem Informasi Manajemen Koperasi Desa) adalah platform resmi Kementerian Koperasi yang mengintegrasikan semua aspek operasional dan pelaporan Koperasi Desa Merah Putih.",
      },
      {
        question: "Apa fungsi utama KDMP Mobile bagi anggota Koperasi Desa Merah Putih?",
        options: [
          { id: "a", text: "Mengaudit laporan keuangan pengurus koperasi" },
          { id: "b", text: "Mengelola sistem penggajian karyawan koperasi" },
          { id: "c", text: "Memberi akses anggota ke saldo, pinjaman, dan layanan koperasi dari ponsel" },
          { id: "d", text: "Melaporkan data koperasi ke Kementerian Koperasi secara otomatis" },
        ],
        correct: "c",
        explanation:
          "KDMP Mobile adalah aplikasi untuk anggota — memungkinkan pengecekan saldo, pengajuan pinjaman, pembelian sembako, dan komunikasi dengan pengurus dari mana saja.",
      },
    ],
  },
  13: {
    moduleId: 13,
    title: "Membentuk Koperasi Desa Merah Putih",
    sections: [
      {
        heading: "Tiga Kondisi Desa dan Satu Tujuan yang Sama",
        body: [
          "Ketika program Koperasi Desa Merah Putih dirancang, perancangnya sadar bahwa kondisi tiap desa berbeda-beda. Ada desa yang belum pernah punya koperasi sama sekali. Ada desa yang pernah punya koperasi tapi lama tidak aktif karena pengurus yang tidak kompeten atau masalah keuangan di masa lalu. Ada juga desa yang sudah punya koperasi aktif tapi belum memenuhi standar tujuh unit usaha yang ditetapkan Permenkop No. 2/2025.",
          "Untuk menjangkau ketiga kondisi ini, pemerintah menetapkan tiga jalur pembentukan resmi. Jalur pertama: pendirian koperasi baru dari awal untuk desa yang belum pernah punya koperasi. Jalur kedua: reaktivasi koperasi lama yang sudah tidak aktif atau mati suri — dengan penyegaran pengurus dan pembaruan AD/ART agar sesuai standar. Jalur ketiga: transformasi koperasi yang sudah berjalan untuk meningkatkan kelengkapan unit usahanya hingga memenuhi standar tujuh unit.",
          "Tidak ada jalur yang lebih baik atau lebih buruk — yang terbaik adalah jalur yang paling sesuai dengan kondisi desamu. Desa yang sudah punya koperasi aktif dengan manajemen yang baik sebaiknya memilih jalur transformasi, karena mempertahankan modal sosial dan kepercayaan yang sudah terbangun jauh lebih efisien daripada memulai dari nol. Desa yang koperasi lamanya bermasalah mungkin lebih baik mendirikan yang baru dengan kepengurusan yang benar-benar bersih.",
          "Yang perlu dipahami adalah: ketiga jalur ini memiliki tujuan akhir yang sama — koperasi dengan badan hukum resmi yang menjalankan tujuh unit usaha, terdaftar di SIMKOPDES, dan dikelola oleh pengurus yang dipilih secara demokratis oleh warga. Perbedaannya hanya pada titik awal dan proses yang dilalui.",
        ],
        highlight: {
          term: "Tiga Jalur Resmi",
          def: "Pendirian baru (desa tanpa koperasi), reaktivasi (koperasi lama mati suri), dan transformasi (koperasi aktif yang ditingkatkan standarnya) — semuanya bermuara pada Koperasi Desa Merah Putih yang sah.",
        },
      },
      {
        heading: "Tahap 1: Pra-Musdes — Pemetaan Sebelum Keputusan",
        body: [
          "Sebelum warga berkumpul dalam forum resmi, ada pekerjaan persiapan yang tidak bisa dilewatkan: pemetaan potensi dan kebutuhan desa. Fasilitator yang sudah dilatih Kementerian Koperasi sejak Januari 2025 melakukan survei awal: apa komoditas utama yang dihasilkan desa? Berapa banyak warga yang berpotensi menjadi anggota? Apakah sudah ada infrastruktur yang bisa dimanfaatkan seperti gudang atau gedung kosong? Apa kebutuhan paling mendesak warga — kesehatan, modal, pangan, atau distribusi?",
          "Hasil pemetaan ini bukan sekadar data — ia adalah argumen yang akan digunakan untuk meyakinkan warga bahwa koperasi benar-benar akan memberi manfaat konkret bagi mereka. Warga desa tidak akan bergabung hanya karena diminta — mereka perlu melihat bahwa ada masalah nyata yang akan diselesaikan dan ada rencana yang masuk akal untuk menyelesaikannya.",
          "Pemetaan juga mencakup identifikasi tokoh-tokoh kunci yang bisa menjadi motor penggerak: siapa yang paling dipercaya warga? Siapa yang punya pengalaman mengelola organisasi? Siapa yang melek digital dan bisa menangani SIMKOPDES? Tokoh-tokoh ini perlu diajak bicara lebih awal, sebelum forum publik, agar mereka bisa menjadi pendukung aktif bukan pengganjal.",
          "Fasilitator juga perlu memetakan potensi konflik: apakah ada kelompok yang mungkin menolak karena kepentingan bisnis yang akan terganggu oleh koperasi? Apakah ada sejarah konflik antar kelompok warga yang bisa membuat proses demokratis menjadi sulit? Mengenali potensi hambatan sejak awal memungkinkan persiapan yang lebih matang sebelum Musdesus digelar.",
        ],
        highlight: {
          term: "Pemetaan Pra-Musdes",
          def: "Survei awal oleh fasilitator sebelum forum warga — mengidentifikasi potensi desa, kebutuhan warga, tokoh kunci, dan potensi hambatan. Koperasi yang dimulai tanpa pemetaan sering gagal di tahun pertama.",
        },
      },
      {
        heading: "Tahap 2: Musdesus — Forum Warga yang Menentukan",
        body: [
          "Musyawarah Desa Khusus (Musdesus) adalah momen paling kritis dalam seluruh proses pembentukan. Di sinilah keputusan kolektif diambil: apakah desa ini akan membentuk Koperasi Desa Merah Putih? Siapa yang akan menjadi panitia pendirian? Nama apa yang akan digunakan? Musdesus harus dihadiri oleh seluruh komponen desa: warga biasa, perwakilan kelompok perempuan, tokoh agama, Badan Permusyawaratan Desa (BPD), dan pemerintah desa.",
          "Musdesus yang baik bukan rapat yang sudah ada kesimpulan sebelumnya — ia adalah forum terbuka di mana setiap pertanyaan dan keberatan warga dijawab dengan jujur. Jika ada warga yang skeptis, fasilitator dan penggerak harus bisa menjawab kekhawatiran mereka dengan data, bukan dengan bujukan kosong. Koperasi yang dibentuk dari Musdesus yang tidak murni — di mana warga merasa dipaksa atau tidak diberi ruang bertanya — akan menghadapi masalah kepercayaan yang jauh lebih besar di kemudian hari.",
          "Nama koperasi ditetapkan dalam Musdesus. Formatnya sudah distandarisasi: 'Koperasi Desa Merah Putih [Nama Desa]' atau 'Koperasi Kelurahan Merah Putih [Nama Kelurahan]'. Nama ini wajib digunakan secara seragam — tidak bisa dimodifikasi dengan tambahan nama tokoh atau nama lain yang tidak sesuai standar. Setelah nama disepakati, BPD menerbitkan Surat Keputusan yang mengesahkan pembentukan panitia pendirian koperasi.",
          "Musdesus juga menjadi momen untuk mendaftar calon anggota perdana. Minimal diperlukan 20 pendiri untuk koperasi primer — dan mereka harus daftar secara sukarela, bukan dipaksa atau dikumpulkan hanya untuk memenuhi angka. Kualitas komitmen 20 pendiri pertama ini sangat menentukan: merekalah yang akan menjadi motor penggerak koperasi di tahun-tahun awal yang paling kritis.",
        ],
        bigNumber: {
          value: "20",
          label: "Jumlah minimum pendiri yang harus daftar secara sukarela dalam Musdesus agar koperasi bisa didirikan",
        },
      },
      {
        heading: "Tahap 3–5: Dari AD/ART hingga Badan Hukum Resmi",
        body: [
          "Setelah Musdesus, panitia pendirian bekerja menyusun Anggaran Dasar dan Anggaran Rumah Tangga. Kementerian Koperasi menyediakan template standar yang sudah disesuaikan dengan kebutuhan Koperasi Desa Merah Putih — mencakup klausul untuk tujuh unit usaha, mekanisme RAT, cara pembagian SHU, dan prosedur pengambilan keputusan. Panitia boleh memodifikasi template ini sesuai kekhasan desa, tapi tidak boleh menghapus klausul-klausul wajib.",
          "Setelah AD/ART selesai, rapat pembentukan koperasi digelar — ini berbeda dari Musdesus. Rapat pembentukan lebih formal: di sinilah semua calon pendiri hadir, AD/ART dibacakan dan disahkan bersama, dan pengurus serta pengawas pertama dipilih. Proses pemilihan pengurus harus transparan dan demokratis — tidak boleh ditunjuk sepihak oleh kepala desa atau panitia pendirian.",
          "Dengan notulen rapat pembentukan dan AD/ART yang sudah disahkan, panitia mendatangi notaris untuk membuat akta pendirian resmi. Biaya notaris adalah biaya yang nyata — tapi pemerintah dalam banyak kasus menyediakan fasilitasi untuk meringankannya, terutama untuk desa yang kapasitas fiskalnya terbatas. Akta notaris adalah dokumen legal yang tanpanya proses selanjutnya tidak bisa berjalan.",
          "Langkah terakhir adalah pendaftaran online di sistem Kementerian Koperasi. Proses ini sudah bisa dilakukan sepenuhnya secara digital — mengurangi perjalanan bolak-balik ke kantor pemerintah. Setelah semua dokumen diunggah dan diverifikasi, koperasi mendapat nomor badan hukum resmi. Nomor ini adalah tanda lahirnya koperasi sebagai entitas hukum yang bisa membuka rekening bank, menandatangani kontrak, dan beroperasi secara penuh.",
        ],
        highlight: {
          term: "Urutan Tahapan Resmi",
          def: "Pra-Musdes (pemetaan) → Musdesus (keputusan kolektif) → Penyusunan AD/ART → Rapat pembentukan + pemilihan pengurus → Akta notaris → Pendaftaran online ke Kementerian Koperasi → Badan hukum terbit.",
        },
      },
      {
        heading: "Setelah Badan Hukum Terbit: Tantangan Nyata Baru Dimulai",
        body: [
          "Mendapat badan hukum adalah pencapaian besar — tapi itu baru permulaan. Bulan-bulan pertama setelah koperasi resmi berdiri adalah masa paling rapuh. Antusiasme awal masih tinggi, tapi sistem operasional belum teruji, pengurus belum punya rutinitas yang stabil, dan anggota belum terbiasa dengan pola interaksi dengan koperasi. Satu insiden yang ditangani buruk di masa awal ini bisa merusak kepercayaan yang dibangun susah payah.",
          "Prioritas pertama setelah badan hukum terbit: buka rekening bank atas nama koperasi dan transfer semua simpanan awal ke sana. Jangan biarkan uang anggota tersimpan di rekening pribadi pengurus meski satu hari pun — ini adalah garis merah yang tidak boleh dilanggar dan yang sering menjadi awal dari masalah kepercayaan yang berlarut-larut.",
          "Prioritas kedua: segera daftarkan koperasi di SIMKOPDES dan mulai membiasakan diri dengan sistemnya. Fasilitator dari Kementerian Koperasi biasanya masih mendampingi di fase ini. Manfaatkan waktu pendampingan ini semaksimal mungkin — tanyakan semua yang tidak dimengerti, minta simulasi untuk setiap fitur yang akan digunakan, dan pastikan setidaknya dua orang di pengurus bisa mengoperasikan SIMKOPDES secara mandiri.",
          "Prioritas ketiga: gelar RAT pertama tidak lebih dari tiga bulan setelah operasional dimulai, meski laporan keuangannya masih sangat sederhana. RAT pertama ini sangat penting untuk membangun kebiasaan dan menunjukkan kepada anggota bahwa koperasi ini berbeda dari koperasi fiktif yang sering mereka dengar — ini adalah koperasi yang benar-benar akuntabel dan terbuka.",
        ],
        highlight: {
          term: "Tiga Prioritas Pertama",
          def: "Buka rekening bank atas nama koperasi, daftar di SIMKOPDES, dan gelar RAT pertama dalam tiga bulan. Tiga langkah ini membangun kebiasaan sehat yang menentukan umur panjang koperasi.",
        },
      },
    ],
    quizzes: [
      {
        question: "Apa yang dimaksud Musdesus dalam proses pembentukan Koperasi Desa Merah Putih?",
        options: [
          { id: "a", text: "Rapat Anggota Tahunan koperasi yang baru dibentuk" },
          { id: "b", text: "Musyawarah Desa Khusus — forum warga yang memutuskan pembentukan koperasi secara kolektif" },
          { id: "c", text: "Rapat pengurus bulanan setelah koperasi beroperasi" },
          { id: "d", text: "Rapat koordinasi antara Dinas Koperasi kabupaten dengan kepala desa" },
        ],
        correct: "b",
        explanation:
          "Musdesus adalah forum publik warga desa yang secara kolektif memutuskan apakah desa akan membentuk koperasi, menetapkan nama, dan memilih panitia pendirian.",
      },
      {
        question: "Lembaga desa mana yang menerbitkan SK pembentukan panitia pendirian setelah Musdesus?",
        options: [
          { id: "a", text: "Kementerian Koperasi dan UKM" },
          { id: "b", text: "BPD (Badan Permusyawaratan Desa)" },
          { id: "c", text: "Camat atau Bupati setempat" },
          { id: "d", text: "Notaris yang membuat akta pendirian" },
        ],
        correct: "b",
        explanation:
          "BPD sebagai lembaga legislatif desa menerbitkan SK yang mengesahkan panitia pendirian — memastikan proses pembentukan berjalan secara sah dan demokratis.",
      },
      {
        question: "Desa yang sudah punya koperasi aktif tapi belum memenuhi standar tujuh unit usaha sebaiknya menggunakan jalur pembentukan yang mana?",
        options: [
          { id: "a", text: "Mendirikan koperasi baru dari nol" },
          { id: "b", text: "Transformasi — meningkatkan koperasi yang sudah ada ke standar KDMP" },
          { id: "c", text: "Reaktivasi koperasi lama yang mati suri" },
          { id: "d", text: "Bergabung ke koperasi desa terdekat yang sudah memenuhi standar" },
        ],
        correct: "b",
        explanation:
          "Transformasi adalah jalur yang paling efisien untuk koperasi aktif — mempertahankan modal sosial dan kepercayaan yang sudah terbangun sambil meningkatkan kelengkapan unit usaha.",
      },
      {
        question: "Tindakan pertama yang wajib dilakukan segera setelah badan hukum koperasi terbit adalah?",
        options: [
          { id: "a", text: "Langsung membuka toko sembako agar anggota melihat hasilnya" },
          { id: "b", text: "Membuka rekening bank resmi atas nama koperasi dan memindahkan simpanan ke sana" },
          { id: "c", text: "Mengadakan pesta perayaan peresmian koperasi bersama warga desa" },
          { id: "d", text: "Mengajukan pinjaman ke bank untuk modal awal tujuh unit usaha" },
        ],
        correct: "b",
        explanation:
          "Rekening bank atas nama koperasi harus dibuka segera — uang anggota tidak boleh disimpan di rekening pribadi pengurus sekalipun sementara. Ini adalah garis merah tata kelola.",
      },
    ],
  },
  14: {
    moduleId: 14,
    title: "Pemuda & Masa Depan Koperasi",
    sections: [
      {
        heading: "Masalah yang Tidak Pernah Terselesaikan: Regenerasi",
        body: [
          "Kalau kamu pernah mengunjungi kantor koperasi konvensional di desa atau kota kecil, perhatikan siapa yang duduk di balik meja pengurus. Kemungkinan besar mereka berusia di atas 50 tahun, sudah menjabat lebih dari satu periode, dan masih menggunakan buku catatan manual untuk mengelola transaksi. Ini bukan kritik terhadap individu — pengurus-pengurus itu sering bekerja keras dan berdedikasi. Ini adalah masalah struktural: koperasi Indonesia tidak berhasil menarik dan mempertahankan generasi yang lebih muda untuk terlibat aktif.",
          "Akibatnya serius. Koperasi yang tidak beregenerasi akan mengalami stagnasi — cara kerja yang sama diulang tahun demi tahun, tanpa inovasi, tanpa adaptasi terhadap kondisi pasar yang berubah, dan tanpa kemampuan untuk memanfaatkan teknologi yang bisa melipatgandakan efisiensi. Ketika pengurus yang lama akhirnya pensiun atau meninggal, tidak ada yang siap menggantikan — dan koperasi pun mati perlahan.",
          "Koperasi Desa Merah Putih secara eksplisit dirancang untuk memutus siklus ini. Dengan menggunakan platform digital (SIMKOPDES, KDMP Mobile), mengelola tujuh unit usaha yang memerlukan berbagai keahlian, dan membuka peluang kerja formal bagi pengelola muda berbayar — program ini menciptakan ekosistem di mana kontribusi anak muda bukan sekadar 'diizinkan', tapi dibutuhkan secara struktural.",
          "Ini adalah perbedaan yang fundamental. Bukan 'silakan bergabung kalau mau', tapi 'kami tidak akan bisa beroperasi secara optimal tanpa kamu'. Ketika kebutuhan struktural sudah ada, partisipasi pemuda bukan lagi soal motivasi — ia menjadi soal kesempatan yang tinggal diambil atau dilewatkan.",
        ],
        highlight: {
          term: "Regenerasi Struktural",
          def: "Koperasi Desa Merah Putih dirancang sehingga pengelolaan digitalnya tidak bisa berjalan optimal tanpa tenaga muda yang melek teknologi — bukan sekadar membuka pintu, tapi secara aktif membutuhkan kontribusi generasi muda.",
        },
      },
      {
        heading: "Lima Jalur Konkret Bagi Pemuda untuk Terlibat",
        body: [
          "Jalur pertama adalah keanggotaan biasa. Syarat minimalnya: berdomisili di desa atau kelurahan yang sama sesuai KTP. Tidak ada syarat modal besar, tidak ada syarat lama tinggal, dan tidak ada syarat status sosial. Bergabung sebagai anggota biasa adalah titik awal yang bisa dilakukan sekarang — dan dari posisi ini, kamu sudah punya hak suara di RAT dan hak untuk menggunakan semua layanan koperasi.",
          "Jalur kedua adalah menjadi operator SIMKOPDES atau KDMP Mobile. Ini adalah posisi yang sangat dibutuhkan dan sering kekurangan SDM di banyak koperasi desa. Tugasnya mencakup memasukkan data transaksi harian, memonitor stok unit sembako, membuat laporan bulanan dari sistem, dan membantu anggota yang kesulitan menggunakan aplikasi. Keterampilan yang dibutuhkan: bisa mengoperasikan komputer atau tablet dengan nyaman dan punya koneksi internet yang memadai — bukan kualifikasi yang langka di kalangan anak muda.",
          "Jalur ketiga adalah pengelolaan pemasaran digital. Unit logistik dan gudang koperasi punya produk yang perlu dipasarkan — hasil pertanian, produk olahan, atau bahkan jasa distribusi. Membangun toko online di marketplace nasional, mengelola akun media sosial koperasi, dan membangun database pelanggan luar desa adalah pekerjaan yang bisa dilakukan oleh anak muda dengan latar belakang digital yang kuat.",
          "Jalur keempat adalah mencalonkan diri sebagai pengurus atau pengawas. Tidak ada batasan usia minimum untuk menjadi pengurus koperasi (kecuali yang ditetapkan AD/ART masing-masing koperasi — biasanya 18 tahun cukup). Pengurus muda dengan kemampuan manajerial dan digital yang kuat justru dibutuhkan, bukan dihindari. Jalur kelima adalah menjadi karyawan tetap unit usaha koperasi — unit klinik, apotek, logistik, atau pengelolaan cold storage semuanya memerlukan tenaga kerja profesional yang dibayar dari pendapatan unit tersebut.",
        ],
        highlight: {
          term: "Operator Digital Koperasi",
          def: "Posisi yang paling dibutuhkan dan paling banyak lowong: mengelola SIMKOPDES, membantu anggota menggunakan KDMP Mobile, dan menjaga akurasi data transaksi harian. Keterampilan komputer dasar sudah cukup untuk memulai.",
        },
      },
      {
        heading: "Koperasi sebagai Karier, Bukan Sekadar Pengabdian",
        body: [
          "Ada persepsi yang perlu dikoreksi: bahwa bekerja di koperasi adalah bentuk pengabdian sukarela — mulia tapi tidak menghasilkan pendapatan yang layak. Persepsi ini adalah salah satu alasan terbesar mengapa anak muda enggan terlibat. Mereka tidak bisa membayar kos dengan 'pengalaman berorganisasi'.",
          "Koperasi Desa Merah Putih yang menjalankan tujuh unit usaha secara penuh adalah entitas bisnis yang nyata. Unit sembako yang melayani ratusan kepala keluarga setiap minggu menghasilkan pendapatan yang cukup untuk menggaji kasir dan manajer stok. Unit klinik dan apotek memerlukan tenaga medis dan apoteker yang harus dibayar sesuai standar profesi. Unit logistik memerlukan pengemudi dan koordinator yang dibayar berbasis produktivitas.",
          "Ini artinya: bergabung ke koperasi desa bukan hanya soal kontribusi sosial, tapi juga bisa menjadi sumber penghasilan. Anak muda yang memilih kembali ke desa setelah kuliah tidak harus memilih antara karier yang bermakna dan karier yang menghasilkan — di koperasi desa yang sehat, keduanya bisa ditemukan dalam satu tempat.",
          "Dalam jangka panjang, kepemimpinan koperasi yang berhasil adalah rekam jejak yang sangat berharga. Mengelola aset bernilai miliaran rupiah, memimpin tim dari berbagai unit usaha, dan membuat keputusan strategis yang berdampak langsung pada ratusan keluarga — ini adalah pengalaman kepemimpinan yang tidak diajarkan di sebagian besar program kuliah manapun.",
        ],
        bigNumber: {
          value: "7",
          label: "Unit usaha koperasi yang semuanya memerlukan SDM muda terampil — dari teknologi informasi, kesehatan, logistik, hingga pemasaran digital",
        },
      },
      {
        heading: "Koperasi Global dan Pelajaran untuk Indonesia",
        body: [
          "Kalau perlu bukti bahwa koperasi bisa menjadi karier yang menjanjikan bagi anak muda, lihat ke luar negeri. Mondragon Corporation di Spanyol adalah grup koperasi industri yang mempekerjakan lebih dari 80.000 orang dalam industri manufaktur, ritel, dan keuangan. Ribuan dari karyawan tersebut adalah insinyur muda, desainer produk, dan manajer yang memilih Mondragon bukan karena tidak ada pilihan lain, tapi karena model kepemilikan bersama yang ditawarkannya lebih menarik dari bekerja sebagai karyawan korporasi biasa.",
          "Di Jepang, koperasi pertanian JA (Japan Agricultural Cooperatives) adalah salah satu organisasi ekonomi terbesar di negara itu, dengan anggota jutaan petani dan jaringan layanan keuangan, asuransi, dan distribusi yang menjangkau seluruh pelosok. Anak muda Jepang yang ingin berkarier di sektor pertanian dan pangan sering memilih JA bukan hanya sebagai pekerjaan tapi sebagai identitas profesi.",
          "Di Korea Selatan, koperasi kredit yang dikenal sebagai Credit Union memiliki penetrasi yang sangat tinggi di kalangan pekerja muda perkotaan — bukan karena pemerintah mewajibkan, tapi karena produk keuangannya kompetitif dan model kepemilikannya lebih transparan dibanding bank komersial. Ini adalah model yang sangat relevan untuk koperasi simpan pinjam Indonesia yang ingin menarik generasi muda perkotaan.",
          "Indonesia punya potensi yang tidak kalah besar — dan skala yang lebih besar dari semua contoh di atas. 80.000 lebih Koperasi Desa Merah Putih yang beroperasi di seluruh nusantara, kalau semuanya berjalan sehat, adalah gerakan ekonomi kolektif terbesar yang pernah ada di Asia Tenggara. Anak muda Indonesia yang terlibat sekarang bukan sekadar berkontribusi pada desanya — mereka sedang menjadi bagian dari sejarah.",
        ],
        highlight: {
          term: "Precedent Global",
          def: "Mondragon (Spanyol), JA (Jepang), Credit Union (Korea) membuktikan bahwa koperasi bisa menjadi karier yang kompetitif dan bermartabat bagi generasi muda — bukan sekadar alternatif terakhir.",
        },
      },
      {
        heading: "Langkah Pertama yang Bisa Diambil Hari Ini",
        body: [
          "Setelah menyelesaikan 14 modul kurikulum ini, kamu punya pengetahuan dasar yang dibutuhkan untuk berkontribusi nyata. Tapi pengetahuan tanpa tindakan tidak mengubah apapun. Apa langkah konkret yang bisa dimulai hari ini — bukan bulan depan, bukan setelah lulus kuliah, bukan setelah kondisi lebih siap?",
          "Pertama, periksa apakah desamu atau kampung halamanmu sudah punya Koperasi Desa Merah Putih. Cek di ODS Kementerian Koperasi atau tanyakan langsung ke kantor desa. Jika sudah ada, hubungi pengurusnya dan nyatakan minat untuk bergabung sebagai anggota atau membantu pengelolaan digital. Jika belum ada, cari tahu kapan Musdesus akan digelar dan pastikan kamu hadir.",
          "Kedua, kalau kamu bukan dari desa tapi tinggal di kota, bergabunglah ke koperasi yang relevan dengan situasimu sekarang: koperasi mahasiswa jika kamu masih kuliah, koperasi karyawan jika kamu sudah bekerja, atau koperasi komunitas jika ada di sekitarmu. Pengalaman menjadi anggota aktif — hadir di RAT, membaca laporan keuangan, menggunakan layanan koperasi — adalah sekolah praktik yang tidak ternilai.",
          "Ketiga, sebarkan pengetahuan ini. Salah satu masalah terbesar koperasi Indonesia adalah mayoritas masyarakat tidak tahu hak-haknya sebagai anggota dan tidak memahami perbedaan koperasi yang sehat dari yang bermasalah. Setiap percakapan yang kamu mulai tentang koperasi — dengan keluarga, teman, atau komunitas online — adalah investasi pada ekosistem yang lebih baik. Gerakan ekonomi berbasis komunitas tumbuh dari percakapan, bukan dari kebijakan pemerintah saja.",
        ],
        bigNumber: {
          value: "Hari ini",
          label: "Satu-satunya waktu yang tepat untuk mulai — bergabung, bertanya, dan ikut membangun koperasi yang benar-benar berdampak",
        },
      },
    ],
    quizzes: [
      {
        question: "Syarat paling dasar bagi pemuda untuk bergabung ke Koperasi Desa Merah Putih sebagai anggota adalah?",
        options: [
          { id: "a", text: "Memiliki modal awal yang besar" },
          { id: "b", text: "Berdomisili di desa atau kelurahan yang sama sesuai KTP" },
          { id: "c", text: "Sudah menjabat dalam organisasi desa sebelumnya" },
          { id: "d", text: "Mendapat rekomendasi khusus dari kepala desa" },
        ],
        correct: "b",
        explanation:
          "Syarat utama adalah berdomisili di wilayah yang sama, dibuktikan KTP. Tidak ada syarat modal besar atau rekam jejak organisasi.",
      },
      {
        question: "Mengapa pengelola SIMKOPDES adalah posisi yang sering lowong di koperasi desa?",
        options: [
          { id: "a", text: "Karena gajinya terlalu kecil untuk menarik siapapun" },
          { id: "b", text: "Karena sebagian besar pengurus koperasi yang ada belum terbiasa dengan sistem digital" },
          { id: "c", text: "Karena SIMKOPDES terlalu rumit bahkan untuk ahli IT sekalipun" },
          { id: "d", text: "Karena posisi ini hanya bisa diisi oleh pegawai Kementerian Koperasi" },
        ],
        correct: "b",
        explanation:
          "Pengurus koperasi yang ada kebanyakan dari generasi yang tidak terbiasa dengan platform digital — menciptakan kebutuhan besar akan anak muda melek teknologi untuk mengisi posisi ini.",
      },
      {
        question: "Contoh koperasi global mana yang membuktikan bahwa koperasi bisa menjadi karier kompetitif bagi anak muda?",
        options: [
          { id: "a", text: "Amazon Cooperative di Amerika Serikat" },
          { id: "b", text: "Mondragon Corporation di Spanyol dengan 80.000+ pekerja" },
          { id: "c", text: "Alibaba Group yang berbasis di China" },
          { id: "d", text: "Toyota Motor Corporation di Jepang" },
        ],
        correct: "b",
        explanation:
          "Mondragon di Spanyol adalah grup koperasi industri dengan 80.000+ karyawan yang memilih koperasi sebagai karier — bukan karena tidak ada pilihan, tapi karena model kepemilikannya lebih menarik.",
      },
      {
        question: "Langkah pertama yang paling konkret bisa diambil hari ini setelah menyelesaikan kurikulum ini adalah?",
        options: [
          { id: "a", text: "Menunggu pemerintah mendirikan koperasi di desamu terlebih dahulu" },
          { id: "b", text: "Mempelajari 14 modul ini sekali lagi dari awal sampai hafal" },
          { id: "c", text: "Memeriksa status koperasi di desamu dan menyatakan minat untuk bergabung atau membantu" },
          { id: "d", text: "Mendirikan koperasi sendiri tanpa melibatkan warga desa lainnya" },
        ],
        correct: "c",
        explanation:
          "Tindakan paling konkret adalah mengecek apakah desamu sudah punya koperasi dan menyatakan minat bergabung atau membantu — pengetahuan yang tidak ditindaklanjuti tidak mengubah apapun.",
      },
    ],
  },
};

export function getLesson(id: number): Lesson {
  return lessons[id] ?? lessons[1];
}
