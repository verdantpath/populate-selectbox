(function() {
  var type = document.getElementById('equipmentType');
  var model = document.getElementById('model');
  var cameras = {
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = {
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // If the first select has a value of choose, the second select box asks the to choose an option first
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {
      model.innerHTML = '<option>Please choose a type first</option>';
      return;
    }
    // If a selection has been made in the first select box, the models (cameras, projectors) are added to the models variable
    var models = getModels(this.value);

    // Puts together the options for the second select box
    var options = '<option>Please choose a model</option>';
    for (var key in models) {
      options += '<option value="' + key + '">' + models[key] + '</option>';
    }
    model.innerHTML = options;
  });

  // Returns the object for cameras or projectors, which are the models that will show in the second select box
  function getModels(equipmentType) {
    if (equipmentType ==='camera') {
      return cameras;
    } else if (equipmentType === 'projectors') {
      return projectors;
    }
  }
}());
