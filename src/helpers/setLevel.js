const progress = document.querySelector('.progress');

export const setLevel = ( level ) => {
    const sizeLevel = Math.round((level / 8) * 100);

    return `${sizeLevel}%`;
}