import { Component } from 'react';

import { AddItemForm, Modal, Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as EditBtnIcon } from '../../assets/images/edit.svg';
import { ReactComponent as DeleteBtnIcon } from '../../assets/images/delete.svg';
import {
  StyledModalActionContainer,
  StyledBtn,
  StyledBtnMenu,
  StyledContainer,
  StyledItem,
} from './GeneralCardItem.styled';

export default class GeneralCardItem extends Component {
  state = {
    showDropdown: false,
    showModal: null,
    dropDownPosition: {
      x: 0,
      y: 0,
    },
  };

  handleShowDropDown = e => {
    this.setState({
      showDropdown: true,
      dropDownPosition: {
        x: e.clientX,
        y: e.clientY,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
      },
    });
  };

  toggleDropDown = () => {
    this.setState(({ showDropdown }) => ({
      showDropdown: !showDropdown,
    }));
  };

  handleCloseModal = () => {
    this.setState({ showModal: null });
  };

  handleDeleteBtnClick = () => {
    this.handleToggleModal();
  };

  handleActionBtnClick = action => {
    this.setState({ showModal: action, showDropdown: false });
  };

  handleEditItem = () => {
    console.log('editttt');
  };

  render() {
    const { text, id, relation, deleteCard } = this.props;
    const { showDropdown, showModal, dropDownPosition } = this.state;

    return (
      <Paper>
        <StyledItem>
          <span>{text}</span>
          <StyledBtnMenu onClick={this.handleShowDropDown}>
            <BsThreeDotsVertical />
          </StyledBtnMenu>

          {showDropdown && (
            <Modal onClose={this.toggleDropDown}>
              <StyledContainer
                x={dropDownPosition.x}
                y={dropDownPosition.y}
                clientWidth={dropDownPosition.clientWidth}
                clientHeight={dropDownPosition.clientHeight}
              >
                <StyledBtn
                  type="button"
                  onClick={() => this.handleActionBtnClick('edit')}
                >
                  <EditBtnIcon />
                  Edit
                </StyledBtn>
                <StyledBtn
                  type="button"
                  onClick={() => this.handleActionBtnClick('delete')}
                >
                  <DeleteBtnIcon />
                  Delete
                </StyledBtn>
              </StyledContainer>
            </Modal>
          )}
        </StyledItem>

        {showModal === 'edit' && (
          <Modal onClose={this.handleCloseModal}>
            <StyledModalActionContainer>
              <h2>Edit {relation === 'departments' ? 'department' : 'city'}</h2>
              <AddItemForm onSubmit={this.handleEditItem}></AddItemForm>
            </StyledModalActionContainer>
          </Modal>
        )}

        {showModal === 'delete' && (
          <Modal onClose={this.handleCloseModal}>
            <StyledModalActionContainer>
              <h2>
                Delete {relation === 'departments' ? 'department' : 'city'}
              </h2>
              <button onClick={() => deleteCard(id, relation)}>Yes</button>
              <button onClick={() => this.handleCloseModal()}>No</button>
            </StyledModalActionContainer>
          </Modal>
        )}
      </Paper>
    );
  }
}
