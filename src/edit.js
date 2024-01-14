// src/edit.js

import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';

const MyBlockEdit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  // Definir estilos por defecto
  let styles = {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  };

  // Obtener la categoría seleccionada y aplicar estilos
  const category = attributes.category || '';
  switch (category) {
    case 'nacional':
      styles = {
        backgroundColor: '#00B049',
        color: '#FFFFFF',
      };
      break;
    case 'entretenimiento':
      styles = {
        backgroundColor: '#FFC915',
        color: '#FFFFFF',
      };
      break;
    case 'tecnologia':
      styles = {
        backgroundColor: '#00D3F8',
        color: '#FFFFFF',
      };
      break;
    case 'mascotas':
      styles = {
        backgroundColor: '#90456D',
        color: '#FFFFFF',
      };
      break;
    case 'deportes':
      styles = {
        backgroundColor: '#FF372C',
        color: '#FFFFFF',
      };
      break;
    default:
      // No hacer nada si la categoría no existe
      break;
  }

  return (
    <div {...blockProps} style={styles}>
      <h2>Título</h2>
      <input
        type="text"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
        placeholder="Ingrese el título"
      />

      <h3>Descripción</h3>
      <textarea
        value={attributes.description}
        onChange={(value) => setAttributes({ description: value })}
        placeholder="Ingrese la descripción"
      />

      <SelectControl
        label="Categoría"
        value={category}
        options={[
          { label: 'Nacional', value: 'nacional' },
          { label: 'Entretenimiento', value: 'entretenimiento' },
          { label: 'Tecnología', value: 'tecnologia' },
          { label: 'Mascotas', value: 'mascotas' },
          { label: 'Deportes', value: 'deportes' },
        ]}
        onChange={(value) => setAttributes({ category: value })}
      />
    </div>
  );
};

export default MyBlockEdit;
