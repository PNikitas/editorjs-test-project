import EditorJs from '@editorjs/editorjs';
import configuration from './editorConfiguration';

const editor = new EditorJs(configuration);

const saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', () => {
    editor
        .save()
        .then((res) => console.info(res))
        .catch((err) => console.error(`Something went wrong - ${err}`));
});
