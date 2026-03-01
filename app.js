// ============================================================
// FlipCalc - Reseller Business Operating System
// ============================================================

// ============ BRAND DATABASE ============
// Tier: S = premium ($$$), A = high demand, B = solid, C = decent, D = skip
const BRAND_DB = {
  clothing: {
    S: {
      brands: ['Gucci','Louis Vuitton','Chanel','Prada','Burberry','Versace','Balenciaga','Givenchy','Fendi','Saint Laurent','Dior','Hermès','Valentino','Alexander McQueen','Bottega Veneta','Off-White','Tom Ford'],
      markup: '5-20x', avgROI: 400, note: 'Authenticate first. Fakes are everywhere. Check stitching, labels, hardware.'
    },
    A: {
      brands: ['North Face','Patagonia','Lululemon','Nike (vintage/rare)','Jordan','Adidas (collab/vintage)','Ralph Lauren (Purple Label)','Carhartt','Arc\'teryx','Supreme','Stüssy','BAPE','Stone Island','CP Company','Barbour','Canada Goose','Moncler'],
      markup: '3-8x', avgROI: 250, note: 'Vintage and rare colorways command highest prices. Check for stains/holes.'
    },
    B: {
      brands: ['Polo Ralph Lauren','Tommy Hilfiger','Calvin Klein','Levi\'s','Nike','Adidas','Champion (vintage)','Nautica','Columbia','Eddie Bauer','J. Crew','Banana Republic','Brooks Brothers','Vineyard Vines','Under Armour','New Balance'],
      markup: '2-5x', avgROI: 150, note: 'Bread and butter. High volume, consistent sales. Focus on good condition.'
    },
    C: {
      brands: ['Gap','Old Navy','H&M','Zara','American Eagle','Hollister','Express','Abercrombie','Target brands','Uniqlo'],
      markup: '1.5-3x', avgROI: 80, note: 'Only if dirt cheap ($1-3) and excellent condition. Volume play.'
    },
    D: {
      brands: ['Walmart brands (George, Time and Tru)','Shein','Fashion Nova','No-name/unbranded','Heavily worn fast fashion'],
      markup: 'Skip', avgROI: 0, note: 'Not worth your time. Leave these on the rack.'
    }
  },
  electronics: {
    S: {
      brands: ['Apple (vintage/rare)','Dyson','Bose','Sony (vintage)','Bang & Olufsen','Sennheiser','Leica'],
      markup: '3-10x', avgROI: 300, note: 'Test everything. Check serial numbers. Verify not iCloud locked (Apple).'
    },
    A: {
      brands: ['Apple (recent)','Samsung','Nintendo','Sony PlayStation','KitchenAid','Vitamix','Sonos','JBL','DJI','GoPro','Beats','Garmin','Canon','Nikon'],
      markup: '2-5x', avgROI: 180, note: 'Test functionality. Include all cables/accessories for max value.'
    },
    B: {
      brands: ['LG','Dell','HP','Lenovo','Logitech','Roku','Amazon devices','Fitbit','Keurig','Instant Pot','Ninja'],
      markup: '1.5-3x', avgROI: 100, note: 'Check model year. Older models drop fast. Accessories sell well separately.'
    },
    C: {
      brands: ['Insignia','onn.','Memorex','Off-brand chargers','Generic accessories'],
      markup: '1-2x', avgROI: 30, note: 'Only if extremely cheap. High return rate. Avoid.'
    }
  },
  shoes: {
    S: {
      brands: ['Jordan (retro/limited)','Nike Dunk (collab)','Yeezy','New Balance (collab/Made in USA)','Asics (collab)','Nike SB (rare)','Air Max (vintage/rare)','Salomon (fashion)','Maison Margiela','Rick Owens','Balenciaga'],
      markup: '3-15x', avgROI: 500, note: 'Condition is EVERYTHING. Check soles, yellowing, creasing. Keep OG box if possible.'
    },
    A: {
      brands: ['Jordan (general)','Nike Air Force 1','Nike Dunk','New Balance 550/2002R','Adidas Samba/Gazelle','Birkenstock','Dr. Martens','Timberland','UGG','Crocs (collab)','On Running','Hoka'],
      markup: '2-5x', avgROI: 200, note: 'Popular models sell fast. Size 9-11 mens / 7-9 womens move quickest.'
    },
    B: {
      brands: ['Nike (general)','Adidas (general)','Converse','Vans','Puma','Reebok','Merrell','Brooks','Asics'],
      markup: '1.5-3x', avgROI: 100, note: 'Must be clean and good condition. Deadstock or near-deadstock preferred.'
    }
  },
  home: {
    S: {
      brands: ['Le Creuset','Staub','All-Clad','Vitamix','KitchenAid (stand mixers)','Dyson','Herman Miller','Eames','West Elm (specific items)','Restoration Hardware','Pyrex (vintage patterns)','Fire-King','Fiestaware (vintage)'],
      markup: '3-10x', avgROI: 350, note: 'Heavy items = expensive shipping. Sell local or factor shipping into price.'
    },
    A: {
      brands: ['Cuisinart','Breville','KitchenAid (accessories)','Calphalon','Lodge (cast iron)','Corningware','Corelle (vintage)','Dansk','Arabia Finland','Iittala','Mikasa','Waterford','Lenox'],
      markup: '2-5x', avgROI: 180, note: 'Kitchen items sell year-round. Holiday season is peak for giftable items.'
    },
    B: {
      brands: ['Pyrex (modern)','Instant Pot','Ninja','Hamilton Beach','Black & Decker','Rubbermaid','OXO','Threshold','Hearth & Hand'],
      markup: '1.5-3x', avgROI: 80, note: 'New-in-box sells best. Open items need to be priced lower.'
    }
  },
  toys_games: {
    S: {
      brands: ['LEGO (retired sets)','Vintage Star Wars','Hot Toys','Sideshow Collectibles','First Edition Pokémon','Vintage TMNT','Vintage Transformers','American Girl (retired)','Vintage Barbie'],
      markup: '3-20x', avgROI: 500, note: 'Sealed/complete = maximum value. Missing pieces kill value. Check eBay sold for exact set/figure.'
    },
    A: {
      brands: ['LEGO (current)','Nintendo games','PlayStation games (rare)','Funko Pop (vaulted)','Magic: The Gathering','Pokémon cards','Yu-Gi-Oh','Board games (OOP)','Ravensburger puzzles'],
      markup: '2-5x', avgROI: 200, note: 'Complete sets only. Check for all pieces. Games must work.'
    },
    B: {
      brands: ['Hasbro','Mattel (current)','Fisher-Price','Nerf','Hot Wheels','Melissa & Doug','VTech'],
      markup: '1.5-3x', avgROI: 80, note: 'Seasonal sellers. Buy in off-season, sell before holidays.'
    }
  },
  books_media: {
    S: {
      brands: ['First editions','Signed copies','Out-of-print textbooks','Vintage cookbooks','Rare vinyl records','Criterion Collection','Sealed VHS (Disney Black Diamond)'],
      markup: '5-50x', avgROI: 800, note: 'Scan ISBN with Amazon Seller app. Check edition and printing number.'
    },
    A: {
      brands: ['Current textbooks','Professional/technical books','Niche non-fiction','Vinyl records (classic rock, jazz)','Complete DVD/Blu-ray series'],
      markup: '2-8x', avgROI: 250, note: 'Textbooks are seasonal (Aug-Sep peak). Check edition - old editions are worthless.'
    },
    B: {
      brands: ['Popular fiction','Self-help bestsellers','Common vinyl','Standard DVDs/Blu-rays'],
      markup: '1-2x', avgROI: 50, note: 'Low margins. Only worth it in bulk lots or if practically free.'
    }
  }
};

