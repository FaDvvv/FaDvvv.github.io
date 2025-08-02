const species = {
    "embit":{
        "height":33,
		"weight":45,
		"baseAbilities":["awakening","terrifying"],
		"baseTypes":["fire"],
		"baseStats":[57,51,60,67,36,50,40]
	},
	"rabburn":{
        "height":59,
		"weight":87,
		"baseAbilities":["awakening","terrifying"],
		"baseTypes":["fire"],
		"baseStats":[61,67,75,95,46,68,60]
	},
	"searknight":{
		"height":82,
		"weight":217,
		"baseAbilities":["awakening","terrifying"],
		"baseTypes":["fire","metal"],
		"baseStats":[89,88,102,125,71,85,65]
	},
	"dripple":{
		"height":30,
		"weight":38,
		"baseAbilities":["awakening","power napper"],
		"baseTypes":["water"],
		"baseStats":[63,51,56,50,55,45,41]
	},
	"reptide":{
		"height":42,
		"weight":74,
		"baseAbilities":["awakening","power napper"],
		"baseTypes":["water"],
		"baseStats":[78,67,71,70,70,65,51]
	},
	"luminami":{
		"height":63,
		"weight":202,
		"baseAbilities":["awakening","power napper"],
		"baseTypes":["water","light"],
		"baseStats":[105,88,94,95,98,85,60]
	},
	"fevine":{
		"height":28,
		"weight":35,
		"baseAbilities":["awakening","thriving pace"],
		"baseTypes":["plant"],
		"baseStats":[45,51,71,44,50,36,64]
	},
	"felver":{
		"height":46,
		"weight":82,
		"baseAbilities":["awakening","thriving pace"],
		"baseTypes":["plant"],
		"baseStats":[55,67,96,55,70,45,84]
	},
	"tahtab":{
		"height":64,
		"weight":165,
		"baseAbilities":["awakening","thriving pace"],
		"baseTypes":["plant","brawler"],
		"baseStats":[75,88,126,75,92,65,104]
	},
	"eaglit":{
		"height":29,
		"weight":38,
		"baseAbilities":["awakening","applied frustration"],
		"baseTypes":["light"],
		"baseStats":[45,51,36,36,71,62,60]
	},
	"torprey":{
		"height":52,
		"weight":57,
		"baseAbilities":["awakening","applied frustration"],
		"baseTypes":["light"],
		"baseStats":[57,67,64,40,91,63,90]
	},
	"falkyrie":{
		"height":77,
		"weight":178,
		"baseAbilities":["awakening","applied frustration"],
		"baseTypes":["light","metal"],
		"baseStats":[86,88,87,74,125,90,75]
	},
	"vambat":{
		"height":26,
		"weight":18,
		"baseAbilities":["awakening","demanding"],
		"baseTypes":["dark"],
		"baseStats":[47,51,47,50,47,50,69]
	},
	"dimpire":{
		"height":61,
		"weight":67,
		"baseAbilities":["awakening","demanding"],
		"baseTypes":["dark"],
		"baseStats":[60,67,65,75,60,60,85]
	},
	"vesperatu":{
		"height":80,
		"weight":145,
		"baseAbilities":["awakening","demanding"],
		"baseTypes":["dark","spirit"],
		"baseStats":[76,88,110,97,90,65,99]
	},
	"snocub":{
		"height":19,
		"weight":14,
		"baseAbilities":["awakening","staunch"],
		"baseTypes":["ice"],
		"baseStats":[55,51,45,38,67,60,45]
	},
	"snowki":{
		"height":57,
		"weight":78,
		"baseAbilities":["awakening","staunch"],
		"baseTypes":["ice"],
		"baseStats":[65,67,75,65,75,65,60]
	},
	"himbrr":{
		"height":92,
		"weight":240,
		"baseAbilities":["awakening","staunch"],
		"baseTypes":["ice","earth"],
		"baseStats":[132,88,98,115,72,75,45]
	},
	"weevolt":{
		"height":27,
		"weight":31,
		"baseAbilities":["awakening","brute force"],
		"baseTypes":["electric"],
		"baseStats":[51,51,36,36,67,55,65]
	},
	"stozap":{
		"height":49,
		"weight":74,
		"baseAbilities":["awakening","brute force"],
		"baseTypes":["electric"],
		"baseStats":[71,67,56,41,88,60,89]
	},
	"zuelong":{
		"height":87,
		"weight":132,
		"baseAbilities":["awakening","brute force"],
		"baseTypes":["electric","ancient"],
		"baseStats":[78,88,92,60,109,79,119]
	},
	"twilat":{
		"height":14,
		"weight":24,
		"baseAbilities":["territorial","confidence","neutralise"],
		"baseTypes":["simple"],
		"baseStats":[50,41,42,38,42,38,40]
	},
	"umbrat":{
		"height":39,
		"weight":84,
		"baseAbilities":["dusk","confidence","overshadow"],
		"baseTypes":["dark"],
		"baseStats":[75,84,106,90,61,88,71]
	},
	"luxoar":{
		"height":39,
		"weight":82,
		"baseAbilities":["dawn","confidence","illuminate"],
		"baseTypes":["light"],
		"baseStats":[75,84,61,73,106,75,101]
	},
	"tiklipse":{
		"height":45,
		"weight":94,
		"baseAbilities":["circadian","total eclipse"],
		"baseTypes":["light","dark"],
		"baseStats":[75,84,106,90,106,75,89]
	},
	"cathorn":{
		"height":13,
		"weight":16,
		"baseAbilities":["hasty","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[35,37,40,24,55,24,47]
	},
	"propae":{
		"height":35,
		"weight":31,
		"baseAbilities":["hasty","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[50,46,39,60,39,55,37]
	},
	"cynamoth":{
		"height":45,
		"weight":45,
		"baseAbilities":["mystery toxins","flutter"],
		"baseTypes":["bug","air"],
		"baseStats":[70,80,55,85,98,99,88]
	},
	"sumobito":{
		"height":62,
		"weight":340,
		"baseAbilities":["guru","double strike"],
		"baseTypes":["bug","brawler"],
		"baseStats":[72,80,110,106,51,101,55]
	},
	"twittle":{
		"height":16,
		"weight":17,
		"baseAbilities":["confidence","madcap","rev up"],
		"baseTypes":["air"],
		"baseStats":[44,40,50,38,22,33,58]
	},
	"paratweet":{
		"height":32,
		"weight":35,
		"baseAbilities":["confidence","madcap","rev up"],
		"baseTypes":["air"],
		"baseStats":[54,56,75,48,32,43,88]
	},
	"avitross":{
		"height":63,
		"weight":98,
		"baseAbilities":["confidence","madcap","rev up"],
		"baseTypes":["air"],
		"baseStats":[79,85,100,78,67,63,113]
	},
	"pyder":{
		"height":14,
		"weight":17,
		"baseAbilities":["apprehension","webbing","coursing venom"],
		"baseTypes":["bug","toxic"],
		"baseStats":[45,43,60,40,30,40,45]
	},
	"swolder":{
		"height":37,
		"weight":53,
		"baseAbilities":["apprehension","webbing","coursing venom"],
		"baseTypes":["bug","toxic"],
		"baseStats":[85,85,120,105,50,65,65]
	},
	"antsee":{
		"height":15,
		"weight":12,
		"baseAbilities":["mystery toxins","woodsman","drainage"],
		"baseTypes":["bug","grass"],
		"baseStats":[55,43,25,60,40,60,20]
	},
	"florant":{
		"height":44,
		"weight":74,
		"baseAbilities":["mystery toxins","woodsman","drainage"],
		"baseTypes":["bug","grass"],
		"baseStats":[105,88,55,105,82,105,35]
	},
	"florant flychomp":{
		"height":0,
		"weight":0,
		"baseAbilities":["power jaw"],
		"baseTypes":["bug","grass"],
		"baseStats":[105,88,123,112,55,112,50],"soulBurst":true
	},
	"grubby":{
		"height":14,
		"weight":15,
		"baseAbilities":["odd husk","premonition","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[35,39,50,40,35,33,42]
	},
	"coonucopia":{
		"height":33,
		"weight":27,
		"baseAbilities":["odd husk","premonition","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[60,48,45,65,35,48,37]
	},
	"terrafly":{
		"height":65,
		"weight":83,
		"baseAbilities":["hotfoot","ambush","bug fever"],
		"baseTypes":["bug","toxic"],
		"baseStats":[75,85,112,87,61,60,95]
	},
	"terraclaw":{
		"height":44,
		"weight":73,
		"baseAbilities":["hot foot","pincer trap","slick shell"],
		"baseTypes":["bug"],
		"baseStats":[94,87,121,116,60,54,43]
	},
	"kleptyke":{
		"height":32,
		"weight":32,
		"baseAbilities":["burgler","apprehension","ability thief"],
		"baseTypes":["dark"],
		"baseStats":[55,48,50,40,20,30,95]
	},
	"ragoon":{
		"height":48,
		"weight":67,
		"baseAbilities":["burgler","apprehension","ability thief"],
		"baseTypes":["dark"],
		"baseStats":[95,80,100,95,60,55,90]
	},
	"babore":{
		"height":25,
		"weight":47,
		"baseAbilities":["boast","resilience"],
		"baseTypes":["earth"],
		"baseStats":[62,46,60,60,30,30,38]
	},
	"boarrok":{
		"height":49,
		"weight":118,
		"baseAbilities":["boast","resilience"],
		"baseTypes":["earth"],
		"baseStats":[102,71,110,95,59,70,68]
	},
	"geklow":{
		"height":29,
		"weight":38,
		"baseAbilities":["lightning rod","radiance","prismatic"],
		"baseTypes":["electric","light"],
		"baseStats":[50,55,50,45,68,50,67]
	},
	"eleguana":{
		"height":51,
		"weight":126,
		"baseAbilities":["lightning rod","radiance","prismatic"],
		"baseTypes":["electric","light"],
		"baseStats":[80,80,55,85,90,115,80]
	},
	"slugling":{
		"height":15,
		"weight":28,
		"baseAbilities":["mystery toxins","ungracious host","slimy"],
		"baseTypes":["plant"],
		"baseStats":[70,41,10,10,50,70,45]
	},
	"escargrow":{
		"height":44,
		"weight":68,
		"baseAbilities":["mystery toxins","ungracious host","slimy"],
		"baseTypes":["plant"],
		"baseStats":[90,65,35,20,65,90,50]
	},
	"gastroak":{
		"height":93,
		"weight":287,
		"baseAbilities":["mystery toxins","ungracious host","slimy"],
		"baseTypes":["plant"],
		"baseStats":[120,88,60,40,92,120,55]
	},
	"gastroakterraform":{
		"height":0,
		"weight":0,
		"baseAbilities":["insulated"],
		"baseTypes":["plant","earth"],
		"baseStats":[140,88,60,45,107,140,65]
	},
	"kabunga":{
		"height":35,
		"weight":53,
		"baseAbilities":["communication","territorial","noxious weeds"],
		"baseTypes":["plant"],
		"baseStats":[52,53,76,43,64,34,86]
	},
	"kabunga halloween":{
		"height":0,
		"weight":0,
		"baseAbilities":["communication","expertise","noxious weeds"],
		"baseTypes":["plant","mind"],
		"baseStats":[65,68,23,58,99,74,5]
	},
	"wiki-wiki":{
		"height":85,
		"weight":260,
		"baseAbilities":["communication","compliant","noxious weeds"],
		"baseTypes":["plant"],
		"baseStats":[162,125,49,70,62,70,47]
	},
	"chartiki":{
		"height":100,
		"weight":180,
		"baseAbilities":["communication","inferno","noxious weeds"],
		"baseTypes":["plant","fire"],
		"baseStats":[108,94,49,80,112,80,62]
	},
	"waka-laka":{
		"height":74,
		"weight":245,
		"baseAbilities":["communication","expertise","mycotic"],
		"baseTypes":["plant","mind"],
		"baseStats":[104,73,49,86,124,108,41]
	},
	"shawchi":{
		"height":45,
		"weight":42,
		"baseAbilities":["enchant","sharp focus"],
		"baseTypes":["mind"],
		"baseStats":[79,91,36,52,104,74,89]
	},
	"rakrawla":{
		"height":30,
		"weight":35,
		"baseAbilities":["hasty","insulated","lazy"],
		"baseTypes":["earth"],
		"baseStats":[75,59,51,68,44,54,43]
	},
	"sedimars":{
		"height":61,
		"weight":234,
		"baseAbilities":["hasty","insulated","lazy"],
		"baseTypes":["earth"],
		"baseStats":[107,87,91,108,52,81,54]
	},
	"gumpod":{
		"height":19,
		"weight":12,
		"baseAbilities":["protective shell","sharp edges"],
		"baseTypes":["water"],
		"baseStats":[60,55,42,98,42,43,33]
	},
	"ventacean":{
		"height":62,
		"weight":230,
		"baseAbilities":["protective shell","sharp edges"],
		"baseTypes":["water"],
		"baseStats":[90,90,57,142,90,58,48]
	},
	"phancub":{
		"height":26,
		"weight":18,
		"baseAbilities":["prowler","adorable"],
		"baseTypes":["spirit","brawler"],
		"baseStats":[46,60,65,50,46,55,60]
	},
	"phancub valentines":{
		"height":0,
		"weight":0,
		"baseAbilities":["prowler","clingy"],
		"baseTypes":["spirit","brawler"],
		"baseStats":[58,67,52,79,17,63,46]
	},
	"ursoul":{
		"height":80,
		"weight":210,
		"baseAbilities":["prowler","terrifying"],
		"baseTypes":["spirit","brawler"],
		"baseStats":[99,89,120,68,50,90,75]
	},
	"ursnac":{
		"height":74,
		"weight":160,
		"baseAbilities":["tank","bursting seams"],
		"baseTypes":["spirit","brawler"],
		"baseStats":[99,89,95,113,50,90,55]
	},
	"whispup":{
		"height":38,
		"weight":4,
		"baseAbilities":["temper","scorching skin","vengeance"],
		"baseTypes":["spirit","fire"],
		"baseStats":[45,60,57,42,70,48,72]
	},
	"revenine":{
		"height":59,
		"weight":50,
		"baseAbilities":["temper","prowler","vengeance"],
		"baseTypes":["spirit","fire"],
		"baseStats":[65,89,105,63,115,67,97]
	},
	"skilava":{
		"height":22,
		"weight":14,
		"baseAbilities":["scorching skin","combustible","pyro"],
		"baseTypes":["fire"],
		"baseStats":[50,70,48,49,58,49,55]
	},
	"geksplode":{
		"height":35,
		"weight":120,
		"baseAbilities":["scorching skin","combustible","pyro"],
		"baseTypes":["fire"],
		"baseStats":[65,80,52,58,80,59,60]
	},
	"eruptidon":{
		"height":105,
		"weight":226,
		"baseAbilities":["scorching skin","combustible","pyro"],
		"baseTypes":["fire"],
		"baseStats":[81,90,94,74,105,89,77]
	},
	"eruptidon magmadire":{
		"height":0,
		"weight":0,
		"baseAbilities":["pyro pro"],
		"baseTypes":["fire","earth"],
		"baseStats":[81,90,104,90,127,94,80],"soulBurst":true
	},
	"craytal":{
		"height":32,
		"weight":26,
		"baseAbilities":["volcanic","territorial","combustible"],
		"baseTypes":["fire"],
		"baseStats":[76,74,34,43,76,43,62]
	},
	"craytal christmas":{
		"height":0,
		"weight":0,
		"baseAbilities":["parting gift","chill","regift"],
		"baseTypes":["fire"],
		"baseStats":[76,74,34,43,76,43,62]
	},
	"krakaloa":{
		"height":81,
		"weight":343,
		"baseAbilities":["volcanic","scorching skin","combustible"],
		"baseTypes":["fire"],
		"baseStats":[95,125,58,95,91,99,22]
	},
	"krakaloa lavafiend":{
		"height":0,
		"weight":0,
		"baseAbilities":["heat summon"],
		"baseTypes":["fire","spirit"],
		"baseStates":[115,125,63,105,126,109,12],"soulBurst":true
	},
	"volkaloa":{
		"height":78,
		"weight":238,
		"baseAbilities":["volcanic","beserk","combustible"],
		"baseTypes":["fire","ancient"],
		"baseStats":[81,90,110,74,64,64,102]
	},
	"festifir":{
		"height":81,
		"weight":149,
		"baseAbilities":["parting gift","chill","regift"],
		"baseTypes":["plant","ice"],
		"baseStats":[128,101,119,71,46,98,22]
	},
	"igneol":{
		"height":25,
		"weight":35,
		"baseAbilities":["sharp edges","premonition","resilience"],
		"baseTypes":["ancient"],
		"baseStats":[62,75,60,70,42,41,42]
	},
	"chrysite":{
		"height":53,
		"weight":170,
		"baseAbilities":["sharp edges","premonition","resilience"],
		"baseTypes":["ancient"],
		"baseStats":[82,80,64,99,47,46,42]
	},
	"obsidrugon":{
		"height":101,
		"weight":295,
		"baseAbilities":["sharp edges","premonition","resilience"],
		"baseTypes":["ancient"],
		"baseStats":[99,100,100,124,72,65,65]
	},
	"cafnote male":{
		"height":0,
		"weight":0,
		"baseAbilities":["triumph","virtuoso","brute force"],
		"baseTypes":["simple"],
		"baseStats":[60,60,42,62,42,58,53]
	},
	"cafnote female":{
		"height":0,
		"weight":0,
		"baseAbilities":["triumph","virtuoso","tone deaf"],
		"baseTypes":["simple"],
		"baseStats":[60,60,42,58,42,62,53]
	},
	"trumbull":{
		"height":70,
		"weight":414,
		"baseAbilities":["triumph","virtuoso","brute force"],
		"baseTypes":["simple"],
		"baseStats":[92,79,134,102,52,68,73]
	},
	"mootune":{
		"height":68,
		"weight":324,
		"baseAbilities":["triumph","virtuoso","tone deaf"],
		"baseTypes":["simple"],
		"baseStats":[92,79,52,79,134,102,62]
	},
	"gobbidemic":{
		"height":40,
		"weight":95,
		"baseAbilities":["immunised","baneful"],
		"baseTypes":["toxic"],
		"baseStats":[70,80,35,60,93,64,123]
	},
	"icigool":{
		"height":43,
		"weight":15,
		"baseAbilities":["parting gift","expertise","power jaw"],
		"baseTypes":["ice","spirit"],
		"baseStats":[95,69,112,94,35,81,39]
	},
	"pyramind":{
		"height":55,
		"weight":250,
		"baseAbilities":["idiosyncratic","temper","reign"],
		"baseTypes":["mind"],
		"baseStats":[88,60,45,69,84,99,35]
	},
	"pharoglyph":{
		"height":86,
		"weight":367,
		"baseAbilities":["idiosyncratic","temper","reign"],
		"baseTypes":["mind"],
		"baseStats":[88,100,55,55,120,101,106]
	},
	"burroach":{
		"height":15,
		"weight":35,
		"baseAbilities":["trash armour","slimy","sharp claws"],
		"baseTypes":["bug","earth"],
		"baseStats":[32,60,46,63,45,54,77]
	},
	"garbantis":{
		"height":65,
		"weight":127,
		"baseAbilities":["trash armour","slimy","sharp claws"],
		"baseTypes":["bug","earth"],
		"baseStats":[55,76,97,115,54,74,104]
	},
	"whimpor":{
		"height":31,
		"weight":70,
		"baseAbilities":["clutch","frail armour","toxic filter"],
		"baseTypes":["metal","air"],
		"baseStats":[62,58,21,46,59,62,53]
	},
	"stratusoar":{
		"height":90,
		"weight":487,
		"baseAbilities":["clutch","frail armour","toxic filter"],
		"baseTypes":["metal","air"],
		"baseStats":[100,80,49,77,105,108,81]
	},
	"stratusoarjetwing":{
		"height":0,
		"weight":0,
		"baseAbilities":["turbulent"],
		"baseTypes":["metal","air"],
		"baseStats":[100,100,66,67,135,78,119],"soulBurst":true
	},
	"territi":{
		"height":40,
		"weight":64,
		"baseAbilities":["immunized","confidence","handy"],
		"baseTypes":["toxic","metal"],
		"baseStats":[51,58,61,44,59,48,52]
	},
	"dyeborg":{
		"height":80,
		"weight":396,
		"baseAbilities":["immunized","tank","handy"],
		"baseTypes":["toxic","metal"],
		"baseStats":[78,86,97,83,93,87,68]
	},
	"operaptor":{
		"height":42,
		"weight":87,
		"baseAbilities":["terrifying","power jaw","overclock"],
		"baseTypes":["metal","earth"],
		"baseStats":[53,67,64,61,45,53,49]
	},
	"concredon":{
		"height":71,
		"weight":234,
		"baseAbilities":["terrifying","power jaw","overclock"],
		"baseTypes":["metal","earth"],
		"baseStats":[77,77,84,69,53,64,66]
	},
	"tyrecks":{
		"height":118,
		"weight":892,
		"baseAbilities":["terrifying","power jaw","overclock"],
		"baseTypes":["metal","earth"],
		"baseStats":[89,94,111,102,72,83,74]
	},
	"chompactor":{
		"height":28,
		"weight":53,
		"baseAbilities":["salvage","rev up","specialisation"],
		"baseTypes":["metal"],
		"baseStats":[58,55,61,73,32,51,45]
	},
	"munchweel":{
		"height":79,
		"weight":425,
		"baseAbilities":["forge","rev up","specialisation"],
		"baseTypes":["metal"],
		"baseStats":[94,79,104,113,52,78,66]
	},
	"scorb":{
		"height":15,
		"weight":24,
		"baseAbilities":["communication","hover","clutch"],
		"baseTypes":["metal"],
		"baseStats":[49,55,25,42,67,45,77]
	},
	"veylens":{
		"height":50,
		"weight":53,
		"baseAbilities":["communication","hover","clutch"],
		"baseTypes":["metal"],
		"baseStats":[57,64,28,56,88,67,55]
	},
	"gardrone":{
		"height":74,
		"weight":148,
		"baseAbilities":["communication","hover","clutch"],
		"baseTypes":["metal"],
		"baseStats":[74,82,54,73,132,119,61]
	},
	"poochrol":{
		"height":25,
		"weight":19,
		"baseAbilities":["brute force","power jaw"],
		"baseTypes":["metal","electric"],
		"baseStats":[51,51,59,52,31,47,69]
	},
	"hunder":{
		"height":54,
		"weight":94,
		"baseAbilities":["brute force","power jaw"],
		"baseTypes":["metal","electric"],
		"baseStats":[78,84,94,83,63,69,116]
	},
	"goppie":{
		"height":17,
		"weight":15,
		"baseAbilities":["rain rush","finesse","quick recovery"],
		"baseTypes":["water"],
		"baseStats":[48,54,33,45,53,46,64]
	},
	"arapaigo":{
		"height":99,
		"weight":138,
		"baseAbilities":["rain rush","finesse","quick recovery"],
		"baseTypes":["water"],
		"baseStats":[95,79,51,84,104,84,105]
	},
	"pyke":{
		"height":23,
		"weight":12,
		"baseAbilities":["bitter touch","combative","brute force"],
		"baseTypes":["ancient","water"],
		"baseStats":[64,84,62,58,33,51,68]
	},
	"skelic":{
		"height":76,
		"weight":76,
		"baseAbilities":["bitter touch","combative","brute force"],
		"baseTypes":["ancient","water"],
		"baseStats":[89,100,104,82,55,73,87]
	},
	"skelic seascourge":{
		"height":0,
		"weight":0,
		"baseAbilities":["rain rush"],
		"baseTypes":["ancient","water"],
		"baseStats":[109,100,134,92,65,78,77],"soulBurst":true
	},
	"zaleo":{
		"height":20,
		"weight":14,
		"baseAbilities":["adorable","driven","overcharged"],
		"baseTypes":["ancient","electric"],
		"baseStats":[73,68,63,55,55,54,52]
	},
	"joltooth":{
		"height":61,
		"weight":137,
		"baseAbilities":["ambush","driven","overcharged"],
		"baseTypes":["ancient","electric"],
		"baseStats":[94,89,126,87,56,84,69]
	},
	"joltooth thunderking":{
		"height":0,
		"weight":0,
		"baseAbilities":["royal decree"],
		"baseTypes":["ancient","electric"],
		"baseStats":[94,89,136,87,66,84,109],"soulBurst":true
	},
	"dobo":{
		"height":16,
		"weight":10,
		"baseAbilities":["hotfoot","pyro","power napper"],
		"baseTypes":["ancient","fire"],
		"baseStats":[58,74,47,44,71,68,58]
	},
	"infernix":{
		"height":74,
		"weight":87,
		"baseAbilities":["hotfoot","pyro","power napper"],
		"baseTypes":["ancient","fire"],
		"baseStats":[84,95,57,58,110,117,89]
	},
	"kyogo":{
		"height":26,
		"weight":21,
		"baseAbilities":["anomaly","surrogate"],
		"baseTypes":["ancient","dark"],
		"baseStats":[51,63,55,64,51,62,74]
	},
	"dorogo":{
		"height":52,
		"weight":68,
		"baseAbilities":["anomaly","surrogate"],
		"baseTypes":["ancient","dark"],
		"baseStats":[66,86,86,72,90,69,116]
	},
	"wiledile":{
		"height":37,
		"weight":55,
		"baseAbilities":["swampy","woodsman"],
		"baseTypes":["water","plant"],
		"baseStats":[63,63,74,57,69,50,79]
	},
	"mawamurk":{
		"height":103,
		"weight":224,
		"baseAbilities":["swampy","woodsman"],
		"baseTypes":["water","plant"],
		"baseStats":[119,83,97,92,94,89,41]
	},
	"ampole":{
		"height":13,
		"weight":8,
		"baseAbilities":["specialisation","watcher","sly"],
		"baseTypes":["electric"],
		"baseStats":[44,55,33,41,35,42,69]
	},
	"amphiton":{
		"height":31,
		"weight":35,
		"baseAbilities":["specialisation","watcher","sly"],
		"baseTypes":["electric","mind"],
		"baseStats":[59,72,59,61,60,64,81]
	},
	"meditoad":{
		"height":56,
		"weight":122,
		"baseAbilities":["specialisation","watcher","sly"],
		"baseTypes":["electric","mind"],
		"baseStats":[99,86,95,92,99,96,43]
	},
	"pwuff":{
		"height":21,
		"weight":17,
		"baseAbilities":["sharp edges","toxic spines","baneful"],
		"baseTypes":["water","toxic"],
		"baseStats":[75,54,46,71,47,69,49]
	},
	"bloatox":{
		"height":29,
		"weight":31,
		"baseAbilities":["sharp edges","toxic spines","baneful"],
		"baseTypes":["water","toxic"],
		"baseStats":[93,80,109,91,57,73,82]
	},
	"barblast":{
		"height":30,
		"weight":74,
		"baseAbilities":["parting gift","toxic spines","high explosive"],
		"baseTypes":["water","toxic"],
		"baseStats":[96,88,72,107,89,88,37]
	},
	"swimp":{
		"height":25,
		"weight":15,
		"baseAbilities":["power jaw","apprehension","devious"],
		"baseTypes":["water"],
		"baseStats":[46,60,52,44,25,47,64]
	},
	"snapr":{
		"height":40,
		"weight":29,
		"baseAbilities":["power jaw","terrifying","devious"],
		"baseTypes":["water"],
		"baseStats":[58,71,81,63,31,59,72]
	},
	"garlash":{
		"height":65,
		"weight":61,
		"baseAbilities":["power jaw","terrifying","devious"],
		"baseTypes":["water"],
		"baseStats":[87,89,100,84,63,72,100]
	},
	"hydrini":{
		"height":14,
		"weight":11,
		"baseAbilities":["rain summon","vivid sight","aqua body"],
		"baseTypes":["bug","water"],
		"baseStats":[40,52,41,48,56,56,45]
	},
	"bezeldew":{
		"height":28,
		"weight":57,
		"baseAbilities":["rain summon","vivid sight","aqua body"],
		"baseTypes":["bug","water"],
		"baseStats":[60,65,54,78,80,88,52]
	},
	"deludrix":{
		"height":55,
		"weight":126,
		"baseAbilities":["rain summon","vivid sight","aqua body"],
		"baseTypes":["bug","water"],
		"baseStats":[60,85,114,58,122,67,94]
	},
	"ceratot":{
		"height":17,
		"weight":65,
		"baseAbilities":["staunch","frail armour","vigorous"],
		"baseTypes":["ancient","plant"],
		"baseStats":[59,69,56,64,26,42,44]
	},
	"trepodon":{
		"height":38,
		"weight":324,
		"baseAbilities":["staunch","frail armour","vigorous"],
		"baseTypes":["ancient","plant"],
		"baseStats":[74,80,84,86,32,56,48]
	},
	"colossotrops":{
		"height":68,
		"weight":768,
		"baseAbilities":["staunch","frail armour","vigorous"],
		"baseTypes":["ancient","plant"],
		"baseStats":[103,96,124,111,70,67,54]
	},
	"cupoink":{
		"height":16,
		"weight":15,
		"baseAbilities":["caddie","madcap","sweet touch"],
		"baseTypes":["fire"],
		"baseStats":[52,67,65,56,34,64,55]
	},
	"hoganosh":{
		"height":51,
		"weight":89,
		"baseAbilities":["caddie","madcap","sweet touch"],
		"baseTypes":["fire"],
		"baseStats":[84,88,109,90,57,109,41]
	},
	"hoganosh atomic":{
		"height":0,
		"weight":0,
		"baseAbilities":["gorge"],
		"baseTypes":["fire"],
		"baseStats":[89,93,129,95,67,114,61],"soulBurst":true
	},
	"mochibi":{
		"height":13,
		"weight":14,
		"baseAbilities":["sugar rush","lucky","shakedown"],
		"baseTypes":["ice"],
		"baseStats":[51,60,28,53,65,44,79]
	},
	"totemochi":{
		"height":38,
		"weight":43,
		"baseAbilities":["sugar rush","lucky","shakedown"],
		"baseTypes":["ice"],
		"baseStats":[58,84,33,68,100,63,88]
	},
	"mocho":{
		"height":53,
		"weight":145,
		"baseAbilities":["sugar rush","lucky","shakedown"],
		"baseTypes":["ice"],
		"baseStats":[71,90,72,102,120,93,67]
	},
	"gwurm":{
		"height":14,
		"weight":11,
		"baseAbilities":["hard candy","clingy","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[47,55,27,53,42,41,30]
	},
	"odasho":{
		"height":35,
		"weight":13,
		"baseAbilities":["hard candy","clingy","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[55,60,32,73,59,58,42]
	},
	"spreezy":{
		"height":38,
		"weight":34,
		"baseAbilities":["hard candy","clingy","defensive priority"],
		"baseTypes":["bug"],
		"baseStats":[72,95,46,103,94,76,93]
	},
	"pipsee":{
		"height":13,
		"weight":2,
		"baseAbilities":["glide","wind summon","vigilant"],
		"baseTypes":["plant","air"],
		"baseStats":[44,52,30,55,43,49,55]
	},
	"dandylil":{
		"height":31,
		"weight":4,
		"baseAbilities":["glide","wind summon","vigilant"],
		"baseTypes":["plant","air"],
		"baseStats":[56,79,43,63,90,54,75]
	},
	"whippledriff":{
		"height":45,
		"weight":6,
		"baseAbilities":["glide","wind summon","vigilant"],
		"baseTypes":["plant","air"],
		"baseStats":[72,90,53,115,110,71,89]
	},
	"vari":{
		"height":28,
		"weight":32,
		"baseAbilities":["apprehension","guardian","adorable"],
		"baseTypes":["simple"],
		"baseStats":[49,60,52,43,52,43,57]
	},
	"cervolen":{
		"height":68,
		"weight":232,
		"baseAbilities":["staunch","confidence","vengeance"],
		"baseTypes":["simple"],
		"baseStats":[92,85,110,85,52,72,89]
	},
	"wendolen":{
		"height":83,
		"weight":190,
		"baseAbilities":["sharp claws","gloomy","finesse"],
		"baseTypes":["spirit"],
		"baseStats":[50,80,119,60,98,75,103]
	},
	"kirolen":{
		"height":69,
		"weight":213,
		"baseAbilities":["hasty","shakedown","devious"],
		"baseTypes":["ancient"],
		"baseStats":[78,83,137,69,73,63,82]
	},
	"zepholen":{
		"height":73,
		"weight":201,
		"baseAbilities":["sharp focus","tumultuous","turbulent"],
		"baseTypes":["air"],
		"baseStats":[70,92,57,90,123,66,87]
	},
	"venolen":{
		"height":77,
		"weight":243,
		"baseAbilities":["devious","toxic touch","baneful"],
		"baseTypes":["toxic"],
		"baseStats":[83,90,61,67,101,122,61]
	},
	"wresolen":{
		"height":81,
		"weight":345,
		"baseAbilities":["aggressive","ignorant","ace"],
		"baseTypes":["brawler"],
		"baseStats":[104,79,130,88,27,79,78]
	},
	"buzzolen":{
		"height":38,
		"weight":42,
		"baseAbilities":["vigorous","marksman","sweet aroma"],
		"baseTypes":["bug"],
		"baseStats":[69,100,99,75,45,96,101]
	},
	"tundrolen":{
		"height":73,
		"weight":341,
		"baseAbilities":["insulated","mysterious cloak","resilience"],
		"baseTypes":["ice"],
		"baseStats":[91,86,91,130,71,66,50]
	},
	"pyrolen":{
		"height":69,
		"weight":243,
		"baseAbilities":["fanning flame","volcanic","quick recovery"],
		"baseTypes":["fire"],
		"baseStats":[119,91,34,63,133,79,66]
	},
	"hydrolen":{
		"height":63,
		"weight":155,
		"baseAbilities":["hydate","vigilant","luck of the sea"],
		"baseTypes":["water"],
		"baseStats":[80,85,97,59,97,60,107]
	},
	"copling":{
		"height":14,
		"weight":38,
		"baseAbilities":["oxidize","devious","playful"],
		"baseTypes":["ancient","metal"],
		"baseStats":[34,70,55,61,25,51,99]
	},
	"copperage":{
		"height":26,
		"weight":89,
		"baseAbilities":["oxidize","devious","playful"],
		"baseTypes":["ancient","metal"],
		"baseStats":[66,80,78,90,35,62,74]
	},
	"oxidrake":{
		"height":80,
		"weight":367,
		"baseAbilities":["oxidize","devious","combative"],
		"baseTypes":["ancient","metal"],
		"baseStats":[87,90,123,113,63,76,63]
	},
	"spirivii":{
		"height":18,
		"weight":8,
		"baseAbilities":["life force"],
		"baseTypes":["bug","spirit"],
		"baseStats":[61,0,44,42,25,33,45]
	},
	"eidohusk":{
		"height":43,
		"weight":28,
		"baseAbilities":["life force"],
		"baseTypes":["bug","spirit"],
		"baseStats":[81,0,44,88,25,62,20]
	},
	"harvesect":{
		"height":77,
		"weight":173,
		"baseAbilities":["life force"],
		"baseTypes":["bug","spirit"],
		"baseStats":[116,0,100,119,57,77,56]
	},
	"snowl":{
		"height":11,
		"weight":9,
		"baseAbilities":["wise","chill","glide"],
		"baseTypes":["ice"],
		"baseStats":[15,71,9,20,12,24,59]
	},
	"stricicle":{
		"height":25,
		"weight":28,
		"baseAbilities":["wise","chill","glide"],
		"baseTypes":["ice","air"],
		"baseStats":[48,81,48,58,86,61,70]
	},
	"wintrix":{
		"height":62,
		"weight":71,
		"baseAbilities":["wise","chill","glide"],
		"baseTypes":["ice","air"],
		"baseStats":[81,92,63,86,114,85,94]
	},
	"snagull":{
		"height":23,
		"weight":12,
		"baseAbilities":["clingy","immunized","marksman"],
		"baseTypes":["air"],
		"baseStats":[68,60,42,53,81,58,78]
	},
	"snagulp":{
		"height":27,
		"weight":21,
		"baseAbilities":["clingy","immunized","marksman"],
		"baseTypes":["air","toxic"],
		"baseStats":[59,79,50,59,91,69,98]
	},
	"snagoop":{
		"height":66,
		"weight":47,
		"baseAbilities":["clingy","immunized","marksman"],
		"baseTypes":["air","toxic"],
		"baseStats":[50,89,68,77,121,94,108]
	},
	"makame":{
		"height":17,
		"weight":17,
		"baseAbilities":["tone deaf","frail armour","quick recovery"],
		"baseTypes":["water"],
		"baseStats":[44,59,30,76,51,43,30]
	},
	"makoro":{
		"height":40,
		"weight":49,
		"baseAbilities":["tone deaf","frail armour","quick recovery"],
		"baseTypes":["water"],
		"baseStats":[71,70,38,101,75,57,32]
	},
	"tsukame":{
		"height":78,
		"weight":298,
		"baseAbilities":["tone deaf","frail armour","quick recovery"],
		"baseTypes":["water"],
		"baseStats":[91,80,67,120,116,77,34]
	},
	"cavenish":{
		"height":13,
		"weight":7,
		"baseAbilities":["bully","conspire","sly"],
		"baseTypes":["water","plant"],
		"baseStats":[51,66,31,79,61,52,86]
	},
	"banfino":{
		"height":87,
		"weight":184,
		"baseAbilities":["bully","conspire","sly"],
		"baseTypes":["water","plant"],
		"baseStats":[72,79,58,97,103,71,109]
	},
	"kanki":{
		"height":17,
		"weight":15,
		"baseAbilities":["madcap","aggresive","ambush"],
		"baseTypes":["water","brawler"],
		"baseStats":[43,50,82,66,5,44,63]
	},
	"kanibo":{
		"height":51,
		"weight":104,
		"baseAbilities":["madcap","aggresive","ambush"],
		"baseTypes":["water","brawler"],
		"baseStats":[68,97,125,103,39,73,80]
	},
	"sharpod":{
		"height":28,
		"weight":114,
		"baseAbilities":["rev up","terrifying","frenzy"],
		"baseTypes":["water","metal"],
		"baseStats":[82,77,99,62,25,48,75]
	},
	"samarine":{
		"height":66,
		"weight":639,
		"baseAbilities":["rev up","terrifying","frenzy"],
		"baseTypes":["water","metal"],
		"baseStats":[120,87,117,82,58,64,80]
	},
	"lumica":{
		"height":10,
		"weight":8,
		"baseAbilities":["sharp edges","premonition","repugnant"],
		"baseTypes":["water"],
		"baseStats":[66,85,69,63,33,71,15]
	},
	"lumello":{
		"height":34,
		"weight":87,
		"baseAbilities":["sharp edges","premonition","repugnant"],
		"baseTypes":["water"],
		"baseStats":[100,100,99,106,62,96,15]
	},
	"polypi":{
		"height":8,
		"weight":3,
		"baseAbilities":["temper","enchanted coat","incandescent"],
		"baseTypes":["water","light"],
		"baseStats":[42,77,10,24,54,54,39]
	},
	"laphyra":{
		"height":20,
		"weight":12,
		"baseAbilities":["temper","enchanted coat","incandescent"],
		"baseTypes":["water","light"],
		"baseStats":[75,88,15,44,72,85,71]
	},
	"jellusa":{
		"height":57,
		"weight":66,
		"baseAbilities":["temper","enchanted coat","incandescent"],
		"baseTypes":["water","light"],
		"baseStats":[100,99,58,66,95,100,92]
	},
	"taoshi":{
		"height":11,
		"weight":8,
		"baseAbilities":["enchanted coat","guardian","send off"],
		"baseTypes":["simple"],
		"baseStats":[70,57,49,64,18,64,50]
	},
	"taoshinu":{
		"height":50,
		"weight":65,
		"baseAbilities":["enchanted coat","guardian","send off"],
		"baseTypes":["simple"],
		"baseStats":[110,90,93,94,48,89,62]
	},
	"kittone":{
		"height":9,
		"weight":5,
		"baseAbilities":["tone deaf","adorable","shakedown"],
		"baseTypes":["simple"],
		"baseStats":[45,65,44,37,57,39,85]
	},
	"lyricat":{
		"height":44,
		"weight":48,
		"baseAbilities":["tone deaf","burglar","shakedown"],
		"baseTypes":["simple"],
		"baseStats":[90,93,69,62,107,64,101]
	},
	"boonary":{
		"height":10,
		"weight":1,
		"baseAbilities":["two face"],
		"baseTypes":["spirit"],
		"baseStats":[64,64,64,64,64,64,64]
	},
	"somata":{
		"height":14,
		"weight":9,
		"baseAbilities":["guardian","repugnant","adorable"],
		"baseTypes":["water","mind"],
		"baseStats":[65,70,8,44,57,93,22]
	},
	"clionae":{
		"height":62,
		"weight":73,
		"baseAbilities":["guardian","repugnant","persistance"],
		"baseTypes":["water","mind"],
		"baseStats":[97,91,44,66,95,127,70]
	},
	"cinnaboo":{
		"height":19,
		"weight":19,
		"baseAbilities":["sweet touch","playful","shakedown"],
		"baseTypes":["spirit"],
		"baseStats":[51,55,11,40,63,60,70]
	},
	"cinnogre":{
		"height":70,
		"weight":242,
		"baseAbilities":["sweet touch","ignorant","shakedown"],
		"baseTypes":["spirit"],
		"baseStats":[112,99,55,71,115,86,77]
	},
	"swirelle":{
		"height":34,
		"weight":19,
		"baseAbilities":["appetite"],
		"baseTypes":["air"],
		"baseStats":[65,100,65,65,65,65,100]
	},
	"swishy":{
		"height":27,
		"weight":18,
		"baseAbilities":["regift","gummy","viscid"],
		"baseTypes":["water"],
		"baseStats":[39,53,15,51,52,77,72]
	},
	"fiscarna":{
		"height":76,
		"weight":189,
		"baseAbilities":["regift","gummy","viscid"],
		"baseTypes":["water"],
		"baseStats":[79,88,43,87,113,110,79]
	},
	"bunpuff":{
		"height":30,
		"weight":26,
		"baseAbilities":["adorable","noxious weeds","glutton"],
		"baseTypes":["plant","earth"],
		"baseStats":[46,70,22,41,56,51,71]
	},
	"bunnecki":{
		"height":67,
		"weight":89,
		"baseAbilities":["adorable","noxious weeds","glutton"],
		"baseTypes":["plant","earth"],
		"baseStats":[77,94,73,72,102,80,102]
	},
	"dractus":{
		"height":33,
		"weight":47,
		"baseAbilities":["protective shell","insulated","anomaly"],
		"baseTypes":["plant"],
		"baseStats":[52,70,87,51,49,49,63]
	},
	"frutress":{
		"height":36,
		"weight":50,
		"baseAbilities":["sharp edges","insulated","anomaly"],
		"baseTypes":["plant"],
		"baseStats":[67,80,87,76,49,57,36]
	},
	"seedrake":{
		"height":119,
		"weight":376,
		"baseAbilities":["sharp edges","insulated","anomaly"],
		"baseTypes":["plant"],
		"baseStats":[81,89,120,89,97,66,83]
	},
	"volpup":{
		"height":37,
		"weight":55,
		"baseAbilities":["aggressive","pitch black","mystery toxins"],
		"baseTypes":["electric","toxic"],
		"baseStats":[54,78,70,49,19,44,73]
	},
	"halvantic":{
		"height":86,
		"weight":318,
		"baseAbilities":["aggressive","pitch black","mystery toxins"],
		"baseTypes":["electric","toxic"],
		"baseStats":[123,95,130,71,51,60,85]
	},
	"impkin":{
		"height":28,
		"weight":32,
		"baseAbilities":["resentful","devious","handy"],
		"baseTypes":["dark"],
		"baseStats":[54,50,47,29,71,27,72]
	},
	"grimmick":{
		"height":52,
		"weight":68,
		"baseAbilities":["resentful","devious","handy"],
		"baseTypes":["dark"],
		"baseStats":[72,72,61,39,95,35,92]
	},
	"imperior":{
		"height":77,
		"weight":145,
		"baseAbilities":["resentful","devious","handy"],
		"baseTypes":["dark"],
		"baseStats":[97,91,93,62,115,57,100]
	},
	"mistlebud":{
		"height":7,
		"weight":2,
		"baseAbilities":["festive spirit"],
		"baseTypes":["plant","light"],
		"baseStats":[25,50,9,75,0,75,16]
	},
	"hollibunch":{
		"height":25,
		"weight":15,
		"baseAbilities":["festive spirit"],
		"baseTypes":["plant","light"],
		"baseStats":[65,110,51,130,0,130,39]
	},
	"cryocub":{
		"height":30,
		"weight":23,
		"baseAbilities":["adorable","communication","mysterious cloak"],
		"baseTypes":["ice"],
		"baseStats":[49,57,41,65,37,46,51]
	},
	"barbadger":{
		"height":74,
		"weight":198,
		"baseAbilities":["dauntless","communication","mysterious cloak"],
		"baseTypes":["ice","brawler"],
		"baseStats":[78,93,115,106,57,72,82]
	},
	"kyeggo":{
		"height":18,
		"weight":11,
		"baseAbilities":["anomaly","vivid sight","vicious"],
		"baseTypes":["dark"],
		"baseStats":[67,62,26,54,66,56,44]
	},
	"doreggo":{
		"height":35,
		"weight":29,
		"baseAbilities":["staunch","vivid sight","vicious"],
		"baseTypes":["dark","air"],
		"baseStats":[86,78,42,66,102,70,56]
	},
	"dreggodyne":{
		"height":104,
		"weight":322,
		"baseAbilities":["staunch","vivid sight","vicious"],
		"baseTypes":["dark","air"],
		"baseStats":[96,92,73,77,135,82,70]
	},
	"dreggodyne tempereign":{
		"height":0,
		"weight":0,
		"baseAbilities":["remorseless"],
		"baseTypes":["dark","air"],
		"baseStats":[96,92,93,77,145,82,95]
	},
	"wispur":{
		"height":13,
		"weight":1,
		"baseAbilities":["radiance","fog summon","captivating"],
		"baseTypes":["spirit","light"],
		"baseStats":[25,61,9,47,72,70,33]
	},
	"lampurge":{
		"height":31,
		"weight":8,
		"baseAbilities":["radiance","fog summon","captivating"],
		"baseTypes":["spirit","light"],
		"baseStats":[42,81,39,78,97,91,40]
	},
	"charonyx":{
		"height":49,
		"weight":11,
		"baseAbilities":["radiance","fog summon","reaper"],
		"baseTypes":["spirit","light"],
		"baseStats":[56,101,68,96,122,106,51]
	},
	"smoal":{
		"height":19,
		"weight":45,
		"baseAbilities":["heat summon","scorching skin","blistering heat"],
		"baseTypes":["fire","toxic"],
		"baseStats":[37,67,38,30,38,25,54]
	},
	"charkiln":{
		"height":45,
		"weight":88,
		"baseAbilities":["heat summon","scorching skin","blistering heat"],
		"baseTypes":["fire","toxic"],
		"baseStats":[56,77,74,52,74,39,84]
	},
	"billoforge":{
		"height":76,
		"weight":653,
		"baseAbilities":["heat summon","scorching skin","blistering heat"],
		"baseTypes":["fire","toxic"],
		"baseStats":[80,87,117,104,117,71,24]
	},
	"sherbot":{
		"height":57,
		"weight":211,
		"baseAbilities":["overclock","sugar rush","chill"],
		"baseTypes":["ice","metal"],
		"baseStats":[69,85,42,97,94,62,76]
	},
	"llamba":{
		"height":28,
		"weight":24,
		"baseAbilities":["playful","regurgitate","wholesome"],
		"baseTypes":["simple"],
		"baseStats":[59,51,20,59,64,47,70]
	},
	"choochew":{
		"height":55,
		"weight":89,
		"baseAbilities":["playful","regurgitate","wholesome"],
		"baseTypes":["simple"],
		"baseStats":[76,76,37,70,83,62,86]
	},
	"loomala":{
		"height":80,
		"weight":205,
		"baseAbilities":["herd behaviour","regurgitate","wholesome"],
		"baseTypes":["simple"],
		"baseStats":[92,98,60,89,95,80,111]
	},
	"fentern":{
		"height":21,
		"weight":18,
		"baseAbilities":["intern","rush hour","trader"],
		"baseTypes":["simple"],
		"baseStats":[45,100,42,46,16,41,70]
	},
	"weaselin":{
		"height":62,
		"weight":87,
		"baseAbilities":["partnership","rush hour","trader"],
		"baseTypes":["simple"],
		"baseStats":[75,150,72,71,56,66,90]
	},
	"singeel":{
		"height":25,
		"weight":16,
		"baseAbilities":["safety pot"],
		"baseTypes":["electric"],
		"baseStats":[75,43,6,24,31,16,5]
	},
	"moreel":{
		"height":79,
		"weight":77,
		"baseAbilities":["one of many"],
		"baseTypes":["electric","dark"],
		"baseStats":[105,83,86,104,121,81,35]
	},
	"crabushi":{
		"height":14,
		"weight":8,
		"baseAbilities":["vengeance","expertise","razor sharp"],
		"baseTypes":["metal","brawler"],
		"baseStats":[35,48,53,84,5,52,76]
	},
	"crabtana":{
		"height":37,
		"weight":43,
		"baseAbilities":["vengeance","expertise","razor sharp"],
		"baseTypes":["metal","brawler"],
		"baseStats":[60,90,100,117,39,79,100]
	},
	"teripod":{
		"height":18,
		"weight":14,
		"baseAbilities":["watcher","illuminate","mesmerizing"],
		"baseTypes":["ancient","light"],
		"baseStats":[79,90,49,74,15,52,61]
	},
	"teridescent":{
		"height":50,
		"weight":74,
		"baseAbilities":["watcher","illuminate","mesmerizing"],
		"baseTypes":["ancient","light"],
		"baseStats":[115,90,112,105,45,73,70]
	},
	"skampi":{
		"height":7,
		"weight":3,
		"baseAbilities":["protective shell","clutch","vicious"],
		"baseTypes":["water"],
		"baseStats":[10,72,7,97,7,67,110]
	},
	"prawnsu":{
		"height":33,
		"weight":21,
		"baseAbilities":["applied frustration","clutch","vicious"],
		"baseTypes":["water"],
		"baseStats":[50,82,44,107,130,77,92]
	},
	"shrimposte":{
		"height":37,
		"weight":28,
		"baseAbilities":["combative","clutch","vicious"],
		"baseTypes":["water"],
		"baseStats":[50,82,130,117,44,87,72]
	},
	"dokan":{
		"height":13,
		"weight":9,
		"baseAbilities":["spine break","immunized","sponge"],
		"baseTypes":["earth","toxic"],
		"baseStats":[63,88,49,66,23,52,49]
	},
	"dokumori":{
		"height":42,
		"weight":65,
		"baseAbilities":["spine break","immunized","sponge"],
		"baseTypes":["earth","toxic"],
		"baseStats":[88,101,101,96,60,70,59]
	},
	"mirrami":{
		"height":20,
		"weight":3,
		"baseAbilities":["reflective","mimic","analyze"],
		"baseTypes":["spirit","metal"],
		"baseStats":[10,56,85,31,85,56,24]
	},
	"mirraith":{
		"height":71,
		"weight":54,
		"baseAbilities":["reflective","mimic","analyze"],
		"baseTypes":["spirit","metal"],
		"baseStats":[50,84,125,72,125,105,44]
	},
	"thawmin":{
		"height":57,
		"weight":74,
		"baseAbilities":["communication","expertise","foresight"],
		"baseTypes":["ice","mind"],
		"baseStats":[77,92,49,58,118,92,99]
	},
	"leshent":{
		"height":77,
		"weight":233,
		"baseAbilities":["watcher","gloomy","petrifying"],
		"baseTypes":["plant","dark"],
		"baseStats":[104,86,103,93,56,79,64]
	},
	"kayute":{
		"height":32,
		"weight":66,
		"baseAbilities":["ravenous","playful","designated chompers"],
		"baseTypes":["ice","dark"],
		"baseStats":[40,61,58,54,29,49,69]
	},
	"kayappa":{
		"height":65,
		"weight":188,
		"baseAbilities":["ravenous","playful","designated chompers"],
		"baseTypes":["ice","dark"],
		"baseStats":[52,78,79,75,39,70,81]
	},
	"kramboss":{
		"height":81,
		"weight":286,
		"baseAbilities":["ravenous","battle armour","designated chompers"],
		"baseTypes":["ice","dark"],
		"baseStats":[79,98,110,91,66,86,95]
	},
	"leopaw":{
		"height":21,
		"weight":11,
		"baseAbilities":["sharp claws","mesmerizing","prismatic"],
		"baseTypes":["light","ice"],
		"baseStats":[56,78,54,48,28,39,71]
	},
	"chienta":{
		"height":79,
		"weight":196,
		"baseAbilities":["sharp claws","mesmerizing","prismatic"],
		"baseTypes":["light","ice"],
		"baseStats":[98,97,95,73,73,57,115]
	},
	"eyebrella":{
		"height":29,
		"weight":4,
		"baseAbilities":["hydro vortex","do or die","pluvial"],
		"baseTypes":["water"],
		"baseStats":[64,62,69,60,34,48,47]
	},
	"parasoul":{
		"height":59,
		"weight":11,
		"baseAbilities":["hydro vortex","do or die","pluvial"],
		"baseTypes":["water","dark"],
		"baseStats":[91,80,113,92,64,71,74]
	},
	"lissen":{
		"height":31,
		"weight":5,
		"baseAbilities":["motivational","do or die","virtusos"],
		"baseTypes":["simple"],
		"baseStats":[69,62,31,58,68,58,38]
	},
	"biwarned":{
		"height":47,
		"weight":28,
		"baseAbilities":["motivational","do or die","virtuoso"],
		"baseTypes":["simple","mind"],
		"baseStats":[113,80,44,97,98,97,56]
	},
	"lantot":{
		"height":15,
		"weight":2,
		"baseAbilities":["wildfire","do or die","sendoff"],
		"baseTypes":["fire"],
		"baseStats":[41,62,62,42,69,45,63]
	},
	"lantorch":{
		"height":40,
		"weight":16,
		"baseAbilities":["wildfire","do or die","sendoff"],
		"baseTypes":["fire","light"],
		"baseStats":[68,80,98,62,113,71,93]
	},
	"milgoo":{
		"height":13,
		"weight":8,
		"baseAbilities":["soul siphon","do or die","devious"],
		"baseTypes":["toxic"],
		"baseStats":[62,62,27,33,66,65,69]
	},
	"rancidor":{
		"height":63,
		"weight":70,
		"baseAbilities":["soul siphon","do or die","devious"],
		"baseTypes":["toxic","ancient"],
		"baseStats":[93,80,49,59,99,92,113]
	},
	"nautling":{
		"height":14,
		"weight":8,
		"baseAbilities":["watcher","protective shell","viscid"],
		"baseTypes":["ancient","simple"],
		"baseStats":[53,46,27,15,27,15,17]
	},
	"nautillect":{
		"height":51,
		"weight":120,
		"baseAbilities":["watcher","wise","viscid"],
		"baseTypes":["ancient","mind"],
		"baseStats":[106,82,59,74,105,115,34]
	},
	"naukout":{
		"height":53,
		"weight":101,
		"baseAbilities":["watcher","assertive","viscid"],
		"baseTypes":["ancient","brawler"],
		"baseStats":[106,82,105,115,59,74,34]
	},
	"yutiny":{
		"height":26,
		"weight":47,
		"baseAbilities":["triumph","petrifying","tumultuous"],
		"baseTypes":["ancient","air"],
		"baseStats":[47,57,61,31,24,53,59]
	},
	"yuteen":{
		"height":62,
		"weight":123,
		"baseAbilities":["triumph","petrifying","tumultuous"],
		"baseTypes":["ancient","air"],
		"baseStats":[61,69,80,42,37,72,73]
	},
	"yutyphoon":{
		"height":110,
		"weight":556,
		"baseAbilities":["triumph","petrifying","tumultuous"],
		"baseTypes":["ancient","air"],
		"baseStats":[82,87,115,66,61,95,104]
	},
	"venile":{
		"height":26,
		"weight":55,
		"baseAbilities":["power claw","venomous","brutal wrath"],
		"baseTypes":["ancient","toxic"],
		"baseStats":[47,57,61,53,24,31,59]
	},
	"verinox":{
		"height":64,
		"weight":133,
		"baseAbilities":["power claw","venomous","brutal wrath"],
		"baseTypes":["ancient","toxic"],
		"baseStats":[61,69,80,72,37,42,73]
	},
	"verinosaur":{
		"height":116,
		"weight":637,
		"baseAbilities":["power claw","venomous","brutal wrath"],
		"baseTypes":["ancient","toxic"],
		"baseStats":[82,87,115,95,61,66,104]
	},
	"nymvolt":{
		"height":37,
		"weight":12,
		"baseAbilities":["thunder summon","recurrent","charged arc"],
		"baseTypes":["electric","bug"],
		"baseStats":[43,60,29,30,40,59,70]
	},
	"ohmbolt":{
		"height":39,
		"weight":27,
		"baseAbilities":["thunder summon","recurrent","charged arc"],
		"baseTypes":["electric","bug"],
		"baseStats":[66,93,29,54,51,77,70]
	},
	"plasmoth":{
		"height":69,
		"weight":106,
		"baseAbilities":["thunder summon","recurrent","charged arc"],
		"baseTypes":["electric","bug"],
		"baseStats":[86,93,49,67,84,109,112]
	},
	"cicalute":{
		"height":15,
		"weight":9,
		"baseAbilities":["metamorphosis","mesmerizing","expertise"],
		"baseTypes":["bug","mind"],
		"baseStats":[43,64,29,65,29,53,40]
	},
	"violana":{
		"height":32,
		"weight":29,
		"baseAbilities":["metamorphosis","mesmerizing","expertise"],
		"baseTypes":["bug","mind"],
		"baseStats":[68,97,43,116,89,112,61]
	},
	"goswing":{
		"height":13,
		"weight":7,
		"baseAbilities":["compliant","burgler","hydrate"],
		"baseTypes":["air","simple"],
		"baseStats":[50,92,59,43,34,41,66]
	},
	"ganderveil":{
		"height":40,
		"weight":33,
		"baseAbilities":["compliant","burgler","hydrate"],
		"baseTypes":["air","simple"],
		"baseStats":[86,107,109,71,56,68,93]
	},
	"banooh":{
		"height":13,
		"weight":8,
		"baseAbilities":["shakedown","assertive","berserk"],
		"baseTypes":["simple"],
		"baseStats":[41,45,24,25,24,25,66]
	},
	"banokey":{
		"height":41,
		"weight":37,
		"baseAbilities":["shakedown","assertive","berserk"],
		"baseTypes":["simple","brawler"],
		"baseStats":[97,89,124,50,74,50,96]
	},
	"spirwix":{
		"height":8,
		"weight":5,
		"baseAbilities":["disenchant","raging fire","devious"],
		"baseTypes":["fire","spirit"],
		"baseStats":[40,61,29,50,100,50,45]
	},
	"malevowax":{
		"height":25,
		"weight":18,
		"baseAbilities":["disenchant","raging fire","devious"],
		"baseTypes":["fire","spirit"],
		"baseStats":[85,81,49,95,120,95,75]
	},
	"grievestone":{
		"height":35,
		"weight":189,
		"baseAbilities":["sob","bitter touch","seize"],
		"baseTypes":["earth","spirit"],
		"baseStats":[48,43,30,85,85,30,30]
	},
	"obelost":{
		"height":86,
		"weight":747,
		"baseAbilities":["wail","bitter touch","seize"],
		"baseTypes":["earth","spirit"],
		"baseStats":[84,73,50,135,135,50,60]
	},
	"jimby":{
		"height":13,
		"weight":9,
		"baseAbilities":["fortissimo","carol","virtuoso"],
		"baseTypes":["simple"],
		"baseStats":[40,58,28,27,81,100,90]
	},
	"piccolio":{
		"height":32,
		"weight":24,
		"baseAbilities":["fortissimo","carol","virtuoso"],
		"baseTypes":["simple"],
		"baseStats":[80,79,48,47,111,120,90]
	},
	"wassel":{
		"height":15,
		"weight":15,
		"baseAbilities":["adorable","elusive"],
		"baseTypes":["ice"],
		"baseStats":[29,35,38,10,14,21,53]
	},
	"borealisk":{
		"height":113,
		"weight":187,
		"baseAbilities":["upper hand","elusive"],
		"baseTypes":["ice"],
		"baseStats":[98,70,118,57,68,101,103]
	},
	"snicle":{
		"height":37,
		"weight":24,
		"baseAbilities":["puncture","toxic sac"],
		"baseTypes":["ice","dark"],
		"baseStats":[30,30,53,49,34,29,47]
	},
	"slivyce":{
		"height":86,
		"weight":56,
		"baseAbilities":["puncture","toxic sac"],
		"baseTypes":["ice","dark"],
		"baseStats":[83,83,102,103,73,61,88]
	},
	"nukichi":{
		"height":21,
		"weight":13,
		"baseAbilities":["lucky","sly","handy"],
		"baseTypes":["simple"],
		"baseStats":[54,75,89,45,53,37,96]
	},
	"dainuki":{
		"height":37,
		"weight":68,
		"baseAbilities":["lucky","sly","handy"],
		"baseTypes":["simple"],
		"baseStats":[108,96,89,93,53,61,96]
	},
	"duskit":{
		"height":37,
		"weight":37,
		"baseAbilities":["harmonise","mean spirited"],
		"baseTypes":["spirit","mind"],
		"baseStats":[74,100,100,81,132,104,109]
	},
	"ikazune":{
		"height":69,
		"weight":84,
		"baseAbilities":["raging fire","rechargeable"],
		"baseTypes":["fire","electric"],
		"baseStats":[72,115,119,62,149,89,94]
	},
	"protogon":{
		"height":103,
		"weight":297,
		"baseAbilities":["analyse","replicate"],
		"baseTypes":["metal"],
		"baseStats":[58,118,82,99,121,101,121]
	},
	"dakuda":{
		"height":86,
		"weight":298,
		"baseAbilities":["brute force","hydrate"],
		"baseTypes":["water"],
		"baseStats":[99,119,127,86,95,77,97]
	},
	"dakuda overcharged":{
		"height":0,
		"weight":0,
		"baseAbilities":["railgun"],
		"baseTypes":["water","electric"],
		"baseStats":[119,119,95,96,157,87,77],"soulBurst":true
	},
	"cosmeleon":{
		"height":74,
		"weight":188,
		"baseAbilities":["adaptable"],
		"baseTypes":["simple"],
		"baseStats":[100,100,100,100,100,100,100]
	},
	"mutagon":{
		"height":92,
		"weight":276,
		"baseAbilities":["tank","heavy fists"],
		"baseTypes":["mind","brawler"],
		"baseStats":[107,123,114,139,78,68,71]
	},
	"cephalops":{
		"height":99,
		"weight":310,
		"baseAbilities":["bloodsucker","nightmarish"],
		"baseTypes":["water","dark"],
		"baseStats":[164,116,96,69,129,74,52]
	},
	"elephage":{
		"height":35,
		"weight":21,
		"baseAbilities":["malware","replicate"],
		"baseTypes":["electric"],
		"baseStats":[105,90,55,55,125,55,110]
	},
	"phagenaut":{
		"height":107,
		"weight":252,
		"baseAbilities":["malware","overcharged"],
		"baseTypes":["electric"],
		"baseStats":[105,105,75,120,145,55,95]
	},
	"glacadia":{
		"height":122,
		"weight":521,
		"baseAbilities":["chilling passion","deep frostbite"],
		"baseTypes":["ice","ancient"],
		"baseStats":[96,115,88,69,119,102,111]
	},
	"arceros":{
		"height":116,
		"weight":436,
		"baseAbilities":["burning rage","third degree burn"],
		"baseTypes":["fire","ancient"],
		"baseStats":[96,115,119,112,88,79,91]
	},
	"novadeaus":{
		"height":145,
		"weight":946,
		"baseAbilities":["obsidian heart"],
		"baseTypes":["fire","ice"],
		"baseStats":[96,115,134,90,134,80,101]
	},
	"morphezu":{
		"height":0,
		"weight":0,
		"baseAbilities":["sky borne"],
		"baseTypes":["air"],
		"baseStats":[115,90,55,55,150,100,85]
	},
	"behemoroth":{
		"height":0,
		"weight":0,
		"baseAbilities":["land borne"],
		"baseTypes":["earth"],
		"baseStats":[115,90,150,100,55,55,85]
	},
	"leviatross":{
		"height":0,
		"weight":0,
		"baseAbilities":["depth borne"],
		"baseTypes":["water"],
		"baseStats":[115,90,100,55,85,55,150]
	},
	"cosmiore encased":{
		"height":0,
		"weight":0,
		"baseAbilities":["enchanted coat","quick recovery"],
		"baseTypes":["ancient","mind"],
		"baseStats":[99,145,68,135,84,98,46]
	},
	"cosmiorecracked":{
		"height":0,
		"weight":0,
		"baseAbilities":["enchanted coat","eager"],
		"baseTypes":["ancient","mind"],
		"baseStats":[99,115,68,115,124,78,76]
	},
	"cosmioreunleashed":{
		"height":0,
		"weight":0,
		"baseAbilities":["cosmic pressure","idiosyncratic"],
		"baseTypes":["ancient","mind"],
		"baseStats":[99,105,134,105,68,68,96]
	},
	"solnecta":{
		"height":40,
		"weight":29,
		"baseAbilities":["night light","intensify"],
		"baseTypes":["bug","light"],
		"baseStats":[111,81,96,80,129,92,86]
	},
	"nymaurae":{
		"height":27,
		"weight":21,
		"baseAbilities":["quick recovery","incandescent"],
		"baseTypes":["light","air"],
		"baseStats":[76,115,66,77,119,122,100]
	},
	"nymesis":{
		"height":37,
		"weight":25,
		"baseAbilities":["impose","pitch black"],
		"baseTypes":["dark","air"],
		"baseStats":[76,115,66,77,119,122,100]
	},
	"metronette":{
		"height":38,
		"weight":67,
		"baseAbilities":["mysterious cloak","applied frustration"],
		"baseTypes":["dark","mind"],
		"baseStats":[83,128,84,69,127,79,105]
	},
	"metronettewillbound":{
		"height":0,
		"weight":0,
		"baseAbilities":["demanding"],
		"baseTypes":["dark","mind"],
		"baseStats":[83,98,134,69,147,79,115],"soulBurst":true
	},
	"nevermare":{
		"height":98,
		"weight":487,
		"baseAbilities":["razor sharp","frenzy"],
		"baseTypes":["plant","spirit"],
		"baseStats":[66,120,113,89,66,110,111]
	},
	"gargolem base":{
		"height":0,
		"weight":0,
		"baseAbilities":["immunized","master"],
		"baseTypes":["earth","air"],
		"baseStats":[55,105,120,85,120,85,105]
	},
	"gargolem attack":{
		"height":0,
		"weight":0,
		"baseAbilities":["immunized","master"],
		"baseTypes":["earth","air"],
		"baseStats":[55,105,165,40,165,40,105]
	},
	"gargolem defense":{
		"height":0,
		"weight":0,
		"baseAbilities":["immunized","master"],
		"baseTypes":["earth","air"],
		"baseStats":[55,105,60,165,60,165,65]
	},
	"gargolem speed":{
		"height":0,
		"weight":0,
		"baseAbilities":["immunized","master"],
		"baseTypes":["earth","air"],
		"baseStats":[55,105,90,85,90,85,165]
	},
	"odoyaga":{
		"height":74,
		"weight":422,
		"baseAbilities":["hag","frenzy"],
		"baseTypes":["mind","air"],
		"baseStats":[93,95,103,109,131,73,71]
	},
	"wabalisc":{
		"height":86,
		"weight":132,
		"baseAbilities":["ignorant","hasty"],
		"baseTypes":["ice"],
		"baseStats":[106,103,99,88,112,98,69]
	},
	"akhalos":{
		"height":70,
		"weight":245,
		"baseAbilities":["aqua body","aggressive"],
		"baseTypes":["ice","water"],
		"baseStats":[116,94,120,97,73,91,84]
	},
	"celesting":{
		"height":33,
		"weight":47,
		"baseAbilities":["reverberate","mystic tone"],
		"baseTypes":["metal","light"],
		"baseStats":[125,125,63,79,108,84,91]
	},
	"celestingstellarchime":{
		"height":0,
		"weight":0,
		"baseAbilities":["effulgent"],
		"baseTypes":["metal","light"],
		"baseStats":[150,111,82,19,128,114,121],"soulBurst":true
	},
	"mimask":{
		"height":57,
		"weight":76,
		"baseAbilities":["mask swap","facade"],
		"baseTypes":["dark"],
		"baseStats":[95,113,117,65,107,65,113]
	},
	"grimyuline":{
		"height":98,
		"weight":234,
		"baseAbilities":["sharp edges","sharp claws"],
		"baseTypes":["dark","brawler"],
		"baseStats":[101,78,107,110,84,97,98]
    }
}