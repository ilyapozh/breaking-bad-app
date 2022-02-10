/**
 * @jest-environment jsdom
 */
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// import '@testing-library/jest-dom';
// import '@jest-environment/js-dom';
	
// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { document } = (new JSDOM(`...`)).window;
// /**
//  * Test What user would see
//  */

//  test('use jsdom in this test file', () => {
//     const element = document.createElement('div');
//     expect(element).not.toBeNull();
//   });

// test('renders the title correctly', () => {
//     const element = document.createElement('div');
//     console.log(document)
//   const { getByText, getByLabelText } = render(<App />);
//   const mainTitle = getByText(/Breaking bad episodes/i);
//   expect(mainTitle).toBeInTheDocument();
//   expect(ageLabel).toBeInTheDocument();
//   const input = getByLabelText(/Age:/i);
//   expect(input).toHaveAttribute('type', 'number')
// });

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
});
