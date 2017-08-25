---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Non Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Non Clinical (562)



Non Clinical RPCs (NC RPCs) don't affect a patient's medical record. In a phrase, they mainly 'get file data and parameter settings' and as they don't access patient data, their use needn't be monitored as closely as the Clinical RPCs - they don't involve HIPAA sensitive information.

These RPCs access at least 122 parameters and 87 files.

VDP will emulate NC RPCs exercised in the _VDP Demo_.
In Demo: __138 (24.6%)__
Emulated so far: __75 (54.3%)__


Name | Number | Seen in Demo | Emulated
--- | --- | --- | ---
[Parameter Only](#parameter-only-129) | 129 (23%) | __36 (27.9%)__ | __36 (100%)__
[File Only](#file-only-239) | 239 (42.5%) | __60 (25.1%)__ | __32 (53.3%)__
[Parameter and File](#parameter-and-file-33) | 33 (5.9%) | __10 (30.3%)__ | __0 (0%)__
[Other](#other-161) | 161 (28.6%) | __32 (19.9%)__ | __7 (21.9%)__




### Parameter Only (129)

RPCs that ONLY access parameters and not files. A tag of DUZ means that they access per User data..

Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 27 (20.9%) | __5 (18.5%)__
READ | 96 (74.4%) | __30 (31.3%)__
UTILITY | 6 (4.7%) | __1 (16.7%)__





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
P1 | __[GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_DLL_VERSION)__ | READ | GMVX | 3 | P3PCE, P3VITALS |  | GMV DLL VERSION
P2 | __[GMV PARAMETER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_PARAMETER)__ | __CHANGE__ | OPTION, ENT, PAR, INST, VAL | 9 | P3PCE, P3VITALS |  | 
P3 | __[GMV USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_USER)__ | READ | OPTION, DATA | 5 | DUZ, P3PCE, P3VITALS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P4 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_SORT_METHOD) | READ | &nbsp; | 1 | DUZ |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P5 | [ORDDPAPI ADMTIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDDPAPI_ADMTIME) | READ | &nbsp; | 3 | - |  | OR ADMIN TIME HELP TEXT
P6 | [ORDDPAPI CLOZMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDDPAPI_CLOZMSG) | READ | &nbsp; | 4 | - |  | OR CLOZ INPT MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P7 | __[ORDEA DEATEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_DEATEXT)__ | READ | &nbsp; | 3 | P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS |  | OR DEA TEXT
P8 | [ORDEA LNKMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_LNKMSG) | READ | &nbsp; | 3 | - |  | OR DEA PIV LINK MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P9 | [ORECS01 SAVPATH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORECS01_SAVPATH) | __CHANGE__ | ECPATH | 12 | DUZ |  | ORWT TOOLS MENU
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P10 | [OREVNTX1 AUTHMREL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_AUTHMREL) | READ | USER | 1 | DUZ, XUSEC |  | 
P11 | [OREVNTX1 DELDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DELDFLT) | __CHANGE__ | PVIFN | 4 | DUZ |  | OREVNT DEFAULT
P12 | [OREVNTX1 DFLTEVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DFLTEVT) | READ | PVIFN | 5 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P13 | [ORQORB SORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQORB_SORT) | READ | &nbsp; | 1 | DUZ |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P14 | [ORQPT CLINICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_CLINICS) | READ | &nbsp; | 5 | LOCATION |  | ORWD COMMON CLINIC
P15 | [ORQPT DEFAULT CLINIC DATE RANG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_CLINIC_DATE_RANG) | READ | &nbsp; | 6 | DUZ, LOCATION |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
P16 | [ORQPT DEFAULT LIST SORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_LIST_SORT) | READ | &nbsp; | 8 | DUZ |  | *VARIABLE*
P17 | __[ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_LIST_SOURCE)__ | READ | &nbsp; | 13 | DUZ, P1BPSEL |  | *VARIABLE*, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P18 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_GET_CONTEXT) | READ | ORUSER | 1 | - |  | ORCH CONTEXT CONSULTS
P19 | [ORQQCN2 SAVE CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_SAVE_CONTEXT) | __CHANGE__ | ORCTXT | 5 | DUZ |  | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P20 | [ORQQLR SEARCH RANGE OUTPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQLR_SEARCH_RANGE_OUTPT) | READ | &nbsp; | 5 | DUZ |  | ORQQLR SEARCH RANGE OUTPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P21 | [ORQQPL PROBLEM NTRT BULLETIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_NTRT_BULLETIN) | UTILITY | ORTERM, ORNP, ORPT, ORCOMM | 20 | BULLETIN, DUZ, XMB |  | OR PROBLEM NTRT BY DIVISION
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P22 | [ORQQPX GET DEF LOCATIONS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_GET_DEF_LOCATIONS) | READ | &nbsp; | 3 | DUZ |  | ORQQPX DEFAULT LOCATIONS
P23 | [ORQQPX GET FOLDERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_GET_FOLDERS) | READ | &nbsp; | 5 | DUZ |  | ORQQPX REMINDER FOLDERS
P24 | [ORQQPX LVREMLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_LVREMLST) | READ | LVL, CLASS | 1 | - |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
P25 | [ORQQPX NEW COVER SHEET ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_NEW_COVER_SHEET_ACTIVE) | READ | &nbsp; | 4 | DUZ, IS-A |  | ORQQPX NEW REMINDER PARAMS
P26 | [ORQQPX NEW COVER SHEET REMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_NEW_COVER_SHEET_REMS) | READ | LOC | 20 | DUZ |  | ORQQPX SEARCH ITEMS
P27 | __[ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_NEW_REMINDERS_ACTIVE)__ | READ | &nbsp; | 8 | DUZ, IS-A, P1BPSEL |  | PXRM GUI REMINDERS ACTIVE
P28 | [ORQQPX REM INSERT AT CURSOR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_REM_INSERT_AT_CURSOR) | READ | &nbsp; | 4 | DUZ |  | ORQQPX REMINDER TEXT AT CURSOR
P29 | [ORQQPX SAVELVL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_SAVELVL) | __CHANGE__ | LVL, CLASS, DATA | 13 | - |  | *VARIABLE*, ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
P30 | [ORQQPX SET FOLDERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_SET_FOLDERS) | __CHANGE__ | ORFLDRS | 3 | DUZ |  | ORQQPX REMINDER FOLDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P31 | [ORQQPXRM PROGRESS NOTE HEADER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_PROGRESS_NOTE_HEADER) | READ | ORLOC | &nbsp; | DUZ, LOCATION |  | PXRM PROGRESS NOTE HEADERS
P32 | __[ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_CATEGORIES)__ | READ | ORPT, ORLOC | 1 | DUZ, LOCATION, P3PCE |  | PXRM CPRS LOOKUP CATEGORIES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P33 | __[ORWCH LDFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LDFONT)__ | READ | NAM | 1 | DUZ, GUI, P1BPSEL |  | ORWCH FONT SIZE
P34 | __[ORWCH LOADALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADALL)__ | READ | &nbsp; | 10 | DUZ, GUI, P1BPSEL |  | ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTH, ORWCH WIDTHS
P35 | __[ORWCH LOADSIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADSIZ)__ | READ | NAM | 2 | DUZ, GUI, P1BPSEL, P3MEDOPORDERS, P3NVAORDERS, P3PCE |  | ORWCH BOUNDS
P36 | __[ORWCH SAVEALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVEALL)__ | __CHANGE__ | LST | 8 | DUZ, P2PSEL, P3ALLERGIES, P3NVAORDERS |  | *VARIABLE*, ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTHS
P37 | [ORWCH SAVECOL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVECOL) | __CHANGE__ | COL | 4 | DUZ |  | ORWCH COLUMNS REPORTS
P38 | [ORWCH SAVESIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVESIZ) | __CHANGE__ | NAM, VAL | 1 | DUZ |  | ORWCH BOUNDS
P39 | __[ORWCH SAVFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVFONT)__ | __CHANGE__ | VAL | 1 | DUZ, P2PSEL, P3ALLERGIES, P3NVAORDERS |  | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P40 | __[ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_AUTORDV)__ | READ | &nbsp; | 1 | P2PSEL |  | ORWRP CIRN AUTOMATIC
P41 | [ORWCIRN HDRON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_HDRON) | READ | &nbsp; | 2 | - |  | ORWRP HDR ON
P42 | [ORWCIRN WEBADDR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_WEBADDR) | READ | PATID | 4 | HARD CODED |  | ORWRP VISTAWEB ADDRESS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P43 | __[ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_ORDEROBJ)__ | READ | ORGRP | 1 | DUZ, P3MEDOPORDERS, P3NVAORDERS |  | ORWCOM PATIENT SELECTED
P44 | __[ORWCOM PTOBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_PTOBJ)__ | READ | &nbsp; | 1 | DUZ, P2PSEL |  | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P45 | __[ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_CLINUSER)__ | READ | &nbsp; | 16 | DUZ, IS-A, P3ALLERGIES, eHMP |  | *VARIABLE*
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P46 | [ORWDBA4 GETBAUSR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA4_GETBAUSR) | READ | ORCIEN | 2 | DUZ |  | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P47 | [ORWDLR DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR_DEF) | READ | ALOC | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P48 | [ORWDLR32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_DEF) | READ | ALOC, ADIV | 9 | - |  | 
P49 | [ORWDLR32 MAXDAYS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_MAXDAYS) | UTILITY | LOC, SCHED | 10 | LOCATION |  | LR MAX DAYS CONTINUOUS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P50 | [ORWDLR33 LC TO WC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR33_LC_TO_WC) | READ | ORLOC | 6 | DUZ, LOCATION |  | ORWLR LC CHANGED TO WC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P51 | [ORWDPS1 LOCPICK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_LOCPICK) | READ | LOC | 6 | LOCATION |  | ORWDPS ROUTING DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P52 | [ORWDPS32 AUTHNVA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_AUTHNVA) | READ | PRV | 8 | DUZ |  | OR OREMAS NON-VA MED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P53 | __[ORWDXC ON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_ON)__ | READ | &nbsp; | 1 | IS-A, P3MEDOPORDERS, P3NVAORDERS |  | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P54 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_MSTYLE) | READ | &nbsp; | 1 | - |  | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P55 | [ORWDXM1 SVRPC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM1_SVRPC) | READ | X | 1 | DUZ, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P56 | [ORWDXQ PUTQLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_PUTQLST) | __CHANGE__ | DG, QLST | 4 | DUZ |  | ORWDQ DISPLAY NAME, ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P57 | [ORWDXVB NURSADMN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_NURSADMN) | READ | &nbsp; | 1 | - |  | OR VBECS SUPPRESS NURS ADMIN
P58 | [ORWDXVB STATALOW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_STATALOW) | READ | DFN | 1 | DUZ |  | 
P59 | [ORWDXVB VBTNS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_VBTNS) | READ | &nbsp; | 1 | - |  | ORWDXVB VBECS TNS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P60 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_COLLTIM) | READ | &nbsp; | 1 | - |  | OR VBECS REMOVE COLL TIME
P61 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_SWPANEL) | READ | &nbsp; | 2 | - |  | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P62 | [ORWGN AUTHUSR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGN_AUTHUSR) | READ | &nbsp; | 2 | DUZ |  | 
P63 | [ORWGN GNLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGN_GNLOC) | READ | ORFROM, DIR | 13 | IS-A |  | OR GN LOCATIONS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P64 | __[ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ALLVIEWS)__ | READ | VIEW, USER | 2 | DUZ, P1BPSEL |  | ORWG GRAPH VIEW
P65 | [ORWGRPC DELVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_DELVIEWS) | __CHANGE__ | NAME, PUBLIC | 2 | DUZ |  | 
P66 | __[ORWGRPC GETPREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETPREF)__ | UTILITY | &nbsp; | 2 | FMUTILITY, P1BPSEL |  | ORWG GRAPH SETTING
P67 | [ORWGRPC GETSIZE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETSIZE) | UTILITY | &nbsp; | 2 | FMUTILITY |  | 
P68 | [ORWGRPC GETVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETVIEWS) | UTILITY | ALL, PUBLIC, EXT, USER | 2 | FMUTILITY |  | 
P69 | [ORWGRPC PUBLIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_PUBLIC) | READ | &nbsp; | 1 | DUZ |  | 
P70 | [ORWGRPC SETPREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_SETPREF) | __CHANGE__ | SETTING, PUBLIC | 2 | - |  | 
P71 | [ORWGRPC SETSIZE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_SETSIZE) | __CHANGE__ | VAL | 2 | - |  | 
P72 | [ORWGRPC SETVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_SETVIEWS) | __CHANGE__ | NAME, PUBLIC, VAL | 2 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P73 | [ORWNSS NSSMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWNSS_NSSMSG) | READ | &nbsp; | 4 | DUZ |  | ORWIM NSS MESSAGE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P74 | [ORWOR EXPIRED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_EXPIRED) | UTILITY | &nbsp; | 4 | - |  | ORWOR EXPIRED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P75 | __[ORWORB GETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_GETSORT)__ | READ | &nbsp; | 1 | P2PSEL |  | ORB SORT DIRECTION, ORB SORT METHOD
P76 | __[ORWORB SETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_SETSORT)__ | __CHANGE__ | SORT, DIR | 3 | DUZ, P2PSEL |  | ORB SORT DIRECTION, ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P77 | __[ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ALWAYS_CHECKOUT)__ | READ | LOC | 5 | DUZ, IS-A, P3PCE |  | ORWPCE DISABLE AUTO CHECKOUT
P78 | __[ORWPCE ANYTIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ANYTIME)__ | READ | &nbsp; | 4 | DUZ, P3PCE |  | ORWPCE ANYTIME ENCOUNTERS
P79 | __[ORWPCE ASKPCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ASKPCE)__ | READ | USER, LOC | 5 | DUZ, P3PCE |  | ORWPCE ASK ENCOUNTER UPDATE
P80 | __[ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_AUTO_VISIT_TYPE_SELECT)__ | READ | LOC | 5 | DUZ, IS-A, P3PCE |  | ORWPCE DISABLE AUTO VISIT TYPE
P81 | [ORWPCE FORCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_FORCE) | READ | USER, LOC | 5 | DUZ, LOCATION |  | ORWPCE FORCE PCE ENTRY
P82 | __[ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXCLUDED)__ | READ | LOC, TYPE | 6 | DUZ, P3PCE |  | *VARIABLE*
P83 | [ORWPCE MH TEST AUTHORIZED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_MH_TEST_AUTHORIZED) | READ | TEST, USER | 7 | DUZ |  | 
P84 | [ORWPCE MHTESTOK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_MHTESTOK) | READ | &nbsp; | 6 | DUZ, IS-A |  | PXRM MENTAL HEALTH ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P85 | __[ORWPS REASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_REASON)__ | READ | &nbsp; | 3 | P3NVAORDERS |  | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P86 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DFLTSRC) | READ | &nbsp; | 2 | DUZ |  | ORLP DEFAULT LIST SOURCE
P87 | [ORWPT SAVDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SAVDFLT) | __CHANGE__ | X | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P88 | [ORWRA DEFAULT EXAM SETTINGS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRA_DEFAULT_EXAM_SETTINGS) | READ | &nbsp; | 11 | - |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P89 | [ORWRP2 GETLKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_GETLKUP) | READ | &nbsp; | 1 | - |  | ORWRP ADHOC LOOKUP
P90 | [ORWRP2 SAVLKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_SAVLKUP) | __CHANGE__ | VAL | 4 | DUZ |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P91 | [ORWRP3 EXPAND COLUMNS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP3_EXPAND_COLUMNS) | READ | TAB | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P92 | [ORWSR GET SURG CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_GET_SURG_CONTEXT) | READ | ORUSER | 2 | - |  | ORCH CONTEXT SURGERY
P93 | [ORWSR SAVE SURG CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_SAVE_SURG_CONTEXT) | __CHANGE__ | ORCTXT | 5 | DUZ |  | ORCH CONTEXT SURGERY
P94 | __[ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_SHOW_SURG_TAB)__ | READ | &nbsp; | 3 | P1BPSEL |  | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P95 | [ORWTIU GET DCSUMM CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_DCSUMM_CONTEXT) | READ | ORUSER | 7 | DUZ |  | ORCH CONTEXT SUMMRIES
P96 | __[ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_TIU_CONTEXT)__ | READ | ORUSER | 7 | DUZ, P3PCE |  | ORCH CONTEXT NOTES
P97 | [ORWTIU SAVE DCSUMM CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_SAVE_DCSUMM_CONTEXT) | __CHANGE__ | ORCTXT | 5 | DUZ |  | ORCH CONTEXT SUMMRIES
P98 | [ORWTIU SAVE TIU CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_SAVE_TIU_CONTEXT) | __CHANGE__ | ORCTXT | 5 | DUZ |  | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P99 | [ORWTPD DELDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_DELDFLT) | __CHANGE__ | &nbsp; | 4 | DUZ |  | ORWRP TIME/OCC LIMITS ALL, ORWRP TIME/OCC LIMITS INDV
P100 | [ORWTPD GETDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_GETDFLT) | READ | &nbsp; | 3 | DUZ |  | ORWRP TIME/OCC LIMITS ALL
P101 | [ORWTPD GETOCM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_GETOCM) | READ | &nbsp; | 1 | - |  | ORCH CONTEXT MEDS
P102 | [ORWTPD PUTOCM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_PUTOCM) | __CHANGE__ | ORVAL | 5 | DUZ |  | ORCH CONTEXT MEDS
P103 | [ORWTPD RSDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_RSDFLT) | READ | &nbsp; | 2 | - |  | ORWRP TIME/OCC LIMITS ALL
P104 | [ORWTPD SUDF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_SUDF) | __CHANGE__ | VALUE | 5 | DUZ |  | ORWRP TIME/OCC LIMITS ALL
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P105 | [ORWTPD1 GETCSDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETCSDEF) | READ | &nbsp; | 8 | - |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P106 | [ORWTPD1 GETCSRNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETCSRNG) | READ | &nbsp; | 10 | DUZ |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P107 | __[ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEAFL)__ | READ | &nbsp; | 1 | P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | ORQQEAFL ENC APPT FUTURE LIMIT
P108 | __[ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEDATS)__ | READ | &nbsp; | 5 | DUZ, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
P109 | [ORWTPD1 GETEFDAT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEFDAT) | READ | &nbsp; | 7 | - |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
P110 | [ORWTPD1 PUTCSRNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_PUTCSRNG) | __CHANGE__ | INFO | 10 | DUZ |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP, ORQQLR DATE RANGE INPT, ORQQLR DATE RANGE OUTPT
P111 | [ORWTPD1 PUTEDATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_PUTEDATS) | __CHANGE__ | Y | 10 | DUZ |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P112 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_CSARNGD) | READ | &nbsp; | 2 | - |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P113 | [ORWTPO CSLABD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_CSLABD) | READ | &nbsp; | 4 | - |  | *VARIABLE*
P114 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_GETIMGD) | READ | &nbsp; | 1 | - |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P115 | [ORWTPP CHKSURR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CHKSURR) | READ | SURR | 1 | DUZ |  | 
P116 | [ORWTPP CLDAYS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CLDAYS) | READ | &nbsp; | 1 | DUZ |  | 
P117 | [ORWTPP CLRANGE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CLRANGE) | READ | &nbsp; | 1 | DUZ |  | 
P118 | [ORWTPP CSARNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CSARNG) | READ | &nbsp; | 1 | DUZ |  | 
P119 | [ORWTPP CSLAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CSLAB) | READ | &nbsp; | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P120 | __[ORWU PARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PARAM)__ | READ | APARAM | 1 | DUZ, P3PCE |  | *VARIABLE*
P121 | [ORWU PARAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PARAMS) | READ | APARAM | 1 | DUZ |  | *VARIABLE*
P122 | __[ORWU TOOLMENU](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_TOOLMENU)__ | READ | &nbsp; | 3 | DUZ, P1BPSEL |  | ORWT TOOLS MENU
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P123 | [ORWUH POPUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUH_POPUP) | READ | CTRL | 6 | - |  | ORWUH WHATSTHIS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P124 | [TIU FIELD CAN EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_CAN_EDIT) | READ | &nbsp; | 9 | DUZ, IS-A |  | TIU FIELD EDITOR CLASSES
P125 | [TIU REMINDER DIALOGS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_REMINDER_DIALOGS) | READ | &nbsp; | 7 | DUZ FOR SERVICE |  | TIU TEMPLATE REMINDER DIALOGS
P126 | __[TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_ACCESS_LEVEL)__ | READ | ROOT, USER, LOC | 24 | DUZ, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
P127 | __[TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GET_DEFAULTS)__ | READ | &nbsp; | 3 | P1BPSEL |  | TIU DEFAULT TEMPLATES
P128 | [TIU TEMPLATE PERSONAL OBJECTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_PERSONAL_OBJECTS) | READ | &nbsp; | 7 | DUZ FOR SERVICE |  | TIU TEMPLATE PERSONAL OBJECTS
P129 | __[TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_SET_DEFAULTS)__ | __CHANGE__ | SETTINGS | 3 | DUZ, P2PSEL, P3ALLERGIES, P3NVAORDERS |  | TIU DEFAULT TEMPLATES


