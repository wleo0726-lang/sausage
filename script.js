// 香腸大師：核心遊戲程式
// 存檔使用 localStorage；可透過「成就紀錄」匯出/匯入 JSON 備份。
const CATALOG = [{"id":"original","name":"經典原味","icon":"🌭","rarity":"N","price":0,"unlock":"starter","value":0,"description":"最經典的入門香腸。","pattern":"classic","effect":"smoke","meat":"#b85c32","stripe":"#e9a15c","accent":"#ffb45e","perk":"score","perkValue":3},{"id":"garlic","name":"蒜香香腸","icon":"🧄","rarity":"N","price":100,"unlock":"purchase","value":0,"description":"蒜香濃郁，外層帶有香料顆粒。","pattern":"dots","effect":"spark","meat":"#c58a45","stripe":"#f5d58a","accent":"#ffe49b","perk":"money","perkValue":0.05},{"id":"black","name":"黑胡椒香腸","icon":"⚫","rarity":"N","price":150,"unlock":"purchase","value":0,"description":"黑胡椒顆粒點綴，香氣十足。","pattern":"pepper","effect":"smoke","meat":"#56352c","stripe":"#d5a06b","accent":"#c8b4a2","perk":"burn","perkValue":5},{"id":"sweet","name":"蜜汁香腸","icon":"🍯","rarity":"N","price":180,"unlock":"purchase","value":0,"description":"甜蜜醬汁包覆表面。","pattern":"glaze","effect":"gold","meat":"#bd653d","stripe":"#ffd27b","accent":"#ffcf69","perk":"money","perkValue":0.08},{"id":"corn","name":"玉米香腸","icon":"🌽","rarity":"N","price":200,"unlock":"purchase","value":0,"description":"帶有玉米般的金黃色澤。","pattern":"dots","effect":"spark","meat":"#d69b42","stripe":"#ffe17a","accent":"#ffda62","perk":"score","perkValue":5},{"id":"sesame","name":"芝麻香腸","icon":"⚪","rarity":"N","price":220,"unlock":"purchase","value":0,"description":"白芝麻香氣與細緻表面。","pattern":"seeds","effect":"smoke","meat":"#a85a35","stripe":"#f2d5a0","accent":"#fff0c9","perk":"burn","perkValue":4},{"id":"seaweed","name":"海苔香腸","icon":"🍃","rarity":"N","price":240,"unlock":"purchase","value":0,"description":"清爽海苔風味。","pattern":"waves","effect":"green","meat":"#6c4934","stripe":"#82a66b","accent":"#a4d98b","perk":"score","perkValue":6},{"id":"curry","name":"咖哩香腸","icon":"🍛","rarity":"N","price":260,"unlock":"purchase","value":0,"description":"暖黃色咖哩香料紋路。","pattern":"spice","effect":"fire","meat":"#b87527","stripe":"#f4c45b","accent":"#ffc34f","perk":"score","perkValue":7},{"id":"onion","name":"洋蔥香腸","icon":"🧅","rarity":"N","price":280,"unlock":"purchase","value":0,"description":"洋蔥圈狀紋理。","pattern":"rings","effect":"smoke","meat":"#bd754e","stripe":"#f3c49a","accent":"#ffe0b6","perk":"money","perkValue":0.06},{"id":"smoked","name":"煙燻香腸","icon":"💨","rarity":"N","price":300,"unlock":"purchase","value":0,"description":"深色煙燻烙痕。","pattern":"char","effect":"smoke","meat":"#68402f","stripe":"#b87b55","accent":"#d5a17c","perk":"burn","perkValue":8},{"id":"herb","name":"迷迭香腸","icon":"🌿","rarity":"N","price":320,"unlock":"purchase","value":0,"description":"草本香料紋路。","pattern":"herb","effect":"green","meat":"#987344","stripe":"#b6d28b","accent":"#c9f2a1","perk":"score","perkValue":8},{"id":"chili","name":"微辣香腸","icon":"🌶️","rarity":"N","price":350,"unlock":"purchase","value":0,"description":"微辣紅色香料。","pattern":"flame","effect":"fire","meat":"#a83c2e","stripe":"#ff8b45","accent":"#ff673d","perk":"score","perkValue":9},{"id":"cheese","name":"爆漿起司","icon":"🧀","rarity":"R","price":400,"unlock":"purchase","value":0,"description":"濃郁起司風味，耐熱表現較好。","pattern":"cheese","effect":"cheese","meat":"#d28a38","stripe":"#ffe36b","accent":"#fff18c","perk":"burn","perkValue":12},{"id":"hell","name":"地獄辣椒","icon":"🔥","rarity":"R","price":450,"unlock":"purchase","value":0,"description":"火紅辣椒紋路，得分加成。","pattern":"flame","effect":"fire","meat":"#9c2924","stripe":"#ff4c24","accent":"#ff381c","perk":"score","perkValue":12},{"id":"bacon","name":"培根捲香腸","icon":"🥓","rarity":"R","price":500,"unlock":"purchase","value":0,"description":"培根條紋包覆香腸。","pattern":"stripes","effect":"spark","meat":"#9d4c3d","stripe":"#f6a18b","accent":"#ffad96","perk":"money","perkValue":0.1},{"id":"italian","name":"義式香草","icon":"🇮🇹","rarity":"R","price":550,"unlock":"purchase","value":0,"description":"義式香草清香。","pattern":"herb","effect":"green","meat":"#a75b36","stripe":"#c4db87","accent":"#d7f3a1","perk":"score","perkValue":11},{"id":"kimchi","name":"韓式泡菜","icon":"🥬","rarity":"R","price":600,"unlock":"purchase","value":0,"description":"酸辣泡菜風味。","pattern":"waves","effect":"fire","meat":"#b83b2d","stripe":"#ff9a47","accent":"#ff7043","perk":"score","perkValue":13},{"id":"mexican","name":"墨西哥辣醬","icon":"🌮","rarity":"R","price":650,"unlock":"purchase","value":0,"description":"辛香辣醬風味。","pattern":"spice","effect":"fire","meat":"#87372d","stripe":"#f4a13b","accent":"#ff8b36","perk":"money","perkValue":0.12},{"id":"mustard","name":"黃芥末香腸","icon":"🟡","rarity":"R","price":700,"unlock":"purchase","value":0,"description":"芥末黃亮澤。","pattern":"stripes","effect":"gold","meat":"#b47a30","stripe":"#f5e16b","accent":"#fff09a","perk":"score","perkValue":12},{"id":"teriyaki","name":"日式照燒","icon":"🍱","rarity":"R","price":750,"unlock":"purchase","value":0,"description":"照燒醬汁亮面。","pattern":"glaze","effect":"gold","meat":"#873e25","stripe":"#e8a34e","accent":"#ffc16b","perk":"money","perkValue":0.12},{"id":"truffle","name":"松露香腸","icon":"🍄","rarity":"R","price":800,"unlock":"purchase","value":0,"description":"大地色松露紋理。","pattern":"marble","effect":"gold","meat":"#49352c","stripe":"#d4c4a0","accent":"#e8d9b6","perk":"money","perkValue":0.15},{"id":"tomato","name":"番茄香腸","icon":"🍅","rarity":"R","price":850,"unlock":"purchase","value":0,"description":"番茄紅色點綴。","pattern":"dots","effect":"spark","meat":"#b93d34","stripe":"#ff8b75","accent":"#ff9d83","perk":"score","perkValue":13},{"id":"cajun","name":"卡真香腸","icon":"🌶️","rarity":"R","price":900,"unlock":"purchase","value":0,"description":"濃烈香料與辣味。","pattern":"spice","effect":"fire","meat":"#8e382b","stripe":"#ff9b42","accent":"#ff7c2e","perk":"score","perkValue":15},{"id":"potato","name":"馬鈴薯香腸","icon":"🥔","rarity":"R","price":950,"unlock":"purchase","value":0,"description":"金黃馬鈴薯風味。","pattern":"dots","effect":"smoke","meat":"#c18a4d","stripe":"#f2d3a0","accent":"#ffe1b2","perk":"burn","perkValue":10},{"id":"pineapple","name":"鳳梨香腸","icon":"🍍","rarity":"R","price":1000,"unlock":"purchase","value":0,"description":"酸甜鳳梨風味。","pattern":"rings","effect":"gold","meat":"#bd7136","stripe":"#f5d85b","accent":"#fff07c","perk":"money","perkValue":0.14},{"id":"double_cheese","name":"雙倍起司","icon":"🧀","rarity":"R","price":1100,"unlock":"purchase","value":0,"description":"雙層起司紋路。","pattern":"cheese","effect":"cheese","meat":"#e1a63c","stripe":"#fff18b","accent":"#fff6a8","perk":"burn","perkValue":16},{"id":"golden_garlic","name":"金蒜皇香腸","icon":"🧄","rarity":"SR","price":1300,"unlock":"purchase","value":0,"description":"金蒜紋路與華麗光澤。","pattern":"herb","effect":"gold","meat":"#9b632e","stripe":"#f8d36c","accent":"#ffdf72","perk":"money","perkValue":0.18},{"id":"lava_cheese","name":"熔岩起司","icon":"🌋","rarity":"SR","price":1400,"unlock":"purchase","value":0,"description":"熔岩般的起司裂紋。","pattern":"lava","effect":"lava","meat":"#a63b27","stripe":"#ffe16b","accent":"#ff542d","perk":"burn","perkValue":20},{"id":"black_garlic","name":"黑蒜香腸","icon":"🖤","rarity":"SR","price":1500,"unlock":"purchase","value":0,"description":"黑蒜大理石紋。","pattern":"marble","effect":"smoke","meat":"#382a29","stripe":"#c08b69","accent":"#e5b49a","perk":"score","perkValue":18},{"id":"wasabi","name":"山葵香腸","icon":"🍃","rarity":"SR","price":1600,"unlock":"purchase","value":0,"description":"山葵綠色波紋。","pattern":"waves","effect":"green","meat":"#8c7435","stripe":"#c8e77c","accent":"#d8ff8b","perk":"burn","perkValue":18},{"id":"coconut","name":"椰香香腸","icon":"🥥","rarity":"SR","price":1700,"unlock":"purchase","value":0,"description":"椰絲白色點綴。","pattern":"flakes","effect":"spark","meat":"#a66d42","stripe":"#fff0d0","accent":"#fff5dc","perk":"money","perkValue":0.18},{"id":"blueberry","name":"藍莓香腸","icon":"🫐","rarity":"SR","price":1800,"unlock":"purchase","value":0,"description":"藍紫色果香外觀。","pattern":"dots","effect":"purple","meat":"#563c78","stripe":"#b7a0f4","accent":"#cbbaff","perk":"score","perkValue":20},{"id":"volcano","name":"火山辣腸","icon":"🌋","rarity":"SR","price":1900,"unlock":"purchase","value":0,"description":"火山熔岩般的紅黑紋路。","pattern":"lava","effect":"lava","meat":"#752b25","stripe":"#ff6a30","accent":"#ff3c1e","perk":"score","perkValue":22},{"id":"seafood","name":"海鮮香腸","icon":"🦐","rarity":"SR","price":2000,"unlock":"purchase","value":0,"description":"海鮮粉橘色波紋。","pattern":"waves","effect":"bubble","meat":"#b66e55","stripe":"#f5b6a0","accent":"#ffd0ba","perk":"money","perkValue":0.2},{"id":"wagyu","name":"和牛香腸","icon":"🥩","rarity":"SR","price":2200,"unlock":"purchase","value":0,"description":"和牛油花大理石紋。","pattern":"marble","effect":"gold","meat":"#9d3e37","stripe":"#f3a29a","accent":"#ffc0b8","perk":"score","perkValue":22},{"id":"gold_cheese","name":"黃金乳酪","icon":"🏅","rarity":"SR","price":2300,"unlock":"purchase","value":0,"description":"黃金乳酪光澤。","pattern":"cheese","effect":"gold","meat":"#b98728","stripe":"#ffe77c","accent":"#fff2a1","perk":"burn","perkValue":24},{"id":"rainbow","name":"彩虹夢幻腸","icon":"🌈","rarity":"SR","price":0,"unlock":"collection","value":6,"description":"收集六種香腸即可解鎖。","pattern":"rainbow","effect":"rainbow","meat":"#a44d6f","stripe":"#a8e8ff","accent":"#ff9df2","perk":"score","perkValue":25},{"id":"honey_king","name":"蜂蜜國王腸","icon":"🍯","rarity":"SR","price":0,"unlock":"sss_streak","value":2,"description":"連續兩次 SSS 評價解鎖。","pattern":"glaze","effect":"gold","meat":"#9c572a","stripe":"#ffda65","accent":"#fff09a","perk":"money","perkValue":0.25},{"id":"emperor","name":"黃金帝王腸","icon":"👑","rarity":"SSR","price":0,"unlock":"lifetime_earned","value":3000,"description":"累積收入達 3000 金幣解鎖。","pattern":"royal","effect":"royal","meat":"#9b5c22","stripe":"#ffe28b","accent":"#fff0a8","perk":"money","perkValue":0.3},{"id":"dragon","name":"烈焰龍腸","icon":"🐉","rarity":"SSR","price":2500,"unlock":"purchase","value":0,"description":"龍鱗紋路與烈焰特效。","pattern":"scales","effect":"dragon","meat":"#792d25","stripe":"#ff6b36","accent":"#ff4327","perk":"score","perkValue":30},{"id":"diamond","name":"鑽石香腸","icon":"💎","rarity":"SSR","price":2800,"unlock":"purchase","value":0,"description":"晶透鑽石光澤。","pattern":"crystal","effect":"crystal","meat":"#668d9c","stripe":"#d7f7ff","accent":"#ffffff","perk":"burn","perkValue":30},{"id":"king","name":"夜市之王","icon":"🏆","rarity":"SSR","price":3000,"unlock":"purchase","value":0,"description":"王者金色紋章。","pattern":"royal","effect":"royal","meat":"#8d4a28","stripe":"#f4c46b","accent":"#fff0a0","perk":"money","perkValue":0.3},{"id":"rainbow_star","name":"七彩星辰腸","icon":"🌟","rarity":"SSR","price":3200,"unlock":"purchase","value":0,"description":"星辰彩虹外觀。","pattern":"rainbow","effect":"rainbow","meat":"#7954a5","stripe":"#ffcf7a","accent":"#f4baff","perk":"score","perkValue":32},{"id":"meteor","name":"隕石香腸","icon":"☄️","rarity":"SSR","price":0,"unlock":"total_cooked","value":50,"description":"完成 50 次料理解鎖。","pattern":"meteor","effect":"meteor","meat":"#51464a","stripe":"#ff9c55","accent":"#ff6c3c","perk":"score","perkValue":35},{"id":"perfect","name":"完美大師腸","icon":"🎖️","rarity":"SSR","price":0,"unlock":"perfect","value":10,"description":"累積 10 次完美料理解鎖。","pattern":"diamond","effect":"crystal","meat":"#b58c43","stripe":"#fff1a3","accent":"#fff8c9","perk":"score","perkValue":40},{"id":"thunder","name":"雷霆香腸","icon":"⚡","rarity":"SSR","price":3500,"unlock":"purchase","value":0,"description":"雷電紋路與閃光特效。","pattern":"lightning","effect":"thunder","meat":"#5c557d","stripe":"#c6c5ff","accent":"#e5e2ff","perk":"score","perkValue":38},{"id":"phoenix","name":"鳳凰香腸","icon":"🦅","rarity":"SSR","price":3800,"unlock":"purchase","value":0,"description":"鳳凰羽焰紋路。","pattern":"feather","effect":"phoenix","meat":"#a53b24","stripe":"#ffc05c","accent":"#ff6b39","perk":"money","perkValue":0.35},{"id":"crown","name":"至尊皇冠腸","icon":"👑","rarity":"SSR","price":4000,"unlock":"purchase","value":0,"description":"至尊皇冠金色紋章。","pattern":"royal","effect":"royal","meat":"#7d392d","stripe":"#ffe28a","accent":"#fff0ad","perk":"money","perkValue":0.4},{"id":"cosmic","name":"宇宙香腸","icon":"🌌","rarity":"UR","price":0,"unlock":"collection","value":30,"description":"收集 30 種香腸解鎖。","pattern":"cosmic","effect":"cosmic","meat":"#35264f","stripe":"#a88cff","accent":"#e0c5ff","perk":"score","perkValue":45},{"id":"supernova","name":"超新星香腸","icon":"💥","rarity":"UR","price":0,"unlock":"sss_streak","value":3,"description":"連續三次 SSS 評價解鎖。","pattern":"star","effect":"supernova","meat":"#8c3b57","stripe":"#ffb0d2","accent":"#fff0a8","perk":"score","perkValue":50},{"id":"infinity","name":"無限香腸","icon":"♾️","rarity":"UR","price":0,"unlock":"total_cooked","value":100,"description":"完成 100 次料理解鎖。","pattern":"infinity","effect":"crystal","meat":"#315f83","stripe":"#8fe8ff","accent":"#d4fbff","perk":"burn","perkValue":45},{"id":"god","name":"神之香腸","icon":"✨","rarity":"UR","price":0,"unlock":"perfect","value":30,"description":"累積 30 次完美料理解鎖。","pattern":"holy","effect":"holy","meat":"#d5a947","stripe":"#fff4bd","accent":"#ffffff","perk":"money","perkValue":0.5},{"id":"nebula","name":"星雲香腸","icon":"🪐","rarity":"UR","price":0,"unlock":"lifetime_earned","value":10000,"description":"累積收入達 10000 金幣解鎖。","pattern":"cosmic","effect":"cosmic","meat":"#513d80","stripe":"#d1a7ff","accent":"#e9caff","perk":"score","perkValue":55},{"id":"ultimate","name":"終極神話腸","icon":"🔱","rarity":"UR","price":0,"unlock":"collection","value":45,"description":"收集 45 種香腸解鎖。","pattern":"rainbow","effect":"supernova","meat":"#6d345e","stripe":"#ffb1e8","accent":"#ffe1fa","perk":"score","perkValue":60},{"id":"legend_zero","name":"零號傳說","icon":"0️⃣","rarity":"UR","price":0,"unlock":"sss_streak","value":5,"description":"連續五次 SSS 評價解鎖。","pattern":"zero","effect":"thunder","meat":"#252b3f","stripe":"#9ceaff","accent":"#ffffff","perk":"money","perkValue":0.6},{"id":"ghost","name":"幽靈香腸","icon":"👻","rarity":"HIDDEN","price":0,"unlock":"sss_streak","value":3,"description":"連續三次 SSS 評價解鎖。","pattern":"ghost","effect":"ghost","meat":"#a4a9bd","stripe":"#f2f5ff","accent":"#ffffff","perk":"burn","perkValue":60},{"id":"black_hole","name":"黑洞香腸","icon":"🌑","rarity":"HIDDEN","price":0,"unlock":"total_cooked","value":200,"description":"完成 200 次料理解鎖。","pattern":"cosmic","effect":"blackhole","meat":"#171622","stripe":"#8066ad","accent":"#c2a4ff","perk":"score","perkValue":70},{"id":"rainbow_ghost","name":"幻彩幽靈腸","icon":"🌈","rarity":"HIDDEN","price":0,"unlock":"collection","value":50,"description":"收集 50 種香腸解鎖。","pattern":"rainbow","effect":"rainbow","meat":"#8e6bb4","stripe":"#a8ffff","accent":"#ffb6f4","perk":"money","perkValue":0.7},{"id":"golden_ghost","name":"黃金幽靈腸","icon":"👻","rarity":"HIDDEN","price":0,"unlock":"lifetime_earned","value":20000,"description":"累積收入達 20000 金幣解鎖。","pattern":"royal","effect":"holy","meat":"#9b782e","stripe":"#fff0a0","accent":"#fff8c9","perk":"money","perkValue":0.8},{"id":"secret_666","name":"666 秘密香腸","icon":"😈","rarity":"HIDDEN","price":0,"unlock":"perfect","value":66,"description":"累積 66 次完美料理解鎖。","pattern":"demon","effect":"demon","meat":"#4b1725","stripe":"#ff4b68","accent":"#ff1744","perk":"score","perkValue":66},{"id":"developer","name":"開發者神秘腸","icon":"🕵️","rarity":"HIDDEN","price":0,"unlock":"total_cooked","value":500,"description":"完成 500 次料理解鎖。","pattern":"matrix","effect":"matrix","meat":"#202b3c","stripe":"#9fffe0","accent":"#ffffff","perk":"score","perkValue":100}];

