import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PhaseCDfis from "./components/PhaseCDfis";
import Phases from "./components/Phases";
import PhaseCD41 from "./components/PhaseCD41";
import PhaseCDfis2 from "./components/PhaseCDfis2";
import Phases2 from "./components/Phases2";
import PhaseCD4 from "./components/PhaseCD4";
import PhaseCD42 from "./components/PhaseCD42";
import ConnexionArbitre from "./components/ConnexionArbitre";
import PhaseCD412 from "./components/PhaseCD412";
import PageArbitreCompleterLesDiffrentsFor from "./components/PageArbitreCompleterLesDiffrentsFor";
import PhaseCD1 from "./components/PhaseCD1";
import PhaseCD12 from "./components/PhaseCD12";
import Connexion from "./components/Connexion";
import Connexion3 from "./components/Connexion3";
import PageBrainus from "./components/PageBrainus";
import PageBrainusSuperadmin from "./components/PageBrainusSuperadmin";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/phase-c-defis-1">
            <PhaseCDfis {...phaseCDfisData} />
          </Route>
          <Route path="/phases-1">
            <Phases
              lesPhases="Les phases"
              phaseA="Phase C"
              phase1Props={phasesData.phase1Props}
              phase2Props={phasesData.phase2Props}
              phase3Props={phasesData.phase3Props}
            />
          </Route>
          <Route path="/phase-c-d4-1">
            <PhaseCD41
              phaseC="Phase C"
              retour="Retour"
              suivant="Suivant"
              dfiN4LaMlodieEnsorceleuse="Défi n°4 : La mélodie ensorceleuse"
              chaqueTapeValideVaut5Points="Chaque étape validée vaut 5 points"
            />
          </Route>
          <Route path="/phase-c-defis">
            <PhaseCDfis2 {...phaseCDfis2Data} />
          </Route>
          <Route path="/phases">
            <Phases2
              lesPhases="Les phases"
              phaseA="Phase C"
              phase1Props={phases2Data.phase1Props}
              phase2Props={phases2Data.phase2Props}
              phase3Props={phases2Data.phase3Props}
            />
          </Route>
          <Route path="/phase-c-d4-2">
            <PhaseCD4 {...phaseCD4Data} />
          </Route>
          <Route path="/phase-c-d4">
            <PhaseCD42 {...phaseCD42Data} />
          </Route>
          <Route path="/:path(|connexion-arbitre)">
            <ConnexionArbitre {...connexionArbitreData} />
          </Route>
          <Route path="/phase-c-d4-1-1">
            <PhaseCD412
              phaseC="Phase C"
              retour="Retour"
              suivant="Suivant"
              dfiN4LaMlodieEnsorceleuse="Défi n°4 : La mélodie ensorceleuse"
              chaqueTapeValideVaut5Points="Chaque étape validée vaut 5 points"
            />
          </Route>
          <Route path="/page-arbitre-completer-les-differents-formulaires">
            <PageArbitreCompleterLesDiffrentsFor group19="/img/group-19@4x.png" />
          </Route>
          <Route path="/phase-c-d1-1">
            <PhaseCD1 {...phaseCD1Data} />
          </Route>
          <Route path="/phase-c-d1">
            <PhaseCD12 {...phaseCD12Data} />
          </Route>
          <Route path="/connexion">
            <Connexion {...connexionData} />
          </Route>
          <Route path="/connexion-1">
            <Connexion3 {...connexion3Data} />
          </Route>
          <Route path="/page-brainus">
            <PageBrainus group19="/img/group-19@4x.png" group13="/img/group-13@2x.png" />
          </Route>
          <Route path="/page-brainus-superadmin">
            <PageBrainusSuperadmin
              accsBrainus="Accès Brainus"
              gestionDuTournoi="Gestion du tournoi"
              group13="/img/group-23@2x.png"
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const button1Data = {
    children: "Défi N°1",
};

const component1522Data = {
    icBaselineAccessTimeFilled: "/img/ic-baseline-access-time-filled@2x.png",
    buttonProps: button1Data,
};

const button2Data = {
    children: "Défi N°5",
    className: "button-13",
};

const component151Data = {
    buttonProps: button2Data,
};

const button3Data = {
    children: "Défi N°6",
    className: "button-14",
};

const component152Data = {
    className: "component-20",
    buttonProps: button3Data,
};

const button4Data = {
    children: "Défi N°7",
    className: "button-3",
};

const component153Data = {
    className: "component-21",
    buttonProps: button4Data,
};

const button5Data = {
    children: "Défi N°8",
    className: "button-15",
};

const component154Data = {
    className: "component-22",
    buttonProps: button5Data,
};

const button6Data = {
    children: "Défi N°9",
    className: "button",
};

const component155Data = {
    className: "component-23",
    buttonProps: button6Data,
};

const button7Data = {
    children: "Défi N°10",
    className: "button-4",
};

const component156Data = {
    className: "component-24",
    buttonProps: button7Data,
};

const button8Data = {
    children: "Défi N°11",
    className: "button-5",
};

