const item = {}

item.blackBelt = {
    subtitle: t('item.blackBelt.subtitle'),
    type: "held",
     evo: true,
    info: function() {return t('item.blackBelt.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blackGlasses = {
    subtitle: t('item.blackGlasses.subtitle'),
    type: "held",
    info: function() {return t('item.blackGlasses.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charcoal = {
    subtitle: t('item.charcoal.subtitle'),
    type: "held",
    info: function() {return t('item.charcoal.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonFang = {
    subtitle: t('item.dragonFang.subtitle'),
    type: "held",
    evo: true,
    info: function() {return t('item.dragonFang.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyFeather = {
    subtitle: t('item.fairyFeather.subtitle'),
    type: "held",
    info: function() {return t('item.fairyFeather.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.hardStone = {
    subtitle: t('item.hardStone.subtitle'),
    type: "held",
    info: function() {return t('item.hardStone.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.magnet = {
    subtitle: t('item.magnet.subtitle'),
    type: "held",
    info: function() {return t('item.magnet.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metalCoat = {
    subtitle: t('item.metalCoat.subtitle'),
    type: "held",
    evo: true,
    info: function() {return t('item.metalCoat.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.miracleSeed = {
    subtitle: t('item.miracleSeed.subtitle'),
    type: "held",
    info: function() {return t('item.miracleSeed.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mysticWater = {
    subtitle: t('item.mysticWater.subtitle'),
    type: "held",
    info: function() {return t('item.mysticWater.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    subtitle: t('item.neverMeltIce.subtitle'),
    type: "held",
    info: function() {return t('item.neverMeltIce.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonBarb = {
    subtitle: t('item.poisonBarb.subtitle'),
    type: "held",
    info: function() {return t('item.poisonBarb.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sharpBeak = {
    subtitle: t('item.sharpBeak.subtitle'),
    type: "held",
    info: function() {return t('item.sharpBeak.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silkScarf = {
    subtitle: t('item.silkScarf.subtitle'),
    type: "held",
    info: function() {return t('item.silkScarf.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silverPowder = {
    subtitle: t('item.silverPowder.subtitle'),
    type: "held",
    info: function() {return t('item.silverPowder.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.softSand = {
    subtitle: t('item.softSand.subtitle'),
    type: "held",
    info: function() {return t('item.softSand.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.spellTag = {
    subtitle: t('item.spellTag.subtitle'),
    type: "held",
    info: function() {return t('item.spellTag.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    subtitle: t('item.twistedSpoon.subtitle'),
    type: "held",
    info: function() {return t('item.twistedSpoon.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.eviolite = {
    type: "held",
    info: function() {return t('item.eviolite.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    type: "held",
    info: function() {return t('item.lightClay.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.mentalHerb = {
    type: "held",
    info: function() {return t('item.mentalHerb.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.flameOrb = {
    type: "held",
    info: function() {return t('item.flameOrb.info', { v: this.power().toFixed(2), tagBurn: tagBurn })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.toxicOrb = {
    type: "held",
    info: function() {return t('item.toxicOrb.info', { v: this.power().toFixed(2), tagPoisoned: tagPoisoned })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceBand = {
    type: "held",
    info: function() {return t('item.choiceBand.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceSpecs = {
    type: "held",
    info: function() {return t('item.choiceSpecs.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.lifeOrb = {
    type: "held",
    info: function() {return t('item.lifeOrb.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.assaultVest = {
    type: "held",
    info: function() {return t('item.assaultVest.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.clearAmulet = {
    type: "held",
    info: function() {return t('item.clearAmulet.info', { v: Math.floor(this.power()) })},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.ejectPack = {
    type: "held",
    info: function() {return t('item.ejectPack.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.ejectButton = {
    type: "held",
    info: function() {return t('item.ejectButton.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.quickClaw = {
    type: "held",
    info: function() {return t('item.quickClaw.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.loadedDice = {
    type: "held",
    info: function() {return t('item.loadedDice.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metronome = {
    type: "held",
    info: function() {return t('item.metronome.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.powerHerb = {
    type: "held",
    info: function() {return t('item.powerHerb.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.luckyPunch = {
    type: "held",
    info: function() {return t('item.luckyPunch.info', { v: this.power().toFixed(2) })},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.laggingTail = {
    type: "held",
    info: function() {return t('item.laggingTail.info', { v: this.power().toFixed(2) })},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.weaknessPolicy = {
    type: "held",
    info: function() {return t('item.weaknessPolicy.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.heavyDutyBoots = {
    type: "held",
    info: function() {return t('item.heavyDutyBoots.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.leftovers = {
    type: "held",
    info: function() {return t('item.leftovers.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}



item.bugGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.bugGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.darkGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.darkGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.dragonGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.electricGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.electricGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.fairyGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fightingGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.fightingGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fireGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.fireGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.flyingGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.flyingGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.ghostGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.ghostGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.grassGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.grassGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.groundGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.groundGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.iceGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.iceGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.normalGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.normalGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.poisonGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.psychicGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.psychicGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.rockGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.rockGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.steelGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.steelGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.waterGem = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.waterGem.info', { v: this.power().toFixed(2) })},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}













item.luckIncense = {
    type: "held",
    info: function() {return t('item.luckIncense.info', { v: this.power() })},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.pureIncense = {
    type: "held",
    info: function() {return t('item.pureIncense.info', { v: this.power() })},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.luckyEgg = {
    type: "held",
    info: function() {return t('item.luckyEgg.info', { v: this.power() })},
    power : function() { return 40+(10*returnItemLevel(this.id))}
}

item.shinyCharm = {
    type: "held",
    info: function() {return t('item.shinyCharm.info', { v: this.power() })},
    power : function() { return 0+(10*returnItemLevel(this.id))}
}


item.occaBerry = {
    subtitle: t('item.charcoal.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.occaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    subtitle: t('item.mysticWater.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.passhoBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    subtitle: t('item.magnet.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.wacanBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    subtitle: t('item.miracleSeed.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.rindoBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    subtitle: t('item.neverMeltIce.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.yacheBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    subtitle: t('item.blackBelt.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.chopleBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    subtitle: t('item.poisonBarb.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.kebiaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    subtitle: t('item.softSand.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.shucaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    subtitle: t('item.sharpBeak.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.cobaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    subtitle: t('item.twistedSpoon.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.payapaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    subtitle: t('item.silverPowder.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.tangaBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    subtitle: t('item.hardStone.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.chartiBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    subtitle: t('item.spellTag.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.kasibBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    subtitle: t('item.dragonFang.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.habanBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    subtitle: t('item.blackGlasses.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.colburBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    subtitle: t('item.metalCoat.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.babiriBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.roseliBerry = {
    subtitle: t('item.fairyFeather.subtitle'),
    type: "held",
    sort: "berry",
    info: function() {return t('item.roseliBerry.info', { v: this.power() })},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}


item.terrainExtender = {
    type: "held",
    info: function() {return t('item.terrainExtender.info', { tagTrickRoom: tagTrickRoom, tagWeirdRoom: tagWeirdRoom, tagCrossRoom: tagCrossRoom, tagLightScreen: tagLightScreen, tagSafeguard: tagSafeguard, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.dampRock = {
    type: "held",
    info: function() {return t('item.dampRock.info', { tagRainy: tagRainy, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.heatRock = {
    type: "held",
    info: function() {return t('item.heatRock.info', { tagSunny: tagSunny, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.icyRock = {
    type: "held",
    info: function() {return t('item.icyRock.info', { tagHail: tagHail, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.smoothRock = {
    type: "held",
    info: function() {return t('item.smoothRock.info', { tagSandstorm: tagSandstorm, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.electricSeed = {
    type: "held",
    info: function() {return t('item.electricSeed.info', { tagElectricTerrain: tagElectricTerrain, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.grassySeed = {
    type: "held",
    info: function() {return t('item.grassySeed.info', { tagGrassyTerrain: tagGrassyTerrain, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.mistySeed = {
    type: "held",
    info: function() {return t('item.mistySeed.info', { tagMistyTerrain: tagMistyTerrain, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.foggySeed = {
    type: "held",
    info: function() {return t('item.foggySeed.info', { tagFoggy: tagFoggy, v: this.power() })},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}








item.bottleCap = {
    type: "key",
    info: function() {return t('item.bottleCap.info')},
}

item.goldenBottleCap = {
    type: "key",
    info: function() {return t('item.goldenBottleCap.info')},
}




item.timeCandy = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 10*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = t('ui.cant_do_that_right_now'); openTooltip()}  },
    info: function() {return t('item.timeCandy.info')},
}

item.timeCandyXL = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = t('ui.cant_do_that_right_now'); openTooltip()}  },
    info: function() {return t('item.timeCandyXL.info')},
}

item.festivalTicket = {
    type: "key",
    usable: true,
    effect: function() {
        seasonalSwitch() 
    },
    info: function() {return t('item.festivalTicket.info')},
}






item.rareCandy = {
    type: 'key',
    itemToUse: true,
    info: function() {return t('item.rareCandy.info')},
}

item.abilityPatch = {
    type: 'key',
    itemToUse: true,
    info: function() {return t('item.abilityPatch.info')},
}

item.abilityCapsule = {
    type: 'key',
    itemToUse: true,
    info: function() {return t('item.abilityCapsule.info')},
}

item.heartScale = {
    type: 'key',
    itemToUse: true,
    info: function() {return t('item.heartScale.info')},
}

item.energyRoot = {
    type: "key",
    usable: true,
    effect: function() {  if(saved.geneticOperation > 1) {afkSecondsGenetics += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = t('ui.cant_do_that_right_now'); openTooltip()}  },
    info: function() {return t('item.energyRoot.info')},
}

item.fashionCase = {
    type: 'key',
    usable: true,
    info: function() {return t('item.fashionCase.info')},
    effect: function() {

    let pickedDecor = []

    for (const i in item){
        if (item[i].type !== "decor") continue
        if (item[i].rarity == undefined) continue
        if (item[i].rarity == "rare" && rng(0.1)) pickedDecor.push(i)
        if (item[i].rarity == "common") pickedDecor.push(i)
    }

    pickedDecor = arrayPick(pickedDecor)


        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").style.display = "inline"
        document.getElementById("tooltipTop").innerHTML = `<img src="img/decor/${pickedDecor}.png" style="scale:2">`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >${t('ui.decor_got', { v: format(pickedDecor, 'item') })}</div>
        </div>
        `

    item[pickedDecor].got++
    this.got--;
    updateItemBag()
    openTooltip()


    

    },
}



item.neutralMint = {
    type: 'key',
    itemToUse: true,
    info: function() {return t('item.neutralMint.info')},
}



item.autoRefightTicket = {
    type: "key",
    info: function() {return t('item.autoRefightTicket.info')},
}














item.yellowApricorn = {
    type: "key",
    info: function() {return t('item.yellowApricorn.info')},
}

item.pinkApricorn = {
    type: "key",
    info: function() {return t('item.yellowApricorn.info')},
}

item.greenApricorn = {
    type: "key",
    info: function() {return t('item.yellowApricorn.info')},
}

item.whiteApricorn = {
    type: "key",
    info: function() {return t('item.whiteApricorn.info')},
}

item.blackApricorn = {
    type: "key",
    info: function() {return t('item.blackApricorn.info')},
}







item.megaShard = {
    type: "key",
    info: function() {return t('item.megaShard.info')},
}

item.megaPiece = {
    type: "key",
    info: function() {return t('item.megaShard.info')},
}

item.megaChunk = {
    type: "key",
    info: function() {return t('item.megaShard.info')},
}

item.megaCluster = {
    type: "key",
    info: function() {return t('item.megaShard.info')},
}

item.primalEarth = {
    type: "key",
    rotation: 2,
    itemToUse : true,
    info: function() {return t('item.primalEarth.info')},
}


item.thunderousRock = {
    type: "key",
    rotation: 1,
    info: function() {return t('item.primalEarth.info')},
}

item.articRock = {
    type: "key",
    rotation: 1,
    info: function() {return t('item.primalEarth.info')},
}

item.ancientOrchid = {
    type: "key",
    rotation: 2,
    info: function() {return t('item.primalEarth.info')},
}

item.futureDisk = {
    type: "key",
    rotation: 5,
    info: function() {return t('item.primalEarth.info')},
}

item.ancientKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return t('item.primalEarth.info')},
    
}

item.steelKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return t('item.primalEarth.info')},
}

item.frozenKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return t('item.primalEarth.info')},
}

item.aetherKeycard = {
    type: "key",
    rotation: 4,
    info: function() {return t('item.primalEarth.info')},
}

item.wormholeResidue = {
    type: "key",
    rotation: 4,
    info: function() {return t('item.primalEarth.info')},
}

item.futureContraption = {
    type: "key",
    rotation: 5,
    info: function() {return t('item.primalEarth.info')},
}


item.redChain = {
    type: "key",
    rotation: 6,
    info: function() {return t('item.primalEarth.info')},
}

item.wisdomPetal = {
    type: "key",
    rotation: 6,
    info: function() {return t('item.primalEarth.info')},
}

item.epochFeather = {
    type: "key",
    rotation: 1,
    info: function() {return t('item.primalEarth.info')},
}

item.pokeflute = {
    type: "key",
    rotation: 1,
    info: function() {return t('item.primalEarth.info')},
}










item.oldGateau = {
    type: "key",
    event: `halloween`,
    // Hors saison (fiche du Dictionnaire), on affiche la fin de la saison d'Halloween au lieu de planter
    info: function() { const s = season[saved.currentSeason] ?? season.halloween; return t('item.oldGateau.info', { v: s.end.month, v2: s.end.day }) },
}































item.hpUp = {
    subtitle: `(Hp)`,
    type: 'key',
    vitamin: true,
    info: function() {return t('item.hpUp.info')},
}

item.protein = {
    subtitle: t('item.protein.subtitle'),
    type: 'key',
    vitamin: true,
    info: function() {return t('item.protein.info')},
}

item.iron = {
    subtitle: t('item.iron.subtitle'),
    type: 'key',
    vitamin: true,
    info: function() {return t('item.iron.info')},
}

item.calcium = {
    subtitle: t('item.calcium.subtitle'),
    type: 'key',
    vitamin: true,
    info: function() {return t('item.calcium.info')},
}

item.zinc = {
    subtitle: t('item.zinc.subtitle'),
    type: 'key',
    vitamin: true,
    info: function() {return t('item.zinc.info')},
}

item.carbos = {
    subtitle: t('item.carbos.subtitle'),
    type: 'key',
    vitamin: true,
    info: function() {return t('item.carbos.info')},
}




item.waterStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.thunderStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.sunStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}

item.linkStone = {
    evo: true,
    info: function() {return t('item.linkStone.info', { wildAreaLevel4: wildAreaLevel4 })},
}

item.ovalStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.moonStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.leafStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.iceStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}

item.fireStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.duskStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}
item.dawnStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}

item.shinyStone = {
    evo: true,
    info: function() {return t('item.waterStone.info', { wildAreaLevel2: wildAreaLevel2 })},
}

item.oddRock = {
    evo: true,
    info: function() {return t('item.linkStone.info', { wildAreaLevel4: wildAreaLevel4 })},
}


item.everstone = {
    rename: `neverstone`,
    type: "key",
    genetics: true,
    info: function() {return t('item.everstone.info')},
}

item.powerAnklet = {
    subtitle: t('item.carbos.subtitle'),
    type: "key",
    genetics: true,
    info: function() {return t('item.powerAnklet.info')},
}

item.powerBand = {
    subtitle: t('item.zinc.subtitle'),
    type: "key",
    genetics: true,
    info: function() {return t('item.powerBand.info')},
}

item.powerBelt = {
    subtitle: t('item.iron.subtitle'),
    type: "key",
    genetics: true,
    info: function() {return t('item.powerBelt.info')},
}

item.powerBracer = {
    subtitle: t('item.protein.subtitle'),
    type: "key",
    genetics: true,
    info: function() {return t('item.powerBracer.info')},
}

item.powerLens = {
    subtitle: t('item.calcium.subtitle'),
    type: "key",
    genetics: true,
    info: function() {return t('item.powerLens.info')},
}

item.powerWeight = {
    subtitle: `(Hp)`,
    type: "key",
    genetics: true,
    info: function() {return t('item.powerWeight.info')},
}

item.machoBrace = {
    type: "key",
    genetics: true,
    info: function() {return t('item.machoBrace.info')},
}

item.lockCapsule = {
    type: "key",
    genetics: true,
    info: function() {return t('item.lockCapsule.info')},
}

item.destinyKnot = {
    type: "key",
    genetics: true,
    info: function() {return t('item.destinyKnot.info')},
}













item.abomasite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbomasnow.id },
}

item.absolite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbsol.id },
}

item.aerodactylite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAerodactyl.id },
}

item.aggronite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAggron.id },
}

item.alakazite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAlakazam.id },
}

item.altarianite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAltaria.id },
}

item.ampharosite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAmpharos.id },
}

item.audinite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAudino.id },
}

item.banettite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBanette.id },
}

item.barbaracite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBarbaracle.id },
}

item.baxcaliburite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBaxcalibur.id },
}

item.beedrillite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBeedrill.id },
}

item.blastoisinite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlastoise.id },
}

item.blazikenite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlaziken.id },
}

item.cameruptite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCamerupt.id },
}

item.charizarditeX = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardX.id },
}

item.charizarditeY = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardY.id },
}

item.diancite = {
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDiancie.id },
}

item.dragonitite = {
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDragonite.id },
}

item.falinksite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaFalinks.id },
}

item.galladite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGallade.id },
}

item.garchompite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGarchomp.id },
}

item.glalitite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGlalie.id },
}

item.gardevoirite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGardevoir.id },
}

item.gengarite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGengar.id },
}

item.gyaradosite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGyarados.id },
}

item.heracronite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHeracross.id },
}

item.houndoominite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHoundoom.id },
}

item.hawluchanite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHawlucha.id },
}

item.kangaskhanite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaKangaskhan.id },
}

item.lopunnite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLopunny.id },
}

item.lucarionite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLucario.id },
}

item.manectite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaManectric.id },
}

item.mawilite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMawile.id },
}

item.medichamite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMedicham.id },
}

item.metagrossite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMetagross.id },
}

item.mewtwoniteX = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoX.id },
}

item.mewtwoniteY = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoY.id },
}

item.pidgeotite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPidgeot.id },
}

item.pyroarite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPyroar.id },
}


item.pinsirite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPinsir.id },
}


item.raichutiteX = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuX.id },
}

item.raichutiteY = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuY.id },
}

item.sablenite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSableye.id },
}



item.salamencite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSalamence.id },
}

item.sceptilite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSceptile.id },
}

item.scizorite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaScizor.id },
}

item.sharpedonite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSharpedo.id },
}

item.slowbronite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSlowbro.id },
}

item.steelixite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSteelix.id },
}

item.swampertite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSwampert.id },
}

item.tyranitarite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaTyranitar.id },
}

item.venusaurite = {
    
    evo: true,
    info: function() {return t('item.abomasite.info', { v: format(this.heldBonusPkmn(), 'pkmn'), v2: this.heldBonusPower().toFixed(2) })},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaVenusaur.id },
}

















item.magazineSubscription = {
    type: "key",
    info: function() {return t('item.magazineSubscription.info')},
}

item.battlePass = {
    type: "key",
    info: function() {return t('item.battlePass.info')},
}

item.replicatorUpgradeS = {
    type: "key",
    info: function() {return t('item.replicatorUpgradeS.info')},
}

item.replicatorUpgradeE = {
    type: "key",
    info: function() {return t('item.replicatorUpgradeE.info')},
}



item.mysteryEgg = {
    info: function() {return t('item.mysteryEgg.info')},
    hidden:true
}

item.tmDummy = {
    hidden:true
}

item.nothing = {
    hidden:true
}






item.buginiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.buginiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `bug`
}

item.darkiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.darkiniumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dark`
}

item.dragoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.dragoniumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dragon`
}

item.electriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.electriumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `electric`
}

item.fairiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.fairiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fairy`
}

item.fightiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.fightiniumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fighting`
}

item.firiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.firiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fire`
}

item.flyiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.flyiniumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `flying`
}

item.ghostiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.ghostiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ghost`
}

item.grassiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.grassiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `grass`
}

item.groundiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.groundiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ground`
}

item.iciumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.iciumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ice`
}

item.normaliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.normaliumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `normal`
}

item.poisoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.poisoniumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `poison`
}

item.psychiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.psychiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `psychic`
}

item.rockiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.rockiumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `rock`
}

item.steeliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.steeliumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `steel`
}

item.wateriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return t('item.wateriumZ.info', { v: this.power() })},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `water`
}




//normal
item.quickAttackTm  = {}
item.swiftTm  = {}
item.strengthTm  = {}
//fire
item.emberTm  = {}
item.incinerateTm = {}
item.flamethrowerTm = {}
//electric    
item.nuzzleTm = {}
item.thunderPunchTm = {}
item.thunderboltTm = {}
//ground
item.mudSlapTm = {}
item.bulldozeTm = {}
item.earthquakeTm = {}
//steel
item.bulletPunchTm = {}
item.metalClawTm = {}
item.flashCannonTm = {}
//flying
item.peckTm = {}
item.acrobaticsTm = {}
item.flyTm = {}
//poison
item.acidTm = {}
item.crossPoisonTm = {}
item.sludgeBombTm = {}
//ice
item.iceShardTm = {}
item.avalancheTm = {}
item.iceBeamTm = {}
//bug
item.twineedleTm = {}
item.bugBiteTm = {}
item.bugBuzzTm = {}
//water
item.waterGunTm = {}
item.waterPulseTm = {}
item.aquaTailTm = {}
//grass
item.leafageTm = {}
item.magicalLeafTm = {}
item.leafBladeTm = {}
//fighting
item.rockSmashTm = {}
item.forcePalmTm = {}
item.auraSphereTm = {}
//psychic
item.confusionTm = {}
item.psychoCutTm = {}
item.psychicTm = {}
//rock
item.rockThrowTm = {}
item.rockSlideTm = {}
item.powerGemTm = {}
//ghost
item.lickTm = {}
item.hexTm = {}
item.shadowBallTm = {}
//dragon
item.twisterTm = {}
item.dragonTailTm = {}
item.dragonRushTm = {}
item.dragonPulseTm = {}
//fighting
item.pursuitTm = {}
item.biteTm = {}
item.darkPulseTm = {}
//fairy
item.disarmingVoiceTm = {}
item.dazzlingGleamTm = {}
item.playRoughTm = {}

//shop


item.tackleTm = {}
item.quickAttackTm = {}
item.leerTm = {}


item.bulkUpTm = {}
item.thunderWaveTm = {}
item.toxicTm = {}
item.willOWispTm = {}

item.calmMindTm = {}
item.sunnyDayTm = {}
item.rainDanceTm = {}

item.crunchTm = {}
item.xScissorTm = {}
item.moonblastTm = {}

item.fireBlastTm = {}
item.hydroPumpTm = {}
item.thunderTm = {}
item.hyperBeamTm = {}

//frontier
item.swaggerTm = {}
item.ironDefenseTm = {}
item.feintAttackTm = {}
item.chillingWaterTm = {}
item.silverWindTm = {}
item.avalancheTm = {}
item.knockOffTm = {}
item.ominousWindTm = {}
item.flameChargeTm = {}
item.acidSprayTm = {}

item.hailTm = {}
item.fogTm = {}
item.sandstormTm = {}
item.electricTerrainTm = {}
item.mistyTerrainTm = {}
item.grassyTerrainTm = {}

item.nastyPlotTm = {}
item.swordsDanceTm = {}
item.voltSwitchTm = {}
item.uTurnTm = {}

item.chargeBeamTm = {}
item.dischargeTm = {}
item.scorchingSandsTm = {}
item.airShlashTm = {rename:`airSlashTm`}
item.poisonJabTm = {}
item.liquidationTm = {}
item.energyBallTm = {}
item.skyUppercutTm = {}
item.dracoMeteorTm = {}
item.spiritBreakTm = {}




item.trickRoomTm = {}
item.crossRoomTm = {}
item.weirdRoomTm = {}
item.safeguardTm = {}
item.lightScreenTm = {}



//memory

item.hydratationMemory = {rename:`hydrationMemory`}
item.sandVeilMemory = {}
item.snowCloakMemory = {}
item.marvelScaleMemory = {}
item.livingShieldMemory = {}
item.bigPecksMemory = {}
item.hyperCutterMemory = {}
item.synchronizeMemory = {}
item.iceBodyMemory = {}

item.rainDishMemory = {}
item.solarPowerMemory = {}
item.sandForceMemory = {}
item.scrappyMemory = {}

item.strongJawMemory = {}
item.toughClawsMemory = {}
item.ironFistMemory = {}
item.magicGuardMemory = {}

item.pickPocketMemory = {}







//decor


item.blueBarrette = { type: "decor", rarity: `common`} 
item.pinkBarrette = { type: "decor", rarity: `common`} 
item.greenBarrette = { type: "decor", rarity: `common`} 
item.blueBarrette = { type: "decor", rarity: `common`} 

item.blueFlower = { type: "decor", rarity: `common` } 
item.purpleFlower = { type: "decor", rarity: `common` } 
item.redFlower = { type: "decor", rarity: `common` } 

item.blueBalloon = { type: "decor", rarity: `common` } 
item.redBalloon = { type: "decor", rarity: `common` } 
item.greenBalloon = { type: "decor", rarity: `common` } 

item.professorHat = { type: "decor", rarity: `common` } 
item.academicHat = { type: "decor", rarity: `common` } 

item.redBall = { type: "decor", rarity: `common` } 
item.greenBall = { type: "decor", rarity: `common` } 
item.blueBall = { type: "decor", rarity: `common` } 

item.redHeaddress = { type: "decor", rarity: `common` } 
item.purpleHeaddress = { type: "decor", rarity: `common` } 
item.tealHeaddress = { type: "decor", rarity: `common` } 

item.blackTie = { type: "decor", rarity: `common` } 
item.whiteTie = { type: "decor", rarity: `common` } 
item.stripedTie = { type: "decor", rarity: `common` } 
item.greenTie = { type: "decor", rarity: `common` } 
item.orangeTie = { type: "decor", rarity: `common` } 
item.blueTie = { type: "decor", rarity: `common` } 

item.blackBowtie = { type: "decor", rarity: `common` } 
item.pinkBowtie = { type: "decor", rarity: `common` } 
item.blueBowtie = { type: "decor", rarity: `common` } 
item.yellowBowtie = { type: "decor", rarity: `common` } 

item.tealHeadband = { type: "decor", rarity: `common` } 
item.greenHeadband = { type: "decor", rarity: `common` } 
item.yellowHeadband = { type: "decor", rarity: `common` } 

item.blackScarf = { type: "decor", rarity: `common` } 
item.whiteScarf = { type: "decor", rarity: `common` } 
item.redScarf = { type: "decor", rarity: `common` } 
item.blueScarf = { type: "decor", rarity: `common` } 

item.yellowStar = { type: "decor", rarity: `common` } 
item.tealStar = { type: "decor", rarity: `common` } 
item.redStar = { type: "decor", rarity: `common` } 

item.blackMoustache = { type: "decor", rarity: `common` } 
item.whiteMoustache = { type: "decor", rarity: `common` } 

item.microphone = { type: "decor", rarity: `common` } 
item.oldUmbrella = { type: "decor", rarity: `common` } 
item.coloredParasol = { type: "decor", rarity: `common` } 
item.pokeballFlag = { type: "decor", rarity: `common` } 
item.pinkMushroom = { type: "decor", rarity: `common` } 
item.yellowStarBalloon = { type: "decor", rarity: `common` } 
item.blackSpecs = { type: "decor", rarity: `common` } 
item.googlySpecs = { type: "decor", rarity: `common` } 
item.topHat = { type: "decor", rarity: `common` } 
item.gentlemanHat = { type: "decor", rarity: `common` } 
item.silverTiara = { type: "decor", rarity: `common` } 


//rare decor
item.frillyApron = { type: "decor", rarity: `rare` } 
item.chefHat = { type: "decor", rarity: `rare` } 
item.fluffyBeard = { type: "decor", rarity: `rare` } 
item.hummingNote = { type: "decor", rarity: `rare` } 
item.prettyDewdrop = { type: "decor", rarity: `rare` } 
item.spotlight = { type: "decor", rarity: `rare` } 
item.glitterPowder = { type: "decor", rarity: `rare` } 
item.confetti = { type: "decor", rarity: `rare` } 
item.comet = { type: "decor", rarity: `rare` } 
item.gorgeousSpecs = { type: "decor", rarity: `rare` } 
item.mysticSmoke = { type: "decor", rarity: `rare` } 













item.flashHerbaMemory = { rarity: "common", }
item.flashFaeMemory = { rarity: "common", }
item.flashPsychaMemory = { rarity: "common", }
item.flashCryoMemory = { rarity: "common", }
item.flashVenumMemory = { rarity: "common", }
item.flashUmbraMemory = { rarity: "common", }
item.flashPyroMemory = { rarity: "common", }
item.flashAquaMemory = { rarity: "common", }
item.flashElectroMemory = { rarity: "common", }
item.liberoMemory = { rarity: "common", }
item.recklessMemory = { rarity: "common", }
item.filterMemory = { rarity: "common", }
item.justifiedMemory = { rarity: "common", }
item.angerPointMemory = { rarity: "common", }
item.sharpnessMemory = { rarity: "common", }
item.gutsMemory = { rarity: "common", }
item.multiscaleMemory = { rarity: "common", }
item.noGuardMemory = { rarity: "common",  typings : ["fighting"] }
item.ambidextrousMemory = { rarity: "common",  typings : ["bug"] }
item.adaptabilityMemory = { rarity: "common",  typings : ["normal"] }
item.thickFatMemory = { rarity: "common", }
item.levitateMemory = { rarity: "common", }
item.sheerForceMemory = { rarity: "common", }
item.strategistMemory = { rarity: "common", }
item.moxieMemory = { rarity: "common", }
item.unburdenMemory = { rarity: "common", }
item.dauntingLookMemory = { rarity: "common", }
item.intimidateMemory = { rarity: "common", }
item.sandRushMemory = { rarity: "common", }
item.swiftSwimMemory = { rarity: "common", }
item.slushRushMemory = { rarity: "common", }
item.moltShedMemory = { rarity: "common", }
item.faeRushMemory = { rarity: "common", }
item.hyperconductorMemory = { rarity: "common", }
item.intangibleMemory = { rarity: "common", }
item.climaTactMemory = { rarity: "common", }
item.spikyPeltMemory = { rarity: "common", }
item.blackPeltMemory = { rarity: "common", }
item.pixiePeltMemory = { rarity: "common", rename:`fuzzyPeltMemory`}
item.fieryPeltMemory = { rarity: "common", }
item.moistPeltMemory = { rarity: "common", }
item.icyPeltMemory = { rarity: "common", }
item.sandyPeltMemory = { rarity: "common", }
item.grassyPeltMemory = { rarity: "common", }




//has
item.stonedMemory = { typings : ["rock"], rarity: "rare" }
item.staminaMemory = { typings : ["fighting"], rarity: "rare" }
item.gooeyMemory = { typings : ["poison"], rarity: "rare" }
item.shieldsDownMemory = { typings : ["steel"], rarity: "rare" }
item.costarMemory = { typings : ["fairy"], rarity: "rare" }
item.purifyingSaltMemory = { typings : ["rock"], rarity: "rare" }
item.scorchMemory = { typings : ["fire"], rarity: "rare" }
item.corrosionMemory = { typings : ["poison"], rarity: "rare" }
item.megaLauncherMemory = { typings : ["electric"], rarity: "rare" }
item.metalheadMemory = { typings : ["steel"], rarity: "rare" }
item.moodyMemory = { typings : ["normal"], rarity: "rare" }
item.mercilessMemory = { typings : ["dark"], rarity: "rare" }
item.colorSporeMemory = { typings : ["grass"], rarity: "rare" }
item.sandStreamMemory = { typings : ["ground"], rarity: "rare" }
item.snowWarningMemory = { typings : ["ice"], rarity: "rare" }
item.somberFieldMemory = { typings : ["dark"], rarity: "rare" }


//white exclusive
item.dancerMemory = { typings : ["fighting"], rarity: "white" }
item.cacophonyMemory = { typings : ["normal"], rarity: "white" }
item.windRiderMemory = { typings : ["flying"], rarity: "white" }
item.gorillaTacticsMemory = { typings : ["fighting"], rarity: "white" }
item.imposterMemory = { typings : ["dark"], rarity: "white" }
item.drizzleMemory = { typings : ["water"], rarity: "white" }
item.droughtMemory = { typings : ["fire"], rarity: "white" }
item.electricSurgeMemory = { typings : ["electric"], rarity: "white" }
item.grassySurgeMemory = { typings : ["grass"], rarity: "white" }
item.mistySurgeMemory = { typings : ["psychic"], rarity: "white" }
item.ferrilateMemory = { typings : ["steel"], rarity: "white" }
item.glaciateMemory = { typings : ["ice"], rarity: "white" }
item.terralateMemory = { typings : ["ground"], rarity: "white" }
item.toxilateMemory = { typings : ["poison"], rarity: "white" }
item.hydrolateMemory = { typings : ["water"], rarity: "white" }
item.pyrolateMemory = { typings : ["fire"], rarity: "white" }
item.chrysilateMemory = { typings : ["bug"], rarity: "white" }
item.galvanizeMemory = { typings : ["electric"], rarity: "white" }
item.gloomilateMemory = { typings : ["dark"], rarity: "white" }
item.espilateMemory = { typings : ["psychic"], rarity: "white" }
item.aerilateMemory = { typings : ["flying"], rarity: "white" }
item.pixilateMemory = { typings : ["fairy"], rarity: "white" }
item.verdifyMemory = { typings : ["grass"], rarity: "white" }
item.dragonMawMemory = { typings : ["dragon"], rarity: "white" }
item.iaidoMemory = { typings : ["steel"], rarity: "white" }




/*
item.blackCape = { type: "decor" } 
item.crown = { type: "decor" } 
item.determination = { type: "decor" } 
item.pinkHeartBalloon = { type: "decor" } 
item.silverTiara = { type: "decor" } 
*/

item.wealthyCoins = { type: "decor"} 
item.witchyHat = { type: "decor"} 


for (const i in item){
    item[i].id = i
    item[i].newItem = 0
    item[i].got = 0
}

//tms
for (const i in item){
    if (i.endsWith("Tm")) {
        item[i].move = i.slice(0, -2); 
        item[i].type = "tm";
        
        item[i].info = function () { return t('ui.use_teach_the_move_to_pokemon', { v: joinWithOr(move[item[i].move].moveset), v2: `<span data-move="${move[item[i].move].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(move[item[i].move].type)}">${format(move[item[i].move].id, 'move')}</span></span>` })}        
    }

    if (i.endsWith("Memory")) {
        item[i].ability = i.slice(0, -6); 
        item[i].type = "memory";
        
        item[i].image = "dark"
        

        if (item[i].typings && item[i].typings[0]!="normal") item[i].image = item[i].typings[0]
        else if (item[i].typings== undefined && ability[item[i].ability].type[0]!="all" && ability[item[i].ability].type[0]!="normal") item[i].image = ability[item[i].ability].type[0]

        if (item[i].typings!=undefined) item[i].info = function () { return t('ui.use_teach_the_ability_to_pokemon', { v: joinWithOr(item[i].typings), v2: `<span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id, 'ability')}</span></span>` })}        
        else item[i].info = function () { return t('ui.use_teach_the_ability_to_pokemon', { v: joinWithOr(ability[item[i].ability].type), v2: `<span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id, 'ability')}</span></span>` })}        
    }

    if (item[i].type == "decor") {
    item[i].itemToUse =  true,
    item[i].info = function () { return t('ui.use_unlock_this_cosmetic_for_selected')}
    }        

}

// ns : namespace des éléments listés (type, move, ability, pkmn)
function joinWithOr(list, ns = 'type') {
    if (list.includes("all")) return t('ui.join_all');

    const formatted = list.map(x => format(x, ns));
    const or = t('ui.join_or');
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} ${or} ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}${lang === 'en' ? ',' : ''} ${or} ${formatted[len - 1]}`;
}

// ns : namespace des éléments listés (type, move, ability, pkmn)
function joinWithAnd(list, ns = 'type') {
    if (list.includes("all")) return t('ui.join_all');

    const formatted = list.map(x => format(x, ns));
    const and = t('ui.join_and');
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} ${and} ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}${lang === 'en' ? ',' : ''} ${and} ${formatted[len - 1]}`;
}

