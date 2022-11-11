import { fireEvent, render } from "@testing-library/react";
import React from "react"
import LogIn from '../LogIn';
import "@testing-library/jest-dom"

test('Correct email and password', () => {
    const { getByTestId } = render(<LogIn />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bobby@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "passwOrd!"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("")
})

test('Correct email and incorrect password', () => {
    const { getByTestId } = render(<LogIn />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bobby@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "12345"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to log in")
})

test('Correct email and invalid password', () => {
    const { getByTestId } = render(<LogIn />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bobby@gmail.com"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "a a"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to log in")
})

test('Incorrect email and correct password', () => {
    const { getByTestId } = render(<LogIn />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "bob@"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "passwOrd!"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to log in")
})

test('Invalid email and correct password', () => {
    const { getByTestId } = render(<LogIn />);
    const emailEl = getByTestId("email");
    const passwordEl = getByTestId("password");
    const errorEl = getByTestId("errormsg");
    const submitBtn = getByTestId("submitBtn");
    
    fireEvent.change(emailEl, {
        target: {
            value: "@"
        }
    })

    fireEvent.change(passwordEl, {
        target: {
            value: "passwOrd!"
        }
    })

    fireEvent.click(submitBtn);
    expect(errorEl.textContent).toBe("Failed to log in")
})