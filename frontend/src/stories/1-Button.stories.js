import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, table } from '@storybook/addon-knobs';


//ONGLET BUTTON
export default {
  title: 'Button',
};

export const texte = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);












// ONGLET 1ST STORY
const stories = storiesOf("1st story", module);
stories.addDecorator(withKnobs); 


// 1st element
stories.add("button", () => (
  <button disabled={false}>{text("Label", "Je suis un bouton")}</button> //change the value dynamically 
)); // can't change the button's state

//2nd element
stories.add("button 2", () => (
  <button disabled={boolean("disabled", false)}>
    {text("Label", "Je suis un bouton désactivable")}</button> //change the value dynamically 
)); // can change the button's state

//3rd element in the 1st story
stories.add("variable dynamique", () => {
  var name = text("name", "__");
  var age = number("age", "__"); 
  var content = `Je m'appelle ${name} et j'ai ${age} ans.`;

  return <div>{content}</div>;
});

//couleur
stories.add("couleur", () => {

  const name = 'Color';
  const defaultValue = "blue";
  const groudpId = 'id';

  const value =color(name, defaultValue, groudpId);

  return value; 
});



