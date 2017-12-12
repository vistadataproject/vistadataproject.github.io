---
layout: default
title: Performance Benchmark Report
---

# Performance Benchmark Report
_Test run Tue Dec 12 2017 09:46:26 GMT+0000 (UTC)_

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
Average: **5.606 msecs**<br/>
Minimum: **0.028 msecs**<br/>
Maximum: **1177.441 msecs**<br/>
Standard Deviation: **44.845 msecs**<br/>
95th Percentile: **15.848 msecs**<br/>
RPC tests in 95th Percentile:

RPC Name | Elapsed Time
-------- | ------------
ORQORB SORT | 17.120 msecs
ORWTPO CSARNGD | 27.754 msecs
ORWPCE GET EDUCATION TOPICS | 32.281 msecs
XUS GET USER INFO | 35.560 msecs
XUS PKI GET UPN | 19.383 msecs
ORWCH LOADALL | 17.496 msecs
ORWCV1 COVERSHEET LIST | 53.612 msecs
ORWDAL32 CLINUSER | 15.848 msecs
XUS GET USER INFO | 26.694 msecs
ORWDBA1 BASTATUS | 16.872 msecs
ORWORB GETSORT | 20.654 msecs
ORWCV1 COVERSHEET LIST | 26.458 msecs
ORWDX WRLST | 30.844 msecs
ORWTPD1 GETEDATS | 24.706 msecs
TIU TEMPLATE ACCESS LEVEL | 39.896 msecs
ORWPS REASON | 16.346 msecs
ORWCOM ORDEROBJ | 31.090 msecs
ORWCV1 COVERSHEET LIST | 18.487 msecs
ORWDX WRLST | 18.334 msecs
XUS GET USER INFO | 15.895 msecs
ORWCV1 COVERSHEET LIST | 22.652 msecs
ORWDX WRLST | 16.001 msecs
ORWDX2 DCREASON | 18.645 msecs
XUS PKI GET UPN | 18.204 msecs
ORWCV1 COVERSHEET LIST | 21.711 msecs
ORWTPD1 GETEDATS | 20.181 msecs
ORWDX WRLST | 19.863 msecs
XUS GET USER INFO | 29.931 msecs
ORWCV1 COVERSHEET LIST | 19.495 msecs
ORWPCE GET HEALTH FACTORS TY | 1177.441 msecs
ORWPCE GET EXCLUDED | 19.413 msecs
ORWPCE GET EDUCATION TOPICS | 19.775 msecs
ORWTPD1 GETEDATS | 29.185 msecs
ORWTPD1 GETEDATS | 20.365 msecs
ORWCV1 COVERSHEET LIST | 16.559 msecs

## Native RPC Execution via VistA RPC Broker (Socket)
Average: **28.320 msecs**<br/>
Minimum: **0.245 msecs**<br/>
Maximum: **2011.036 msecs**<br/>
Standard Deviation: **226.839 msecs**<br/>
95th Percentile: **12.041 msecs**<br/>
RPC tests in 95th Percentile:

RPC Name | Elapsed Time
-------- | ------------
ORWPCE GET EDUCATION TOPICS | 41.805 msecs
XWB GET BROKER INFO | 2010.635 msecs
ORWCV1 COVERSHEET LIST | 41.657 msecs
ORWDAL32 DEF | 82.713 msecs
ORWDAL32 DEF | 76.055 msecs
ORWDAL32 DEF | 85.418 msecs
XWB GET BROKER INFO | 2010.874 msecs
XWB GET BROKER INFO | 2011.036 msecs
ORWCV1 COVERSHEET LIST | 42.628 msecs
ORWDX WRLST | 42.455 msecs
XWB GET BROKER INFO | 2002.853 msecs
XWB GET BROKER INFO | 2003.032 msecs
ORWCV1 COVERSHEET LIST | 43.809 msecs
ORWDX WRLST | 42.644 msecs
XWB GET BROKER INFO | 2010.508 msecs
ORWCV1 COVERSHEET LIST | 41.152 msecs
ORWDX WRLST | 43.656 msecs
XWB GET BROKER INFO | 2010.579 msecs
ORWCV1 COVERSHEET LIST | 43.525 msecs
ORWDX WRLST | 41.213 msecs
XWB GET BROKER INFO | 2010.548 msecs
XWB GET BROKER INFO | 2003.014 msecs
ORWCV1 COVERSHEET LIST | 43.892 msecs
ORWPCE GET SET OF CODES | 12.041 msecs
ORWPCE GET EXAM TYPE | 40.452 msecs
ORWPCE GET HEALTH FACTORS TY | 103.770 msecs
ORWPCE GET EDUCATION TOPICS | 41.689 msecs
ORWPCE GET IMMUNIZATION TYPE | 43.680 msecs
ORWDAL32 DEF | 72.534 msecs
ORWDAL32 DEF | 72.310 msecs
ORWDAL32 DEF | 71.787 msecs
ORWDX WRLST | 43.063 msecs
ORWDX WRLST | 42.352 msecs
ORWDX WRLST | 42.472 msecs
ORWCV1 COVERSHEET LIST | 40.728 msecs

## Comparison by RPC

