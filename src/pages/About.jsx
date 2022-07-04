const getAge = () => {
  const d = new Date();
  const year = d.getFullYear();
  console.log(year);
  const age = year - 1994;
  return age;
};

export function About() {
  return (
    <section className="main-container about-page page">
      <div className="about-content flex align-center">
        <div className="about-me flex">
          <img
            src="https://res.cloudinary.com/eylonf/image/upload/v1656324483/resume_pic_b9aq7j.jpg"
            alt=""
          />
          <div className="flex column">
            <h1>About Me:</h1>
            <p>
              {getAge()} years old full stack / frontend developer from
              Herzeliya, Israel. I love travling around the world, surfing and
              snowboarding, codding, and in my free time creating music with
              Cubase.
            </p>
          </div>
        </div>
        <div className="about-project flex column ">
          <h1>About The Project:</h1>
          <p>
            A responsive frontend web-app, created with React.js framework, Sass
            (SCSS) for style and javescript for implementation of filtering and
            pagination. Getting the launches data from SpaceX API and using
            Window.sessionStorage for caching it.
          </p>
        </div>
      </div>
    </section>
  );
}
