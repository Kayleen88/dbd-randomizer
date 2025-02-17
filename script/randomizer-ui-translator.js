class RandomizerUiTranslator {
    constructor() {
        this.locale = 'en';
    }

    getTranslation(key) {
        let translations = TRANSLATIONS[this.locale];

        return translations[key];
    }
}

const TRANSLATIONS = {
    'en': {
        "UI_RANDOMIZE_LABEL": "Randomize",
        "UI_RANDOMIZE_WITH_PERKS_LABEL": "with perks",
        "UI_ANY": "Any",
        "UI_KILLER": "Killer",
        "UI_SURVIVOR": "Survivor",
        "UI_PERKS_ONLY": "Perks Only",
        "UI_ITEMS_ONLY": "Items Only",
        "UI_OFFERS_ONLY": "Offers Only",
        "UI_OVERLAY_TEXT1": "THE WHEELS ARE TURNING!",
        "UI_OVERLAY_TEXT2": "LET'S GO!",
        "UI_OVERLAY_RESULT_KILLER": "KILLER IT IS!",
        "UI_OVERLAY_RESULT_SURVIVOR": "SURVIVOR IT IS!",
        "CHARACTER_DWIGHT": "Dwight Fairfield",
        "CHARACTER_MEG": "Meg Thomas",
        "CHARACTER_CLAUDETTE": "Claudette Morel",
        "CHARACTER_JAKE": "Jake Park",
        "CHARACTER_JEFF": "Jeff Johansen",
        "CHARACTER_NEA": "Nea Karlsson",
        "CHARACTER_BILL": "Bill Overbeck",
        "CHARACTER_DAVID": "David King",
        "CHARACTER_LAURIE": "Laurie Strode",
        "CHARACTER_ACE": "Ace Visconti",
        "CHARACTER_FENG": "Feng Min",
        "CHARACTER_QUENTIN": "Quentin Smith",
        "CHARACTER_TAPP": "David Tapp",
        "CHARACTER_KATE": "Kate Denson",
        "CHARACTER_FRANCIS": "Adam Francis",
        "CHARACTER_JANE": "Jane Romero",
        "CHARACTER_ASH": "Ashley \"Ash\" Joanna Williams",
        "CHARACTER_NANCY": "Nancy Wheeler",
        "CHARACTER_STEVE": "Steve Harrington",
        "CHARACTER_KIMURA": "Yui Kimura",
        "CHARACTER_ZARINA": "Zarina Kassir",
        "CHARACTER_CHERYL": "Cheryl Mason",
        "CHARACTER_FELIX": "Felix Richter",
        "CHARACTER_ELODIE": "Élodie Rakoto",
        "CHARACTER_YUN-JIN": "Yun-Jin Lee",
        "CHARACTER_JILL": "Jill Valentine",
        "CHARACTER_LEON": "Leon Scott Kennedy",
        "CHARACTER_MIKAELA": "Mikaela Reid",
        "CHARACTER_JONAH": "Jonah Vasquez",
        "CHARACTER_CLOWN": "Jeffrey Hawk (Clown)",
        "CHARACTER_DOCTOR": "Herman Carter (Doctor)",
        "CHARACTER_FREDDY": "Freddy Krueger",
        "CHARACTER_HAG": "Lisa Sherwood (Hag)",
        "CHARACTER_HILLBILLY": "Max Thompson Jr. (Hillbilly)",
        "CHARACTER_HUNTRESS": "Anna (Huntress)",
        "CHARACTER_LEATHERFACE": "Junior Sawyer (Cannibal)",
        "CHARACTER_LEGION": "F. J. S. J. (Legion)",
        "CHARACTER_MYERS": "Michael Myers",
        "CHARACTER_NURSE": "Sally Smithson (Nurse)",
        "CHARACTER_PIG": "Amanda Young (Pig)",
        "CHARACTER_SPIRIT": "Rin Yamaoka (Spirit)",
        "CHARACTER_TRAPPER": "Evan MacMillan (Trapper)",
        "CHARACTER_WRAITH": "Philip Ojomo (Wraith)",
        "CHARACTER_PLAGUE": "Adiris (Plague)",
        "CHARACTER_GHOSTFACE": "Jed Olsen (Ghost Face)",
        "CHARACTER_DEMOGORGON": "The Demogorgon",
        "CHARACTER_ONI": "Kazan Yamaoka (Oni)",
        "CHARACTER_DEATHSLINGER": "Caleb Quinn (Deathslinger)",
        "CHARACTER_EXECUTIONER": "Pyramid Head (Executioner)",
        "CHARACTER_BLIGHT": "Talbot Grimes (Blight)",
        "CHARACTER_TWINS": "Victor & Charlotte Deshayes",
        "CHARACTER_ARTIST": "Carmina Mora (Artist)",
        "CHARACTER_TRICKSTER": "Ji-Woon Hak (Trickster)":,
        "CHARACTER_CENOBITE": "Elliot Spenser (Cenobite)",
        "CHARACTER_NEMESIS": "Nemesis T-Type",
        "PERK_AGITATION": "Agitation",
        "PERK_ANURSESCALLING": "A Nurse's Calling",
        "PERK_BAMBOOZLE": "Bamboozle",
        "PERK_BBQANDCHILI": "Barbecue & Chilli",
        "PERK_BEASTOFPREY": "Beast Of Prey",
        "PERK_BITTERMURMUR": "Bitter Murmur",
        "PERK_BLOODHOUND": "Bloodhound",
        "PERK_BLOODWARDEN": "Blood Warden",
        "PERK_BRUTALSTRENGTH": "Brutal Strength",
        "PERK_COULROPHOBIA": "Coulrophobia",
        "PERK_DEERSTALKER": "Deerstalker",
        "PERK_DEVOURHOPE": "Hex: Devour Hope",
        "PERK_DISCORDANCE": "Discordance",
        "PERK_DISTRESSING": "Distressing",
        "PERK_DYINGLIGHT": "Dying Light",
        "PERK_ENDURING": "Enduring",
        "PERK_FIREUP": "Fire Up",
        "PERK_FRANKLINSLOSS": "Franklin's Demise",
        "PERK_GENERATOROVERCHARGE": "Overcharge",
        "PERK_HANGMANSTRICK": "Hangman's Trick",
        "PERK_HATRED": "Rancor",
        "PERK_HAUNTEDGROUND": "Hex: Haunted Ground",
        "PERK_HUNTRESSLULLABY": "Hex: Huntress Lullaby",
        "PERK_INSIDIOUS": "Insidious",
        "PERK_IRONGRASP": "Iron Grasp",
        "PERK_IRONMAIDEN": "Iron Maiden",
        "PERK_KNOCKOUT": "Knock Out",
        "PERK_LIGHTBORN": "Lightborn",
        "PERK_MADGRIT": "Mad Grit",
        "PERK_MAKEYOURCHOICE": "Make Your Choice",
        "PERK_MONITORANDABUSE": "Monitor & Abuse",
        "PERK_MONSTROUSSHRINE": "Monstrous Shrine",
        "PERK_NOONEESCAPESDEATH": "Hex: No One Escapes Death",
        "PERK_OVERWHELMINGPRESENCE": "Overwhelming Presence",
        "PERK_PLAYWITHYOURFOOD": "Play With Your Food",
        "PERK_POPGOESTHEWEASEL": "Pop Goes The Weasel",
        "PERK_PREDATOR": "Predator",
        "PERK_REMEMBERME": "Remember Me",
        "PERK_RUIN": "Hex: Ruin",
        "PERK_SAVETHEBESTFORLAST": "Save The Best For Last",
        "PERK_SHADOWBORN": "Shadowborn",
        "PERK_SLOPPYBUTCHER": "Sloppy Butcher",
        "PERK_SPIESFROMTHESHADOWS": "Spies From The Shadows",
        "PERK_SPIRITFURY": "Spirit Fury",
        "PERK_STRIDOR": "Stridor",
        "PERK_SURVEILLANCE": "Surveillance",
        "PERK_TERRITORIALIMPERATIVE": "Territorial Imperative",
        "PERK_THATANOPHOBIA": "Thanatophobia",
        "PERK_THETHIRDSEAL": "Hex: The Third Seal",
        "PERK_THRILLOFTHEHUNT": "Hex: Thrill Of The Hunt",
        "PERK_TINKERER": "Tinkerer",
        "PERK_UNNERVINGPRESENCE": "Unnerving Presence",
        "PERK_UNRELENTING": "Unrelenting",
        "PERK_WHISPERS": "Whispers",
        "PERK_CORRUPTINTERVENTION": "Corrupt Intervention",
        "PERK_DARKDEVOTION": "Dark Devotion",
        "PERK_INFECTIOUSFRIGHT": "Infectious Fright",
        "PERK_DRAGONSGRIP" : "Dragon's Grip",
        "PERK_HEXBLOODFAVOR" : "Hex: Blood Favour",
        "PERK_HEXUNDYING" : "Hex: Undying",
        "PERK_ACEINTHEHOLE": "Ace In The Hole",
        "PERK_ADRENALINE": "Adrenaline",
        "PERK_AFTERCARE": "Aftercare",
        "PERK_ALERT": "Alert",
        "PERK_AUTODIDACT": "Autodidact",
        "PERK_BALANCEDLANDING": "Balanced Landing",
        "PERK_BOILOVER": "Boil Over",
        "PERK_BOND": "Bond",
        "PERK_BORROWEDTIME": "Borrowed Time",
        "PERK_BOTANYKNOWLEDGE": "Botany Knowledge",
        "PERK_BREAKDOWN": "Breakdown",
        "PERK_CALMSPIRIT": "Calm Spirit",
        "PERK_DANCEWITHME": "Dance With Me",
        "PERK_DARKSENSE": "Dark Sense",
        "PERK_DEADHARD": "Dead Hard",
        "PERK_DECISIVESTRIKE": "Decisive Strike",
        "PERK_DEJAVU": "Déjà Vu",
        "PERK_DELIVERANCE": "Deliverance",
        "PERK_DETECTIVESHUNCH": "Detective's Hunch",
        "PERK_DISTORTION": "Distortion",
        "PERK_DIVERSION": "Diversion",
        "PERK_EMPATHY": "Empathy",
        "PERK_HOPE": "Hope",
        "PERK_IRONWILL": "Iron Will",
        "PERK_KINDRED": "Kindred",
        "PERK_LEADER": "Leader",
        "PERK_LEFTBEHIND": "Left Behind",
        "PERK_LIGHTWEIGHT": "Lightweight",
        "PERK_LITHE": "Lithe",
        "PERK_NOMITHER": "No Mither",
        "PERK_NOONELEFTBEHIND": "No One Left Behind",
        "PERK_OBJECTOFOBSESSION": "Object Of Obsession",
        "PERK_OPENHANDED": "Open-Handed",
        "PERK_PHARMACY": "Pharmacy",
        "PERK_PLUNDERERSINSTINCT": "Plunderer's Instinct",
        "PERK_PREMONITION": "Premonition",
        "PERK_PROVETHYSELF": "Prove Thyself",
        "PERK_QUICKANDQUIET": "Quick & Quiet",
        "PERK_RESILIENCE": "Resilience",
        "PERK_SABOTEUR": "Saboteur",
        "PERK_SELFCARE": "Self-Care",
        "PERK_SLIPPERYMEAT": "Slippery Meat",
        "PERK_SMALLGAME": "Small Game",
        "PERK_SOLESURVIVOR": "Sole Survivor",
        "PERK_SPINECHILL": "Spine Chill",
        "PERK_SPRINTBURST": "Sprint Burst",
        "PERK_STAKEOUT": "Stake Out",
        "PERK_STREETWISE": "Streetwise",
        "PERK_TECHNICIAN": "Technician",
        "PERK_TENACITY": "Tenacity",
        "PERK_THISISNOTHAPPENING": "This Is Not Happening",
        "PERK_UNBREAKABLE": "Unbreakable",
        "PERK_UPTHEANTE": "Up The Ante",
        "PERK_URBANEVASION": "Urban Evasion",
        "PERK_VIGIL": "Vigil",
        "PERK_WAKEUP": "Wake Up",
        "PERK_WELLMAKEIT": "We'll Make It",
        "PERK_WEREGONNALIVEFOREVER": "We're Gonna Live Forever",
        "PERK_WINDOWSOFOPPORTUNITY": "Windows Of Opportunity",
        "PERK_HEADON": "Head On",
        "PERK_POISED": "Poised",
        "PERK_SOLIDARITY": "Solidarity",
        "PERK_BUCKLEUP" : "Buckle Up",
        "PERK_FLIPFLOP" : "Flip Flop",
        "PERK_METTLEOFMAN" : "Mettle Of Man",
        "PERK_FURTIVECHASE": "Furtive Chase",
        "PERK_IMALLEARS": "I'm All Ears",
        "PERK_THRILLINGTREMORS" : "Thrilling Tremors",
        "PERK_SURGE" : "Surge",
        "PERK_CRUELLIMITS" : "Cruel Limits",
        "PERK_MINDBREAKER" : "Mindbreaker",
        "PERK_BETTERTOGETHER" : "Better Together",
        "PERK_FIXATED" : "Fixated",
        "PERK_INNERSTRENGTH" : "Inner Strength",
        "PERK_BABYSITTER" : "Babysitter",
        "PERK_CAMARADERIE" : "Camaraderie",
        "PERK_SECONDWIND" : "Second Wind",
        "PERK_ANYMEANSNECESSARY" : "Any Means Necessary",
        "PERK_BREAKOUT" : "Breakout",
        "PERK_LUCKYBREAK" : "Lucky Break",
        "PERK_BLOODECHO" : "Blood Echo",
        "PERK_NEMESIS" : "Nemesis",
        "PERK_ZANSHINTACTICS" : "Zanshin Tactics",
        "PERK_BLOODPACT" : "Blood Pact",
        "PERK_DEADMANSWITCH" : "Dead Man's Switch",
        "PERK_DEATHBOUND" : "Deathbound",
        "PERK_FORCEDPENANCE" : "Forced Penance",
        "PERK_FORTHEPEOPLE" : "For The People",
        "PERK_GEARHEAD" : "Gearhead",
        "PERK_HEXRETRIBUTION" : "Hex: Retribution",
        "PERK_OFFTHERECORD" : "Off The Record",
        "PERK_REDHERRING" : "Red Herring",
        "PERK_REPRESSEDALLIANCE" : "Repressed Alliance",
        "PERK_SOULGUARD" : "Soul Guard",
        "PERK_TRAILOFTORMENT" : "Trail Of Torment",
        "PERK_BUILTTOLAST" : "Built to Last",
        "PERK_DESPERATEMEASURES" : "Desperate Measures",
        "PERK_VISIONARY" : "Visionary",
        "PERK_APPRAISAL" : "Appraisal",
        "PERK_COUPDEGRACE" : "Coup de Grâce",
        "PERK_DECEPTION" : "Deception",
        "PERK_HOARDER" : "Hoarder",
        "PERK_OPPRESSION" : "Oppression",
        "PERK_POWERSTRUGGLE" : "Power Struggle",
        "PERK_DEADLOCK" : "Deadlock",
        "PERK_GRIMEMBRACE" : "Grim Embrace",
        "PERK_HEXCROUDCONTROL" : "Hex: Crowd Control",
        "PERK_HEXPENTIMENTO" : "Hex: Pentimento",
        "PERK_HEXPLAYTHING" : "Hex: Plaything",
        "PERK_HYSTERIA" : "Hysteria",
        "PERK_LETHALPERSUER" : "Lethal Persuer",
        "PERK_NOWAYOUT" : "No Way Out",
        "PERK_SCOURGEHOOKGIFTOFPAIN" : "Scourge Hook: Gift of Pain",
        "PERK_SCOURGEHOOKPAINRESONANCE" : "Scourge Hook: Pain Resonance",
        "PERK_STARSTRUCK" : "Starstruck",
        "PERK_BITETHEBULLET" : "Bite the Bullet",
        "PERK_BLASTMINE" : "Blast Mine",
        "PERK_BOONCIRCLEOFHEALING" : "Boon: Circle of Healing",
        "PERK_BOONEXPONENTIAL" : "Boon: Exponential",
        "PERK_BOONSHADOWSTEP" : "Boon: Shadow Step",
        "PERK_CLAIRVOYANCE" : "Clairvoyance",
        "PERK_CORRECTIVEACTION" : "Corrective Action",
        "PERK_COUNTERFORCE" : "Counterforce",
        "PERK_FASTTRACK" : "Fast Track",
        "PERK_FLASHBANG" : "Flash Bang",
        "PERK_OVERCOME" : "Overcome",
        "PERK_RESURGENCE" : "Resurgence",
        "PERK_ROOKIESPIRIT" : "Rookie Spirit",
        "PERK_SELFPRESERVATION" : "Self Preservation",
        "PERK_SMASHHIT" : "Smash Hit"
     }
}
