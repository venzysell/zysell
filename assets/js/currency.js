// =====================================
// ZYSELL - CURRENCY.JS
// Gestion mondiale des devises
// =====================================

// Devise par défaut
let currentCurrency = "USD";

// Symbole de la devise
let currentSymbol = "$";

// Liste des devises
const currencies = {};

// =====================================
// FONCTIONS
// =====================================

// Retourner la devise actuelle
export function getCurrentCurrency(){

    return currentCurrency;

}

// Retourner le symbole actuel
export function getCurrentSymbol(){

    return currentSymbol;

}

// Définir la devise
export function setCurrentCurrency(currencyCode){

    const code = currencyCode.toUpperCase();

    if(currencies[code]){

        currentCurrency = code;
        currentSymbol = currencies[code].symbol;

        return true;

    }

    return false;

}

// Vérifier si une devise existe
export function currencyExists(currencyCode){

    return currencyCode.toUpperCase() in currencies;

}
// =====================================
// PRINCIPALES DEVISES MONDIALES
// =====================================

Object.assign(currencies,{

    USD:{
        code:"USD",
        name:"Dollar américain",
        symbol:"$"
    },

    EUR:{
        code:"EUR",
        name:"Euro",
        symbol:"€"
    },

    GBP:{
        code:"GBP",
        name:"Livre sterling",
        symbol:"£"
    },

    XAF:{
        code:"XAF",
        name:"Franc CFA (CEMAC)",
        symbol:"FCFA"
    },

    XOF:{
        code:"XOF",
        name:"Franc CFA (UEMOA)",
        symbol:"FCFA"
    },

    CAD:{
        code:"CAD",
        name:"Dollar canadien",
        symbol:"CA$"
    },

    AUD:{
        code:"AUD",
        name:"Dollar australien",
        symbol:"A$"
    },

    NZD:{
        code:"NZD",
        name:"Dollar néo-zélandais",
        symbol:"NZ$"
    },

    CHF:{
        code:"CHF",
        name:"Franc suisse",
        symbol:"CHF"
    },

    JPY:{
        code:"JPY",
        name:"Yen japonais",
        symbol:"¥"
    },

    CNY:{
        code:"CNY",
        name:"Yuan chinois",
        symbol:"¥"
    },

    INR:{
        code:"INR",
        name:"Roupie indienne",
        symbol:"₹"
    },

    RUB:{
        code:"RUB",
        name:"Rouble russe",
        symbol:"₽"
    },

    BRL:{
        code:"BRL",
        name:"Réal brésilien",
        symbol:"R$"
    },

    MXN:{
        code:"MXN",
        name:"Peso mexicain",
        symbol:"$"
    },

    ZAR:{
        code:"ZAR",
        name:"Rand sud-africain",
        symbol:"R"
    },

    NGN:{
        code:"NGN",
        name:"Naira nigérian",
        symbol:"₦"
    },

    KES:{
        code:"KES",
        name:"Shilling kényan",
        symbol:"KSh"
    },

    GHS:{
        code:"GHS",
        name:"Cedi ghanéen",
        symbol:"GH₵"
    },

    CDF:{
        code:"CDF",
        name:"Franc congolais",
        symbol:"FC"
    }

});
// =====================================
// DEVISES COMPLÉMENTAIRES
// =====================================

