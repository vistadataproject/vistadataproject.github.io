---
layout: default
title: VAM B1 Demo Performance 
---

# CI Performance Benchmark Report

_Test run Tue Nov 28 2017 23:59:33 GMT-1000 (HST)_

## Summary
Total Tests: 540<br/>
Unique RPCs: 56<br/>
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
    ORIMO ISCLOC
    XUS GET USER INFO
    ORWU DT
    ORWU HASKEY
    ORQQPX NEW REMINDERS ACTIVE
    ORWORDG IEN
    ORWCH LOADALL
    ORWU TOOLMENU
    ORWDX DGNM
    OREVNTX1 DLGIEN
    ORWCH LDFONT
    TIU TEMPLATE GET DEFAULTS
    ORWCH LOADSIZ
    ORQPT DEFAULT LIST SOURCE
    ORWORB GETSORT
    ORWCIRN AUTORDV
    ORWDAL32 DEF
    ORWDAL32 SYMPTOMS
    ORWU VALDT
    ORWDAL32 CLINUSER
    ORWDAL32 SITE PARAMS
    ORWTPD1 GETEAFL
    TIU TEMPLATE ACCESS LEVEL
    ORWDXC ON
    ORWPS REASON
    ORWCOM ORDEROBJ
    ORWDRA32 LOCTYPE
    ORWDPS32 VALQTY
    XWB IM HERE
    ORWU PARAM
    ORWPCE ANYTIME
    ORWPCE ASKPCE
    ORWPCE ALWAYS CHECKOUT
    ORWPCE GET SET OF CODES
    ORWPCE AUTO VISIT TYPE SELECT
    ORWPCE GET EXAM TYPE
    ORWPCE GET EXCLUDED
    ORWPCE GET HEALTH FACTORS TY
    ORWPCE GET SKIN TEST TYPE
    ORWPCE GET IMMUNIZATION TYPE
    GMV DLL VERSION
    GMV PARAMETER
    GMV GET CURRENT TIME
    GMV GET VITAL TYPE IEN

## Pure Javascript/MongoDB RPC Emulation
Average: **3.052 msecs**<br/>
Minimum: **0.006 msecs**<br/>
Maximum: **382.123 msecs**<br/>
Standard Deviation: **17.673 msecs**<br/>
95th Percentile: **7.535 msecs**<br/>
RPC tests in 95th Percentile:

    ORWDXM MSTYLE: 7.546 msecs
    ORQORB SORT: 9.227 msecs
    ORWDXVB3 COLLTIM: 7.812 msecs
    ORWTPO CSARNGD: 15.260 msecs
    XUS GET USER INFO: 11.695 msecs
    ORWCH LOADALL: 13.543 msecs
    ORWU TOOLMENU: 8.570 msecs
    ORWORB GETSORT: 7.770 msecs
    ORWDAL32 SYMPTOMS: 55.747 msecs
    ORWDAL32 SYMPTOMS: 38.365 msecs
    ORWDAL32 SYMPTOMS: 46.017 msecs
    XUS GET USER INFO: 9.058 msecs
    TIU TEMPLATE ACCESS LEVEL: 52.666 msecs
    ORWDXC ON: 10.041 msecs
    XUS GET USER INFO: 8.106 msecs
    TIU TEMPLATE ACCESS LEVEL: 62.296 msecs
    ORWDXC ON: 12.050 msecs
    TIU TEMPLATE ACCESS LEVEL: 45.565 msecs
    XUS GET USER INFO: 7.564 msecs
    TIU TEMPLATE ACCESS LEVEL: 49.015 msecs
    ORWPCE ANYTIME: 7.673 msecs
    ORWPCE ASKPCE: 8.995 msecs
    ORWPCE GET HEALTH FACTORS TY: 382.123 msecs
    ORWDAL32 SYMPTOMS: 32.906 msecs
    ORWDAL32 SYMPTOMS: 38.081 msecs
    ORWDAL32 SYMPTOMS: 34.293 msecs
    TIU TEMPLATE ACCESS LEVEL: 48.992 msecs

## Native RPC Execution via VistA RPC Broker (Socket)
Average: **1.816 msecs**<br/>
Minimum: **0.194 msecs**<br/>
Maximum: **107.058 msecs**<br/>
Standard Deviation: **11.036 msecs**<br/>
95th Percentile: **0.701 msecs**<br/>

RPC tests in 95th Percentile ...

RPC Name | Time (msecs)
--- | ---
ORQQPX NEW REMINDERS ACTIVE | 0.805
ORWDAL32 DEF | 25.026
ORWDAL32 SYMPTOMS | 97.831
ORWU DT | 0.757
ORWDAL32 CLINUSER | 0.945
ORWDAL32 DEF | 23.220
ORWDAL32 SYMPTOMS | 98.450
ORWDAL32 DEF | 21.217
ORWDAL32 SYMPTOMS | 98.286
ORWCIRN AUTORDV | 0.844
TIU TEMPLATE ACCESS LEVEL | 1.103
ORWCOM ORDEROBJ | 1.056
ORQQPX NEW REMINDERS ACTIVE | 1.466
ORWDX DGNM | 0.950
ORWDX DGNM | 0.795
ORWPCE GET SET OF CODES | 0.999
ORWPCE GET HEALTH FACTORS TY | 52.577
ORWPCE GET IMMUNIZATION TYPE | 1.043
GMV PARAMETER | 0.731
ORWDAL32 DEF | 21.546
ORWDAL32 SYMPTOMS | 99.054
ORWDAL32 CLINUSER | 0.745
ORWDAL32 DEF | 22.737
ORWDAL32 SYMPTOMS | 105.409
ORWDAL32 DEF | 26.270
ORWDAL32 SYMPTOMS | 107.058
TIU TEMPLATE ACCESS LEVEL | 0.760

