---
layout: default
title: VAM Year 1 - 'Patient (Non Meta RPCs) for Build 2'
---
    
## Build 2 Patient RPCs
    
With Build 2, the VICS Service must emulate the RPCs seen in _capture_ files covering CPRS [P1] connecting to VISTA up to Patient Select, [P2] selecting a patient up to domain specific work and [P3s] specific activity for the PDE domains, _Allergy_, _Vital_ and _Problem_.

The [Meta RPCs](scopeMetaB1_1) (those not accessing or changing Patient data) are due to be completed in Build 1.1. The following details the in-scope _Patient RPCs_ which need to be emulated by _Build 2_ (mid March 2018).

__Notes__: 
  * like Meta RPCs, __most Patient RPCs are reads__ - change RPCs will be marked __DUAL__ below meaning a call will be sent to BOTH the national VICS and VISTA
  * there are natural interactions between RPCs - how does SENSITIVE PATIENT effect PATIENT LIST or DEFAULT PATIENT LIST? What is the effect of XREF on the list of patients presented? Does or should SELECT error out if you try to select a sensitive patient but don't have the key? Behaviors need to be fully documented as the test combinations will and should get involved
  * some VDM choices may be changed in MVDM: being an employee is an eligibility - should MVDM break it out or ?
  * the key Patient Select RPC (_ORWPT SELECT_) may only get a PARTIAL implementation - some of the data in its reply is not in scope for PDE/B2
  * The captures were created during the VISTA Data Project (VDP). CPRS has been rereleased since the project ended. A final definitive list of Patient RPCs will be generated with the latest version of CPRS once that is made available to VAM.
  * The captures cover __OUTPATIENT__ and not __INPATIENT__ - INPATIENT Patient RPCs are not covered
  * __There may be more__: certain RPCs like _ORWDBA1 BASTATUS_ are always 0 in our tests; if set to 1, do other RPCs kick in? And _XUS DIVISION GET_ may have an effect though that's likely to be on the Meta RPC list and not the Patient RPC list.
  * VDM prototyping for Clinical focused on CHANGE RPCs so some relatively simple READ RPCs were never emulated.
  * Some captures like Vitals seem to take in P2 RPCs and need to be cleaned (__TODO__). We may need a _P4_ to cover the common exit sequence. Post cleanup some RPCs (TIU?) may be moved _out of scope_.
  * Unlike the Meta RPC report, the report below doesn't detail the Files (and Parameters) accessed by Patient RPCs. These need to be filled in __TODO__.
  * Besides _BYE_ etc, out of scope RPCs include parts of _P2_ that fill in the coversheet in the background and calls to services beyond VISTA.

Total RPCs in PDE Captures: __131__
  * Meta RPCs (B1.1): __143__
  * Out of Scope RPCs (BYE etc): __3__
  * VDM Emulated RPCs: __25__


__P2 Patient RPCs:__ 40

