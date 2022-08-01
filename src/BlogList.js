import { Link } from 'react-router-dom'
const BlogList = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
           {
                blogs.map((b) => (
                    <div key={b.id} className="blog-preview">
                        <Link to={`/blogs/${b.id}`}>
                            <h2>{b.title}</h2>
                            <p>Written by { b.author }</p>
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;
 