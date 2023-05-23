//your JS code here. If required.
<script>
        function changeColor() {
            var blockId = document.getElementById('block_id').value;
            var colorId = document.getElementById('color_id').value;
            var block = document.getElementById(blockId);
            
            resetGrid();
            block.style.backgroundColor = colorId;
        }
        
        function resetGrid() {
            var gridItems = document.getElementsByClassName('grid-item');
            for (var i = 0; i < gridItems.length; i++) {
                gridItems[i].style.backgroundColor = 'transparent';
            }
        }
    </script>