import React from "react";
import Link from "next/link";
import books from "@/data/books.json";

const BookList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Recommended Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Book) => (
          <div
            key={book._id}
            className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-bounce hover:-translate-y-2 hover:scale-[1.02] p-4"
          >
            <div className="relative w-full sm:w-32 h-44 sm:h-48 mx-auto sm:mx-0 shrink-0 book-cover">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover rounded-md border border-gray-100 shadow-inner"
                style={{
                  boxShadow:
                    "inset -5px 0 8px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <div className="flex flex-col sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left justify-start">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight mb-0.5">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 leading-tight mb-0">
                by <span className="font-medium">{book.author.name}</span>
              </p>
              <p className="text-xs text-gray-400 mb-2">{book.genre}</p>

              {/*This is the Button*/}
              <Link
                href={`/book/${book._id}`}
                className="text-white bg-orange-400 hover:bg-orange-500 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium w-fit self-center sm:self-start transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
