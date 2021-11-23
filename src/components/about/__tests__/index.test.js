// enables components to work properly so we can test
import React from 'react'; 
/* 
    render function - renders the component in a simulated Dom created by jest in node.js env
    cleanup function - used to remove components from the dom to prevent memory leaking, variable/data collisions between tests
    that could corrupt the results. 
*/
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements. 
import '@testing-library/jest-dom/extend-expect';
import About from '../index';

//ensures that after each test, we wont have any leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    // first test - cheking to see that the component renders
    it('renders', () => {
        render(<About />);
    });

    // second test compares snapshots (serialized version of the DOM node structure) of the DOM
    it('matches snapshot DOM node structure', () => {
        // asFragment returns a snapshot of the About component
        const { asFragment } = render(<About />);
        // test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    }) 
})





