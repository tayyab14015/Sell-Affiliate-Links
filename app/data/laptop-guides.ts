export type LaptopGuide = {
  whoThisIsFor: string;
  verdict: string;
  paragraphs: string[];
  relatedSlug: string;
};

export const LAPTOP_GUIDES: Record<string, LaptopGuide> = {
  'dell-xps-13-9340': {
    whoThisIsFor:
      'Buy the Dell XPS 13 9340 if you want a 13.4-inch Windows ultrabook for travel, consulting, and all-day browser work, and you are willing to confirm the exact panel and Core Ultra SKU on Dell’s configure page before you pay.',
    verdict:
      'This is the ultrabook we would put in a backpack five days a week. It is not a gaming laptop and it is not a creator workstation. Match the 9340 family, then match the CPU, RAM, and display line on the Dell listing — those three fields change the machine more than the lid photo.',
    relatedSlug: 'lenovo-thinkpad-x1-carbon-gen-12-14',
    paragraphs: [
      'The XPS 13 9340 is Dell’s Intel Core Ultra (Meteor Lake) 13.4-inch clamshell. AISneer does not stock it. You buy from Dell or a partner. Typical street pricing for a Core Ultra 7 155H, 16GB LPDDR5x, and 512GB NVMe configuration starts around $1,199 in the US, but Dell’s CTO page will show other panels and memory sizes under the same marketing name. Do not confuse it with XPS 13 9345 (Snapdragon X Elite) or XPS 13 9350 (Core Ultra Series 2). Treat “XPS 13” without a four-digit chassis code as a different generation.',
      'Start with the panel. Dell sells FHD+ 1920×1200 non-touch, QHD+, and OLED options on this chassis. A matte FHD+ panel is the commuting default; OLED looks better indoors and picks up fingerprints and reflections on a train. Touch vs non-touch is a SKU checkbox, not a software toggle. If the listing photo is OLED and the SKU string says FHD+ non-touch, believe the string.',
      'Memory is soldered LPDDR5x. 16GB is the floor we will recommend for 2026 browser-heavy work. 8GB configurations exist in the wider XPS family and age badly once Teams, a dozen tabs, and a local IDE share the same pool. You cannot add a SODIMM later. Storage is easier: 512GB NVMe is acceptable if you keep photos on a drive; bump the SSD at purchase if you keep VMs.',
      'Ports are the usual ultrabook trade. Expect Thunderbolt/USB-C and a headphone jack, not a full-size HDMI and USB-A row. If your dock or projector is HDMI-only, budget a USB-C hub from our accessory catalog rather than buying a thicker 15-inch chassis you will resent. Battery claims are SKU-dependent; use Dell’s published number for the exact processor and panel, not a generic “all-day” slide.',
      'Compared with the ThinkPad X1 Carbon Gen 12 in this catalog, the XPS 13 is the smaller, more consumer-styled pick. Carbon wins if you need a TrackPoint, a 14-inch 2.8K OLED option, and enterprise WWAN/vPro checkboxes. XPS wins if you want the 13.4-inch bag size and Dell’s consumer store flow. Neither is a substitute for the MacBook Pro 14 if your stack is Final Cut or Xcode.'
    ]
  },
  'lenovo-legion-slim-5-gen-9-16': {
    whoThisIsFor:
      'Buy the Legion Slim 5 Gen 9 16-inch if you want RTX 4070-class gaming in a 16-inch WQXGA chassis and you will verify the MTM on Lenovo PSREF so you do not accidentally pay for a Legion 5 Pro or a lower-TGP GPU.',
    verdict:
      'This is the 16-inch gaming pick we would actually game on at 1440p-class resolutions. It is louder and heavier than an ultrabook. Confirm Ryzen 7 8845HS plus RTX 4070 8GB, 32GB DDR5, and 1TB NVMe on the exact listing — “Legion Slim 5” is a family, not a SKU.',
    relatedSlug: 'asus-rog-zephyrus-g14-2024-ga403',
    paragraphs: [
      'Lenovo’s Legion Slim 5 Gen 9 16-inch AMD configs commonly pair a Ryzen 7 8845HS with an RTX 4070 Laptop GPU. Street pricing for that stack often sits in the $1,500–$1,900 band. AISneer does not hold inventory. You complete the purchase on Lenovo.com or a retailer. “Legion 5 Pro” is a different chassis with different cooling and panel options — do not mix the photos.',
      'GPU wattage (TGP) is not printed on the lid. Two RTX 4070 listings can differ by tens of watts and by a few hundred dollars. Open the spec PDF or PSREF for the MTM. If you mostly play at 1080p high-refresh, an RTX 4060 in the Katana 15 can be enough; the 4070 is the better QHD+ and light Blender/CUDA dual-use card in this catalog.',
      'Memory and storage should not be the upgrade you postpone. 32GB DDR5 is the comfortable gaming-plus-Chrome setup; 16GB is the floor. Many Slim 5 units use SODIMMs, unlike the soldered 32GB on the Zephyrus G14. 1TB NVMe avoids the “OS plus two games” squeeze. Confirm slot count on the HMM if you plan to add a second drive.',
      'The 16-inch WQXGA high-refresh IPS-class panel is why this machine exists. Exact hertz varies by panel SKU. It is not an OLED. If you want a 14-inch 3K OLED in a thinner bag, that is the Zephyrus G14 GA403 in this catalog, at a higher price and with soldered RAM. If you want fps-per-dollar at 15.6-inch FHD 144Hz, that is the Katana 15.',
      'Thermals and noise are the cost of a 4070 in a slim 16-inch shell. Expect fan ramp in demanding titles. If you need a silent office laptop, look at XPS or Carbon instead. Manufacturer warranty and Legion Ultimate Support are SKU and region options — they are not included because you clicked our deal button.'
    ]
  },
  'hp-elitebook-840-14-inch-g11': {
    whoThisIsFor:
      'Buy the HP EliteBook 840 G11 if you need a 14-inch Windows 11 Pro business notebook with Core Ultra options, a serviceable keyboard, and a path to vPro — and you will request the quote with the full part number, not the series name.',
    verdict:
      'This is a manageability laptop, not a gaming laptop. We list a Core Ultra 5 125U, 16GB DDR5, 512GB SSD, WUXGA anti-glare configuration as the typical starting point. Graphics branding, vPro, and touch panels change by SKU. AISneer does not sell it; HP and enterprise resellers do.',
    relatedSlug: 'lenovo-thinkpad-x1-carbon-gen-12-14',
    paragraphs: [
      'EliteBook 840 G11 is HP’s current 14-inch business clamshell in this catalog. Street “from” prices around $1,399 are consumer-adjacent; fleet pricing is a channel quote. Do not treat a shopping-search screenshot as an HP Big Deal. Confirm Windows 11 Pro, not Home, if you need BitLocker, domain join, or Intune out of the box.',
      'Read the rest of the part number. Core Ultra 5 125U is one documented CPU option; other U-series parts exist. Integrated Intel Arc graphics appear on many Core Ultra configs — verify the SKU rather than assuming Arc branding. RAM max and whether you get a SODIMM vs soldered memory also change. Plan 16GB as the floor for 2026 business Chrome-plus-Office days.',
      'The 14-inch WUXGA 1920×1200 IPS anti-glare panel is the comfort default. Touch and higher-resolution options exist. Anti-glare matters more in a conference room with overhead lights than OLED punch does. If you want a 2.8K OLED 120Hz 14-inch panel, the ThinkPad X1 Carbon Gen 12 in this list is the closer match — at a different keyboard and TrackPoint layout.',
      'Ports, WWAN, smart-card, and NFC are CTO checkboxes. A consumer listing that omits WWAN is not “the same EliteBook” as the one your IT policy requires. We link to HP’s product family so you can configure those options. Availability is HP and enterprise resellers, region-dependent.',
      'Compared with XPS 13, EliteBook is the 14-inch Pro-class machine with a more traditional business warranty story. Compared with Carbon, it is often the easier SODIMM path and the HP manageability stack. Neither replaces a Precision workstation if you need ISV-certified RTX Ada GPUs.'
    ]
  },
  'apple-macbook-pro-14-inch-m3-pro-nov-2023': {
    whoThisIsFor:
      'Buy the 14-inch MacBook Pro with M3 Pro if your work is Final Cut, Logic, Xcode, or a color-critical panel, and you can commit to the unified memory size at purchase because it is not upgradable later.',
    verdict:
      'This is the creator reference in the AISneer catalog: 18GB unified memory on the base M3 Pro config, a 14.2-inch Liquid Retina XDR 3024×1964 panel, and ProMotion up to 120Hz, from $1,999 US MSRP when introduced. Higher M3 Pro/Max configs change CPU and GPU core counts. We do not stock MacBooks; Apple and authorized resellers do.',
    relatedSlug: 'dell-xps-13-9340',
    paragraphs: [
      'Specifications follow Apple’s published tech specs for the 14-inch MacBook Pro with M3 Pro introduced November 2023. The 11-core CPU and 14-core GPU describe the base M3 Pro tier; 18-core GPU and higher memory options exist on other configs. “MacBook Pro 14” without M3 Pro in the string can be M3, M4, or Max — those are different machines for battery and GPU.',
      'Unified memory is the buying decision. 18GB is the base we list. If you keep 4K timelines, large Lightroom catalogs, or several Xcode simulators, buy 36GB now. There is no SODIMM later. 512GB SSD is acceptable with iCloud and an external disk; bump storage if you keep raw camera cards local. Apple’s battery and display numbers are tied to the exact chip and panel — read the tech specs sheet for the config in the cart.',
      'The Liquid Retina XDR panel is why this is in the Creator category rather than a generic ultrabook list. 3024×1964 at 14.2 inches with ProMotion is a grading-friendly screen in a bag. If your stack is CUDA plugins or Windows-only Adobe features, stay on an RTX Windows machine (Zephyrus, Legion, Precision). If your stack is Apple silicon native, this is the shorter path.',
      'Ports are MagSafe, HDMI, SDXC, and Thunderbolt on this generation’s 14-inch Pro — better than a two-port ultrabook. You still may want a USB-C hub for older peripherals. Weight and the 14-inch size sit between XPS 13 and a 16-inch MacBook Pro. We do not list the 16-inch here; if you need more thermals, look at Apple’s 16-inch sheet, not this SKU.',
      'Price is US Apple Store MSRP for the 18GB/512GB M3 Pro config when introduced, about $1,999. Education and reseller pricing differ. Affiliate links may earn us a commission; they do not change Apple’s stock. Compared with creator Windows notebooks under $1,500 in our long-form guide, this machine is the “pay for the panel and the memory” pick, not the budget OLED Vivobook pick.'
    ]
  },
  'acer-aspire-5-a515-series': {
    whoThisIsFor:
      'Buy an Acer Aspire 5 A515 if you need a 15.6-inch Windows student laptop under about $800 with 16GB of RAM and a current Core i5 H-class CPU, and you will match the exact A515-xxxxx code so you do not get DDR4 when you wanted LPDDR5.',
    verdict:
      'This is the budget Windows workhorse in the catalog: Intel Core i5-13420H, 16GB RAM, 512GB NVMe, 15.6-inch FHD IPS, Windows 11 Home, typically $499–$750 street depending on the sub-model. It is not a gaming RTX machine and it is not a Chromebook. Confirm RAM type and model code on Acer’s product page.',
    relatedSlug: 'samsung-galaxy-chromebook-plus-15-6',
    paragraphs: [
      'Aspire 5 is a long-running Acer family. The configuration we describe matches multiple current A515 listings: i5-13420H, 16GB, 512GB, FHD IPS. Different A515 codes ship DDR4 vs LPDDR5 and different battery sizes. Those are not the same laptop for longevity. Read the sticker and the Acer spec sheet, not just “Aspire 5” on a marketplace title.',
      'Do not buy 8GB in 2026 unless the school image is locked down. Browser tabs plus Teams plus a PDF reader will swap. 256GB fills with one large course pack and a game; 512GB is the minimum we list. The 15.6-inch FHD IPS panel is the student comfort zone — bigger than a 13-inch ultrabook, worse in a packed lecture hall bag than an XPS 13.',
      'Integrated Intel UHD graphics are enough for IDEs, Office, and light CS coursework. They are not RTX 4060. If you need a discrete GPU for a games course or Blender, look at Katana 15 or Legion Slim 5. If every assignment is Google Docs and Canvas, the Galaxy Chromebook Plus in this catalog is simpler and has an AMOLED panel, with a tighter 8GB/256GB ceiling.',
      'Build and keyboard are the usual $500–$700 Windows compromises. Hinges and speakers vary by year. Warranty is region and seller dependent. We link to current retailer search and Acer’s family page; AISneer does not warehouse units. Availability is major retailers, region-dependent.',
      'This is the machine we point beginners at when the budget is the constraint and Windows software is required. It is not “best overall” — that remains the MacBook Pro 14 for ease of use if the budget allows. For business keyboards and Pro OS, EliteBook and Carbon are the next step up in price and manageability.'
    ]
  },
  'microsoft-surface-laptop-studio-2': {
    whoThisIsFor:
      'Buy Surface Laptop Studio 2 if you will actually fold the 14.4-inch PixelSense Flow panel or use a pen, and you can pay for soldered 32GB LPDDR5x plus an RTX 4060 option. If you never leave clamshell mode, a regular 14-inch ThinkPad or XPS is lighter.',
    verdict:
      'This is the 2-in-1 in the catalog: 13th-gen Core i7-13700H, 32GB LPDDR5x, 1TB SSD, 14.4-inch 2400×1600 120Hz touch, RTX 4060 8GB on higher configs, from about $2,099. Memory is soldered. Studio-class machines are thicker than an ultrabook. Check Microsoft’s spec page for the exact GPU and RAM bundle.',
    relatedSlug: 'apple-macbook-pro-14-inch-m3-pro-nov-2023',
    paragraphs: [
      'Surface Laptop Studio 2 is Microsoft’s convertible “studio” chassis, not a standard clamshell. The pull-forward hinge is the point. If you only type, you are paying for a mechanism you will not use. AISneer does not stock Surfaces; Microsoft Store and partners do. Street pricing varies widely by RAM and storage bundle.',
      'The 14.4-inch PixelSense Flow 2400×1600 120Hz 3:2 touch panel is excellent for sketching and document layout. It is a different aspect ratio than 16:10 XPS or 16:9 gaming panels. Confirm whether the SKU you open includes the Slim Pen or only the chassis. Street photos often show the wrong bundle.',
      'CPU is 13th-gen Core i7-13700H on the configuration we list. GPU can be integrated or RTX 4060 Laptop 8GB GDDR6. The RTX option is why this sits near creator/gaming dual-use rather than a cheap 2-in-1. TGP and whether you get 32GB or 64GB LPDDR5x are soldered choices at purchase. 32GB is the floor if you sketch and keep a browser alive.',
      'Weight and thickness are the real costs. This is not an XPS 13. Battery life depends on the discrete GPU SKU; Microsoft’s published numbers are the ones to trust, not a review of a different RAM bundle. Windows 11 Home vs Pro is SKU-dependent.',
      'Compared with MacBook Pro 14, Studio 2 is the Windows pen-and-touch machine. Compared with X1 Carbon, it is thicker and more GPU-capable. Compared with Zephyrus G14, it is a 3:2 productivity panel rather than a 14-inch 3K OLED gaming panel. Buy it for the hinge and the pen, not because it appeared in a generic “best 2-in-1” slideshow.'
    ]
  },
  'asus-rog-zephyrus-g14-2024-ga403': {
    whoThisIsFor:
      'Buy the 2024 ROG Zephyrus G14 GA403 if you want a 14-inch 3K OLED 120Hz gaming and creator laptop with Ryzen 9 8945HS and RTX 4070, and you accept 32GB of soldered LPDDR5X with no RAM upgrade later.',
    verdict:
      'This is the thin 14-inch OLED gaming pick, from about $2,199 US. Display and GPU TGP differ by GA403xx suffix. It is not a 16-inch Legion and it is not an ultrabook without a discrete GPU. Check the exact model on ASUS or PSREF before you click buy.',
    relatedSlug: 'lenovo-legion-slim-5-gen-9-16',
    paragraphs: [
      'The 2024 Zephyrus G14 uses AMD Ryzen 8000-class HS processors and RTX 40-series laptop GPUs. We list Ryzen 9 8945HS, 32GB LPDDR5X onboard, 1TB PCIe 4.0 NVMe, 14-inch 3K OLED 2880×1800 120Hz, and RTX 4070 8GB. ROG lists other panels. AISneer does not hold stock; ASUS and retailers do.',
      'Soldered 32GB is the memory story. You cannot add SODIMMs. If 32GB is tight for your VMs plus games, look at a Legion Slim 5 with slots, or a Precision workstation quote. 1TB NVMe is the storage floor we like for this price band.',
      'The 14-inch 3K OLED is the reason to pay more than a 16-inch IPS Legion. It looks better in a dark room and worse in sunlit LAN halls. OLED burn-in risk is a manufacturer-warranty topic, not something our deal link changes. If you want a 16-inch WQXGA IPS high-refresh panel instead, that is the Slim 5 Gen 9 in this catalog.',
      'RTX 4070 TGP varies by power profile and SKU. Two GA403 listings are not the same GPU experience. Use ASUS’s spec sheet. For 1080p-only gaming on a budget, Katana 15 with RTX 4060 is the cheaper 15.6-inch alternative. For QHD+ in a 16-inch chassis, Legion Slim 5 is the volume play.',
      'Fans, AniMe Matrix (if present on your SKU), and MUX switch behavior are model-suffix details. Read the GA403xx string. Compared with MacBook Pro 14, this is the Windows CUDA/OLED gaming machine. Compared with XPS 13, it is heavier, hotter, and far more GPU-capable. Affiliate commission does not change ASUS inventory.'
    ]
  },
  'lenovo-thinkpad-x1-carbon-gen-12-14': {
    whoThisIsFor:
      'Buy ThinkPad X1 Carbon Gen 12 if you want a 14-inch business ultrabook with a TrackPoint, Core Ultra options, soldered LPDDR5x, and a 2.8K OLED 120Hz panel option — and you will pick vPro/WWAN on the CTO, not from a random street photo.',
    verdict:
      'This is the Carbon-class 14-inch machine in the catalog: Core Ultra 7 165U, 32GB LPDDR5x-6400, 1TB PCIe 4.0, 14-inch 2.8K OLED 120Hz on the configuration we highlight, from about $1,699. Other panels exist. Lenovo and business partners sell it; we do not.',
    relatedSlug: 'hp-elitebook-840-14-inch-g11',
    paragraphs: [
      'X1 Carbon Gen 12 is documented with Core Ultra U and H series choices, LPDDR5x memory, and multiple 14-inch displays. The OLED 2.8K 120Hz option is the one we feature because it is the panel people actually argue about. IPS WUXGA configs exist and weigh and cost differently. WWAN, vPro, and smart-card are SKU-specific.',
      'Memory is soldered. 32GB is the comfortable 2026 business-plus-browser setup we list. Other sizes are offered. You will not add RAM later. 1TB PCIe 4.0 is the storage we pair with that memory; smaller SSDs appear on cheaper CTOs.',
      'The keyboard and TrackPoint are why people stay in the ThinkPad line. If you do not use a TrackPoint, EliteBook 840 G11 is the HP-shaped alternative with a similar 14-inch business brief. XPS 13 is smaller and more consumer. MacBook Pro 14 is the macOS creator machine, not a Carbon substitute.',
      'Windows 11 Pro is the usual image. Confirm it. Enterprise pricing is not the same as a single Best Buy-style listing. Request the quote with the MTM. We link to Lenovo’s product family so you can configure rather than guessing from a shopping search.',
      'Compared with Precision 5680, Carbon has no ISV RTX Ada GPU — it is not a workstation. Compared with Legion Slim 5, it has no RTX 4070. Buy Carbon for the keyboard, the 14-inch bag, and the manageability options. Buy Legion or Zephyrus for games. Buy Precision when your CAD vendor certifies the GPU.'
    ]
  },
  'msi-katana-15-b13vfk': {
    whoThisIsFor:
      'Buy the MSI Katana 15 B13VFK if you want RTX 4060 at 1080p 144Hz in a 15.6-inch chassis near $999–$1,299, and you will confirm the full model suffix so you do not get a 512GB drive or a different panel than the FHD 144Hz IPS-level sheet.',
    verdict:
      'This is fps-per-dollar, not a Zephyrus. Intel Core i7-13620H, RTX 4060 8GB, 16GB DDR5 (often two SODIMMs), 1TB NVMe on many units, 15.6-inch FHD 144Hz. Louder under load. Confirm the suffix. Retailers globally; we do not warehouse it.',
    relatedSlug: 'lenovo-legion-slim-5-gen-9-16',
    paragraphs: [
      'MSI publishes Katana 15 B13 family specs including i7-13620H and RTX 4060 combinations. B13VFK is one suffix. Other suffixes change storage and panel. QHD panels exist on related part numbers. Believe the full model string. Typical street pricing is about $999–$1,299 depending on region and promo.',
      'RAM is the one upgrade path worth keeping: two SODIMM slots on many units. 16GB is the floor we list; 32GB is a cheap later upgrade if the slots are free. 512GB SSD appears on some SKUs — bump to 1TB if you keep more than one modern game plus the OS.',
      'RTX 4060 is the 1080p/1440p high-refresh sweet spot in our buying guide. You do not need RTX 4070 unless you want QHD+ high-refresh or heavier creative dual-use, which is Legion Slim 5 or Zephyrus G14 money. TGP still varies; check MSI’s spec PDF.',
      'Do not expect OLED color or slim-14 thermals. The Katana is a 15.6-inch gaming plastic chassis that will be audible in a library. If you also edit video on the same machine, look at 32GB configs in the main Gaming category. If you need a silent student laptop, Aspire 5 is the other end of this catalog.',
      'Warranty is retailer and region specific. Compared with Legion Slim 5, you save money and give up the 16-inch WQXGA 4070 setup. Compared with Zephyrus G14, you save a lot of money and give up the 14-inch OLED bag. Affiliate links may earn a commission; they do not add stock to MSI’s warehouse.'
    ]
  },
  'samsung-galaxy-chromebook-plus-15-6': {
    whoThisIsFor:
      'Buy the Galaxy Chromebook Plus 15.6-inch if your entire day is Chrome, Docs, and streaming, you want an AMOLED FHD panel, and you can live with 8GB RAM and 256GB storage. It is the wrong call if a professor ships a Windows VM or you need local CUDA.',
    verdict:
      'Samsung’s Galaxy Chromebook Plus 15.6-inch AMOLED line is the Chromebook pick here. Intel Core 3 branding, 8GB, 256GB, ChromeOS, from about $775 US starting band. CPU, RAM, and the XE… model number differ by country. Verify on samsung.com for your region before you buy.',
    relatedSlug: 'acer-aspire-5-a515-series',
    paragraphs: [
      'A Chromebook is the right call when the work is the browser. Linux dev and Android apps exist on ChromeOS but they are not a substitute for a Windows lab image. If your coursework needs Visual Studio, MATLAB Windows-only toolboxes, or a department VPN client that only ships as MSI, buy the Aspire 5 instead.',
      'The AMOLED FHD 15.6-inch panel is the reason this Chromebook is in the catalog rather than a gray TN panel from 2019. It is a better screen than most $500 Windows 15-inch IPS units for media. It is still 8GB and 256GB on the configuration Samsung often leads with — tight if you also keep Android apps and offline media.',
      'CPU branding on recent Galaxy Chromebook Plus 15.6-inch models is listed as Intel Core 3 on Samsung product pages. That string has changed across refreshes. Always verify the exact XE model for your country. US, UK, and EU SKUs are not interchangeable for support and keyboard layout.',
      '8GB is the ceiling that makes this a light-work machine. If you keep dozens of Classroom tabs plus Android Slack, you will feel it. There is no SODIMM. If you need 16GB, you are usually happier on Aspire 5 Windows. Price from about $775 Samsung USA starting band; sales vary. Samsung and retailers sell it; we do not.',
      'Compared with MacBook Pro 14, this is not a creator machine. Compared with XPS 13, you give up Windows and RAM for OS simplicity and an AMOLED 15.6-inch screen. Keep this URL in the Chromebook hub; do not treat it as a laptop substitute for engineering majors. Affiliate disclosure applies if the outbound link is commissioned.'
    ]
  },
  'dell-precision-5680': {
    whoThisIsFor:
      'Buy a Dell Precision 5680 when your CAD, DCC, or ISV software certifies a professional RTX Ada laptop GPU and you will request a build-to-order quote. Do not buy it as a weekend gaming impulse — Legion and Zephyrus cost less and ship faster for that job.',
    verdict:
      'This is the mobile workstation in the catalog: Core i9-13900H class (up to), up to 64GB LPDDR5, 2TB-class NVMe, RTX 5000 Ada up to 16GB, 16-inch 16:10 panels including UHD+ OLED on premium SKUs, from about $2,899 as a starting quote. Exact TGP, VRAM, and display are configuration-dependent. Dell Precision channels sell it.',
    relatedSlug: 'asus-rog-zephyrus-g14-2024-ga403',
    paragraphs: [
      'Dell’s Precision 5680 tech materials document Core i9 H-class CPUs, ISV certifications, and professional RTX Ada Generation laptop GPUs. “Up to” on CPU, RAM, storage, and GPU is the workstation way of speaking. The machine you receive is the CTO you signed. Read the sheet. Street “from $2,899” is not a checkout total for an RTX 5000 Ada config.',
      'Buy a workstation when the software vendor certifies that GPU and you bill hours against it. SolidWorks, certain Autodesk paths, and medical/DCC ISV lists are the reason this chassis exists. If you just want a fast creator OLED, the MacBook Pro 14 or Zephyrus G14 will feel cheaper and more available.',
      'Memory and storage scale in ways consumer gaming laptops do not. Up to 64GB LPDDR5 and large NVMe capacities (Dell documents up to 8TB across slots on some configs) are quote items. Do not assume the $2,899 banner config has the RTX 5000 Ada 16GB option. Ask for the GPU line item.',
      'The 16-inch 16:10 family includes FHD+, QHD+, and UHD+ / OLED options. Color-critical work should specify the OLED or the high-gamut panel on the quote, not “whatever is in the photo.” Windows 11 Pro for Workstations is SKU-dependent. Availability is Dell Precision sales channels, not a random marketplace seller with a mismatched webcam photo.',
      'Compared with Legion Slim 5, Precision is quieter in ISV apps when the certified driver is the point, and much more expensive. Compared with XPS 13, it is a 16-inch workstation, not a 13-inch ultrabook. We may earn a commission on qualifying purchases; we still do not hold inventory or set Dell’s lead times.'
    ]
  }
};

export function getLaptopGuide(slug: string): LaptopGuide | undefined {
  return LAPTOP_GUIDES[slug];
}
