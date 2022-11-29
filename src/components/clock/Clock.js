import Display from "./display/Display";
import "./Clock.css";
import React, { useState } from "react";
import * as faIcons from "react-icons/fa";

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
];

const getString = (number) => {
    let arr = "";
    if (number < 10) arr = "0";
    arr = arr + number;
    return arr;
};

const getTime = () => {
    let calender = new Date();
    let time = "it's ";
    time = time + (calender.getHours() % 12 || 12) + " ";
    if (calender.getMinutes() == 0) {
        time = time + " O'clock. ";
    } else {
        time = time + calender.getMinutes() + ". ";
    }
    time = time + "Today is " + weekDays[calender.getDay()] + " and; ";
    time = time + "date is " + calender.toLocaleDateString();
    return time;
};

const speak = () => {
    let text = getTime();
    if ("speechSynthesis" in window) {
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.rate = 0.9;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Not Suppoted on Your Browser ...");
    }
};

function Clock() {
    let calender = new Date();
    let minutes = getString(calender.getMinutes());
    let hours = getString(calender.getHours() % 12 || 12);

    const [s0, setS0] = useState(0);
    const [s1, setS1] = useState(0);
    const [m0, setM0] = useState(minutes[0]);
    const [m1, setM1] = useState(minutes[1]);
    const [h0, setH0] = useState(hours[0]);
    const [h1, setH1] = useState(hours[1]);
    const [ampm, setAmPm] = useState(calender.getHours() < 12 ? "AM" : "PM");
    const [date, setDate] = useState(calender.toDateString());

    let time = setInterval(() => {
        let calender = new Date();
        let seconds = getString(calender.getSeconds());
        setS0(seconds[0]);
        setS1(seconds[1]);
        if (seconds == "00") {
            let minutes = getString(calender.getMinutes());
            setM0(minutes[0]);
            setM1(minutes[1]);
            if (minutes == "00") {
                let hours = getString(calender.getHours() % 12 || 12);
                setH0(hours[0]);
                setH1(hours[1]);
                if (hours == "12") {
                    setDate(calender.toDateString());
                    setAmPm(calender.getHours() < 12 ? "AM" : "PM");
                }
            }
        }
    }, 1000);

    return (
        <>
            <div className="clock">
                <div className="time">
                    <Display number={h0} />
                    <Display number={h1} />
                    <div className="colon">:</div>
                    <Display number={m0} />
                    <Display number={m1} />
                    <div className="colon">:</div>
                    <Display number={s0} />
                    <Display number={s1} />
                </div>
                <div className="buttons">
                    <div className="speak-btn" onClick={speak}>
                        <faIcons.FaVolumeUp style={{ cursor: "pointer" }} />
                    </div>
                    <div className="ampm">{ampm}</div>
                </div>
                <div className="date">{date}</div>
            </div>
        </>
    );
}

export default Clock;
