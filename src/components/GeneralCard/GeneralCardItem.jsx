import { Component } from 'react';

import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as EditBtnIcon } from '../../assets/images/edit.svg';
import { ReactComponent as DeleteBtnIcon } from '../../assets/images/delete.svg';
import {
  StyledBtn,
  StyledBtnMenu,
  StyledContainer,
  StyledItem,
} from './GeneralCardItem.styled';

export default class GeneralCardItem extends Component {
  state = {
    showDropdown: false,
  }
toggleDropdown = () => {
    this.setState(({showDropdown})=>({
      showDropdown: !showDropdown,
    }))
}
  render() {
    const { text, deleteCard, id, relation} = this.props;
    const {showDropdown} = this.state;

    return (
      <Paper>
        <StyledItem>
          <span>{text}</span>
          <StyledBtnMenu onClick={this.toggleDropdown}>
            <BsThreeDotsVertical />
          </StyledBtnMenu>

          {showDropdown &&  (
            <StyledContainer>
            <StyledBtn type="button" >
              <EditBtnIcon />
              Edit
            </StyledBtn>
            <StyledBtn type="button" onClick={()=>deleteCard(id,relation)}>
              <DeleteBtnIcon />
              Delete
            </StyledBtn>
          </StyledContainer>
          )}
        </StyledItem>
      </Paper>
    );
  }
}


