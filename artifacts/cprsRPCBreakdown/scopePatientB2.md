---
layout: default
title: VAM Year 1 - 'Patient (Non Meta RPCs) for Build 2'
---
    
## Build 2 Patient RPCs
    
With Build 2, the VICS Service must emulate the RPCs seen in _capture_ files covering CPRS [P1] connecting to VISTA up to Patient Select, [P2] selecting a patient up to domain specific work and [P3s] specific activity for the PDE domains, _Allergy_, _Vital_ and _Problem_.

The [Meta RPCs](scopeMetaB1_1) (those not accessing or changing Patient data) are due to be completed in Build 1.1. The following details the in-scope _Patient RPCs_ which need to be emulated by _Build 2_ (mid March 2018).

__Notes__: 
  * the key Patient Select RPC (_ORWPT SELECT_) may only get a PARTIAL implementation - some of the data in its reply is not in scope for PDE/B2
  * The captures were created during the VISTA Data Project (VDP). CPRS has been rereleased since the project ended. A final definitive list of Patient RPCs will be generated with the latest version of CPRS once that is made available to VAM.
  * The captures cover __OUTPATIENT__ and not __INPATIENT__ - INPATIENT Patient RPCs are not covered
  * __There may be more__: certain RPCs like _ORWDBA1 BASTATUS_ are always 0 in our tests; if set to 1, do other RPCs kick in? And _XUS DIVISION GET_ may have an effect though that's likely to be on the Meta RPC list and not the Patient RPC list.
  * VDM prototyping for Clinical focused on CHANGE RPCs so some relatively simple READ RPCs were never emulated.
  * Some captures like Vitals seem to take in P2 RPCs and need to be cleaned (__TODO__). We may need a _P4_ to cover the common exit sequence. Post cleanup some RPCs (TIU?) may be moved _out of scope_.
  * Unlike the Meta RPC report, the report below doesn't detail the Files (and Parameters) accessed by Patient RPCs. These need to be filled in __TODO__.
  * Besides _BYE_ etc, out of scope RPCs include parts of _P2_ that fill in the coversheet. These 

Total RPCs in PDE Captures: __131__
  * Meta RPCs (B1.1): __141__
  * Out of Scope RPCs (BYE etc): __3__
  * VDM Emulated RPCs: __25__


__P2 Patient RPCs:__ 48

