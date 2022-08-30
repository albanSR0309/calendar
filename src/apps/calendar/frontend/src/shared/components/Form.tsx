import React, {Fragment} from 'react';
import {FormHeader} from "./FormHeader";
import {Input} from "./Input";
import {Button} from "./Button";

type Props = {
  title: string;
  caption: string;
  inputs: Array<any>;
  inputsData: any;
  handleInputChange: any;
  handleSubmit: any;
  buttonAriaLabel: string;
  small?: any;
};

export const Form = ({
                       title,
                       caption,
                       inputs,
                       inputsData,
                       handleInputChange,
                       handleSubmit,
                       buttonAriaLabel,
                       small
                     }: Props): JSX.Element => {

  return (
    <Fragment>
      <FormHeader
        title={title}
        caption={caption}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputs.map(input => (
          <Input
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            value={inputsData[input.label]}
            onChange={(e: InputEvent) => handleInputChange(e)}
          />
        ))}
        <Button
          type="submit"
          styles="button-primary"
          ariaLabel={buttonAriaLabel}
        />
      </form>
      {small}
    </Fragment>
  );
};
