---
# UPahan case study.
# Copy is Kel's own wording. Feature claims were checked in the UPahan repo
# (main @ 1dfa3b0, 2 Nov 2026); the file each one comes from is cited in a
# comment next to it.

title: UPahan
tagline: Property management platform for Rosueta Realty Services
description: >-
  UPahan case study: a property management platform for Rosueta Realty Services
  (formerly RGT Real Estate Marketing), from problem to redesign.
client: Rosueta Realty Services (formerly RGT Real Estate Marketing)
course: Software Engineering 2 · Gordon College
liveUrl: https://upahan.vercel.app

duration: January 2026 – Present
role: Lead Developer, Team Lead, Documentation Lead
team: Team of 3

# ---------- 1. Overview ----------
# source: package.json (workspaces), apps/web/package.json, apps/server/package.json, apps/mobile/package.json
stack:
  - [Web, React 18 · Vite · Tailwind CSS]
  - [API, Node.js · Express]
  - [Data, Supabase · PostgreSQL]
  - [Mobile, Expo (React Native)]
  - [Repo, Monorepo (apps/web · apps/server · apps/mobile · packages/shared)]

context:
  - Software Engineering 2 · Gordon College
  - Presented to the defense panel and to the client.

preview:
  file: after-dashboard.webp
  alt: >-
    UPahan admin dashboard after the redesign: a deep-teal sidebar, KPI cards for total units,
    occupancy, rent collected and open requests, a rent-collection donut chart, a six-month
    collection trend chart, a month calendar and a fix-requests list. All data shown is fictitious.
  caption: The redesigned admin dashboard (fictitious demo data).
  width: 1280
  height: 800

# ---------- 2. Problem & goal ----------
problem:
  statement: >-
    Rosueta Realty Services managed its rentals through Excel and Messenger. Records were scattered across
    spreadsheets and chats, which caused misunderstandings between tenants and the landlord, and there was no
    single centralized place for both.
  goal: >-
    One centralized system where staff and tenants see the same records (units, leases, payments and
    maintenance requests), so less gets lost or miscommunicated.
  constraints:
    # source: apps/server/controllers/invitesController.js (createTenantInvite: "returns a 72-hour invite link"); commit 55fdaee
    - >-
      Invite-only, internal system: there is no public sign-up. An admin creates each tenant account and
      shares a one-time invite link; password resets also use one-time links.
    # source: apps/web/src/context/AuthContext.jsx (login by "identifier"); apps/server/controllers/invitesController.js (parseContact)
    - Users sign in with either an email address or a Philippine mobile number.
    # source: apps/web/src/App.jsx (routes /admin/*, /tenant/*, /units)
    - Separate portals for staff and for tenants; guests can browse available units without signing in.

# ---------- 3. Target users ----------
users: 'Two groups of users: admin/staff and tenants.'

persona:
  label: Composite persona based on client interviews
  name: Lorna, 52, long-term tenant
  background: >-
    Has rented from Rosueta for years. Uses Messenger and Facebook daily but isn't comfortable with new apps.
  goals:
    - Know exactly how much she owes and when.
    - Report repairs without a long chat thread.
  frustrations:
    - Mixed-up messages about payments.
    - Not sure if her payment was recorded.
  statement: >-
    Lorna is a long-term tenant who isn't used to apps, who needs a simple way to see her dues and report
    repairs, because chats and spreadsheets left her unsure what was paid and what was still pending.

painPoints:
  - title: Wrong information
    detail: Users often entered incorrect details.
    # source: apps/web/src/pages/tenant/TenantMaintenanceRequest.jsx (labels "Issue Category *", "Subject *",
    #   "Description *", "Priority *", "Photos * (3–5 required)"; validate() blocks submit with a message per field);
    #   apps/web/src/components/PaymentDeclarationModal.jsx (method, amount, reference number and proof required);
    #   apps/web/src/components/RequiredMark.jsx
    guided: Clear, easy-to-read labels and required fields, so key details can't be skipped.
  - title: New to technology
    detail: Some older users aren't comfortable using apps.
    # source: apps/web/src/index.css (.tap-target: touch area of at least 44×44px);
    #   apps/web/src/pages/auth/LoginPage.jsx ("Email or phone number");
    #   packages/shared/utils/constants.js (categories in English and Filipino, e.g. "Plumbing (Tulo ng Tubig)")
    guided: I focused on making the tenant side simpler and easier to use for older tenants.
  - title: Payments not recorded
    detail: After paying the landlord, tenants forget to upload proof in the app.
    # source: apps/web/src/pages/tenant/TenantDashboard.jsx ("Next Due" on the rent card). There are no
    #   reminder notifications; those are listed under next steps.
    guided: The tenant dashboard shows the next due date up front, so tenants can see when to pay and upload proof.
  - title: Everything marked "high"
    detail: Tenants set almost every maintenance request to high priority.
    # source: apps/server/routes/maintenance.js (PUT /:id is admin-only) + apps/server/controllers/maintenanceController.js
    #   (updateRequest accepts priorityLevel); apps/web/src/pages/admin/AdminMaintenanceList.jsx (priority filter,
    #   "High priority" count). The admin web UI shows and filters priority but has no control to change it.
    guided: >-
      Admins review each request's priority instead of relying on what the tenant picked, and can filter by
      priority to see what's really urgent.