// ============ SOURCING GUIDE ============
const SOURCING_GUIDE = {
  goodwill: {
    name: 'Goodwill / Thrift Stores',
    icon: '🏪',
    bestFor: ['Clothing','Shoes','Books','Kitchen','Home decor','Vintage items'],
    tips: [
      'Go early on restock days (ask staff when new items hit the floor)',
      'Color tag sales = 50% off specific tag colors. Learn the rotation.',
      'Check pockets - you\'d be surprised what people leave',
      'Mens section is often overlooked - less competition, good brands',
      'Check the glass case for jewelry, watches, and electronics',
      'Goodwill Outlet (bins) = pay by the pound. Highest margins but time-intensive.',
      'Look at seams and labels, not just the front of clothing',
      'Goodwill often underprices shoes - check soles for wear'
    ],
    avgMarkup: '3-8x on good finds',
    frequency: '2-3 times per week for best selection'
  },
  estatesales: {
    name: 'Estate Sales',
    icon: '🏠',
    bestFor: ['Vintage/antique items','Electronics','Tools','Furniture','Collectibles','Jewelry'],
    tips: [
      'EstateSales.net and EstateSales.org list upcoming sales with photos',
      'Day 1 = best selection, Day 2-3 = 25-50% off. Know which strategy fits your budget.',
      'Bring cash - many estate sales don\'t take cards',
      'Look in garages, basements, and attics - that\'s where the best stuff hides',
      'Ask if they\'ll bundle items for a discount',
      'Estate sale companies often have online auctions too - less competition',
      'Vintage Pyrex, cast iron, and kitchen items are consistently profitable',
      'Check for maker\'s marks on pottery, glass, and furniture'
    ],
    avgMarkup: '4-12x on vintage/antique items',
    frequency: 'Check listings weekly, attend the best ones'
  },
  garagesales: {
    name: 'Garage / Yard Sales',
    icon: '🏡',
    bestFor: ['Everything','Best margins on clothing','Toys','Electronics','Tools'],
    tips: [
      'Use Facebook Marketplace and Craigslist to find sales with photos',
      'Go early for best picks, or late for best deals (\"will you take $X for all of this?\")',
      'Bring small bills. Sellers without change will round down.',
      'Neighborhood-wide sales are goldmines - hit multiple in one trip',
      'Ask \"do you have any [specific items] you\'re selling?\" - sometimes stuff isn\'t out yet',
      'Church and charity sales often have amazing prices',
      'Moving sales = motivated sellers = best deals'
    ],
    avgMarkup: '5-15x',
    frequency: 'Weekend mornings, spring through fall'
  },
  retail_clearance: {
    name: 'Retail Clearance / Arbitrage',
    icon: '🏬',
    bestFor: ['New items','Toys','Electronics','Home goods','Seasonal items'],
    tips: [
      'Target clearance: endcap items with red stickers. Use the Target app to scan prices.',
      'Walmart clearance: check brickseek.com for local inventory + prices',
      'Check Amazon selling price BEFORE buying. Amazon Seller app scans barcodes.',
      'Seasonal items: buy after holidays at 75-90% off, sell next year at full price',
      'Book clearance at Half Price Books, Barnes & Noble bargain section',
      'BOLO (Be On the Lookout) lists on reseller Facebook groups flag profitable clearance items',
      'Kohl\'s clearance + Kohl\'s Cash stacking can get items for 70-80% off'
    ],
    avgMarkup: '2-4x',
    frequency: 'Check clearance sections every shopping trip'
  },
  online_sourcing: {
    name: 'Online Sourcing',
    icon: '💻',
    bestFor: ['Bulk lots','Liquidation','Wholesale','Returns pallets'],
    tips: [
      'GovDeals.gov - government surplus. Vehicles, electronics, office equipment.',
      'Liquidation.com - Amazon/Target/Walmart return pallets. Research manifest before bidding.',
      'Facebook Marketplace - people underpricing items daily. Set alerts for keywords.',
      'Craigslist Free section - people give away valuable items to avoid moving them',
      'OfferUp/Mercari - buy underpriced items, relist at correct price on better platform',
      'AuctionZip.com - find local auctions. Many items go for pennies.',
      'ShopGoodwill.com - Goodwill\'s online auction. Hidden gems in bad photos.'
    ],
    avgMarkup: '2-10x depending on source',
    frequency: 'Daily checking for deals'
  }
};