const $ = id => document.getElementById(id);
const RARITY = {N:"普通",R:"稀有",SR:"史詩",SSR:"傳說",UR:"神話",HIDDEN:"隱藏"};
const HEAT_RATE = {low:0.72,medium:1,high:1.42};
const HEAT_NAME = {low:"小火",medium:"中火",high:"大火"};
const SAUCE = {none:{name:"原味",bonus:0},honey:{name:"蜂蜜",bonus:3},spicy:{name:"辣醬",bonus:2},garlic:{name:"蒜香",bonus:2},cheese:{name:"起司",bonus:4}};
const UPGRADES = [
 {id:"burner",name:"穩定火爐",icon:"🔥",desc:"提升火候控制穩定度，熟度增加更平順。",base:180,max:10},
 {id:"tongs",name:"專業烤夾",icon:"🥢",desc:"翻面技巧加成，翻面後更容易拿到好分數。",base:220,max:10},
 {id:"cash",name:"招牌定價",icon:"🪙",desc:"每次料理獲得更多金幣。",base:300,max:10},
 {id:"mastery",name:"料理筆記",icon:"📒",desc:"每次料理獲得更多香腸熟練經驗。",base:350,max:10},
 {id:"crit",name:"幸運炭火",icon:"✨",desc:"提高料理暴擊發生機率。",base:500,max:10}
];
const ACHIEVEMENTS = [
 {id:"first",icon:"🌭",name:"初次開烤",desc:"完成第一次料理",test:s=>s.total>=1},
 {id:"ten",icon:"🔥",name:"熟手上路",desc:"完成 10 次料理",test:s=>s.total>=10},
 {id:"fifty",icon:"🏆",name:"烤台常客",desc:"完成 50 次料理",test:s=>s.total>=50},
 {id:"hundred",icon:"💯",name:"百腸達人",desc:"完成 100 次料理",test:s=>s.total>=100},
 {id:"collector",icon:"📚",name:"收藏新手",desc:"解鎖 10 種香腸",test:s=>s.unlocked.length>=10},
 {id:"collector30",icon:"🎖️",name:"收藏家",desc:"解鎖 30 種香腸",test:s=>s.unlocked.length>=30},
 {id:"sss",icon:"⭐",name:"完美出餐",desc:"獲得一次 SSS 評價",test:s=>s.bestScore>=90},
 {id:"crit5",icon:"💥",name:"暴擊體質",desc:"觸發 5 次料理暴擊",test:s=>s.crits>=5},
 {id:"million",icon:"💰",name:"小小富翁",desc:"累積收入達 5,000 金幣",test:s=>s.lifetimeEarned>=5000}
];

