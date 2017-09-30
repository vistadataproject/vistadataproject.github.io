---
layout: default
title: VDP Year 2 - V2 'Meta In Mongo Scope'
---

# Scope of 'Meta in Mongo' Work

__132__ RPCs, __102__ Files, __82__ Parameters. Note - still need to include files referenced by in scope files AND to __enumerate the distinct services__ we will be building.



## RPCs of Meta

__132__ RPCs.

\# | Name | File(s) | Parameter(s)
--- | --- | --- | ---
&nbsp; | &nbsp; | &nbsp; | &nbsp;
1 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_DLL_VERSION) | &nbsp; | GMV DLL VERSION
2 | [GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_GET_VITAL_TYPE_IEN) | 120.51 | &nbsp;
3 | [GMV MANAGER](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_MANAGER) | 120.51, 120.52, 120.53, 4.2, 4, 44, 200 | GMV TEMPLATE DEFAULT, GMV TEMPLATE, GMV ALLOW USER TEMPLATES
4 | [GMV PARAMETER](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_PARAMETER) | 8989.5, 8989.3, 8989.51, 8989.518 | GMV DLL VERSION, GMV GUI VERSION, GMV WEBLINK, GMV ALLOW USER TEMPLATES, GMV DEFAULT VALUES, GMV TEMPLATE, GMV TEMPLATE DEFAULT, GMV USER DEFAULTS
5 | [GMV USER](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_USER) | &nbsp; | GMV USER DEFAULTS
6 | [GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/GMV_VITALS/CAT/QUAL) | 120.51, 120.52, 120.53, 120.57 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORB_SORT_METHOD) | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | [ORDEA DEATEXT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORDEA_DEATEXT) | &nbsp; | OR DEA TEXT
&nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/OREVNTX1_DLGIEN) | 101.41 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | [ORIMO ISCLOC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORIMO_ISCLOC) | 44 | &nbsp;
11 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORIMO_ISIVQO) | 101.41, 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORPRF_CLEAR) | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORQORB SORT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQORB_SORT) | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQPT_DEFAULT_LIST_SOURCE) | &nbsp; | ORLP DEFAULT LIST SOURCE, ORLP DEFAULT TEAM, ORLP DEFAULT WARD, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT CLINIC MONDAY, ORLP DEFAULT CLINIC TUESDAY, ORLP DEFAULT CLINIC WEDNESDAY, ORLP DEFAULT CLINIC THURSDAY, ORLP DEFAULT CLINIC FRIDAY, ORLP DEFAULT CLINIC SATURDAY, ORLP DEFAULT CLINIC SUNDAY
&nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQCN_SVC_W/SYNONYMS) | 123.5, 101.43 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
16 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQCN2_GET_CONTEXT) | &nbsp; | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORQQPL INIT USER](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQPL_INIT_USER) | 49, 200 | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES
18 | [ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQPL_USER_PROB_CATS) | 125.1 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
19 | [ORQQPL4 LEX](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQPL4_LEX) | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
20 | [ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQPX_NEW_REMINDERS_ACTIVE) | &nbsp; | PXRM GUI REMINDERS ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp;
21 | [ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORQQPXRM_REMINDER_CATEGORIES) | 811.7, 811.9, 801.41 | PXRM CPRS LOOKUP CATEGORIES
&nbsp; | &nbsp; | &nbsp; | &nbsp;
22 | [ORWCH LDFONT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCH_LDFONT) | &nbsp; | ORWCH FONT SIZE
23 | [ORWCH LOADALL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCH_LOADALL) | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS
24 | [ORWCH LOADSIZ](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCH_LOADSIZ) | &nbsp; | ORWCH BOUNDS
25 | [ORWCH SAVEALL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCH_SAVEALL) | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS
26 | [ORWCH SAVFONT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCH_SAVFONT) | &nbsp; | ORWCH FONT SIZE
&nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | [ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCIRN_AUTORDV) | &nbsp; | ORWRP CIRN AUTOMATIC
&nbsp; | &nbsp; | &nbsp; | &nbsp;
28 | [ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCOM_ORDEROBJ) | &nbsp; | ORWCOM ORDER ACCEPTED
29 | [ORWCOM PTOBJ](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCOM_PTOBJ) | &nbsp; | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp;
30 | [ORWCV POLL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCV_POLL) | &nbsp; | &nbsp;
31 | [ORWCV START](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCV_START) | 101.24 | ORWOR COVER RETRIEVAL NEW, ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp;
32 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWCV1_COVERSHEET_LIST) | 101.24 | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp;
33 | [ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDAL32_ALLERGY_MATCH) | 120.82, 50.6, 50.67, 50.416, 50.605, 50.68 | &nbsp;
34 | [ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDAL32_CLINUSER) | 8930, 8930.3 | OR ALLERGY ENTERED IN ERROR
35 | [ORWDAL32 DEF](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDAL32_DEF) | 120.83, 120.84 | &nbsp;
36 | [ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDAL32_SITE_PARAMS) | 120.84 | &nbsp;
37 | [ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDAL32_SYMPTOMS) | 120.83 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
38 | [ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDBA1_BASTATUS) | 9.7 | OR BILLING AWARENESS STATUS
&nbsp; | &nbsp; | &nbsp; | &nbsp;
39 | [ORWDBA3 HINTS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDBA3_HINTS) | 9.2 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
40 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS1_FAILDEA) | 50, 50.68, 50.7, 50.606, 101.43, 200, 4, 4.05 | &nbsp;
41 | [ORWDPS1 ODSLCT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS1_ODSLCT) | 550, 101.42 | ORWDPS ROUTING DEFAULT, ORWDPS SUPPRESS DISPENSE MSG
&nbsp; | &nbsp; | &nbsp; | &nbsp;
42 | [ORWDPS2 DAY2QTY](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS2_DAY2QTY) | 51, 51.1 | &nbsp;
43 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS2_QOGRP) | 100.98, 101.41 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
44 | [ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS32_VALQTY) | &nbsp; | &nbsp;
45 | [ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS32_VALROUTE) | 51.2 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
46 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDPS5_LESGRP) | 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
47 | [ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDRA32_LOCTYPE) | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
48 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_AGAIN) | 101.41 | &nbsp;
49 | [ORWDX DGNM](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_DGNM) | 100.98 | &nbsp;
50 | [ORWDX DLGDEF](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_DLGDEF) | 101.41 | &nbsp;
51 | [ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_LOCK) | 200 | &nbsp;
52 | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_UNLOCK) | &nbsp; | &nbsp;
53 | [ORWDX WRLST](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX_WRLST) | 101.41, 200 | ORWOR WRITE ORDERS LIST, ORWDX WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDX2_DCREASON) | 9.4, 100.02, 100.03 | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp;
55 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXA_ISACTOI) | 101.43 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWDXC ON](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXC_ON) | &nbsp; | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp;
57 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXM_FORMID) | 101.41, 100.98, 9.4 | &nbsp;
58 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXM_MSTYLE) | &nbsp; | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp;
59 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXM3_ISUDQO) | 101.41, 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
60 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXR01_ISSPLY) | 101.43, 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
61 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXVB3_COLLTIM) | &nbsp; | OR VBECS REMOVE COLL TIME
62 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWDXVB3_SWPANEL) | &nbsp; | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp;
63 | [ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWGRPC_ALLVIEWS) | 68, 69.2, 60 | ORWG GRAPH VIEW
64 | [ORWGRPC GETPREF](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWGRPC_GETPREF) | &nbsp; | ORWG GRAPH SETTING
65 | [ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWGRPC_TESTSPEC) | 60 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
66 | [ORWLEX GETFREQ](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWLEX_GETFREQ) | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
67 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWOR_PKISITE) | 100.7 | &nbsp;
68 | [ORWOR VWGET](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWOR_VWGET) | 100.98 | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp;
69 | [ORWORB GETSORT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWORB_GETSORT) | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION
70 | [ORWORB SETSORT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWORB_SETSORT) | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION
&nbsp; | &nbsp; | &nbsp; | &nbsp;
71 | [ORWORDG IEN](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWORDG_IEN) | 100.98 | &nbsp;
72 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWORDG_MAPSEQ) | 100.98 | ORWOR CATEGORY SEQUENCE
&nbsp; | &nbsp; | &nbsp; | &nbsp;
73 | [ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_ACTIVE_PROV) | 200, 8932.1 | &nbsp;
74 | [ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_ALWAYS_CHECKOUT) | &nbsp; | ORWPCE DISABLE AUTO CHECKOUT
75 | [ORWPCE ANYTIME](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_ANYTIME) | &nbsp; | ORWPCE ANYTIME ENCOUNTERS
76 | [ORWPCE ASKPCE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_ASKPCE) | &nbsp; | ORWPCE ASK ENCOUNTER UPDATE
77 | [ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_AUTO_VISIT_TYPE_SELECT) | &nbsp; | ORWPCE DISABLE AUTO VISIT TYPE
78 | [ORWPCE DIAG](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_DIAG) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
79 | [ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_DX_TEXT) | 80, 80.1, 80.4, 9999999.27 | &nbsp;
80 | [ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_EDUCATION_TOPICS) | 9999999.09 | &nbsp;
81 | [ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_EXAM_TYPE) | 9999999.15 | &nbsp;
82 | [ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_EXCLUDED) | &nbsp; | &nbsp;
83 | [ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_HEALTH_FACTORS_TY) | 9999999.64 | &nbsp;
84 | [ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_IMMUNIZATION_TYPE) | 9999999.14 | &nbsp;
85 | [ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_SET_OF_CODES) | &nbsp; | &nbsp;
86 | [ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GET_SKIN_TEST_TYPE) | 9999999.28 | &nbsp;
87 | [ORWPCE GETSVC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_GETSVC) | 40.7, 44, 150.1 | &nbsp;
88 | [ORWPCE HASCPT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_HASCPT) | 811.1 | &nbsp;
89 | [ORWPCE HF](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_HF) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
90 | [ORWPCE IMM](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_IMM) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
91 | [ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_MHCLINIC) | 40.7, 44 | &nbsp;
92 | [ORWPCE PED](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_PED) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
93 | [ORWPCE PROC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_PROC) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
94 | [ORWPCE SK](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_SK) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
95 | [ORWPCE VISIT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_VISIT) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
96 | [ORWPCE XAM](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE_XAM) | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
97 | [ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPCE1_NONCOUNT) | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
98 | [ORWPS REASON](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPS_REASON) | &nbsp; | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp;
99 | [ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWPT_SHARE) | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
100 | [ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWSR_SHOW_SURG_TAB) | 9.4 | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp;
101 | [ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWTIU_GET_TIU_CONTEXT) | 8926 | ORCH CONTEXT NOTES
&nbsp; | &nbsp; | &nbsp; | &nbsp;
102 | [ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWTPD1_GETEAFL) | &nbsp; | ORQQEAFL ENC APPT FUTURE LIMIT
103 | [ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWTPD1_GETEDATS) | &nbsp; | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp;
104 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWTPO_CSARNGD) | &nbsp; | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
105 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWTPO_GETIMGD) | &nbsp; | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp;
106 | [ORWU CLINLOC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_CLINLOC) | 44 | &nbsp;
107 | [ORWU EXTNAME](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_EXTNAME) | &nbsp; | &nbsp;
108 | [ORWU HASKEY](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_HASKEY) | &nbsp; | &nbsp;
109 | [ORWU NEWPERS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_NEWPERS) | 3.1, 20, 49, 389.9, 200, 8932.1 | &nbsp;
110 | [ORWU PARAM](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_PARAM) | &nbsp; | &nbsp;
111 | [ORWU PATCH](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_PATCH) | 9.4 | &nbsp;
112 | [ORWU TOOLMENU](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_TOOLMENU) | &nbsp; | ORWT TOOLS MENU
113 | [ORWU USERINFO](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_USERINFO) | 4.2, 101.13, 389.9, 8989.3 | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
114 | [ORWU VALIDSIG](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_VALIDSIG) | 200 | &nbsp;
115 | [ORWU VERSRV](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU_VERSRV) | 19 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
116 | [ORWU1 NEWLOC](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWU1_NEWLOC) | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
117 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWUL_FVSUB) | 101.44 | &nbsp;
118 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/ORWUL_QV4DG) | 100.98, 101.41, 101.44 | ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp;
119 | [TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_GET_PERSONAL_PREFERENCES) | 8926 | &nbsp;
120 | [TIU GET PRINT NAME](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_GET_PRINT_NAME) | 8925.1 | &nbsp;
121 | [TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_IS_THIS_A_CONSULT?) | 8925.1 | &nbsp;
122 | [TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_IS_USER_A_PROVIDER?) | 200, 8930, 8930.3, 8932.1 | &nbsp;
123 | [TIU ISPRF](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_ISPRF) | 8925.1 | &nbsp;
124 | [TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_LONG_LIST_OF_TITLES) | 8925.1, 8930.1 | &nbsp;
125 | [TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_TEMPLATE_ACCESS_LEVEL) | &nbsp; | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
126 | [TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_TEMPLATE_GET_DEFAULTS) | &nbsp; | TIU DEFAULT TEMPLATES
127 | [TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_TEMPLATE_GETLINK) | 801.41, 8925.1, 8927 | &nbsp;
128 | [TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/TIU_TEMPLATE_SET_DEFAULTS) | &nbsp; | TIU DEFAULT TEMPLATES
&nbsp; | &nbsp; | &nbsp; | &nbsp;
129 | [XUS GET USER INFO](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/XUS_GET_USER_INFO) | 200, 4, 20, 8989.3 | &nbsp;
130 | [XUS INTRO MSG](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/XUS_INTRO_MSG) | 8989.3 | &nbsp;
131 | [XUS PKI GET UPN](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/XUS_PKI_GET_UPN) | 200 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
132 | [XWB GET BROKER INFO](http://vistadataproject.info/artifacts/devdocs/EmulatedRPC/XWB_GET_BROKER_INFO) | 8989.3 | &nbsp;


## Files of Meta (Directly Used)

__Storage Size__ 516.45703125 MiB - __Objects__ 6,393,184 - __Collections__ 102

__Total__ 102 - __National__ 41

\# | Id | Name | National | Storage (KiB) | Avg Obj Size (B) | Count
--- | --- | --- | --- | --- | --- | ---
1 | 3_1 | [TITLE](http://vistadataproject.info/artifacts/devdocs/VDM/Title-3_1) | &nbsp; | 40 | 93 | 670
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | 4 | [INSTITUTION](http://vistadataproject.info/artifacts/devdocs/VDM/Institution-4) | &nbsp; | 844 | 495 | 5,872
3 | 4_05 | [INSTITUTION ASSOCIATION TYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Institution_Association_Types-4_05) | &nbsp; | 16 | 77 | 2
4 | 4_2 | [DOMAIN](http://vistadataproject.info/artifacts/devdocs/VDM/Domain-4_2) | &nbsp; | 56 | 299 | 452
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | 9_2 | [HELP FRAME](http://vistadataproject.info/artifacts/devdocs/VDM/Help_Frame-9_2) | &nbsp; | 608 | 983 | 1,156
6 | 9_4 | [PACKAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Package-9_4) | &nbsp; | 3,616 | 31,726 | 295
7 | 9_7 | [INSTALL](http://vistadataproject.info/artifacts/devdocs/VDM/Install-9_7) | &nbsp; | 7,112 | 2,258 | 10,458
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | 19 | [OPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Option-19) | &nbsp; | 3,404 | 589 | 13,554
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | 40_7 | [CLINIC STOP](http://vistadataproject.info/artifacts/devdocs/VDM/Clinic_Stop-40_7) | &nbsp; | 44 | 206 | 552
10 | 44 | [HOSPITAL LOCATION](http://vistadataproject.info/artifacts/devdocs/VDM/Hospital_Location-44) | &nbsp; | 3,800 | 10,257 | 1,900
11 | 49 | [SERVICE\/SECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Service_Section-49) | &nbsp; | 28 | 280 | 156
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | 50 | [DRUG](http://vistadataproject.info/artifacts/devdocs/VDM/Drug-50) | &nbsp; | 4,148 | 2,188 | 5,535
13 | 50_416 | [DRUG INGREDIENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Ingredients-50_416) | YES | 864 | 570 | 5,030
14 | 50_6 | [VA GENERIC](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Generic-50_6) | YES | 364 | 239 | 5,093
15 | 50_605 | [VA DRUG CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Drug_Class-50_605) | YES | 68 | 338 | 579
16 | 50_606 | [DOSAGE FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Dosage_Form-50_606) | &nbsp; | 52 | 434 | 319
17 | 50_67 | [NDC\/UPN](http://vistadataproject.info/artifacts/devdocs/VDM/Ndc_Upn-50_67) | YES | 20,096 | 421 | 229,054
18 | 50_68 | [VA PRODUCT](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Product-50_68) | YES | 7,724 | 1,041 | 26,997
19 | 50_7 | [PHARMACY ORDERABLE ITEM](http://vistadataproject.info/artifacts/devdocs/VDM/Pharmacy_Orderable_Item-50_7) | &nbsp; | 388 | 343 | 3,828
20 | 51 | [MEDICATION INSTRUCTION](http://vistadataproject.info/artifacts/devdocs/VDM/Medication_Instruction-51) | &nbsp; | 20 | 116 | 148
21 | 51_1 | [ADMINISTRATION SCHEDULE](http://vistadataproject.info/artifacts/devdocs/VDM/Administration_Schedule-51_1) | &nbsp; | 28 | 352 | 144
22 | 51_2 | [MEDICATION ROUTES](http://vistadataproject.info/artifacts/devdocs/VDM/Medication_Routes-51_2) | &nbsp; | 32 | 238 | 274
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23 | 60 | [LABORATORY TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Laboratory_Test-60) | &nbsp; | 604 | 976 | 1,990
24 | 68 | [ACCESSION](http://vistadataproject.info/artifacts/devdocs/VDM/Accession-68) | &nbsp; | 16 | 667 | 34
25 | 69_2 | [LAB SECTION PRINT](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Section_Print-69_2) | &nbsp; | 136 | 30,830 | 18
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
26 | 80 | [ICD DIAGNOSIS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Diagnosis-80) | YES | 20,568 | 1,309 | 85,382
27 | 80_1 | [ICD OPERATION\/PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Operation_Procedure-80_1) | YES | 7,908 | 608 | 80,286
28 | 80_4 | [ICD CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Coding_Systems-80_4) | YES | 16 | 201 | 4
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29 | 100_02 | [NATURE OF ORDER](http://vistadataproject.info/artifacts/devdocs/VDM/Nature_Of_Order-100_02) | YES | 16 | 407 | 12
30 | 100_03 | [ORDER REASON](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Reason-100_03) | &nbsp; | 16 | 216 | 28
31 | 100_7 | [OE\/RR EPCS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Epcs_Parameters-100_7) | &nbsp; | 16 | 5,535 | 1
32 | 100_98 | [DISPLAY GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Display_Group-100_98) | &nbsp; | 16 | 213 | 60
33 | 101_13 | [OR CPRS TABS](http://vistadataproject.info/artifacts/devdocs/VDM/Or_Cprs_Tabs-101_13) | &nbsp; | 16 | 108 | 2
34 | 101_24 | [OE\/RR REPORT](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Report-101_24) | &nbsp; | 60 | 979 | 172
35 | 101_41 | [ORDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Dialog-101_41) | &nbsp; | 1,960 | 1,360 | 4,988
36 | 101_42 | [ORDER URGENCY](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Urgency-101_42) | &nbsp; | 16 | 166 | 15
37 | 101_43 | [ORDERABLE ITEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Orderable_Items-101_43) | &nbsp; | 964 | 437 | 7,684
38 | 101_44 | [ORDER QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Quick_View-101_44) | &nbsp; | 36 | 1,154 | 50
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
39 | 120_51 | [GMRV VITAL TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Type-120_51) | YES | 16 | 479 | 19
40 | 120_52 | [GMRV VITAL QUALIFIER](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Qualifier-120_52) | YES | 24 | 429 | 118
41 | 120_53 | [GMRV VITAL CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Category-120_53) | YES | 16 | 680 | 6
42 | 120_57 | [GMRV VITALS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vitals_Parameters-120_57) | &nbsp; | 16 | 680 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43 | 120_82 | [GMR ALLERGIES](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergies-120_82) | YES | 108 | 450 | 749
44 | 120_83 | [SIGN\/SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VDM/Sign_Symptoms-120_83) | YES | 68 | 329 | 567
45 | 120_84 | [GMR ALLERGY SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergy_Site_Parameters-120_84) | &nbsp; | 16 | 1,314 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
46 | 123_5 | [REQUEST SERVICES](http://vistadataproject.info/artifacts/devdocs/VDM/Request_Services-123_5) | &nbsp; | 264 | 1,712 | 531
47 | 125_1 | [PROBLEM SELECTION LIST CONTENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_Selection_List_Contents-125_1) | &nbsp; | 16 | 193 | 20
48 | 150_1 | [ANCILLARY DSS ID](http://vistadataproject.info/artifacts/devdocs/VDM/Ancillary_Dss_Id-150_1) | &nbsp; | 16 | 70 | 15
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | 200 | [NEW PERSON](http://vistadataproject.info/artifacts/devdocs/VDM/New_Person-200) | &nbsp; | 25,404 | 771 | 110,769
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50 | 357_1 | [ENCOUNTER FORM BLOCK](http://vistadataproject.info/artifacts/devdocs/VDM/Encounter_Form_Block-357_1) | &nbsp; | 2,600 | 11,013 | 1,279
51 | 357_2 | [SELECTION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_List-357_2) | &nbsp; | 160 | 1,046 | 863
52 | 357_3 | [SELECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Selection-357_3) | &nbsp; | 5,284 | 411 | 44,933
53 | 357_4 | [SELECTION GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_Group-357_4) | &nbsp; | 180 | 161 | 3,574
54 | 357_6 | [PACKAGE INTERFACE](http://vistadataproject.info/artifacts/devdocs/VDM/Package_Interface-357_6) | &nbsp; | 56 | 899 | 128
55 | 389_9 | [STATION NUMBER (TIME SENSITIVE)](http://vistadataproject.info/artifacts/devdocs/VDM/Station_Number_(Time_Sensitive)-389_9) | &nbsp; | 16 | 199 | 6
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | 409_95 | [PRINT MANAGER CLINIC SETUP](http://vistadataproject.info/artifacts/devdocs/VDM/Print_Manager_Clinic_Setup-409_95) | &nbsp; | 72 | 177 | 1,183
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
57 | 757 | [MAJOR CONCEPT MAP](http://vistadataproject.info/artifacts/devdocs/VDM/Major_Concept_Map-757) | YES | 32,228 | 135 | 724,942
58 | 757_001 | [CONCEPT USAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Concept_Usage-757_001) | &nbsp; | 37,208 | 182 | 724,942
59 | 757_01 | [EXPRESSIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Expressions-757_01) | YES | 145,440 | 409 | 1,628,291
60 | 757_011 | [EXPRESSION TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Expression_Type-757_011) | YES | 16 | 151 | 8
61 | 757_014 | [EXPRESSION FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Expression_Form-757_014) | YES | 16 | 97 | 15
62 | 757_018 | [SNOMED CT HIERARCHY](http://vistadataproject.info/artifacts/devdocs/VDM/Snomed_Ct_Hierarchy-757_018) | YES | 16 | 125 | 43
63 | 757_02 | [CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Codes-757_02) | YES | 68,148 | 462 | 663,186
64 | 757_03 | [CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Coding_Systems-757_03) | YES | 20 | 342 | 36
65 | 757_033 | [CHARACTER POSITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Character_Positions-757_033) | YES | 20,492 | 488 | 200,191
66 | 757_04 | [EXCLUDED WORDS](http://vistadataproject.info/artifacts/devdocs/VDM/Excluded_Words-757_04) | YES | 16 | 122 | 116
67 | 757_05 | [REPLACEMENT WORDS](http://vistadataproject.info/artifacts/devdocs/VDM/Replacement_Words-757_05) | YES | 36 | 425 | 201
68 | 757_1 | [SEMANTIC MAP](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Map-757_1) | YES | 44,200 | 221 | 781,627
69 | 757_11 | [SEMANTIC CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Class-757_11) | YES | 16 | 682 | 15
70 | 757_12 | [SEMANTIC TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Type-757_12) | YES | 28 | 347 | 138
71 | 757_13 | [SOURCE CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Source_Category-757_13) | YES | 68 | 397 | 497
72 | 757_14 | [SOURCE](http://vistadataproject.info/artifacts/devdocs/VDM/Source-757_14) | YES | 16 | 125 | 4
73 | 757_2 | [SUBSET DEFINITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Subset_Definitions-757_2) | YES | 40 | 2,913 | 74
74 | 757_21 | [SUBSETS](http://vistadataproject.info/artifacts/devdocs/VDM/Subsets-757_21) | YES | 34,028 | 167 | 693,855
75 | 757_3 | [LOOK-UP SCREENS](http://vistadataproject.info/artifacts/devdocs/VDM/Look-Up_Screens-757_3) | YES | 16 | 600 | 15
76 | 757_31 | [DISPLAYS](http://vistadataproject.info/artifacts/devdocs/VDM/Displays-757_31) | YES | 16 | 441 | 15
77 | 757_32 | [MAPPING DEFINITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Mapping_Definitions-757_32) | YES | 16 | 346 | 3
78 | 757_33 | [MAPPINGS](http://vistadataproject.info/artifacts/devdocs/VDM/Mappings-757_33) | YES | 2,224 | 330 | 46,429
79 | 757_4 | [SHORTCUTS](http://vistadataproject.info/artifacts/devdocs/VDM/Shortcuts-757_4) | YES | 148 | 436 | 1,043
80 | 757_41 | [SHORTCUT CONTEXT](http://vistadataproject.info/artifacts/devdocs/VDM/Shortcut_Context-757_41) | YES | 16 | 342 | 3
81 | 757_5 | [UCUM CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Ucum_Codes-757_5) | YES | 52 | 167 | 812
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
82 | 801_41 | [REMINDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Dialog-801_41) | &nbsp; | 2,632 | 614 | 15,004
83 | 811_1 | [PCE CODE MAPPING](http://vistadataproject.info/artifacts/devdocs/VDM/Pce_Code_Mapping-811_1) | &nbsp; | 20 | 208 | 147
84 | 811_7 | [REMINDER CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Category-811_7) | &nbsp; | 16 | 991 | 18
85 | 811_9 | [REMINDER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Definition-811_9) | &nbsp; | 736 | 4,699 | 380
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
86 | 8925_1 | [TIU DOCUMENT DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Document_Definition-8925_1) | &nbsp; | 816 | 1,016 | 1,842
87 | 8926 | [TIU PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Personal_Preferences-8926) | &nbsp; | 28 | 157 | 296
88 | 8927 | [TIU TEMPLATE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Template-8927) | &nbsp; | 5,796 | 637 | 24,491
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
89 | 8930 | [USR CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class-8930) | &nbsp; | 20 | 217 | 133
90 | 8930_1 | [USR AUTHORIZATION\/SUBSCRIPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Authorization_Subscription-8930_1) | &nbsp; | 32 | 262 | 350
91 | 8930_3 | [USR CLASS MEMBERSHIP](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class_Membership-8930_3) | &nbsp; | 196 | 184 | 3,437
92 | 8932_1 | [PERSON CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Person_Class-8932_1) | YES | 224 | 475 | 1,217
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
93 | 8989_3 | [KERNEL SYSTEM PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Kernel_System_Parameters-8989_3) | &nbsp; | 20 | 26,391 | 1
94 | 8989_5 | [PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Parameters-8989_5) | &nbsp; | 8,780 | 197 | 153,380
95 | 8989_51 | [PARAMETER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Definition-8989_51) | &nbsp; | 272 | 730 | 892
96 | 8989_518 | [PARAMETER ENTITY](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Entity-8989_518) | &nbsp; | 16 | 122 | 11
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
97 | 9999999_09 | [EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VDM/Education_Topics-9999999_09) | &nbsp; | 52 | 723 | 111
98 | 9999999_14 | [IMMUNIZATION](http://vistadataproject.info/artifacts/devdocs/VDM/Immunization-9999999_14) | YES | 36 | 457 | 141
99 | 9999999_15 | [EXAM](http://vistadataproject.info/artifacts/devdocs/VDM/Exam-9999999_15) | &nbsp; | 16 | 94 | 30
100 | 9999999_27 | [PROVIDER NARRATIVE](http://vistadataproject.info/artifacts/devdocs/VDM/Provider_Narrative-9999999_27) | &nbsp; | 4,228 | 168 | 61,678
101 | 9999999_28 | [SKIN TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Skin_Test-9999999_28) | YES | 16 | 172 | 9
102 | 9999999_64 | [HEALTH FACTORS](http://vistadataproject.info/artifacts/devdocs/VDM/Health_Factors-9999999_64) | &nbsp; | 332 | 213 | 5,559



## Parameters of Meta

__82__ parameter types. _Uses_ means number of assertions of a parameter in the clone's meta data.

\# | Name | File(s) | RPC(s) | Description | Uses
--- | --- | --- | --- | --- | ---
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
1 | [GMV ALLOW USER TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_ALLOW_USER_TEMPLATES) | &nbsp; | GMV MANAGER, GMV PARAMETER | &nbsp; | __1__
2 | [GMV DEFAULT VALUES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DEFAULT_VALUES) | &nbsp; | GMV PARAMETER | &nbsp; | &nbsp;
3 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DLL_VERSION) | &nbsp; | GMV DLL VERSION, GMV PARAMETER | This parameter is used to store the DLL versions that are compatible with the current server version of the Vitals/Measurements application. The Instance format is DLL:VERSION.   Example:  GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34 | __8__
4 | [GMV GUI VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_GUI_VERSION) | &nbsp; | GMV PARAMETER | This parameter is used to store the application:versions that are compatible with the current server version of Vitals Measurements.  Instance format is APPLICATION:VERSION  (example: VITALS.EXE:0.0.0.0). | __14__
5 | [GMV TEMPLATE](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE) | &nbsp; | GMV MANAGER, GMV PARAMETER | &nbsp; | __10__
6 | [GMV TEMPLATE DEFAULT](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE_DEFAULT) | &nbsp; | GMV MANAGER, GMV PARAMETER | &nbsp; | __1__
7 | [GMV USER DEFAULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_USER_DEFAULTS) | &nbsp; | GMV USER, GMV PARAMETER | This parameter is used to store a users default parameter settings.  Each  setting is defined on the client as follows:     TGMV_UserSetting = (     usCanvasAbnormal,     usCanvasNormal);     GMVUSERSETTING: array[TGMV_UserSetting] of string = (                   'CanvasAbnormal',                    'CanvasNormal'); | __33214__
8 | [GMV WEBLINK](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_WEBLINK) | &nbsp; | GMV PARAMETER | This parameter contains the web address for the Vitals Measurments home page.  This can be modified to a local address in the event that the pages are downloaded to be displayed from a local server location or a site  wishes to direct user to a local page instead of the national site. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [OR ALLERGY ENTERED IN ERROR](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_ALLERGY_ENTERED_IN_ERROR) | &nbsp; | ORWDAL32 CLINUSER | This parameter will control whether or not a user has access to the entered in error functionality available on the cover sheet in CPRS GUI. | __1__
10 | [OR BILLING AWARENESS STATUS](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_BILLING_AWARENESS_STATUS) | &nbsp; | ORWDBA1 BASTATUS | Status of Billing Awareness Utilization | __1__
11 | [OR DC REASON LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DC_REASON_LIST) | 100.03 | ORWDX2 DCREASON | This parameter determines the sequence sites want the order DC reasons  to  appear. Sites do not need to set a sequence for every DC Reasons. For example if a site wants to set the "Requesting Physician Cancelled"  DC Reasons to the top of the list. Sites will set a value  of 1 for that entry and CPRS will display the rest of the DC Reasons after the "Requesting Physician Cancelled"  DC reason. | &nbsp;
12 | [OR DEA TEXT](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DEA_TEXT) | &nbsp; | ORDEA DEATEXT | This parameter allows sites to set what exactly they would like the  message to be that is shown on the signature dialog when a controlled  substance item is checked to be included in signing.  This text is  mandated by the DEA. | __1__
13 | [OR VBECS DIAGNOSTIC PANEL 1ST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_DIAGNOSTIC_PANEL_1ST) | &nbsp; | ORWDXVB3 SWPANEL | This paramter will switch the location of the Diagnostic and Component panels on the VBECS Order Dialog.  Set this parameter to YES to see the Diagnostic tests panel displayed on the left hand side of the display. | __1__
14 | [OR VBECS REMOVE COLL TIME](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_REMOVE_COLL_TIME) | &nbsp; | ORWDXVB3 COLLTIM | This parameter can be used to remove any defaults for Collection Times in the VBECS Order Dialog.  An entry of YES will set the default to null when using the VBECS Blood ordering dialog. Quick orders with a default defined in the quick order definition will not be affected by this parameter. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORB SORT DIRECTION](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_DIRECTION) | &nbsp; | ORWORB SETSORT, ORWORB GETSORT | Direction for sorting notifications when displayed in the CPRS GUI.  Directions include: Forward and Reverse. | __1427__
16 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_METHOD) | &nbsp; | ORWORB GETSORT, ORQORB SORT, ORWORB SETSORT, ORB SORT METHOD | Method for sorting notifications when displayed in the CPRS GUI. Methods include: by Patient, Message (text), Urgency, Info, Location, Date/Time, and Forwarded By/When. | __1502__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORCH CONTEXT CONSULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_CONSULTS) | &nbsp; | ORQQCN2 GET CONTEXT | &nbsp; | __8__
18 | [ORCH CONTEXT NOTES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_NOTES) | &nbsp; | ORWTIU GET TIU CONTEXT | &nbsp; | __135__
19 | [ORCH CONTEXT ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_ORDERS) | &nbsp; | ORWOR VWGET | &nbsp; | __55__
20 | [ORCH CONTEXT PROBLEMS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_PROBLEMS) | &nbsp; | ORQQPL INIT USER | &nbsp; | __5__
21 | [ORCH CONTEXT REPORTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_REPORTS) | &nbsp; | ORWTPO GETIMGD | &nbsp; | __13__
22 | [ORCH INITIAL TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_INITIAL_TAB) | &nbsp; | ORWU USERINFO | This parameter identifies the tab that should be initially displayed when CPRS first starts.  If ORCH USE LAST TAB is 'no', this tab is also used whenever a new patient is selected. | __45__
23 | [ORCH USE LAST TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_USE_LAST_TAB) | &nbsp; | ORWU USERINFO | When this parameter is set to yes, CPRS will open to the last selected tab whenever changing patients.  When set to no, CPRS will open to the tab identified by ORCH INITIAL TAB. | __17__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORK SYSTEM ENABLE/DISABLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORK_SYSTEM_ENABLE/DISABLE) | &nbsp; | ORWDXC ON | Parameter determines if any order checking will occur.  'E' or 'Enable' indicates order checking is enabled and running. 'D' or 'Disabled' indicates order checking is disabled and not running.  Can be set at the  Institution, System, or Package level. | __2__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORLP DEFAULT CLINIC FRIDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_FRIDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Friday's patient list. | __340__
26 | [ORLP DEFAULT CLINIC MONDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_MONDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic identified as a default source for patients on Monday. | __338__
27 | [ORLP DEFAULT CLINIC SATURDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SATURDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Saturday's patient list. | __316__
28 | [ORLP DEFAULT CLINIC SUNDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SUNDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Sunday's patient list. | __316__
29 | [ORLP DEFAULT CLINIC THURSDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_THURSDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Thursday's patient list. | __338__
30 | [ORLP DEFAULT CLINIC TUESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_TUESDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default for determining patient list on Tuesdays. | __342__
31 | [ORLP DEFAULT CLINIC WEDNESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_WEDNESDAY) | 44 | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Wednesday's patient list. | __341__
32 | [ORLP DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_LIST_SOURCE) | &nbsp; | ORQPT DEFAULT LIST SOURCE | Default preference for patient list source.  Valid values include:   T:Team/Personal List W:Ward List C:Clinic List P:Provider List S:Specialty List M:Combination List | __657__
33 | [ORLP DEFAULT PROVIDER](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_PROVIDER) | 200 | ORQPT DEFAULT LIST SOURCE | Provider who is basis for building the Provider List of patients. | __57__
34 | [ORLP DEFAULT SPECIALTY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_SPECIALTY) | 45.7 | ORQPT DEFAULT LIST SOURCE | Treating Specialty used as a source for patients on the Specialty List. | __7__
35 | [ORLP DEFAULT TEAM](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_TEAM) | 100.21 | ORQPT DEFAULT LIST SOURCE | Team/Personal list to be default source of patients. | __108__
36 | [ORLP DEFAULT WARD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_WARD) | 42 | ORQPT DEFAULT LIST SOURCE | Ward for default list of patients. | __322__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37 | [ORQQCSDR CS RANGE START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_START) | &nbsp; | ORWTPO CSARNGD | Returns the relative date to start listing visits for a patient on the  Cover Sheet.  For example, 'T-90' will list visits beginning 90 days  before today. | __119__
38 | [ORQQCSDR CS RANGE STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_STOP) | &nbsp; | ORWTPO CSARNGD | Returns the relative date to stop listing visits for a patient on the  Cover Sheet.  For example, 'T+2' will list visits ending two days from  today. | __119__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
39 | [ORQQEAFL ENC APPT FUTURE LIMIT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAFL_ENC_APPT_FUTURE_LIMIT) | &nbsp; | ORWTPD1 GETEAFL | Number of days from Today when warning is given to user upon selection of a future appointment for Encounters. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40 | [ORQQEAPT ENC APPT START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_START) | &nbsp; | ORWTPD1 GETEDATS | Returns the relative number of days before Today to begin listing  appointments (0=Today, 1=Today-1 Day, etc.). | __102__
41 | [ORQQEAPT ENC APPT STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_STOP) | &nbsp; | ORWTPD1 GETEDATS | Returns the relative number of days from Today to stop listing  appointments (0=Today, 1=Today+1 Day, etc.). | __101__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42 | [ORQQPL SUPPRESS CODES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQPL_SUPPRESS_CODES) | &nbsp; | ORQQPL INIT USER | This parameter determines whether the user will be shown SNOMED CT and  ICD codes when searching for patient problems. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43 | [ORWCH BOUNDS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_BOUNDS) | &nbsp; | ORWCH LOADSIZ, ORWCH LOADALL, ORWCH SAVEALL | This parameter records bounds (position & size) information for the forms and controls in CPRSChart (Patient Chart GUI).  The individual properties are comma delimited (left,top,width,height). | __31556__
44 | [ORWCH COLUMNS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_COLUMNS) | &nbsp; | ORWCH LOADALL, ORWCH SAVEALL | This records the widths of each column in a grid type control.  The column withs are entered from left to right and delimited by commas.  For example, "50,260,25,78,129". | __7967__
45 | [ORWCH FONT SIZE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_FONT_SIZE) | &nbsp; | ORWCH SAVFONT, ORWCH LDFONT | This saves the preferred font size for CPRS Chart. | __1502__
46 | [ORWCH WIDTH](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_WIDTH) | &nbsp; | ORWCH LOADALL, ORWCH SAVEALL | This records the width property for a control in CPRSChart (Patient Chart GUI).  In particular, it is used for recording the positions of splitter bars. | __14924__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47 | [ORWCOM ORDER ACCEPTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_ORDER_ACCEPTED) | 101.15 | ORWCOM ORDEROBJ | COM Objects to activate on order acceptance | &nbsp;
48 | [ORWCOM PATIENT SELECTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_PATIENT_SELECTED) | 101.15 | ORWCOM PTOBJ | COM Object to Activate on CPRS GUI Patient Selection | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCV1_COVERSHEET_LIST) | 101.24 | ORWCV1 COVERSHEET LIST, ORWCV START | This parameter allows a custom view of the Cover sheet in the CPRS Gui. | __16__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50 | [ORWD NONVA REASON](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWD_NONVA_REASON) | &nbsp; | ORWPS REASON | This parameter lists the reasons and statements for ordering/documenting  a non-VA medication.  Non-VA meds include herbals, OTCs (over-the-counter  medications) and prescriptions not obtained at VA pharmacies or from VA mail delivery services. | __4__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
51 | [ORWDPS ROUTING DEFAULT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDPS_ROUTING_DEFAULT) | &nbsp; | ORWDPS1 ODSLCT | This will be the default value for Pickup in the Outpatient Medications GUI ordering dialog. | __29__
52 | [ORWDPS SUPPRESS DISPENSE MSG](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDPS_SUPPRESS_DISPENSE_MSG) | &nbsp; | ORWDPS1 ODSLCT | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | [ORWDQ QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDQ_QUICK_VIEW) | &nbsp; | ORWUL QV4DG | This parameter contains the name of a personal quick order list for a specific display group. | __115__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | [ORWDX WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDX_WRITE_ORDERS_LIST) | 101.41 | ORWDX WRLST | This parameter is used to identify a menu in the ORDER DIALOG file that will be used as the list of items that may be selected in the Write Orders listbox of the CPRS GUI. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55 | [ORWDXM ORDER MENU STYLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDXM_ORDER_MENU_STYLE) | &nbsp; | ORWDXM MSTYLE | Determines whether GUI order menus include mnemonics. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWG GRAPH SETTING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_SETTING) | &nbsp; | ORWGRPC GETPREF | Used as preference of graph default styles and sources. Deletion of this value at the Package level will disable graphing. User settings and public default should use the Graph Settings dialog to change these values. The structure of this parameter is a  \|  delimited  string where the pieces are: 1 - file listing delimited by  ;  2 - options where the corresponding letter activates that feature 3 - sort column number (used internally) 4 - max graphs 5 - min graph height 6 - (not used) 7 - max selection 8 - max selection limit (may be set to at system level to limit      number of items that users may select for graphing   default is 1000)   Files: Admissions - 405, Allergies - 120.8, Anatomic  Pathology - 63AP, Blood Bank - 63BB, Exams - 9000010.13, Health Factors - 9000010.23, Immunizations - 9000010.11, Lab Tests - 63, Medication, BCMA - 53.79, Medication, Inpatient - 55, Medication, Non-VA - 55NVA,  Medication, Outpatient - 52, Medicine - 690, Mental Health - 601.2, Microbiology - 63MI, Notes - 8925, Orders - 100, Patient Education - 9000010.16, Problems - 9000011, Procedures - 9000010.18, Purpose of Visit - 9000010.07, Radiology Exams - 70, Registration, DX - 45DX, Registration, OP/Proc - 45OP, Skin Tests - 9000010.12, Surgery - 130, Treatments - 9000010.15, Visits - 9000010, Vitals - 120.5 Also (for grouping): Drug Class - 50.605, Reminder Taxonomy - 811.2   Options:  A - 3D, B - Clear Background, C - Dates, D - Gradient, E - Hints,  F - Legend, G - Lines, H - Sort by Type, I - Stay on Top, J - Values, K - Zoom, Horizontal, L - Zoom, Vertical , M - Fixed Date Range | __30__
57 | [ORWG GRAPH VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_VIEW) | &nbsp; | ORWGRPC ALLVIEWS | This parameter is used internally to store graph views. Graph views are edited using the Define Views dialog. | __43__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58 | [ORWOR AUTO CLOSE PT MSG](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTO_CLOSE_PT_MSG) | &nbsp; | ORWU USERINFO | This parameter controls how long the patient messages window displays before automatically closing.  The default is 5.  If the number of seconds is set to 0, the window will remain open until the user clicks it closed. | __1__
59 | [ORWOR AUTOSAVE NOTE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTOSAVE_NOTE) | &nbsp; | ORWU USERINFO | This parameter determines how many seconds should elapse between each auto-save of a note that is being edited in the GUI. | __27__
60 | [ORWOR BROADCAST MESSAGES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_BROADCAST_MESSAGES) | &nbsp; | ORWU USERINFO | This parameter may be used to disable the use of windows messaging to notify other applications of CPRS events.  Normally, this parameter should be set to 'Yes'.  If other applications do not respond appropriately to broadcast messages, this parameter may be set to 'No' to debug these applications. | __2__
61 | [ORWOR CATEGORY SEQUENCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_CATEGORY_SEQUENCE) | 100.98 | ORWORDG MAPSEQ | Multiple instances of this parameter combine to form a list of the display groups shown in the order review screen.  Orders are displayed by the sequence identified in this list. | __38__
62 | [ORWOR COVER RETRIEVAL NEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_COVER_RETRIEVAL_NEW) | &nbsp; | ORWCV START | This parameter controls whether each cover sheet section is loaded in the foreground or background. | __6__
63 | [ORWOR DISABLE HOLD ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_HOLD_ORDERS) | &nbsp; | ORWU USERINFO | This parameter will prevent orders from being placed on hold. | &nbsp;
64 | [ORWOR DISABLE ORDERING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_ORDERING) | &nbsp; | ORWU USERINFO | This parameter disables writing orders and taking actions on orders in the GUI. | __2__
65 | [ORWOR DISABLE WEB ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_WEB_ACCESS) | &nbsp; | ORWU USERINFO | When this parameter is set to yes, web links in the CPRS GUI will be disabled or hidden. | &nbsp;
66 | [ORWOR ENABLE VERIFY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_ENABLE_VERIFY) | &nbsp; | ORWU USERINFO | This parameter controls whether nurses are allowed to verify orders in the GUI.  The default value is 0, which allows nurses to verify orders only when ordering is enabled.  To allow nurses to verify orders when ordering is disabled, set the value to 1.  To never allow the verify actions, set the value to 2.   This parameter applies to the "Verify" and "Chart Review" on the Actions menu on the Order tab. | __1__
67 | [ORWOR SHOW SURGERY TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_SHOW_SURGERY_TAB) | &nbsp; | ORWSR SHOW SURG TAB | Should the Surgery tab be shown in the GUI? ((0=No, 1=Yes) | __2__
68 | [ORWOR TIMEOUT CHART](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_CHART) | &nbsp; | ORWU USERINFO | This value overrides the user's DTIME only in the case of the CPRS chart, Windows version (CPRSChart.exe). | __2__
69 | [ORWOR TIMEOUT COUNTDOWN](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_COUNTDOWN) | &nbsp; | ORWU USERINFO | This value is the number of seconds used for the countdown when the timeout notification window appears. | __2__
70 | [ORWOR WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_WRITE_ORDERS_LIST) | 101.41 | ORWDX WRLST | ***This parameter has been superseded by ORWDX WRITE ORDERS LIST.*** Currently, the GUI references only for backward compatibility reasons.   This parameter is used do list the order dialog names that should appear in the Write Orders list box of the CPRS GUI.  This is the list of dialogs that should be used in the inpatient setting. | __30__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
71 | [ORWPCE ANYTIME ENCOUNTERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ANYTIME_ENCOUNTERS) | &nbsp; | ORWPCE ANYTIME | Allows encounter data to be entered at any time, even when a note is not being edited. | __16__
72 | [ORWPCE ASK ENCOUNTER UPDATE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ASK_ENCOUNTER_UPDATE) | &nbsp; | ORWPCE ASKPCE | When signing a note in the CPRS GUI, this parameter is used to determine under what conditions to request the user enter encounter information. Note that encounter data is never required for inpatients.  0 = User is the Primary Encounter Provider, and Encounter Data is Needed 1 = User is the Primary Encounter Provider, and Patient is an Outpatient 2 = User is the Primary Encounter Provider 3 = Encounter Data is Needed 4 = Patient is an Outpatient 5 = Always 6 = Never 7 = Disable - Same as Never but disables the Encounter button | __42__
73 | [ORWPCE DISABLE AUTO CHECKOUT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_CHECKOUT) | &nbsp; | ORWPCE ALWAYS CHECKOUT | Disables the automatic checkout of encounters that do not have a diagnosis, procedure or provider information. | &nbsp;
74 | [ORWPCE DISABLE AUTO VISIT TYPE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_VISIT_TYPE) | &nbsp; | ORWPCE AUTO VISIT TYPE SELECT | When set to Yes, this parameter prevents the automatic selection of a Type of Visit on the Visit Tab of the encounter form. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
75 | [ORWRP CIRN AUTOMATIC](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWRP_CIRN_AUTOMATIC) | &nbsp; | ORWCIRN AUTORDV | This parameter determines if Remote patient queries are done automatically for all sites.  The values for this parameter can be controlled down to the USER entity. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
76 | [ORWT TOOLS MENU](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWT_TOOLS_MENU) | &nbsp; | ORWU TOOLMENU | This parameter may be used to identify which items should appear on the tools menu which is displayed by the CPRS GUI.  Each item should contain a name that should be displayed on the menu, followed by an equal sign, followed by the command string used to invoke the executable.  This string may also include parameters that are passed to the executable. Some example entries are:        Hospital Policy=C:\WINNT\SYSTEM32\VIEWERS\QUIKVIEW.EXE LOCPLCY.DOC      VISTA Terminal=C:\PROGRA~1\KEA\KEAVT.EXE VISTA.KTC   An ampersand may be used in the name portion to identify a letter that should be underlined on the menu for quick keyboard access.  For example, to underscore the letter H in Hospital Policy, enter &Hospital Policy as the name part.   To use submenus on the tools menu, you must place special text in the caption and action values.  Submenus must have action text SUBMENU ID, where ID is a unique identifier for the submenu.  Menu items belonging to the submenu must specify which submenu they belong to by appending [ID] after the caption.  Thus the following entries create a Utilities submenu with 2 child items:        Utilities=SUBMENU 1      Calculator[1]=calc.exe      Notepad[1]=notepad.exe   To create a nested submenu, you create a submenu that belongs to another submenu s ID.  For example, to create a nested submenu belonging the above Utilities submenu, you would do the following:        Utility Web Sites[1]=SUBMENU UtilWeb      MicroSoft Tools[UtilWeb]=http:\\www.msdn   While submenu IDs at the end of a caption are not displayed on the Tools menu, this is only true if a corresponding menu ID is found.  If no Menu ID is found, the square brackets and included text will appear as part of the caption on the Tools menu.  This allows for existing bracketed text to remain displayed.   If two submenus share the same menu ID, the second submenu will be treated as belonging to the first menu.   One point worth noting.  If you have a caption of a single dash (or a single dash followed by a submenu id), it will create a separator line in the menu or submenu.  This is not new functionality, but may not have been previously documented.   Finally, if more than 30 menu items are assigned to the top level menu (i.e. they are not part of a submenu), a "More..." submenu will automatically be created at the top of the Tools menu, with additional menu items spilling into the newly created "More..." submenu.  If more than 30 menu items spill into the "More..." submenu, another "More..." submenu will be created inside the first "More..." submenu, with additional menu items spilling into it, and so on, as needed.  Note, however, that there is a limit of 99 total menu items, since you can only enter an integer sequence number from 1-99 when defining the ORWT TOOLS MENU parameter. | __35__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77 | [PXRM CPRS LOOKUP CATEGORIES](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_CPRS_LOOKUP_CATEGORIES) | 811.7 | ORQQPXRM REMINDER CATEGORIES | Returns an array of reminder categories which can then be used within GUI reminder processing. | __9__
78 | [PXRM GEC STATUS CHECK](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GEC_STATUS_CHECK) | 801.5 | ORWU USERINFO | &nbsp; | __5__
79 | [PXRM GUI REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GUI_REMINDERS_ACTIVE) | &nbsp; | ORQQPX NEW REMINDERS ACTIVE | Indicate if Interactive Reminders are Active.  Enter 0 (No) or 1 (Yes). | __5__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80 | [TIU DEFAULT TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_DEFAULT_TEMPLATES) | &nbsp; | TIU TEMPLATE SET DEFAULTS, TIU TEMPLATE GET DEFAULTS | Default Template for Notes;Consults;DC Summ tabs | __1599__
81 | [TIU PERSONAL TEMPLATE ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_PERSONAL_TEMPLATE_ACCESS) | &nbsp; | TIU TEMPLATE ACCESS LEVEL | This parameter is used to specify access to personal templates.  A setting  of READ ONLY allows the use of personal templates, but does not allow the  creation of new personal templates.  To restrict template use by USER CLASS, use the TIU TEMPLATE ACCESS BY CLASS parameter.  These two parameters work  together, in the following precedence order:   Precedence  Parameter ----------  ---------------------------- USER        TIU PERSONAL TEMPLATE ACCESS USER CLASS  TIU TEMPLATE ACCESS BY CLASS LOCATION    TIU PERSONAL TEMPLATE ACCESS SERVICE     TIU PERSONAL TEMPLATE ACCESS DIVISION    TIU PERSONAL TEMPLATE ACCESS SYSTEM      TIU PERSONAL TEMPLATE ACCESS | &nbsp;
82 | [TIU TEMPLATE ACCESS BY CLASS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_TEMPLATE_ACCESS_BY_CLASS) | &nbsp; | TIU TEMPLATE ACCESS LEVEL | This parameter is used to specify access to personal templates for a  specific user class.  A setting of READ ONLY allows the use of personal  templates, but does not allow the creation of new personal templates.   To restrict template use by USER, DIVISION or SYSTEM, use the TIU PERSONAL TEMPLATE ACCESS parameter.  These two parameters work  together, in the following precedence order:   Precedence  Parameter ----------  ---------------------------- USER        TIU PERSONAL TEMPLATE ACCESS USER CLASS  TIU TEMPLATE ACCESS BY CLASS LOCATION    TIU PERSONAL TEMPLATE ACCESS SERVICE     TIU PERSONAL TEMPLATE ACCESS DIVISION    TIU PERSONAL TEMPLATE ACCESS SYSTEM      TIU PERSONAL TEMPLATE ACCESS | &nbsp;


## Files Referenced by In Scope Files

__TBD__

