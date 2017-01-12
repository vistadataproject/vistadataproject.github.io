---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Non Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Non Clinical (562)



Non Clinical RPCs don't effect a patient's medical record. In a phrase, they mainly 'get file data and parameter settings' and as they don't access patient data, their use needn't be monitored as closely as the Clinical RPCs - they don't involve HIPAA sensitive information. They come in three flavors ...

Name | Number
--- | ---
[Knowledge](#knowledge-278) | 278 (49.5%)
[User](#user-184) | 184 (32.7%)
[Other](#other-100) | 100 (17.8%)


__Note__: this three way breakdown may change to a simpler, more IT-centric, 'PARAMETER', 'FILE', 'MIXED', 'UTILITY' breakdown to focus on the nature of an RPC implementation.



### Knowledge (278)

Retrieving (and limited changing) of __user-independent, non clinical data__. Most take data from FileMan/VDM directly and this data drives the system and effects the kinds of care it can provide.

Category | Number
--- | ---
CHANGE | 12 (4.3%)
READ | 260 (93.5%)
UTILITY | 6 (2.2%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
K1 | [GMV GET CATEGORY IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET CATEGORY IEN) | READ |  [CATEGORY^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVCAT | 2 | IEN-LOOKUP | [120.53](http://localhost:9000/schema/120_53) | 
K2 | [GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET VITAL TYPE IEN) | READ |  [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVTYPE | 2 | IEN-LOOKUP | [120.51](http://localhost:9000/schema/120_51) | 
K3 | [GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV VITALS/CAT/QUAL) | READ |  [GETVITAL^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | GMVLIST | 21 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K4 | [ORBCMA5 GETUDID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORBCMA5 GETUDID) | READ |  [GETUDID^ORBCMA5](http://code.osehra.org/dox/Routine_ORBCMA5_source.html) | INFO | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K5 | [ORDDPAPI ADMTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDDPAPI ADMTIME) | READ |  [ADMTIME^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 3 | PARAMETER |  | OR ADMIN TIME HELP TEXT
K6 | [ORDDPAPI CLOZMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDDPAPI CLOZMSG) | READ |  [CLOZMSG^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html) | &nbsp; | 4 | PARAMETER |  | OR CLOZ INPT MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K7 | [ORDEA CSVALUE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA CSVALUE) | READ |  [CSVALUE^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORID | 12 | - |  | 
K8 | [ORDEA DEATEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA DEATEXT) | READ |  [DEATEXT^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | PARAMETER |  | OR DEA TEXT
K9 | [ORDEA LNKMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA LNKMSG) | READ |  [LNKMSG^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | PARAMETER |  | OR DEA PIV LINK MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K10 | [OREVNTX ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX ACTIVE) | READ |  [ACTIVE^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html) | TYPE | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K11 | [OREVNTX1 CPACT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CPACT) | READ |  [CPACT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 4 | - | [100.5](http://localhost:9000/schema/100_5) | 
K12 | [OREVNTX1 DEFLTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DEFLTS) | READ |  [DEFLTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 6 | - | [100.5](http://localhost:9000/schema/100_5) | 
K13 | [OREVNTX1 DFLTDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DFLTDLG) | READ |  [DFLTDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 4 | - | [101.41](http://localhost:9000/schema/101_41),[100.5](http://localhost:9000/schema/100_5) | 
K14 | [OREVNTX1 DIV1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DIV1) | READ |  [DIV1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
K15 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DLGIEN) | READ |  [DLGIEN^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGNAME | 2 | IEN-LOOKUP |  | 
K16 | [OREVNTX1 GETDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GETDLG) | READ |  [GETDLG^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DLGID | 8 | - |  | 
K17 | [OREVNTX1 GTEVT1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GTEVT1) | READ |  [GTEVT1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 10 | - | [100.5](http://localhost:9000/schema/100_5) | 
K18 | [OREVNTX1 ISPASS1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISPASS1) | READ |  [ISPASS1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID, EVTTYPE | 3 | IS-A |  | 
K19 | [OREVNTX1 LOC1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 LOC1) | READ |  [LOC1^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
K20 | [OREVNTX1 MULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 MULTS) | READ |  [MULTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVTID | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
K21 | [OREVNTX1 PRMPTID](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PRMPTID) | READ |  [PRMPTID^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PRTNM | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
K22 | [OREVNTX1 PROMPT IDS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PROMPT IDS) | READ |  [PRTIDS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | IDS | 7 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K23 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO ISIVQO) | READ |  [ISIVQO^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | DLGID | 8 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K24 | [ORQPT SPECIALTIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT SPECIALTIES) | READ |  [SPEC^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 3 | - | [45.7](http://localhost:9000/schema/45_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K25 | [ORQQCN DEFAULT REQUEST REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DEFAULT REQUEST REASON) | READ |  [DEFRFREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC, ORDFN, RESOLVE | 6 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
K26 | [ORQQCN EDIT DEFAULT REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN EDIT DEFAULT REASON) | READ |  [EDITDRFR^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC | 1 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
K27 | [ORQQCN GET PROC IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC IEN) | READ |  [PROCIEN^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 1 | - | [123.3](http://localhost:9000/schema/123_3),[101.43](http://localhost:9000/schema/101_43) | 
K28 | [ORQQCN GET PROC SVCS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC SVCS) | READ |  [PROCSVCS^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORDITM | 3 | XREF | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5),[101.43](http://localhost:9000/schema/101_43) | 
K29 | [ORQQCN GET SERVICE IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET SERVICE IEN) | READ |  [SVCIEN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43),[123.5](http://localhost:9000/schema/123_5) | 
K30 | [ORQQCN ISPROSVC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ISPROSVC) | READ |  [ISPROSVC^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | GMRCIEN | 1 | IS/A | [123.5](http://localhost:9000/schema/123_5) | 
K31 | [ORQQCN PROVDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN PROVDX) | READ |  [PROVDX^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN | 1 | - | [123.3](http://localhost:9000/schema/123_3),[123.5](http://localhost:9000/schema/123_5) | 
K32 | [ORQQCN STATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN STATUS) | READ |  [STATUS^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | &nbsp; | 6 | XREF | [123.1](http://localhost:9000/schema/123_1) | 
K33 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVC W/SYNONYMS) | READ |  [SVCSYN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSTRT, ORWHY, ORSYN, ORIEN | 12 | - | [123.5](http://localhost:9000/schema/123_5) | 
K34 | [ORQQCN SVCLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVCLIST) | READ |  [SVCLIST^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | FROM, DIR | 8 | - |  | 
K35 | [ORQQCN SVCTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVCTREE) | READ |  [SVCTREE^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | PURPOSE | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K36 | [ORQQPL PROBLEM LEX SEARCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM LEX SEARCH) | READ |  [LEXSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, N, VIEW, ORDATE | 62 | LEXICON |  | 
K37 | [ORQQPL SERV FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SERV FILTER LIST) | READ |  [GETSRVC^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | - | [49](http://localhost:9000/schema/49) | 
K38 | [ORQQPL SRVC SRCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SRVC SRCH) | READ |  [SRVCSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FROM, DIR, ALL | 4 | - | [49](http://localhost:9000/schema/49) | 
K39 | [ORQQPL USER PROB LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL USER PROB LIST) | READ |  [PROB^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | GROUP | 28 | - | [125.12](http://localhost:9000/schema/125_12) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K40 | [ORQQPL4 LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL4 LEX) | READ |  [LEX^ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html) | X, VIEW, ORDATE, ORINCSYN | 25 | LEXICON |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K41 | [ORQQPX LVREMLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX LVREMLST) | READ |  [LVREMLST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS | 1 | PARAMETER |  | ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K42 | [ORQQPXRM CHECK REM VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM CHECK REM VERSION) | READ |  [REMVER^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | &nbsp; | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
K43 | [ORQQPXRM DIALOG ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM DIALOG ACTIVE) | READ |  [ACTIVE^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLIST | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9),[801.41](http://localhost:9000/schema/801_41) | 
K44 | [ORQQPXRM DIALOG PROMPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM DIALOG PROMPTS) | READ |  [PROMPT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORDLG, ORDCUR, ORFTYP | 1 | - | [801.41](http://localhost:9000/schema/801_41) | 
K45 | [ORQQPXRM EDUCATION SUBTOPICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION SUBTOPICS) | READ |  [EDS^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
K46 | [ORQQPXRM EDUCATION SUMMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION SUMMARY) | READ |  [EDL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREM | &nbsp; | - |  | 
K47 | [ORQQPXRM EDUCATION TOPIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM EDUCATION TOPIC) | READ |  [EDU^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OREDU | &nbsp; | - | [9999999.09](http://localhost:9000/schema/9999999_09) | 
K48 | [ORQQPXRM GET WH LETTER TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GET WH LETTER TEXT) | READ |  [LETTER^WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html) | WVIEN | 13 | - | [790.404](http://localhost:9000/schema/790_404) | 
K49 | [ORQQPXRM MENTAL HEALTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH) | READ |  [MH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | OTEST | 3 | - | [601.71](http://localhost:9000/schema/601_71) | 
K50 | [ORQQPXRM REMINDER INQUIRY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER INQUIRY) | READ |  [RES^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9) | 
K51 | [ORQQPXRM REMINDER WEB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER WEB) | READ |  [WEB^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM | &nbsp; | - | [811.9](http://localhost:9000/schema/811_9),[800](http://localhost:9000/schema/800) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K52 | [ORQQVI2 VITALS HELP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS HELP) | READ |  [HELP^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 1 | HARD CODED, UNSTRUCTURED READ |  | 
K53 | [ORQQVI2 VITALS VALIDATE TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VALIDATE TYPE) | UTILITY |  [VMTYPES^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K54 | [ORQQXMB MAIL GROUPS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXMB MAIL GROUPS) | READ |  [MAILG^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html) | &nbsp; | 6 | - | [3.8](http://localhost:9000/schema/3_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K55 | [ORWCOM DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM DETAILS) | READ |  [DETAILS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ID | 5 | - | [101.15](http://localhost:9000/schema/101_15) | 
K56 | [ORWCOM GETOBJS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM GETOBJS) | READ |  [GETOBJS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 9 | LIST | [101.15](http://localhost:9000/schema/101_15) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K57 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV1 COVERSHEET LIST) | READ |  [COVERLST^ORWCV1](http://code.osehra.org/dox/Routine_ORWCV1_source.html) | &nbsp; | 11 | PARAMETER | [101.24](http://localhost:9000/schema/101_24),[8994](http://localhost:9000/schema/8994) | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K58 | [ORWD DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD DEF) | READ |  [DEF^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
K59 | [ORWD OI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD OI) | READ |  [OI^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | XREF, DIR, FROM | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K60 | [ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 ALLERGY MATCH) | READ |  [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | X | 36 | - |  | 
K61 | [ORWDAL32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 DEF) | READ |  [DEF^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 7 | HARD CODED | [120.84](http://localhost:9000/schema/120_84) | 
K62 | [ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SITE PARAMS) | READ |  [GMRASITE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | &nbsp; | 3 | - |  | 
K63 | [ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SYMPTOMS) | READ |  [SYMPTOMS^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | FROM, DIR | 11 | - | [120.83](http://localhost:9000/schema/120_83) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K64 | [ORWDBA3 HINTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA3 HINTS) | READ |  [HINTS^ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html) | &nbsp; | 7 | - | [9.2](http://localhost:9000/schema/9_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K65 | [ORWDBA7 GETIEN9](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA7 GETIEN9) | READ |  [GETIEN9^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | ICD9 | 1 | IEN-LOOKUP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K66 | [ORWDCN32 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 NEWDLG) | READ |  [NEWDLG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORTYPE, ORLOC | 9 | PARAMETER | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW CONSULT, ORWDX NEW PROCEDURE
K67 | [ORWDCN32 ORDRMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 ORDRMSG) | READ |  [ORDRMSG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | ORDITM | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
K68 | [ORWDCN32 PROCEDURES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 PROCEDURES) | READ |  [PROC^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | FROM, DIR | 11 | QUERY | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K69 | [ORWDCSLT DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCSLT DEF) | READ |  [DEF^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | &nbsp; | 7 | HARD CODED | [101.43](http://localhost:9000/schema/101_43),[101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K70 | [ORWDFH ATTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ATTR) | READ |  [ATTR^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | OI | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
K71 | [ORWDFH DIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH DIETS) | READ |  [DIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 10 | - |  | 
K72 | [ORWDFH FINDTYP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH FINDTYP) | READ |  [FINDTYP^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | DGRP | 2 | - | [100.98](http://localhost:9000/schema/100_98) | 
K73 | [ORWDFH ISOIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ISOIEN) | READ |  [ISOIEN^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 1 | IEN-LOOKUP | [101.43](http://localhost:9000/schema/101_43) | 
K74 | [ORWDFH OPDIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH OPDIETS) | READ |  [OPDIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | FROM, DIR | 15 | - | [119.9](http://localhost:9000/schema/119_9) | 
K75 | [ORWDFH QTY2CC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH QTY2CC) | READ |  [QTY2CC^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | PRD, STR, QTY | 6 | - | [101.43](http://localhost:9000/schema/101_43) | 
K76 | [ORWDFH TFPROD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH TFPROD) | READ |  [TFPROD^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K77 | [ORWDGX LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDGX LOAD) | READ |  [LOAD^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | PAR | 15 | PARAMETER | [101.43](http://localhost:9000/schema/101_43) | <VARIABLE>
K78 | [ORWDGX VMDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDGX VMDEF) | READ |  [VMDEF^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html) | &nbsp; | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K79 | [ORWDLR ABBSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR ABBSPEC) | READ |  [ABBSPEC^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
K80 | [ORWDLR ALLSAMP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR ALLSAMP) | READ |  [ALLSAMP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | &nbsp; | 12 | - | [61](http://localhost:9000/schema/61),[62](http://localhost:9000/schema/62) | 
K81 | [ORWDLR DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR DEF) | READ |  [DEF^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | ALOC | 6 | PARAMETER |  | 
K82 | [ORWDLR LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR LOAD) | READ |  [LOAD^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | TESTID | 18 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K83 | [ORWDLR32 ABBSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ABBSPEC) | READ |  [ABBSPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 3 | - | [61](http://localhost:9000/schema/61) | 
K84 | [ORWDLR32 ALLSAMP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ALLSAMP) | READ |  [ALLSAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | &nbsp; | 15 | - | [62](http://localhost:9000/schema/62),[64.91](http://localhost:9000/schema/64_91) | 
K85 | [ORWDLR32 ALLSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ALLSPEC) | READ |  [ALLSPEC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | FROM, DIR | 7 | - |  | 
K86 | [ORWDLR32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 DEF) | READ |  [DEF^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | ALOC, ADIV | 9 | PARAMETER |  | 
K87 | [ORWDLR32 LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 LOAD) | READ |  [LOAD^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | TESTID | 36 | - | [101.43](http://localhost:9000/schema/101_43) | 
K88 | [ORWDLR32 ONE SAMPLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ONE SAMPLE) | READ |  [ONESAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 11 | - | [62](http://localhost:9000/schema/62),[61](http://localhost:9000/schema/61) | 
K89 | [ORWDLR32 ONE SPECIMEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 ONE SPECIMEN) | READ |  [ONESPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html) | IEN | 2 | - | [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K90 | [ORWDOR LKSCRN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR LKSCRN) | READ |  [LKSCRN^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | FROM, DIR, REF, GBL, SCR | 9 | QUERY | [101.41](http://localhost:9000/schema/101_41) | 
K91 | [ORWDOR VMSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR VMSLCT) | READ |  [VMSLCT^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K92 | [ORWDPS1 DFLTSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DFLTSPLY) | UTILITY |  [DFLTSPLY^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | UPD, SCH, PAT, DRG, OI | 12 | FMUTILITY | [101.43](http://localhost:9000/schema/101_43) | 
K93 | [ORWDPS1 DOSEALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DOSEALT) | READ |  [DOSEALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | DDRUG, CUROI, PSTYPE | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
K94 | [ORWDPS1 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FORMALT) | READ |  [FORMALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ORIEN, PSTYPE | 7 | - |  | 
K95 | [ORWDPS1 HASOIPI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASOIPI) | READ |  [HASOIPI^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 9 | - | [101.41](http://localhost:9000/schema/101_41) | 
K96 | [ORWDPS1 HASROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASROUTE) | READ |  [HASROUTE^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | QOID | 6 | - | [101.41](http://localhost:9000/schema/101_41) | 
K97 | [ORWDPS1 ODSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 ODSLCT) | READ |  [ODSLCT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | PSTYPE, DFN, LOC | 11 | - | [101.42](http://localhost:9000/schema/101_42) | 
K98 | [ORWDPS1 QOMEDALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 QOMEDALT) | READ |  [QOMEDALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | ODIEN | 7 | - | [101.41](http://localhost:9000/schema/101_41),[101.43](http://localhost:9000/schema/101_43),[9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K99 | [ORWDPS2 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 OISLCT) | READ |  [OISLCT^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, PSTYPE, ORVP, NEEDPI, PKIACTIV | 42 | HARD CODED |  | 
K100 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 QOGRP) | READ |  [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | QOIFN | 16 | - |  | 
K101 | [ORWDPS2 SCHREQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 SCHREQ) | READ |  [SCHREQ^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | OI, RTE, DRG | 3 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K102 | [ORWDPS32 ALLIVRTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ALLIVRTE) | READ |  [ALLIVRTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 10 | - | [51.2](http://localhost:9000/schema/51_2) | 
K103 | [ORWDPS32 ALLROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ALLROUTE) | READ |  [ALLROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | &nbsp; | 7 | - | [51.2](http://localhost:9000/schema/51_2) | 
K104 | [ORWDPS32 DLGSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DLGSLCT) | READ |  [DLGSLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PSTYPE, DFN, LOCIEN | 11 | - |  | 
K105 | [ORWDPS32 DOSES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DOSES) | READ |  [DOSES^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI | 13 | - | [101.43](http://localhost:9000/schema/101_43) | 
K106 | [ORWDPS32 DRUGMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DRUGMSG) | READ |  [DRUGMSG^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | - | [50](http://localhost:9000/schema/50) | 
K107 | [ORWDPS32 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 FORMALT) | READ |  [FORMALT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN, PSTYPE | 4 | - | [101.43](http://localhost:9000/schema/101_43) | 
K108 | [ORWDPS32 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ISSPLY) | READ |  [ISSPLY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
K109 | [ORWDPS32 IVAMT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 IVAMT) | READ |  [IVAMT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OI, ORWTYP | 12 | - | [101.43](http://localhost:9000/schema/101_43) | 
K110 | [ORWDPS32 MEDISIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 MEDISIV) | READ |  [MEDISIV^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
K111 | [ORWDPS32 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 OISLCT) | READ |  [OISLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | OI, PSTYPE, ORVP | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
K112 | [ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALROUTE) | UTILITY |  [VALROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | X | 14 | - | [51.2](http://localhost:9000/schema/51_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K113 | [ORWDPS33 GETADDFR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 GETADDFR) | READ |  [GETADDFR^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | OIIEN | 5 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K114 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS5 LESGRP) | READ |  [LESGRP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html) | ORLES | 8 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K115 | [ORWDRA DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA DEF) | READ |  [DEF^ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html) | PATID | 9 | HARD CODED, PARAMETER | [101.42](http://localhost:9000/schema/101_42),[101.43](http://localhost:9000/schema/101_43) | RA SUBMIT PROMPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K116 | [ORWDRA32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 DEF) | READ |  [DEF^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | PATID, EVTDIV, IMGTYP | 10 | HARD CODED |  | 
K117 | [ORWDRA32 IMTYPSEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 IMTYPSEL) | READ |  [IMTYPSEL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 9 | - | [101.42](http://localhost:9000/schema/101_42),[79.3](http://localhost:9000/schema/79_3) | 
K118 | [ORWDRA32 PROCMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 PROCMSG) | READ |  [PROCMSG^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | IEN | 2 | - |  | 
K119 | [ORWDRA32 RADSRC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 RADSRC) | READ |  [RADSRC^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | SRCTYPE | 5 | - | [34](http://localhost:9000/schema/34) | 
K120 | [ORWDRA32 RAORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 RAORDITM) | READ |  [RAORDITM^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | FROM, DIR, IMGTYP | 10 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K121 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX AGAIN) | READ |  [AGAIN^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | IS-A |  | 
K122 | [ORWDX DGNM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGNM) | READ |  [DGNM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | NM | 1 | IEN-LOOKUP |  | 
K123 | [ORWDX DGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGRP) | READ |  [DGRP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 2 | IEN-LOOKUP |  | 
K124 | [ORWDX DISMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DISMSG) | READ |  [DISMSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 1 | - |  | 
K125 | [ORWDX DLGDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGDEF) | READ |  [DLGDEF^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DLG | 1 | - |  | 
K126 | [ORWDX LOADRSP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOADRSP) | READ |  [LOADRSP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | RSPID, TRANS | 9 | - |  | 
K127 | [ORWDX MSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX MSG) | READ |  [MSG^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | IEN | 2 | - |  | 
K128 | [ORWDX ORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX ORDITM) | READ |  [ORDITM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | FROM, DIR, XREF, QOCALL | 12 | QUERY |  | 
K129 | [ORWDX WRLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX WRLST) | READ |  [WRLST^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | LOC | 1 | LOCATION, PARAMETER |  | ORWOR WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K130 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX2 DCREASON) | READ |  [DCREASON^ORWDX2](http://code.osehra.org/dox/Routine_ORWDX2_source.html) | &nbsp; | 15 | PARAMETER, QUERY |  | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K131 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA ISACTOI) | READ |  [ISACTOI^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | OI | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K132 | [ORWDXC FILLID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC FILLID) | READ |  [FILLID^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DLG | 8 | - | [101.41](http://localhost:9000/schema/101_41),[100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K133 | [ORWDXM DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM DLGNAME) | READ |  [DLGNAME^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | IEN-LOOKUP |  | 
K134 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM FORMID) | READ |  [FORMID^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 7 | - | [101.41](http://localhost:9000/schema/101_41) | 
K135 | [ORWDXM LOADSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM LOADSET) | READ |  [LOADSET^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - |  | 
K136 | [ORWDXM MENU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM MENU) | READ |  [MENU^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 14 | - |  | 
K137 | [ORWDXM PROMPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM PROMPTS) | READ |  [PROMPTS^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | DLG | 19 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K138 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM3 ISUDQO) | READ |  [ISUDQO^ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html) | DLGID | 11 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K139 | [ORWDXQ DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGNAME) | READ |  [DLGNAME^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | INAME | 2 | - |  | 
K140 | [ORWDXQ DLGSAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGSAVE) | __CHANGE__ |  [DLGSAVE^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC, DNAME, DGRP, RSP | 8 | - |  | 
K141 | [ORWDXQ GETQLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQLST) | READ |  [GETQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DGRP, PRE | 7 | PARAMETER |  | 
K142 | [ORWDXQ GETQNAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQNAM) | READ |  [GETQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | CRC | 4 | PARAMETER |  | 
K143 | [ORWDXQ PUTQLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ PUTQLST) | __CHANGE__ |  [PUTQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DG, QLST | 4 | PARAMETER |  | ORWDQ DISPLAY NAME, ORWDQ QUICK VIEW
K144 | [ORWDXQ PUTQNAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ PUTQNAM) | __CHANGE__ |  [PUTQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html) | DLG, QNAM | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K145 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 ISSPLY) | READ |  [ISSPLY^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | DLGID, QODLG | 6 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K146 | [ORWDXVB COMPORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB COMPORD) | READ |  [COMPORD^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 3 | PARAMETER | [101.43](http://localhost:9000/schema/101_43) | OR VBECS COMPONENT ORDER
K147 | [ORWDXVB SUBCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB SUBCHK) | READ |  [SUBCHK^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | TSTNM | 4 | COMPUTED | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K148 | [ORWDXVB3 DIAGORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 DIAGORD) | READ |  [DIAGORD^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 3 | PARAMETER |  | OR VBECS DIAGNOSTIC TEST ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K149 | [ORWGN IDTVALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN IDTVALID) | READ |  [IDTVALID^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | CSYS | 3 | - |  | 
K150 | [ORWGN MAXFRQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN MAXFRQ) | READ |  [MAXFRQ^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORTRM | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K151 | [ORWGRPC CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC CLASS) | READ |  [CLASS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | TYPE | 2 | - |  | 
K152 | [ORWGRPC RPTPARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC RPTPARAM) | READ |  [RPTPARAM^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | IEN | 1 | - | [101.24](http://localhost:9000/schema/101_24) | 
K153 | [ORWGRPC TAX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TAX) | READ |  [TAX^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, REMTAX | 2 | - |  | 
K154 | [ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TESTSPEC) | READ |  [TESTSPEC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | - | [60](http://localhost:9000/schema/60) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K155 | [ORWLRR ALLTESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ALLTESTS) | READ |  [ALLTESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
K156 | [ORWLRR ATESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATESTS) | READ |  [ATESTS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TEST | 1 | - | [60](http://localhost:9000/schema/60) | 
K157 | [ORWLRR ATOMICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATOMICS) | READ |  [ATOMICS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
K158 | [ORWLRR CHEMTEST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR CHEMTEST) | READ |  [CHEMTEST^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [60](http://localhost:9000/schema/60) | 
K159 | [ORWLRR INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INFO) | READ |  [INFO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTEST | 2 | - | [60](http://localhost:9000/schema/60) | 
K160 | [ORWLRR PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR PARAM) | READ |  [PARAM^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | &nbsp; | 1 | - | [69.9](http://localhost:9000/schema/69_9) | 
K161 | [ORWLRR SPEC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR SPEC) | READ |  [SPEC^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | - | [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K162 | [ORWNSS QOSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS QOSCH) | READ |  [QOSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | QOID | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K163 | [ORWOR TSALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR TSALL) | READ |  [TSALL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 2 | - | [45.7](http://localhost:9000/schema/45_7) | 
K164 | [ORWOR VWGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWGET) | READ |  [VWGET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 19 | PARAMETER |  | ORCH CONTEXT ORDERS
K165 | [ORWOR VWSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWSET) | __CHANGE__ |  [VWSET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | VIEW | 5 | PARAMETER |  | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K166 | [ORWORDG ALLTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG ALLTREE) | READ |  [ALLTREE^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
K167 | [ORWORDG GRPSEQB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG GRPSEQB) | READ |  [GRPSEQB^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | PARAMETER | [100.98](http://localhost:9000/schema/100_98) | ORWOR CATEGORY SEQUENCE
K168 | [ORWORDG IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG IEN) | READ |  [IEN^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | X | 2 | IEN-LOOKUP | [100.98](http://localhost:9000/schema/100_98) | 
K169 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG MAPSEQ) | READ |  [MAPSEQ^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 4 | PARAMETER | [100.98](http://localhost:9000/schema/100_98) | 
K170 | [ORWORDG REVSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG REVSTS) | READ |  [REVSTS^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html) | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K171 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTIVE CODE) | READ |  [CODACTIV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORCODE, ORAPP, ORDATE | 9 | - |  | 
K172 | [ORWPCE CPTMODS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CPTMODS) | READ |  [CPTMODS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORCPTCOD, ORDATE | 7 | - |  | 
K173 | [ORWPCE DIAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE DIAG) | READ |  [DIAG^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 5 | HARD CODED, LOCATION |  | 
K174 | [ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET DX TEXT) | UTILITY |  [GETDXTXT^ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html) | NARR, CODE | 1 | FMUTILITY |  | 
K175 | [ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EDUCATION TOPICS) | READ |  [EDTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
K176 | [ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EXAM TYPE) | READ |  [EXAMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
K177 | [ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET HEALTH FACTORS TY) | READ |  [HFTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ADDCATS | 10 | QUERY |  | 
K178 | [ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET IMMUNIZATION TYPE) | READ |  [IMMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY |  | 
K179 | [ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET SET OF CODES) | READ |  [GETSET^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWFILE, ORWFIELD, ORWNULL | 10 | QUERY |  | 
K180 | [ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET SKIN TEST TYPE) | READ |  [SKTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDT | 5 | QUERY |  | 
K181 | [ORWPCE GET TREATMENT TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET TREATMENT TYPE) | READ |  [TRTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 2 | QUERY |  | 
K182 | [ORWPCE GETMOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GETMOD) | READ |  [GETMOD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | ORMODIEN, ORDATE | 4 | - |  | 
K183 | [ORWPCE HASCPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HASCPT) | READ |  [HASCPT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLIST | 7 | - |  | 
K184 | [ORWPCE HF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HF) | READ |  [HF^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
K185 | [ORWPCE IMM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE IMM) | READ |  [IMM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
K186 | [ORWPCE LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE LEX) | READ |  [LEX^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | X, APP, ORDATE | 19 | - |  | 
K187 | [ORWPCE LEXCODE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE LEXCODE) | READ |  [LEXCODE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN, APP, ORDATE | 5 | - |  | 
K188 | [ORWPCE PED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PED) | READ |  [PED^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
K189 | [ORWPCE PROC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PROC) | READ |  [PROC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 12 | LOCATION |  | 
K190 | [ORWPCE SK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SK) | READ |  [SK^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
K191 | [ORWPCE TRT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE TRT) | READ |  [TRT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
K192 | [ORWPCE VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE VISIT) | READ |  [VISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC, ORDATE | 2 | LOCATION |  | 
K193 | [ORWPCE XAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE XAM) | READ |  [XAM^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | CLINIC | 1 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K194 | [ORWPCE4 LEX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE4 LEX) | READ |  [LEX^ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html) | X, APP, ORDATE, ORXTND, ORINCSYN | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K195 | [ORWPS REASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS REASON) | READ |  [REASON^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | &nbsp; | 3 | PARAMETER |  | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K196 | [ORWPS1 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 NEWDLG) | READ |  [NEWDLG^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | INPAT | 6 | PARAMETER |  | ORWDX NEW MED
K197 | [ORWPS1 PICKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 PICKUP) | READ |  [PICKUP^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | &nbsp; | 2 | - | [550](http://localhost:9000/schema/550) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K198 | [ORWPT CLINRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT CLINRNG) | READ |  [CLINRNG^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 16 | ALLJS, HARD CODED, LOCATION, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K199 | [ORWRP COLUMN HEADERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP COLUMN HEADERS) | READ |  [GETCOL^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | IFN | 8 | PARAMETER |  | ORWCH COLUMNS REPORTS
K200 | [ORWRP LAB REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP LAB REPORT LISTS) | READ |  [LABLIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 11 | PARAMETER | [101.24](http://localhost:9000/schema/101_24) | ORWRP REPORT LAB LIST
K201 | [ORWRP REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP REPORT LISTS) | READ |  [LIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | &nbsp; | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K202 | [ORWRP16 REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP16 REPORT LISTS) | READ |  [LIST^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | &nbsp; | 6 | - |  | 
K203 | [ORWRP16 REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP16 REPORT TEXT) | READ |  [RPT^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html) | DFN, RPTID, HSTYPE, DTRANGE, SECTION | 11 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K204 | [ORWRP2 COMPABV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 COMPABV) | READ |  [COMPABV^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
K205 | [ORWRP2 COMPDISP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 COMPDISP) | READ |  [COMPDISP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 6 | - |  | 
K206 | [ORWRP2 HS COMP FILES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMP FILES) | READ |  [FILES^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORCOMP | 1 | - | [142.5](http://localhost:9000/schema/142_5) | 
K207 | [ORWRP2 HS COMPONENT SUBS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMPONENT SUBS) | READ |  [COMPSUB^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORSUB | 2 | - |  | 
K208 | [ORWRP2 HS COMPONENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS COMPONENTS) | READ |  [COMP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | - |  | 
K209 | [ORWRP2 HS FILE LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS FILE LOOKUP) | READ |  [FILESEL^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORFILE, ORFROM, ORDIR | 1 | - |  | 
K210 | [ORWRP2 HS SUBITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS SUBITEMS) | READ |  [SUBITEM^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORTEST | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K211 | [ORWRP3 EXPAND COLUMNS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP3 EXPAND COLUMNS) | READ |  [LIST^ORWRP3](http://code.osehra.org/dox/Routine_ORWRP3_source.html) | TAB | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K212 | [ORWTPD GETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETIMG) | UTILITY |  [GETIMG^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPT | 10 | - | [101.24](http://localhost:9000/schema/101_24) | 
K213 | [ORWTPD GETSETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETSETS) | READ |  [GETSETS^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K214 | [ORWTPN GETCLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPN GETCLASS) | READ |  [GETCLASS^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | &nbsp; | 8 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
K215 | [ORWTPN GETTC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPN GETTC) | READ |  [GETTC^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html) | CLASS, FROM, DIR | 12 | - | [8925.1](http://localhost:9000/schema/8925_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K216 | [ORWTPR NOTDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR NOTDESC) | READ |  [NOTDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 7 | - |  | 
K217 | [ORWTPR OCDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR OCDESC) | READ |  [OCDESC^ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html) | IEN | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K218 | [ORWU DEVICE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DEVICE) | READ |  [DEVICE^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 16 | - |  | 
K219 | [ORWU PATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PATCH) | READ |  [PATCH^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
K220 | [ORWU VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VERSION) | READ |  [VERSION^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 1 | - | [9.4](http://localhost:9000/schema/9_4) | 
K221 | [ORWU VERSRV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VERSRV) | READ |  [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, CLVER | 12 | - | [19](http://localhost:9000/schema/19) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K222 | [ORWU16 DEVICE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 DEVICE) | READ |  [DEVICE^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 5 | LIST | [3.5](http://localhost:9000/schema/3_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K223 | [ORWUL FV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FV4DG) | READ |  [FV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGNM | 17 | QUERY | [101.44](http://localhost:9000/schema/101_44),[101.43](http://localhost:9000/schema/101_43) | 
K224 | [ORWUL FVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVIDX) | READ |  [FVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | [101.43](http://localhost:9000/schema/101_43) | 
K225 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVSUB) | READ |  [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 6 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
K226 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QV4DG) | READ |  [QV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | DGRP | 6 | PARAMETER, QUERY |  | ORWDQ QUICK VIEW
K227 | [ORWUL QVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVIDX) | READ |  [QVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FROM | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
K228 | [ORWUL QVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVSUB) | READ |  [QVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html) | IEN, FIRST, LAST | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K229 | [PXRM REMINDER CATEGORY](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDER CATEGORY) | READ |  [CATEGORY^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | CIEN | 30 | - |  | 
K230 | [PXRM REMINDERS AND CATEGORIES](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDERS AND CATEGORIES) | READ |  [SEL^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html) | &nbsp; | 17 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K231 | [TIU FIELD DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD DELETE) | __CHANGE__ |  [DELETE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIUDA | 5 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
K232 | [TIU FIELD EXPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD EXPORT) | READ |  [EXPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDS | 8 | XML |  | 
K233 | [TIU FIELD IMPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD IMPORT) | __CHANGE__ |  [IMPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | XMLTMP | 1 | XML |  | 
K234 | [TIU FIELD LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST) | READ |  [LIST^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | FROM, DIR | 9 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
K235 | [TIU FIELD LIST IMPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST IMPORT) | __CHANGE__ |  [LIMPORT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 2 | REENTRANCY | [8927.1](http://localhost:9000/schema/8927_1) | 
K236 | [TIU FIELD LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOAD) | READ |  [LOAD^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLD | 4 | - |  | 
K237 | [TIU FIELD LOAD BY IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOAD BY IEN) | READ |  [LOADIEN^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | FLDIEN | 2 | - |  | 
K238 | [TIU FIELD NAME IS UNIQUE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD NAME IS UNIQUE) | READ |  [ISUNIQUE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | NAME, IEN | 4 | IS-A | [8927.1](http://localhost:9000/schema/8927_1) | 
K239 | [TIU FIELD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD SAVE) | __CHANGE__ |  [SAVE^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html) | TIUDA, TIUX | 24 | - | [8927.1](http://localhost:9000/schema/8927_1) | 
K240 | [TIU GET BOILERPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET BOILERPLATE) | READ |  [TITLEBP^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | IEN | 6 | - |  | 
K241 | [TIU GET DS URGENCIES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DS URGENCIES) | READ |  [URGENCY^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | &nbsp; | 3 | HARD CODED |  | 
K242 | [TIU GET PRF TITLE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRF TITLE) | READ |  [GETTITLE^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | PTDFN, FLAGID | 6 | - |  | 
K243 | [TIU GET PRINT NAME](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRINT NAME) | READ |  [GETPNAME^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUTYPE | 1 | - |  | 
K244 | [TIU ID CAN ATTACH](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID CAN ATTACH) | READ |  [CANATTCH^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 15 | IS-A |  | 
K245 | [TIU IDENTIFY CLINPROC CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY CLINPROC CLASS) | READ |  [CPCLASS^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | &nbsp; | 1 | - |  | 
K246 | [TIU IDENTIFY CONSULTS CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY CONSULTS CLASS) | READ |  [CNSLCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | IEN-LOOKUP |  | 
K247 | [TIU IDENTIFY SURGERY CLASS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IDENTIFY SURGERY CLASS) | READ |  [SURGCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLNAME | 2 | IEN-LOOKUP |  | 
K248 | [TIU IS THIS A CLINPROC?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A CLINPROC?) | READ |  [ISCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | TITLE | 5 | IS-A |  | 
K249 | [TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A CONSULT?) | READ |  [ISCNSLT^TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html) | TITLE | 4 | IS-A |  | 
K250 | [TIU IS THIS A SURGERY?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS THIS A SURGERY?) | READ |  [ISSURG^TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html) | TITLE | 5 | IS-A |  | 
K251 | [TIU ISPRF](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ISPRF) | READ |  [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUDA | 7 | IEN-LOOKUP, IS-A |  | 
K252 | [TIU LONG LIST BOILERPLATED](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST BOILERPLATED) | READ |  [LONGLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 12 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
K253 | [TIU LONG LIST CLINPROC TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST CLINPROC TITLES) | READ |  [LNGCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html) | FROM, DIR | 5 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
K254 | [TIU LONG LIST CONSULT TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST CONSULT TITLES) | READ |  [LNGCNSLT^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR | 2 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
K255 | [TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST OF TITLES) | READ |  [LONGLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | CLASS, FROM, DIR, IDNOTE | 7 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
K256 | [TIU LONG LIST SURGERY TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LONG LIST SURGERY TITLES) | READ |  [LNGSURG^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | FROM, DIR, CLNAME | 3 | LIST | [8925.1](http://localhost:9000/schema/8925_1) | 
K257 | [TIU REM DLG OK AS TEMPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REM DLG OK AS TEMPLATE) | READ |  [REMDLGOK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | TIUIEN | 15 | DUZ FOR SERVICE, IS-A, PARAMETER | [801.41](http://localhost:9000/schema/801_41) | TIU TEMPLATE REMINDER DIALOGS
K258 | [TIU REMINDER DIALOGS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REMINDER DIALOGS) | READ |  [REMDLGS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE REMINDER DIALOGS
K259 | [TIU TEMPLATE ALL TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ALL TITLES) | READ |  [TITLELST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 10 | - |  | 
K260 | [TIU TEMPLATE CHECK BOILERPLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE CHECK BOILERPLATE) | UTILITY |  [BPCHECK^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUX | 45 | - |  | 
K261 | [TIU TEMPLATE CREATE/MODIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE CREATE/MODIFY) | __CHANGE__ |  [SETTMPLT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 11 | - |  | 
K262 | [TIU TEMPLATE DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE DELETE) | __CHANGE__ |  [DELETE^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - |  | 
K263 | [TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GET DEFAULTS) | READ |  [GETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 3 | PARAMETER |  | TIU DEFAULT TEMPLATES
K264 | [TIU TEMPLATE GET DESCRIPTION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GET DESCRIPTION) | READ |  [GETDESC^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | TIUDA | 4 | - |  | 
K265 | [TIU TEMPLATE GETBOIL](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETBOIL) | READ |  [GETBOIL^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 9 | - |  | 
K266 | [TIU TEMPLATE GETITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETITEMS) | READ |  [GETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA | 10 | - |  | 
K267 | [TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETLINK) | READ |  [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | LINK | 3 | - |  | 
K268 | [TIU TEMPLATE GETPROOT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETPROOT) | READ |  [GETPROOT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 2 | - |  | 
K269 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETROOTS) | READ |  [GETROOTS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | USER | 4 | - |  | 
K270 | [TIU TEMPLATE GETTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE GETTEXT) | READ |  [GETTEXT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | DFN, VSTR, TIUX | 1 | - |  | 
K271 | [TIU TEMPLATE ISEDITOR](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ISEDITOR) | READ |  [ISEDITOR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | ROOT, USER | 6 | - |  | 
K272 | [TIU TEMPLATE LISTOWNR](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE LISTOWNR) | READ |  [LISTOWNR^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUFROM, DIR | 12 | - |  | 
K273 | [TIU TEMPLATE PERSONAL OBJECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE PERSONAL OBJECTS) | READ |  [PERSOBJS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | &nbsp; | 7 | DUZ FOR SERVICE, PARAMETER |  | TIU TEMPLATE PERSONAL OBJECTS
K274 | [TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE SET DEFAULTS) | __CHANGE__ |  [SETDFLT^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | SETTINGS | 3 | PARAMETER |  | TIU DEFAULT TEMPLATES
K275 | [TIU TEMPLATE SET ITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE SET ITEMS) | __CHANGE__ |  [SETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | TIUDA, TIUX | 7 | - |  | 
K276 | [TIU USER CLASS LONG LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU USER CLASS LONG LIST) | READ |  [CLSLIST^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | FROM, DIR | 4 | - | [8930](http://localhost:9000/schema/8930) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K277 | [XUS INTRO MSG](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS INTRO MSG) | READ |  [INTRO^XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html) | &nbsp; | 1 | - | [8993.3](http://localhost:9000/schema/8993_3) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
K278 | [XWB GET BROKER INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/XWB GET BROKER INFO) | READ |  [BRKRINFO^XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html) | &nbsp; | 1 | - | [8989.3](http://localhost:9000/schema/8989_3) | 


### User (184)

Retrieving (and limited changing) of __user-specific, non clinical data__.
Many - 82 (44.6%) - involve PARAMETER setting or getting.

Category | Number
--- | ---
CHANGE | 40 (21.7%)
READ | 133 (72.3%)
UTILITY | 11 (6%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
U1 | [GMV USER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV USER) | READ |  [RPC^GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html) | OPTION, DATA | 5 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U2 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB SORT METHOD) | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U3 | [ORECS01 SAVPATH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 SAVPATH) | __CHANGE__ |  [SAVPATH^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | ECPATH | 12 | PARAMETER |  | ORWT TOOLS MENU
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U4 | [OREVNTX1 AUTHMREL](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 AUTHMREL) | READ |  [AUTHMREL^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | USER | 1 | PARAMETER, XUSEC |  | 
U5 | [OREVNTX1 CMEVTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CMEVTS) | READ |  [CMEVTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | CLOC | 10 | LOCATION, PARAMETER |  | 
U6 | [OREVNTX1 DELDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DELDFLT) | __CHANGE__ |  [DELDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 4 | PARAMETER |  | OREVNT DEFAULT
U7 | [OREVNTX1 DFLTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DFLTEVT) | READ |  [DFLTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PVIFN | 5 | PARAMETER |  | 
U8 | [OREVNTX1 SETDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 SETDFLT) | __CHANGE__ |  [SETDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | EVT | 5 | PARAMETER | [100.5](http://localhost:9000/schema/100_5) | OREVNT DEFAULT
U9 | [OREVNTX1 TYPEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 TYPEXT) | READ |  [TYPEXT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT | 2 | - |  | 
U10 | [OREVNTX1 WRLSTED](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 WRLSTED) | READ |  [WRLSTED^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | LOC, EVTID | &nbsp; | PARAMETER | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U11 | [ORQORB SORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQORB SORT) | READ |  [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U12 | [ORQPT DEFAULT CLINIC DATE RANG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT CLINIC DATE RANG) | READ |  [CDATRANG^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 6 | LOCATION, PARAMETER |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
U13 | [ORQPT DEFAULT LIST SORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT LIST SORT) | READ |  [DEFSORT^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 8 | PARAMETER |  | <VARIABLE>
U14 | [ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT LIST SOURCE) | READ |  [DEFSRC^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 13 | PARAMETER |  | <VARIABLE>, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
U15 | [ORQPT PROVIDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PROVIDERS) | READ |  [PROV^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | XREF, XUSEC | [200](http://localhost:9000/schema/200) | 
U16 | [ORQPT TEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT TEAMS) | READ |  [TEAMS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html) | &nbsp; | 6 | - | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U17 | [ORQQCN2 SAVE CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 SAVE CONTEXT) | __CHANGE__ |  [SAVECTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U18 | [ORQQLR SEARCH RANGE OUTPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR SEARCH RANGE OUTPT) | READ |  [SROUT^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQLR SEARCH RANGE OUTPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U19 | [ORQQPL INIT USER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INIT USER) | READ |  [INITUSER^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | ORDUZ | 29 | PARAMETER, REENTRANCY | [125.99](http://localhost:9000/schema/125_99) | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES
U20 | [ORQQPL PROBLEM NTRT BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM NTRT BULLETIN) | UTILITY |  [NTRTBULL^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | ORTERM, ORNP, ORPT, ORCOMM | 20 | BULLETIN, PARAMETER, XMB |  | OR PROBLEM NTRT BY DIVISION
U21 | [ORQQPL PROV FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROV FILTER LIST) | READ |  [GETRPRV^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 6 | - |  | 
U22 | [ORQQPL PROVIDER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROVIDER LIST) | READ |  [PROVSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | FLAG, N, FROM, PART | 10 | - |  | 
U23 | [ORQQPL SAVEVIEW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL SAVEVIEW) | __CHANGE__ |  [SAVEVIEW^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPLVIEW | 8 | PARAMETER | [200](http://localhost:9000/schema/200) | ORCH CONTEXT PROBLEMS
U24 | [ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL USER PROB CATS) | READ |  [CAT^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | ORDUZ, CLIN | 12 | REENTRANCY | [125.1](http://localhost:9000/schema/125_1),[200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U25 | [ORQQPX GET DEF LOCATIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET DEF LOCATIONS) | READ |  [GETDEFOL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 3 | PARAMETER |  | ORQQPX DEFAULT LOCATIONS
U26 | [ORQQPX GET FOLDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET FOLDERS) | READ |  [GETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQPX REMINDER FOLDERS
U27 | [ORQQPX NEW COVER SHEET ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW COVER SHEET ACTIVE) | READ |  [NEWCVOK^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | IS-A, PARAMETER |  | ORQQPX NEW REMINDER PARAMS
U28 | [ORQQPX NEW COVER SHEET REMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW COVER SHEET REMS) | READ |  [REMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LOC | 20 | PARAMETER |  | ORQQPX SEARCH ITEMS
U29 | [ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX NEW REMINDERS ACTIVE) | READ |  [NEWACTIV^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 8 | IS-A, PARAMETER |  | PXRM GUI REMINDERS ACTIVE
U30 | [ORQQPX REM INSERT AT CURSOR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REM INSERT AT CURSOR) | READ |  [INSCURS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 4 | PARAMETER |  | ORQQPX REMINDER TEXT AT CURSOR
U31 | [ORQQPX SET FOLDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX SET FOLDERS) | __CHANGE__ |  [SETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORFLDRS | 3 | PARAMETER |  | ORQQPX REMINDER FOLDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U32 | [ORQQPXRM GET WH REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GET WH REPORT TEXT) | READ |  [WHREPORT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORIEN | 1 | - | [790.1](http://localhost:9000/schema/790_1) | 
U33 | [ORQQPXRM PROGRESS NOTE HEADER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM PROGRESS NOTE HEADER) | READ |  [HDR^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORLOC | &nbsp; | LOCATION |  | PXRM PROGRESS NOTE HEADERS
U34 | [ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER CATEGORIES) | READ |  [CATEGORY^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLOC | 1 | LOCATION |  | PXRM CPRS LOOKUP CATEGORIES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U35 | [ORQQVI2 VITALS VALIDATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VALIDATE) | UTILITY |  [VALIDATE^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQDATA | 6 | EXTERNAL I/F, HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U36 | [ORWCH LDFONT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LDFONT) | READ |  [LDFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 1 | PARAMETER |  | ORWCH FONT SIZE
U37 | [ORWCH LOADALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LOADALL) | READ |  [LOADALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | &nbsp; | 10 | PARAMETER |  | ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTH, ORWCH WIDTHS
U38 | [ORWCH LOADSIZ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH LOADSIZ) | READ |  [LOADSIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM | 2 | PARAMETER |  | ORWCH BOUNDS
U39 | [ORWCH SAVEALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVEALL) | __CHANGE__ |  [SAVEALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | LST | 8 | PARAMETER |  | <VARIABLE>, ORWCH BOUNDS, ORWCH COLUMNS, ORWCH WIDTHS
U40 | [ORWCH SAVECOL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVECOL) | __CHANGE__ |  [SAVECOL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | COL | 4 | PARAMETER |  | ORWCH COLUMNS REPORTS
U41 | [ORWCH SAVESIZ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVESIZ) | __CHANGE__ |  [SAVESIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | NAM, VAL | 1 | PARAMETER |  | ORWCH BOUNDS
U42 | [ORWCH SAVFONT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCH SAVFONT) | __CHANGE__ |  [SAVFONT^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html) | VAL | 1 | PARAMETER |  | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U43 | [ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM ORDEROBJ) | READ |  [ORDEROBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | ORGRP | 1 | PARAMETER |  | ORWCOM PATIENT SELECTED
U44 | [ORWCOM PTOBJ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM PTOBJ) | READ |  [PTOBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html) | &nbsp; | 1 | PARAMETER |  | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U45 | [ORWD KEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD KEY) | READ |  [KEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | KEYNAME, USERID | 1 | XUSEC |  | 
U46 | [ORWD PROVKEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD PROVKEY) | READ |  [PROVKEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | USERID | 2 | XUSEC |  | 
U47 | [ORWD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SAVE) | __CHANGE__ |  [SAVE^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DFN, ORNP, LOC, DLG, ORWDACT, RSP | 12 | - |  | 
U48 | [ORWD SAVEACT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SAVEACT) | __CHANGE__ |  [SAVEACT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN, ACTION, REASON, DFN, ORNP, LOC | 35 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U49 | [ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 CLINUSER) | READ |  [CLINUSER^ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html) | &nbsp; | 16 | IS-A, PARAMETER |  | <VARIABLE>
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U50 | [ORWDBA2 ADDPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 ADDPDL) | __CHANGE__ |  [ADDPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 28 | - | [200](http://localhost:9000/schema/200) | 
U51 | [ORWDBA2 DELPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 DELPDL) | __CHANGE__ |  [DELPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORDXA | 9 | - |  | 
U52 | [ORWDBA2 GETPDL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 GETPDL) | READ |  [GETPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN | 14 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U53 | [ORWDBA4 GETBAUSR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA4 GETBAUSR) | READ |  [GETBAUSR^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html) | ORCIEN | 2 | PARAMETER |  | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U54 | [ORWDBA7 ISWITCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA7 ISWITCH) | READ |  [ISWITCH^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html) | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U55 | [ORWDCSLT LOOK200](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCSLT LOOK200) | READ |  [LOOK200^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html) | X | 2 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U56 | [ORWDLR32 IC DEFAULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IC DEFAULT) | READ |  [ICDEFLT^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | LOCATION | [69.9](http://localhost:9000/schema/69_9) | 
U57 | [ORWDLR32 IMMED COLLECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IMMED COLLECT) | READ |  [IMMCOLL^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 1 | LOCATION, UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U58 | [ORWDLR33 LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 LC TO WC) | READ |  [LCTOWC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC | 6 | LOCATION, PARAMETER |  | ORWLR LC CHANGED TO WC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U59 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FAILDEA) | UTILITY |  [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, ORNP, PSTYPE | 13 | FMUTILITY, IS-A | [101.43](http://localhost:9000/schema/101_43) | 
U60 | [ORWDPS1 IVDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 IVDEA) | READ |  [FDEA1^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | OI, OITYPE, ORNP | 13 | - | [200](http://localhost:9000/schema/200),[101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U61 | [ORWDPS32 AUTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 AUTH) | READ |  [AUTH^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PRV, ORDLOG | 12 | PARAMETER |  | OR OREMAS MED ORDERS
U62 | [ORWDPS32 AUTHNVA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 AUTHNVA) | READ |  [AUTHNVA^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html) | PRV | 8 | PARAMETER |  | OR OREMAS NON-VA MED ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U63 | [ORWDRA32 APPROVAL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 APPROVAL) | READ |  [APPROVAL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DUMMY | 7 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U64 | [ORWDXM1 SVRPC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM1 SVRPC) | READ |  [SVRPC^ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html) | X | 1 | IS-A, PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U65 | [ORWDXVB STATALOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB STATALOW) | READ |  [STATALOW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U66 | [ORWGN AUTHUSR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN AUTHUSR) | READ |  [AUTHUSR^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | &nbsp; | 2 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U67 | [ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ALLVIEWS) | READ |  [ALLVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VIEW, USER | 2 | - |  | ORWG GRAPH VIEW
U68 | [ORWGRPC DELVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DELVIEWS) | __CHANGE__ |  [DELVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC | 2 | PARAMETER |  | 
U69 | [ORWGRPC PUBLIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC PUBLIC) | READ |  [PUBLIC^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U70 | [ORWLRR ATG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR ATG) | READ |  [ATG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TESTGP, USER | 1 | DUZ TO K/META | [60](http://localhost:9000/schema/60),[69.2](http://localhost:9000/schema/69_2),[68](http://localhost:9000/schema/68) | 
U71 | [ORWLRR TG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR TG) | READ |  [TG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | USER | 1 | - |  | 
U72 | [ORWLRR USERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR USERS) | READ |  [USERS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | FROM, DIR | 1 | QUERY | [68](http://localhost:9000/schema/68) | 
U73 | [ORWLRR UTGA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGA) | READ |  [UTGA^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS | 1 | QUERY |  | 
U74 | [ORWLRR UTGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGD) | READ |  [UTGD^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | TGRP | 1 | QUERY |  | 
U75 | [ORWLRR UTGR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR UTGR) | READ |  [UTGR^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | ORTESTS, TGRP | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U76 | [ORWNSS NSSMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS NSSMSG) | READ |  [NSSMSG^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | &nbsp; | 4 | PARAMETER |  | ORWIM NSS MESSAGE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U77 | [ORWOR PKIUSE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKIUSE) | READ |  [PKIUSE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U78 | [ORWOR1 GETDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDEA) | READ |  [GETDEA^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORUSER | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U79 | [ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTIVE PROV) | READ |  [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORWPROV, ORWDT | 1 | IS-A |  | 
U80 | [ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ALWAYS CHECKOUT) | READ |  [DOCHKOUT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | IS-A, PARAMETER |  | ORWPCE DISABLE AUTO CHECKOUT
U81 | [ORWPCE ANYTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ANYTIME) | READ |  [ANYTIME^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 4 | PARAMETER |  | ORWPCE ANYTIME ENCOUNTERS
U82 | [ORWPCE ASKPCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ASKPCE) | READ |  [ASKPCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | PARAMETER |  | ORWPCE ASK ENCOUNTER UPDATE
U83 | [ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE AUTO VISIT TYPE SELECT) | READ |  [AUTOVSIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC | 5 | IS-A, PARAMETER |  | ORWPCE DISABLE AUTO VISIT TYPE
U84 | [ORWPCE FORCE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE FORCE) | READ |  [FORCE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | USER, LOC | 5 | LOCATION, PARAMETER |  | ORWPCE FORCE PCE ENTRY
U85 | [ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET EXCLUDED) | READ |  [EXCLUDED^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | LOC, TYPE | 6 | PARAMETER |  | <VARIABLE>
U86 | [ORWPCE MH TEST AUTHORIZED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MH TEST AUTHORIZED) | READ |  [MHATHRZD^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | TEST, USER | 7 | PARAMETER |  | 
U87 | [ORWPCE MHTESTOK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MHTESTOK) | READ |  [MHTESTOK^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 6 | IS-A, PARAMETER |  | PXRM MENTAL HEALTH ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U88 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DFLTSRC) | READ |  [DFLTSRC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 2 | PARAMETER |  | ORLP DEFAULT LIST SOURCE
U89 | [ORWPT SAVDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SAVDFLT) | __CHANGE__ |  [SAVDFLT^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | X | 1 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U90 | [ORWRP2 SAVLKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 SAVLKUP) | __CHANGE__ |  [SAVLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | VAL | 4 | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U91 | [ORWSR SAVE SURG CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SAVE SURG CONTEXT) | __CHANGE__ |  [SVSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT SURGERY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U92 | [ORWTIU CANLINK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU CANLINK) | READ |  [CANLINK^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTITLE | 1 | - |  | 
U93 | [ORWTIU GET DCSUMM CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET DCSUMM CONTEXT) | READ |  [GTDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | PARAMETER |  | ORCH CONTEXT SUMMRIES
U94 | [ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET TIU CONTEXT) | READ |  [GTTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORUSER | 7 | PARAMETER |  | ORCH CONTEXT NOTES
U95 | [ORWTIU SAVE DCSUMM CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU SAVE DCSUMM CONTEXT) | __CHANGE__ |  [SVDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT SUMMRIES
U96 | [ORWTIU SAVE TIU CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU SAVE TIU CONTEXT) | __CHANGE__ |  [SVTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORCTXT | 5 | PARAMETER |  | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U97 | [ORWTPD ACTDF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD ACTDF) | __CHANGE__ |  [ACTDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 8 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
U98 | [ORWTPD DELDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD DELDFLT) | __CHANGE__ |  [DELDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 4 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL, ORWRP TIME/OCC LIMITS INDV
U99 | [ORWTPD GETDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETDFLT) | READ |  [GETDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 3 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
U100 | [ORWTPD PUTOCM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD PUTOCM) | __CHANGE__ |  [PUTOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | ORVAL | 5 | PARAMETER |  | ORCH CONTEXT MEDS
U101 | [ORWTPD SUDF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD SUDF) | __CHANGE__ |  [SUDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | VALUE | 5 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
U102 | [ORWTPD SUINDV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD SUINDV) | __CHANGE__ |  [SUINDV^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | RPTS, VALUE | 7 | PARAMETER |  | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U103 | [ORWTPD1 GETCSRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETCSRNG) | READ |  [GETCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 10 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
U104 | [ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEDATS) | READ |  [GETEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 5 | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
U105 | [ORWTPD1 PUTCSRNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 PUTCSRNG) | __CHANGE__ |  [PUTCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | INFO | 10 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP, ORQQLR DATE RANGE INPT, ORQQLR DATE RANGE OUTPT
U106 | [ORWTPD1 PUTEDATS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 PUTEDATS) | __CHANGE__ |  [PUTEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | Y | 10 | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U107 | [ORWTPP ADDLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP ADDLIST) | READ |  [ADDLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - | [100.21](http://localhost:9000/schema/100_21) | 
U108 | [ORWTPP CHKSURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CHKSURR) | READ |  [CHKSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | SURR | 1 | PARAMETER |  | 
U109 | [ORWTPP CLDAYS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLDAYS) | READ |  [CLDAYS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
U110 | [ORWTPP CLEARNOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLEARNOT) | __CHANGE__ |  [CLEARNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | [8992.1](http://localhost:9000/schema/8992_1) | 
U111 | [ORWTPP CLRANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CLRANGE) | READ |  [CLRANGE^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
U112 | [ORWTPP CSARNG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CSARNG) | READ |  [CSARNG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
U113 | [ORWTPP CSLAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP CSLAB) | READ |  [CSLAB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | PARAMETER |  | 
U114 | [ORWTPP DELLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP DELLIST) | READ |  [DELLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNUM | 1 | - | [100.21](http://localhost:9000/schema/100_21) | 
U115 | [ORWTPP GETCOMBO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETCOMBO) | READ |  [GETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U116 | [ORWTPP GETCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETCOS) | READ |  [GETCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | FROM, DIR, VISITORS | 2 | - |  | 
U117 | [ORWTPP GETDCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETDCOS) | READ |  [GETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U118 | [ORWTPP GETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETIMG) | READ |  [GETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U119 | [ORWTPP GETNOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETNOT) | READ |  [GETNOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U120 | [ORWTPP GETNOTO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETNOTO) | READ |  [GETNOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U121 | [ORWTPP GETOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETOC) | READ |  [GETOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U122 | [ORWTPP GETOTHER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETOTHER) | READ |  [GETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U123 | [ORWTPP GETREM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETREM) | READ |  [GETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U124 | [ORWTPP GETSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETSUB) | READ |  [GETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U125 | [ORWTPP GETSURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETSURR) | READ |  [GETSURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U126 | [ORWTPP GETTD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETTD) | READ |  [GETTD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | - |  | 
U127 | [ORWTPP GETTU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP GETTU) | READ |  [GETTU^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS | 1 | - |  | 
U128 | [ORWTPP LSDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP LSDEF) | READ |  [LSDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U129 | [ORWTPP NEWLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP NEWLIST) | READ |  [NEWLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | LISTNAME, ORVIZ | 1 | - |  | 
U130 | [ORWTPP PLISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLISTS) | READ |  [PLISTS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | [100.21](http://localhost:9000/schema/100_21) | 
U131 | [ORWTPP PLTEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLTEAMS) | READ |  [PLTEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - | [100.21](http://localhost:9000/schema/100_21) | 
U132 | [ORWTPP REMLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP REMLIST) | __CHANGE__ |  [REMLIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
U133 | [ORWTPP SAVECD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVECD) | __CHANGE__ |  [SAVECD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U134 | [ORWTPP SAVECS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVECS) | __CHANGE__ |  [SAVECS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U135 | [ORWTPP SAVELIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVELIST) | __CHANGE__ |  [SAVELIST^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | PLIST, LISTNUM, ORVIZ | 1 | - |  | 
U136 | [ORWTPP SAVENOT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVENOT) | __CHANGE__ |  [SAVENOT^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
U137 | [ORWTPP SAVENOTO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVENOTO) | __CHANGE__ |  [SAVENOTO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U138 | [ORWTPP SAVEOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVEOC) | __CHANGE__ |  [SAVEOC^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
U139 | [ORWTPP SAVEPLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVEPLD) | __CHANGE__ |  [SAVEPLD^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U140 | [ORWTPP SAVESURR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVESURR) | __CHANGE__ |  [SAVESURR^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U141 | [ORWTPP SAVET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SAVET) | __CHANGE__ |  [SAVET^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | CLASS, DEFAULT, VALUES | 1 | - |  | 
U142 | [ORWTPP SETCOMBO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETCOMBO) | UTILITY |  [SETCOMBO^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 2 | - |  | 
U143 | [ORWTPP SETDCOS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETDCOS) | UTILITY |  [SETDCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
U144 | [ORWTPP SETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETIMG) | UTILITY |  [SETIMG^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | MAX, START, STOP | 1 | - |  | 
U145 | [ORWTPP SETOTHER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETOTHER) | UTILITY |  [SETOTHER^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | INFO | 1 | - |  | 
U146 | [ORWTPP SETREM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETREM) | UTILITY |  [SETREM^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUES | 1 | - |  | 
U147 | [ORWTPP SETSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SETSUB) | UTILITY |  [SETSUB^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | VALUE | 1 | - |  | 
U148 | [ORWTPP SORTDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP SORTDEF) | READ |  [SORTDEF^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
U149 | [ORWTPP TEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP TEAMS) | READ |  [TEAMS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html) | &nbsp; | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U150 | [ORWTPT GETTEAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPT GETTEAM) | READ |  [GETTEAM^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html) | TEAM | 7 | - | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U151 | [ORWU DEFAULT DIVISION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DEFAULT DIVISION) | READ |  [DEFDIV^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | &nbsp; | 12 | LOCATION |  | 
U152 | [ORWU HAS OPTION ACCESS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HAS OPTION ACCESS) | READ |  [HASOPTN^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | OPTION | 3 | - |  | 
U153 | [ORWU HASKEY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HASKEY) | READ |  [HASKEY^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | KEY | 1 | - |  | 
U154 | [ORWU NEWPERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU NEWPERS) | READ |  [NEWPERS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | ORFROM, ORDIR, ORKEY, ORDATE, ORVIZ, ORALL | 1 | - |  | 
U155 | [ORWU PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PARAM) | READ |  [PARAM^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | PARAMETER |  | <VARIABLE>
U156 | [ORWU PARAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU PARAMS) | READ |  [PARAMS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | APARAM | 1 | PARAMETER |  | <VARIABLE>
U157 | [ORWU TOOLMENU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU TOOLMENU) | READ |  [TOOLMENU^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 3 | PARAMETER |  | ORWT TOOLS MENU
U158 | [ORWU USERINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU USERINFO) | READ |  [USERINFO^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | &nbsp; | 56 | PARAMETER |  | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
U159 | [ORWU VALIDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VALIDSIG) | UTILITY |  [VALIDSIG^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U160 | [ORWU1 NAMECVT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU1 NAMECVT) | READ |  [NAMECVT^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | IEN | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U161 | [ORWU16 NEWPERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 NEWPERS) | READ |  [NEWPERS^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM, KEY | 10 | QUERY |  | 
U162 | [ORWU16 USERINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 USERINFO) | READ |  [USERINFO^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | &nbsp; | 3 | - |  | 
U163 | [ORWU16 VALIDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 VALIDSIG) | UTILITY |  [VALIDSIG^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U164 | [TIU AUTHORIZATION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU AUTHORIZATION) | READ |  [CANDO^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA, TIUACT | 8 | IS-A |  | 
U165 | [TIU CAN CHANGE COSIGNER?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CAN CHANGE COSIGNER?) | READ |  [CANCHCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | IS-A |  | 
U166 | [TIU DIV AND CLASS INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DIV AND CLASS INFO) | READ |  [USERINFO^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html) | USER | 13 | - | [200](http://localhost:9000/schema/200),[8930](http://localhost:9000/schema/8930) | 
U167 | [TIU FIELD CAN EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD CAN EDIT) | READ |  [CANEDIT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 9 | IS-A, PARAMETER |  | TIU FIELD EDITOR CLASSES
U168 | [TIU GET DEFAULT PROVIDER](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DEFAULT PROVIDER) | READ |  [DEFDOC^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | HLOC, USER, TIUDT, TIUIEN | 7 | - |  | 
U169 | [TIU GET DS TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DS TITLES) | READ |  [SUMMARY^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98),[8925.1](http://localhost:9000/schema/8925_1) | 
U170 | [TIU GET LIST OF OBJECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET LIST OF OBJECTS) | READ |  [OBJLST^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html) | &nbsp; | 6 | - |  | 
U171 | [TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PERSONAL PREFERENCES) | READ |  [GETPREF^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | USER | 1 | - |  | 
U172 | [TIU GET PN TITLES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PN TITLES) | READ |  [NOTES^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | &nbsp; | 1 | DUZ TO K/META | [8925.98](http://localhost:9000/schema/8925_98),[8925.1](http://localhost:9000/schema/8925_1) | 
U173 | [TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS USER A PROVIDER?) | READ |  [ISAPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 3 | IS-A |  | 
U174 | [TIU IS USER A USR PROVIDER](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU IS USER A USR PROVIDER) | READ |  [USRPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | USER, DATE | 4 | IS-A |  | 
U175 | [TIU LOAD BOILERPLATE TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOAD BOILERPLATE TEXT) | READ |  [BLRSHELL^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | TITLE, DFN, VSTR | 3 | ASSEMBLY | [8925.1](http://localhost:9000/schema/8925_1) | 
U176 | [TIU PERSONAL TITLE LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU PERSONAL TITLE LIST) | READ |  [PERSLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html) | DUZ, CLASS, TIUC, TIUFLG | 25 | DUZ TO K/META | [8925.1](http://localhost:9000/schema/8925_1) | 
U177 | [TIU REQUIRES COSIGNATURE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU REQUIRES COSIGNATURE) | READ |  [REQCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUTYP, TIUDA, TIUSER, TIUDT | 6 | IS-A |  | 
U178 | [TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE ACCESS LEVEL) | READ |  [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | ROOT, USER, LOC | 24 | PARAMETER |  | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
U179 | [TIU USER INACTIVE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU USER INACTIVE?) | READ |  [USRINACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
U180 | [XUS DIVISION GET](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS DIVISION GET) | READ |  [DIVGET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | IEN | 7 | - | [200](http://localhost:9000/schema/200) | 
U181 | [XUS DIVISION SET](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS DIVISION SET) | __CHANGE__ |  [DIVSET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | DIV | 6 | - |  | 
U182 | [XUS GET USER INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS GET USER INFO) | READ |  [USERINFO^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html) | &nbsp; | 14 | - | [200](http://localhost:9000/schema/200) | 
U183 | [XUS PKI GET UPN](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS PKI GET UPN) | READ |  [GETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html) | &nbsp; | 1 | - | [200](http://localhost:9000/schema/200) | 
U184 | [XUS PKI SET UPN](http://vistadataproject.info/artifacts/vistaRPC documentation/XUS PKI SET UPN) | __CHANGE__ |  [SETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html) | V | 3 | - | [200](http://localhost:9000/schema/200) | 


### Other (100)

Utilties and retrievals (and some settings) for __user-independent, non clinical data__ that don't fit into 'Knowledge'.

Category | Number
--- | ---
CHANGE | 6 (6%)
READ | 53 (53%)
UTILITY | 41 (41%)

\# | Name | Category | Tags
--- | --- | --- | ---
\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
O1 | [GMV CONVERT DATE](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV CONVERT DATE) | UTILITY |  [GETDT^GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html) | GMRDATE | 4 | ALLJS, HARD CODED, RPCLOCKER |  | 
O2 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV DLL VERSION) | READ |  [DLL^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html) | GMVX | 3 | PARAMETER |  | GMV DLL VERSION
O3 | [GMV GET CURRENT TIME](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV GET CURRENT TIME) | UTILITY |  [TIME^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html) | P2 | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
O4 | [GMV LOCATION SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV LOCATION SELECT) | UTILITY |  [RPC^GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html) | OPTION, DATA | 4 | DYNAMIC EXECUTE |  | 
O5 | [GMV MANAGER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV MANAGER) | UTILITY |  [RPC^GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html) | OPTION, DATA | 5 | DYNAMIC EXECUTE, SECURITY HOLE |  | 
O6 | [GMV PARAMETER](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV PARAMETER) | __CHANGE__ |  [RPC^GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html) | OPTION, ENT, PAR, INST, VAL | 9 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O7 | [ORECS01 GETDIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 GETDIV) | READ |  [GETDIV^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | USR | 2 | GLOBAL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O8 | [ORIMO ISCLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO ISCLOC) | READ |  [ISCLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | ALOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O9 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF CLEAR) | UTILITY |  [CLEAR^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | &nbsp; | 2 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O10 | [ORQ NULL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQ NULL LIST) | UTILITY |  [NLIST^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O11 | [ORQPT CLINICS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT CLINICS) | READ |  [CLIN^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION, PARAMETER |  | ORWD COMMON CLINIC
O12 | [ORQPT KILL RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT KILL RPL) | UTILITY |  [RPLCLEAN^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | ORJ | 6 | HARD CODED, REENTRANCY |  | 
O13 | [ORQPT WARDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARDS) | READ |  [WARD^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | &nbsp; | 5 | LOCATION | [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O14 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 GET CONTEXT) | READ |  [GETCTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORUSER | 1 | PARAMETER |  | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O15 | [ORQQPL CLIN FILTER LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CLIN FILTER LIST) | READ |  [GETCLIN^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | INP | 5 | IEN-LOOKUP, LOCATION |  | 
O16 | [ORQQPL CLIN SRCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CLIN SRCH) | READ |  [CLINSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | X | 4 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O17 | [ORQQPX GET HIST LOCATIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX GET HIST LOCATIONS) | READ |  [HISTLOC^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | &nbsp; | 12 | LOCATION | [9999999.06](http://localhost:9000/schema/9999999_06) | 
O18 | [ORQQPX SAVELVL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX SAVELVL) | __CHANGE__ |  [SAVELVL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | LVL, CLASS, DATA | 13 | PARAMETER |  | <VARIABLE>, ORQQPX COVER SHEET REM CLASSES, ORQQPX COVER SHEET REMINDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O19 | [ORQQVI2 VITALS RATE CHECK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS RATE CHECK) | UTILITY |  [RATECHK^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html) | ORQTYPE, ORQRATE, ORQUNIT | 1 | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O20 | [ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN AUTORDV) | READ |  [AUTORDV^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 1 | PARAMETER |  | ORWRP CIRN AUTOMATIC
O21 | [ORWCIRN HDRON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN HDRON) | READ |  [HDRON^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | &nbsp; | 2 | PARAMETER |  | ORWRP HDR ON
O22 | [ORWCIRN WEBADDR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCIRN WEBADDR) | READ |  [WEBADDR^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html) | PATID | 4 | HARD CODED, PARAMETER |  | ORWRP VISTAWEB ADDRESS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O23 | [ORWD DT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD DT) | UTILITY |  [DT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | X | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O24 | [ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 BASTATUS) | READ |  [BASTATUS^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | &nbsp; | 3 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O25 | [ORWDFH NFSLOC READY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH NFSLOC READY) | READ |  [OPLOCOK^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O26 | [ORWDLR STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR STOP) | UTILITY |  [STOP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html) | X2 | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O27 | [ORWDLR32 GET LAB TIMES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 GET LAB TIMES) | READ |  [GETLABTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 17 | PARAMETER |  | <VARIABLE>, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
O28 | [ORWDLR32 IC VALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 IC VALID) | UTILITY |  [ICVALID^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORTIME | 2 | FMUTILITY, IS-A | [69.9](http://localhost:9000/schema/69_9) | 
O29 | [ORWDLR32 LAB COLL TIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 LAB COLL TIME) | UTILITY |  [LABCOLTM^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORDATE, ORLOC | 13 | IS-A, PARAMETER |  | <VARIABLE>, LR EXCEPTED LOCATIONS, LR IGNORE HOLIDAYS, LR PHLEBOTOMY COLLECTION
O30 | [ORWDLR32 MAXDAYS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 MAXDAYS) | UTILITY |  [MAXDAYS^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | LOC, SCHED | 10 | LOCATION, PARAMETER |  | LR MAX DAYS CONTINUOUS
O31 | [ORWDLR32 STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 STOP) | UTILITY |  [STOP^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | X2 | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O32 | [ORWDLR33 FUTURE LAB COLLECTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 FUTURE LAB COLLECTS) | READ |  [LCFUTR^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | ORLOC, ORDIV | 4 | LOCATION, PARAMETER |  | LR LAB COLLECT FUTURE
O33 | [ORWDLR33 LASTTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 LASTTIME) | UTILITY |  [LASTTIME^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html) | &nbsp; | 5 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O34 | [ORWDOR VALNUM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR VALNUM) | UTILITY |  [VALNUM^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html) | X, DOM | 9 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O35 | [ORWDPS1 LOCPICK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 LOCPICK) | READ |  [LOCPICK^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | LOC | 6 | LOCATION, PARAMETER |  | ORWDPS ROUTING DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O36 | [ORWDPS2 DAY2QTY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 DAY2QTY) | UTILITY |  [DAY2QTY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | DAY, UPD, SCH, DUR, PAT, DRG | 15 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O37 | [ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALQTY) | UTILITY |  [VALQTY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 2 | HARD CODED, IS-A |  | 
O38 | [ORWDPS32 VALRATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALRATE) | UTILITY |  [VALRATE^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X | 3 | HARD CODED, IS-A |  | 
O39 | [ORWDPS32 VALSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 VALSCH) | UTILITY |  [VALSCH^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | X, PSTYPE | 8 | HARD CODED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O40 | [ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 LOCTYPE) | READ |  [LOCTYPE^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | ORLOC | 4 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O41 | [ORWDXC ON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC ON) | READ |  [ON^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | &nbsp; | 1 | IS-A, PARAMETER |  | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O42 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM MSTYLE) | READ |  [MSTYLE^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | &nbsp; | 1 | PARAMETER |  | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O43 | [ORWDXVB NURSADMN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB NURSADMN) | READ |  [NURSADMN^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | PARAMETER |  | OR VBECS SUPPRESS NURS ADMIN
O44 | [ORWDXVB VBTNS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB VBTNS) | READ |  [VBTNS^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | &nbsp; | 1 | PARAMETER |  | ORWDXVB VBECS TNS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O45 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 COLLTIM) | READ |  [COLLTIM^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 1 | PARAMETER |  | OR VBECS REMOVE COLL TIME
O46 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 SWPANEL) | READ |  [SWPANEL^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html) | &nbsp; | 2 | PARAMETER |  | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O47 | [ORWGN GNLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGN GNLOC) | READ |  [GNLOC^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html) | ORFROM, DIR | 13 | IS-A, PARAMETER |  | OR GN LOCATIONS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O48 | [ORWGRPC GETDATES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETDATES) | UTILITY |  [GETDATES^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | REPORTID | 2 | PARAMETER | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
O49 | [ORWGRPC GETPREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETPREF) | UTILITY |  [GETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY, PARAMETER |  | ORWG GRAPH SETTING
O50 | [ORWGRPC GETSIZE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETSIZE) | UTILITY |  [GETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | FMUTILITY, PARAMETER |  | 
O51 | [ORWGRPC GETVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETVIEWS) | UTILITY |  [GETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ALL, PUBLIC, EXT, USER | 2 | FMUTILITY, PARAMETER |  | 
O52 | [ORWGRPC SETPREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETPREF) | __CHANGE__ |  [SETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | SETTING, PUBLIC | 2 | PARAMETER |  | 
O53 | [ORWGRPC SETSIZE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETSIZE) | __CHANGE__ |  [SETSIZE^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | VAL | 2 | PARAMETER |  | 
O54 | [ORWGRPC SETVIEWS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC SETVIEWS) | __CHANGE__ |  [SETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | NAME, PUBLIC, VAL | 2 | PARAMETER |  | 
O55 | [ORWGRPC TESTING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TESTING) | UTILITY |  [TESTING^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | &nbsp; | 2 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O56 | [ORWLEX GETFREQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLEX GETFREQ) | UTILITY |  [GETFREQ^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORSRCHTX | 2 | HARD CODED |  | 
O57 | [ORWLEX GETI10DX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLEX GETI10DX) | UTILITY |  [GETI10DX^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html) | ORX, ORDT | 32 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O58 | [ORWLR REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR REPORT LISTS) | UTILITY |  [LIST^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html) | &nbsp; | 5 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O59 | [ORWNSS CHKSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS CHKSCH) | UTILITY |  [CHKSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | SCH | 3 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O60 | [ORWOR EXPIRED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR EXPIRED) | UTILITY |  [EXPIRED^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 4 | PARAMETER |  | ORWOR EXPIRED ORDERS
O61 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKISITE) | READ |  [PKISITE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | &nbsp; | 7 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O62 | [ORWORB GETSORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GETSORT) | READ |  [GETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | &nbsp; | 1 | PARAMETER |  | ORB SORT DIRECTION, ORB SORT METHOD
O63 | [ORWORB SETSORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB SETSORT) | __CHANGE__ |  [SETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | SORT, DIR | 3 | PARAMETER |  | ORB SORT DIRECTION, ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O64 | [ORWPCE GAFURL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GAFURL) | READ |  [GAFURL^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | &nbsp; | 5 | ALLJS, HARD CODED |  | 
O65 | [ORWPCE GETSVC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GETSVC) | UTILITY |  [GETSVC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | SVC, LOC, INP | 5 | LOCATION |  | 
O66 | [ORWPCE ISCLINIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ISCLINIC) | READ |  [ISCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORLOC | 4 | IS-A, LOCATION |  | 
O67 | [ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE MHCLINIC) | READ |  [MHCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORIEN | 2 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O68 | [ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE1 NONCOUNT) | READ |  [NONCOUNT^ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html) | ORLOC | 3 | IS-A, LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O69 | [ORWPT16 PSCNVT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 PSCNVT) | READ |  [PSCNVT^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O70 | [ORWRA DEFAULT EXAM SETTINGS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA DEFAULT EXAM SETTINGS) | READ |  [GETDEF^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | &nbsp; | 11 | PARAMETER |  | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O71 | [ORWRP2 GETLKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 GETLKUP) | READ |  [GETLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | &nbsp; | 1 | PARAMETER |  | ORWRP ADHOC LOOKUP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O72 | [ORWSR GET SURG CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR GET SURG CONTEXT) | READ |  [GTSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORUSER | 2 | PARAMETER |  | ORCH CONTEXT SURGERY
O73 | [ORWSR SHOW OPTOP WHEN SIGNING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SHOW OPTOP WHEN SIGNING) | READ |  [SHOWOPTP^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCASE | 2 | HARD CODED |  | 
O74 | [ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR SHOW SURG TAB) | READ |  [SHOWSURG^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | &nbsp; | 3 | PARAMETER |  | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O75 | [ORWTPD GETOCM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETOCM) | READ |  [GETOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 1 | PARAMETER |  | ORCH CONTEXT MEDS
O76 | [ORWTPD RSDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD RSDFLT) | READ |  [RSDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html) | &nbsp; | 2 | PARAMETER |  | ORWRP TIME/OCC LIMITS ALL
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O77 | [ORWTPD1 GETCSDEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETCSDEF) | READ |  [GETCSDEF^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 8 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
O78 | [ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEAFL) | READ |  [GETEAFL^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 1 | PARAMETER |  | ORQQEAFL ENC APPT FUTURE LIMIT
O79 | [ORWTPD1 GETEFDAT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD1 GETEFDAT) | READ |  [GETEFDAT^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html) | &nbsp; | 7 | PARAMETER |  | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O80 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO CSARNGD) | READ |  [CSARNGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | PARAMETER |  | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
O81 | [ORWTPO CSLABD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO CSLABD) | READ |  [CSLABD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 4 | PARAMETER |  | <VARIABLE>
O82 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO GETIMGD) | READ |  [GETIMGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 1 | PARAMETER |  | ORCH CONTEXT REPORTS
O83 | [ORWTPO GETTABS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPO GETTABS) | READ |  [GETTABS^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html) | &nbsp; | 2 | PARAMETER | [8989.51](http://localhost:9000/schema/8989_51) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O84 | [ORWU CLINLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU CLINLOC) | READ |  [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION |  | 
O85 | [ORWU DT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU DT) | UTILITY |  [DT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 2 | ALLJS, HARD CODED, RPCLOCKER |  | 
O86 | [ORWU EXTNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU EXTNAME) | UTILITY |  [EXTNAME^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | IEN, FN | 2 | FMUTILITY |  | 
O87 | [ORWU GBLREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU GBLREF) | UTILITY |  [GBLREF^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FN | 2 | FMUTILITY |  | 
O88 | [ORWU GENERIC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU GENERIC) | UTILITY |  [GENERIC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR, REF | 4 | FMUTILITY |  | 
O89 | [ORWU HOSPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU HOSPLOC) | READ |  [HOSPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 5 | LOCATION |  | 
O90 | [ORWU INPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU INPLOC) | READ |  [INPLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | FROM, DIR | 6 | LOCATION |  | 
O91 | [ORWU VALDT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU VALDT) | UTILITY |  [VALDT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html) | X, %DT | 1 | ALLJS, HARD CODED, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O92 | [ORWU1 NEWLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU1 NEWLOC) | READ |  [NEWLOC^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html) | ORFROM, DIR | 6 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O93 | [ORWU16 HOSPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 HOSPLOC) | READ |  [HOSPLOC^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | DIR, FROM | 10 | LOCATION, QUERY |  | 
O94 | [ORWU16 VALDT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU16 VALDT) | UTILITY |  [VALDT^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html) | X, %DT | 1 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O95 | [ORWUH POPUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUH POPUP) | READ |  [POPUP^ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html) | CTRL | 6 | PARAMETER |  | ORWUH WHATSTHIS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O96 | [ORWUX SYMTAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUX SYMTAB) | UTILITY |  [SYMTAB^ORWUX](http://code.osehra.org/dox/Routine_ORWUX_source.html) | &nbsp; | 17 | HARD CODED |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
O97 | [TIU FIELD CHECK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD CHECK) | UTILITY |  [CHKFLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | &nbsp; | 37 | HARD CODED |  | 
O98 | [TIU FIELD DOLMTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD DOLMTEXT) | UTILITY |  [DOLMTEXT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIULIST | 4 | FMUTILITY |  | 
O99 | [TIU FIELD LIST ADD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LIST ADD) | UTILITY |  [XFLDLD^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | IN | 6 | REENTRANCY |  | 
O100 | [TIU GET SITE PARAMETERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET SITE PARAMETERS) | READ |  [SITEPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | &nbsp; | 3 | LOCATION |  | 




