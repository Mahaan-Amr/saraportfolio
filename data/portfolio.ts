export interface PortfolioItem {
  id: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  category: 'animation' | 'graphicDesign' | 'videoEditing' | 'content';
  image: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Animated Short Film',
    titleFa: 'فیلم کوتاه انیمیشن',
    description: 'A captivating animated short film showcasing storytelling through motion graphics and character animation.',
    descriptionFa: 'یک فیلم کوتاه انیمیشن جذاب که روایت داستان را از طریق موشن گرافیک و انیمیشن کاراکتر نشان می‌دهد.',
    category: 'animation',
    image: '/api/placeholder/600/400',
    tags: ['After Effects', 'TVPaint', 'Moho'],
  },
  {
    id: '2',
    title: 'Brand Identity Design',
    titleFa: 'طراحی هویت بصری برند',
    description: 'Complete brand identity package including logo design, color palette, and visual guidelines.',
    descriptionFa: 'بسته کامل هویت بصری برند شامل طراحی لوگو، پالت رنگ و راهنمای بصری.',
    category: 'graphicDesign',
    image: '/api/placeholder/600/400',
    tags: ['Photoshop', 'Illustrator'],
  },
  {
    id: '3',
    title: 'Corporate Video Production',
    titleFa: 'تولید ویدیو شرکتی',
    description: 'Professional corporate video with seamless editing, color grading, and motion graphics.',
    descriptionFa: 'ویدیو شرکتی حرفه‌ای با تدوین بی‌نقص، رنگ‌آمیزی و موشن گرافیک.',
    category: 'videoEditing',
    image: '/api/placeholder/600/400',
    tags: ['Premiere Pro', 'After Effects'],
  },
  {
    id: '4',
    title: '3D Product Visualization',
    titleFa: 'تجسم سه‌بعدی محصول',
    description: 'Stunning 3D product renders and animations for marketing campaigns.',
    descriptionFa: 'رندرها و انیمیشن‌های سه‌بعدی خیره‌کننده محصول برای کمپین‌های بازاریابی.',
    category: 'animation',
    image: '/api/placeholder/600/400',
    tags: ['3ds Max', 'After Effects'],
  },
  {
    id: '5',
    title: 'Social Media Content Series',
    titleFa: 'سری محتوای شبکه‌های اجتماعی',
    description: 'Engaging social media content series with consistent branding and creative visuals.',
    descriptionFa: 'سری محتوای جذاب شبکه‌های اجتماعی با برندینگ یکپارچه و تصاویر خلاقانه.',
    category: 'content',
    image: '/api/placeholder/600/400',
    tags: ['Content Creation', 'Photoshop'],
  },
  {
    id: '6',
    title: 'Music Video Production',
    titleFa: 'تولید موزیک ویدیو',
    description: 'Creative music video with dynamic editing, visual effects, and artistic direction.',
    descriptionFa: 'موزیک ویدیو خلاقانه با تدوین پویا، جلوه‌های بصری و کارگردانی هنری.',
    category: 'videoEditing',
    image: '/api/placeholder/600/400',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading'],
  },
];

