---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Clinical (418)

Category | Number
--- | ---
CHANGE | 81 (19.4%)
READ | 287 (68.7%)
UTILITY | 50 (12%)



These RPCs access at least 29 parameters and 53 files.

\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
1. | [DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK BS5 XREF ARRAY) | READ | DFN | 27 | FILE, XREF | [2](http://localhost:9000/schema/2) | 
2. | [DG CHK BS5 XREF Y/N](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK BS5 XREF Y/N) | READ | DFN | 12 | FILE, IS-A, UNSTRUCTURED READ, XREF | [2](http://localhost:9000/schema/2) | 
3. | [DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK PAT/DIV MEANS TEST) | READ | DFN, DUZ2 | 13 | FILE | [40.8](http://localhost:9000/schema/40_8) | 
4. | [DG SENSITIVE RECORD BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/DG SENSITIVE RECORD BULLETIN) | CHANGE | DFN, DGOPT, ACTION | 7 | BULLETIN, FILE | [38.1](http://localhost:9000/schema/38_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5. | [GMRC LIST CONSULT REQUESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/GMRC LIST CONSULT REQUESTS) | READ | DFN | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6. | [GMV ADD VM](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV ADD VM) | CHANGE | GMVDATA | 3 | RPCLOCKER |  | 
7. | [GMV ALLERGY](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV ALLERGY) | READ | DFN | 8 | - |  | 
8. | [GMV CLOSEST READING](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV CLOSEST READING) | READ | GMVDFN, GMVDT, GMVT, GMVFLAG | 41 | FILE | [120.5](http://localhost:9000/schema/120_5) | 
9. | [GMV EXTRACT REC](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV EXTRACT REC) | READ | GMRVDATA | 11 | FILE | [120.5](http://localhost:9000/schema/120_5), [120.51](http://localhost:9000/schema/120_51) | 
10. | [GMV LATEST VM](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV LATEST VM) | READ | GMRDFN | 2 | - |  | 
11. | [GMV MARK ERROR](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV MARK ERROR) | CHANGE | GMVDATA | 8 | FILE, RPCLOCKER | [120.5](http://localhost:9000/schema/120_5) | 
12. | [GMV V/M ALLDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV V/M ALLDATA) | READ | GMVDATA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13. | [OR GET COMBAT VET](http://vistadataproject.info/artifacts/vistaRPC documentation/OR GET COMBAT VET) | READ | DFN | 19 | RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14. | [ORALWORD ALLWORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORALWORD ALLWORD) | READ | DFN, ORX, ORTYPE, PROV | 56 | FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15. | [ORB DELETE ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB DELETE ALERT) | CHANGE | XQAID, ORKILL | 8 | ALERT, FILE | [8992.1](http://localhost:9000/schema/8992_1) | 
16. | [ORB FOLLOW-UP ARRAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP ARRAY) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
17. | [ORB FOLLOW-UP STRING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP STRING) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
18. | [ORB FOLLOW-UP TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP TYPE) | READ | ORXQAID | 5 | DFN TO K/META, FILE | [100.9](http://localhost:9000/schema/100_9) | 
19. | [ORB FORWARD ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FORWARD ALERT) | CHANGE | ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT | 4 | ALERT |  | 
20. | [ORB RENEW ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB RENEW ALERT) | CHANGE | XQAID | 4 | ALERT, FILE | [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21. | [ORCDLR2 CHECK ALL LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCDLR2 CHECK ALL LC TO WC) | READ | ORL, ORDERS | 16 | FILE | [100](http://localhost:9000/schema/100) | 
22. | [ORCDLR2 CHECK ONE LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCDLR2 CHECK ONE LC TO WC) | READ | ORL, ORIFN, DATE, TYPE, SCH, DUR | 17 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | [ORCHECK DELMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK DELMONO) | UTILITY | &nbsp; | 1 | REENTRANCY |  | 
24. | [ORCHECK GETMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETMONO) | READ | ORMONO | 5 | REENTRANCY |  | 
25. | [ORCHECK GETMONOL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETMONOL) | READ | &nbsp; | 4 | REENTRANCY |  | 
26. | [ORCHECK GETXTRA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETXTRA) | READ | ORGL, ORRULE | 3 | REENTRANCY |  | 
27. | [ORCHECK ISMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK ISMONO) | READ | &nbsp; | 3 | IS-A, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28. | [ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCNOTE GET TOTAL) | READ | DFN | 6 | FILE | [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29. | [ORDEA HASHINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA HASHINFO) | READ | ORDFN, ORPROV | 18 | - |  | 
30. | [ORDEA ORDHINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA ORDHINFO) | READ | ORIFN, HASH, OHINFO | 2 | - |  | 
31. | [ORDEA PINLKCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PINLKCHK) | UTILITY | &nbsp; | 5 | LOCK |  | 
32. | [ORDEA PINLKSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PINLKSET) | UTILITY | &nbsp; | 3 | LOCK |  | 
33. | [ORDEA PNDHLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PNDHLD) | READ | ORID | 3 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
34. | [ORDEA SIGINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA SIGINFO) | READ | ORDFN, ORPROV | 18 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | [ORECS01 VSITID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 VSITID) | READ | VSTSTR | 5 | FILE, IEN-LOOKUP | [9000010](http://localhost:9000/schema/9000010) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | [OREVNTX LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX LIST) | READ | DFN | 12 | FILE | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5), [100.6](http://localhost:9000/schema/100_6) | 
37. | [OREVNTX PAT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX PAT) | READ | DFN | 8 | FILE | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
38. | [OREVNTX1 CHGEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CHGEVT) | CHANGE | NEWEVT, ORIDS | 4 | - |  | 
39. | [OREVNTX1 COMP](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 COMP) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
40. | [OREVNTX1 CURSPE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CURSPE) | READ | PTIFN | 3 | - |  | 
41. | [OREVNTX1 DELPTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DELPTEVT) | CHANGE | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
42. | [OREVNTX1 DIV](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DIV) | READ | PTEVT | 2 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
43. | [OREVNTX1 DONE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DONE) | CHANGE | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
44. | [OREVNTX1 EMPTY](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EMPTY) | READ | PTEVT | 2 | FILE, IS-A | [100.2](http://localhost:9000/schema/100_2) | 
45. | [OREVNTX1 EVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EVT) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
46. | [OREVNTX1 EXISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EXISTS) | READ | DFN, EVT | 4 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
47. | [OREVNTX1 GETSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GETSTS) | READ | ORDID | 3 | FILE | [100](http://localhost:9000/schema/100) | 
48. | [OREVNTX1 GTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GTEVT) | READ | PTEVT | 14 | FILE | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
49. | [OREVNTX1 HAVEPRT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 HAVEPRT) | READ | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
50. | [OREVNTX1 ISDCOD](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISDCOD) | READ | ORIFN | 13 | FILE, IS-A, PARAMETER | [100](http://localhost:9000/schema/100) | OREVNT EXCLUDE DGRP
51. | [OREVNTX1 ISHDORD](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISHDORD) | READ | ORID | 11 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
52. | [OREVNTX1 ISPASS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISPASS) | READ | PTEVTID, EVTTYPE | 4 | FILE, IS-A | [100.5](http://localhost:9000/schema/100_5) | 
53. | [OREVNTX1 LOC](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 LOC) | READ | PTEVT | 3 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
54. | [OREVNTX1 MATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 MATCH) | READ | DFN, EVT | 7 | FILE | [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
55. | [OREVNTX1 NAME](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 NAME) | READ | PTEVT | 2 | FILE | [100.5](http://localhost:9000/schema/100_5), [100.2](http://localhost:9000/schema/100_2) | 
56. | [OREVNTX1 ODPTEVID](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ODPTEVID) | READ | ORID | 2 | FILE | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2) | 
57. | [OREVNTX1 PUTEVNT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PUTEVNT) | CHANGE | DFN, EVT, ORIFN | 1 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | [ORIMO IMOLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO IMOLOC) | READ | ORLOC, ORDFN | 14 | FILE | [44](http://localhost:9000/schema/44) | 
59. | [ORIMO IMOOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO IMOOD) | READ | ORDERID | 8 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | [ORK TRIGGER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORK TRIGGER) | READ | ORKDFN, ORKA, ORKMODE, OROIL, ORDODSG | 96 | FILE, LOGIC, PARAMETER | [100.98](http://localhost:9000/schema/100_98), [42](http://localhost:9000/schema/42) | ORK DEBUG ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61. | [ORPRF GETFLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF GETFLG) | READ | PTDFN, FLAGID | 5 | REENTRANCY |  | 
62. | [ORPRF HASFLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF HASFLG) | READ | PTDFN | 11 | REENTRANCY |  | 
63. | [ORPRF TRIGGER POPUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF TRIGGER POPUP) | READ | PTDFN | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | [ORQOR DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQOR DETAIL) | READ | ORID, DFN | 6 | JLV, UNSTRUCTURED READ |  | 
65. | [ORQOR LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQOR LIST) | READ | PATIENT, GROUP, FLAG, ORSDT, OREDT, ORXREF, GETKID | 15 | FILE | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | [ORQPT ATTENDING/PRIMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT ATTENDING/PRIMARY) | READ | DFN | 5 | - |  | 
67. | [ORQPT CLINIC PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT CLINIC PATIENTS) | READ | CLIN, ORBDATE, OREDATE, MAXAPPTS, APPTBGN, APPTEND | 42 | PARAMETER, QUERY |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
68. | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT PATIENT LIST) | READ | &nbsp; | 30 | FILE, PARAMETER | [100.24](http://localhost:9000/schema/100_24) | *VARIABLE*, ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
69. | [ORQPT MAKE RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT MAKE RPL) | UTILITY | ORTL | 12 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
70. | [ORQPT PATIENT TEAM PROVIDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PATIENT TEAM PROVIDERS) | READ | PT | 8 | FILE, QUERY, XREF | [100.21](http://localhost:9000/schema/100_21) | 
71. | [ORQPT PROVIDER PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PROVIDER PATIENTS) | READ | PROV | 5 | FILE, QUERY, XREF | [2](http://localhost:9000/schema/2) | 
72. | [ORQPT READ RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT READ RPL) | READ | ORJ, ORFROM, ORDIR | 17 | REENTRANCY |  | 
73. | [ORQPT SPECIALTY PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT SPECIALTY PATIENTS) | READ | SPEC | 5 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
74. | [ORQPT TEAM PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT TEAM PATIENTS) | READ | TEAM, TMPFLAG | 17 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
75. | [ORQPT WARD PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARD PATIENTS) | READ | WARD | 16 | FILE, LOCATION | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
76. | [ORQPT WARDRMBED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARDRMBED) | READ | DFN | 3 | FILE | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | [ORQQAL DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL DETAIL) | READ | DFN, ALLR, ID | 14 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
78. | [ORQQAL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL LIST) | READ | ORPT | 7 | RPCLOCKER |  | 
79. | [ORQQAL LIST REPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL LIST REPORT) | READ | ORPT | 17 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80. | [ORQQCN ADDCMT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ADDCMT) | CHANGE | ORIEN, ORCOM, ORALRT, ORALTO, ORDATE | 7 | ALERT, FILE | [123](http://localhost:9000/schema/123) | 
81. | [ORQQCN ADMIN COMPLETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ADMIN COMPLETE) | CHANGE | ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE | 1 | - |  | 
82. | [ORQQCN ASSIGNABLE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ASSIGNABLE MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
83. | [ORQQCN ATTACH MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ATTACH MED RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP, ORALTO | 5 | FILE | [123](http://localhost:9000/schema/123) | 
84. | [ORQQCN CANEDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN CANEDIT) | READ | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
85. | [ORQQCN DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DETAIL) | READ | CONSULT | 5 | FILE, JLV, UNSTRUCTURED READ | [123](http://localhost:9000/schema/123) | 
86. | [ORQQCN DISCONTINUE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DISCONTINUE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
87. | [ORQQCN FIND CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN FIND CONSULT) | READ | GMRCIEN | 9 | FILE | [123](http://localhost:9000/schema/123) | 
88. | [ORQQCN FORWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN FORWARD) | CHANGE | GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM | 2 | FILE | [123](http://localhost:9000/schema/123), [123.5](http://localhost:9000/schema/123_5) | 
89. | [ORQQCN GET CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET CONSULT) | READ | ORIEN, SHOWADD | 26 | FILE | [123](http://localhost:9000/schema/123), [200](http://localhost:9000/schema/200) | 
90. | [ORQQCN GET MED RESULT DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET MED RESULT DETAILS) | READ | GMRCRES | 3 | FILE, UNSTRUCTURED READ | [691.5](http://localhost:9000/schema/691_5) | 
91. | [ORQQCN GET ORDER NUMBER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET ORDER NUMBER) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [100](http://localhost:9000/schema/100) | 
92. | [ORQQCN LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN LIST) | READ | ORPT, ORSDT, OREDT, ORSERV, ORSTATUS | 13 | FILE, QUERY | [123](http://localhost:9000/schema/123) | 
93. | [ORQQCN LOAD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN LOAD FOR EDIT) | READ | GMRCO | 6 | FILE | [123](http://localhost:9000/schema/123) | 
94. | [ORQQCN MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123) | 
95. | [ORQQCN RECEIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN RECEIVE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
96. | [ORQQCN REMOVABLE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN REMOVABLE MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
97. | [ORQQCN REMOVE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN REMOVE MED RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP | 2 | FILE | [123](http://localhost:9000/schema/123) | 
98. | [ORQQCN RESUBMIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN RESUBMIT) | CHANGE | GMRCO, OREDITED | 5 | FILE | [123](http://localhost:9000/schema/123) | 
99. | [ORQQCN SET ACT MENUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SET ACT MENUS) | READ | GMRCO | 6 | CPRS CONFIG, FILE | [123](http://localhost:9000/schema/123) | 
100. | [ORQQCN SHOW SF513](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SHOW SF513) | CHANGE | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
101. | [ORQQCN SIGFIND](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SIGFIND) | READ | ORIEN, ORFL, ORCOM, ORALRT, ORALTO, ORDATE | 1 | FILE | [123](http://localhost:9000/schema/123) | 
102. | [ORQQCN UNRESOLVED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN UNRESOLVED) | READ | ORDFN | 2 | IS-A, PARAMETER |  | ORWOR SHOW CONSULTS
103. | [ORQQCN URGENCIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN URGENCIES) | READ | GMRCO | 13 | FILE | [101](http://localhost:9000/schema/101), [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
104. | [ORQQCN2 GET PREREQUISITE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 GET PREREQUISITE) | READ | ORSVC, ORDFN | 4 | - |  | 
105. | [ORQQCN2 SCHEDULE CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 SCHEDULE CONSULT) | CHANGE | ORIEN, ORNP, ORDATE, ORALRT, ORALTO, ORCOM | 7 | FILE | [123](http://localhost:9000/schema/123) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
106. | [ORQQLR DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR DETAIL) | READ | DFN, ORDER | 16 | FILE, UNSTRUCTURED READ | [100](http://localhost:9000/schema/100) | 
107. | [ORQQLR SEARCH RANGE INPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR SEARCH RANGE INPT) | READ | ORPT | 10 | FILE, PARAMETER | [42](http://localhost:9000/schema/42) | ORQQLR SEARCH RANGE INPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
108. | [ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL ADD SAVE) | CHANGE | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH | 12 | RPCLOCKER |  | 
109. | [ORQQPL AUDIT HIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL AUDIT HIST) | READ | GMPIFN | 21 | FILE | [125.8](http://localhost:9000/schema/125_8) | 
110. | [ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CHECK DUP) | READ | DFN, TERM, TEXT | 3 | - |  | 
111. | [ORQQPL DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL DELETE) | CHANGE | GMPIFN, GMPROV, GMPVAMC, REASON | 11 | RPCLOCKER |  | 
112. | [ORQQPL DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL DETAIL) | READ | DFN, PROBIEN, ID | 53 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
113. | [ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL EDIT LOAD) | READ | DA | 6 | - |  | 
114. | [ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL EDIT SAVE) | CHANGE | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH | 14 | RPCLOCKER |  | 
115. | [ORQQPL INACTIVATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INACTIVATE) | CHANGE | GMPIFN | 16 | - |  | 
116. | [ORQQPL INIT PT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INIT PT) | READ | DFN | 15 | - |  | 
117. | [ORQQPL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL LIST) | READ | DFN, STATUS | 21 | - |  | 
118. | [ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROB COMMENTS) | READ | PIFN | 8 | FILE, JLV | [9000011](http://localhost:9000/schema/9000011) | 
119. | [ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM LIST) | READ | DFN, CONTEXT, ORIDT | 13 | RPCLOCKER |  | 
120. | [ORQQPL REPLACE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL REPLACE) | CHANGE | DA | 10 | FILE, RPCLOCKER | [9000011](http://localhost:9000/schema/9000011) | 
121. | [ORQQPL UPDATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL UPDATE) | CHANGE | UPDARRAY | 8 | RPCLOCKER |  | 
122. | [ORQQPL VERIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL VERIFY) | CHANGE | GMPIFN | 16 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
123. | [ORQQPP LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPP LIST) | READ | ORPT | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
124. | [ORQQPS DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPS DETAIL) | READ | ORPT, ORMED | 53 | - |  | 
125. | [ORQQPS LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPS LIST) | READ | ORPT, ORSTRTDT, ORSTOPDT | 48 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
126. | [ORQQPX IMMUN LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX IMMUN LIST) | READ | ORPT | 14 | FILE | [9000010.11](http://localhost:9000/schema/9000010_11) | 
127. | [ORQQPX REMINDER DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REMINDER DETAIL) | UTILITY | ORPT, ORIEN | 7 | FILE, JLV, eHMP | [811.9](http://localhost:9000/schema/811_9) | 
128. | [ORQQPX REMINDERS LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REMINDERS LIST) | UTILITY | ORPT | 25 | FILE, PARAMETER, eHMP | [42](http://localhost:9000/schema/42), [811.9](http://localhost:9000/schema/811_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
129. | [ORQQPXRM GEC DIALOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC DIALOG) | UTILITY | IEN, DFN, VISIT, NOTEIEN | 1 | COMPUTATION, FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9), [801.5](http://localhost:9000/schema/801_5) | 
130. | [ORQQPXRM GEC FINISHED?](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC FINISHED?) | UTILITY | DFN, FIN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
131. | [ORQQPXRM GEC STATUS PROMPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC STATUS PROMPT) | UTILITY | DFN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
132. | [ORQQPXRM MENTAL HEALTH RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH RESULTS) | READ | RESULT, ORES | 1 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
133. | [ORQQPXRM MENTAL HEALTH SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH SAVE) | CHANGE | ORES | &nbsp; | - |  | 
134. | [ORQQPXRM MHDLL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MHDLL) | READ | DFN, INPUTS | 8 | - |  | 
135. | [ORQQPXRM MHV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MHV) | READ | DFN, NAME, ANS | 12 | - |  | 
136. | [ORQQPXRM REMINDER DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER DETAIL) | UTILITY | ORPT, ORIEN | &nbsp; | FILE, UNSTRUCTURED READ | [811.9](http://localhost:9000/schema/811_9) | 
137. | [ORQQPXRM REMINDER DIALOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER DIALOG) | READ | ORREM, DFN | 5 | FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9) | 
138. | [ORQQPXRM REMINDER EVALUATION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER EVALUATION) | UTILITY | ORPT, ORLIST | &nbsp; | - |  | 
139. | [ORQQPXRM REMINDERS APPLICABLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDERS APPLICABLE) | UTILITY | ORPT, ORLOC | &nbsp; | - |  | 
140. | [ORQQPXRM REMINDERS UNEVALUATED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDERS UNEVALUATED) | UTILITY | ORPT, ORLOC | &nbsp; | - |  | 
141. | [ORQQPXRM WOMEN HEALTH SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM WOMEN HEALTH SAVE) | CHANGE | ORRESULT | 1 | FILE | [790.1](http://localhost:9000/schema/790_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
142. | [ORQQVI NOTEVIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI NOTEVIT) | READ | DFN, NOTEIEN | 4 | - |  | 
143. | [ORQQVI VITALS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI VITALS) | READ | DFN, F1, F2 | 18 | RPCLOCKER |  | 
144. | [ORQQVI VITALS FOR DATE RANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI VITALS FOR DATE RANGE) | READ | DFN, ORSDT, OREDT | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
145. | [ORQQVI1 DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI1 DETAIL) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
146. | [ORQQVI1 GRID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI1 GRID) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
147. | [ORQQVI2 VITALS VAL & STORE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VAL & STORE) | CHANGE | &nbsp; | &nbsp; | EXTERNAL I/F | [120.5](http://localhost:9000/schema/120_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
148. | [ORQQVS DETAIL NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS DETAIL NOTES) | READ | ORPT, ORVIEN | 19 | QUERY |  | 
149. | [ORQQVS DETAIL SUMMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS DETAIL SUMMARY) | READ | ORPT, ORVIEN | 19 | - |  | 
150. | [ORQQVS VISITS/APPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS VISITS/APPTS) | READ | PT, SDT, EDT, DUMMY | 19 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | [ORQQXQA PATIENT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXQA PATIENT) | READ | ORPT | 27 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
152. | [ORQQXQA USER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXQA USER) | READ | &nbsp; | 33 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
153. | [ORRHCQ QRYITR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORRHCQ QRYITR) | UTILITY | ORRITR | 3 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
154. | [ORVAA VAA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORVAA VAA) | READ | DFN | 14 | BUSINESS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
155. | [ORWCS LIST OF CONSULT REPORTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCS LIST OF CONSULT REPORTS) | READ | DFN, SERV, BEGDT, ENDDT, STATUS | 16 | - |  | 
156. | [ORWCS REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCS REPORT TEXT) | READ | DFN, ORID | 2 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
157. | [ORWCV DTLVST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV DTLVST) | READ | DFN, IEN, APPTINFO | 13 | - |  | 
158. | [ORWCV LAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV LAB) | READ | DFN | 3 | - |  | 
159. | [ORWCV POLL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV POLL) | UTILITY | DFN, IP, HWND | 11 | REENTRANCY |  | 
160. | [ORWCV START](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV START) | UTILITY | DFN, IP, HWND, LOC, NODO, NEWREM | 23 | FILE, PARAMETER, REENTRANCY | [101.24](http://localhost:9000/schema/101_24) | ORWCV1 COVERSHEET LIST, ORWOR COVER RETRIEVAL, ORWOR COVER RETRIEVAL NEW
161. | [ORWCV STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV STOP) | UTILITY | DFN, IP, HWND | 5 | REENTRANCY |  | 
162. | [ORWCV VST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV VST) | READ | DFN, BEG, END, SKIP | 5 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
163. | [ORWD FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD FORMID) | READ | ORIFN | 4 | DFN TO K/META, FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [8989.52](http://localhost:9000/schema/8989_52) | 
164. | [ORWD GET4EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD GET4EDIT) | READ | ORIFN | 14 | DFN TO K/META |  | 
165. | [ORWD SIGN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SIGN) | CHANGE | DFN, ORNP, LOC, ORWSIGN | 14 | XUSEC |  | 
166. | [ORWD VALIDACT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD VALIDACT) | READ | ORIFN, ACTION | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
167. | [ORWD1 COMLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 COMLOC) | UTILITY | ORDERS | 8 | FILE, LOCATION | [100](http://localhost:9000/schema/100) | 
168. | [ORWD1 SIG4ANY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 SIG4ANY) | UTILITY | ORDERS | 4 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
169. | [ORWD1 SIG4ONE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 SIG4ONE) | READ | ANORDER | 2 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
170. | [ORWD2 DEVINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD2 DEVINFO) | READ | LOC, NATR, ORDERS | 39 | FILE, PARAMETER | [100](http://localhost:9000/schema/100), [100.02](http://localhost:9000/schema/100_02), [9.4](http://localhost:9000/schema/9_4) | ORPF PRINT CHART COPY WHEN, ORPF PROMPT FOR CHART COPY, ORPF PROMPT FOR LABELS, ORPF PROMPT FOR REQUISITIONS, ORPF PROMPT FOR WORK COPY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
171. | [ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 LOAD FOR EDIT) | READ | ORALIEN | 5 | - |  | 
172. | [ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SAVE ALLERGY) | CHANGE | ORALIEN, ORDFN, OREDITED | 7 | BULLETIN, PROTOCOL, RPCLOCKER |  | 
173. | [ORWDAL32 SEND BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SEND BULLETIN) | UTILITY | ORDUZ, ORDFN, ORTEXT, ORCMTS | 4 | BULLETIN |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
174. | [ORWDBA1 GETORDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 GETORDX) | READ | ORIEN | 16 | FILE | [100](http://localhost:9000/schema/100) | 
175. | [ORWDBA1 ORPKGTYP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 ORPKGTYP) | UTILITY | ORLST | 5 | FILE, FMUTILITY, HARD CODED | [9.4](http://localhost:9000/schema/9_4) | 
176. | [ORWDBA1 RCVORCI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 RCVORCI) | CHANGE | DIAG | 21 | - |  | 
177. | [ORWDBA1 SCLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 SCLST) | CHANGE | DFN, ORLST | 2 | FILE, PARAMETER | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
178. | [ORWDBA2 GETDUDC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 GETDUDC) | UTILITY | ORCIEN, ORPTIEN | 21 | FILE, FMUTILITY | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
179. | [ORWDBA4 GETTFCI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA4 GETTFCI) | READ | ORIEN | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
180. | [ORWDCN32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 DEF) | READ | WHY | 11 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
181. | [ORWDFH ADDLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ADDLATE) | CHANGE | ORVP, ORNP, ORL, MEAL, TIME, BAG | 15 | FILE | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
182. | [ORWDFH CURISO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH CURISO) | READ | ORVP | 2 | - |  | 
183. | [ORWDFH CURRENT MEALS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH CURRENT MEALS) | READ | ORDFN, ORMEAL | 7 | - |  | 
184. | [ORWDFH ISOLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ISOLIST) | READ | &nbsp; | 3 | FILE | [119.4](http://localhost:9000/schema/119_4) | 
185. | [ORWDFH PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH PARAM) | READ | ORVP, ORLOC | 23 | FILE | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
186. | [ORWDFH TXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH TXT) | READ | DFN | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
187. | [ORWDPS1 DOWSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DOWSCH) | READ | DFN, LOCIEN | 14 | - |  | 
188. | [ORWDPS1 SCHALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 SCHALL) | READ | DFN, LOCIEN | 6 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
189. | [ORWDPS2 ADMIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 ADMIN) | READ | DFN, SCH, OI, LOC, ADMIN | 3 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
190. | [ORWDPS2 CHKGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 CHKGRP) | READ | ORIFN | 17 | COMPUTED, FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
191. | [ORWDPS2 CHKPI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 CHKPI) | READ | ODIFN | 7 | FILE | [100](http://localhost:9000/schema/100) | 
192. | [ORWDPS2 MAXREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 MAXREF) | READ | PAT, DRG, SUP, OI, OUT | 8 | - |  | 
193. | [ORWDPS2 QTY2DAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 QTY2DAY) | READ | QTY, UPD, SCH, DUR, PAT, DRG | 13 | COMPUTED |  | 
194. | [ORWDPS2 REQST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 REQST) | READ | DFN, SCH, OI, LOC, TXT | 5 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
195. | [ORWDPS32 AUTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 AUTH) | READ | PRV, ORDLOG | 12 | FILE, PARAMETER | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | OR OREMAS MED ORDERS
196. | [ORWDPS32 SCSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 SCSTS) | READ | ORVP, ORDRUG | 4 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
197. | [ORWDPS33 COMPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 COMPLOC) | READ | ORID, LOC | 2 | FILE, IS-A, LOCATION | [100](http://localhost:9000/schema/100) | 
198. | [ORWDPS33 IVDOSFRM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 IVDOSFRM) | READ | ORDERIDS, ALLIV | 12 | FILE | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
199. | [ORWDPS4 CPINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 CPINFO) | CHANGE | ORINFO | 9 | - |  | 
200. | [ORWDPS4 CPLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 CPLST) | READ | PTIFN, ORIFNS | 12 | FILE | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | 
201. | [ORWDPS4 IPOD4OP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 IPOD4OP) | READ | ORID | 12 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [9.4](http://localhost:9000/schema/9_4) | 
202. | [ORWDPS4 ISUDIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 ISUDIV) | READ | ORIFN | 5 | FILE, IS-A | [100](http://localhost:9000/schema/100), [101.43](http://localhost:9000/schema/101_43) | 
203. | [ORWDPS4 UPDTDG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 UPDTDG) | CHANGE | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
204. | [ORWDPS5 ISVTP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS5 ISVTP) | READ | ODIEN | 11 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.02](http://localhost:9000/schema/100_02) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
205. | [ORWDRA32 ISOLATN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 ISOLATN) | READ | DFN | 3 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
206. | [ORWDX CHANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX CHANGE) | CHANGE | ORCLST, DFN, ISIMO | 45 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
207. | [ORWDX DLGID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGID) | READ | ORIFN | 2 | - |  | 
208. | [ORWDX DLGQUIK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGQUIK) | READ | QO | 1 | DFN TO K/META |  | 
209. | [ORWDX FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX FORMID) | READ | ORIFN | 4 | DFN TO K/META |  | 
210. | [ORWDX LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOCK) | UTILITY | DFN | 1 | LOCK |  | 
211. | [ORWDX LOCK ORDER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOCK ORDER) | UTILITY | ORIFN | 1 | LOCK |  | 
212. | [ORWDX SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SAVE) | CHANGE | ORVP, ORNP, ORL, DLG, ORDG, ORIT, ORIFN, ORDIALOG, ORDEA, ORAPPT, ORSRC, OREVTDF | 56 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [9.4](http://localhost:9000/schema/9_4) | 
213. | [ORWDX SEND](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SEND) | CHANGE | DFN, ORNP, ORL, ES, ORWREC | &nbsp; | - |  | 
214. | [ORWDX SENDED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SENDED) | CHANGE | ORIENS, TS, LOC | 26 | FILE | [100](http://localhost:9000/schema/100) | 
215. | [ORWDX UNLKOTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLKOTH) | UTILITY | ORIFN | 2 | LOCK |  | 
216. | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLOCK) | UTILITY | DFN | 1 | LOCK |  | 
217. | [ORWDX UNLOCK ORDER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLOCK ORDER) | UTILITY | ORIFN | 1 | LOCK |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
218. | [ORWDX1 DCORIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 DCORIG) | CHANGE | ORIEN | 1 | - |  | 
219. | [ORWDX1 DCREN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 DCREN) | CHANGE | ORYARR | 18 | FILE | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
220. | [ORWDX1 ORDMATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 ORDMATCH) | UTILITY | DFN, ORYARR | 12 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
221. | [ORWDX1 PATWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 PATWARD) | READ | DFN | 5 | FILE | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
222. | [ORWDX1 STCHANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 STCHANGE) | UTILITY | DFN, ORYARR | 7 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
223. | [ORWDXA ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA ALERT) | CHANGE | ORID, ORDUZ | 3 | - |  | 
224. | [ORWDXA COMPLETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA COMPLETE) | CHANGE | ORID, ESCODE | 3 | - |  | 
225. | [ORWDXA DC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA DC) | CHANGE | ORID, ORNP, ORL, REASON, DCORIG, ISNEWORD | 59 | FILE | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
226. | [ORWDXA DCREQIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA DCREQIEN) | READ | &nbsp; | 1 | FILE | [100.03](http://localhost:9000/schema/100_03) | 
227. | [ORWDXA FLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA FLAG) | CHANGE | ORIFN, OREASON, ORNP | 9 | FILE | [100](http://localhost:9000/schema/100) | 
228. | [ORWDXA FLAGTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA FLAGTXT) | READ | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [200](http://localhost:9000/schema/200) | 
229. | [ORWDXA HOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA HOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
230. | [ORWDXA OFCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA OFCPLX) | READ | ORID, PRTORDER | 20 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
231. | [ORWDXA UNFLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA UNFLAG) | CHANGE | ORIFN, OREASON | 7 | FILE | [100](http://localhost:9000/schema/100) | 
232. | [ORWDXA UNHOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA UNHOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
233. | [ORWDXA VALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA VALID) | UTILITY | ORID, ACTION, ORNP, ORWNAT | 38 | FILE, IS-A | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
234. | [ORWDXA VERIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA VERIFY) | CHANGE | ORID, ESCODE, ORVER | 7 | - |  | 
235. | [ORWDXA WCGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA WCGET) | READ | ORID | 2 | FILE | [100](http://localhost:9000/schema/100) | 
236. | [ORWDXA WCPUT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA WCPUT) | CHANGE | ORID, WCLST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
237. | [ORWDXC ACCEPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC ACCEPT) | UTILITY | DFN, FID, STRT, ORL, OIL, ORIFN, ORREN | 26 | PARAMETER, REENTRANCY |  | 
238. | [ORWDXC DELAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DELAY) | UTILITY | DFN, FID, STRT, ORL, OIL | 13 | PARAMETER, REENTRANCY |  | 
239. | [ORWDXC DELORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DELORD) | CHANGE | ORIFN | 11 | REENTRANCY |  | 
240. | [ORWDXC DISPLAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DISPLAY) | UTILITY | DFN, FID | 4 | PARAMETER, REENTRANCY |  | 
241. | [ORWDXC SAVECHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC SAVECHK) | UTILITY | ORVP, RSN, LST | 4 | REENTRANCY |  | 
242. | [ORWDXC SESSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC SESSION) | UTILITY | ORVP, ORLST | 12 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
243. | [ORWDXM AUTOACK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM AUTOACK) | CHANGE | ORVP, ORNP, ORL, ORIT | 11 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
244. | [ORWDXM1 BLDQRSP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM1 BLDQRSP) | UTILITY | ORIT, FLDS, ISIMO, ENCLOC | 151 | FILE | [100](http://localhost:9000/schema/100), [100.5](http://localhost:9000/schema/100_5), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44), [9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
245. | [ORWDXM2 CLRRCL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM2 CLRRCL) | UTILITY | &nbsp; | 2 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
246. | [ORWDXR CANRN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR CANRN) | READ | ORID | 20 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
247. | [ORWDXR GETPKG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR GETPKG) | READ | IFN | 5 | - |  | 
248. | [ORWDXR GTORITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR GTORITM) | READ | ORIFN | 2 | - |  | 
249. | [ORWDXR ISCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISCPLX) | READ | ORID | 14 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100) | 
250. | [ORWDXR ISNOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISNOW) | READ | ORID | 7 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100) | 
251. | [ORWDXR ISREL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISREL) | READ | ORIFN | 2 | IS-A |  | 
252. | [ORWDXR ORCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ORCPLX) | READ | ORID, ORACT | 18 | FILE | [100](http://localhost:9000/schema/100) | 
253. | [ORWDXR RENEW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR RENEW) | CHANGE | ORIFN, ORVP, ORNP, ORL, FLDS, CPLX, ORAPPT | 56 | FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
254. | [ORWDXR RNWFLDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR RNWFLDS) | READ | ORIFN | 32 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
255. | [ORWDXR01 CANCHG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 CANCHG) | READ | ORIFN, TXTOD | 16 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
256. | [ORWDXR01 OXDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 OXDATA) | READ | ORIEN | 32 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
257. | [ORWDXR01 SAVCHG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 SAVCHG) | CHANGE | ORID, PARM1, PARM2, TXTOD | 16 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
258. | [ORWDXVB GETALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB GETALL) | READ | DFN, LOC | 35 | FILE, PARAMETER | [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43) | OR VBECS MODIFIERS, OR VBECS REASON FOR REQUEST, OR VBECS REASON SORT ALPHA
259. | [ORWDXVB RAW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB RAW) | READ | DFN, ORX | 13 | - |  | 
260. | [ORWDXVB RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB RESULTS) | READ | DFN, ORX | 24 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
261. | [ORWGRPC ALLITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ALLITEMS) | READ | DFN | 2 | - |  | 
262. | [ORWGRPC DATEITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DATEITEM) | READ | OLDEST, NEWEST, FNUM, DFN | 2 | - |  | 
263. | [ORWGRPC DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DETAIL) | READ | DFN, DATE1, DATE2, VAL, COMP | 2 | - |  | 
264. | [ORWGRPC DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DETAILS) | READ | DFN, DATE1, DATE2, TYPE, COMP | 2 | UNSTRUCTURED READ |  | 
265. | [ORWGRPC FASTDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTDATA) | READ | DFN | 1 | - |  | 
266. | [ORWGRPC FASTITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTITEM) | READ | DFN | 1 | - |  | 
267. | [ORWGRPC FASTLABS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTLABS) | READ | DFN | 1 | - |  | 
268. | [ORWGRPC FASTTASK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTTASK) | UTILITY | DFN, OLDDFN | 1 | REENTRANCY, TASK |  | 
269. | [ORWGRPC ITEMDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ITEMDATA) | READ | ITEM, START, DFN | 2 | - |  | 
270. | [ORWGRPC ITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ITEMS) | READ | DFN, TYPE | 2 | - |  | 
271. | [ORWGRPC LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC LOOKUP) | READ | INFO, FROM, DIR | 1 | - |  | 
272. | [ORWGRPC TYPES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TYPES) | READ | DFN, SUB | 3 | PXRMINDX, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
273. | [ORWLR CUMULATIVE REPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR CUMULATIVE REPORT) | UTILITY | DFN, DAYS, ALPHA, OMEGA | 17 | - |  | 
274. | [ORWLR CUMULATIVE SECTION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR CUMULATIVE SECTION) | READ | DFN, RPTID, DTRANGE, SECTION | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
275. | [ORWLRR CHART](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR CHART) | READ | DFN, DATE1, DATE2, SPEC, TEST | 1 | - |  | 
276. | [ORWLRR GRID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR GRID) | READ | DFN, DATE1, DATE2, SPEC, TESTS | 1 | - |  | 
277. | [ORWLRR INTERIM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIM) | READ | DFN, DATE1, DATE2 | 4 | ORWLRR INTERIM |  | 
278. | [ORWLRR INTERIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIMG) | READ | DFN, DATE1, DIR, FORMAT | 1 | - |  | 
279. | [ORWLRR INTERIMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIMS) | READ | DFN, DATE1, DATE2, ORTESTS | 1 | - |  | 
280. | [ORWLRR MICRO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR MICRO) | READ | DFN, DATE1, DATE2 | 4 | - |  | 
281. | [ORWLRR NEWOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR NEWOLD) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
282. | [ORWMC PATIENT PROCEDURES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWMC PATIENT PROCEDURES) | READ | DFN | 1 | - |  | 
283. | [ORWMC PATIENT PROCEDURES1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWMC PATIENT PROCEDURES1) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
284. | [ORWNSS VALSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS VALSCH) | READ | ORID | 16 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
285. | [ORWOR ACTION TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR ACTION TEXT) | READ | ORIFN | 6 | FILE | [100](http://localhost:9000/schema/100) | 
286. | [ORWOR RESULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR RESULT) | READ | DFN, ORID, ID | 5 | - |  | 
287. | [ORWOR RESULT HISTORY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR RESULT HISTORY) | READ | DFN, ORID, ID | 6 | - |  | 
288. | [ORWOR SHEETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR SHEETS) | READ | ORVP | 14 | FILE | [100](http://localhost:9000/schema/100), [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
289. | [ORWOR UNSIGN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR UNSIGN) | READ | ORVP, HAVE | 36 | FILE, PARAMETER | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [103](http://localhost:9000/schema/103), [9.4](http://localhost:9000/schema/9_4) | OR UNSIGNED ORDERS ON EXIT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
290. | [ORWOR1 CHKDIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 CHKDIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
291. | [ORWOR1 GETDSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDSCH) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
292. | [ORWOR1 GETDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDSIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
293. | [ORWOR1 GETDTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDTEXT) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
294. | [ORWOR1 SETDTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 SETDTEXT) | CHANGE | ORDER, ORDEA, ORSIGNER | 10 | - |  | 
295. | [ORWOR1 SIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 SIG) | CHANGE | ID, X1, X2, X3, X4, ORX5, X6, X7 | 28 | FILE, REENTRANCY | [101.52](http://localhost:9000/schema/101_52) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
296. | [ORWORB AUTOUNFLAG ORDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB AUTOUNFLAG ORDERS) | CHANGE | DFN, XQAID | &nbsp; | PARAMETER |  | ORPF AUTO UNFLAG
297. | [ORWORB FASTUSER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB FASTUSER) | READ | &nbsp; | 59 | FILE | [2](http://localhost:9000/schema/2) | 
298. | [ORWORB GET TIU ALERT INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GET TIU ALERT INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
299. | [ORWORB GETDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GETDATA) | READ | XQAID | 9 | FILE | [8992](http://localhost:9000/schema/8992) | 
300. | [ORWORB KILL EXPIR MED ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL EXPIR MED ALERT) | CHANGE | ORDFN | 10 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
301. | [ORWORB KILL EXPIR OI ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL EXPIR OI ALERT) | CHANGE | ORDFN, ORNIFN | 8 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
302. | [ORWORB KILL UNSIG ORDERS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNSIG ORDERS ALERT) | CHANGE | ORVP | 2 | - |  | 
303. | [ORWORB KILL UNVER MEDS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNVER MEDS ALERT) | CHANGE | ORDFN | 14 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
304. | [ORWORB KILL UNVER ORDERS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNVER ORDERS ALERT) | CHANGE | ORDFN | 14 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
305. | [ORWORB TEXT FOLLOWUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB TEXT FOLLOWUP) | READ | DFN, NOTIF, XQADATA | 1 | - |  | 
306. | [ORWORB UNSIG ORDERS FOLLOWUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB UNSIG ORDERS FOLLOWUP) | CHANGE | XQAID | 17 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
307. | [ORWORR AGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR AGET) | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT, ORRECIP | 17 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
308. | [ORWORR GET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GET) | READ | DFN, FILTER, GROUPS | 10 | QUERY |  | 
309. | [ORWORR GET4LST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GET4LST) | UTILITY | TXTVW, ORYD, IFNLST | 1 | FMUTILITY |  | 
310. | [ORWORR GETBYIFN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GETBYIFN) | READ | IFN | 6 | FILE | [100](http://localhost:9000/schema/100) | 
311. | [ORWORR GETTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GETTXT) | READ | IFN | 2 | - |  | 
312. | [ORWORR RGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR RGET) | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT | 3 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
313. | [ORWPCE ACTPROB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTPROB) | READ | DFN, ORDATE | 19 | - |  | 
314. | [ORWPCE CPTREQD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CPTREQD) | READ | IEN | 1 | IS-A |  | 
315. | [ORWPCE CXNOSHOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CXNOSHOW) | READ | ORDOCIEN | 4 | IS-A |  | 
316. | [ORWPCE DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE DELETE) | CHANGE | VSTR, DFN | 12 | - |  | 
317. | [ORWPCE GET VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET VISIT) | READ | IEN, DFN, VSITSTR | 3 | IEN-LOOKUP |  | 
318. | [ORWPCE HASVISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HASVISIT) | READ | IEN, DFN, ORLOC, ORDTE | 5 | FILE, IS-A | [8925](http://localhost:9000/schema/8925) | 
319. | [ORWPCE NOTEVSTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE NOTEVSTR) | READ | IEN | 4 | FILE | [8925](http://localhost:9000/schema/8925) | 
320. | [ORWPCE PCE4NOTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PCE4NOTE) | READ | IEN, DFN, VSITSTR | 172 | FILE | [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
321. | [ORWPCE SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SAVE) | CHANGE | PCELIST, NOTEIEN, ORLOC | 11 | - |  | 
322. | [ORWPCE SCDIS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SCDIS) | READ | DFN | 9 | FILE | [2](http://localhost:9000/schema/2), [31](http://localhost:9000/schema/31), [391](http://localhost:9000/schema/391) | 
323. | [ORWPCE SCSEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SCSEL) | READ | DFN, ATM, LOC, VST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
324. | [ORWPS ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS ACTIVE) | READ | DFN, USER, VIEW, UPDATE | 54 | FILE, PARAMETER | [100](http://localhost:9000/schema/100), [44](http://localhost:9000/schema/44) | OR MEDS TAB SORT, ORCH CONTEXT MEDS
325. | [ORWPS COVER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS COVER) | READ | DFN, FILTER | 12 | QUERY |  | 
326. | [ORWPS DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS DETAIL) | READ | DFN, ID | 5 | JLV |  | 
327. | [ORWPS MEDHIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS MEDHIST) | READ | DFN, ORIFN | 21 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
328. | [ORWPS1 REFILL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 REFILL) | CHANGE | ORDERID, REFLOC, ORVP, ORNP, ORL | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
329. | [ORWPT ADMITLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ADMITLST) | READ | DFN | 10 | FILE, JLV | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
330. | [ORWPT APPTLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT APPTLST) | READ | DFN | 9 | LOCATION |  | 
331. | [ORWPT BYWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT BYWARD) | READ | WARD | 7 | FILE, LOCATION | [2](http://localhost:9000/schema/2) | 
332. | [ORWPT CWAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT CWAD) | READ | DFN | 1 | - |  | 
333. | [ORWPT DIEDON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DIEDON) | READ | DFN | 1 | FILE, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
334. | [ORWPT DISCHARGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DISCHARGE) | READ | DFN, ADMITDT | 5 | - |  | 
335. | [ORWPT ENCTITL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ENCTITL) | READ | DFN, LOC, PROV | 3 | FILE | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
336. | [ORWPT FULLSSN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT FULLSSN) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
337. | [ORWPT FULLSSN RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT FULLSSN RPL) | READ | ID | 13 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
338. | [ORWPT ID INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ID INFO) | READ | DFN | 3 | FILE, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
339. | [ORWPT INPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT INPLOC) | READ | DFN | 7 | FILE, RPCLOCKER | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
340. | [ORWPT LAST5](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LAST5) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
341. | [ORWPT LAST5 RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LAST5 RPL) | READ | ID | 10 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [200](http://localhost:9000/schema/200) | 
342. | [ORWPT LIST ALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LIST ALL) | READ | FROM, DIR | 8 | FILE, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
343. | [ORWPT PTINQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT PTINQ) | READ | DFN | 3 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
344. | [ORWPT SELCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SELCHK) | CHANGE | DFN | 1 | - |  | 
345. | [ORWPT SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SELECT) | CHANGE | DFN | 22 | BULLETIN, FILE, JLV, REENTRANCY | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
346. | [ORWPT SHARE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SHARE) | UTILITY | IP, HWND, DFN | 3 | REENTRANCY |  | 
347. | [ORWPT TOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT TOP) | READ | &nbsp; | 3 | FILE, REENTRANCY | [2](http://localhost:9000/schema/2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
348. | [ORWPT1 PCDETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT1 PCDETAIL) | READ | PATIENT | 50 | FILE | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [404.51](http://localhost:9000/schema/404_51) | 
349. | [ORWPT1 PRCARE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT1 PRCARE) | READ | PATIENT | 13 | FILE, JLV, RPCLOCKER | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
350. | [ORWPT16 ADMITLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 ADMITLST) | READ | DFN | 9 | FILE | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
351. | [ORWPT16 APPTLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 APPTLST) | READ | DFN | 6 | - |  | 
352. | [ORWPT16 DEMOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 DEMOG) | READ | DFN | 4 | FILE | [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
353. | [ORWPT16 GETVSIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 GETVSIT) | READ | DFN, LOC, ADATE | 6 | - |  | 
354. | [ORWPT16 ID INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 ID INFO) | READ | DFN | 9 | FILE | [2](http://localhost:9000/schema/2) | 
355. | [ORWPT16 LIST ALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 LIST ALL) | READ | DIR, FROM | 16 | FILE | [2](http://localhost:9000/schema/2) | 
356. | [ORWPT16 LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 LOOKUP) | READ | FROM | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
357. | [ORWRA IMAGING EXAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA IMAGING EXAMS) | READ | DFN | 1 | - |  | 
358. | [ORWRA IMAGING EXAMS1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA IMAGING EXAMS1) | READ | DFN | 1 | - |  | 
359. | [ORWRA REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA REPORT TEXT) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 8 | - |  | 
360. | [ORWRA REPORT TEXT1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA REPORT TEXT1) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
361. | [ORWRP REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP REPORT TEXT) | READ | DFN, RPTID, HSTYPE, DTRANGE, EXAMID, ALPHA, OMEGA | 35 | FILE, JLV, UNSTRUCTURED READ | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
362. | [ORWRP1 LISTNUTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP1 LISTNUTR) | READ | DFN | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
363. | [ORWRP2 HS REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS REPORT TEXT) | READ | ORCOMPS, ORDFN | 7 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
364. | [ORWRP4 HDR MODIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP4 HDR MODIFY) | UTILITY | HANDLE, ID | 13 | FILE | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
365. | [ORWSR CASELIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR CASELIST) | READ | ORDFN | 8 | - |  | 
366. | [ORWSR IS NON-OR PROCEDURE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR IS NON-OR PROCEDURE) | READ | ORCASE | 2 | IS-A |  | 
367. | [ORWSR LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR LIST) | READ | ORDFN, ORBDT, OREDT, ORCTXT, ORMAX, ORFHIE | 21 | - |  | 
368. | [ORWSR ONECASE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR ONECASE) | READ | ORTIUDA | 5 | - |  | 
369. | [ORWSR RPTLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR RPTLIST) | READ | ORDFN | 25 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
370. | [ORWTIU CHKTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU CHKTXT) | READ | ORTIUDA | 2 | - |  | 
371. | [ORWTIU GET LISTBOX ITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET LISTBOX ITEM) | READ | ORTIUDA | 2 | - |  | 
372. | [ORWTIU GET SAVED CP FIELDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET SAVED CP FIELDS) | READ | ORTIUDA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
373. | [ORWTPT ATEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPT ATEAMS) | READ | &nbsp; | 7 | FILE | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
374. | [ORWU2 COSIGNER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU2 COSIGNER) | READ | ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA | 10 | FILE | [200](http://localhost:9000/schema/200), [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
375. | [PXRM REMINDER DIALOG (TIU)](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDER DIALOG (TIU)) | UTILITY | ORDLG, DFN | 3 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
376. | [TIU CREATE ADDENDUM RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CREATE ADDENDUM RECORD) | CHANGE | TIUDA, TIUX, SUPPRESS | 1 | - |  | 
377. | [TIU CREATE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CREATE RECORD) | CHANGE | DFN, TITLE, VDT, VLOC, VSIT, TIUX, VSTR, SUPPRESS, NOASF | 38 | FILE | [44](http://localhost:9000/schema/44), [8925](http://localhost:9000/schema/8925) | 
378. | [TIU DELETE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DELETE RECORD) | CHANGE | TIUDA, TIURSN, OVRRIDE | 10 | FILE | [8925](http://localhost:9000/schema/8925) | 
379. | [TIU DETAILED DISPLAY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DETAILED DISPLAY) | READ | TIUDA, REASSIGN | 4 | - |  | 
380. | [TIU DOCUMENTS BY CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DOCUMENTS BY CONTEXT) | READ | CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND | 30 | FILE, QUERY | [8925](http://localhost:9000/schema/8925) | 
381. | [TIU FIELD LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
382. | [TIU FIELD UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
383. | [TIU GET ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET ADDITIONAL SIGNERS) | READ | TIUDA | 14 | FILE | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
384. | [TIU GET ALERT INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET ALERT INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
385. | [TIU GET DOCUMENT PARAMETERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT PARAMETERS) | READ | TIUDA, TIUTYP | 4 | FILE | [8925](http://localhost:9000/schema/8925) | 
386. | [TIU GET DOCUMENT STATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT STATUS) | READ | TIUIEN | 5 | FILE | [8925](http://localhost:9000/schema/8925), [8925.6](http://localhost:9000/schema/8925_6) | 
387. | [TIU GET DOCUMENT TITLE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT TITLE) | READ | TIUDA | 1 | FILE | [8925](http://localhost:9000/schema/8925) | 
388. | [TIU GET DOCUMENTS FOR REQUEST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENTS FOR REQUEST) | READ | OVP, SEQUENCE | 18 | FILE | [8925](http://localhost:9000/schema/8925) | 
389. | [TIU GET LINKED PRF NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET LINKED PRF NOTES) | READ | PTDFN, TIUTTL, REVERSE | 27 | FILE | [8925](http://localhost:9000/schema/8925) | 
390. | [TIU GET PRF ACTIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRF ACTIONS) | READ | TIUTTL, DFN | 15 | - |  | 
391. | [TIU GET RECORD TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET RECORD TEXT) | READ | TIUDA, ACTION | 21 | FILE | [8925](http://localhost:9000/schema/8925) | 
392. | [TIU GET REQUEST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET REQUEST) | READ | TIUDA | 10 | FILE | [8925](http://localhost:9000/schema/8925) | 
393. | [TIU HAS AUTHOR SIGNED?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU HAS AUTHOR SIGNED?) | READ | TIUDA, TIUUSR | 5 | FILE, IS-A | [8925](http://localhost:9000/schema/8925) | 
394. | [TIU ID ATTACH ENTRY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID ATTACH ENTRY) | CHANGE | TIUDA, TIUDAD | 5 | - |  | 
395. | [TIU ID CAN RECEIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID CAN RECEIVE) | READ | TIUDA | 1 | IS-A |  | 
396. | [TIU ID DETACH ENTRY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID DETACH ENTRY) | CHANGE | TIUDA | 8 | FILE | [8925](http://localhost:9000/schema/8925) | 
397. | [TIU JUSTIFY DELETE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU JUSTIFY DELETE?) | READ | TIUDA | 2 | FILE | [8925](http://localhost:9000/schema/8925) | 
398. | [TIU LINK TO FLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LINK TO FLAG) | CHANGE | TIUIEN, ASSGNDA, ACTIEN, DFN | 5 | FILE | [8925](http://localhost:9000/schema/8925) | 
399. | [TIU LOAD RECORD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOAD RECORD FOR EDIT) | READ | TIUDA, DR | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
400. | [TIU LOCK RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOCK RECORD) | UTILITY | TIUDA | 2 | LOCK |  | 
401. | [TIU NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES) | READ | DFN, EARLY, LATE, PERSON, SEQUENCE | 4 | QUERY |  | 
402. | [TIU NOTES 16 BIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES 16 BIT) | READ | DFN, EARLY, LATE, ROOTFLAG | 2 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
403. | [TIU NOTES BY VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES BY VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
404. | [TIU ONE VISIT NOTE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ONE VISIT NOTE?) | READ | DOCTYP, DFN, VISIT | 20 | FILE, IS-A | [8925](http://localhost:9000/schema/8925), [8925.95](http://localhost:9000/schema/8925_95), [9000010](http://localhost:9000/schema/9000010) | 
405. | [TIU SET ADMINISTRATIVE CLOSURE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SET ADMINISTRATIVE CLOSURE) | CHANGE | TIUDA, MODE, PERSON | 36 | FILE | [8925](http://localhost:9000/schema/8925) | 
406. | [TIU SET DOCUMENT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SET DOCUMENT TEXT) | UTILITY | TIUDA, TIUX, SUPPRESS | 28 | FILE, REENTRANCY | [8925](http://localhost:9000/schema/8925) | 
407. | [TIU SIGN RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SIGN RECORD) | CHANGE | TIUDA, TIUX | 1 | - |  | 
408. | [TIU SUMMARIES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SUMMARIES) | READ | DFN, EARLY, LATE | 4 | QUERY |  | 
409. | [TIU SUMMARIES BY VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SUMMARIES BY VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
410. | [TIU TEMPLATE LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
411. | [TIU TEMPLATE UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
412. | [TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UNLOCK RECORD) | UTILITY | TIUDA | 2 | LOCK |  | 
413. | [TIU UPDATE ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UPDATE ADDITIONAL SIGNERS) | CHANGE | TIUDA, TIULIST | 18 | FILE | [8925.7](http://localhost:9000/schema/8925_7) | 
414. | [TIU UPDATE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UPDATE RECORD) | CHANGE | TIUDA, TIUX, SUPPRESS | 43 | FILE | [8925](http://localhost:9000/schema/8925) | 
415. | [TIU WAS THIS SAVED?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU WAS THIS SAVED?) | CHANGE | TIUDA | 11 | FILE | [8925](http://localhost:9000/schema/8925) | 
416. | [TIU WHICH SIGNATURE ACTION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU WHICH SIGNATURE ACTION) | READ | TIUDA | 7 | FILE | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
417. | [VAFCTFU CONVERT ICN TO DFN](http://vistadataproject.info/artifacts/vistaRPC documentation/VAFCTFU CONVERT ICN TO DFN) | READ | ICN | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
418. | [YS GAF API](http://vistadataproject.info/artifacts/vistaRPC documentation/YS GAF API) | READ | YS | 7 | - |  | 




<small>Generated on 2017-01-13</small>