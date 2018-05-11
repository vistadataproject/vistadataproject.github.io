---
layout: default
title: VAM Year 1 - 'Meta Scope 4' - station number 999
---

# VAM 'Meta RPC' Work

VDP Captures (includes PCE): __146__ RPCs.<br>
VAM Year 1: __105__ RPCs.<br>
Files and Parameters: (Primary) Files, __74__ Parameters.

Note that ONLY the file and parameter tables - which have size/use information - will differ between VISTAs.



## RPCs



__Build 2 (Remainder post 1.1)__: 2

__Note__: missed from B1.1, so fill in in Build 2

\# | Name | Type | File(s) | Parameter(s) | Comment
--- | --- | --- | --- | --- | ---
1 | [ORQPT DEFAULT LIST SORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_LIST_SORT) | READ | &nbsp; | ORLP DEFAULT LIST ORDER | [EASY] Parameter access - missed in B1.1 due to capture mistake. Tracked in Patient RPC list
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DFLTSRC) | READ | &nbsp; | ORLP DEFAULT LIST SOURCE | [MEDIUM] Parameter _ORLP DEFAULT LIST SOURCE_ holds preference for patient list source (W=Ward, T=Team etc). RPC  returns its value. __TODO__: (_Medium_) see effect of different values on CPRS and/or subsequent RPCs it calls. Being tracked in Build 2 patient in Jira as missed in B1.1


__Build 1.1 (End January PDE)__: 32

