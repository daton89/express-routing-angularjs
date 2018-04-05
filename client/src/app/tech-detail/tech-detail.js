class TechDetailController {
  /** @ngInject */
  constructor($http, $state) {
    $http.get('api/techs/' + $state.params.key)
      .then(res => {
        this.tech = res.data;
      });
  }
}

export const techDetail = {
  template: require('./tech-detail.html'),
  controller: TechDetailController
};

