---
layout: default
title: Performance Benchmark Report
---

# Performance Benchmark Report
_Test run Fri Dec 15 2017 02:08:26 GMT+0000 (UTC)_

## Summary
Total Tests: 697<br/>
Unique RPCs: 71<br/>
RPCs Tested:

    GMV CONVERT DATE
    ORWPT16 PSCNVT
    ORWDXM MSTYLE
    ORQORB SORT
    ORB SORT METHOD
    ORWDXVB3 COLLTIM
    ORWDXVB3 SWPANEL
    ORWPT CLINRNG
    ORQQCN2 GET CONTEXT
    ORWTPO GETIMGD
    ORWTPO CSARNGD
    ORWPCE1 NONCOUNT
    ORWPCE GET EDUCATION TOPICS
    ORWDBA1 BASTATUS
    ORQ NULL LIST
    XUS GET USER INFO
    XWB GET BROKER INFO
    ORWU VERSRV
    XUS PKI GET UPN
    ORWU DT
    ORQQPX NEW REMINDERS ACTIVE
    ORWORDG IEN
    ORWCH LOADALL
    ORWSR SHOW SURG TAB
    ORWU TOOLMENU
    ORWDX DGNM
    OREVNTX1 DLGIEN
    ORWCH LDFONT
    TIU TEMPLATE GET DEFAULTS
    ORWCH LOADSIZ
    ORQPT DEFAULT LIST SOURCE
    ORWORB GETSORT
    ORWCIRN AUTORDV
    ORWCOM PTOBJ
    ORWCV1 COVERSHEET LIST
    ORWDAL32 DEF
    ORWU VALDT
    ORWDAL32 CLINUSER
    ORWDAL32 SITE PARAMS
    ORDEA DEATEXT
    ORWDX WRLST
    ORWTPD1 GETEAFL
    ORWTPD1 GETEDATS
    ORWU1 NEWLOC
    TIU TEMPLATE ACCESS LEVEL
    ORWDXC ON
    ORWPS REASON
    ORWOR PKISITE
    ORWCOM ORDEROBJ
    ORWDX2 DCREASON
    ORWDRA32 LOCTYPE
    ORWDPS32 VALROUTE
    ORWDPS32 VALQTY
    ORWU VALIDSIG
    ORWU PARAM
    ORWPCE ANYTIME
    ORWPCE ASKPCE
    TIU GET PRINT NAME
    ORWPCE ALWAYS CHECKOUT
    ORWPCE GET SET OF CODES
    ORWPCE AUTO VISIT TYPE SELECT
    ORWPCE GET EXAM TYPE
    ORWPCE GET EXCLUDED
    ORWPCE GET HEALTH FACTORS TY
    ORWPCE GET SKIN TEST TYPE
    ORWPCE GET IMMUNIZATION TYPE
    GMV DLL VERSION
    GMV GET CURRENT TIME
    GMV GET VITAL TYPE IEN
    ORWU CLINLOC
    ORIMO ISCLOC

## Pure Javascript/MongoDB RPC Emulation
Average: **5.029 msecs**<br/>
Minimum: **0.030 msecs**<br/>
Maximum: **1179.045 msecs**<br/>
Standard Deviation: **44.783 msecs**<br/>
95th Percentile: **14.900 msecs**<br/>
RPC tests in 95th Percentile:

    ORWPCE GET HEALTH FACTORS TY: 1179.045 msecs
    ORWCV1 COVERSHEET LIST: 29.354 msecs
    XUS GET USER INFO: 24.717 msecs
    ORWTPO CSARNGD: 24.237 msecs
    ORWCV1 COVERSHEET LIST: 22.777 msecs
    ORWDX WRLST: 22.398 msecs
    ORWPCE GET EXCLUDED: 21.637 msecs
    XUS GET USER INFO: 21.204 msecs
    ORWTPD1 GETEDATS: 20.823 msecs
    ORWPCE GET EXCLUDED: 20.801 msecs
    ORWTPD1 GETEDATS: 20.611 msecs
    ORWDAL32 CLINUSER: 20.335 msecs
    ORWDX WRLST: 19.774 msecs
    ORWCV1 COVERSHEET LIST: 19.411 msecs
    ORWCV1 COVERSHEET LIST: 19.370 msecs
    ORWCV1 COVERSHEET LIST: 19.201 msecs
    ORWCV1 COVERSHEET LIST: 18.419 msecs
    ORWCV1 COVERSHEET LIST: 18.214 msecs
    TIU TEMPLATE ACCESS LEVEL: 18.107 msecs
    ORWDBA1 BASTATUS: 18.039 msecs
    ORWDAL32 CLINUSER: 17.286 msecs
    XUS GET USER INFO: 17.260 msecs
    ORWDX WRLST: 17.100 msecs
    ORWTPD1 GETEDATS: 16.984 msecs
    ORQORB SORT: 16.890 msecs
    ORWTPD1 GETEDATS: 16.601 msecs
    ORWPCE GET EDUCATION TOPICS: 16.357 msecs
    ORWDX2 DCREASON: 15.910 msecs
    ORWPCE GET EDUCATION TOPICS: 15.893 msecs
    ORWTPD1 GETEDATS: 15.780 msecs
    XUS GET USER INFO: 15.535 msecs
    ORWCH LOADALL: 15.427 msecs
    XUS PKI GET UPN: 15.334 msecs
    ORWCH LOADALL: 15.107 msecs
    XUS GET USER INFO: 14.900 msecs