journey:
  caption: 'Journey map: a tenant paying rent.'
  steps:
    # source: apps/web/src/pages/tenant/TenantDashboard.jsx ("Next Due")
    - action: Checks when rent is due
      tasks: Sees the next due date on the dashboard
      feeling: Calm, knows what's due
      improvement: Next due date shown up front
    - action: Checks the amount owed
      tasks: Opens the tenant dashboard and checks the balance
      feeling: Unsure → confident
      improvement: One place to see dues
    - action: Pays the landlord
      tasks: Pays outside the app
      feeling: Busy, rushed
      improvement: A reminder to upload proof after paying
    - action: Uploads proof
      tasks: Attaches proof in the app
      feeling: Nervous about doing it right
      improvement: A simple, labeled upload with required fields
    # The app shows "Verified" or "Not Verified" (apps/web/src/components/StatusBadge.jsx; TenantPaymentHistory.jsx)
    - action: Waits for confirmation
      tasks: Sees Verified or Not Verified
      feeling: Anxious → reassured
      improvement: Careful, respectful status wording

# ---------- 4. My role & the team ----------
me:
  name: Great Michael Santos
  roles: [Lead Developer, Team Lead, Documentation Lead]
  contributions:
    # source: `git shortlog -sn --no-merges main` → 111 of 113 commits (98%) by Great Michael Santos
    - 'I built most of the system: 111 of the 113 commits on the main branch are mine.'
    # source: commits 0b11bc7 ("swap in the new U-mark"), f1cc980, and the redesign/upahan-v2 commits, all by Great Michael Santos
    - I designed the UPahan logo and led the full visual redesign (v2).
    - I led the team and wrote the project documentation.

teammates:
  - name: Adrian Raymundo
    role: Developer
    contribution: Helped with testing and smaller coding tasks, like fixing modules.
  - name: Rhay Alexis Lara
    role: Designer
    contribution: Created the low- and high-fidelity designs for UPahan's first UI.

decisions:
  - label: The four pain-point fixes
    detail: >-
      Required fields and clearer labels, a simpler tenant side, the next due date up front, and an admin review
      of each request's priority.
    href: '#pain-points'
  - label: The v2 redesign and new logo
    detail: A new UI and logo, with the teal sampled from the client's wordmark.
    href: '#designs'
  - label: '"Not Verified" instead of "Rejected"'
    detail: Changed the status wording after the panel and client feedback, because it involves real money.
    href: '#feedback'

