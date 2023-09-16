const cardSection = document.querySelector("#cardSection");
const heading = document.querySelector(".card-title");
const image = document.querySelector(".card-img-bottom");
const para = document.querySelector(".card-text");
const link = document.querySelector(".refer-other");

let articles = [];

let obj1 = {
  title: "How to educate your children on money matters with these basic lessons",
  paragraph: "NEW DELHI: Parents must understand that finance is undoubtedly one of the most important conversations they must have with their growing children. Early lessons on money and finance can help them avoid issues at later stages of their lives. As it is not always possible for schools and colleges to offer courses on personal finance, parents must assume the responsibility of educating children on money-related matters.",
  imgLink: "https://images.livemint.com/img/2022/08/18/600x338/28d57ebc-1eb4-11ed-b960-3da57f062e11_1660799613415.jpg",
  pageLink: "https://www.livemint.com/money/personal-finance/how-to-make-your-children-financially-stable-with-these-basic-lessons-11660799623762.html"
};

let obj2 = {
  title: "How to give your children a head start in investing",
  paragraph: "When they start earning, most young people blow away their salaries on eating out, new clothes and expensive gadgets. But Sailaxmi Reddy (see picture) quietly started SIPs in four equity funds and opened a recurring deposit. “I don’t have too many expenses right now and can save a big chunk of my salary,” says the Mumbai-based bank executive. She wants to save aggressively for the next 10 years to fund her entrepreneurial dream.",
  imgLink: "https://img.etimg.com/thumb/msid-71981845,width-300,height-225,imgsize-1163485,,resizemode-75/cochildpar.jpg",
  pageLink: "https://economictimes.indiatimes.com/wealth/plan/how-to-give-your-children-a-head-start-in-investing/articleshow/71981846.cms?from=mdr"
};

let obj3 = {
  title: "Importance of financial literacy for teens",
  paragraph: "As a teenager, have you ever seen your parents discussing something related to money, and when you try to join the conversation, they either switch the topic or say something like “we are doing something important, don’t disturb”. Most of us wonder why they do this, why can’t we know about money? Well, you are not exactly financially literate, so quite frankly, they think it would be of no help at the moment. ‘Financial Literacy’ is defined as the ability to “understand and use various financial skills”.",
  imgLink: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2022/10/Payal-Jain-3-2-150x150.jpeg",
  pageLink: "https://timesofindia.indiatimes.com/blogs/voices/importance-of-financial-literacy-for-teens/"
};

let obj4 = {
  title: "Explainer: What is digital public infrastructure?",
  paragraph: "When the COVID-19 pandemic struck, governments around the world rushed to send emergency payments to their people as lockdowns ground their economies to a halt. Some countries dispensed funds to millions of people within weeks. Others took months, sent money to the wrong people, or excluded qualified recipients. How quickly people received money depended largely on whether they lived in a country with a strong digital public infrastructure, or DPI.",
  imgLink: "https://www.gatesfoundation.org/-/media/gfo/5ideas_articles/articles/20230816-what-is-digital-public-infrastructure/hero_ideas_dpi-explainer_ga17089024_mm646912_08162023_1600x1000.jpg?w=1600&hash=B0B7DFA1ACE55999A7D1430D7F209719",
  pageLink: "https://www.gatesfoundation.org/ideas/articles/what-is-digital-public-infrastructure"
};

let obj5 = {
  title: "In India, Financial Literacy Programs Are Lifting Families Out of Debt and Fueling New Prosperity",
  paragraph: "The Hindi words for “capable” (Saksham) and “development” (Unnati), are helping to define financial inclusion in India. For Indians, developing capability is a call to action. This is why seminars on financial literacy skills are so effective. Financial literacy can be the difference between drowning in unregulated debt, often from loan sharks, or breaking free by building through successful small businesses.India has made great progress in improving financial inclusion by making loans and other financial services available to low-income borrowers, through support from the Government of India, microfinance institutions (MFIs), and NGOs. In 2014 the government launched Pradhan Mantri Jan-Dhan Yojana, a program aimed at providing a bank account for every household. The program generated a record 443 million accounts for India’s households since its August 2014 launch through to early January 2022.",
  imgLink: "https://www.adb.org/sites/default/files/content-media/148451-women-borrowers.jpg",
  pageLink: "https://www.adb.org/results/india-financial-literacy-programs-lifting-families-out-debt-fueling-new-prosperity"
};

articles.push(obj1);
articles.push(obj2);
articles.push(obj3);
articles.push(obj4);
articles.push(obj5);

function generateRandom() {
    let randomIndex = 0 + (Math.round(Math.random() * 4));
    image.setAttribute("src", articles[randomIndex].imgLink);
    heading.textContent = articles[randomIndex].title;
    para.textContent = articles[randomIndex].paragraph;
    link.setAttribute("href", articles[randomIndex].pageLink);
}

generateRandom();