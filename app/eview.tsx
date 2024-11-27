// components/WhatTheySay.js
import { FaUserAlt } from 'react-icons/fa';

export default function WhatTheySay() {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'This platform has transformed my coding skills! The courses are clear, comprehensive, and fun.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'I learned so much in a short period. Highly recommend it to anyone looking to get into web development.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Alex Johnson',
      review: 'The Python course helped me land my first job as a software developer. Best investment I’ve made!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emily Davis',
      review: 'Great platform, the lessons are very detailed and easy to follow. I’ve made huge progress.',
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What They Say About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-500 text-white">
                <FaUserAlt size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                <div className="flex items-center">
                  {/* Render stars based on rating */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.8 3.04 1.1-6.42L1 7.57l6.43-.56L10 1l2.57 5.43 6.43.56-4.3 4.05 1.1 6.42L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
