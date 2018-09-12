import dependable from 'dependable';
import  path from 'path';

const container = dependable.container();

const simpleDependencies = [
    ['_', 'lodash']
];

simpleDependencies.forEach((val) => {
    container.register(val[0], () => {
        return require(val[1]);
    });
});

container.load(path.join(__dirname, './controllers'));
container.load(path.join(__dirname, './helpers'));

container.register('container', () => {
    return container;
});

export {
    container
}