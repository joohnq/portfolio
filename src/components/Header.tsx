import { Header, Logo, HeaderList, HeaderListItem } from "./Header.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["devanagari"],
});

export default function HeaderComponent() {
  return (
    <header className={Header}>
      <h1 className={poppins.className}>JOOHNQ</h1>
      <nav>
        <ul className={HeaderList}>
          <li className={poppins.className}>Sobre</li>
          <li className={HeaderListItem}>Habilidades</li>
          <li className={HeaderListItem}>Experiência</li>
          <li className={HeaderListItem}>Projetos</li>
          <li className={HeaderListItem}>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
