---
layout: default
title: Performance Benchmark Report
---

# Performance Benchmark Report
_Test run Wed Dec 13 2017 02:02:17 GMT+0000 (UTC)_

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
Average: **5.384 msecs**<br/>
Minimum: **0.030 msecs**<br/>
Maximum: **1189.778 msecs**<br/>
Standard Deviation: **45.258 msecs**<br/>
95th Percentile: **14.869 msecs**<br/>
RPC tests in 95th Percentile:

    ORWTPO CSARNGD: 27.720 msecs
    ORWPCE GET EDUCATION TOPICS: 24.304 msecs
    XUS GET USER INFO: 43.068 msecs
    XUS PKI GET UPN: 15.878 msecs
    ORWCH LOADALL: 18.773 msecs
    ORWCV1 COVERSHEET LIST: 41.309 msecs
    ORWU VALDT: 19.064 msecs
    ORWDAL32 CLINUSER: 19.369 msecs
    XUS GET USER INFO: 27.017 msecs
    ORWDBA1 BASTATUS: 20.157 msecs
    ORWCV1 COVERSHEET LIST: 21.024 msecs
    ORWDX WRLST: 26.907 msecs
    ORWTPD1 GETEDATS: 23.954 msecs
    TIU TEMPLATE ACCESS LEVEL: 22.154 msecs
    ORWDBA1 BASTATUS: 17.104 msecs
    ORQPT DEFAULT LIST SOURCE: 19.749 msecs
    ORWCV1 COVERSHEET LIST: 19.516 msecs
    ORWDX WRLST: 18.460 msecs
    XUS GET USER INFO: 16.482 msecs
    ORWCV1 COVERSHEET LIST: 22.125 msecs
    ORWTPD1 GETEDATS: 16.413 msecs
    ORWDX WRLST: 15.122 msecs
    ORWDX2 DCREASON: 24.744 msecs
    ORWDX DGNM: 16.798 msecs
    ORWCV1 COVERSHEET LIST: 19.629 msecs
    ORWDX WRLST: 14.869 msecs
    ORWDXC ON: 18.367 msecs
    XUS GET USER INFO: 20.314 msecs
    ORWCV1 COVERSHEET LIST: 19.540 msecs
    ORWPCE GET HEALTH FACTORS TY: 1189.778 msecs
    ORWPCE GET EXCLUDED: 20.156 msecs
    ORWPCE GET EXCLUDED: 22.671 msecs
    ORWTPD1 GETEDATS: 28.984 msecs
    ORWDX WRLST: 25.084 msecs
    ORWCV1 COVERSHEET LIST: 17.920 msecs

## Native RPC Execution via VistA RPC Broker (Socket)
Average: **28.287 msecs**<br/>
Minimum: **0.258 msecs**<br/>
Maximum: **2010.614 msecs**<br/>
Standard Deviation: **226.818 msecs**<br/>
95th Percentile: **9.616 msecs**<br/>
RPC tests in 95th Percentile:

    ORWPCE GET EDUCATION TOPICS: 41.756 msecs
    XWB GET BROKER INFO: 2010.533 msecs
    ORWCV1 COVERSHEET LIST: 44.012 msecs
    ORWDAL32 DEF: 79.367 msecs
    ORWDAL32 DEF: 71.739 msecs
    ORWDAL32 DEF: 72.357 msecs
    XWB GET BROKER INFO: 2010.549 msecs
    XWB GET BROKER INFO: 2010.614 msecs
    ORWCV1 COVERSHEET LIST: 43.502 msecs
    ORWDX WRLST: 42.512 msecs
    XWB GET BROKER INFO: 2002.797 msecs
    XWB GET BROKER INFO: 2002.736 msecs
    ORWORDG IEN: 9.616 msecs
    ORWCV1 COVERSHEET LIST: 42.285 msecs
    ORWDX WRLST: 42.552 msecs
    XWB GET BROKER INFO: 2010.600 msecs
    ORWCV1 COVERSHEET LIST: 41.598 msecs
    ORWDX WRLST: 43.468 msecs
    XWB GET BROKER INFO: 2010.527 msecs
    ORWCV1 COVERSHEET LIST: 45.408 msecs
    ORWDX WRLST: 41.337 msecs
    XWB GET BROKER INFO: 2010.525 msecs
    XWB GET BROKER INFO: 2002.735 msecs
    ORWCV1 COVERSHEET LIST: 42.897 msecs
    ORWPCE GET EXAM TYPE: 40.947 msecs
    ORWPCE GET HEALTH FACTORS TY: 91.481 msecs
    ORWPCE GET EDUCATION TOPICS: 41.659 msecs
    ORWPCE GET IMMUNIZATION TYPE: 43.738 msecs
    ORWDAL32 DEF: 74.360 msecs
    ORWDAL32 DEF: 78.353 msecs
    ORWDAL32 DEF: 81.385 msecs
    ORWDX WRLST: 42.852 msecs
    ORWDX WRLST: 45.367 msecs
    ORWDX WRLST: 45.369 msecs
    ORWCV1 COVERSHEET LIST: 44.108 msecs

