import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState("day");


  useEffect(() => fetchPosts(), []);

  useEffect(() => console.log(posts), [posts]);

  
  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.lenght = 10;
        setPosts(data);
      });
  }

  function handleTheme () {
    setTheme((theme) => (theme === "night" ? "day" : "night"));

  }

 return (
    <div className="main-container" data-theme={theme}>
      <header>
      <h1>BLOG DA DAY</h1>
          <button className='btn primary'>Novo Post</button>
          <button className='btn primary' onClick={() => handleTheme()}>
            {theme === "night" ? "Day" : "Night"} Mode</button>
      </header>
      <main>
        {posts.map((post) => (
       
        <section className='post-card' 
        id={post.id}
        onClick={(e) => console.log(e)}
        >
          <div className='post-preview-content'>           
            <div className='post-author' >
              <img 
                src='https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg' 
                alt='Avatar do autor'
                className='author-avatar'                 
              /> 
              <p>DayRamos</p>
            </div>
            <div className='post-body'> 
              <p className='post-title'>{post.title}</p>
              <p className='post-preview'>{post.body}</p>          
            </div>
          </div>
          <div className='post-img'>
            <img 
            src={`https://picsum.photos/id/${10 * post.id}/100`} 
            alt='imagem do post' 
            />
          </div>
        </section>
        ))}
        
      </main>


      <section className='fullscreen-post'>
        <button className='btn secondary post-close'>Fechar</button>
          <div className='post-content'>
            <h1> Título do Post</h1>
            <p> Conteúdo do Post</p>
          </div>
      </section>


    </div>
  )
}

export default App;
