import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="text-center text-gray-700 block">
      <div className="font-extrabold text-4xl">
        Hi there 🖐!
      </div>
      <Link href='custom/path1'>
        <a className="block">
          a custom page
        </a>
      </Link>
      <Link href='custom/path2'>
        <a className="block">
          another custom page
        </a>
      </Link>
    </div>
  );
}

export default HomePage;
