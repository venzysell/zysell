// =====================================
// ZYSELL - COUNTRY.JS
// Gestion mondiale des pays
// =====================================

// Pays actuellement détecté
let currentCountry = null;

// Informations du pays
let currentCountryData = null;

// Devise actuelle
let currentCurrency = "USD";

// Langue actuelle
let currentLanguage = "en";

// Liste de tous les pays
const countries = {};

// =====================================
// FONCTIONS UTILITAIRES
// =====================================

// Retourner le pays actuel
export function getCurrentCountry(){

    return currentCountry;

}

// Retourner les informations du pays
export function getCurrentCountryData(){

    return currentCountryData;

}

// Retourner la devise
export function getCurrentCurrency(){

    return currentCurrency;

}

// Retourner la langue
export function getCurrentLanguage(){

    return currentLanguage;

}
// =====================================
// AFRIQUE
// =====================================

Object.assign(countries,{

    DZ:{name:"Algérie",code:"DZ",currency:"DZD",language:"ar",phone:"+213",continent:"Africa",flag:"🇩🇿"},
    AO:{name:"Angola",code:"AO",currency:"AOA",language:"pt",phone:"+244",continent:"Africa",flag:"🇦🇴"},
    BJ:{name:"Bénin",code:"BJ",currency:"XOF",language:"fr",phone:"+229",continent:"Africa",flag:"🇧🇯"},
    BW:{name:"Botswana",code:"BW",currency:"BWP",language:"en",phone:"+267",continent:"Africa",flag:"🇧🇼"},
    BF:{name:"Burkina Faso",code:"BF",currency:"XOF",language:"fr",phone:"+226",continent:"Africa",flag:"🇧🇫"},
    BI:{name:"Burundi",code:"BI",currency:"BIF",language:"fr",phone:"+257",continent:"Africa",flag:"🇧🇮"},
    CM:{name:"Cameroun",code:"CM",currency:"XAF",language:"fr",phone:"+237",continent:"Africa",flag:"🇨🇲"},
    CV:{name:"Cap-Vert",code:"CV",currency:"CVE",language:"pt",phone:"+238",continent:"Africa",flag:"🇨🇻"},
    CF:{name:"République centrafricaine",code:"CF",currency:"XAF",language:"fr",phone:"+236",continent:"Africa",flag:"🇨🇫"},
    TD:{name:"Tchad",code:"TD",currency:"XAF",language:"fr",phone:"+235",continent:"Africa",flag:"🇹🇩"},
    KM:{name:"Comores",code:"KM",currency:"KMF",language:"fr",phone:"+269",continent:"Africa",flag:"🇰🇲"},
    CG:{name:"Congo",code:"CG",currency:"XAF",language:"fr",phone:"+242",continent:"Africa",flag:"🇨🇬"},
    CD:{name:"République démocratique du Congo",code:"CD",currency:"CDF",language:"fr",phone:"+243",continent:"Africa",flag:"🇨🇩"},
    CI:{name:"Côte d'Ivoire",code:"CI",currency:"XOF",language:"fr",phone:"+225",continent:"Africa",flag:"🇨🇮"},
    DJ:{name:"Djibouti",code:"DJ",currency:"DJF",language:"fr",phone:"+253",continent:"Africa",flag:"🇩🇯"},
    EG:{name:"Égypte",code:"EG",currency:"EGP",language:"ar",phone:"+20",continent:"Africa",flag:"🇪🇬"},
    GQ:{name:"Guinée équatoriale",code:"GQ",currency:"XAF",language:"es",phone:"+240",continent:"Africa",flag:"🇬🇶"},
    ER:{name:"Érythrée",code:"ER",currency:"ERN",language:"ti",phone:"+291",continent:"Africa",flag:"🇪🇷"},
    SZ:{name:"Eswatini",code:"SZ",currency:"SZL",language:"en",phone:"+268",continent:"Africa",flag:"🇸🇿"},
    ET:{name:"Éthiopie",code:"ET",currency:"ETB",language:"am",phone:"+251",continent:"Africa",flag:"🇪🇹"},
    GA:{name:"Gabon",code:"GA",currency:"XAF",language:"fr",phone:"+241",continent:"Africa",flag:"🇬🇦"},
    GM:{name:"Gambie",code:"GM",currency:"GMD",language:"en",phone:"+220",continent:"Africa",flag:"🇬🇲"},
    GH:{name:"Ghana",code:"GH",currency:"GHS",language:"en",phone:"+233",continent:"Africa",flag:"🇬🇭"},
    GN:{name:"Guinée",code:"GN",currency:"GNF",language:"fr",phone:"+224",continent:"Africa",flag:"🇬🇳"},
    GW:{name:"Guinée-Bissau",code:"GW",currency:"XOF",language:"pt",phone:"+245",continent:"Africa",flag:"🇬🇼"},
    KE:{name:"Kenya",code:"KE",currency:"KES",language:"en",phone:"+254",continent:"Africa",flag:"🇰🇪"},
    LS:{name:"Lesotho",code:"LS",currency:"LSL",language:"en",phone:"+266",continent:"Africa",flag:"🇱🇸"},
    LR:{name:"Liberia",code:"LR",currency:"LRD",language:"en",phone:"+231",continent:"Africa",flag:"🇱🇷"},
    LY:{name:"Libye",code:"LY",currency:"LYD",language:"ar",phone:"+218",continent:"Africa",flag:"🇱🇾"},
    MG:{name:"Madagascar",code:"MG",currency:"MGA",language:"fr",phone:"+261",continent:"Africa",flag:"🇲🇬"},
    MW:{name:"Malawi",code:"MW",currency:"MWK",language:"en",phone:"+265",continent:"Africa",flag:"🇲🇼"},
    ML:{name:"Mali",code:"ML",currency:"XOF",language:"fr",phone:"+223",continent:"Africa",flag:"🇲🇱"},
    MR:{name:"Mauritanie",code:"MR",currency:"MRU",language:"ar",phone:"+222",continent:"Africa",flag:"🇲🇷"},
    MU:{name:"Maurice",code:"MU",currency:"MUR",language:"en",phone:"+230",continent:"Africa",flag:"🇲🇺"},
    MA:{name:"Maroc",code:"MA",currency:"MAD",language:"ar",phone:"+212",continent:"Africa",flag:"🇲🇦"},
    MZ:{name:"Mozambique",code:"MZ",currency:"MZN",language:"pt",phone:"+258",continent:"Africa",flag:"🇲🇿"},
    NA:{name:"Namibie",code:"NA",currency:"NAD",language:"en",phone:"+264",continent:"Africa",flag:"🇳🇦"},
    NE:{name:"Niger",code:"NE",currency:"XOF",language:"fr",phone:"+227",continent:"Africa",flag:"🇳🇪"},
    NG:{name:"Nigeria",code:"NG",currency:"NGN",language:"en",phone:"+234",continent:"Africa",flag:"🇳🇬"},
    RW:{name:"Rwanda",code:"RW",currency:"RWF",language:"rw",phone:"+250",continent:"Africa",flag:"🇷🇼"},
    ST:{name:"Sao Tomé-et-Principe",code:"ST",currency:"STN",language:"pt",phone:"+239",continent:"Africa",flag:"🇸🇹"},
    SN:{name:"Sénégal",code:"SN",currency:"XOF",language:"fr",phone:"+221",continent:"Africa",flag:"🇸🇳"},
    SC:{name:"Seychelles",code:"SC",currency:"SCR",language:"en",phone:"+248",continent:"Africa",flag:"🇸🇨"},
    SL:{name:"Sierra Leone",code:"SL",currency:"SLE",language:"en",phone:"+232",continent:"Africa",flag:"🇸🇱"},
    SO:{name:"Somalie",code:"SO",currency:"SOS",language:"so",phone:"+252",continent:"Africa",flag:"🇸🇴"},
    ZA:{name:"Afrique du Sud",code:"ZA",currency:"ZAR",language:"en",phone:"+27",continent:"Africa",flag:"🇿🇦"},
    SS:{name:"Soudan du Sud",code:"SS",currency:"SSP",language:"en",phone:"+211",continent:"Africa",flag:"🇸🇸"},
    SD:{name:"Soudan",code:"SD",currency:"SDG",language:"ar",phone:"+249",continent:"Africa",flag:"🇸🇩"},
    TZ:{name:"Tanzanie",code:"TZ",currency:"TZS",language:"sw",phone:"+255",continent:"Africa",flag:"🇹🇿"},
    TG:{name:"Togo",code:"TG",currency:"XOF",language:"fr",phone:"+228",continent:"Africa",flag:"🇹🇬"},
    TN:{name:"Tunisie",code:"TN",currency:"TND",language:"ar",phone:"+216",continent:"Africa",flag:"🇹🇳"},
    UG:{name:"Ouganda",code:"UG",currency:"UGX",language:"en",phone:"+256",continent:"Africa",flag:"🇺🇬"},
    ZM:{name:"Zambie",code:"ZM",currency:"ZMW",language:"en",phone:"+260",continent:"Africa",flag:"🇿🇲"},
    ZW:{name:"Zimbabwe",code:"ZW",currency:"ZiG",language:"en",phone:"+263",continent:"Africa",flag:"🇿🇼"}

});
// =====================================
// EUROPE
// =====================================

