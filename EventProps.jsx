export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey,${user}`);
  };
  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log(`Hey User,Welcome`);
    props.onClick;
  };
  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <br />
      <br />
      <button onMouseEnter={onMouseEnter}>Hover me</button>
      <br />
      <br />
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
