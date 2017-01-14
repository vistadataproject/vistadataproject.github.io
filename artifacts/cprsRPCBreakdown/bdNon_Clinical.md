---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Non Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Non Clinical (561)



Non Clinical RPCs don't effect a patient's medical record. In a phrase, they mainly 'get file data and parameter settings' and as they don't access patient data, their use needn't be monitored as closely as the Clinical RPCs - they don't involve HIPAA sensitive information.

These RPCs access at least 119 parameters and 83 files.

They come in four flavors (__PRELIMINARY BREAKDOWN__) ...

Name | Number
--- | ---
[Paramter Only](#paramter-only-134) | 134 (23.9%)
[File Only](#file-only-176) | 176 (31.4%)
[Parameter and File](#parameter-and-file-25) | 25 (4.5%)
[Other](#other-226) | 226 (40.3%)




### Paramter Only (134)

RPCs that ONLY access parameters and not files.

Category | Number
--- | ---
CHANGE | 28 (20.9%)
READ | 99 (73.9%)
UTILITY | 7 (5.2%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
P1 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV DLL VERSION) | READ |  [DLL^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVX | 3 | - |  | GMV DLL VERSION
P2 | [GMV PARAMETER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV PARAMETER) | __CHANGE__ |  [RPC^GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html) | OPTION, ENT, PAR, INST, VAL | 9 | - |  | 
P3 | [GMV USER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV USER) | READ |  [RPC^GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html) | OPTION, DATA | 5 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P4 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB SORT METHOD) | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | DUZ |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P5 | [ORDDPAPI ADMTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDDPAPI ADMTIME) | READ |  [ADMTIME^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 3 | - |  | OR ADMIN TIME HELP TEXT
P6 | [ORDDPAPI CLOZMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDDPAPI CLOZMSG) | READ |  [CLOZMSG^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 4 | - |  | OR CLOZ INPT MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P7 | [ORDEA DEATEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA DEATEXT) | READ |  [DEATEXT^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | - |  | OR DEA TEXT
P8 | [ORDEA LNKMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA LNKMSG) | READ |  [LNKMSG^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | - |  | OR DEA PIV LINK MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P9 | [ORECS01 SAVPATH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 SAVPATH) | __CHANGE__ |  [SAVPATH^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | ECPATH | 12 | DUZ |  | ORWT TOOLS MENU
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P10 | [OREVNTX1 AUTHMREL](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 AUTHMREL) | READ |  [AUTHMREL^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | USER | 1 | DUZ, XUSEC |  | 
P11 | [OREVNTX1 DELDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DELDFLT) | __CHANGE__ |  [DELDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 4 | DUZ |  | OREVNT DEFAULT
P12 | [OREVNTX1 DFLTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DFLTEVT) | READ |  [DFLTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 5 | DUZ |  | 
P13 | [OREVNTX1 WRLSTED](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 WRLSTED) | READ |  [WRLSTED^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | LOC, EVTID | &nbsp; | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P14 | [ORQORB SORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQORB SORT) | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | DUZ |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P15 | [ORQPT CLINICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT CLINICS) | READ |  [CLIN^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION |  | ORWD COMMON CLINIC
P16 | [ORQPT DEFAULT CLINIC DATE RANG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT CLINIC DATE RANG) | READ |  [CDATRANG^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 6 | DUZ, LOCATION |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
P17 | [ORQPT DEFAULT LIST SORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT LIST SORT) | READ |  [DEFSORT^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 8 | DUZ |  | *VARIABLE*
P18 | [ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT LIST SOURCE) | READ |  [DEFSRC^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 13 | DUZ |  | *VARIABLE*, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P19 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 GET CONTEXT) | READ |  [GETCTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORUSER | 1 | - |  | ORCH CONTEXT CONSULTS
P20 | [ORQQCN2 SAVE CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 SAVE CONTEXT) | __CHANGE__ |  [SAVECTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORCTXT | 5 | DUZ |  | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P21 | [ORQQLR SEARCH RANGE OUTPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR SEARCH RANGE OUTPT) | READ |  [SROUT^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html) | &nbsp; | 5 | DUZ |  | ORQQLR SEARCH RANGE OUTPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P22 | [ORQQPL PROBLEM NTRT BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM NTRT BULLETIN) | UTILITY |  [NTRTBULL^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | ORTERM, ORNP, ORPT, ORCOMM | 20 | BULLETIN, DUZ, XMB |  | OR PROBLEM NTRT BY DIVISION
P23 | [ORQQPL SAVEVIEW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SAVEVIEW) | __CHANGE__ |  [SAVEVIEW^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPLVIEW | 8 | DUZ | [200](http://localhost:9000/schema/200) | ORCH CONTEXT PROBLEMS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P24 | [ORQQPX GET DEF LOCATIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET DEF LOCATIONS) | READ |  [GETDEFOL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 3 | DUZ |  | ORQQPX DEFAULT LOCATIONS
P25 | [ORQQPX GET FOLDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET FOLDERS) | READ |  [GETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 5 | DUZ |  | ORQQPX REMINDER FOLDERS
P26 | [ORQQPX LVREMLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX LVREMLST) | READ |  [LVREMLST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS | 1 | - |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
P27 | [ORQQPX NEW COVER SHEET ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW COVER SHEET ACTIVE) | READ |  [NEWCVOK^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | DUZ, IS-A |  | ORQQPX NEW REMINDER PARAMS
P28 | [ORQQPX NEW COVER SHEET REMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW COVER SHEET REMS) | READ |  [REMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LOC | 20 | DUZ |  | ORQQPX SEARCH ITEMS
P29 | [ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW REMINDERS ACTIVE) | READ |  [NEWACTIV^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 8 | DUZ, IS-A |  | PXRM GUI REMINDERS ACTIVE
P30 | [ORQQPX REM INSERT AT CURSOR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REM INSERT AT CURSOR) | READ |  [INSCURS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | DUZ |  | ORQQPX REMINDER TEXT AT CURSOR
P31 | [ORQQPX SAVELVL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX SAVELVL) | __CHANGE__ |  [SAVELVL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS, DATA | 13 | - |  | *VARIABLE*, ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
P32 | [ORQQPX SET FOLDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX SET FOLDERS) | __CHANGE__ |  [SETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORFLDRS | 3 | DUZ |  | ORQQPX REMINDER FOLDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P33 | [ORWCH LDFONT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LDFONT) | READ |  [LDFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 1 | DUZ |  | ORWCH FONT SIZE
P34 | [ORWCH LOADALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LOADALL) | READ |  [LOADALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | &nbsp; | 10 | DUZ |  | ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTH, ORWCH WIDTHS
P35 | [ORWCH LOADSIZ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LOADSIZ) | READ |  [LOADSIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 2 | DUZ |  | ORWCH BOUNDS
P36 | [ORWCH SAVEALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVEALL) | __CHANGE__ |  [SAVEALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | LST | 8 | DUZ |  | *VARIABLE*, ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTHS
P37 | [ORWCH SAVECOL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVECOL) | __CHANGE__ |  [SAVECOL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | COL | 4 | DUZ |  | ORWCH COLUMNS REPORTS
P38 | [ORWCH SAVESIZ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVESIZ) | __CHANGE__ |  [SAVESIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM, VAL | 1 | DUZ |  | ORWCH BOUNDS
P39 | [ORWCH SAVFONT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVFONT) | __CHANGE__ |  [SAVFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | VAL | 1 | DUZ |  | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P40 | [ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN AUTORDV) | READ |  [AUTORDV^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 1 | - |  | ORWRP CIRN AUTOMATIC
P41 | [ORWCIRN HDRON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN HDRON) | READ |  [HDRON^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 2 | - |  | ORWRP HDR ON
P42 | [ORWCIRN WEBADDR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN WEBADDR) | READ |  [WEBADDR^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | PATID | 4 | HARD CODED |  | ORWRP VISTAWEB ADDRESS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P43 | [ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM ORDEROBJ) | READ |  [ORDEROBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ORGRP | 1 | DUZ |  | ORWCOM PATIENT SELECTED
P44 | [ORWCOM PTOBJ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM PTOBJ) | READ |  [PTOBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 1 | DUZ |  | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P45 | [ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 CLINUSER) | READ |  [CLINUSER^ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html) | &nbsp; | 16 | DUZ, IS-A |  | *VARIABLE*
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P46 | [ORWDBA4 GETBAUSR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA4 GETBAUSR) | READ |  [GETBAUSR^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html) | ORCIEN | 2 | DUZ |  | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P47 | [ORWDLR DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR DEF) | READ |  [DEF^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | ALOC | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P48 | [ORWDLR32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 DEF) | READ |  [DEF^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | ALOC, ADIV | 9 | - |  | 
P49 | [ORWDLR32 MAXDAYS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 MAXDAYS) | UTILITY |  [MAXDAYS^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | LOC, SCHED | 10 | LOCATION |  | LR MAX DAYS CONTINUOUS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P50 | [ORWDLR33 LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 LC TO WC) | READ |  [LCTOWC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC | 6 | DUZ, LOCATION |  | ORWLR LC CHANGED TO WC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P51 | [ORWDPS1 LOCPICK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 LOCPICK) | READ |  [LOCPICK^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | LOC | 6 | LOCATION |  | ORWDPS ROUTING DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P52 | [ORWDPS32 AUTHNVA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 AUTHNVA) | READ |  [AUTHNVA^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PRV | 8 | DUZ |  | OR OREMAS NON-VA MED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P53 | [ORWDRA DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA DEF) | READ |  [DEF^ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html) | PATID | 9 | HARD CODED | [101.42](http://localhost:9000/schema/101_42),[101.43](http://localhost:9000/schema/101_43) | RA SUBMIT PROMPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P54 | [ORWDX WRLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX WRLST) | READ |  [WRLST^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | LOC | 1 | LOCATION |  | ORWOR WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P55 | [ORWDXC ON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC ON) | READ |  [ON^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | &nbsp; | 1 | IS-A |  | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P56 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM MSTYLE) | READ |  [MSTYLE^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | &nbsp; | 1 | - |  | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P57 | [ORWDXM1 SVRPC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM1 SVRPC) | READ |  [SVRPC^ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html) | X | 1 | DUZ, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P58 | [ORWDXQ PUTQLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ PUTQLST) | __CHANGE__ |  [PUTQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DG, QLST | 4 | DUZ |  | ORWDQ DISPLAY NAME, ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P59 | [ORWDXVB NURSADMN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB NURSADMN) | READ |  [NURSADMN^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | - |  | OR VBECS SUPPRESS NURS ADMIN
P60 | [ORWDXVB STATALOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB STATALOW) | READ |  [STATALOW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN | 1 | DUZ |  | 
P61 | [ORWDXVB VBTNS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB VBTNS) | READ |  [VBTNS^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | - |  | ORWDXVB VBECS TNS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P62 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 COLLTIM) | READ |  [COLLTIM^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 1 | - |  | OR VBECS REMOVE COLL TIME
P63 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 SWPANEL) | READ |  [SWPANEL^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 2 | - |  | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P64 | [ORWGN AUTHUSR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN AUTHUSR) | READ |  [AUTHUSR^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | &nbsp; | 2 | DUZ |  | 
P65 | [ORWGN GNLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN GNLOC) | READ |  [GNLOC^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORFROM, DIR | 13 | IS-A |  | OR GN LOCATIONS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P66 | [ORWGRPC DELVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DELVIEWS) | __CHANGE__ |  [DELVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC | 2 | DUZ |  | 
P67 | [ORWGRPC GETDATES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETDATES) | UTILITY |  [GETDATES^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | REPORTID | 2 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
P68 | [ORWGRPC GETPREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETPREF) | UTILITY |  [GETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY |  | ORWG GRAPH SETTING
P69 | [ORWGRPC GETSIZE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETSIZE) | UTILITY |  [GETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY |  | 
P70 | [ORWGRPC GETVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETVIEWS) | UTILITY |  [GETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, PUBLIC, EXT, USER | 2 | FMUTILITY |  | 
P71 | [ORWGRPC PUBLIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC PUBLIC) | READ |  [PUBLIC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 1 | DUZ |  | 
P72 | [ORWGRPC SETPREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETPREF) | __CHANGE__ |  [SETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | SETTING, PUBLIC | 2 | - |  | 
P73 | [ORWGRPC SETSIZE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETSIZE) | __CHANGE__ |  [SETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VAL | 2 | - |  | 
P74 | [ORWGRPC SETVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETVIEWS) | __CHANGE__ |  [SETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC, VAL | 2 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P75 | [ORWNSS NSSMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS NSSMSG) | READ |  [NSSMSG^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | &nbsp; | 4 | DUZ |  | ORWIM NSS MESSAGE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P76 | [ORWOR EXPIRED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR EXPIRED) | UTILITY |  [EXPIRED^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | - |  | ORWOR EXPIRED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P77 | [ORWORB GETSORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GETSORT) | READ |  [GETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | &nbsp; | 1 | - |  | ORB SORT DIRECTION, ORB SORT METHOD
P78 | [ORWORB SETSORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB SETSORT) | __CHANGE__ |  [SETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | SORT, DIR | 3 | DUZ |  | ORB SORT DIRECTION, ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P79 | [ORWORDG GRPSEQB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG GRPSEQB) | READ |  [GRPSEQB^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | ORWOR CATEGORY SEQUENCE
P80 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG MAPSEQ) | READ |  [MAPSEQ^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P81 | [ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ALWAYS CHECKOUT) | READ |  [DOCHKOUT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | DUZ, IS-A |  | ORWPCE DISABLE AUTO CHECKOUT
P82 | [ORWPCE ANYTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ANYTIME) | READ |  [ANYTIME^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 4 | DUZ |  | ORWPCE ANYTIME ENCOUNTERS
P83 | [ORWPCE ASKPCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ASKPCE) | READ |  [ASKPCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | DUZ |  | ORWPCE ASK ENCOUNTER UPDATE
P84 | [ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE AUTO VISIT TYPE SELECT) | READ |  [AUTOVSIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | DUZ, IS-A |  | ORWPCE DISABLE AUTO VISIT TYPE
P85 | [ORWPCE FORCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE FORCE) | READ |  [FORCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | DUZ, LOCATION |  | ORWPCE FORCE PCE ENTRY
P86 | [ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EXCLUDED) | READ |  [EXCLUDED^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC, TYPE | 6 | DUZ |  | *VARIABLE*
P87 | [ORWPCE MH TEST AUTHORIZED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MH TEST AUTHORIZED) | READ |  [MHATHRZD^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | TEST, USER | 7 | DUZ |  | 
P88 | [ORWPCE MHTESTOK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MHTESTOK) | READ |  [MHTESTOK^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 6 | DUZ, IS-A |  | PXRM MENTAL HEALTH ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P89 | [ORWPS REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS REASON) | READ |  [REASON^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | &nbsp; | 3 | - |  | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P90 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DFLTSRC) | READ |  [DFLTSRC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 2 | DUZ |  | ORLP DEFAULT LIST SOURCE
P91 | [ORWPT SAVDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SAVDFLT) | __CHANGE__ |  [SAVDFLT^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | X | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P92 | [ORWRA DEFAULT EXAM SETTINGS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA DEFAULT EXAM SETTINGS) | READ |  [GETDEF^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | &nbsp; | 11 | - |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P93 | [ORWRP2 GETLKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 GETLKUP) | READ |  [GETLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | - |  | ORWRP ADHOC LOOKUP
P94 | [ORWRP2 SAVLKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 SAVLKUP) | __CHANGE__ |  [SAVLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | VAL | 4 | DUZ |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P95 | [ORWRP3 EXPAND COLUMNS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP3 EXPAND COLUMNS) | READ |  [LIST^ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html) | TAB | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P96 | [ORWSR GET SURG CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR GET SURG CONTEXT) | READ |  [GTSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORUSER | 2 | - |  | ORCH CONTEXT SURGERY
P97 | [ORWSR SAVE SURG CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SAVE SURG CONTEXT) | __CHANGE__ |  [SVSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCTXT | 5 | DUZ |  | ORCH CONTEXT SURGERY
P98 | [ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SHOW SURG TAB) | READ |  [SHOWSURG^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | &nbsp; | 3 | - |  | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P99 | [ORWTIU GET DCSUMM CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET DCSUMM CONTEXT) | READ |  [GTDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | DUZ |  | ORCH CONTEXT SUMMRIES
P100 | [ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET TIU CONTEXT) | READ |  [GTTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | DUZ |  | ORCH CONTEXT NOTES
P101 | [ORWTIU SAVE DCSUMM CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU SAVE DCSUMM CONTEXT) | __CHANGE__ |  [SVDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | DUZ |  | ORCH CONTEXT SUMMRIES
P102 | [ORWTIU SAVE TIU CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU SAVE TIU CONTEXT) | __CHANGE__ |  [SVTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | DUZ |  | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P103 | [ORWTPD DELDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD DELDFLT) | __CHANGE__ |  [DELDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 4 | DUZ |  | ORWRP TIME/OCC LIMITS ALL, ORWRP TIME/OCC LIMITS INDV
P104 | [ORWTPD GETDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETDFLT) | READ |  [GETDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 3 | DUZ |  | ORWRP TIME/OCC LIMITS ALL
P105 | [ORWTPD GETOCM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETOCM) | READ |  [GETOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 1 | - |  | ORCH CONTEXT MEDS
P106 | [ORWTPD PUTOCM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD PUTOCM) | __CHANGE__ |  [PUTOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | ORVAL | 5 | DUZ |  | ORCH CONTEXT MEDS
P107 | [ORWTPD RSDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD RSDFLT) | READ |  [RSDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 2 | - |  | ORWRP TIME/OCC LIMITS ALL
P108 | [ORWTPD SUDF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD SUDF) | __CHANGE__ |  [SUDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | VALUE | 5 | DUZ |  | ORWRP TIME/OCC LIMITS ALL
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P109 | [ORWTPD1 GETCSDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETCSDEF) | READ |  [GETCSDEF^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 8 | - |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P110 | [ORWTPD1 GETCSRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETCSRNG) | READ |  [GETCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 10 | DUZ |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P111 | [ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEAFL) | READ |  [GETEAFL^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 1 | - |  | ORQQEAFL ENC APPT FUTURE LIMIT
P112 | [ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEDATS) | READ |  [GETEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 5 | DUZ |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
P113 | [ORWTPD1 GETEFDAT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEFDAT) | READ |  [GETEFDAT^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 7 | - |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
P114 | [ORWTPD1 PUTCSRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 PUTCSRNG) | __CHANGE__ |  [PUTCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | INFO | 10 | DUZ |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP, ORQQLR DATE RANGE INPT, ORQQLR DATE RANGE OUTPT
P115 | [ORWTPD1 PUTEDATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 PUTEDATS) | __CHANGE__ |  [PUTEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | Y | 10 | DUZ |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P116 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO CSARNGD) | READ |  [CSARNGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | - |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
P117 | [ORWTPO CSLABD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO CSLABD) | READ |  [CSLABD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 4 | - |  | *VARIABLE*
P118 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO GETIMGD) | READ |  [GETIMGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 1 | - |  | ORCH CONTEXT REPORTS
P119 | [ORWTPO GETTABS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO GETTABS) | READ |  [GETTABS^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | - | [8989.51](http://localhost:9000/schema/8989_51) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P120 | [ORWTPP CHKSURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CHKSURR) | READ |  [CHKSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | SURR | 1 | DUZ |  | 
P121 | [ORWTPP CLDAYS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLDAYS) | READ |  [CLDAYS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
P122 | [ORWTPP CLRANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLRANGE) | READ |  [CLRANGE^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
P123 | [ORWTPP CSARNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CSARNG) | READ |  [CSARNG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
P124 | [ORWTPP CSLAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CSLAB) | READ |  [CSLAB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P125 | [ORWU PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PARAM) | READ |  [PARAM^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | DUZ |  | *VARIABLE*
P126 | [ORWU PARAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PARAMS) | READ |  [PARAMS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | DUZ |  | *VARIABLE*
P127 | [ORWU TOOLMENU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU TOOLMENU) | READ |  [TOOLMENU^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 3 | DUZ |  | ORWT TOOLS MENU
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P128 | [ORWUH POPUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUH POPUP) | READ |  [POPUP^ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html) | CTRL | 6 | - |  | ORWUH WHATSTHIS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
P129 | [TIU FIELD CAN EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD CAN EDIT) | READ |  [CANEDIT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 9 | DUZ, IS-A |  | TIU FIELD EDITOR CLASSES
P130 | [TIU REMINDER DIALOGS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REMINDER DIALOGS) | READ |  [REMDLGS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE |  | TIU TEMPLATE REMINDER DIALOGS
P131 | [TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ACCESS LEVEL) | READ |  [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | ROOT, USER, LOC | 24 | DUZ |  | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
P132 | [TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GET DEFAULTS) | READ |  [GETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 3 | - |  | TIU DEFAULT TEMPLATES
P133 | [TIU TEMPLATE PERSONAL OBJECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE PERSONAL OBJECTS) | READ |  [PERSOBJS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE |  | TIU TEMPLATE PERSONAL OBJECTS
P134 | [TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE SET DEFAULTS) | __CHANGE__ |  [SETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | SETTINGS | 3 | DUZ |  | TIU DEFAULT TEMPLATES


### File Only (176)

RPCs that only access files and not parameters.

Category | Number
--- | ---
CHANGE | 5 (2.8%)
READ | 162 (92%)
UTILITY | 9 (5.1%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
F1 | [GMV GET CATEGORY IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET CATEGORY IEN) | READ |  [CATEGORY^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVCAT | 2 | IEN-LOOKUP | [120.53](http://localhost:9000/schema/120_53) | 
F2 | [GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET VITAL TYPE IEN) | READ |  [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVTYPE | 2 | IEN-LOOKUP | [120.51](http://localhost:9000/schema/120_51) | 
F3 | [GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV VITALS/CAT/QUAL) | READ |  [GETVITAL^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | GMVLIST | 21 | - | [120.51](http://localhost:9000/schema/120_51) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F4 | [ORBCMA5 GETUDID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORBCMA5 GETUDID) | READ |  [GETUDID^ORBCMA5](http://code.osehra.org/dox/Routine_ORBCMA5_source.html) | INFO | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F5 | [OREVNTX ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX ACTIVE) | READ |  [ACTIVE^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html) | TYPE | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F6 | [OREVNTX1 CPACT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CPACT) | READ |  [CPACT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 4 | - | [100.5](http://localhost:9000/schema/100_5) | 
F7 | [OREVNTX1 DFLTDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DFLTDLG) | READ |  [DFLTDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 4 | - | [100.5](http://localhost:9000/schema/100_5),[101.41](http://localhost:9000/schema/101_41) | 
F8 | [OREVNTX1 DIV1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DIV1) | READ |  [DIV1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
F9 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DLGIEN) | READ |  [DLGIEN^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGNAME | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
F10 | [OREVNTX1 GTEVT1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GTEVT1) | READ |  [GTEVT1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 10 | - | [100.5](http://localhost:9000/schema/100_5) | 
F11 | [OREVNTX1 ISPASS1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISPASS1) | READ |  [ISPASS1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID, EVTTYPE | 3 | IS-A | [100.5](http://localhost:9000/schema/100_5) | 
F12 | [OREVNTX1 LOC1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 LOC1) | READ |  [LOC1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
F13 | [OREVNTX1 MULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 MULTS) | READ |  [MULTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
F14 | [OREVNTX1 PRMPTID](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PRMPTID) | READ |  [PRMPTID^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PRTNM | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
F15 | [OREVNTX1 PROMPT IDS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PROMPT IDS) | READ |  [PRTIDS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | IDS | 7 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F16 | [ORIMO ISCLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO ISCLOC) | READ |  [ISCLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | ALOC | 3 | IS-A, LOCATION | [44](http://localhost:9000/schema/44) | 
F17 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO ISIVQO) | READ |  [ISIVQO^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | DLGID | 8 | IS-A | [100.98](http://localhost:9000/schema/100_98),[101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F18 | [ORQPT PROVIDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PROVIDERS) | READ |  [PROV^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | DUZ, XREF, XUSEC | [200](http://localhost:9000/schema/200) | 
F19 | [ORQPT SPECIALTIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT SPECIALTIES) | READ |  [SPEC^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 3 | - | [45.7](http://localhost:9000/schema/45_7) | 
F20 | [ORQPT TEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT TEAMS) | READ |  [TEAMS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html) | &nbsp; | 6 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
F21 | [ORQPT WARDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARDS) | READ |  [WARD^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION | [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F22 | [ORQQCN GET PROC IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC IEN) | READ |  [PROCIEN^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 1 | - | [101.43](http://localhost:9000/schema/101_43),[123.3](http://localhost:9000/schema/123_3) | 
F23 | [ORQQCN GET PROC SVCS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC SVCS) | READ |  [PROCSVCS^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 3 | XREF | [101.43](http://localhost:9000/schema/101_43),[123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
F24 | [ORQQCN GET SERVICE IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET SERVICE IEN) | READ |  [SVCIEN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43),[123.5](http://localhost:9000/schema/123_5) | 
F25 | [ORQQCN ISPROSVC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ISPROSVC) | READ |  [ISPROSVC^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | GMRCIEN | 1 | IS/A | [123.5](http://localhost:9000/schema/123_5) | 
F26 | [ORQQCN STATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN STATUS) | READ |  [STATUS^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | &nbsp; | 6 | XREF | [100.01](http://localhost:9000/schema/100_01),[123.1](http://localhost:9000/schema/123_1) | 
F27 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVC W/SYNONYMS) | READ |  [SVCSYN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSTRT, ORWHY, ORSYN, ORIEN | 12 | - | [101.43](http://localhost:9000/schema/101_43),[123.5](http://localhost:9000/schema/123_5) | 
F28 | [ORQQCN SVCTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVCTREE) | READ |  [SVCTREE^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | PURPOSE | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F29 | [ORQQPL CLIN FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CLIN FILTER LIST) | READ |  [GETCLIN^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 5 | IEN-LOOKUP, LOCATION | [44](http://localhost:9000/schema/44) | 
F30 | [ORQQPL CLIN SRCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CLIN SRCH) | READ |  [CLINSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | X | 4 | LOCATION | [44](http://localhost:9000/schema/44) | 
F31 | [ORQQPL PROV FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROV FILTER LIST) | READ |  [GETRPRV^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | DUZ | [200](http://localhost:9000/schema/200) | 
F32 | [ORQQPL PROVIDER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROVIDER LIST) | READ |  [PROVSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FLAG, N, FROM, PART | 10 | DUZ | [200](http://localhost:9000/schema/200) | 
F33 | [ORQQPL SERV FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SERV FILTER LIST) | READ |  [GETSRVC^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | - | [49](http://localhost:9000/schema/49) | 
F34 | [ORQQPL SRVC SRCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SRVC SRCH) | READ |  [SRVCSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, DIR, ALL | 4 | - | [49](http://localhost:9000/schema/49) | 
F35 | [ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL USER PROB CATS) | READ |  [CAT^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | ORDUZ, CLIN | 12 | DUZ, REENTRANCY | [125.1](http://localhost:9000/schema/125_1),[200](http://localhost:9000/schema/200) | 
F36 | [ORQQPL USER PROB LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL USER PROB LIST) | READ |  [PROB^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | GROUP | 28 | - | [125.12](http://localhost:9000/schema/125_12) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F37 | [ORQQPX GET HIST LOCATIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET HIST LOCATIONS) | READ |  [HISTLOC^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 12 | LOCATION | [4](http://localhost:9000/schema/4),[9999999.06](http://localhost:9000/schema/9999999_06) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F38 | [ORQQPXRM GET WH LETTER TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GET WH LETTER TEXT) | READ |  [LETTER^WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html) | WVIEN | 13 | - | [790.404](http://localhost:9000/schema/790_404) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F39 | [ORWCOM DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM DETAILS) | READ |  [DETAILS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ID | 5 | - | [101.15](http://localhost:9000/schema/101_15) | 
F40 | [ORWCOM GETOBJS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM GETOBJS) | READ |  [GETOBJS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 9 | LIST | [101.15](http://localhost:9000/schema/101_15) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F41 | [ORWD DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD DEF) | READ |  [DEF^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F42 | [ORWD OI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD OI) | READ |  [OI^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | XREF, DIR, FROM | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
F43 | [ORWD PROVKEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD PROVKEY) | READ |  [PROVKEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | USERID | 2 | DUZ, XUSEC | [200](http://localhost:9000/schema/200) | 
F44 | [ORWD SAVEACT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SAVEACT) | __CHANGE__ |  [SAVEACT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN, ACTION, REASON, DFN, ORNP, LOC | 35 | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F45 | [ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 ALLERGY MATCH) | READ |  [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | X | 36 | - | [120.82](http://localhost:9000/schema/120_82) | 
F46 | [ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SITE PARAMS) | READ |  [GMRASITE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 3 | - | [120.84](http://localhost:9000/schema/120_84) | 
F47 | [ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SYMPTOMS) | READ |  [SYMPTOMS^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | FROM, DIR | 11 | - | [120.83](http://localhost:9000/schema/120_83) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F48 | [ORWDBA3 HINTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA3 HINTS) | READ |  [HINTS^ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html) | &nbsp; | 7 | - | [9.2](http://localhost:9000/schema/9_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F49 | [ORWDCN32 ORDRMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 ORDRMSG) | READ |  [ORDRMSG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORDITM | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F50 | [ORWDCN32 PROCEDURES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 PROCEDURES) | READ |  [PROC^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | FROM, DIR | 11 | QUERY | [101](http://localhost:9000/schema/101),[101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F51 | [ORWDFH ATTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ATTR) | READ |  [ATTR^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | OI | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F52 | [ORWDFH DIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH DIETS) | READ |  [DIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
F53 | [ORWDFH FINDTYP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH FINDTYP) | READ |  [FINDTYP^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | DGRP | 2 | - | [100.98](http://localhost:9000/schema/100_98) | 
F54 | [ORWDFH ISOIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ISOIEN) | READ |  [ISOIEN^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 1 | IEN-LOOKUP | [101.43](http://localhost:9000/schema/101_43) | 
F55 | [ORWDFH OPDIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH OPDIETS) | READ |  [OPDIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 15 | - | [101.43](http://localhost:9000/schema/101_43),[119.9](http://localhost:9000/schema/119_9) | 
F56 | [ORWDFH QTY2CC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH QTY2CC) | READ |  [QTY2CC^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | PRD, STR, QTY | 6 | - | [101.43](http://localhost:9000/schema/101_43) | 
F57 | [ORWDFH TFPROD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH TFPROD) | READ |  [TFPROD^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F58 | [ORWDLR ABBSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR ABBSPEC) | READ |  [ABBSPEC^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
F59 | [ORWDLR ALLSAMP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR ALLSAMP) | READ |  [ALLSAMP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 12 | - | [61](http://localhost:9000/schema/61),[62](http://localhost:9000/schema/62) | 
F60 | [ORWDLR LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR LOAD) | READ |  [LOAD^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | TESTID | 18 | - | [101.43](http://localhost:9000/schema/101_43),[61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F61 | [ORWDLR32 ABBSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ABBSPEC) | READ |  [ABBSPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
F62 | [ORWDLR32 ALLSAMP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ALLSAMP) | READ |  [ALLSAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 15 | - | [62](http://localhost:9000/schema/62),[64.91](http://localhost:9000/schema/64_91) | 
F63 | [ORWDLR32 ALLSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ALLSPEC) | READ |  [ALLSPEC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | FROM, DIR | 7 | - | [61](http://localhost:9000/schema/61) | 
F64 | [ORWDLR32 LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 LOAD) | READ |  [LOAD^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | TESTID | 36 | - | [101.43](http://localhost:9000/schema/101_43),[60](http://localhost:9000/schema/60),[61](http://localhost:9000/schema/61) | 
F65 | [ORWDLR32 ONE SPECIMEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ONE SPECIMEN) | READ |  [ONESPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 2 | - | [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F66 | [ORWDLR33 LASTTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 LASTTIME) | UTILITY |  [LASTTIME^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 5 | REENTRANCY | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F67 | [ORWDOR LKSCRN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR LKSCRN) | READ |  [LKSCRN^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | FROM, DIR, REF, GBL, SCR | 9 | QUERY | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F68 | [ORWDPS1 DFLTSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DFLTSPLY) | UTILITY |  [DFLTSPLY^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | UPD, SCH, PAT, DRG, OI | 12 | FMUTILITY | [101.43](http://localhost:9000/schema/101_43) | 
F69 | [ORWDPS1 DOSEALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DOSEALT) | READ |  [DOSEALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | DDRUG, CUROI, PSTYPE | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
F70 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FAILDEA) | UTILITY |  [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, ORNP, PSTYPE | 13 | DUZ, FMUTILITY, IS-A | [101.43](http://localhost:9000/schema/101_43) | 
F71 | [ORWDPS1 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FORMALT) | READ |  [FORMALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ORIEN, PSTYPE | 7 | - | [101.43](http://localhost:9000/schema/101_43) | 
F72 | [ORWDPS1 HASOIPI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASOIPI) | READ |  [HASOIPI^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 9 | - | [101.41](http://localhost:9000/schema/101_41) | 
F73 | [ORWDPS1 HASROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASROUTE) | READ |  [HASROUTE^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 6 | - | [101.41](http://localhost:9000/schema/101_41) | 
F74 | [ORWDPS1 IVDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 IVDEA) | READ |  [FDEA1^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, OITYPE, ORNP | 13 | DUZ | [101.43](http://localhost:9000/schema/101_43),[200](http://localhost:9000/schema/200) | 
F75 | [ORWDPS1 QOMEDALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 QOMEDALT) | READ |  [QOMEDALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ODIEN | 7 | - | [101.41](http://localhost:9000/schema/101_41),[101.43](http://localhost:9000/schema/101_43),[9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F76 | [ORWDPS2 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 OISLCT) | READ |  [OISLCT^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, PSTYPE, ORVP, NEEDPI, PKIACTIV | 42 | HARD CODED | [101.41](http://localhost:9000/schema/101_41),[101.43](http://localhost:9000/schema/101_43) | 
F77 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 QOGRP) | READ |  [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | QOIFN | 16 | - | [100.98](http://localhost:9000/schema/100_98),[101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F78 | [ORWDPS32 DOSES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DOSES) | READ |  [DOSES^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI | 13 | - | [101.43](http://localhost:9000/schema/101_43) | 
F79 | [ORWDPS32 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 FORMALT) | READ |  [FORMALT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN, PSTYPE | 4 | - | [101.43](http://localhost:9000/schema/101_43) | 
F80 | [ORWDPS32 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ISSPLY) | READ |  [ISSPLY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
F81 | [ORWDPS32 IVAMT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 IVAMT) | READ |  [IVAMT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI, ORWTYP | 12 | - | [101.43](http://localhost:9000/schema/101_43) | 
F82 | [ORWDPS32 MEDISIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 MEDISIV) | READ |  [MEDISIV^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F83 | [ORWDPS33 GETADDFR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 GETADDFR) | READ |  [GETADDFR^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OIIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F84 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS5 LESGRP) | READ |  [LESGRP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html) | ORLES | 8 | HARD CODED | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F85 | [ORWDRA32 APPROVAL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 APPROVAL) | READ |  [APPROVAL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 7 | DUZ, QUERY | [200](http://localhost:9000/schema/200) | 
F86 | [ORWDRA32 IMTYPSEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 IMTYPSEL) | READ |  [IMTYPSEL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 9 | - | [100.98](http://localhost:9000/schema/100_98),[101.42](http://localhost:9000/schema/101_42),[101.43](http://localhost:9000/schema/101_43),[79.2](http://localhost:9000/schema/79_2),[79.3](http://localhost:9000/schema/79_3) | 
F87 | [ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 LOCTYPE) | READ |  [LOCTYPE^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | ORLOC | 4 | LOCATION | [44](http://localhost:9000/schema/44) | 
F88 | [ORWDRA32 PROCMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 PROCMSG) | READ |  [PROCMSG^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F89 | [ORWDRA32 RADSRC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 RADSRC) | READ |  [RADSRC^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | SRCTYPE | 5 | - | [34](http://localhost:9000/schema/34) | 
F90 | [ORWDRA32 RAORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 RAORDITM) | READ |  [RAORDITM^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | FROM, DIR, IMGTYP | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F91 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX AGAIN) | READ |  [AGAIN^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | IS-A | [101.41](http://localhost:9000/schema/101_41) | 
F92 | [ORWDX DGNM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGNM) | READ |  [DGNM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | NM | 1 | IEN-LOOKUP | [100.98](http://localhost:9000/schema/100_98) | 
F93 | [ORWDX DGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGRP) | READ |  [DGRP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
F94 | [ORWDX DISMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DISMSG) | READ |  [DISMSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
F95 | [ORWDX MSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX MSG) | READ |  [MSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
F96 | [ORWDX ORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX ORDITM) | READ |  [ORDITM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | FROM, DIR, XREF, QOCALL | 12 | QUERY | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F97 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA ISACTOI) | READ |  [ISACTOI^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | OI | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F98 | [ORWDXC FILLID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC FILLID) | READ |  [FILLID^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DLG | 8 | - | [100.98](http://localhost:9000/schema/100_98),[101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F99 | [ORWDXM DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM DLGNAME) | READ |  [DLGNAME^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
F100 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM FORMID) | READ |  [FORMID^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | - | [101.41](http://localhost:9000/schema/101_41),[9.4](http://localhost:9000/schema/9_4) | 
F101 | [ORWDXM LOADSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM LOADSET) | READ |  [LOADSET^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F102 | [ORWDXM MENU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM MENU) | READ |  [MENU^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F103 | [ORWDXM PROMPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM PROMPTS) | READ |  [PROMPTS^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 19 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F104 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM3 ISUDQO) | READ |  [ISUDQO^ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html) | DLGID | 11 | COMPUTED, IS-A | [100.98](http://localhost:9000/schema/100_98),[101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F105 | [ORWDXQ DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGNAME) | READ |  [DLGNAME^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | INAME | 2 | - | [101.41](http://localhost:9000/schema/101_41) | 
F106 | [ORWDXQ DLGSAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGSAVE) | __CHANGE__ |  [DLGSAVE^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC, DNAME, DGRP, RSP | 8 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F107 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 ISSPLY) | READ |  [ISSPLY^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | DLGID, QODLG | 6 | IS-A | [100.98](http://localhost:9000/schema/100_98),[101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F108 | [ORWDXVB SUBCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB SUBCHK) | READ |  [SUBCHK^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | TSTNM | 4 | COMPUTED | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F109 | [ORWNSS QOSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS QOSCH) | READ |  [QOSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | QOID | 13 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F110 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKISITE) | READ |  [PKISITE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 7 | LOCATION | [100.7](http://localhost:9000/schema/100_7) | 
F111 | [ORWOR PKIUSE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKIUSE) | READ |  [PKIUSE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | DUZ | [100.7](http://localhost:9000/schema/100_7) | 
F112 | [ORWOR TSALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR TSALL) | READ |  [TSALL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 2 | - | [45.7](http://localhost:9000/schema/45_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F113 | [ORWORDG ALLTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG ALLTREE) | READ |  [ALLTREE^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
F114 | [ORWORDG IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG IEN) | READ |  [IEN^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | X | 2 | IEN-LOOKUP | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F115 | [ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EDUCATION TOPICS) | READ |  [EDTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY | [9999999.09](http://localhost:9000/schema/9999999_09) | 
F116 | [ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EXAM TYPE) | READ |  [EXAMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY | [9999999.15](http://localhost:9000/schema/9999999_15) | 
F117 | [ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET HEALTH FACTORS TY) | READ |  [HFTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ADDCATS | 10 | QUERY | [9999999.64](http://localhost:9000/schema/9999999_64) | 
F118 | [ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET IMMUNIZATION TYPE) | READ |  [IMMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY | [9999999.14](http://localhost:9000/schema/9999999_14) | 
F119 | [ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET SKIN TEST TYPE) | READ |  [SKTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY | [9999999.28](http://localhost:9000/schema/9999999_28) | 
F120 | [ORWPCE GET TREATMENT TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET TREATMENT TYPE) | READ |  [TRTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY | [9999999.17](http://localhost:9000/schema/9999999_17) | 
F121 | [ORWPCE GETSVC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GETSVC) | UTILITY |  [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | SVC, LOC, INP | 5 | LOCATION | [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F122 | [ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE1 NONCOUNT) | READ |  [NONCOUNT^ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html) | ORLOC | 3 | IS-A, LOCATION | [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F123 | [ORWPS1 PICKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 PICKUP) | READ |  [PICKUP^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | &nbsp; | 2 | - | [550](http://localhost:9000/schema/550) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F124 | [ORWTPD GETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETIMG) | UTILITY |  [GETIMG^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPT | 10 | - | [101.24](http://localhost:9000/schema/101_24) | 
F125 | [ORWTPD GETSETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETSETS) | READ |  [GETSETS^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F126 | [ORWTPN GETCLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPN GETCLASS) | READ |  [GETCLASS^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | &nbsp; | 8 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F127 | [ORWTPN GETTC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPN GETTC) | READ |  [GETTC^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | CLASS, FROM, DIR | 12 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F128 | [ORWTPR NOTDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR NOTDESC) | READ |  [NOTDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 7 | - | [100.9](http://localhost:9000/schema/100_9) | 
F129 | [ORWTPR OCDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR OCDESC) | READ |  [OCDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 9 | - | [100.8](http://localhost:9000/schema/100_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F130 | [ORWTPT GETTEAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPT GETTEAM) | READ |  [GETTEAM^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html) | TEAM | 7 | DUZ | [100.21](http://localhost:9000/schema/100_21),[200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F131 | [ORWU CLINLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU CLINLOC) | READ |  [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION | [44](http://localhost:9000/schema/44) | 
F132 | [ORWU EXTNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU EXTNAME) | UTILITY |  [EXTNAME^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | IEN, FN | 2 | FMUTILITY | [1](http://localhost:9000/schema/1) | 
F133 | [ORWU HOSPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HOSPLOC) | READ |  [HOSPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION | [44](http://localhost:9000/schema/44) | 
F134 | [ORWU INPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU INPLOC) | READ |  [INPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 6 | LOCATION | [44](http://localhost:9000/schema/44) | 
F135 | [ORWU VALIDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VALIDSIG) | UTILITY |  [VALIDSIG^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 3 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F136 | [ORWU1 NEWLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU1 NEWLOC) | READ |  [NEWLOC^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | ORFROM, DIR | 6 | LOCATION | [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F137 | [ORWU16 HOSPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 HOSPLOC) | READ |  [HOSPLOC^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM | 10 | LOCATION, QUERY | [44](http://localhost:9000/schema/44) | 
F138 | [ORWU16 NEWPERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 NEWPERS) | READ |  [NEWPERS^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM, KEY | 10 | DUZ, QUERY | [200](http://localhost:9000/schema/200) | 
F139 | [ORWU16 VALIDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 VALIDSIG) | UTILITY |  [VALIDSIG^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X | 3 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F140 | [ORWUL FV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FV4DG) | READ |  [FV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGNM | 17 | QUERY | [101.43](http://localhost:9000/schema/101_43),[101.44](http://localhost:9000/schema/101_44) | 
F141 | [ORWUL FVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVIDX) | READ |  [FVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | [101.43](http://localhost:9000/schema/101_43),[101.44](http://localhost:9000/schema/101_44) | 
F142 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVSUB) | READ |  [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 6 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
F143 | [ORWUL QVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVIDX) | READ |  [QVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
F144 | [ORWUL QVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVSUB) | READ |  [QVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F145 | [PXRM REMINDER CATEGORY](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDER CATEGORY) | READ |  [CATEGORY^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | CIEN | 30 | - | [811.7](http://localhost:9000/schema/811_7),[811.9](http://localhost:9000/schema/811_9) | 
F146 | [PXRM REMINDERS AND CATEGORIES](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDERS AND CATEGORIES) | READ |  [SEL^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | &nbsp; | 17 | QUERY | [811.7](http://localhost:9000/schema/811_7),[811.9](http://localhost:9000/schema/811_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F147 | [TIU AUTHORIZATION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU AUTHORIZATION) | READ |  [CANDO^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA, TIUACT | 8 | DUZ, IS-A | [8925](http://localhost:9000/schema/8925) | 
F148 | [TIU DIV AND CLASS INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DIV AND CLASS INFO) | READ |  [USERINFO^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | USER | 13 | DUZ | [200](http://localhost:9000/schema/200),[8930](http://localhost:9000/schema/8930) | 
F149 | [TIU FIELD EXPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD EXPORT) | READ |  [EXPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDS | 8 | XML | [8927.1](http://localhost:9000/schema/8927_1) | 
F150 | [TIU FIELD LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST) | READ |  [LIST^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | FROM, DIR | 9 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
F151 | [TIU FIELD NAME IS UNIQUE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD NAME IS UNIQUE) | READ |  [ISUNIQUE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | NAME, IEN | 4 | IS-A | [8927.1](http://localhost:9000/schema/8927_1) | 
F152 | [TIU FIELD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD SAVE) | __CHANGE__ |  [SAVE^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | TIUDA, TIUX | 24 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
F153 | [TIU GET BOILERPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET BOILERPLATE) | READ |  [TITLEBP^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | IEN | 6 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F154 | [TIU GET DEFAULT PROVIDER](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DEFAULT PROVIDER) | READ |  [DEFDOC^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | HLOC, USER, TIUDT, TIUIEN | 7 | DUZ | [8925](http://localhost:9000/schema/8925) | 
F155 | [TIU GET LIST OF OBJECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET LIST OF OBJECTS) | READ |  [OBJLST^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | &nbsp; | 6 | DUZ | [8925.1](http://localhost:9000/schema/8925_1) | 
F156 | [TIU ID CAN ATTACH](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID CAN ATTACH) | READ |  [CANATTCH^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 15 | IS-A | [8925](http://localhost:9000/schema/8925) | 
F157 | [TIU ISPRF](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ISPRF) | READ |  [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUDA | 7 | IEN-LOOKUP, IS-A | [8925.1](http://localhost:9000/schema/8925_1) | 
F158 | [TIU LONG LIST BOILERPLATED](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST BOILERPLATED) | READ |  [LONGLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 12 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F159 | [TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST OF TITLES) | READ |  [LONGLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLASS, FROM, DIR, IDNOTE | 7 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
F160 | [TIU PERSONAL TITLE LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU PERSONAL TITLE LIST) | READ |  [PERSLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | DUZ, CLASS, TIUC, TIUFLG | 25 | DUZ, DUZ TO K/META | [8925.1](http://localhost:9000/schema/8925_1),[8925.98](http://localhost:9000/schema/8925_98) | 
F161 | [TIU REQUIRES COSIGNATURE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REQUIRES COSIGNATURE) | READ |  [REQCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUTYP, TIUDA, TIUSER, TIUDT | 6 | DUZ, IS-A | [8925](http://localhost:9000/schema/8925) | 
F162 | [TIU TEMPLATE ALL TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ALL TITLES) | READ |  [TITLELST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 10 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F163 | [TIU TEMPLATE CHECK BOILERPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE CHECK BOILERPLATE) | UTILITY |  [BPCHECK^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUX | 45 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
F164 | [TIU TEMPLATE DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE DELETE) | __CHANGE__ |  [DELETE^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - | [8927](http://localhost:9000/schema/8927) | 
F165 | [TIU TEMPLATE GET DESCRIPTION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GET DESCRIPTION) | READ |  [GETDESC^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | TIUDA | 4 | - | [8927](http://localhost:9000/schema/8927) | 
F166 | [TIU TEMPLATE GETBOIL](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETBOIL) | READ |  [GETBOIL^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 9 | - | [8927](http://localhost:9000/schema/8927) | 
F167 | [TIU TEMPLATE GETITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETITEMS) | READ |  [GETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - | [8927](http://localhost:9000/schema/8927) | 
F168 | [TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETLINK) | READ |  [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | LINK | 3 | - | [8927](http://localhost:9000/schema/8927) | 
F169 | [TIU TEMPLATE GETPROOT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETPROOT) | READ |  [GETPROOT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 2 | - | [8927](http://localhost:9000/schema/8927) | 
F170 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETROOTS) | READ |  [GETROOTS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 4 | - | [8927](http://localhost:9000/schema/8927) | 
F171 | [TIU TEMPLATE ISEDITOR](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ISEDITOR) | READ |  [ISEDITOR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | ROOT, USER | 6 | - | [8927](http://localhost:9000/schema/8927) | 
F172 | [TIU TEMPLATE LISTOWNR](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE LISTOWNR) | READ |  [LISTOWNR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUFROM, DIR | 12 | - | [8927](http://localhost:9000/schema/8927) | 
F173 | [TIU USER CLASS LONG LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU USER CLASS LONG LIST) | READ |  [CLSLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 4 | - | [8930](http://localhost:9000/schema/8930) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F174 | [XUS DIVISION SET](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS DIVISION SET) | __CHANGE__ |  [DIVSET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | DIV | 6 | DUZ | [200](http://localhost:9000/schema/200) | 
F175 | [XUS GET USER INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS GET USER INFO) | READ |  [USERINFO^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | &nbsp; | 14 | DUZ | [200](http://localhost:9000/schema/200),[3.1](http://localhost:9000/schema/3_1),[49](http://localhost:9000/schema/49) | 
F176 | [XUS PKI GET UPN](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS PKI GET UPN) | READ |  [GETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html) | &nbsp; | 1 | DUZ | [200](http://localhost:9000/schema/200) | 


### Parameter and File (25)

RPCs that access parameters and files.

Category | Number
--- | ---
CHANGE | 4 (16%)
READ | 20 (80%)
UTILITY | 1 (4%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
PF1 | [OREVNTX1 CMEVTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CMEVTS) | READ |  [CMEVTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | CLOC | 10 | DUZ, LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
PF2 | [OREVNTX1 SETDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 SETDFLT) | __CHANGE__ |  [SETDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 5 | DUZ | [100.5](http://localhost:9000/schema/100_5) | OREVNT DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF3 | [ORQQPL INIT USER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INIT USER) | READ |  [INITUSER^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | ORDUZ | 29 | DUZ, REENTRANCY | [125.99](http://localhost:9000/schema/125_99) | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF4 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV1 COVERSHEET LIST) | READ |  [COVERLST^ORWCV1](http://code.osehra.org/dox/Routine_ORWCV1_source.html) | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24),[8994](http://localhost:9000/schema/8994) | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF5 | [ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 BASTATUS) | READ |  [BASTATUS^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | &nbsp; | 3 | - | [9.7](http://localhost:9000/schema/9_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF6 | [ORWDCN32 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 NEWDLG) | READ |  [NEWDLG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORTYPE, ORLOC | 9 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW CONSULT, ORWDX NEW PROCEDURE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF7 | [ORWDGX LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDGX LOAD) | READ |  [LOAD^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | PAR | 15 | - | [101.41](http://localhost:9000/schema/101_41),[101.43](http://localhost:9000/schema/101_43) | *VARIABLE*
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF8 | [ORWDLR32 GET LAB TIMES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 GET LAB TIMES) | READ |  [GETLABTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 17 | - | [40.5](http://localhost:9000/schema/40_5) | *VARIABLE*, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
PF9 | [ORWDLR32 LAB COLL TIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 LAB COLL TIME) | UTILITY |  [LABCOLTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 13 | IS-A | [40.5](http://localhost:9000/schema/40_5) | *VARIABLE*, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF10 | [ORWDLR33 FUTURE LAB COLLECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 FUTURE LAB COLLECTS) | READ |  [LCFUTR^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC, ORDIV | 4 | LOCATION | [8989.51](http://localhost:9000/schema/8989_51) | LR LAB COLLECT FUTURE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF11 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX2 DCREASON) | READ |  [DCREASON^ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html) | &nbsp; | 15 | QUERY | [100.02](http://localhost:9000/schema/100_02),[100.03](http://localhost:9000/schema/100_03),[9.4](http://localhost:9000/schema/9_4) | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF12 | [ORWDXQ GETQLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQLST) | READ |  [GETQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DGRP, PRE | 7 | - | [101.41](http://localhost:9000/schema/101_41),[101.44](http://localhost:9000/schema/101_44) | 
PF13 | [ORWDXQ GETQNAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQNAM) | READ |  [GETQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC | 4 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF14 | [ORWDXVB COMPORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB COMPORD) | READ |  [COMPORD^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS COMPONENT ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF15 | [ORWDXVB3 DIAGORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 DIAGORD) | READ |  [DIAGORD^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS DIAGNOSTIC TEST ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF16 | [ORWOR VWGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWGET) | READ |  [VWGET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 19 | - | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
PF17 | [ORWOR VWSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWSET) | __CHANGE__ |  [VWSET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | VIEW | 5 | DUZ | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF18 | [ORWPS1 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 NEWDLG) | READ |  [NEWDLG^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | INPAT | 6 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW MED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF19 | [ORWRP COLUMN HEADERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP COLUMN HEADERS) | READ |  [GETCOL^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | IFN | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWCH COLUMNS REPORTS
PF20 | [ORWRP LAB REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP LAB REPORT LISTS) | READ |  [LABLIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP REPORT LAB LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF21 | [ORWTPD ACTDF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD ACTDF) | __CHANGE__ |  [ACTDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS ALL
PF22 | [ORWTPD SUINDV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD SUINDV) | __CHANGE__ |  [SUINDV^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPTS, VALUE | 7 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF23 | [ORWU USERINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU USERINFO) | READ |  [USERINFO^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 56 | DUZ | [101.13](http://localhost:9000/schema/101_13) | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF24 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QV4DG) | READ |  [QV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGRP | 6 | QUERY | [100.98](http://localhost:9000/schema/100_98) | ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF25 | [TIU REM DLG OK AS TEMPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REM DLG OK AS TEMPLATE) | READ |  [REMDLGOK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | TIUIEN | 15 | DUZ FOR SERVICE, IS-A | [801.41](http://localhost:9000/schema/801_41) | TIU TEMPLATE REMINDER DIALOGS


### Other (226)

All other RPCs - don't access parameters or files OR this data is just not available yet.

Category | Number
--- | ---
CHANGE | 21 (9.3%)
READ | 164 (72.6%)
UTILITY | 41 (18.1%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
O1 | [GMV CONVERT DATE](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV CONVERT DATE) | UTILITY |  [GETDT^GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html) | GMRDATE | 4 | ALLJS, HARD CODED, RPCLOCKER |  | 
O2 | [GMV GET CURRENT TIME](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET CURRENT TIME) | UTILITY |  [TIME^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | P2 | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
O3 | [GMV LOCATION SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV LOCATION SELECT) | UTILITY |  [RPC^GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html) | OPTION, DATA | 4 | DYNAMIC EXECUTE |  | 
O4 | [GMV MANAGER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV MANAGER) | UTILITY |  [RPC^GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html) | OPTION, DATA | 5 | DYNAMIC EXECUTE, SECURITY HOLE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O5 | [ORDEA CSVALUE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA CSVALUE) | READ |  [CSVALUE^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORID | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O6 | [ORECS01 GETDIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 GETDIV) | READ |  [GETDIV^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | USR | 2 | GLOBAL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O7 | [OREVNTX1 DEFLTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DEFLTS) | READ |  [DEFLTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 6 | - | [100.5](http://localhost:9000/schema/100_5) | 
O8 | [OREVNTX1 GETDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GETDLG) | READ |  [GETDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGID | 8 | - |  | 
O9 | [OREVNTX1 TYPEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 TYPEXT) | READ |  [TYPEXT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT | 2 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O10 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF CLEAR) | UTILITY |  [CLEAR^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | &nbsp; | 2 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O11 | [ORQ NULL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQ NULL LIST) | UTILITY |  [NLIST^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O12 | [ORQPT KILL RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT KILL RPL) | UTILITY |  [RPLCLEAN^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | ORJ | 6 | HARD CODED, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O13 | [ORQQCN DEFAULT REQUEST REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DEFAULT REQUEST REASON) | READ |  [DEFRFREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC, ORDFN, RESOLVE | 6 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
O14 | [ORQQCN EDIT DEFAULT REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN EDIT DEFAULT REASON) | READ |  [EDITDRFR^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC | 1 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
O15 | [ORQQCN PROVDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN PROVDX) | READ |  [PROVDX^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 1 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
O16 | [ORQQCN SVCLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVCLIST) | READ |  [SVCLIST^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | FROM, DIR | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O17 | [ORQQPL PROBLEM LEX SEARCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM LEX SEARCH) | READ |  [LEXSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, N, VIEW, ORDATE | 62 | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O18 | [ORQQPL4 LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL4 LEX) | READ |  [LEX^ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html) | X, VIEW, ORDATE, ORINCSYN | 25 | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O19 | [ORQQPXRM CHECK REM VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM CHECK REM VERSION) | READ |  [REMVER^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | &nbsp; | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
O20 | [ORQQPXRM DIALOG ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM DIALOG ACTIVE) | READ |  [ACTIVE^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLIST | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9),[801.41](http://localhost:9000/schema/801_41) | 
O21 | [ORQQPXRM DIALOG PROMPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM DIALOG PROMPTS) | READ |  [PROMPT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORDLG, ORDCUR, ORFTYP | 1 | - | [801.41](http://localhost:9000/schema/801_41) | 
O22 | [ORQQPXRM EDUCATION SUBTOPICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION SUBTOPICS) | READ |  [EDS^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
O23 | [ORQQPXRM EDUCATION SUMMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION SUMMARY) | READ |  [EDL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREM | &nbsp; | - |  | 
O24 | [ORQQPXRM EDUCATION TOPIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION TOPIC) | READ |  [EDU^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
O25 | [ORQQPXRM GET WH REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GET WH REPORT TEXT) | READ |  [WHREPORT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORIEN | 1 | DUZ | [790.1](http://localhost:9000/schema/790_1) | 
O26 | [ORQQPXRM MENTAL HEALTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH) | READ |  [MH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OTEST | 3 | - | [601.71](http://localhost:9000/schema/601_71) | 
O27 | [ORQQPXRM PROGRESS NOTE HEADER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM PROGRESS NOTE HEADER) | READ |  [HDR^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLOC | &nbsp; | DUZ, LOCATION |  | PXRM PROGRESS NOTE HEADERS
O28 | [ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER CATEGORIES) | READ |  [CATEGORY^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLOC | 1 | DUZ, LOCATION |  | PXRM CPRS LOOKUP CATEGORIES
O29 | [ORQQPXRM REMINDER INQUIRY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER INQUIRY) | READ |  [RES^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9) | 
O30 | [ORQQPXRM REMINDER WEB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER WEB) | READ |  [WEB^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9),[800](http://localhost:9000/schema/800) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O31 | [ORQQVI2 VITALS HELP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS HELP) | READ |  [HELP^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 1 | HARD CODED, UNSTRUCTURED READ |  | 
O32 | [ORQQVI2 VITALS RATE CHECK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS RATE CHECK) | UTILITY |  [RATECHK^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE, ORQRATE, ORQUNIT | 1 | HARD CODED, IS-A |  | 
O33 | [ORQQVI2 VITALS VALIDATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VALIDATE) | UTILITY |  [VALIDATE^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQDATA | 6 | DUZ, EXTERNAL I/F, HARD CODED, IS-A |  | 
O34 | [ORQQVI2 VITALS VALIDATE TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VALIDATE TYPE) | UTILITY |  [VMTYPES^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O35 | [ORQQXMB MAIL GROUPS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXMB MAIL GROUPS) | READ |  [MAILG^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html) | &nbsp; | 6 | - | [3.8](http://localhost:9000/schema/3_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O36 | [ORWD DT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD DT) | UTILITY |  [DT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | X | 1 | HARD CODED |  | 
O37 | [ORWD KEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD KEY) | READ |  [KEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | KEYNAME, USERID | 1 | DUZ, XUSEC |  | 
O38 | [ORWD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SAVE) | __CHANGE__ |  [SAVE^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DFN, ORNP, LOC, DLG, ORWDACT, RSP | 12 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O39 | [ORWDAL32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 DEF) | READ |  [DEF^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 7 | HARD CODED | [120.84](http://localhost:9000/schema/120_84) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O40 | [ORWDBA2 ADDPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 ADDPDL) | __CHANGE__ |  [ADDPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 28 | DUZ | [200](http://localhost:9000/schema/200) | 
O41 | [ORWDBA2 DELPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 DELPDL) | __CHANGE__ |  [DELPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 9 | DUZ |  | 
O42 | [ORWDBA2 GETPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 GETPDL) | READ |  [GETPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN | 14 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O43 | [ORWDBA7 GETIEN9](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA7 GETIEN9) | READ |  [GETIEN9^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | ICD9 | 1 | IEN-LOOKUP |  | 
O44 | [ORWDBA7 ISWITCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA7 ISWITCH) | READ |  [ISWITCH^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | DFN | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O45 | [ORWDCSLT DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCSLT DEF) | READ |  [DEF^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | &nbsp; | 7 | HARD CODED | [101.43](http://localhost:9000/schema/101_43),[101.42](http://localhost:9000/schema/101_42) | 
O46 | [ORWDCSLT LOOK200](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCSLT LOOK200) | READ |  [LOOK200^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | X | 2 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O47 | [ORWDFH NFSLOC READY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH NFSLOC READY) | READ |  [OPLOCOK^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O48 | [ORWDGX VMDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDGX VMDEF) | READ |  [VMDEF^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | &nbsp; | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O49 | [ORWDLR STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR STOP) | UTILITY |  [STOP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | X2 | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O50 | [ORWDLR32 IC DEFAULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IC DEFAULT) | READ |  [ICDEFLT^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | DUZ, LOCATION | [69.9](http://localhost:9000/schema/69_9) | 
O51 | [ORWDLR32 IC VALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IC VALID) | UTILITY |  [ICVALID^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORTIME | 2 | FMUTILITY, IS-A | [69.9](http://localhost:9000/schema/69_9) | 
O52 | [ORWDLR32 IMMED COLLECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IMMED COLLECT) | READ |  [IMMCOLL^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | DUZ, LOCATION, UNSTRUCTURED READ |  | 
O53 | [ORWDLR32 ONE SAMPLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ONE SAMPLE) | READ |  [ONESAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 11 | - | [62](http://localhost:9000/schema/62),[61](http://localhost:9000/schema/61) | 
O54 | [ORWDLR32 STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 STOP) | UTILITY |  [STOP^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | X2 | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O55 | [ORWDOR VALNUM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR VALNUM) | UTILITY |  [VALNUM^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | X, DOM | 9 | HARD CODED |  | 
O56 | [ORWDOR VMSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR VMSLCT) | READ |  [VMSLCT^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O57 | [ORWDPS1 ODSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 ODSLCT) | READ |  [ODSLCT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | PSTYPE, DFN, LOC | 11 | - | [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O58 | [ORWDPS2 DAY2QTY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 DAY2QTY) | UTILITY |  [DAY2QTY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | DAY, UPD, SCH, DUR, PAT, DRG | 15 | HARD CODED |  | 
O59 | [ORWDPS2 SCHREQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 SCHREQ) | READ |  [SCHREQ^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, RTE, DRG | 3 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O60 | [ORWDPS32 ALLIVRTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ALLIVRTE) | READ |  [ALLIVRTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 10 | - | [51.2](http://localhost:9000/schema/51_2) | 
O61 | [ORWDPS32 ALLROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ALLROUTE) | READ |  [ALLROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 7 | - | [51.2](http://localhost:9000/schema/51_2) | 
O62 | [ORWDPS32 DLGSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DLGSLCT) | READ |  [DLGSLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PSTYPE, DFN, LOCIEN | 11 | - |  | 
O63 | [ORWDPS32 DRUGMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DRUGMSG) | READ |  [DRUGMSG^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | - | [50](http://localhost:9000/schema/50) | 
O64 | [ORWDPS32 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 OISLCT) | READ |  [OISLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | OI, PSTYPE, ORVP | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
O65 | [ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALQTY) | UTILITY |  [VALQTY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 2 | HARD CODED, IS-A |  | 
O66 | [ORWDPS32 VALRATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALRATE) | UTILITY |  [VALRATE^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 3 | HARD CODED, IS-A |  | 
O67 | [ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALROUTE) | UTILITY |  [VALROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | X | 14 | - | [51.2](http://localhost:9000/schema/51_2) | 
O68 | [ORWDPS32 VALSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALSCH) | UTILITY |  [VALSCH^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X, PSTYPE | 8 | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O69 | [ORWDRA32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 DEF) | READ |  [DEF^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | PATID, EVTDIV, IMGTYP | 10 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O70 | [ORWDX DLGDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGDEF) | READ |  [DLGDEF^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | - |  | 
O71 | [ORWDX LOADRSP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOADRSP) | READ |  [LOADRSP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | RSPID, TRANS | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O72 | [ORWDXQ PUTQNAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ PUTQNAM) | __CHANGE__ |  [PUTQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DLG, QNAM | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O73 | [ORWGN IDTVALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN IDTVALID) | READ |  [IDTVALID^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | CSYS | 3 | - |  | 
O74 | [ORWGN MAXFRQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN MAXFRQ) | READ |  [MAXFRQ^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORTRM | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O75 | [ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ALLVIEWS) | READ |  [ALLVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VIEW, USER | 2 | DUZ |  | ORWG GRAPH VIEW
O76 | [ORWGRPC CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC CLASS) | READ |  [CLASS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | TYPE | 2 | - |  | 
O77 | [ORWGRPC RPTPARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC RPTPARAM) | READ |  [RPTPARAM^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | IEN | 1 | - | [101.24](http://localhost:9000/schema/101_24) | 
O78 | [ORWGRPC TAX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TAX) | READ |  [TAX^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, REMTAX | 2 | - |  | 
O79 | [ORWGRPC TESTING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TESTING) | UTILITY |  [TESTING^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | HARD CODED |  | 
O80 | [ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TESTSPEC) | READ |  [TESTSPEC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | - | [60](http://localhost:9000/schema/60) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O81 | [ORWLEX GETFREQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLEX GETFREQ) | UTILITY |  [GETFREQ^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORSRCHTX | 2 | HARD CODED |  | 
O82 | [ORWLEX GETI10DX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLEX GETI10DX) | UTILITY |  [GETI10DX^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORX, ORDT | 32 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O83 | [ORWLR REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR REPORT LISTS) | UTILITY |  [LIST^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html) | &nbsp; | 5 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O84 | [ORWLRR ALLTESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ALLTESTS) | READ |  [ALLTESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
O85 | [ORWLRR ATESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATESTS) | READ |  [ATESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TEST | 1 | - | [60](http://localhost:9000/schema/60) | 
O86 | [ORWLRR ATG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATG) | READ |  [ATG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TESTGP, USER | 1 | DUZ, DUZ TO K/META | [60](http://localhost:9000/schema/60),[69.2](http://localhost:9000/schema/69_2),[68](http://localhost:9000/schema/68) | 
O87 | [ORWLRR ATOMICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATOMICS) | READ |  [ATOMICS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
O88 | [ORWLRR CHEMTEST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR CHEMTEST) | READ |  [CHEMTEST^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
O89 | [ORWLRR INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INFO) | READ |  [INFO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTEST | 2 | - | [60](http://localhost:9000/schema/60) | 
O90 | [ORWLRR PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR PARAM) | READ |  [PARAM^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | &nbsp; | 1 | - | [69.9](http://localhost:9000/schema/69_9) | 
O91 | [ORWLRR SPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR SPEC) | READ |  [SPEC^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [61](http://localhost:9000/schema/61) | 
O92 | [ORWLRR TG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR TG) | READ |  [TG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | USER | 1 | DUZ |  | 
O93 | [ORWLRR USERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR USERS) | READ |  [USERS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | DUZ, QUERY | [68](http://localhost:9000/schema/68) | 
O94 | [ORWLRR UTGA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGA) | READ |  [UTGA^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS | 1 | DUZ, QUERY |  | 
O95 | [ORWLRR UTGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGD) | READ |  [UTGD^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TGRP | 1 | DUZ, QUERY |  | 
O96 | [ORWLRR UTGR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGR) | READ |  [UTGR^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS, TGRP | 1 | DUZ, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O97 | [ORWNSS CHKSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS CHKSCH) | UTILITY |  [CHKSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | SCH | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O98 | [ORWOR1 GETDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDEA) | READ |  [GETDEA^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORUSER | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O99 | [ORWORDG REVSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG REVSTS) | READ |  [REVSTS^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O100 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTIVE CODE) | READ |  [CODACTIV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORCODE, ORAPP, ORDATE | 9 | - |  | 
O101 | [ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTIVE PROV) | READ |  [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWPROV, ORWDT | 1 | DUZ, IS-A |  | 
O102 | [ORWPCE CPTMODS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CPTMODS) | READ |  [CPTMODS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORCPTCOD, ORDATE | 7 | - |  | 
O103 | [ORWPCE DIAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE DIAG) | READ |  [DIAG^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 5 | HARD CODED, LOCATION |  | 
O104 | [ORWPCE GAFURL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GAFURL) | READ |  [GAFURL^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 5 | ALLJS, HARD CODED |  | 
O105 | [ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET DX TEXT) | UTILITY |  [GETDXTXT^ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html) | NARR, CODE | 1 | FMUTILITY |  | 
O106 | [ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET SET OF CODES) | READ |  [GETSET^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWFILE, ORWFIELD, ORWNULL | 10 | QUERY |  | 
O107 | [ORWPCE GETMOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GETMOD) | READ |  [GETMOD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORMODIEN, ORDATE | 4 | - |  | 
O108 | [ORWPCE HASCPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HASCPT) | READ |  [HASCPT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLIST | 7 | - |  | 
O109 | [ORWPCE HF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HF) | READ |  [HF^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
O110 | [ORWPCE IMM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE IMM) | READ |  [IMM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
O111 | [ORWPCE ISCLINIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ISCLINIC) | READ |  [ISCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLOC | 4 | IS-A, LOCATION |  | 
O112 | [ORWPCE LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE LEX) | READ |  [LEX^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | X, APP, ORDATE | 19 | - |  | 
O113 | [ORWPCE LEXCODE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE LEXCODE) | READ |  [LEXCODE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN, APP, ORDATE | 5 | - |  | 
O114 | [ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MHCLINIC) | READ |  [MHCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORIEN | 2 | IS-A, LOCATION |  | 
O115 | [ORWPCE PED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PED) | READ |  [PED^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
O116 | [ORWPCE PROC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PROC) | READ |  [PROC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 12 | LOCATION |  | 
O117 | [ORWPCE SK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SK) | READ |  [SK^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
O118 | [ORWPCE TRT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE TRT) | READ |  [TRT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
O119 | [ORWPCE VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE VISIT) | READ |  [VISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 2 | LOCATION |  | 
O120 | [ORWPCE XAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE XAM) | READ |  [XAM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O121 | [ORWPCE4 LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE4 LEX) | READ |  [LEX^ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html) | X, APP, ORDATE, ORXTND, ORINCSYN | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O122 | [ORWPT CLINRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT CLINRNG) | READ |  [CLINRNG^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 16 | ALLJS, HARD CODED, LOCATION, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O123 | [ORWPT16 PSCNVT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 PSCNVT) | READ |  [PSCNVT^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O124 | [ORWRP REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP REPORT LISTS) | READ |  [LIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O125 | [ORWRP16 REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP16 REPORT LISTS) | READ |  [LIST^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | &nbsp; | 6 | - |  | 
O126 | [ORWRP16 REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP16 REPORT TEXT) | READ |  [RPT^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | DFN, RPTID, HSTYPE, DTRANGE, SECTION | 11 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O127 | [ORWRP2 COMPABV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 COMPABV) | READ |  [COMPABV^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
O128 | [ORWRP2 COMPDISP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 COMPDISP) | READ |  [COMPDISP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
O129 | [ORWRP2 HS COMP FILES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMP FILES) | READ |  [FILES^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORCOMP | 1 | - | [142.5](http://localhost:9000/schema/142_5) | 
O130 | [ORWRP2 HS COMPONENT SUBS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMPONENT SUBS) | READ |  [COMPSUB^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORSUB | 2 | - |  | 
O131 | [ORWRP2 HS COMPONENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMPONENTS) | READ |  [COMP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | - |  | 
O132 | [ORWRP2 HS FILE LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS FILE LOOKUP) | READ |  [FILESEL^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORFILE, ORFROM, ORDIR | 1 | - |  | 
O133 | [ORWRP2 HS SUBITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS SUBITEMS) | READ |  [SUBITEM^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORTEST | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O134 | [ORWSR SHOW OPTOP WHEN SIGNING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SHOW OPTOP WHEN SIGNING) | READ |  [SHOWOPTP^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCASE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O135 | [ORWTIU CANLINK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU CANLINK) | READ |  [CANLINK^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTITLE | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O136 | [ORWTPP ADDLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP ADDLIST) | READ |  [ADDLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
O137 | [ORWTPP CLEARNOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLEARNOT) | __CHANGE__ |  [CLEARNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ | [8992.1](http://localhost:9000/schema/8992_1) | 
O138 | [ORWTPP DELLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP DELLIST) | READ |  [DELLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNUM | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
O139 | [ORWTPP GETCOMBO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETCOMBO) | READ |  [GETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O140 | [ORWTPP GETCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETCOS) | READ |  [GETCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | FROM, DIR, VISITORS | 2 | DUZ |  | 
O141 | [ORWTPP GETDCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETDCOS) | READ |  [GETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O142 | [ORWTPP GETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETIMG) | READ |  [GETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O143 | [ORWTPP GETNOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETNOT) | READ |  [GETNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O144 | [ORWTPP GETNOTO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETNOTO) | READ |  [GETNOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O145 | [ORWTPP GETOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETOC) | READ |  [GETOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O146 | [ORWTPP GETOTHER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETOTHER) | READ |  [GETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O147 | [ORWTPP GETREM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETREM) | READ |  [GETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O148 | [ORWTPP GETSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETSUB) | READ |  [GETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O149 | [ORWTPP GETSURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETSURR) | READ |  [GETSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O150 | [ORWTPP GETTD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETTD) | READ |  [GETTD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | DUZ |  | 
O151 | [ORWTPP GETTU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETTU) | READ |  [GETTU^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | DUZ |  | 
O152 | [ORWTPP LSDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP LSDEF) | READ |  [LSDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O153 | [ORWTPP NEWLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP NEWLIST) | READ |  [NEWLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNAME, ORVIZ | 1 | DUZ |  | 
O154 | [ORWTPP PLISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLISTS) | READ |  [PLISTS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
O155 | [ORWTPP PLTEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLTEAMS) | READ |  [PLTEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
O156 | [ORWTPP REMLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP REMLIST) | __CHANGE__ |  [REMLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | DUZ |  | 
O157 | [ORWTPP SAVECD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVECD) | __CHANGE__ |  [SAVECD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O158 | [ORWTPP SAVECS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVECS) | __CHANGE__ |  [SAVECS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O159 | [ORWTPP SAVELIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVELIST) | __CHANGE__ |  [SAVELIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | PLIST, LISTNUM, ORVIZ | 1 | DUZ |  | 
O160 | [ORWTPP SAVENOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVENOT) | __CHANGE__ |  [SAVENOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | DUZ |  | 
O161 | [ORWTPP SAVENOTO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVENOTO) | __CHANGE__ |  [SAVENOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O162 | [ORWTPP SAVEOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVEOC) | __CHANGE__ |  [SAVEOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | DUZ |  | 
O163 | [ORWTPP SAVEPLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVEPLD) | __CHANGE__ |  [SAVEPLD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O164 | [ORWTPP SAVESURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVESURR) | __CHANGE__ |  [SAVESURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O165 | [ORWTPP SAVET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVET) | __CHANGE__ |  [SAVET^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS, DEFAULT, VALUES | 1 | DUZ |  | 
O166 | [ORWTPP SETCOMBO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETCOMBO) | UTILITY |  [SETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 2 | DUZ |  | 
O167 | [ORWTPP SETDCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETDCOS) | UTILITY |  [SETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | DUZ |  | 
O168 | [ORWTPP SETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETIMG) | UTILITY |  [SETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | MAX, START, STOP | 1 | DUZ |  | 
O169 | [ORWTPP SETOTHER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETOTHER) | UTILITY |  [SETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | DUZ |  | 
O170 | [ORWTPP SETREM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETREM) | UTILITY |  [SETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | DUZ |  | 
O171 | [ORWTPP SETSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETSUB) | UTILITY |  [SETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | DUZ |  | 
O172 | [ORWTPP SORTDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SORTDEF) | READ |  [SORTDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
O173 | [ORWTPP TEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP TEAMS) | READ |  [TEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O174 | [ORWU DEFAULT DIVISION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DEFAULT DIVISION) | READ |  [DEFDIV^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | &nbsp; | 12 | DUZ, LOCATION |  | 
O175 | [ORWU DEVICE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DEVICE) | READ |  [DEVICE^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 16 | - |  | 
O176 | [ORWU DT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DT) | UTILITY |  [DT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
O177 | [ORWU GBLREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU GBLREF) | UTILITY |  [GBLREF^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FN | 2 | FMUTILITY |  | 
O178 | [ORWU GENERIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU GENERIC) | UTILITY |  [GENERIC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR, REF | 4 | FMUTILITY |  | 
O179 | [ORWU HAS OPTION ACCESS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HAS OPTION ACCESS) | READ |  [HASOPTN^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | OPTION | 3 | DUZ |  | 
O180 | [ORWU HASKEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HASKEY) | READ |  [HASKEY^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | KEY | 1 | DUZ |  | 
O181 | [ORWU NEWPERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU NEWPERS) | READ |  [NEWPERS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | ORFROM, ORDIR, ORKEY, ORDATE, ORVIZ, ORALL | 1 | DUZ |  | 
O182 | [ORWU PATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PATCH) | READ |  [PATCH^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
O183 | [ORWU VALDT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VALDT) | UTILITY |  [VALDT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
O184 | [ORWU VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VERSION) | READ |  [VERSION^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
O185 | [ORWU VERSRV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VERSRV) | READ |  [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, CLVER | 12 | - | [19](http://localhost:9000/schema/19) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O186 | [ORWU1 NAMECVT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU1 NAMECVT) | READ |  [NAMECVT^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | IEN | 4 | DUZ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O187 | [ORWU16 DEVICE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 DEVICE) | READ |  [DEVICE^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 5 | LIST | [3.5](http://localhost:9000/schema/3_5) | 
O188 | [ORWU16 USERINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 USERINFO) | READ |  [USERINFO^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 3 | DUZ |  | 
O189 | [ORWU16 VALDT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 VALDT) | UTILITY |  [VALDT^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X, %DT | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O190 | [ORWUX SYMTAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUX SYMTAB) | UTILITY |  [SYMTAB^ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html) | &nbsp; | 17 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O191 | [TIU CAN CHANGE COSIGNER?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CAN CHANGE COSIGNER?) | READ |  [CANCHCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | DUZ, IS-A |  | 
O192 | [TIU FIELD CHECK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD CHECK) | UTILITY |  [CHKFLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 37 | HARD CODED |  | 
O193 | [TIU FIELD DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD DELETE) | __CHANGE__ |  [DELETE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIUDA | 5 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
O194 | [TIU FIELD DOLMTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD DOLMTEXT) | UTILITY |  [DOLMTEXT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIULIST | 4 | FMUTILITY |  | 
O195 | [TIU FIELD IMPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD IMPORT) | __CHANGE__ |  [IMPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | XMLTMP | 1 | XML |  | 
O196 | [TIU FIELD LIST ADD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST ADD) | UTILITY |  [XFLDLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | IN | 6 | REENTRANCY |  | 
O197 | [TIU FIELD LIST IMPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST IMPORT) | __CHANGE__ |  [LIMPORT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 2 | REENTRANCY | [8927.1](http://localhost:9000/schema/8927_1) | 
O198 | [TIU FIELD LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOAD) | READ |  [LOAD^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLD | 4 | - |  | 
O199 | [TIU FIELD LOAD BY IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOAD BY IEN) | READ |  [LOADIEN^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDIEN | 2 | - |  | 
O200 | [TIU GET DS TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DS TITLES) | READ |  [SUMMARY^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ, DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98),[8925.1](http://localhost:9000/schema/8925_1) | 
O201 | [TIU GET DS URGENCIES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DS URGENCIES) | READ |  [URGENCY^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | &nbsp; | 3 | HARD CODED |  | 
O202 | [TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PERSONAL PREFERENCES) | READ |  [GETPREF^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | USER | 1 | DUZ |  | 
O203 | [TIU GET PN TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PN TITLES) | READ |  [NOTES^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ, DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98),[8925.1](http://localhost:9000/schema/8925_1) | 
O204 | [TIU GET PRF TITLE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRF TITLE) | READ |  [GETTITLE^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | PTDFN, FLAGID | 6 | - |  | 
O205 | [TIU GET PRINT NAME](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRINT NAME) | READ |  [GETPNAME^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUTYPE | 1 | - |  | 
O206 | [TIU GET SITE PARAMETERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET SITE PARAMETERS) | READ |  [SITEPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | &nbsp; | 3 | LOCATION |  | 
O207 | [TIU IDENTIFY CLINPROC CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY CLINPROC CLASS) | READ |  [CPCLASS^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | &nbsp; | 1 | - |  | 
O208 | [TIU IDENTIFY CONSULTS CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY CONSULTS CLASS) | READ |  [CNSLCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | IEN-LOOKUP |  | 
O209 | [TIU IDENTIFY SURGERY CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY SURGERY CLASS) | READ |  [SURGCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLNAME | 2 | IEN-LOOKUP |  | 
O210 | [TIU IS THIS A CLINPROC?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A CLINPROC?) | READ |  [ISCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | TITLE | 5 | IS-A |  | 
O211 | [TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A CONSULT?) | READ |  [ISCNSLT^TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html) | TITLE | 4 | IS-A |  | 
O212 | [TIU IS THIS A SURGERY?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A SURGERY?) | READ |  [ISSURG^TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html) | TITLE | 5 | IS-A |  | 
O213 | [TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS USER A PROVIDER?) | READ |  [ISAPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 3 | DUZ, IS-A |  | 
O214 | [TIU IS USER A USR PROVIDER](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS USER A USR PROVIDER) | READ |  [USRPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 4 | DUZ, IS-A |  | 
O215 | [TIU LOAD BOILERPLATE TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOAD BOILERPLATE TEXT) | READ |  [BLRSHELL^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | TITLE, DFN, VSTR | 3 | ASSEMBLY, DUZ | [8925.1](http://localhost:9000/schema/8925_1) | 
O216 | [TIU LONG LIST CLINPROC TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST CLINPROC TITLES) | READ |  [LNGCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | FROM, DIR | 5 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
O217 | [TIU LONG LIST CONSULT TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST CONSULT TITLES) | READ |  [LNGCNSLT^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR | 2 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
O218 | [TIU LONG LIST SURGERY TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST SURGERY TITLES) | READ |  [LNGSURG^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR, CLNAME | 3 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
O219 | [TIU TEMPLATE CREATE/MODIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE CREATE/MODIFY) | __CHANGE__ |  [SETTMPLT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 11 | - |  | 
O220 | [TIU TEMPLATE GETTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETTEXT) | READ |  [GETTEXT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | DFN, VSTR, TIUX | 1 | - |  | 
O221 | [TIU TEMPLATE SET ITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE SET ITEMS) | __CHANGE__ |  [SETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 7 | - |  | 
O222 | [TIU USER INACTIVE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU USER INACTIVE?) | READ |  [USRINACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | DUZ, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O223 | [XUS DIVISION GET](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS DIVISION GET) | READ |  [DIVGET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | IEN | 7 | DUZ | [200](http://localhost:9000/schema/200) | 
O224 | [XUS INTRO MSG](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS INTRO MSG) | READ |  [INTRO^XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html) | &nbsp; | 1 | - | [8993.3](http://localhost:9000/schema/8993_3) | 
O225 | [XUS PKI SET UPN](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS PKI SET UPN) | __CHANGE__ |  [SETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html) | V | 3 | DUZ | [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O226 | [XWB GET BROKER INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/XWB GET BROKER INFO) | READ |  [BRKRINFO^XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html) | &nbsp; | 1 | - | [8989.3](http://localhost:9000/schema/8989_3) | 




