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

![Pick New Problem -width70](highlightImages/PickNewProblem.png)

and after selecting a clinic, you will be brought to a problem search dialog. Type in __Hypert__ ...

![Search Box Hypert -width70](highlightImages/SearchBoxHypert.png)

and press search. You'll eventually see ...

![Search Benign Hypertension -width70](highlightImages/SearchResponseHypert.png)

If you were looking in the Router Management Client, you'd have seen that the VICS Server responded almost immediately to CPRS ...

![Router LEX Hypert -width70](highlightImages/RM_LEX_HYPERT.png)

The delay is CPRS's as it renders 822 matches. Note how the Lexicon Service both expanded the partial match "hypert" to "hypertension" and "hypertropia" but also pulled in terms such as "Excessive Hairiness". Like any "search engine", the VISTA Lexicon, as emulated in VICS, uses synonyms and associated phrases to range beyond literal matching. 

Let's be more precise. Type __Benign Hypertension__ in the search box and hit _Search_

![Search Benign Hypertension -width70](highlightImages/SearchResponseBenignHypertension.png)

and this time, CPRS responds quite quickly. 36 terms don't tax it.

The VICS Lexicon follows the algorithm and word indexing used in VISTA but re-implements it in a more efficient scheme. As a result, it over four times faster ...

![VICSLexFourTimesFaster](highlightImages/VICSLexFourTimesFaster.png)

In addition to Problem List Lookup, the VICS Lexicon also supports Allergin ("Peanuts") and Symptom ("Hives") search. In VISTA, these are implemented in distinct subsystems, each with their own approaches to phrase indexing and synonym handling - the approaches taken in Symptom Search are reflected in [these VICS Service Tests](https://github.com/vistadataproject/VICSServer/blob/master/services/tests/lookupSymptoms-spec.js). The VICS Service emulated these unique algorithms as easy to upgrade __legacy terminology lookups__, giving the VA the option to unify its approach to terminology search in the future.

## Configuration Parameter Settings

In VISTA, parameters of all kinds are managed in one _Parameter Service_, an approach adopted in VICS. Build 1.1 added parameter setting to the retrieval support provided in Build 1.

A simple parameter example is a user's preference for the coversheet of CPRS. By default, the coversheet is arranged like this ...





