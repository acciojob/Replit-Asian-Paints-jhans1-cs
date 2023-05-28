//your JS code here. If required.
 const changeColorButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    
    changeColorButton.addEventListener('click', () => {
      const blockIdInput = document.getElementById('block_id');
      const colorIdInput = document.getElementById('colour_id');
      
      const blockId = parseInt(blockIdInput.value);
      const color = colorIdInput.value;
      
      const gridItem = document.getElementById(blockId);
      
      if (gridItem) {
        resetGridColors();
        gridItem.style.backgroundColor = color;
      }
    });
    
    resetButton.addEventListener('click', () => {
      resetGridColors();
    });
    
    function resetGridColors() {
      const gridItems = document.getElementsByClassName('grid-item');
      
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent';
      }
    }