\# | Name | Phase/Domain | VDM | Comment
--- | --- | --- | --- | ---
1 | [DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_ARRAY) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [DIFFICULT] as need to establish range of test data to cover cases and __may lead to more CPRS RPCs__ if return 1 ie/ that partial name/ssn combo is not unique. First work is to test and establish boundaries and see what additional indexes are needed in Mongo/Patient to cover the calculations of this RPC
2 | [DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_PAT/DIV_MEANS_TEST) | P2 | &nbsp; | &nbsp;
3 | [DG SENSITIVE RECORD ACCESS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_SENSITIVE_RECORD_ACCESS) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] [SECURITY] need to establish test data for KEY setting combinations
4 | [GMV ADD VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ADD_VM) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
5 | [GMV CLOSEST READING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CLOSEST_READING) | VITALS | &nbsp; | &nbsp;
6 | [GMV EXTRACT REC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_EXTRACT_REC) | VITALS | &nbsp; | &nbsp;
7 | [GMV LATEST VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LATEST_VM) | VITALS | &nbsp; | &nbsp;
8 | [GMV MARK ERROR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MARK_ERROR) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
9 | [GMV V/M ALLDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_V/M_ALLDATA) | VITALS | &nbsp; | &nbsp;
10 | [OR GET COMBAT VET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OR_GET_COMBAT_VET) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] VDM version seems to implement correct logic - today's date comes into play. Double check it. Must test effect of different dates
11 | [ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCNOTE_GET_TOTAL) | P2 | &nbsp; | &nbsp;
12 | [ORDEA SIGINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_SIGINFO) | ALLERGIES | &nbsp; | &nbsp;
13 | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_PATIENT_LIST) | &nbsp; | &nbsp; | Not part of original captures but in Router Manager. Lot's of use of Parameter Service.
14 | [ORQQAL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_DETAIL) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
15 | [ORQQAL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST) | VITALS, P2, ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
16 | [ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_ADD_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
17 | [ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CHECK_DUP) | PROBLEMS | &nbsp; | &nbsp;
18 | [ORQQPL DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DELETE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
19 | [ORQQPL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DETAIL) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
20 | [ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_LOAD) | PROBLEMS | &nbsp; | Returns current values of Problem properties - preparation for Editing
21 | [ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
22 | [ORQQPL INIT PT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_PT) | PROBLEMS | &nbsp; | Returns Death Indicator, SC and Exposures
23 | [ORQQPL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_LIST) | VITALS, PROBLEMS, P2 | &nbsp; | Returns list of Problems for Patient
24 | [ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROB_COMMENTS) | PROBLEMS | &nbsp; | Returns comments of Problem
25 | [ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LIST) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
26 | [ORQQPL REPLACE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_REPLACE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
27 | [ORQQPL UPDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_UPDATE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
28 | [ORQQVI VITALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS) | VITALS, P2 | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
29 | [ORVAA VAA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORVAA_VAA) | P2 | &nbsp; | Policy name for Veteran in VA Advantage
30 | [ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_LOAD_FOR_EDIT) | ALLERGIES | &nbsp; | &nbsp;
31 | [ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SAVE_ALLERGY) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
32 | [ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK) | ALLERGIES | &nbsp; | [DIFFICULT] - pair with Unlock. Lock Patient. Must implement locking (soft, interface enforced) locking. Self contained task. Also if always follows SELECT, then may roll into Selection.
33 | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK) | ALLERGIES | &nbsp; | [DIFFICULT] - pair with Lock. Unlock Patient.
34 | [ORWGRPC TYPES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TYPES) | P1 | &nbsp; | &nbsp;
35 | [ORWOR UNSIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_UNSIGN) | P2, ALLERGIES | &nbsp; | &nbsp;
36 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_CODE) | PROBLEMS | &nbsp; | &nbsp;
37 | [ORWPCE SCDIS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCDIS) | ALLERGIES | &nbsp; | Service connected percentage and rated disabilities of Patient
38 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DFLTSRC) | &nbsp; | &nbsp; | [MEDIUM] Parameter <ORLP DEFAULT LIST SOURCE> holds preference for patient list source (W=Ward, T=Team etc). RPC  returns its value. __TODO__: (_Medium_) see effect of different values on CPRS and/or subsequent RPCs it calls. __May move to meta__
39 | [ORWPT DIEDON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DIEDON) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] Easy on property (date of death) check in 2. Ex of argument passed that shouldn't be ie/ Patient (DFN) already chosen?
40 | [ORWPT ENCTITL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ENCTITL) | VITALS, PROBLEMS, P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] Easy on properties of three files - roombed of Patient (explicitly IEN'ed), name and abbr of location (explicitly IEN'ed) and name of provider (explicitly IEN'ed). Performance hit as get across three collections. _Medium_ as need to consider centralizing and retrieving all relevant identifier information in the session object (logged in user, selected location, selected patient)
41 | [ORWPT ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ID_INFO) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] Identifying information of DFN (passed in but shouldn't be). Properties from Patient (2)
42 | [ORWPT LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LIST_ALL) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] Only complication is ordering by name - B index is walked, not the file itself. In Mongo, need to sort by 'B' ie/ Label. Ties into other uses of name. Note that the old VDM version doesn't scale - it grabs all entries and sorts with _lodash_. See Mike/Conor on broad consideration of patient name handling including separating name elements and removing use of file 20 in national services.
43 | [ORWPT SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELECT) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] [PARTIAL] [DUAL] only partial as the full response must continue to come from VISTA. This RPC does more than select the current patient things - it returns demographic and flag information and sets up or clears globals in VISTA. Some data like CWAD flags are not fully in scope for B2 and so the full response must continue to come from VISTA. As patient selection is intrinsic to the national service, the selection part of this RPC must be shadowed in the national service by setting 'current patient' in the session object. The emulation must be __flagged or tagged as PARTIAL__ so our documentation doesn't (yet) claim full emulation.
44 | [ORWPT TOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_TOP) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] returns current patient ('top') selected. VISTA uses a global (DISV) to store the current patient. The _session_ object holds the current/selected patient in VICS. Partial emulation of ORWPT SELECT allows ORWPT TOP to be fully emulated in the national service
45 | [ORWPT1 PRCARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PRCARE) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [DIFFICULT] - leave to end. __TODO__: MAY call outside services and gets into teams and mental health, two areas that are either __out of scope__ (?) or will need full test data setup
46 | [TIU GET REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_REQUEST) | ALLERGIES | &nbsp; | &nbsp;
47 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETROOTS) | VITALS, PROBLEMS | &nbsp; | &nbsp;
48 | [TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UNLOCK_RECORD) | ALLERGIES | &nbsp; | &nbsp;