// ============ LISTING TEMPLATES ============
const LISTING_TEMPLATES = {
  clothing: {
    fields: ['brand','type','size','color','material','condition','measurements','flaws'],
    titleFormula: (d) => {
      const parts = [d.brand, d.type, d.color, d.material, `Size ${d.size}`].filter(Boolean);
      return parts.join(' ');
    },
    descTemplate: (d) => {
      let desc = '';
      desc += `${d.brand || ''} ${d.type || ''}\n\n`;
      if (d.color) desc += `Color: ${d.color}\n`;
      if (d.size) desc += `Size: ${d.size}\n`;
      if (d.material) desc += `Material: ${d.material}\n`;
      if (d.condition) desc += `Condition: ${d.condition}\n`;
      if (d.measurements) desc += `\nMeasurements (laid flat):\n${d.measurements}\n`;
      if (d.flaws) desc += `\nPlease note: ${d.flaws}\n`;
      desc += `\nShips within 1 business day. Smoke-free home.\n`;
      desc += `Check my other listings - bundle for discounts!`;
      return desc;
    },
    platformTips: {
      ebay: 'Use item specifics (brand, size, color, style). Add to the right category. 7-day auction OR Buy It Now with Best Offer.',
      poshmark: 'Share your listing multiple times daily. Poshmark algorithm rewards active sellers. Join Posh Parties in your category.',
      mercari: 'Smart pricing (10% off after 3 days) gets your listing promoted. Ship within 3 days for better ratings.',
      depop: 'Style the item in flat-lay photos. Use hashtags. Young demographic - vintage and streetwear do best.',
      facebook: 'List in multiple local groups. Respond FAST - first responder usually gets the sale.',
      etsy: 'Only for vintage (20+ years old) or handmade. Use all 13 keyword tags. Renew listings to boost visibility.'
    },
    keywords: ['vintage','retro','y2k','streetwear','designer','rare','limited edition','deadstock','NWT','NWOT','like new','excellent condition']
  },
  electronics: {
    fields: ['brand','model','storage','color','condition','includes','tested'],
    titleFormula: (d) => {
      const parts = [d.brand, d.model, d.storage, d.color, d.condition === 'New' ? 'NEW' : ''].filter(Boolean);
      return parts.join(' ');
    },
    descTemplate: (d) => {
      let desc = '';
      desc += `${d.brand || ''} ${d.model || ''}\n\n`;
      if (d.storage) desc += `Storage/Specs: ${d.storage}\n`;
      if (d.color) desc += `Color: ${d.color}\n`;
      if (d.condition) desc += `Condition: ${d.condition}\n`;
      if (d.tested) desc += `\nTested and confirmed: ${d.tested}\n`;
      if (d.includes) desc += `\nIncludes:\n${d.includes}\n`;
      desc += `\nShips securely packaged within 1 business day.`;
      return desc;
    },
    platformTips: {
      ebay: 'List exact model number in title. Use Buy It Now. eBay has strongest electronics buyer base.',
      mercari: 'Electronics sell fast on Mercari. Price slightly below eBay - faster turnover.',
      facebook: 'Best for local pickup on heavy/fragile items. Test in front of buyer if meeting locally.',
    },
    keywords: ['tested working','mint condition','like new','with box','complete','unlocked','factory reset']
  },
  shoes: {
    fields: ['brand','model','size','color','condition','gender','flaws'],
    titleFormula: (d) => {
      const parts = [d.brand, d.model, d.color, d.gender, `Size ${d.size}`].filter(Boolean);
      return parts.join(' ');
    },
    descTemplate: (d) => {
      let desc = '';
      desc += `${d.brand || ''} ${d.model || ''}\n\n`;
      if (d.gender) desc += `Gender: ${d.gender}\n`;
      if (d.size) desc += `Size: ${d.size}\n`;
      if (d.color) desc += `Color/Colorway: ${d.color}\n`;
      if (d.condition) desc += `Condition: ${d.condition}\n`;
      if (d.flaws) desc += `\nNotes: ${d.flaws}\n`;
      desc += `\nAuthentic. Ships double-boxed for protection within 1 business day.`;
      return desc;
    },
    platformTips: {
      ebay: 'Use "New with box/tags" or "Pre-owned" condition. Authenticity Guarantee kicks in at $100+. Include sole photos.',
      poshmark: 'Shoes do well on Poshmark. Posh Authenticate at $100+. Bundle shoe + clothing listings.',
      mercari: 'Include insole measurements for accuracy. Fast shipping boosts visibility.',
      depop: 'Vintage and rare sneakers perform best. Lifestyle photos sell better than product shots.',
    },
    keywords: ['authentic','OG','retro','vintage','deadstock','DS','VNDS','with box','rare','limited','colorway']
  },
  home: {
    fields: ['brand','item','material','dimensions','condition','era','flaws'],
    titleFormula: (d) => {
      const parts = [d.era === 'Vintage' ? 'Vintage' : '', d.brand, d.item, d.material].filter(Boolean);
      return parts.join(' ');
    },
    descTemplate: (d) => {
      let desc = '';
      if (d.era) desc += `Era: ${d.era}\n`;
      desc += `${d.brand || ''} ${d.item || ''}\n\n`;
      if (d.material) desc += `Material: ${d.material}\n`;
      if (d.dimensions) desc += `Dimensions: ${d.dimensions}\n`;
      if (d.condition) desc += `Condition: ${d.condition}\n`;
      if (d.flaws) desc += `\nPlease note: ${d.flaws}\n`;
      desc += `\nCarefully packaged and shipped within 1-2 business days.`;
      return desc;
    },
    platformTips: {
      ebay: 'Glassware, pottery, and vintage kitchen items have strong eBay buyer base. Use Global Shipping for international reach.',
      etsy: 'Must be 20+ years old for vintage category. Handmade items welcome. Use all 13 tags.',
      facebook: 'Best for heavy/fragile items. Local pickup eliminates shipping damage risk.',
    },
    keywords: ['vintage','antique','retro','mid-century','MCM','rare','collectible','handmade','artisan','farmhouse','boho']
  },
  general: {
    fields: ['title','brand','condition','details','includes','flaws'],
    titleFormula: (d) => {
      const parts = [d.brand, d.title, d.condition === 'New' ? 'NEW' : ''].filter(Boolean);
      return parts.join(' ');
    },
    descTemplate: (d) => {
      let desc = '';
      desc += `${d.brand || ''} ${d.title || ''}\n\n`;
      if (d.condition) desc += `Condition: ${d.condition}\n`;
      if (d.details) desc += `\n${d.details}\n`;
      if (d.includes) desc += `\nIncludes: ${d.includes}\n`;
      if (d.flaws) desc += `\nPlease note: ${d.flaws}\n`;
      desc += `\nShips within 1 business day. Thank you for looking!`;
      return desc;
    },
    platformTips: {
      ebay: 'Use the most specific category. Fill in ALL item specifics. Buy It Now + Best Offer is safest.',
      mercari: 'Price competitively. Smart pricing auto-drops price after 3 days.',
      poshmark: 'Share listings often. Engage with other sellers. Offer bundles.',
      facebook: 'Respond fast. Be willing to meet locally. Cash preferred.',
    },
    keywords: ['new','like new','excellent','great condition','complete','with box','rare','hard to find']
  }
};

