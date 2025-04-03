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
      })
      .finally(() => {
        alert(
          formValues.map(({ key, value }) => `${key}: ${value}`).join("\n")
        );
      });
  };

  return (
    <main className="bg-medx-blue-lightest w-full flex-1">
      <header className="m-auto bg-medx-blue-light h-fit p-5 ">
        <h1 className="max-w-6xl m-auto text-3xl">Paracetamol</h1>
      </header>
      <section className="p-5">
        <h2 className="m-auto max-w-6xl text-2xl mb-4">
          Answer a few questions to see what treatments you're eligible for
        </h2>
        <form
          onSubmit={formSubmit}
          className="m-auto max-w-6xl flex flex-col gap-3 "
        >
          {questions.map(({ name, label }) => {
            return <Question name={name} label={label} key={name + label} />;
          })}
          <button
            type="submit"
            disabled={loading}
            className="bg-medx-blue-dark rounded-lg text-white px-4 py-2 w-fit disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
};
