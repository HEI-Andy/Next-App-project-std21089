import { GetServerSideProps } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface ImagePageProps {
 id: number;
}

const ImagePage: React.FC<ImagePageProps> = ({ id }) => {
 const imageUrl = `https://picsum.photos/200/300?random=${id}`;

 return (
    <>
      <Header />
      <main>
        <h2>Blog-{id}</h2>
        <img src={imageUrl} alt={`Blog ${id} Image`} />
      </main>
      <Footer />
    </>
 );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
 const { id } = context.params as { id: string };
 return { props: { id: Number(id) } };
};

export default ImagePage;
