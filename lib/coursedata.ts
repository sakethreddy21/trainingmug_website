
 export  const courseData = [
      {
        title: "Mastering Java Programming",
        description: "Master Java Programming from scratch.",
        imagePath: "/course1.jpg",
        buttonText: "Learn More",
        quizzes:7,
        Chapters:11,
        excercises:5,
        capstone_projects:2,
        instructor_profilePictureUrl: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic2-7ab3cc20.png",
        instructors_name: "John Doe",
        onClick: () => handleCourseClick("AI for Beginners"),
      },
      {
        title: "Programming Fundamentals",
        description: "Helps you master Programming Fundamentals in Java.",
        imagePath:"/course2.jpg",
        buttonText: "Learn More",
        quizzes:7,
        Chapters:11,
        excercises:5,
        capstone_projects:2,
        instructor_profilePictureUrl: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic2-7ab3cc20.png",
        instructors_name: "John Doe",
        onClick: () => handleCourseClick("Web Development Bootcamp"),
      },
      {
        title: "Mastering Object Oriented Programming",
        description: "Mastering Object Oriented Programming in Java.",
        imagePath: "/course3.jpg",
        buttonText: "Learn More",
        quizzes:7,
        Chapters:11,
        excercises:5,
        capstone_projects:2,
        instructor_profilePictureUrl: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic2-7ab3cc20.png",
        instructors_name: "John Doe",
        onClick: () => handleCourseClick("Data Science Masterclass"),
      },
    ];

    function handleCourseClick(courseName: string) {
        console.log(`You clicked on ${courseName}`);
        // Add your custom logic here, e.g., navigate to a different page, open a modal, etc.
      }