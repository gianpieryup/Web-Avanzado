const mp = require('mercadopago')

//[sandbox] ; Entorno de prueba /para emular una compra
/*||access_token
TEST-11812306172095-101512-44dc16e378eaeed6e92cb9adc73457e2-480073237
*/

mp.configure({
    sandbox: true,
    access_token: 'TEST-11812306172095-101512-44dc16e378eaeed6e92cb9adc73457e2-480073237'
});//mirar la documentacion copipasta


//http://miwebfantastica.com/comprar/sjcbjsbcjsbcjc-scs4cs15c6-cs5cs56
// preference : total,mail del usuario, url comprobar
async function comprar(preference) {
    try {
        return await mp.preferences.create(preference);//metodo de mercado PAgo
    } catch (error) {
        throw error;
    }
}
module.exports = {comprar};