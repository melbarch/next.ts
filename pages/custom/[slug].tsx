import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

const contentPath = {
  path1: "content of dynamic route of 'path1'",
  path2: "content of dynamic route of 'path2'",
};

const PostTemplate = ({
  slug,
  content,
}: {
  slug: string;
  content: string;
}): JSX.Element => {
  return (
    <div className="text-center text-gray-700">
      <span className="font-extrabold text-4xl">Page path : {slug}</span>
      <p className="font-semibold text-3xl">{content}</p>
    </div>
  );
};

// Define all the possible slug paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(contentPath).map((path) => '/custom/' + path);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

// define the content generation for each generated path
export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: ParsedUrlQuery | undefined;
}) => {
  let postData;
  switch (params?.slug as string) {
    case 'path1':
      postData = contentPath.path1;
      break;
    case 'path2':
      postData = contentPath.path2;
      break;
    default:
      console.log('404 page will take it from here');
  }

  return { props: { slug: `${params?.slug}`, content: postData } };
};

export default PostTemplate;
