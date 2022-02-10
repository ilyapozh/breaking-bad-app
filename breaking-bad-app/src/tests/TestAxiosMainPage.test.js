/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import App from '../App';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect';
// import { data } from 'autoprefixer';

afterEach(cleanup);
 
 jest.mock('axios');

 it('should equal to "Breaking bad episodes"', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId("title")).toHaveTextContent("Breaking bad episodes")
});
 
 it('should load and display the data', async () => {
   
   const { getByTestId } = render(<App />)
 
   axiosMock.get.mockResolvedValueOnce({
     data: { },
   })
 
//    fireEvent.click(getByTestId('fetch-data'))
 
  const episodesContainer = await waitForElement(() => getByTestId("episodes-container"))
 
   expect(axiosMock.get).toHaveBeenCalledTimes(2)
//    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(episodesContainer).toHaveLength(63)
 })