import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: 'arselt',
  role: ROLES.CUSTOMER
}

//doing this we'll need to do one by one
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false
}

const ans = checkAdminRole()
console.log("Check Admin Role, ", ans)

// we can check an if the valid params are (include) in array
export const checkRole = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

const ans2 = checkRole([ROLES.ADMIN, ROLES.SELLER])
console.log("Check Role, ", ans2)

// rest params sends all roles as an array
export const checkRoleV2 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

const ans3 = checkRoleV2(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log("Check Role V2, ", ans3)