Object.assign(countries,{

    AL:{name:"Albanie",code:"AL",currency:"ALL",language:"sq",phone:"+355",continent:"Europe",flag:"🇦🇱"},
    AD:{name:"Andorre",code:"AD",currency:"EUR",language:"ca",phone:"+376",continent:"Europe",flag:"🇦🇩"},
    AT:{name:"Autriche",code:"AT",currency:"EUR",language:"de",phone:"+43",continent:"Europe",flag:"🇦🇹"},
    BY:{name:"Biélorussie",code:"BY",currency:"BYN",language:"be",phone:"+375",continent:"Europe",flag:"🇧🇾"},
    BE:{name:"Belgique",code:"BE",currency:"EUR",language:"fr",phone:"+32",continent:"Europe",flag:"🇧🇪"},
    BA:{name:"Bosnie-Herzégovine",code:"BA",currency:"BAM",language:"bs",phone:"+387",continent:"Europe",flag:"🇧🇦"},
    BG:{name:"Bulgarie",code:"BG",currency:"BGN",language:"bg",phone:"+359",continent:"Europe",flag:"🇧🇬"},
    HR:{name:"Croatie",code:"HR",currency:"EUR",language:"hr",phone:"+385",continent:"Europe",flag:"🇭🇷"},
    CY:{name:"Chypre",code:"CY",currency:"EUR",language:"el",phone:"+357",continent:"Europe",flag:"🇨🇾"},
    CZ:{name:"République tchèque",code:"CZ",currency:"CZK",language:"cs",phone:"+420",continent:"Europe",flag:"🇨🇿"},
    DK:{name:"Danemark",code:"DK",currency:"DKK",language:"da",phone:"+45",continent:"Europe",flag:"🇩🇰"},
    EE:{name:"Estonie",code:"EE",currency:"EUR",language:"et",phone:"+372",continent:"Europe",flag:"🇪🇪"},
    FI:{name:"Finlande",code:"FI",currency:"EUR",language:"fi",phone:"+358",continent:"Europe",flag:"🇫🇮"},
    FR:{name:"France",code:"FR",currency:"EUR",language:"fr",phone:"+33",continent:"Europe",flag:"🇫🇷"},
    DE:{name:"Allemagne",code:"DE",currency:"EUR",language:"de",phone:"+49",continent:"Europe",flag:"🇩🇪"},
    GR:{name:"Grèce",code:"GR",currency:"EUR",language:"el",phone:"+30",continent:"Europe",flag:"🇬🇷"},
    HU:{name:"Hongrie",code:"HU",currency:"HUF",language:"hu",phone:"+36",continent:"Europe",flag:"🇭🇺"},
    IS:{name:"Islande",code:"IS",currency:"ISK",language:"is",phone:"+354",continent:"Europe",flag:"🇮🇸"},
    IE:{name:"Irlande",code:"IE",currency:"EUR",language:"en",phone:"+353",continent:"Europe",flag:"🇮🇪"},
    IT:{name:"Italie",code:"IT",currency:"EUR",language:"it",phone:"+39",continent:"Europe",flag:"🇮🇹"},
    XK:{name:"Kosovo",code:"XK",currency:"EUR",language:"sq",phone:"+383",continent:"Europe",flag:"🇽🇰"},
    LV:{name:"Lettonie",code:"LV",currency:"EUR",language:"lv",phone:"+371",continent:"Europe",flag:"🇱🇻"},
    LI:{name:"Liechtenstein",code:"LI",currency:"CHF",language:"de",phone:"+423",continent:"Europe",flag:"🇱🇮"},
    LT:{name:"Lituanie",code:"LT",currency:"EUR",language:"lt",phone:"+370",continent:"Europe",flag:"🇱🇹"},
    LU:{name:"Luxembourg",code:"LU",currency:"EUR",language:"fr",phone:"+352",continent:"Europe",flag:"🇱🇺"},
    MT:{name:"Malte",code:"MT",currency:"EUR",language:"mt",phone:"+356",continent:"Europe",flag:"🇲🇹"},
    MD:{name:"Moldavie",code:"MD",currency:"MDL",language:"ro",phone:"+373",continent:"Europe",flag:"🇲🇩"},
    MC:{name:"Monaco",code:"MC",currency:"EUR",language:"fr",phone:"+377",continent:"Europe",flag:"🇲🇨"},
    ME:{name:"Monténégro",code:"ME",currency:"EUR",language:"sr",phone:"+382",continent:"Europe",flag:"🇲🇪"},
    NL:{name:"Pays-Bas",code:"NL",currency:"EUR",language:"nl",phone:"+31",continent:"Europe",flag:"🇳🇱"},
    MK:{name:"Macédoine du Nord",code:"MK",currency:"MKD",language:"mk",phone:"+389",continent:"Europe",flag:"🇲🇰"},
    NO:{name:"Norvège",code:"NO",currency:"NOK",language:"no",phone:"+47",continent:"Europe",flag:"🇳🇴"},
    PL:{name:"Pologne",code:"PL",currency:"PLN",language:"pl",phone:"+48",continent:"Europe",flag:"🇵🇱"},
    PT:{name:"Portugal",code:"PT",currency:"EUR",language:"pt",phone:"+351",continent:"Europe",flag:"🇵🇹"},
    RO:{name:"Roumanie",code:"RO",currency:"RON",language:"ro",phone:"+40",continent:"Europe",flag:"🇷🇴"},
    RU:{name:"Russie",code:"RU",currency:"RUB",language:"ru",phone:"+7",continent:"Europe",flag:"🇷🇺"},
    SM:{name:"Saint-Marin",code:"SM",currency:"EUR",language:"it",phone:"+378",continent:"Europe",flag:"🇸🇲"},
    RS:{name:"Serbie",code:"RS",currency:"RSD",language:"sr",phone:"+381",continent:"Europe",flag:"🇷🇸"},
    SK:{name:"Slovaquie",code:"SK",currency:"EUR",language:"sk",phone:"+421",continent:"Europe",flag:"🇸🇰"},
    SI:{name:"Slovénie",code:"SI",currency:"EUR",language:"sl",phone:"+386",continent:"Europe",flag:"🇸🇮"},
    ES:{name:"Espagne",code:"ES",currency:"EUR",language:"es",phone:"+34",continent:"Europe",flag:"🇪🇸"},
    SE:{name:"Suède",code:"SE",currency:"SEK",language:"sv",phone:"+46",continent:"Europe",flag:"🇸🇪"},
    CH:{name:"Suisse",code:"CH",currency:"CHF",language:"fr",phone:"+41",continent:"Europe",flag:"🇨🇭"},
    TR:{name:"Turquie",code:"TR",currency:"TRY",language:"tr",phone:"+90",continent:"Europe",flag:"🇹🇷"},
    UA:{name:"Ukraine",code:"UA",currency:"UAH",language:"uk",phone:"+380",continent:"Europe",flag:"🇺🇦"},
    GB:{name:"Royaume-Uni",code:"GB",currency:"GBP",language:"en",phone:"+44",continent:"Europe",flag:"🇬🇧"},
    VA:{name:"Vatican",code:"VA",currency:"EUR",language:"it",phone:"+379",continent:"Europe",flag:"🇻🇦"}

});
// =====================================
// AMÉRIQUE DU NORD ET CARAÏBES
// =====================================

