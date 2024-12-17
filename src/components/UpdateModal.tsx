import React, { useState } from 'react';
import '../components/modal.css';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (newUsername: string, newPassword: string) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onClose, onUpdate }) => {
  const [newUsername, setNewUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(newUsername, newPassword);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Mettre à jour vos informations</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom d'utilisateur :</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sauvegarder les modifications</button> <br></br>
          <button type="button" onClick={onClose}>Annuler</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
