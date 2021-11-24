import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = () => {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "portraits",
      description: "Photos of people in my life",
    },
    {
      name: "landscapes",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>About me</a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {/* map over array to display each category */}
          {categories.map((category) => (
            /*
             The onClick() attribute is expecting a callback function 
             declaration. It's important that we wrap it in a function 
             declaration rather than just calling categorySelected(category.name), 
             which would cause the function to get called whenever the component 
             renders as well.
          */
            // parenthsis used here to return a single jsx element
            <li className="mx-1" key={category.name}>
              <span onClick={() => handleClick(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
