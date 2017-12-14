---
layout: default
title: Performance Benchmark Report
---

# Performance Benchmark Report
_Test run Thu Dec 14 2017 20:55:00 GMT+0000 (UTC)_

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
Average: **5.089 msecs**<br/>
Minimum: **0.030 msecs**<br/>
Maximum: **1021.807 msecs**<br/>
Standard Deviation: **38.931 msecs**<br/>
95th Percentile: **16.638 msecs**<br/>
RPC tests in 95th Percentile:

    ORQORB SORT: 27.645 msecs
    ORWDXVB3 COLLTIM: 16.638 msecs
    ORWTPO CSARNGD: 28.878 msecs
    ORWPCE GET EDUCATION TOPICS: 17.847 msecs
    XUS GET USER INFO: 21.722 msecs
    ORWCH LOADALL: 17.566 msecs
    ORWCV1 COVERSHEET LIST: 32.991 msecs
    XUS GET USER INFO: 22.691 msecs
    ORWU TOOLMENU: 23.532 msecs
    ORWCV1 COVERSHEET LIST: 20.555 msecs
    ORWDX WRLST: 25.297 msecs
    ORWTPD1 GETEDATS: 20.648 msecs
    TIU TEMPLATE ACCESS LEVEL: 22.581 msecs
    ORWDXC ON: 17.130 msecs
    ORWPS REASON: 17.506 msecs
    ORQPT DEFAULT LIST SOURCE: 16.936 msecs
    ORWCV1 COVERSHEET LIST: 19.284 msecs
    TIU TEMPLATE ACCESS LEVEL: 19.541 msecs
    ORWPS REASON: 24.371 msecs
    XUS GET USER INFO: 27.779 msecs
    ORWCV1 COVERSHEET LIST: 23.213 msecs
    ORWDX WRLST: 17.470 msecs
    ORWDX2 DCREASON: 18.038 msecs
    ORWDBA1 BASTATUS: 20.730 msecs
    ORWCV1 COVERSHEET LIST: 21.200 msecs
    ORWDX WRLST: 31.442 msecs
    XUS GET USER INFO: 20.156 msecs
    ORWCV1 COVERSHEET LIST: 21.648 msecs
    ORWPCE ANYTIME: 18.989 msecs
    ORWPCE GET EXCLUDED: 16.803 msecs
    ORWPCE GET HEALTH FACTORS TY: 1021.807 msecs
    ORWPCE GET EXCLUDED: 16.826 msecs
    ORWPCE GET EDUCATION TOPICS: 19.706 msecs
    ORWPCE GET EXCLUDED: 22.264 msecs
    ORWDX WRLST: 19.884 msecs

## Native RPC Execution via VistA RPC Broker (Socket)
Average: **28.268 msecs**<br/>
Minimum: **0.249 msecs**<br/>
Maximum: **2010.669 msecs**<br/>
Standard Deviation: **226.814 msecs**<br/>
95th Percentile: **7.420 msecs**<br/>
RPC tests in 95th Percentile:

    ORWPCE GET EDUCATION TOPICS: 43.601 msecs
    XWB GET BROKER INFO: 2010.669 msecs
    ORWCV1 COVERSHEET LIST: 44.091 msecs
    ORWDAL32 DEF: 82.609 msecs
    ORWDAL32 DEF: 70.633 msecs
    ORWDAL32 DEF: 80.685 msecs
    XWB GET BROKER INFO: 2010.533 msecs
    XWB GET BROKER INFO: 2010.566 msecs
    ORWCV1 COVERSHEET LIST: 42.085 msecs
    ORWDX WRLST: 42.663 msecs
    XWB GET BROKER INFO: 2002.867 msecs
    XWB GET BROKER INFO: 2002.969 msecs
    ORWCV1 COVERSHEET LIST: 42.513 msecs
    ORWDX WRLST: 45.968 msecs
    XWB GET BROKER INFO: 2010.485 msecs
    ORWCV1 COVERSHEET LIST: 40.979 msecs
    ORWDX WRLST: 43.306 msecs
    XWB GET BROKER INFO: 2010.526 msecs
    ORWCV1 COVERSHEET LIST: 41.522 msecs
    ORWDX WRLST: 43.790 msecs
    XWB GET BROKER INFO: 2010.496 msecs
    XWB GET BROKER INFO: 2002.615 msecs
    ORWCV1 COVERSHEET LIST: 44.466 msecs
    ORWPCE GET EXAM TYPE: 42.993 msecs
    ORWPCE GET HEALTH FACTORS TY: 78.383 msecs
    ORWPCE GET EDUCATION TOPICS: 41.728 msecs
    ORWPCE GET IMMUNIZATION TYPE: 43.726 msecs
    ORWDAL32 DEF: 78.746 msecs
    ORWDAL32 DEF: 73.673 msecs
    ORWDAL32 DEF: 71.717 msecs
    ORWDX WRLST: 42.654 msecs
    ORWDX WRLST: 41.115 msecs
    ORWDX WRLST: 43.301 msecs
    ORWU DT: 7.420 msecs
    ORWCV1 COVERSHEET LIST: 42.349 msecs

## Comparison by RPC
| RPC Name | Pure JS/MongoDB | Native RPC Broker |
| -------- | --------------- | ----------------- |