__Out of Scope B2:__ 15

\# | Name | Phase/Domain | Comment
--- | --- | --- | ---
1 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_CLEAR) | P2, ALLERGIES | VISTA Global Clearing - Not a VICS Concept (and deals with Flags which are currently out of scope)
2 | [ORPRF HASFLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_HASFLG) | P2 | Patient has flags - flags out of scope now
3 | [ORQQPP LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPP_LIST) | VITALS, P2, ALLERGIES | Patient Posting List for Coversheet - out of scope
4 | [ORWCIRN FACLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_FACLIST) | P2 | List of Remote facilities of Patient - __means external comms?__
5 | [ORWCV POLL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_POLL) | VITALS, PROBLEMS | Coversheet Poll - out of scope currently but may revisit
6 | [ORWCV START](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_START) | VITALS, P2 | Coversheet build start - out of scope currently but may revisit
7 | [ORWCV STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_STOP) | VITALS, P2 | Coversheet build stop - out of scope currently but may revisit
8 | [ORWCV VST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_VST) | VITALS, PROBLEMS, P2 | Visit List for Coversheet - domain currenty out of scope
9 | [ORWMHV MHV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWMHV_MHV) | P2 | Checks if Patient has My Healthe Vet Data - __means external comms?__
10 | [ORWORB FASTUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_FASTUSER) | P2 | List of notifications for a User
11 | [ORWPS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_ACTIVE) | ALLERGIES | Meds active and inactive - not til we do Pharmacy
12 | [ORWPS COVER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_COVER) | VITALS, P2 | Meds list for coversheet - not til we do Pharmacy
13 | [ORWPT CWAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CWAD) | ALLERGIES | Uses an 'index by class' of documents to see if a patient has any of _C_ (Crisis), _D_ (Advance Directives) or _W_ (warning) documents - their presence lead to flags in CPRS (all logic in ENCOVER^TIUPP3). Note that all the Classes are National. _A_ is for Allergy and it is set if there are reactions. This RPC's entry point is also called in the Patient Select RPC which returns flags along with demographics. So this and the full return values of Patient Select will be in scope (__for Build 3__?) if Documents move into scope for B3.
14 | [ORWPT LEGACY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LEGACY) | P2 | Communicates to see if Patient has data on legacy system - __means external comms?__
15 | [ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SHARE) | P2 | Sets Global in VISTA for DFN sharing. Not a VICS concept


__VDM Classes Used for these Patient RPCs:__ 30

__TODO__: subset these [1] separating Meta Files and [2] ensuring sufficient fan out coverage from primary patient files.

\# | Name | Domain(s)
--- | --- | ---
1 | Adverse_Reaction_Assessment-120_86 | allergies
2 | Adverse_Reaction_Reporting-120_85 | allergies
3 | Concept_Usage-757_001 | problems
4 | Drug-50 | allergies
5 | Drug_Ingredients-50_416 | allergies
6 | Eligibility_Code-8 | patient
7 | Expressions-757_01 | problems
8 | GMR_Allergies-120_82 | allergies
9 | Gmrv_Vital_Measurement-120_5 | vitals
10 | Gmrv_Vitals_Parameters-120_57 | vitals
11 | Hospital_Location-44 | problems, vitals
12 | Icd_Diagnosis-80 | problems
13 | Institution-4 | problems, vitals
14 | Major_Concept_Map-757 | problems
15 | Mas_Eligibility_Code-8_1 | patient
16 | Ndc_upn-50_67 | allergies
17 | New_Person-200 | problems
18 | Patient-2 | patient
19 | Patient_Allergies-120_8 | allergies
20 | Patient_Movement-405 | patient
21 | Patient_ihs-9000001 | patient
22 | Pbm_Patient_Demographics-59_9 | patient
23 | Problem-9000011 | problems
24 | Problem_List_Audit-125_8 | problems
25 | Provider_Narrative-9999999_27 | problems
26 | Tiu_Document-8925 | documents
27 | VA_Drug_Class-50_605 | allergies
28 | VA_Generic-50_6 | allergies
29 | VA_Product-50_68 | allergies
30 | Visit-9000010 | visits


