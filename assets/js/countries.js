/* =======================================================
   ZYSELL COUNTRIES
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const countrySelect = document.getElementById("country");
const phoneCode = document.getElementById("phoneCode");
const currencyElement = document.getElementById("currency");
const flagElement = document.getElementById("countryFlag");

/* =======================================================
   PAYS
======================================================= */

const countries = [
    { code:"DZ", name:"Algérie", flag:"🇩🇿", phone:"+213", currency:"DZD", symbol:"دج", language:"ar" },
    { code:"AO", name:"Angola", flag:"🇦🇴", phone:"+244", currency:"AOA", symbol:"Kz", language:"pt" },
    { code:"BJ", name:"Bénin", flag:"🇧🇯", phone:"+229", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"BW", name:"Botswana", flag:"🇧🇼", phone:"+267", currency:"BWP", symbol:"P", language:"en" },
    { code:"BF", name:"Burkina Faso", flag:"🇧🇫", phone:"+226", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"BI", name:"Burundi", flag:"🇧🇮", phone:"+257", currency:"BIF", symbol:"FBu", language:"fr" },
    { code:"CV", name:"Cap-Vert", flag:"🇨🇻", phone:"+238", currency:"CVE", symbol:"$", language:"pt" },
    { code:"CM", name:"Cameroun", flag:"🇨🇲", phone:"+237", currency:"XAF", symbol:"FCFA", language:"fr" },
    { code:"CF", name:"République centrafricaine", flag:"🇨🇫", phone:"+236", currency:"XAF", symbol:"FCFA", language:"fr" },
    { code:"TD", name:"Tchad", flag:"🇹🇩", phone:"+235", currency:"XAF", symbol:"FCFA", language:"fr" },
    { code:"KM", name:"Comores", flag:"🇰🇲", phone:"+269", currency:"KMF", symbol:"CF", language:"fr" },
    { code:"CG", name:"République du Congo", flag:"🇨🇬", phone:"+242", currency:"XAF", symbol:"FCFA", language:"fr" },
    { code:"CD", name:"République démocratique du Congo", flag:"🇨🇩", phone:"+243", currency:"CDF", symbol:"FC", language:"fr" },
    { code:"CI", name:"Côte d'Ivoire", flag:"🇨🇮", phone:"+225", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"DJ", name:"Djibouti", flag:"🇩🇯", phone:"+253", currency:"DJF", symbol:"Fdj", language:"fr" },
    { code:"EG", name:"Égypte", flag:"🇪🇬", phone:"+20", currency:"EGP", symbol:"£", language:"ar" },
    { code:"GQ", name:"Guinée équatoriale", flag:"🇬🇶", phone:"+240", currency:"XAF", symbol:"FCFA", language:"es" },
    { code:"ER", name:"Érythrée", flag:"🇪🇷", phone:"+291", currency:"ERN", symbol:"Nfk", language:"ti" },
    { code:"SZ", name:"Eswatini", flag:"🇸🇿", phone:"+268", currency:"SZL", symbol:"E", language:"en" },
    { code:"ET", name:"Éthiopie", flag:"🇪🇹", phone:"+251", currency:"ETB", symbol:"Br", language:"am" },
    { code:"GA", name:"Gabon", flag:"🇬🇦", phone:"+241", currency:"XAF", symbol:"FCFA", language:"fr" },
    { code:"GM", name:"Gambie", flag:"🇬🇲", phone:"+220", currency:"GMD", symbol:"D", language:"en" },
    { code:"GH", name:"Ghana", flag:"🇬🇭", phone:"+233", currency:"GHS", symbol:"₵", language:"en" }    { code:"GN", name:"Guinée", flag:"🇬🇳", phone:"+224", currency:"GNF", symbol:"FG", language:"fr" },
    { code:"GW", name:"Guinée-Bissau", flag:"🇬🇼", phone:"+245", currency:"XOF", symbol:"FCFA", language:"pt" },
    { code:"KE", name:"Kenya", flag:"🇰🇪", phone:"+254", currency:"KES", symbol:"KSh", language:"en" },
    { code:"LS", name:"Lesotho", flag:"🇱🇸", phone:"+266", currency:"LSL", symbol:"L", language:"en" },
    { code:"LR", name:"Libéria", flag:"🇱🇷", phone:"+231", currency:"LRD", symbol:"$", language:"en" },
    { code:"LY", name:"Libye", flag:"🇱🇾", phone:"+218", currency:"LYD", symbol:"LD", language:"ar" },
    { code:"MG", name:"Madagascar", flag:"🇲🇬", phone:"+261", currency:"MGA", symbol:"Ar", language:"fr" },
    { code:"MW", name:"Malawi", flag:"🇲🇼", phone:"+265", currency:"MWK", symbol:"MK", language:"en" },
    { code:"ML", name:"Mali", flag:"🇲🇱", phone:"+223", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"MR", name:"Mauritanie", flag:"🇲🇷", phone:"+222", currency:"MRU", symbol:"UM", language:"ar" },
    { code:"MU", name:"Maurice", flag:"🇲🇺", phone:"+230", currency:"MUR", symbol:"₨", language:"en" },
    { code:"MA", name:"Maroc", flag:"🇲🇦", phone:"+212", currency:"MAD", symbol:"DH", language:"ar" },
    { code:"MZ", name:"Mozambique", flag:"🇲🇿", phone:"+258", currency:"MZN", symbol:"MT", language:"pt" },
    { code:"NA", name:"Namibie", flag:"🇳🇦", phone:"+264", currency:"NAD", symbol:"$", language:"en" },
    { code:"NE", name:"Niger", flag:"🇳🇪", phone:"+227", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"NG", name:"Nigeria", flag:"🇳🇬", phone:"+234", currency:"NGN", symbol:"₦", language:"en" },
    { code:"RW", name:"Rwanda", flag:"🇷🇼", phone:"+250", currency:"RWF", symbol:"FRw", language:"rw" },
    { code:"ST", name:"Sao Tomé-et-Principe", flag:"🇸🇹", phone:"+239", currency:"STN", symbol:"Db", language:"pt" },
    { code:"SN", name:"Sénégal", flag:"🇸🇳", phone:"+221", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"SC", name:"Seychelles", flag:"🇸🇨", phone:"+248", currency:"SCR", symbol:"₨", language:"en" },
    { code:"SL", name:"Sierra Leone", flag:"🇸🇱", phone:"+232", currency:"SLE", symbol:"Le", language:"en" },
    { code:"SO", name:"Somalie", flag:"🇸🇴", phone:"+252", currency:"SOS", symbol:"Sh", language:"so" },
    { code:"ZA", name:"Afrique du Sud", flag:"🇿🇦", phone:"+27", currency:"ZAR", symbol:"R", language:"en" },
    { code:"SS", name:"Soudan du Sud", flag:"🇸🇸", phone:"+211", currency:"SSP", symbol:"£", language:"en" },
    { code:"SD", name:"Soudan", flag:"🇸🇩", phone:"+249", currency:"SDG", symbol:"£", language:"ar" },
    { code:"TZ", name:"Tanzanie", flag:"🇹🇿", phone:"+255", currency:"TZS", symbol:"Sh", language:"sw" },
    { code:"TG", name:"Togo", flag:"🇹🇬", phone:"+228", currency:"XOF", symbol:"FCFA", language:"fr" },
    { code:"TN", name:"Tunisie", flag:"🇹🇳", phone:"+216", currency:"TND", symbol:"DT", language:"ar" },
    { code:"UG", name:"Ouganda", flag:"🇺🇬", phone:"+256", currency:"UGX", symbol:"USh", language:"en" },
    { code:"ZM", name:"Zambie", flag:"🇿🇲", phone:"+260", currency:"ZMW", symbol:"ZK", language:"en" },
    { code:"ZW", name:"Zimbabwe", flag:"🇿🇼", phone:"+263", currency:"ZiG", symbol:"ZiG", language:"en" },    { code:"AL", name:"Albanie", flag:"🇦🇱", phone:"+355", currency:"ALL", symbol:"L", language:"sq" },
    { code:"DE", name:"Allemagne", flag:"🇩🇪", phone:"+49", currency:"EUR", symbol:"€", language:"de" },
    { code:"AD", name:"Andorre", flag:"🇦🇩", phone:"+376", currency:"EUR", symbol:"€", language:"ca" },
    { code:"AT", name:"Autriche", flag:"🇦🇹", phone:"+43", currency:"EUR", symbol:"€", language:"de" },
    { code:"BE", name:"Belgique", flag:"🇧🇪", phone:"+32", currency:"EUR", symbol:"€", language:"fr" },
    { code:"BA", name:"Bosnie-Herzégovine", flag:"🇧🇦", phone:"+387", currency:"BAM", symbol:"KM", language:"bs" },
    { code:"BG", name:"Bulgarie", flag:"🇧🇬", phone:"+359", currency:"BGN", symbol:"лв", language:"bg" },
    { code:"HR", name:"Croatie", flag:"🇭🇷", phone:"+385", currency:"EUR", symbol:"€", language:"hr" },
    { code:"DK", name:"Danemark", flag:"🇩🇰", phone:"+45", currency:"DKK", symbol:"kr", language:"da" },
    { code:"ES", name:"Espagne", flag:"🇪🇸", phone:"+34", currency:"EUR", symbol:"€", language:"es" },
    { code:"EE", name:"Estonie", flag:"🇪🇪", phone:"+372", currency:"EUR", symbol:"€", language:"et" },
    { code:"FI", name:"Finlande", flag:"🇫🇮", phone:"+358", currency:"EUR", symbol:"€", language:"fi" },
    { code:"FR", name:"France", flag:"🇫🇷", phone:"+33", currency:"EUR", symbol:"€", language:"fr" },
    { code:"GR", name:"Grèce", flag:"🇬🇷", phone:"+30", currency:"EUR", symbol:"€", language:"el" },
    { code:"HU", name:"Hongrie", flag:"🇭🇺", phone:"+36", currency:"HUF", symbol:"Ft", language:"hu" },
    { code:"IE", name:"Irlande", flag:"🇮🇪", phone:"+353", currency:"EUR", symbol:"€", language:"en" },
    { code:"IS", name:"Islande", flag:"🇮🇸", phone:"+354", currency:"ISK", symbol:"kr", language:"is" },
    { code:"IT", name:"Italie", flag:"🇮🇹", phone:"+39", currency:"EUR", symbol:"€", language:"it" },
    { code:"LV", name:"Lettonie", flag:"🇱🇻", phone:"+371", currency:"EUR", symbol:"€", language:"lv" },
    { code:"LT", name:"Lituanie", flag:"🇱🇹", phone:"+370", currency:"EUR", symbol:"€", language:"lt" },    { code:"LU", name:"Luxembourg", flag:"🇱🇺", phone:"+352", currency:"EUR", symbol:"€", language:"fr" },
    { code:"MT", name:"Malte", flag:"🇲🇹", phone:"+356", currency:"EUR", symbol:"€", language:"mt" },
    { code:"MD", name:"Moldavie", flag:"🇲🇩", phone:"+373", currency:"MDL", symbol:"L", language:"ro" },
    { code:"MC", name:"Monaco", flag:"🇲🇨", phone:"+377", currency:"EUR", symbol:"€", language:"fr" },
    { code:"ME", name:"Monténégro", flag:"🇲🇪", phone:"+382", currency:"EUR", symbol:"€", language:"sr" },
    { code:"MK", name:"Macédoine du Nord", flag:"🇲🇰", phone:"+389", currency:"MKD", symbol:"ден", language:"mk" },
    { code:"NO", name:"Norvège", flag:"🇳🇴", phone:"+47", currency:"NOK", symbol:"kr", language:"no" },
    { code:"NL", name:"Pays-Bas", flag:"🇳🇱", phone:"+31", currency:"EUR", symbol:"€", language:"nl" },
    { code:"PL", name:"Pologne", flag:"🇵🇱", phone:"+48", currency:"PLN", symbol:"zł", language:"pl" },
    { code:"PT", name:"Portugal", flag:"🇵🇹", phone:"+351", currency:"EUR", symbol:"€", language:"pt" },
    { code:"CZ", name:"République tchèque", flag:"🇨🇿", phone:"+420", currency:"CZK", symbol:"Kč", language:"cs" },
    { code:"RO", name:"Roumanie", flag:"🇷🇴", phone:"+40", currency:"RON", symbol:"lei", language:"ro" },
    { code:"GB", name:"Royaume-Uni", flag:"🇬🇧", phone:"+44", currency:"GBP", symbol:"£", language:"en" },
    { code:"SM", name:"Saint-Marin", flag:"🇸🇲", phone:"+378", currency:"EUR", symbol:"€", language:"it" },
    { code:"RS", name:"Serbie", flag:"🇷🇸", phone:"+381", currency:"RSD", symbol:"дин.", language:"sr" },
    { code:"SK", name:"Slovaquie", flag:"🇸🇰", phone:"+421", currency:"EUR", symbol:"€", language:"sk" },
    { code:"SI", name:"Slovénie", flag:"🇸🇮", phone:"+386", currency:"EUR", symbol:"€", language:"sl" },
    { code:"SE", name:"Suède", flag:"🇸🇪", phone:"+46", currency:"SEK", symbol:"kr", language:"sv" },
    { code:"CH", name:"Suisse", flag:"🇨🇭", phone:"+41", currency:"CHF", symbol:"CHF", language:"fr" },
    { code:"UA", name:"Ukraine", flag:"🇺🇦", phone:"+380", currency:"UAH", symbol:"₴", language:"uk" },
    { code:"VA", name:"Vatican", flag:"🇻🇦", phone:"+379", currency:"EUR", symbol:"€", language:"it" },    { code:"AF", name:"Afghanistan", flag:"🇦🇫", phone:"+93", currency:"AFN", symbol:"؋", language:"fa" },
    { code:"SA", name:"Arabie saoudite", flag:"🇸🇦", phone:"+966", currency:"SAR", symbol:"﷼", language:"ar" },
    { code:"AM", name:"Arménie", flag:"🇦🇲", phone:"+374", currency:"AMD", symbol:"֏", language:"hy" },
    { code:"AZ", name:"Azerbaïdjan", flag:"🇦🇿", phone:"+994", currency:"AZN", symbol:"₼", language:"az" },
    { code:"BH", name:"Bahreïn", flag:"🇧🇭", phone:"+973", currency:"BHD", symbol:".د.ب", language:"ar" },
    { code:"BD", name:"Bangladesh", flag:"🇧🇩", phone:"+880", currency:"BDT", symbol:"৳", language:"bn" },
    { code:"BT", name:"Bhoutan", flag:"🇧🇹", phone:"+975", currency:"BTN", symbol:"Nu.", language:"dz" },
    { code:"BN", name:"Brunéi", flag:"🇧🇳", phone:"+673", currency:"BND", symbol:"$", language:"ms" },
    { code:"KH", name:"Cambodge", flag:"🇰🇭", phone:"+855", currency:"KHR", symbol:"៛", language:"km" },
    { code:"CN", name:"Chine", flag:"🇨🇳", phone:"+86", currency:"CNY", symbol:"¥", language:"zh" },
    { code:"KP", name:"Corée du Nord", flag:"🇰🇵", phone:"+850", currency:"KPW", symbol:"₩", language:"ko" },
    { code:"KR", name:"Corée du Sud", flag:"🇰🇷", phone:"+82", currency:"KRW", symbol:"₩", language:"ko" },
    { code:"AE", name:"Émirats arabes unis", flag:"🇦🇪", phone:"+971", currency:"AED", symbol:"د.إ", language:"ar" },
    { code:"GE", name:"Géorgie", flag:"🇬🇪", phone:"+995", currency:"GEL", symbol:"₾", language:"ka" },
    { code:"IN", name:"Inde", flag:"🇮🇳", phone:"+91", currency:"INR", symbol:"₹", language:"hi" },
    { code:"ID", name:"Indonésie", flag:"🇮🇩", phone:"+62", currency:"IDR", symbol:"Rp", language:"id" },
    { code:"IQ", name:"Irak", flag:"🇮🇶", phone:"+964", currency:"IQD", symbol:"ع.د", language:"ar" },
    { code:"IR", name:"Iran", flag:"🇮🇷", phone:"+98", currency:"IRR", symbol:"﷼", language:"fa" },
    { code:"IL", name:"Israël", flag:"🇮🇱", phone:"+972", currency:"ILS", symbol:"₪", language:"he" },
    { code:"JP", name:"Japon", flag:"🇯🇵", phone:"+81", currency:"JPY", symbol:"¥", language:"ja" },    { code:"JO", name:"Jordanie", flag:"🇯🇴", phone:"+962", currency:"JOD", symbol:"JD", language:"ar" },
    { code:"KZ", name:"Kazakhstan", flag:"🇰🇿", phone:"+7", currency:"KZT", symbol:"₸", language:"kk" },
    { code:"KW", name:"Koweït", flag:"🇰🇼", phone:"+965", currency:"KWD", symbol:"KD", language:"ar" },
    { code:"KG", name:"Kirghizistan", flag:"🇰🇬", phone:"+996", currency:"KGS", symbol:"с", language:"ky" },
    { code:"LA", name:"Laos", flag:"🇱🇦", phone:"+856", currency:"LAK", symbol:"₭", language:"lo" },
    { code:"LB", name:"Liban", flag:"🇱🇧", phone:"+961", currency:"LBP", symbol:"ل.ل", language:"ar" },
    { code:"MY", name:"Malaisie", flag:"🇲🇾", phone:"+60", currency:"MYR", symbol:"RM", language:"ms" },
    { code:"MV", name:"Maldives", flag:"🇲🇻", phone:"+960", currency:"MVR", symbol:"Rf", language:"dv" },
    { code:"MN", name:"Mongolie", flag:"🇲🇳", phone:"+976", currency:"MNT", symbol:"₮", language:"mn" },
    { code:"MM", name:"Myanmar", flag:"🇲🇲", phone:"+95", currency:"MMK", symbol:"Ks", language:"my" },
    { code:"NP", name:"Népal", flag:"🇳🇵", phone:"+977", currency:"NPR", symbol:"₨", language:"ne" },
    { code:"OM", name:"Oman", flag:"🇴🇲", phone:"+968", currency:"OMR", symbol:"﷼", language:"ar" },
    { code:"PK", name:"Pakistan", flag:"🇵🇰", phone:"+92", currency:"PKR", symbol:"₨", language:"ur" },
    { code:"PH", name:"Philippines", flag:"🇵🇭", phone:"+63", currency:"PHP", symbol:"₱", language:"en" },
    { code:"QA", name:"Qatar", flag:"🇶🇦", phone:"+974", currency:"QAR", symbol:"﷼", language:"ar" },
    { code:"SG", name:"Singapour", flag:"🇸🇬", phone:"+65", currency:"SGD", symbol:"$", language:"en" },
    { code:"LK", name:"Sri Lanka", flag:"🇱🇰", phone:"+94", currency:"LKR", symbol:"₨", language:"si" },
    { code:"SY", name:"Syrie", flag:"🇸🇾", phone:"+963", currency:"SYP", symbol:"£", language:"ar" },
    { code:"TW", name:"Taïwan", flag:"🇹🇼", phone:"+886", currency:"TWD", symbol:"NT$", language:"zh" },
    { code:"TH", name:"Thaïlande", flag:"🇹🇭", phone:"+66", currency:"THB", symbol:"฿", language:"th" },
    { code:"TL", name:"Timor oriental", flag:"🇹🇱", phone:"+670", currency:"USD", symbol:"$", language:"pt" },
    { code:"TR", name:"Turquie", flag:"🇹🇷", phone:"+90", currency:"TRY", symbol:"₺", language:"tr" },
    { code:"TM", name:"Turkménistan", flag:"🇹🇲", phone:"+993", currency:"TMT", symbol:"m", language:"tk" },
    { code:"UZ", name:"Ouzbékistan", flag:"🇺🇿", phone:"+998", currency:"UZS", symbol:"so'm", language:"uz" },
    { code:"VN", name:"Viêt Nam", flag:"🇻🇳", phone:"+84", currency:"VND", symbol:"₫", language:"vi" },
    { code:"YE", name:"Yémen", flag:"🇾🇪", phone:"+967", currency:"YER", symbol:"﷼", language:"ar" },    /* =========================
       AMÉRIQUE DU NORD
    ========================= */

    { code:"AG", name:"Antigua-et-Barbuda", flag:"🇦🇬", phone:"+1-268", currency:"XCD", symbol:"$", language:"en" },
    { code:"BS", name:"Bahamas", flag:"🇧🇸", phone:"+1-242", currency:"BSD", symbol:"$", language:"en" },
    { code:"BB", name:"Barbade", flag:"🇧🇧", phone:"+1-246", currency:"BBD", symbol:"$", language:"en" },
    { code:"BZ", name:"Belize", flag:"🇧🇿", phone:"+501", currency:"BZD", symbol:"$", language:"en" },
    { code:"CA", name:"Canada", flag:"🇨🇦", phone:"+1", currency:"CAD", symbol:"$", language:"en" },
    { code:"CR", name:"Costa Rica", flag:"🇨🇷", phone:"+506", currency:"CRC", symbol:"₡", language:"es" },
    { code:"CU", name:"Cuba", flag:"🇨🇺", phone:"+53", currency:"CUP", symbol:"$", language:"es" },
    { code:"DM", name:"Dominique", flag:"🇩🇲", phone:"+1-767", currency:"XCD", symbol:"$", language:"en" },
    { code:"DO", name:"République dominicaine", flag:"🇩🇴", phone:"+1-809", currency:"DOP", symbol:"RD$", language:"es" },
    { code:"SV", name:"Salvador", flag:"🇸🇻", phone:"+503", currency:"USD", symbol:"$", language:"es" },
    { code:"US", name:"États-Unis", flag:"🇺🇸", phone:"+1", currency:"USD", symbol:"$", language:"en" },
    { code:"GD", name:"Grenade", flag:"🇬🇩", phone:"+1-473", currency:"XCD", symbol:"$", language:"en" },
    { code:"GT", name:"Guatemala", flag:"🇬🇹", phone:"+502", currency:"GTQ", symbol:"Q", language:"es" },
    { code:"HT", name:"Haïti", flag:"🇭🇹", phone:"+509", currency:"HTG", symbol:"G", language:"fr" },
    { code:"HN", name:"Honduras", flag:"🇭🇳", phone:"+504", currency:"HNL", symbol:"L", language:"es" },
    { code:"JM", name:"Jamaïque", flag:"🇯🇲", phone:"+1-876", currency:"JMD", symbol:"J$", language:"en" },
    { code:"MX", name:"Mexique", flag:"🇲🇽", phone:"+52", currency:"MXN", symbol:"$", language:"es" },
    { code:"NI", name:"Nicaragua", flag:"🇳🇮", phone:"+505", currency:"NIO", symbol:"C$", language:"es" },
    { code:"PA", name:"Panama", flag:"🇵🇦", phone:"+507", currency:"PAB", symbol:"B/.", language:"es" },
    { code:"KN", name:"Saint-Christophe-et-Niévès", flag:"🇰🇳", phone:"+1-869", currency:"XCD", symbol:"$", language:"en" },
    { code:"LC", name:"Sainte-Lucie", flag:"🇱🇨", phone:"+1-758", currency:"XCD", symbol:"$", language:"en" },
    { code:"VC", name:"Saint-Vincent-et-les-Grenadines", flag:"🇻🇨", phone:"+1-784", currency:"XCD", symbol:"$", language:"en" },
    { code:"TT", name:"Trinité-et-Tobago", flag:"🇹🇹", phone:"+1-868", currency:"TTD", symbol:"$", language:"en" },

    /* =========================
       AMÉRIQUE DU SUD
    ========================= */

    { code:"AR", name:"Argentine", flag:"🇦🇷", phone:"+54", currency:"ARS", symbol:"$", language:"es" },
    { code:"BO", name:"Bolivie", flag:"🇧🇴", phone:"+591", currency:"BOB", symbol:"Bs", language:"es" },
    { code:"BR", name:"Brésil", flag:"🇧🇷", phone:"+55", currency:"BRL", symbol:"R$", language:"pt" },
    { code:"CL", name:"Chili", flag:"🇨🇱", phone:"+56", currency:"CLP", symbol:"$", language:"es" },
    { code:"CO", name:"Colombie", flag:"🇨🇴", phone:"+57", currency:"COP", symbol:"$", language:"es" },
    { code:"EC", name:"Équateur", flag:"🇪🇨", phone:"+593", currency:"USD", symbol:"$", language:"es" },
    { code:"GY", name:"Guyana", flag:"🇬🇾", phone:"+592", currency:"GYD", symbol:"$", language:"en" },
    { code:"PY", name:"Paraguay", flag:"🇵🇾", phone:"+595", currency:"PYG", symbol:"₲", language:"es" },
    { code:"PE", name:"Pérou", flag:"🇵🇪", phone:"+51", currency:"PEN", symbol:"S/", language:"es" },
    { code:"SR", name:"Suriname", flag:"🇸🇷", phone:"+597", currency:"SRD", symbol:"$", language:"nl" },
    { code:"UY", name:"Uruguay", flag:"🇺🇾", phone:"+598", currency:"UYU", symbol:"$", language:"es" },
    { code:"VE", name:"Venezuela", flag:"🇻🇪", phone:"+58", currency:"VES", symbol:"Bs.", language:"es" },    /* =========================
       OCÉANIE
    ========================= */

    { code:"AU", name:"Australie", flag:"🇦🇺", phone:"+61", currency:"AUD", symbol:"$", language:"en" },
    { code:"FJ", name:"Fidji", flag:"🇫🇯", phone:"+679", currency:"FJD", symbol:"$", language:"en" },
    { code:"KI", name:"Kiribati", flag:"🇰🇮", phone:"+686", currency:"AUD", symbol:"$", language:"en" },
    { code:"MH", name:"Îles Marshall", flag:"🇲🇭", phone:"+692", currency:"USD", symbol:"$", language:"en" },
    { code:"FM", name:"Micronésie", flag:"🇫🇲", phone:"+691", currency:"USD", symbol:"$", language:"en" },
    { code:"NR", name:"Nauru", flag:"🇳🇷", phone:"+674", currency:"AUD", symbol:"$", language:"en" },
    { code:"NZ", name:"Nouvelle-Zélande", flag:"🇳🇿", phone:"+64", currency:"NZD", symbol:"$", language:"en" },
    { code:"PW", name:"Palaos", flag:"🇵🇼", phone:"+680", currency:"USD", symbol:"$", language:"en" },
    { code:"PG", name:"Papouasie-Nouvelle-Guinée", flag:"🇵🇬", phone:"+675", currency:"PGK", symbol:"K", language:"en" },
    { code:"WS", name:"Samoa", flag:"🇼🇸", phone:"+685", currency:"WST", symbol:"T", language:"en" },
    { code:"SB", name:"Îles Salomon", flag:"🇸🇧", phone:"+677", currency:"SBD", symbol:"$", language:"en" },
    { code:"TO", name:"Tonga", flag:"🇹🇴", phone:"+676", currency:"TOP", symbol:"T$", language:"en" },
    { code:"TV", name:"Tuvalu", flag:"🇹🇻", phone:"+688", currency:"AUD", symbol:"$", language:"en" },
    { code:"VU", name:"Vanuatu", flag:"🇻🇺", phone:"+678", currency:"VUV", symbol:"Vt", language:"fr" }

];/* =======================================================
   REMPLIR LE SÉLECTEUR
======================================================= */

