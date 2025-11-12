import React from "react";
import Link from "next/link";
import books from "@/data/books.json";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Recommended Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {
          books.map((book: Book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