const SAVE_KEY = "sausageMasterSave_v2";
function freshSave(){return {version:3,profile:{nickname:"星際新手",avatar:"👨‍🍳",playerId:"SAU-"+String(Math.floor(100000+Math.random()*900000)),title:"新手料理師"},settings:{music:45,effects:70,language:"zh-Hant"},money:0,total:0,bestScore:0,lifetimeEarned:0,unlocked:["original"],counts:{},mastery:{},upgrades:{burner:0,tongs:0,cash:0,mastery:0,crit:0},sssStreak:0,perfectCount:0,crits:0,achievements:[],lastPlayed:null};}
function loadSave(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw) return freshSave();
    const data=JSON.parse(raw);
    if(!data || typeof data!=="object") return freshSave();
    const s={...freshSave(),...data};
    s.profile={...freshSave().profile,...(s.profile||{})};s.settings={...freshSave().settings,...(s.settings||{})};
    s.money=Math.max(0,Number(s.money)||0);s.total=Math.max(0,Number(s.total)||0);
    s.unlocked=Array.isArray(s.unlocked)?s.unlocked.filter(id=>CATALOG.some(x=>x.id===id)):["original"];
    if(!s.unlocked.includes("original"))s.unlocked.unshift("original");
    s.mastery=s.mastery&&typeof s.mastery==="object"?s.mastery:{};
    s.counts=s.counts&&typeof s.counts==="object"?s.counts:{};
    s.upgrades={...freshSave().upgrades,...(s.upgrades||{})};
    s.achievements=Array.isArray(s.achievements)?s.achievements:[];
    return s;
  }catch(e){console.warn("讀取存檔失敗",e);return freshSave();}
}
let save=loadSave(), cooking=false, cooked=0, cookSeconds=0, flipped=false, heat="medium", sauce="none", timer=null, toastTimer=null, activeFilter="ALL", soundOn=true;
let lastTick=0;

