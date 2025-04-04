export var Breakpoint;
(function (Breakpoint) {
  Breakpoint[Breakpoint["xs"] = 375] = "xs";
  Breakpoint[Breakpoint["sm"] = 640] = "sm";
  Breakpoint[Breakpoint["md"] = 768] = "md";
  Breakpoint[Breakpoint["lg"] = 1024] = "lg";
  Breakpoint[Breakpoint["xl"] = 1280] = "xl";
  Breakpoint[Breakpoint["2xl"] = 1536] = "2xl";
  Breakpoint[Breakpoint["3xl"] = 1920] = "3xl";
})(Breakpoint || (Breakpoint = {}));
export function compareBreakpoint(type, breakpoint) {
  const { innerWidth } = window;
  switch (type) {
    case 'min': {
      return innerWidth >= breakpoint;
    }
    case 'max': {
      return innerWidth < breakpoint;
    }
    default:
      return false;
  }
}
//# sourceMappingURL=breakpoints.js.map
