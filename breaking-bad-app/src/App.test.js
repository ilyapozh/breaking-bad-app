// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// import App from "./App";
const {fetchEpisodes} = require('./App');

it("Checks fetch episodes for return Promise", () => {
    expect(fetchEpisodes).toBe(Promise)
})