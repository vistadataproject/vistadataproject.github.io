---
layout: default
title: VAM Year 1 - 'Patient (Non Meta RPCs) for Build 2'
---
    
## Build 2 Patient RPCs
    
With Build 2, the VICS Service must emulate the RPCs seen in _capture_ files covering CPRS [P1] connecting to VISTA up to Patient Select, [P2] selecting a patient up to domain specific work and [P3s] specific activity for the PDE domains, _Allergy_, _Vital_ and _Problem_.

The [Meta RPCs](metaInMongoScope) (those not accessing or changing Patient data) are due to be completed in Build 1.1. The following details the in-scope _Patient RPCs_ which need to be emulated by _Build 2_ (mid March 2018).

__Notes__: 
  * The captures were created during the VISTA Data Project (VDP). CPRS has been rereleased since the project ended. A final definitive list of Patient RPCs will be generated with the latest version of CPRS once that is made available to VAM.
  * Some captures like Vitals seem to take in P2 RPCs and need to be cleaned (__TODO__). We may need a _P4_ to cover the common exit sequence. Post cleanup some RPCs (TIU?) may be moved _out of scope_.
  * Unlike the Meta RPC report, the report below doesn't detail the Files (and Parameters) accessed by Patient RPCs. These need to be filled in __TODO__.
  * Besides _BYE_ etc, out of scope RPCs include parts of _P2_ that fill in the coversheet. These 

Total RPCs in PDE Captures: __131__
  * Meta RPCs (B1.1): __141__
  * Out of Scope RPCs (BYE etc): __3__
VDM Emulated RPCs: __26__


__P2 Patient RPCs:__ 47

\# | Name | Phase/Domain | VDM | Comment
--- | --- | --- | --- | ---
1 | [DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_ARRAY) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
2 | [DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_PAT/DIV_MEANS_TEST) | P2 | &nbsp; | &nbsp;
3 | [DG SENSITIVE RECORD ACCESS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_SENSITIVE_RECORD_ACCESS) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
4 | [GMV ADD VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ADD_VM) | VITALS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
5 | [GMV CLOSEST READING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CLOSEST_READING) | VITALS | &nbsp; | &nbsp;
6 | [GMV EXTRACT REC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_EXTRACT_REC) | VITALS | &nbsp; | &nbsp;
7 | [GMV LATEST VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LATEST_VM) | VITALS | &nbsp; | &nbsp;
8 | [GMV MARK ERROR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MARK_ERROR) | VITALS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
9 | [GMV V/M ALLDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_V/M_ALLDATA) | VITALS | &nbsp; | &nbsp;
10 | [OR GET COMBAT VET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OR_GET_COMBAT_VET) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
11 | [ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCNOTE_GET_TOTAL) | P2 | &nbsp; | &nbsp;
12 | [ORDEA SIGINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_SIGINFO) | ALLERGIES | &nbsp; | &nbsp;
13 | [ORQQAL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_DETAIL) | ALLERGIES | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
14 | [ORQQAL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST) | VITALS, P2, ALLERGIES | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
15 | [ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_ADD_SAVE) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
16 | [ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CHECK_DUP) | PROBLEMS | &nbsp; | &nbsp;
17 | [ORQQPL DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DELETE) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
18 | [ORQQPL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DETAIL) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
19 | [ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_LOAD) | PROBLEMS | &nbsp; | Returns current values of Problem properties - preparation for Editing
20 | [ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_SAVE) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
21 | [ORQQPL INIT PT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_PT) | PROBLEMS | &nbsp; | Returns Death Indicator, SC and Exposures
22 | [ORQQPL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_LIST) | VITALS, PROBLEMS, P2 | &nbsp; | Returns list of Problems for Patient
23 | [ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROB_COMMENTS) | PROBLEMS | &nbsp; | Returns comments of Problem
24 | [ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LIST) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
25 | [ORQQPL REPLACE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_REPLACE) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
26 | [ORQQPL UPDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_UPDATE) | PROBLEMS | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/problems/rpcEmulatorProblemModel.js) | &nbsp;
27 | [ORQQVI VITALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS) | VITALS, P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcEmulatorVitalsModel.js) | &nbsp;
28 | [ORVAA VAA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORVAA_VAA) | P2 | &nbsp; | Policy name for Veteran in VA Advantage
29 | [ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_LOAD_FOR_EDIT) | ALLERGIES | &nbsp; | &nbsp;
30 | [ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SAVE_ALLERGY) | ALLERGIES | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/allergies/rpcEmulatorAllergiesModel.js) | &nbsp;
31 | [ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK) | ALLERGIES | &nbsp; | Lock Patient
32 | [ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK) | ALLERGIES | &nbsp; | Unlock Patient
33 | [ORWGRPC TYPES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TYPES) | P1 | &nbsp; | &nbsp;
34 | [ORWOR UNSIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_UNSIGN) | P2, ALLERGIES | &nbsp; | &nbsp;
35 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_CODE) | PROBLEMS | &nbsp; | &nbsp;
36 | [ORWPCE SCDIS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCDIS) | ALLERGIES | &nbsp; | Service connected percentage and rated disabilities of Patient
37 | [ORWPT CWAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CWAD) | ALLERGIES | &nbsp; | CWAD flag(s) of Patient??
38 | [ORWPT DIEDON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DIEDON) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
39 | [ORWPT ENCTITL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ENCTITL) | VITALS, PROBLEMS, P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
40 | [ORWPT ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ID_INFO) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
41 | [ORWPT LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LIST_ALL) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
42 | [ORWPT SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELECT) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
43 | [ORWPT TOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_TOP) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
44 | [ORWPT1 PRCARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PRCARE) | P2 | [VDP VDM](https://github.com/vistadataproject/VDM/blob/master/prototypes/patient/rpcEmulatorPatientModel.js) | &nbsp;
45 | [TIU GET REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_REQUEST) | ALLERGIES | &nbsp; | &nbsp;
46 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETROOTS) | VITALS, PROBLEMS | &nbsp; | &nbsp;
47 | [TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UNLOCK_RECORD) | ALLERGIES | &nbsp; | &nbsp;


__Out of Scope:__ 14 - as not in PDE domain

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
13 | [ORWPT LEGACY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LEGACY) | P2 | Communicates to see if Patient has data on legacy system - __means external comms?__
14 | [ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SHARE) | P2 | Sets Global in VISTA for DFN sharing. Not a VICS concept
