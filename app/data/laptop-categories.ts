export type LaptopCategoryCopy = {
  name: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  body: string[];
  whoFor: string;
};

export const LAPTOP_CATEGORY_COPY: LaptopCategoryCopy[] = [
  {
    name: 'Ultrabook',
    slug: 'ultrabook',
    title: 'Ultrabook Laptops for Travel and All-Day Work',
    description:
      'Thin-and-light ultrabooks on AISneer with Core Ultra or Apple Silicon, 16GB+ RAM, and all-day battery. Compare XPS and similar picks, then open the current retailer deal.',
    h1: 'Ultrabook laptops',
    intro:
      'Ultrabooks are the machines we recommend when the laptop has to live in a bag five days a week. The useful bar is a 13–14 inch 16:10 panel, 16GB of memory, and a battery the manufacturer quotes in hours rather than “up to” marketing slides.',
    body: [
      'Start with CPU generation and memory, not chassis color. Intel Core Ultra H/U and Apple M-series chips are the current efficiency floor; older U-series parts still work for documents but fall behind in browser-heavy days. RAM should be 16GB minimum. 8GB configurations look cheap and age badly once the OS and a dozen tabs share the same pool.',
      'Displays matter more than people admit on a commute. A 1920×1200 or better IPS/OLED panel at 13.4–14 inches is the comfort zone. Glossy OLED looks better in a cafe; matte IPS is easier on a sunlit train. Confirm whether the SKU you click is touch or non-touch — Dell and Lenovo often share a model name across both.',
      'Ports are the other gotcha. Many ultrabooks now ship with two Thunderbolt/USB-C ports and a headphone jack. If you still need HDMI or USB-A every day, budget a hub from our USB catalog rather than forcing a thicker chassis you will resent on the walk to the office.'
    ],
    whoFor: 'Commuters, consultants, and anyone who wants a light Windows or macOS laptop without a discrete GPU.'
  },
  {
    name: 'Gaming',
    slug: 'gaming',
    title: 'Gaming Laptops with RTX 4060 and RTX 4070',
    description:
      'Gaming laptops on AISneer with RTX 4060 or RTX 4070, 16GB+ DDR5, and high-refresh 14–16 inch panels. Compare Legion and Zephyrus configs before you buy.',
    h1: 'Gaming laptops',
    intro:
      'A gaming laptop is a cooling chassis around a laptop GPU. The SKU suffix matters more than the series name: RTX 4060 and RTX 4070 share marketing slides and do not share frame-time at QHD+.',
    body: [
      'Treat RTX 4060 as the 1080p/1440p high-refresh sweet spot and RTX 4070 as the QHD+ or light creator dual-use pick. TGP (watts) is not printed on the lid. If two “RTX 4070” listings differ by $300, look up the wattage on the manufacturer spec sheet before you assume they are the same GPU.',
      'Memory and storage should not be the upgrade you postpone. 16GB DDR5 is the floor; 32GB is the comfortable gaming-plus-Chrome setup. 1TB NVMe avoids the “OS plus two games” squeeze. Confirm whether RAM is soldered (Zephyrus G14) or in SODIMM slots (many Legion and Katana units).',
      'Panel spec is the third axis. 16-inch WQXGA high-refresh IPS is the typical Legion layout; 14-inch 3K OLED is the Zephyrus layout. OLED looks better in a dark room and is worse in a sunlit LAN. Always match the panel SKU, not just the chassis photo.'
    ],
    whoFor: 'Players who want a 1080p or QHD+ high-refresh machine they can also take to campus or a coworking desk.'
  },
  {
    name: 'Business',
    slug: 'business',
    title: 'Business Laptops: ThinkPad, EliteBook, and Manageability',
    description:
      'Business laptops on AISneer including HP EliteBook 840 G11 and Lenovo ThinkPad X1 Carbon Gen 12. Compare vPro, Windows 11 Pro, and panel options before you request a quote.',
    h1: 'Business laptops',
    intro:
      'Business notebooks are bought for keyboards, manageability, and a three-year parts story — not for RGB. EliteBook and ThinkPad SKUs in this list are current Core Ultra machines; vPro and WWAN are still checkbox options, not defaults.',
    body: [
      'Read the part number. HP EliteBook 840 G11 and ThinkPad X1 Carbon Gen 12 both offer Intel Core Ultra CPUs, but graphics branding, vPro, and the panel (WUXGA IPS vs 2.8K OLED) change by SKU. A “840 G11” without the rest of the string is not a spec.',
      'Windows 11 Pro is the usual image. If you need BitLocker, domain join, or Intune out of the box, do not buy a Home SKU and hope. RAM is often soldered on Carbon-class machines; EliteBook configs more often allow a SODIMM. Plan memory at purchase.',
      'We link to manufacturer and channel listings rather than selling the laptop ourselves. For fleet buys, request the quote on the vendor site with the exact MTM or HP CTO code. Street prices on a single consumer listing are not enterprise pricing.'
    ],
    whoFor: 'IT buyers, consultants, and anyone who needs a 14-inch Pro-class notebook with a serviceable keyboard and a clear warranty path.'
  },
  {
    name: 'Creator',
    slug: 'creator',
    title: 'Creator Laptops with Color-Accurate Panels',
    description:
      'Creator laptops on AISneer, led by the 14-inch MacBook Pro with M3 Pro. Compare unified memory, Liquid Retina XDR, and Windows creator alternatives under and over $1,500.',
    h1: 'Creator laptops',
    intro:
      'Creator machines are defined by the panel and the memory pool, not by a “creator” sticker. If you grade photo or timeline in a NLE, you want color volume and enough RAM that the project does not page to disk.',
    body: [
      'The 14-inch MacBook Pro with M3 Pro in this catalog is the reference: 18GB unified memory on the base config, a 3024×1964 Liquid Retina XDR panel, and ProMotion. Higher M3 Pro/Max configs change CPU/GPU core counts — buy the memory you need now; it is not upgradable.',
      'Windows creator alternatives in adjacent categories (XPS ultrabooks, Precision workstations, OLED Zephyrus) can match the panel better than they match the battery. If your stack is Adobe on Windows or CUDA plugins, stay on NVIDIA. If your stack is Final Cut, Logic, or Xcode, the MacBook is the shorter path.',
      'We keep a separate long-form comparison for six creator notebooks under $1,500, including Vivobook OLED and XPS 14 configs that are not duplicated as catalog cards. Use that guide when the budget is the constraint; use this category when you want the machine we would actually put on a desk for paid work.'
    ],
    whoFor: 'Photographers, video editors, and developers who will notice a weak panel and a 16GB ceiling.'
  },
  {
    name: 'Student',
    slug: 'student',
    title: 'Student Laptops Under $800 with 16GB RAM',
    description:
      'Student laptops on AISneer, including the Acer Aspire 5 A515 with Core i5, 16GB RAM, and a 15.6-inch FHD IPS panel. Compare Chromebooks when the work is browser-first.',
    h1: 'Student laptops',
    intro:
      'The student comfort zone is still a 15.6-inch FHD IPS panel, a current Core i5 or Ryzen 5, 16GB of RAM, and 512GB of SSD — usually under $800 street if you ignore last year’s 8GB SKUs.',
    body: [
      'The Acer Aspire 5 (A515 family) in this list matches that pattern with an Intel Core i5-13420H. Confirm the exact model code and whether RAM is DDR4 or LPDDR5; both appear in the A515 line and they are not the same machine for longevity.',
      'Do not buy 8GB in 2026 unless the workload is strictly ChromeOS or a locked-down exam image. Browser tabs plus Teams plus a PDF reader will swap. Storage at 256GB fills with one large course pack and a game; 512GB is the minimum we will list.',
      'If every assignment is Google Docs, Canvas, and a cheap tablet for notes, look at Chromebooks instead. A Windows student laptop is for IDEs, local lab software, and the one class that still ships a Windows-only plugin.'
    ],
    whoFor: 'High-school and university students who need a durable 15-inch Windows laptop without paying for a discrete GPU they will not use.'
  },
  {
    name: '2-in-1',
    slug: '2-in-1',
    title: '2-in-1 Convertible Laptops with Touch Displays',
    description:
      '2-in-1 laptops on AISneer, including Microsoft Surface Laptop Studio 2 with a 14.4-inch PixelSense Flow touch panel and optional RTX graphics.',
    h1: '2-in-1 laptops',
    intro:
      'Convertibles only make sense if you actually fold the panel. If you never use a pen or tent mode, a regular 14-inch clamshell is lighter and cheaper for the same CPU.',
    body: [
      'Surface Laptop Studio 2 is the current pick here: 14.4-inch 2400×1600 PixelSense Flow at 120Hz, 13th-gen Core i7, and an RTX 4060 option on higher configs. Memory is soldered LPDDR5x — choose 32GB if you sketch and keep a browser alive.',
      'Weight and hinge durability are the real costs of a 2-in-1. Studio-class machines are thicker than an ultrabook. Check Microsoft’s spec page for the exact GPU and RAM bundle; street photos often show the wrong configuration.'
    ],
    whoFor: 'Designers and note-takers who will use touch or a pen at least a few times a week.'
  },
  {
    name: 'Budget Gaming',
    slug: 'budget-gaming',
    title: 'Budget Gaming Laptops with RTX 4060',
    description:
      'Budget gaming laptops on AISneer, including the MSI Katana 15 B13VFK with Core i7-13620H, RTX 4060, and a 15.6-inch FHD 144Hz panel.',
    h1: 'Budget gaming laptops',
    intro:
      'Budget gaming means a 15.6-inch FHD 144Hz panel and an RTX 4060, not last year’s 3050 with a 60Hz screen. The Katana 15 B13 family is the current example in this catalog.',
    body: [
      'MSI publishes i7-13620H plus RTX 4060 combinations for Katana 15 B13VFK. Confirm the full model suffix: some units ship 512GB instead of 1TB, and some panels are QHD rather than FHD 144Hz. RAM is often two SODIMMs, which is the one upgrade path worth keeping.',
      'Do not expect Zephyrus thermals or OLED color. You are buying fps-per-dollar and a chassis that will be louder under load. If you also edit video, look at the main Gaming category for 32GB configs.'
    ],
    whoFor: 'Players who want RTX 4060 at 1080p without paying for a 14-inch OLED thin chassis.'
  },
  {
    name: 'Chromebook',
    slug: 'chromebook',
    title: 'Chromebooks with AMOLED Displays',
    description:
      'Chromebooks on AISneer, including Samsung Galaxy Chromebook Plus 15.6-inch AMOLED models. Compare RAM, storage, and the exact XE model number for your country.',
    h1: 'Chromebooks',
    intro:
      'A Chromebook is the right call when the work is the browser. It is the wrong call when a professor ships a Windows VM or you need local CUDA.',
    body: [
      'Samsung’s Galaxy Chromebook Plus 15.6-inch AMOLED line is the current pick. CPU branding, 8GB RAM, and 256GB storage differ by region — verify the XE… model on samsung.com for your country before you click a deal.',
      '8GB and 256GB are tight if you also keep Android apps and offline media. If you need more, you are usually happier on a Windows student laptop. If you do not, the AMOLED panel and simple OS are the point.'
    ],
    whoFor: 'Students and light-work users whose entire day is Chrome, Docs, and streaming.'
  },
  {
    name: 'Workstation',
    slug: 'workstation',
    title: 'Mobile Workstations with Pro GPUs',
    description:
      'Mobile workstations on AISneer, including Dell Precision 5680 with Core i9 H-class CPUs, ISV certifications, and NVIDIA RTX Ada laptop GPUs.',
    h1: 'Mobile workstations',
    intro:
      'Workstations are build-to-order machines with ISV certifications and professional GPUs. Street “from” prices are a starting quote, not a checkout total.',
    body: [
      'Dell Precision 5680 documentation covers Core i9 H-class CPUs, LPDDR5 memory, and RTX Ada Generation laptop GPUs including RTX 5000. TGP, VRAM, and the 16-inch UHD+ OLED option are configuration-dependent. Read the CTO sheet.',
      'Buy a workstation when your software vendor certifies that GPU and you bill hours against it. If you just want a fast creator laptop, the Creator and Gaming categories cost less and ship faster.'
    ],
    whoFor: 'CAD, DCC, and data users who need an ISV-certified GPU and a quote, not a weekend impulse buy.'
  }
];

export function getCategoryCopy(slugOrName: string): LaptopCategoryCopy | undefined {
  const key = slugOrName.trim().toLowerCase();
  return LAPTOP_CATEGORY_COPY.find(
    (c) => c.slug === key || c.name.toLowerCase() === key
  );
}