function persist(){
  try{save.lastPlayed=new Date().toISOString();localStorage.setItem(SAVE_KEY,JSON.stringify(save));$("saveStatus").textContent="● 已自動存檔";}
  catch(e){$("saveStatus").textContent="● 存檔失敗";console.warn("存檔失敗",e);}
}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
function fmt(n){return Math.floor(n).toLocaleString("zh-TW");}
function itemById(id){return CATALOG.find(x=>x.id===id)||CATALOG[0];}
function masteryInfo(id){const xp=Math.max(0,Number(save.mastery[id])||0);const level=Math.min(10,1+Math.floor(xp/100));const into=level>=10?100:xp%100;return {xp,level,into,next:level>=10?100:100-into};}
function perkText(item){if(item.perk==="score")return `料理分數 +${item.perkValue}`;if(item.perk==="money")return `金幣收益 +${Math.round(item.perkValue*100)}%`;return `烤焦容忍度 +${item.perkValue}%`;}
function conditionMet(item){
 switch(item.unlock){
  case "starter":return true;case "purchase":return false;case "total_cooked":return save.total>=item.value;
  case "sss_streak":return save.sssStreak>=item.value;case "collection":return save.unlocked.length>=item.value;
  case "lifetime_earned":return save.lifetimeEarned>=item.value;case "perfect":return save.perfectCount>=item.value;
  default:return false;
 }
}
function checkUnlocks(){
 let changed=true, newly=[];
 while(changed){changed=false;for(const item of CATALOG){if(!save.unlocked.includes(item.id)&&item.unlock!=="purchase"&&conditionMet(item)){save.unlocked.push(item.id);newly.push(item);changed=true;}}}
 if(newly.length){toast(`🎉 解鎖 ${newly.length} 種新香腸！`);newly.slice(0,3).forEach(x=>console.info("Unlocked:",x.name));}
 persist();return newly;
}
function renderWallet(){
 $("money").textContent=fmt(save.money);$("upgradeMoney").textContent=fmt(save.money);
 $("totalCooked").textContent=fmt(save.total);$("bestScore").textContent=fmt(save.bestScore);
 $("collectionSummary").textContent=`${save.unlocked.length}/61`;$("collectionTabCount").textContent=`${save.unlocked.length}/61`;
}
function renderSelect(){
 const sel=$("sausageSelect"),old=sel.value;
 sel.innerHTML="";
 CATALOG.filter(x=>save.unlocked.includes(x.id)).forEach(item=>{
  const op=document.createElement("option");op.value=item.id;op.textContent=`${item.icon} ${item.name} · ${RARITY[item.rarity]}`;sel.appendChild(op);
 });
 sel.value=save.unlocked.includes(old)?old:"original";
 renderSelected();
}
function applySkin(id){
 const item=itemById(id),el=$("sausage"),scene=$("grillScene");
 el.dataset.pattern=item.pattern;el.style.setProperty("--meat",item.meat);el.style.setProperty("--stripe",item.stripe);el.style.setProperty("--accent",item.accent);
 el.style.setProperty("--char","0.12");$("sausageTopping").textContent=item.icon;
 scene.dataset.effect=item.effect;scene.style.setProperty("--accent",item.accent);
 const fx=$("specialEffect");fx.classList.remove("active");void fx.offsetWidth;fx.classList.add("active");
}
function renderSelected(){
 const id=$("sausageSelect").value||"original",item=itemById(id),m=masteryInfo(id);
 $("previewIcon").textContent=item.icon;$("selectedName").textContent=item.name;
 $("selectedRarity").textContent=`${item.rarity} · ${RARITY[item.rarity]}`;
 $("selectedDescription").textContent=item.description;$("selectedPerk").textContent=perkText(item);
 $("masteryLevel").textContent=`Lv.${m.level} · ${fmt(m.xp)} XP`;
 $("masteryBar").style.width=`${m.into}%`;
 $("masteryNext").textContent=m.level>=10?"已達最高熟練度！":`距離 Lv.${m.level+1} 還需要 ${fmt(m.next)} XP`;
 applySkin(id);
}
function renderCollection(){
 const grid=$("collectionGrid");grid.innerHTML="";
 const list=CATALOG.filter(x=>activeFilter==="ALL"||x.rarity===activeFilter);
 list.forEach(item=>{
  const unlocked=save.unlocked.includes(item.id),m=masteryInfo(item.id),card=document.createElement("article");
  card.className=`sausage-card ${unlocked?"unlocked":"locked"}`;
  const top=document.createElement("div");top.className="card-top";
  const icon=document.createElement("span");icon.className="card-icon";icon.textContent=unlocked?item.icon:(item.rarity==="HIDDEN"?"❔":"🔒");
  const rarity=document.createElement("span");rarity.className="rarity";rarity.textContent=item.rarity;rarity.style.color=({N:"#b8c0ca",R:"#61b7ff",SR:"#c08bff",SSR:"#ffc05c",UR:"#ff75df",HIDDEN:"#ff85a8"})[item.rarity];
  top.append(icon,rarity);card.append(top);
  const title=document.createElement("h3");title.textContent=unlocked?item.name:(item.rarity==="HIDDEN"?"神秘香腸 ???":"尚未解鎖");card.append(title);
  const desc=document.createElement("p");desc.textContent=unlocked?`${perkText(item)} · 熟練 Lv.${m.level}`:unlockText(item);card.append(desc);
  if(unlocked){const bar=document.createElement("div");bar.className="card-xp";const fill=document.createElement("span");fill.style.width=`${m.level>=10?100:m.into}%`;bar.append(fill);card.append(bar);}
  grid.append(card);
 });
 $("collectionCount").textContent=`${save.unlocked.length} / 61`;
 $("collectionBar").style.width=`${save.unlocked.length/61*100}%`;
}
function unlockText(item){
 const map={total_cooked:`完成 ${item.value} 次料理`,sss_streak:`連續 ${item.value} 次 SSS`,collection:`收集 ${item.value} 種香腸`,lifetime_earned:`累積收入 ${fmt(item.value)} 金幣`,perfect:`累積 ${item.value} 次完美料理`,purchase:`購買價格 ${fmt(item.price)} 金幣`};
 return map[item.unlock]||"特殊條件解鎖";
}
function renderUpgrades(){
 const grid=$("upgradeGrid");grid.innerHTML="";
 UPGRADES.forEach(up=>{
  const lv=Number(save.upgrades[up.id])||0,cost=Math.floor(up.base*Math.pow(1.72,lv)),card=document.createElement("article");
  card.className="panel upgrade-card";
  const icon=document.createElement("div");icon.className="upgrade-icon";icon.textContent=up.icon;
  const content=document.createElement("div");content.style.flex="1";
  const h=document.createElement("h3");h.textContent=`${up.name} · Lv.${lv}/${up.max}`;
  const p=document.createElement("p");p.textContent=up.desc;
  const meta=document.createElement("div");meta.className="upgrade-meta";
  const price=document.createElement("small");price.textContent=lv>=up.max?"已達最高等級":`🪙 ${fmt(cost)}`;
  const btn=document.createElement("button");btn.className="btn btn-secondary";btn.textContent=lv>=up.max?"MAX":"升級";
  btn.disabled=lv>=up.max||save.money<cost;
  btn.addEventListener("click",()=>buyUpgrade(up.id));
  meta.append(price,btn);content.append(h,p,meta);card.append(icon,content);grid.append(card);
 });
}
function buyUpgrade(id){
 const up=UPGRADES.find(x=>x.id===id);if(!up)return;const lv=save.upgrades[id]||0,cost=Math.floor(up.base*Math.pow(1.72,lv));
 if(lv>=up.max||save.money<cost)return toast("金幣不足！");
 save.money-=cost;save.upgrades[id]=lv+1;persist();renderAll();toast(`${up.name} 升級至 Lv.${lv+1}！`);
}
function renderRecords(){
 const stats=[["總料理數",fmt(save.total)],["累積收入",fmt(save.lifetimeEarned)],["最高分",save.bestScore],["料理暴擊",save.crits]];
 $("recordStats").innerHTML=stats.map(x=>`<div class="record-stat"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
 const grid=$("achievementGrid");grid.innerHTML="";
 ACHIEVEMENTS.forEach(a=>{const done=save.achievements.includes(a.id)||a.test(save),el=document.createElement("div");el.className=`achievement ${done?"done":""}`;el.innerHTML=`<span class="achievement-icon">${a.icon}</span><div><strong>${a.name}${done?" ✓":""}</strong><small>${a.desc}</small></div>`;grid.append(el);if(done&&!save.achievements.includes(a.id))save.achievements.push(a.id);});
 persist();
}
function renderAll(){renderWallet();renderSelect();renderCollection();renderUpgrades();renderRecords();if($("profileNickname"))renderProfile();}
function setHeat(level){if(cooking)return;heat=level;document.querySelectorAll(".heat-btn").forEach(b=>b.classList.toggle("selected",b.dataset.heat===level));$("heatReadout").textContent=HEAT_NAME[level];$("heatLevelLabel").textContent=HEAT_NAME[level];}
function setSauce(id){if(cooking)return;sauce=id;document.querySelectorAll(".sauce-option").forEach(b=>b.classList.toggle("selected",b.dataset.sauce===id));}
function startCooking(){
 if(cooking)return;
 cooking=true;cooked=0;cookSeconds=0;flipped=false;lastTick=performance.now();
 $("resultPanel").classList.add("hidden");$("gameStatus").textContent="料理中";$("gameStatus").classList.add("running");
 $("startBtn").disabled=true;$("flipBtn").disabled=false;$("serveBtn").disabled=false;
 $("gameMessage").textContent="注意火候！熟度進入理想區間時翻面。";
 $("sausage").classList.remove("burned","flipped");$("sausage").style.setProperty("--char","0.12");
 timer=setInterval(tick,100);
}
function tick(){
 if(!cooking)return;
 const id=$("sausageSelect").value,item=itemById(id);
 const dt=.1,rate=HEAT_RATE[heat],stability=1-(save.upgrades.burner||0)*.025;
 cookSeconds+=dt;cooked+=dt*8.2*rate*stability;
 const burnLimit=100+(item.perk==="burn"?item.perkValue:0);
 const pct=Math.min(100,cooked/burnLimit*100);
 $("donenessBar").style.width=`${pct}%`;
 $("donenessText").textContent=cooked<45?"偏生":cooked<70?"接近理想":cooked<=90?"理想熟度":cooked<burnLimit?"過熟":"烤焦";
 $("cookTime").textContent=`${cookSeconds.toFixed(1)} 秒`;
 $("sausage").style.setProperty("--char",String(Math.min(.9,Math.max(.12,(cooked-50)/65))));
 if(cooked>=burnLimit){cooked=burnLimit;$("sausage").classList.add("burned");$("gameMessage").textContent="⚠️ 香腸烤焦了！可以完成料理結算。";$("flipBtn").disabled=true;}
 if(cooked>burnLimit+1){finishCooking();}
}
function flipSausage(){
 if(!cooking||flipped)return;flipped=true;$("sausage").classList.remove("flipped");void $("sausage").offsetWidth;$("sausage").classList.add("flipped");
 $("flipBtn").disabled=true;$("gameMessage").textContent="漂亮翻面！繼續控制火候。";
}
function serve(){if(!cooking)return;finishCooking();}
function finishCooking(){
 if(!cooking)return;cooking=false;clearInterval(timer);timer=null;
 const id=$("sausageSelect").value,item=itemById(id),sauceBonus=SAUCE[sauce].bonus;
 const burnLimit=100+(item.perk==="burn"?item.perkValue:0);
 const doneness=cooked/burnLimit*100;
 let score=Math.max(0,Math.round(100-Math.abs(doneness-82)*1.75+(flipped?8:0)+sauceBonus+(save.upgrades.tongs||0)*1.2+(item.perk==="score"?item.perkValue:0)));
 if(!flipped)score-=12;if(doneness>96)score-=20;if(doneness<35)score-=18;score=Math.max(0,Math.min(100,score));
 let grade=score>=90?"SSS":score>=85?"SS":score>=78?"S":score>=65?"A":score>=45?"B":"C";
 let crit=null,critChance=Math.min(.42,.06+(save.upgrades.crit||0)*.025+masteryInfo(id).level*.008);
 const roll=Math.random();
 if(score>=70&&roll<critChance)crit="gold";
 else if(score>=85&&roll<critChance+.045)crit="flame";
 else if(score>=95&&roll<critChance+.055)crit="perfect";
 let baseMoney=Math.max(3,Math.floor(score/2)+sauceBonus);
 let multiplier=1+(save.upgrades.cash||0)*.08+(item.perk==="money"?item.perkValue:0);
 if(crit==="gold")multiplier*=2;if(crit==="perfect")multiplier*=3;
 const earned=Math.floor(baseMoney*multiplier);
 let xp=Math.floor(18+score*.55+(score>=90?15:0))*(1+(save.upgrades.mastery||0)*.12);
 if(crit==="perfect")xp*=2;
 xp=Math.floor(xp);
 const oldLevel=masteryInfo(id).level;
 save.money+=earned;save.lifetimeEarned+=earned;save.total++;save.bestScore=Math.max(save.bestScore,score);
 save.counts[id]=(save.counts[id]||0)+1;save.mastery[id]=(save.mastery[id]||0)+xp;
 if(score>=90)save.sssStreak++;else save.sssStreak=0;
 if(score>=95)save.perfectCount++;
 if(crit){save.crits++;toast(crit==="gold"?"💰 黃金料理暴擊！金幣 x2":crit==="flame"?"🔥 烈焰料理暴擊！":"🌟 完美料理暴擊！金幣 x3、熟練經驗 x2");}
 const newItems=checkUnlocks();
 const newLevel=masteryInfo(id).level;
 ACHIEVEMENTS.forEach(a=>{if(a.test(save)&&!save.achievements.includes(a.id)){save.achievements.push(a.id);toast(`🏅 成就解鎖：${a.name}`);}});
 persist();renderAll();
 $("gameStatus").textContent="已完成";$("gameStatus").classList.remove("running");
 $("startBtn").disabled=false;$("flipBtn").disabled=true;$("serveBtn").disabled=true;
 $("resultPanel").classList.remove("hidden");
 $("resultGrade").textContent=grade;$("resultGrade").style.background=grade==="SSS"||grade==="SS"?"linear-gradient(135deg,#fff0a0,#ff9e45)":"linear-gradient(135deg,#d7c2ff,#8d6de0)";
 $("resultScore").textContent=score;$("resultMoney").textContent=`+${fmt(earned)} 🪙`;$("resultXP").textContent=`+${fmt(xp)} XP`;
 $("resultCrit").textContent=crit==="gold"?"黃金 ×2":crit==="flame"?"烈焰 +分":crit==="perfect"?"完美 ×3":"無";
 let detail=`${item.name} · ${SAUCE[sauce].name} · 熟度 ${Math.round(doneness)}% · ${flipped?"已翻面":"未翻面"}`;
 if(newLevel>oldLevel)detail+=` · 熟練度升至 Lv.${newLevel}！`;
 if(newItems.length)detail+=` · 解鎖 ${newItems.map(x=>x.name).join("、")}`;
 $("resultDetail").textContent=detail;
 $("gameMessage").textContent="料理完成！可以再烤一條，繼續累積金幣。";
}
function resetCookingUI(){
 $("donenessBar").style.width="0%";$("donenessText").textContent="尚未開始";$("cookTime").textContent="0.0 秒";
 $("sausage").classList.remove("burned","flipped");$("sausage").style.setProperty("--char","0.12");
}
function switchTab(tab){
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${tab}`));
}
function exportSave(){
 const blob=new Blob([JSON.stringify(save,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="sausage-master-save.json";a.click();URL.revokeObjectURL(url);toast("存檔備份已匯出！");
}
function importSave(file){
 const reader=new FileReader();reader.onload=()=>{try{
  const data=JSON.parse(reader.result);if(!data||typeof data!=="object"||!Array.isArray(data.unlocked))throw new Error("格式不正確");
  const allowed=new Set(CATALOG.map(x=>x.id));data.unlocked=data.unlocked.filter(x=>allowed.has(x));save={...freshSave(),...data};if(!save.unlocked.includes("original"))save.unlocked.unshift("original");
  persist();renderAll();toast("存檔匯入成功！");
 }catch(e){toast("匯入失敗：存檔格式不正確");}};reader.readAsText(file);
}
function resetProgress(){
 if(!confirm("確定要重置所有遊戲進度嗎？此操作無法復原，建議先匯出備份。"))return;
 save=freshSave();persist();renderAll();resetCookingUI();toast("遊戲進度已重置。");
}
function playerLevel(){return Math.max(1,1+Math.floor(save.total/5));}
function playerXP(){return (save.total%5)*20;}
function randomNickname(){const a=["星際","熔岩","銀河","炭火","超新星","流星","夜市","黃金"];const b=["烤腸師","料理王","翻面達人","香腸獵人","火候大師","炭烤騎士"];return a[Math.floor(Math.random()*a.length)]+b[Math.floor(Math.random()*b.length)]+String(Math.floor(10+Math.random()*90));}
function renderProfile(){
 const p=save.profile||{};const lv=playerLevel(),xp=playerXP();
 ["profileNickname"].forEach(id=>$(id).textContent=p.nickname||"星際新手");
 $("menuNickname").textContent=p.nickname||"星際新手";$("menuLevel").textContent=`LV.${lv} · ${p.title||"新手料理師"}`;
 $("profileAvatar").textContent=p.avatar||"👨‍🍳";$("menuAvatar").textContent=p.avatar||"👨‍🍳";
 $("playerId").textContent=p.playerId||"SAU-000001";$("profileTitle").textContent=p.title||"新手料理師";
 $("profileLevel").textContent=`LV.${lv}`;$("profileXP").textContent=`${xp} / 100 XP`;
 $("profileXPBar").style.width=`${xp}%`;$("profileCooked").textContent=fmt(save.total);$("profileBest").textContent=save.bestScore;
 $("profileCollection").textContent=`${save.unlocked.length} / ${CATALOG.length}`;
 $("nicknameInput").value=p.nickname||"";
 const fav=$("favoriteSausages");fav.innerHTML="";
 const picks=save.unlocked.slice(-5).reverse();picks.forEach(id=>{const item=itemById(id),el=document.createElement("div");el.className="favorite-sausage";el.innerHTML=`<span>${item.icon}</span><b>${item.name}</b>`;fav.append(el);});
}
function openTab(tab){$("mainMenu").classList.add("closed");switchTab(tab);if(tab==="profile")renderProfile();}
function initMenu(){
 document.querySelectorAll("[data-open-tab]").forEach(b=>b.addEventListener("click",()=>openTab(b.dataset.openTab)));
 $("menuProfileBtn").addEventListener("click",()=>openTab("profile"));$("backMenuBtn").addEventListener("click",()=>{$("mainMenu").classList.remove("closed");});
 $("openSettingsBtn").addEventListener("click",()=>{$("settingsModal").classList.remove("hidden");});$("closeSettingsBtn").addEventListener("click",()=>{$("settingsModal").classList.add("hidden");});
 $("loginBtn").addEventListener("click",()=>{$("loginModal").classList.remove("hidden");});$("closeLoginBtn").addEventListener("click",()=>{$("loginModal").classList.add("hidden");});
 $("saveNicknameBtn").addEventListener("click",()=>{const name=$("nicknameInput").value.trim();if(name.length<2)return toast("暱稱至少需要 2 個字元。");if(name.length>16)return toast("暱稱最多 16 個字元。");save.profile.nickname=name;persist();renderProfile();toast("暱稱已更新！");});
 $("randomNicknameBtn").addEventListener("click",()=>{$("nicknameInput").value=randomNickname();});
 $("copyPlayerId").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(save.profile.playerId);toast("玩家 ID 已複製！");}catch(e){toast("目前瀏覽器不允許複製，請手動選取 ID。");}});
 ["musicVolume","effectVolume","languageSelect"].forEach(id=>$(id).addEventListener("change",()=>{save.settings.music=Number($("musicVolume").value);save.settings.effects=Number($("effectVolume").value);save.settings.language=$("languageSelect").value;persist();}));
 $("friendSearchBtn").addEventListener("click",()=>{$("friendSearchResult").textContent="玩家搜尋會在 Supabase 雲端資料庫設定完成後啟用，目前尚未連線。";});
 $("emailLoginBtn").addEventListener("click",()=>toast("尚未設定 Supabase，登入功能目前未啟用。"));$("googleLoginBtn").addEventListener("click",()=>toast("尚未設定 Google OAuth，登入功能目前未啟用。"));
 renderProfile();$("musicVolume").value=save.settings.music;$("effectVolume").value=save.settings.effects;$("languageSelect").value=save.settings.language;
}

