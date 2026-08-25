const item = (id, name, description, visualAsset, capacity) => ({ id, name, description, visualAsset, capacity });
const categories = [
  { id:"animals", label:"Animals", icon:"🐠", title:"Choose your inhabitants", items:[item("fish","Fish","Community-friendly","fish"),item("betta","Betta","Flowing fins","betta"),item("neon-tetra","Neon tetra","Bright schooling fish","neon-tetra"),item("cardinal-tetra","Cardinal tetra","Red-blue schooling fish","cardinal-tetra"),item("guppy","Guppy","Colorful livebearer","guppy"),item("endler-guppy","Endler guppy","Small livebearer","endler-guppy"),item("mollies","Mollies","Peaceful livebearer","mollies"),item("platy","Platy","Hardy community fish","platy"),item("swordtail","Swordtail","Distinctive tail","swordtail"),item("zebra-danio","Zebra danio","Active swimmer","zebra-danio"),item("harlequin-rasbora","Harlequin rasbora","Copper schooling fish","harlequin-rasbora"),item("corydoras","Corydoras","Bottom-dwelling catfish","corydoras"),item("angelfish","Angelfish","Tall-bodied centerpiece","angelfish"),item("discus","Discus","Round tropical fish","discus"),item("oscar","Oscar","Large cichlid","oscar"),item("goldfish","Goldfish","Classic freshwater fish","goldfish"),item("cherry-barb","Cherry barb","Red schooling fish","cherry-barb"),item("honey-gourami","Honey gourami","Gentle labyrinth fish","honey-gourami"),item("dwarf-gourami","Dwarf gourami","Colorful centerpiece","dwarf-gourami"),item("rainbowfish","Rainbowfish","Iridescent swimmer","rainbowfish"),item("axolotl-wild","Wild type axolotl","Dark mottled axolotl","axolotl-wild"),item("axolotl-leucistic","Leucistic axolotl","Pale pink axolotl","axolotl-leucistic"),item("axolotl-golden","Golden albino axolotl","Golden axolotl","axolotl-golden"),item("axolotl-melanoid","Melanoid axolotl","Black axolotl","axolotl-melanoid"),item("axolotl-gfp","GFP axolotl","Fluorescent axolotl","axolotl-gfp"),item("red-eared-slider","Red-eared slider","Aquatic turtle","red-eared-slider"),item("painted-turtle","Painted turtle","Colorful aquatic turtle","painted-turtle"),item("musk-turtle","Musk turtle","Compact aquatic turtle","musk-turtle"),item("cherry-shrimp","Cherry shrimp","Red dwarf shrimp","cherry-shrimp"),item("blue-dream-shrimp","Blue dream shrimp","Blue dwarf shrimp","blue-dream-shrimp"),item("amano-shrimp","Amano shrimp","Striped algae grazer","amano-shrimp"),item("ghost-shrimp","Ghost shrimp","Transparent shrimp","ghost-shrimp"),item("bamboo-shrimp","Bamboo shrimp","Fan-feeding shrimp","bamboo-shrimp"),item("nerite-snail","Nerite snail","Patterned algae grazer","nerite-snail"),item("mystery-snail","Mystery snail","Large colorful snail","mystery-snail"),item("ramshorn-snail","Ramshorn snail","Coiled shell snail","ramshorn-snail"),item("malaysian-trumpet-snail","Malaysian trumpet snail","Burrowing snail","malaysian-trumpet-snail"),item("african-dwarf-frog","African dwarf frog","Small aquatic frog","african-dwarf-frog"),item("crayfish","Crayfish","Freshwater crustacean","crayfish")] },
  { id:"plants", label:"Plants", icon:"🌿", title:"Set the scene", items:[item("java-fern","Java fern","Low light","java-fern"),item("anubias","Anubias","Hardy favorite","anubias"),item("amazon-sword","Amazon sword","Statement plant","amazon-sword"),item("java-moss","Java moss","Soft texture","java-moss"),item("christmas-moss","Christmas moss","Branching texture","christmas-moss"),item("dwarf-hairgrass","Dwarf hairgrass","Carpet plant","dwarf-hairgrass"),item("vallisneria","Vallisneria","Tall ribbon leaves","vallisneria"),item("hornwort","Hornwort","Feathery stems","hornwort"),item("water-sprite","Water sprite","Lacy floating leaves","water-sprite"),item("water-wisteria","Water wisteria","Full, cut leaves","water-wisteria"),item("cryptocoryne","Cryptocoryne","Rosette-shaped","cryptocoryne"),item("anacharis","Anacharis","Fast-growing stems","anacharis"),item("red-root-floater","Red root floater","Surface rosettes","red-root-floater"),item("amazon-frogbit","Amazon frogbit","Broad floating leaves","amazon-frogbit"),item("duckweed","Duckweed","Tiny surface cover","duckweed"),item("bucephalandra","Bucephalandra","Compact rhizome","bucephalandra"),item("marimo-moss-ball","Marimo moss ball","Rounded moss","marimo-moss-ball")] },
  { id:"substrate", label:"Substrate", icon:"🪨", title:"Choose your foundation", items:[item("sand","Sand","Soft and natural","sand"),item("gravel","Gravel","Classic texture","gravel"),item("aquasoil","Aquasoil","Plant-focused","aquasoil"),item("bare-bottom","Bare bottom","Minimal setup","bare-bottom"),item("other-substrate","Other substrate","Add your own","other-substrate")] },
  { id:"decor", label:"Decor", icon:"🪵", title:"Add a little character", items:[item("driftwood","Driftwood","Natural structure","driftwood"),item("rocks","Rocks","Shape and balance","rocks"),item("caves","Caves","A place to explore","caves"),item("ornaments","Ornaments","Make it yours","ornaments"),item("other-decor","Other decor","Add your own","other-decor")] },
  { id:"lighting", label:"Lighting", icon:"💡", title:"Set the mood", items:[item("basic-light","Basic light","A clear view","basic-light"),item("plant-light","Plant light","For growing things","plant-light"),item("adjustable-led","Adjustable LED","Full control","adjustable-led"),item("other-lighting","Other lighting","Add your own","other-lighting")] },
  { id:"tank", label:"Tank", icon:"🪟", title:"Define your tank", items:[item("tank-shape","Tank shape","Rectangle, cube...","tank-shape"),item("tank-style","Tank style","A style of its own","tank-style"),item("rimless","Rimmed / rimless","The finishing detail","rimless"),item("freshwater","Freshwater","Your water type","freshwater"),item("saltwater","Saltwater","Your water type","saltwater")] },
  { id:"size", label:"Size", icon:"📏", title:"Find the right volume", items:[item("size-5","5 gallon","Small footprint","size-5","5 gal"),item("size-10","10 gallon","A flexible classic","size-10","10 gal"),item("size-20","20 gallon","Room to grow","size-20","20 gal"),item("size-29","29 gallon","A little more space","size-29","29 gal"),item("size-40","40 gallon breeder","A balanced home","size-40","40 gal"),item("size-55","55 gallon","Room for a community","size-55","55 gal"),item("size-75","75 gallon","Make a statement","size-75","75 gal"),item("size-100","100 gallon","The big dream","size-100","100 gal"),item("size-custom","Custom","Set your dimensions","size-custom","Custom capacity")] },
  { id:"filtration", label:"Filtration", icon:"💧", title:"Keep water clear", items:[item("sponge-filter","Sponge filter","Gentle and reliable","sponge-filter"),item("hang-on-back","Hang-on-back","Easy maintenance","hang-on-back"),item("canister-filter","Canister filter","Powerful circulation","canister-filter"),item("internal-filter","Internal filter","Compact and quiet","internal-filter"),item("other-filtration","Other filtration","Add your own","other-filtration")] },
  { id:"temperature", label:"Temperature", icon:"🌡️", title:"Dial in the climate", items:[item("heater","Heater","Keep it cozy","heater"),item("chiller","Chiller","For cooler water","chiller"),item("thermometer","Thermometer","Know your numbers","thermometer")] }
];
categories.forEach((category) => category.items.forEach((catalogItem) => { catalogItem.category = category.id; }));
const animalSubcategories = [
  { id:"fish", label:"Fish", icon:"🐟" }, { id:"invertebrates", label:"Invertebrates", icon:"🦐" },
  { id:"axolotls", label:"Axolotls", icon:"🦎" }, { id:"turtles", label:"Turtles", icon:"🐢" },
  { id:"amphibians", label:"Amphibians", icon:"🐸" }, { id:"crustaceans", label:"Crustaceans", icon:"🦀" },
  { id:"saltwater", label:"Saltwater", icon:"🌊" }
];
const animalGroups = { fish:["fish","betta","neon-tetra","cardinal-tetra","guppy","endler-guppy","mollies","platy","swordtail","zebra-danio","harlequin-rasbora","corydoras","angelfish","discus","oscar","goldfish","cherry-barb","honey-gourami","dwarf-gourami","rainbowfish"], axolotls:["axolotl-wild","axolotl-leucistic","axolotl-golden","axolotl-melanoid","axolotl-gfp"], turtles:["red-eared-slider","painted-turtle","musk-turtle"], invertebrates:["nerite-snail","mystery-snail","ramshorn-snail","malaysian-trumpet-snail","cherry-shrimp","blue-dream-shrimp","amano-shrimp","ghost-shrimp","bamboo-shrimp"], amphibians:["african-dwarf-frog"], crustaceans:["crayfish"], saltwater:[] };
const animalCategory = categories.find((category) => category.id === "animals");
animalCategory.items.push(item("clownfish","Clownfish","Hardy saltwater fish","clownfish"), item("blue-tang","Blue tang","Active saltwater fish","blue-tang"), item("cleaner-shrimp","Cleaner shrimp","Saltwater invertebrate","cleaner-shrimp"));
animalCategory.items.slice(-3).forEach((catalogItem) => { catalogItem.category = "animals"; });
animalGroups.saltwater.push("clownfish", "blue-tang", "cleaner-shrimp");
const animalSubcategoryFor = (id) => Object.entries(animalGroups).find(([, ids]) => ids.includes(id))?.[0] || "other";
animalCategory.items.forEach((catalogItem) => { catalogItem.subcategory = animalSubcategoryFor(catalogItem.id); catalogItem.catalogIcon = catalogItem.subcategory === "fish" ? "◒" : catalogItem.subcategory === "invertebrates" ? "◎" : catalogItem.subcategory === "axolotls" ? "✣" : catalogItem.subcategory === "turtles" ? "▰" : catalogItem.subcategory === "crustaceans" ? "≈" : "◉"; catalogItem.previewAsset = `assets/preview/${catalogItem.visualAsset}.webp`; catalogItem.previewType = "css-fallback"; catalogItem.positionLayer = "animals"; });
categories.filter((category) => category.id !== "animals").forEach((category) => category.items.forEach((catalogItem) => { catalogItem.catalogIcon = category.icon; catalogItem.previewAsset = `assets/preview/${catalogItem.visualAsset}.webp`; catalogItem.previewType = "css-fallback"; catalogItem.positionLayer = category.id === "plants" ? "background-plants" : category.id === "decor" ? "midground-decor" : category.id === "size" ? "tank" : "equipment"; }));
const tankDimensions = {
  "size-5": { gallons:5, length:16, width:8, height:10, ratio:1.6, visualWidth:"58%", visualHeight:"285px" },
  "size-10": { gallons:10, length:20, width:10, height:12, ratio:1.67, visualWidth:"68%", visualHeight:"300px" },
  "size-20": { gallons:20, length:30, width:12, height:12, ratio:2.5, visualWidth:"78%", visualHeight:"325px" },
  "size-29": { gallons:29, length:30, width:12, height:18, ratio:1.67, visualWidth:"78%", visualHeight:"345px" },
  "size-40": { gallons:40, length:36, width:18, height:16, ratio:2.25, visualWidth:"90%", visualHeight:"365px" },
  "size-55": { gallons:55, length:48, width:13, height:21, ratio:2.29, visualWidth:"94%", visualHeight:"385px" },
  "size-75": { gallons:75, length:48, width:18, height:21, ratio:2.29, visualWidth:"96%", visualHeight:"415px" },
  "size-100": { gallons:100, length:60, width:18, height:21, ratio:2.86, visualWidth:"100%", visualHeight:"440px" },
  "size-custom": { gallons:null, length:null, width:null, height:null, ratio:2, visualWidth:"82%", visualHeight:"335px" }
};
categories.find((category) => category.id === "size").items.forEach((catalogItem) => { catalogItem.dimensions = tankDimensions[catalogItem.visualAsset]; });
const positionableCategories = new Set(["decor", "filtration", "temperature", "plants", "animals"]);
const previewFamilies = { betta:"fish", guppy:"fish", "endler-guppy":"fish", "neon-tetra":"fish", "cardinal-tetra":"fish", mollies:"fish", platy:"fish", swordtail:"fish", "zebra-danio":"fish", "harlequin-rasbora":"fish", corydoras:"corydoras", angelfish:"angelfish", discus:"discus", oscar:"oscar", goldfish:"goldfish", "cherry-barb":"cherry-barb", "honey-gourami":"honey-gourami", "dwarf-gourami":"dwarf-gourami", rainbowfish:"rainbowfish", "axolotl-wild":"axolotl", "axolotl-leucistic":"axolotl", "axolotl-golden":"axolotl", "axolotl-melanoid":"axolotl", "axolotl-gfp":"axolotl", "red-eared-slider":"turtle", "painted-turtle":"turtle", "musk-turtle":"turtle", "cherry-shrimp":"shrimp", "blue-dream-shrimp":"shrimp", "amano-shrimp":"shrimp", "ghost-shrimp":"shrimp", "bamboo-shrimp":"shrimp", "nerite-snail":"snail", "mystery-snail":"snail", "ramshorn-snail":"snail", "malaysian-trumpet-snail":"snail" };
const previewClasses = (asset) => `aquatic-animal animal-${previewFamilies[asset] || asset} animal-${asset}`;
const state = { active:"animals", animalSubcategory:null, selected:[], positions:{}, anchored:new Set(), selectedInstance:null }; const $ = (id) => document.getElementById(id);
function renderNav() { $("category-nav").innerHTML=categories.map((category)=>`<button class="category-tab ${category.id===state.active?"active":""}" data-category="${category.id}" type="button"><span class="tab-icon">${category.icon}</span><span class="tab-label">${category.label}</span></button>`).join(""); document.querySelectorAll(".category-tab").forEach((tab)=>tab.addEventListener("click",()=>{state.active=tab.dataset.category;render();})); }
function renderCatalog() { const category=categories.find((item)=>item.id===state.active); $("category-kicker").textContent=category.label; $("category-title").textContent=category.title; $("item-count").textContent=`${category.items.length} options`; $("catalog-grid").innerHTML=category.items.map(([name,description,symbol])=>{const selected=state.selected.some((item)=>item.name===name);return `<button class="catalog-card ${selected?"selected":""}" data-name="${name}" type="button" aria-pressed="${selected}"><span class="card-symbol">${symbol}</span><span class="card-name">${name}</span><span class="card-type">${description}</span></button>`;}).join(""); document.querySelectorAll(".catalog-card").forEach((card)=>card.addEventListener("click",()=>toggleItem(card.dataset.name))); }
function toggleItem(name) { const category=categories.find((item)=>item.id===state.active); const item=category.items.find(([itemName])=>itemName===name); const index=state.selected.findIndex((selected)=>selected.name===name); if(index>=0) state.selected.splice(index,1); else { if(category.id==="size") state.selected=state.selected.filter((selected)=>selected.category!=="size"); state.selected.push({name,symbol:item[2],category:category.id,capacity:item[3]}); } render(); }
function renderSelected() { const total=state.selected.length; $("selected-count").textContent=`${total} item${total===1?"":"s"}`; $("setup-name").textContent=total?`${total} component${total===1?"":"s"} selected`:"Untitled setup"; $("setup-subtitle").textContent=total?"Your aquarium is taking shape":"A blank canvas for your next idea"; $("selected-list").innerHTML=total?state.selected.map((item)=>`<span class="selected-chip"><span>${item.symbol}</span>${item.name}<button type="button" data-remove="${item.name}" aria-label="Remove ${item.name}"><i data-lucide="x"></i></button></span>`).join(""): `<p class="empty-state"><i data-lucide="sparkles"></i>Start with an item from the catalog.</p>`; document.querySelectorAll("[data-remove]").forEach((button)=>button.addEventListener("click",()=>{state.selected=state.selected.filter((item)=>item.name!==button.dataset.remove);render();})); }
function renderPreview() { const selectedSize=state.selected.find((item)=>item.category==="size"); const scene=document.querySelector(".tank-scene"); const names=state.selected.map((item)=>item.name.toLowerCase()); const has=(value)=>names.some((name)=>name.includes(value)); const lighting=has("adjustable led")?"light-led":has("plant light")?"light-plant":"light-basic"; scene.className=`tank-scene ${selectedSize?`size-${selectedSize.name.toLowerCase().replaceAll(" ","-")}`:"size-default"} ${lighting}`; $("tank-size-label").textContent=selectedSize?selectedSize.name:"Choose a size"; $("tank-capacity").textContent=selectedSize?selectedSize.capacity:"Capacity pending"; const substrate=has("sand")?"sand":has("gravel")?"gravel":has("aquasoil")?"aquasoil":has("bare bottom")?"bare":"default"; const plants=[has("java fern")?"fern":"",has("anubias")?"anubias":"",has("amazon sword")?"sword":"",has("java moss")?"moss":""].filter(Boolean); const decor=[has("driftwood")?"wood":"",has("rocks")?"rocks":"",has("caves")?"cave":""].filter(Boolean); const animals=[has("fish")?"fish":"",has("axolotl")?"axolotl":"",has("shrimp")?"shrimp":"",has("snail")?"snail":"",has("turtle")?"turtle":""].filter(Boolean); const equipment=[has("heater")?"heater":"",has("filter")?"filter":"",has("thermometer")?"thermometer":""].filter(Boolean); document.querySelector(".tank-content").innerHTML=`<div class="water-column"><span class="waterline"></span><span class="water-shimmer"></span></div><div class="substrate ${substrate}"></div><div class="hardscape">${decor.map((item,index)=>`<span class="hardscape-${item} hardscape-piece piece-${index}"></span>`).join("")}</div><div class="plant-bed">${plants.map((item,index)=>`<span class="aquatic-plant plant-${item} plant-position-${index}"></span>`).join("")}</div><div class="animal-bed">${animals.map((item,index)=>`<span class="aquatic-animal animal-${item} animal-position-${index}"></span>`).join("")}</div><div class="equipment-bed">${equipment.map((item)=>`<span class="tank-equipment equipment-${item}"></span>`).join("")}</div><div class="water-particles"><i></i><i></i><i></i><i></i></div>`; }
function renderCatalog() {
  const category = categories.find((entry) => entry.id === state.active);
  $("category-kicker").textContent = category.label;
  $("category-title").textContent = category.title;
  $("item-count").textContent = `${category.items.length} options`;
  $("catalog-grid").innerHTML = category.items.map((catalogItem) => {
    const selected = state.selected.some((entry) => entry.id === catalogItem.id);
    const animalIcons = { fish:"◒", betta:"◈", "neon-tetra":"◌", "cardinal-tetra":"◌", guppy:"◓", "endler-guppy":"◓", mollies:"●", platy:"◉", swordtail:"➤", "zebra-danio":"≋", "harlequin-rasbora":"◇", corydoras:"≋", angelfish:"◇", discus:"●", oscar:"◉", goldfish:"◒", "cherry-barb":"◆", "honey-gourami":"◈", "dwarf-gourami":"◈", rainbowfish:"◒", "axolotl-wild":"✣", "axolotl-leucistic":"✣", "axolotl-golden":"✣", "axolotl-melanoid":"✣", "axolotl-gfp":"✣", "red-eared-slider":"▰", "painted-turtle":"▰", "musk-turtle":"▰", "cherry-shrimp":"≈", "blue-dream-shrimp":"≈", "amano-shrimp":"≈", "ghost-shrimp":"≈", "bamboo-shrimp":"≈", "nerite-snail":"◎", "mystery-snail":"◎", "ramshorn-snail":"◎", "malaysian-trumpet-snail":"◎", "african-dwarf-frog":"◉", crayfish:"✥" };
    const symbol = category.id === "size" ? catalogItem.name.split(" ")[0] : category.id === "animals" ? animalIcons[catalogItem.visualAsset] : category.icon;
    return `<button class="catalog-card ${selected ? "selected" : ""}" data-id="${catalogItem.id}" type="button" aria-pressed="${selected}"><span class="card-symbol">${symbol}</span><span class="card-name">${catalogItem.name}</span><span class="card-type">${catalogItem.description}</span></button>`;
  }).join("");
  document.querySelectorAll(".catalog-card").forEach((card) => card.addEventListener("click", () => toggleItem(card.dataset.id)));
}
function toggleItem(id) {
  const category = categories.find((entry) => entry.id === state.active);
  const catalogItem = category.items.find((entry) => entry.id === id);
  if (positionableCategories.has(category.id)) {
    const instanceId = `${catalogItem.id}-${Date.now()}-${state.selected.length}`;
    state.selected.push({ ...catalogItem, instanceId });
    state.positions[instanceId] = getDefaultPosition(category.id, state.selected.filter((entry) => entry.category === category.id).length - 1, catalogItem.visualAsset);
  } else {
    const index = state.selected.findIndex((entry) => entry.id === id);
    if (index >= 0) state.selected.splice(index, 1);
    else {
      if (category.id === "size") state.selected = state.selected.filter((entry) => entry.category !== "size");
      state.selected.push({ ...catalogItem, instanceId: catalogItem.id });
    }
  }
  render();
}
function getDefaultPosition(category, index, visualAsset) {
  const assetPresets = { driftwood:[[32,31],[54,31]], rocks:[[25,61],[66,61],[46,61]], caves:[[18,57],[62,57]], ornaments:[[54,57]], "java-fern":[[18,39]], anubias:[[45,54]], "amazon-sword":[[68,24]], "vallisneria":[[80,20]], "java-moss":[[38,67]], "sponge-filter":[[8,55]], "hang-on-back":[[84,8]], "canister-filter":[[76,54]], "internal-filter":[[88,32]], heater:[[91,25]], thermometer:[[8,20]], chiller:[[76,58]], fish:[[28,28]], betta:[[30,38]], "neon-tetra":[[55,32]], "cardinal-tetra":[[66,45]], guppy:[[38,48]], "endler-guppy":[[58,54]], corydoras:[[45,62]], "axolotl-wild":[[26,45]], "axolotl-leucistic":[[48,50]], "axolotl-golden":[[65,39]], "red-eared-slider":[[58,55]], "painted-turtle":[[32,57]], "musk-turtle":[[74,54]], "cherry-shrimp":[[24,63]], "blue-dream-shrimp":[[45,67]], "amano-shrimp":[[69,62]], "nerite-snail":[[18,68]], "mystery-snail":[[58,68]], "ramshorn-snail":[[78,68]] };
  const presets = { decor:[[28,61],[65,61],[47,57],[78,57]], plants:[[18,39],[42,48],[68,24],[82,32]], filtration:[[10,55],[84,8],[76,54],[88,32]], temperature:[[8,20],[90,25],[14,20]] };
  if (assetPresets[visualAsset]) return assetPresets[visualAsset][index % assetPresets[visualAsset].length].reduce((position, value, coordinate) => ({ ...position, [coordinate ? "top" : "left"]: value }), {});
  const [left, top] = (presets[category] || [[50,50]])[index % (presets[category] || [[50,50]]).length];
  return { left, top };
}
function renderSelected() {
  const total = state.selected.length;
  $("selected-count").textContent = `${total} item${total === 1 ? "" : "s"}`;
  $("setup-name").textContent = total ? `${total} component${total === 1 ? "" : "s"} selected` : "Untitled setup";
  $("setup-subtitle").textContent = total ? "Your aquarium is taking shape" : "A blank canvas for your next idea";
  $("selected-list").innerHTML = total ? state.selected.map((entry) => `<span class="selected-chip"><span>${entry.category === "size" ? entry.name.split(" ")[0] : entry.visualAsset}</span>${entry.name}<button type="button" data-remove="${entry.instanceId || entry.id}" aria-label="Remove ${entry.name}"><i data-lucide="x"></i></button></span>`).join("") : `<p class="empty-state"><i data-lucide="sparkles"></i>Start with an item from the catalog.</p>`;
  document.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => { const instanceId = button.dataset.remove; state.selected = state.selected.filter((entry) => (entry.instanceId || entry.id) !== instanceId); delete state.positions[instanceId]; if (state.selectedInstance === instanceId) state.selectedInstance = null; render(); }));
}
function renderPreview() {
  const selectedSize = state.selected.find((entry) => entry.category === "size");
  const scene = document.querySelector(".tank-scene");
  const hasAsset = (asset) => state.selected.some((entry) => entry.visualAsset === asset);
  const lighting = hasAsset("adjustable-led") ? "light-led" : hasAsset("plant-light") ? "light-plant" : "light-basic";
  scene.className = `tank-scene ${selectedSize ? selectedSize.visualAsset : "size-default"} ${lighting}`;
  const dimensions = selectedSize ? selectedSize.dimensions : null;
  scene.style.setProperty("--tank-width", dimensions ? dimensions.visualWidth : "100%");
  scene.style.setProperty("--tank-height", dimensions ? dimensions.visualHeight : "330px");
  scene.style.setProperty("--tank-ratio", dimensions ? dimensions.ratio : "1.8");
  $("tank-size-label").textContent = selectedSize ? selectedSize.name : "Choose a size";
  $("tank-capacity").textContent = selectedSize ? selectedSize.capacity : "Capacity pending";
  const substrate = state.selected.find((entry) => entry.category === "substrate");
  const layers = {
    plants: state.selected.filter((entry) => entry.category === "plants"),
    animals: state.selected.filter((entry) => entry.category === "animals"),
    decor: state.selected.filter((entry) => entry.category === "decor"),
    equipment: state.selected.filter((entry) => ["filtration", "temperature"].includes(entry.category))
  };
  document.querySelector(".tank-content").innerHTML = `<div class="water-column"><span class="waterline"></span><span class="water-shimmer"></span></div><div class="substrate ${substrate ? substrate.visualAsset : "bare-bottom"}"></div><div class="hardscape">${layers.decor.map((entry, index) => `<span class="hardscape-piece hardscape-${entry.visualAsset} piece-${index}"></span>`).join("")}</div><div class="plant-bed">${layers.plants.map((entry, index) => `<span class="aquatic-plant plant-${entry.visualAsset} plant-position-${index}"></span>`).join("")}</div><div class="animal-bed">${layers.animals.map((entry, index) => `<span class="${previewClasses(entry.visualAsset)} animal-position-${index}"></span>`).join("")}</div><div class="equipment-bed">${layers.equipment.map((entry) => `<span class="tank-equipment equipment-${entry.visualAsset}"></span>`).join("")}</div><div class="water-particles"><i></i><i></i><i></i><i></i></div>`;
}
const originalRenderNav = renderNav;
const originalRenderCatalog = renderCatalog;
function renderNav() {
  $("category-nav").innerHTML=categories.map((category)=>`<button class="category-tab ${category.id===state.active?"active":""}" data-category="${category.id}" type="button"><span class="tab-icon">${category.icon}</span><span class="tab-label">${category.label}</span></button>`).join("");
  document.querySelectorAll(".category-tab").forEach((tab)=>tab.addEventListener("click",()=>{state.active=tab.dataset.category;state.animalSubcategory=null;render();}));
}
function renderCatalog() {
  const category=categories.find((entry)=>entry.id===state.active);
  if (category.id === "animals" && !state.animalSubcategory) {
    $("category-kicker").textContent="Animals"; $("category-title").textContent="Choose a group"; $("item-count").textContent=`${animalSubcategories.length} groups`;
    $("catalog-grid").innerHTML=animalSubcategories.map((group)=>`<button class="subcategory-card" data-subcategory="${group.id}" type="button"><span class="card-symbol">${group.icon}</span><span class="card-name">${group.label}</span><span class="card-type">Browse animals</span></button>`).join("");
    document.querySelectorAll("[data-subcategory]").forEach((button)=>button.addEventListener("click",()=>{state.animalSubcategory=button.dataset.subcategory;render();})); return;
  }
  const items=category.id === "animals" ? category.items.filter((entry)=>entry.subcategory===state.animalSubcategory) : category.items;
  $("category-kicker").textContent=category.label; $("category-title").textContent=category.id === "animals" ? animalSubcategories.find((group)=>group.id===state.animalSubcategory).label : category.title; $("item-count").textContent=`${items.length} options`;
  const back=category.id === "animals" ? `<button class="subcategory-back" data-back="animals" type="button">Back to animal groups</button>` : "";
  $("catalog-grid").innerHTML=back+items.map((catalogItem)=>{const selected=state.selected.some((entry)=>entry.id===catalogItem.id);return `<button class="catalog-card ${selected?"selected":""}" data-id="${catalogItem.id}" type="button" aria-pressed="${selected}"><span class="card-symbol">${category.id==="size"?catalogItem.name.split(" ")[0]:category.id==="animals"?catalogItem.catalogIcon:category.icon}</span><span class="card-name">${catalogItem.name}</span><span class="card-type">${catalogItem.description}</span></button>`;}).join("");
  document.querySelectorAll(".catalog-card").forEach((card)=>card.addEventListener("click",()=>toggleItem(card.dataset.id))); document.querySelector("[data-back]")?.addEventListener("click",()=>{state.animalSubcategory=null;render();});
}
const originalRenderPreview = renderPreview;
function attachPreviewDragging() {
  const tank = document.querySelector(".tank-content");
  const groups = [[".hardscape-piece", ["decor"]], [".aquatic-plant", ["plants"]], [".aquatic-animal", ["animals"]], [".tank-equipment", ["filtration", "temperature"]]];
  const objects = groups.flatMap(([selector, categories]) => {
    const entries = state.selected.filter((entry) => categories.includes(entry.category));
    return [...tank.querySelectorAll(selector)].map((object, index) => ({ object, entry: entries[index] }));
  }).filter(({ entry }) => entry);
  objects.forEach(({ object, entry }) => {
    const instanceId = entry.instanceId || entry.id;
    const position = state.positions[instanceId] || getDefaultPosition(entry.category, 0, entry.visualAsset);
    object.id = `preview-object-${instanceId}`;
    object.dataset.instance = instanceId;
    object.style.left = `${position.left}%`;
    object.style.top = `${position.top}%`;
    object.style.right = "auto";
    object.style.bottom = "auto";
    const startDrag = (event) => {
      event.preventDefault();
      event.stopPropagation();
      state.selectedInstance = instanceId;
      tank.querySelectorAll(".is-selected").forEach((selectedObject) => selectedObject.classList.remove("is-selected"));
      object.classList.add("is-selected");
      try { object.setPointerCapture(event.pointerId); } catch (error) { }
      const tankBox = tank.getBoundingClientRect();
      const objectBox = object.getBoundingClientRect();
      const offsetX = event.clientX - objectBox.left;
      const offsetY = event.clientY - objectBox.top;
      const moveDrag = (moveEvent) => {
        moveEvent.preventDefault();
        moveEvent.stopPropagation();
        const maxX = Math.max(0, tankBox.width - objectBox.width);
        const substrateBox = tank.querySelector(".substrate")?.getBoundingClientRect();
        const substrateTop = substrateBox ? substrateBox.top - tankBox.top : tankBox.height * .82;
        let minY = 0, maxY = tankBox.height - objectBox.height;
        if (entry.category === "animals") { minY = tankBox.height * .08; maxY = Math.max(minY, substrateTop - objectBox.height - 4); }
        if (["plants", "decor"].includes(entry.category)) { minY = Math.max(0, substrateTop - objectBox.height - tankBox.height * .12); maxY = Math.min(maxY, substrateTop - objectBox.height + tankBox.height * .08); }
        if (entry.visualAsset === "hang-on-back") { minY = 0; maxY = Math.min(maxY, tankBox.height * .16); }
        if (entry.visualAsset === "heater") { minY = tankBox.height * .08; maxY = Math.min(maxY, tankBox.height * .35); }
        if (entry.visualAsset === "thermometer") { minY = tankBox.height * .05; maxY = Math.min(maxY, tankBox.height * .6); }
        if (entry.visualAsset === "chiller") minY = Math.max(minY, substrateTop - objectBox.height);
        const wallMinX = entry.visualAsset === "thermometer" ? 0 : entry.visualAsset === "heater" || entry.visualAsset === "hang-on-back" ? tankBox.width * .65 : 0;
        const wallMaxX = entry.visualAsset === "thermometer" ? tankBox.width * .18 : maxX;
        const left = Math.min(wallMaxX, Math.max(wallMinX, moveEvent.clientX - tankBox.left - offsetX));
        const top = Math.min(maxY, Math.max(minY, moveEvent.clientY - tankBox.top - offsetY));
        const nextPosition = { left: (left / tankBox.width) * 100, top: (top / tankBox.height) * 100 };
        state.positions[instanceId] = nextPosition;
        object.style.left = `${nextPosition.left}%`;
        object.style.top = `${nextPosition.top}%`;
      };
      const stopDrag = (endEvent) => { endEvent?.stopPropagation(); document.removeEventListener("pointermove", moveDrag); document.removeEventListener("pointerup", stopDrag); document.removeEventListener("pointercancel", stopDrag); };
      document.addEventListener("pointermove", moveDrag, { passive:false });
      document.addEventListener("pointerup", stopDrag, { once:true });
      document.addEventListener("pointercancel", stopDrag, { once:true });
    };
    object.addEventListener("pointerdown", startDrag, { passive:false });
    object.addEventListener("pointermove", (event) => event.stopPropagation(), { passive:false });
    object.addEventListener("pointerup", (event) => event.stopPropagation());
    object.addEventListener("pointercancel", (event) => event.stopPropagation());
  });
}
renderPreview = function() { originalRenderPreview(); attachPreviewDragging(); };
function render() { renderNav(); renderCatalog(); renderSelected(); renderPreview(); lucide.createIcons(); }
$("reset-button").addEventListener("click",()=>{state.selected=[];render();showToast("Design reset");}); $("save-button").addEventListener("click",()=>showToast("Design saved to your workspace")); function showToast(message) { const toast=$("toast"); toast.textContent=message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),2200); } render();