// https://leetcode.com/problems/determine-if-string-halves-are-alike/

var halvesAreAlike = function(s) {
    let hash = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true
    }
    let count = 0
    
    for (let i=0;i<Math.floor(s.length/2);i++) {
        if (hash[s[i]]) {
            count++
        }
    }
    
    for (let i=Math.floor(s.length/2);i<s.length;i++) {
        if (hash[s[i]]) {
            count--
        }
        if (count < 0) {
            return false
        }
    }

    if (count === 0) {
        return true
    }
    
    return false
};

var halvesAreAlike2 = function(s) {
    let s1 = s.slice(0,s.length/2).match(/[aeiou]/gi)
    let s2 = s.slice(s.length/2).match(/[aeiou]/gi)

    if (!s1 || !s2) {
        return s1 === s2 ? true : false
    }
    
    if (s1.length === s2.length) {
        return true
    }

    return false
};

var halvesAreAlikeLeetcode100 = function(s) {
    s = s.toLowerCase().split('');
    let vowels = ['a', 'i', 'e', 'o', 'u'];
    let w = s.slice(0, s.length / 2) 
    let q = s.slice(s.length/2, s.length); 
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < w.length; i++) {
        if (vowels.includes(q[i])) {
            count2 += 1;
        }
        if (vowels.includes(w[i])) {
            count1 += 1;
        }
    }
    return count1 == count2;
};

var halvesAreAlikeLeetcode2 = function(s) {
    let firstHalf = s.slice(0,~~(s.length / 2)),
        secondHalf = s.slice(~~(s.length / 2));
    
    return (firstHalf.match(/[aeiou]/gi)|| []).length === (secondHalf.match(/[aeiou]/gi)|| []).length
    
};

var halvesAreAlikeLeetcode3 = function(s) {
    let midIdx = Math.floor(s.length / 2);
    let vowels = new Set('aeiouAEIOU');
    let balanced = 0;
    for (let i = 0; i < midIdx; i++) {
        if (vowels.has(s[i])) balanced += 1;
        if (vowels.has(s[i + midIdx])) balanced -= 1;
    }
    
    return balanced === 0;
};

