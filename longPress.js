// https://leetcode.com/problems/long-pressed-name/

var isLongPressedName = function(name, typed) {
    let nameIndex = 0
    
    for (let i=0; i<typed.length; i++) {
        if (name[nameIndex] === typed[i]) {
            nameIndex++
        } else if (name[nameIndex - 1] !== typed[i]) {
            return false
        }
    }
 
     if (nameIndex === name.length) {
         return true
     } else {
         return false
     }
 };

 const isLongPressedNameLeetcode100 = (name, typed) => {
    let i = 0;
    for (let j = 0; j < typed.length; j++) {
      if (i<name.length && name[i] == typed[j]) { // i 和 j 都步进1
        i++;
      } else if (i - 1 >= 0 && typed[j] == name[i - 1]) { // i - 1 >= 0代表name[i - 1]存在
        // 当前typed[j]是长按出来的，它右边可能还有长按出来的，只是j++
      } else { // name[i - 1]不存在，或 typed[j] != name[i - 1]，键入错误，直接返回false
        return false;
      }
    }
    if (i > name.length - 1) { // 遍历结束，如果i越界了，说明i的字符也考察完了，返回true
      return true;
    }
    return false; // i 没越界，说明还有别的字符未匹配，返回false
  }

  var isLongPressedNameLeetcodeSecond = function(name, typed) {
    if (name === typed) return true;
    if (name.length > typed.length) return false;
    const processName = process(name);
    const processTyped = process(typed);
    if (processName.length !== processTyped.length) return false;
    for (let i = 0; i < processName.length; i++) {
      const cn = processName[i];
      const ct = processTyped[i];
      if (cn[1] !== ct[1]) return false;
      if (cn[0] > ct[0]) return false;
    }
    return true;
  };

  var isLongPressedNameLeetcodeThird = function(name, typed) {
    
    let np = 0, tp = 0;
    
    while(np < name.length && tp < typed.length) {
        if (name[np] == typed[tp]) {
            np += 1;
            tp += 1;
        } else if(tp >=1 && typed[tp] == typed[tp - 1]) {
            tp += 1;
        } else {
            return false;
        }
    }
    
    if (np !== name.length) {
        return false;
    }
    
    while (tp < typed.length) {
        if (typed[tp] !== typed[tp - 1]) {
            return false;
        }
        tp += 1;
    }
    return true;
};
  
  const process = str => {
    const res = [];
    for (let i = 0; i < str.length; i++) {
      let count = 1;
      let curr = str[i];
      while (curr === str[i + 1]) {
        count++;
        i++;
      }
      res.push([count, curr]);
    }
    return res;
  }

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    isLongPressedName("leelee","lleeelee")
    isLongPressedName("pyplrz","ppyypllr")
    isLongPressedName("laiden","laiden")
    isLongPressedName("saeed","ssaaedd")
    isLongPressedName("alex","aaleex")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    isLongPressedNameLeetcode100("leelee","lleeelee")
    isLongPressedNameLeetcode100("pyplrz","ppyypllr")
    isLongPressedNameLeetcode100("laiden","laiden")
    isLongPressedNameLeetcode100("saeed","ssaaedd")
    isLongPressedNameLeetcode100("alex","aaleex")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    isLongPressedNameLeetcodeSecond("leelee","lleeelee")
    isLongPressedNameLeetcodeSecond("pyplrz","ppyypllr")
    isLongPressedNameLeetcodeSecond("laiden","laiden")
    isLongPressedNameLeetcodeSecond("saeed","ssaaedd")
    isLongPressedNameLeetcodeSecond("alex","aaleex")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<1000000;u++) {
    isLongPressedNameLeetcodeThird("leelee","lleeelee")
    isLongPressedNameLeetcodeThird("pyplrz","ppyypllr")
    isLongPressedNameLeetcodeThird("laiden","laiden")
    isLongPressedNameLeetcodeThird("saeed","ssaaedd")
    isLongPressedNameLeetcodeThird("alex","aaleex")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)