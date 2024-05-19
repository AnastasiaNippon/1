const images = [
    "https://natalyland.ru/wp-content/uploads/a/7/0/a707096eda6ac830dc0fcca8af981e78.jpeg",
    "https://ferrethome.ru/wp-content/uploads/b/b/3/bb3953bd7b5ddb12c6e9a0bc97a32cad.jpeg",
    "https://klkfavorit.ru/wp-content/uploads/9/5/3/953e8eb90c966eab9c1b719c115a3461.jpeg",
    "https://koshka.top/uploads/posts/2021-11/1637788558_65-koshka-top-p-krasivikh-kotikov-pushistikh-76.jpg",
    "http://cdn.mobsocmedia.com/uploads/sites/33/20170511211155/Princess-Aurora-A-photogenic-cat-royalty-583ae3aca5527__880.jpg"
  ];
  
  let currentIndex = 0;
  
  const imgElement = document.getElementById('image');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  });
  
  function learnJavaScript() {
    console.log("Я учу JavaScript!");
  }
  
  // Вызываем мега функцию ;))))))
  learnJavaScript();
  