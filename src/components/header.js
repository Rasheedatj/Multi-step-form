export default function Header({ heading, subHeading }) {
  return (
    <header>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </header>
  );
}
