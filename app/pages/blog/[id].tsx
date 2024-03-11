import Link from 'next/link';
import { GetServerSideProps } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BlogList from '@/app/components/BlogList';

interface BlogProps {
 id: number;
}

const Blog: React.FC<BlogProps> = ({ id }) => {
 return (
    <>
      <Header />
      <main>
        <h2>Blog-{id}</h2>
        <Link href={`/blog/${id}/image`}>View Image</Link>
        <BlogList />
      </main>
      <Footer />
    </>
 );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
 const { id } = context.params as { id: string };
 return { props: { id: Number(id) } };
};

export default Blog;
