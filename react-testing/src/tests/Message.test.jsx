import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Message from "../components/Message";

describe("Message Component", () => {
  it("should render the default message if no message prop is provided", () => {
    render(<Message />);
    const text = screen.getByText(/Bu benim mesajımdır : Default Message/i);
    expect(text).toBeInTheDocument();
  });

  it("should render the message from the prop", () => {
    render(<Message message="Test" />);
    const text = screen.getByText(/Bu benim mesajımdır : Test/i);
    expect(text).toBeInTheDocument();
  });
});

