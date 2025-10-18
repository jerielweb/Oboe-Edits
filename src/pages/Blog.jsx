import blogData from './../content/blog.content.js'
import blogStyle from './../Styles/blog.module.css'



export function Blog () {
    return (
        <section className={blogStyle.container}>
            <h1>Nuestros Trabajos mas Recientes</h1>
            {blogData.map((blog, index) => (
                <article key={index} className={blogStyle.card}>
                    <div>
                        <h2>{blog.name}</h2>
                        <div>
                            {blog.description instanceof Array ? (
                            blog.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))
                        ) : (
                            <p>{blog.description}</p>
                        )}
                        </div>
                        <div>
                            <ul className={blogStyle.list}>
                                {blog.list && blog.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>{blog.result}</h3>
                        <div key={index}>
                            {blog.type === 'image' && blog.image && (
                                <>
                                    <img
                                        className={blogStyle.img}
                                        src={blog.image}
                                        alt={blog.name}
                                    />
                                    {blog.button && (<a href={blog.button}>Ver la Imagen</a>)}
                                </>
                            )}
                            {blog.type === 'video' && blog.video && (
                                <>
                                    <iframe
                                        className={blogStyle.iframe}
                                        src={blog.video}
                                        title={blog.name}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                    {blog.button && (<a href={blog.button}>Ver el video</a>)}
                                </>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Blog