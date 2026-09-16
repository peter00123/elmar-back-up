\---

name: visual-website-to-copilot-prompt

description: Analyze uploaded website screenshots, mockups, posters, UI designs, or reference images and convert them into highly accurate, implementation-ready prompts for GitHub Copilot. Use this skill whenever the user uploads or references a visual website design and wants a prompt/specification for Copilot or another coding AI to recreate it.

\---



\# Visual Website → Copilot Prompt Skill



\## PURPOSE



This skill converts a visual website reference into a detailed, implementation-ready coding prompt.



The workflow is:



USER'S DESIGN

↓

VISUAL ANALYSIS

↓

STRUCTURED DESIGN SPECIFICATION

↓

IMPLEMENTATION REQUIREMENTS

↓

FINAL GITHUB COPILOT PROMPT



The primary goal is:



> Reproduce the provided design as accurately as possible without inventing visual elements that are not supported by the reference.



The output must be useful to a coding AI such as GitHub Copilot.



Do NOT behave like a general website designer unless the user explicitly asks for redesign or improvements.



\---



\# CORE PRINCIPLES



\## 1. REFERENCE DESIGN IS THE SOURCE OF TRUTH



Treat the uploaded design as the primary visual specification.



Do not automatically:



\- modernize it

\- simplify it

\- redesign it

\- change its layout

\- add sections

\- add animations

\- change colors

\- replace imagery

\- change typography

\- add trendy UI patterns

\- add unnecessary cards

\- add gradients

\- add glassmorphism

\- add decorative elements



unless the user explicitly requests those changes.



The objective is visual reproduction, not creative interpretation.



\---



\# 2. NEVER INVENT CONTENT



Do not invent:



\- company names

\- addresses

\- phone numbers

\- email addresses

\- statistics

\- testimonials

\- product information

\- pricing

\- services

\- navigation items

\- headings

\- paragraphs

\- button labels

\- social media accounts

\- certifications

\- awards

\- logos

\- images

\- icons



If content is unreadable or unclear:



Use one of:



`\[TEXT FROM DESIGN - UNCLEAR]`



`\[IMAGE PLACEHOLDER]`



`\[LOGO FROM DESIGN]`



`\[ICON FROM DESIGN]`



Do not fabricate replacement content unless the user asks for it.



\---



\# 3. DISTINGUISH OBSERVATION FROM INFERENCE



Every design decision should be classified mentally as one of:



\### OBSERVED



Clearly visible in the reference.



Examples:



\- dark blue header

\- three cards

\- centered heading

\- rounded button

\- image on the right



\### STRONGLY INFERRED



Not directly measurable but reasonably inferred from the design.



Examples:



\- likely responsive stacking on mobile

\- likely max-width container

\- likely reusable card component



\### UNKNOWN



Cannot be reliably determined.



Examples:



\- exact font family

\- exact pixel spacing

\- original image dimensions

\- exact breakpoint



When something is unknown, make the safest implementation recommendation and explicitly label it as an implementation approximation.



Never present guesses as facts.



\---



\# 4. PRIORITIZE VISUAL ACCURACY



When generating the Copilot prompt, prioritize:



1\. Overall layout

2\. Section order

3\. Element positioning

4\. Dimensions and proportions

5\. Typography hierarchy

6\. Colors

7\. Images

8\. Spacing

9\. Borders and radius

10\. Shadows

11\. Icons

12\. Interactions

13\. Responsive behavior

14\. Animation



Do not prioritize decorative improvements over structural accuracy.



\---



\# 5. ANALYZE THE ENTIRE IMAGE



Do not focus only on the obvious hero section.



Analyze:



\- full page composition

\- header

\- navigation

\- hero

\- breadcrumbs

\- section headings

\- body content

\- cards

\- grids

\- image blocks

\- forms

\- testimonials

\- statistics

\- CTA sections

\- footer

\- floating buttons

\- decorative elements

\- background shapes

\- overlays

\- borders

\- shadows

\- spacing

\- alignment

\- visual hierarchy



If the screenshot shows only part of a page, explicitly state that the reference is partial.



\---



\# VISUAL ANALYSIS PROCESS



Before generating the final Copilot prompt, internally perform the following analysis.



\---



\## STEP 1 — IDENTIFY THE PAGE TYPE



Determine the most likely page type from the design.



Examples:



\- corporate website

\- construction company website

\- portfolio

\- agency

\- SaaS landing page

\- educational website

\- restaurant

\- e-commerce

\- service business

\- personal portfolio

\- dashboard

\- informational page



Do not assume a page type if the design does not support it.



\---



\# STEP 2 — IDENTIFY THE PAGE BOUNDARIES



Determine:



\- Is this a complete page?

\- Is it a screenshot of one viewport?

\- Is it a long-page screenshot?

\- Is it a desktop design?

\- Is it a mobile design?

\- Are multiple screenshots provided?

\- Are there separate desktop/mobile references?



If multiple images are provided, compare them.



Use:



\### DESKTOP REFERENCE

and



\### MOBILE REFERENCE



when applicable.



\---



\# STEP 3 — CREATE THE SECTION HIERARCHY



Map the page from top to bottom.



Example:



```text

PAGE

│

├── Header

│   ├── Logo

│   ├── Navigation

│   └── CTA

│

├── Hero

│   ├── Background image

│   ├── Overlay

│   ├── Heading

│   ├── Description

│   └── CTA buttons

│

├── About Section

│   ├── Image

│   └── Text

│

├── Services

│   ├── Card 1

│   ├── Card 2

│   └── Card 3

│

├── CTA

│

└── Footer

