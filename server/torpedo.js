const shortid = require("shortid");
const ObjectClass = require("./object");
const Constants = require("../shared/constants");

class Torpedo extends ObjectClass {
  constructor(parentID, x, y, dir) {
    super(shortid(), x, y, dir, Constants.TORP_SPEED);
    this.parentID = parentID; //so that a torpedo doesnt hit its firer
  }

  // Returns true if the torpedo should be destroyed
  update(dt) {
    super.update(dt);
    return (
      this.x < 0 ||
      this.x > Constants.MAP_SIZE ||
      this.y < 0 ||
      this.y > Constants.MAP_SIZE
    );
  }
}
