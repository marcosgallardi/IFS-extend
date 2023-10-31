const sequelize = require("../../DB_connection");
const bcrypt = require("bcryptjs");

// NOMBRE DE LA TABLA: USER_IFS_EXTEND
//campos  user_id ,username, password
// nombre de la trigger para auincremetar el id: user_ifs_extend_trigger

const authCtrl = async (name, password) => {
  try {
    const result = await sequelize.query("SELECT * FROM USER_IFS_EXTEND");

    const user = result[0].find((user) => user.username === name);
   
    if (user.PASSWORD === password) {
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = authCtrl;
//sys.user$

//hoy crear en prod

// -- Create table
// create table USER_IFS_EXTEND
// (
//    user_id    NUMBER,
//    username   VARCHAR2(255) NOT NULL,
//    password   VARCHAR2(255) NOT NULL
// )
// tablespace IFSAPP_DATA
//   pctfree 10
//   initrans 1
//   maxtrans 255
//   storage
//   (
//     initial 64K
//     next 8K
//     minextents 1
//     maxextents unlimited
//   );

//trigger para autoincrementar el id
// CREATE TRIGGER user_ifs_extend_trigger
// BEFORE INSERT ON USER_IFS_EXTEND
// FOR EACH ROW
// BEGIN
//   SELECT USER_IFS_EXTEND_SEQ.NEXTVAL INTO :new.user_id FROM dual;
// END;

// AFGARRID
// AJGENARO
// AMASURME
// AMDELVEC
// BMOBLANO
// CDMURUA
// CFVERDE
// CMSANMAR
// COCHIAPU
// DAFRABAS
// DALOMBAR
// DAMEDINA
// DAVID.ETCHEVERRIA
// DAZACAGN
// DAZUNINO
// DEMANDSERVER
// DIP
// DLOMBARD
// DNRAMPON
// DOSIRI
// DSVENTRE
// EADANGEL
// EDELEZIC
// EHPAUWEL
// EHPIETRA
// EMANUEL.MONTENEGRO
// EMCAGNON
// FAARANDA
// FABIAN.EUGUI
// FAMAUREL
// FDEMICHE
// FRANCISCO.LANDINI
// FRAZUAGA
// FSALONSO
// GDBRISOL
// GERARDO.REZNICK
// GIULIANA.PASSADORE
// GLBRET
// GLOBAL_AQ_USER_ROLE
// GMIRATA
// GNOLIVIE
// GOCORONE
// HMLOGIOD
// HOCARACO
// HRLOPEZ
// JAIRAETA
// JAVENTRE
// JBONDANZ
// JBPIETRA
// JCBORAGN
// JCMONTEN
// JCOLIVIE
// JCSUAREZ
// JDRODRIG
// JFLAVORA
// JGROUTIN
// JHTORESS
// JHTORNES
// JIGAMMAC

// JLCODON
// JLDOMENC
// JMBALLES
// JMCARACO
// JMCHACAR
// JMSCASSO
// JMSECCO
// JMXSERVER
// JOMONTEN
// JONATHAN.MOLLE
// JORGE.SPAHN
// JOSUBIGA
// JUAN.LOCAMPO
// JUAN.RISSOLA
// JUAN.RIVERO
// LASADONI
// LATOLEDO
// LECARBAL
// LFILIPIN
// LHEUGENI
// LIBORAGN
// LJLOPEZ
// LMGONZAL
// LMLIMA
// LMLORENZ
// LMSECCO
// LNVALERG

// LUCAS.ESQUIVEL
// LUCIANO.SERAGOPIAN
// MACEJAS
// MAPOLLAC
// MARODRIG
// MATIAS.NIEVES
// MCAINO
// MCARBONE
// MCCAGNON
// MCMOLINA
// MELINA.SEBASTIANO
// MEPARROT
// MFARZANI
// MFRAVASS
// MIZENGA
// MJACUÑA
// MJCABUCC
// MJPAIS
// MLFALABE
// MMQUILIC
// MOBRUSCH
// MPGONZAL
// MPGONZALO
// MRCOSEGL
// MRICHEZE
// MRRODRIG
// MSCURIOT
// MSPRIZZI
// MVMOZZON
// NAMUHLBE
// NBARNETC
// NBOZZINI
// NDANITO
// NESALVAT
// NICOLAS.COLOMBO
// NOMARTIN
// OAMUHLBE
// OOSEBAST
// OVHUICI
// PILAR.IRIBARREN
// PLANTA01
// PLANTA02
// PLANTA03
// PLANTA04
// PLANTA05
// PLANTA06
// PLANTA07
// PLANTA08
// PLANTA09

// PMVANEGA

// PRLARROQ

// PUBLIC
// RACOLOMB
// RAGARCIA

// RFCORREA
// RGIOSCIO
// RJRUDY

// ROBAVAST
// ROCAVALL
// RODRIGO.PARODI
// ROLATAPI
// ROMINETT
// SAZABULA
// SFERRARO
// SLSELVA
// TBORI
// USNOVIEM
// WAIRAETA
// WDECAUSM
// WMRODRIG
// YJMOSQUE