# ---------- 5. Process ----------
process:
  steps:
    - title: Interviews & meetings
      detail: Interviews and meetings with the client to understand how they managed rentals (Excel and Messenger).
    - title: First UI
      detail: 'Rhay Alexis Lara designed the first UI: low-fidelity wireframes, then high-fidelity designs.'
    - title: First version
      detail: Built the first version (web, backend and database).
    - title: Feedback
      detail: Feedback from the defense panel and the client (see below).
    - title: Redesign (v2)
      detail: I redesigned the UI (v2), made a new logo, and applied the feedback.
    # source: commit 55fdaee + apps/server/controllers/invitesController.js (invite-only); apps/web/vercel.json,
    #   .github/workflows/db-backup.yml, docs/BACKUP_RESTORE.md (deployment and backups)
    - title: Invite-only & deployment-ready
      detail: Made it invite-only and deployment-ready.

  designs:
    caption: Low- and high-fidelity designs by Rhay Alexis Lara.
    screens:
      - name: Tenant home
        lofi:
          file: lofi-tenant-home.webp
          width: 786
          height: 1704
          alt: >-
            Low-fidelity wireframe of the tenant home screen: grey placeholder blocks for a rent card, two
            shortcut tiles and a month calendar, above a bottom navigation bar.
        hifi:
          file: hifi-tenant-home.webp
          width: 786
          height: 1704
          alt: >-
            High-fidelity design of the tenant home screen: a green monthly rent card with the amount, next due
            date and assigned unit, Payment History and Request Maintenance tiles, and a month calendar.
      - name: Tenant maintenance request
        lofi:
          file: lofi-tenant-request.webp
          width: 786
          height: 1704
          alt: >-
            Low-fidelity wireframe of the tenant maintenance request screen: a category dropdown with four
            options, a photo upload area and a submit button, in grey placeholder blocks.
        hifi:
          file: hifi-tenant-request.webp
          width: 786
          height: 1704
          alt: >-
            High-fidelity design of the tenant maintenance request screen: an Issue Category dropdown listing
            Plumbing (Tulo ng Tubig), Electrical (Kuryente), Structural (Sira sa Bahay) and Others, a photo
            upload area and a green Submit Request button.
        # source: the hi-fi design itself; the shipped app uses the same labels (packages/shared/utils/constants.js)
        note: >-
          Maintenance categories are labeled in English and Filipino (e.g. "Plumbing (Tulo ng Tubig)") to support
          tenants less comfortable with tech.
      - name: Landlord fix requests
        lofi:
          file: lofi-landlord-fixes.webp
          width: 786
          height: 1704
          alt: >-
            Low-fidelity wireframe of the landlord fix requests screen: a dark header, an info banner and three
            request cards with two buttons each, in grey placeholder blocks.
        hifi:
          file: hifi-landlord-fixes.webp
          width: 786
          height: 1704
          alt: >-
            High-fidelity design of the landlord fix requests screen: a navy Fix Requests header, an info banner
            and request cards with unit and priority tags (High, Medium, Low) and Resolved and Detail buttons.

  assumptions: >-
    At first I assumed tenants would fill in details correctly and set priorities honestly. In practice, info was
    often wrong and almost every request came in as "high", so I added required fields, clearer labels, and an
    admin check.

  feedback:
    said: >-
      Change the word "Rejected" to "Not approved", and think carefully about every flow, because this involves
      real money between landlord and tenant.
    # source: commit 5d00b57 (31 Oct 2026, "Not Verified wording"): every user-facing "Rejected"/"REJECT" became
    #   "Not Verified" on web, mobile and server; apps/server/tests/hardening.test.js fails if "Reject" wording
    #   comes back. The repo uses "Not Verified", not "Not approved".
    changed: >-
      The panel suggested "Not approved". I renamed every "Rejected" label to "Not Verified", since the admin is
      checking a payment proof, not judging the tenant, and added a test so "Reject" wording can't come back.

