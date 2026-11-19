

const demeritBp = 150
const t4Base = 120

const ability = {}


//tier 1

ability.hydratation = {  
    rename: `hydration`,
    type: [`water`,`grass`],
    rarity: 1,
    info: function() {return t('ability.hydratation.info', { tagRainy: tagRainy })},
}

ability.sandVeil = {  
    type: [`ground`],
    rarity: 1,
    info: function() {return t('ability.sandVeil.info', { tagSandstorm: tagSandstorm })},
}

ability.snowCloak = {  
    type: [`ice`],
    rarity: 1,
    info: function() {return t('ability.snowCloak.info', { tagHail: tagHail })},
}

ability.grabGuard = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return t('ability.grabGuard.info')},
}

ability.waterGuard = {
    type: [`water`],
    rarity: 1,
    info: function() {return t('ability.waterGuard.info')},
}

ability.flameGuard = {
    type: [`fire`],
    rarity: 1,
    info: function() {return t('ability.flameGuard.info')},
}

ability.curseGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return t('ability.curseGuard.info')},
}

ability.poisonGuard = {
    type: [`poison`],
    rarity: 1,
    info: function() {return t('ability.poisonGuard.info')},
}

ability.iceGuard = {
    type: [`ice`],
    rarity: 1,
    info: function() {return t('ability.iceGuard.info')},
}

ability.psychicGuard = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return t('ability.psychicGuard.info')},
}

ability.fairyGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return t('ability.fairyGuard.info')},
}

ability.leafGuard = {
    type: [`grass`],
    rarity: 1,
    info: function() {return t('ability.leafGuard.info')},
}

ability.plainGuard = {
    type: [`normal`],
    rarity: 1,
    info: function() {return t('ability.plainGuard.info')},
}

ability.sinisterGuard = {
    type: [`dark`],
    rarity: 1,
    info: function() {return t('ability.sinisterGuard.info')},
}

ability.steelGuard = {
    type: [`steel`],
    rarity: 1,
    info: function() {return t('ability.steelGuard.info')},
}

ability.dragonGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return t('ability.dragonGuard.info')},
}

ability.bugGuard = {
    type: [`bug`],
    rarity: 1,
    info: function() {return t('ability.bugGuard.info')},
}

ability.rockGuard = {
    type: [`rock`],
    rarity: 1,
    info: function() {return t('ability.rockGuard.info')},
}

ability.groundGuard = {
    type: [`ground`],
    rarity: 1,
    info: function() {return t('ability.groundGuard.info')},
}

ability.flyingGuard = {
    type: [`flying`],
    rarity: 1,
    info: function() {return t('ability.flyingGuard.info')},
}

ability.insomnia = {
    type: [`all`],
    rarity: 1,
    info: function() {return t('ability.insomnia.info', { tagSleep: tagSleep })},
}

ability.immunity = {
    type: [`all`],
    rarity: 1,
    info: function() {return t('ability.immunity.info', { tagPoisoned: tagPoisoned })},
}

ability.limber = {
    type: [`all`],
    rarity: 1,
    info: function() {return t('ability.limber.info', { tagParalysis: tagParalysis })},
}

ability.ownTempo = {
    type: [`all`],
    rarity: 1,
    info: function() {return t('ability.ownTempo.info', { tagConfused: tagConfused })},
}

ability.magmaArmor = {
    type: [`fire`],
    rarity: 1,
    info: function() {return t('ability.magmaArmor.info', { tagFreeze: tagFreeze })},
}

ability.waterVeil = {
    type: [`water`, `ice`],
    rarity: 1,
    info: function() {return t('ability.waterVeil.info', { tagBurn: tagBurn })},
}

ability.marvelScale = {
    type: [`water`, `dragon`],
    rarity: 1,
    info: function() {return t('ability.marvelScale.info')},
}

ability.livingShield = {
    type: [`bug`,`grass`],
    rarity: 1,
    info: function() {return t('ability.livingShield.info')},
}


ability.overgrow = {
    type: [`grass`],
    rarity: 1,
    info: function() {return t('ability.overgrow.info')},
}

ability.blaze = {
    type: [`fire`],
    rarity: 1,
    info: function() {return t('ability.blaze.info')},
}

ability.swarm = {
    type: [`bug`],
    rarity: 1,
    info: function() {return t('ability.swarm.info')},
}

ability.torrent = {
    type: [`water`],
    rarity: 1,
    info: function() {return t('ability.torrent.info')},
}

ability.bastion = {
    type: [`steel`],
    rarity: 1,
    info: function() {return t('ability.bastion.info')},
}

ability.average = {
    type: [`normal`],
    rarity: 1,
    info: function() {return t('ability.average.info')},
}

ability.resolve = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return t('ability.resolve.info')},
}

ability.mistify = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return t('ability.mistify.info')},
}

ability.hexerei = {
    type: [`ghost`],
    rarity: 1,
    info: function() {return t('ability.hexerei.info')},
}

ability.glimmer = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return t('ability.glimmer.info')},
}

ability.skyward = {
    type: [`flying`],
    rarity: 1,
    info: function() {return t('ability.skyward.info')},
}

ability.draconic = {
    type: [`dragon`],
    rarity: 1,
    info: function() {return t('ability.draconic.info')},
}

ability.noxious = {
    type: [`poison`],
    rarity: 1,
    info: function() {return t('ability.noxious.info')},
}

ability.solid = {
    type: [`rock`],
    rarity: 1,
    info: function() {return t('ability.solid.info')},
}

ability.rime = {
    type: [`ice`],
    rarity: 1,
    info: function() {return t('ability.rime.info')},
}

ability.voltage = {
    type: [`electric`],
    rarity: 1,
    info: function() {return t('ability.voltage.info')},
}

ability.hyperCutter = {
    type: [`bug`],
    rarity: 1,
    info: function() {return t('ability.hyperCutter.info')},
}

ability.bigPecks = {
    type: [`flying`],
    rarity: 1,
    info: function() {return t('ability.bigPecks.info')},
}

ability.wonderSkin = {
    type: [`all`],
    rarity: 1,
    info: function() {return t('ability.wonderSkin.info')},
}


//tier 2

ability.synchronize = {
    type: [`psychic`, `all`],
    rarity: 2,
    info: function() {return t('ability.synchronize.info')},
}

ability.solarPower = {  
    type: [`fire`,`grass`],
    rarity: 2,
    info: function() {return t('ability.solarPower.info', { tagSunny: tagSunny })},
}

ability.iceBody = {  
    type: [`ice`],
    rarity: 2,
    info: function() {return t('ability.iceBody.info', { tagHail: tagHail })},
}

ability.rainDish = {  
    type: [`water`, `grass`],
    rarity: 2,
    info: function() {return t('ability.rainDish.info', { tagRainy: tagRainy })},
}

ability.sandForce = {  
    type: [`ground`],
    rarity: 2,
    info: function() {return t('ability.sandForce.info', { tagSandstorm: tagSandstorm })},
}

ability.static = {
    type: [`electric`],
    rarity: 2,
    info: function() {return t('ability.static.info', { tagParalysis: tagParalysis })},
}

ability.flameBody = {
    type: [`fire`],
    rarity: 2,
    info: function() {return t('ability.flameBody.info', { tagBurn: tagBurn })},
}

ability.poisonPoint = {
    type: [`poison`],
    rarity: 2,
    info: function() {return t('ability.poisonPoint.info', { tagPoisoned: tagPoisoned })},
}

ability.strangeCharm = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return t('ability.strangeCharm.info', { tagConfused: tagConfused })},
}

ability.effectSpore = {
    type: [`grass`],
    rarity: 2,
    info: function() {return t('ability.effectSpore.info', { tagSleep: tagSleep })},
}

ability.glacialBody = {
    type: [`ice`],
    rarity: 2,
    info: function() {return t('ability.glacialBody.info', { tagFreeze: tagFreeze })},
}

ability.naturalCure = {
    type: [`all`],
    rarity: 2,
    info: function() {return t('ability.naturalCure.info')},
}

ability.technician = {
    type: [`all`],
    rarity: 2,
    info: function() {return t('ability.technician.info')},
}



ability.scrappy = {
    type: [`fighting` , `normal`],
    rarity: 2,
    info: function() {return t('ability.scrappy.info')},
}

ability.unaware = {
    type: [`all`],
    rarity: 2,
    info: function() {return t('ability.unaware.info')},
}

ability.magicGuard = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return t('ability.magicGuard.info')},
}

ability.voltAbsorb = {
    type: [`electric`],
    rarity: 2,
    info: function() {return t('ability.voltAbsorb.info')},
}

ability.waterAbsorb = {
    type: [`water`],
    rarity: 2,
    info: function() {return t('ability.waterAbsorb.info')},
}

ability.flareAbsorb = {
    type: [`fire`],
    rarity: 2,
    info: function() {return t('ability.flareAbsorb.info')},
}

ability.curseAbsorb = {
    type: [`dark`],
    rarity: 2,
    info: function() {return t('ability.curseAbsorb.info')},
}

ability.poisonAbsorb = {
    type: [`poison`],
    rarity: 2,
    info: function() {return t('ability.poisonAbsorb.info')},
}

ability.frostAbsorb = {
    type: [`ice`],
    rarity: 2,
    info: function() {return t('ability.frostAbsorb.info')},
}

ability.psychicAbsorb = {
    type: [`psychic`],
    rarity: 2,
    info: function() {return t('ability.psychicAbsorb.info')},
}

ability.lightAbsorb = {
    type: [`fairy`],
    rarity: 2,
    info: function() {return t('ability.lightAbsorb.info')},
}

ability.growthAbsorb = {
    type: [`grass`],
    rarity: 2,
    info: function() {return t('ability.growthAbsorb.info')},
}




ability.strongJaw = {
    type: [`dark`],
    rarity: 2,
    info: function() {return `${t('ability.strongJaw.info', { v: joinWithAnd(movesAffectedByStrongJaw) })}</span>`},
}

ability.toughClaws = {
    type: [`dragon`],
    rarity: 2,
    info: function() {return `${t('ability.toughClaws.info', { v: joinWithAnd(movesAffectedByToughClaws) })}</span>`},
}

ability.ironFist = {
    type: [`fighting`],
    rarity: 2,
    info: function() {return `${t('ability.ironFist.info', { v: joinWithAnd(movesAffectedByIronFist) })}</span>`},
}



