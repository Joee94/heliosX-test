interface Props {
  label: string;
  name: string;
}

export const Question = ({ label, name }: Props) => {
  return (
    <fieldset>
      <legend>{label}</legend>

      <input type="radio" name={name} id={`${name}-yes`} value="yes" />
      <label htmlFor={`${name}-yes`}>Yes</label>

      <input type="radio" name={name} id={`${name}-no`} value="no" />
      <label htmlFor={`${name}-no`}>No</label>
    </fieldset>
  );
};
