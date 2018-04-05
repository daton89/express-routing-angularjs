class TechsController {
  /** @ngInject */
  constructor($http, $state) {
    $http
      .get('api/techs')
      .then(response => {
        this.techs = response.data;
      });
    this.$state = $state;
  }
  show(tech) {
    this.$state.go('tech', tech);
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};
