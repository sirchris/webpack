async function getComponent(): Promise<HTMLDivElement> {
    const element: HTMLDivElement = document.createElement('div');
    const btn: HTMLButtonElement = document.createElement('button');

    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = handleClick;

    element.appendChild(btn);

    return element;
}

async function handleClick(): Promise<void> {
    const print = await import(/* webpackChunkName: "print" */ './print');

    print.default();
}

async function run(): Promise<void> {
    const component = await getComponent();

    document.body.appendChild(component);
}

run();
