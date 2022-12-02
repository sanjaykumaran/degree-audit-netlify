import { fireEvent, render } from "@testing-library/react";
import React from "react"
import "@testing-library/jest-dom"
import Profile from "../Profile";

test('Correct course', () => {
    const { getByTestId } = render(<Profile />);
    const courseEl = getByTestId("edit-course");
    const errorEl = getByTestId("errormsg");
    
    fireEvent.change(courseEl, {
        target: {
            value: "CS4336"
        }
    })

    expect(errorEl.textContent).toBe("")
})

test('Incorrect course', () => {
    const { getByTestId } = render(<Profile />);
    const courseEl = getByTestId("edit-course");
    const errorEl = getByTestId("errormsg");
    
    fireEvent.change(courseEl, {
        target: {
            value: "SE345"
        }
    })

    expect(errorEl.textContent).toBe("Incorrect course.")
})

test('Invalid course', () => {
    const { getByTestId } = render(<Profile />);
    const courseEl = getByTestId("edit-course");
    const errorEl = getByTestId("errormsg");
    
    fireEvent.change(courseEl, {
        target: {
            value: "CXXX0"
        }
    })

    expect(errorEl.textContent).toBe("Incorrect course.")
})