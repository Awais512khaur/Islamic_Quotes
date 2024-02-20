
const quotes = [
    " ربعی بن حراش سے روایت ہے انہوں نے سنا سیدنا علی رضی اللہ عنہ سے وہ خطبہ پڑھ رہے تھے کہتے تھے فرمایا رسول اللہ صلی اللہ علیہ وسلم نے: ”مت جھوٹ باندھو میرے اوپر۔ جو کوئی میرے اوپر جھوٹ باندھے گا وہ جہنم میں جائے گا۔ (Sahih Muslim Chapter 1 Hadith#2)",
    " دوستوں کے دکھوں میں شریک ہوں ، لیکن خوشی میں اس وقت تک نہ جائیں جب تک وہ خود نہ بولیں۔  (Hazrat Ali (R.A))",
    " .جس کی حیا کم ہوجاتی ہے اسکی پرہیزگاری کم ہوجاتی ہے (Hazrat Umar (R.A))",
    " دنیا میں دو طاقتیں ہیں۔ ایک تلوار ہے اور دوسرا قلم۔ دونوں کے مابین زبردست مقابلہ اور دشمنی ہے۔ دونوں سے مضبوط تیسری طاقت ہے ، خواتین کی۔ (Quaid e Azam)",
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  

  function updatePopupWithQuote() {
    
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();
    const fontColor = getColor(); 
    const quote = getRandomQuote();
 
    quoteElement.textContent = quote;
    quoteElement.style.color = fontColor;

  }

  document.getElementById("Btn").addEventListener("click", updatePopupWithQuote);
    
  
  function getColor() {
    let color = "#eee";
    return color;
  }
 
    
  