Object.assign(countries,{

    AG:{name:"Antigua-et-Barbuda",code:"AG",currency:"XCD",language:"en",phone:"+1-268",continent:"North America",flag:"🇦🇬"},
    BS:{name:"Bahamas",code:"BS",currency:"BSD",language:"en",phone:"+1-242",continent:"North America",flag:"🇧🇸"},
    BB:{name:"Barbade",code:"BB",currency:"BBD",language:"en",phone:"+1-246",continent:"North America",flag:"🇧🇧"},
    BZ:{name:"Belize",code:"BZ",currency:"BZD",language:"en",phone:"+501",continent:"North America",flag:"🇧🇿"},
    CA:{name:"Canada",code:"CA",currency:"CAD",language:"en",phone:"+1",continent:"North America",flag:"🇨🇦"},
    CR:{name:"Costa Rica",code:"CR",currency:"CRC",language:"es",phone:"+506",continent:"North America",flag:"🇨🇷"},
    CU:{name:"Cuba",code:"CU",currency:"CUP",language:"es",phone:"+53",continent:"North America",flag:"🇨🇺"},
    DM:{name:"Dominique",code:"DM",currency:"XCD",language:"en",phone:"+1-767",continent:"North America",flag:"🇩🇲"},
    DO:{name:"République dominicaine",code:"DO",currency:"DOP",language:"es",phone:"+1-809",continent:"North America",flag:"🇩🇴"},
    SV:{name:"Salvador",code:"SV",currency:"USD",language:"es",phone:"+503",continent:"North America",flag:"🇸🇻"},
    GD:{name:"Grenade",code:"GD",currency:"XCD",language:"en",phone:"+1-473",continent:"North America",flag:"🇬🇩"},
    GT:{name:"Guatemala",code:"GT",currency:"GTQ",language:"es",phone:"+502",continent:"North America",flag:"🇬🇹"},
    HT:{name:"Haïti",code:"HT",currency:"HTG",language:"fr",phone:"+509",continent:"North America",flag:"🇭🇹"},
    HN:{name:"Honduras",code:"HN",currency:"HNL",language:"es",phone:"+504",continent:"North America",flag:"🇭🇳"},
    JM:{name:"Jamaïque",code:"JM",currency:"JMD",language:"en",phone:"+1-876",continent:"North America",flag:"🇯🇲"},
    MX:{name:"Mexique",code:"MX",currency:"MXN",language:"es",phone:"+52",continent:"North America",flag:"🇲🇽"},
    NI:{name:"Nicaragua",code:"NI",currency:"NIO",language:"es",phone:"+505",continent:"North America",flag:"🇳🇮"},
    PA:{name:"Panama",code:"PA",currency:"PAB",language:"es",phone:"+507",continent:"North America",flag:"🇵🇦"},
    KN:{name:"Saint-Christophe-et-Niévès",code:"KN",currency:"XCD",language:"en",phone:"+1-869",continent:"North America",flag:"🇰🇳"},
    LC:{name:"Sainte-Lucie",code:"LC",currency:"XCD",language:"en",phone:"+1-758",continent:"North America",flag:"🇱🇨"},
    VC:{name:"Saint-Vincent-et-les-Grenadines",code:"VC",currency:"XCD",language:"en",phone:"+1-784",continent:"North America",flag:"🇻🇨"},
    TT:{name:"Trinité-et-Tobago",code:"TT",currency:"TTD",language:"en",phone:"+1-868",continent:"North America",flag:"🇹🇹"},
    US:{name:"États-Unis",code:"US",currency:"USD",language:"en",phone:"+1",continent:"North America",flag:"🇺🇸"}

});
// =====================================
// AMÉRIQUE DU SUD
// =====================================

