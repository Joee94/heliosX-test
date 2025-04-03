interface Props {
  label: string;
  name: string;
  required?: boolean;
}

export const Question = ({ label, name, required = true }: Props) => {
  return (
    <fieldset>
      <legend>{label}</legend>

      <input
        type="radio"
        name={name}
        id={`${name}-yes`}
        value="yes"
        required={required}
        className="mr-1"
      />
      <label htmlFor={`${name}-yes`} className="mr-2">
        Yes
      </label>

      <input
        type="radio"
        name={name}
        id={`${name}-no`}
        value="no"
        required={required}
        className="mr-1"
      />
      <label htmlFor={`${name}-no`}>No</label>
    </fieldset>
  );
};
