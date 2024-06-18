import React from 'react';
import { Modal } from 'flowbite-react';

const RoleModal = ({ show, onClose, role, onSubmit }) => {
  return (
    <Modal show={show} size="md" onClose={onClose}>
      <Modal.Header>Create {role} Role</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor={`${role}Name`} className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id={`${role}Name`}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`${role}Location`} className="block text-gray-700">
              Location:
            </label>
            <input
              type="text"
              id={`${role}Location`}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`${role}State`} className="block text-gray-700">
              State:
            </label>
            <input
              type="text"
              id={`${role}State`}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md"
          >
            Create
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RoleModal;
