import React from 'react';
import Select from 'react-select';

const teams = [
  { value: 'Lakers', label: 'Los Angeles Lakers' },
  { value: 'Warriors', label: 'Golden State Warriors' },
  { value: 'Celtics', label: 'Boston Celtics' },
  // Ajouter toutes les autres équipes NBA ici
];

interface MultiSelectProps {
  onSelectChange: (selectedTeams: any) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ onSelectChange }) => {
  return (
    <Select
      isMulti
      options={teams}
      onChange={onSelectChange}
      placeholder="Sélectionner des équipes"
    />
  );
};

export default MultiSelect;