\# | Name | Type | File(s) | Parameter(s) | Comment
--- | --- | --- | --- | --- | ---
1 | [GMV MANAGER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MANAGER) | UTILITY | 120.51, 120.52, 120.53, 4.2, 4, 44, 200 | GMV TEMPLATE DEFAULT, GMV TEMPLATE, GMV ALLOW USER TEMPLATES | [DIFFICULT] [VITAL] [XUSEC] have partial impl. Difficulty is _Test Code Coverage_ and ensuring all CPRS invoked variations are fully covered. Largely falls back on Parameter service but does have Vital specific notions and so belongs in the Vital Service. __Make a table with all options seen in CPRS captures and give each an id__
2 | [GMV PARAMETER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_PARAMETER) | CHANGE | 8989.5, 8989.3, 8989.51, 8989.518 | GMV DLL VERSION, GMV GUI VERSION, GMV WEBLINK, GMV ALLOW USER TEMPLATES, GMV DEFAULT VALUES, GMV TEMPLATE, GMV TEMPLATE DEFAULT, GMV USER DEFAULTS | [EASY] [PARAMETER] [SET] execute this generic parameter method over the parameter service branching to call parameterService.get etc depending on the option passed into this RPC. It effectively does all the parameter service options including DEL and though it is in the GMV name space, it should work with any parameter ... see Jira VAM-274. Actually easy itself. BUT parameter service must be fleshed out first
3 | [GMV USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_USER) | CHANGE | &nbsp; | GMV USER DEFAULTS | [DIFFICULT] [VITAL] [PARAMETER] [XUSEC] returns info about a user including particular parameters of vital. This is an RPC of RPCs with options - and should be treated this way. One branch sets, one gets parameters (easy and do in Parameter Service?). The last _SIGNON_ is a _getVitalUserInfo_ method.
4 | [GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_VITALS_CAT_QUAL) | &nbsp; | 120.51, 120.52, 120.53, 120.57 | &nbsp; | [EASY] [VITAL] [LOOKUP] serialize qualifier information
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORQQPL INIT USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_USER) | READ | 125.99, 49, 200 | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES | [MEDIUM] [PROBLEM] [USERPREF] medium due to size. User preferences for Problem -- note: name the method the same way Document names its User Preferences call. ie/ _ProblemMetaService.getUserPreferences_ (do by whoever is doing document and other preferences?). Note ala other RPCs that take 'DUZ', service should not take DUZ and RPC needs to enforce that argument passed in == ID of Session's User
6 | [ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_USER_PROB_CATS) | &nbsp; | 125.1 | &nbsp; | [DIFFICULT] [PROBLEM] [NVTEST] _GETUSLST_ goes to 200/problem selection list pointer and gets appropriate list from file 125_1. If none then checks of list of clinic. Issue that this index seems to be outside FileMan. Note that the DUZ passed in is ignored (and per our coding standards must == userId of logged in User AND will not be passed explicitly to the Service). __Test Dataset needs enough data__ AND __need good isolation nodeVISTA test__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [ORQQPL4 LEX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL4_LEX) | &nbsp; | &nbsp; | &nbsp; | [DIFFICULT] [LEXICON] [LOOKUP] Key Lexicon lookup - by problems. Lexicon Service must support. Will require many tests and comparison to native performance. Note want all _LOOKUPS_ to follow a similar pattern.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | [ORWCH SAVEALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVEALL) | CHANGE | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS | [DIFFICULT] [PARAMETER] [SAVE] Easy EXCEPT some TMP's are cleared - those TMPs need to be examined (involve Conor/Mike) to see what RPCs called before this one set them up. In effect this is a 'SAVE and CLEANUP'. The CLEANUP is NOT relevant for VICS but we would have to emulate the RPCs that setup these TMPs or else we need to move this to the Clinical Set for post 1.1
9 | [ORWCH SAVESIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVESIZ) | CHANGE | &nbsp; | ORWCH BOUNDS | [EASY] [PARAMETER] [SAVE] one parameter save
10 | [ORWCH SAVFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVFONT) | CHANGE | &nbsp; | ORWCH FONT SIZE | [EASY] [PARAMETER] [SAVE] easy one parameter save
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_ALLERGY_MATCH) | &nbsp; | 120.82, 50.6, 50.67, 50.416, 50.605, 50.68 | &nbsp; | [DIFFICULT] [ALLERGY] [LOOKUP] big and needs analysis of its Mongo efficiency so difficult.
12 | [ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SYMPTOMS) | &nbsp; | 120.83 | &nbsp; | [MEDIUM] [ALLERGY] [LOOKUP] [INACTIVE] easier than MATCH -  Partial pre 1.1 implementation was missing a filter for 'active'. Must have test for skipping inactive entries.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORWDBA3 HINTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA3_HINTS) | &nbsp; | 9.2 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] format hints from file 9.2. Do along with Allergy RPCs
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_FORMID) | &nbsp; | 101.41, 100.98, 9.4 | &nbsp; | [MEDIUM] [ORDER] Medium as branching logic that will have to be fully tested. Really just a getFormId for a dialog
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORWLEX GETFREQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLEX_GETFREQ) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [LEXICON] easy lookup of frequency of a work - difficulty is making sure Lexicon lookup records the word frequency properly so this RPC returns the right value. Must test by looking up and getting the expected increase in frequency back.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
16 | [ORWORB SETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_SETSORT) | CHANGE | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION | [EASY] [PARAMETER] [SAVE]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_CODE) | &nbsp; | &nbsp; | &nbsp; | [EASY] [LEXICON] is a code active - uses same Lexicon method twice. Need to replicate that method and data in Mongo.
18 | [ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_PROV) | &nbsp; | 200, 8932.1 | &nbsp; | [EASY] [USER] see if Active. Just look at today's date and termination date. Do with other User items - __Want in B1_1 as generic concept__
19 | [ORWPCE GETSVC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GETSVC) | &nbsp; | 40.7, 44, 150.1 | &nbsp; | [MEDIUM] [LOCATION] medium as must calculate service category based on location and whether a patient is an in or outpatient. ... _lookupServiceCategory(...)
20 | [ORWPCE I10IMPDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_I10IMPDT) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [LEXICON]
21 | [ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_MHCLINIC) | &nbsp; | 40.7, 44 | &nbsp; | [EASY] [LOCATION] [ISA] is it a mental health clinic. __In B1_1 as generic concept__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
22 | [ORWRP GET DEFAULT PRINTER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_GET_DEFAULT_PRINTER) | READ | &nbsp; | ORWDP WINPRINT DEFAULT, ORWDP DEFAULT PRINTER | [EASY] [PARAMETER] Two parameter GET (was missed before which is why not in B1).
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23 | [ORWU EXTNAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_EXTNAME) | &nbsp; | &nbsp; | &nbsp; | [EASY] get label of an entry id'ed with {fileId}/{ien} ex/ 200/1. We need to see how used as this is generic and we don't copy all vista data. Hence we can't dereference all combos. __No Service Called__ -- just do data access layer call. Only used in PCE
24 | [ORWU HASKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_HASKEY) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [USER] [XUSEC] hasKey? Pure XUSEC - same as ORWU HASKEY
25 | [ORWU NPHASKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_NPHASKEY) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [USER] [XUSEC] Pure XUSEC
26 | [ORWU OVERDL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_OVERDL) | READ | &nbsp; | ORPARAM OVER DATELINE | [EASY] [PARAMETER] Parameter Service only. Simplest of simple GETs. See ORWU.m. Note missing RPC docs as wasn't in older VISTA/CPRS. __Can be a stand alone as not related to anything__
27 | [ORWU PATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PATCH) | &nbsp; | 9.4 | &nbsp; | [MEDIUM] [VISTA] Points to having a _VISTA Service_ for things about VISTA. See issue with FileMan 'service' which is going away.
28 | [ORWU USERINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_USERINFO) | CHANGE | 4.2, 101.13, 389.9, 8989.3 | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK | [MEDIUM] [USER] [XUSEC] Difficult because of size. Another user details call but pulls in many parameter values and uses __XUSEC__ (the index of a user's keys) as well. Tackle once approach to XUSEC is finalized. Unlike other USERINFO RPCs, this one isn't concerned with user's current division. Note in reply, could list parameter values in a name-value list where name is the parameter name
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29 | [TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_USER_A_PROVIDER?) | &nbsp; | 200, 8930, 8930.3, 8932.1 | &nbsp; | [EASY] [USER] though TIU, this is a User Service call checking if a User is a provider. __In B1_1 as generic concept__
30 | [TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_SET_DEFAULTS) | CHANGE | &nbsp; | TIU DEFAULT TEMPLATES | [EASY] [PARAMETER] [SAVE] Simple Parameter Set - __As a simple parameter SET, could go in Simple Set Group__ instead of TIU group for work. Note has matching GET from 1.1.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
31 | [XUS DIVISION GET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_DIVISION_GET) | &nbsp; | 200, 4 | &nbsp; | [DIFFICULT] [USER] [NVTEST] RPC itself is easy but its response is key to multi-institution support in a VISTA and probably effects login. Need user with many divisions and (as now) one with only the default and see the effect on CPRS.
32 | [XUS DIVISION SET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_DIVISION_SET) | &nbsp; | 200, 4 | &nbsp; | [DIFFICULT] [USER] [NVTEST] RPC easy - interaction with DIVISION GET. Make test data and upgrade nodeVISTA example


__Build 1 (Done)__: 71

\# | Name | Type | File(s) | Parameter(s)
--- | --- | --- | --- | ---
1 | [GMV CONVERT DATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CONVERT_DATE) | &nbsp; | &nbsp; | &nbsp;
2 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_DLL_VERSION) | READ | &nbsp; | GMV DLL VERSION
3 | [GMV GET CURRENT TIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_CURRENT_TIME) | &nbsp; | &nbsp; | &nbsp;
4 | [GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_VITAL_TYPE_IEN) | &nbsp; | 120.51 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_SORT_METHOD) | READ | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6 | [ORDEA DEATEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_DEATEXT) | READ | &nbsp; | OR DEA TEXT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DLGIEN) | &nbsp; | 101.41 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | [ORIMO ISCLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISCLOC) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [ORQ NULL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQ_NULL_LIST) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | [ORQORB SORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQORB_SORT) | READ | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_LIST_SOURCE) | READ | &nbsp; | ORLP DEFAULT LIST SOURCE, ORLP DEFAULT TEAM, ORLP DEFAULT WARD, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT CLINIC MONDAY, ORLP DEFAULT CLINIC TUESDAY, ORLP DEFAULT CLINIC WEDNESDAY, ORLP DEFAULT CLINIC THURSDAY, ORLP DEFAULT CLINIC FRIDAY, ORLP DEFAULT CLINIC SATURDAY, ORLP DEFAULT CLINIC SUNDAY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_GET_CONTEXT) | READ | &nbsp; | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_NEW_REMINDERS_ACTIVE) | READ | &nbsp; | PXRM GUI REMINDERS ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORWCH LDFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LDFONT) | READ | &nbsp; | ORWCH FONT SIZE
15 | [ORWCH LOADALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADALL) | READ | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS
16 | [ORWCH LOADSIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADSIZ) | READ | &nbsp; | ORWCH BOUNDS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_AUTORDV) | READ | &nbsp; | ORWRP CIRN AUTOMATIC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
18 | [ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_ORDEROBJ) | READ | &nbsp; | ORWCOM ORDER ACCEPTED
19 | [ORWCOM PTOBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_PTOBJ) | READ | &nbsp; | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
20 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV1_COVERSHEET_LIST) | READ | 101.24 | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21 | [ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_CLINUSER) | READ | 8930, 8930.3 | OR ALLERGY ENTERED IN ERROR
22 | [ORWDAL32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_DEF) | &nbsp; | 120.83, 120.84 | &nbsp;
23 | [ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SITE_PARAMS) | &nbsp; | 120.84 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_BASTATUS) | READ | 9.7 | OR BILLING AWARENESS STATUS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALQTY) | &nbsp; | &nbsp; | &nbsp;
26 | [ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALROUTE) | &nbsp; | 51.2 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | [ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_LOCTYPE) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28 | [ORWDX DGNM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DGNM) | &nbsp; | 100.98 | &nbsp;
29 | [ORWDX WRLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_WRLST) | READ | 101.41, 200 | ORWOR WRITE ORDERS LIST, ORWDX WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
30 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX2_DCREASON) | READ | 9.4, 100.02, 100.03 | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
31 | [ORWDXC ON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_ON) | READ | &nbsp; | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_MSTYLE) | READ | &nbsp; | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
33 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_COLLTIM) | READ | &nbsp; | OR VBECS REMOVE COLL TIME
34 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_SWPANEL) | READ | &nbsp; | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_PKISITE) | &nbsp; | 100.7 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36 | [ORWORB GETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_GETSORT) | READ | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37 | [ORWORDG IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_IEN) | &nbsp; | 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
38 | [ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ALWAYS_CHECKOUT) | READ | &nbsp; | ORWPCE DISABLE AUTO CHECKOUT
39 | [ORWPCE ANYTIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ANYTIME) | READ | &nbsp; | ORWPCE ANYTIME ENCOUNTERS
40 | [ORWPCE ASKPCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ASKPCE) | READ | &nbsp; | ORWPCE ASK ENCOUNTER UPDATE
41 | [ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_AUTO_VISIT_TYPE_SELECT) | READ | &nbsp; | ORWPCE DISABLE AUTO VISIT TYPE
42 | [ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EDUCATION_TOPICS) | &nbsp; | 9999999.09 | &nbsp;
43 | [ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXAM_TYPE) | &nbsp; | 9999999.15 | &nbsp;
44 | [ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXCLUDED) | &nbsp; | &nbsp; | &nbsp;
45 | [ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_HEALTH_FACTORS_TY) | &nbsp; | 9999999.64 | &nbsp;
46 | [ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_IMMUNIZATION_TYPE) | &nbsp; | 9999999.14 | &nbsp;
47 | [ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SET_OF_CODES) | &nbsp; | 9000010.11, 9000010.12, 9000010.16, 9000010.23, 9000010.13 | &nbsp;
48 | [ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SKIN_TEST_TYPE) | &nbsp; | 9999999.28 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | [ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE1_NONCOUNT) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50 | [ORWPS REASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_REASON) | READ | &nbsp; | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
51 | [ORWPT CLINRNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CLINRNG) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
52 | [ORWPT16 PSCNVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_PSCNVT) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | [ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_SHOW_SURG_TAB) | READ | 9.4 | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | [ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEAFL) | READ | &nbsp; | ORQQEAFL ENC APPT FUTURE LIMIT
55 | [ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEDATS) | READ | &nbsp; | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_CSARNGD) | READ | &nbsp; | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
57 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_GETIMGD) | READ | &nbsp; | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58 | [ORWU CLINLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_CLINLOC) | &nbsp; | 44 | &nbsp;
59 | [ORWU DT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_DT) | &nbsp; | &nbsp; | &nbsp;
60 | [ORWU PARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PARAM) | &nbsp; | &nbsp; | &nbsp;
61 | [ORWU TOOLMENU](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_TOOLMENU) | READ | &nbsp; | ORWT TOOLS MENU
62 | [ORWU VALDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALDT) | &nbsp; | &nbsp; | &nbsp;
63 | [ORWU VALIDSIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALIDSIG) | &nbsp; | 200 | &nbsp;
64 | [ORWU VERSRV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VERSRV) | &nbsp; | 19 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65 | [ORWU1 NEWLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU1_NEWLOC) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66 | [TIU GET PRINT NAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PRINT_NAME) | &nbsp; | 8925.1 | &nbsp;
67 | [TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_ACCESS_LEVEL) | READ | &nbsp; | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
68 | [TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GET_DEFAULTS) | READ | &nbsp; | TIU DEFAULT TEMPLATES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69 | [XUS GET USER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_GET_USER_INFO) | &nbsp; | 200, 4, 20, 8989.3 | &nbsp;
70 | [XUS PKI GET UPN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_PKI_GET_UPN) | &nbsp; | 200 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
71 | [XWB GET BROKER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_GET_BROKER_INFO) | &nbsp; | 8989.3 | &nbsp;


