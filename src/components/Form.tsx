import { useState, FormEvent } from "react";
import { submitPrescriptionQuestionairre } from "../api";
import { Question } from "./Question";
import { questions } from "../data";

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        alert(
          formValues.map(({ key, value }) => `${key}: ${value}`).join("\n")
        );
      });
  };

  if (success)
    return (
      <section className="max-w-6xl m-auto text-3xl">
        <p>Thank you for submitting, we'll be in touch soon</p>
      </section>
    );

  return (
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
        className="bg-medx-blue-dark rounded-lg text-white px-4 py-2 w-fit disabled:bg-gray-400 cursor-pointer disabled:cursor-progress"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};
