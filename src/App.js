import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/Nav';
import Gallery from './components/Gallery/index';
import ContactForm from './components/contact';

function App() {

  // lifted up the state from the nav component - this allows us to pass this info as props to the nav component 
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits', 
      description: 'Portraits of people in my life'
    },
    {
      name: 'food',
      description: 'Delicious delicacies'
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
          <ContactForm />
          <Gallery currentCategory={currentCategory} />
          <About />
      </main>
    </div>
  );
}

export default App;
