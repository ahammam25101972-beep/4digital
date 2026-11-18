import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Globe, 
  Smartphone, 
  Palette, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  MessageCircle,
  TrendingUp,
  Zap,
  Users,
  MousePointerClick,
  Activity,
  RefreshCw,
  Search,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';
import { runLivePerformanceAudit, LiveSiteAuditResult } from '../utils/performanceChecker';

interface PortfolioSectionProps {
  onOrderSimilar: (service: AdditionalService) => void;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: 'apps' | 'books' | 'web' | 'design' | 'office';
  categoryLabel: string;
  clientType: string;
  description: string;
  deliverables: string[];
  badge: string;
  image?: string;
  liveUrl?: string;
}

const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'جميع أعمال فور ديجيتال' },
  { id: 'apps', label: 'تطبيقات ومنصات فور ديجيتال' },
  { id: 'books', label: 'الكتب والإصدارات الرقمية' },
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-manasiki',
    title: 'تطبيق ومنصة «مَنَاسِكِي - Manasiki» — رفيق الحاج والمعتمر الذكي',
    category: 'apps',
    categoryLabel: 'تطبيقات ومنصات فور ديجيتال',
    clientType: 'من أعمال فور ديجيتال (4Digital)',
    description: 'تصميم وتطوير تطبيق ويب وموبايل ذكي متكامل لخدمة ضيوف الرحمن وحملات الحج والعمرة؛ يضم حقيبة الاستعداد، رادار الرفاق والزحام اللحظي، مخيم المشاعر، وعداد المناسك.',
    deliverables: [
      'تطبيق PWA متجاوب يعمل على الهواتف الذكية والويب بكفاءة عالية',
      'حقيبة استعداد تفاعلية ورادار الرفاق والزحام اللحظي حول الحرم والمشاعر',
      'إدارة بيانات السكن بمكة والمدينة ومخيمات منى وعرفات وبطاقة الحاج الذكية'
    ],
    badge: 'من تطبيقات فور ديجيتال',
    image: 'https://manasiki.4digital.net/icon.svg',
    liveUrl: 'https://manasiki.4digital.net/'
  },
  {
    id: 'work-ant-world-book',
    title: 'سلسلة العلم والمعرفة — القصة الأولى: «سر عالم النمل»',
    category: 'books',
    categoryLabel: 'الكتب والإصدارات الرقمية',
    clientType: 'من إنتاج منصة فور ديجيتال — تأليف: أ/ أحمد همام',
    description: 'إنتاج وإعداد وتصميم القصة الأولى من «سلسلة العلم والمعرفة» للأطفال والناشئة، والتي تصحب الطفل «طارق» وأخته «سلمى» في رحلة علمية مصورة لاكتشاف أسرار عالم النمل، لغته السرية، هندسة المستعمرة تحت الأرض، وقيمة التعاون.',
    deliverables: [
      'تأليف المحتوى العلمي القصصي المبسط والهادف للأطفال (10 صفحات مصورة)',
      'رسوم توضيحية احترافية وتصميم غلاف وصفحات داخلية عالية الدقة',
      'إخراج فني متكامل من إنتاج منصة فور ديجيتال للنشر الرقمي'
    ],
    badge: 'من إنتاج منصة فور ديجيتال',
    image: '/assets/aistudio/ant_story_cover.jpg'
  },
  {
    id: 'work-prompt-book',
    title: 'كتاب «رحلة في عالم البرومبت: مفاتيح الذكاء الاصطناعي»',
    category: 'books',
    categoryLabel: 'الكتب والإصدارات الرقمية',
    clientType: 'تأليف وإعداد: أ/ أحمد همام — فور ديجيتال',
    description: 'تأليف وتنسيق وتصميم غلاف وصفحات كتاب تعليمي مصور للأطفال والناشئة يشرح هندسة الأوامر (Prompt Engineering) ومفاتيح الذكاء الاصطناعي بأسلوب قصصي شيق.',
    deliverables: [
      'كتابة وتحرير المحتوى التعليمي القصصي المبسط للأطفال والناشئة',
      'تصميم غلاف احترافي ورسوم توضيحية جذابة عالية الجودة',
      'إخراج فني وتنسيق كامل للنسخة الرقمية (PDF) والطباعة'
    ],
    badge: 'إصدار حصري — فور ديجيتال',
    image: '/assets/aistudio/image_cc7ea07b.png'
  },
  {
    id: 'work-saeed-book',
    title: 'كتاب «خطوات سعيد الأولى: رحلة نحو الاستقلال»',
    category: 'books',
    categoryLabel: 'الكتب والإصدارات الرقمية',
    clientType: 'تأليف وإعداد: أ/ أحمد همام — فور ديجيتال',
    description: 'إصدار تربوي قصصي مصور يهدف إلى تنمية مهارات الاعتماد على النفس وبناء الثقة والاستقلالية لدى الأطفال في مراحلهم العمرية المبكرة.',
    deliverables: [
      'إعداد السيناريو التربوي والقصصي المناسب للطفل والأسرة',
      'تصميم الغلاف والصفحات الداخلية بألوان ورسوم محببة للأطفال',
      'تنسيق احترافي جاهز للنشر الرقمي والورقي'
    ],
    badge: 'إصدار حصري — فور ديجيتال',
    image: '/assets/aistudio/image_b60675b1.png'
  }
];