// ============ PLATFORM FEE STRUCTURES ============
const PLATFORMS = {
  ebay: {
    name: 'eBay', color: '#e53238',
    calc: (price) => price * 0.1325 + 0.30,
    feeDesc: '13.25% + $0.30', audience: 'Largest buyer pool. Best for electronics, collectibles, branded items.'
  },
  mercari: {
    name: 'Mercari', color: '#4dc1e8',
    calc: (price) => price * 0.10 + price * 0.029 + 0.50,
    feeDesc: '10% + 2.9% + $0.50', audience: 'Fast sales. Good for everyday items, clothing, home goods.'
  },
  poshmark: {
    name: 'Poshmark', color: '#7b2c44',
    calc: (price) => price < 15 ? 2.95 : price * 0.20,
    feeDesc: '$2.95 (<$15) / 20%', audience: 'Fashion-focused. Women\'s clothing, shoes, accessories.'
  },
  facebook: {
    name: 'FB Marketplace (local)', color: '#1877f2',
    calc: () => 0,
    feeDesc: 'Free (local)', audience: 'No fees for local. Best for heavy/bulky items. Furniture, appliances.'
  },
  facebook_ship: {
    name: 'FB Marketplace (shipped)', color: '#1877f2',
    calc: (price) => Math.max(price * 0.05, 0.40),
    feeDesc: '5% ($0.40 min)', audience: 'Expanding shipped marketplace. Growing buyer base.', sub: true
  },
  depop: {
    name: 'Depop', color: '#ff2300',
    calc: (price) => price * 0.033 + 0.45,
    feeDesc: '3.3% + $0.45', audience: 'Gen Z. Vintage, streetwear, trendy fashion.'
  },
  etsy: {
    name: 'Etsy', color: '#f1641e',
    calc: (price) => price * 0.065 + price * 0.03 + 0.25 + 0.20,
    feeDesc: '6.5% + 3% + $0.45', audience: 'Vintage (20+ years), handmade, craft supplies.'
  },
  offerup: {
    name: 'OfferUp (local)', color: '#00ab80',
    calc: () => 0,
    feeDesc: 'Free (local)', audience: 'Local sales. Similar to FB Marketplace. Electronics, furniture.'
  },
  offerup_ship: {
    name: 'OfferUp (shipped)', color: '#00ab80',
    calc: (price) => Math.max(price * 0.129, 1.99),
    feeDesc: '12.9% ($1.99 min)', audience: 'Shipped items. Higher fees but growing user base.', sub: true
  }
};

// ============ STATE ============
let inventory = JSON.parse(localStorage.getItem('flipcalc_inventory') || '[]');
let currentFilter = 'all';
let currentListingCategory = 'clothing';

// ============ TAB NAVIGATION ============
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById('tab-' + btn.dataset.tab);
      if (tab) tab.classList.add('active');
      if (btn.dataset.tab === 'dashboard') renderDashboard();
      if (btn.dataset.tab === 'inventory') renderInventory();
      if (btn.dataset.tab === 'source') renderSourcingGuide();
      if (btn.dataset.tab === 'brands') renderBrandGuide();
    });
  });
}

