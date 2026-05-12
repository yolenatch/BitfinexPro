// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BitfinexPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BitfinexPro/i);
    expect(titleElement).toBeInTheDocument();
});
