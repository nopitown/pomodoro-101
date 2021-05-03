import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_LENGTH = ONE_MINUTE * 25;

it('renders welcome message', () => {
  render(<Timer currentTime={DEFAULT_LENGTH}/>);
  expect(screen.getByText('25:00')).toBeInTheDocument();
});