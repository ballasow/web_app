# Audit frontend — clientUI

Date: 11 novembre 2025

Résumé rapide
- Portée : audit et corrections ciblées sur la partie frontend (`clientUI/`).
- Objectif : fiabiliser la logique d'authentification, la gestion du token et les redirections/protections de routes.

Modifications effectuées (fichiers touchés)
- `src/redux/slices/userSlice.js`
  - Ajout de l'action `setUserInfo` pour synchroniser redux et localStorage.
  - Robustification du thunk `loginUser` : préfère la réponse `user` si fournie, persiste `role` et `userInfo`.
- `src/api/axios.js`
  - Retiré header Authorization statique.
  - Ajout d'un interceptor request pour injecter dynamiquement `Authorization: Bearer <token>` depuis localStorage.
  - Ajout d'un interceptor response simple pour 401: efface le token et force la redirection vers `/login`.
- `src/api/accueil.js`
  - Standardisation des retours d'erreur (`{ success: false, message }`).
- `src/routes/AppRoutes.jsx`
  - Ajout de routes `index` pour rediriger `/admin`, `/teacher`, `/student` vers leur `dashboard`.
- `src/routes/ProtectedRoute.jsx`
  - Refonte déclarative : ajout d'états `checking` et `redirectTo`.
  - Lors d'un redirect vers `/login`, on passe `{ state: { from: <originalPath> } }` pour permettre un retour post-login.
  - Evite loader bloquant et double navigation (utilise `<Navigate />`).
- `src/features/auth/pages/Register.jsx`
  - Remplacé `window.location.href` par `navigate()` et dispatch `setUserInfo` + persistance token/userInfo/role.
- `src/features/auth/pages/Login.jsx`
  - Prise en charge du `location.state.from` : après login, on redirige vers la page originelle si présente.

Problèmes détectés avant corrections
- Header Authorization initialement statique dans `axios.js` (pris au moment du chargement) - devenait obsolète après login/logout.
- `Register.jsx` se contentait d'écrire le token et de forcer un reload sans mettre à jour redux -> incohérences UI.
- `ProtectedRoute` utilisait une logique impérative avec navigate dans useEffect et pouvait afficher Loader indéfiniment si la vérification échouait ou prenait du temps; il ne passait pas la page d'origine lors du redirection vers `/login`.
- Incohérences de format de réponse dans `accueil.js` rendant les checks `response.success` fragiles.

Recommandations & étapes suivantes (priorités)
1) Critique — à faire rapidement
   - Ajouter tests unitaires pour `loginUser` (mock axios) et `ProtectedRoute` (mock get_User_Information) — empêche régressions.
   - Centraliser la persistance Redux ↔ localStorage via un middleware (ou redux-persist) plutôt que manipuler localStorage partout.

2) Important
   - Implémenter un flow de refresh token / silent refresh si le backend fournit refresh tokens : évite logout brutal sur expiration courte.
   - Remplacer le response-interceptor 401 qui fait `window.location.href` par un dispatch redux (`logoutUser`) pour garder UI cohérente.

3) Moyenne
   - Améliorer le Loader pour afficher un message si la vérification prend trop longtemps.
   - Uniformiser les objets renvoyés par toutes les fonctions `api/*`.

Validation locale (comment tester)
- Se placer dans `clientUI` et lancer :

```powershell
npm install
npm run dev
```

- Tester les scénarios :
  - Inscription (Register) → voir token et userInfo dans localStorage, Header doit montrer `Tableau de bord` et route `/student/dashboard`.
  - Connexion (Login) depuis une route protégée : accéder d'abord à `/student/dashboard` non authentifié, vous devriez être redirigé vers `/login`; après connexion, retourner sur la route originelle.
  - Tenter d'accéder à `/admin` en tant qu'étudiant → être redirigé vers `/student/dashboard`.
  - Forcer un 401 (par exemple en supprimant le token) et vérifier que l'app redirige vers `/login` proprement.

Notes de sécurité
- Éviter de stocker des informations sensibles trop permissives en localStorage si le threat model l'interdit (XSS). Préférer des cookies HttpOnly pour tokens si possible.

Prochaines actions que je peux faire pour vous
- Ajouter 2 tests (login thunk + ProtectedRoute) et config minimale Jest/RTL.
- Remplacer le simple `window.location.href` de l'interceptor 401 par un dispatch `logoutUser` et une navigation côté React (moins brutal).
- Intégrer `redux-persist` pour fiabiliser la persistance.

Si vous souhaitez que j'implémente les tests ou la persistance, dites-moi ce que je dois prioriser; je m'en charge immédiatement et mets à jour la todo list et les fichiers modifiés.

---
Fichier modifiés listés ci-dessus. Si vous voulez le diff complet d'un fichier modifié, dites lequel et je l'afficherai.