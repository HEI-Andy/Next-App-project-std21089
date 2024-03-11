import Link from 'next/link';
import { Box } from '@mui/material';
import styled  from '@emotion/styled';

interface Blog {
 id: number;
 title: string;
}

const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogList= () => {
 const blogs: Blog[] = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
 ];

 return (
    <CenteredBox>
    <h3>Blogs</h3>
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  </CenteredBox>
 );
};

export default BlogList;
