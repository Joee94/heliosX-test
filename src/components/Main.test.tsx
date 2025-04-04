import { render, screen, waitFor } from "@testing-library/react";
import { Main } from "./Main";
import userEvent from "@testing-library/user-event";
import { questions } from "../data";

describe("Main", () => {
  it("should submit when all questions answered", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<Main />);
    const user = userEvent.setup();
    const yesRadios = await screen.findAllByLabelText("Yes");
    expect(screen.getByText(questions[0].label)).toBeInTheDocument();
    for (const yes of yesRadios) {
      await user.click(yes);
    }
    await user.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        `painOrFever: yes
allergy: yes
otherMedications: yes
liverOrKidneyCondition: yes
sideEffects: yes`
      );
    });

    expect(
      await screen.findByText(
        "Thank you for submitting, we'll be in touch soon."
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(questions[0].label)).not.toBeInTheDocument();
  });
});
