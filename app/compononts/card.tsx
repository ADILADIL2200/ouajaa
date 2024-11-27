// components/CourseCard.js
export default function CourseCard() {
    const courses = [
      {
        id: 1,
        title: 'JavaScript for Beginners',
        description: 'Learn the fundamentals of JavaScript, the most popular programming language for web development.',
      },
      {
        id: 2,
        title: 'Python Programming',
        description: 'Master Python, a versatile language for web development, data science, and automation.',
      },
      {
        id: 3,
        title: 'C++ Programming',
        description: 'Explore the world of C++, a powerful language used in game development, systems programming, and more.',
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
            >
              Start Learning →
            </a>
          </div>
        ))}
      </div>
    );
  }
  