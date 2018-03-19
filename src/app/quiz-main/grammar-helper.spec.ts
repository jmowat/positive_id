import { GrammarHelper } from './grammar-helper';

describe('GrammarHelper', () => {
  it('verify static class exists', () => {
    expect(GrammarHelper).toBeTruthy();
  });

  describe('indefinite article function', () => {
    it('should return \'an\' for MT-LB', () => {
      expect(GrammarHelper.getIndefiniteArticle('MT-LB')).toBe('an');
    });
    it('should return \'a\' for BMP-2', () => {
      expect(GrammarHelper.getIndefiniteArticle('BMP-2')).toBe('a');
    });
    it('should return \'a\' for T-90', () => {
      expect(GrammarHelper.getIndefiniteArticle('T-90')).toBe('a');
    });
    it('should return \'a\' for PT-76', () => {
      expect(GrammarHelper.getIndefiniteArticle('PT-76')).toBe('a');
    });
    it('should return \'an\' for SPz Luchs', () => {
      expect(GrammarHelper.getIndefiniteArticle('SPz Luchs')).toBe('an');
    });
    it('should return \'a\' for TPz Fuchs', () => {
      expect(GrammarHelper.getIndefiniteArticle('TPz Fuchs')).toBe('a');
    });
  });
});
