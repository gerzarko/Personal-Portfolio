import type { JSXElement } from "solid-js";

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 class="big-heading">German Zarkovich.</h2>;
  const three = <h3 class="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently working at DataGrove
        <a href="https://www.datagrove.com/" target="_blank" rel="noreferrer">
          DataGrove
        </a>
        .
      </p>
    </>
  );

  const items: JSXElement[] = [one, two, three, four];

  const mappedElements: JSXElement = items.map((item, i) => <div>{item}</div>);

  return (
    <div>
      {mappedElements}
      <h2>adios</h2>
    </div>
  );
};

export default Hero;
