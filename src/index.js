async function getComponent() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = handleClick;

    element.appendChild(btn);

    return element;
}

async function handleClick() {
    const print = await import(/* webpackChunkName: "print" */ './print');

    print.default();
}

async function run() {
    const component = await getComponent();

    document.body.appendChild(component);
}

run();
