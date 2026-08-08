(() => {
  const overviews = {
    'home.html': 'Start here to choose the Equilibrium League tool that matches your next planning step.',
    'index.html': 'Work through the route, mark completed tasks, and watch your League Point and relic progress update as you go.',
    'planner.html': 'Compare relic and blessing choices, see the skills they solve, and build a path that covers the progression you care about.',
    'area-guide.html': 'Select your regions to see the major bosses, skilling activities, and minigames each unlock adds to your League plan.',
    'create-build.html': 'Assemble a complete League build with relics, blessings, regions, gear, and optional strategy notes before sharing it.',
    'community-builds.html': 'Explore builds shared by other players, search by name, and open any build to review its complete setup.'
  };
  const file = location.pathname.split('/').pop() || 'home.html';
  const nav = document.querySelector('.side-nav');
  if (nav && !nav.querySelector('a[href="community-builds.html"]')) {
    const link = document.createElement('a');
    link.href = 'community-builds.html';
    link.textContent = 'Community Builds';
    nav.append(link);
  }
  nav?.querySelector('a[href="community-builds.html"]')?.classList.toggle('active', file === 'community-builds.html');
  const style = document.createElement('style');
  style.textContent = '.side-nav{inset:18px auto auto 18px!important;height:auto}.page-overview{max-width:760px;margin:14px 0 0;color:var(--muted,#b6c0b5);font-size:1rem;line-height:1.65}';
  document.head.append(style);
  const heading = document.querySelector('main h1');
  if (!heading || !overviews[file] || document.querySelector('.page-overview')) return;
  const overview = document.createElement('p');
  overview.className = 'page-overview';
  overview.textContent = overviews[file];
  heading.insertAdjacentElement('afterend', overview);
})();
