import React, {Fragment} from 'react';
import {FormHeader} from './FormHeader';
import {Input} from './Input';
import {Button} from './Button';
import {useNotifications} from '../../Notifications/useNotifications';

type Inputs = {
  type: string;
  label: string;
  placeholder: string;
};

type Props = {
  title: string;
  caption: string;
  inputs: Array<Inputs>;
  inputsData: any;
  handleInputChange: Function;
  handleSubmit: Function;
  buttonAriaLabel: string;
  small?: JSX.Element;
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
  const {errorMessage} = useNotifications();

  return (
    <Fragment>
      {errorMessage && <p className="text-error">{errorMessage}</p>}
      <FormHeader
        title={title}
        caption={caption}
      />
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        {inputs.map((input, idx: number) => (
          <Input
            key={idx}
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            value={inputsData[input.label]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
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
