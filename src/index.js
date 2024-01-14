// src/index.js

import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType('mi-bloque/my-block', {
  title: 'Mi Bloque',
  icon: 'smiley',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      default: '',
    },
    description: {
      type: 'string',
      default: '',
    },
    category: {
      type: 'string',
      default: '',
    },
  },
  edit,
  save: () => null, // Implementar según tus necesidades
  supports: {
    html: false,
  },
  // Validaciones para cargar solo en entradas (posts)
  supports: {
    html: false,
    anchor: true,
    align: ['center', 'wide', 'full'],
  },
  edit,
  save: () => null,
  validate: (props) => {
    const { category } = props.attributes;
    const isPostTypeValid = props.attributes.postType === 'post';

    if (!isPostTypeValid) {
      return 'Este bloque solo debe cargarse en entradas (posts).';
    }

    return category ? null : 'Seleccione una categoría válida.';
  },
});
