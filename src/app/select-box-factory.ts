import { GrammarHelper } from './quiz-main/grammar-helper';

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
        name: GrammarHelper.toTitleCase(value)
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
}
