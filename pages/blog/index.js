import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import HeadPage from '../../components/head';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/footer';

export default function Home({ posts }) {
    return (
        <>
        <HeadPage icon='' 
                 href='https://carvuk.com/blog' 
                 title='Carvuk - Blog' 
                 description='El mejor blog sobre autos, tecnología, cultura y otras hierbas.' 
                 image='https://carvuk.com/image-preview.png'/>
        <Navbar ctaBool={false} />

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-indigo-600 sm:text-4xl">Blog Carvuk</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Noticias sobre autos, cultura, tecnología y otros. Los mejores artículos contados por personas como tú.
            </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map(({ slug, frontmatter }) => (
                <div key={slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={`/${frontmatter.socialImage}`} alt={frontmatter.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        {frontmatter.categoryName}
                    </p>
                    <Link href={`/blog/${slug}`}>
                        <a className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{frontmatter.title}</p>
                            <p className="mt-3 text-base text-gray-500">{frontmatter.description}</p>
                        </a>
                    </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <span className="sr-only">{frontmatter.authorName}</span>
                        <img className="h-10 w-10 rounded-full" src={frontmatter.authorImage} alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                        {frontmatter.authorName}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{frontmatter.readingTime} minutos</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        <FooterSection/>
        </>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          slug,
          frontmatter,
        };
    });
    return {
        props: {
          posts,
        },
    };
  }