// ============ DEAL ANALYZER ============
function calculate() {
  const cost = parseFloat(document.getElementById('itemCost').value) || 0;
  const sellPrice = parseFloat(document.getElementById('sellPrice').value) || 0;
  const shipCost = parseFloat(document.getElementById('shipCost').value) || 0;
  const taxPaid = parseFloat(document.getElementById('taxPaid').value) || 0;
  const buyerPaysShip = document.getElementById('buyerPaysShip').classList.contains('on');

  if (cost <= 0 && sellPrice <= 0) return;
  const totalCost = cost + taxPaid + (buyerPaysShip ? 0 : shipCost);

  const results = [];
  for (const [key, p] of Object.entries(PLATFORMS)) {
    const fees = p.calc(sellPrice);
    const profit = sellPrice - fees - totalCost;
    const roi = totalCost > 0 ? (profit / totalCost * 100) : 0;
    results.push({ key, name: p.name, feeDesc: p.feeDesc, fees, profit, roi, audience: p.audience, sub: p.sub });
  }
  results.sort((a, b) => b.profit - a.profit);
  const best = results[0].profit;

  // Verdict
  const va = document.getElementById('verdictArea');
  va.classList.remove('hidden');
  let vc, vt, vd;
  if (best > totalCost * 0.5) {
    vc = 'buy'; vt = 'STRONG BUY';
    vd = `$${best.toFixed(2)} profit on ${results[0].name} (${results[0].roi.toFixed(0)}% ROI)`;
  } else if (best > totalCost * 0.2) {
    vc = 'buy'; vt = 'BUY IT';
    vd = `$${best.toFixed(2)} profit on ${results[0].name} (${results[0].roi.toFixed(0)}% ROI)`;
  } else if (best > 0) {
    vc = 'maybe'; vt = 'THIN MARGIN';
    vd = `Only $${best.toFixed(2)} profit on ${results[0].name}. Consider negotiating lower cost.`;
  } else {
    vc = 'skip'; vt = 'PASS';
    vd = `You\'d lose $${Math.abs(best).toFixed(2)} even on the cheapest platform`;
  }
  va.innerHTML = `<div class="verdict ${vc}"><div class="verdict-label">${vt}</div><div class="verdict-detail">${vd}</div></div>`;

  // Platform breakdown
  const ra = document.getElementById('resultsArea');
  ra.classList.remove('hidden');
  document.getElementById('platformResults').innerHTML = results.map((r, i) => {
    const isBest = i === 0 && r.profit > 0;
    const isLoss = r.profit < 0;
    return `
      <div class="platform-row ${isBest ? 'best' : ''} ${isLoss ? 'loss' : ''}">
        <div class="platform-name">
          ${r.name}${isBest ? '<span class="best-badge">BEST</span>' : ''}
          <small>${r.audience || ''}</small>
        </div>
        <div class="platform-fees">-$${r.fees.toFixed(2)}<br><span class="fee-detail">${r.feeDesc}</span></div>
        <div class="platform-profit ${r.profit >= 0 ? 'positive' : 'negative'}">
          ${r.profit >= 0 ? '+' : '-'}$${Math.abs(r.profit).toFixed(2)}
        </div>
        <div class="platform-roi ${r.roi > 20 ? 'good' : r.roi < 0 ? 'bad' : ''}">${r.roi.toFixed(0)}%</div>
      </div>`;
  }).join('');
  document.getElementById('addToInventoryArea').classList.remove('hidden');
}

// Auto-calc
['itemCost', 'sellPrice', 'shipCost', 'taxPaid'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => {
    if (document.getElementById('itemCost').value && document.getElementById('sellPrice').value) calculate();
  });
});

// ============ LISTING WRITER ============
function switchListingCategory(cat) {
  currentListingCategory = cat;
  document.querySelectorAll('.listing-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.listing-cat-btn[data-cat="${cat}"]`)?.classList.add('active');
  renderListingFields();
}

function renderListingFields() {
  const template = LISTING_TEMPLATES[currentListingCategory] || LISTING_TEMPLATES.general;
  const container = document.getElementById('listingFields');
  container.innerHTML = template.fields.map(field => {
    const label = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
    if (field === 'measurements' || field === 'details' || field === 'includes' || field === 'tested') {
      return `<div class="input-group"><label>${label}</label><textarea id="lf_${field}" rows="2" placeholder="Enter ${label.toLowerCase()}..." class="listing-field"></textarea></div>`;
    }
    if (field === 'condition') {
      return `<div class="input-group"><label>${label}</label><select id="lf_${field}" class="listing-field">
        <option value="">Select condition</option>
        <option value="New with tags (NWT)">New with tags</option>
        <option value="New without tags (NWOT)">New without tags</option>
        <option value="Like new / Excellent">Like new</option>
        <option value="Good - minor wear">Good</option>
        <option value="Fair - visible wear">Fair</option>
        <option value="For parts / repair">For parts</option>
      </select></div>`;
    }
    if (field === 'gender') {
      return `<div class="input-group"><label>${label}</label><select id="lf_${field}" class="listing-field">
        <option value="">Select</option><option value="Men's">Men's</option><option value="Women's">Women's</option><option value="Unisex">Unisex</option><option value="Youth">Youth</option>
      </select></div>`;
    }
    return `<div class="input-group"><label>${label}</label><input type="text" id="lf_${field}" placeholder="Enter ${label.toLowerCase()}..." class="listing-field"></div>`;
  }).join('');
}

function generateListing() {
  const template = LISTING_TEMPLATES[currentListingCategory] || LISTING_TEMPLATES.general;
  const data = {};
  template.fields.forEach(f => {
    const el = document.getElementById('lf_' + f);
    data[f] = el ? el.value.trim() : '';
  });

  const title = template.titleFormula(data);
  const desc = template.descTemplate(data);
  const tips = template.platformTips;
  const keywords = template.keywords || [];

  const output = document.getElementById('listingOutput');
  output.classList.remove('hidden');
  output.innerHTML = `
    <div class="card">
      <div class="card-title">Generated Listing Title</div>
      <div class="generated-title" id="genTitle">${escHtml(title)}</div>
      <button class="btn btn-sm btn-outline mt-8" onclick="copyText('genTitle')">Copy Title</button>
    </div>
    <div class="card">
      <div class="card-title">Generated Description</div>
      <pre class="generated-desc" id="genDesc">${escHtml(desc)}</pre>
      <button class="btn btn-sm btn-outline mt-8" onclick="copyText('genDesc')">Copy Description</button>
    </div>
    <div class="card">
      <div class="card-title">Suggested Keywords</div>
      <div class="keyword-tags">${keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}</div>
    </div>
    <div class="card">
      <div class="card-title">Platform-Specific Tips</div>
      ${Object.entries(tips).map(([p, tip]) => `
        <div class="platform-tip">
          <strong>${PLATFORMS[p]?.name || p}</strong>
          <p>${tip}</p>
        </div>
      `).join('')}
    </div>`;
}

function copyText(id) {
  const el = document.getElementById(id);
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.parentElement.querySelector('.btn');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = orig, 1500);
  });
}

