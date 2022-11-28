import { fireEvent, render } from "@testing-library/react";
import React from "react"
import "@testing-library/jest-dom"
import ForgotPassword from "../ForgotPassword";

test('Correct email', () => {
    const { getByTestId } = render(<ForgotPassword />);
    const emailEl = getByTestId("email");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bobby@gmail.com"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("")
})

test('Incorrect email', () => {
    const { getByTestId } = render(<ForgotPassword />);
    const emailEl = getByTestId("email");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bobby@abc.com"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to reset password.")
})

test('Invalid email', () => {
    const { getByTestId } = render(<ForgotPassword />);
    const emailEl = getByTestId("email");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "b@gmail.com"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to reset password.")
})