Object.assign(countries,{

    AR:{name:"Argentine",code:"AR",currency:"ARS",language:"es",phone:"+54",continent:"South America",flag:"🇦🇷"},
    BO:{name:"Bolivie",code:"BO",currency:"BOB",language:"es",phone:"+591",continent:"South America",flag:"🇧🇴"},
    BR:{name:"Brésil",code:"BR",currency:"BRL",language:"pt",phone:"+55",continent:"South America",flag:"🇧🇷"},
    CL:{name:"Chili",code:"CL",currency:"CLP",language:"es",phone:"+56",continent:"South America",flag:"🇨🇱"},
    CO:{name:"Colombie",code:"CO",currency:"COP",language:"es",phone:"+57",continent:"South America",flag:"🇨🇴"},
    EC:{name:"Équateur",code:"EC",currency:"USD",language:"es",phone:"+593",continent:"South America",flag:"🇪🇨"},
    GY:{name:"Guyana",code:"GY",currency:"GYD",language:"en",phone:"+592",continent:"South America",flag:"🇬🇾"},
    PY:{name:"Paraguay",code:"PY",currency:"PYG",language:"es",phone:"+595",continent:"South America",flag:"🇵🇾"},
    PE:{name:"Pérou",code:"PE",currency:"PEN",language:"es",phone:"+51",continent:"South America",flag:"🇵🇪"},
    SR:{name:"Suriname",code:"SR",currency:"SRD",language:"nl",phone:"+597",continent:"South America",flag:"🇸🇷"},
    UY:{name:"Uruguay",code:"UY",currency:"UYU",language:"es",phone:"+598",continent:"South America",flag:"🇺🇾"},
    VE:{name:"Venezuela",code:"VE",currency:"VES",language:"es",phone:"+58",continent:"South America",flag:"🇻🇪"},
    GF:{name:"Guyane française",code:"GF",currency:"EUR",language:"fr",phone:"+594",continent:"South America",flag:"🇬🇫"},
    FK:{name:"Îles Falkland",code:"FK",currency:"FKP",language:"en",phone:"+500",continent:"South America",flag:"🇫🇰"}

});
// =====================================
// ASIE
// =====================================

