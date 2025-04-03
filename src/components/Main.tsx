import { FormEvent, useState } from "react";
import { Question } from "./Question";
import { submitPrescriptionQuestionairre } from "../api";

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
  const [loading, setLoading] = useState(false);

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = Array.from(formData.entries()).map(([key, value]) => {
      return { key, value };
    });
    submitPrescriptionQuestionairre(formValues)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <main className="bg-medx-blue-lightest w-full flex-1">
      <header className="bg-medx-blue-light h-fit p-5 ">
        <h1 className="px-5 m-auto max-w-6xl">Paracetamol</h1>
      </header>
      <section className="p-5 m-auto max-w-6xl">
        <h2>
          Answer a few questions to see what treatments you're eligible for
        </h2>
        <form onSubmit={formSubmit} onChange={(e) => console.log(e)}>
          {questions.map(({ name, label }) => {
            return <Question name={name} label={label} key={name + label} />;
          })}
          <button type="submit" disabled={loading}>
            {loading ? "Loading" : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
};
