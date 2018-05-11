---
layout: default
title: VAM Build 2 - Known Issues
---

Known issues with Build 1.1:
  * Lexicon Search doesn't support spell check (VAM-484)
  * Term Frequency is not updated by Lexicon Search (VAM-483)
  * Generic letter combination ("CH") behaves different in VICS than in VISTA for _ORWDAL32 ALLERGY MATCH_ (VAM-486)

ADD more ICD10 ... Timing and see backlog: https://hawaiirg.atlassian.net/issues/?jql=project%20%3D%20VAM%20AND%20component%20%3D%20%22RPC%20Follow-Up%22%20ORDER%20BY%20created%20DESC

https://hawaiirg.atlassian.net/issues/?jql=project%20%3D%20VAM%20AND%20component%20%3D%20%22RPC%20Follow-Up%22%20ORDER%20BY%20created%20DESC

Broad issue that testing for CPRS' use of RPCs representing positive testing. CPRS is _well behaved_. Build 3 must create appropriate negative tests for all services, particularly for calls that will be directly exposed to the Web Client's REST interface.

uniqueness NOT enforced in Problems: reproduce running demo client twice in a row

There are two: 

>>> Sending RPC: ORQQPL PROBLEM LIST [ '25', 'A', '0' ]
    Raw Data: "[XWB]11302\u00051.108\u0013ORQQPL PROBLEM LIST5000225f0001Af00010f\u0004"


<<<Received
2
1^A^Hypertension (SCT 38341003)^R69.^3160303^3180318^^^P^10;CLInicD^C^;^^C^1^3170207^^^^10D
2^A^Hypertension (SCT 38341003)^R69.^^3180318^^^P^10;CLInicD^C^;^^^1^3170207^^^^10D

But CHECK DUP returns 0 AND you are allowed to add yet another of the same type ...

>>> Sending RPC: ORQQPL CHECK DUP [ '25', '7647488', 'Hypertension' ]
    Raw Data: "[XWB]11302\u00051.108\u0010ORQQPL CHECK DUP5000225f00077647488f0012Hypertensionf\u0004"


<<<Received
0

even though there is one!

- document issue
- general jira issues x 3
- code injection problem create prevention and issue of sequenced fan out

