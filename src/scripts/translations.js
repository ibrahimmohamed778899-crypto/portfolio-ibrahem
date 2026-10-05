/**
 * ==========================================================================
 * BILINGUAL TRANSLATION DICTIONARY — ARABIC (ar) & ENGLISH (en)
 * Portfolio of Ibrahem Mohamed Ibrahem — Video Editor & Motion Designer
 * ==========================================================================
 */
const TRANSLATIONS = {
  ar: {
    // Page Metadata
    meta: {
      title: "إبراهيم محمد إبراهيم — مونتير ومصمم موشن جرافيكس ومعدل ألوان",
      description: "الموقع الرسمي لإبراهيم محمد إبراهيم — مونتير محترف، معدل ألوان، ومصمم موشن جرافيكس متخصص في DaVinci Resolve وPremiere Pro وAfter Effects.",
      ogTitle: "إبراهيم محمد إبراهيم — معرض أعمال المونتاج وصناعة الفيديو",
      ogDesc: "مونتير شغوف ومبدع أحول اللقطات الخام إلى قصص بصرية سينمائية جذابة تأسر المشاهد."
    },

    // Navigation
    nav: {
      brandName: "إبراهيم محمد",
      brandRole: "مونتير ومصمم موشن",
      home: "الرئيسية",
      skills: "المهارات",
      experience: "الخبرات",
      services: "الخدمات",
      feedback: "آراء العملاء",
      contact: "تواصل معي",
      themeToLight: "التبديل إلى الوضع النهاري",
      themeToDark: "التبديل إلى الوضع الليلي",
      langToggleText: "English",
      langToggleAria: "Switch to English",
      mobileLangLabel: "اللغة: العربية (English)"
    },

    // Hero Section
    hero: {
      badge: "متاح للمشاريع الإبداعية والعمل الحر",
      title: "إبراهيم محمد إبراهيم",
      tagline1: "مونتير فيديو",
      tagline2: "معدل ألوان سينمائي",
      tagline3: "مصمم موشن جرافيكس",
      aboutText: "أنا مونتير ومصمم موشن جرافيكس شغوف ومبدع، أمتلك خبرة سنتين في تحويل المشاهد المصورة إلى محتوى بصري جذاب وذو قيمة ومعنى. أعمل باحترافية على برامج DaVinci Resolve، وAdobe Premiere Pro، وAfter Effects، وPhotoshop، وIllustrator، وAdobe Audition. تشمل خدماتي الرئيسية مونتاج الفيديو، وتدريج الألوان السينمائي، والهندسة والتصميم الصوتي، والموشن جرافيكس. أسعى دائماً لتحويل الأفكار إلى واقع عبر سرد قصصي بصري سلس ودقة عالية بالتفاصيل. عملت مع مختلف العملاء والمشاريع مع التركيز على فهم رؤيتهم بدقة وتقديم نتائج تفوق التوقعات، وأواصل باستمرار التعلم والتطور لإنتاج أعمال أكثر تميزاً وإبداعاً.",
      stat1Label: "سنوات خبرة",
      stat2Label: "مشروع منجز",
      stat3Label: "نسبة رضا العملاء",
      stat4Label: "برامج إبداعية",
      educationHeading: "التعليم الأكاديمي",
      educationText: "طالب بالسنة الرابعة بكلية الحقوق جامعة القاهرة، بتقدير عام \"جيد\" على مدار السنوات الثلاث الأولى، مع أساس قانوني وتطبيقي متميز.",
      ctaButton: "ابدأ مشروعك الآن",
      floatingTitle: "السرد القصصي أولاً",
      floatingDesc: "إيقاع • مشاعر • قطعات احترافية",
      fallbackName: "إبراهيم محمد",
      fallbackHint: "مونتير ومعدل ألوان سينمائي"
    },

    // Skills Section
    skills: {
      tag: "الخبرات والمهارات",
      title: "المهارات والقدرات الاحترافية",
      subtitle: "حزمة أدوات متكاملة تشمل السرد القصصي السينمائي، وعلم الألوان الدقيق، والتصميم الحركي المبتكر.",
      
      card1Title: "المونتاج وتحرير الفيديو",
      card1Sub: "(Post-Production & Video Editing)",
      card1B1Title: "مونتاج الخط الزمني والتسلسل:",
      card1B1Text: "التجميع، والقص المبدئي، واللمسات النهائية للمحتوى القصير والطويل.",
      card1B2Title: "المونتاج متعدد الكاميرات:",
      card1B2Text: "مزامنة وتقطيع زوايا الكاميرات المتعددة للبرامج الحوارية والفعاليات.",
      card1B3Title: "الإيقاع والسرد القصصي:",
      card1B3Text: "بناء قصص تشويقية مشدودة، وضبط ريتم المشاهد وانتقالات سلسة لا تُنسى.",
      card1B4Title: "تنسيقات المحتوى:",
      card1B4Text: "إخراج الفيديوهات الرأسية (Reels / TikTok / Shorts) والإنتاجات العريضة (يوتيوب، بروموهات، تغطيات).",

      card2Title: "تعديل وتصحيح الألوان السينمائي",
      card2Sub: "(Color Grading & Correction)",
      card2B1Title: "تصحيح الألوان:",
      card2B1Text: "مطابقة اللقطات، وضبط التعريض وتوازن البياض والتباين، وضبط درجات ألوان البشرة الطبيعية.",
      card2B2Title: "التلوين السينمائي:",
      card2B2Text: "بناء جداول ألوان (LUTs) خاصة، بيئة عمل متقدمة في DaVinci Resolve، وإعطاء هوية بصرية متميزة للمشروع.",
      card2B3Title: "مساحات الألوان والإعداد التقني:",
      card2B3Text: "التعامل مع صيغ Log المعقدة، إدارة ألوان Rec.709، وضمان دقة العرض عبر مختلف الشاشات.",

      card3Title: "الموشن جرافيكس والمؤثرات البصرية",
      card3Sub: "(Motion Graphics & Visual Effects)",
      card3B1Title: "تحريك النصوص والعناوين:",
      card3B1Text: "نصوص حركية (Kinetic Typography)، لوحات سفلية (Lower Thirds)، وعناوين ونصوص تفاعلية.",
      card3B2Title: "تصميم حركي ثنائي الأبعاد:",
      card3B2Text: "تحريك الشعارات، الإشارات البصرية، الطبقات الرسومية، وعناصر واجهات المستخدم.",
      card3B3Title: "المؤثرات البصرية (VFX):",
      card3B3Text: "تفريغ الكروما الخضراء، الروتوسكوبينج، مسح العناصر غير المرغوبة، والتتبع وتغيير الشاشات.",
      card3B4Title: "الانتقالات والتأثيرات الطبقية:",
      card3B4Text: "تصميم انتقالات مخصصة، تسريبات ضوئية سينمائية، وحبيبات الأفلام والتراكيب الفنية.",

      card4Title: "الهندسة الصوتية والتصميم الصوتي",
      card4Sub: "(Audio Post-Production & Sound Design)",
      card4B1Title: "تنقية ومعالجة الصوت:",
      card4B1Text: "خفض الضوضاء، إزالة الهسيس، معالجة الصدى، وتنقية الأصوات الحادة.",
      card4B2Title: "تحسين الحوارات:",
      card4B2Text: "تعديل الترددات (EQ)، والضغط الديناميكي (Compression)، وموازنة طبقات الصوت لوضوح فائق.",
      card4B3Title: "التصميم الصوتي والمؤثرات (SFX):",
      card4B3Text: "دمج وتوزيع التأثيرات الصوتية (المؤثرات المحيطية، الصدمات، الفولي) لمضاعفة التأثير البصري.",
      card4B4Title: "الميكساج والماسترنج الصوتي:",
      card4B4Text: "موازنة الحوار والموسيقى والمؤثرات وفقاً لمعايير البث الرقمي العالمية (LUFS).",
      card4B5Title: "المزامنة مع الإيقاع:",
      card4B5Text: "تقطيع دقيق متزامن تماماً مع نبضات الموسيقى والإيقاعات الحماسية.",

      card5Title: "البرامج والأدوات التقنية الاحترافية",
      card5Sub: "(Software & Technical Proficiency)",
      card5Box1Title: "مونتاج وتلوين الفيديو",
      card5Box1Text: "DaVinci Resolve, Adobe Premiere Pro",
      card5Box2Title: "الموشن جرافيكس والتصميم",
      card5Box2Text: "Adobe After Effects, Adobe Photoshop",
      card5Box3Title: "التصدير والضغط الرقمي",
      card5Box3Text: "تحسين الملفات، إعدادات الضغط لمختلف المنصات، وتسريع عمليات الريندر."
    },

    // Work Experience Section
    experience: {
      tag: "مسيرة العمل",
      title: "الخبرات السابقة والمشاريع",
      subtitle: "سجل حافل يجمع بين إنتاجات العمل الحر، والبرامج التلفزيونية الحوارية، والمنح الحكومية التخصصية.",
      
      item1Period: "2024 – 2025",
      item1Title: "مونتير فيديو مستقل (Freelancer)",
      item1Desc: "العمل كمونتير مستقل وتقديم مشاريع مرئية متنوعة لعملاء وشركات في مجالات مختلفة بجودة عالية.",

      item2Period: "2025 – حتى الآن",
      item2Title: "مونتير بشركة مونتاج خاصة",
      item2Desc: "العمل حالياً كمونتير فيديو ضمن فريق شركة خاصة للإنتاج وتحرير الفيديو والمحتوى الرقمي.",

      item3Badge: "مشروع تلفزيوني بارز",
      item3Period: "إنتاج تلفزيوني",
      item3Title: "برنامج تلفزيوني: \"دولة التلاوة\"",
      item3Desc: "المشاركة كمونتير ومساهم موشن جرافيكس في إخراج وتجهيز حلقات هذا البرنامج التلفزيوني المميز.",

      item4Badge: "مشروع تلفزيوني بارز",
      item4Period: "إنتاج تلفزيوني",
      item4Title: "برنامج تلفزيوني: \"استاد العاصمة\"",
      item4Desc: "المشاركة كمونتير ومساهم موشن في تحرير وتنسيق فقرات برنامج استاد العاصمة الرياضي.",

      item5Badge: "منحة وزارة الاتصالات",
      item5Period: "حتى الآن",
      item5Title: "منحة رواد مصر الرقمية — مسار الموشن جرافيكس",
      item5Desc: "ملتحق حالياً بالمنحة التخصصية المقدمة من وزارة الاتصالات وتكنولوجيا المعلومات المصرية (MCIT)، تخصص تصميم وتحريك الموشن جرافيكس المتقدم."
    },

    // Services Section
    services: {
      tag: "ما أقدمه لك",
      title: "الخدمات الإبداعية",
      subtitle: "خدمات إبداعية مخصصة صُممت لرفع جودة المحتوى ومضاعفة تفاعل الجمهور وسرد قصتك باحترافية.",
      bestForLabel: "مثالي لـ:",

      s1Title: "مونتاج الفيديوهات (Video Editing)",
      s1Desc: "تحويل المصورات الخام إلى قصص بصرية ممتعة وجذابة. أركز على السرد البصري السلس، ضبط الإيقاع (Pacing)، واختيار أفضل القطعات والانتقالات التي تشد انتباه المشاهد من الثواني الأولى وتضمن استمراريته حتى النهاية.",
      s1BestFor: "صناع المحتوى، الفيديوهات القصيرة (Reels / Shorts / TikTok)، الإعلانات، ومحتوى اليوتيوب.",

      s2Title: "تحريك الجرافيكس (Motion Graphics)",
      s2Desc: "إضافة البُعد الديناميكي للفيديو من خلال نصوص متحركة (Animated Typography)، أيقونات، وعناصر بصريّة تعزز الرسالة وتوضح الأفكار المعقدة بأسلوب بصري ممتع واحترافي.",
      s2BestFor: "الفيديوهات الشارحة (Explainer Videos)، مقدمات وبروموهات المحتوى، والإعلانات التجارية.",

      s3Title: "الهندسة والتصميم الصوتي (Sound Design & Audio Mix)",
      s3Desc: "الصوت يمثل نصف تجربة المشاهدة. أقدم خدمة اختيار وتنظيم التأثيرات الصوتية (SFX)، تنقية ونقاء الصوت المسجل، وموازنة الموسيقى الخلفية مع التعليق الصوتي لإنتاج تجربة سمعية تفاعلية تزيد من تأثير الفيديو.",
      s3BestFor: "جميع أنواع الفيديوهات، الإعلانات، والمحتوى الذي يتطلب طابعاً حيوياً وسينمائياً.",

      s4Title: "تصحيح وتعديل الألوان (Color Grading & Correction)",
      s4Desc: "إعطاء الفيديو مظهراً محترفاً وموحداً من خلال ضبط مستويات الإضاءة والتباين (Color Correction)، ثم تطبيق نمط وأجواء بصرية (Color Grading) تعبر عن هوية المشروع وتضيف طابعاً بصرياً جذاباً.",
      s4BestFor: "الإعلانات، الفيديوهات الترويجية للمنتجات، والمحتوى المطلوب فيه مظهر سينمائي عالي الجودة.",

      s5Title: "الباقة المتكاملة لما بعد الإنتاج (Full Post-Production Package)",
      s5Desc: "الحل الشامل لمشروعك! تسليم الفيديوهات الخام ليتم العمل عليها بالكامل من تجميع المقاطع، الموشن جرافيكس، تعديل الألوان، والتصميم الصوتي، لتستلم منتجاً نهائياً متكاملاً وجاهزاً للنشر فوراً بأعلى جودة.",
      s5BestFor: "الشركات، صناع المحتوى، وأصحاب المشاريع الذين يبحثون عن جودة متكاملة وتوفير في الوقت والجهد."
    },

    // Testimonials / Feedback Section
    testimonials: {
      tag: "شهادات الثقة",
      title: "آراء وتقييمات العملاء",
      subtitle: "آراء وتجارب حقيقية من صناع محتوى، منتجين، ومخرجين في مصر والخليج العربي.",
      prevBtnAria: "الرأي السابق",
      nextBtnAria: "الرأي التالي",

      r1Quote: "شغل احترافي لأبعد الحدود، تسليم في الميعاد المحدد وإحساس عالي جداً بالريتم والقصات. الفيديوهات فرقت جداً في التفاعل على قناتي.",
      r1Name: "أحمد طارق",
      r1Location: "صانع محتوى — القاهرة",
      r1Avatar: "أ",

      r2Quote: "ما شاء الله تبارك الله، شغل متقن وفنان في تدريج الألوان والمؤثرات الصوتية. تعاملت معاه بإعلان لشركتنا والنتيجة فاقت التوقعات.",
      r2Name: "فهد الشمري",
      r2Location: "مدير تسويق — الرياض",
      r2Avatar: "ف",

      r3Quote: "إبراهيم من أشطر وأسرع الناس اللي اشتغلت معاهم، الموشن جرافيكس عنده روحها عصرية وبتشد العين من أول ثانية. فخور بالتعامل معاه.",
      r3Name: "كريم زهران",
      r3Location: "منتج إعلامي — الإسكندرية",
      r3Avatar: "ك",

      r4Quote: "سرعة في الإنجاز والتزام عالي، لمساته في المونتاج احترافية وسرد القصة سينمائي ومميز جداً. راح يكون خيارنا الدائم بإذن الله.",
      r4Name: "عبد الله المنصوري",
      r4Location: "رائد أعمال — دبي",
      r4Avatar: "ع",

      r5Quote: "تسلم إيدك يا إبراهيم، تفريغ الصوت وضبط الألوان والميكس طلع الحلقة زي التلفزيون بالضبط. ذوق عالي واهتمام بالتفاصيل الدقيقة.",
      r5Name: "محمد عبد العزيز",
      r5Location: "بودكاستر ومصمم محتوى — الجيزة",
      r5Avatar: "م",

      r6Quote: "مبدع ومتمكن بالداڤينشي والبريمير، يفهم الفكرة من أول مرة ويقدم مقترحات ترفع جودة الفيديو بشكل ملموس. تسلم الأيادي.",
      r6Name: "سلطان العتيبي",
      r6Location: "مخرج محتوى إعلاني — جدة",
      r6Avatar: "س"
    },

    // Contact Section
    contact: {
      tag: "تواصل مباشر",
      heading: "دعنا نحول فكرتك إلى واقع سينمائي مبهر — تواصل معي.",
      desc: "جاهز لصناعة قصص فيديو مؤثرة، وموشن جرافيكس ديناميكي، وألوان سينمائية ساحرة؟ تواصل معي مباشرة عبر الواتساب أو البريد الإلكتروني.",
      whatsappLabel: "محادثة فورية",
      whatsappAction: "تواصل عبر واتساب",
      whatsappDetail: "+20 100 828 4111",
      emailLabel: "استفسارات وتعاقدات",
      emailAction: "إرسال بريد إلكتروني",
      emailDetail: "ibrahim.mohamed778899@gmail.com"
    },

    // Footer
    footer: {
      brandName: "إبراهيم محمد إبراهيم",
      copy: "© 2026 إبراهيم محمد إبراهيم. جميع الحقوق محفوظة."
    }
  },

  en: {
    // Page Metadata
    meta: {
      title: "Ibrahem Mohamed Ibrahem — Video Editor | Colorist | Motion Designer",
      description: "Official portfolio of Ibrahem Mohamed Ibrahem — Professional Video Editor, Colorist, and Motion Designer specializing in DaVinci Resolve, Premiere Pro, and After Effects.",
      ogTitle: "Ibrahem Mohamed Ibrahem — Video Editor Portfolio",
      ogDesc: "Passionate and creative Video Editor turning raw footage into cinematic, engaging stories."
    },

    // Navigation
    nav: {
      brandName: "Ibrahem Mohamed",
      brandRole: "Video Editor",
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      services: "Services",
      feedback: "Feedback",
      contact: "Contact",
      themeToLight: "Switch to Light Theme",
      themeToDark: "Switch to Dark Theme",
      langToggleText: "عربي",
      langToggleAria: "التبديل إلى اللغة العربية",
      mobileLangLabel: "Language: English (عربي)"
    },

    // Hero Section
    hero: {
      badge: "Available for Creative Projects",
      title: "Ibrahem Mohamed Ibrahem",
      tagline1: "Video Editor",
      tagline2: "Colorist",
      tagline3: "Motion Designer",
      aboutText: "I'm a passionate and creative Video Editor with 2 years of experience turning raw footage into engaging and meaningful content. I work with DaVinci Resolve, Adobe Premiere Pro, After Effects, Photoshop, Illustrator, and Adobe Audition. My main services include video editing, color grading, sound design, and motion graphics. I enjoy bringing ideas to life through creative visuals, smooth storytelling, and attention to detail. I've worked with different clients and projects, always focusing on understanding their vision and delivering high-quality results. I'm constantly learning, experimenting, and improving my skills to create better and more creative content.",
      stat1Label: "Years Experience",
      stat2Label: "Completed Cuts",
      stat3Label: "Client Approval",
      stat4Label: "Creative Suites",
      educationHeading: "Education",
      educationText: "I'm currently a fourth-year Law student at Cairo University, with a \"Good\" grade throughout my first three years. I have a good foundation and practical knowledge in various areas of law.",
      ctaButton: "Get In Touch",
      floatingTitle: "Storytelling First",
      floatingDesc: "Rhythm • Emotion • Cut",
      fallbackName: "Ibrahem Mohamed",
      fallbackHint: "Cinematic Editor & Colorist"
    },

    // Skills Section
    skills: {
      tag: "Expertise",
      title: "Skills & Capabilities",
      subtitle: "A comprehensive toolkit spanning narrative pacing, precision color science, and dynamic motion design.",
      
      card1Title: "Post-Production & Video Editing",
      card1Sub: "(المونتاج والتحرير)",
      card1B1Title: "Timeline Editing & Sequencing:",
      card1B1Text: "Assembly, rough cuts, and final polish for short-form & long-form content.",
      card1B2Title: "Multi-Cam Editing:",
      card1B2Text: "Syncing and cutting multi-camera setups for interviews, shows, and events.",
      card1B3Title: "Pacing & Storytelling:",
      card1B3Text: "Crafting engaging narratives, narrative pacing, and seamless scene transitions.",
      card1B4Title: "Content Formats:",
      card1B4Text: "Editing vertical/short-form content (Reels, TikTok, Shorts) and horizontal widescreen productions (YouTube, promos, coverage).",

      card2Title: "Color Grading & Correction",
      card2Sub: "(تعديل وتصحيح الألوان)",
      card2B1Title: "Color Correction:",
      card2B1Text: "Shot matching, primary adjustments (exposure, white balance, contrast), and skin tone normalization.",
      card2B2Title: "Cinematic Color Grading:",
      card2B2Text: "Creating custom look-up tables (LUTs), node-based workflow in DaVinci Resolve, and stylizing visuals to match brand aesthetics.",
      card2B3Title: "Color Space & Technical Setup:",
      card2B3Text: "Working with Log footage, Rec.709 color management, and color consistency across platforms.",

      card3Title: "Motion Graphics & Visual Effects",
      card3Sub: "(الموشن جرافيكس والمؤثرات البصرية)",
      card3B1Title: "Title & Text Animation:",
      card3B1Text: "Kinetic typography, lower thirds, callouts, and dynamic captions.",
      card3B2Title: "2D Motion Design:",
      card3B2Text: "Logo animations, visual cues, shape layers, and UI/UX element integration.",
      card3B3Title: "Visual Effects (VFX):",
      card3B3Text: "Green screen keying, rotoscoping, object removal, tracking, and screen replacements.",
      card3B4Title: "Transitions & Overlays:",
      card3B4Text: "Creating smooth custom transitions, light leaks, film grain, and texture overlays.",

      card4Title: "Audio Post-Production & Sound Design",
      card4Sub: "(الهندسة الصوتية والتعديل)",
      card4B1Title: "Audio Cleanup & Restoration:",
      card4B1Text: "Noise reduction, removing background hiss, echo cleanup, and de-essing.",
      card4B2Title: "Dialogue Enhancement:",
      card4B2Text: "Vocal EQ, compression, and leveling for clear dialogue.",
      card4B3Title: "Sound Design & SFX:",
      card4B3Text: "Layering sound effects (foley, risers, hits, ambient sounds) to elevate visual impact.",
      card4B4Title: "Audio Mixing & Mastering:",
      card4B4Text: "Balancing dialogue, background music, and SFX according to broadcast/digital loudness standards (LUFS).",
      card4B5Title: "Beat Syncing:",
      card4B5Text: "Precision cutting synced to music rhythm and high-energy audio tracks.",

      card5Title: "Software & Technical Proficiency",
      card5Sub: "(البرامج والوسائل التقنية)",
      card5Box1Title: "Video Editing & Color",
      card5Box1Text: "DaVinci Resolve, Adobe Premiere Pro",
      card5Box2Title: "Motion Graphics & Visuals",
      card5Box2Text: "Adobe After Effects, Adobe Photoshop",
      card5Box3Title: "Export & Encoding",
      card5Box3Text: "File optimization, multi-platform compression settings, and render performance management."
    },

    // Work Experience Section
    experience: {
      tag: "Career",
      title: "Work Experience",
      subtitle: "Track record spanning freelance productions, broadcast television programs, and selective scholarships.",
      
      item1Period: "2024 – 2025",
      item1Title: "Freelance Video Editor",
      item1Desc: "Worked as a freelance video editor delivering projects across multiple clients and industries.",

      item2Period: "2025 – Present",
      item2Title: "Editor at a Private Editing Company",
      item2Desc: "Currently working as an in-house Editor at a private video editing company.",

      item3Badge: "Notable Project",
      item3Period: "Broadcast Production",
      item3Title: "TV Program: \"Dawlat El-Telawa\"",
      item3Desc: "Contributed as an editor/motion contributor to this program.",

      item4Badge: "Notable Project",
      item4Period: "Broadcast Production",
      item4Title: "TV Program: \"Estad El-Assema\"",
      item4Desc: "Contributed as an editor/motion contributor to this program.",

      item5Badge: "MCIT Track",
      item5Period: "Present",
      item5Title: "Rowad Masr Al-Raqmeya Scholarship — Motion Graphics Track",
      item5Desc: "Currently enrolled in a scholarship program by Egypt's Ministry of Communications and Information Technology (MCIT), specializing in the Motion Graphics track."
    },

    // Services Section
    services: {
      tag: "Offerings",
      title: "Services",
      subtitle: "Tailored creative services designed to elevate video engagement and visual storytelling.",
      bestForLabel: "Best for:",

      s1Title: "Video Editing (مونتاج الفيديوهات)",
      s1Desc: "Transforming raw footage into engaging visual stories. Focused on fluid storytelling, rhythm and pacing, and precision cuts that hook viewers in the first seconds and maintain high watch time.",
      s1BestFor: "Content creators, short-form reels/TikTok/shorts, commercial promos, and YouTube channels.",

      s2Title: "Motion Graphics (تحريك الجرافيكس)",
      s2Desc: "Adding dynamic energy to video with animated typography, icons, and visual graphics that clarify complex ideas and reinforce your core message.",
      s2BestFor: "Explainer videos, channel intro/outro sequences, promo trailers, and commercial ads.",

      s3Title: "Sound Design & Audio Mix (الهندسة والتصميم الصوتي)",
      s3Desc: "Audio makes up half the viewing experience. I craft custom sound design, layer ambient audio and impacts, clean voice recordings, and balance background scores for an immersive soundscape.",
      s3BestFor: "All video productions, ads, podcasts, and content demanding a rich, cinematic punch.",

      s4Title: "Color Grading & Correction (تصحيح وتعديل الألوان)",
      s4Desc: "Delivering a unified, premium look through technical exposure/contrast balancing (Color Correction), followed by mood-setting cinematic looks (Color Grading) tailored to brand identity.",
      s4BestFor: "Commercials, product launches, music videos, and high-end cinematic projects.",

      s5Title: "Full Post-Production Package (الباقة المتكاملة لما بعد الإنتاج)",
      s5Desc: "The complete, hassle-free solution. Send raw footage and receive a finished, ready-to-publish film complete with sequencing, color grading, sound design, and motion graphics.",
      s5BestFor: "Companies, businesses, and creators seeking full turnkey production and saving time."
    },

    // Testimonials / Feedback Section
    testimonials: {
      tag: "Reviews",
      title: "Client Feedback",
      subtitle: "Real feedback from clients, creators, and directors across Egypt and the Gulf.",
      prevBtnAria: "Previous Testimonial",
      nextBtnAria: "Next Testimonial",

      r1Quote: "Top-tier professionalism across the board. Always on-time delivery with an exceptional feel for rhythm and pacing. The edits made a huge leap in engagement on my channel.",
      r1Name: "Ahmed Tarek",
      r1Location: "Content Creator — Cairo",
      r1Avatar: "A",

      r2Quote: "Outstanding craftsmanship! A true artist in color grading and sound effects. We partnered on an ad for our company and the final output surpassed all expectations.",
      r2Name: "Fahad Al-Shammari",
      r2Location: "Marketing Director — Riyadh",
      r2Avatar: "F",

      r3Quote: "Ibrahem is among the fastest and most talented editors I've collaborated with. His motion design is fresh, modern, and grabs attention from the first second. Proud to work together.",
      r3Name: "Kareem Zahran",
      r3Location: "Media Producer — Alexandria",
      r3Avatar: "K",

      r4Quote: "Prompt delivery and stellar commitment. His editing touches are purely professional with distinct cinematic storytelling. Definitely our go-to partner moving forward.",
      r4Name: "Abdullah Al-Mansouri",
      r4Location: "Entrepreneur — Dubai",
      r4Avatar: "A",

      r5Quote: "Brilliant work Ibrahem! The voice cleanup, color balancing, and audio mix made the episode look and sound exactly like a broadcast TV production. Great taste and attention to detail.",
      r5Name: "Mohamed Abdelaziz",
      r5Location: "Podcaster & Creator — Giza",
      r5Avatar: "M",

      r6Quote: "Creative and truly proficient in DaVinci and Premiere Pro. Grasps the vision immediately and brings suggestions that noticeably elevate overall video quality. Highly recommended!",
      r6Name: "Sultan Al-Otaibi",
      r6Location: "Commercial Director — Jeddah",
      r6Avatar: "S"
    },

    // Contact Section
    contact: {
      tag: "Direct Collaboration",
      heading: "Let's bring your vision to life — Get in touch.",
      desc: "Ready to craft high-impact video stories, sharp motion visuals, and cinematic color palettes? Reach out directly via WhatsApp or Email.",
      whatsappLabel: "Instant Messaging",
      whatsappAction: "Chat on WhatsApp",
      whatsappDetail: "+20 100 828 4111",
      emailLabel: "Official Inquiries",
      emailAction: "Send an Email",
      emailDetail: "ibrahim.mohamed778899@gmail.com"
    },

    // Footer
    footer: {
      brandName: "Ibrahem Mohamed Ibrahem",
      copy: "© 2026 Ibrahem Mohamed Ibrahem. All rights reserved."
    }
  }
};

// Export for module systems if needed, while attaching to window in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS };
}
