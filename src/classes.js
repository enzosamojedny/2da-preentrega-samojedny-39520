export class CuentaCorriente {
    constructor(cliente, banco, saldo, numeroCuenta) {
        this.cliente = cliente;
        this.banco = banco;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo || 0;
        this.historial = [];
    }
    depositoEnCuenta(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return this.saldo;
        }
    }
    retiroEnCuenta(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return this.saldo;
        }
    }
    verSaldo() {
        return this.saldo;
    }
    transferencia(valor, cuentaDestino) {
        if (this.saldo >= valor) {
            this.retiroEnCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
        }
    }
}
export class Cliente {
    constructor(nombreCliente, dniCliente, emailCliente, telefonoCliente, passwordCliente, incomeCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.emailCliente = emailCliente;
        this.passwordCliente = passwordCliente;
        this.telefonoCliente = telefonoCliente;
        this.incomeCliente = incomeCliente;
    }
};
export class Plazo_Fijo {
    constructor(monto, plazo, interes) {
        this.monto = monto || 0;
        this.plazo = plazo || 0;
        this.interes = interes || 0;
    }
    verSaldo() {
        return this.monto;
    }
}
export class CompraDolar {
    constructor(monto, cotizacion, conversion) {
        this.monto = monto || 0;
        this.contizacion = cotizacion;//precio del TC
        this.conversion = conversion;//trade de pesos a usd
    }
}