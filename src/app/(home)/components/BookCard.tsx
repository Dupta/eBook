import React from "react";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md hover:shadow-xl 
                 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] p-4"
    >
      {/*Book Cover */}
      <div className="relative w-full sm:w-32 h-44 sm:h-48 mx-auto sm:mx-0 shrink-0">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover rounded-md border border-gray-100 shadow-inner"
          style={{
            aspectRatio: "3/4",
            boxShadow:
              "inset -5px 0 8px rgba(0,0,0,0.18), 0 3px 8px rgba(0,0,0,0.1)",
          }}
        />
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-400 to-gray-200 rounded-l-md"></div>
      </div>

      {/*Book Details */}
      <div className="flex flex-col sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left justify-start">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight mb-0.5">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 leading-tight mb-0">
          by <span className="font-medium">{book.author.name}</span>
        </p>
        <p className="text-xs text-gray-400 mb-2">{book.genre}</p>

        {/*Read More Button */}
        <Link
          href={`/book/${book._id}`}
          className="text-white bg-orange-400 hover:bg-orange-500 px-3 py-1.5 rounded-md 
                     text-xs sm:text-sm font-medium w-fit self-center sm:self-start transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
