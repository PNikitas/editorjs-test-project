import { EDITOR_IMAGE_ICON } from '../../../assets/icons';

class ImageUploader {
    constructor({ data }) {
        this.data = data;
        this.wrapper = undefined;
    };

    static get toolbox() {
        return {
            title: 'Image',
            icon: EDITOR_IMAGE_ICON,
        };
    };

    render() {
        this.wrapper = document.createElement('div');
        const input = document.createElement('input');

        this.wrapper.appendChild(input);

        input.classList.add('image-uploader__input');
        input.placeholder = 'Type an image URL...';
        input.value = this.data && this.data.url ? this.data.url : '';

        input.addEventListener('paste', (event) => {
            this._createImage(event.clipboardData.getData('text'));
        });

        return this.wrapper;
    };

    _createImage(url) {
        const image = document.createElement('img');

        image.classList.add('image-uploader__image');
        image.src = url;

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(image);
    }

    save(blockContent) {
        const image = blockContent.querySelector('.image-uploader__image');

        return {
            url: image.src,
        };
    };

    validate(savedData) {
        return savedData.url.trim();
    };
}

export default ImageUploader;
