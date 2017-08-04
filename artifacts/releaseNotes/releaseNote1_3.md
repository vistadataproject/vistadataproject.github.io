---
layout: default
title: Release Note v1.3
---

## VDP Release V1.3 (August 3rd 2017)

### Non Clinical RPCs Emulation Models

The following is a list of Meta RPCs emulated in this release

`Parameter Emulator Models`{:.title}

GMV DLL VERSION<br/>
GMV PARAMETER<br/>
GMV USER<br/>
ORB SORT METHOD<br/>
ORDEA DEATEXT<br/>
ORQORB SORT<br/>
ORQPT DEFAULT LIST SOURCE<br/>
ORQQCN2 GET CONTEXT<br/>
ORQQPX NEW REMINDERS ACTIVE<br/>
ORQQPXRM REMINDER CATEGORIES<br/>
ORWCH LDFONT<br/>
ORWCH LOADALL<br/>
ORWCH LOADSIZ<br/>
ORWCH SAVEALL<br/>
ORWCH SAVFONT<br/>
ORWCIRN AUTORDV<br/>
ORWCOM ORDEROBJ<br/>
ORWCOM PTOBJ<br/>
ORWDAL32 CLINUSER<br/>
ORWDXC ON<br/>
ORWDXM MSTYLE<br/>
ORWDXVB3 COLLTIM<br/>
ORWDXVB3 SWPANEL<br/>
ORWGRPC ALLVIEWS<br/>
ORWGRPC GETPREF<br/>
ORWORB GETSORT<br/>
ORWORB SETSORT<br/>
ORWPCE ALWAYS CHECKOUT<br/>
ORWPCE ANYTIME<br/>
ORWPCE ASKPCE<br/>
ORWPCE AUTO VISIT TYPE SELECT<br/>
ORWPCE GET EXCLUDED<br/>
ORWPS REASON<br/>
ORWSR SHOW SURG TAB<br/>
ORWTIU GET TIU CONTEXT<br/>
ORWTPD1 GETEAFL<br/>
ORWTPD1 GETEDATS<br/>
ORWTPO CSARNGD<br/>
ORWTPO GETIMGD<br/>
ORWU PARAM<br/>
ORWU TOOLMENU<br/>
TIU TEMPLATE ACCESS LEVEL<br/>
TIU TEMPLATE GET DEFAULTS<br/>
TIU TEMPLATE SET DEFAULTS<br/>

`Files Emulator Models`{:.title}

GMV GET VITAL TYPE IEN<br/>
GMV VITALS/CAT/QUAL<br/>
OREVNTX1 DLGIEN<br/>
ORIMO ISCLOC<br/>
ORIMO ISIVQO<br/>
ORQQCN SVC W/SYNONYMS<br/>
ORQQPL USER PROB CATS<br/>
ORWDAL32 ALLERGY MATCH<br/>
ORWDAL32 DEF<br/>
ORWDAL32 SITE PARAMS<br/>
ORWDAL32 SYMPTOMS<br/>
ORWDBA3 HINTS<br/>
ORWDPS1 FAILDEA<br/>
ORWDPS1 ODSLCT<br/>
ORWDPS2 QOGRP<br/>
ORWDPS32 VALROUTE<br/>
ORWDPS5 LESGRP<br/>
ORWDRA32 LOCTYPE<br/>
ORWDX AGAIN<br/>
ORWDX DGNM<br/>
ORWDX DLGDEF<br/>
ORWDXA ISACTOI<br/>
ORWDXM FORMID<br/>
ORWDXM3 ISUDQO<br/>
ORWDXR01 ISSPLY<br/>
ORWGRPC TESTSPEC<br/>
ORWOR PKISITE<br/>
ORWORDG IEN<br/>
ORWPCE GET EDUCATION TOPICS<br/>
ORWPCE GET EXAM TYPE<br/>
ORWPCE GET HEALTH FACTORS TY<br/>
ORWPCE GET IMMUNIZATION TYPE<br/>
ORWPCE GET SKIN TEST TYPE<br/>
ORWPCE GETSVC<br/>
ORWPCE1 NONCOUNT<br/>
ORWU CLINLOC<br/>
ORWU EXTNAME<br/>
ORWU PATCH<br/>
ORWU VALIDSIG<br/>
ORWU VERSRV<br/>
ORWU1 NEWLOC<br/>
ORWUL FVSUB<br/>
TIU GET DEFAULT PROVIDER<br/>
TIU ISPRF<br/>
TIU LONG LIST OF TITLES<br/>
TIU REQUIRES COSIGNATURE<br/>
TIU TEMPLATE GETLINK<br/>
XUS GET USER INFO<br/>
XUS INTRO MSG<br/>
XUS PKI GET UPN<br/>
XWB GET BROKER INFO<br/>

