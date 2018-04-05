import angular from 'angular';
import 'angular-mocks';
import {techDetail} from './tech-detail';

describe('tech detail component', () => {
  beforeEach(() => {
    angular
      .module('tech', ['app/tech/tech.html'])
      .component('techDetail', techDetail);
    angular.mock.module('techDetail');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<techDetail></techDetail>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
