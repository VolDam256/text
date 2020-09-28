import React from "react";

function mathhelper1(pozicia) {
  var newmargin = pozicia;
  return newmargin;
}

function mathhelper2(width) {
  var newwidth = width / 100;
  return newwidth;
}

export function onClick_trans(nomer) {
  if (nomer == 0) {
    return mathhelper1(0);
  }

  if (nomer == 1) {
    return mathhelper1(135);
  }

  if (nomer == 2) {
    return mathhelper1(326);
  }

  if (nomer == 3) {
    return mathhelper1(328);
  }
}

export function onClick_scale(nomer) {
  if (nomer == 0) {
    return mathhelper2(100);
  }

  if (nomer == 1) {
    return mathhelper2(105);
  }

  if (nomer == 2) {
    return mathhelper2(85);
  }

  if (nomer == 3) {
    return mathhelper2(130);
  }
}

export function onMouse_trans(whereLine, nomer) {
  if (whereLine == 0) {
    if (nomer == 0) {
      return mathhelper1(0);
    }
    if (nomer == 1) {
      return mathhelper1(29);
    }

    if (nomer == 2) {
      return mathhelper1(36);
    }

    if (nomer == 3) {
    }
  }
}

export function onMouse_scale(whereLine, nomer) {
  if (whereLine == 0) {
    if (nomer == 0) {
      return mathhelper2(100);
    }
    if (nomer == 1) {
      return mathhelper2(246);
    }

    if (nomer == 2) {
      return mathhelper2(375);
    }

    if (nomer == 3) {
    }
  }
}

/*export function otvedenie(element) {
  if (whereLine == 0) {
    element.onmouseout = function () {
      rashirenie(100, 0);
    };
  }
  if (whereLine == 1) {
    element.onmouseout = function () {
      rashirenie(110, 136);
    };
  }
  if (whereLine == 2) {
    element.onmouseout = function () {
      rashirenie(85, 285);
    };
  }
  if (whereLine == 3) {
    element.onmouseout = function () {
      rashirenie(130, 410);
    };
  }
}
*/
/*
export function navedenie(whereLine, nomer) {
  if (whereLine == 0) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(100, 0);
      };
    }
    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(245, 0);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(370, 0);
      };
    }

    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(540, 0);
      };
    }
  }

  if (whereLine == 1) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(245, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(110, 135);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(235, 135);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(405, 135);
      };
    }
  }

  if (whereLine == 2) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(370, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(230, 140);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(85, 285);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(255, 285);
      };
    }
  }

  if (whereLine == 3) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(540, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(400, 140);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(255, 285);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(130, 410);
      };
    }
  }
}*/
