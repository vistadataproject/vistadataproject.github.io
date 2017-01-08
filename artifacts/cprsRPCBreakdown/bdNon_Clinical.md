---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Non Clinical Slice Breakdown
---


# Non Clinical (555)



Non Clinical RPCs come in three flavors ...

Name | Number
--- | ---
[Knowledge](#knowledge-276) | 276 (49.7%)
[User](#user-179) | 179 (32.3%)
[Other](#other-100) | 100 (18%)




#### Knowledge (276)

Category | Number
--- | ---
CHANGE | 12 (4.3%)
READ | 258 (93.5%)
UTILITY | 6 (2.2%)

... most take data from specific files.

\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
1. | GMV GET CATEGORY IEN | READ |  [CATEGORY^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVCAT | 2 | IEN-LOOKUP | 120.53 | 
2. | GMV GET VITAL TYPE IEN | READ |  [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVTYPE | 2 | IEN-LOOKUP | 120.51 | 
3. | GMV VITALS/CAT/QUAL | READ |  [GETVITAL^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | GMVLIST | 21 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4. | ORBCMA5 GETUDID | READ |  [GETUDID^ORBCMA5](http://code.osehra.org/dox/Routine_ORBCMA5_source.html) | INFO | 2 | IEN-LOOKUP | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5. | ORDDPAPI ADMTIME | READ |  [ADMTIME^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 3 | PARAMETER |  | OR ADMIN TIME HELP TEXT
6. | ORDDPAPI CLOZMSG | READ |  [CLOZMSG^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 4 | PARAMETER |  | OR CLOZ INPT MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7. | ORDEA CSVALUE | READ |  [CSVALUE^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORID | 12 | - |  | 
8. | ORDEA DEATEXT | READ |  [DEATEXT^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | PARAMETER |  | OR DEA TEXT
9. | ORDEA LNKMSG | READ |  [LNKMSG^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | PARAMETER |  | OR DEA PIV LINK MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10. | OREVNTX ACTIVE | READ |  [ACTIVE^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html) | TYPE | 9 | - | 100.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | OREVNTX1 CPACT | READ |  [CPACT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 4 | - | 100.5 | 
12. | OREVNTX1 DEFLTS | READ |  [DEFLTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 6 | - | 100.5 | 
13. | OREVNTX1 DFLTDLG | READ |  [DFLTDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 4 | - | 101.41, 100.5 | 
14. | OREVNTX1 DIV1 | READ |  [DIV1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | 100.5 | 
15. | OREVNTX1 DLGIEN | READ |  [DLGIEN^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGNAME | 2 | IEN-LOOKUP |  | 
16. | OREVNTX1 GETDLG | READ |  [GETDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGID | 8 | - |  | 
17. | OREVNTX1 GTEVT1 | READ |  [GTEVT1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 10 | - | 100.5 | 
18. | OREVNTX1 ISPASS1 | READ |  [ISPASS1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID, EVTTYPE | 3 | IS-A |  | 
19. | OREVNTX1 LOC1 | READ |  [LOC1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | 100.5 | 
20. | OREVNTX1 MULTS | READ |  [MULTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 9 | - | 100.5 | 
21. | OREVNTX1 PRMPTID | READ |  [PRMPTID^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PRTNM | 1 | - | 101.41 | 
22. | OREVNTX1 PROMPT IDS | READ |  [PRTIDS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | IDS | 7 | - | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORIMO ISIVQO | READ |  [ISIVQO^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | DLGID | 8 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24. | ORQPT SPECIALTIES | READ |  [SPEC^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 3 | - | 45.7 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORQQCN DEFAULT REQUEST REASON | READ |  [DEFRFREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC, ORDFN, RESOLVE | 6 | - | 123.3, 123.5 | 
26. | ORQQCN EDIT DEFAULT REASON | READ |  [EDITDRFR^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC | 1 | - | 123.3, 123.5 | 
27. | ORQQCN GET PROC IEN | READ |  [PROCIEN^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 1 | - | 123.3, 101.43 | 
28. | ORQQCN GET PROC SVCS | READ |  [PROCSVCS^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 3 | XREF | 123.3, 123.5, 101.43 | 
29. | ORQQCN GET SERVICE IEN | READ |  [SVCIEN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 5 | - | 101.43, 123.5 | 
30. | ORQQCN ISPROSVC | READ |  [ISPROSVC^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | GMRCIEN | 1 | IS/A | 123.5 | 
31. | ORQQCN PROVDX | READ |  [PROVDX^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 1 | - | 123.3, 123.5 | 
32. | ORQQCN STATUS | READ |  [STATUS^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | &nbsp; | 6 | XREF | 123.1 | 
33. | ORQQCN SVC W/SYNONYMS | READ |  [SVCSYN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSTRT, ORWHY, ORSYN, ORIEN | 12 | - | 123.5 | 
34. | ORQQCN SVCLIST | READ |  [SVCLIST^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | FROM, DIR | 8 | - |  | 
35. | ORQQCN SVCTREE | READ |  [SVCTREE^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | PURPOSE | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORQQPL PROBLEM LEX SEARCH | READ |  [LEXSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, N, VIEW, ORDATE | 62 | LEXICON |  | 
37. | ORQQPL SERV FILTER LIST | READ |  [GETSRVC^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | - | 49 | 
38. | ORQQPL SRVC SRCH | READ |  [SRVCSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, DIR, ALL | 4 | - | 49 | 
39. | ORQQPL USER PROB LIST | READ |  [PROB^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | GROUP | 28 | - | 125.12 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40. | ORQQPL4 LEX | READ |  [LEX^ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html) | X, VIEW, ORDATE, ORINCSYN | 25 | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
41. | ORQQPX LVREMLST | READ |  [LVREMLST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS | 1 | PARAMETER |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42. | ORQQPXRM CHECK REM VERSION | READ |  [REMVER^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | &nbsp; | 1 | - | 9.4 | 
43. | ORQQPXRM DIALOG ACTIVE | READ |  [ACTIVE^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLIST | &nbsp; | - | 811.9, 801.41 | 
44. | ORQQPXRM DIALOG PROMPTS | READ |  [PROMPT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORDLG, ORDCUR, ORFTYP | 1 | - | 801.41 | 
45. | ORQQPXRM EDUCATION SUBTOPICS | READ |  [EDS^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | 9999999.09 | 
46. | ORQQPXRM EDUCATION SUMMARY | READ |  [EDL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREM | &nbsp; | - |  | 
47. | ORQQPXRM EDUCATION TOPIC | READ |  [EDU^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | 9999999.09 | 
48. | ORQQPXRM GET WH LETTER TEXT | READ |  [LETTER^WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html) | WVIEN | 13 | - | 790.404 | 
49. | ORQQPXRM MENTAL HEALTH | READ |  [MH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OTEST | 3 | - | 601.71 | 
50. | ORQQPXRM REMINDER INQUIRY | READ |  [RES^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | 811.9 | 
51. | ORQQPXRM REMINDER WEB | READ |  [WEB^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | 811.9, 800 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
52. | ORQQVI2 VITALS HELP | READ |  [HELP^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 1 | HARD CODED, UNSTRUCTURED READ |  | 
53. | ORQQVI2 VITALS VALIDATE TYPE | UTILITY |  [VMTYPES^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54. | ORQQXMB MAIL GROUPS | READ |  [MAILG^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html) | &nbsp; | 6 | - | 3.8 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55. | ORWCOM DETAILS | READ |  [DETAILS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ID | 5 | - | 101.15 | 
56. | ORWCOM GETOBJS | READ |  [GETOBJS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 9 | LIST | 101.15 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
57. | ORWCV1 COVERSHEET LIST | READ |  [COVERLST^ORWCV1](http://code.osehra.org/dox/Routine_ORWCV1_source.html) | &nbsp; | 11 | PARAMETER | 101.24, 8994 | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWD DEF | READ |  [DEF^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DLG | 14 | - | 101.41 | 
59. | ORWD OI | READ |  [OI^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | XREF, DIR, FROM | 8 | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORWDAL32 ALLERGY MATCH | READ |  [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | X | 36 | - |  | 
61. | ORWDAL32 DEF | READ |  [DEF^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 7 | HARD CODED | 120.84 | 
62. | ORWDAL32 SITE PARAMS | READ |  [GMRASITE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 3 | - |  | 
63. | ORWDAL32 SYMPTOMS | READ |  [SYMPTOMS^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | FROM, DIR | 11 | - | 120.83 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWDBA3 HINTS | READ |  [HINTS^ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html) | &nbsp; | 7 | - | 9.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65. | ORWDBA7 GETIEN9 | READ |  [GETIEN9^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | ICD9 | 1 | IEN-LOOKUP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORWDCN32 NEWDLG | READ |  [NEWDLG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORTYPE, ORLOC | 9 | PARAMETER | 101.41 | ORWDX NEW CONSULT, ORWDX NEW PROCEDURE
67. | ORWDCN32 ORDRMSG | READ |  [ORDRMSG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORDITM | 2 | - | 101.43 | 
68. | ORWDCN32 PROCEDURES | READ |  [PROC^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | FROM, DIR | 11 | QUERY | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69. | ORWDCSLT DEF | READ |  [DEF^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | &nbsp; | 7 | HARD CODED | 101.43, 101.42 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWDFH ATTR | READ |  [ATTR^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | OI | 2 | - | 101.43 | 
71. | ORWDFH DIETS | READ |  [DIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 10 | - |  | 
72. | ORWDFH FINDTYP | READ |  [FINDTYP^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | DGRP | 2 | - | 100.98 | 
73. | ORWDFH ISOIEN | READ |  [ISOIEN^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 1 | IEN-LOOKUP | 101.43 | 
74. | ORWDFH OPDIETS | READ |  [OPDIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 15 | - | 119.9 | 
75. | ORWDFH QTY2CC | READ |  [QTY2CC^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | PRD, STR, QTY | 6 | - | 101.43 | 
76. | ORWDFH TFPROD | READ |  [TFPROD^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 9 | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWDGX LOAD | READ |  [LOAD^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | PAR | 15 | PARAMETER | 101.43 | 
78. | ORWDGX VMDEF | READ |  [VMDEF^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | &nbsp; | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
79. | ORWDLR ABBSPEC | READ |  [ABBSPEC^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 3 | - | 61 | 
80. | ORWDLR ALLSAMP | READ |  [ALLSAMP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 12 | - | 61, 62 | 
81. | ORWDLR DEF | READ |  [DEF^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | ALOC | 6 | PARAMETER |  | 
82. | ORWDLR LOAD | READ |  [LOAD^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | TESTID | 18 | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
83. | ORWDLR32 ABBSPEC | READ |  [ABBSPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 3 | - | 61 | 
84. | ORWDLR32 ALLSAMP | READ |  [ALLSAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 15 | - | 62, 64.91 | 
85. | ORWDLR32 ALLSPEC | READ |  [ALLSPEC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | FROM, DIR | 7 | - |  | 
86. | ORWDLR32 DEF | READ |  [DEF^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | ALOC, ADIV | 9 | PARAMETER |  | 
87. | ORWDLR32 LOAD | READ |  [LOAD^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | TESTID | 36 | - | 101.43 | 
88. | ORWDLR32 ONE SAMPLE | READ |  [ONESAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 11 | - | 62, 61 | 
89. | ORWDLR32 ONE SPECIMEN | READ |  [ONESPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 2 | - | 61 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
90. | ORWDOR LKSCRN | READ |  [LKSCRN^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | FROM, DIR, REF, GBL, SCR | 9 | QUERY | 101.41 | 
91. | ORWDOR VMSLCT | READ |  [VMSLCT^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | &nbsp; | 3 | - | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWDPS1 DFLTSPLY | UTILITY |  [DFLTSPLY^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | UPD, SCH, PAT, DRG, OI | 12 | FMUTILITY | 101.43 | 
93. | ORWDPS1 DOSEALT | READ |  [DOSEALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | DDRUG, CUROI, PSTYPE | 5 | - | 101.43 | 
94. | ORWDPS1 FORMALT | READ |  [FORMALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ORIEN, PSTYPE | 7 | - |  | 
95. | ORWDPS1 HASOIPI | READ |  [HASOIPI^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 9 | - | 101.41 | 
96. | ORWDPS1 HASROUTE | READ |  [HASROUTE^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 6 | - | 101.41 | 
97. | ORWDPS1 ODSLCT | READ |  [ODSLCT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | PSTYPE, DFN, LOC | 11 | - | 101.42 | 
98. | ORWDPS1 QOMEDALT | READ |  [QOMEDALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ODIEN | 7 | - | 101.41, 101.43, 9.4 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
99. | ORWDPS2 OISLCT | READ |  [OISLCT^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, PSTYPE, ORVP, NEEDPI, PKIACTIV | 42 | HARD CODED |  | 
100. | ORWDPS2 QOGRP | READ |  [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | QOIFN | 16 | - |  | 
101. | ORWDPS2 SCHREQ | READ |  [SCHREQ^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, RTE, DRG | 3 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
102. | ORWDPS32 ALLIVRTE | READ |  [ALLIVRTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 10 | - | 51.2 | 
103. | ORWDPS32 ALLROUTE | READ |  [ALLROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 7 | - | 51.2 | 
104. | ORWDPS32 DLGSLCT | READ |  [DLGSLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PSTYPE, DFN, LOCIEN | 11 | - |  | 
105. | ORWDPS32 DOSES | READ |  [DOSES^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI | 13 | - | 101.43 | 
106. | ORWDPS32 DRUGMSG | READ |  [DRUGMSG^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | - | 50 | 
107. | ORWDPS32 FORMALT | READ |  [FORMALT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN, PSTYPE | 4 | - | 101.43 | 
108. | ORWDPS32 ISSPLY | READ |  [ISSPLY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | 101.43 | 
109. | ORWDPS32 IVAMT | READ |  [IVAMT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI, ORWTYP | 12 | - | 101.43 | 
110. | ORWDPS32 MEDISIV | READ |  [MEDISIV^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | 101.43 | 
111. | ORWDPS32 OISLCT | READ |  [OISLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | OI, PSTYPE, ORVP | 8 | - | 101.43 | 
112. | ORWDPS32 VALROUTE | UTILITY |  [VALROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | X | 14 | - | 51.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
113. | ORWDPS33 GETADDFR | READ |  [GETADDFR^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OIIEN | 5 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
114. | ORWDPS5 LESGRP | READ |  [LESGRP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html) | ORLES | 8 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
115. | ORWDRA DEF | READ |  [DEF^ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html) | PATID | 9 | HARD CODED, PARAMETER | 101.42, 101.43 | RA SUBMIT PROMPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
116. | ORWDRA32 DEF | READ |  [DEF^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | PATID, EVTDIV, IMGTYP | 10 | HARD CODED |  | 
117. | ORWDRA32 IMTYPSEL | READ |  [IMTYPSEL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 9 | - | 101.42, 79.3 | 
118. | ORWDRA32 PROCMSG | READ |  [PROCMSG^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | IEN | 2 | - |  | 
119. | ORWDRA32 RADSRC | READ |  [RADSRC^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | SRCTYPE | 5 | - | 34 | 
120. | ORWDRA32 RAORDITM | READ |  [RAORDITM^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | FROM, DIR, IMGTYP | 10 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
121. | ORWDX AGAIN | READ |  [AGAIN^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | IS-A |  | 
122. | ORWDX DGNM | READ |  [DGNM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | NM | 1 | IEN-LOOKUP |  | 
123. | ORWDX DGRP | READ |  [DGRP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 2 | IEN-LOOKUP |  | 
124. | ORWDX DISMSG | READ |  [DISMSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 1 | - |  | 
125. | ORWDX DLGDEF | READ |  [DLGDEF^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | - |  | 
126. | ORWDX LOADRSP | READ |  [LOADRSP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | RSPID, TRANS | 9 | - |  | 
127. | ORWDX MSG | READ |  [MSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 2 | - |  | 
128. | ORWDX ORDITM | READ |  [ORDITM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | FROM, DIR, XREF, QOCALL | 12 | QUERY |  | 
129. | ORWDX WRLST | READ |  [WRLST^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | LOC | 1 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
130. | ORWDX2 DCREASON | READ |  [DCREASON^ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html) | &nbsp; | 15 | PARAMETER, QUERY |  | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
131. | ORWDXA ISACTOI | READ |  [ISACTOI^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | OI | 2 | IS-A | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
132. | ORWDXC FILLID | READ |  [FILLID^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DLG | 8 | - | 101.41, 100.98 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
133. | ORWDXM DLGNAME | READ |  [DLGNAME^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | IEN-LOOKUP |  | 
134. | ORWDXM FORMID | READ |  [FORMID^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | - | 101.41 | 
135. | ORWDXM LOADSET | READ |  [LOADSET^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - |  | 
136. | ORWDXM MENU | READ |  [MENU^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - |  | 
137. | ORWDXM PROMPTS | READ |  [PROMPTS^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 19 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
138. | ORWDXM3 ISUDQO | READ |  [ISUDQO^ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html) | DLGID | 11 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
139. | ORWDXQ DLGNAME | READ |  [DLGNAME^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | INAME | 2 | - |  | 
140. | ORWDXQ DLGSAVE | __CHANGE__ |  [DLGSAVE^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC, DNAME, DGRP, RSP | 8 | - |  | 
141. | ORWDXQ GETQLST | READ |  [GETQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DGRP, PRE | 7 | PARAMETER |  | 
142. | ORWDXQ GETQNAM | READ |  [GETQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC | 4 | PARAMETER |  | 
143. | ORWDXQ PUTQLST | __CHANGE__ |  [PUTQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DG, QLST | 4 | PARAMETER |  | ORWDQ DISPLAY NAME
144. | ORWDXQ PUTQNAM | __CHANGE__ |  [PUTQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DLG, QNAM | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
145. | ORWDXR01 ISSPLY | READ |  [ISSPLY^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | DLGID, QODLG | 6 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
146. | ORWDXVB COMPORD | READ |  [COMPORD^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 3 | PARAMETER | 101.43 | OR VBECS COMPONENT ORDER
147. | ORWDXVB SUBCHK | READ |  [SUBCHK^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | TSTNM | 4 | COMPUTED | 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
148. | ORWDXVB3 DIAGORD | READ |  [DIAGORD^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 3 | PARAMETER |  | OR VBECS DIAGNOSTIC TEST ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
149. | ORWGN IDTVALID | READ |  [IDTVALID^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | CSYS | 3 | - |  | 
150. | ORWGN MAXFRQ | READ |  [MAXFRQ^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORTRM | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORWGRPC CLASS | READ |  [CLASS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | TYPE | 2 | - |  | 
152. | ORWGRPC RPTPARAM | READ |  [RPTPARAM^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | IEN | 1 | - | 101.24 | 
153. | ORWGRPC TAX | READ |  [TAX^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, REMTAX | 2 | - |  | 
154. | ORWGRPC TESTSPEC | READ |  [TESTSPEC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
155. | ORWLRR ALLTESTS | READ |  [ALLTESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | 60 | 
156. | ORWLRR ATESTS | READ |  [ATESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TEST | 1 | - | 60 | 
157. | ORWLRR ATOMICS | READ |  [ATOMICS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | 60 | 
158. | ORWLRR CHEMTEST | READ |  [CHEMTEST^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | 60 | 
159. | ORWLRR INFO | READ |  [INFO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTEST | 2 | - | 60 | 
160. | ORWLRR PARAM | READ |  [PARAM^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | &nbsp; | 1 | - | 69.9 | 
161. | ORWLRR SPEC | READ |  [SPEC^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | 61 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
162. | ORWNSS QOSCH | READ |  [QOSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | QOID | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
163. | ORWOR TSALL | READ |  [TSALL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 2 | - | 45.7 | 
164. | ORWOR VWGET | READ |  [VWGET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 19 | PARAMETER |  | ORCH CONTEXT ORDERS
165. | ORWOR VWSET | __CHANGE__ |  [VWSET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | VIEW | 5 | PARAMETER |  | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
166. | ORWORDG ALLTREE | READ |  [ALLTREE^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | - | 100.98 | 
167. | ORWORDG GRPSEQB | READ |  [GRPSEQB^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | PARAMETER | 100.98 | ORWOR CATEGORY SEQUENCE
168. | ORWORDG IEN | READ |  [IEN^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | X | 2 | IEN-LOOKUP |  | 
169. | ORWORDG MAPSEQ | READ |  [MAPSEQ^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | PARAMETER | 100.98 | 
170. | ORWORDG REVSTS | READ |  [REVSTS^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
171. | ORWPCE ACTIVE CODE | READ |  [CODACTIV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORCODE, ORAPP, ORDATE | 9 | - |  | 
172. | ORWPCE CPTMODS | READ |  [CPTMODS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORCPTCOD, ORDATE | 7 | - |  | 
173. | ORWPCE DIAG | READ |  [DIAG^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 5 | HARD CODED, LOCATION |  | 
174. | ORWPCE GET DX TEXT | UTILITY |  [GETDXTXT^ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html) | NARR, CODE | 1 | FMUTILITY |  | 
175. | ORWPCE GET EDUCATION TOPICS | READ |  [EDTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
176. | ORWPCE GET EXAM TYPE | READ |  [EXAMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
177. | ORWPCE GET HEALTH FACTORS TY | READ |  [HFTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ADDCATS | 10 | QUERY |  | 
178. | ORWPCE GET IMMUNIZATION TYPE | READ |  [IMMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY |  | 
179. | ORWPCE GET SET OF CODES | READ |  [GETSET^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWFILE, ORWFIELD, ORWNULL | 10 | QUERY |  | 
180. | ORWPCE GET SKIN TEST TYPE | READ |  [SKTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY |  | 
181. | ORWPCE GET TREATMENT TYPE | READ |  [TRTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
182. | ORWPCE GETMOD | READ |  [GETMOD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORMODIEN, ORDATE | 4 | - |  | 
183. | ORWPCE HASCPT | READ |  [HASCPT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLIST | 7 | - |  | 
184. | ORWPCE HF | READ |  [HF^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
185. | ORWPCE IMM | READ |  [IMM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
186. | ORWPCE LEX | READ |  [LEX^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | X, APP, ORDATE | 19 | - |  | 
187. | ORWPCE LEXCODE | READ |  [LEXCODE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN, APP, ORDATE | 5 | - |  | 
188. | ORWPCE PED | READ |  [PED^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
189. | ORWPCE PROC | READ |  [PROC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 12 | LOCATION |  | 
190. | ORWPCE SK | READ |  [SK^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
191. | ORWPCE TRT | READ |  [TRT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
192. | ORWPCE VISIT | READ |  [VISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 2 | LOCATION |  | 
193. | ORWPCE XAM | READ |  [XAM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
194. | ORWPCE4 LEX | READ |  [LEX^ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html) | X, APP, ORDATE, ORXTND, ORINCSYN | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
195. | ORWPS REASON | READ |  [REASON^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | &nbsp; | 3 | PARAMETER |  | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
196. | ORWPS1 NEWDLG | READ |  [NEWDLG^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | INPAT | 6 | PARAMETER |  | ORWDX NEW MED
197. | ORWPS1 PICKUP | READ |  [PICKUP^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | &nbsp; | 2 | - | 550 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
198. | __ORWPT CLINRNG__ | READ |  [CLINRNG^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 16 | ALLJS, HARD CODED, LOCATION, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
199. | ORWRP COLUMN HEADERS | READ |  [GETCOL^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | IFN | 8 | PARAMETER |  | 
200. | ORWRP LAB REPORT LISTS | READ |  [LABLIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 11 | PARAMETER | 101.24 | ORWRP REPORT LAB LIST
201. | ORWRP REPORT LISTS | READ |  [LIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
202. | ORWRP16 REPORT LISTS | READ |  [LIST^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | &nbsp; | 6 | - |  | 
203. | ORWRP16 REPORT TEXT | READ |  [RPT^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | DFN, RPTID, HSTYPE, DTRANGE, SECTION | 11 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
204. | ORWRP2 COMPABV | READ |  [COMPABV^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
205. | ORWRP2 COMPDISP | READ |  [COMPDISP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
206. | ORWRP2 HS COMP FILES | READ |  [FILES^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORCOMP | 1 | - | 142.5 | 
207. | ORWRP2 HS COMPONENT SUBS | READ |  [COMPSUB^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORSUB | 2 | - |  | 
208. | ORWRP2 HS COMPONENTS | READ |  [COMP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | - |  | 
209. | ORWRP2 HS FILE LOOKUP | READ |  [FILESEL^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORFILE, ORFROM, ORDIR | 1 | - |  | 
210. | ORWRP2 HS SUBITEMS | READ |  [SUBITEM^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORTEST | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
211. | ORWRP3 EXPAND COLUMNS | READ |  [LIST^ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html) | TAB | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
212. | ORWTPD GETIMG | UTILITY |  [GETIMG^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPT | 10 | - | 101.24 | 
213. | ORWTPD GETSETS | READ |  [GETSETS^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 11 | - | 101.24 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
214. | ORWTPN GETCLASS | READ |  [GETCLASS^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | &nbsp; | 8 | - | 8925.1 | 
215. | ORWTPN GETTC | READ |  [GETTC^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | CLASS, FROM, DIR | 12 | - | 8925.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
216. | ORWTPR NOTDESC | READ |  [NOTDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 7 | - |  | 
217. | ORWTPR OCDESC | READ |  [OCDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
218. | ORWU DEVICE | READ |  [DEVICE^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 16 | - |  | 
219. | ORWU PATCH | READ |  [PATCH^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | 9.4 | 
220. | ORWU VERSION | READ |  [VERSION^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | 9.4 | 
221. | ORWU VERSRV | READ |  [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, CLVER | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
222. | ORWU16 DEVICE | READ |  [DEVICE^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 5 | LIST | 3.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
223. | ORWUL FV4DG | READ |  [FV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGNM | 17 | QUERY | 101.44, 101.43 | 
224. | ORWUL FVIDX | READ |  [FVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | 101.43 | 
225. | ORWUL FVSUB | READ |  [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 6 | QUERY | 101.44 | 
226. | ORWUL QV4DG | READ |  [QV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGRP | 6 | PARAMETER, QUERY |  | ORWDQ QUICK VIEW
227. | ORWUL QVIDX | READ |  [QVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | 101.44 | 
228. | ORWUL QVSUB | READ |  [QVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 7 | QUERY | 101.44 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
229. | PXRM REMINDER CATEGORY | READ |  [CATEGORY^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | CIEN | 30 | - |  | 
230. | PXRM REMINDERS AND CATEGORIES | READ |  [SEL^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | &nbsp; | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
231. | TIU FIELD DELETE | __CHANGE__ |  [DELETE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIUDA | 5 | - | 8927.1 | 
232. | TIU FIELD EXPORT | READ |  [EXPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDS | 8 | XML |  | 
233. | TIU FIELD IMPORT | __CHANGE__ |  [IMPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | XMLTMP | 1 | XML |  | 
234. | TIU FIELD LIST | READ |  [LIST^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | FROM, DIR | 9 | - | 8927.1 | 
235. | TIU FIELD LIST IMPORT | __CHANGE__ |  [LIMPORT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 2 | REENTRANCY | 8927.1 | 
236. | TIU FIELD LOAD | READ |  [LOAD^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLD | 4 | - |  | 
237. | TIU FIELD LOAD BY IEN | READ |  [LOADIEN^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDIEN | 2 | - |  | 
238. | TIU FIELD NAME IS UNIQUE | READ |  [ISUNIQUE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | NAME, IEN | 4 | IS-A | 8927.1 | 
239. | TIU FIELD SAVE | __CHANGE__ |  [SAVE^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | TIUDA, TIUX | 24 | - | 8927.1 | 
240. | TIU GET BOILERPLATE | READ |  [TITLEBP^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | IEN | 6 | - |  | 
241. | TIU GET DS URGENCIES | READ |  [URGENCY^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | &nbsp; | 3 | HARD CODED |  | 
242. | TIU GET PRF TITLE | READ |  [GETTITLE^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | PTDFN, FLAGID | 6 | - |  | 
243. | TIU GET PRINT NAME | READ |  [GETPNAME^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUTYPE | 1 | - |  | 
244. | TIU ID CAN ATTACH | READ |  [CANATTCH^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 15 | IS-A |  | 
245. | TIU IDENTIFY CLINPROC CLASS | READ |  [CPCLASS^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | &nbsp; | 1 | - |  | 
246. | TIU IDENTIFY CONSULTS CLASS | READ |  [CNSLCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | IEN-LOOKUP |  | 
247. | TIU IDENTIFY SURGERY CLASS | READ |  [SURGCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLNAME | 2 | IEN-LOOKUP |  | 
248. | TIU IS THIS A CLINPROC? | READ |  [ISCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | TITLE | 5 | IS-A |  | 
249. | TIU IS THIS A CONSULT? | READ |  [ISCNSLT^TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html) | TITLE | 4 | IS-A |  | 
250. | TIU IS THIS A SURGERY? | READ |  [ISSURG^TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html) | TITLE | 5 | IS-A |  | 
251. | TIU ISPRF | READ |  [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUDA | 7 | IEN-LOOKUP, IS-A |  | 
252. | TIU LONG LIST BOILERPLATED | READ |  [LONGLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 12 | LIST | 8925.1 | 
253. | TIU LONG LIST CLINPROC TITLES | READ |  [LNGCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | FROM, DIR | 5 | LIST | 8925.1 | 
254. | TIU LONG LIST CONSULT TITLES | READ |  [LNGCNSLT^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR | 2 | LIST | 8925.1 | 
255. | TIU LONG LIST OF TITLES | READ |  [LONGLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLASS, FROM, DIR, IDNOTE | 7 | LIST | 8925.1 | 
256. | TIU LONG LIST SURGERY TITLES | READ |  [LNGSURG^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR, CLNAME | 3 | LIST | 8925.1 | 
257. | TIU REM DLG OK AS TEMPLATE | READ |  [REMDLGOK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | TIUIEN | 15 | DUZ FOR SERVICE, IS-A, PARAMETER | 801.41 | TIU TEMPLATE REMINDER DIALOGS
258. | TIU REMINDER DIALOGS | READ |  [REMDLGS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE REMINDER DIALOGS
259. | TIU TEMPLATE ALL TITLES | READ |  [TITLELST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 10 | - |  | 
260. | TIU TEMPLATE CHECK BOILERPLATE | UTILITY |  [BPCHECK^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUX | 45 | - |  | 
261. | TIU TEMPLATE CREATE/MODIFY | __CHANGE__ |  [SETTMPLT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 11 | - |  | 
262. | TIU TEMPLATE DELETE | __CHANGE__ |  [DELETE^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - |  | 
263. | TIU TEMPLATE GET DEFAULTS | READ |  [GETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 3 | PARAMETER |  | TIU DEFAULT TEMPLATES
264. | TIU TEMPLATE GET DESCRIPTION | READ |  [GETDESC^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | TIUDA | 4 | - |  | 
265. | TIU TEMPLATE GETBOIL | READ |  [GETBOIL^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 9 | - |  | 
266. | TIU TEMPLATE GETITEMS | READ |  [GETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - |  | 
267. | TIU TEMPLATE GETLINK | READ |  [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | LINK | 3 | - |  | 
268. | TIU TEMPLATE GETPROOT | READ |  [GETPROOT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 2 | - |  | 
269. | TIU TEMPLATE GETROOTS | READ |  [GETROOTS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 4 | - |  | 
270. | TIU TEMPLATE GETTEXT | READ |  [GETTEXT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | DFN, VSTR, TIUX | 1 | - |  | 
271. | TIU TEMPLATE ISEDITOR | READ |  [ISEDITOR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | ROOT, USER | 6 | - |  | 
272. | TIU TEMPLATE LISTOWNR | READ |  [LISTOWNR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUFROM, DIR | 12 | - |  | 
273. | TIU TEMPLATE PERSONAL OBJECTS | READ |  [PERSOBJS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE PERSONAL OBJECTS
274. | TIU TEMPLATE SET DEFAULTS | __CHANGE__ |  [SETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | SETTINGS | 3 | PARAMETER |  | TIU DEFAULT TEMPLATES
275. | TIU TEMPLATE SET ITEMS | __CHANGE__ |  [SETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 7 | - |  | 
276. | TIU USER CLASS LONG LIST | READ |  [CLSLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 4 | - | 8930 | 


#### User (179)

Category | Number
--- | ---
CHANGE | 38 (21.2%)
READ | 130 (72.6%)
UTILITY | 11 (6.1%)

... many - 82 (45.8%) - involve PARAMETER setting or getting.

\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
1. | GMV USER | READ |  [RPC^GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html) | OPTION, DATA | 5 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2. | ORB SORT METHOD | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
3. | ORECS01 SAVPATH | __CHANGE__ |  [SAVPATH^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | ECPATH | 12 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4. | OREVNTX1 AUTHMREL | READ |  [AUTHMREL^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | USER | 1 | PARAMETER, XUSEC |  | 
5. | OREVNTX1 CMEVTS | READ |  [CMEVTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | CLOC | 10 | LOCATION, PARAMETER |  | 
6. | OREVNTX1 DELDFLT | __CHANGE__ |  [DELDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 4 | PARAMETER |  | 
7. | OREVNTX1 DFLTEVT | READ |  [DFLTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 5 | PARAMETER |  | 
8. | OREVNTX1 SETDFLT | __CHANGE__ |  [SETDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 5 | PARAMETER | 100.5 | 
9. | OREVNTX1 TYPEXT | READ |  [TYPEXT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT | 2 | - |  | 
10. | OREVNTX1 WRLSTED | READ |  [WRLSTED^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | LOC, EVTID | &nbsp; | PARAMETER | 101.41 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | ORQORB SORT | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12. | ORQPT DEFAULT CLINIC DATE RANG | READ |  [CDATRANG^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 6 | LOCATION, PARAMETER |  | 
13. | ORQPT DEFAULT LIST SORT | READ |  [DEFSORT^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 8 | PARAMETER |  | 
14. | ORQPT DEFAULT LIST SOURCE | READ |  [DEFSRC^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 13 | PARAMETER |  | 
15. | ORQPT PROVIDERS | READ |  [PROV^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | XREF, XUSEC | 200 | 
16. | ORQPT TEAMS | READ |  [TEAMS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html) | &nbsp; | 6 | - | 100.21 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17. | ORQQCN2 SAVE CONTEXT | __CHANGE__ |  [SAVECTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORCTXT | 5 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
18. | ORQQLR SEARCH RANGE OUTPT | READ |  [SROUT^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQLR SEARCH RANGE OUTPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19. | ORQQPL INIT USER | READ |  [INITUSER^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | ORDUZ | 29 | PARAMETER, REENTRANCY | 125.99 | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES
20. | ORQQPL PROBLEM NTRT BULLETIN | UTILITY |  [NTRTBULL^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | ORTERM, ORNP, ORPT, ORCOMM | 20 | BULLETIN, PARAMETER, XMB |  | OR PROBLEM NTRT BY DIVISION
21. | ORQQPL PROV FILTER LIST | READ |  [GETRPRV^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | - |  | 
22. | ORQQPL PROVIDER LIST | READ |  [PROVSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FLAG, N, FROM, PART | 10 | - |  | 
23. | ORQQPL SAVEVIEW | __CHANGE__ |  [SAVEVIEW^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPLVIEW | 8 | PARAMETER | 200 | ORCH CONTEXT PROBLEMS
24. | ORQQPL USER PROB CATS | READ |  [CAT^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | ORDUZ, CLIN | 12 | REENTRANCY | 125.1, 200 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORQQPX GET DEF LOCATIONS | READ |  [GETDEFOL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 3 | PARAMETER |  | ORQQPX DEFAULT LOCATIONS
26. | ORQQPX GET FOLDERS | READ |  [GETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQPX REMINDER FOLDERS
27. | ORQQPX NEW COVER SHEET ACTIVE | READ |  [NEWCVOK^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | IS-A, PARAMETER |  | ORQQPX NEW REMINDER PARAMS
28. | ORQQPX NEW COVER SHEET REMS | READ |  [REMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LOC | 20 | PARAMETER |  | ORQQPX SEARCH ITEMS
29. | ORQQPX NEW REMINDERS ACTIVE | READ |  [NEWACTIV^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 8 | IS-A, PARAMETER |  | PXRM GUI REMINDERS ACTIVE
30. | ORQQPX REM INSERT AT CURSOR | READ |  [INSCURS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | PARAMETER |  | ORQQPX REMINDER TEXT AT CURSOR
31. | ORQQPX SET FOLDERS | __CHANGE__ |  [SETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORFLDRS | 3 | PARAMETER |  | ORQQPX REMINDER FOLDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32. | ORQQPXRM GET WH REPORT TEXT | READ |  [WHREPORT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORIEN | 1 | - | 790.1 | 
33. | ORQQPXRM PROGRESS NOTE HEADER | READ |  [HDR^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLOC | &nbsp; | LOCATION |  | PXRM PROGRESS NOTE HEADERS
34. | ORQQPXRM REMINDER CATEGORIES | READ |  [CATEGORY^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLOC | 1 | LOCATION |  | PXRM CPRS LOOKUP CATEGORIES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORQQVI2 VITALS VALIDATE | UTILITY |  [VALIDATE^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQDATA | 6 | EXTERNAL I/F, HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORWCH LDFONT | READ |  [LDFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 1 | PARAMETER |  | ORWCH FONT SIZE
37. | ORWCH LOADALL | READ |  [LOADALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | &nbsp; | 10 | PARAMETER |  | ORWCH BOUNDS, ORWCH WIDTHS, ORWCH COLUMNS
38. | ORWCH LOADSIZ | READ |  [LOADSIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 2 | PARAMETER |  | ORWCH BOUNDS
39. | ORWCH SAVEALL | __CHANGE__ |  [SAVEALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | LST | 8 | PARAMETER |  | ORWCH BOUNDS, ORWCH WIDTHS, ORWCH COLUMNS
40. | ORWCH SAVECOL | __CHANGE__ |  [SAVECOL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | COL | 4 | PARAMETER |  | ORWCH COLUMNS REPORTS
41. | ORWCH SAVESIZ | __CHANGE__ |  [SAVESIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM, VAL | 1 | PARAMETER |  | ORWCH BOUNDS
42. | ORWCH SAVFONT | __CHANGE__ |  [SAVFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | VAL | 1 | PARAMETER |  | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43. | ORWCOM ORDEROBJ | READ |  [ORDEROBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ORGRP | 1 | PARAMETER |  | ORWCOM PATIENT SELECTED
44. | ORWCOM PTOBJ | READ |  [PTOBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 1 | PARAMETER |  | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
45. | ORWD KEY | READ |  [KEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | KEYNAME, USERID | 1 | XUSEC |  | 
46. | ORWD PROVKEY | READ |  [PROVKEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | USERID | 2 | XUSEC |  | 
47. | ORWD SAVE | __CHANGE__ |  [SAVE^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DFN, ORNP, LOC, DLG, ORWDACT, RSP | 12 | - |  | 
48. | ORWD SAVEACT | __CHANGE__ |  [SAVEACT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN, ACTION, REASON, DFN, ORNP, LOC | 35 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49. | ORWDAL32 CLINUSER | READ |  [CLINUSER^ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html) | &nbsp; | 16 | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50. | ORWDBA2 ADDPDL | __CHANGE__ |  [ADDPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 28 | - | 200 | 
51. | ORWDBA2 DELPDL | __CHANGE__ |  [DELPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 9 | - |  | 
52. | ORWDBA2 GETPDL | READ |  [GETPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN | 14 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53. | ORWDBA4 GETBAUSR | READ |  [GETBAUSR^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html) | ORCIEN | 2 | PARAMETER |  | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54. | ORWDBA7 ISWITCH | READ |  [ISWITCH^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55. | ORWDCSLT LOOK200 | READ |  [LOOK200^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | X | 2 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56. | ORWDLR32 IC DEFAULT | READ |  [ICDEFLT^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | LOCATION | 69.9 | 
57. | ORWDLR32 IMMED COLLECT | READ |  [IMMCOLL^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | LOCATION, UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWDLR33 LC TO WC | READ |  [LCTOWC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC | 6 | LOCATION, PARAMETER |  | ORWLR LC CHANGED TO WC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
59. | ORWDPS1 FAILDEA | UTILITY |  [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, ORNP, PSTYPE | 13 | FMUTILITY, IS-A | 101.43 | 
60. | ORWDPS1 IVDEA | READ |  [FDEA1^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, OITYPE, ORNP | 13 | - | 200, 101.43 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61. | ORWDPS32 AUTH | READ |  [AUTH^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PRV, ORDLOG | 12 | PARAMETER |  | OR OREMAS MED ORDERS
62. | ORWDPS32 AUTHNVA | READ |  [AUTHNVA^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PRV | 8 | PARAMETER |  | OR OREMAS NON-VA MED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
63. | ORWDRA32 APPROVAL | READ |  [APPROVAL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 7 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWDXM1 SVRPC | READ |  [SVRPC^ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html) | X | 1 | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65. | ORWDXVB STATALOW | READ |  [STATALOW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORWGN AUTHUSR | READ |  [AUTHUSR^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | &nbsp; | 2 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
67. | ORWGRPC ALLVIEWS | READ |  [ALLVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VIEW, USER | 2 | - |  | 
68. | ORWGRPC DELVIEWS | __CHANGE__ |  [DELVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC | 2 | PARAMETER |  | 
69. | ORWGRPC PUBLIC | READ |  [PUBLIC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWLRR ATG | READ |  [ATG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TESTGP, USER | 1 | DUZ TO K/META | 60, 69.2, 68 | 
71. | ORWLRR TG | READ |  [TG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | USER | 1 | - |  | 
72. | ORWLRR USERS | READ |  [USERS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | QUERY | 68 | 
73. | ORWLRR UTGA | READ |  [UTGA^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS | 1 | QUERY |  | 
74. | ORWLRR UTGD | READ |  [UTGD^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TGRP | 1 | QUERY |  | 
75. | ORWLRR UTGR | READ |  [UTGR^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS, TGRP | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
76. | ORWNSS NSSMSG | READ |  [NSSMSG^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | &nbsp; | 4 | PARAMETER |  | ORWIM NSS MESSAGE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWOR PKIUSE | READ |  [PKIUSE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
78. | ORWOR1 GETDEA | READ |  [GETDEA^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORUSER | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
79. | ORWPCE ACTIVE PROV | READ |  [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWPROV, ORWDT | 1 | IS-A |  | 
80. | ORWPCE ALWAYS CHECKOUT | READ |  [DOCHKOUT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | IS-A, PARAMETER |  | ORWPCE DISABLE AUTO CHECKOUT
81. | ORWPCE ANYTIME | READ |  [ANYTIME^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 4 | PARAMETER |  | ORWPCE ANYTIME ENCOUNTERS
82. | ORWPCE ASKPCE | READ |  [ASKPCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | PARAMETER |  | ORWPCE ASK ENCOUNTER UPDATE
83. | ORWPCE AUTO VISIT TYPE SELECT | READ |  [AUTOVSIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | IS-A, PARAMETER |  | 
84. | ORWPCE FORCE | READ |  [FORCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | LOCATION, PARAMETER |  | 
85. | ORWPCE GET EXCLUDED | READ |  [EXCLUDED^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC, TYPE | 6 | PARAMETER |  | 
86. | ORWPCE MH TEST AUTHORIZED | READ |  [MHATHRZD^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | TEST, USER | 7 | PARAMETER |  | 
87. | ORWPCE MHTESTOK | READ |  [MHTESTOK^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 6 | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
88. | ORWPT DFLTSRC | READ |  [DFLTSRC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 2 | PARAMETER |  | ORLP DEFAULT LIST SOURCE
89. | ORWPT SAVDFLT | __CHANGE__ |  [SAVDFLT^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | X | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
90. | ORWRP2 SAVLKUP | __CHANGE__ |  [SAVLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | VAL | 4 | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
91. | ORWSR SAVE SURG CONTEXT | __CHANGE__ |  [SVSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT SURGERY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWTIU CANLINK | READ |  [CANLINK^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTITLE | 1 | - |  | 
93. | ORWTIU GET DCSUMM CONTEXT | READ |  [GTDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | PARAMETER |  | ORCH CONTEXT SUMMRIES
94. | ORWTIU GET TIU CONTEXT | READ |  [GTTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | PARAMETER |  | ORCH CONTEXT NOTES
95. | ORWTIU SAVE DCSUMM CONTEXT | __CHANGE__ |  [SVDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT SUMMRIES
96. | ORWTIU SAVE TIU CONTEXT | __CHANGE__ |  [SVTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
97. | ORWTPD ACTDF | __CHANGE__ |  [ACTDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 8 | PARAMETER |  | 
98. | ORWTPD DELDFLT | __CHANGE__ |  [DELDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 4 | PARAMETER |  | 
99. | ORWTPD GETDFLT | READ |  [GETDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 3 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
100. | ORWTPD PUTOCM | __CHANGE__ |  [PUTOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | ORVAL | 5 | PARAMETER |  | 
101. | ORWTPD SUDF | __CHANGE__ |  [SUDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | VALUE | 5 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
102. | ORWTPD SUINDV | __CHANGE__ |  [SUINDV^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPTS, VALUE | 7 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
103. | ORWTPD1 GETCSRNG | READ |  [GETCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 10 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
104. | ORWTPD1 GETEDATS | READ |  [GETEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
105. | ORWTPD1 PUTCSRNG | __CHANGE__ |  [PUTCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | INFO | 10 | PARAMETER |  | 
106. | ORWTPD1 PUTEDATS | __CHANGE__ |  [PUTEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | Y | 10 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
107. | ORWTPP ADDLIST | READ |  [ADDLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - | 100.21 | 
108. | ORWTPP CHKSURR | READ |  [CHKSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | SURR | 1 | PARAMETER |  | 
109. | ORWTPP CLDAYS | READ |  [CLDAYS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
110. | ORWTPP CLEARNOT | __CHANGE__ |  [CLEARNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | 8992.1 | 
111. | ORWTPP CLRANGE | READ |  [CLRANGE^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
112. | ORWTPP CSARNG | READ |  [CSARNG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
113. | ORWTPP CSLAB | READ |  [CSLAB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
114. | ORWTPP DELLIST | READ |  [DELLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNUM | 1 | - | 100.21 | 
115. | ORWTPP GETCOMBO | READ |  [GETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
116. | ORWTPP GETCOS | READ |  [GETCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | FROM, DIR, VISITORS | 2 | - |  | 
117. | ORWTPP GETDCOS | READ |  [GETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
118. | ORWTPP GETIMG | READ |  [GETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
119. | ORWTPP GETNOT | READ |  [GETNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
120. | ORWTPP GETNOTO | READ |  [GETNOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
121. | ORWTPP GETOC | READ |  [GETOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
122. | ORWTPP GETOTHER | READ |  [GETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
123. | ORWTPP GETREM | READ |  [GETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
124. | ORWTPP GETSUB | READ |  [GETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
125. | ORWTPP GETSURR | READ |  [GETSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
126. | ORWTPP GETTD | READ |  [GETTD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | - |  | 
127. | ORWTPP GETTU | READ |  [GETTU^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | - |  | 
128. | ORWTPP LSDEF | READ |  [LSDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
129. | ORWTPP NEWLIST | READ |  [NEWLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNAME, ORVIZ | 1 | - |  | 
130. | ORWTPP PLISTS | READ |  [PLISTS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | 100.21 | 
131. | ORWTPP PLTEAMS | READ |  [PLTEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | 100.21 | 
132. | ORWTPP REMLIST | __CHANGE__ |  [REMLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
133. | ORWTPP SAVECD | __CHANGE__ |  [SAVECD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
134. | ORWTPP SAVECS | __CHANGE__ |  [SAVECS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
135. | ORWTPP SAVELIST | __CHANGE__ |  [SAVELIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | PLIST, LISTNUM, ORVIZ | 1 | - |  | 
136. | ORWTPP SAVENOT | __CHANGE__ |  [SAVENOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
137. | ORWTPP SAVENOTO | __CHANGE__ |  [SAVENOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
138. | ORWTPP SAVEOC | __CHANGE__ |  [SAVEOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
139. | ORWTPP SAVEPLD | __CHANGE__ |  [SAVEPLD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
140. | ORWTPP SAVESURR | __CHANGE__ |  [SAVESURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
141. | ORWTPP SAVET | __CHANGE__ |  [SAVET^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS, DEFAULT, VALUES | 1 | - |  | 
142. | ORWTPP SETCOMBO | UTILITY |  [SETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 2 | - |  | 
143. | ORWTPP SETDCOS | UTILITY |  [SETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
144. | ORWTPP SETIMG | UTILITY |  [SETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | MAX, START, STOP | 1 | - |  | 
145. | ORWTPP SETOTHER | UTILITY |  [SETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
146. | ORWTPP SETREM | UTILITY |  [SETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
147. | ORWTPP SETSUB | UTILITY |  [SETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
148. | ORWTPP SORTDEF | READ |  [SORTDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
149. | ORWTPP TEAMS | READ |  [TEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
150. | ORWTPT GETTEAM | READ |  [GETTEAM^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html) | TEAM | 7 | - | 100.21 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORWU DEFAULT DIVISION | READ |  [DEFDIV^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | &nbsp; | 12 | LOCATION |  | 
152. | ORWU HAS OPTION ACCESS | READ |  [HASOPTN^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | OPTION | 3 | - |  | 
153. | ORWU HASKEY | READ |  [HASKEY^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | KEY | 1 | - |  | 
154. | ORWU NEWPERS | READ |  [NEWPERS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | ORFROM, ORDIR, ORKEY, ORDATE, ORVIZ, ORALL | 1 | - |  | 
155. | ORWU PARAM | READ |  [PARAM^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | PARAMETER |  | 
156. | ORWU PARAMS | READ |  [PARAMS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | PARAMETER |  | 
157. | ORWU TOOLMENU | READ |  [TOOLMENU^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 3 | PARAMETER |  | ORWT TOOLS MENU
158. | ORWU USERINFO | READ |  [USERINFO^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 56 | PARAMETER |  | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
159. | ORWU VALIDSIG | UTILITY |  [VALIDSIG^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
160. | ORWU1 NAMECVT | READ |  [NAMECVT^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | IEN | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
161. | ORWU16 NEWPERS | READ |  [NEWPERS^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM, KEY | 10 | QUERY |  | 
162. | ORWU16 USERINFO | READ |  [USERINFO^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 3 | - |  | 
163. | ORWU16 VALIDSIG | UTILITY |  [VALIDSIG^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
164. | TIU AUTHORIZATION | READ |  [CANDO^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA, TIUACT | 8 | IS-A |  | 
165. | TIU CAN CHANGE COSIGNER? | READ |  [CANCHCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | IS-A |  | 
166. | TIU DIV AND CLASS INFO | READ |  [USERINFO^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | USER | 13 | - | 200, 8930 | 
167. | TIU FIELD CAN EDIT | READ |  [CANEDIT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 9 | IS-A, PARAMETER |  | 
168. | TIU GET DEFAULT PROVIDER | READ |  [DEFDOC^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | HLOC, USER, TIUDT, TIUIEN | 7 | - |  | 
169. | TIU GET DS TITLES | READ |  [SUMMARY^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ TO K/META | 8925.98, 8925.1 | 
170. | TIU GET LIST OF OBJECTS | READ |  [OBJLST^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | &nbsp; | 6 | - |  | 
171. | TIU GET PERSONAL PREFERENCES | READ |  [GETPREF^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | USER | 1 | - |  | 
172. | TIU GET PN TITLES | READ |  [NOTES^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ TO K/META | 8925.98, 8925.1 | 
173. | TIU IS USER A PROVIDER? | READ |  [ISAPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 3 | IS-A |  | 
174. | TIU IS USER A USR PROVIDER | READ |  [USRPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 4 | IS-A |  | 
175. | TIU LOAD BOILERPLATE TEXT | READ |  [BLRSHELL^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | TITLE, DFN, VSTR | 3 | ASSEMBLY | 8925.1 | 
176. | TIU PERSONAL TITLE LIST | READ |  [PERSLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | DUZ, CLASS, TIUC, TIUFLG | 25 | DUZ TO K/META | 8925.1 | 
177. | TIU REQUIRES COSIGNATURE | READ |  [REQCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUTYP, TIUDA, TIUSER, TIUDT | 6 | IS-A |  | 
178. | TIU TEMPLATE ACCESS LEVEL | READ |  [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | ROOT, USER, LOC | 24 | PARAMETER |  | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
179. | TIU USER INACTIVE? | READ |  [USRINACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | IS-A |  | 


#### Other (100)

Category | Number
--- | ---
CHANGE | 6 (6%)
READ | 53 (53%)
UTILITY | 41 (41%)

\# | Name | Category | Tags
--- | --- | --- | ---
\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
1. | __GMV CONVERT DATE__ | UTILITY |  [GETDT^GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html) | GMRDATE | 4 | ALLJS, HARD CODED, RPCLOCKER |  | 
2. | GMV DLL VERSION | READ |  [DLL^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVX | 3 | PARAMETER |  | GMV DLL VERSION
3. | __GMV GET CURRENT TIME__ | UTILITY |  [TIME^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | P2 | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
4. | GMV LOCATION SELECT | UTILITY |  [RPC^GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html) | OPTION, DATA | 4 | DYNAMIC EXECUTE |  | 
5. | GMV MANAGER | UTILITY |  [RPC^GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html) | OPTION, DATA | 5 | DYNAMIC EXECUTE, SECURITY HOLE |  | 
6. | GMV PARAMETER | __CHANGE__ |  [RPC^GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html) | OPTION, ENT, PAR, INST, VAL | 9 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7. | ORECS01 GETDIV | READ |  [GETDIV^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | USR | 2 | GLOBAL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8. | ORIMO ISCLOC | READ |  [ISCLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | ALOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9. | ORPRF CLEAR | UTILITY |  [CLEAR^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | &nbsp; | 2 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10. | __ORQ NULL LIST__ | UTILITY |  [NLIST^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11. | ORQPT CLINICS | READ |  [CLIN^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION, PARAMETER |  | ORWD COMMON CLINIC
12. | ORQPT KILL RPL | UTILITY |  [RPLCLEAN^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | ORJ | 6 | HARD CODED, REENTRANCY |  | 
13. | ORQPT WARDS | READ |  [WARD^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION | 42 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14. | ORQQCN2 GET CONTEXT | READ |  [GETCTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORUSER | 1 | PARAMETER |  | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15. | ORQQPL CLIN FILTER LIST | READ |  [GETCLIN^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 5 | IEN-LOOKUP, LOCATION |  | 
16. | ORQQPL CLIN SRCH | READ |  [CLINSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | X | 4 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17. | ORQQPX GET HIST LOCATIONS | READ |  [HISTLOC^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 12 | LOCATION | 9999999.06 | 
18. | ORQQPX SAVELVL | __CHANGE__ |  [SAVELVL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS, DATA | 13 | PARAMETER |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19. | ORQQVI2 VITALS RATE CHECK | UTILITY |  [RATECHK^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE, ORQRATE, ORQUNIT | 1 | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
20. | ORWCIRN AUTORDV | READ |  [AUTORDV^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 1 | PARAMETER |  | ORWRP CIRN AUTOMATIC
21. | ORWCIRN HDRON | READ |  [HDRON^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 2 | PARAMETER |  | ORWRP HDR ON
22. | ORWCIRN WEBADDR | READ |  [WEBADDR^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | PATID | 4 | HARD CODED, PARAMETER |  | ORWRP VISTAWEB ADDRESS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORWD DT | UTILITY |  [DT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | X | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24. | ORWDBA1 BASTATUS | READ |  [BASTATUS^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | &nbsp; | 3 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25. | ORWDFH NFSLOC READY | READ |  [OPLOCOK^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
26. | ORWDLR STOP | UTILITY |  [STOP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | X2 | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27. | ORWDLR32 GET LAB TIMES | READ |  [GETLABTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 17 | PARAMETER |  | LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
28. | ORWDLR32 IC VALID | UTILITY |  [ICVALID^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORTIME | 2 | FMUTILITY, IS-A | 69.9 | 
29. | ORWDLR32 LAB COLL TIME | UTILITY |  [LABCOLTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 13 | IS-A, PARAMETER |  | LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
30. | ORWDLR32 MAXDAYS | UTILITY |  [MAXDAYS^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | LOC, SCHED | 10 | LOCATION, PARAMETER |  | 
31. | ORWDLR32 STOP | UTILITY |  [STOP^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | X2 | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32. | ORWDLR33 FUTURE LAB COLLECTS | READ |  [LCFUTR^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC, ORDIV | 4 | LOCATION, PARAMETER |  | LR LAB COLLECT FUTURE
33. | ORWDLR33 LASTTIME | UTILITY |  [LASTTIME^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 5 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
34. | ORWDOR VALNUM | UTILITY |  [VALNUM^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | X, DOM | 9 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORWDPS1 LOCPICK | READ |  [LOCPICK^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | LOC | 6 | LOCATION, PARAMETER |  | ORWDPS ROUTING DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | ORWDPS2 DAY2QTY | UTILITY |  [DAY2QTY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | DAY, UPD, SCH, DUR, PAT, DRG | 15 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37. | ORWDPS32 VALQTY | UTILITY |  [VALQTY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 2 | HARD CODED, IS-A |  | 
38. | ORWDPS32 VALRATE | UTILITY |  [VALRATE^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 3 | HARD CODED, IS-A |  | 
39. | ORWDPS32 VALSCH | UTILITY |  [VALSCH^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X, PSTYPE | 8 | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40. | ORWDRA32 LOCTYPE | READ |  [LOCTYPE^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | ORLOC | 4 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
41. | ORWDXC ON | READ |  [ON^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | &nbsp; | 1 | IS-A, PARAMETER |  | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42. | ORWDXM MSTYLE | READ |  [MSTYLE^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | &nbsp; | 1 | PARAMETER |  | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43. | ORWDXVB NURSADMN | READ |  [NURSADMN^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | PARAMETER |  | OR VBECS SUPPRESS NURS ADMIN
44. | ORWDXVB VBTNS | READ |  [VBTNS^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | PARAMETER |  | ORWDXVB VBECS TNS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
45. | ORWDXVB3 COLLTIM | READ |  [COLLTIM^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 1 | PARAMETER |  | OR VBECS REMOVE COLL TIME
46. | ORWDXVB3 SWPANEL | READ |  [SWPANEL^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 2 | PARAMETER |  | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47. | ORWGN GNLOC | READ |  [GNLOC^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORFROM, DIR | 13 | IS-A, PARAMETER |  | OR GN LOCATIONS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
48. | ORWGRPC GETDATES | UTILITY |  [GETDATES^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | REPORTID | 2 | PARAMETER | 101.24 | ORWRP TIME/OCC LIMITS INDV
49. | ORWGRPC GETPREF | UTILITY |  [GETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY, PARAMETER |  | 
50. | ORWGRPC GETSIZE | UTILITY |  [GETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY, PARAMETER |  | 
51. | ORWGRPC GETVIEWS | UTILITY |  [GETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, PUBLIC, EXT, USER | 2 | FMUTILITY, PARAMETER |  | 
52. | ORWGRPC SETPREF | __CHANGE__ |  [SETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | SETTING, PUBLIC | 2 | PARAMETER |  | 
53. | ORWGRPC SETSIZE | __CHANGE__ |  [SETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VAL | 2 | PARAMETER |  | 
54. | ORWGRPC SETVIEWS | __CHANGE__ |  [SETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC, VAL | 2 | PARAMETER |  | 
55. | ORWGRPC TESTING | UTILITY |  [TESTING^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56. | ORWLEX GETFREQ | UTILITY |  [GETFREQ^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORSRCHTX | 2 | HARD CODED |  | 
57. | ORWLEX GETI10DX | UTILITY |  [GETI10DX^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORX, ORDT | 32 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORWLR REPORT LISTS | UTILITY |  [LIST^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html) | &nbsp; | 5 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
59. | ORWNSS CHKSCH | UTILITY |  [CHKSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | SCH | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORWOR EXPIRED | UTILITY |  [EXPIRED^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | PARAMETER |  | ORWOR EXPIRED ORDERS
61. | ORWOR PKISITE | READ |  [PKISITE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 7 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
62. | ORWORB GETSORT | READ |  [GETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT METHOD
63. | ORWORB SETSORT | __CHANGE__ |  [SETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | SORT, DIR | 3 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORWPCE GAFURL | READ |  [GAFURL^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 5 | ALLJS, HARD CODED |  | 
65. | ORWPCE GETSVC | UTILITY |  [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | SVC, LOC, INP | 5 | LOCATION |  | 
66. | ORWPCE ISCLINIC | READ |  [ISCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLOC | 4 | IS-A, LOCATION |  | 
67. | ORWPCE MHCLINIC | READ |  [MHCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORIEN | 2 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
68. | ORWPCE1 NONCOUNT | READ |  [NONCOUNT^ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html) | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69. | __ORWPT16 PSCNVT__ | READ |  [PSCNVT^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
70. | ORWRA DEFAULT EXAM SETTINGS | READ |  [GETDEF^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | &nbsp; | 11 | PARAMETER |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
71. | ORWRP2 GETLKUP | READ |  [GETLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
72. | ORWSR GET SURG CONTEXT | READ |  [GTSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORUSER | 2 | PARAMETER |  | ORCH CONTEXT SURGERY
73. | ORWSR SHOW OPTOP WHEN SIGNING | READ |  [SHOWOPTP^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCASE | 2 | HARD CODED |  | 
74. | ORWSR SHOW SURG TAB | READ |  [SHOWSURG^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | &nbsp; | 3 | PARAMETER |  | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
75. | ORWTPD GETOCM | READ |  [GETOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 1 | PARAMETER |  | ORCH CONTEXT MEDS
76. | ORWTPD RSDFLT | READ |  [RSDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 2 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | ORWTPD1 GETCSDEF | READ |  [GETCSDEF^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 8 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
78. | ORWTPD1 GETEAFL | READ |  [GETEAFL^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 1 | PARAMETER |  | ORQQEAFL ENC APPT FUTURE LIMIT
79. | ORWTPD1 GETEFDAT | READ |  [GETEFDAT^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 7 | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80. | ORWTPO CSARNGD | READ |  [CSARNGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
81. | ORWTPO CSLABD | READ |  [CSLABD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 4 | PARAMETER |  | 
82. | ORWTPO GETIMGD | READ |  [GETIMGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 1 | PARAMETER |  | 
83. | ORWTPO GETTABS | READ |  [GETTABS^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | PARAMETER | 8989.51 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
84. | ORWU CLINLOC | READ |  [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION |  | 
85. | __ORWU DT__ | UTILITY |  [DT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
86. | ORWU EXTNAME | UTILITY |  [EXTNAME^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | IEN, FN | 2 | FMUTILITY |  | 
87. | ORWU GBLREF | UTILITY |  [GBLREF^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FN | 2 | FMUTILITY |  | 
88. | ORWU GENERIC | UTILITY |  [GENERIC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR, REF | 4 | FMUTILITY |  | 
89. | ORWU HOSPLOC | READ |  [HOSPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION |  | 
90. | ORWU INPLOC | READ |  [INPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 6 | LOCATION |  | 
91. | __ORWU VALDT__ | UTILITY |  [VALDT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92. | ORWU1 NEWLOC | READ |  [NEWLOC^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | ORFROM, DIR | 6 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
93. | ORWU16 HOSPLOC | READ |  [HOSPLOC^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM | 10 | LOCATION, QUERY |  | 
94. | ORWU16 VALDT | UTILITY |  [VALDT^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X, %DT | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
95. | ORWUH POPUP | READ |  [POPUP^ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html) | CTRL | 6 | PARAMETER |  | ORWUH WHATSTHIS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
96. | ORWUX SYMTAB | UTILITY |  [SYMTAB^ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html) | &nbsp; | 17 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
97. | TIU FIELD CHECK | UTILITY |  [CHKFLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 37 | HARD CODED |  | 
98. | TIU FIELD DOLMTEXT | UTILITY |  [DOLMTEXT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIULIST | 4 | FMUTILITY |  | 
99. | TIU FIELD LIST ADD | UTILITY |  [XFLDLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | IN | 6 | REENTRANCY |  | 
100. | TIU GET SITE PARAMETERS | READ |  [SITEPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | &nbsp; | 3 | LOCATION |  | 




