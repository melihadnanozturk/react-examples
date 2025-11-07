package org.maoco.reduxcrudapi.user;

import java.util.List;

public record UserResponse (String username, List<Role> roles){}