__VISTA Only__: 5

This list doesn't include _connect_ or _BYE_. Note that some of the following may be revisited AND be partially or wholly handled in either the Router or VICS Server going forward.

\# | Name | Why VISTA Only?
--- | --- | ---
1 | [XUS AV CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_AV_CODE) | Currently Partly Processed in Router (kicks off session creation to the VICS Server) but mainly for VISTA which does Access, Verify checks.
2 | [XUS INTRO MSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_INTRO_MSG) | __This may come back to VICS__: text for this is kept in Kernel System Parameters. The RPC is sent in the CPRS connect step and before user login. VICS Server could perform is it allowed pre-login requests. Otherwise may be sourced directly in the Router
3 | [XWB CREATE CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_CREATE_CONTEXT) | __This may come back to VICS__: this checks a broad option or context for a user but also sets up globals (XQY0, XQY). These MAY be used in later RPC interactions.
4 | [XWB DEFERRED CLEARALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_DEFERRED_CLEARALL) | Part of 'Deferred RPC Handling' - in theory, VICS may need to do deferred handling (in the future) so this notion may come into play but for now, will just examine this as part of Coversheet RPC testing and Patient handling.
5 | [XWB IM HERE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_IM_HERE) | CPRS connection 'keep alive' RPC. This isn't used between the Router and the emulating VICS Server. It will always be VISTA only


