import { fireEvent, render } from "@testing-library/react";
import React from "react"
import SignUp from '../SignUp';
import "@testing-library/jest-dom"

test('Correct email and password', () => {
    const { getByTestId } = render(<SignUp />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "shriya@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "Abcd_efg"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("")
})

test('Correct email and incorrect password', () => {
    const { getByTestId } = render(<SignUp />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "shriya@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "abcdefgh"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Password must be 8 to 20 characters, include uppercase and lowercase letters, and a special character (!@#$%).")
})

test('Correct email and invalid password', () => {
    const { getByTestId } = render(<SignUp />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "shriya@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "x"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Password must be 8 to 20 characters, include uppercase and lowercase letters, and a special character (!@#$%).")
})

test('Incorrect email and correct password', () => {
    const { getByTestId } = render(<SignUp />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "shriya@"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "Abcd_efg"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to create an account.")
})

test('Invalid email and correct password', () => {
    const { getByTestId } = render(<SignUp />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "s"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "Abcd_efg"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Email must be between 3 and 254 characters.")
})