// ============ SOURCING GUIDE ============
function renderSourcingGuide() {
  const container = document.getElementById('sourcingContent');
  container.innerHTML = Object.entries(SOURCING_GUIDE).map(([key, source]) => `
    <div class="card source-card">
      <div class="card-title">${source.icon} ${source.name}</div>
      <div class="source-meta">
        <span class="source-markup">Avg markup: <strong>${source.avgMarkup}</strong></span>
        <span class="source-freq">${source.frequency}</span>
      </div>
      <div class="source-best-for">
        <strong>Best for:</strong> ${source.bestFor.join(', ')}
      </div>
      <div class="source-tips">
        ${source.tips.map(t => `<div class="tip-item">→ ${t}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

// ============ BRAND GUIDE ============
let currentBrandCategory = 'clothing';

function switchBrandCategory(cat) {
  currentBrandCategory = cat;
  document.querySelectorAll('.brand-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.brand-cat-btn[data-cat="${cat}"]`)?.classList.add('active');
  renderBrandGuide();
}

function renderBrandGuide() {
  const catData = BRAND_DB[currentBrandCategory];
  if (!catData) return;
  const container = document.getElementById('brandContent');
  const tierColors = { S: 'var(--green)', A: 'var(--blue)', B: 'var(--yellow)', C: 'var(--text2)', D: 'var(--red)' };
  const tierLabels = { S: 'Premium / Jackpot', A: 'High Demand', B: 'Solid Sellers', C: 'Marginal', D: 'Skip These' };

  container.innerHTML = Object.entries(catData).map(([tier, data]) => `
    <div class="card brand-tier-card" style="border-left: 3px solid ${tierColors[tier]}">
      <div class="brand-tier-header">
        <span class="brand-tier-badge" style="background:${tierColors[tier]}">${tier}</span>
        <span class="brand-tier-label">${tierLabels[tier]}</span>
        <span class="brand-tier-markup">Markup: ${data.markup}</span>
      </div>
      <div class="brand-list">${data.brands.map(b => `<span class="brand-chip">${b}</span>`).join('')}</div>
      <div class="brand-note">${data.note}</div>
    </div>
  `).join('');
}

function searchBrands() {
  const query = document.getElementById('brandSearch').value.toLowerCase().trim();
  if (!query) { renderBrandGuide(); return; }

  const results = [];
  for (const [category, tiers] of Object.entries(BRAND_DB)) {
    for (const [tier, data] of Object.entries(tiers)) {
      data.brands.forEach(brand => {
        if (brand.toLowerCase().includes(query)) {
          results.push({ brand, tier, category, markup: data.markup, note: data.note });
        }
      });
    }
  }

  const container = document.getElementById('brandContent');
  if (results.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>No brand found matching "${escHtml(query)}"</p><p class="text-sm text-muted">Try a different spelling or browse by category</p></div>`;
    return;
  }

  const tierColors = { S: 'var(--green)', A: 'var(--blue)', B: 'var(--yellow)', C: 'var(--text2)', D: 'var(--red)' };
  container.innerHTML = results.map(r => `
    <div class="brand-search-result" style="border-left: 3px solid ${tierColors[r.tier]}">
      <div class="flex-between">
        <strong>${escHtml(r.brand)}</strong>
        <span class="brand-tier-badge" style="background:${tierColors[r.tier]}">${r.tier}</span>
      </div>
      <div class="text-sm text-muted">${r.category} · Markup: ${r.markup}</div>
      <div class="text-sm mt-4">${r.note}</div>
    </div>
  `).join('');
}

// ============ INVENTORY ============
function saveInventory() { localStorage.setItem('flipcalc_inventory', JSON.stringify(inventory)); }

function showAddItemModal() {
  document.getElementById('modalEditId').value = '';
  document.getElementById('modalTitle').textContent = 'Add Item';
  document.getElementById('modalSaveBtn').textContent = 'Add to Inventory';
  ['modalItemName','modalItemCost','modalItemPrice','modalSoldPrice','modalItemNotes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('modalItemPlatform').value = '';
  document.getElementById('modalItemStatus').value = 'unlisted';
  document.getElementById('soldPriceGroup').style.display = 'none';
  openModal('addItemModal');
}

function showAddFromCalc() {
  showAddItemModal();
  document.getElementById('modalItemCost').value = document.getElementById('itemCost').value;
  document.getElementById('modalItemPrice').value = document.getElementById('sellPrice').value;
}

function editItem(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  document.getElementById('modalEditId').value = id;
  document.getElementById('modalTitle').textContent = 'Edit Item';
  document.getElementById('modalSaveBtn').textContent = 'Save Changes';
  document.getElementById('modalItemName').value = item.name;
  document.getElementById('modalItemCost').value = item.cost;
  document.getElementById('modalItemPrice').value = item.expectedPrice;
  document.getElementById('modalItemPlatform').value = item.platform || '';
  document.getElementById('modalItemStatus').value = item.status;
  document.getElementById('modalSoldPrice').value = item.soldPrice || '';
  document.getElementById('modalItemNotes').value = item.notes || '';
  document.getElementById('soldPriceGroup').style.display = item.status === 'sold' ? 'block' : 'none';
  openModal('addItemModal');
}

function saveItem() {
  const editId = document.getElementById('modalEditId').value;
  const name = document.getElementById('modalItemName').value.trim();
  const cost = parseFloat(document.getElementById('modalItemCost').value) || 0;
  const expectedPrice = parseFloat(document.getElementById('modalItemPrice').value) || 0;
  const platform = document.getElementById('modalItemPlatform').value;
  const status = document.getElementById('modalItemStatus').value;
  const soldPrice = parseFloat(document.getElementById('modalSoldPrice').value) || 0;
  const notes = document.getElementById('modalItemNotes').value.trim();

  if (!name) { document.getElementById('modalItemName').style.borderColor = 'var(--red)'; return; }

  if (editId) {
    const item = inventory.find(i => i.id === editId);
    if (item) Object.assign(item, { name, cost, expectedPrice, platform, status, soldPrice, notes, updatedAt: Date.now() });
  } else {
    inventory.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name, cost, expectedPrice, platform, status, soldPrice, notes,
      createdAt: Date.now(), updatedAt: Date.now()
    });
  }
  saveInventory();
  closeModal('addItemModal');
  renderInventory();
}

function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  inventory = inventory.filter(i => i.id !== id);
  saveInventory();
  renderInventory();
}

function markSold(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;
  const soldPrice = prompt('What did it sell for?', item.expectedPrice);
  if (soldPrice === null) return;
  const platform = item.platform || prompt('Which platform? (ebay/mercari/poshmark/facebook/depop/etsy/offerup)', 'ebay');
  item.status = 'sold';
  item.soldPrice = parseFloat(soldPrice) || 0;
  if (platform && !item.platform) item.platform = platform;
  item.soldDate = Date.now();
  item.updatedAt = Date.now();
  saveInventory();
  renderInventory();
}

function filterInventory(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderInventory();
}

function renderInventory() {
  const container = document.getElementById('inventoryList');
  let items = [...inventory].sort((a, b) => b.updatedAt - a.updatedAt);
  if (currentFilter !== 'all') items = items.filter(i => i.status === currentFilter);

  if (items.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="icon">&#128230;</div>
      <p>${currentFilter === 'all' ? 'No items yet. Add your first deal!' : 'No ' + currentFilter + ' items.'}</p></div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const pName = item.platform ? (PLATFORMS[item.platform]?.name || item.platform) : 'No platform';
    let profitHtml = '';
    if (item.status === 'sold' && item.soldPrice) {
      const fees = item.platform && PLATFORMS[item.platform] ? PLATFORMS[item.platform].calc(item.soldPrice) : 0;
      const profit = item.soldPrice - fees - item.cost;
      profitHtml = `<span>Profit: <strong class="sale-profit ${profit >= 0 ? 'positive' : 'negative'}">${profit >= 0 ? '+' : '-'}$${Math.abs(profit).toFixed(2)}</strong></span>`;
    } else if (item.expectedPrice && item.cost) {
      profitHtml = `<span>Est: <strong class="text-muted">~$${(item.expectedPrice - item.cost).toFixed(2)}</strong></span>`;
    }
    return `
      <div class="inv-item">
        <div class="inv-item-top">
          <div class="inv-item-name">${escHtml(item.name)}</div>
          <span class="inv-item-status status-${item.status}">${item.status}</span>
        </div>
        <div class="inv-item-meta">
          <span>Cost: <strong>$${item.cost.toFixed(2)}</strong></span>
          ${item.status === 'sold' ? `<span>Sold: <strong>$${(item.soldPrice||0).toFixed(2)}</strong></span>` : `<span>List: <strong>$${item.expectedPrice.toFixed(2)}</strong></span>`}
          <span>${pName}</span>
          ${profitHtml}
        </div>
        ${item.notes ? `<div class="inv-note">${escHtml(item.notes)}</div>` : ''}
        <div class="inv-item-actions">
          <button class="btn btn-sm btn-outline" onclick="editItem('${item.id}')">Edit</button>
          ${item.status !== 'sold' ? `<button class="btn btn-sm btn-success" onclick="markSold('${item.id}')">Mark Sold</button>` : ''}
          <button class="btn btn-sm btn-danger" onclick="deleteItem('${item.id}')">Delete</button>
        </div>
      </div>`;
  }).join('');
}

// ============ DASHBOARD ============
function renderDashboard() {
  const sold = inventory.filter(i => i.status === 'sold');
  const listed = inventory.filter(i => i.status === 'listed');
  const unlisted = inventory.filter(i => i.status === 'unlisted');

  const totalSoldRevenue = sold.reduce((s, i) => s + (i.soldPrice || 0), 0);
  const totalFees = sold.reduce((s, i) => {
    return s + (i.platform && PLATFORMS[i.platform] ? PLATFORMS[i.platform].calc(i.soldPrice || 0) : 0);
  }, 0);
  const totalSoldCost = sold.reduce((s, i) => s + i.cost, 0);
  const totalProfit = totalSoldRevenue - totalFees - totalSoldCost;
  const unsoldCost = [...listed, ...unlisted].reduce((s, i) => s + i.cost, 0);
  const unsoldValue = [...listed, ...unlisted].reduce((s, i) => s + (i.expectedPrice || 0), 0);
  const avgProfitPerItem = sold.length > 0 ? totalProfit / sold.length : 0;
  const avgROI = totalSoldCost > 0 ? (totalProfit / totalSoldCost * 100) : 0;

  document.getElementById('dashStats').innerHTML = `
    <div class="stat-card"><div class="stat-value ${totalProfit >= 0 ? 'green' : 'red'}">${totalProfit >= 0 ? '+' : '-'}$${Math.abs(totalProfit).toFixed(0)}</div><div class="stat-label">Total Profit</div></div>
    <div class="stat-card"><div class="stat-value blue">${sold.length}</div><div class="stat-label">Items Sold</div></div>
    <div class="stat-card"><div class="stat-value yellow">$${unsoldCost.toFixed(0)}</div><div class="stat-label">$ Tied Up</div></div>
    <div class="stat-card"><div class="stat-value">${avgROI.toFixed(0)}%</div><div class="stat-label">Avg ROI</div></div>
    <div class="stat-card"><div class="stat-value green">$${avgProfitPerItem.toFixed(0)}</div><div class="stat-label">Avg Profit/Item</div></div>
    <div class="stat-card"><div class="stat-value">${listed.length}</div><div class="stat-label">Listed</div></div>
    <div class="stat-card"><div class="stat-value">${unlisted.length}</div><div class="stat-label">Unlisted</div></div>
    <div class="stat-card"><div class="stat-value blue">${inventory.length}</div><div class="stat-label">Total Items</div></div>`;

  // Platform breakdown
  const ps = {};
  sold.forEach(item => {
    const p = item.platform || 'other';
    if (!ps[p]) ps[p] = { count: 0, revenue: 0, profit: 0 };
    const fees = PLATFORMS[p] ? PLATFORMS[p].calc(item.soldPrice || 0) : 0;
    ps[p].count++;
    ps[p].revenue += item.soldPrice || 0;
    ps[p].profit += (item.soldPrice || 0) - fees - item.cost;
  });

  document.getElementById('platformBreakdown').innerHTML = Object.entries(ps).map(([k, s]) => `
    <div class="sale-row">
      <div class="sale-info"><strong>${PLATFORMS[k]?.name || k}</strong><small>${s.count} sales · $${s.revenue.toFixed(2)} revenue</small></div>
      <div class="sale-profit ${s.profit >= 0 ? 'positive' : 'negative'}">${s.profit >= 0 ? '+' : '-'}$${Math.abs(s.profit).toFixed(2)}</div>
    </div>`).join('') || '<div class="text-muted text-sm text-center" style="padding:20px">No sales yet</div>';

  // Recent sales
  const recent = sold.sort((a, b) => (b.soldDate || b.updatedAt) - (a.soldDate || a.updatedAt)).slice(0, 10);
  document.getElementById('recentSales').innerHTML = recent.map(item => {
    const fees = item.platform && PLATFORMS[item.platform] ? PLATFORMS[item.platform].calc(item.soldPrice || 0) : 0;
    const profit = (item.soldPrice || 0) - fees - item.cost;
    const date = new Date(item.soldDate || item.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `
      <div class="sale-row">
        <div class="sale-info"><strong>${escHtml(item.name)}</strong><small>${date} · ${PLATFORMS[item.platform]?.name || 'Unknown'}</small></div>
        <div class="sale-profit ${profit >= 0 ? 'positive' : 'negative'}">${profit >= 0 ? '+' : '-'}$${Math.abs(profit).toFixed(2)}</div>
      </div>`;
  }).join('') || '<div class="text-muted text-sm text-center" style="padding:20px">Mark items as sold to see them here</div>';

  // Tax estimate
  const quarterlyIncome = totalProfit / 4;
  const seTax = totalProfit * 0.153;
  const estQuarterlyTax = totalProfit > 0 ? (quarterlyIncome * 0.22 + seTax / 4) : 0;
  document.getElementById('taxEstimate').innerHTML = `
    <div class="tax-grid">
      <div class="tax-item"><span>Net Profit (YTD)</span><strong>$${totalProfit.toFixed(2)}</strong></div>
      <div class="tax-item"><span>Self-Employment Tax (15.3%)</span><strong class="red">$${seTax.toFixed(2)}</strong></div>
      <div class="tax-item"><span>Est. Quarterly Payment (22% bracket)</span><strong class="red">$${estQuarterlyTax.toFixed(2)}</strong></div>
      <div class="tax-note">Set aside ~30-35% of profits for taxes. Quarterly payments due Apr 15, Jun 15, Sep 15, Jan 15.</div>
    </div>`;
}

// ============ SHIPPING ============
function estimateShipping() {
  const weight = parseFloat(document.getElementById('shipWeight').value) || 1;
  const size = document.getElementById('shipSize').value;

  const estimates = [];
  if (weight <= 1 && (size === 'envelope' || size === 'small')) {
    estimates.push({ carrier: 'USPS First Class', price: 3.50 + weight * 1.5, note: 'Cheapest. Under 1 lb only.', best: true });
  }
  let priorityBase = size === 'envelope' ? 8 : size === 'small' ? 9.50 : size === 'medium' ? 14 : size === 'large' ? 19 : 25;
  priorityBase += Math.max(0, weight - 2) * 1.50;
  estimates.push({ carrier: 'USPS Priority', price: priorityBase, note: 'Tracking + $100 insurance included' });
  if (size === 'envelope' || size === 'small') estimates.push({ carrier: 'Flat Rate Envelope', price: 9.65, note: 'Any weight that fits' });
  if (size === 'small' || size === 'medium') estimates.push({ carrier: 'Flat Rate Small Box', price: 10.40, note: '8.6" × 5.4" × 1.7"' });
  if (size === 'medium' || size === 'large') {
    estimates.push({ carrier: 'Flat Rate Medium', price: 16.10, note: 'Two sizes available' });
    estimates.push({ carrier: 'Flat Rate Large', price: 22.45, note: '12.25" × 12.25" × 6"' });
  }
  let upsBase = size === 'small' ? 10.50 : size === 'medium' ? 14 : size === 'large' ? 18 : 24;
  upsBase += Math.max(0, weight - 1) * 1.80;
  estimates.push({ carrier: 'UPS Ground', price: upsBase, note: '3-5 business days' });
  estimates.push({ carrier: 'Pirate Ship (USPS)', price: priorityBase * 0.82, note: '~18% off retail. Free to use.', best: weight > 1 });
  estimates.sort((a, b) => a.price - b.price);

  const c = document.getElementById('shippingResults');
  c.classList.remove('hidden');
  c.innerHTML = `<div class="card"><div class="card-title">Estimates for ${weight} lb ${size} package</div>
    <div class="ship-grid">${estimates.map(e => `
      <div class="ship-result ${e.best ? 'ship-best' : ''}">
        <div class="carrier">${e.carrier}</div>
        <div class="price">$${e.price.toFixed(2)}</div>
        <div class="note">${e.note}</div>
      </div>`).join('')}
    </div>
    <div class="text-sm text-muted mt-12 text-center">Estimates vary by distance. Use Pirate Ship for discounted rates.</div>
  </div>`;
}

// ============ EXPORT / IMPORT ============
function exportData() {
  const data = JSON.stringify({ inventory, version: 2, exportedAt: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `flipcalc-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function showImportModal() {
  document.getElementById('importData').value = '';
  openModal('importModal');
}

function importData() {
  try {
    const data = JSON.parse(document.getElementById('importData').value.trim());
    if (data.inventory && Array.isArray(data.inventory)) {
      if (confirm(`Import ${data.inventory.length} items? This adds to your existing inventory.`)) {
        inventory = [...inventory, ...data.inventory];
        saveInventory();
        renderInventory();
        closeModal('importModal');
      }
    }
  } catch (e) { alert('Invalid JSON data.'); }
}

// ============ MODAL HELPERS ============
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); }));
document.getElementById('modalItemStatus')?.addEventListener('change', e => {
  document.getElementById('soldPriceGroup').style.display = e.target.value === 'sold' ? 'block' : 'none';
});

// ============ UTILITY ============
function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

// ============ INIT ============
initTabs();
renderInventory();
renderListingFields();
