import "./css/EmailSent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export default function EmailSent() {
  return (
    <div className="email-sent-container">
      <div className="email-sent-container-card">
        <h1 className="email-sent-title">SUCCESS</h1>
        <hr id="hr-email-sent" />
        <FontAwesomeIcon
          icon="circle-check"
          color="#37D851"
          size="7x"
          className="absolute left-[150px] bottom-[240px]"
        />
        <p className="absolute bottom-[12rem] right-[100px] text-[rgb(104,104,104)]">
          Seccssfuly sent the email
        </p>

        <hr id="hr-email-sent2" className="absolute bottom-36" />
        <Button
          variant="primary"
          href="/"
          className="absolute bottom-[3.5rem] drop-shadow-lg left-[9rem] bg-[rgb(11,94,215)] w-[120px] h-[50px] font-[400] rounded-[5px]"
        >
          Okay
        </Button>
      </div>
    </div>
  );
}
