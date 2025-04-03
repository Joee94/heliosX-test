export const submitPrescriptionQuestionairre = async (
  formData: {
    key: string;
    value: FormDataEntryValue;
  }[]
) => {
  const resp = await fetch("/", {
    body: JSON.stringify(formData),
    method: "POST",
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!resp.ok) throw new Error(resp.statusText);
  return resp;
};
