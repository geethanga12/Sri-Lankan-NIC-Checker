import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import idcardHand from "../assets/idcardhand.png";
import InputSet from "../common-components/InputSet";
import slNic from "sl-nic";
import wrong from "../assets/wrong.png"

export default function IdCheckerPage() {

  const navigate = useNavigate();

  function handleBackPage() {
    navigate("/")
  }

  const [nicNumber, setNicNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  function handleNicNumber(event) {
    setNicNumber(event.target.value)
  }

  function handleSubmit() {
    const result = slNic(nicNumber?.trim());
    console.log("NIC Result:", result);

    if (result.success) {
      setBirthday(result.data.dob);
      setGender(result.data.gender);
    } else {
      setBirthday('');
      setGender('');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-[25px] items-center justify-center w-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <div className="img-cn rounded-2xl w-[400px] bg-green-200 relative h-[250px]">
          <img className="w-[400px]" src={idcardHand} alt="idcardhand" />
          <img onClick={handleBackPage} className="absolute top-[10px] right-[8px] rounded-[50%] h-[20px] w-[20px] cursor-pointer" src={wrong} alt="wrong" />
        </div>
        <div className="details-cn w-[400px] gap-y-[20px] px-[15px] flex flex-col justify-center mb-[10px]">
          <div className="submit-cn flex flex-col gap-y-[20px] justify-center">
            <div className="relative w-full">
              <input onChange={handleNicNumber} value={nicNumber} className="myInput w-full border border-black rounded-[4px] px-[8px] py-[8px]" type="number" placeholder="Enter your NIC"/>
              {/* <span className="mySpan absolute top-[7px] left-[5px]">Enter NIC Number</span> */}
            </div>
            <div>
              <button onClick={handleSubmit} className="bg-green-700 w-full text-white text-[16px] font-semibold rounded-[4px] cursor-pointer px-[8px] py-[8px]">Submit</button>
            </div>
          </div>
          <div className="settext-cn flex flex-col gap-y-[20px] justify-center">
            <InputSet
              labelName={"NIC No"}
              htmlFor={"NICNo"}
              id={"NICNo"}
              value={nicNumber}
            ></InputSet>
            <InputSet
              labelName={"Birthday"}
              htmlFor={"Birthday"}
              id={"Birthday"}
              value={birthday}
            ></InputSet>
            <InputSet
              labelName={"Gender"}
              htmlFor={"Gender"}
              id={"Gender"}
              value={gender}
            ></InputSet>
          </div>
        </div>
      </div>
    </div>
  );
}
