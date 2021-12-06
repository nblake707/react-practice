import React, { useEffect } from 'react';
import Contact from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(
        <Contact />
        )
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <Contact />
        )
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('contact heading is visable', () => {
    it('inserts text in h1', () => {
        const { getByTestId } = render (
            <Contact />
        )
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});

describe('submit button', () => {
    it('button has submit text', () => {
        const { getByTestId } = render (
            <Contact />
        )
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})