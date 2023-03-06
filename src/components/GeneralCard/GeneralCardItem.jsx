import { useState } from 'react';

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
import { useNavigate } from 'react-router-dom';

export default function GeneralCardItem({
  text,
  relation,
  editCard,
  id,
  deleteCard,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [dropDownPosition, setDropDownPosition] = useState({
    x: 0,
    y: 0,
    clientWidth: 0,
    clientHeight: 0,
  });
  const navigate = useNavigate();

  const onClickToId = () => {
    if (relation !== 'departments') return;
    navigate(`/departments/${id}`);
  };

  const handleShowDropDown = e => {
    setShowDropdown(true);
    setDropDownPosition({
      x: e.clientX,
      y: e.clientY,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
    });
  };

  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  const handleActionBtnClick = action => {
    setShowModal(action);
    setShowDropdown(false);
  };

  return (
    <Paper onClick={onClickToId}>
      <StyledItem>
        <span>{text}</span>
        <StyledBtnMenu onClick={handleShowDropDown}>
          <BsThreeDotsVertical />
        </StyledBtnMenu>

        {showDropdown && (
          <Modal onClose={toggleDropDown}>
            <StyledContainer
              x={dropDownPosition.x}
              y={dropDownPosition.y}
              clientWidth={dropDownPosition.clientWidth}
              clientHeight={dropDownPosition.clientHeight}
            >
              <StyledBtn
                type="button"
                onClick={() => handleActionBtnClick('edit')}
              >
                <EditBtnIcon />
                Edit
              </StyledBtn>
              <StyledBtn
                type="button"
                onClick={() => handleActionBtnClick('delete')}
              >
                <DeleteBtnIcon />
                Delete
              </StyledBtn>
            </StyledContainer>
          </Modal>
        )}
      </StyledItem>

      {showModal === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <StyledModalActionContainer>
            <h2>Edit {relation === 'departments' ? 'department' : 'city'}</h2>
            <AddItemForm
              onSubmit={editCard}
              idItem={id}
              relation={relation}
              textItem={text}
              closeModal={handleCloseModal}
            ></AddItemForm>
          </StyledModalActionContainer>
        </Modal>
      )}

      {showModal === 'delete' && (
        <Modal onClose={handleCloseModal}>
          <StyledModalActionContainer>
            <h2>Delete {relation === 'departments' ? 'department' : 'city'}</h2>
            <button onClick={() => deleteCard(id, relation)}>Yes</button>
            <button onClick={() => handleCloseModal()}>No</button>
          </StyledModalActionContainer>
        </Modal>
      )}
    </Paper>
  );
}

// import { Component } from 'react';

// import { AddItemForm, Modal, Paper } from 'components';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { ReactComponent as EditBtnIcon } from '../../assets/images/edit.svg';
// import { ReactComponent as DeleteBtnIcon } from '../../assets/images/delete.svg';
// import {
//   StyledModalActionContainer,
//   StyledBtn,
//   StyledBtnMenu,
//   StyledContainer,
//   StyledItem,
// } from './GeneralCardItem.styled';

// export default class GeneralCardItem extends Component {
//   state = {
//     showDropdown: false,
//     showModal: null,
//     dropDownPosition: {
//       x: 0,
//       y: 0,
//     },
//   };

//   handleShowDropDown = e => {
//     this.setState({
//       showDropdown: true,
//       dropDownPosition: {
//         x: e.clientX,
//         y: e.clientY,
//         clientWidth: document.documentElement.clientWidth,
//         clientHeight: document.documentElement.clientHeight,
//       },
//     });
//   };

//   toggleDropDown = () => {
//     this.setState(({ showDropdown }) => ({
//       showDropdown: !showDropdown,
//     }));
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: null });
//   };

//   handleDeleteBtnClick = () => {
//     this.handleToggleModal();
//   };

//   handleActionBtnClick = action => {
//     this.setState({ showModal: action, showDropdown: false });
//   };

//   render() {
//     const { text, id, relation, deleteCard, editCard } = this.props;
//     const { showDropdown, showModal, dropDownPosition } = this.state;

//     return (
//       <Paper>
//         <StyledItem>
//           <span>{text}</span>
//           <StyledBtnMenu onClick={this.handleShowDropDown}>
//             <BsThreeDotsVertical />
//           </StyledBtnMenu>

//           {showDropdown && (
//             <Modal onClose={this.toggleDropDown}>
//               <StyledContainer
//                 x={dropDownPosition.x}
//                 y={dropDownPosition.y}
//                 clientWidth={dropDownPosition.clientWidth}
//                 clientHeight={dropDownPosition.clientHeight}
//               >
//                 <StyledBtn
//                   type="button"
//                   onClick={() => this.handleActionBtnClick('edit')}
//                 >
//                   <EditBtnIcon />
//                   Edit
//                 </StyledBtn>
//                 <StyledBtn
//                   type="button"
//                   onClick={() => this.handleActionBtnClick('delete')}
//                 >
//                   <DeleteBtnIcon />
//                   Delete
//                 </StyledBtn>
//               </StyledContainer>
//             </Modal>
//           )}
//         </StyledItem>

//         {showModal === 'edit' && (
//           <Modal onClose={this.handleCloseModal}>
//             <StyledModalActionContainer>
//               <h2>Edit {relation === 'departments' ? 'department' : 'city'}</h2>
//               <AddItemForm
//                 onSubmit={editCard}
//                 idItem={id}
//                 relation={relation}
//               ></AddItemForm>
//             </StyledModalActionContainer>
//           </Modal>
//         )}

//         {showModal === 'delete' && (
//           <Modal onClose={this.handleCloseModal}>
//             <StyledModalActionContainer>
//               <h2>
//                 Delete {relation === 'departments' ? 'department' : 'city'}
//               </h2>
//               <button onClick={() => deleteCard(id, relation)}>Yes</button>
//               <button onClick={() => this.handleCloseModal()}>No</button>
//             </StyledModalActionContainer>
//           </Modal>
//         )}
//       </Paper>
//     );
//   }
// }