## Native RPC Execution via VistA RPC Broker (Socket)
Average: **28.231 msecs**<br/>
Minimum: **0.245 msecs**<br/>
Maximum: **2010.748 msecs**<br/>
Standard Deviation: **226.819 msecs**<br/>
95th Percentile: **4.704 msecs**<br/>
RPC tests in 95th Percentile:

    XWB GET BROKER INFO: 2010.748 msecs
    XWB GET BROKER INFO: 2010.592 msecs
    XWB GET BROKER INFO: 2010.564 msecs
    XWB GET BROKER INFO: 2010.561 msecs
    XWB GET BROKER INFO: 2010.555 msecs
    XWB GET BROKER INFO: 2010.554 msecs
    XWB GET BROKER INFO: 2002.916 msecs
    XWB GET BROKER INFO: 2002.906 msecs
    XWB GET BROKER INFO: 2002.891 msecs
    ORWDAL32 DEF: 82.737 msecs
    ORWPCE GET HEALTH FACTORS TY: 80.614 msecs
    ORWDAL32 DEF: 75.133 msecs
    ORWDAL32 DEF: 72.422 msecs
    ORWDAL32 DEF: 72.156 msecs
    ORWDAL32 DEF: 71.264 msecs
    ORWDAL32 DEF: 70.966 msecs
    ORWCV1 COVERSHEET LIST: 44.532 msecs
    ORWDX WRLST: 43.743 msecs
    ORWCV1 COVERSHEET LIST: 43.549 msecs
    ORWDX WRLST: 43.404 msecs
    ORWPCE GET EXAM TYPE: 43.400 msecs
    ORWCV1 COVERSHEET LIST: 43.338 msecs
    ORWCV1 COVERSHEET LIST: 43.299 msecs
    ORWPCE GET IMMUNIZATION TYPE: 43.277 msecs
    ORWPCE GET EDUCATION TOPICS: 42.867 msecs
    ORWDX WRLST: 42.850 msecs
    ORWDX WRLST: 42.643 msecs
    ORWCV1 COVERSHEET LIST: 42.171 msecs
    ORWDX WRLST: 42.005 msecs
    ORWDX WRLST: 41.937 msecs
    ORWPCE GET EDUCATION TOPICS: 41.853 msecs
    ORWCV1 COVERSHEET LIST: 41.793 msecs
    ORWDX WRLST: 41.478 msecs
    ORWCV1 COVERSHEET LIST: 41.233 msecs
    ORWOR PKISITE: 4.704 msecs

## Comparison by RPC

