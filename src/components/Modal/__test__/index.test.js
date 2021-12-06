import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../../Modal';

// need to mock props (toggle function) passed to the modal component. 
const mockToggleModal = jest.fn(); 

// set up to mimic currentPhoto prop
const currentPhoto = {
    name: 'park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal Component', () => {
    it('renders', () => {
        render(
            <Modal
              currentPhoto={currentPhoto}
              onClose={mockToggleModal}
            />
        )
    });

    it("renders", () => {
      const { asFragment } = render(
        <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(
      <Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />
    )
    fireEvent.click(getByText('close this modal'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  })
})



