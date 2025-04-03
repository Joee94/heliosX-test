import { FormEvent } from "react";
import { Question } from "./Question";

const questions = [
  {
    name: "painOrFever",
    label: "Are you experiencing pain or fever that requires treatment?",
  },
  {
    name: "allergy",
    label: "Do you have any allergies to paracetamol or similar painkillers?",
  },
  {
    name: "otherMedications",
    label:
      "Are you currently taking any other medications that contain paracetamol?",
  },
  {
    name: "liverOrKidneyCondition",
    label: "Do you have any liver or kidney conditions?",
  },
  {
    name: "sideEffects",
    label: "Have you ever experienced side effects from taking paracetamol?",
  },
];

export const Main = () => {
  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Display the key/value pairs
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };
  return (
    <main className="bg-medx-blue-lightest w-full flex-1">
      <form onSubmit={formSubmit}>
        {questions.map(({ name, label }) => {
          return <Question name={name} label={label} key={name + label} />;
        })}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
