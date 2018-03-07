export class SelectBoxFactory {
  constructor() {

  }

  static createSelectBoxOptions(defaultValue, valuesToSort): any {
    const selectBoxData = {
      availableOptions: [],
      selectedOption: {}
    };

    selectBoxData.availableOptions.push({
      id: '',
      name: defaultValue
    });

    const sortedOptions = [];
    for (const value of valuesToSort) {
      sortedOptions.push({
        id: value,
        name: SelectBoxFactory.toTitleCase(value)
      });
    }

    selectBoxData.availableOptions = selectBoxData.availableOptions.concat(sortedOptions.sort(function(a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    }));
    selectBoxData.selectedOption = {
      id: '',
      name: defaultValue
    };
    return selectBoxData;
  }

  // TODO: Move to a formatter object. Currently in GrammarHelper
  static toTitleCase(str) {
    if (str.toLowerCase() === 'world war ii') {
      return 'World War II';
    }
    if (str.toLowerCase() === 'nato') {
      return 'NATO';
    }
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
