import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home= () => {
 const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
 ];

 return (
    <>
      <Header />
        <h2>Home</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
        <Footer />
    </>
 );
};

export default Home;
