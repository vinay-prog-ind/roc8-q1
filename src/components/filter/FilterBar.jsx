import React, { useState } from 'react'
import Button from '../../ui/Button'
import styled from 'styled-components'

const StyledBar = styled.div`
    padding: 10px 0px;
    display: flex;
`;

const StyledFilterUL = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px 20px;
    `;

const StyledFilterLI = styled.li`
    margin: 0px 2px;
`;


export default function FilterBar() {
    const type = ["Unread", "Read", "Favorite"];
    const [active, setActive] = useState();
    const [isActive, setIsActive] = useState(false);

    function toggleActive(i) {
        setActive(i);
        if(active === i) {
            setIsActive(isActive => !isActive);
        }
    }

  return (
    <StyledBar>
        <h3>Filter: </h3>
        <StyledFilterUL>
            {
                type.map((el, i) => 
                    <StyledFilterLI onClick={() => toggleActive(i)} key={i}><Button   active={active === i} key ={i} type={isActive ? "activeBtn" : "filter"}>{el}</Button></StyledFilterLI>
            )}
        </StyledFilterUL>
    </StyledBar>
  )
}
