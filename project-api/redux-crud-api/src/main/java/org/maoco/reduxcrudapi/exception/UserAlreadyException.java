package org.maoco.reduxcrudapi.exception;

public class UserAlreadyException extends RuntimeException {

    public UserAlreadyException(String message) {
        super(message);
    }

    public UserAlreadyException() {
        super("User already exists");
    }
}
