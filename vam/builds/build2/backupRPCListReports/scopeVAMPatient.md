---
layout: default
title: VAM Year 1 - 'Patient (Non Meta RPCs)'
---
    
## Build 2 Patient RPCs
    
With Build 2, the VICS Service must emulate the RPCs seen in _capture_ files covering CPRS [P1] connecting to VISTA up to Patient Select, [P2] selecting a patient up to domain specific work and [P3s] specific activity for the PDE domains, _Allergy_, _Vital_ and _Problem_.



__P2 Patient RPCs:__ 37

\# | Name | Phase/Domain | VDM | Comment
--- | --- | --- | --- | ---
1 | [DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_ARRAY) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [MEDIUM] [UTILITY] [CM] Ignore the use of TMP in the MUMPS - it's just inefficient coding and has no effect beyond the function. This RPC gathers candidates that have the same last name as the Patient and the same last four digits in their SS#'s. Note the use of a custom social_security_number MUMPS index, BS5, needn't be replicated in Mongo. In Mongo, we could use a compound index on last name and last four numbers of social (make both first class fields). See [Pei's Test](https://github.com/vistadataproject/VDM/blob/master/prototypes/patientVICS/rpcPatientHardselect-spec.js#L196). Before marking this finished, replicate that the RPC behaves differently for sensitive patient (see MUMPS _DOB^DPTLK1_ call and SCREENing). and test __CPRS Behavior__ if ambiguity ie/ if > 1 patient has lastname/last four SSN combination
2 | [DG SENSITIVE RECORD ACCESS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_SENSITIVE_RECORD_ACCESS) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [DIFFICULT] [DUAL] [SECURITY] [CM]. Involves file 38.1 (mark patient marked as sensitive), the key _DG SENSITIVITY_, if a user has an SSN and checking if a Patient is an Employee (does Patient have EMPLOYEE eligibility flag?) - see [Pei's Tests](https://github.com/vistadataproject/VDM/blob/master/prototypes/patientVICS/rpcPatientHardselect-spec.js#L256). See CPRS behavior for sensitive vs non sensitive patient selection both when a provider lacks the appropriate key and when she has that key. Want to see CHEYCLONE data too and if a Bulletin is sent when a sensitive patient is accessed (how will we replicate that?). This isolates a __small subsystem__ and draws in security which is part of VAM. Though marked _DUAL_, may just do Nationally ie/ intercept RPCs and control access to sensitive patients and log all accesses. Equivalent function could be retired in VISTA. Alternatively, will need to see if can know if a patient is marked sensitive - do 38.1 additions fire protocol handlers or create bulletins?
3 | [GMV ADD VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ADD_VM) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
4 | [GMV CLOSEST READING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CLOSEST_READING) | VITALS | &nbsp; | &nbsp;
5 | [GMV EXTRACT REC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_EXTRACT_REC) | VITALS | &nbsp; | &nbsp;
6 | [GMV LATEST VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LATEST_VM) | VITALS | &nbsp; | &nbsp;
7 | [GMV MARK ERROR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MARK_ERROR) | VITALS | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
8 | [GMV V/M ALLDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_V/M_ALLDATA) | VITALS | &nbsp; | &nbsp;
9 | [OR GET COMBAT VET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OR_GET_COMBAT_VET) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [EASY] [READ] VDM version seems to implement correct logic - today's date comes into play as does the property _combat_veteran_end_date_. Double check it. Must test effect of different dates
10 | [ORDEA SIGINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_SIGINFO) | ALLERGIES | &nbsp; | &nbsp;
11 | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_PATIENT_LIST) | P2, P2_INQ | &nbsp; | [UTILITY] [READ] [CHEYCLONE] [VDM] [CM] Not part of original captures but in Router Manager. Lot's of use of Parameter Service and different contexts (in Ward, in Clinic, for Provider etc). Lot's of scopes - for example, default provider (_P_) scope uses an _APR_ index on the 'treating provider' property of Patient. This was NOT implemented in VDM and should get a __VDM__ set of tests before national, pure JS emulation. See [data issue on more details from CPRS Manual](https://github.com/vistadataproject/DataExtractNSync/issues/30)
12 | [ORQQAL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_DETAIL) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
13 | [ORQQAL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST) | VITALS, P2OLD, P2, ALLERGIES, P2_INQ | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
14 | [ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_ADD_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
15 | [ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CHECK_DUP) | PROBLEMS | &nbsp; | &nbsp;
16 | [ORQQPL DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DELETE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
17 | [ORQQPL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DETAIL) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
18 | [ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_LOAD) | PROBLEMS | &nbsp; | [READ] Returns current values of Problem properties - preparation for Editing
19 | [ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_SAVE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
20 | [ORQQPL INIT PT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_PT) | PROBLEMS | &nbsp; | [EASY] [READ] Returns Death Indicator, SC and Exposures - key for demographics. Helped if _CHEYCLONE_ but not essential. Seems to be superset of _ORWPCE SCDIS_ - do at same time
21 | [ORQQPL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_LIST) | PROBLEMS, VITALS, P2OLD, P2, P2_INQ | &nbsp; | [READ] Returns list of Problems for Patient
22 | [ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROB_COMMENTS) | PROBLEMS | &nbsp; | [READ] Returns comments of Problem
23 | [ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LIST) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
24 | [ORQQPL REPLACE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_REPLACE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
25 | [ORQQPL UPDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_UPDATE) | PROBLEMS | [problems](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
26 | [ORQQVI VITALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS) | VITALS, P2OLD, P2, P2_INQ | [vitals](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
27 | [ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_LOAD_FOR_EDIT) | ALLERGIES | &nbsp; | &nbsp;
28 | [ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SAVE_ALLERGY) | ALLERGIES | [allergies](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
29 | [ORWPCE SCDIS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCDIS) | ALLERGIES | &nbsp; | [READ] [EASY] Service connected percentage and rated disabilities of Patient. Subset of __ORQQPL INIT PT__ (do with it)
30 | [ORWPT DIEDON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DIEDON) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ] [EASY] Easy on property (date of death) check in 2. Ex of argument passed that shouldn't be ie/ Patient (DFN) already chosen?
31 | [ORWPT ENCTITL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ENCTITL) | PROBLEMS, VITALS, P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ] [DIFFICULT] [CM] as related to others. Easy on properties of three files - roombed of Patient (explicitly IEN'ed), name and abbr of location (explicitly IEN'ed) and name of provider (explicitly IEN'ed). Performance hit as get across three collections. _Medium_ as need to consider centralizing and retrieving all relevant identifier information in the session object (logged in user, selected location, selected patient). __BUT tie to ORWU NEWPERS__ as part of location/provider selection. See [issue](https://github.com/vistadataproject/DataExtractNSync/issues/44) and need to better understand context of this and its related RPCs. Will need to see in __Problems__ and _Vitals_ where it appears with NEWPERS and _ORWCV VST_
32 | [ORWPT ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ID_INFO) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ] [EASY] Identifying information of DFN (passed in but shouldn't be). Properties from Patient (2). The patient details returned are a subset of those returned by _ORPWT SELECT_.
33 | [ORWPT LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LIST_ALL) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ] [MEDIUM] [CM] Lists 44 (fixed in MUMPS) patient file names and allows paging, sorted by name. B index is walked, not the file itself. In Mongo, need to sort by 'B' ie/ Label - must __see how paging through a sorted index works in Mongo__. Note that the old VDM version doesn't scale - it grabs all entries and sorts with _lodash_. Testing MUST have [a] 1000's of entries in the Patient file (just names for most) to allow scale testing and paging and [b] see if B index has all patient entries or are some entries, such as deceased patients removed? Also __want to see how CPRS pages__ ie/ does it pass in Name or Last IEN - both are supported. Note that SENSITIVE PATIENT and DEFAULT LIST don't seem to effect this generic walk of the whole patient file which means user may be presented with 'inproper' choices?
34 | [ORWPT PTINQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_PTINQ) | P2, P2_INQ | &nbsp; | [READ]
35 | [ORWPT SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELECT) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ/SELECT] [MEDIUM] [PARTIAL] [DUAL] [CM] only partial as the full response must continue to come from VISTA. This RPC does more than select the current patient things - it returns demographic and flag information and sets up or clears globals in VISTA. Some data like CWAD flags are not fully in scope for B2 and so the full response must continue to come from VISTA. As patient selection is intrinsic to the national service, the selection part of this RPC must be shadowed in the national service by setting 'current patient' in the session object. The emulation must be __flagged or tagged as PARTIAL__ so our documentation doesn't (yet) claim full emulation. Note if we move _Sensitive Patient_ tracking to the national services then see if selection is effected. For example, if a patient is sensitive but a user lacks the appropriate key, is there an error?
36 | [ORWPT TOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_TOP) | P2OLD | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ/SELECT] [EASY] returns current patient ('top') selected. VISTA uses a global (DISV) to store the current patient. The _session_ object holds the current/selected patient in VICS. Partial emulation of ORWPT SELECT allows ORWPT TOP to be fully emulated in the national service
37 | [ORWPT1 PRCARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PRCARE) | P2OLD, P2, P2_INQ | [patient](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | [READ] [DIFFICULT] [CHEYCLONE] [VDM] [CM] - Gets into teams for which we need accurate (clone-based) test data. Sean said __used in JLV__ to provide primary care provider info. See [data issue on teams](https://github.com/vistadataproject/DataExtractNSync/issues/29). Leave to end as may need CHEYCLONE (could go to B3)


__Out of Scope B2:__ 25

\# | Name | Phase/Domain | Comment
--- | --- | --- | ---
1 | [DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_PAT_DIV_MEANS_TEST) | P2OLD, P2, P2_INQ | [DIFFICULT] means test setting in 40.8 which is looked up from Institution (4) of user BUT also in _DGMTU_, see a query is made to _HEC_ if necessary ie/ __external comms?__
2 | [ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCNOTE_GET_TOTAL) | P2OLD, P2, P2_INQ | Total of Progress Notes of Patient - back in scope for B3, if B3 does Documents. Note expects PROGRESS NOTE Class to be IEN 3 - CWAD looks up IENS of its national classes but this one doesn't
3 | [ORPRF CLEAR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_CLEAR) | P2OLD, P2, ALLERGIES, P2_INQ | VISTA Global Clearing - Not a VICS Concept (and deals with Flags which are currently out of scope)
4 | [ORPRF HASFLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_HASFLG) | P2OLD, P2, P2_INQ | Patient has flags - flags out of scope now
5 | [ORQQPP LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPP_LIST) | VITALS, P2OLD, P2, ALLERGIES, P2_INQ | Patient Posting List for Coversheet - out of scope
6 | [ORQQPXRM REMINDERS UNEVALUATED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDERS_UNEVALUATED) | P2, P2_INQ | Reminders to B3 or beyond
7 | [ORVAA VAA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORVAA_VAA) | P2OLD, P2, P2_INQ | [MEDIUM] [CHEYCLONE] Policy name for Veteran in VA Advantage. Leverages .312/Insurance Type multiple of Patient (2). Needs CheyClone as need example patients with full setup so, for now, pushing beyond B2.
8 | [ORWCIRN FACLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_FACLIST) | P2OLD, P2, P2_INQ | List of Remote facilities of Patient - __means external comms?__
9 | [ORWCV POLL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_POLL) | PROBLEMS, VITALS, P2, P2_INQ | Coversheet Poll - out of scope currently but may revisit
10 | [ORWCV START](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_START) | VITALS, P2OLD, P2, P2_INQ | Coversheet build start - out of scope currently but may revisit
11 | [ORWCV STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_STOP) | VITALS, P2OLD, P2, P2_INQ | Coversheet build stop - out of scope currently but may revisit
12 | [ORWCV VST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_VST) | PROBLEMS, VITALS, P2OLD, P2, P2_INQ | (Future/Appointment?) Visit List for Coversheet - domain currenty out of scope. Will need full clone data to fully expand. Note seems to be called when click on Location box to select a 44. In group with NEWPERS and ENCTITL. See [issue](https://github.com/vistadataproject/DataExtractNSync/issues/44)
13 | [ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK) | ALLERGIES | LOCK
14 | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK) | ALLERGIES | LOCK
15 | [ORWGRPC TYPES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TYPES) | P1, P2_INQ | One variation returns global/type information in general, another returns active data per patient and relies on PXRMINDX. Out of scope fully until PXRMINDX moves to National Services
16 | [ORWMHV MHV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWMHV_MHV) | P2OLD, P2, P2_INQ | Checks if Patient has My Healthe Vet Data - __means external comms?__
17 | [ORWOR UNSIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_UNSIGN) | P2OLD, P2, ALLERGIES, P2_INQ | PART OF SIGN
18 | [ORWORB FASTUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_FASTUSER) | P2OLD, P2, P2_INQ | List of notifications for a User
19 | [ORWPS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_ACTIVE) | ALLERGIES | Meds active and inactive - not til we do Pharmacy
20 | [ORWPS COVER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_COVER) | VITALS, P2OLD, P2, P2_INQ | Meds list for coversheet - not til we do Pharmacy
21 | [ORWPT CWAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CWAD) | ALLERGIES | [CROSS DOMAIN] Uses an 'index by class' of documents to see if a patient has any of _C_ (Crisis), _D_ (Advance Directives) or _W_ (warning) documents - their presence lead to flags in CPRS (all logic in ENCOVER^TIUPP3). Note that all the Classes are National. _A_ is for Allergy and it is set if there are reactions. This RPC's entry point is also called in the Patient Select RPC which returns flags along with demographics. So this and the full return values of Patient Select will be in scope (__for Build 3__?) if Documents move into scope for B3.
22 | [ORWPT LEGACY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LEGACY) | P2OLD, P2, P2_INQ | Communicates to see if Patient has data on legacy system - __means external comms?__
23 | [ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SHARE) | P2OLD, P2, P2_INQ | Sets Global in VISTA for DFN sharing. Not a VICS concept
24 | [TIU GET REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_REQUEST) | ALLERGIES | Only looking for name of requesting package for Allergy document. Leave in VISTA for now until do TIU in B3
25 | [TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UNLOCK_RECORD) | ALLERGIES | No LOCK in Allergies for the document created - perhaps locked internally and this unlocks (will need a test on nodeVISTA ie/ native VISTA). Either way, leave out of B2 - comes in in B3 for TIU in general should B3 adopt Documents


__VDM Classes Used for these Patient RPCs:__ 30

Note some are Meta Files.

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


