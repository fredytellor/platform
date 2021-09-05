import React, { useState } from "react";
import EventsCard from "../Atoms/EventsCard";
import EventsSlideButton from "../Atoms/EventsSlideButton";
import EventsTitleCard from "./EventsTitleCard";
import EventsSubjectCard from "../Atoms/EventsSubjectCard";

const EventSlider = () => {
    const slidesData = [
        { firstLine: "Youth Talent &", secondLine: "Education", date: "May, 20", subject: "SCIENCE" },
        { firstLine: "How we got", secondLine: "Zero", date: "Oct, 14", subject: "MATHS" },
        { firstLine: "Give Chances", secondLine: "to Others", date: "Sept, 6", subject: "Spiritual" }
    ];
    let [index, setIndex] = useState(0);

    const handleSlide = (type) => {
        if (type === "next") {
            if (index < (slidesData.length - 1)) {
                index += 1;
                setIndex(index);
            } else {
                index = 0;
                setIndex(index);
            }
        } else {
            if (index > 0) {
                index -= 1;
                setIndex(index);
            } else {
                index = slidesData.length - 1;
                setIndex(index);
            }
        }
    }

    return (
        <EventsCard index={index}>
            {/* <EventsCard> */}
            <EventsSlideButton isLeft={true} handleSlide={() => handleSlide("previus")} />
            <EventsSlideButton isLeft={false} handleSlide={() => handleSlide("next")} />
            <EventsTitleCard firstLine={slidesData[index].firstLine} secondLine={slidesData[index].secondLine} />
            <EventsTitleCard firstLine={slidesData[index].date} isTime={true} />
            <EventsSubjectCard subject={slidesData[index].subject} />
        </EventsCard>
    );
};

export default EventSlider;