__Not in VAM Year 1__: 36

__Note__: these are Meta RPCs for Pharmacy, PCE, Graph and other ancillary domains/functions that are beyond PDE scope. It is an open question how many should be done in VAM year 1.

\# | Name | Type | File(s) | Parameter(s) | Comment
--- | --- | --- | --- | --- | ---
1 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISIVQO) | &nbsp; | 101.41, 100.98 | &nbsp; | [EASY] [ORDER] is something an IV quick order (_isIVQuickOrder_) - simple record check, preferably in one Mongo query. Returns 1 or 0
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SVC_W_SYNONYMS) | &nbsp; | 123.5, 101.43 | &nbsp; | [MEDIUM] [ORDER]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
3 | [ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_CATEGORIES) | READ | 811.7, 811.9, 801.41 | PXRM CPRS LOOKUP CATEGORIES | [MEDIUM] [PARAMETER] Medium for volume - routine seems to just lookup parameters
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_FAILDEA) | &nbsp; | 50, 50.68, 50.7, 50.606, 101.43, 200, 4, 4.05 | &nbsp; | [DIFFICULT] [USER] really returns DEA status of a User. Difficult due to nuances and so need enough test data and test code
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_QOGRP) | &nbsp; | 100.98, 101.41 | &nbsp; | [MEDIUM] [ORDER] [ISA] is quick order belong to a certain group. Checking values in 100.98. One or more Mongo filters? MEDIUM as need to have multiple test for different options - find appropriate entries in 100.98
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS5_LESGRP) | &nbsp; | 100.98 | &nbsp; | [MEDIUM] [ORDER] [LOOKUP] return 100.98 entries for Lab. Mongo filters again. MEDIUM as need to try with different data.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_AGAIN) | &nbsp; | 101.41 | &nbsp; | [EASY] [ORDER] [ISA] one liner isA for one 101.41 entry
8 | [ORWDX DLGDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DLGDEF) | &nbsp; | 101.41 | &nbsp; | [EASY] [ORDER] describe for one 101.41 entry ie/ format a OrderService.getOrderDialog(...) reply into RPC form.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_ISACTOI) | &nbsp; | 101.43 | &nbsp; | [EASY] [ORDER] [INACTIVE] [ISA] inactive check for 101.43. Note - fit into way we handle inactives in general. See Allergy Symptoms
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM3_ISUDQO) | &nbsp; | 101.41, 100.98 | &nbsp; | [EASY] [ORDER] [ISA] isA on type of Order Dialog. Like ISACTOI etc or the GRP checks
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_ISSPLY) | &nbsp; | 101.43, 100.98 | &nbsp; | [EASY] [ORDER] [ISA]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | [ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ALLVIEWS) | READ | 68, 69.2, 60 | ORWG GRAPH VIEW | [DIFFICULT] [GRAPHING] [LEAVEEND] difficult as three branches - -1, -2, -3 called by CPRS. Parameters looked up. Effectively three RPCs in one and should be tested appropriately. See if leads to PARAMETER calls directly or three different service methods or ... __LEAVE TO END AS MAY BE OUT OF SCOPE__
13 | [ORWGRPC GETPREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETPREF) | READ | &nbsp; | ORWG GRAPH SETTING | [DIFFICULT] [GRAPHING] [USERPREF] [LEAVEEND] involves parameters but also XTMP checks. Need to see how those XTMPs are set. (SETPREF?) We either support this fully or not at all. __LEAVE TO END AS MAY BE OUT OF SCOPE__
14 | [ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TESTSPEC) | &nbsp; | 60 | &nbsp; | [MEDIUM] [LAB] describe a test - serialize JSON of 'getLabTest()' into appropriate form. Difficulty is making sure formatter is right and testing that.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORWOR VWGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_VWGET) | READ | 100.98 | ORCH CONTEXT ORDERS | [MEDIUM] [ORDER] Parameter with mumps logic added - configures CPRS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
16 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_MAPSEQ) | READ | 100.98 | ORWOR CATEGORY SEQUENCE | [MEDIUM] [ORDER] Parameter wrapped in MUMPS on 100.98
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORWPCE DIAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_DIAG) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [DIFFICULT] [PCE] [LOOKUP] serializes information - difficult as large so needs more tests
18 | [ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_DX_TEXT) | &nbsp; | 80, 80.1, 80.4, 9999999.27 | &nbsp; | [MEDIUM] [PCE] medium as involved to format text appropriately
19 | [ORWPCE HASCPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HASCPT) | &nbsp; | 811.1 | &nbsp; | [MEDIUM] [PCE] code mapping. May change shape of our data to make this more efficient. Want to avoid cross-collection queries.
20 | [ORWPCE HF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HF) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of health factors by location - see other PCE lookups
21 | [ORWPCE IMM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_IMM) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of immunizations by location - see other PCE lookups
22 | [ORWPCE PED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PED) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of education topics for a clinic.  - see other PCE lookups
23 | [ORWPCE PROC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PROC) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of procedures for a clinic  - see other PCE lookups
24 | [ORWPCE SK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SK) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of skin tests for a clinic - see other PCE lookups
25 | [ORWPCE VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_VISIT) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of visit types for a clinic - see other PCE lookups
26 | [ORWPCE XAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_XAM) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of exams for a clinic - see other PCE lookups
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | [ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_TIU_CONTEXT) | READ | 8926 | ORCH CONTEXT NOTES | [EASY] [DOCUMENT] beyond one parameter get as adds information from elsewhere
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28 | [ORWU NEWPERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_NEWPERS) | &nbsp; | 3.1, 20, 49, 389.9, 200, 8932.1 | &nbsp; | [DIFFICULT] [USER] [CHEY442TEST] [CM] list users using AUSER/active user cross reference, a list we'd have to emulate behind the User Service. Part of this work is scoping from captures. In the Problem capture, see argument _PROVIDER_ passed which seems to limit it to providers (those with that key?). See [issue](https://github.com/vistadataproject/DataExtractNSync/issues/44) that goes into AUSER, ACTIVE and the concept of CPRS active users and their effect. Not patient per say but 'meta with patient'. See [issue](https://github.com/vistadataproject/DataExtractNSync/issues/44) which groups it with ENCTITL of PATIENT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_FVSUB) | &nbsp; | 101.44 | &nbsp; | [DIFFICULT] [ORDER] [NVTEST] difficult because of testing scenarios/ need for data. Looks at multiple in 101.44. That file is used to provide Windows CPRS dialog with an ordered list of certain items. __Test Dataset needs enough data__ and need nodeVISTA in process tests.
30 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_QV4DG) | READ | 100.98, 101.41, 101.44 | ORWDQ QUICK VIEW | [EASY] [ORDER] Parameter lookup - __Test Dataset needs enough data__ (9999 seems to have 'ORWDQ QUICK VIEW')
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
31 | [TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PERSONAL_PREFERENCES) | &nbsp; | 8926 | &nbsp; | [MEDIUM] [DOCUMENT] [USERPREF] get a user's Document Preferences. _DocumentMetaService.getUserPreferences_ - __Test Dataset needs enough data__
32 | [TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_THIS_A_CONSULT?) | &nbsp; | 8925.1 | &nbsp; | [EASY] [DOCUMENT]
33 | [TIU ISPRF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ISPRF) | &nbsp; | 8925.1 | &nbsp; | [EASY] [DOCUMENT] check document title type - is Check for Document Service
34 | [TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_OF_TITLES) | &nbsp; | 8925.1, 8930.1 | &nbsp; | [MEDIUM] [DOCUMENT] List by criteria - listTitlesByClass in DocumentService.
35 | [TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETLINK) | &nbsp; | 801.41, 8925.1, 8927 | &nbsp; | [MEDIUM] [DOCUMENT] Serializes data from an entity pointed to by another. __Test Dataset needs enough data__
36 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETROOTS) | &nbsp; | 8927 | &nbsp; | [MEDIUM] [DOCUMENT] Template meta data - referenced from vitals and problems.


