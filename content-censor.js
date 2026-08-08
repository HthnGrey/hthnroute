(() => {
  // Client-side baseline for public community content. Keep this list private to
  // the application and extend it as moderation reports identify new variants.
  const blocked = [
    /\bf+[u*]+c+k+(?:er|ing|ed|s)?\b/gi, /\bsh+[i1!]+t+(?:ty|ting|ted|s)?\b/gi,
    /\bb+[i1!]+tch(?:es|y)?\b/gi, /\bass+h+[o0]+l+e+(?:s)?\b/gi,
    /\bbastard(?:s)?\b/gi, /\bc+[u*]+n+t+(?:s)?\b/gi, /\bd+[i1!]+c+k+(?:s)?\b/gi,
    /\bc+[o0]+c+k+(?:s)?\b/gi, /\bp+[u*]+ss+y\b/gi, /\b(?:slut|whore|porn)(?:s|y)?\b/gi,
    /\bn+[i1!]+g+[gq]+[ae3]r?s?\b/gi, /\bf+[a@]+g+(?:g+[o0]+t|s)?\b/gi,
    /\b(?:kike|spic|chink|gook|wetback|raghead|beaner|coon|jap|towelhead)s?\b/gi,
    /\b(?:tranny|dyke|retard)(?:s|ed)?\b/gi
  ];
  const clean = value => String(value ?? '').replace(/\s+/g, ' ').replace(blocked, match => '•'.repeat(Math.max(4, match.length)));
  window.EquilibriumCensor = { clean };
})();