Object.assign(countries,{

    AF:{name:"Afghanistan",code:"AF",currency:"AFN",language:"fa",phone:"+93",continent:"Asia",flag:"🇦🇫"},
    AM:{name:"Arménie",code:"AM",currency:"AMD",language:"hy",phone:"+374",continent:"Asia",flag:"🇦🇲"},
    AZ:{name:"Azerbaïdjan",code:"AZ",currency:"AZN",language:"az",phone:"+994",continent:"Asia",flag:"🇦🇿"},
    BH:{name:"Bahreïn",code:"BH",currency:"BHD",language:"ar",phone:"+973",continent:"Asia",flag:"🇧🇭"},
    BD:{name:"Bangladesh",code:"BD",currency:"BDT",language:"bn",phone:"+880",continent:"Asia",flag:"🇧🇩"},
    BT:{name:"Bhoutan",code:"BT",currency:"BTN",language:"dz",phone:"+975",continent:"Asia",flag:"🇧🇹"},
    BN:{name:"Brunéi",code:"BN",currency:"BND",language:"ms",phone:"+673",continent:"Asia",flag:"🇧🇳"},
    KH:{name:"Cambodge",code:"KH",currency:"KHR",language:"km",phone:"+855",continent:"Asia",flag:"🇰🇭"},
    CN:{name:"Chine",code:"CN",currency:"CNY",language:"zh",phone:"+86",continent:"Asia",flag:"🇨🇳"},
    GE:{name:"Géorgie",code:"GE",currency:"GEL",language:"ka",phone:"+995",continent:"Asia",flag:"🇬🇪"},
    HK:{name:"Hong Kong",code:"HK",currency:"HKD",language:"zh",phone:"+852",continent:"Asia",flag:"🇭🇰"},
    IN:{name:"Inde",code:"IN",currency:"INR",language:"hi",phone:"+91",continent:"Asia",flag:"🇮🇳"},
    ID:{name:"Indonésie",code:"ID",currency:"IDR",language:"id",phone:"+62",continent:"Asia",flag:"🇮🇩"},
    IR:{name:"Iran",code:"IR",currency:"IRR",language:"fa",phone:"+98",continent:"Asia",flag:"🇮🇷"},
    IQ:{name:"Irak",code:"IQ",currency:"IQD",language:"ar",phone:"+964",continent:"Asia",flag:"🇮🇶"},
    IL:{name:"Israël",code:"IL",currency:"ILS",language:"he",phone:"+972",continent:"Asia",flag:"🇮🇱"},
    JP:{name:"Japon",code:"JP",currency:"JPY",language:"ja",phone:"+81",continent:"Asia",flag:"🇯🇵"},
    JO:{name:"Jordanie",code:"JO",currency:"JOD",language:"ar",phone:"+962",continent:"Asia",flag:"🇯🇴"},
    KZ:{name:"Kazakhstan",code:"KZ",currency:"KZT",language:"kk",phone:"+7",continent:"Asia",flag:"🇰🇿"},
    KW:{name:"Koweït",code:"KW",currency:"KWD",language:"ar",phone:"+965",continent:"Asia",flag:"🇰🇼"},
    KG:{name:"Kirghizistan",code:"KG",currency:"KGS",language:"ky",phone:"+996",continent:"Asia",flag:"🇰🇬"},
    LA:{name:"Laos",code:"LA",currency:"LAK",language:"lo",phone:"+856",continent:"Asia",flag:"🇱🇦"},
    LB:{name:"Liban",code:"LB",currency:"LBP",language:"ar",phone:"+961",continent:"Asia",flag:"🇱🇧"},
    MO:{name:"Macao",code:"MO",currency:"MOP",language:"zh",phone:"+853",continent:"Asia",flag:"🇲🇴"},
    MY:{name:"Malaisie",code:"MY",currency:"MYR",language:"ms",phone:"+60",continent:"Asia",flag:"🇲🇾"},
    MV:{name:"Maldives",code:"MV",currency:"MVR",language:"dv",phone:"+960",continent:"Asia",flag:"🇲🇻"},
    MN:{name:"Mongolie",code:"MN",currency:"MNT",language:"mn",phone:"+976",continent:"Asia",flag:"🇲🇳"},
    MM:{name:"Myanmar",code:"MM",currency:"MMK",language:"my",phone:"+95",continent:"Asia",flag:"🇲🇲"},
    NP:{name:"Népal",code:"NP",currency:"NPR",language:"ne",phone:"+977",continent:"Asia",flag:"🇳🇵"},
    KP:{name:"Corée du Nord",code:"KP",currency:"KPW",language:"ko",phone:"+850",continent:"Asia",flag:"🇰🇵"},
    OM:{name:"Oman",code:"OM",currency:"OMR",language:"ar",phone:"+968",continent:"Asia",flag:"🇴🇲"},
    PK:{name:"Pakistan",code:"PK",currency:"PKR",language:"ur",phone:"+92",continent:"Asia",flag:"🇵🇰"},
    PH:{name:"Philippines",code:"PH",currency:"PHP",language:"tl",phone:"+63",continent:"Asia",flag:"🇵🇭"},
    QA:{name:"Qatar",code:"QA",currency:"QAR",language:"ar",phone:"+974",continent:"Asia",flag:"🇶🇦"},
    SA:{name:"Arabie saoudite",code:"SA",currency:"SAR",language:"ar",phone:"+966",continent:"Asia",flag:"🇸🇦"},
    SG:{name:"Singapour",code:"SG",currency:"SGD",language:"en",phone:"+65",continent:"Asia",flag:"🇸🇬"},
    KR:{name:"Corée du Sud",code:"KR",currency:"KRW",language:"ko",phone:"+82",continent:"Asia",flag:"🇰🇷"},
    LK:{name:"Sri Lanka",code:"LK",currency:"LKR",language:"si",phone:"+94",continent:"Asia",flag:"🇱🇰"},
    SY:{name:"Syrie",code:"SY",currency:"SYP",language:"ar",phone:"+963",continent:"Asia",flag:"🇸🇾"},
    TW:{name:"Taïwan",code:"TW",currency:"TWD",language:"zh",phone:"+886",continent:"Asia",flag:"🇹🇼"},
    TJ:{name:"Tadjikistan",code:"TJ",currency:"TJS",language:"tg",phone:"+992",continent:"Asia",flag:"🇹🇯"},
    TH:{name:"Thaïlande",code:"TH",currency:"THB",language:"th",phone:"+66",continent:"Asia",flag:"🇹🇭"},
    TL:{name:"Timor oriental",code:"TL",currency:"USD",language:"pt",phone:"+670",continent:"Asia",flag:"🇹🇱"},
    TM:{name:"Turkménistan",code:"TM",currency:"TMT",language:"tk",phone:"+993",continent:"Asia",flag:"🇹🇲"},
    AE:{name:"Émirats arabes unis",code:"AE",currency:"AED",language:"ar",phone:"+971",continent:"Asia",flag:"🇦🇪"},
    UZ:{name:"Ouzbékistan",code:"UZ",currency:"UZS",language:"uz",phone:"+998",continent:"Asia",flag:"🇺🇿"},
    VN:{name:"Vietnam",code:"VN",currency:"VND",language:"vi",phone:"+84",continent:"Asia",flag:"🇻🇳"},
    YE:{name:"Yémen",code:"YE",currency:"YER",language:"ar",phone:"+967",continent:"Asia",flag:"🇾🇪"}

});
// =====================================
// OCÉANIE ET TERRITOIRES
// =====================================

