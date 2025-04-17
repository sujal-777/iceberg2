import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string;
  image1?: string;
  title: string;
  short_description: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <div className="border rounded-lg p-4 shadow-md transform transition duration-300 hover:scale-105 cursor-pointer flex flex-col h-full">
        {/* Image Container with Fixed Height */}
        {blog.image1 && (
          <div className="w-full flex justify-center h-[270px] overflow-hidden">
            <Image
              src={blog.image1}
              width={400}
              height={250}
              alt={blog.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}
        
        {/* Blog Content */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
          <p className="text-gray-600 mt-1 flex-grow">{blog.short_description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
