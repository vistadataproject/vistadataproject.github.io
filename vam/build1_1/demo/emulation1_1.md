---
layout: default
title: Emulation 1.1 
---

# VAM Build 1.1 Emulation Additions 

Emulation was added in four major areas:
  * Lexicon Terminology Search for problems and allergies
  * User Preference centralized enabled by general-purpose parameter management
  * Division (hospital location) management and selection
  * User permissions (keys) as a key to further testing
  
In each case, what were VISTA by VISTA separate data sets and services can be moved to one enterprise-wide offering.
  
## Lexicon Search

In order to enter Problems or Allergies or Vitals, a physician must designate disorders, symptoms, allergens and vital signs from lists of medical terms. An EHR like VISTA provides a _Lexicon Service_ that allows physicians search terminologies using keywords, exact phrases and synonyms. 

Build 1.1 moved vital, problem and allergy terminology management to a VICS Lexicon Service.

Select the problem tab and choose _New Problem_ ...

![Pick New Problem](highlightImages/PickNewProblem.png)

and after selecting a clinic, you will be brought to a problem search dialog. Type in __Hypert__ and click _Search_ and you'll eventually see ...

![Search Benign Hypertension -width70](highlightImages/SearchResponseHypert.png)

If you were looking in the Router Management Client, you'd have seen that the VICS Server responded almost immediately to CPRS ...

![Router LEX Hypert -width70](highlightImages/RM_LEX_HYPERT.png)

The delay is CPRS's as it renders 822 matches. Note how the Lexicon Service both expanded the partial match "hypert" to "hypertension" and "hypertropia" but also pulled in terms such as "Excessive Hairiness". Like any _search engine_, the VISTA Lexicon, as emulated in VICS, uses synonyms and associated phrases to range beyond literal matching. 

__Note__: The VICS Lexicon is not a generic search - it __mimics exactly the algorithm followed in VISTA__. 

Let's be more precise. Type __Benign Hypertension__ in the search box and hit _Search_

![Search Benign Hypertension -width70](highlightImages/SearchResponseBenignHypertension.png)

and this time, CPRS responds quite quickly. 36 terms don't tax it.

The VICS Lexicon follows the algorithm and word indexing used in VISTA but re-implements it in a more efficient scheme. As a result, it over four times faster ...

![VICSLexFourTimesFaster](highlightImages/VICSLexFourTimesFaster.png)

In addition to Problem List Lookup, the VICS Lexicon also supports Allergin ("Peanuts") and Symptom ("Hives") search. In VISTA, these are implemented in distinct subsystems, each with their own approaches to phrase indexing and synonym handling - the approaches taken in Symptom Search are reflected in [these VICS Service Tests](https://github.com/vistadataproject/VICSServer/blob/master/services/tests/lookupSymptoms-spec.js). The VICS Service emulated these unique algorithms as easy to upgrade __legacy terminology lookups__, giving the VA the option to unify its approach to terminology search in the future.

All of this Lexicon Search is centralized in VICS - rather than updating and managing a variety of Lexicons in 130 separate VISTAs, VICS allows one Lexicon with clearly defined and tested behaviors to support the whole enterprise.

## User Preferences

In VISTA, parameters of all kinds are managed in one _Parameter Service_, an approach adopted in VICS. Build 1.1 added parameter setting to the support for retrieval provided in Build 1.

A simple parameter example is a user's preference for the layout of the CPRS coversheet. By default, the coversheet is arranged like this ...

![Search Original Coversheet -width70](highlightImages/CoversheetOriginalSize.png)

This size of each of the boxes on the screen come from the RPC _ORWCH LOADALL_ ...

![Search Original Coversheet](highlightImages/LOADALL-PRECHANGE.png)

When the user resizes the screen to ...

![Search Original Coversheet -width70](highlightImages/CoversheetResized.png)

the change will be set in _SAVEALL_ 

![Search Original Coversheet](highlightImages/SAVEALL-POSTCHANGE.png)

and reflected in _ORWCH LOADALL_ ...

![Search Original Coversheet](highlightImages/LOADALL-POSTCHANGE.png)

and if you exit CPRS and the login again, you'll see that the preference has been persisted in VICS.

__Question__: why would a project focused on migrating Vitals, Allergies and Problems to national services be migrating user preferences and other parameter settings? 

> One flexible Parameter Service. Vitals are configured using parameters and the Vital Domain RPCs, _GMV PARAMETER_ and _GMV MANAGER_, both emulated in Build 1.1, are built over a generic and powerful parameter service in VISTA and VICS required an equivalent. The difficult part was emulating the power of the service as seen in the Vitals RPCs but once made, it became trivial to emulate other parameter-bound RPCs such as _ORWCH LOADALL_ and _SAVEALL_. 
>
> This illustrates an underlying aspect of the VICS Architecture: __VICS has many less services and service calls than the number of CPRS RPCs it supports__. The most significant work is implementing the generic service - the RPC emulation itself becomes much less onerous once that service is in place.

Moving user preferences from VISTA to VICS means retiring a subsystem of VISTA and centralized preference management across the enterprise. And such preferences are just the beginning - user permissions (see the discussion of keys below) and demographics may also be centralized with this move to VICS. In effect, the "VISTA User" can become an enterprise-wide concept.



