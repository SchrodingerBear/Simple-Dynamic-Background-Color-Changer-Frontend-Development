function showColorPicker() {
  const colorPickerInput = document.createElement('input');
  colorPickerInput.type = 'color';

  colorPickerInput.addEventListener('input', function() {
    document.body.style.backgroundColor = colorPickerInput.value;
  });

  colorPickerInput.click();
}