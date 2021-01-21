// https://leetcode.com/problems/text-justification/

var fullJustify = function(words, maxWidth) {
    let output = [[]]
    let outputIndex = 0
    let count = 0
    
    for (let i=0;i<words.length;i++) {
        if (count + words[i].length <= maxWidth) {
            count += words[i].length + 1
            output[outputIndex].push(words[i])
        } else {
            count = maxWidth - count + 1
            
            let pointer = 0
            while (count > 0) {
                output[outputIndex][pointer] += ' '
                count--
                pointer++
                if (pointer > output[outputIndex].length - 2) {
                    pointer = 0
                }                
            }
            
            count = words[i].length + 1
            outputIndex++
            output[outputIndex] = [words[i]]
        }
        
    }
    
    while (count <= maxWidth) {
        output[output.length - 1][output[output.length - 1].length - 1] += ' '
        count++
    }
    
    for (let i=0;i<output.length;i++) {
        output[i] = output[i].join(' ')
    }
    
    return output
};

var fullJustifyLeetcode100 = function(words, maxWidth) {
    for (let res = [[]], i = 0, letters = 0; i <= words.length; letters += words[i++].length) {
      let row = res[res.length - 1];
      if (i === words.length || row.length && letters + row.length + words[i].length > maxWidth) {
          if (row.length === 1 || i === words.length) {
              res[res.length - 1] = row.join(' ') + ' '.repeat(maxWidth - letters - row.length + 1);
              if (i === words.length) return res;
          } else {
              let line = row[0];
              let spaces = maxWidth - letters;
              let minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
              let addSpace = spaces % (row.length - 1);
              for (let w = 1; w < row.length; w++) {
                  line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
              }
              res[res.length - 1] = line;
          }
          res.push([]);
          letters = 0;
      }
      res[res.length - 1].push(words[i]);
  }
};

const fullJustifyLeetcodeSecond = (words, maxWidth) => {
    const results = [];
    let subResults = [];
    let curLength = 0;
    for (let i = 0; i < words.length; ++i) {
        const word = words[i];
 
        if (word.length > maxWidth - curLength) {
            if (subResults.length > 2) {
                subResults.pop();
                curLength -= 1;
            }

            while (curLength < maxWidth) {
                for (let idx = 0; idx < subResults.length; ++idx) {
                    if (curLength === maxWidth) {
                        break;
                    }
                    
                    const str = subResults[idx];
                    
                    if (str.includes(" ")) {
                        subResults[idx] = str + " ";
                        curLength += 1;
                    }
                }
            }
            
            while (curLength > maxWidth) {
                subResults.pop();
                curLength -= 1;
            }

            const subStr  = subResults.join("");
            results.push(subStr);
            subResults = [word, " "];
            curLength = word.length + 1;
        } else {
            subResults.push(word);
            subResults.push(" ");
            curLength += word.length + 1;
        }
    }

    while (curLength < maxWidth) {
        subResults.push(" ");
        curLength += 1;
    }

    while (curLength > maxWidth) {
        subResults.pop();
        curLength -= 1;
    }
    
    const subStr  = subResults.join("");
    results.push(subStr);

    return results;
};

var fullJustifyLeetcodeThird = function(words, maxWidth) {
    const lines = [];
    
    let currWidth = 0, currLine = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (currWidth + word.length + currLine.length > maxWidth) {
            for (let j = 0; j < maxWidth - currWidth; j++) {
                if (currLine.length === 1) {
                    currLine[0] = `${currLine[0]} `;
                } else {
                    currLine[j % (currLine.length - 1)] = `${currLine[j % (currLine.length - 1)]} `;
                }
            }
            
            lines.push(currLine.join(''));
            currWidth = 0;
            currLine = [];
        }
        
        currWidth += word.length;
        currLine.push(word);
    }
    
    if (currLine.length > 0) {
        const s = currLine.join(' ');
        const extraSpace = (new Array(maxWidth - s.length + 1)).join(' ');
        lines.push(`${s}${extraSpace}`);
    }
    
    return lines;
};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    fullJustify(["This", "is", "an", "example", "of", "text", "justification."],16)
    fullJustify(["What","must","be","acknowledgment","shall","be"],16)
    fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    fullJustifyLeetcode100(["This", "is", "an", "example", "of", "text", "justification."],16)
    fullJustifyLeetcode100(["What","must","be","acknowledgment","shall","be"],16)
    fullJustifyLeetcode100(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    fullJustifyLeetcodeSecond(["This", "is", "an", "example", "of", "text", "justification."],16)
    fullJustifyLeetcodeSecond(["What","must","be","acknowledgment","shall","be"],16)
    fullJustifyLeetcodeSecond(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
    fullJustifyLeetcodeThird(["This", "is", "an", "example", "of", "text", "justification."],16)
    fullJustifyLeetcodeThird(["What","must","be","acknowledgment","shall","be"],16)
    fullJustifyLeetcodeThird(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)