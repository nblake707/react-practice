import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

// cleans up leftover memory data
afterEach(cleanup);

describe('About component', () => {
    // test one
    it('renders', () => {
        render(<Nav />);
    });

    // test two 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
})

// check if emoji is visible on the page
describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // arrange - the emoji is located inside of the header element - so we will need to recreate this
         const { getByLabelText } = render(<Nav />);
        // act 
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    }); 
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        //Arrange - check that the text content is being inserted into the <a> tags
        const { getByTestId } = render(<Nav />);
        //Assert 
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
