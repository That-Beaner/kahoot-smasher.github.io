if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $(document).ready(function(){
        $("#mobileBody").css("display","block");
        $("#body").css("display","none");
        if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            $("#iphoneBody").css("display","block");
        }
    });
} else {
    var buildNumber = 0;
    var isSmasherInstalled = false;
    var loadInline = true;
    var numberOfKahoots = 20;
    var showCSS = false;
    var addMoreButton = document.createElement("input");
    var namingMethod = 0;
    var namingMethods = ["Random name","Random Ending","Choose Name"];
    var namesExample = [   "Mohxy", "Vxire", "Gahmuret", "Tara", "Tomi", "Argor", "Kelretu", "Polyzynn", "Tekrala", "Kesta", "Suelle",
"cuntlad", "BuyMyAids", "Wilihey", "Milkshook", "Kanker Luke", "SUCK YOUR MUM", "Acer", "ChRoMoSoMe CoLlEcToR",
"Deep-fried Daddy", "Deli Tuna", "Jordane", "W33d Goddess", "H3mp Goddess", "Ben Dover", "Eileen Dover", 
"Suq Madiq", "Bita Negar", "Adolf_Hipster", "Fascist Deli", "Rusty Tromboner", "ur search history", "actual dirt",
"Adolphin", "Tana", "noggers are bad", "IceWallowCome", "Akane", "Kareina", "IGassedJuice", "xDEFCONx", "Drazzle",
"cuckling", "Dirty Dan", "Kat", "Ken", "SassySelty", "Ria", "Yoru", "Korodo", "Meatbeater6000", "noihu", "Ryki",
"Memes.DLL", "Unspeakable Yeet", "*unoriginal nickname*", "a disappointment", "AUSHWITZ JUDEN '47", "bean swallow",
"Belgian Fries", "Brandy", "Cumstain Catharsis", "defective toe man", "Eikster", "FleetOfYeet", "Galactic Retard",
"Gudendrunk", "iwanttodie", "Kamibel", "Nyxan", "scilz", "Dertixz", "Kaufee", "Gaslarga", "Gargix", "Nimmy Jeutron",
"Sexy Vegan", "XXXTentacion", "XXXTerminated", "Yharon", "XXXTinguished", "Sora", "3spooky5me", "Alcoholic Kitty",
"Allarus", "Arima", "Baltazoiro", "Bayru", " Brisingrvindr", "Captain Java", "D3SOLATION", "Darius", "Amy", "Arella",
"Diet Coke", "Bepsis", "el conke", "Erich Von Manstein", "Exodia", "Astaea", "Lindford", "Figueira", "foxburn",
"go commit helpfulness", "go commit tower jump", "go commit neck rope", "God", "Hypl3x", "Kaiser Wilhelm", "Kyrie",
"Lunaria", "Neutrix", "Trisha", "Dante", "Lucy", "Nostalgion", "jail-bait", "not jail-bait", "Octopuss", "1-inch wonder",
"2-inch punisher", "Jewslayer69", "Pussyslayer9000", "Jewspanker6000", "Phynox", "sadist", "Shireen Mazari", "shoot me",
"Shrok", "Spitzkopf Larry", "T H U N D E R T H I G H S", "Taint Painter", "printf('Goodbye, world/n');", "Microsoft Github",
"thotdog", "thotimus prime", "BuildTheWall", "Shrauger", "Beloxy", "Virgina", "cucker", "Loak", "Cancer.exe", "AIDS.DLL",
"please send help", "Yavin", "Mars", "Jupiter", "Savitar", "Pluto", "Heinrich Himmler", "Bastet", "Anubis", "ur mom big gay", 
"hi welcome to chilis", "Xx_W33B_xX", "Uranus", "begone thot", "domesticated thot", "Puck Uranus", "Yuck Fou", "SilentMemer", 
"Mr. Ethnic Cleansing", "Scheibe", "cyka blyat", "Der Mist", "Geh Zum Teufel", "Arschloch", "Arschgeige", "Dummkopf", 
"Wifebeater9000", "Karl Marx", "Puto", "Mierda", "clapping gorilla cheeks", "Veegee", "Arason", "Furfag", "show bob and vegene", 
"Zoey", "Joey", "Cyrus", "Cynthia", "Meme Queen", "Robby Rotten", "Sportacus", "Alfred", "Serena", "Tristan", "Andy", "Billy Beta", 
"Zenny", "hi daddy", "Kim-Jung Uno", "Aphrodite", "PAPA SNAKU", "100% Fascism", "Linux4Lyfe", "chrome big pp", "Brok3n", "AUTISM", 
"Cupcakes4Jesus", "Peter Porker", "Boang Woman", "Republicunt", "DemocRAT", "Adderall.exe", "some object", "Pole Smoker", "Swamp Donkey", 
"*Autistic Screech*", "Bong Huffer", "BAN ALL FURRIES", "Reefer", "SpankBank", "Swiggster", "Punani", "Swive", "Felch", "W A N K E R", 
"Sernie Banders", "Covfefe", "Pickle Rick", "xX_Suicidal_Xx", "Asthma.exe", "Stiffy Knight", "Claire", "Rump Ranger", "Elon Musk", 
"Elongated Muskrat", "Jim Crow", "Nayq", "Mordekai", "Bruno", "Gesely", "bush did 9/11", "Bob Ross", "Communist Pubes", "Faguette", 
"Brit Jew", "Trotsky", "Sir Comcision", "Sshady", "Sona", "liam_lee", "Trico", "Kirby", "pls begone", "im already tracer", "Dexter", '
"Soney", "Desperate Cheeto", "Sonas's Shibe", "cunbwozr", "natzi", "lukebennett", "Grandfather Richard", "Krismine", "xYcLaS", 
"Shen Bapiro", "0x0000C1F5", "Joller", "Ms. Steal Your Meme", "Ambien Effluvium", "bobby barnaclesauce", "cool vibrations", 
"ghetto-gaser", "Monch", "Tymon.G0101", "<insert name>", "Abaddon the Harmless", "Dickard I", "doot", "E G G", 
"I'm poor buy me now", "Jopatsu", "kev2468068", "Kowalex", "KriegsKatze", "Mint Enslaver", "Saint Codreanu", "Reynauld", 
"spookuette", "Australia isn't real", "autistic lobster", "Baltazoiro", "BlickyTheSticky", "CypherFr", "daborini mccheese", 
"Detriment to Society", "Disabled Donkey", "elmo is ready", "everyone below me is gay", "everyone above me is gay", 
"Jocelyn", "octopussy", "Rapidity", "Shr00m", "Shrektus Memeington", "supreme allah", "The Spaghet Monster", "choke me daddy", 
"yeet yeet potato skeet", "Weaseliovich", "you have homosexual", "10 cm pp not small", "21Savage", "6 million wasnt enough", 
"99Ninety", "Zalaniro", "A7MED.27", "Alyenne", "Alyrias", "arab-obama", "Autisify", "Bentleyyy", "Bitchard", "Birkenstock", 
"Blasty McSplodey", "bootylock", "Cantillon", "ligmasurvivor", "Yggdrasil", "Brie", "Gassed Tea", "Caustic Goose", "flikersprigs", 
"Malthius", "Muskchops", "Kryptonik", "Beartikal", "Zyleak", "Voltaire", "Fetharis", "Byxes", "serelyy", "JustHail", "Lindford", 
"Raviz", "Altheru", "cocolouis", "AssaultDragon55", "foxbattler1", "Croc_Gamer", "DaeshH", "CrazypersonfunXD", "Geek_BO3", "harmcool", 
"IZenrusI", "Inductive", "Lixer_YT", "PartiallyKnown", "Potting", "rockon8771", "KyraReaper", "Soul_000", "AxisAngle", "Lunya", 
"Defaultio", "LordNobody", "The13thHippie", "Fraxium", "Velktor", "xTacticalBear", "SC3PTRE", "Garlix", "KylieHuntress", "drainsights", 
"popsights", "Kavunal", "BlizzardReaper", "Wolfaxius", "Lancast", "Pragmatist", "Polymorphic", "ColourTheory", "Optiics", "poisonlava",
"kinglime", "Sigars13", "killer6199", "WizardGeometry", "FractalGeometry", "RobotGeometry", "TwentyTwoPilots", "Ucalegen", "pwner195", 
"InnovatedFighting", "rockedison23", "Plebian", "ZenMeteor", "TranscendantGlory", "Drazeox", "threedragons", "zepenguin4", "Jimnize", 
"DoctorSatan", "blocksniper", "Shirida", "CptArcadia", "Valrath", "paul321321", "Shatteroni", "Mydrek", "p3el", "Aerolyte", "Frostaxius",
"DystraTala", "WVFighter", "nitroyoshi9", "parasights", "Leblancs", "RAAFighter", "ryanhero", "Surgo", "Scripth", "iroctheworld", "LordHammy", 
"EgoMoose", "IllusionOfTruth", "Sharksie", "Living_Knightmare", "Anti_Cristus", "sk3let0n", "CrimsonForce", "Tori56780", "TrueSimplicity", 
"SeraphSelaphiel", "ExaltedReign", "Lychus", "APPOL_O", "TrueAuthor", "EternalReign", "Lyxm", "ShatteredWish", "pkwy", "TopSpek", "Biofrostt", 
"Frenzyl", "r_aidmaster","matem", "UnchangedUnnamed", "ToastVersalius", "ReaperMagic", "rockyacid123", "AustinWinfree", "NazaraXII", "Khadrak",  
"Vaktus", "Norbod", "Keyrut", "Sword960", "robbe12345", "sSFireDragonSs", "CanadianDevKelly", "Polyhex", "OriginatedSystemized","Malvus", "zazlious", 
"Ahnu", "AnimefanXD", "Robloxinaterr", "eLunate", "Stratiz", "Voslaaarum", "w_armaster", "Volcrow", "Blandue", "DoctorDreygon", "ProelooVersalius", 
"BryantSeverloh", "iiFirestorm", "Terkiosh", "Smog879", "RobloxSpartacus","LucRobitaille", "syscall", "zlib", "CodeSleepRepeat", "ShatteredQ", "lArlongl", 
"PlatinumPatriot", "pr0k1ll3r", "Friaza","FadedWrath", "Locust_1", "Ventique", "iMcm99", "iManCrushMondays", "Madkugan11", "cheyenne8207", "Aceslayer13", 
"Bieq","1Sonic1", "StarlightNightmare", "Channy97", "Vexentio", "PhantomSolaris", "LordVinyl", "SicklyAscendant", "rxic", "HopelessSoul","oKurami", "cynv", 
"shrauger", "VendettaSenpai", "cerino", "Bakugan11", "Timeless", "Pr_phet", "Mzurii", "Parrris", "jmotoyama", "sodapopzilla", "TyeMan", "ImNotXudios", 
"WickedMemory", "LivnraThane", "W1nt3rz", "Facuchido", "SONICTHEHEDGEHOGXX", "Dertixz", "4Bros", "devinzeth", "Drak0Lord", "TwistedPumpkin", "Echo3VX", 
"paulshadow", "MistahEye", "soulstyce", "ElegantReign", "Nyxan", "Astaea", "iEeveelution", "Tasha5266", "Shadraft", "DarkHyspano", "TinfoiledMan", 
"MonkrysGhost", "VyrissTheVixen","Synull", "TheFurryFox", "Musskka", "lucided", "eamon", "Dhammapada", "ImageLabel", "kewtey", "pikachu734", 
"Unflushable_Turd", "WatchtowerRobin", "xoVadez", "Zefeated", "Mochro", "babymariobebe", "BrendonTheWizard", "ChuckXZ", "DevAppeared", "DevKurka",
"DevPig", "DevUltra", "FedoraGFX", "Golubian", "magnalite", "Membra", "MetaProx", "Mxstified", "Northerliness", "Rdite","Relaix", "Vedrakkerous", 
"virtual_blocks", "Vorp_al", "Waleris", "Xinovix", "Adv4ncd", "Apeturez", "Irish_Dev","Ostracism", "toocrusty", "Arexeum", "Backdoor_Bandits", 
"CelestialSupport", "MountainJew", "CreepySins", "EmberAPI", "Incending", "Inkwood","kreedzzr", "LuciferXIV", "P0FFLEY", "Premier_Khrushchev", 
"ReturnOfJimmy", "SebastianAurum", "SpookyStreams", "Trx_Lxrd", "wh0stom", "Y7ML", "4straworld", "Alphirex", "br_cks", "FluentLua", "Mythria", 
"NewFissy", "paraspec", "Verphos", "Rainwayy", "ComedicValor", "Zornarak", "Bethezer", "P_ristine", "Uillion", "Cazelu", "CrispyBrix", "SyntaxLeader", 
"V3N0M", "Xepois", "Aetherio", "Birb 2.0", "Ep1cism", "NoobyGFX", "Respirize", "SkullStoke", "Vilce", "e p i c g a m e r", "beer", "lucided", "scriptide", 
"MysticMnky", "EtherealMiracle", "Operatik", "EGOTISMS", "H_txpss", "IngwerPanzer", "jxnsoulz", "aezrano", "AlmondTeodric", "Animania", "GenerationBlue", 
"approxiess", "AutisticFella", "Chineseboy14", "dalekcats", "HelmsCreations", "MrAsianFunTime", "m1kc", "LoverVIII", "Lonastastic", "Nexuls", "SA1NTLY", 
"0xfab1e", "AncientYears", "DecodeUnicode", "Exilationz", "Hypergolicity", "insane_r", "Polyheximal", "SaraAsami", "ScriptingVoid", "Scriptistic", "Spackas", 
"ThomasChabot", "Tomatoe_s", "Twinbrotato", "yakana", "YunPlant", "02david02", "0Skyz", "InfinityDesign", "FatDeveloper", "Melonic", "Roytt", "Ryd3r_04", 
"SpencerKarzontius", "a_nton", "AbyssusDraconem", "AcraticJester", "AdvancedAlien", "Aeonzer_RBLX", "Aequalis", "Akira_Durasov", "AltOfKing", "Arcytek", 
"AT_E", "Atzo", "Auxority", "Avazic", "AviaAlpha"  ];
    // var i;y
    //i = 1;,

    addMoreButton.type = "button";
    addMoreButton.value = "Smash More!";
    addMoreButton.onmousedown = function(){
        addMoreKahoots();
    };
    //addMoreButton.class = "mainpage";
    addMoreButton.style = "margin-bottom:0.5%;margin-left:0.5%;width:99%;height:50px;position:fixed;display:block;bottom:0;background-color:#333;outline: 0;box-shadow: none;border: 1px solid #2e2e2e;color:white;font-family: montserrat,'helvetica neue',helvetica,arial,sans-serif;font-weight: 700;font-size:20px;";
    $("#GamePin").keyup(function (e){
        if (e.which == 13){
            buttonClicked();
        }
    });
    function randomCaps(baseName){
        var newName = "";
        for(var i = 0; i < baseName.length; i++){
            if(Math.random() > 0.5){
                newName += baseName[i];
            } else {
                newName += baseName[i];
            }
        }
        return newName;
    }
    function generateRandomLetter(length){
        var randomLetters = "";
        var letters= "qwertyuiopasdfghjklzxcvbnm1234567890";
        for(var i = 0; i < length; i++){
            randomLetters += letters[Math.floor(Math.random() * letters.length)];
        }
        return randomLetters;   
    }
    function generateName(mode){
        var name = "";
        switch(mode){
            case 0: // Random Name
                name = randomCaps(namesExample[Math.floor(Math.random() * namesExample.length)]);
                break;
            case 1: // Random Ending
                name = ($("#base").val().substr(0, 11) + "." +generateRandomLetter(5)).substr(0, 16);
                break;
            case 2: // Random Caps
                if($("#base").val().length < 7){
                    name = randomCaps($("#base").val()) + "" +generateRandomLetter(0);
                    break;
                } else {
                    name = randomCaps($("#base").val());
                    break;
                }
                default:
                    name = "Smasher" + generateRandomLetter(5);
                }
                return name;
            }
            function updateName(){
                $("#nameExample").html("Example: " + generateName(namingMethod));
            }
            function showExtension(){
                $("#install").css("display", "block");
            }
            function hideExtension(){
                $("#install").css("display", "none");
            }
            function addMoreKahoots(){
                document.body.removeChild(addMoreButton);
                for(var i = 0; i < 5; i++){
                    var frame = document.createElement("iframe");
                    frame.src = "http://www.kahoot.it";
                    document.body.appendChild(frame);
                }
                document.body.appendChild(addMoreButton);
            }
            function showSettings(){
                $("#settings").css("display", "block");
            }
            function hideSettings(){
                numberOfKahoots = parseInt($("#numberOfKahoots").val());
                $("#settings").css("display", "none");
            }
            function showAbout(){
                $("#info").css("display","block");
            }
            function hideAbout(){
                $("#info").css("display","none");
            }
            function changeNaming(){
                namingMethod += 1;
                if(namingMethod == namingMethods.length){
                    namingMethod = 0;
                }
                if(namingMethod == 0){
                    $("#baseName").css("display", "none");
                    $("#base").css("display", "none");
                } else {
                    $("#baseName").css("display", "block");
                    $("#base").css("display", "block");
                }
                $("#namingMethod").attr('value', namingMethods[namingMethod]);
                updateName();
            }
            function toggleInLine(){
                loadInline = !loadInline;
                var newValue = "";
                if(loadInline){
                    newValue = "Yes";
                } else {
                    newValue = "No";
                }
                $("#inline").attr('value', newValue);
            }
            function loadCssToggle(){
                showCSS = !showCSS;
                var newValue = "";
                if(showCSS){
                    newValue = "Beautiful";
                } else {
            newValue = "High";
        }
        $("#cssLoad").attr('value', newValue);
        $("#asdfghjklqwertyuio").attr("cssEnabled", showCSS);
    }
    function buttonClicked(){
        if(!isSmasherInstalled){
            showExtension();
            return;
        }
        gameID = $("#GamePin").val();
        var canContinue = true;
        if(gameID == ""){
            canContinue = false;
        }
        for(var i = 0; i < gameID.length; i++){
            if(isNaN(parseInt(gameID[i]))){
                canContinue = false;
            }
        }
        if(canContinue){
            $("#asdfghjklqwertyuio").attr("value", gameID);
            $("#asdfghjklqwertyuio").attr("namingConvention", namingMethod);
            $("#asdfghjklqwertyuio").attr("baseName", $("#base").val());
            var newHTML = "<h1>Kahoot smashing in progress...</h1>";
            for(var i = 0; i < numberOfKahoots; i++){
                if(loadInline){
                    newHTML += "<iframe src='https://kahoot.it'></iframe>";
                } else {
                    window.open("https://www.kahoot.it");
                }
            }
            if(loadInline){
                $("#body").html(newHTML);
            }
            document.body.appendChild(addMoreButton);
        }
    }
    $(document).ready(function(){setTimeout(function(){
        updateName();
        $('#GamePin').on('keyup', function(e){
            if(e.keyCode == 13){
                buttonClicked();
            }
        });
    },500);})
}
