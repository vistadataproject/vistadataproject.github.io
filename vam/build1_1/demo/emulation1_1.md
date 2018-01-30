---
layout: default
title: Emulation 1.1 
---

# VAM Build 1.1 Emulation Additions 

Emulation was added in four major areas:
  * lexicon terminology search for problems and allergies
  * configuration parameter setting
  * division (hospital location) management and selection
  * user key management
  
## Lexicon Search

In order to enter Problems or Allergies or Vitals, a physician must designate disorders, symptoms, allergens and vital signs from lists of medical terms. An EHR like VISTA provides a _Lexicon Service_ that allows physicians search terminologies using keywords, exact phrases and synonyms. 

Build 1.1 moved vital, problem and allergy terminology management to a VICS Lexicon Service.

Bring up the problem 

![Pick New Problem -width70](images/PickNewProblem.png)

and after selecting a clinic, you will be brought to a problem search dialog. Type in __Hypert__ ...

![Search Box Hypert -width70](images/SearchBoxHypert.png)

and press search. You'll eventually see ...

![Search Benign Hypertension -width70](images/SearchResponseHypert.png)

If you were looking in the Router Management Client, you'd have seen that the VICS Server responded almost immediately to CPRS ...

![Router LEX Hypert -width70](images/RM_LEX_HYPERT.png)

The delay is CPRS's as it renders 822 matches. Note how the Lexicon Service both expanded the partial match "hypert" to "hypertension" and "hypertensive" but also pulled in terms such as "Chronic Kidney Disease Stage 2". Like any "search engine", the VISTA Lexicon, as emulated in VICS, uses synonyms and associated phrases to range beyond literal matching.

Let's be a little more precise. Type __Benign Hypertension__ in the search box and hit _Search_

![Search Benign Hypertension -width70](images/SearchResponseBenignHypertension.png)

and this time, CPRS responds quite quickly. 36 terms won't tax it.