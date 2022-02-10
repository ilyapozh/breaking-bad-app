/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
// jest.mock('fetch')

afterEach(cleanup);

  it('should equal to "Breaking bad episodes"', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId("title")).toHaveTextContent("Breaking bad episodes")
   });
