// element1.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'New element',
  component: Button,
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const color = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
