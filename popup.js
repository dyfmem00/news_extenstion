// 예시로 기본적인 뉴스 제목 리스트를 추가합니다.
document.addEventListener('DOMContentLoaded', function () {
  const newsList = [
    { title: '전 세계 주식 시장 급락' },
    { title: '비트코인 가격 급등' },
    { title: '새로운 기술 혁신 발표' }
  ];

  const listElement = document.getElementById('news-list');

  newsList.forEach(news => {
    const listItem = document.createElement('li');
    listItem.className = 'news-item';
    listItem.textContent = news.title;
    listElement.appendChild(listItem);
  });
});
