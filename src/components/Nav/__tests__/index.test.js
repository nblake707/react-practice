import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

const categories = [
    {name: 'portraits', description: 'Portraits of people in my life' }
]
//mock props to use inside of the nav component
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// cleans up leftover memory data
afterEach(cleanup);

describe('About component', () => {
    // test one
    it('renders', () => {
        //below has been altered to include mocks
        render(<Nav
              categories={categories}
              setCurrentCategory={mockSetCurrentCategory}
              currentCategory={mockCurrentCategory}
              contactSelected={mockContactSelected}
              setContactSelected={mockSetContactSelected}
            />);
    });

    // test two 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        expect(asFragment()).toMatchSnapshot();
    });
})

// check if emoji is visible on the page
describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // arrange - the emoji is located inside of the header element - so we will need to recreate this
         const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        // act 
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    }); 
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        //Arrange - check that the text content is being inserted into the <a> tags
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        //Assert 
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
