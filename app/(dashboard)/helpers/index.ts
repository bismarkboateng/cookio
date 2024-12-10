import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleNextStep = (
    currentStep: number,
    instructions: string[],
    setCurrentStep:  Dispatch<SetStateAction<number>>,
    setInstructions: Dispatch<SetStateAction<string[]>>,
) => {
    if (currentStep < instructions.length - 1) {
        setCurrentStep(currentStep + 1);
    } else {
        addNewInstruction(setInstructions, instructions);
        setCurrentStep(currentStep + 1);
    }
};

export const handlePreviousStep = (
    currentStep: number,
    setCurrentStep: Dispatch<SetStateAction<number>>,
) => {
    if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
    }
};


export const addNewInstruction = (
    setInstructions: Dispatch<SetStateAction<string[]>>,
    instructions: string[],
) => {
    setInstructions([...instructions, ""]);
};


export const handleInstructionsChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    stepIndex: number,
    setInstructions: Dispatch<SetStateAction<string[]>>,
    instructions: string[]
) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[stepIndex] = event.target.value;
    setInstructions(updatedInstructions);
};