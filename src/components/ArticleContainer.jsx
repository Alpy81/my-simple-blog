const ArticleContainer = (props) => {
    return (  
        <div>
            <img src={props.image}/>
            <p>{props.title}</p>
            <button className="btn">Read more</button>
        </div>
    );
}
 
export default ArticleContainer;

