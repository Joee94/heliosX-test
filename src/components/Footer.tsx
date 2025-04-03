export const Footer = () => {
  return (
    <footer className="bg-medx-blue-dark w-full h-fit p-2 flex flex-col gap-4 justify-around md:flex-row  text-white">
      <section>
        <ul>
          <li>Paracetamol</li>
          <li>Ibuprofen</li>
          <li>Amoxicillin</li>
          <li>Cetirizine</li>
          <li>Omeprazole</li>
        </ul>
      </section>
      <section>
        <ul className="underline">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Shipping & Returns</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Prescription Services</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
