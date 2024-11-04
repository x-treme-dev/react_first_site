import './Sidebar.css'

// создать массив новостей
const newsData = [
  { id: 1, title: "Techno news 1", content: "Content 1" },
  { id: 2, title: "Techno news 2", content: "Content 2" },
  { id: 3, title: "Techno news 3", content: "Content 3" },
  { id: 4, title: "Techno news 4", content: "Content 4" },
  { id: 5, title: "Techno news 5", content: "Content 5" },
];

// задать шаблон
const NewsItem = ({ title, content }) => {
  return (
    <div className="news-item">
      <a href="#" className="news-item__a">
      <h3>{title}</h3>
      </a>
      <p>{content}</p>
    </div>
  );
};

// вывести через компонент и функцию map
const Sidebar = () => {
  return (
    <aside>
      <h2>Techo news</h2>
      {newsData.map(news => (
        <NewsItem key={news.id} title={news.title} content={news.content} />
      ))}
    </aside>
  );
};



export default Sidebar