| # | RPC Name | Pure JS/MongoDB | Native RPC Broker |
| -- | -------- | --------------- | ----------------- |
| 1 | GMV CONVERT DATE | 4.552 msecs | **1.616 msecs** |
| 2 | GMV DLL VERSION | 1.889 msecs | **0.668 msecs** |
| 3 | GMV GET CURRENT TIME | **0.167 msecs** | 0.340 msecs |
| 4 | GMV GET VITAL TYPE IEN | 1.867 msecs | **0.302 msecs** |
| 5 | ORB SORT METHOD | 10.061 msecs | **0.281 msecs** |
| 6 | ORDEA DEATEXT | 2.108 msecs | **0.372 msecs** |
| 7 | OREVNTX1 DLGIEN | 1.442 msecs | **0.311 msecs** |
| 8 | ORIMO ISCLOC | 2.552 msecs | **0.536 msecs** |
| 9 | ORQ NULL LIST | **0.114 msecs** | 0.785 msecs |
| 10 | ORQORB SORT | 16.890 msecs | **0.547 msecs** |
| 11 | ORQPT DEFAULT LIST SOURCE | 5.355 msecs | **0.487 msecs** |
| 12 | ORQQCN2 GET CONTEXT | 10.501 msecs | **0.791 msecs** |
| 13 | ORQQPX NEW REMINDERS ACTIVE | 5.528 msecs | **0.993 msecs** |
| 14 | ORWCH LDFONT | 3.185 msecs | **0.282 msecs** |
| 15 | ORWCH LOADALL | 6.497 msecs | **0.370 msecs** |
| 16 | ORWCH LOADSIZ | 2.230 msecs | **0.363 msecs** |
| 17 | ORWCIRN AUTORDV | **0.065 msecs** | 0.401 msecs |
| 18 | ORWCOM ORDEROBJ | 2.961 msecs | **0.432 msecs** |
| 19 | ORWCOM PTOBJ | 3.373 msecs | **0.515 msecs** |
| 20 | ORWCV1 COVERSHEET LIST | **20.964 msecs** | 42.845 msecs |
| 21 | ORWDAL32 CLINUSER | 18.810 msecs | **1.063 msecs** |
| 22 | ORWDAL32 DEF | **4.114 msecs** | 74.113 msecs |
| 23 | ORWDAL32 SITE PARAMS | 4.028 msecs | **0.322 msecs** |
| 24 | ORWDBA1 BASTATUS | 6.825 msecs | **0.335 msecs** |
| 25 | ORWDPS32 VALQTY | **0.077 msecs** | 0.367 msecs |
| 26 | ORWDPS32 VALROUTE | 2.211 msecs | **2.017 msecs** |
| 27 | ORWDRA32 LOCTYPE | 2.167 msecs | **0.440 msecs** |
| 28 | ORWDX DGNM | 1.539 msecs | **0.399 msecs** |
| 29 | ORWDX WRLST | **16.145 msecs** | 42.580 msecs |
| 30 | ORWDX2 DCREASON | 10.341 msecs | **0.544 msecs** |
| 31 | ORWDXC ON | 7.602 msecs | **0.393 msecs** |
| 32 | ORWDXM MSTYLE | 12.677 msecs | **0.962 msecs** |
| 33 | ORWDXVB3 COLLTIM | 12.515 msecs | **0.779 msecs** |
| 34 | ORWDXVB3 SWPANEL | 12.055 msecs | **0.316 msecs** |
| 35 | ORWOR PKISITE | 1.470 msecs | **0.701 msecs** |
| 36 | ORWORB GETSORT | 9.658 msecs | **0.416 msecs** |
| 37 | ORWORDG IEN | 2.058 msecs | **0.413 msecs** |
| 38 | ORWPCE ALWAYS CHECKOUT | 7.497 msecs | **0.351 msecs** |
| 39 | ORWPCE ANYTIME | 6.080 msecs | **0.326 msecs** |
| 40 | ORWPCE ASKPCE | 8.389 msecs | **0.369 msecs** |
| 41 | ORWPCE AUTO VISIT TYPE SELECT | 6.847 msecs | **0.374 msecs** |
| 42 | ORWPCE GET EDUCATION TOPICS | **16.125 msecs** | 42.360 msecs |
| 43 | ORWPCE GET EXAM TYPE | **7.005 msecs** | 43.400 msecs |
| 44 | ORWPCE GET EXCLUDED | 15.132 msecs | **0.656 msecs** |
| 45 | ORWPCE GET HEALTH FACTORS TY | 1179.045 msecs | **80.614 msecs** |
| 46 | ORWPCE GET IMMUNIZATION TYPE | **12.352 msecs** | 43.277 msecs |
| 47 | ORWPCE GET SET OF CODES | **0.366 msecs** | 0.905 msecs |
| 48 | ORWPCE GET SKIN TEST TYPE | 3.354 msecs | **0.392 msecs** |
| 49 | ORWPCE1 NONCOUNT | 3.527 msecs | **2.145 msecs** |
| 50 | ORWPS REASON | 7.812 msecs | **0.444 msecs** |
| 51 | ORWPT CLINRNG | **0.135 msecs** | 0.680 msecs |
| 52 | ORWPT16 PSCNVT | **0.150 msecs** | 1.129 msecs |
| 53 | ORWSR SHOW SURG TAB | 1.796 msecs | **0.629 msecs** |
| 54 | ORWTPD1 GETEAFL | **0.057 msecs** | 0.891 msecs |
| 55 | ORWTPD1 GETEDATS | 16.759 msecs | **0.386 msecs** |
| 56 | ORWTPO CSARNGD | 24.237 msecs | **0.326 msecs** |
| 57 | ORWTPO GETIMGD | 10.238 msecs | **0.738 msecs** |
| 58 | ORWU CLINLOC | 4.243 msecs | **0.398 msecs** |
| 59 | ORWU DT | **0.377 msecs** | 0.379 msecs |
| 60 | ORWU PARAM | 10.021 msecs | **0.421 msecs** |
| 61 | ORWU TOOLMENU | 9.735 msecs | **0.431 msecs** |
| 62 | ORWU VALDT | 2.431 msecs | **0.377 msecs** |
| 63 | ORWU VALIDSIG | 2.248 msecs | **0.342 msecs** |
| 64 | ORWU VERSRV | 2.100 msecs | **1.444 msecs** |
| 65 | ORWU1 NEWLOC | 5.519 msecs | **0.623 msecs** |
| 66 | TIU GET PRINT NAME | 3.058 msecs | **2.126 msecs** |
| 67 | TIU TEMPLATE ACCESS LEVEL | 10.550 msecs | **0.788 msecs** |
| 68 | TIU TEMPLATE GET DEFAULTS | **0.066 msecs** | 0.375 msecs |
| 69 | XUS GET USER INFO | 16.321 msecs | **0.456 msecs** |
| 70 | XUS PKI GET UPN | 9.989 msecs | **0.416 msecs** |
| 71 | XWB GET BROKER INFO | **0.175 msecs** | 2008.032 msecs |
