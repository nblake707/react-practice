import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../';


const name = 'grocery isle';
console.log("AHHHHHHH" + name);


afterEach(cleanup)

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(
        <PhotoList />); // why arent we passing props - this component accepts props
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot()
    })
})