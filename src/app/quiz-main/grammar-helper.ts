export class GrammarHelper {
	/*
	 * indefinite-article.js v1.0.0, 12-18-2011
	 *
	 * @author: Rodrigo Neri (@rigoneri)
	 *
	 * (The MIT License)
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the 'Software'), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
  static getIndefiniteArticle(phrase) {
    // Getting the first word
    const match = /\w+/.exec(phrase);
    let word;
    if (match) {
      word = match[0];
    } else {
      return 'an';
    }

    const l_word = word.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    const alt_cases = ['honest', 'hour', 'hono'];
    for (const i in alt_cases) {
      if (l_word.indexOf(alt_cases[i]) === 0) {
        return 'an';
      }
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length === 1) {
      if ('aedhilmnorsx'.indexOf(l_word) >= 0) {
        return 'an';
      } else {
        return 'a';
      }
    }

    // JM: this produces weird articles. The previous rules still work and no special rules are required for all-caps.
    // Capital words which should likely be preceeded by 'an'
    // if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
    //     return 'an';
    // }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    const regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
    for (const j in regexes) {
      if (l_word.match(regexes[j])) {
        return 'a';
      }
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
      return 'a';
    } else if (word === word.toUpperCase()) {
      if ('aedhilmnorsx'.indexOf(l_word[0]) >= 0) {
        return 'an';
      } else {
        return 'a';
      }
    }

    if (word.match(/^SPz/)) {
      return 'an';
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ('aeiou'.indexOf(l_word[0]) >= 0) {
      return 'an';
    }

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) {
      return 'an';
    }
    return 'a';
  }

  static toTitleCase(str: string) {
    if (!str) {
      return undefined;
    }
    if (str.toLowerCase() === 'world war ii') {
      return 'World War II';
    }
    if (str.toLowerCase() === 'nato') {
      return 'NATO';
    }
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