\# | Name | Phase/Domain | VDM | Comment
--- | --- | --- | --- | ---
1 | [DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_ARRAY) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] Ignore the use of TMP in the MUMPS - it's just inefficient coding and has no effect beyond the function. This RPC gathers candidates that have the same last name as the Patient and the same last four digits in their SS#'s. Note the use of a custom social_security_number MUMPS index, BS5, needn't be replicated in Mongo. In Mongo, we could use a compound index on last name and last four numbers of social (make both first class fields). See [Pei's Test](https://github.com/vistadataproject/VDM/blob/master/prototypes/patientVICS/rpcPatientHardselect-spec.js#L196). Before marking this finished, replicate that the RPC behaves differently for sensitive patient (see MUMPS _DOB^DPTLK1_ call and SCREENing). and test what is __CPRS Behavior__ if > ambiguity ie/ if > 1 patient has lastname/last four SSN combination
2 | [DG SENSITIVE RECORD ACCESS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_SENSITIVE_RECORD_ACCESS) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [DIFFICULT] [DUAL] [SECURITY]. Involves file 38.1 (mark patient marked as sensitive), the key _DG SENSITIVITY_, if a user has an SSN and checking if a Patient is an Employee (does Patient have EMPLOYEE eligibility flag?) - see [Pei's Tests](https://github.com/vistadataproject/VDM/blob/master/prototypes/patientVICS/rpcPatientHardselect-spec.js#L256). See CPRS behavior for sensitive vs non sensitive patient selection both when a provider lacks the appropriate key and when she has that key. Want to see CHEYCLONE data too and if a Bulletin is sent when a sensitive patient is accessed (how will we replicate that?). This isolates a __small subsystem__ and draws in security which is part of VAM. Though marked _DUAL_, may just do Nationally ie/ intercept RPCs and control access to sensitive patients and log all accesses. Equivalent function could be retired in VISTA. Alternatively, will need to see if can know if a patient is marked sensitive - do 38.1 additions fire protocol handlers or create bulletins?
3 | [GMV ADD VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ADD_VM) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
4 | [GMV CLOSEST READING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CLOSEST_READING) | VITALS | &nbsp; | &nbsp;
5 | [GMV EXTRACT REC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_EXTRACT_REC) | VITALS | &nbsp; | &nbsp;
6 | [GMV LATEST VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LATEST_VM) | VITALS | &nbsp; | &nbsp;
7 | [GMV MARK ERROR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MARK_ERROR) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
8 | [GMV V/M ALLDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_V/M_ALLDATA) | VITALS | &nbsp; | &nbsp;
9 | [OR GET COMBAT VET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OR_GET_COMBAT_VET) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] VDM version seems to implement correct logic - today's date comes into play as does the property _combat_veteran_end_date_. Double check it. Must test effect of different dates
10 | [ORDEA SIGINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_SIGINFO) | ALLERGIES | &nbsp; | &nbsp;
11 | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_PATIENT_LIST) | &nbsp; | &nbsp; | [DIFFICULT] [CHEYCLONE] [VDM] Not part of original captures but in Router Manager. Lot's of use of Parameter Service and different contexts (in Ward, in Clinic, for Provider etc). Will require __many, many tests__ and test data and a __full analysis of all paths__ before implementation. For example, default provider (_P_) scope uses an _APR_ index on the 'treating provider' property of Patient. This was NOT implemented in VDM but should get a __VDM__ set of tests before national, pure JS emulation
12 | [ORQQAL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_DETAIL) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
13 | [ORQQAL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST) | VITALS, P2, ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
14 | [ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_ADD_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
15 | [ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CHECK_DUP) | PROBLEMS | &nbsp; | &nbsp;
16 | [ORQQPL DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DELETE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
17 | [ORQQPL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DETAIL) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
18 | [ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_LOAD) | PROBLEMS | &nbsp; | Returns current values of Problem properties - preparation for Editing
19 | [ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
20 | [ORQQPL INIT PT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_PT) | PROBLEMS | &nbsp; | [EASY] Returns Death Indicator, SC and Exposures - key for demographics. Helped if _CHEYCLONE_ but not essential. Seems to be superset of _ORWPCE SCDIS_ - do at same time
21 | [ORQQPL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_LIST) | VITALS, PROBLEMS, P2 | &nbsp; | Returns list of Problems for Patient
22 | [ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROB_COMMENTS) | PROBLEMS | &nbsp; | Returns comments of Problem
23 | [ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LIST) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
24 | [ORQQPL REPLACE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_REPLACE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
25 | [ORQQPL UPDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_UPDATE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
26 | [ORQQVI VITALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS) | VITALS, P2 | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
27 | [ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_LOAD_FOR_EDIT) | ALLERGIES | &nbsp; | &nbsp;
28 | [ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SAVE_ALLERGY) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
29 | [ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK) | ALLERGIES | &nbsp; | [DIFFICULT] - pair with Unlock and part of overall _locking in Mongo design_. Lock Patient. Must implement locking (soft, interface enforced) locking. Self contained task. Also if always follows SELECT, then may roll into Selection. Note that though the name of this RPC suggests Orders, it is called and recalled in Allergy and internally the code says it _locks the patient chart_. Need to __test CPRS behavior__ if encounters a locked patient. Does this only effect changes such as editing an allergy OR does it stop a record being read?
30 | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK) | ALLERGIES | &nbsp; | [DIFFICULT] - pair with Lock. Unlock Patient.
31 | [ORWOR UNSIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_UNSIGN) | P2, ALLERGIES | &nbsp; | &nbsp;
32 | [ORWPCE SCDIS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCDIS) | ALLERGIES | &nbsp; | [EASY] Service connected percentage and rated disabilities of Patient. Subset of __ORQQPL INIT PT__ (do with it)
33 | [ORWPT DFLTSRC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DFLTSRC) | &nbsp; | &nbsp; | [MEDIUM] Parameter _ORLP DEFAULT LIST SOURCE_ holds preference for patient list source (W=Ward, T=Team etc). RPC  returns its value. __TODO__: (_Medium_) see effect of different values on CPRS and/or subsequent RPCs it calls. __May move to meta__
34 | [ORWPT DIEDON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DIEDON) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] Easy on property (date of death) check in 2. Ex of argument passed that shouldn't be ie/ Patient (DFN) already chosen?
35 | [ORWPT ENCTITL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ENCTITL) | VITALS, PROBLEMS, P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] Easy on properties of three files - roombed of Patient (explicitly IEN'ed), name and abbr of location (explicitly IEN'ed) and name of provider (explicitly IEN'ed). Performance hit as get across three collections. _Medium_ as need to consider centralizing and retrieving all relevant identifier information in the session object (logged in user, selected location, selected patient)
36 | [ORWPT ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ID_INFO) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] Identifying information of DFN (passed in but shouldn't be). Properties from Patient (2). The patient details returned are a subset of those returned by _ORPWT SELECT_.
37 | [ORWPT LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LIST_ALL) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] Lists 44 (fixed in MUMPS) patient file names and allows paging, sorted by name. B index is walked, not the file itself. In Mongo, need to sort by 'B' ie/ Label - must __see how paging through a sorted index works in Mongo__. Note that the old VDM version doesn't scale - it grabs all entries and sorts with _lodash_. Testing MUST have [a] 1000's of entries in the Patient file (just names for most) to allow scale testing and paging and [b] see if B index has all patient entries or are some entries, such as deceased patients removed? Also __want to see how CPRS pages__ ie/ does it pass in Name or Last IEN - both are supported. Note that SENSITIVE PATIENT and DEFAULT LIST don't seem to effect this generic walk of the whole patient file which means user may be presented with 'inproper' choices?
38 | [ORWPT SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELECT) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] [PARTIAL] [DUAL] only partial as the full response must continue to come from VISTA. This RPC does more than select the current patient things - it returns demographic and flag information and sets up or clears globals in VISTA. Some data like CWAD flags are not fully in scope for B2 and so the full response must continue to come from VISTA. As patient selection is intrinsic to the national service, the selection part of this RPC must be shadowed in the national service by setting 'current patient' in the session object. The emulation must be __flagged or tagged as PARTIAL__ so our documentation doesn't (yet) claim full emulation. Note if we move _Sensitive Patient_ tracking to the national services then see if selection is effected. For example, if a patient is sensitive but a user lacks the appropriate key, is there an error?
39 | [ORWPT TOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_TOP) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] returns current patient ('top') selected. VISTA uses a global (DISV) to store the current patient. The _session_ object holds the current/selected patient in VICS. Partial emulation of ORWPT SELECT allows ORWPT TOP to be fully emulated in the national service
40 | [ORWPT1 PRCARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PRCARE) | P2 | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [DIFFICULT] [CHEYCLONE] [VDM] - Gets into teams for which we need accurate (clone-based) test data. Leave to end as may need CHEYCLONE (could go to B3)


