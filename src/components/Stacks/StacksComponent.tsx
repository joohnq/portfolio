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
  StackCardFooter,
  StackCardFooter_desc,
} from "./Stack.css";
import { Container } from "../../styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold, poppinsRegular, dm_sansBold } from "../../styles/fonts";
import StatusComponent from "../Status/StatusComponent";
import LightConicComponent from "../Lights/LightsComponents";

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
              Design - Figma
            </h4>
          </div>
          <div className={`${StackCardFooter}`}>
            <p
              className={`${StackCardFooter_desc} ${poppinsRegular.className}`}
            >
              Description
            </p>
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
              Front-end
            </h4>
          </div>
          <div className={`${StackCardFooter}`}>
            <p
              className={`${StackCardFooter_desc} ${poppinsRegular.className}`}
            >
              Description
            </p>
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
              Back-end
            </h4>
          </div>
          <div className={`${StackCardFooter}`}>
            <p
              className={`${StackCardFooter_desc} ${poppinsRegular.className}`}
            >
              Description
            </p>
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
              Mobile
            </h4>
          </div>
          <div className={`${StackCardFooter}`}>
            <p
              className={`${StackCardFooter_desc} ${poppinsRegular.className}`}
            >
              Description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
