import ArticleContainer from "../components/ArticleContainer";
import Data from "../components/Data"
const Blog = () => {
    return ( 
        <div className="blog-wrapper">
            {Data.map((item, i) => 
            <ArticleContainer key={i} 
            image={item.img_url}
            title={item.title}
            />
            )}
        </div>
     );
}

export default Blog;