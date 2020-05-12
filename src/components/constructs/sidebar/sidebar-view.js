import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import UserContext from '../../../config/user-context'

import { StyledList, StyledLink, H3 } from './sidebar-style'

const Sidebar = ({items}) => {
    
    const user = useContext(UserContext)

    return (
        <StyledList disablePadding dense>
            <H3>Hi {user}!</H3>
            {items.map(({ label, name, link, ...rest }) => (
                <StyledLink to={link}>
                    <ListItem key={name} button onClick={() => {console.log("clicked!")}} {...rest}>
                    <ListItemText>{label}</ListItemText>
                    </ListItem>
                </StyledLink>
            ))}
        </StyledList>
      )
}

export default Sidebar