## Comparison by RPC

| RPC Name | Pure JS/MongoDB | Native RPC Broker |
| -------- | --------------- | ----------------- |
| GMV CONVERT DATE | 3.930 msecs | **0.611 msecs** |
| ORWPT16 PSCNVT | **0.111 msecs** | 0.419 msecs |
| ORWDXM MSTYLE | 7.546 msecs | **0.444 msecs** |
| ORQORB SORT | 9.227 msecs | **0.558 msecs** |
| ORB SORT METHOD | 5.798 msecs | **0.415 msecs** |
| ORWDXVB3 COLLTIM | 7.812 msecs | **0.469 msecs** |
| ORWDXVB3 SWPANEL | 6.733 msecs | **0.343 msecs** |
| ORWPT CLINRNG | **0.072 msecs** | 0.440 msecs |
| ORQQCN2 GET CONTEXT | 6.698 msecs | **0.469 msecs** |
| ORWTPO GETIMGD | 6.857 msecs | **0.440 msecs** |
| ORWTPO CSARNGD | 15.260 msecs | **0.358 msecs** |
| ORWPCE1 NONCOUNT | 2.171 msecs | **0.458 msecs** |
| ORIMO ISCLOC | 2.559 msecs | **0.508 msecs** |
| XUS GET USER INFO | 7.852 msecs | **0.336 msecs** |
| ORWU DT | **0.185 msecs** | 0.358 msecs |
| ORWU HASKEY | **0.028 msecs** | 0.303 msecs |
| ORQQPX NEW REMINDERS ACTIVE | 2.708 msecs | **0.668 msecs** |
| ORWORDG IEN | 1.128 msecs | **0.313 msecs** |
| ORWCH LOADALL | 4.106 msecs | **0.305 msecs** |
| ORWU TOOLMENU | 4.913 msecs | **0.385 msecs** |
| ORWDX DGNM | 1.056 msecs | **0.311 msecs** |
| OREVNTX1 DLGIEN | 1.394 msecs | **0.290 msecs** |
| ORWCH LDFONT | 1.526 msecs | **0.283 msecs** |
| TIU TEMPLATE GET DEFAULTS | **0.034 msecs** | 0.285 msecs |
| ORWCH LOADSIZ | 1.218 msecs | **0.310 msecs** |
| ORQPT DEFAULT LIST SOURCE | 3.145 msecs | **0.357 msecs** |
| ORWORB GETSORT | 5.146 msecs | **0.357 msecs** |
| ORWCIRN AUTORDV | **0.036 msecs** | 0.419 msecs |
| ORWDAL32 DEF | **2.398 msecs** | 23.336 msecs |
| ORWDAL32 SYMPTOMS | **40.902 msecs** | 101.015 msecs |
| ORWU VALDT | 1.300 msecs | **0.403 msecs** |
| ORWDAL32 CLINUSER | 5.804 msecs | **0.845 msecs** |
| ORWDAL32 SITE PARAMS | 2.053 msecs | **0.401 msecs** |
| ORWTPD1 GETEAFL | **0.038 msecs** | 0.349 msecs |
| TIU TEMPLATE ACCESS LEVEL | 51.706 msecs | **0.621 msecs** |
| ORWDXC ON | 6.114 msecs | **0.342 msecs** |
| ORWPS REASON | 4.016 msecs | **0.365 msecs** |
| ORWCOM ORDEROBJ | 1.871 msecs | **0.466 msecs** |
| ORWDRA32 LOCTYPE | 2.127 msecs | **0.309 msecs** |
| ORWDPS32 VALQTY | **0.054 msecs** | 0.308 msecs |
| XWB IM HERE | **0.009 msecs** | 0.247 msecs |
| ORWU PARAM | 6.241 msecs | **0.464 msecs** |
| ORWPCE ANYTIME | 7.673 msecs | **0.481 msecs** |
| ORWPCE ASKPCE | 7.982 msecs | **0.378 msecs** |
| ORWPCE ALWAYS CHECKOUT | 2.723 msecs | **0.343 msecs** |
| ORWPCE GET SET OF CODES | **0.199 msecs** | 0.635 msecs |
| ORWPCE AUTO VISIT TYPE SELECT | 2.949 msecs | **0.309 msecs** |
| ORWPCE GET EXAM TYPE | 3.079 msecs | **0.524 msecs** |
| ORWPCE GET EXCLUDED | 3.510 msecs | **0.334 msecs** |
| ORWPCE GET HEALTH FACTORS TY | 382.123 msecs | **52.577 msecs** |
| ORWPCE GET SKIN TEST TYPE | 1.790 msecs | **0.349 msecs** |
| ORWPCE GET IMMUNIZATION TYPE | 6.836 msecs | **1.043 msecs** |
| GMV DLL VERSION | 1.345 msecs | **0.389 msecs** |
| GMV PARAMETER | 0.819 msecs | **0.459 msecs** |
| GMV GET CURRENT TIME | **0.194 msecs** | 0.357 msecs |
| GMV GET VITAL TYPE IEN | 1.493 msecs | **0.302 msecs** |
