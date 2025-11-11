import React from "react";
import books from "@/data/books.json";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  const book = books.find((b) => b._id === params.bookId);

  if (!book) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/*Text Section */}
      <div className="flex flex-col justify-center text-left">
        <h4 className="text-sm font-bold text-orange-500 mb-4 tracking-wider"></h4>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
          {book.title}
        </h1>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          by {book.author.name}
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {book.description}
        </p>

        <a
          href={book.file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-fit px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all"
        >
          Read Book →
        </a>
      </div>

      {/*Book Image Section */}
      <div className="flex justify-center lg:justify-end items-start">
        <div className="relative group">
          {/* Shadow/Depth Effect */}
          <div className="absolute top-0 left-2 w-full h-full bg-gray-200 rounded-md transform rotate-y-2 skew-y-1 scale-x-[0.98] blur-sm"></div>

          <img
            src={book.coverImage}
            alt={book.title}
            width={250}
            height={360}
            className="w-full h-80 object-cover object-center rounded-md shadow-md "
            style={{
              aspectRatio: "3/4",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />

          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-400 to-gray-200 rounded-l-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