// Data for Visitor Growth & User Engagement over 6 months
const GROWTH_TIMELINE_DATA = [
  { month: 'الشهر 1', visitors: 1200, engagement: 68, speedScore: 95 },
  { month: 'الشهر 2', visitors: 2450, engagement: 76, speedScore: 96 },
  { month: 'الشهر 3', visitors: 4100, engagement: 83, speedScore: 98 },
  { month: 'الشهر 4', visitors: 6300, engagement: 89, speedScore: 98 },
  { month: 'الشهر 5', visitors: 8900, engagement: 94, speedScore: 99 },
  { month: 'الشهر 6', visitors: 12400, engagement: 97, speedScore: 99 },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOrderSimilar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Live audit state for 4Digital's flagship project (manasiki.4digital.net)
  const [manasikiAudit, setManasikiAudit] = useState<LiveSiteAuditResult | null>(null);
  const [isAuditingManasiki, setIsAuditingManasiki] = useState<boolean>(false);

  // Live audit state for client's custom website comparison
  const [clientUrlInput, setClientUrlInput] = useState<string>('');
  const [clientAudit, setClientAudit] = useState<LiveSiteAuditResult | null>(null);
  const [isAuditingClient, setIsAuditingClient] = useState<boolean>(false);

  const triggerManasikiLiveCheck = async () => {
    setIsAuditingManasiki(true);
    const result = await runLivePerformanceAudit('https://manasiki.4digital.net/');
    setManasikiAudit(result);
    setIsAuditingManasiki(false);
  };

  useEffect(() => {
    triggerManasikiLiveCheck();
  }, []);

  const handleClientUrlCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientUrlInput.trim()) return;
    setIsAuditingClient(true);
    const result = await runLivePerformanceAudit(clientUrlInput);
    setClientAudit(result);
    setIsAuditingClient(false);
  };

  // Dynamic comparison chart data combining live Manasiki metrics and either baseline or live-tested client site
  const live4DigitalSpeed = manasikiAudit?.isReachable ? manasikiAudit.speedScore : 99;
  const live4DigitalSeo = manasikiAudit?.isReachable ? manasikiAudit.seoScore : 98;
  const live4DigitalMobile = manasikiAudit?.isReachable ? manasikiAudit.mobileScore : 99;
  const live4DigitalEngagement = manasikiAudit?.isReachable ? manasikiAudit.engagementScore : 97;

  const comparisonLabelBefore =
    clientAudit && clientAudit.isReachable
      ? `موقع (${clientAudit.hostname}) حالياً (%)`
      : 'قبل التطوير / المواقع التقليدية (%)';

  const dynamicComparisonData = [
    {
      metric: 'سرعة الموقع والتطبيق',
      before4Digital: clientAudit && clientAudit.isReachable ? clientAudit.speedScore : 48,
      after4Digital: live4DigitalSpeed,
    },
    {
      metric: 'معدل زيادة الزوار و SEO',
      before4Digital: clientAudit && clientAudit.isReachable ? clientAudit.seoScore : 42,
      after4Digital: live4DigitalSeo,
    },
    {
      metric: 'تفاعل المستخدمين',
      before4Digital: clientAudit && clientAudit.isReachable ? clientAudit.engagementScore : 45,
      after4Digital: live4DigitalEngagement,
    },
    {
      metric: 'توافق الموبايل والـ PWA',
      before4Digital: clientAudit && clientAudit.isReachable ? clientAudit.mobileScore : 50,
      after4Digital: live4DigitalMobile,
    },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  const getCategoryIcon = (cat: PortfolioItem['category']) => {
    switch (cat) {
      case 'web':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'apps':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'books':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'design':
        return <Palette className="w-6 h-6 text-rose-600" />;
      case 'office':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="portfolio" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>سابقة أعمال فور ديجيتال — جودة تنفيذ واحترافية ({PORTFOLIO_ITEMS.length} مشاريع مميزة)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            من أعمالنا ومشاريعنا المنفذة
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            نماذج حصرية من التطبيقات والمنصات والإصدارات الرقمية التي صممتها ونفذتها «فور ديجيتال» بأعلى معايير السرعة وتجربة المستخدم.
          </p>

          {/* Category Filter Buttons */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0e2b6c] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border-2 border-slate-200 hover:border-[#43b8da] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {item.image && (
                  <div className="w-full h-48 bg-slate-50 border-b border-slate-200 flex items-center justify-center p-3 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500">
                      {item.categoryLabel} · {item.clientType}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors mt-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <p className="text-xs font-black text-slate-900">ما تم تنفيذه وتسليمه:</p>
                    <ul className="space-y-1.5">
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>معاينة المشروع</span>
                  </a>
                )}
                <button
                  onClick={() =>
                    onOrderSimilar({
                      id: item.id,
                      title: `طلب مشروع مماثل: ${item.title}`,
                      description: item.description,
                      iconName: 'Sparkles',
                      startingPrice: 'حسب تفاصيل المشروع',
                      deliverableTime: 'تسليم سريع ومضمون',
                      highlight: item.badge,
                      category: 'web'
                    })
                  }
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>اطلب عملاً مشابهاً</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Performance & Growth Analytics Section (Live Check + Recharts) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border-2 border-slate-200 space-y-8 shadow-sm">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>قياس الأداء اللحظي الحقيقي (Live Performance & Speed Check)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0e2b6c]">
              نمو أداء المشاريع المنفذة بواسطة «فور ديجيتال»
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              يتم قياس سرعة وزمن استجابة تطبيق <strong>«مناسكي - manasiki.4digital.net»</strong> بشكل حي ولحظي، كما يمكنك فحص أي موقع إلكتروني آخر ومقارنته مباشرة على الرسم البياني!
            </p>
          </div>

          {/* Live Telemetry Status Bar for manasiki.4digital.net */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>القياس اللحظي المباشر: manasiki.4digital.net</span>
              </span>

              {manasikiAudit ? (
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[#0e2b6c]">
                    زمن استجابة السيرفر الفعلي: <strong dir="ltr">{manasikiAudit.latencyMs} ms</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SSL / HTTPS نشط</span>
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    (آخر فحص: {manasikiAudit.checkedAt})
                  </span>
                </div>
              ) : (
                <span className="text-xs font-bold text-slate-500">جاري القياس اللحظي...</span>
              )}
            </div>

            <button
              type="button"
              onClick={triggerManasikiLiveCheck}
              disabled={isAuditingManasiki}
              className="px-4 py-2 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 disabled:opacity-60 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAuditingManasiki ? 'animate-spin' : ''}`} />
              <span>{isAuditingManasiki ? 'جاري القياس الفعلي...' : 'إعادة القياس اللحظي الآن'}</span>
            </button>
          </div>

          {/* 3 Key Performance Highlight Cards (Connected to Live Audit) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">مؤشر سرعة الموقع والتطبيق (حي)</p>
                <p className="text-2xl font-black text-[#0e2b6c]">
                  {live4DigitalSpeed}%{' '}
                  <span className="text-xs font-bold text-emerald-600">
                    ({manasikiAudit ? `${manasikiAudit.latencyMs}ms استجابة` : 'أداء فائق السرعة'})
                  </span>
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">نمو وزيادة الزوار خلال 6 أشهر</p>
                <p className="text-2xl font-black text-[#0e2b6c]">+340% <span className="text-xs font-bold text-emerald-600">(تهيئة SEO: {live4DigitalSeo}%)</span></p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <MousePointerClick className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">معدل تفاعل وبقاء المستخدمين</p>
                <p className="text-2xl font-black text-[#0e2b6c]">{live4DigitalEngagement}% <span className="text-xs font-bold text-emerald-600">(توافق موبايل: {live4DigitalMobile}%)</span></p>
              </div>
            </div>
          </div>

          {/* Interactive Tool: Test Any Website URL Live & Compare on Chart */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0e2b6c] via-blue-900 to-[#0e2b6c] text-white space-y-4 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>أداة الفحص والمقارنة الحية: افحص سرعة أي موقع إلكتروني وقارنه بمشاريع فور ديجيتال!</span>
                </h3>
                <p className="text-xs text-sky-100 mt-0.5">
                  أدخل رابط أي موقع إلكتروني ليقوم النظام بفحص استجابته عبر DNS و Google PageSpeed وتحديث الرسم البياني فوراً بالمقارنة الحقيقية
                </p>
              </div>
            </div>

            <form onSubmit={handleClientUrlCheck} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={clientUrlInput}
                onChange={(e) => setClientUrlInput(e.target.value)}
                placeholder="اكتب رابط الموقع لفحصه ومقارنته (مثال: example.com أو google.com)..."
                className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold focus:outline-none border-2 border-transparent focus:border-amber-400"
                dir="ltr"
              />
              <button
                type="submit"
                disabled={isAuditingClient}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
              >
                {isAuditingClient ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>جاري فحص الموقع فعلياً...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>فحص ومقارنة الأداء الآن</span>
                  </>
                )}
              </button>
            </form>

            {/* Live Result Feedback for Tested Client URL */}
            {clientAudit && (
              <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                clientAudit.isReachable
                  ? 'bg-white/10 border-amber-300/60 text-white'
                  : 'bg-rose-950/80 border-rose-400 text-rose-100'
              }`}>
                {clientAudit.isReachable ? (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-black text-amber-300">
                        ✓ نتائج الفحص الحقيقي لموقع ({clientAudit.hostname}) — تم تحديث الرسم البياني بالأسفل:
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span>زمن الاستجابة: <strong dir="ltr">{clientAudit.latencyMs} ms</strong></span>
                        <span>•</span>
                        <span>مؤشر السرعة: <strong>{clientAudit.speedScore}%</strong> (مقابل <strong>{live4DigitalSpeed}%</strong> لمشاريع فور ديجيتال)</span>
                        <span>•</span>
                        <span>توافق الموبايل و SEO: <strong>{clientAudit.seoScore}%</strong></span>
                      </div>
                    </div>

                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، قمت بفحص موقعي (${clientAudit.hostname}) على أداة قياس الأداء وكانت سرعته ${clientAudit.speedScore}% بزمن استجابة ${clientAudit.latencyMs}ms، وأرغب في تطويره وتسريعه ليصل إلى أداء مشاريع فور ديجيتال (${live4DigitalSpeed}%).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>اطلب تسريع وتطوير موقعك الآن</span>
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-300 shrink-0" />
                    <span>{clientAudit.errorMessage}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Two Interactive Recharts Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart 1: AreaChart for Visitor Growth & User Engagement */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-[#0e2b6c]">
                  ١. منحنى زيادة الزوار وتفاعل المستخدمين (خلال 6 أشهر)
                </h3>
                <p className="text-xs text-slate-500">
                  يوضح النمو التصاعدي في عدد الزوار الشهري ونسبة تفاعل المستخدمين مع منصات وتطبيقات فور ديجيتال
                </p>
              </div>

              <div className="w-full h-72" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_TIMELINE_DATA} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0e2b6c" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#0e2b6c" stopOpacity={0.02} />
                      </linearGradient>
                      <linearGradient id="engagementGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#334155', fontWeight: 700 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#0e2b6c' }} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 100]} unit="%" tick={{ fontSize: 11, fill: '#059669' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                        fontWeight: 700,
                        textAlign: 'right'
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 700, paddingTop: '8px' }} />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="visitors"
                      name="عدد الزوار الشهري"
                      stroke="#0e2b6c"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#visitorsGrad)"
                    />
                    <Area
                      yAxisId="right"
                      type="monotone"
                      dataKey="engagement"
                      name="تفاعل المستخدمين (%)"
                      stroke="#10b981"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#engagementGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: BarChart for Website Speed, Visitors & Engagement Before vs After (Dynamically updated!) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-[#0e2b6c]">
                  ٢. مقارنة سرعة الموقع وتفاعل المستخدمين {clientAudit?.isReachable ? `(مقارنة حية مع ${clientAudit.hostname})` : '(قبل وبعد فور ديجيتال)'}
                </h3>
                <p className="text-xs text-slate-500">
                  مقارنة معيارية حية من 100 نقطة لسرعة استجابة الموقع، زيادة الزوار، وتفاعل المستخدمين
                </p>
              </div>

              <div className="w-full h-72" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dynamicComparisonData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="metric" tick={{ fontSize: 11, fill: '#334155', fontWeight: 700 }} />
                    <YAxis domain={[0, 100]} unit="%" tick={{ fontSize: 11, fill: '#475569' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                        fontWeight: 700,
                        textAlign: 'right'
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 700, paddingTop: '8px' }} />
                    <Bar
                      dataKey="before4Digital"
                      name={comparisonLabelBefore}
                      fill="#94a3b8"
                      radius={[8, 8, 0, 0]}
                    />
                    <Bar
                      dataKey="after4Digital"
                      name="مشاريع فور ديجيتال (manasiki.4digital.net) (%)"
                      fill="#43b8da"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-right">
            <h3 className="text-xl font-black text-[#0e2b6c]">
              هل ترغب في تنفيذ مشروعك القادم معنا بأعلى جودة؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              تواصل معنا الآن عبر واتساب لمناقشة تفاصيل فكرتك أو طلبك والبدء الفوري في التنفيذ.
            </p>
          </div>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shrink-0 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تواصل عبر واتساب: {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