# ---------- 6. Designs (before/after) ----------
beforeAfter:
  # source (teal): apps/web/src/index.css (:root tokens, "Brand teal sampled from the RGT Real Estate Marketing wordmark")
  intro: >-
    v1 used the team's first design. For v2 I redesigned the whole UI and made a new logo. The teal is sampled from
    the client's wordmark so it matches their brand, and I kept the tenant screens simple and readable for older
    users.
  # source: git log on main — last pre-redesign commit 298b982 (14 Jun 2026); redesign commits c8f4a23…c6c55a3 (14 Jul 2026)
  method:
    - >-
      Before: the web app at commit 298b982 (14 Jun 2026), the last commit before the visual redesign. After: the
      current main branch (2 Nov 2026), which includes the redesign and the work that came after it, such as
      invite-only sign-in.
    - >-
      Both versions were run locally and fed the same fictitious dataset, so every name, number and date in these
      screenshots is made up and the two sides show identical data.
  pairs:
    - screen: Welcome
      before:
        file: before-welcome.webp
        width: 1280
        height: 800
        alt: 'Old UPahan welcome screen: a teal house icon, the word UPAHAN, the tagline "Your Properties. Managed Smarter." and a Get Started button on an off-white page.'
      after:
        file: after-welcome.webp
        width: 1280
        height: 800
        alt: 'New UPahan welcome screen: a full-width deep-teal hero reading "Welcome to UPahan. Sign in to get to work.", a Get Started button, a three-step sign-in guide and two phone mockups of the app.'
      changed: >-
        A centred logo splash on off-white became a full-width deep-teal hero with a headline, a gold serif accent
        line, a short description of the platform, a Staff sign-in shortcut, a three-step guide and phone mockups.
    - screen: Staff sign-in
      before:
        file: before-login.webp
        width: 1280
        height: 800
        alt: 'Old landlord login: a single white card on an off-white page with an email field, a password field, a Sign in button and a Sign up link.'
      after:
        file: after-login.webp
        width: 1280
        height: 800
        alt: 'New staff sign-in: a two-panel card on a teal background, with an "RGT Staff Portal" brand panel on the left and a form on the right for email or phone number, password and "Keep me signed in".'
      # the email-or-phone field and the removed sign-up link come from the later invite-only work (commit 55fdaee), not the redesign itself
      changed: >-
        One plain card became a two-panel layout: a teal brand panel and a cream form panel. The field now
        accepts an email or phone number, there is a "Keep me signed in" option, and the sign-up link is gone
        (accounts are provisioned by an administrator). The last two changes came with the later invite-only work.
    - screen: Admin dashboard
      before:
        file: before-dashboard.webp
        width: 1280
        height: 800
        alt: 'Old admin dashboard: a teal header bar, a rent-collection card showing 67% with a progress bar, two tiles for Add New Unit and Fix Requests, a Payment Requests row and a one-week calendar.'
      after:
        file: after-dashboard.webp
        width: 1280
        height: 800
        alt: 'New admin dashboard: four KPI cards, a rent-collection card with a donut chart and collected/outstanding bars, a six-month collection trend chart, a month calendar and a fix-requests list with priority tags.'
      changed: >-
        A single percentage card and quick-action tiles became a KPI row (total units, occupancy, collected,
        open requests), a rent-collection card with a donut chart, collected/outstanding amounts and
        paid/pending/overdue counts, a six-month trend chart, a full-month calendar and a fix-requests list.
        The sidebar gained count badges. (The fix-request count differs because the old dashboard counted
        only pending requests; the new one also counts in-progress ones.)
    - screen: Units
      before:
        file: before-units.webp
        width: 1280
        height: 800
        alt: 'Old units page: a search box and a single-column list of units, each with a coloured circle showing the unit code, the tenant name, the rent and status pills.'
      after:
        file: after-units.webp
        width: 1280
        height: 800
        alt: 'New units page: a "Your units" header with occupied, vacant and overdue totals, filter pills with counts, a search box, a sort menu, a grid/list toggle and a grid of unit cards with teal or gold banners.'
      changed: >-
        A one-column list became a card grid with a list-view toggle. The page now shows totals and the monthly
        rent roll, filter pills with counts, a sort menu, and cards with a coloured banner (teal for occupied,
        gold for vacant), tenant initials, the lease end date and a payment-status chip.
    - screen: Fix requests
      before:
        file: before-maintenance.webp
        width: 1280
        height: 800
        alt: 'Old fix-requests page: an info banner, status filter pills and request cards, each with the unit, priority, status, tenant and category, plus full-width Resolved and Detail buttons.'
      after:
        file: after-maintenance.webp
        width: 1280
        height: 800
        alt: 'New fix-requests page: KPI cards for open, high-priority, in-progress requests and average resolution time, status pills with counts, a priority filter and compact request rows with View details and Mark resolved buttons.'
      changed: >-
        Tall cards with two full-width buttons became compact rows with a category icon, tenant initials, how long
        each request has been open, and side-by-side View details / Mark resolved buttons. A KPI row, counts on the
        status pills and a priority filter were added.
      # maps to pain point 4; source: apps/web/src/pages/admin/AdminMaintenanceList.jsx (priority filter, "High priority" KPI)
      why: >-
        Pain point 4 (everything marked "high"): the priority filter and the high-priority count help the admin
        double-check each request's priority.
    - screen: Tenant dashboard
      before:
        file: before-tenant-dashboard.webp
        width: 1280
        height: 800
        alt: 'Old tenant dashboard in a blue theme: a monthly rent card, unit details, landlord contact, documents, shortcuts, recent requests and a one-week calendar.'
      after:
        file: after-tenant-dashboard.webp
        width: 1280
        height: 800
        alt: 'New tenant dashboard with the same layout in the teal and cream theme, a full-month calendar and thumbnails of the uploaded ID under My Documents.'
      changed: >-
        The layout stayed largely the same, but the tenant portal moved from its own blue theme to the shared deep
        teal and cream palette, the calendar shows the full month, and the uploaded ID appears as thumbnails.
    - screen: Admin dashboard (mobile)
      mobile: true
      before:
        file: before-dashboard-375.webp
        width: 750
        height: 1624
        alt: 'Old admin dashboard on a phone: a teal header, the rent-collection card, Add New Unit and Fix Requests tiles, Payment Requests and a bottom navigation bar.'
      after:
        file: after-dashboard-375.webp
        width: 750
        height: 1624
        alt: 'New admin dashboard on a phone: a dark teal header, the welcome line, a New Unit button, stacked KPI cards and a bottom navigation bar with count badges and a More tab.'
      changed: >-
        On phones the KPI cards stack in one column, the header uses the darker teal, and the bottom navigation
        gained count badges and a More tab.
    - screen: Staff sign-in (mobile)
      mobile: true
      before:
        file: before-login-375.webp
        width: 750
        height: 1624
        alt: 'Old landlord login on a phone: a white card with email and password fields, a Sign in button and a Sign up link.'
      after:
        file: after-login-375.webp
        width: 750
        height: 1624
        alt: 'New staff sign-in on a phone: the teal brand panel stacked above the cream sign-in form.'
      changed: On phones the two panels stack, with the teal brand panel above the sign-in form.

