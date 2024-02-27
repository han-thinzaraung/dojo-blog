import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data:blog,error,isPending} = useFetch('https://dojo-blog-app.vercel.app/blogs/' + id);
    const handleClick = () => {
        fetch('https://dojo-blog-app.vercel.app/blogs/' + id , {
            method:'DELETE' 
        }).then ((res) => {
            history.push('/');
        }).catch((e) => {
            console.log(e);
        })

    }
    return (  
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&  (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>

    );
}
 
export default BlogDetails;