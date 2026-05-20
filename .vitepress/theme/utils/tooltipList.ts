export type Tooltip = {
    title: string;
    text: string;
    wiki?: string;
};

type SubjectTooltips = Record<string, Tooltip>;

export const zemepis: SubjectTooltips = {
    "1": {
        title: "🏛️ Parlamentní republika",
        text: "Republika, kde je vláda odpovědná parlamentu. Hlava státu (prezident) má obvykle spíše reprezentativní roli.",
        wiki: "https://cs.wikipedia.org/wiki/Parlamentn%C3%AD_republika"
    },
    "2": {
        title: "🧑‍⚖️ Prezidentská republika",
        text: "Republika, ve které má prezident silné pravomoci a stojí v čele výkonné moci i vlády (např. USA).",
        wiki: "https://cs.wikipedia.org/wiki/Prezidentsk%C3%A1_republika"
    },
    "3": {
        title: "🧑‍💼 Poloprezidentská republika",
        text: "Smíšený systém se silným prezidentem (přímá volba) i premiérem odpovědným parlamentu (např. Francie).",
        wiki: "https://cs.wikipedia.org/wiki/Poloprezidentsk%C3%A1_republika"
    },
    "4": {
        title: "⚖️ Federální parlamentní republika",
        text: "Federace složená ze států či provincií s vlastní samosprávou, kde je federální vláda odpovědná parlamentu.",
        wiki: "https://cs.wikipedia.org/wiki/Federativn%C3%AD_republika"
    },
    "5": {
        title: "⚖️ Federální prezidentská republika",
        text: "Federální stát, ve kterém exekutivu a vládu řídí přímo prezident s výraznými pravomocemi.",
        wiki: "https://cs.wikipedia.org/wiki/Federativn%C3%AD_republika"
    },
    "6": {
        title: "👑 Konstituční monarchie",
        text: "Monarchie, kde je moc panovníka omezena ústavou. Reálnou politickou moc drží parlament a vláda.",
        wiki: "https://cs.wikipedia.org/wiki/Konstitu%C4%8Dn%C3%AD_monarchie"
    },
    "7": {
        title: "👑 Federální parlamentní konstituční monarchie",
        text: "Spojení federativního uspořádání a konstituční monarchie s parlamentním systémem (např. Kanada, Austrálie).",
        wiki: "https://cs.wikipedia.org/wiki/Feder%C3%A1ln%C3%AD_monarchie"
    },
    "8": {
        title: "👑 Absolutní monarchie",
        text: "Forma vlády, ve které má panovník neomezenou politickou moc a nepodléhá ústavě ani parlamentu.",
        wiki: "https://cs.wikipedia.org/wiki/Absolutn%C3%AD_monarchie"
    },
    "9": {
        title: "⛪ Absolutní teokratická monarchie",
        text: "Stát, kde je absolutní světská moc pevně spojena s náboženskou autoritou. Specifickým příkladem je Vatikán.",
        wiki: "https://cs.wikipedia.org/wiki/Teokracie"
    },
    "10": {
        title: "🤝 Parlamentní spoluknížectví",
        text: "Unikátní systém, kde funkci hlavy státu sdílí dvě osoby (spoluknížata), ale moc drží volený parlament.",
        wiki: "https://cs.wikipedia.org/wiki/Andorra"
    },
    "11": {
        title: "🛠️ Socialistická republika",
        text: "Stát zřízení ovládané jedinou (komunistickou) stranou s centralizovanou ekonomikou a mocí.",
        wiki: "https://cs.wikipedia.org/wiki/Socialistick%C3%BD_st%C3%A1t"
    },
    "12": {
        title: "🌙 Islámská republika",
        text: "Teokratická republika, jejíž ústava, zákony a soudnictví se opírají o islámské právo šaría.",
        wiki: "https://cs.wikipedia.org/wiki/Isl%C3%A1msk%C3%A1_republika"
    },
    "13": {
        title: "🕌 Teokratický emirát",
        text: "Stát s absolutní mocí emíra, kde je legislativa plně podřízena striktnímu výkladu islámského práva.",
        wiki: "https://cs.wikipedia.org/wiki/Emir%C3%A1t"
    },
    "14": {
        title: "🪖 Vojenská junta",
        text: "Autoritářský režim, ve kterém zemi po státním převratu přímo řídí armádní velitelé bez demokratických voleb.",
        wiki: "https://cs.wikipedia.org/wiki/Vojensk%C3%A1_junta"
    }
};

function tooltipsIDs(prefix: string, record: SubjectTooltips): SubjectTooltips {
    return Object.fromEntries(
        Object.entries(record).map(([key, value]) => [`${prefix}${key}`, value])
    ) as SubjectTooltips;
}

const tooltips = {
    ...tooltipsIDs("ze", zemepis)
} satisfies SubjectTooltips;

export default tooltips;