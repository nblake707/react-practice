import React from "react";

const Nav = () => {
const categories = [
    {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    {
        name: "portraits", 
        description: "Photos of people in my life"
    },
    {
        name: "landscapes",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
];

const categorySelected = (name) => {
    console.log(`${name} clicked`);
}

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* map over array to display each category */}
          {categories.map((category) => 
    
          /*
             The onClick() attribute is expecting a callback function 
             declaration. It's important that we wrap it in a function 
             declaration rather than just calling categorySelected(category.name), 
             which would cause the function to get called whenever the component 
             renders as well.
          */
             // parenthsis used here to return a single jsx element 
          ( 
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                  {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
