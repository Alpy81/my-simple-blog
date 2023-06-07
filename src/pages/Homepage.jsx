import Header from "../components/Header";
const Homepage = () => {
    return ( 
            <section className="App">
              <Header />
              <div className='yellow'></div>
              <article className='home-article'>
                <div className="h2">
                <h2>Welcome to my simple Blog</h2>
                </div>
                <button>Go to articles</button>
              </article>
            </section>
          )
}
 
export default Homepage;
