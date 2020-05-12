import React, { useContext } from "react"
import {Redirect} from "@reach/router"

import {PATHNAMES} from "../../config/pathnames"
import UserContext from "../../config/user-context"

const PrivateRoute = ({component: Comp, ...props}) => {
  let user = useContext(UserContext)
  return user ? <Comp {...props} /> : <Redirect noThrow to={PATHNAMES.INTRO} />
}

export default PrivateRoute