## Comparison by RPC
| RPC Name | Pure JS/MongoDB | Native RPC Broker |
| -------- | --------------- | ----------------- |
| GMV CONVERT DATE | 4.396 msecs | **0.845 msecs** |
| ORWPT16 PSCNVT | **0.142 msecs** | 0.603 msecs |
| ORWDXM MSTYLE | 12.500 msecs | **0.605 msecs** |
| ORQORB SORT | 14.714 msecs | **0.604 msecs** |
| ORB SORT METHOD | 9.486 msecs | **0.333 msecs** |
| ORWDXVB3 COLLTIM | 14.831 msecs | **0.596 msecs** |
| ORWDXVB3 SWPANEL | 13.442 msecs | **0.326 msecs** |
| ORWPT CLINRNG | **0.123 msecs** | 0.559 msecs |
| ORQQCN2 GET CONTEXT | 10.311 msecs | **0.595 msecs** |
| ORWTPO GETIMGD | 10.393 msecs | **0.589 msecs** |
| ORWTPO CSARNGD | 27.720 msecs | **0.341 msecs** |
| ORWPCE1 NONCOUNT | 3.370 msecs | **0.735 msecs** |
| ORWPCE GET EDUCATION TOPICS | **18.851 msecs** | 41.707 msecs |
| ORWDBA1 BASTATUS | 7.691 msecs | **0.327 msecs** |
| ORQ NULL LIST | **0.105 msecs** | 0.546 msecs |
| XUS GET USER INFO | 19.587 msecs | **0.410 msecs** |
| XWB GET BROKER INFO | **0.075 msecs** | 2007.957 msecs |
| ORWU VERSRV | 2.323 msecs | **1.378 msecs** |
| XUS PKI GET UPN | 10.511 msecs | **0.381 msecs** |
| ORWU DT | **0.351 msecs** | 0.363 msecs |
| ORQQPX NEW REMINDERS ACTIVE | 6.637 msecs | **0.707 msecs** |
| ORWORDG IEN | 2.145 msecs | **0.583 msecs** |
| ORWCH LOADALL | 6.062 msecs | **1.090 msecs** |
| ORWSR SHOW SURG TAB | 2.419 msecs | **0.516 msecs** |
| ORWU TOOLMENU | 9.569 msecs | **0.456 msecs** |
| ORWDX DGNM | 2.095 msecs | **0.491 msecs** |
| OREVNTX1 DLGIEN | 1.671 msecs | **0.410 msecs** |
| ORWCH LDFONT | 2.965 msecs | **0.306 msecs** |
| TIU TEMPLATE GET DEFAULTS | **0.055 msecs** | 0.354 msecs |
| ORWCH LOADSIZ | 2.549 msecs | **0.310 msecs** |
| ORQPT DEFAULT LIST SOURCE | 8.283 msecs | **0.421 msecs** |
| ORWORB GETSORT | 9.170 msecs | **0.398 msecs** |
| ORWCIRN AUTORDV | **0.065 msecs** | 0.389 msecs |
| ORWCOM PTOBJ | 3.519 msecs | **0.523 msecs** |
| ORWCV1 COVERSHEET LIST | **23.009 msecs** | 43.401 msecs |
| ORWDAL32 DEF | **3.556 msecs** | 76.260 msecs |
| ORWU VALDT | 10.049 msecs | **0.366 msecs** |
| ORWDAL32 CLINUSER | 12.828 msecs | **1.010 msecs** |
| ORWDAL32 SITE PARAMS | 2.724 msecs | **0.327 msecs** |
| ORDEA DEATEXT | 2.084 msecs | **0.372 msecs** |
| ORWDX WRLST | **18.039 msecs** | 43.351 msecs |
| ORWTPD1 GETEAFL | **0.063 msecs** | 0.847 msecs |
| ORWTPD1 GETEDATS | 17.736 msecs | **0.860 msecs** |
| ORWU1 NEWLOC | 5.844 msecs | **0.507 msecs** |
| TIU TEMPLATE ACCESS LEVEL | 11.072 msecs | **0.656 msecs** |
| ORWDXC ON | 9.556 msecs | **0.386 msecs** |
| ORWPS REASON | 7.842 msecs | **0.491 msecs** |
| ORWOR PKISITE | 1.990 msecs | **0.383 msecs** |
| ORWCOM ORDEROBJ | 3.186 msecs | **0.474 msecs** |
| ORWDX2 DCREASON | 12.733 msecs | **0.509 msecs** |
| ORWDRA32 LOCTYPE | 2.418 msecs | **0.413 msecs** |
| ORWDPS32 VALROUTE | 2.536 msecs | **1.916 msecs** |
| ORWDPS32 VALQTY | **0.111 msecs** | 0.370 msecs |
| ORWU VALIDSIG | 2.692 msecs | **0.338 msecs** |
| ORWU PARAM | 11.558 msecs | **0.559 msecs** |
| ORWPCE ANYTIME | 11.522 msecs | **0.338 msecs** |
| ORWPCE ASKPCE | 9.257 msecs | **0.447 msecs** |
| TIU GET PRINT NAME | 2.957 msecs | **1.147 msecs** |
| ORWPCE ALWAYS CHECKOUT | 8.433 msecs | **0.358 msecs** |
| ORWPCE GET SET OF CODES | **0.359 msecs** | 0.782 msecs |
| ORWPCE AUTO VISIT TYPE SELECT | 7.621 msecs | **0.374 msecs** |
| ORWPCE GET EXAM TYPE | **7.447 msecs** | 40.947 msecs |
| ORWPCE GET EXCLUDED | 15.007 msecs | **0.566 msecs** |
| ORWPCE GET HEALTH FACTORS TY | 1189.778 msecs | **91.481 msecs** |
| ORWPCE GET SKIN TEST TYPE | 3.103 msecs | **0.421 msecs** |
| ORWPCE GET IMMUNIZATION TYPE | **13.242 msecs** | 43.738 msecs |
| GMV DLL VERSION | 1.832 msecs | **0.590 msecs** |
| GMV GET CURRENT TIME | **0.177 msecs** | 0.408 msecs |
| GMV GET VITAL TYPE IEN | 1.742 msecs | **0.418 msecs** |
| ORWU CLINLOC | 4.445 msecs | **0.424 msecs** |
| ORIMO ISCLOC | 2.328 msecs | **0.571 msecs** |