`File/Parameters Emulator Models`{:.title}

ORQQPL INIT USER<br/>
ORWCV1 COVERSHEET LIST<br/>
ORWDBA1 BASTATUS<br/>
ORWDPS32 AUTH<br/>
ORWDX WRLST<br/>
ORWDX2 DCREASON<br/>
ORWOR VWGET<br/>
ORWORDG MAPSEQ<br/>
ORWU USERINFO<br/>
ORWUL QV4DG<br/>

`Others Emulator Models`{:.title}

GMV MANAGER<br/>
ORQQPL4 LEX<br/>
ORWDPS2 DAY2QTY<br/>
ORWDPS32 VALQTY<br/>
ORWLEX GETFREQ<br/>
ORWPCE ACTIVE PROV<br/>
ORWPCE DIAG<br/>
ORWPCE GET SET OF CODES<br/>
ORWPCE HASCPT<br/>
ORWPCE HF<br/>
ORWPCE IMM<br/>
ORWPCE MHCLINIC<br/>
ORWPCE PED<br/>
ORWPCE PROC<br/>
ORWPCE SK<br/>
ORWPCE VISIT<br/>
ORWPCE XAM<br/>
ORWU HASKEY<br/>
ORWU NEWPERS<br/>
TIU GET PERSONAL PREFERENCES<br/>
TIU GET PRINT NAME<br/>
TIU IS THIS A CONSULT?<br/>
TIU IS USER A PROVIDER?<br/>

`Utility Emulator Models`{:.title}

GMV CONVERT DATE<br/>
GMV GET CURRENT TIME<br/>
ORQ NULL LIST<br/>
ORWPT CLINRNG<br/>
ORWPT16 PSCNVT<br/>
ORWU DT<br/>
ORWU VALDT<br/>
XWB IM HERE<br/>

`Out-Of-Scope Emulator Models`{:.title}

ORWCIRN FACLIST<br/>
ORWMHV MHV<br/>
ORWPCE I10IMPDT<br/>
ORWPT LEGACY<br/>
ORWRP GET DEFAULT PRINTER<br/>
XWB DEFERRED CLEARALL<br/>


### Lexicon Service

Many coded terminology sets (e.g. ICD-9, ICD-10, SNOMED) within _VISTA_ are indexed and searchable via its [Lexicon Utility](https://www.va.gov/vdl/documents/Clinical/Lexicon_Utility/lextm2_0.pdf).
The v1.3 release comes with an implemented _Javascript-based Lexicon Service_, based on VISTA's Lexicon Utility, which is used by applicable RPC emulations.

### Patient Care Encounter (PCE)

Implementation complete for two (2) of the PCE categories
  1. [Immunization](http://vistadataproject.info/demo/PCE/immunization)
  2. [Skin Tests](http://vistadataproject.info/demo/PCE/skinTest)

### Updated Developer Documentation

Upgraded the [developer documentation tools](https://github.com/vistadataproject/metaVDP/tree/master/definitions/docs), and uploaded the generated documents to the VISTA Data Project documentation GitHub repository:
  [New Developer Documentation](http://vistadataproject.info/artifacts/devdocs/)

### Workflow Demo

{TBD}

### Outstanding Issues
  * **metaVDP**: PCE MVDM models require updating and inclusion in the generated developer documentation ([vistadataproject/metaVDP Issue 4](https://github.com/vistadataproject/metaVDP/issues/4))