import {ViewLocator} from 'aurelia-framework';

export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
        let moduleId = origin.moduleId;
        let id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) ? moduleId.substring(0, moduleId.length - 3) : moduleId;
        return id.replace('view-models', 'views') + '.html';
    };

    aurelia.start().then(a => a.setRoot("view-models/app"));

}