| GMV CONVERT DATE | 5.019 msecs | **2.400 msecs** |
| ORWPT16 PSCNVT | **0.142 msecs** | 1.480 msecs |
| ORWDXM MSTYLE | 11.432 msecs | **1.484 msecs** |
| ORQORB SORT | 27.645 msecs | **0.575 msecs** |
| ORB SORT METHOD | 9.826 msecs | **0.309 msecs** |
| ORWDXVB3 COLLTIM | 16.638 msecs | **1.052 msecs** |
| ORWDXVB3 SWPANEL | 11.272 msecs | **0.329 msecs** |
| ORWPT CLINRNG | **0.148 msecs** | 0.761 msecs |
| ORQQCN2 GET CONTEXT | 10.759 msecs | **0.781 msecs** |
| ORWTPO GETIMGD | 10.537 msecs | **0.687 msecs** |
| ORWTPO CSARNGD | 28.878 msecs | **0.368 msecs** |
| ORWPCE1 NONCOUNT | 2.977 msecs | **1.331 msecs** |
| ORWPCE GET EDUCATION TOPICS | **18.777 msecs** | 42.664 msecs |
| ORWDBA1 BASTATUS | 7.505 msecs | **0.355 msecs** |
| ORQ NULL LIST | **0.105 msecs** | 2.097 msecs |
| XUS GET USER INFO | 17.880 msecs | **0.409 msecs** |
| XWB GET BROKER INFO | **0.176 msecs** | 2007.970 msecs |
| ORWU VERSRV | 2.357 msecs | **1.636 msecs** |
| XUS PKI GET UPN | 10.468 msecs | **0.451 msecs** |
| ORWU DT | **0.307 msecs** | 0.381 msecs |
| ORQQPX NEW REMINDERS ACTIVE | 6.730 msecs | **1.241 msecs** |
| ORWORDG IEN | 2.025 msecs | **0.335 msecs** |
| ORWCH LOADALL | 6.212 msecs | **0.334 msecs** |
| ORWSR SHOW SURG TAB | 2.187 msecs | **0.767 msecs** |
| ORWU TOOLMENU | 12.010 msecs | **0.421 msecs** |
| ORWDX DGNM | 1.588 msecs | **0.438 msecs** |
| OREVNTX1 DLGIEN | 1.991 msecs | **0.529 msecs** |
| ORWCH LDFONT | 2.852 msecs | **0.290 msecs** |
| TIU TEMPLATE GET DEFAULTS | **0.054 msecs** | 0.443 msecs |
| ORWCH LOADSIZ | 2.393 msecs | **0.345 msecs** |
| ORQPT DEFAULT LIST SOURCE | 7.306 msecs | **0.519 msecs** |
| ORWORB GETSORT | 9.101 msecs | **0.485 msecs** |
| ORWCIRN AUTORDV | **0.066 msecs** | 0.881 msecs |
| ORWCOM PTOBJ | 3.588 msecs | **0.584 msecs** |
| ORWCV1 COVERSHEET LIST | **21.979 msecs** | 42.572 msecs |
| ORWDAL32 DEF | **3.368 msecs** | 76.344 msecs |
| ORWU VALDT | 2.571 msecs | **0.378 msecs** |
| ORWDAL32 CLINUSER | 11.456 msecs | **1.162 msecs** |
| ORWDAL32 SITE PARAMS | 2.967 msecs | **0.374 msecs** |
| ORDEA DEATEXT | 2.647 msecs | **0.388 msecs** |
| ORWDX WRLST | **19.009 msecs** | 43.257 msecs |
| ORWTPD1 GETEAFL | **0.055 msecs** | 0.584 msecs |
| ORWTPD1 GETEDATS | 14.826 msecs | **0.547 msecs** |
| ORWU1 NEWLOC | 6.471 msecs | **0.541 msecs** |
| TIU TEMPLATE ACCESS LEVEL | 13.338 msecs | **0.764 msecs** |
| ORWDXC ON | 8.303 msecs | **0.369 msecs** |
| ORWPS REASON | 10.205 msecs | **0.463 msecs** |
| ORWOR PKISITE | 2.555 msecs | **0.484 msecs** |
| ORWCOM ORDEROBJ | 3.930 msecs | **0.466 msecs** |
| ORWDX2 DCREASON | 9.857 msecs | **0.539 msecs** |
| ORWDRA32 LOCTYPE | 2.350 msecs | **0.438 msecs** |
| ORWDPS32 VALROUTE | 2.078 msecs | **2.078 msecs** |
| ORWDPS32 VALQTY | **0.077 msecs** | 0.345 msecs |
| ORWU VALIDSIG | 2.955 msecs | **0.383 msecs** |
| ORWU PARAM | 10.435 msecs | **0.415 msecs** |
| ORWPCE ANYTIME | 18.989 msecs | **0.313 msecs** |
| ORWPCE ASKPCE | 10.198 msecs | **0.404 msecs** |
| TIU GET PRINT NAME | 3.056 msecs | **1.811 msecs** |
| ORWPCE ALWAYS CHECKOUT | 6.762 msecs | **0.349 msecs** |
| ORWPCE GET SET OF CODES | **0.352 msecs** | 0.885 msecs |
| ORWPCE AUTO VISIT TYPE SELECT | 7.078 msecs | **0.365 msecs** |
| ORWPCE GET EXAM TYPE | **9.277 msecs** | 42.993 msecs |
| ORWPCE GET EXCLUDED | 14.650 msecs | **0.609 msecs** |
| ORWPCE GET HEALTH FACTORS TY | 1021.807 msecs | **78.383 msecs** |
| ORWPCE GET SKIN TEST TYPE | 2.766 msecs | **0.389 msecs** |
| ORWPCE GET IMMUNIZATION TYPE | **12.192 msecs** | 43.726 msecs |
| GMV DLL VERSION | 1.881 msecs | **0.681 msecs** |
| GMV GET CURRENT TIME | **0.172 msecs** | 0.353 msecs |
| GMV GET VITAL TYPE IEN | 1.760 msecs | **0.321 msecs** |
| ORWU CLINLOC | 4.060 msecs | **0.389 msecs** |
| ORIMO ISCLOC | 2.822 msecs | **0.485 msecs** |
