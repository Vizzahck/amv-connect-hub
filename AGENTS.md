<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the scrolling home page and give Quem Somos, Missão, Visão and Valores independent TanStack routes because institutional content needs direct navigation without replacing the existing home experience.
- Share the header, theme control and footer through SiteShell in the root layout so every content page maintains consistent navigation and identity.
- Keep every institutional page in the institutionalPages list and render the shared InstitutionalNav so header, mobile menu, footer and the page grid stay in sync when a page is added.
- Define separate heading, dark-panel and button color roles in global theme tokens so light and dark modes remain legible without per-page color overrides.
