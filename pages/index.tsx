import Link from 'next/link';

const HomePage = (): JSX.Element => {
  return (
    <div className="text-center text-gray-700 block">
      <div className="font-extrabold text-4xl">Hi there 🖐!</div>
      {[
        { path: 'path1', p: 'a custom page to illustrate navigation' },
        { path: 'path2', p: 'another one!' },
      ].map((e) => (
        <Link key={e.path} href={`/custom/[slug]`} as={`/custom/${e.path}`}>
          <a className="block underline">
            <p>{e.p}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