var halvesAreAlikeLeetcode4 = function(s) {

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let aC = 0
    let bC= 0
    for (let i=0;i<s.length/2;i++){
      vowels.includes(s[i])&&aC++
    }
    for (let i=s.length/2;i<s.length;i++){
      vowels.includes(s[i])&&bC++
    }
    return aC==bC
  };

  var halvesAreAlikeLeetcode5 = function(s) {
    if (s.length % 2 !== 0) return;
    
    vowels = 'aeiouAEIOU';
    
    let mid = s.length / 2;
    let a = s.split('').slice(0, mid);
    let b = s.split('').slice(mid);
    
    let sizeA = a.filter(c => vowels.includes(c.toLowerCase()));
    let sizeB = b.filter(c => vowels.includes(c.toLowerCase()));
    
    return sizeA.length === sizeB.length;
};

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlike("aa")
    halvesAreAlike("aaaa")
    halvesAreAlike("aaab")
    halvesAreAlike("aabb")
    halvesAreAlike("book")
    halvesAreAlike("textbook")
    halvesAreAlike("MerryChristmas")
    halvesAreAlike("AbCdEfGh")
    halvesAreAlike("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlike("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlike2("aa")
    halvesAreAlike2("aaaa")
    halvesAreAlike2("aaab")
    halvesAreAlike2("aabb")
    halvesAreAlike2("book")
    halvesAreAlike2("textbook")
    halvesAreAlike2("MerryChristmas")
    halvesAreAlike2("AbCdEfGh")
    halvesAreAlike2("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlike2("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlikeLeetcode100("aa")
    halvesAreAlikeLeetcode100("aaaa")
    halvesAreAlikeLeetcode100("aaab")
    halvesAreAlikeLeetcode100("aabb")
    halvesAreAlikeLeetcode100("book")
    halvesAreAlikeLeetcode100("textbook")
    halvesAreAlikeLeetcode100("MerryChristmas")
    halvesAreAlikeLeetcode100("AbCdEfGh")
    halvesAreAlikeLeetcode100("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlikeLeetcode100("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlikeLeetcode2("aa")
    halvesAreAlikeLeetcode2("aaaa")
    halvesAreAlikeLeetcode2("aaab")
    halvesAreAlikeLeetcode2("aabb")
    halvesAreAlikeLeetcode2("book")
    halvesAreAlikeLeetcode2("textbook")
    halvesAreAlikeLeetcode2("MerryChristmas")
    halvesAreAlikeLeetcode2("AbCdEfGh")
    halvesAreAlikeLeetcode2("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlikeLeetcode2("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlikeLeetcode3("aa")
    halvesAreAlikeLeetcode3("aaaa")
    halvesAreAlikeLeetcode3("aaab")
    halvesAreAlikeLeetcode3("aabb")
    halvesAreAlikeLeetcode3("book")
    halvesAreAlikeLeetcode3("textbook")
    halvesAreAlikeLeetcode3("MerryChristmas")
    halvesAreAlikeLeetcode3("AbCdEfGh")
    halvesAreAlikeLeetcode3("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlikeLeetcode3("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlikeLeetcode4("aa")
    halvesAreAlikeLeetcode4("aaaa")
    halvesAreAlikeLeetcode4("aaab")
    halvesAreAlikeLeetcode4("aabb")
    halvesAreAlikeLeetcode4("book")
    halvesAreAlikeLeetcode4("textbook")
    halvesAreAlikeLeetcode4("MerryChristmas")
    halvesAreAlikeLeetcode4("AbCdEfGh")
    halvesAreAlikeLeetcode4("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlikeLeetcode4("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<10000;u++) {
    halvesAreAlikeLeetcode5("aa")
    halvesAreAlikeLeetcode5("aaaa")
    halvesAreAlikeLeetcode5("aaab")
    halvesAreAlikeLeetcode5("aabb")
    halvesAreAlikeLeetcode5("book")
    halvesAreAlikeLeetcode5("textbook")
    halvesAreAlikeLeetcode5("MerryChristmas")
    halvesAreAlikeLeetcode5("AbCdEfGh")
    halvesAreAlikeLeetcode5("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC")
    halvesAreAlikeLeetcode5("aoiUIOOOOOOeaiEoUoAAAEIieoiiEOOUUoAIaEOOIEUoIAeiaOuAOeOOIOoUeoaoIuoAUuAIaAaIUiiEoUeeOiIueUiOuoEUUuaioIaIeuAiEeUAUiEUOoeoOeOiIoiEOAOOaUaIuaOIooaaIieuiaAuuAUIaUioUeuaoUEOEOUieeuEeIuUAeuOEAeiEAEUaooaieIoUEauaEOAEAioAeUauoooiiaoUOEauuooAeUueOeoAUAEOaOIUoUoOOAUioaiaaoEioIAIOeUaUuEOuIIAUOeaueEeEIuiuOuiAoAIIAeAEAiAOEEuEuIUUIuaOaEIeUaieIeeUaeoiIoooOuAOEOeIOUEuEOeOUAoOuoeuEIiuaoouoIeOOAuIiEiOuuiUaiaAUioiEOAoeIEAIaoUOOaeueOeouuIoAEOAAaIoAoUeOIUiUoIUEUEiueUeaeoOIOauaEoUoUIIAEIuuAioaAOIIuOAIaUUeuueIIueiAAaEpQHJQrVvTqXRMWGlyZGtBflxsnVSHDKPHQvQwVYzhwjHqCkRjxpRNFhYlxspxYJPNhmwfNmMNxTKRfwGWTjDSdDXBhBTNQyZlMDsSHqLzJPLcnCszYsSPVpTgjCtnTSCXxKrqMdfCtQPsCzKZNyVpzYRRCcGQHFnKLRcDKfFgTXBPwtsKrhxrmkjCGCVSwStqrRnyXqpcGfsFMdRbYsPxdyzBLXvwLHjBfzywVvXLRQdJXsVlqztggmdMrRbBDwxbJwcwxNdgvWXDzYmlZLXCjZLRKMYZdGnvqBgxMkPBsgfjjfDVbmtCxxfHhVYyTBJCHZWmSMTlZNTYmLpTQHpxlCQqPVJtBvmrphdjzqrhjchQLHjWJxwbyQxlCCLybqjkMNhPfGSYMfpJcqNdwMVfshXgkRZMGPVPLgRktRqJsxWthMdZrjdgRdYNZJGsCwYTlwZnjHqVCxxrtMgRFTrMVcCGqBCSSTCncmkSqRfphGXBdrdxtXq")
}
end = Date.now()
timeElapsed = end - start
console.log(`min/max time: ${timeElapsed} ms`)