ability.rivalry = {
    type: [`dragon`, `dark`],
    rarity: 2,
    info: function() {return t('ability.rivalry.info')},
}

ability.pickPocket = {
    type: [`dark`, `flying`, `normal`],
    rarity: 2,
    info: function() {return t('ability.pickPocket.info')},
}


ability.brittleArmor = {
    type: [`ice`,`rock`],
    rarity: 2,
    info: function() {return t('ability.brittleArmor.info')},
}



ability.chlorophyll  = {  
    type: [`grass`],
    rarity: 2,
    info: function() {return t('ability.chlorophyll.info', { tagSunny: tagSunny })},
}





//tier 3

//tier 3 names based on gemini, pisces, o luna, mars, etc


ability.grassyPelt = {  
    type: [`grass`],
    rarity: 3,
    info: function() {return t('ability.grassyPelt.info', { tagGrassyTerrain: tagGrassyTerrain })},
}

ability.sandyPelt = {  
    type: [`rock`],
    rarity: 3,
    info: function() {return t('ability.sandyPelt.info', { tagSandstorm: tagSandstorm })},
}

ability.icyPelt = {  
    type: [`ice`],
    rarity: 3,
    info: function() {return t('ability.icyPelt.info', { tagHail: tagHail })},
}

ability.moistPelt = {  
    type: [`water`],
    rarity: 3,
    info: function() {return t('ability.moistPelt.info', { tagRainy: tagRainy })},
}

ability.fieryPelt = {  
    type: [`fire`],
    rarity: 3,
    info: function() {return t('ability.fieryPelt.info', { tagSunny: tagSunny })},
}

ability.pixiePelt = {  
    rename: `fuzzyPelt`,
    type: [`psychic`],
    rarity: 3,
    info: function() {return t('ability.pixiePelt.info', { tagMistyTerrain: tagMistyTerrain })},
}

ability.blackPelt = {  
    type: [`ghost`],
    rarity: 3,
    info: function() {return t('ability.blackPelt.info', { tagFoggy: tagFoggy })},
}

ability.spikyPelt = {  
    type: [`electric`],
    rarity: 3,
    info: function() {return t('ability.spikyPelt.info', { tagElectricTerrain: tagElectricTerrain })},
}

ability.climaTact  = {  
    type: [`fairy`],
    rarity: 3,
    info: function() {return t('ability.climaTact.info')},
}

ability.intangible  = {  
    type: [`dark`],
    rarity: 3,
    info: function() {return t('ability.intangible.info', { tagFoggy: tagFoggy })},
}

ability.hyperconductor  = {  
    type: [`steel`],
    rarity: 3,
    info: function() {return t('ability.hyperconductor.info', { tagElectricTerrain: tagElectricTerrain })},
}

ability.faeRush  = {  
    type: [`fairy`],
    rarity: 3,
    info: function() {return t('ability.faeRush.info', { tagMistyTerrain: tagMistyTerrain })},
}

ability.moltShed  = {  
    type: [`bug`],
    rarity: 3,
    info: function() {return t('ability.moltShed.info', { tagGrassyTerrain: tagGrassyTerrain })},
}

ability.slushRush  = { 
    type: [`ice`],
    rarity: 3,
    info: function() {return t('ability.slushRush.info', { tagHail: tagHail })},
}

ability.swiftSwim  = { 
    type: [`water`],
    rarity: 3,
    info: function() {return t('ability.swiftSwim.info', { tagRainy: tagRainy })},
}

ability.sandRush  = { 
    type: [`ground`],
    rarity: 3,
    info: function() {return t('ability.sandRush.info', { tagSandstorm: tagSandstorm })},
}

ability.intimidate = {
    type: [`dragon`, `ghost`],
    rarity: 3,
    info: function() {return t('ability.intimidate.info')},
}

ability.dauntingLook = {
    type: [`bug`, `fire`, `fighting`],
    rarity: 3,
    info: function() {return t('ability.dauntingLook.info')},
}

ability.unburden = {
    type: [`normal`, `fighting`, `flying`],
    rarity: 3,
    info: function() {return t('ability.unburden.info')},
}

ability.moxie = {
    type: [`dark`],
    rarity: 3,
    info: function() {return t('ability.moxie.info')},
}

ability.strategist = {
    type: [`psychic`],
    rarity: 3,
    info: function() {return t('ability.strategist.info')},
}

ability.sheerForce = {
    type: [`ground`, `steel`, `rock`],
    rarity: 3,
    info: function() {return t('ability.sheerForce.info')},
}

ability.levitate = {
    type: [`electric`, `steel`],
    rarity: 3,
    info: function() {return t('ability.levitate.info')},
}

ability.thickFat = {
    type: [`normal`, `ice`],
    rarity: 3,
    info: function() {return t('ability.thickFat.info')},
}

ability.adaptability = {
    type: [`all`],
    rarity: 3,
    info: function() {return t('ability.adaptability.info')},
}

ability.ambidextrous = {
    type: [`all`],
    rarity: 3,
    info: function() {return t('ability.ambidextrous.info')},
}

ability.noGuard = {
    type: [`all`],
    rarity: 3,
    info: function() {return t('ability.noGuard.info')},
}

ability.multiscale = {
    type: [`water`],
    rarity: 3,
    info: function() {return t('ability.multiscale.info')},
}

ability.guts = {
    type: [`normal`],
    rarity: 3,
    info: function() {return t('ability.guts.info')},
}

ability.skillLink = {
    type: [`bug`,`normal`],
    rarity: 3,
    info: function() {return t('ability.skillLink.info')},
}

ability.sharpness = {
    type: [`steel`],
    rarity: 3,
    info: function() {return `${t('ability.sharpness.info', { v: joinWithAnd(movesAffectedBySharpness) })}</span>`},
}

ability.angerPoint = {
    type: [`fire`],
    rarity: 3,
    info: function() {return t('ability.angerPoint.info')},
}

ability.justified = {
    type: [`fighting`],
    rarity: 3,
    info: function() {return t('ability.justified.info')},
}

ability.filter = {
    type: [`bug`,`ground`],
    rarity: 3,
    info: function() {return t('ability.filter.info')},
}

ability.reckless = {
    type: [`flying`],
    rarity: 3,
    info: function() {return t('ability.reckless.info')},
}

ability.libero = {
    type: [`fairy`,`psychic`],
    rarity: 3,
    info: function() {return t('ability.libero.info')},
}

ability.flashElectro = {
    type: [`electric`],
    rarity: 3,
    info: function() {return t('ability.flashElectro.info')},
}

ability.flashAqua = {
    type: [`water`],
    rarity: 3,
    info: function() {return t('ability.flashAqua.info')},
}

ability.flashPyro = {
    type: [`fire`],
    rarity: 3,
    info: function() {return t('ability.flashPyro.info')},
}

ability.flashUmbra = {
    type: [`dark`],
    rarity: 3,
    info: function() {return t('ability.flashUmbra.info')},
}

ability.flashVenum = {
    type: [`poison`],
    rarity: 3,
    info: function() {return t('ability.flashVenum.info')},
}

ability.flashCryo = {
    type: [`ice`],
    rarity: 3,
    info: function() {return t('ability.flashCryo.info')},
}

ability.flashPsycha = {
    type: [`psychic`],
    rarity: 3,
    info: function() {return t('ability.flashPsycha.info')},
}

ability.flashFae = {
    type: [`fairy`],
    rarity: 3,
    info: function() {return t('ability.flashFae.info')},
}

ability.flashHerba = {
    type: [`grass`],
    rarity: 3,
    info: function() {return t('ability.flashHerba.info')},
}





//hidden


ability.stoned = {
    rarity: 3,
    info: function() {return t('ability.stoned.info')},
    nerf: t('ability.stoned.nerf')
}

ability.powerOfAlchemy = {
    rarity: 3,
    info: function() {return t('ability.powerOfAlchemy.info')},
}

ability.stamina = {
    rarity: 3,
    info: function() {return t('ability.stamina.info')},
}

ability.gooey = {
    rarity: 3,
    info: function() {return t('ability.gooey.info')},
}

ability.flowerVeil = {
    rarity: 3,
    info: function() {return t('ability.flowerVeil.info', { tagParalysis: tagParalysis })},
}

ability.aromaVeil = {
    rarity: 3,
    info: function() {return t('ability.aromaVeil.info', { tagBurn: tagBurn })},
}

ability.sweetVeil = {
    rarity: 3,
    info: function() {return t('ability.sweetVeil.info', { tagConfused: tagConfused })},
}

ability.pastelVeil = {
    rarity: 3,
    info: function() {return t('ability.pastelVeil.info', { tagPoisoned: tagPoisoned })},
}

ability.shieldsDown = {
    rarity: 3,
    info: function() {return t('ability.shieldsDown.info')},
}

ability.colorSpore = {
    rarity: 3,
    info: function() {return t('ability.colorSpore.info')},
    //nerf: `When slotted as a non-hidden ability: Turns reduced to x2`
}

ability.merciless = {
    rarity: 3,
    info: function() {return t('ability.merciless.info')},
    nerf: t('ability.merciless.nerf')
}

ability.costar = {
    rarity: 3,
    info: function() {return t('ability.costar.info')},
}

ability.purifyingSalt = {
    rarity: 3,
    info: function() {return t('ability.purifyingSalt.info')},
}






ability.treasureOfRuin = {
    rarity: 3,
    info: function() {return t('ability.treasureOfRuin.info')},
}

ability.thousandArms = {
    rarity: 3,
    info: function() {return t('ability.thousandArms.info')},
}

ability.goodAsGold = {
    rarity: 3,
    info: function() {return t('ability.goodAsGold.info')},
}

ability.wonderGuard = {
    rarity: 3,
    info: function() {return t('ability.wonderGuard.info')},
}

ability.tintedLens = {  
    rarity: 3,
    info: function() {return t('ability.tintedLens.info')},
}

ability.prankster = {
    rarity: 3,
    info: function() {return t('ability.prankster.info')},
}

ability.galeWings = {
    rarity: 3,
    info: function() {return t('ability.galeWings.info')},
}

ability.neuroforce = {
    rarity: 3,
    info: function() {return t('ability.neuroforce.info')},
}

ability.speedBoost = {
    rarity: 3,
    info: function() {return t('ability.speedBoost.info')},
}

ability.scorch = {
    rarity: 3,
    info: function() {return t('ability.scorch.info', { tagBurn: tagBurn })},
    nerf: t('ability.scorch.nerf')
}