## Files of Meta (Directly Used)

__Storage Size__ 300.984375 MiB - __Objects__ 1,568,528 - __Collections__ 74



__VAM Meta Files__ 74 - __National__ 20 - of 2773 total (meta+patient) files. Note though that merged files (ex/ 757 into 757.01) aren't being counted AND that files of PCE and other non VAM, VDP RPCs are listed. Build 3 may remove those.

\# | Id | Name | National | Storage (KiB) | Avg Obj Size (B) | Count
--- | --- | --- | --- | --- | --- | ---
1 | 3_1 | [TITLE](http://vistadataproject.info/artifacts/devdocs/VDM/Title-3_1) | &nbsp; | 16 | 125 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | 4 | [*AMIS\/RCS 14](http://vistadataproject.info/artifacts/devdocs/VDM/*Amis_Rcs_14-4) | &nbsp; | 732 | 994 | 2,536
3 | 4_05 | [INSTITUTION ASSOCIATION TYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Institution_Association_Types-4_05) | &nbsp; | 16 | 146 | 2
4 | 4_2 | [DOMAIN](http://vistadataproject.info/artifacts/devdocs/VDM/Domain-4_2) | &nbsp; | 24 | 350 | 85
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | 9_2 | [HELP FRAME](http://vistadataproject.info/artifacts/devdocs/VDM/Help_Frame-9_2) | &nbsp; | 544 | 1,112 | 964
6 | 9_4 | [PACKAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Package-9_4) | &nbsp; | 3,756 | 68,089 | 142
7 | 9_7 | [INSTALL](http://vistadataproject.info/artifacts/devdocs/VDM/Install-9_7) | &nbsp; | 6,960 | 2,239 | 10,208
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | 19 | [OPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Option-19) | &nbsp; | 3,264 | 745 | 10,425
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | 20 | [NAME COMPONENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Name_Components-20) | &nbsp; | 16 | 246 | 95
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | 40_7 | [CLINIC STOP](http://vistadataproject.info/artifacts/devdocs/VDM/Clinic_Stop-40_7) | &nbsp; | 52 | 255 | 554
11 | 44 | [HOSPITAL LOCATION](http://vistadataproject.info/artifacts/devdocs/VDM/Hospital_Location-44) | &nbsp; | 24 | 5,967 | 10
12 | 49 | [SERVICE\/SECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Service_Section-49) | &nbsp; | 16 | 115 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | 50 | [DRUG](http://vistadataproject.info/artifacts/devdocs/VDM/Drug-50) | &nbsp; | 32 | 2,130 | 31
14 | 50_416 | [DRUG INGREDIENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Ingredients-50_416) | YES | 796 | 427 | 5,076
15 | 50_6 | [VA GENERIC](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Generic-50_6) | YES | 380 | 246 | 5,177
16 | 50_605 | [VA DRUG CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Drug_Class-50_605) | YES | 76 | 390 | 579
17 | 50_606 | [DOSAGE FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Dosage_Form-50_606) | &nbsp; | 52 | 443 | 320
18 | 50_67 | [NDC\/UPN](http://vistadataproject.info/artifacts/devdocs/VDM/Ndc_Upn-50_67) | YES | 33,344 | 624 | 237,445
19 | 50_68 | [VA PRODUCT](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Product-50_68) | YES | 9,428 | 1,262 | 27,766
20 | 50_7 | [PHARMACY ORDERABLE ITEM](http://vistadataproject.info/artifacts/devdocs/VDM/Pharmacy_Orderable_Item-50_7) | &nbsp; | 16 | 416 | 12
21 | 51_2 | [MEDICATION ROUTES](http://vistadataproject.info/artifacts/devdocs/VDM/Medication_Routes-51_2) | &nbsp; | 28 | 236 | 242
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
22 | 60 | [LABORATORY TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Laboratory_Test-60) | &nbsp; | 180 | 568 | 1,038
23 | 68 | [ACCESSION](http://vistadataproject.info/artifacts/devdocs/VDM/Accession-68) | &nbsp; | 16 | 560 | 22
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | 80 | [ICD DIAGNOSIS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Diagnosis-80) | YES | 29,380 | 1,739 | 87,716
25 | 80_1 | [ICD OPERATION\/PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Operation_Procedure-80_1) | YES | 18,056 | 1,398 | 83,848
26 | 80_4 | [ICD CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Coding_Systems-80_4) | YES | 16 | 267 | 4
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | 100_02 | [NATURE OF ORDER](http://vistadataproject.info/artifacts/devdocs/VDM/Nature_Of_Order-100_02) | YES | 16 | 412 | 12
28 | 100_03 | [ORDER REASON](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Reason-100_03) | &nbsp; | 16 | 341 | 22
29 | 100_7 | [OE\/RR EPCS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Epcs_Parameters-100_7) | &nbsp; | 16 | 208 | 1
30 | 100_98 | [DISPLAY GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Display_Group-100_98) | &nbsp; | 20 | 311 | 57
31 | 101_13 | [OR CPRS TABS](http://vistadataproject.info/artifacts/devdocs/VDM/Or_Cprs_Tabs-101_13) | &nbsp; | 16 | 160 | 2
32 | 101_24 | [OE\/RR REPORT](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Report-101_24) | &nbsp; | 68 | 1,078 | 172
33 | 101_41 | [ORDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Dialog-101_41) | &nbsp; | 124 | 1,167 | 262
34 | 101_43 | [ORDERABLE ITEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Orderable_Items-101_43) | &nbsp; | 16 | 523 | 12
35 | 101_44 | [ORDER QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Quick_View-101_44) | &nbsp; | 16 | 369 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36 | 120_51 | [GMRV VITAL TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Type-120_51) | YES | 16 | 442 | 19
37 | 120_52 | [GMRV VITAL QUALIFIER](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Qualifier-120_52) | YES | 24 | 512 | 119
38 | 120_53 | [GMRV VITAL CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Category-120_53) | YES | 16 | 753 | 6
39 | 120_57 | [GMRV VITALS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vitals_Parameters-120_57) | &nbsp; | 16 | 579 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40 | 120_82 | [GMR ALLERGIES](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergies-120_82) | YES | 140 | 540 | 797
41 | 120_83 | [SIGN\/SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VDM/Sign_Symptoms-120_83) | YES | 92 | 464 | 591
42 | 120_84 | [GMR ALLERGY SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergy_Site_Parameters-120_84) | &nbsp; | 16 | 1,165 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43 | 123_5 | [REQUEST SERVICES](http://vistadataproject.info/artifacts/devdocs/VDM/Request_Services-123_5) | &nbsp; | 20 | 935 | 14
44 | 125_99 | [PROBLEM LIST SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_List_Site_Parameters-125_99) | &nbsp; | 16 | 285 | 1
45 | 150_1 | [ANCILLARY DSS ID](http://vistadataproject.info/artifacts/devdocs/VDM/Ancillary_Dss_Id-150_1) | &nbsp; | 16 | 126 | 15
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
46 | 200 | [NEW PERSON](http://vistadataproject.info/artifacts/devdocs/VDM/New_Person-200) | &nbsp; | 32 | 1,154 | 68
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47 | 357_1 | [ENCOUNTER FORM BLOCK](http://vistadataproject.info/artifacts/devdocs/VDM/Encounter_Form_Block-357_1) | &nbsp; | 304 | 453 | 2,551
48 | 357_2 | [SELECTION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_List-357_2) | &nbsp; | 340 | 1,383 | 1,561
49 | 357_3 | [SELECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Selection-357_3) | &nbsp; | 41,284 | 580 | 252,410
50 | 357_4 | [SELECTION GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_Group-357_4) | &nbsp; | 1,088 | 249 | 15,006
51 | 357_6 | [PACKAGE INTERFACE](http://vistadataproject.info/artifacts/devdocs/VDM/Package_Interface-357_6) | &nbsp; | 60 | 965 | 122
52 | 389_9 | [STATION NUMBER (TIME SENSITIVE)](http://vistadataproject.info/artifacts/devdocs/VDM/Station_Number_(Time_Sensitive)-389_9) | &nbsp; | 16 | 289 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | 757_01 | [EXPRESSIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Expressions-757_01) | YES | 149,180 | 710 | 769,194
54 | 757_03 | [CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Coding_Systems-757_03) | YES | 20 | 383 | 36
55 | 757_04 | [EXCLUDED WORDS](http://vistadataproject.info/artifacts/devdocs/VDM/Excluded_Words-757_04) | YES | 16 | 153 | 116
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | 801_41 | [REMINDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Dialog-801_41) | &nbsp; | 1,836 | 852 | 7,639
57 | 811_1 | [PCE CODE MAPPING](http://vistadataproject.info/artifacts/devdocs/VDM/Pce_Code_Mapping-811_1) | &nbsp; | 24 | 317 | 141
58 | 811_9 | [REMINDER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Definition-811_9) | &nbsp; | 420 | 6,376 | 147
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
59 | 8925_1 | [TIU DOCUMENT DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Document_Definition-8925_1) | &nbsp; | 52 | 578 | 239
60 | 8927 | [TIU TEMPLATE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Template-8927) | &nbsp; | 16 | 317 | 34
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61 | 8930 | [USR CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class-8930) | &nbsp; | 28 | 289 | 116
62 | 8930_1 | [USR AUTHORIZATION\/SUBSCRIPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Authorization_Subscription-8930_1) | &nbsp; | 28 | 549 | 114
63 | 8930_3 | [USR CLASS MEMBERSHIP](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class_Membership-8930_3) | &nbsp; | 16 | 265 | 3
64 | 8932_1 | [PERSON CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Person_Class-8932_1) | YES | 216 | 501 | 1,222
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65 | 8989_3 | [KERNEL SYSTEM PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Kernel_System_Parameters-8989_3) | &nbsp; | 16 | 1,918 | 1
66 | 8989_5 | [PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Parameters-8989_5) | &nbsp; | 28 | 326 | 166
67 | 8989_51 | [PARAMETER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Definition-8989_51) | &nbsp; | 44 | 919 | 83
68 | 8989_518 | [PARAMETER ENTITY](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Entity-8989_518) | YES | 16 | 155 | 11
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69 | 9999999_09 | [EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VDM/Education_Topics-9999999_09) | &nbsp; | 36 | 800 | 68
70 | 9999999_14 | [IMMUNIZATION](http://vistadataproject.info/artifacts/devdocs/VDM/Immunization-9999999_14) | &nbsp; | 44 | 706 | 161
71 | 9999999_15 | [EXAM](http://vistadataproject.info/artifacts/devdocs/VDM/Exam-9999999_15) | &nbsp; | 16 | 202 | 31
72 | 9999999_27 | [PROVIDER NARRATIVE](http://vistadataproject.info/artifacts/devdocs/VDM/Provider_Narrative-9999999_27) | &nbsp; | 4,652 | 465 | 35,693
73 | 9999999_28 | [SKIN TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Skin_Test-9999999_28) | YES | 16 | 313 | 9
74 | 9999999_64 | [HEALTH FACTORS](http://vistadataproject.info/artifacts/devdocs/VDM/Health_Factors-9999999_64) | &nbsp; | 464 | 380 | 5,181



## Parameters of Meta

__83__ parameter types (Context: NV 999 has 899 in total). _Uses_ means number of assertions of a parameter in the clone's meta data.

\# | Name | RPC(s) | Uses
--- | --- | --- | ---
&nbsp; | &nbsp; | &nbsp; | &nbsp;
1 | [GMV ALLOW USER TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_ALLOW_USER_TEMPLATES) | GMV MANAGER, GMV PARAMETER | &nbsp;
2 | [GMV DEFAULT VALUES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DEFAULT_VALUES) | GMV PARAMETER | &nbsp;
3 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DLL_VERSION) | GMV DLL VERSION, GMV PARAMETER | __12__
4 | [GMV GUI VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_GUI_VERSION) | GMV PARAMETER | __17__
5 | [GMV TEMPLATE](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE) | GMV MANAGER, GMV PARAMETER | __1__
6 | [GMV TEMPLATE DEFAULT](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE_DEFAULT) | GMV MANAGER, GMV PARAMETER | &nbsp;
7 | [GMV USER DEFAULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_USER_DEFAULTS) | GMV USER, GMV PARAMETER | __1__
8 | [GMV WEBLINK](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_WEBLINK) | GMV PARAMETER | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [OR ALLERGY ENTERED IN ERROR](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_ALLERGY_ENTERED_IN_ERROR) | ORWDAL32 CLINUSER | __1__
10 | [OR BILLING AWARENESS STATUS](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_BILLING_AWARENESS_STATUS) | ORWDBA1 BASTATUS | &nbsp;
11 | [OR DC REASON LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DC_REASON_LIST) | ORWDX2 DCREASON | &nbsp;
12 | [OR DEA TEXT](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DEA_TEXT) | ORDEA DEATEXT | __1__
13 | [OR VBECS DIAGNOSTIC PANEL 1ST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_DIAGNOSTIC_PANEL_1ST) | ORWDXVB3 SWPANEL | __1__
14 | [OR VBECS REMOVE COLL TIME](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_REMOVE_COLL_TIME) | ORWDXVB3 COLLTIM | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORB SORT DIRECTION](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_DIRECTION) | ORWORB SETSORT, ORWORB GETSORT | &nbsp;
16 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_METHOD) | ORWORB GETSORT, ORQORB SORT, ORWORB SETSORT, ORB SORT METHOD | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORCH CONTEXT CONSULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_CONSULTS) | ORQQCN2 GET CONTEXT | __1__
18 | [ORCH CONTEXT NOTES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_NOTES) | ORWTIU GET TIU CONTEXT | __1__
19 | [ORCH CONTEXT ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_ORDERS) | ORWOR VWGET | __1__
20 | [ORCH CONTEXT PROBLEMS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_PROBLEMS) | ORQQPL INIT USER | __1__
21 | [ORCH CONTEXT REPORTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_REPORTS) | ORWTPO GETIMGD | __1__
22 | [ORCH INITIAL TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_INITIAL_TAB) | ORWU USERINFO | &nbsp;
23 | [ORCH USE LAST TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_USE_LAST_TAB) | ORWU USERINFO | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORK SYSTEM ENABLE/DISABLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORK_SYSTEM_ENABLE/DISABLE) | ORWDXC ON | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORLP DEFAULT CLINIC FRIDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_FRIDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
26 | [ORLP DEFAULT CLINIC MONDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_MONDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
27 | [ORLP DEFAULT CLINIC SATURDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SATURDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
28 | [ORLP DEFAULT CLINIC SUNDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SUNDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
29 | [ORLP DEFAULT CLINIC THURSDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_THURSDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
30 | [ORLP DEFAULT CLINIC TUESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_TUESDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
31 | [ORLP DEFAULT CLINIC WEDNESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_WEDNESDAY) | ORQPT DEFAULT LIST SOURCE | &nbsp;
32 | [ORLP DEFAULT LIST ORDER](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_LIST_ORDER) | ORQPT DEFAULT LIST SORT | __1__
33 | [ORLP DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_LIST_SOURCE) | ORQPT DEFAULT LIST SOURCE, ORWPT DFLTSRC | __1__
34 | [ORLP DEFAULT PROVIDER](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_PROVIDER) | ORQPT DEFAULT LIST SOURCE | __1__
35 | [ORLP DEFAULT SPECIALTY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_SPECIALTY) | ORQPT DEFAULT LIST SOURCE | __1__
36 | [ORLP DEFAULT TEAM](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_TEAM) | ORQPT DEFAULT LIST SOURCE | __1__
37 | [ORLP DEFAULT WARD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_WARD) | ORQPT DEFAULT LIST SOURCE | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
38 | [ORPARAM OVER DATELINE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORPARAM_OVER_DATELINE) | ORWU OVERDL | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
39 | [ORQQCSDR CS RANGE START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_START) | ORWTPO CSARNGD | __1__
40 | [ORQQCSDR CS RANGE STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_STOP) | ORWTPO CSARNGD | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
41 | [ORQQEAFL ENC APPT FUTURE LIMIT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAFL_ENC_APPT_FUTURE_LIMIT) | ORWTPD1 GETEAFL | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
42 | [ORQQEAPT ENC APPT START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_START) | ORWTPD1 GETEDATS | __1__
43 | [ORQQEAPT ENC APPT STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_STOP) | ORWTPD1 GETEDATS | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
44 | [ORQQPL SUPPRESS CODES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQPL_SUPPRESS_CODES) | ORQQPL INIT USER | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
45 | [ORWCH BOUNDS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_BOUNDS) | ORWCH LOADSIZ, ORWCH SAVESIZ, ORWCH LOADALL, ORWCH SAVEALL | &nbsp;
46 | [ORWCH COLUMNS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_COLUMNS) | ORWCH LOADALL, ORWCH SAVEALL | &nbsp;
47 | [ORWCH FONT SIZE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_FONT_SIZE) | ORWCH SAVFONT, ORWCH LDFONT | &nbsp;
48 | [ORWCH WIDTH](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_WIDTH) | ORWCH LOADALL, ORWCH SAVEALL | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | [ORWCOM ORDER ACCEPTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_ORDER_ACCEPTED) | ORWCOM ORDEROBJ | &nbsp;
50 | [ORWCOM PATIENT SELECTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_PATIENT_SELECTED) | ORWCOM PTOBJ | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
51 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCV1_COVERSHEET_LIST) | ORWCV1 COVERSHEET LIST | __8__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
52 | [ORWD NONVA REASON](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWD_NONVA_REASON) | ORWPS REASON | __4__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | [ORWDP DEFAULT PRINTER](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDP_DEFAULT_PRINTER) | ORWRP GET DEFAULT PRINTER | &nbsp;
54 | [ORWDP WINPRINT DEFAULT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDP_WINPRINT_DEFAULT) | ORWRP GET DEFAULT PRINTER | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
55 | [ORWDQ QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDQ_QUICK_VIEW) | ORWUL QV4DG | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWDX WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDX_WRITE_ORDERS_LIST) | ORWDX WRLST | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
57 | [ORWDXM ORDER MENU STYLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDXM_ORDER_MENU_STYLE) | ORWDXM MSTYLE | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
58 | [ORWG GRAPH SETTING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_SETTING) | ORWGRPC GETPREF | __3__
59 | [ORWG GRAPH VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_VIEW) | ORWGRPC ALLVIEWS | __31__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
60 | [ORWOR AUTO CLOSE PT MSG](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTO_CLOSE_PT_MSG) | ORWU USERINFO | __1__
61 | [ORWOR AUTOSAVE NOTE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTOSAVE_NOTE) | ORWU USERINFO | __1__
62 | [ORWOR BROADCAST MESSAGES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_BROADCAST_MESSAGES) | ORWU USERINFO | __1__
63 | [ORWOR CATEGORY SEQUENCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_CATEGORY_SEQUENCE) | ORWORDG MAPSEQ | __20__
64 | [ORWOR DISABLE HOLD ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_HOLD_ORDERS) | ORWU USERINFO | __1__
65 | [ORWOR DISABLE ORDERING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_ORDERING) | ORWU USERINFO | __1__
66 | [ORWOR DISABLE WEB ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_WEB_ACCESS) | ORWU USERINFO | &nbsp;
67 | [ORWOR ENABLE VERIFY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_ENABLE_VERIFY) | ORWU USERINFO | &nbsp;
68 | [ORWOR SHOW SURGERY TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_SHOW_SURGERY_TAB) | ORWSR SHOW SURG TAB | __2__
69 | [ORWOR TIMEOUT CHART](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_CHART) | ORWU USERINFO | &nbsp;
70 | [ORWOR TIMEOUT COUNTDOWN](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_COUNTDOWN) | ORWU USERINFO | __1__
71 | [ORWOR WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_WRITE_ORDERS_LIST) | ORWDX WRLST | __13__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
72 | [ORWPCE ANYTIME ENCOUNTERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ANYTIME_ENCOUNTERS) | ORWPCE ANYTIME | __3__
73 | [ORWPCE ASK ENCOUNTER UPDATE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ASK_ENCOUNTER_UPDATE) | ORWPCE ASKPCE | __1__
74 | [ORWPCE DISABLE AUTO CHECKOUT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_CHECKOUT) | ORWPCE ALWAYS CHECKOUT | &nbsp;
75 | [ORWPCE DISABLE AUTO VISIT TYPE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_VISIT_TYPE) | ORWPCE AUTO VISIT TYPE SELECT | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
76 | [ORWRP CIRN AUTOMATIC](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWRP_CIRN_AUTOMATIC) | ORWCIRN AUTORDV | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp;
77 | [ORWT TOOLS MENU](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWT_TOOLS_MENU) | ORWU TOOLMENU | __4__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
78 | [PXRM CPRS LOOKUP CATEGORIES](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_CPRS_LOOKUP_CATEGORIES) | ORQQPXRM REMINDER CATEGORIES | __9__
79 | [PXRM GEC STATUS CHECK](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GEC_STATUS_CHECK) | ORWU USERINFO | &nbsp;
80 | [PXRM GUI REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GUI_REMINDERS_ACTIVE) | ORQQPX NEW REMINDERS ACTIVE | __2__
&nbsp; | &nbsp; | &nbsp; | &nbsp;
81 | [TIU DEFAULT TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_DEFAULT_TEMPLATES) | TIU TEMPLATE SET DEFAULTS, TIU TEMPLATE GET DEFAULTS | &nbsp;
82 | [TIU PERSONAL TEMPLATE ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_PERSONAL_TEMPLATE_ACCESS) | TIU TEMPLATE ACCESS LEVEL | &nbsp;
83 | [TIU TEMPLATE ACCESS BY CLASS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_TEMPLATE_ACCESS_BY_CLASS) | TIU TEMPLATE ACCESS LEVEL | &nbsp;