const component157Data = {
    className: "component-25",
    buttonProps: button8Data,
};

const button9Data = {
    children: "Défi N°12",
    className: "button-6",
};

const component158Data = {
    className: "component-26",
    buttonProps: button9Data,
};

const button10Data = {
    children: "Défi N°13",
    className: "button-7",
};

const component159Data = {
    className: "component-27",
    buttonProps: button10Data,
};

const phaseCDfisData = {
    lesDfis: "Les Défis",
    retour: "Retour",
    component16: "/img/component-16-1@2x.png",
    component17: "/img/component-17@2x.png",
    component18: "/img/component-18-1@2x.png",
    group39: "/img/group-39@1x.png",
    component1522Props: component1522Data,
    component151Props: component151Data,
    component152Props: component152Data,
    component153Props: component153Data,
    component154Props: component154Data,
    component155Props: component155Data,
    component156Props: component156Data,
    component157Props: component157Data,
    component158Props: component158Data,
    component159Props: component159Data,
};

const phase1Data = {
    phaseA: "Phase A",
};

const phase2Data = {
    phaseA: "Phase B",
    className: "phase-2",
};

const phase31Data = {
    phaseA: "Phase E",
};

const phasesData = {
    phase1Props: phase1Data,
    phase2Props: phase2Data,
    phase3Props: phase31Data,
};

const button11Data = {
    children: "Défi N°5",
    className: "button-1-1",
};

const component1510Data = {
    className: "component-19-1",
    buttonProps: button11Data,
};

const button12Data = {
    children: "Défi N°6",
    className: "button-1-2",
};

const component1511Data = {
    className: "component-20-1",
    buttonProps: button12Data,
};

const button13Data = {
    children: "Défi N°7",
    className: "button-8",
};

const component1512Data = {
    className: "component-21-1",
    buttonProps: button13Data,
};

const button14Data = {
    children: "Défi N°8",
    className: "button-1-3",
};

const component1513Data = {
    className: "component-22-1",
    buttonProps: button14Data,
};

const button15Data = {
    children: "Défi N°9",
    className: "button-1",
};

const component1514Data = {
    className: "component-23-1",
    buttonProps: button15Data,
};

const button16Data = {
    children: "Défi N°10",
    className: "button-9",
};

const component1515Data = {
    className: "component-24-1",
    buttonProps: button16Data,
};

const button17Data = {
    children: "Défi N°11",
    className: "button-10",
};

const component1516Data = {
    className: "component-25-1",
    buttonProps: button17Data,
};

const button18Data = {
    children: "Défi N°12",
    className: "button-11",
};

const component1517Data = {
    className: "component-26-1",
    buttonProps: button18Data,
};

const button19Data = {
    children: "Défi N°13",
    className: "button-12",
};

const component1518Data = {
    className: "component-27-1",
    buttonProps: button19Data,
};

const phaseCDfis2Data = {
    lesDfis: "Les Défis",
    retour: "Retour",
    component15: "/img/component-15@2x.png",
    component16: "/img/component-16@2x.png",
    component17: "/img/component-17@2x.png",
    component18: "/img/component-18@2x.png",
    group39: "/img/group-39@1x.png",
    component151Props: component1510Data,
    component152Props: component1511Data,
    component153Props: component1512Data,
    component154Props: component1513Data,
    component155Props: component1514Data,
    component156Props: component1515Data,
    component157Props: component1516Data,
    component158Props: component1517Data,
    component159Props: component1518Data,
};

const phase4Data = {
    phaseA: "Phase A",
};

const phase5Data = {
    phaseA: "Phase B",
    className: "phase-4",
};

const phase32Data = {
    phaseA: "Phase E",
};

const phases2Data = {
    phase1Props: phase4Data,
    phase2Props: phase5Data,
    phase3Props: phase32Data,
};

const group371Data = {
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "8",
    number8: "9",
    number9: "7",
    number10: "10",
    number11: "11",
    number12: "12",
    number13: "13",
    total: "Total",
};

const group372Data = {
    number1: "5",
    number2: "0",
    number3: "5",
    number4: "X",
    number5: "X",
    number6: "X",
    number7: "X",
    number8: "X",
    number9: "X",
    number10: "X",
    number11: "X",
    number12: "X",
    number13: "X",
    total: "10",
    className: "group-38-2",
};

const group392Data = {
    className: "group-39-2",
};

const phaseCD4Data = {
    phaseC: "Phase C",
    retour: "Retour",
    suivant: "Suivant",
    dfiN4LaMlodieEnsorceleuse: "Défi n°4 : La mélodie ensorceleuse",
    chaqueTapeValideVaut5Points: "Chaque étape validée vaut 5 points",
    surname: "Le robot s’arrête sur le blason pour jouer une musique",
    x2LeMinotaureSeTrouveSurLeRobot: <React.Fragment>  2. Le Minotaure se trouve   <br />      sur le robot</React.Fragment>,
    x3LeRobotSeTrouv: <React.Fragment>  3. Le robot se trouve <br />      arrêté sur la dalle bleue <br />      n°1.</React.Fragment>,
    x4LavantDuRobot: <React.Fragment>  4. L’avant du robot est <br />      orienté vers l’Est.</React.Fragment>,
    group371Props: group371Data,
    group372Props: group372Data,
    group39Props: group392Data,
};

