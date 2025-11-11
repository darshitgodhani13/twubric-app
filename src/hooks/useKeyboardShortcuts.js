import { useEffect } from 'react';

export const useKeyboardShortcuts = ({ onSort, onRemove, followers }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey || event.metaKey) {
        switch(event.key) {
          case '1':
            event.preventDefault();
            onSort('total');
            break;
          case '2':
            event.preventDefault();
            onSort('friends');
            break;
          case '3':
            event.preventDefault();
            onSort('influence');
            break;
          case '4':
            event.preventDefault();
            onSort('chirpiness');
            break;
          default:
            break;
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        const clearBtn = document.querySelector('.clear-filters-btn');
        if (clearBtn) clearBtn.click();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onSort, onRemove, followers]);
};