function init(){
 renderAll();setHeat("medium");setSauce("none");applySkin("original");initMenu();
 $("sausageSelect").addEventListener("change",renderSelected);
 document.querySelectorAll(".heat-btn").forEach(b=>b.addEventListener("click",()=>setHeat(b.dataset.heat)));
 document.querySelectorAll(".sauce-option").forEach(b=>b.addEventListener("click",()=>setSauce(b.dataset.sauce)));
 document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderCollection();}));
 $("startBtn").addEventListener("click",startCooking);$("flipBtn").addEventListener("click",flipSausage);$("serveBtn").addEventListener("click",serve);
 $("nextCookBtn").addEventListener("click",()=>{switchTab("cook");resetCookingUI();$("resultPanel").classList.add("hidden");$("gameStatus").textContent="待命中";$("gameMessage").textContent="選擇香腸後，按下「開始烤製」！";});
 $("exportSaveBtn").addEventListener("click",exportSave);$("importSaveInput").addEventListener("change",e=>{if(e.target.files[0])importSave(e.target.files[0]);e.target.value="";});
 $("resetSaveBtn").addEventListener("click",resetProgress);
 $("soundToggle").addEventListener("click",()=>{soundOn=!soundOn;$("soundToggle").textContent=soundOn?"🔊":"🔇";toast(soundOn?"音效提示已開啟":"音效提示已關閉");});
 document.addEventListener("visibilitychange",persist);window.addEventListener("pagehide",persist);window.addEventListener("beforeunload",persist);
 checkUnlocks();renderAll();
}
init();

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(err=>console.warn("Service worker registration failed",err)));}