Object.assign(currencies,{

    AED:{code:"AED",name:"Dirham des Émirats arabes unis",symbol:"د.إ"},
    AFN:{code:"AFN",name:"Afghani",symbol:"؋"},
    ALL:{code:"ALL",name:"Lek albanais",symbol:"L"},
    AMD:{code:"AMD",name:"Dram arménien",symbol:"֏"},
    AOA:{code:"AOA",name:"Kwanza",symbol:"Kz"},
    ARS:{code:"ARS",name:"Peso argentin",symbol:"$"},
    AZN:{code:"AZN",name:"Manat azerbaïdjanais",symbol:"₼"},
    BAM:{code:"BAM",name:"Mark convertible",symbol:"KM"},
    BBD:{code:"BBD",name:"Dollar barbadien",symbol:"Bds$"},
    BDT:{code:"BDT",name:"Taka",symbol:"৳"},
    BGN:{code:"BGN",name:"Lev bulgare",symbol:"лв"},
    BHD:{code:"BHD",name:"Dinar bahreïni",symbol:"BD"},
    BIF:{code:"BIF",name:"Franc burundais",symbol:"FBu"},
    BMD:{code:"BMD",name:"Dollar bermudien",symbol:"BD$"},
    BND:{code:"BND",name:"Dollar de Brunei",symbol:"B$"},
    BOB:{code:"BOB",name:"Boliviano",symbol:"Bs."},
    BSD:{code:"BSD",name:"Dollar des Bahamas",symbol:"B$"},
    BTN:{code:"BTN",name:"Ngultrum",symbol:"Nu."},
    BWP:{code:"BWP",name:"Pula",symbol:"P"},
    BYN:{code:"BYN",name:"Rouble biélorusse",symbol:"Br"},
    BZD:{code:"BZD",name:"Dollar du Belize",symbol:"BZ$"},
    CLP:{code:"CLP",name:"Peso chilien",symbol:"CLP$"},
    COP:{code:"COP",name:"Peso colombien",symbol:"COL$"},
    CRC:{code:"CRC",name:"Colón costaricien",symbol:"₡"},
    CUP:{code:"CUP",name:"Peso cubain",symbol:"₱"},
    CZK:{code:"CZK",name:"Couronne tchèque",symbol:"Kč"},
    DJF:{code:"DJF",name:"Franc djiboutien",symbol:"Fdj"},
    DKK:{code:"DKK",name:"Couronne danoise",symbol:"kr"},
    DOP:{code:"DOP",name:"Peso dominicain",symbol:"RD$"},
    DZD:{code:"DZD",name:"Dinar algérien",symbol:"دج"},
    EGP:{code:"EGP",name:"Livre égyptienne",symbol:"£"},
    ETB:{code:"ETB",name:"Birr éthiopien",symbol:"Br"},
    FJD:{code:"FJD",name:"Dollar fidjien",symbol:"FJ$"},
    GEL:{code:"GEL",name:"Lari géorgien",symbol:"₾"},
    GMD:{code:"GMD",name:"Dalasi",symbol:"D"},
    GNF:{code:"GNF",name:"Franc guinéen",symbol:"FG"},
    GTQ:{code:"GTQ",name:"Quetzal",symbol:"Q"},
    GYD:{code:"GYD",name:"Dollar du Guyana",symbol:"GY$"},
    HKD:{code:"HKD",name:"Dollar de Hong Kong",symbol:"HK$"},
    HNL:{code:"HNL",name:"Lempira",symbol:"L"},
    HRK:{code:"HRK",name:"Kuna croate",symbol:"kn"},
    HTG:{code:"HTG",name:"Gourde haïtienne",symbol:"G"},
    HUF:{code:"HUF",name:"Forint hongrois",symbol:"Ft"}

});
// =====================================
// DEVISES COMPLÉMENTAIRES (M → Z)
// =====================================

