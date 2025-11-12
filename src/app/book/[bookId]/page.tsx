import React from "react";
import Image from "next/image";
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
    <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col lg:flex-row items-stretch gap-10">
      {/*Book Text Section */}
      <div className="flex flex-col justify-center text-left flex-1 bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-xs font-bold text-orange-500 mb-3 tracking-widest uppercase">
            About the Book
        </h4>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          {book.title}
        </h1>
        <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-3 italic">
          by {book.author.name}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
          {book.description}
        </p>

        <a
          href={book.file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-fit px-5 py-2 rounded-md bg-orange-500 text-white text-xs sm:text-sm font-medium "
        >
          Read Book →
        </a>
      </div>

      {/*Book Image Section */}
      <div className="flex justify-center items-center flex-1">
        <div className="relative h-full w-[70%] max-w-[320px] min-h-[400px] flex items-center justify-center">
          {/* Shadow/Depth Effect */}
          <div className="absolute top-0 left-2 w-full h-full bg-gray-200 rounded-md blur-sm"></div>

          {/* Book Image */}
          <img
            src={book.coverImage}
            alt={book.title}
            width={320}
            height={450}
            className="rounded-md border object-cover object-center shadow-xl "
            style={{
              aspectRatio: "3/4",
              height: "100%",
              width: "auto",
              boxShadow:
                "5px 5px 15px rgba(0,0,0,0.25), inset 0 0 20px rgba(0,0,0,0.1)",
            }}
          />

          {/* Spine / Side Edge */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-400 to-gray-200 rounded-l-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