ability.corrosion = {
    rarity: 3,
    info: function() {return t('ability.corrosion.info', { tagPoisoned: tagPoisoned })},
    nerf: t('ability.scorch.nerf')
}

ability.dancer = {
    rarity: 3,
    info: function() {return `${t('ability.dancer.info', { v: joinWithAnd(movesAffectedByDancer) })}<span>`},
    nerf: t('ability.dancer.nerf')
}

ability.cacophony = {
    rarity: 3,
    info: function() {return `${t('ability.cacophony.info', { v: joinWithAnd(movesAffectedByCacophony) })}<span>`},
    nerf: t('ability.dancer.nerf')
}

ability.windRider = {
    rarity: 3,
    info: function() {return `${t('ability.windRider.info', { v: joinWithAnd(movesAffectedByWindRider) })}<span>`},
    nerf: t('ability.dancer.nerf')
}


ability.iaido = {
    rarity: 3,
    info: function() {return `${t('ability.iaido.info', { v: joinWithAnd(movesAffectedBySharpness) })}<span>`},
    nerf: t('ability.dancer.nerf')
}





ability.megaLauncher = {
    rarity: 3,
    info: function() {return `${t('ability.megaLauncher.info', { v: joinWithAnd(movesAffectedByMegaLauncher) })}<span>`},
}

ability.metalhead = {
    rarity: 3,
    info: function() {return `${t('ability.metalhead.info', { v: joinWithAnd(movesAffectedByMetalhead) })}<span>`},
}

ability.imposter = {
    info: function() {return t('ability.imposter.info')},
    rarity: 3,
}

ability.toxicBoost = {
    info: function() {return t('ability.toxicBoost.info', { tagPoisoned: tagPoisoned })},
    rarity: 3,
}

ability.flareBoost = {
    info: function() {return t('ability.flareBoost.info', { tagBurn: tagBurn })},
    rarity: 3,
}

ability.fullMetalBody = {
    info: function() {return t('ability.fullMetalBody.info')},
    rarity: 3,
}

ability.supremeOverlord = {
    info: function() {return t('ability.supremeOverlord.info')},
    rarity: 3,
}

ability.gorillaTactics = {
    info: function() {return t('ability.gorillaTactics.info')},
    nerf: t('ability.merciless.nerf'),
    rarity: 3,
}

ability.beastBoost = {
    info: function() {return t('ability.beastBoost.info')},
    rarity: 3,
}

ability.quarkDrive = {
    info: function() {return t('ability.quarkDrive.info', { tagElectricTerrain: tagElectricTerrain })},
    rarity: 3,
}

ability.protosynthesis = {
    info: function() {return t('ability.protosynthesis.info', { tagSunny: tagSunny })},
    rarity: 3,
}

ability.drizzle = {
    info: function() {return t('ability.drizzle.info', { tagRainy: tagRainy })},
    rarity: 3,
}

ability.drought = {
    info: function() {return t('ability.drought.info', { tagSunny: tagSunny })},
    rarity: 3,
}

ability.sandStream = {
    info: function() {return t('ability.sandStream.info', { tagSandstorm: tagSandstorm })},
    rarity: 3,
}

ability.snowWarning = {
    info: function() {return t('ability.snowWarning.info', { tagHail: tagHail })},
    rarity: 3,
}

ability.somberField = {
    info: function() {return t('ability.somberField.info', { tagFoggy: tagFoggy })},
    rarity: 3,
}

ability.electricSurge = {
    info: function() {return t('ability.electricSurge.info', { tagElectricTerrain: tagElectricTerrain })},
    rarity: 3,
}

ability.grassySurge = {
    info: function() {return t('ability.grassySurge.info', { tagGrassyTerrain: tagGrassyTerrain })},
    rarity: 3,
}

ability.mistySurge = {
    info: function() {return t('ability.mistySurge.info', { tagMistyTerrain: tagMistyTerrain })},
    rarity: 3,
}

ability.sereneGrace = {
    info: function() {return t('ability.sereneGrace.info')},
    rarity: 3,
}

ability.hugePower = {
    info: function() {return t('ability.hugePower.info')},
    rarity: 3,
}

ability.contrary = {
    info: function() {return t('ability.contrary.info')},
    rarity: 3,
}

ability.protean = {
    info: function() {return t('ability.protean.info')},
    rarity: 3,
}

ability.simple = {
    info: function() {return t('ability.simple.info')},
    rarity: 3,
}

ability.parentalBond = {
    info: function() {return t('ability.parentalBond.info')},
    rarity: 3,
}

ability.moody = {
    info: function() {return t('ability.moody.info')},
    rarity: 3,
}

ability.darkAura = {
    info: function() {return t('ability.darkAura.info')},
    rarity: 3,
}


ability.soulAsterism = {
    info: function() {return t('ability.soulAsterism.info')},
    rarity: 3,
}


ability.normalize = {
    info: function() {return t('ability.normalize.info')},
    rarity: 3,
}


ability.ferrilate = {
    info: function() {return t('ability.ferrilate.info')},
    rarity: 3,
}

ability.glaciate = {
    rename: `refrigerate`,
    info: function() {return t('ability.glaciate.info')},
    rarity: 3,
}

ability.terralate = {
    info: function() {return t('ability.terralate.info')},
    rarity: 3,
}

ability.toxilate = {
    info: function() {return t('ability.toxilate.info')},
    rarity: 3,
}

ability.hydrolate = {
    info: function() {return t('ability.hydrolate.info')},
    rarity: 3,
}

ability.pyrolate = {
    info: function() {return t('ability.pyrolate.info')},
    rarity: 3,
}

ability.chrysilate = {
    info: function() {return t('ability.chrysilate.info')},
    rarity: 3,
}

ability.galvanize = {
    info: function() {return t('ability.galvanize.info')},
    rarity: 3,
}

ability.gloomilate = {
    info: function() {return t('ability.gloomilate.info')},
    rarity: 3,
}

ability.espilate = {
    info: function() {return t('ability.espilate.info')},
    rarity: 3,
}

ability.aerilate = {
    info: function() {return t('ability.aerilate.info')},
    rarity: 3,
}

ability.pixilate = {
    info: function() {return t('ability.pixilate.info')},
    rarity: 3,
}

ability.verdify = {
    info: function() {return t('ability.verdify.info')},
    rarity: 3,
}

ability.dragonMaw = {
    info: function() {return t('ability.dragonMaw.info')},
    rarity: 3,
}


for (const i in ability){
    ability[i].id = i
}








const berryMemoryRare = [ ability.flashHerba.id, ability.flashFae.id, ability.flashPsycha.id, ability.flashCryo.id, ability.flashVenum.id, ability.flashUmbra.id,
    ability.flashPyro.id, ability.flashAqua.id, ability.flashElectro.id, ability.libero.id, ability.reckless.id, ability.filter.id, ability.justified.id,
    ability.angerPoint.id, ability.sharpness.id, ability.skillLink.id, ability.guts.id, ability.multiscale.id, ability.noGuard.id, ability.ambidextrous.id,
    ability.adaptability.id, ability.thickFat.id, ability.levitate.id, ability.sheerForce.id, ability.strategist.id, ability.moxie.id, ability.unburden.id,
    ability.dauntingLook.id, ability.intimidate.id, ability.sandRush.id, ability.swiftSwim.id, ability.slushRush.id, ability.moltShed.id, ability.faeRush.id,
    ability.hyperconductor.id, ability.intangible.id, ability.climaTact.id, ability.spikyPelt.id, ability.blackPelt.id, ability.pixiePelt.id, ability.fieryPelt.id,
    ability.moistPelt.id, ability.icyPelt.id, ability.sandyPelt.id, ability.grassyPelt.id,
 ]

 //todo
 //nerf non HA HA's
 //buff protean make it receive crosspower
 


 const apricornMemoryHA1 = [ 
    ability.stamina.id, ability.gooey.id, ability.shieldsDown.id, ability.costar.id,
    ability.purifyingSalt.id, ability.scorch.id, ability.corrosion.id, ability.megaLauncher.id,
    ability.metalhead.id, ability.moody.id, ability.merciless.id, ability.colorSpore.id, ability.sandStream.id,
    ability.snowWarning.id, ability.somberField.id, ability.stoned.id,
 ]



 //ability.quarkDrive.id, ability.protosynthesis.id,


 const apricornMemoryHA2 = [  
    ability.dancer.id, ability.cacophony.id, ability.windRider.id, ability.gorillaTactics.id,
    ability.imposter.id,
    ability.drizzle.id, ability.drought.id, ability.electricSurge.id,
    ability.grassySurge.id, ability.mistySurge.id, ability.ferrilate.id, ability.glaciate.id,
    ability.terralate.id, ability.toxilate.id, ability.hydrolate.id, ability.pyrolate.id, ability.chrysilate.id,
    ability.galvanize.id, ability.gloomilate.id, ability.espilate.id, ability.aerilate.id, ability.pixilate.id,
    ability.verdify.id, ability.dragonMaw.id, ability.iaido.id,
 ]

 /*const apricornMemoryHA2 = [   ability.treasureOfRuin.id, ability.dancer.id, ability.cacophony.id, 
    ability.imposter.id, ability.quarkDrive.id, ability.protosynthesis.id, ability.drizzle.id, ability.drought.id,  ability.electricSurge.id, ability.grassySurge.id, ability.mistySurge.id, 
    ability.ferrilate.id, ability.glaciate.id, ability.terralate.id, ability.toxilate.id,
    ability.hydrolate.id, ability.pyrolate.id, ability.chrysilate.id, ability.galvanize.id, ability.gloomilate.id, ability.espilate.id, ability.aerilate.id, ability.pixilate.id,
    ability.verdify.id, ability.dragonMaw.id,
 ]*/

 const apricornMemoryHA3 = [   ability.tintedLens.id, ability.prankster.id, ability.galeWings.id, ability.speedBoost.id,
    ability.toxicBoost.id, ability.flareBoost.id, ability.fullMetalBody.id, ability.supremeOverlord.id, ability.beastBoost.id, ability.sereneGrace.id,
    ability.contrary.id, ability.simple.id, ability.normalize.id, 
 ]

 const apricornMemoryHA4 = [  ability.hugePower.id, ability.powerOfAlchemy.id, ability.wonderGuard.id, ability.protean.id, ability.parentalBond.id,
 ]

























const move = {}

const defaultPlayerMoveTimer = 2000


