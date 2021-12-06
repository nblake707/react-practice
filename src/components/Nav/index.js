import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

   useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);  
    
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
            {/* hides contact component when about it clicked */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
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
            <li 
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
              }`} 
              key={category.name}
            >
              <span 
                onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                }}
                >
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
