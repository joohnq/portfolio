import {
  StacksStyle,
  StackCard,
  StackCard_1,
  StackCard_2,
  StackCard_3,
  StackCardHeader,
  StackCarHeader_number,
  StackCardBody,
  StackCardBody_title,
} from "./Stack.css";
import { poppinsBold, dm_sansBold } from "../../styles/fonts";
import StatusComponent from "../Status/StatusComponent";

export default function StacksComponent() {
  return (
    <section className={`${StacksStyle}`}>
      <div className={`${StackCard} ${StackCard_1}`}>
        <div>
          <div className={`${StackCardHeader}`}>
            <h3 className={`${StackCarHeader_number} ${dm_sansBold.className}`}>
              01
            </h3>
            <StatusComponent status={[true, true, false, false, false]} />
          </div>
          <div className={`${StackCardBody}`}>
            <h4 className={`${StackCardBody_title} ${poppinsBold.className}`}>
              DESIGN - FIGMA
            </h4>
          </div>
        </div>
      </div>
      <div className={`${StackCard} ${StackCard_2}`}>
        <div>
          <div className={`${StackCardHeader}`}>
            <h3 className={`${StackCarHeader_number} ${dm_sansBold.className}`}>
              02
            </h3>
            <StatusComponent status={[true, true, true, false, false]} />
          </div>
          <div className={`${StackCardBody}`}>
            <h4 className={`${StackCardBody_title} ${poppinsBold.className}`}>
              FRONT-END
            </h4>
          </div>
        </div>
      </div>
      <div className={`${StackCard} ${StackCard_3}`}>
        <div>
          <div className={`${StackCardHeader}`}>
            <h3 className={`${StackCarHeader_number} ${dm_sansBold.className}`}>
              03
            </h3>
            <StatusComponent status={[true, true, false, false, false]} />
          </div>
          <div className={`${StackCardBody}`}>
            <h4 className={`${StackCardBody_title} ${poppinsBold.className}`}>
              BACK-END
            </h4>
          </div>
        </div>
      </div>
      <div className={`${StackCard}`}>
        <div>
          <div className={`${StackCardHeader}`}>
            <h3 className={`${StackCarHeader_number} ${dm_sansBold.className}`}>
              04
            </h3>
            <StatusComponent status={[true, true, false, false, false]} />
          </div>
          <div className={`${StackCardBody}`}>
            <h4 className={`${StackCardBody_title} ${poppinsBold.className}`}>
              MOBILE
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