### File Only (239)

RPCs that only access files and not parameters.

Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 11 (4.6%) | __0 (0%)__
READ | 217 (90.8%) | __55 (25.3%)__
UTILITY | 11 (4.6%) | __5 (45.5%)__





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
F1 | [GMV GET CATEGORY IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_CATEGORY_IEN) | READ | GMVCAT | 2 | IEN-LOOKUP | [120.53](http://localhost:9000/schema/120_53) | 
F2 | __[GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_VITAL_TYPE_IEN)__ | READ | GMVTYPE | 2 | IEN-LOOKUP, P3PCE, P3VITALS | [120.51](http://localhost:9000/schema/120_51) | 
F3 | __[GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_VITALS_CAT_QUAL)__ | READ | GMVLIST | 21 | P3PCE, P3VITALS, eHMP | [120.51](http://localhost:9000/schema/120_51) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F4 | [ORBCMA5 GETUDID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORBCMA5_GETUDID) | READ | INFO | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F5 | [OREVNTX ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX_ACTIVE) | READ | TYPE | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F6 | [OREVNTX1 CPACT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_CPACT) | READ | EVT | 4 | - | [100.5](http://localhost:9000/schema/100_5) | 
F7 | [OREVNTX1 DEFLTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DEFLTS) | READ | EVTID | 6 | - | [100.5](http://localhost:9000/schema/100_5) | 
F8 | [OREVNTX1 DFLTDLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DFLTDLG) | READ | EVTID | 4 | - | [100.5](http://localhost:9000/schema/100_5), [101.41](http://localhost:9000/schema/101_41) | 
F9 | [OREVNTX1 DIV1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DIV1) | READ | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
F10 | __[OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DLGIEN)__ | READ | DLGNAME | 2 | IEN-LOOKUP, P1BPSEL | [101.41](http://localhost:9000/schema/101_41) | 
F11 | [OREVNTX1 GTEVT1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_GTEVT1) | READ | EVT | 10 | - | [100.5](http://localhost:9000/schema/100_5) | 
F12 | [OREVNTX1 ISPASS1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_ISPASS1) | READ | EVTID, EVTTYPE | 3 | IS-A | [100.5](http://localhost:9000/schema/100_5) | 
F13 | [OREVNTX1 LOC1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_LOC1) | READ | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
F14 | [OREVNTX1 MULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_MULTS) | READ | EVTID | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
F15 | [OREVNTX1 PRMPTID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_PRMPTID) | READ | PRTNM | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
F16 | [OREVNTX1 PROMPT IDS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_PROMPT_IDS) | READ | IDS | 7 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F17 | __[ORIMO ISCLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISCLOC)__ | READ | ALOC | 3 | IS-A, LOCATION, P3PROBLEMS | [44](http://localhost:9000/schema/44) | 
F18 | __[ORIMO ISIVQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISIVQO)__ | READ | DLGID | 8 | IS-A, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F19 | [ORQPT PROVIDERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_PROVIDERS) | READ | &nbsp; | 5 | DUZ, XREF, XUSEC | [200](http://localhost:9000/schema/200) | 
F20 | [ORQPT SPECIALTIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_SPECIALTIES) | READ | &nbsp; | 3 | - | [45.7](http://localhost:9000/schema/45_7) | 
F21 | [ORQPT TEAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_TEAMS) | READ | &nbsp; | 6 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
F22 | [ORQPT WARDS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_WARDS) | READ | &nbsp; | 5 | LOCATION | [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F23 | [ORQQCN DEFAULT REQUEST REASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_DEFAULT_REQUEST_REASON) | READ | ORSVC, ORDFN, RESOLVE | 6 | - | [123.3](http://localhost:9000/schema/123_3), [123.5](http://localhost:9000/schema/123_5) | 
F24 | [ORQQCN EDIT DEFAULT REASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_EDIT_DEFAULT_REASON) | READ | ORSVC | 1 | - | [123.3](http://localhost:9000/schema/123_3), [123.5](http://localhost:9000/schema/123_5) | 
F25 | [ORQQCN GET PROC IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_PROC_IEN) | READ | ORDITM | 1 | - | [101.43](http://localhost:9000/schema/101_43), [123.3](http://localhost:9000/schema/123_3) | 
F26 | [ORQQCN GET PROC SVCS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_PROC_SVCS) | READ | ORDITM | 3 | XREF | [101.43](http://localhost:9000/schema/101_43), [123.3](http://localhost:9000/schema/123_3), [123.5](http://localhost:9000/schema/123_5) | 
F27 | [ORQQCN GET SERVICE IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_SERVICE_IEN) | READ | ORIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43), [123.5](http://localhost:9000/schema/123_5) | 
F28 | [ORQQCN ISPROSVC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_ISPROSVC) | READ | GMRCIEN | 1 | IS/A | [123.5](http://localhost:9000/schema/123_5) | 
F29 | [ORQQCN PROVDX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_PROVDX) | READ | ORIEN | 1 | - | [123.3](http://localhost:9000/schema/123_3), [123.5](http://localhost:9000/schema/123_5) | 
F30 | [ORQQCN STATUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_STATUS) | READ | &nbsp; | 6 | XREF | [100.01](http://localhost:9000/schema/100_01), [123.1](http://localhost:9000/schema/123_1) | 
F31 | __[ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SVC_W_SYNONYMS)__ | READ | ORSTRT, ORWHY, ORSYN, ORIEN | 12 | P3MEDOPORDERS | [101.43](http://localhost:9000/schema/101_43), [123.5](http://localhost:9000/schema/123_5) | 
F32 | [ORQQCN SVCTREE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SVCTREE) | READ | PURPOSE | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F33 | [ORQQPL CLIN FILTER LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CLIN_FILTER_LIST) | READ | INP | 5 | IEN-LOOKUP, LOCATION | [44](http://localhost:9000/schema/44) | 
F34 | [ORQQPL CLIN SRCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CLIN_SRCH) | READ | X | 4 | LOCATION | [44](http://localhost:9000/schema/44) | 
F35 | [ORQQPL PROV FILTER LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROV_FILTER_LIST) | READ | INP | 6 | DUZ | [200](http://localhost:9000/schema/200) | 
F36 | [ORQQPL PROVIDER LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROVIDER_LIST) | READ | FLAG, N, FROM, PART | 10 | DUZ | [200](http://localhost:9000/schema/200) | 
F37 | [ORQQPL SERV FILTER LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_SERV_FILTER_LIST) | READ | INP | 6 | - | [49](http://localhost:9000/schema/49) | 
F38 | [ORQQPL SRVC SRCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_SRVC_SRCH) | READ | FROM, DIR, ALL | 4 | - | [49](http://localhost:9000/schema/49) | 
F39 | __[ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_USER_PROB_CATS)__ | READ | ORDUZ, CLIN | 12 | DUZ, P3MEDOPORDERS, P3PROBLEMS, REENTRANCY | [125.1](http://localhost:9000/schema/125_1), [200](http://localhost:9000/schema/200) | 
F40 | [ORQQPL USER PROB LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_USER_PROB_LIST) | READ | GROUP | 28 | - | [125.12](http://localhost:9000/schema/125_12) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F41 | [ORQQPX GET HIST LOCATIONS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_GET_HIST_LOCATIONS) | READ | &nbsp; | 12 | LOCATION | [4](http://localhost:9000/schema/4), [9999999.06](http://localhost:9000/schema/9999999_06) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F42 | [ORQQPXRM CHECK REM VERSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_CHECK_REM_VERSION) | READ | &nbsp; | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
F43 | [ORQQPXRM DIALOG ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_DIALOG_ACTIVE) | READ | ORLIST | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9), [801.41](http://localhost:9000/schema/801_41) | 
F44 | [ORQQPXRM DIALOG PROMPTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_DIALOG_PROMPTS) | READ | ORDLG, ORDCUR, ORFTYP | 1 | - | [801.41](http://localhost:9000/schema/801_41) | 
F45 | [ORQQPXRM EDUCATION SUBTOPICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_EDUCATION_SUBTOPICS) | READ | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
F46 | [ORQQPXRM EDUCATION TOPIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_EDUCATION_TOPIC) | READ | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
F47 | [ORQQPXRM GET WH LETTER TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_GET_WH_LETTER_TEXT) | READ | WVIEN | 13 | - | [790.404](http://localhost:9000/schema/790_404) | 
F48 | [ORQQPXRM GET WH REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_GET_WH_REPORT_TEXT) | READ | ORIEN | 1 | DUZ | [790.1](http://localhost:9000/schema/790_1) | 
F49 | [ORQQPXRM MENTAL HEALTH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_MENTAL_HEALTH) | READ | OTEST | 3 | - | [601.71](http://localhost:9000/schema/601_71) | 
F50 | [ORQQPXRM REMINDER INQUIRY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_INQUIRY) | READ | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9) | 
F51 | [ORQQPXRM REMINDER WEB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_WEB) | READ | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9), [800](http://localhost:9000/schema/800) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F52 | [ORQQXMB MAIL GROUPS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQXMB_MAIL_GROUPS) | READ | &nbsp; | 6 | - | [3.8](http://localhost:9000/schema/3_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F53 | [ORWCOM DETAILS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_DETAILS) | READ | ID | 5 | - | [101.15](http://localhost:9000/schema/101_15) | 
F54 | [ORWCOM GETOBJS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_GETOBJS) | READ | &nbsp; | 9 | LIST | [101.15](http://localhost:9000/schema/101_15) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F55 | [ORWD DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_DEF) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F56 | [ORWD OI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_OI) | READ | XREF, DIR, FROM | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
F57 | [ORWD PROVKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_PROVKEY) | READ | USERID | 2 | DUZ, XUSEC | [200](http://localhost:9000/schema/200) | 
F58 | [ORWD SAVEACT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_SAVEACT) | __CHANGE__ | ORIFN, ACTION, REASON, DFN, ORNP, LOC | 35 | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F59 | __[ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_ALLERGY_MATCH)__ | READ | X | 36 | P3ALLERGIES, eHMP | [120.82](http://localhost:9000/schema/120_82) | 
F60 | __[ORWDAL32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_DEF)__ | READ | &nbsp; | 7 | HARD CODED, P3ALLERGIES | [120.84](http://localhost:9000/schema/120_84) | 
F61 | __[ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SITE_PARAMS)__ | READ | &nbsp; | 3 | P3ALLERGIES | [120.84](http://localhost:9000/schema/120_84) | 
F62 | __[ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SYMPTOMS)__ | READ | FROM, DIR | 11 | P3ALLERGIES, eHMP | [120.83](http://localhost:9000/schema/120_83) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F63 | [ORWDBA2 ADDPDL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA2_ADDPDL) | __CHANGE__ | ORCIEN, ORDXA | 28 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F64 | __[ORWDBA3 HINTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA3_HINTS)__ | READ | &nbsp; | 7 | P1BPSEL | [9.2](http://localhost:9000/schema/9_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F65 | [ORWDCN32 ORDRMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCN32_ORDRMSG) | READ | ORDITM | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F66 | [ORWDCN32 PROCEDURES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCN32_PROCEDURES) | READ | FROM, DIR | 11 | QUERY | [101](http://localhost:9000/schema/101), [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F67 | [ORWDCSLT DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCSLT_DEF) | READ | &nbsp; | 7 | HARD CODED | [101.43](http://localhost:9000/schema/101_43), [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F68 | [ORWDFH ATTR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_ATTR) | READ | OI | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F69 | [ORWDFH DIETS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_DIETS) | READ | FROM, DIR | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
F70 | [ORWDFH FINDTYP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_FINDTYP) | READ | DGRP | 2 | - | [100.98](http://localhost:9000/schema/100_98) | 
F71 | [ORWDFH ISOIEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_ISOIEN) | READ | &nbsp; | 1 | IEN-LOOKUP | [101.43](http://localhost:9000/schema/101_43) | 
F72 | [ORWDFH OPDIETS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_OPDIETS) | READ | FROM, DIR | 15 | - | [101.43](http://localhost:9000/schema/101_43), [119.9](http://localhost:9000/schema/119_9) | 
F73 | [ORWDFH QTY2CC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_QTY2CC) | READ | PRD, STR, QTY | 6 | - | [101.43](http://localhost:9000/schema/101_43) | 
F74 | [ORWDFH TFPROD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_TFPROD) | READ | &nbsp; | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F75 | [ORWDLR ABBSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR_ABBSPEC) | READ | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
F76 | [ORWDLR ALLSAMP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR_ALLSAMP) | READ | &nbsp; | 12 | - | [61](http://localhost:9000/schema/61), [62](http://localhost:9000/schema/62) | 
F77 | [ORWDLR LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR_LOAD) | READ | TESTID | 18 | - | [101.43](http://localhost:9000/schema/101_43), [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F78 | [ORWDLR32 ABBSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_ABBSPEC) | READ | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
F79 | [ORWDLR32 ALLSAMP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_ALLSAMP) | READ | &nbsp; | 15 | - | [62](http://localhost:9000/schema/62), [64.91](http://localhost:9000/schema/64_91) | 
F80 | [ORWDLR32 ALLSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_ALLSPEC) | READ | FROM, DIR | 7 | - | [61](http://localhost:9000/schema/61) | 
F81 | [ORWDLR32 IC DEFAULT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_IC_DEFAULT) | READ | &nbsp; | 1 | DUZ, LOCATION | [69.9](http://localhost:9000/schema/69_9) | 
F82 | [ORWDLR32 IC VALID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_IC_VALID) | UTILITY | ORTIME | 2 | FMUTILITY, IS-A | [69.9](http://localhost:9000/schema/69_9) | 
F83 | [ORWDLR32 LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_LOAD) | READ | TESTID | 36 | - | [101.43](http://localhost:9000/schema/101_43), [60](http://localhost:9000/schema/60), [61](http://localhost:9000/schema/61) | 
F84 | [ORWDLR32 ONE SAMPLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_ONE_SAMPLE) | READ | IEN | 11 | - | [62](http://localhost:9000/schema/62), [61](http://localhost:9000/schema/61) | 
F85 | [ORWDLR32 ONE SPECIMEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_ONE_SPECIMEN) | READ | IEN | 2 | - | [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F86 | [ORWDLR33 LASTTIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR33_LASTTIME) | UTILITY | &nbsp; | 5 | REENTRANCY | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F87 | [ORWDOR LKSCRN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDOR_LKSCRN) | READ | FROM, DIR, REF, GBL, SCR | 9 | QUERY | [101.41](http://localhost:9000/schema/101_41) | 
F88 | [ORWDOR VMSLCT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDOR_VMSLCT) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F89 | [ORWDPS1 DFLTSPLY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_DFLTSPLY) | UTILITY | UPD, SCH, PAT, DRG, OI | 12 | FMUTILITY, eHMP | [101.43](http://localhost:9000/schema/101_43) | 
F90 | [ORWDPS1 DOSEALT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_DOSEALT) | READ | DDRUG, CUROI, PSTYPE | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
F91 | __[ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_FAILDEA)__ | UTILITY | OI, ORNP, PSTYPE | 13 | DUZ, FMUTILITY, IS-A, P3MEDOPORDERS | [101.43](http://localhost:9000/schema/101_43) | 
F92 | [ORWDPS1 FORMALT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_FORMALT) | READ | ORIEN, PSTYPE | 7 | - | [101.43](http://localhost:9000/schema/101_43) | 
F93 | [ORWDPS1 HASOIPI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_HASOIPI) | READ | QOID | 9 | - | [101.41](http://localhost:9000/schema/101_41) | 
F94 | [ORWDPS1 HASROUTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_HASROUTE) | READ | QOID | 6 | - | [101.41](http://localhost:9000/schema/101_41) | 
F95 | [ORWDPS1 IVDEA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_IVDEA) | READ | OI, OITYPE, ORNP | 13 | DUZ | [101.43](http://localhost:9000/schema/101_43), [200](http://localhost:9000/schema/200) | 
F96 | __[ORWDPS1 ODSLCT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_ODSLCT)__ | READ | PSTYPE, DFN, LOC | 11 | P3MEDOPORDERS | [101.42](http://localhost:9000/schema/101_42) | 
F97 | [ORWDPS1 QOMEDALT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_QOMEDALT) | READ | ODIEN | 7 | - | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43), [9.4](http://localhost:9000/schema/9_4) | 
F98 | __[ORWDPS1 SCHALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_SCHALL)__ | READ | DFN, LOCIEN | 6 | LOCATION, P3MEDOPORDERS, P3NVAORDERS | [51.1](http://localhost:9000/schema/51_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F99 | __[ORWDPS2 OISLCT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_OISLCT)__ | READ | OI, PSTYPE, ORVP, NEEDPI, PKIACTIV | 42 | HARD CODED, P3MEDOPORDERS, P3NVAORDERS, eHMP | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
F100 | __[ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_QOGRP)__ | READ | QOIFN | 16 | P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F101 | [ORWDPS32 ALLIVRTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_ALLIVRTE) | READ | &nbsp; | 10 | - | [51.2](http://localhost:9000/schema/51_2) | 
F102 | [ORWDPS32 ALLROUTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_ALLROUTE) | READ | &nbsp; | 7 | - | [51.2](http://localhost:9000/schema/51_2) | 
F103 | [ORWDPS32 DOSES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_DOSES) | READ | OI | 13 | - | [101.43](http://localhost:9000/schema/101_43) | 
F104 | [ORWDPS32 DRUGMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_DRUGMSG) | READ | IEN | 2 | - | [50](http://localhost:9000/schema/50) | 
F105 | [ORWDPS32 FORMALT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_FORMALT) | READ | IEN, PSTYPE | 4 | - | [101.43](http://localhost:9000/schema/101_43) | 
F106 | [ORWDPS32 ISSPLY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_ISSPLY) | READ | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
F107 | [ORWDPS32 IVAMT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_IVAMT) | READ | OI, ORWTYP | 12 | - | [101.43](http://localhost:9000/schema/101_43) | 
F108 | [ORWDPS32 MEDISIV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_MEDISIV) | READ | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
F109 | [ORWDPS32 OISLCT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_OISLCT) | READ | OI, PSTYPE, ORVP | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
F110 | __[ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALROUTE)__ | UTILITY | X | 14 | P3MEDOPORDERS | [51.2](http://localhost:9000/schema/51_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F111 | [ORWDPS33 GETADDFR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS33_GETADDFR) | READ | OIIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F112 | __[ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS5_LESGRP)__ | READ | ORLES | 8 | HARD CODED, P3MEDOPORDERS | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F113 | [ORWDRA32 APPROVAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_APPROVAL) | READ | DUMMY | 7 | DUZ, QUERY | [200](http://localhost:9000/schema/200) | 
F114 | [ORWDRA32 IMTYPSEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_IMTYPSEL) | READ | DUMMY | 9 | - | [100.98](http://localhost:9000/schema/100_98), [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43), [79.2](http://localhost:9000/schema/79_2), [79.3](http://localhost:9000/schema/79_3) | 
F115 | __[ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_LOCTYPE)__ | READ | ORLOC | 4 | LOCATION, P3MEDOPORDERS | [44](http://localhost:9000/schema/44) | 
F116 | [ORWDRA32 PROCMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_PROCMSG) | READ | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F117 | [ORWDRA32 RADSRC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_RADSRC) | READ | SRCTYPE | 5 | - | [34](http://localhost:9000/schema/34) | 
F118 | [ORWDRA32 RAORDITM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_RAORDITM) | READ | FROM, DIR, IMGTYP | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F119 | __[ORWDX AGAIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_AGAIN)__ | READ | DLG | 1 | GUI, IS-A, P3MEDOPORDERS, P3NVAORDERS | [101.41](http://localhost:9000/schema/101_41) | 
F120 | __[ORWDX DGNM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DGNM)__ | READ | NM | 1 | IEN-LOOKUP, P1BPSEL, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98) | 
F121 | [ORWDX DGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DGRP) | READ | DLG | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
F122 | [ORWDX DISMSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DISMSG) | READ | IEN | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
F123 | __[ORWDX DLGDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DLGDEF)__ | READ | DLG | 1 | P3MEDOPORDERS, P3NVAORDERS, eHMP | [101.41](http://localhost:9000/schema/101_41) | 
F124 | [ORWDX MSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_MSG) | READ | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F125 | [ORWDX ORDITM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_ORDITM) | READ | FROM, DIR, XREF, QOCALL | 12 | QUERY | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F126 | __[ORWDXA ISACTOI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_ISACTOI)__ | READ | OI | 2 | IS-A, P3MEDOPORDERS, P3NVAORDERS | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F127 | [ORWDXC FILLID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_FILLID) | READ | DLG | 8 | - | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F128 | [ORWDXM DLGNAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_DLGNAME) | READ | DLG | 7 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
F129 | __[ORWDXM FORMID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_FORMID)__ | READ | DLG | 7 | ONEFIELD, P1BPSEL | [101.41](http://localhost:9000/schema/101_41), [9.4](http://localhost:9000/schema/9_4) | 
F130 | [ORWDXM LOADSET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_LOADSET) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F131 | [ORWDXM MENU](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_MENU) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F132 | [ORWDXM PROMPTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_PROMPTS) | READ | DLG | 19 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F133 | __[ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM3_ISUDQO)__ | READ | DLGID | 11 | COMPUTED, IS-A, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F134 | [ORWDXQ DLGNAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_DLGNAME) | READ | INAME | 2 | - | [101.41](http://localhost:9000/schema/101_41) | 
F135 | [ORWDXQ DLGSAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_DLGSAVE) | __CHANGE__ | CRC, DNAME, DGRP, RSP | 8 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F136 | __[ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_ISSPLY)__ | READ | DLGID, QODLG | 6 | IS-A, P3MEDOPORDERS | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F137 | [ORWDXVB SUBCHK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_SUBCHK) | READ | TSTNM | 4 | COMPUTED | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F138 | [ORWGRPC RPTPARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_RPTPARAM) | READ | IEN | 1 | - | [101.24](http://localhost:9000/schema/101_24) | 
F139 | __[ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TESTSPEC)__ | READ | &nbsp; | 2 | P1BPSEL | [60](http://localhost:9000/schema/60) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F140 | [ORWLRR ALLTESTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_ALLTESTS) | READ | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
F141 | [ORWLRR ATESTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_ATESTS) | READ | TEST | 1 | - | [60](http://localhost:9000/schema/60) | 
F142 | [ORWLRR ATG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_ATG) | READ | TESTGP, USER | 1 | DUZ, DUZ TO K/META | [60](http://localhost:9000/schema/60), [69.2](http://localhost:9000/schema/69_2), [68](http://localhost:9000/schema/68) | 
F143 | [ORWLRR ATOMICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_ATOMICS) | READ | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
F144 | [ORWLRR CHEMTEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_CHEMTEST) | READ | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
F145 | [ORWLRR INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_INFO) | READ | ORTEST | 2 | - | [60](http://localhost:9000/schema/60) | 
F146 | [ORWLRR PARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_PARAM) | READ | &nbsp; | 1 | - | [69.9](http://localhost:9000/schema/69_9) | 
F147 | [ORWLRR SPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_SPEC) | READ | FROM, DIR | 1 | - | [61](http://localhost:9000/schema/61) | 
F148 | [ORWLRR USERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_USERS) | READ | FROM, DIR | 1 | DUZ, QUERY | [68](http://localhost:9000/schema/68) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F149 | [ORWNSS QOSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWNSS_QOSCH) | READ | QOID | 13 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F150 | __[ORWOR PKISITE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_PKISITE)__ | READ | &nbsp; | 7 | LOCATION, P3MEDOPORDERS, P3NVAORDERS | [100.7](http://localhost:9000/schema/100_7) | 
F151 | [ORWOR PKIUSE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_PKIUSE) | READ | &nbsp; | 4 | DUZ | [100.7](http://localhost:9000/schema/100_7) | 
F152 | [ORWOR TSALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_TSALL) | READ | &nbsp; | 2 | - | [45.7](http://localhost:9000/schema/45_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F153 | [ORWORDG ALLTREE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_ALLTREE) | READ | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
F154 | __[ORWORDG IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_IEN)__ | READ | X | 2 | IEN-LOOKUP, P1BPSEL, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F155 | __[ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EDUCATION_TOPICS)__ | READ | &nbsp; | 2 | P3PCE, QUERY | [9999999.09](http://localhost:9000/schema/9999999_09) | 
F156 | __[ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXAM_TYPE)__ | READ | &nbsp; | 2 | P3PCE, QUERY | [9999999.15](http://localhost:9000/schema/9999999_15) | 
F157 | __[ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_HEALTH_FACTORS_TY)__ | READ | ADDCATS | 10 | P3PCE, QUERY | [9999999.64](http://localhost:9000/schema/9999999_64) | 
F158 | __[ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_IMMUNIZATION_TYPE)__ | READ | ORDT | 5 | P3PCE, QUERY | [9999999.14](http://localhost:9000/schema/9999999_14) | 
F159 | __[ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SKIN_TEST_TYPE)__ | READ | ORDT | 5 | P3PCE, QUERY | [9999999.28](http://localhost:9000/schema/9999999_28) | 
F160 | [ORWPCE GET TREATMENT TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_TREATMENT_TYPE) | READ | &nbsp; | 2 | QUERY | [9999999.17](http://localhost:9000/schema/9999999_17) | 
F161 | __[ORWPCE GETSVC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GETSVC)__ | UTILITY | SVC, LOC, INP | 5 | LOCATION, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS, eHMP | [150.1](http://localhost:9000/schema/150_1), [40.7](http://localhost:9000/schema/40_7), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F162 | __[ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE1_NONCOUNT)__ | READ | ORLOC | 3 | IS-A, LOCATION, P3PCE | [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F163 | [ORWPS1 PICKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS1_PICKUP) | READ | &nbsp; | 2 | - | [550](http://localhost:9000/schema/550) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F164 | [ORWRP2 HS COMP FILES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_COMP_FILES) | READ | ORCOMP | 1 | - | [142.5](http://localhost:9000/schema/142_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F165 | [ORWTPD GETIMG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_GETIMG) | UTILITY | RPT | 10 | - | [101.24](http://localhost:9000/schema/101_24) | 
F166 | [ORWTPD GETSETS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_GETSETS) | READ | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F167 | [ORWTPN GETCLASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPN_GETCLASS) | READ | &nbsp; | 8 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F168 | [ORWTPN GETTC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPN_GETTC) | READ | CLASS, FROM, DIR | 12 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F169 | [ORWTPO GETTABS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_GETTABS) | READ | &nbsp; | 2 | FILES | [8989.51](http://localhost:9000/schema/8989_51) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F170 | [ORWTPP ADDLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_ADDLIST) | __CHANGE__ | VALUE | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
F171 | [ORWTPP CLEARNOT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_CLEARNOT) | __CHANGE__ | &nbsp; | 1 | DUZ | [8992.1](http://localhost:9000/schema/8992_1) | 
F172 | [ORWTPP DELLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_DELLIST) | READ | LISTNUM | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
F173 | [ORWTPP PLISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_PLISTS) | READ | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
F174 | [ORWTPP PLTEAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_PLTEAMS) | READ | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F175 | [ORWTPR NOTDESC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPR_NOTDESC) | READ | IEN | 7 | - | [100.9](http://localhost:9000/schema/100_9) | 
F176 | [ORWTPR OCDESC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPR_OCDESC) | READ | IEN | 9 | - | [100.8](http://localhost:9000/schema/100_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F177 | [ORWTPT GETTEAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPT_GETTEAM) | READ | TEAM | 7 | DUZ | [100.21](http://localhost:9000/schema/100_21), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F178 | __[ORWU CLINLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_CLINLOC)__ | READ | FROM, DIR | 5 | LOCATION, P3PROBLEMS | [44](http://localhost:9000/schema/44) | 
F179 | __[ORWU EXTNAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_EXTNAME)__ | UTILITY | IEN, FN | 2 | FMUTILITY, P3PCE | [1](http://localhost:9000/schema/1) | 
F180 | [ORWU HOSPLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_HOSPLOC) | READ | FROM, DIR | 5 | LOCATION | [44](http://localhost:9000/schema/44) | 
F181 | [ORWU INPLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_INPLOC) | READ | FROM, DIR | 6 | LOCATION | [44](http://localhost:9000/schema/44) | 
F182 | __[ORWU PATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PATCH)__ | READ | X | 1 | IS-A, P2PSEL, P3PCE | [9.4](http://localhost:9000/schema/9_4) | 
F183 | __[ORWU VALIDSIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALIDSIG)__ | UTILITY | X | 3 | DUZ, P3MEDOPORDERS, P3PCE, eHMP | [200](http://localhost:9000/schema/200) | 
F184 | [ORWU VERSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VERSION) | READ | X | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
F185 | __[ORWU VERSRV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VERSRV)__ | READ | X, CLVER | 12 | P1BPSEL, VERSION | [19](http://localhost:9000/schema/19) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F186 | __[ORWU1 NEWLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU1_NEWLOC)__ | READ | ORFROM, DIR | 6 | LOCATION, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS | [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F187 | [ORWU16 DEVICE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_DEVICE) | READ | &nbsp; | 5 | LIST | [3.5](http://localhost:9000/schema/3_5) | 
F188 | [ORWU16 HOSPLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_HOSPLOC) | READ | DIR, FROM | 10 | LOCATION, QUERY | [44](http://localhost:9000/schema/44) | 
F189 | [ORWU16 NEWPERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_NEWPERS) | READ | DIR, FROM, KEY | 10 | DUZ, QUERY | [200](http://localhost:9000/schema/200) | 
F190 | [ORWU16 VALIDSIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_VALIDSIG) | UTILITY | X | 3 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F191 | __[ORWUL FV4DG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_FV4DG)__ | READ | DGNM | 17 | GUI, P3MEDOPORDERS, P3NVAORDERS, QUERY, eHMP | [101.43](http://localhost:9000/schema/101_43), [101.44](http://localhost:9000/schema/101_44) | 
F192 | [ORWUL FVIDX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_FVIDX) | READ | IEN, FROM | 7 | GUI, QUERY, REENTRANCY, eHMP | [101.44](http://localhost:9000/schema/101_44) | 
F193 | __[ORWUL FVSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_FVSUB)__ | READ | IEN, FIRST, LAST | 6 | GUI, P3MEDOPORDERS, P3NVAORDERS, QUERY, eHMP | [101.44](http://localhost:9000/schema/101_44) | 
F194 | [ORWUL QVIDX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_QVIDX) | READ | IEN, FROM | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
F195 | [ORWUL QVSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_QVSUB) | READ | IEN, FIRST, LAST | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F196 | [PXRM REMINDER CATEGORY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/PXRM_REMINDER_CATEGORY) | READ | CIEN | 30 | - | [811.7](http://localhost:9000/schema/811_7), [811.9](http://localhost:9000/schema/811_9) | 
F197 | [PXRM REMINDERS AND CATEGORIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/PXRM_REMINDERS_AND_CATEGORIES) | READ | &nbsp; | 17 | QUERY | [811.7](http://localhost:9000/schema/811_7), [811.9](http://localhost:9000/schema/811_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F198 | __[TIU AUTHORIZATION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_AUTHORIZATION)__ | READ | TIUDA, TIUACT | 8 | DUZ, IS-A, P3PCE, eHMP | [8925](http://localhost:9000/schema/8925) | 
F199 | [TIU DIV AND CLASS INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_DIV_AND_CLASS_INFO) | READ | USER | 13 | DUZ | [200](http://localhost:9000/schema/200), [8930](http://localhost:9000/schema/8930) | 
F200 | [TIU FIELD DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_DELETE) | __CHANGE__ | TIUDA | 5 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
F201 | [TIU FIELD EXPORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_EXPORT) | READ | FLDS | 8 | XML | [8927.1](http://localhost:9000/schema/8927_1) | 
F202 | [TIU FIELD LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LIST) | READ | FROM, DIR | 9 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
F203 | [TIU FIELD LIST IMPORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LIST_IMPORT) | __CHANGE__ | &nbsp; | 2 | REENTRANCY | [8927.1](http://localhost:9000/schema/8927_1) | 
F204 | [TIU FIELD NAME IS UNIQUE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_NAME_IS_UNIQUE) | READ | NAME, IEN | 4 | IS-A | [8927.1](http://localhost:9000/schema/8927_1) | 
F205 | [TIU FIELD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_SAVE) | __CHANGE__ | TIUDA, TIUX | 24 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
F206 | [TIU GET BOILERPLATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_BOILERPLATE) | READ | IEN | 6 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F207 | __[TIU GET DEFAULT PROVIDER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DEFAULT_PROVIDER)__ | READ | HLOC, USER, TIUDT, TIUIEN | 7 | DUZ, P3PCE | [8925](http://localhost:9000/schema/8925) | 
F208 | [TIU GET DS TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DS_TITLES) | READ | &nbsp; | 1 | DUZ, DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98), [8925.1](http://localhost:9000/schema/8925_1) | 
F209 | [TIU GET LIST OF OBJECTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_LIST_OF_OBJECTS) | READ | &nbsp; | 6 | DUZ | [8925.1](http://localhost:9000/schema/8925_1) | 
F210 | [TIU GET PN TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PN_TITLES) | READ | &nbsp; | 1 | DUZ, DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98), [8925.1](http://localhost:9000/schema/8925_1) | 
F211 | __[TIU ID CAN ATTACH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ID_CAN_ATTACH)__ | READ | TIUDA | 15 | IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
F212 | __[TIU ISPRF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ISPRF)__ | READ | TIUDA | 7 | IEN-LOOKUP, IS-A, P3PCE | [8925.1](http://localhost:9000/schema/8925_1) | 
F213 | __[TIU LOAD BOILERPLATE TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LOAD_BOILERPLATE_TEXT)__ | READ | TITLE, DFN, VSTR | 3 | ASSEMBLY, DUZ, P3PCE | [8925.1](http://localhost:9000/schema/8925_1) | 
F214 | [TIU LONG LIST BOILERPLATED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_BOILERPLATED) | READ | FROM, DIR | 12 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F215 | [TIU LONG LIST CLINPROC TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_CLINPROC_TITLES) | READ | FROM, DIR | 5 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F216 | [TIU LONG LIST CONSULT TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_CONSULT_TITLES) | READ | FROM, DIR | 2 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F217 | __[TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_OF_TITLES)__ | READ | CLASS, FROM, DIR, IDNOTE | 7 | LIST, P3PCE | [8925.1](http://localhost:9000/schema/8925_1) | 
F218 | [TIU LONG LIST SURGERY TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_SURGERY_TITLES) | READ | FROM, DIR, CLNAME | 3 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F219 | __[TIU PERSONAL TITLE LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_PERSONAL_TITLE_LIST)__ | READ | DUZ, CLASS, TIUC, TIUFLG | 25 | DUZ, DUZ TO K/META, P3PCE | [8925.1](http://localhost:9000/schema/8925_1), [8925.98](http://localhost:9000/schema/8925_98) | 
F220 | __[TIU REQUIRES COSIGNATURE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_REQUIRES_COSIGNATURE)__ | READ | TIUTYP, TIUDA, TIUSER, TIUDT | 6 | DUZ, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
F221 | [TIU TEMPLATE ALL TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_ALL_TITLES) | READ | FROM, DIR | 10 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F222 | [TIU TEMPLATE CHECK BOILERPLATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_CHECK_BOILERPLATE) | UTILITY | TIUX | 45 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F223 | [TIU TEMPLATE DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_DELETE) | __CHANGE__ | TIUDA | 10 | - | [8927](http://localhost:9000/schema/8927) | 
F224 | [TIU TEMPLATE GET DESCRIPTION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GET_DESCRIPTION) | READ | TIUDA | 4 | - | [8927](http://localhost:9000/schema/8927) | 
F225 | [TIU TEMPLATE GETBOIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETBOIL) | READ | TIUDA | 9 | - | [8927](http://localhost:9000/schema/8927) | 
F226 | [TIU TEMPLATE GETITEMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETITEMS) | READ | TIUDA | 10 | - | [8927](http://localhost:9000/schema/8927) | 
F227 | __[TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETLINK)__ | READ | LINK | 3 | P3PCE | [8927](http://localhost:9000/schema/8927) | 
F228 | [TIU TEMPLATE GETPROOT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETPROOT) | READ | USER | 2 | - | [8927](http://localhost:9000/schema/8927) | 
F229 | __[TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETROOTS)__ | READ | USER | 4 | P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS | [8927](http://localhost:9000/schema/8927) | 
F230 | [TIU TEMPLATE ISEDITOR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_ISEDITOR) | READ | ROOT, USER | 6 | - | [8927](http://localhost:9000/schema/8927) | 
F231 | [TIU TEMPLATE LISTOWNR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_LISTOWNR) | READ | TIUFROM, DIR | 12 | - | [8927](http://localhost:9000/schema/8927) | 
F232 | [TIU USER CLASS LONG LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_USER_CLASS_LONG_LIST) | READ | FROM, DIR | 4 | - | [8930](http://localhost:9000/schema/8930) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F233 | __[XUS DIVISION GET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_DIVISION_GET)__ | READ | IEN | 7 | DUZ, P1BPSEL | [200](http://localhost:9000/schema/200) | 
F234 | [XUS DIVISION SET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_DIVISION_SET) | __CHANGE__ | DIV | 6 | DUZ | [200](http://localhost:9000/schema/200) | 
F235 | __[XUS GET USER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_GET_USER_INFO)__ | READ | &nbsp; | 14 | DUZ, P1BPSEL | [200](http://localhost:9000/schema/200), [3.1](http://localhost:9000/schema/3_1), [49](http://localhost:9000/schema/49) | 
F236 | __[XUS INTRO MSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_INTRO_MSG)__ | READ | &nbsp; | 1 | P1BPSEL | [8993.3](http://localhost:9000/schema/8993_3) | 
F237 | __[XUS PKI GET UPN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_PKI_GET_UPN)__ | READ | &nbsp; | 1 | DUZ, P1BPSEL | [200](http://localhost:9000/schema/200) | 
F238 | [XUS PKI SET UPN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_PKI_SET_UPN) | __CHANGE__ | V | 3 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F239 | __[XWB GET BROKER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_GET_BROKER_INFO)__ | READ | &nbsp; | 1 | P1BPSEL | [8989.3](http://localhost:9000/schema/8989_3) | 


### Parameter and File (33)

RPCs that access parameters and files.

Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 5 (15.2%) | __0 (0%)__
READ | 26 (78.8%) | __10 (38.5%)__
UTILITY | 2 (6.1%) | __0 (0%)__





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
PF1 | [OREVNTX1 CMEVTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_CMEVTS) | READ | CLOC | 10 | DUZ, LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
PF2 | [OREVNTX1 SETDFLT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_SETDFLT) | __CHANGE__ | EVT | 5 | DUZ | [100.5](http://localhost:9000/schema/100_5) | OREVNT DEFAULT
PF3 | [OREVNTX1 WRLSTED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_WRLSTED) | READ | LOC, EVTID | &nbsp; | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF4 | __[ORQQPL INIT USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_USER)__ | READ | ORDUZ | 29 | DUZ, P3MEDOPORDERS, P3PCE, P3PROBLEMS, REENTRANCY | [125.99](http://localhost:9000/schema/125_99) | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES
PF5 | [ORQQPL SAVEVIEW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_SAVEVIEW) | __CHANGE__ | GMPLVIEW | 8 | DUZ | [200](http://localhost:9000/schema/200) | ORCH CONTEXT PROBLEMS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF6 | __[ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV1_COVERSHEET_LIST)__ | READ | &nbsp; | 11 | P2PSEL, P3VITALS | [101.24](http://localhost:9000/schema/101_24), [8994](http://localhost:9000/schema/8994) | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF7 | __[ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_BASTATUS)__ | READ | &nbsp; | 3 | P1BPSEL, P2PSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS | [9.7](http://localhost:9000/schema/9_7) | OR BILLING AWARENESS STATUS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF8 | [ORWDCN32 NEWDLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCN32_NEWDLG) | READ | ORTYPE, ORLOC | 9 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW CONSULT, ORWDX NEW PROCEDURE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF9 | [ORWDGX LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDGX_LOAD) | READ | PAR | 15 | - | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | *VARIABLE*
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF10 | [ORWDLR32 GET LAB TIMES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_GET_LAB_TIMES) | READ | ORDATE, ORLOC | 17 | - | [40.5](http://localhost:9000/schema/40_5) | *VARIABLE*, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
PF11 | [ORWDLR32 LAB COLL TIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_LAB_COLL_TIME) | UTILITY | ORDATE, ORLOC | 13 | IS-A | [40.5](http://localhost:9000/schema/40_5) | *VARIABLE*, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF12 | [ORWDLR33 FUTURE LAB COLLECTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR33_FUTURE_LAB_COLLECTS) | READ | ORLOC, ORDIV | 4 | LOCATION | [8989.51](http://localhost:9000/schema/8989_51) | LR LAB COLLECT FUTURE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF13 | [ORWDRA DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA_DEF) | READ | PATID | 9 | HARD CODED | [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43) | RA SUBMIT PROMPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF14 | __[ORWDX WRLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_WRLST)__ | READ | LOC | 1 | GUI, LOCATION, P3MEDOPORDERS, P3NVAORDERS | [101.41](http://localhost:9000/schema/101_41) | ORWOR WRITE ORDERS LIST, ORWDX WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF15 | __[ORWDX2 DCREASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX2_DCREASON)__ | READ | &nbsp; | 15 | P3MEDOPORDERS, P3NVAORDERS, QUERY, eHMP | [100.02](http://localhost:9000/schema/100_02), [100.03](http://localhost:9000/schema/100_03), [9.4](http://localhost:9000/schema/9_4) | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF16 | [ORWDXQ GETQLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_GETQLST) | READ | DGRP, PRE | 7 | - | [101.41](http://localhost:9000/schema/101_41), [101.44](http://localhost:9000/schema/101_44) | ORWDQ QUICK VIEW
PF17 | [ORWDXQ GETQNAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_GETQNAM) | READ | CRC | 4 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF18 | [ORWDXVB COMPORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_COMPORD) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS COMPONENT ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF19 | [ORWDXVB3 DIAGORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_DIAGORD) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS DIAGNOSTIC TEST ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF20 | [ORWGRPC GETDATES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETDATES) | UTILITY | REPORTID | 2 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF21 | __[ORWOR VWGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_VWGET)__ | READ | &nbsp; | 19 | GUI, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
PF22 | [ORWOR VWSET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_VWSET) | __CHANGE__ | VIEW | 5 | DUZ | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF23 | [ORWORDG GRPSEQB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_GRPSEQB) | READ | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | ORWOR CATEGORY SEQUENCE
PF24 | __[ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_MAPSEQ)__ | READ | &nbsp; | 4 | GUI, P3MEDOPORDERS, P3NVAORDERS | [100.98](http://localhost:9000/schema/100_98) | ORWOR CATEGORY SEQUENCE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF25 | [ORWPS1 NEWDLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS1_NEWDLG) | READ | INPAT | 6 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW MED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF26 | [ORWRP COLUMN HEADERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_COLUMN_HEADERS) | READ | IFN | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWCH COLUMNS REPORTS
PF27 | [ORWRP LAB REPORT LISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_LAB_REPORT_LISTS) | READ | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP REPORT LAB LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF28 | [ORWTPD ACTDF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_ACTDF) | __CHANGE__ | &nbsp; | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS ALL
PF29 | [ORWTPD SUINDV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD_SUINDV) | __CHANGE__ | RPTS, VALUE | 7 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF30 | __[ORWU USERINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_USERINFO)__ | READ | &nbsp; | 56 | DUZ, P1BPSEL | [101.13](http://localhost:9000/schema/101_13) | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF31 | __[ORWUL QV4DG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_QV4DG)__ | READ | DGRP | 6 | P3MEDOPORDERS, P3NVAORDERS, QUERY | [100.98](http://localhost:9000/schema/100_98) | ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF32 | [TIU REM DLG OK AS TEMPLATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_REM_DLG_OK_AS_TEMPLATE) | READ | TIUIEN | 15 | DUZ FOR SERVICE, IS-A | [801.41](http://localhost:9000/schema/801_41) | TIU TEMPLATE REMINDER DIALOGS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF33 | __[ORWDPS32 AUTH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_AUTH)__ | READ | PRV, ORDLOG | 12 | DUZ, P3MEDOPORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | OR OREMAS MED ORDERS


### Other (161)

All other RPCs - don't access parameters or files. __Careful__ - in many cases these RPCs do use PARAMETERS/FILES but their definitions don't note that and so they end up (for now) in this table.

Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 16 (9.9%) | __0 (0%)__
READ | 107 (66.5%) | __22 (20.6%)__
UTILITY | 38 (23.6%) | __10 (26.3%)__





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
O1 | [GMV CONVERT DATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CONVERT_DATE) | UTILITY | GMRDATE | 4 | ALLJS, HARD CODED, RPCEMULATOR |  | 
O2 | __[GMV GET CURRENT TIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_CURRENT_TIME)__ | UTILITY | P2 | 2 | ALLJS, HARD CODED, P3PCE, P3VITALS, RPCEMULATOR |  | 
O3 | [GMV LOCATION SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LOCATION_SELECT) | UTILITY | OPTION, DATA | 4 | DYNAMIC EXECUTE |  | 
O4 | __[GMV MANAGER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MANAGER)__ | UTILITY | OPTION, DATA | 5 | DYNAMIC EXECUTE, P3PCE, P3VITALS, SECURITY HOLE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O5 | __[ORDEA CSVALUE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_CSVALUE)__ | READ | ORID | 12 | P3MEDOPORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O6 | [ORECS01 GETDIV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORECS01_GETDIV) | READ | USR | 2 | GLOBAL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O7 | [OREVNTX1 GETDLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_GETDLG) | READ | DLGID | 8 | - |  | 
O8 | [OREVNTX1 TYPEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_TYPEXT) | READ | DFN, EVT | 2 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O9 | [ORQ NULL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQ_NULL_LIST) | UTILITY | &nbsp; | 2 | ALLJS, HARD CODED, RPCEMULATOR |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O10 | [ORQPT KILL RPL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_KILL_RPL) | UTILITY | ORJ | 6 | HARD CODED, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O11 | [ORQQCN SVCLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SVCLIST) | READ | FROM, DIR | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O12 | [ORQQPL PROBLEM LEX SEARCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LEX_SEARCH) | READ | FROM, N, VIEW, ORDATE | 62 | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O13 | __[ORQQPL4 LEX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL4_LEX)__ | READ | X, VIEW, ORDATE, ORINCSYN | 25 | LEXICON, P3PROBLEMS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O14 | [ORQQPXRM EDUCATION SUMMARY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_EDUCATION_SUMMARY) | READ | OREM | &nbsp; | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O15 | [ORQQVI2 VITALS HELP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI2_VITALS_HELP) | READ | ORQTYPE | 1 | HARD CODED, UNSTRUCTURED READ |  | 
O16 | [ORQQVI2 VITALS RATE CHECK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI2_VITALS_RATE_CHECK) | UTILITY | ORQTYPE, ORQRATE, ORQUNIT | 1 | HARD CODED, IS-A |  | 
O17 | [ORQQVI2 VITALS VALIDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI2_VITALS_VALIDATE) | UTILITY | ORQDATA | 6 | DUZ, EXTERNAL I/F, HARD CODED, IS-A |  | 
O18 | [ORQQVI2 VITALS VALIDATE TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI2_VITALS_VALIDATE_TYPE) | UTILITY | ORQTYPE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O19 | [ORWD DT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_DT) | UTILITY | X | 1 | HARD CODED |  | 
O20 | [ORWD KEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_KEY) | READ | KEYNAME, USERID | 1 | DUZ, XUSEC |  | 
O21 | [ORWD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_SAVE) | __CHANGE__ | DFN, ORNP, LOC, DLG, ORWDACT, RSP | 12 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O22 | [ORWDBA2 DELPDL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA2_DELPDL) | __CHANGE__ | ORCIEN, ORDXA | 9 | DUZ |  | 
O23 | [ORWDBA2 GETPDL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA2_GETPDL) | READ | ORCIEN | 14 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O24 | [ORWDBA7 GETIEN9](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA7_GETIEN9) | READ | ICD9 | 1 | IEN-LOOKUP |  | 
O25 | [ORWDBA7 ISWITCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA7_ISWITCH) | READ | DFN | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O26 | [ORWDCSLT LOOK200](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCSLT_LOOK200) | READ | X | 2 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O27 | [ORWDFH NFSLOC READY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_NFSLOC_READY) | READ | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O28 | [ORWDGX VMDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDGX_VMDEF) | READ | &nbsp; | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O29 | [ORWDLR STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR_STOP) | UTILITY | X2 | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O30 | [ORWDLR32 IMMED COLLECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_IMMED_COLLECT) | READ | &nbsp; | 1 | DUZ, LOCATION, UNSTRUCTURED READ |  | 
O31 | [ORWDLR32 STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDLR32_STOP) | UTILITY | X2 | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O32 | [ORWDOR VALNUM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDOR_VALNUM) | UTILITY | X, DOM | 9 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O33 | __[ORWDPS2 DAY2QTY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_DAY2QTY)__ | UTILITY | DAY, UPD, SCH, DUR, PAT, DRG | 15 | HARD CODED, P3MEDOPORDERS, eHMP |  | 
O34 | [ORWDPS2 SCHREQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_SCHREQ) | READ | OI, RTE, DRG | 3 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O35 | [ORWDPS32 DLGSLCT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_DLGSLCT) | READ | PSTYPE, DFN, LOCIEN | 11 | - |  | 
O36 | __[ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALQTY)__ | UTILITY | X | 2 | HARD CODED, IS-A, P3MEDOPORDERS |  | 
O37 | [ORWDPS32 VALRATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALRATE) | UTILITY | X | 3 | HARD CODED, IS-A |  | 
O38 | __[ORWDPS32 VALSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALSCH)__ | UTILITY | X, PSTYPE | 8 | HARD CODED, IS-A, P3MEDOPORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O39 | [ORWDRA32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_DEF) | READ | PATID, EVTDIV, IMGTYP | 10 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O40 | __[ORWDX LOADRSP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOADRSP)__ | READ | RSPID, TRANS | 9 | P3MEDOPORDERS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O41 | [ORWDXQ PUTQNAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXQ_PUTQNAM) | __CHANGE__ | DLG, QNAM | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O42 | [ORWGN IDTVALID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGN_IDTVALID) | READ | CSYS | 3 | - |  | 
O43 | [ORWGN MAXFRQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGN_MAXFRQ) | READ | ORTRM | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O44 | [ORWGRPC CLASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_CLASS) | READ | TYPE | 2 | - |  | 
O45 | [ORWGRPC TAX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TAX) | READ | ALL, REMTAX | 2 | - |  | 
O46 | [ORWGRPC TESTING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TESTING) | UTILITY | &nbsp; | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O47 | __[ORWLEX GETFREQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLEX_GETFREQ)__ | UTILITY | ORSRCHTX | 2 | HARD CODED, P3PCE, P3PROBLEMS |  | 
O48 | __[ORWLEX GETI10DX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLEX_GETI10DX)__ | UTILITY | ORX, ORDT | 32 | FMUTILITY, P3PCE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O49 | [ORWLR REPORT LISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLR_REPORT_LISTS) | UTILITY | &nbsp; | 5 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O50 | [ORWLRR TG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_TG) | READ | USER | 1 | DUZ |  | 
O51 | [ORWLRR UTGA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_UTGA) | READ | ORTESTS | 1 | DUZ, QUERY |  | 
O52 | [ORWLRR UTGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_UTGD) | READ | TGRP | 1 | DUZ, QUERY |  | 
O53 | [ORWLRR UTGR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_UTGR) | READ | ORTESTS, TGRP | 1 | DUZ, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O54 | [ORWNSS CHKSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWNSS_CHKSCH) | UTILITY | SCH | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O55 | [ORWOR1 GETDEA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_GETDEA) | READ | ORUSER | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O56 | [ORWORDG REVSTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_REVSTS) | READ | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O57 | __[ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_CODE)__ | READ | ORCODE, ORAPP, ORDATE | 9 | P3PROBLEMS |  | 
O58 | __[ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_PROV)__ | READ | ORWPROV, ORWDT | 1 | DUZ, IS-A, P3PCE |  | 
O59 | [ORWPCE CPTMODS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_CPTMODS) | READ | ORCPTCOD, ORDATE | 7 | - |  | 
O60 | __[ORWPCE DIAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_DIAG)__ | READ | CLINIC, ORDATE | 5 | HARD CODED, LOCATION, P3PCE |  | 
O61 | [ORWPCE GAFURL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GAFURL) | READ | &nbsp; | 5 | ALLJS, HARD CODED |  | 
O62 | __[ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_DX_TEXT)__ | UTILITY | NARR, CODE | 1 | FMUTILITY, P3PCE |  | 
O63 | __[ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SET_OF_CODES)__ | READ | ORWFILE, ORWFIELD, ORWNULL | 10 | P3PCE, QUERY |  | 
O64 | [ORWPCE GETMOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GETMOD) | READ | ORMODIEN, ORDATE | 4 | - |  | 
O65 | __[ORWPCE HASCPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HASCPT)__ | READ | ORLIST | 7 | P3PCE |  | 
O66 | __[ORWPCE HF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HF)__ | READ | CLINIC | 1 | LOCATION, P3PCE |  | 
O67 | __[ORWPCE IMM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_IMM)__ | READ | CLINIC | 1 | LOCATION, P3PCE |  | 
O68 | [ORWPCE ISCLINIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ISCLINIC) | READ | ORLOC | 4 | IS-A, LOCATION |  | 
O69 | [ORWPCE LEX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_LEX) | READ | X, APP, ORDATE | 19 | - |  | 
O70 | [ORWPCE LEXCODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_LEXCODE) | READ | IEN, APP, ORDATE | 5 | - |  | 
O71 | __[ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_MHCLINIC)__ | READ | ORIEN | 2 | IS-A, LOCATION, P3PCE |  | 
O72 | __[ORWPCE PED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PED)__ | READ | CLINIC | 1 | LOCATION, P3PCE |  | 
O73 | __[ORWPCE PROC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PROC)__ | READ | CLINIC, ORDATE | 12 | LOCATION, P3PCE |  | 
O74 | __[ORWPCE SK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SK)__ | READ | CLINIC | 1 | LOCATION, P3PCE |  | 
O75 | [ORWPCE TRT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_TRT) | READ | CLINIC | 1 | LOCATION |  | 
O76 | __[ORWPCE VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_VISIT)__ | READ | CLINIC, ORDATE | 2 | LOCATION, P3PCE |  | 
O77 | __[ORWPCE XAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_XAM)__ | READ | CLINIC | 1 | LOCATION, P3PCE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O78 | [ORWPCE4 LEX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE4_LEX) | READ | X, APP, ORDATE, ORXTND, ORINCSYN | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O79 | [ORWPT CLINRNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CLINRNG) | READ | &nbsp; | 16 | ALLJS, HARD CODED, LOCATION, RPCEMULATOR |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O80 | [ORWPT16 PSCNVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_PSCNVT) | READ | DFN | 1 | ALLJS, HARD CODED, RPCEMULATOR |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O81 | [ORWRP REPORT LISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_REPORT_LISTS) | READ | &nbsp; | 6 | eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O82 | [ORWRP16 REPORT LISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP16_REPORT_LISTS) | READ | &nbsp; | 6 | - |  | 
O83 | [ORWRP16 REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP16_REPORT_TEXT) | READ | DFN, RPTID, HSTYPE, DTRANGE, SECTION | 11 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O84 | [ORWRP2 COMPABV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_COMPABV) | READ | &nbsp; | 6 | - |  | 
O85 | [ORWRP2 COMPDISP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_COMPDISP) | READ | &nbsp; | 6 | - |  | 
O86 | [ORWRP2 HS COMPONENT SUBS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_COMPONENT_SUBS) | READ | ORSUB | 2 | - |  | 
O87 | [ORWRP2 HS COMPONENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_COMPONENTS) | READ | &nbsp; | 1 | - |  | 
O88 | [ORWRP2 HS FILE LOOKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_FILE_LOOKUP) | READ | ORFILE, ORFROM, ORDIR | 1 | - |  | 
O89 | [ORWRP2 HS SUBITEMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_SUBITEMS) | READ | ORTEST | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O90 | [ORWSR SHOW OPTOP WHEN SIGNING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_SHOW_OPTOP_WHEN_SIGNING) | READ | ORCASE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O91 | [ORWTIU CANLINK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_CANLINK) | READ | ORTITLE | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O92 | [ORWTPP GETCOMBO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETCOMBO) | READ | &nbsp; | 1 | DUZ |  | 
O93 | [ORWTPP GETCOS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETCOS) | READ | FROM, DIR, VISITORS | 2 | DUZ |  | 
O94 | [ORWTPP GETDCOS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETDCOS) | READ | &nbsp; | 1 | DUZ |  | 
O95 | [ORWTPP GETIMG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETIMG) | READ | &nbsp; | 1 | DUZ |  | 
O96 | [ORWTPP GETNOT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETNOT) | READ | &nbsp; | 1 | DUZ |  | 
O97 | [ORWTPP GETNOTO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETNOTO) | READ | &nbsp; | 1 | DUZ |  | 
O98 | [ORWTPP GETOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETOC) | READ | &nbsp; | 1 | DUZ |  | 
O99 | [ORWTPP GETOTHER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETOTHER) | READ | &nbsp; | 1 | DUZ |  | 
O100 | [ORWTPP GETREM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETREM) | READ | &nbsp; | 1 | DUZ |  | 
O101 | [ORWTPP GETSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETSUB) | READ | &nbsp; | 1 | DUZ |  | 
O102 | [ORWTPP GETSURR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETSURR) | READ | &nbsp; | 1 | DUZ |  | 
O103 | [ORWTPP GETTD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETTD) | READ | CLASS | 1 | DUZ |  | 
O104 | [ORWTPP GETTU](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_GETTU) | READ | CLASS | 1 | DUZ |  | 
O105 | [ORWTPP LSDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_LSDEF) | READ | &nbsp; | 1 | DUZ |  | 
O106 | [ORWTPP NEWLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_NEWLIST) | READ | LISTNAME, ORVIZ | 1 | DUZ |  | 
O107 | [ORWTPP REMLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_REMLIST) | __CHANGE__ | VALUE | 1 | DUZ |  | 
O108 | [ORWTPP SAVECD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVECD) | __CHANGE__ | INFO | 1 | DUZ |  | 
O109 | [ORWTPP SAVECS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVECS) | __CHANGE__ | INFO | 1 | DUZ |  | 
O110 | [ORWTPP SAVELIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVELIST) | __CHANGE__ | PLIST, LISTNUM, ORVIZ | 1 | DUZ |  | 
O111 | [ORWTPP SAVENOT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVENOT) | __CHANGE__ | VALUES | 1 | DUZ |  | 
O112 | [ORWTPP SAVENOTO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVENOTO) | __CHANGE__ | INFO | 1 | DUZ |  | 
O113 | [ORWTPP SAVEOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVEOC) | __CHANGE__ | VALUES | 1 | DUZ |  | 
O114 | [ORWTPP SAVEPLD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVEPLD) | __CHANGE__ | INFO | 1 | DUZ |  | 
O115 | [ORWTPP SAVESURR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVESURR) | __CHANGE__ | INFO | 1 | DUZ |  | 
O116 | [ORWTPP SAVET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SAVET) | __CHANGE__ | CLASS, DEFAULT, VALUES | 1 | DUZ |  | 
O117 | [ORWTPP SETCOMBO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETCOMBO) | UTILITY | VALUES | 2 | DUZ |  | 
O118 | [ORWTPP SETDCOS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETDCOS) | UTILITY | VALUE | 1 | DUZ |  | 
O119 | [ORWTPP SETIMG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETIMG) | UTILITY | MAX, START, STOP | 1 | DUZ |  | 
O120 | [ORWTPP SETOTHER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETOTHER) | UTILITY | INFO | 1 | DUZ |  | 
O121 | [ORWTPP SETREM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETREM) | UTILITY | VALUES | 1 | DUZ |  | 
O122 | [ORWTPP SETSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SETSUB) | UTILITY | VALUE | 1 | DUZ |  | 
O123 | [ORWTPP SORTDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_SORTDEF) | READ | &nbsp; | 1 | DUZ |  | 
O124 | [ORWTPP TEAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPP_TEAMS) | READ | &nbsp; | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O125 | [ORWU DEFAULT DIVISION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_DEFAULT_DIVISION) | READ | &nbsp; | 12 | DUZ, LOCATION |  | 
O126 | [ORWU DEVICE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_DEVICE) | READ | FROM, DIR | 16 | - |  | 
O127 | __[ORWU DT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_DT)__ | UTILITY | X, %DT | 2 | ALLJS, HARD CODED, P1BPSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS, RPCEMULATOR |  | 
O128 | [ORWU GBLREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_GBLREF) | UTILITY | FN | 2 | FMUTILITY |  | 
O129 | [ORWU GENERIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_GENERIC) | UTILITY | FROM, DIR, REF | 4 | FMUTILITY |  | 
O130 | [ORWU HAS OPTION ACCESS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_HAS_OPTION_ACCESS) | READ | OPTION | 3 | DUZ |  | 
O131 | __[ORWU HASKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_HASKEY)__ | READ | KEY | 1 | DUZ, P1BPSEL |  | 
O132 | __[ORWU NEWPERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_NEWPERS)__ | READ | ORFROM, ORDIR, ORKEY, ORDATE, ORVIZ, ORALL | 1 | DUZ, P3ALLERGIES, P3MEDOPORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | 
O133 | __[ORWU VALDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALDT)__ | UTILITY | X, %DT | 1 | ALLJS, HARD CODED, P3ALLERGIES, RPCEMULATOR |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O134 | [ORWU1 NAMECVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU1_NAMECVT) | READ | IEN | 4 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O135 | [ORWU16 USERINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_USERINFO) | READ | &nbsp; | 3 | DUZ |  | 
O136 | [ORWU16 VALDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU16_VALDT) | UTILITY | X, %DT | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O137 | [ORWUX SYMTAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUX_SYMTAB) | UTILITY | &nbsp; | 17 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O138 | [TIU CAN CHANGE COSIGNER?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_CAN_CHANGE_COSIGNER%3F) | READ | TIUDA | 1 | DUZ, IS-A |  | 
O139 | [TIU FIELD CHECK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_CHECK) | UTILITY | &nbsp; | 37 | HARD CODED |  | 
O140 | [TIU FIELD DOLMTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_DOLMTEXT) | UTILITY | TIULIST | 4 | FMUTILITY |  | 
O141 | [TIU FIELD IMPORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_IMPORT) | __CHANGE__ | XMLTMP | 1 | XML |  | 
O142 | [TIU FIELD LIST ADD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LIST_ADD) | UTILITY | IN | 6 | REENTRANCY |  | 
O143 | [TIU FIELD LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LOAD) | READ | FLD | 4 | - |  | 
O144 | [TIU FIELD LOAD BY IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LOAD_BY_IEN) | READ | FLDIEN | 2 | - |  | 
O145 | [TIU GET DS URGENCIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DS_URGENCIES) | READ | &nbsp; | 3 | HARD CODED |  | 
O146 | __[TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PERSONAL_PREFERENCES)__ | READ | USER | 1 | DUZ, P3PCE |  | 
O147 | [TIU GET PRF TITLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PRF_TITLE) | READ | PTDFN, FLAGID | 6 | - |  | 
O148 | __[TIU GET PRINT NAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PRINT_NAME)__ | READ | TIUTYPE | 1 | P3PCE |  | 
O149 | [TIU GET SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_SITE_PARAMETERS) | READ | &nbsp; | 3 | LOCATION |  | 
O150 | [TIU IDENTIFY CLINPROC CLASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IDENTIFY_CLINPROC_CLASS) | READ | &nbsp; | 1 | - |  | 
O151 | [TIU IDENTIFY CONSULTS CLASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IDENTIFY_CONSULTS_CLASS) | READ | &nbsp; | 1 | IEN-LOOKUP |  | 
O152 | [TIU IDENTIFY SURGERY CLASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IDENTIFY_SURGERY_CLASS) | READ | CLNAME | 2 | IEN-LOOKUP |  | 
O153 | [TIU IS THIS A CLINPROC?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_THIS_A_CLINPROC%3F) | READ | TITLE | 5 | IS-A |  | 
O154 | __[TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_THIS_A_CONSULT%3F)__ | READ | TITLE | 4 | IS-A, P3PCE |  | 
O155 | [TIU IS THIS A SURGERY?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_THIS_A_SURGERY%3F) | READ | TITLE | 5 | IS-A |  | 
O156 | __[TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_USER_A_PROVIDER%3F)__ | READ | USER, DATE | 3 | DUZ, IS-A, P3PCE |  | 
O157 | [TIU IS USER A USR PROVIDER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_USER_A_USR_PROVIDER) | READ | USER, DATE | 4 | DUZ, IS-A |  | 
O158 | [TIU TEMPLATE CREATE/MODIFY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_CREATE_MODIFY) | __CHANGE__ | TIUDA, TIUX | 11 | - |  | 
O159 | [TIU TEMPLATE GETTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETTEXT) | READ | DFN, VSTR, TIUX | 1 | - |  | 
O160 | [TIU TEMPLATE SET ITEMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_SET_ITEMS) | __CHANGE__ | TIUDA, TIUX | 7 | - |  | 
O161 | [TIU USER INACTIVE?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_USER_INACTIVE%3F) | READ | TIUDA | 1 | DUZ, IS-A |  | 






<small>Generated on 2017-08-24</small>