| RPC Name | Pure JS/MongoDB | Native RPC Broker |
| -------- | --------------- | ----------------- |
| GMV CONVERT DATE | 4.613 msecs | **0.766 msecs** |
| ORWPT16 PSCNVT | **0.151 msecs** | 0.510 msecs |
| ORWDXM MSTYLE | 13.956 msecs | **0.503 msecs** |
| ORQORB SORT | 17.120 msecs | **0.522 msecs** |
| ORB SORT METHOD | 10.654 msecs | **0.354 msecs** |
| ORWDXVB3 COLLTIM | 15.670 msecs | **0.572 msecs** |
| ORWDXVB3 SWPANEL | 13.169 msecs | **0.356 msecs** |
| ORWPT CLINRNG | **0.135 msecs** | 0.562 msecs |
| ORQQCN2 GET CONTEXT | 12.127 msecs | **0.574 msecs** |
| ORWTPO GETIMGD | 12.171 msecs | **0.525 msecs** |
| ORWTPO CSARNGD | 27.754 msecs | **0.661 msecs** |
| ORWPCE1 NONCOUNT | 3.529 msecs | **0.612 msecs** |
| ORWPCE GET EDUCATION TOPICS | **26.028 msecs** | 41.747 msecs |
| ORWDBA1 BASTATUS | 7.743 msecs | **0.396 msecs** |
| ORQ NULL LIST | **0.132 msecs** | 0.521 msecs |
| XUS GET USER INFO | 20.079 msecs | **0.467 msecs** |
| XWB GET BROKER INFO | **0.382 msecs** | 2008.120 msecs |
| ORWU VERSRV | 2.352 msecs | **1.875 msecs** |
| XUS PKI GET UPN | 12.296 msecs | **0.774 msecs** |
| ORWU DT | **0.396 msecs** | 0.422 msecs |
| ORQQPX NEW REMINDERS ACTIVE | 6.750 msecs | **0.942 msecs** |
| ORWORDG IEN | 2.099 msecs | **0.420 msecs** |
| ORWCH LOADALL | 6.361 msecs | **0.408 msecs** |
| ORWSR SHOW SURG TAB | 2.204 msecs | **0.542 msecs** |
| ORWU TOOLMENU | 9.149 msecs | **0.483 msecs** |
| ORWDX DGNM | 2.065 msecs | **0.440 msecs** |
| OREVNTX1 DLGIEN | 2.628 msecs | **0.377 msecs** |
| ORWCH LDFONT | 2.706 msecs | **0.431 msecs** |
| TIU TEMPLATE GET DEFAULTS | **0.075 msecs** | 0.344 msecs |
| ORWCH LOADSIZ | 2.998 msecs | **0.352 msecs** |
| ORQPT DEFAULT LIST SOURCE | 7.484 msecs | **0.483 msecs** |
| ORWORB GETSORT | 13.236 msecs | **0.408 msecs** |
| ORWCIRN AUTORDV | **0.076 msecs** | 0.382 msecs |
| ORWCOM PTOBJ | 4.142 msecs | **0.537 msecs** |
| ORWCV1 COVERSHEET LIST | **25.568 msecs** | 42.484 msecs |
| ORWDAL32 DEF | **4.417 msecs** | 76.803 msecs |
| ORWU VALDT | 2.704 msecs | **0.394 msecs** |
| ORWDAL32 CLINUSER | 11.362 msecs | **1.055 msecs** |
| ORWDAL32 SITE PARAMS | 3.043 msecs | **0.343 msecs** |
| ORDEA DEATEXT | 2.052 msecs | **0.454 msecs** |
| ORWDX WRLST | **17.400 msecs** | 42.551 msecs |
| ORWTPD1 GETEAFL | **0.063 msecs** | 0.446 msecs |
| ORWTPD1 GETEDATS | 19.245 msecs | **0.485 msecs** |
| ORWU1 NEWLOC | 6.987 msecs | **0.461 msecs** |
| TIU TEMPLATE ACCESS LEVEL | 14.461 msecs | **0.637 msecs** |
| ORWDXC ON | 8.640 msecs | **0.403 msecs** |
| ORWPS REASON | 8.287 msecs | **0.677 msecs** |
| ORWOR PKISITE | 1.932 msecs | **0.493 msecs** |
| ORWCOM ORDEROBJ | 6.871 msecs | **0.486 msecs** |
| ORWDX2 DCREASON | 11.850 msecs | **0.796 msecs** |
| ORWDRA32 LOCTYPE | 2.072 msecs | **0.354 msecs** |
| ORWDPS32 VALROUTE | **2.754 msecs** | 2.755 msecs |
| ORWDPS32 VALQTY | **0.085 msecs** | 0.362 msecs |
| ORWU VALIDSIG | 2.462 msecs | **0.354 msecs** |
| ORWU PARAM | 11.306 msecs | **0.428 msecs** |
| ORWPCE ANYTIME | 8.927 msecs | **0.347 msecs** |
| ORWPCE ASKPCE | 10.105 msecs | **0.410 msecs** |
| TIU GET PRINT NAME | 2.854 msecs | **1.039 msecs** |
| ORWPCE ALWAYS CHECKOUT | 6.350 msecs | **0.442 msecs** |
| ORWPCE GET SET OF CODES | **0.346 msecs** | 2.687 msecs |
| ORWPCE AUTO VISIT TYPE SELECT | 6.510 msecs | **0.814 msecs** |
| ORWPCE GET EXAM TYPE | **15.804 msecs** | 40.452 msecs |
| ORWPCE GET EXCLUDED | 8.803 msecs | **0.778 msecs** |
| ORWPCE GET HEALTH FACTORS TY | 1177.441 msecs | **103.770 msecs** |
| ORWPCE GET SKIN TEST TYPE | 3.843 msecs | **0.418 msecs** |
| ORWPCE GET IMMUNIZATION TYPE | **13.853 msecs** | 43.680 msecs |
| GMV DLL VERSION | 3.964 msecs | **0.583 msecs** |
| GMV GET CURRENT TIME | **0.202 msecs** | 0.328 msecs |
| GMV GET VITAL TYPE IEN | 2.021 msecs | **0.288 msecs** |
| ORWU CLINLOC | 4.729 msecs | **0.403 msecs** |
| ORIMO ISCLOC | 2.544 msecs | **0.629 msecs** |