__Out of Scope B2:__ 21

\# | Name | Phase/Domain | Comment
--- | --- | --- | ---
1 | [DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_PAT_DIV_MEANS_TEST) | P2 | [DIFFICULT] means test setting in 40.8 which is looked up from Institution (4) of user BUT also in _DGMTU_, see a query is made to _HEC_ if necessary ie/ __external comms?__
2 | [ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCNOTE_GET_TOTAL) | P2 | Total of Progress Notes of Patient - back in scope for B3, if B3 does Documents. Note expects PROGRESS NOTE Class to be IEN 3 - CWAD looks up IENS of its national classes but this one doesn't
3 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_CLEAR) | P2, ALLERGIES | VISTA Global Clearing - Not a VICS Concept (and deals with Flags which are currently out of scope)
4 | [ORPRF HASFLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_HASFLG) | P2 | Patient has flags - flags out of scope now
5 | [ORQQPP LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPP_LIST) | VITALS, P2, ALLERGIES | Patient Posting List for Coversheet - out of scope
6 | [ORVAA VAA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORVAA_VAA) | P2 | [MEDIUM] [CHEYCLONE] Policy name for Veteran in VA Advantage. Leverages .312/Insurance Type multiple of Patient (2). Needs CheyClone as need example patients with full setup so, for now, pushing beyond B2.
7 | [ORWCIRN FACLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_FACLIST) | P2 | List of Remote facilities of Patient - __means external comms?__
8 | [ORWCV POLL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_POLL) | VITALS, PROBLEMS | Coversheet Poll - out of scope currently but may revisit
9 | [ORWCV START](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_START) | VITALS, P2 | Coversheet build start - out of scope currently but may revisit
10 | [ORWCV STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_STOP) | VITALS, P2 | Coversheet build stop - out of scope currently but may revisit
11 | [ORWCV VST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_VST) | VITALS, PROBLEMS, P2 | Visit List for Coversheet - domain currenty out of scope
12 | [ORWGRPC TYPES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TYPES) | P1 | One variation returns global/type information in general, another returns active data per patient and relies on PXRMINDX. Out of scope fully until PXRMINDX moves to National Services
13 | [ORWMHV MHV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWMHV_MHV) | P2 | Checks if Patient has My Healthe Vet Data - __means external comms?__
14 | [ORWORB FASTUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_FASTUSER) | P2 | List of notifications for a User
15 | [ORWPS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_ACTIVE) | ALLERGIES | Meds active and inactive - not til we do Pharmacy
16 | [ORWPS COVER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_COVER) | VITALS, P2 | Meds list for coversheet - not til we do Pharmacy
17 | [ORWPT CWAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CWAD) | ALLERGIES | [CROSS DOMAIN] Uses an 'index by class' of documents to see if a patient has any of _C_ (Crisis), _D_ (Advance Directives) or _W_ (warning) documents - their presence lead to flags in CPRS (all logic in ENCOVER^TIUPP3). Note that all the Classes are National. _A_ is for Allergy and it is set if there are reactions. This RPC's entry point is also called in the Patient Select RPC which returns flags along with demographics. So this and the full return values of Patient Select will be in scope (__for Build 3__?) if Documents move into scope for B3.
18 | [ORWPT LEGACY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LEGACY) | P2 | Communicates to see if Patient has data on legacy system - __means external comms?__
19 | [ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SHARE) | P2 | Sets Global in VISTA for DFN sharing. Not a VICS concept
20 | [TIU GET REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_REQUEST) | ALLERGIES | Only looking for name of requesting package for Allergy document. Leave in VISTA for now until do TIU in B3
21 | [TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UNLOCK_RECORD) | ALLERGIES | No LOCK in Allergies for the document created - perhaps locked internally and this unlocks (will need a test on nodeVISTA ie/ native VISTA). Either way, leave out of B2 - comes in in B3 for TIU in general should B3 adopt Documents


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