//tier 1 - 20-40 uncompromised dmg
//tier 2 - 50-70 uncompromised dmg
//tier 3 - 80-100 uncompromised dmg

//signatures need to be learnt through cloning inheriting!



//normal


move.quickAttack = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.tackle = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40
}

move.doubleSlap = {  
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.cut = {
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 50,
    affectedBy: [ability.sharpness.id]
}

move.leer = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return t('move.leer.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    restricted: true,
}

move.growl = { 
    moveset: [`normal`, `all`, `dark`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return t('move.growl.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.swagger = {
    moveset: [`all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return t('move.swagger.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'atkup2') },
}

move.doubleHit = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 35,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.playNice = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return t('move.growl.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.swift = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 60,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.dizzyPunch = {
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 70,
    info: function() {return t('move.dizzyPunch.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.stomp = {
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 65
}

move.screech = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return t('move.screech.info')},
    hitEffect: function(target) { moveBuff(target,'defdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.smellingSalts = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return t('move.smellingSalts.info')},
    powerMod : function() { if (wildBuffs.paralysis>0) { return 2} else return 1 },
}

move.facade = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return t('move.facade.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.burn > 0 || team[exploreActiveMember].buffs?.poisoned > 0 || team[exploreActiveMember].buffs?.paralysis > 0) { return 2} else return 1 },
}

move.slash = {
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.extremeSpeed = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 75,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.strength = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 100
}

move.hyperVoice = {
    moveset: [`normal`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.cacophony.id]
}

move.bodyPress = { 
    moveset: [`normal`, `fighting`, `rock`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    info: function() {return t('move.bodyPress.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hyperBeam = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.gigaImpact = {  
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.swordsDance = {  
    moveset: [`steel`,"all"],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return t('move.swordsDance.info')},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self");},
    affectedBy: [ability.dancer.id],
    restricted: true,
}



//fire
move.ember = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 40,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.fireSpin = {  
    moveset: [`fire`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.flameCharge = {
    moveset: [`fire`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 50,
    info: function() {return t('move.flameCharge.info')},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'speup1','self') },
}

move.incinerate = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 60
}

move.fireFang = {
    moveset: [`fire`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 65,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.strongJaw.id]
}

move.firePunch = {
    moveset: [`fire`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 75,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.ironFist.id]
}


move.sunnyDay = { 
    moveset: [`fire`,`ground`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 0,
    info: function() {return t('move.sunnyDay.info', { tagSunny: tagSunny })} ,
    hitEffect: function(target) { changeWeather("sunny") },
}

move.flamethrower = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 90,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.heatWave = {
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 60,
    info: function() {return t('move.heatWave.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'burn') },
    affectedBy: [ability.windRider.id]
}

move.fireBlast = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')},
    affectedBy: [ability.megaLauncher.id]
}

move.flareBlitz = {
    moveset: [`fire`],
    split: "physical",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}


move.overheat = {  
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}







//electric
move.nuzzle = {
    moveset: [`electric`, `fairy`],
    split: "physical",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return t('move.nuzzle.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.magneticFlux = {
    moveset: [`electric`, `steel`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 0,
    info: function() {return t('move.magneticFlux.info')},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self") },
}

move.thunderShock = {
    moveset: [`electric`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderWave = {
    moveset: [`electric`, `psychic`, `ghost`, `fairy`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 0,
    info: function() {return t('move.thunderWave.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.chargeBeam = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 60,
    info: function() {return t('move.chargeBeam.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkup1',"self") },
}

move.electroWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 55,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.thunderFang = {
    moveset: [`electric`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 65,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.strongJaw.id]
}

move.thunderPunch = {
    moveset: [`electric`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 75,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.ironFist.id]
}

move.thunderbolt = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 90,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.discharge = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return t('move.nuzzle.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.electricTerrain = { 
    moveset: [`electric`,`steel`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 0,
    info: function() {return t('move.electricTerrain.info', { tagElectricTerrain: tagElectricTerrain })} ,
    hitEffect: function(target) { changeWeather("electricTerrain") },
}

move.thunder = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 110,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.voltSwitch = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return t('move.voltSwitch.info')},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.wildCharge = {  
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "electric",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.supercellSlam = {  //new
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "electric",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}



//ground
move.mudSlap = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 1,
    type: "ground",
    power: 20
}

move.magnitude = {  
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 1,
    type: "ground",
    power: 10,
    info: function() {return t('move.magnitude.info')},
    powerMod : function() { return random(1,8) },
}

move.mudShot = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 55,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.bulldoze = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ground",
    power: 60,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}


move.sandstorm = { 
    moveset: [`rock`,`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return t('move.sandstorm.info', { tagSandstorm: tagSandstorm })} ,
    hitEffect: function(target) { changeWeather("sandstorm") },
    affectedBy: [ability.windRider.id]
}

move.scorchingSands = {
    moveset: [`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 70,
    info: function() {return t('move.scorchingSands.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.rototiller = {
    moveset: [`ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 0,
    info: function() {return t('move.rototiller.info')},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self"); moveBuff(target,'satkup2',"self") },
    restricted: true,
}

move.earthquake = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 100
}

move.dig = {
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 80,
    info: function() {return t('move.bodyPress.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.earthPower = {
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 90,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.stompingTantrum = {  //new
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}



//steel
move.bulletPunch = {
    moveset: [`steel`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')},
    affectedBy: [ability.ironFist.id]
}

move.metalClaw = {
    moveset: [`steel`, `flying`, `dragon`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 50,
    info: function() {return t('move.metalClaw.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
    affectedBy: [ability.toughClaws.id]
}

move.magnetBomb = {
    moveset: [`steel`, `electric`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 60
}

move.mirrorShot = { //edit
    moveset: [`steel`],
    split: "special",
    rarity: 2,
    type: "steel",
    power: 70
}

move.steelWing = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return t('move.steelWing.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defup1',"self") },
}

move.ironHead = {
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 80,
    affectedBy: [ability.metalhead.id]
}

move.sharkJaws = {  
    moveset: [`water`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return t('move.sharkJaws.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.ironSlug = {  
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.flashCannon = {
    moveset: [`steel`, `electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 80,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.ironTail = {
    moveset: [`steel`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.ironTail.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.smartStrike = {  
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.metalSound = {
    moveset: [`steel`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return t('move.metalSound.info')},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.ironDefense = {
    moveset: [`steel`, `fighting`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return t('move.ironDefense.info')},
    hitEffect: function(target) { moveBuff(target,'defup2',"self");},
}







//flying
move.peck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 1,
    type: "flying",
    power: 35
}

move.gust = {
    moveset: [`flying`],
    split: "special",
    rarity: 1,
    type: "flying",
    power: 40,
    affectedBy: [ability.windRider.id]
}

move.skyDrop = {
    moveset: [`flying`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 50,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.dualWingbeat = {  
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 30,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.acrobatics = {  
    moveset: [`flying`, `bug`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 65,
    info: function() {return t('move.acrobatics.info')},
    powerMod : function() { if (team[exploreActiveMember].item === undefined ) { return 2} else return 1 },
}

move.airShlash = {
    rename: `airSlash`,
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 75,
    affectedBy: [ability.sharpness.id],
    info: function() {return t('move.airShlash.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'sdefdown1') },
}

move.drillPeck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 80
}

move.tailwind = {
    moveset: [`flying`],
    split: "special",
    rarity: 2,
    type: "flying",
    power: 0,
    info: function() {return t('move.tailwind.info')},
    timer: defaultPlayerMoveTimer*1.5,
    hitEffect: function(target) { moveBuff(target,'speup1',"team"); },
    affectedBy: [ability.windRider.id]
}

move.fly = {
    moveset: [`flying` ,`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 90
}

move.featherDance = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 0,
    info: function() {return t('move.featherDance.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
    affectedBy: [ability.dancer.id]
}

move.bounce = {
    moveset: [`flying`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 75,
    info: function() {return t('move.bodyPress.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hurricane = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 100,
    info: function() {return t('move.dizzyPunch.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
    affectedBy: [ability.windRider.id]
}

move.razorTalons = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
    affectedBy: [ability.toughClaws.id]
}



//poison
move.acid = {
    moveset: [`poison`, `grass`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 40,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.poisonSting = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "poison",
    power: 15,
    info: function() {return t('move.poisonSting.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.smog = {
    moveset: [`poison`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 30,
    info: function() {return t('move.poisonSting.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.poisonPowder = {
    moveset: [`grass`,],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return t('move.poisonPowder.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.toxic = {
    moveset: [`poison`, `all`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return t('move.poisonPowder.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.poisonFang = {
    moveset: [`poison`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 60,
    info: function() {return t('move.poisonFang.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.strongJaw.id]
}

move.sludge = {
    moveset: [`poison`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 65,
    info: function() {return t('move.poisonSting.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.crossPoison = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 70,
    info: function() {return t('move.poisonFang.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonClaw = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 75,
    info: function() {return t('move.poisonFang.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.toughClaws.id]
}

move.poisonJab = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return t('move.poisonFang.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.ironFist.id]
}

move.sludgeBomb = {
    moveset: [`poison`, `ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return t('move.poisonSting.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.sludgeWave = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 95,
    info: function() {return t('move.poisonFang.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.coil = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return t('move.coil.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.acidArmor = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return t('move.ironDefense.info')},
    hitEffect: function(target) { moveBuff(target,'defup2',"self") },
}

move.acidSpray = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 50,
    info: function() {return t('move.acidSpray.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}


move.noxiousTorque = {  //new
    moveset: [`poison`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}




//ice
move.iceShard = {
    moveset: [`ice`],
    split: "physical",
    rarity: 1,
    type: "ice",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')},
    affectedBy: [ability.sharpness.id]
}

move.powderSnow = {
    moveset: [`ice`],
    split: "special",
    rarity: 1,
    type: "ice",
    power: 40,
    info: function() {return t('move.powderSnow.info', { tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icicleSpear = {  
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}



move.hail = { 
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 0,
    info: function() {return t('move.hail.info', { tagHail: tagHail })} ,
    hitEffect: function(target) { changeWeather("hail") },
}

move.icyWind = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 55,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
    affectedBy: [ability.windRider.id]
}

move.avalanche = {
    moveset: [`ice`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.frostBreath = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return t('move.frostBreath.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkdown1') },
}

move.auroraBeam = {
    moveset: [`ice`, `water`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return t('move.auroraBeam.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.iceFang = { 
    moveset: [`ice`, `dark`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return t('move.powderSnow.info', { tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.strongJaw.id]
}

move.icePunch = { 
    moveset: [`ice`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 75,
    info: function() {return t('move.powderSnow.info', { tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.ironFist.id]
}

move.iceBeam = {
    moveset: [`ice`, `water`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 90,
    info: function() {return t('move.powderSnow.info', { tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.blizzard = {
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 100,
    affectedBy: [ability.windRider.id]
}

move.icicleCrash = {
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "ice",
    power: 85
}


move.safeguard = {
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 0,
    info: function() {return t('move.safeguard.info', { tagSafeguard: tagSafeguard })} ,
    hitEffect: function(target) { changeWeather("safeguard") },
    notUsableByEnemy: true,
}

move.freezyFrost = {  //new
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//bug

move.twineedle = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 25,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.furyCutter = { 
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 20,
    info: function() {return t('move.furyCutter.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.sharpness.id]
}

move.infestation = {  
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.pinMissile = {  
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.stickyWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 0,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.pounce = {
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.struggleBug = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return t('move.struggleBug.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.bugBite = {
    moveset: [`bug`, `dark`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.bugBuzz = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 90,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.cacophony.id]
}

move.signalBeam = {
    moveset: [`bug`, `electric`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return t('move.signalBeam.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.silverWind = {
    moveset: [`bug`, `flying`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 55,
    info: function() {return t('move.acidSpray.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.windRider.id]
}

move.xScissor = {
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.firstImpression = {  
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.stringShot = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return t('move.stringShot.info')},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.uTurn = {
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return t('move.voltSwitch.info')},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.weirdRoom = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return t('move.weirdRoom.info', { tagWeirdRoom: tagWeirdRoom })} ,
    hitEffect: function(target) { changeWeather("weirdRoom") },
}

move.savageStinger = {  //new
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.quiverDance = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t('move.quiverDance.info')},
    hitEffect: function(target) { moveBuff(target,'speup1',"self"); moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//water
move.waterGun = {
    moveset: [`water`],
    split: "special",
    rarity: 1,
    type: "water",
    power: 40
}

move.aquaJet = {
    moveset: [`water`],
    split: "physical",
    rarity: 1,
    type: "water",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.whirlpool = {  
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.waterPulse = {
    moveset: [`water`, `psychic`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 60,
    info: function() {return t('move.signalBeam.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
    affectedBy: [ability.megaLauncher.id]
}

move.chillingWater = {
    moveset: [`water`, `ice`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 50,
    info: function() {return t('move.growl.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}


move.bubbleBeam = {
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 65,
    info: function() {return t('move.bubbleBeam.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.foamShot = { 
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "water",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.rainDance = { 
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 0,
    info: function() {return t('move.rainDance.info', { tagRainy: tagRainy })} ,
    hitEffect: function(target) { changeWeather("rainy") },
    affectedBy: [ability.dancer.id]
}

move.waterfall = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80
}

move.scald = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 75,
    info: function() {return t('move.scorchingSands.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.liquidation = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80,
    info: function() {return t('move.liquidation.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defup1',"self") },
}

move.aquaTail = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 90
}

move.surf = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 90
}

move.muddyWater = {  
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 100,
    info: function() {return t('move.bubbleBeam.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.hydroPump = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}


move.waveCrash = {  //new
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}



//grass
move.leafage = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 40
}

move.vineWhip = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 45
}

move.magicalLeaf = {
    moveset: [`grass`, `psychic`, `fairy`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 50,
    info: function() {return t('move.magicalLeaf.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.bulletSeed = {  
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.razorLeaf = {
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 65,
    affectedBy: [ability.sharpness.id],
    info: function() {return t('move.razorLeaf.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.stunSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return t('move.thunderWave.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}


move.ragePowder = {
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return t('move.ragePowder.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'satkup2') },
}

move.leafBlade = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.energyBall = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.solarBeam = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.solarBlade = { 
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 125,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')},
}

move.seedBomb = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return t('move.seedBomb.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'atkdown1') },
}

move.cottonSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t('move.stringShot.info')},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.spore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t('move.spore.info', { tagSleep: tagSleep })},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sleep') },
}

move.grassyTerrain = { 
    moveset: [`grass`,`bug`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t('move.grassyTerrain.info', { tagGrassyTerrain: tagGrassyTerrain })} ,
    hitEffect: function(target) { changeWeather("grassyTerrain") },
}

move.leafStorm = {  
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
    affectedBy: [ability.windRider.id]
}



//fighting
move.rockSmash = {
    moveset: [`fighting`,`steel`,`rock`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    affectedBy: [ability.metalhead.id]
}

move.vacuumWave = {
    moveset: [`fighting`],
    split: "special",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.machPunk = {
    rename: `machPunch`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')},
    affectedBy: [ability.ironFist.id]
}

move.armThrust = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.powerupPunch = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 50,
    info: function() {return t('move.powerupPunch.info')},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'atkup1','self') },
    affectedBy: [ability.ironFist.id]
}


move.stormThrow = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return t('move.bodyPress.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.lowSweep = {
    moveset: [`fighting`, `normal`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.forcePalm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.brickBreak = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 70,
    info: function() {return t('move.razorLeaf.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.skyUppercut = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 85,
    info: function() {return t('move.skyUppercut.info')},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}

move.hammerArm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: demeritBp,
    info: function() {return t('move.hammerArm.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.auraSphere = {
    moveset: [`fighting`,`ghost`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}

move.bulkUp = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return t('move.coil.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.crossChop = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 90
}

move.closeCombat = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return t('move.closeCombat.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'sdefdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.superpower = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 150,
    info: function() {return t('move.superpower.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.focusBlast = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 100*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')},
    affectedBy: [ability.megaLauncher.id]
}


move.crossRoom = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return t('move.crossRoom.info', { tagCrossRoom: tagCrossRoom })} ,
    hitEffect: function(target) { changeWeather("crossRoom") },
}



//psychic
move.confusion = {
    moveset: [`psychic`,`ghost`],
    split: "special",
    rarity: 1,
    type: "psychic",
    power: 35,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.psybeam = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 60,
    info: function() {return t('move.signalBeam.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.futureSight = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 120,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return t('move.futureSight.info')} ,
}

move.psychoCut = {
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 75,
    affectedBy: [ability.sharpness.id]
}

move.psychicFangs = {  
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 75,
    affectedBy: [ability.strongJaw.id]
}

move.zenHeadbut = {  
    rename: `zenHeadbutt`,
    moveset: [`fighting`, `psychic`],
    split: "physical",
    rarity: 3,
    type: "psychic",
    power: 90,
    affectedBy: [ability.metalhead.id]
}

move.twinBeam = {  
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.psychic = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 90,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.extrasensory = {  
    moveset: [`ghost`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 100
}

move.amnesia = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t('move.amnesia.info')},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"self")},
}

move.barrier = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t('move.ironDefense.info')},
    hitEffect: function(target) { moveBuff(target,'defup2',"self")},
}

move.agility = {   
    moveset: [`flying`, `bug`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t('move.agility.info')},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.calmMind = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t('move.calmMind.info')},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
    restricted: true,
}



move.psychoBoost = {  //new
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


/*
move.reflect = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Changes the weather to ${tagReflect}`} ,
    hitEffect: function(target) { changeWeather("reflect") },
}*/



//rock
move.rockThrow = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 50
}

move.accelerock = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.rockBlast = {  
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
    affectedBy: [ability.megaLauncher.id]
}

move.rollout = { 
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 55,
    info: function() {return t('move.furyCutter.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
}

move.ancientPower = {
    moveset: [`rock`, "psychic"],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 60,
    info: function() {return t('move.ancientPower.info')},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.smackDown = {
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 50,
    info: function() {return t('move.skyUppercut.info')},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}

move.gemstoneCrush = { 
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.rockTomb = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 60,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}



move.rockSlide = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 75,
    info: function() {return t('move.bodyPress.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.powerGem = {
    moveset: [`rock`, `fairy`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 85
}

move.stoneEdge = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 100
}

move.meteorBeam = {  
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.rockPolish = {
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 0,
    info: function() {return t('move.agility.info')},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    restricted: true,
}

move.wrathOfTheLand = {  //new
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//ghost
move.lick = {
    moveset: [`ghost`, `normal`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 30,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.shadowSneak = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.confuseRay = {
    moveset: [`ghost`, `psychic`, `all`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t('move.confuseRay.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused') },
}




move.willOWisp = {  
    moveset: [`fire`, `ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t('move.willOWisp.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.fog = { 
    moveset: [`dark`,`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t('move.fog.info', { tagFoggy: tagFoggy })} ,
    hitEffect: function(target) { changeWeather("foggy") },
}

move.ominousWind = {
    moveset: [`ghost`, "flying"],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 60,
    info: function() {return t('move.ancientPower.info')},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
    affectedBy: [ability.windRider.id]
}

move.hex = {  
    moveset: [`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 65,
    info: function() {return t('move.hex.info')},
    powerMod : function() { if (wildBuffs.paralysis>0 || wildBuffs.burn>0 || wildBuffs.freeze>0  || wildBuffs.confused>0  || wildBuffs.poisoned>0  ) { return 2} else return 1 },
}

move.shadowClaw = {  
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 60,
    affectedBy: [ability.toughClaws.id]
}

move.shadowPunch = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.shadowBall = {
    moveset: [`ghost`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ghost",
    power: 80,
    info: function() {return t('move.earthPower.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.phantomForce = {  
    moveset: [`ghost`],
    split: "physical",
    rarity: 3,
    type: "ghost",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

//dragon
move.twister = {
    moveset: [`dragon`, `flying`],
    split: "special",
    rarity: 1,
    type: "dragon",
    power: 40
}

move.dragonTail = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 60,
    info: function() {return t('move.metalClaw.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
}

move.dualChop = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.dragonBreath = {
    moveset: [`dragon`],
    split: "special",
    rarity: 2,
    type: "dragon",
    power: 65,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.dragonClaw = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 65,
    affectedBy: [ability.toughClaws.id]
}

move.scaleShot = { 
    moveset: [`water`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.dragonPulse = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 85,
    affectedBy: [ability.megaLauncher.id]
}


move.dragonRush = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.ironTail.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.outrage = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: demeritBp,
    info: function() {return t('move.outrage.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused',"self") },
    unaffectedBy: [ability.sheerForce.id],
}

move.dracoMeteor = {  
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: demeritBp,
    info: function() {return t('move.overheat.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDance = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t('move.dragonDance.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//dark
move.pursuit = {
    moveset: [`dark`],
    split: "physical",
    rarity: 1,
    type: "dark",
    power: 40
}

move.snarl = {
    moveset: [`dark`],
    split: "special",
    rarity: 2,
    type: "dark",
    power: 55,
    info: function() {return t('move.snarl.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.bite = {
    moveset: [`dark`, `bug`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.feintAttack = {
    moveset: [`dark`, `normal`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')},
}

move.knockOff = {
    moveset: [`dark`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 65,
    info: function() {return t('move.razorLeaf.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}


move.crunch = {
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 70,
    info: function() {return t('move.sharkJaws.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.darkPulse = {
    moveset: [`dark`, `psychic`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}


move.honeClaws = {
    moveset: [`dark`, `steel`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t('move.dragonDance.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    restricted: true,
}


move.nightDaze = {  
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 85,
    info: function() {return t('move.nightDaze.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'spedown1') }
}

move.nightSlash = {
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 85,
    affectedBy: [ability.sharpness.id]
}

move.fakeTears = {
    moveset: [`dark`, `fairy`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t('move.metalSound.info')},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    restricted: true,
}

move.nastyPlot = {
    moveset: [`dark`,"all"],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t('move.nastyPlot.info')},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self");},
    restricted: true,
}

move.memento = {
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t('move.memento.info')},
    hitEffect: function(target) { if (target=="wild") {
        moveBuff(target,'satkdown2');
        moveBuff(target,'atkdown2');
        pkmn[ team[exploreActiveMember].pkmn.id ].playerHp = 0;
        updateTeamPkmn()
    } },
    unaffectedBy: [ability.sheerForce.id],
}

move.trickRoom = {
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t('move.trickRoom.info', { tagTrickRoom: tagTrickRoom })} ,
    hitEffect: function(target) { changeWeather("trickRoom") },
}

move.embargo = { //new
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t('move.embargo.info')},
    hitEffect: function(target) { moveBuff(target,'embargo') },
    notUsableByEnemy: true,
}


move.brutalSwing = {  //new
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}



//fairy

move.disarmingVoice = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 40,
    affectedBy: [ability.cacophony.id],
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t('move.quickAttack.info')} ,
}

move.drainingKiss = {  
    moveset: [`fairy`],
    split: "physical",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return t('move.drainingKiss.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') }
}

move.fairyWind = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 60,
    info: function() {return t('move.bubbleBeam.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
    affectedBy: [ability.windRider.id]
}

move.echoedVoice = { 
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return t('move.furyCutter.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.cacophony.id]
}

move.alluringVoice = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 65,
    affectedBy: [ability.cacophony.id]
}

move.mirrorShrapnel = {  
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "fairy",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.spiritBreak = {  
    moveset: [`fairy`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 75,
    info: function() {return t('move.auroraBeam.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
}



move.dazzlingGleam = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 85
}

move.playRough = {
    moveset: [`fairy`, `dark`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 90
}

move.auroraPunch = {  
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 80,
    affectedBy: [ability.ironFist.id]
}

move.moonblast = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 95,
    info: function() {return t('move.moonblast.info')},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'satkdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.babydollEyes = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return t('move.growl.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.charm = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 0,
    info: function() {return t('move.featherDance.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.sweetKiss = {
    moveset: [`fairy`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return t('move.confuseRay.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.mistyTerrain = { 
    moveset: [`fairy`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return t('move.mistyTerrain.info', { tagMistyTerrain: tagMistyTerrain })} ,
    hitEffect: function(target) { changeWeather("mistyTerrain") },
}


move.lightScreen = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return t('move.lightScreen.info', { tagLightScreen: tagLightScreen })} ,
    hitEffect: function(target) { changeWeather("lightScreen") },
    notUsableByEnemy: true,
}

move.magicalTorque = {  //new
    moveset: [`fairy`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: demeritBp,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

//unique skills

//tier 4 - learnt by normal pokemon = 120 uncompromised dmg
//tier 5 - learnt by legendary pokemon = 140 uncompromised dmg


move.acupressure = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.acupressure.info')},
    hitEffect: function(target) { 
        const picked = arrayPick(["atkup2","satkup2","defup2","sdefup2","speup2",],2)
        moveBuff(target,picked[0],"self");
        moveBuff(target,picked[1],"self");
    },
}

move.batonPass = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.batonPass.info')},
    hitEffect: function(target) { 
    for (const member in team){
        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) {
                moveBuff("wild",i,"team")
            }
        } 
    }
    for (const i in team[exploreActiveMember].buffs){
        if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0;
    }
    updateTeamBuffs();

            pkmn[ team[exploreActiveMember].pkmn.id ].playerHp = 0;
        updateTeamPkmn()

},
}

move.bellyDrum = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.bellyDrum.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1',"self"); moveBuff(target,'sdefdown1',"self"); moveBuff(target,'atkup1',"self"); moveBuff(target,'atkup2',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.boomburst = {
    split: "special",
    type: "normal",
    power: t4Base+15,
    affectedBy: [ability.cacophony.id]
}

move.eggBomb = {
    split: "special",
    type: "normal",
    power: t4Base+30,
}

move.cometPunch = {
    split: "physical",
    type: "flying",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
    affectedBy: [ability.ironFist.id]
}

move.payDay = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.payDay.info')},
    hitEffect: function(target) { 
        saved.hasPayDayBeenUsed = true
    },
}

move.teatime = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.teatime.info')},
    hitEffect: function(target) { 
        saved.hasTeatimeBeenUsed = true
    },
}

move.metronome = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.metronome.info')},
}

move.mimic = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t('move.mimic.info')},
}

move.meFirst = {
    split: "special",
    type: "normal",
    power: 0,
    timer: defaultPlayerMoveTimer/3,
    info: function() {return t('move.meFirst.info')} ,
}

move.burnUp = {
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return t('move.willOWisp.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.magmaStorm = {
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return t('move.sunnyDay.info', { tagSunny: tagSunny })},
    hitEffect: function(target) { changeWeather("sunny"); },
    affectedBy: [ability.windRider.id]
}

move.inferno = {
    split: "special",
    type: "fire",
    power: t4Base+60,
    info: function() {return t('move.inferno.info')},
    hitEffect: function(target) { moveBuff(target,'defdown2',"self"); moveBuff(target,'sdefdown2',"self"); },
    unaffectedBy: [ability.sheerForce.id],
}

move.aquaStep = {
    split: "physical",
    type: "water",
    power: t4Base-60,
    info: function() {return t('move.aquaStep.info')},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
    affectedBy: [ability.dancer.id]
}

move.hydroCannon = {
    split: "special",
    type: "water",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')},
    affectedBy: [ability.megaLauncher.id]
}

move.gigatonHammer = {
    split: "physical",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')}
}

move.razorShell = {
    split: "physical",
    type: "water",
    power: t4Base-20,
    info: function() {return t('move.drainingKiss.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') },
    affectedBy: [ability.sharpness.id]
}

move.tripleDive = {  
    split: "physical",
    type: "water",
    power: (t4Base+30)/3,
    info: function() {return `Hits 3 times`},
    multihit: [3,3],
}

move.electroBall = {
    split: "special",
    type: "electric",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t('move.electroBall.info')} ,
}

move.charge = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t('move.charge.info')},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self"), moveBuff(target,'defup1',"self") },
    restricted:true
}

move.ionise = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t('move.ionise.info')},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup2',"self") },
    restricted:true
}

move.appleAcid = {
    split: "special",
    type: "grass",
    power: t4Base-50,
    info: function() {return t('move.leer.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.chloroblast = {
    split: "special",
    type: "grass",
    power: t4Base+20,
    affectedBy: [ability.megaLauncher.id]
}

move.frenzyPlant = {
    split: "special",
    type: "grass",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.trailblaze = {
    split: "physical",
    type: "grass",
    power: t4Base-30,
    info: function() {return t('move.aquaStep.info')},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.auraWheel = { 
    split: "physical",
    type: "electric",
    power: t4Base-40,
    info: function() {return t('move.aquaStep.info')},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.freezeDry = {
    split: "special",
    type: "ice",
    power: t4Base,
    info: function() {return t('move.freezeDry.info')} ,
}

move.snowscape = { 
    split: "special",
    type: "ice",
    power: 0,
    info: function() {return t('move.snowscape.info', { tagHail: tagHail })} ,
    hitEffect: function(target) { changeWeather("hail"); moveBuff(target,'satkup1',"self") },
}

move.venoshock = {  
    split: "special",
    type: "poison",
    power: (t4Base+20)/2,
    info: function() {return t('move.venoshock.info', { tagPoisoned: tagPoisoned })},
    powerMod : function() { if (wildBuffs.poisoned>0 ) { return 2} else return 1 },
}

move.toxicThread = {
    split: "special",
    type: "poison",
    power: 0,
    info: function() {return t('move.toxicThread.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { moveBuff(target,'poisoned'); moveBuff(target,'spedown1') },
}

move.highHorsepower = {
    split: "physical",
    type: "ground",
    power: t4Base,
}

move.blazeKick = {
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.pyroBall = {
    split: "physical",
    type: "fire",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t('move.electroBall.info')} ,
    affectedBy: [ability.megaLauncher.id]

}

move.braveBird = {
    split: "physical",
    type: "flying",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.spectralThief = {
    split: "physical",
    type: "ghost",
    power: t4Base-20,
    info: function() {return t('move.spectralThief.info')},
    hitEffect: function(target) { 

    for (const buff in wildBuffs){
    if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) continue
    if (wildBuffs[buff]) moveBuff("wild",buff,"self");
    wildBuffs[buff] = 0
    }


     },

}

move.snipeShot = {
    split: "special",
    type: "water",
    power: t4Base+20,
}

move.moongeistBeam = {
    split: "special",
    type: "ghost",
    power: t4Base,
    info: function() {return t('move.moongeistBeam.info')},
    defenseBypass : true,
}

move.sunsteelStrike = {
    split: "physical",
    type: "steel",
    power: t4Base,
    info: function() {return t('move.moongeistBeam.info')},
    defenseBypass : true,
}

move.rockWrecker = {
    split: "physical",
    type: "rock",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.aeroblast = {
    split: "special",
    type: "flying",
    power: t4Base,
    affectedBy: [ability.windRider.id]
}

move.sacredFire = {
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.crabhammer = {
    split: "physical",
    type: "water",
    power: (t4Base+10)*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
    affectedBy: [ability.toughClaws.id]
}

move.iceHammer = {
    split: "physical",
    type: "ice",
    power: demeritBp+30,
    info: function() {return t('move.hammerArm.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDarts = {  
    split: "physical",
    type: "dragon",
    power: 50,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
    affectedBy: [ability.megaLauncher.id]
}

move.hiJumpKick = {
    split: "physical",
    type: "fighting",
    power: t4Base+20,
}

move.falseSurrender = { 
    split: "physical",
    type: "dark",
    power: t4Base,
}

move.headCharge = {
    split: "physical",
    type: "normal",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.megahorn = {
    split: "physical",
    type: "bug",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.needleArm = {
    split: "physical",
    type: "grass",
    power: demeritBp+60,
    info: function() {return t('move.needleArm.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown2',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.anchorShot = { 
    split: "physical",
    type: "steel",
    power: t4Base,
}

move.darkestLariat = { 
    split: "physical",
    type: "dark",
    power: t4Base,
}

move.dragonEnergy = {
    split: "special",
    type: "dragon",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.thunderCage = {
    split: "special",
    type: "electric",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t('move.electroBall.info')} ,
}


move.ruination = {
    split: "physical",
    type: "dark",
    power: t4Base,
    info: function() {return t('move.ruination.info')},
    castEffect: function(target) {
    if (pkmn[ team[exploreActiveMember].pkmn.id ].bst.atk>pkmn[ team[exploreActiveMember].pkmn.id ].bst.satk){
        this.split = "physical"
    } else this.split = "special"
    },
}

move.mindBlown = {
    split: "special",
    type: "fire",
    power: t4Base,
}

move.sparklingAria = {
    split: "special",
    type: "water",
    power: t4Base,
    info: function() {return t('move.sparklingAria.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
        }
     },
    affectedBy: [ability.cacophony.id]
}

move.floralHealing = {
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t('move.floralHealing.info')},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
            team[slot].buffs.freeze = 0
            team[slot].buffs.paralysis = 0
            team[slot].buffs.poisoned = 0
            team[slot].buffs.sleep = 0
            team[slot].buffs.confused = 0
        }
     },
}

move.revelationDance = {
    split: "special",
    type: "normal",
    power: 100,
    info: function() {return t('move.revelationDance.info')},
    castEffect: function(target) {
        this.type = pkmn[ team[exploreActiveMember].pkmn.id ].type[0]
        
    },
    affectedBy: [ability.dancer.id]
}

move.weatherBall = { //añade forecast ability guarro
    split: "special",
    type: "normal",
    power: (t4Base+30)/2,
    info: function() {return t('move.weatherBall.info', { tagSunny: tagSunny, tagRainy: tagRainy, tagSandstorm: tagSandstorm, tagHail: tagHail, tagFoggy: tagFoggy, tagElectricTerrain: tagElectricTerrain, tagGrassyTerrain: tagGrassyTerrain, tagMistyTerrain: tagMistyTerrain })},
    castEffect: function(target) {
        this.power = (t4Base+30)/2,
        this.type = "normal"
        if (saved.weatherTimer>0){
            this.power = ((t4Base+30)/2)*2
            if (saved.weather=="sunny") this.type = "fire"
            if (saved.weather=="rainy") this.type = "water"
            if (saved.weather=="sandstorm") this.type = "ground"
            if (saved.weather=="hail") this.type = "ice"
            if (saved.weather=="foggy") this.type = "ghost"
            if (saved.weather=="electricTerrain") this.type = "electric"
            if (saved.weather=="mistyTerrain") this.type = "psychic"
            if (saved.weather=="grassyTerrain") this.type = "grass"
        }
    },
}



move.poisonTail = {
    split: "physical",
    type: "poison",
    power: t4Base+20,
    info: function() {return t('move.poisonTail.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'poisoned') },
}



move.heatCrash = {
    split: "physical",
    type: "fire",
    power: demeritBp+30,
    info: function() {return t('move.supercellSlam.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.chatter = {
    split: "special",
    type: "flying",
    power: t4Base+30,
    info: function() {return t('move.chatter.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'confused') },
    affectedBy: [ability.cacophony.id]
}

move.voltTackle = {
    split: "physical",
    type: "electric",
    power: t4Base,
    info: function() {return t('move.thunderShock.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.zingZap = {
    split: "physical",
    type: "electric",
    power: t4Base+20,
    affectedBy: [ability.strongJaw.id]
}

move.lovelyKiss = {
    split: "physical",
    type: "fairy",
    power: t4Base+30,
    info: function() {return t('move.dizzyPunch.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.crushGrip = {
    split: "physical",
    type: "normal",
    power: t4Base+20
}

move.lightOfRuin = {
    split: "special",
    type: "fairy",
    power: 300,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return t('move.futureSight.info')} ,
}

move.spacialRend = {
    split: "special",
    type: "dragon",
    power: t4Base,
    affectedBy: [ability.sharpness.id]
}

move.fishiousRend = { 
    split: "physical",
    type: "water",
    power: 100,
    affectedBy: [ability.strongJaw.id]
}

move.armorCannon = { 
    split: "special",
    type: "fire",
    power: t4Base-10,
    affectedBy: [ability.megaLauncher.id]
}

move.bitterBlade = { 
    split: "physical",
    type: "fire",
    power: t4Base-10,
    affectedBy: [ability.sharpness.id]
}

move.brutalClaw = { 
    split: "physical",
    type: "fire",
    power: t4Base-40,
    affectedBy: [ability.toughClaws.id]
}

move.noRetreat = { 
    split: "special",
    type: "fighting",
    power: 0,
    info: function() {return t('move.noRetreat.info')},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self"); },
    restricted: true,
}

move.storedPower = { 
    split: "special",
    type: "psychic",
    power: 60,
    info: function() {return t('move.storedPower.info')},
    castEffect: function(target) {
        let power = 60
        if (team[exploreActiveMember].buffs?.satkup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.satkup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.atkup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.atkup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.speup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.speup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.defup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.defup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.sdefup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.sdefup2 > 0) power += 30
        this.power = power
    },
}

move.chillyReception = { 
    split: "special",
    type: "ice",
    power: 0,
    info: function() {return t('move.chillyReception.info', { tagHail: tagHail })} ,
    hitEffect: function(target) { changeWeather("hail"); if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.camouflage = { 
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return t('move.camouflage.info')},
    hitEffect: function(target) {
        moveBuff(target,'speup2',"self");
        if (saved.weatherTimer>0){
            if (saved.weather=="sunny") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fire"]
            if (saved.weather=="rainy") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["water"]
            if (saved.weather=="sandstorm") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ground"]
            if (saved.weather=="hail") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ice"]
            if (saved.weather=="foggy") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ghost"]
            if (saved.weather=="electricTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["electric"]
            if (saved.weather=="mistyTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["psychic"]
            if (saved.weather=="grassyTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["grass"]
            if (saved.weather=="trickRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["dark"]
            if (saved.weather=="weirdRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["bug"]
            if (saved.weather=="crossRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fighting"]
            if (saved.weather=="safeguard") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["normal"]
            if (saved.weather=="lightScreen") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fairy"]
        }
     },
     restricted: true,
}


move.tailGlow = { 
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return t('move.tailGlow.info')},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self"); moveBuff(target,'satkup2',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
    timer: defaultPlayerMoveTimer*1.5,
}

move.luminaCrash = { 
    split: "special",
    type: "psychic",
    power: t4Base,
    info: function() {return t('move.luminaCrash.info')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.speup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.speup1 > 0) {return 1.2} else return 1 },
}


move.flyingPress = { 
    split: "physical",
    type: "fighting",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.mountainGale = { 
    split: "physical",
    type: "ice",
    power: demeritBp+50,
    info: function() {return t('move.hammerArm.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.jetPunch = { 
    split: "physical",
    type: "water",
    power: t4Base/1.5,
    timer: defaultPlayerMoveTimer/1.5,
    info: function() {return t('move.jetPunch.info')},
    unaffectedBy: [ability.ironFist.id],
}


move.roarOfTime = {
    split: "special",
    type: "dragon",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')},
    affectedBy: [ability.cacophony.id]
}

move.doomDesire = {
    split: "special",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.beakBlast = {
    split: "physical",
    type: "normal",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t('move.hyperBeam.info')} ,
}

move.shadowForce = { 
    split: "physical",
    type: "ghost",
    power: t4Base-20,
    info: function() {return t('move.shadowForce.info')},
}

move.blueFlare = {
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return t('move.scorchingSands.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.boltStrike = {
    split: "special",
    type: "electric",
    power: t4Base-20,
    info: function() {return t('move.nuzzle.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.glaciate = {
    split: "special",
    type: "ice",
    power: t4Base-30,
    info: function() {return t('move.glaciate.info', { tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'freeze') },
}

move.howl = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.howl.info')},
    hitEffect: function(target) { moveBuff(target,'atkup2',"team")},
    affectedBy: [ability.cacophony.id],
    restricted : true,
}

move.lunarDance = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t('move.lunarDance.info')},
    hitEffect: function(target) { moveBuff(target,'satkup2',"team")},
    affectedBy: [ability.dancer.id],
    restricted : true,
}

move.aromaticMist = {
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t('move.aromaticMist.info')},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"team")},
}

move.fairyLock = { 
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t('move.fairyLock.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("fairy")) return; pkmn[saved.currentPkmn].temporalType = [`fairy`] },
}

move.electrify = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t('move.electrify.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("electric")) return; pkmn[saved.currentPkmn].temporalType = [`electric`] },
}

move.forestCurse = {
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return t('move.forestCurse.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("grass")) return; pkmn[saved.currentPkmn].temporalType = [`grass`] },
}

move.trickOrTreat = {
    split: "special",
    type: "ghost",
    power: 0,
    info: function() {return t('move.trickOrTreat.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("ghost")) return; pkmn[saved.currentPkmn].temporalType = [`ghost`] },
}

move.soak = {
    split: "special",
    type: "water",
    power: 0,
    info: function() {return t('move.soak.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("water")) return; pkmn[saved.currentPkmn].temporalType = [`water`] },
}

move.magicPowder = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t('move.magicPowder.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("psychic")) return; pkmn[saved.currentPkmn].temporalType = [`psychic`] },
}

move.mudSport = {
    split: "special",
    type: "ground",
    power: 0,
    info: function() {return t('move.mudSport.info')},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("ground")) return; pkmn[saved.currentPkmn].temporalType = [`ground`] },
}

move.boneRush = {
    split: "physical",
    type: "ground",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.clamp = {
    split: "physical",
    type: "water",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.waterShuriken = {
    split: "special",
    type: "water",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.barbBarrage = {
    split: "physical",
    type: "poison",
    power: 40,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.barrage = {
    split: "special",
    type: "grass",
    power: (t4Base+30)/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.mysticalPower = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t('move.chargeBeam.info')},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'satkup1','self') },
}

move.psyshieldBash = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t('move.psyshieldBash.info')},
    hitEffect: function(target) { moveBuff(target,'defup1',"self") },
    affectedBy: [ability.metalhead.id]
}

move.sketch = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.sketch.info')},
}


move.prismaticLaser = {
    split: "special",
    type: "psychic",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')} ,
}

move.lusterPurge = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t('move.acidSpray.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}

move.mistBall = {
    split: "special",
    type: "psychic",
    power: t4Base-10,
    info: function() {return t('move.magicalLeaf.info')},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.dynamicPunch = {
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return t('move.confuseRay.info', { tagConfused: tagConfused })},
    hitEffect: function(target) { moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.thunderousKick = {
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return t('move.leer.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.fieryWrath = {
    split: "special",
    type: "dark",
    power: t4Base-40,
    info: function() {return t('move.fieryWrath.info')},
    hitEffect: function(target) { moveBuff(target,'sdefdown1') },
}

move.freezingGlare = {
    split: "special",
    type: "psychic",
    power: t4Base-40,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.meteorAssault = { 
    split: "physical",
    type: "fighting",
    power: (t4Base+20)*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t('move.fireBlast.info')},
}

move.cottonGuard = {
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return t('move.cottonGuard.info')},
    hitEffect: function(target) { moveBuff(target,'defup2',"self"); moveBuff(target,'sdefup1',"self")},
}


move.kingsShield = {
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return t('move.kingsShield.info')},
    hitEffect: function(target) { moveBuff(target,'defup1',"self"); moveBuff(target,'sdefup2',"self")},
}

move.drumBeating = {
    split: "physical",
    type: "grass",
    power: t4Base-30,
    info: function() {return t('move.electroWeb.info')},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
    affectedBy: [ability.dancer.id]
}

move.tropKick = {
    split: "physical",
    type: "grass",
    power: t4Base,
    info: function() {return t('move.growl.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.fireLash = {
    rename: `noxiousLash`,
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return t('move.poisonPowder.info', { tagPoisoned: tagPoisoned })},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.clangingScales = {
    split: "special",
    type: "dragon",
    power: t4Base-20,
    info: function() {return t('move.leer.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    affectedBy: [ability.cacophony.id]
}

move.shiftGear = {
    split: "special",
    type: "steel", 
    power: 0,
    info: function() {return t('move.shiftGear.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    restricted: true,
}

move.kinesis = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t('move.kinesis.info')},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self") },
    restricted: true,
}

move.gearUp = { 
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return t('move.gearUp.info')},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team"); moveBuff(target,'speup1',"team");},
    restricted: true,
}

move.relicSong = {
    split: "special",
    type: "normal",
    power: t4Base-30,
    info: function() {return t('move.relicSong.info', { tagSleep: tagSleep })},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'sleep') },
    affectedBy: [ability.cacophony.id]
}

move.zapCannon = {
    split: "special",
    type: "electric",
    power: t4Base-50,
    info: function() {return t('move.thunderWave.info', { tagParalysis: tagParalysis })},
    hitEffect: function(target) { moveBuff(target,'paralysis'); },
    affectedBy: [ability.megaLauncher.id]
}

move.triAttack = {
    split: "special",
    type: "normal",
    power: t4Base+10,
    info: function() {return t('move.triAttack.info', { tagBurn: tagBurn, tagParalysis: tagParalysis, tagFreeze: tagFreeze })},
    hitEffect: function(target) { if (rng(0.10)){ if (rng(0.33)) {moveBuff(target,'burn')} else if (rng(0.50)) { moveBuff(target,'paralysis')} else moveBuff(target,'freeze') }},
}

move.judgment = { 
    split: "special",
    type: "normal",
    power: t4Base+50
}

move.rageFist = { 
    split: "physical",
    type: "ghost",
    power: t4Base/2,
    info: function() {return t('move.furyCutter.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;    },
    affectedBy: [ability.ironFist.id]
}

move.iceBall = {
    split: "physical",
    type: "ice",
    power: (t4Base+30)/3,
    info: function() {return t('move.furyCutter.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++; },
}

move.tripleAxel = { 
    split: "physical",
    type: "ice",
    power: t4Base/2,
    info: function() {return t('move.tripleAxel.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.3,this.buildup) },
    hitEffect: function(target) { if (this.buildup<3) this.buildup++;   },
    affectedBy: [ability.sharpness.id]

}

move.attackOrder = { 
    split: "physical",
    type: "bug",
    power: (t4Base+30)/3,
    info: function() {return t('move.attackOrder.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.populationBomb = { 
    split: "physical",
    type: "normal",
    power: (t4Base+30)/3,
    info: function() {return t('move.attackOrder.info')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.nobleRoar = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.nobleRoar.info')},
    hitEffect: function(target) { moveBuff(target,'atkdown2'); moveBuff(target,'satkdown2') },
}

move.hyperDrill = { 
    split: "physical",
    type: "normal",
    power: t4Base+80
}


//aqui me queo



move.fieryDance = {
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return t('move.fieryDance.info')},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id]
}

move.torchSong = {
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return t('move.torchSong.info')},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.cacophony.id]
}

move.seedFlare = {
    split: "special",
    type: "grass",
    power: t4Base-40,
    info: function() {return t('move.fieryWrath.info')},
    hitEffect: function(target) { moveBuff(target,'sdefdown1') },
}


move.vCreate = { 
    split: "physical",
    type: "fire",
    power: demeritBp+120,
    info: function() {return t('move.vCreate.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); moveBuff(target,'spedown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonAscent = { 
    split: "physical",
    type: "flying",
    power: demeritBp+60,
    info: function() {return t('move.dragonAscent.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.mysticalFire = {
    split: "special",
    type: "fire",
    power: demeritBp+60,
    info: function() {return t('move.mysticalFire.info')},
    hitEffect: function(target) { moveBuff(target,'satkdown2',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.headlongRush = {
    split: "physical",
    type: "ground",
    power: demeritBp+30,
    info: function() {return t('move.headlongRush.info')},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`) },
    unaffectedBy: [ability.sheerForce.id],
    affectedBy: [ability.metalhead.id]
}

move.sandsearStorm = {
    split: "special",
    type: "ground",
    power: t4Base,
    info: function() {return t('move.ember.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.windRider.id]
}

move.splash = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `...`} ,
}

move.conversion = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.conversion.info')},
    hitEffect: function(target) { moveBuff(target,'speup2',"self"); pkmn[ team[exploreActiveMember].pkmn.id ].type = [ move[ pkmn[ team[exploreActiveMember].pkmn.id] .moves.slot1  ].type  ] },
    restricted: true,
}

move.flameBurst = {
    split: "special",
    type: "fire",
    power: t4Base+30,
    info: function() {return t('move.flameBurst.info', { tagBurn: tagBurn })},
    hitEffect: function(target) { moveBuff(target,'burn',"team") },
}

move.morningSun = { 
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t('move.morningSun.info', { tagSunny: tagSunny })} ,
    hitEffect: function(target) { changeWeather("sunny"); moveBuff(target,'satkup1',"self") },
}






const movesAffectedByToughClaws = []
const movesAffectedByIronFist = []
const movesAffectedBySharpness = []
const movesAffectedByStrongJaw = []
const movesAffectedByMegaLauncher = []
const movesAffectedByDancer = []
const movesAffectedByWindRider = []
const movesAffectedByCacophony = []
const movesAffectedByMetalhead = []

for (const i in move){




    //sheer force
    if (move[i].power>0 && move[i].hitEffect && !move[i].unaffectedBy?.includes(ability.sheerForce.id) && move[i].buildup==undefined) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sheerForce.id)} else move[i].affectedBy = [ability.sheerForce.id] }
    //serene grace/pbond
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sereneGrace.id)} else move[i].affectedBy = [ability.sereneGrace.id] }
    //if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.parentalBond.id)} else move[i].affectedBy = [ability.parentalBond.id] }
    //technician
    if (move[i].power>0 && move[i].power<=60) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.technician.id)} else move[i].affectedBy = [ability.technician.id] }
    //skill link
    if (move[i].multihit && move[i].multihit[1]>move[i].multihit[0]) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.skillLink.id)} else move[i].affectedBy = [ability.skillLink.id] }
    //reckless/libero
    if (move[i].power>0 && move[i].timer>defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.reckless.id)} else move[i].affectedBy = [ability.reckless.id] }
    if (move[i].power>0 && move[i].timer<defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.libero.id)} else move[i].affectedBy = [ability.libero.id] }
    //climaTact
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('changeWeather(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.climaTact.id)} else move[i].affectedBy = [ability.climaTact.id] }
    
        
    


    if (move[i].affectedBy?.includes(ability.toughClaws.id)) movesAffectedByToughClaws.push(i)
    if (move[i].affectedBy?.includes(ability.ironFist.id)) movesAffectedByIronFist.push(i)
    if (move[i].affectedBy?.includes(ability.sharpness.id)) movesAffectedBySharpness.push(i)
    if (move[i].affectedBy?.includes(ability.strongJaw.id)) movesAffectedByStrongJaw.push(i)
    if (move[i].affectedBy?.includes(ability.megaLauncher.id)) movesAffectedByMegaLauncher.push(i)
    if (move[i].affectedBy?.includes(ability.dancer.id)) movesAffectedByDancer.push(i)
    if (move[i].affectedBy?.includes(ability.windRider.id)) movesAffectedByWindRider.push(i)
    if (move[i].affectedBy?.includes(ability.cacophony.id)) movesAffectedByCacophony.push(i)
    if (move[i].affectedBy?.includes(ability.metalhead.id)) movesAffectedByMetalhead.push(i)


    if (move[i].affectedBy?.includes(ability.sharpness.id)) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.iaido.id); } else move[i].affectedBy = [ability.iaido.id] }



    move[i].id = i
    if (move[i].timer == undefined) move[i].timer = defaultPlayerMoveTimer
}


