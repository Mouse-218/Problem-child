// declare global vars
let gameScenes = [];
let currentSceneIndex = 0;
var font;
//let song; //defines song to be used
//background and canvas
let bgImage01;
let bgImage02;
let bgImage03;

//p5play variables
//global vars
let Tilly;
let TillyAnim;
let coyoteSprite;
let badgerSprite;
let badgermSprite;
let flower1;
let flower2;
let flower3;
let flower4;
let flower5;
let flower6;
let flower7;
let flower8;

function preload() {
  //preloads the custom font
  font = loadFont("Font/ShadowsIntoLight-Regular.ttf");

  bgImage01 = loadImage("Background/Path 1.jpeg");
  bgImage02 = loadImage("Background/Dark 1.jpeg");
  bgImage03 = loadImage("Background/Water Stream.jpeg");

  flower1 = loadImage("Flowers/Pink Flower 1.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower2 = loadImage("Flowers/Pink Flower 2.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower3 = loadImage("Flowers/Purple Flower 1.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower4 = loadImage("Flowers/Purple Flower 2.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower5 = loadImage("Flowers/Red Flower 2.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower6 = loadImage("Flowers/Red Flower 3.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower7 = loadImage("Flowers/Yellow Flower 2.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  flower8 = loadImage("Flowers/Yellow Flower 3.png", {
    frameSize: [256, 256],
    frames: 1,
  });
  TillyAnim = loadAnimation("Sprites/Tilly.png", {
    frameSize: [115, 255],
    frames: 1,
  });
  coyoteSprite = loadAnimation("Sprites/Mr.Coyote.png", {
    frameSize: [138, 252],
    frames: 1,
  });
  badgermSprite = loadAnimation("Sprites/Mrs.Badger mad.png", {
    frameSize: [96, 240],
    frames: 1,
  });
  badgerSprite = loadAnimation("Sprites/Mrs.Badger.png", {
    frameSize: [96, 240],
    frames: 1,
  });
}

function setup() {
  let layout01 = new layout(520, windowHeight, bgImage01);
  let layout02 = new layout(520, windowHeight, bgImage02);
  let layout03 = new layout(520, windowHeight, bgImage03);

  textFont(font); //displays font
  //song = loadSound("Secret Waterfall - Made with Clipchamp.mp3"); //loads a song file

  //p5Play setup
  //create new sprite
  Tilly = new Sprite(15, 255, 48, 38);

  flower1 = new Sprite(510, 256, 42, 31);
  flower1.image = "Flowers/Pink Flower 1.png";
  flower1.overlaps(Tilly);

  flower2 = new Sprite(465, 248, 51, 17);
  flower2.image = "Flowers/Pink Flower 2.png";
  flower2.overlaps(Tilly);

  flower3 = new Sprite(465, 270, 51, 17);
  flower3.image = "Flowers/Purple Flower 1.png";
  flower3.overlaps(Tilly);

  flower4 = new Sprite(500, 245, 68, 27);
  flower.image = "Flowers/Purple Flower 2.png";
  flower.overlaps(Tilly);

  flower5 = new Sprite(500, 245, 68, 27);
  flower.image = "Flowers/Red Flower 2.png";
  flower.overlaps(Tilly);

  flower6 = new Sprite(500, 245, 68, 27);
  flower.image = "Flowers/Red Flower 3.png";
  flower.overlaps(Tilly);

  flower7 = new Sprite(500, 245, 68, 27);
  flower.image = "Flowers/Yellow Flower 2.png";
  flower.overlaps(Tilly);

  flower8 = new Sprite(500, 245, 68, 27);
  flower.image = "Flowers/Yellow Flower 3.png";
  flower.overlaps(Tilly);

  badgermSprite = new Sprite(280, 235, 50, 53);
  badgermSprite.image = "Sprites/Mrs.Badger mad.png";
  badgermSprite.overlaps(coyote);

  badgerSprite = new Sprite(280, 235, 50, 53);
  badgerSprite.image = "Sprites/Mrs.Badger.png";
  badgerSprite.overlaps(Tilly);

  coyoteSprite = new Sprite(420, 235, 51, 58);
  coyoteSprite.image = "Sprites/Mr.Coyote.png";
  coyoteSprite.overlaps(Tilly);

  //load animation into sprite
  Tilly.addAnimation("walk", TillyAnim);
  Tilly.addAnimation("idle", TillyAnim);

  //Scene 1
  let scene1interactions = getScene1InteractionsArray(layout01);
  let scene1 = new gameScene(bgImage01, Tilly, scene1interactions, layout01);
  //Scene 2: Tilly meeting Mr.Coyote; bg changes to haunted forest
  let scene2interactions = getScene2InteractionsArray(layout02);
  let scene2 = new gameScene(bgImage02, Tilly, scene2interactions, layout02);
  //Scene 3: Ms. Badger standing up to Mr.Coyote; bg changes back to forest path
  let scene3interactions = getScene3InteractionsArray(layout03);
  let scene3 = new gameScene(bgImage03, Tilly, scene3interactions, layout03);
  //Interaction 4: Ms. Badger and Tilly picking flowers; bg changes to river
  let scene4interactions = getScene4InteractionsArray(layout01);
  let scene4 = new gameScene(bgImage01, Tilly, scene4interactions, layout01);

  gameScenes[0] = scene1;
  gameScenes[1] = scene2;
  gameScenes[2] = scene3;
  gameScenes[3] = scene4;

  loadCurrentScene();
  new Canvas(layout01.customWindowWidth, windowHeight);
}

function draw() {
  gameScenes[currentSceneIndex].draw();
}

//Scene 1:Tilly enters the forest
function getScene1InteractionsArray(layout) {
  let tillyDialoguePage0 = new dialoguePage(
    "The Beast between the Reeds",
    "To begin, press [1]", [1], null);
  // define page 1
  let tillyDialoguePage1 = new dialoguePage(
    "The sun shone bright through the trees as Tilly scurried down the well worn path on her way to the river. Her mother had sent her to collect seeds and wild flowers to brighten up the cottage for her grandmother’s arrival.", "If you wish to continue, press [1];\nTo go back, press [b]", [2], null);
  // define page 2
  let tillyDialoguePage2 = new dialoguePage(
    "As she scurried through the brush Tilly felt an unease that was not familiar to her. The forest was always a warm and inviting place but today it felt different; cold and darker. Tilly felt the hair on her neck stand up as she looked around nervously, but she only saw the underbrush and the towering trees.", "If you wish to continue, press [1];\nTo go back, press [b]", [3], null);
  // define page 3
  let tillyDialoguePage3 = new dialoguePage(
    "“I’m just being silly, this is my first time going to the river by myself. I’m probably just jumpy.” Tilly chided herself for being such a child, she was after all 12 years old practically an adult.",
"If you wish to continue, press [1];\nTo go back, press [b]", [4], null);
  // define page 4
  let tillyDialoguePage4 = new dialoguePage(
    "Just as Tilly rounded the bend a snapping of branches could be heard. This stopped her in tracks. Tilly looked around nervously and noticed a shadow darting among the reeds of the river. She started to back up and was considering running back to her mother and her warm cottage.", "If you wish to continue, press [1];\nTo go back, press [b]", [5], null);
  //define page 5
  let tillyDialoguePage5 = new dialoguePage(
    " “No I’m brave, it is probably just the Chipmunk children scurrying among the reeds.” Tilly pulled herself up to her full height of 3ft and started back down the trail.Tilly was almost to the river when a rustling in the reeds caught her attention.", "If you wish to continue, press [1];\nTo go back, press [b]", [6], null);

  //Tilly's page setup
  let tillyDialoguePages = [
    tillyDialoguePage0,
    tillyDialoguePage1,
    tillyDialoguePage2,
    tillyDialoguePage3,
    tillyDialoguePage4,
    tillyDialoguePage5];

  let tillyInteraction = new interaction( "coyote", 395, 215, 60, 65, coyoteDialoguePages, layout, true, "Sprites/Mr.Coyote.png");

  let interactions = [coyoteInteraction, tillyInteraction];

  return interactions;
}
//Scene 2:Tilly's interaction with Mr.Coyote
function getScene2InteractionsArray(layout) {
  //define page 6
  let coyoteDialoguePage6 = new dialoguePage(
    "Tilly looked toward the reeds expecting to see Ms.Hazel’s rambunctious children, but instead she was staring at the massive paws of a Mr.Coyote's hunting dog. Mr.Coyote stared down at her with his large yellow eyes narrowing.“Well hello little miss and where are you off to this fine morning?”", "If you wish to continue, press [1];\nTo go back, press [b]", [7], null);
  //define page 7
  let coyoteDialoguePage7 = new dialoguePage(
    "Tilly didn’t like the way the words rolled out dripping with malice. Her nose twitched and her eyes darted around anxiously, “I don’t think I should tell you that Mama said never talk to strangers.”Mr.Coyote smiled,”Well why don’t I walk alongside you and we can become friends”.", "If you wish to continue, press [1];\nTo go back, press [b]", [8], null);
  //define page 8
  let coyoteDialoguePage8 = new dialoguePage(
    "Tilly backed up slowly, “No, I don’t think that’s a good idea. Mama said I need to be wary of strangers because they like to hurt little girls.” The coyote feigned his feelings being hurt, “Come now little miss, do I look like I would hurt a fly?”.", "If you wish to continue, press [1];\nTo go back, press [b]", [9], null);
  //define page 9
  let coyoteDialoguePage9 = new dialoguePage(
    "Tilly started to back up slowly. She wished so much that there were other people on the trail. Tilly was very uncomfortable but could not think of a thing to say to send the old Mr.Coyote on his way.", "If you wish to continue, press [1];\nTo go back, press [b]",[10], null);
  //Mr.Coyote's page setup
  let coyoteDialoguePages = [
    coyoteDialoguePage6,
    coyoteDialoguePage7,
    coyoteDialoguePage8,
    coyoteDialoguePage9];

  let coyoteInteraction = new interaction("badger", 410, 272, 80, 45, badgerDialoguePages, layout, true, "Sprites/Mrs.Badger mad.png");

  let interactions = [coyoteInteraction, badgerInteraction];

  return interactions;
}
//Scene 3:Ms.Badger intervenes
function getScene3InteractionsArray(layout) {
  // define page 10
  let badgerDialoguePage10 = new dialoguePage(
    "”Hey now what’s this?” Tilly and Mr.Coyote turned their attention to the brush on the other side of the reeds. A stout old woman came waddling onto the trail. Tilly recognized her as Ms.Merrimack Badger, a kind soul who often walked the trail to stretch her arthritic joints.", "If you wish to continue, press [1];\nTo go back, press [b]", [11], null);
  let badgerDialoguePage11 = new dialoguePage(
    "Mr.Coyote grumbled, “It is none of your business you old spinster. Be gone and leave us to our conversation.”Ms.Merrimack narrowed her eyes at the offending creature and straightened herself to her full height, “No, I don’t think I will. I’m not too fond of an old pest bothering a poor little child.”", "If you wish to continue, press [1];\nTo go back, press [b]", [12], null);
  //define page 12
  let badgerDialoguePage12 = new dialoguePage(
    "Tilly scooted closer to Ms.Merrimack hiding herself behind the woman's skirt. Mr.Coyote frowned deeply, “Do not trifle with me you old witch. You are simply jealous that I want to walk down by the river with a pretty little lady instead of an old crone like you.”", "If you wish to continue, press [1];\nTo go back, press [b]", [13], null);
  //define page 13
  let badgerDialoguePage13 = new dialoguePage(
    "The old woman laughed and puffed out her chest. “Do you always play so coy? I may be old, but I’m not blind. I know all too well the intentions of predators like you.”", "If you wish to continue, press [1];\nTo go back press[b]", [14], null);
  // define page 14
  let badgerDialoguePage14 = new dialoguePage(
    "Mr.Coyote grumbled some more while his hunting dog growled, “Fine, have it your way Ms.Badger. I was simply trying to be nice but I suppose that’s not allowed anymore.” Mr.Coyote pulled his mouth into a visage of mock sadness before strutting on down the trail behind them.", "If you wish to continue, press [1];\nTo go back, press [b]", [15], null);
  //Ms.Badger's page setup
  let badgerDialoguePages = [
    badgerDialoguePage10,
    badgerDialoguePage11,
    badgerDialoguePage12,
    badgerDialoguePage13,
    badgerDialoguePage14];
  let badgerInteraction = new interaction("Tilly", 410, 272, 80, 45, flowersDialoguePages, layout, true, "Sprites/Tilly.png");

  let interactions = [badgerInteraction, tillyInteraction];

  return interactions;
}
//Scene 4:Picking flowers
function getScene4InteractionsArray(layout) {
  // define page 15
  let flowersDialoguePage15 = new dialoguePage(
    "Ms.Merrimack turned to Tilly. “Take it from me, child. I may be old, but I was young once and I know from experience that you have to be on guard in these woods.” Tilly sniffled, “This trail always felt so warm when I would walk it with Mama.”", "If you wish to continue, press [1];\nTo go back, press [b]", [16], null);
  // define page 16
  let flowersDialoguePage16 = new dialoguePage(
    "Ms.Merrimack nodded sympathetically, “Ay, it was always warm when I would walk it with my mother.” “But when one is alone the woods take on a different tune” Ms. Merrimack pulled the child close and they began to walk down the trail to the river. Tilly looked up at the old soul and smiled, if she had not shown up when she did who knows what would have happened to her.", "To conitinue, press [1],\nTo go back press [b]", [17], null);
  // define page 17
  let flowersDialoguePage17 = new dialoguePage(
    'As they collected seeds and wild flowers by the river’s edge Ms.Merrimack gave Tilly some advice. “If your mother sends you out to the river again I want you to tell me and I will go with you.” Tilly looked at her confused. Ms.Merrimack sighed, “Unfortunately it is not safe for a young lady to go through these woods alone. If you must go out, take a friend with you. Predators are cowards when faced with a group."', "To end, press [1]", [18], null);
  //define page 18
  let flowerDialoguePage18 = new dialoguePage(
    "The End",
    "To go back to the beginning, press [1]", [0], null);
  //Flower picking page setup
  let flowersDialoguePages = [
    flowersDialoguePage10,
    flowersDialoguePage11,
    flowersDialoguePage12,
    flowersDialoguePage13,
    flowersDialoguePage14];
  let flowersInteraction = new interaction("Tilly", 410, 272, 80, 45, tillyDialoguePages, layout, true, "Sprites/Tilly.png");

  let interactions = [flowersInteraction, tillyInteraction];

  return interactions;
}

function loadCurrentScene() {
  for (let i = 0; i < gameScenes.length; i++) {
    let interactions = gameScenes[i].interactions;
    for (let j = 0; j < interactions.length; j++) {
      if (i == currentSceneIndex) {
        interactions[j].p5Sprite.visible = interactions[j].visibleFlag;
      } else {
        interactions[j].p5Sprite.visible = false;
      }
    }
  }
}

function checkForSceneChange() {
  let interaction = gameScenes[currentSceneIndex].interactionInProgress;

  if (interaction) {
    let currentDialoguePage =
      interaction.dialoguePages[interaction.dialogueIndex];

    if (currentDialoguePage.goToScene !== null) {
      currentSceneIndex = currentDialoguePage.goToScene;

      loadCurrentScene();
    }
  }
}
//setup for page interaction buttons
function keyPressed() {
  //bottom text
  if (key == "b") {
    // go to previous page
    currentPageNum = previousPageNum;
  } else {
    // convert user input into int
    let userChoiceAsInt = parseInt(key);

    // subtract one from whatever choice the user made so that user choice can be correctly mapped to the consequences array for this page
    let consequencesIndex = userChoiceAsInt - 1;

    // create a local var version of the consequences array for the current page
    let currentConsequences = pages[currentPageNum].consequences;

    if (
      consequencesIndex >= 0 &&
      consequencesIndex < currentConsequences.length
    ) {
      previousPageNum = currentPageNum;
      currentPageNum = currentConsequences[consequencesIndex];
    }
  }

  //function setup for Tilly's movements
  //if left
  if (kb.pressing("left")) {
    Tilly.changeAni("walk");
    Tilly.vel.x = -2;
    Tilly.mirror.x = true;
  }
  //if right
  else if (kb.pressing("right")) {
    Tilly.changeAni("walk");
    Tilly.vel.x = 2;
    Tilly.mirror.x = false;
  } else if (kb.pressing("up")) {
    Tilly.vel.y = -2;
    Tilly.changeAni("walk");
  } else if (kb.pressing("down")) {
    Tilly.vel.y = 2;
    Tilly.changeAni("walk");
  }
  let interaction = gameScenes[currentSceneIndex].interactionInProgress;

  if (interaction) {
    //convert user input
    let userChoiceAsInt = parseInt(key);

    // subtract one from whatever choice
    // the user made so that user choice
    // can be correctly mapped to the
    // consequences array for this page
    let consequencesIndex = userChoiceAsInt - 1;

    // create a local var version of
    // the consequences array for the
    // current page
    let currentConsequences =
      interaction.dialoguePages[interaction.dialogueIndex].consequences;

    if (
      consequencesIndex >= 0 &&
      consequencesIndex < currentConsequences.length
    ) {
      interaction.dialogueIndex = currentConsequences[consequencesIndex];
      //previousPageNum = currentPageNum;
      //currentPageNum = currentConsequences[consequencesIndex];
    }
  }
}

function keyReleased() {
  Tilly.vel.x = 0;
  Tilly.vel.y = 0;
  Tilly.changeAni("idle");
}
