import img_morita from '../../img/banner/morita_banner.png';
import img_lavendarium from '../../img/banner/lavendarium_banner.png';
import img_suda from '../../img/banner/suda_banner.png';

// delete intro later and simplify object structure
const webPagesIntro = {
    headline: 'Web Pages',
    textEN: `When Henry Miller published his "character assassination" of Conrad Moricand in A Devil In Paradise (1956), it must have sent the then recently-deceased astrologer spinning in his grave. No longer alive to defend his reputation, Moricand has come off as a creepy, vain, poncey buffoon to readers for decades. It's fifty years later, and Moricand's corpse can stop spinning now that Karl Orend has come to his defense in The Brotherhood of Fools & Simpletons: Gods and Devils in Henry Miller's Utopia (Alyscamps Press, 2005).`,
    textFR: `Ces quatre belles lettres du mythique dandy Conrad Moricand, au peintre Marcel Mouillot, offrent un rare témoignage de la personnalité fantasque de ce fils d'aristocrates suisses, mécène, illustrateur et astrologue, ami de Pablo Picasso, Max Jacob, Henri Michaux, et plus tard, d'Henry Miller, à qui il inspira Un Diable au Paradis et qui l'invita à Big Sur : «Excuses, délices et orgues. J'ai tout du dégueulas. Vous m'avez comblé depuis mon départ : un charmant petit poème en prose et ce mirobolant chapeau équatorial, objet de nos convoitises. `,
};

// artword, Toki no Wasuremono, Morita Shiryū, Mishima, Kida, Kuroda, Suda, Lavendarium, HP Merger, this page --> total of 10 (TOO MUCH)
// omit: this page, Kuroda
// non-SBK: 4
// SBK: 6

const MoritaShiryu = {
    id: 1,
    title: 'Morita Shiryū Exhibition',
    titleFR: 'Éxposition Morita Shiryū',
    img: img_morita,
    description: 'Webpage for an exhibition on a Japanese postwar calligrapher',
    desFR: `Présentation d'un éxposition sur un calligraphe Japonais`,
    tools: ['React', 'SASS', 'GCP'],
    date: 'December 2020',
    dateFR: 'Décembre 2020',
    url: 'webpages/morita',
    livePage: 'https://moritashiryu-bokujin.com/english',
    github: 'https://github.com/jensbartel/morita_refactor-review',
};

const Toki = {
    id: 3,
    title: 'Toki-no-Wasuremono Gallery',
    titleFR: 'Galerie Toki-no-Wasuremono',
    img: img_lavendarium,
    description: 'Mobile phone layout for a webpage of a Tokyo-based gallery',
    desFR: `Layout de téléphone portable d'un page d'un galerie situé à Tokyo`,
    tools: ['HTML/CSS/JS', 'PHP', 'Visual Basic'],
    date: 'February-May 2016',
    dateFR: 'Février-Mai 2016',
    url: 'webpages/toki',
};

const Suda = {
    id: 2,
    title: 'Suda Kokuta: Abstractions',
    titleFR: 'Suda Kokuta: Abstractions ',
    img: img_suda,
    description: 'Webpage for an exhibition on a Japanese painter',
    desFR: `Présentation d'un éxposition sur un peintre Japonais après-guerre`,
    tools: ['HTML/CSS/JS'],
    date: 'December 2020',
    dateFR: 'Décembre 2020',
    url: 'webpages/suda',
    livePage: 'https://shop.shibunkaku.co.jp/english/shop/pages/suda.aspx',
    github: 'https://github.com/jensbartel',
};

const Mishima = {
    id: 4,
    title: 'Mishima Ritsue Exhibition',
    titleFR: 'Éxposition Mishima Ritsue',
    description: 'Venetian-based Japanese glass artist',
    desFR: 'Artiste Japonaise du glasse situé à Venise',
    tools: ['HTML/CSS/JS'],
    date: 'May 2020',
    dateFR: 'Mai 2020',
    url: 'webpages/mishima',
    livePage: 'https://storage.googleapis.com/mishima-332813/mishima_eng.html',
    github: 'https://github.com/jensbartel/mishimaritsue-exhibition',
};

const Kida = {
    id: 20,
    title: 'Kida Yasuhiko Exhibition',
};

const Lavendarium = {
    id: 21,
    title: 'Lavendarium',
    titleFR: 'Lavendarium',
    img: img_lavendarium,
    description: 'Artist portfolio, recreating a Squarespace template in React',
    desFR: 'Portfolio artiste, inspiré par un template Squarespace, créé en React',
    tools: ['React', 'GCP'],
    date: 'May 2021',
    dateFR: 'Mai 2021',
    url: '/',
};

const data = { MoritaShiryu, Toki, Suda, Mishima, Kida, Lavendarium };

// removie later - this is just to keep the earlier overview page layout alive for now
const dataArray = [MoritaShiryu, Suda, Toki, Mishima, Lavendarium, Kida];

export const webPages = {
    intro: webPagesIntro,
    projects: data,
    projectsArray: dataArray,
};
