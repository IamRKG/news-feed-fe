import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have remote text', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(new RegExp('Remote', 'gi')).length > 0).toBeTruthy();
  });
});
