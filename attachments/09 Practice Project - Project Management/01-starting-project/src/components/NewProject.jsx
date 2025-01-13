import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef()

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const entereddescription = descriptionRef.current.value;
    const entereddueDate = dueDateRef.current.value;

    //なぜ直接 !enteredTitle||!entereddescription のようにしないのですか？値が存在すればtureになりませんか？trimが必要な理由を教えて
    if (
      enteredTitle.trim() === "" ||
      entereddescription.trim() === "" ||
      entereddueDate.trim() === ""
    ){
        modalRef.current.open();
        return;
    }
      onAdd({
        title: enteredTitle,
        description: entereddescription,
        dueDate: entereddueDate,
      });
  }
  return (
    <>
    <Modal ref={modalRef} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter value</p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4 bg-stone-400">
        <li>
          <button className=" text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div className="">
        <Input type="text" ref={titleRef} label="Title"></Input>
        <Input ref={descriptionRef} label="Description" textarea></Input>
        <Input type="date" ref={dueDateRef} label="Due Date"></Input>
      </div>
    </div>
    </>
  );
}

export default NewProject;
