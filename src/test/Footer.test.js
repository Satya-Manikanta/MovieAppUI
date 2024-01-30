import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('Footer renders with correct content', () => {
  render(<Footer />);
  
  // Check if the copyright text is present
  expect(screen.getByText(/copyright © 2023/i)).toBeInTheDocument();

  // Check if social media icons are present
  expect(screen.getByTitle('Facebook')).toBeInTheDocument();
  expect(screen.getByTitle('YouTube')).toBeInTheDocument();
  expect(screen.getByTitle('LinkedIn')).toBeInTheDocument();
  expect(screen.getByTitle('Twitter')).toBeInTheDocument();
});