Object.assign(currencies,{

    IDR:{code:"IDR",name:"Roupie indonésienne",symbol:"Rp"},
    ILS:{code:"ILS",name:"Nouveau shekel israélien",symbol:"₪"},
    IQD:{code:"IQD",name:"Dinar irakien",symbol:"ع.د"},
    IRR:{code:"IRR",name:"Rial iranien",symbol:"﷼"},
    ISK:{code:"ISK",name:"Couronne islandaise",symbol:"kr"},
    JMD:{code:"JMD",name:"Dollar jamaïcain",symbol:"J$"},
    JOD:{code:"JOD",name:"Dinar jordanien",symbol:"JD"},
    KGS:{code:"KGS",name:"Som kirghize",symbol:"с"},
    KHR:{code:"KHR",name:"Riel cambodgien",symbol:"៛"},
    KMF:{code:"KMF",name:"Franc comorien",symbol:"CF"},
    KPW:{code:"KPW",name:"Won nord-coréen",symbol:"₩"},
    KRW:{code:"KRW",name:"Won sud-coréen",symbol:"₩"},
    KWD:{code:"KWD",name:"Dinar koweïtien",symbol:"KD"},
    KZT:{code:"KZT",name:"Tenge kazakh",symbol:"₸"},
    LAK:{code:"LAK",name:"Kip lao",symbol:"₭"},
    LBP:{code:"LBP",name:"Livre libanaise",symbol:"ل.ل"},
    LKR:{code:"LKR",name:"Roupie sri-lankaise",symbol:"Rs"},
    LRD:{code:"LRD",name:"Dollar libérien",symbol:"L$"},
    LSL:{code:"LSL",name:"Loti",symbol:"L"},
    LYD:{code:"LYD",name:"Dinar libyen",symbol:"LD"},
    MAD:{code:"MAD",name:"Dirham marocain",symbol:"MAD"},
    MDL:{code:"MDL",name:"Leu moldave",symbol:"L"},
    MGA:{code:"MGA",name:"Ariary malgache",symbol:"Ar"},
    MKD:{code:"MKD",name:"Denar macédonien",symbol:"ден"},
    MMK:{code:"MMK",name:"Kyat",symbol:"Ks"},
    MNT:{code:"MNT",name:"Tugrik",symbol:"₮"},
    MOP:{code:"MOP",name:"Pataca",symbol:"MOP$"},
    MRU:{code:"MRU",name:"Ouguiya",symbol:"UM"},
    MUR:{code:"MUR",name:"Roupie mauricienne",symbol:"₨"},
    MVR:{code:"MVR",name:"Rufiyaa",symbol:"Rf"},
    MWK:{code:"MWK",name:"Kwacha malawite",symbol:"MK"},
    MYR:{code:"MYR",name:"Ringgit malaisien",symbol:"RM"},
    MZN:{code:"MZN",name:"Metical",symbol:"MT"},
    NAD:{code:"NAD",name:"Dollar namibien",symbol:"N$"},
    NPR:{code:"NPR",name:"Roupie népalaise",symbol:"₨"},
    NIO:{code:"NIO",name:"Córdoba",symbol:"C$"},
    NOK:{code:"NOK",name:"Couronne norvégienne",symbol:"kr"},
    OMR:{code:"OMR",name:"Rial omanais",symbol:"ر.ع."},
    PAB:{code:"PAB",name:"Balboa",symbol:"B/."},
    PEN:{code:"PEN",name:"Sol péruvien",symbol:"S/"},
    PGK:{code:"PGK",name:"Kina",symbol:"K"},
    PHP:{code:"PHP",name:"Peso philippin",symbol:"₱"},
    PKR:{code:"PKR",name:"Roupie pakistanaise",symbol:"₨"},
    PLN:{code:"PLN",name:"Zloty",symbol:"zł"},
    PYG:{code:"PYG",name:"Guaraní",symbol:"₲"},
    QAR:{code:"QAR",name:"Riyal qatari",symbol:"ر.ق"},
    RON:{code:"RON",name:"Leu roumain",symbol:"lei"},
    RSD:{code:"RSD",name:"Dinar serbe",symbol:"дин"},
    RWF:{code:"RWF",name:"Franc rwandais",symbol:"RF"},
    SAR:{code:"SAR",name:"Riyal saoudien",symbol:"﷼"},
    SCR:{code:"SCR",name:"Roupie seychelloise",symbol:"₨"},
    SDG:{code:"SDG",name:"Livre soudanaise",symbol:"£"},
    SEK:{code:"SEK",name:"Couronne suédoise",symbol:"kr"},
    SGD:{code:"SGD",name:"Dollar de Singapour",symbol:"S$"},
    SLE:{code:"SLE",name:"Leone",symbol:"Le"},
    SOS:{code:"SOS",name:"Shilling somalien",symbol:"Sh"},
    SSP:{code:"SSP",name:"Livre sud-soudanaise",symbol:"£"},
    STN:{code:"STN",name:"Dobra",symbol:"Db"},
    SYP:{code:"SYP",name:"Livre syrienne",symbol:"£"},
    SZL:{code:"SZL",name:"Lilangeni",symbol:"E"},
    THB:{code:"THB",name:"Baht",symbol:"฿"},
    TJS:{code:"TJS",name:"Somoni",symbol:"ЅМ"},
    TMT:{code:"TMT",name:"Manat turkmène",symbol:"m"},
    TND:{code:"TND",name:"Dinar tunisien",symbol:"DT"},
    TOP:{code:"TOP",name:"Paʻanga",symbol:"T$"},
    TRY:{code:"TRY",name:"Livre turque",symbol:"₺"},
    TTD:{code:"TTD",name:"Dollar de Trinité-et-Tobago",symbol:"TT$"},
    TWD:{code:"TWD",name:"Nouveau dollar taïwanais",symbol:"NT$"},
    TZS:{code:"TZS",name:"Shilling tanzanien",symbol:"TSh"},
    UAH:{code:"UAH",name:"Hryvnia",symbol:"₴"},
    UGX:{code:"UGX",name:"Shilling ougandais",symbol:"USh"},
    UYU:{code:"UYU",name:"Peso uruguayen",symbol:"$U"},
    UZS:{code:"UZS",name:"Soum ouzbek",symbol:"so'm"},
    VES:{code:"VES",name:"Bolivar",symbol:"Bs."},
    VND:{code:"VND",name:"Dong vietnamien",symbol:"₫"},
    VUV:{code:"VUV",name:"Vatu",symbol:"VT"},
    WST:{code:"WST",name:"Tala",symbol:"WS$"},
    XCD:{code:"XCD",name:"Dollar des Caraïbes orientales",symbol:"EC$"},
    XPF:{code:"XPF",name:"Franc CFP",symbol:"₣"},
    YER:{code:"YER",name:"Rial yéménite",symbol:"﷼"},
    ZMW:{code:"ZMW",name:"Kwacha zambien",symbol:"ZK"},
    ZiG:{code:"ZiG",name:"Zimbabwe Gold",symbol:"ZiG"}

});
// =====================================
// FORMATAGE ET UTILITAIRES
// =====================================

// Formater un montant
export function formatCurrency(amount, currencyCode = currentCurrency){

    const code = currencyCode.toUpperCase();

    if(!currencies[code]){

        return amount;

    }

    return new Intl.NumberFormat(undefined,{

        style:"currency",
        currency:code

    }).format(amount);

}

// Obtenir une devise
export function getCurrency(currencyCode){

    return currencies[currencyCode.toUpperCase()] || null;

}

// Obtenir toutes les devises
export function getAllCurrencies(){

    return Object.values(currencies);

}

// Nombre total de devises
export function getCurrenciesCount(){

    return Object.keys(currencies).length;

}

// Rechercher une devise par nom
export function searchCurrencies(keyword){

    const text = keyword.toLowerCase();

    return Object.values(currencies).filter(currency=>{

        return (
            currency.name.toLowerCase().includes(text) ||
            currency.code.toLowerCase().includes(text)
        );

    });

}

// Exporter les données principales
export{

    currencies,
    currentCurrency,
    currentSymbol

};