# ---------- 7. Final result ----------
final:
  features:
    # source: apps/web/src/App.jsx (/admin/* and /tenant/* routes)
    - Separate portals for staff and tenants.
    # source: apps/server/controllers/invitesController.js ("returns a 72-hour invite link")
    - Invite-only accounts with 72-hour invite links.
    # source: apps/web/src/pages/auth/LoginPage.jsx ("Email or phone number")
    - Login by email or phone number.
    # source: apps/server/routes/units.js (create, update, delete, photos, remove tenant)
    - 'Units: staff add and manage units and assign tenants.'
    # source: apps/server/routes/payments.js (declare, approve, reject); apps/web/src/components/PaymentDeclarationModal.jsx
    - 'Payments: tenants declare payments with proof; staff verify them or mark them Not Verified.'
    # source: apps/web/src/pages/tenant/TenantMaintenanceRequest.jsx (category, priority, 3–5 photos); apps/server/routes/maintenance.js
    - 'Maintenance requests: tenants send them with photos; staff track and resolve them.'
    # source: apps/web/src/pages/tenant/TenantDashboard.jsx ("Next Due"). Due date *reminders* are not in the repo.
    - The next due date on the tenant dashboard.
  screens:
    - file: after-tenant-dashboard.webp
      width: 1280
      height: 800
      alt: 'Final UPahan tenant dashboard in the teal and cream theme, with the monthly rent card, unit details, documents and a month calendar.'
      caption: Tenant dashboard.
    - file: after-units.webp
      width: 1280
      height: 800
      alt: 'Final UPahan units page with a grid of unit cards, filter pills and a search box.'
      caption: Units.
    - file: after-dashboard-375.webp
      mobile: true
      width: 750
      height: 1624
      alt: 'Final UPahan admin dashboard on a phone, with stacked KPI cards and a bottom navigation bar.'
      caption: Admin dashboard (mobile).
    - file: after-login-375.webp
      mobile: true
      width: 750
      height: 1624
      alt: 'Final UPahan staff sign-in on a phone, with the teal brand panel above the form.'
      caption: Staff sign-in (mobile).
  accessibility:
    - title: Dialogs that manage focus
      detail: >-
        The shared dialog moves focus into itself when it opens, keeps Tab inside, closes on Esc, returns focus to
        the control that opened it and is announced as a modal dialog (role="dialog", aria-modal). Its close
        button is labelled and 44px square.
      source: apps/web/src/components/Modal.jsx
    - title: Touch targets of at least 44×44px
      detail: >-
        A tap-target helper grows the touch area of small chips, icon buttons and text links to at least 44×44px
        without changing how they look.
      source: apps/web/src/index.css (.tap-target)
    - title: Visible keyboard focus and reduced motion
      detail: >-
        Keyboard users get a teal focus ring (:focus-visible); form selects only show it after keyboard input.
        Loading skeletons stop pulsing when the user prefers reduced motion.
      source: apps/web/src/index.css (:focus-visible, prefers-reduced-motion); apps/web/src/utils/inputModality.js

# ---------- 8. Lessons learned & next steps ----------
lessons:
  - Everything needs to be considered, even when you think it's already enough.
  - >-
    Words matter when real money is involved. Changing "Rejected" to "Not Verified" was a small code change but a
    big one for the people using it.
nextSteps:
  - Bring the mobile app in line with the redesigned web UI and palette.
  - Run usability tests with older tenants to see where they still get stuck.
  - Add due date reminders (notifications) so tenants don't forget to pay and upload proof.
---

UPahan is a property management platform built for **Rosueta Realty Services** (formerly RGT Real Estate Marketing). Staff use it to manage units, leases, tenants, rent collection, payment verification, reports and fix requests. Tenants get their own portal to check their rent and due date, declare payments with proof, submit and follow maintenance requests, and view their documents.

It has two groups of users: admin/staff and tenants.
