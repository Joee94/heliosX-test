import { Form } from "./Form";

export const Main = () => {
  return (
    <main className="bg-medx-blue-lightest w-full flex-1">
      <header className="m-auto bg-medx-blue-light h-fit p-5 ">
        <h1 className="max-w-6xl m-auto text-3xl">Paracetamol</h1>
      </header>
      <section className="p-5">
        <h2 className="m-auto max-w-6xl text-2xl mb-4">
          Answer a few questions to see what treatments you're eligible for
        </h2>
        <Form />
      </section>
    </main>
  );
};
