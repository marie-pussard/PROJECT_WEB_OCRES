import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';



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

export const primary = () => (
  <Button id="input" background="#65C7F0" onClick={action('clicked')}>change</Button>);
  








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

/*
//3rd element out the 1st story
export const asDynamicVariables = () => {
  const name = text('Name', 'x');
  const age = number('Age', 0);
  const content = `I am ${name} and I'm ${age} years old.`;
 
  return <div>{content}</div>;
};*/
