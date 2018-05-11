---
layout: default
title: VICS B1.1 Demo Performance
---

> Test run Mon Jan 29 2018 09:46:33 GMT+0000 (UTC)

# Comparison by RPC 

| \# | RPC Name | Pure JS/MongoDB | Native RPC Broker |
| --- | --- | --- | --- |
| 1 | GMV CONVERT DATE | 6.128 msecs | 3.113 msecs |
| 2 | GMV DLL VERSION | 1.639 msecs | 0.527 msecs |
| 3 | GMV GET CURRENT TIME | 0.206 msecs | 0.462 msecs |
| 4 | GMV GET VITAL TYPE IEN | 1.682 msecs | 0.432 msecs |
| 5 | GMV MANAGER | 2.143 msecs | 32.398 msecs |
| 6 | GMV PARAMETER | 0.854 msecs | 0.671 msecs |
| 7 | GMV USER | 44.495 msecs | 0.647 msecs |
| 8 | GMV VITALS/CAT/QUAL | 7.138 msecs | 42.794 msecs |
| 9 | ORB SORT METHOD | 6.650 msecs | 0.333 msecs |
| 10 | ORDEA DEATEXT | 3.185 msecs | 0.529 msecs |
| 11 | OREVNTX1 DLGIEN | 3.207 msecs | 0.370 msecs |
| 12 | ORIMO ISCLOC | 1.634 msecs | 0.634 msecs |
| 13 | ORQ NULL LIST | 0.140 msecs | 1.451 msecs |
| 14 | ORQORB SORT | 8.436 msecs | 0.764 msecs |
| 15 | ORQPT DEFAULT LIST SOURCE | 6.676 msecs | 0.582 msecs |
| 16 | ORQQCN2 GET CONTEXT | 8.658 msecs | 1.128 msecs |
| 17 | ORQQPL INIT USER | 17.841 msecs | 1.068 msecs |
| 18 | ORQQPL USER PROB CATS | 4.628 msecs | 0.768 msecs |
| 19 | ORQQPL4 LEX | 183.978 msecs | 844.075 msecs |
| 20 | ORQQPX NEW REMINDERS ACTIVE | 4.296 msecs | 1.165 msecs |
| 21 | ORWCH LDFONT | 5.008 msecs | 0.353 msecs |
| 22 | ORWCH LOADALL | 9.987 msecs | 42.629 msecs |
| 23 | ORWCH LOADSIZ | 3.485 msecs | 0.510 msecs |
| 24 | ORWCH SAVEALL | 181.317 msecs | 11.940 msecs |
| 25 | ORWCH SAVESIZ | 62.927 msecs | 9.236 msecs |
| 26 | ORWCH SAVFONT | 7.343 msecs | 0.991 msecs |
| 27 | ORWCIRN AUTORDV | 0.069 msecs | 0.468 msecs |
| 28 | ORWCOM ORDEROBJ | 3.105 msecs | 0.541 msecs |
| 29 | ORWCOM PTOBJ | 3.576 msecs | 0.595 msecs |
| 30 | ORWCV1 COVERSHEET LIST | 15.589 msecs | 42.819 msecs |
| 31 | ORWDAL32 ALLERGY MATCH | 31.802 msecs | 67.876 msecs |
| 32 | ORWDAL32 CLINUSER | 10.879 msecs | 1.378 msecs |
| 33 | ORWDAL32 DEF | 2.811 msecs | 78.781 msecs |
| 34 | ORWDAL32 SITE PARAMS | 2.817 msecs | 0.357 msecs |
| 35 | ORWDAL32 SYMPTOMS | 15.259 msecs | 193.218 msecs |
| 36 | ORWDBA1 BASTATUS | 5.772 msecs | 0.424 msecs |
| 37 | ORWDBA3 HINTS | 4.390 msecs | 43.464 msecs |
| 38 | ORWDPS32 VALQTY | 0.084 msecs | 0.479 msecs |
| 39 | ORWDPS32 VALROUTE | 2.315 msecs | 4.102 msecs |
| 40 | ORWDRA32 LOCTYPE | 1.927 msecs | 0.559 msecs |
| 41 | ORWDX DGNM | 3.681 msecs | 0.469 msecs |
| 42 | ORWDX WRLST | 12.950 msecs | 42.957 msecs |
| 43 | ORWDX2 DCREASON | 8.267 msecs | 0.694 msecs |
| 44 | ORWDXC ON | 6.588 msecs | 0.485 msecs |
| 45 | ORWDXM FORMID | 2.879 msecs | 0.346 msecs |
| 46 | ORWDXM MSTYLE | 5.397 msecs | 1.148 msecs |
| 47 | ORWDXVB3 COLLTIM | 8.656 msecs | 1.149 msecs |
| 48 | ORWDXVB3 SWPANEL | 9.009 msecs | 0.370 msecs |
| 49 | ORWLEX GETFREQ | 2.353 msecs | 1.502 msecs |
| 50 | ORWOR PKISITE | 2.306 msecs | 0.586 msecs |
| 51 | ORWORB GETSORT | 8.616 msecs | 0.513 msecs |
| 52 | ORWORB SETSORT | 11.014 msecs | 1.330 msecs |
| 53 | ORWORDG IEN | 2.420 msecs | 0.410 msecs |
| 54 | ORWPCE ACTIVE CODE | 2.211 msecs | 1.056 msecs |
| 55 | ORWPCE ACTIVE PROV | 2.728 msecs | 1.391 msecs |
| 56 | ORWPCE ALWAYS CHECKOUT | 4.103 msecs | 0.411 msecs |
| 57 | ORWPCE ANYTIME | 3.225 msecs | 0.315 msecs |
| 58 | ORWPCE ASKPCE | 7.269 msecs | 0.436 msecs |
| 59 | ORWPCE AUTO VISIT TYPE SELECT | 3.310 msecs | 0.653 msecs |
| 60 | ORWPCE GET EDUCATION TOPICS | 3.534 msecs | 42.953 msecs |
| 61 | ORWPCE GET EXAM TYPE | 2.826 msecs | 43.000 msecs |
| 62 | ORWPCE GET EXCLUDED | 5.625 msecs | 0.885 msecs |
| 63 | ORWPCE GET HEALTH FACTORS TY | 126.163 msecs | 81.563 msecs |
| 64 | ORWPCE GET IMMUNIZATION TYPE | 2.904 msecs | 44.603 msecs |
| 65 | ORWPCE GET SET OF CODES | 0.372 msecs | 1.289 msecs |
| 66 | ORWPCE GET SKIN TEST TYPE | 4.000 msecs | 0.485 msecs |
| 67 | ORWPCE GETSVC | 5.628 msecs | 0.878 msecs |
| 68 | ORWPCE I10IMPDT | 3.921 msecs | 1.827 msecs |
| 69 | ORWPCE MHCLINIC | 5.635 msecs | 2.412 msecs |
| 70 | ORWPCE1 NONCOUNT | 3.447 msecs | 1.114 msecs |
| 71 | ORWPS REASON | 5.487 msecs | 0.530 msecs |
| 72 | ORWPT CLINRNG | 0.136 msecs | 1.211 msecs |
| 73 | ORWPT16 PSCNVT | 0.225 msecs | 2.878 msecs |
| 74 | ORWRP GET DEFAULT PRINTER | 14.222 msecs | 0.731 msecs |
| 75 | ORWSR SHOW SURG TAB | 8.571 msecs | 0.850 msecs |
| 76 | ORWTPD1 GETEAFL | 0.080 msecs | 0.561 msecs |
| 77 | ORWTPD1 GETEDATS | 13.738 msecs | 0.481 msecs |
| 78 | ORWTPO CSARNGD | 19.251 msecs | 0.367 msecs |
| 79 | ORWTPO GETIMGD | 5.455 msecs | 1.098 msecs |
| 80 | ORWU CLINLOC | 1.718 msecs | 0.469 msecs |
| 81 | ORWU DT | 0.410 msecs | 0.452 msecs |
| 82 | ORWU EXTNAME | 1.958 msecs | 0.381 msecs |
| 83 | ORWU HASKEY | 2.774 msecs | 0.368 msecs |
| 84 | ORWU NPHASKEY | 2.433 msecs | 0.419 msecs |
| 85 | ORWU OVERDL | 6.788 msecs | 0.378 msecs |
| 86 | ORWU PARAM | 8.494 msecs | 0.415 msecs |
| 87 | ORWU PATCH | 15.894 msecs | 0.639 msecs |
| 88 | ORWU TOOLMENU | 6.250 msecs | 0.509 msecs |
| 89 | ORWU USERINFO | 78.703 msecs | 0.879 msecs |
| 90 | ORWU VALDT | 9.788 msecs | 0.443 msecs |
| 91 | ORWU VALIDSIG | 2.065 msecs | 0.500 msecs |
| 92 | ORWU VERSRV | 3.292 msecs | 1.787 msecs |
| 93 | ORWU1 NEWLOC | 3.831 msecs | 0.663 msecs |
| 94 | TIU GET PRINT NAME | 2.669 msecs | 2.913 msecs |
| 95 | TIU IS USER A PROVIDER? | 11.510 msecs | 1.175 msecs |
| 96 | TIU TEMPLATE ACCESS LEVEL | 15.401 msecs | 0.932 msecs |
| 97 | TIU TEMPLATE GET DEFAULTS | 0.075 msecs | 0.696 msecs |
| 98 | TIU TEMPLATE SET DEFAULTS | 5.595 msecs | 0.950 msecs |
| 99 | XUS DIVISION GET | 0.052 msecs | 2004.243 msecs |
| 100 | XUS DIVISION SET | 0.375 msecs | 2010.574 msecs |
| 101 | XUS GET USER INFO | 10.685 msecs | 0.415 msecs |
| 102 | XUS PKI GET UPN | 2.927 msecs | 0.580 msecs |
| 103 | XWB GET BROKER INFO | 0.363 msecs | 2008.795 msecs