const group312Data = {
    className: "group-31-1",
};

const group373Data = {
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "8",
    number8: "9",
    number9: "7",
    number10: "10",
    number11: "11",
    number12: "12",
    number13: "13",
    total: "Total",
};

const group374Data = {
    number1: "5",
    number2: "0",
    number3: "5",
    number4: "X",
    number5: "X",
    number6: "X",
    number7: "X",
    number8: "X",
    number9: "X",
    number10: "X",
    number11: "X",
    number12: "X",
    number13: "X",
    total: "10",
    className: "group-38-3",
};

const group393Data = {
    className: "group-39-3",
};

const phaseCD42Data = {
    phaseC: "Phase C",
    retour: "Retour",
    suivant: "Suivant",
    dfiN4LaMlodieEnsorceleuse: "Défi n°4 : La mélodie ensorceleuse",
    chaqueTapeValideVaut5Points: "Chaque étape validée vaut 5 points",
    surname: "Le robot s’arrête sur le blason pour jouer une musique",
    group31Props: group312Data,
    group371Props: group373Data,
    group372Props: group374Data,
    group39Props: group393Data,
};

const group303Data = {
    className: "group-30-2",
};

const group314Data = {
    className: "group-31-3",
};

const group324Data = {
    className: "group-32-3",
};

const group3822Data = {
    group34: "/img/group-34@2x.png",
    line1: "/img/line-1@1x.png",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "8",
    number8: "9",
    number9: "7",
    number10: "10",
    number11: "11",
    number12: "12",
    number13: "13",
    total: "Total",
    number14: "5",
    number15: "0",
    number16: "5",
    x1: "X",
    x2: "X",
    x3: "X",
    x4: "X",
    x5: "X",
    x6: "X",
    x7: "X",
    x8: "X",
    x9: "X",
    x10: "X",
    number17: "10",
};

const group395Data = {
    className: "group-39-5",
};

const phaseCD1Data = {
    phaseC: "Phase C",
    retour: "Retour",
    suivant: "Suivant",
    dfiN4LaMlodieEnsorceleuse: "Défi n°4 : La mélodie ensorceleuse",
    chaqueTapeValideVaut5Points: "Chaque étape validée vaut 5 points",
    group30Props: group303Data,
    group31Props: group314Data,
    group32Props: group324Data,
    group3822Props: group3822Data,
    group39Props: group395Data,
};

const group315Data = {
    className: "group-31-4",
};

const group325Data = {
    className: "group-32-4",
};

const group375Data = {
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "8",
    number8: "9",
    number9: "7",
    number10: "10",
    number11: "11",
    number12: "12",
    number13: "13",
    total: "Total",
};

const group376Data = {
    number1: "5",
    number2: "0",
    number3: "5",
    number4: "X",
    number5: "X",
    number6: "X",
    number7: "X",
    number8: "X",
    number9: "X",
    number10: "X",
    number11: "X",
    number12: "X",
    number13: "X",
    total: "10",
    className: "group-38-4",
};

const group384Data = {
    group34: "/img/group-34-1@2x.png",
    line1: "/img/line-1-1@1x.png",
    group371Props: group375Data,
    group372Props: group376Data,
};

const group396Data = {
    className: "group-39-6",
};

const phaseCD12Data = {
    phaseC: "Phase C",
    retour: "Retour",
    suivant: "Suivant",
    dfiN4LaMlodieEnsorceleuse: "Défi n°4 : La mélodie ensorceleuse",
    chaqueTapeValideVaut5Points: "Chaque étape validée vaut 5 points",
    group30: "/img/group-30@3x.png",
    group31Props: group315Data,
    group32Props: group325Data,
    group384Props: group384Data,
    group39Props: group396Data,
};

const connexionArbitreData = {
    seConnecter: "Se connecter",
    identifiant: "Identifiant",
    inputType1: "text",
    inputPlaceholder1: "ex : arbitre",
    motDePasse: "Mot de passe",
    inputType2: "password",
    inputPlaceholder2: "***********",
    connexion: "Connexion",
    motDePasseOubli: "mot de passe oublié ?",
};

const connexionData = {
    seConnecter: "Se connecter",
    identifiant: "Identifiant",
    exArbitre: "ex : arbitre",
    motDePasse: "Mot de passe",
    text1: "***********",
    connexion: "Connexion",
    motDePasseOubli: "mot de passe oublié ?",
    group23: "/img/group-23@2x.png",
};

const connexion3Data = {
    title: "Se connecter",
    identifiant: "Identifiant",
    inputType1: "text",
    inputPlaceholder1: "ex : brainus",
    motDePasse: "Mot de passe",
    inputType2: "password",
    inputPlaceholder2: "***********",
    connexion: "Connexion",
    motDePasseOubli: "mot de passe oublié ?",
    group13: "/img/group-23@2x.png",
};

