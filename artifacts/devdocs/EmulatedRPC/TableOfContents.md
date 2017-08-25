---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; Emulated RPCs<br/>
# Emulated RPCs

## RPC Emulation Summary
As of _August 24th 2017_:

### Progress

**Overall CPRS RPC Total:** 153/1050
<div class="progress">
  <div class="progress-bar" style="width: 15%;">
    15% (153/1050)
  </div>
</div>

### Benchmarks

**Average Performance:** 3.270 msecs _Native_ vs. 58.831 msecs _Emulated_ (**5.56%**)
<div class="progress">
  <div class="progress-bar" style="width: 5.56%;">
    5.56%
  </div>
</div>

Native | Emulated
--- | ---
Avg: 3.270 msecs<br/>Min: 0.332 msecs<br/>Max: 1827.992 msecs<br/>Std Dev: 40.557 msecs | Avg: 58.831 msecs<br/>Min: 0.003 msecs<br/>Max: 6992.282 msecs<br/>Std Dev: 384.854 msecs

## Emulated RPC Listing

ID | Name | Type | Domain | Class
--- | --- | --- | --- | ---
1 | [DG CHK BS5 XREF ARRAY](DG_CHK_BS5_XREF_ARRAY) | Clinical | Patients | Unknown
2 | [DG SENSITIVE RECORD ACCESS](DG_SENSITIVE_RECORD_ACCESS) | Clinical | Patients | Unknown
3 | [GMV ADD VM](GMV_ADD_VM) | Clinical | Vitals | CHANGE
4 | [GMV DLL VERSION](GMV_DLL_VERSION) | Non-Clinical | Parameters | READ
5 | [GMV GET VITAL TYPE IEN](GMV_GET_VITAL_TYPE_IEN) | Non-Clinical | Files | READ
6 | [GMV MANAGER](GMV_MANAGER) | Non-Clinical | Others | UTILITY
7 | [GMV MARK ERROR](GMV_MARK_ERROR) | Clinical | Vitals | CHANGE
8 | [GMV PARAMETER](GMV_PARAMETER) | Non-Clinical | Parameters | CHANGE
9 | [GMV USER](GMV_USER) | Non-Clinical | Parameters | READ/WRITE
10 | [GMV VITALS/CAT/QUAL](GMV_VITALS_CAT_QUAL) | Non-Clinical | Files | READ
11 | [OR GET COMBAT VET](OR_GET_COMBAT_VET) | Clinical | Patients | READ
12 | [ORB SORT METHOD](ORB_SORT_METHOD) | Non-Clinical | Parameters | READ
13 | [ORDEA DEATEXT](ORDEA_DEATEXT) | Non-Clinical | Parameters | READ
14 | [OREVNTX1 DLGIEN](OREVNTX1_DLGIEN) | Non-Clinical | Files | READ
15 | [ORIMO ISCLOC](ORIMO_ISCLOC) | Non-Clinical | Files | READ
16 | [ORIMO ISIVQO](ORIMO_ISIVQO) | Non-Clinical | Files | READ
17 | [ORPRF HASFLG](ORPRF_HASFLG) | Clinical | Patients | Unknown
18 | [ORQORB SORT](ORQORB_SORT) | Non-Clinical | Parameters | READ
19 | [ORQPT DEFAULT LIST SOURCE](ORQPT_DEFAULT_LIST_SOURCE) | Non-Clinical | Parameters | READ
20 | [ORQQAL DETAIL](ORQQAL_DETAIL) | Clinical | Allergies | READ
21 | [ORQQAL LIST](ORQQAL_LIST) | Clinical | Allergies | READ
22 | [ORQQCN SVC W/SYNONYMS](ORQQCN_SVC_W_SYNONYMS) | Non-Clinical | Files | READ
23 | [ORQQCN2 GET CONTEXT](ORQQCN2_GET_CONTEXT) | Non-Clinical | Parameters | READ
24 | [ORQQPL ADD SAVE](ORQQPL_ADD_SAVE) | Clinical | Problems | CHANGE
25 | [ORQQPL DELETE](ORQQPL_DELETE) | Clinical | Problems | CHANGE
26 | [ORQQPL DETAIL](ORQQPL_DETAIL) | Clinical | Problems | UNSTRUCTURED READ
27 | [ORQQPL EDIT SAVE](ORQQPL_EDIT_SAVE) | Clinical | Problems | CHANGE
28 | [ORQQPL INIT USER](ORQQPL_INIT_USER) | Non-Clinical | File/Parameters | READ
29 | [ORQQPL PROBLEM LIST](ORQQPL_PROBLEM_LIST) | Clinical | Problems | CHANGE
30 | [ORQQPL REPLACE](ORQQPL_REPLACE) | Clinical | Problems | CHANGE
31 | [ORQQPL UPDATE](ORQQPL_UPDATE) | Clinical | Problems | CHANGE
32 | [ORQQPL USER PROB CATS](ORQQPL_USER_PROB_CATS) | Non-Clinical | Files | READ
33 | [ORQQPL4 LEX](ORQQPL4_LEX) | Non-Clinical | Others | READ
34 | [ORQQPX NEW REMINDERS ACTIVE](ORQQPX_NEW_REMINDERS_ACTIVE) | Non-Clinical | Parameters | READ
35 | [ORQQPXRM REMINDER CATEGORIES](ORQQPXRM_REMINDER_CATEGORIES) | Non-Clinical | Parameters | READ
36 | [ORQQVI VITALS](ORQQVI_VITALS) | Clinical | Vitals | READ STRUCTURED
37 | [ORWCH LDFONT](ORWCH_LDFONT) | Non-Clinical | Parameters | READ
38 | [ORWCH LOADALL](ORWCH_LOADALL) | Non-Clinical | Parameters | READ
39 | [ORWCH LOADSIZ](ORWCH_LOADSIZ) | Non-Clinical | Parameters | READ
40 | [ORWCH SAVEALL](ORWCH_SAVEALL) | Non-Clinical | Parameters | CHANGE
41 | [ORWCH SAVFONT](ORWCH_SAVFONT) | Non-Clinical | Parameters | CHANGE
42 | [ORWCIRN AUTORDV](ORWCIRN_AUTORDV) | Non-Clinical | Parameters | READ
43 | [ORWCOM ORDEROBJ](ORWCOM_ORDEROBJ) | Non-Clinical | Parameters | READ
44 | [ORWCOM PTOBJ](ORWCOM_PTOBJ) | Non-Clinical | Parameters | READ
45 | [ORWCV1 COVERSHEET LIST](ORWCV1_COVERSHEET_LIST) | Non-Clinical | File/Parameters | READ
46 | [ORWDAL32 ALLERGY MATCH](ORWDAL32_ALLERGY_MATCH) | Non-Clinical | Files | READ
47 | [ORWDAL32 CLINUSER](ORWDAL32_CLINUSER) | Non-Clinical | Parameters | READ
48 | [ORWDAL32 DEF](ORWDAL32_DEF) | Non-Clinical | Files | READ
49 | [ORWDAL32 SAVE ALLERGY](ORWDAL32_SAVE_ALLERGY) | Clinical | Allergies | CHANGE
50 | [ORWDAL32 SITE PARAMS](ORWDAL32_SITE_PARAMS) | Non-Clinical | Files | READ
51 | [ORWDAL32 SYMPTOMS](ORWDAL32_SYMPTOMS) | Non-Clinical | Files | READ
52 | [ORWDBA1 BASTATUS](ORWDBA1_BASTATUS) | Non-Clinical | File/Parameters | READ
53 | [ORWDBA3 HINTS](ORWDBA3_HINTS) | Non-Clinical | Files | READ
54 | [ORWDPS1 FAILDEA](ORWDPS1_FAILDEA) | Non-Clinical | Files | UTILITY
55 | [ORWDPS1 ODSLCT](ORWDPS1_ODSLCT) | Non-Clinical | Files | READ
56 | [ORWDPS2 DAY2QTY](ORWDPS2_DAY2QTY) | Non-Clinical | Others | UTILITY
57 | [ORWDPS2 QOGRP](ORWDPS2_QOGRP) | Non-Clinical | Files | READ
58 | [ORWDPS32 AUTH](ORWDPS32_AUTH) | Non-Clinical | File/Parameters | READ
59 | [ORWDPS32 VALQTY](ORWDPS32_VALQTY) | Non-Clinical | Others | UTILITY
60 | [ORWDPS32 VALROUTE](ORWDPS32_VALROUTE) | Non-Clinical | Files | UTILITY
61 | [ORWDPS5 LESGRP](ORWDPS5_LESGRP) | Non-Clinical | Files | READ
62 | [ORWDRA32 LOCTYPE](ORWDRA32_LOCTYPE) | Non-Clinical | Files | READ
63 | [ORWDX AGAIN](ORWDX_AGAIN) | Non-Clinical | Files | READ
64 | [ORWDX DGNM](ORWDX_DGNM) | Non-Clinical | Files | READ
65 | [ORWDX DLGDEF](ORWDX_DLGDEF) | Non-Clinical | Files | READ
66 | [ORWDX WRLST](ORWDX_WRLST) | Non-Clinical | File/Parameters | READ
67 | [ORWDX2 DCREASON](ORWDX2_DCREASON) | Non-Clinical | File/Parameters | READ
68 | [ORWDXA ISACTOI](ORWDXA_ISACTOI) | Non-Clinical | Files | READ
69 | [ORWDXC ON](ORWDXC_ON) | Non-Clinical | Parameters | READ
70 | [ORWDXM FORMID](ORWDXM_FORMID) | Non-Clinical | Files | READ
71 | [ORWDXM MSTYLE](ORWDXM_MSTYLE) | Non-Clinical | Parameters | READ
72 | [ORWDXM3 ISUDQO](ORWDXM3_ISUDQO) | Non-Clinical | Files | READ
73 | [ORWDXR01 ISSPLY](ORWDXR01_ISSPLY) | Non-Clinical | Files | READ
74 | [ORWDXVB3 COLLTIM](ORWDXVB3_COLLTIM) | Non-Clinical | Parameters | READ
75 | [ORWDXVB3 SWPANEL](ORWDXVB3_SWPANEL) | Non-Clinical | Parameters | READ
76 | [ORWGRPC ALLVIEWS](ORWGRPC_ALLVIEWS) | Non-Clinical | Parameters | READ
77 | [ORWGRPC GETPREF](ORWGRPC_GETPREF) | Non-Clinical | Parameters | READ
78 | [ORWGRPC TESTSPEC](ORWGRPC TESTSPEC) | Non-Clinical | Files | READ
79 | [ORWLEX GETFREQ](ORWLEX_GETFREQ) | Non-Clinical | Others | UTILITY
80 | [ORWOR PKISITE](ORWOR_PKISITE) | Non-Clinical | Files | READ
81 | [ORWOR VWGET](ORWOR_VWGET) | Non-Clinical | File/Parameters | READ
82 | [ORWORB GETSORT](ORWORB_GETSORT) | Non-Clinical | Parameters | READ
83 | [ORWORB SETSORT](ORWORB_SETSORT) | Non-Clinical | Parameters | CHANGE
84 | [ORWORDG IEN](ORWORDG_IEN) | Non-Clinical | Files | READ
85 | [ORWORDG MAPSEQ](ORWORDG_MAPSEQ) | Non-Clinical | File/Parameters | READ
86 | [ORWPCE ACTIVE PROV](ORWPCE_ACTIVE_PROV) | Non-Clinical | Others | READ
87 | [ORWPCE ALWAYS CHECKOUT](ORWPCE_ALWAYS_CHECKOUT) | Non-Clinical | Parameters | READ
88 | [ORWPCE ANYTIME](ORWPCE_ANYTIME) | Non-Clinical | Parameters | READ
89 | [ORWPCE ASKPCE](ORWPCE_ASKPCE) | Non-Clinical | Parameters | READ
90 | [ORWPCE AUTO VISIT TYPE SELECT](ORWPCE_AUTO_VISIT_TYPE_SELECT) | Non-Clinical | Parameters | READ
91 | [ORWPCE DIAG](ORWPCE_DIAG) | Non-Clinical | Others | READ
92 | [ORWPCE GET EDUCATION TOPICS](ORWPCE_GET_EDUCATION_TOPICS) | Non-Clinical | Files | READ
93 | [ORWPCE GET EXAM TYPE](ORWPCE_GET_EXAM_TYPE) | Non-Clinical | Files | READ
94 | [ORWPCE GET EXCLUDED](ORWPCE_GET_EXCLUDED) | Non-Clinical | Parameters | READ
95 | [ORWPCE GET HEALTH FACTORS TY](ORWPCE_GET_HEALTH_FACTORS_TY) | Non-Clinical | Files | READ
96 | [ORWPCE GET IMMUNIZATION TYPE](ORWPCE_GET_IMMUNIZATION_TYPE) | Non-Clinical | Files | READ
97 | [ORWPCE GET SET OF CODES](ORWPCE_GET_SET_OF_CODES) | Non-Clinical | Others | READ
98 | [ORWPCE GET SKIN TEST TYPE](ORWPCE_GET_SKIN_TEST_TYPE) | Non-Clinical | Files | READ
99 | [ORWPCE GETSVC](ORWPCE_GETSVC) | Non-Clinical | Files | UTILITY
100 | [ORWPCE HASCPT](ORWPCE_HASCPT) | Non-Clinical | Others | READ
101 | [ORWPCE HF](ORWPCE_HF) | Non-Clinical | Others | READ
102 | [ORWPCE IMM](ORWPCE_IMM) | Non-Clinical | Others | READ
103 | [ORWPCE MHCLINIC](ORWPCE_MHCLINIC) | Non-Clinical | Others | READ
104 | [ORWPCE PED](ORWPCE_PED) | Non-Clinical | Others | READ
105 | [ORWPCE PROC](ORWPCE_PROC) | Non-Clinical | Others | READ
106 | [ORWPCE SK](ORWPCE_SK) | Non-Clinical | Others | READ
107 | [ORWPCE VISIT](ORWPCE_VISIT) | Non-Clinical | Others | READ
108 | [ORWPCE XAM](ORWPCE_XAM) | Non-Clinical | Others | READ
109 | [ORWPCE1 NONCOUNT](ORWPCE1_NONCOUNT) | Non-Clinical | Files | READ
110 | [ORWPS REASON](ORWPS_REASON) | Non-Clinical | Parameters | READ
111 | [ORWPT DIEDON](ORWPT_DIEDON) | Clinical | Patients | READ
112 | [ORWPT ENCTITL](ORWPT_ENCTITL) | Clinical | Patients | Unknown
113 | [ORWPT ID INFO](ORWPT_ID_INFO) | Clinical | Patients | READ
114 | [ORWPT INPLOC](ORWPT_INPLOC) | Clinical | Patients | READ
115 | [ORWPT LIST ALL](ORWPT_LIST_ALL) | Clinical | Patients | READ
116 | [ORWPT SELECT](ORWPT SELECT) | Clinical | Patients | READ
117 | [ORWPT TOP](ORWPT_TOP) | Clinical | Patients | Unknown
118 | [ORWPT1 PRCARE](ORWPT1_PRCARE) | Clinical | Patients | READ
119 | [ORWSR SHOW SURG TAB](ORWSR_SHOW_SURG_TAB) | Non-Clinical | Parameters | READ
120 | [ORWTIU GET TIU CONTEXT](ORWTIU_GET_TIU_CONTEXT) | Non-Clinical | Parameters | READ
121 | [ORWTPD1 GETEAFL](ORWTPD1_GETEAFL) | Non-Clinical | Parameters | READ
122 | [ORWTPD1 GETEDATS](ORWTPD1_GETEDATS) | Non-Clinical | Parameters | READ
123 | [ORWTPO CSARNGD](ORWTPO_CSARNGD) | Non-Clinical | Parameters | READ
124 | [ORWTPO GETIMGD](ORWTPO_GETIMGD) | Non-Clinical | Parameters | READ
125 | [ORWU CLINLOC](ORWU_CLINLOC) | Non-Clinical | Files | READ
126 | [ORWU EXTNAME](ORWU_EXTNAME) | Non-Clinical | Files | UTILITY
127 | [ORWU HASKEY](ORWU_HASKEY) | Non-Clinical | Others | READ
128 | [ORWU NEWPERS](ORWU_NEWPERS) | Non-Clinical | Others | READ
129 | [ORWU PARAM](ORWU_PARAM) | Non-Clinical | Parameters | READ
130 | [ORWU PATCH](ORWU_PATCH) | Non-Clinical | Files | READ
131 | [ORWU TOOLMENU](ORWU_TOOLMENU) | Non-Clinical | Parameters | READ
132 | [ORWU USERINFO](ORWU_USERINFO) | Non-Clinical | File/Parameters | READ
133 | [ORWU VALIDSIG](ORWU_VALIDSIG) | Non-Clinical | Files | READ
134 | [ORWU VERSRV](ORWU_VERSRV) | Non-Clinical | Files | READ
135 | [ORWU1 NEWLOC](ORWU1_NEWLOC) | Non-Clinical | Files | READ
136 | [ORWUL FVSUB](ORWUL_FVSUB) | Non-Clinical | Files | READ
137 | [ORWUL QV4DG](ORWUL_QV4DG) | Non-Clinical | File/Parameters | READ
138 | [TIU GET DEFAULT PROVIDER](TIU_GET_DEFAULT_PROVIDER) | Non-Clinical | Files | READ
139 | [TIU GET PERSONAL PREFERENCES](TIU_GET_PERSONAL_PREFERENCES) | Non-Clinical | Others | READ
140 | [TIU GET PRINT NAME](TIU_GET_PRINT_NAME) | Non-Clinical | Others | READ
141 | [TIU IS THIS A CONSULT?](TIU_IS_THIS_A_CONSULT_) | Non-Clinical | Others | READ
142 | [TIU IS USER A PROVIDER?](TIU_IS_USER_A_PROVIDER_) | Non-Clinical | Others | READ
143 | [TIU ISPRF](TIU_ISPRF) | Non-Clinical | Files | READ
144 | [TIU LONG LIST OF TITLES](TIU_LONG_LIST_OF_TITLES) | Non-Clinical | Files | READ
145 | [TIU REQUIRES COSIGNATURE](TIU_REQUIRES_COSIGNATURE) | Non-Clinical | Files | READ
146 | [TIU TEMPLATE ACCESS LEVEL](TIU_TEMPLATE_ACCESS_LEVEL) | Non-Clinical | Parameters | READ
147 | [TIU TEMPLATE GET DEFAULTS](TIU_TEMPLATE_GET_DEFAULTS) | Non-Clinical | Parameters | READ
148 | [TIU TEMPLATE GETLINK](TIU_TEMPLATE_GETLINK) | Non-Clinical | Files | READ
149 | [TIU TEMPLATE SET DEFAULTS](TIU_TEMPLATE_SET_DEFAULTS) | Non-Clinical | Parameters | CHANGE
150 | [XUS GET USER INFO](XUS_GET_USER_INFO) | Non-Clinical | Files | READ
151 | [XUS INTRO MSG](XUS_INTRO_MSG) | Non-Clinical | Files | READ
152 | [XUS PKI GET UPN](XUS_PKI_GET_UPN) | Non-Clinical | Files | READ
153 | [XWB GET BROKER INFO](XWB_GET_BROKER_INFO) | Non-Clinical | Files | READ

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}