function populateCountries() {

    if (!countrySelect) return;

    countrySelect.innerHTML = "";

    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country.code;

        option.textContent = `${country.flag} ${country.name}`;

        countrySelect.appendChild(option);

    });

}

/* =======================================================
   METTRE À JOUR LE PAYS
======================================================= */

function updateCountry(code) {

    const country = countries.find(item => item.code === code);

    if (!country) return;

    if (flagElement) {
        flagElement.textContent = country.flag;
    }

    if (phoneCode) {
        phoneCode.textContent = country.phone;
    }

    if (currencyElement) {
        currencyElement.textContent =
            `${country.currency} (${country.symbol})`;
    }

    localStorage.setItem("zysell-country", country.code);

}

/* =======================================================
   DÉTECTION DU PAYS
======================================================= */

function detectCountry() {

    const browserLanguage =
        (navigator.language || "fr").substring(0, 2).toLowerCase();

    const detected = countries.find(
        country => country.language === browserLanguage
    );

    return detected ? detected.code : "CM";

}

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    populateCountries();

    const savedCountry =
        localStorage.getItem("zysell-country") || detectCountry();

    if (countrySelect) {
        countrySelect.value = savedCountry;
    }

    updateCountry(savedCountry);

    if (countrySelect) {

        countrySelect.addEventListener("change", event => {

            updateCountry(event.target.value);

        });

    }

});

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellCountries = {

    list: countries,

    current() {
        return localStorage.getItem("zysell-country");
    },

    update: updateCountry,

    detect: detectCountry

};

console.log(`✅ ${countries.length} pays chargés.`);