Object.assign(countries,{

    AU:{name:"Australie",code:"AU",currency:"AUD",language:"en",phone:"+61",continent:"Oceania",flag:"🇦🇺"},
    NZ:{name:"Nouvelle-Zélande",code:"NZ",currency:"NZD",language:"en",phone:"+64",continent:"Oceania",flag:"🇳🇿"},
    PG:{name:"Papouasie-Nouvelle-Guinée",code:"PG",currency:"PGK",language:"en",phone:"+675",continent:"Oceania",flag:"🇵🇬"},
    FJ:{name:"Fidji",code:"FJ",currency:"FJD",language:"en",phone:"+679",continent:"Oceania",flag:"🇫🇯"},
    SB:{name:"Îles Salomon",code:"SB",currency:"SBD",language:"en",phone:"+677",continent:"Oceania",flag:"🇸🇧"},
    VU:{name:"Vanuatu",code:"VU",currency:"VUV",language:"fr",phone:"+678",continent:"Oceania",flag:"🇻🇺"},
    WS:{name:"Samoa",code:"WS",currency:"WST",language:"sm",phone:"+685",continent:"Oceania",flag:"🇼🇸"},
    TO:{name:"Tonga",code:"TO",currency:"TOP",language:"to",phone:"+676",continent:"Oceania",flag:"🇹🇴"},
    KI:{name:"Kiribati",code:"KI",currency:"AUD",language:"en",phone:"+686",continent:"Oceania",flag:"🇰🇮"},
    TV:{name:"Tuvalu",code:"TV",currency:"AUD",language:"en",phone:"+688",continent:"Oceania",flag:"🇹🇻"},
    NR:{name:"Nauru",code:"NR",currency:"AUD",language:"en",phone:"+674",continent:"Oceania",flag:"🇳🇷"},
    PW:{name:"Palaos",code:"PW",currency:"USD",language:"en",phone:"+680",continent:"Oceania",flag:"🇵🇼"},
    FM:{name:"États fédérés de Micronésie",code:"FM",currency:"USD",language:"en",phone:"+691",continent:"Oceania",flag:"🇫🇲"},
    MH:{name:"Îles Marshall",code:"MH",currency:"USD",language:"en",phone:"+692",continent:"Oceania",flag:"🇲🇭"},
    CK:{name:"Îles Cook",code:"CK",currency:"NZD",language:"en",phone:"+682",continent:"Oceania",flag:"🇨🇰"},
    NU:{name:"Niue",code:"NU",currency:"NZD",language:"en",phone:"+683",continent:"Oceania",flag:"🇳🇺"},
    PF:{name:"Polynésie française",code:"PF",currency:"XPF",language:"fr",phone:"+689",continent:"Oceania",flag:"🇵🇫"},
    NC:{name:"Nouvelle-Calédonie",code:"NC",currency:"XPF",language:"fr",phone:"+687",continent:"Oceania",flag:"🇳🇨"},
    WF:{name:"Wallis-et-Futuna",code:"WF",currency:"XPF",language:"fr",phone:"+681",continent:"Oceania",flag:"🇼🇫"},
    GU:{name:"Guam",code:"GU",currency:"USD",language:"en",phone:"+1-671",continent:"Oceania",flag:"🇬🇺"},
    MP:{name:"Îles Mariannes du Nord",code:"MP",currency:"USD",language:"en",phone:"+1-670",continent:"Oceania",flag:"🇲🇵"},
    AS:{name:"Samoa américaines",code:"AS",currency:"USD",language:"en",phone:"+1-684",continent:"Oceania",flag:"🇦🇸"},
    TK:{name:"Tokelau",code:"TK",currency:"NZD",language:"en",phone:"+690",continent:"Oceania",flag:"🇹🇰"},
    PN:{name:"Îles Pitcairn",code:"PN",currency:"NZD",language:"en",phone:"+64",continent:"Oceania",flag:"🇵🇳"},
    NF:{name:"Île Norfolk",code:"NF",currency:"AUD",language:"en",phone:"+672",continent:"Oceania",flag:"🇳🇫"}
});
// =====================================
// DÉTECTION AUTOMATIQUE DU PAYS
// =====================================

function detectCountry(){

    const locale = Intl.DateTimeFormat()
        .resolvedOptions()
        .locale;

    const countryCode = locale.includes("-")
        ? locale.split("-")[1].toUpperCase()
        : "US";

    if(countries[countryCode]){

        currentCountry = countryCode;
        currentCountryData = countries[countryCode];
        currentCurrency = currentCountryData.currency;
        currentLanguage = currentCountryData.language;

    }else{

        currentCountry = "US";
        currentCountryData = countries.US;
        currentCurrency = "USD";
        currentLanguage = "en";

    }

    console.log("Pays :", currentCountryData.name);
    console.log("Devise :", currentCurrency);
    console.log("Langue :", currentLanguage);

}

// =====================================
// RECHERCHE D'UN PAYS
// =====================================

export function getCountry(code){

    return countries[code.toUpperCase()] || null;

}

export function getAllCountries(){

    return Object.values(countries);

}

export function countryExists(code){

    return code.toUpperCase() in countries;

}

// =====================================
// INITIALISATION
// =====================================

detectCountry();

export{

    countries,
    currentCountry,
    currentCountryData,
    currentCurrency,
    currentLanguage

};
