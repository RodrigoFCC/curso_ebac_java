function Personagem(nick, vocacao, genero, id) {
    this.nick = nick;
    this.vocacao = vocacao;
    this.genero = genero;
    let _id = id;

    this.getId = function() {
        return _id;
    }

    this.setId = function(valor) {
        _id = valor;
    }
    
    this.andar = function() {
        console.log(this.nick + ' está andando');
    }

    this.correr = function() {
        console.log(this.nick + ' está correndo');
    }

    this.atacar = function() {
    }
}

function Barbaro(forca, nick, genero, id) {
    this.forca = forca;

    Personagem.call(this, nick, 'Bárbaro', genero, id);

    this.atacar = function() {
        console.log(this.nick + ' está descendo a porrada!');
    }

    
}

function Mago(inteligencia, nick, genero, id) {
    this.inteligencia = inteligencia;

    Personagem.call(this, nick, 'Mago', genero, id);
    
    this.atacar = function() {
        console.log(this.nick + ' está soltando magia!');
    }
}

const mago1 = new Mago(10, 'Jurandir', "Masculino", 1);
mago1.andar();
mago1.correr();
mago1.atacar();

const mago2 = new Mago(8, 'Jurema',"Feminino", 2);
mago2.andar();
mago2.correr();
mago2.atacar();

const barbaro1 = new Barbaro(9, 'Moacir', "Masculino", 3);
barbaro1.andar();
barbaro1.correr();
barbaro1.atacar();

console.log(mago1.getId());
console.log(barbaro1.getId());