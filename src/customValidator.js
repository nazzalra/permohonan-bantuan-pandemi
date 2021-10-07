const imgFilesize = ( value ) => ( value.size / ( 1024 * 1024 ) ).toFixed( 2 ) < 2;
const imgFormat = ( value ) =>
    ["image/png", "image/jpeg", "image/jpg", "image/bmp"].includes( value.type );

module.exports = {
    imgFilesize,
    imgFormat
}