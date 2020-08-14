import React, { useState, useRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HoverShadowBox from "../HoverShadowBox"
import DescriptionText from "../DescriptionText"
import {Text} from "rebass"

import styles from "./Faq.module.css";

const FAQHeader = props => (
    <Text
        fontSize={[20, 30]}
        fontWeight="bold"
        fontFamily="Heebo"
        sx={{ marginBottom: 10 }}
    >
        {props.children}
    </Text>
)

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState(styles.accordion__icon);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? styles.accordion__icon : styles.accordion__icon__rotate
    );
  }

  return (
    <HoverShadowBox>
        <div className={styles.accordion__section}>
            <button className={styles.accordion} onClick={toggleAccordion}>
                <FAQHeader>{props.title}</FAQHeader>
                <FontAwesomeIcon icon={faChevronDown} className={setRotate}/>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className={styles.accordion__content}
            >
                <DescriptionText>
                    {props.content}
                </DescriptionText>
            </div>
        </div>
    </HoverShadowBox>
  );
}

export default Accordion;
