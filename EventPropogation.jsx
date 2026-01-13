import "./Ev.css";

export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        Grand Parent
        <div className="p-div" onClickCapture={handleParentClick}>
          Parent
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Button
          </button>
        </div>
      </div>
    </section>
  );
};
