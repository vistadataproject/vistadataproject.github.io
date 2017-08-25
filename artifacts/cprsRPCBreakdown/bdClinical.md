---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Clinical (416)

In Demo: __123 (29.6%)__
Emulated so far: __24 (19.5%)__


Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 81 (19.5%) | __24 (29.6%)__
READ | 284 (68.3%) | __80 (28.2%)__
UTILITY | 51 (12.3%) | __19 (37.3%)__





These RPCs access at least 23 parameters and 53 files.

\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
C1 | __[DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_ARRAY)__ | READ | DFN | 27 | FILE, P2PSEL, XREF | [2](http://localhost:9000/schema/2) | 
C2 | [DG CHK BS5 XREF Y/N](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_BS5_XREF_Y_N) | READ | DFN | 12 | FILE, IS-A, UNSTRUCTURED READ, XREF | [2](http://localhost:9000/schema/2) | 
C3 | __[DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_CHK_PAT_DIV_MEANS_TEST)__ | READ | DFN, DUZ2 | 13 | FILE, P2PSEL | [40.8](http://localhost:9000/schema/40_8) | 
C4 | [DG SENSITIVE RECORD BULLETIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/DG_SENSITIVE_RECORD_BULLETIN) | CHANGE | DFN, DGOPT, ACTION | 7 | BULLETIN, FILE | [38.1](http://localhost:9000/schema/38_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C5 | [GMRC LIST CONSULT REQUESTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMRC_LIST_CONSULT_REQUESTS) | READ | DFN | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C6 | __[GMV ADD VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ADD_VM)__ | CHANGE | GMVDATA | 3 | P3PCE, P3VITALS, RPCEMULATOR, eHMP |  | 
C7 | [GMV ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_ALLERGY) | READ | DFN | 8 | - |  | 
C8 | __[GMV CLOSEST READING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CLOSEST_READING)__ | READ | GMVDFN, GMVDT, GMVT, GMVFLAG | 41 | FILE, P3VITALS, eHMP | [120.5](http://localhost:9000/schema/120_5) | 
C9 | __[GMV EXTRACT REC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_EXTRACT_REC)__ | READ | GMRVDATA | 11 | FILE, P3VITALS | [120.5](http://localhost:9000/schema/120_5), [120.51](http://localhost:9000/schema/120_51) | 
C10 | __[GMV LATEST VM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_LATEST_VM)__ | READ | GMRDFN | 2 | P3PCE, P3VITALS |  | 
C11 | __[GMV MARK ERROR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MARK_ERROR)__ | CHANGE | GMVDATA | 8 | FILE, P3VITALS, RPCEMULATOR, eHMP | [120.5](http://localhost:9000/schema/120_5) | 
C12 | __[GMV V/M ALLDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_V_M_ALLDATA)__ | READ | GMVDATA | 12 | P3VITALS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C13 | __[OR GET COMBAT VET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OR_GET_COMBAT_VET)__ | READ | DFN | 19 | P2PSEL, P3MEDOPORDERS, RPCEMULATOR |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C14 | __[ORALWORD ALLWORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORALWORD_ALLWORD)__ | READ | DFN, ORX, ORTYPE, PROV | 56 | FILE, P3MEDOPORDERS | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C15 | [ORB DELETE ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_DELETE_ALERT) | CHANGE | XQAID, ORKILL | 8 | ALERT, FILE | [8992.1](http://localhost:9000/schema/8992_1) | 
C16 | [ORB FOLLOW-UP ARRAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_FOLLOW-UP_ARRAY) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
C17 | [ORB FOLLOW-UP STRING](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_FOLLOW-UP_STRING) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
C18 | [ORB FOLLOW-UP TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_FOLLOW-UP_TYPE) | READ | ORXQAID | 5 | DFN TO K/META, FILE | [100.9](http://localhost:9000/schema/100_9) | 
C19 | [ORB FORWARD ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_FORWARD_ALERT) | CHANGE | ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT | 4 | ALERT |  | 
C20 | [ORB RENEW ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_RENEW_ALERT) | CHANGE | XQAID | 4 | ALERT, FILE | [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C21 | __[ORCDLR2 CHECK ALL LC TO WC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCDLR2_CHECK_ALL_LC_TO_WC)__ | READ | ORL, ORDERS | 16 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C22 | [ORCDLR2 CHECK ONE LC TO WC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCDLR2_CHECK_ONE_LC_TO_WC) | READ | ORL, ORIFN, DATE, TYPE, SCH, DUR | 17 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C23 | [ORCHECK DELMONO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCHECK_DELMONO) | UTILITY | &nbsp; | 1 | REENTRANCY |  | 
C24 | [ORCHECK GETMONO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCHECK_GETMONO) | READ | ORMONO | 5 | REENTRANCY |  | 
C25 | [ORCHECK GETMONOL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCHECK_GETMONOL) | READ | &nbsp; | 4 | REENTRANCY |  | 
C26 | [ORCHECK GETXTRA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCHECK_GETXTRA) | READ | ORGL, ORRULE | 3 | REENTRANCY |  | 
C27 | [ORCHECK ISMONO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCHECK_ISMONO) | READ | &nbsp; | 3 | IS-A, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C28 | __[ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORCNOTE_GET_TOTAL)__ | READ | DFN | 6 | FILE, P2PSEL | [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C29 | [ORDEA HASHINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_HASHINFO) | READ | ORDFN, ORPROV | 18 | - |  | 
C30 | [ORDEA ORDHINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_ORDHINFO) | READ | ORIFN, HASH, OHINFO | 2 | - |  | 
C31 | [ORDEA PINLKCHK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_PINLKCHK) | UTILITY | &nbsp; | 5 | LOCK |  | 
C32 | [ORDEA PINLKSET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_PINLKSET) | UTILITY | &nbsp; | 3 | LOCK |  | 
C33 | [ORDEA PNDHLD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_PNDHLD) | READ | ORID | 3 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C34 | __[ORDEA SIGINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_SIGINFO)__ | READ | ORDFN, ORPROV | 18 | P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C35 | [ORECS01 VSITID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORECS01_VSITID) | READ | VSTSTR | 5 | FILE, IEN-LOOKUP | [9000010](http://localhost:9000/schema/9000010) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C36 | [OREVNTX LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX_LIST) | READ | DFN | 12 | FILE | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5), [100.6](http://localhost:9000/schema/100_6) | 
C37 | __[OREVNTX PAT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX_PAT)__ | READ | DFN | 8 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C38 | [OREVNTX1 CHGEVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_CHGEVT) | CHANGE | NEWEVT, ORIDS | 4 | - |  | 
C39 | [OREVNTX1 COMP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_COMP) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C40 | [OREVNTX1 CURSPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_CURSPE) | READ | PTIFN | 3 | - |  | 
C41 | [OREVNTX1 DELPTEVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DELPTEVT) | CHANGE | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C42 | [OREVNTX1 DIV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DIV) | READ | PTEVT | 2 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
C43 | [OREVNTX1 DONE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DONE) | CHANGE | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C44 | [OREVNTX1 EMPTY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_EMPTY) | READ | PTEVT | 2 | FILE, IS-A | [100.2](http://localhost:9000/schema/100_2) | 
C45 | [OREVNTX1 EVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_EVT) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
C46 | [OREVNTX1 EXISTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_EXISTS) | READ | DFN, EVT | 4 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C47 | __[OREVNTX1 GETSTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_GETSTS)__ | READ | ORDID | 3 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C48 | __[OREVNTX1 GTEVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_GTEVT)__ | READ | PTEVT | 14 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
C49 | [OREVNTX1 HAVEPRT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_HAVEPRT) | READ | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C50 | [OREVNTX1 ISDCOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_ISDCOD) | READ | ORIFN | 13 | FILE, IS-A, PARAMETER | [100](http://localhost:9000/schema/100) | OREVNT EXCLUDE DGRP
C51 | [OREVNTX1 ISHDORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_ISHDORD) | READ | ORID | 11 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
C52 | [OREVNTX1 ISPASS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_ISPASS) | READ | PTEVTID, EVTTYPE | 4 | FILE, IS-A | [100.5](http://localhost:9000/schema/100_5) | 
C53 | [OREVNTX1 LOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_LOC) | READ | PTEVT | 3 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
C54 | [OREVNTX1 MATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_MATCH) | READ | DFN, EVT | 7 | FILE | [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
C55 | [OREVNTX1 NAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_NAME) | READ | PTEVT | 2 | FILE | [100.5](http://localhost:9000/schema/100_5), [100.2](http://localhost:9000/schema/100_2) | 
C56 | __[OREVNTX1 ODPTEVID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_ODPTEVID)__ | READ | ORID | 2 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2) | 
C57 | [OREVNTX1 PUTEVNT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_PUTEVNT) | CHANGE | DFN, EVT, ORIFN | 1 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C58 | __[ORIMO IMOLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_IMOLOC)__ | READ | ORLOC, ORDFN | 14 | FILE, P3MEDOPORDERS, P3NVAORDERS | [44](http://localhost:9000/schema/44) | 
C59 | __[ORIMO IMOOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_IMOOD)__ | READ | ORDERID | 8 | FILE, IS-A, P3MEDOPORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C60 | [ORK TRIGGER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORK_TRIGGER) | READ | ORKDFN, ORKA, ORKMODE, OROIL, ORDODSG | 96 | FILE, LOGIC, PARAMETER | [100.98](http://localhost:9000/schema/100_98), [42](http://localhost:9000/schema/42) | ORK DEBUG ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C61 | __[ORPRF CLEAR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_CLEAR)__ | UTILITY | &nbsp; | 2 | P2PSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, REENTRANCY |  | 
C62 | [ORPRF GETFLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_GETFLG) | READ | PTDFN, FLAGID | 5 | REENTRANCY |  | 
C63 | __[ORPRF HASFLG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_HASFLG)__ | READ | PTDFN | 11 | P2PSEL, REENTRANCY |  | 
C64 | [ORPRF TRIGGER POPUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORPRF_TRIGGER_POPUP) | READ | PTDFN | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C65 | __[ORQOR DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQOR_DETAIL)__ | READ | ORID, DFN | 6 | JLV, P3NVAORDERS, UNSTRUCTURED READ, eHMP |  | 
C66 | [ORQOR LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQOR_LIST) | READ | PATIENT, GROUP, FLAG, ORSDT, OREDT, ORXREF, GETKID | 15 | FILE | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C67 | [ORQPT ATTENDING/PRIMARY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_ATTENDING_PRIMARY) | READ | DFN | 5 | - |  | 
C68 | [ORQPT CLINIC PATIENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_CLINIC_PATIENTS) | READ | CLIN, ORBDATE, OREDATE, MAXAPPTS, APPTBGN, APPTEND | 42 | PARAMETER, QUERY |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
C69 | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_PATIENT_LIST) | READ | &nbsp; | 30 | FILE, PARAMETER | [100.24](http://localhost:9000/schema/100_24) | *VARIABLE*, ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
C70 | [ORQPT MAKE RPL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_MAKE_RPL) | UTILITY | ORTL | 12 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
C71 | [ORQPT PATIENT TEAM PROVIDERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_PATIENT_TEAM_PROVIDERS) | READ | PT | 8 | FILE, QUERY, XREF | [100.21](http://localhost:9000/schema/100_21) | 
C72 | [ORQPT PROVIDER PATIENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_PROVIDER_PATIENTS) | READ | PROV | 5 | FILE, QUERY, XREF | [2](http://localhost:9000/schema/2) | 
C73 | [ORQPT READ RPL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_READ_RPL) | READ | ORJ, ORFROM, ORDIR | 17 | REENTRANCY |  | 
C74 | [ORQPT SPECIALTY PATIENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_SPECIALTY_PATIENTS) | READ | SPEC | 5 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C75 | [ORQPT TEAM PATIENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_TEAM_PATIENTS) | READ | TEAM, TMPFLAG | 17 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
C76 | [ORQPT WARD PATIENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_WARD_PATIENTS) | READ | WARD | 16 | FILE, LOCATION | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
C77 | [ORQPT WARDRMBED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_WARDRMBED) | READ | DFN | 3 | FILE | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C78 | __[ORQQAL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_DETAIL)__ | READ | DFN, ALLR, ID | 14 | JLV, P3ALLERGIES, RPCEMULATOR, UNSTRUCTURED READ |  | 
C79 | __[ORQQAL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST)__ | READ | ORPT | 7 | P2PSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, P3VITALS, RPCEMULATOR |  | 
C80 | [ORQQAL LIST REPORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQAL_LIST_REPORT) | READ | ORPT | 17 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C81 | [ORQQCN ADDCMT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_ADDCMT) | CHANGE | ORIEN, ORCOM, ORALRT, ORALTO, ORDATE | 7 | ALERT, FILE | [123](http://localhost:9000/schema/123) | 
C82 | [ORQQCN ADMIN COMPLETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_ADMIN_COMPLETE) | CHANGE | ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE | 1 | - |  | 
C83 | [ORQQCN ASSIGNABLE MED RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_ASSIGNABLE_MED_RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
C84 | [ORQQCN ATTACH MED RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_ATTACH_MED_RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP, ORALTO | 5 | FILE | [123](http://localhost:9000/schema/123) | 
C85 | [ORQQCN CANEDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_CANEDIT) | READ | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C86 | [ORQQCN DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_DETAIL) | READ | CONSULT | 5 | FILE, JLV, UNSTRUCTURED READ | [123](http://localhost:9000/schema/123) | 
C87 | [ORQQCN DISCONTINUE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_DISCONTINUE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C88 | [ORQQCN FIND CONSULT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_FIND_CONSULT) | READ | GMRCIEN | 9 | FILE | [123](http://localhost:9000/schema/123) | 
C89 | [ORQQCN FORWARD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_FORWARD) | CHANGE | GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM | 2 | FILE | [123](http://localhost:9000/schema/123), [123.5](http://localhost:9000/schema/123_5) | 
C90 | [ORQQCN GET CONSULT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_CONSULT) | READ | ORIEN, SHOWADD | 26 | FILE | [123](http://localhost:9000/schema/123), [200](http://localhost:9000/schema/200) | 
C91 | [ORQQCN GET MED RESULT DETAILS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_MED_RESULT_DETAILS) | READ | GMRCRES | 3 | FILE, UNSTRUCTURED READ | [691.5](http://localhost:9000/schema/691_5) | 
C92 | [ORQQCN GET ORDER NUMBER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_GET_ORDER_NUMBER) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [100](http://localhost:9000/schema/100) | 
C93 | [ORQQCN LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_LIST) | READ | ORPT, ORSDT, OREDT, ORSERV, ORSTATUS | 13 | FILE, QUERY | [123](http://localhost:9000/schema/123) | 
C94 | [ORQQCN LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_LOAD_FOR_EDIT) | READ | GMRCO | 6 | FILE | [123](http://localhost:9000/schema/123) | 
C95 | [ORQQCN MED RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_MED_RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123) | 
C96 | [ORQQCN RECEIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_RECEIVE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C97 | [ORQQCN REMOVABLE MED RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_REMOVABLE_MED_RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
C98 | [ORQQCN REMOVE MED RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_REMOVE_MED_RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP | 2 | FILE | [123](http://localhost:9000/schema/123) | 
C99 | [ORQQCN RESUBMIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_RESUBMIT) | CHANGE | GMRCO, OREDITED | 5 | FILE | [123](http://localhost:9000/schema/123) | 
C100 | [ORQQCN SET ACT MENUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SET_ACT_MENUS) | READ | GMRCO | 6 | CPRS CONFIG, FILE | [123](http://localhost:9000/schema/123) | 
C101 | [ORQQCN SHOW SF513](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SHOW_SF513) | CHANGE | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C102 | [ORQQCN SIGFIND](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SIGFIND) | READ | ORIEN, ORFL, ORCOM, ORALRT, ORALTO, ORDATE | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C103 | __[ORQQCN UNRESOLVED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_UNRESOLVED)__ | READ | ORDFN | 2 | IS-A, P3PCE, PARAMETER |  | ORWOR SHOW CONSULTS
C104 | [ORQQCN URGENCIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_URGENCIES) | READ | GMRCO | 13 | FILE | [101](http://localhost:9000/schema/101), [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C105 | [ORQQCN2 GET PREREQUISITE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_GET_PREREQUISITE) | READ | ORSVC, ORDFN | 4 | - |  | 
C106 | [ORQQCN2 SCHEDULE CONSULT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_SCHEDULE_CONSULT) | CHANGE | ORIEN, ORNP, ORDATE, ORALRT, ORALTO, ORCOM | 7 | FILE | [123](http://localhost:9000/schema/123) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C107 | [ORQQLR DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQLR_DETAIL) | READ | DFN, ORDER | 16 | FILE, UNSTRUCTURED READ | [100](http://localhost:9000/schema/100) | 
C108 | [ORQQLR SEARCH RANGE INPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQLR_SEARCH_RANGE_INPT) | READ | ORPT | 10 | FILE, PARAMETER | [42](http://localhost:9000/schema/42) | ORQQLR SEARCH RANGE INPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C109 | __[ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_ADD_SAVE)__ | CHANGE | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH | 12 | P3PROBLEMS, RPCEMULATOR, eHMP |  | 
C110 | [ORQQPL AUDIT HIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_AUDIT_HIST) | READ | GMPIFN | 21 | FILE | [125.8](http://localhost:9000/schema/125_8) | 
C111 | __[ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_CHECK_DUP)__ | READ | DFN, TERM, TEXT | 3 | P3PROBLEMS |  | 
C112 | __[ORQQPL DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DELETE)__ | CHANGE | GMPIFN, GMPROV, GMPVAMC, REASON | 11 | P3PROBLEMS, RPCEMULATOR, eHMP |  | 
C113 | __[ORQQPL DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_DETAIL)__ | READ | DFN, PROBIEN, ID | 53 | JLV, P3PROBLEMS, RPCEMULATOR, UNSTRUCTURED READ |  | 
C114 | __[ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_LOAD)__ | READ | DA | 6 | P3PROBLEMS |  | 
C115 | __[ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_EDIT_SAVE)__ | CHANGE | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH | 14 | P3PROBLEMS, RPCEMULATOR, eHMP |  | 
C116 | [ORQQPL INACTIVATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INACTIVATE) | CHANGE | GMPIFN | 16 | - |  | 
C117 | __[ORQQPL INIT PT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_PT)__ | READ | DFN | 15 | P3MEDOPORDERS, P3PROBLEMS |  | 
C118 | __[ORQQPL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_LIST)__ | READ | DFN, STATUS | 21 | P2PSEL, P3PROBLEMS, P3VITALS |  | 
C119 | __[ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROB_COMMENTS)__ | READ | PIFN | 8 | FILE, JLV, P3MEDOPORDERS, P3PROBLEMS | [9000011](http://localhost:9000/schema/9000011) | 
C120 | __[ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_PROBLEM_LIST)__ | READ | DFN, CONTEXT, ORIDT | 13 | P3MEDOPORDERS, P3PROBLEMS, RPCEMULATOR |  | 
C121 | __[ORQQPL REPLACE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_REPLACE)__ | CHANGE | DA | 10 | FILE, P3PROBLEMS, RPCEMULATOR | [9000011](http://localhost:9000/schema/9000011) | 
C122 | __[ORQQPL UPDATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_UPDATE)__ | CHANGE | UPDARRAY | 8 | P3PROBLEMS, RPCEMULATOR |  | 
C123 | [ORQQPL VERIFY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_VERIFY) | CHANGE | GMPIFN | 16 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C124 | __[ORQQPP LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPP_LIST)__ | READ | ORPT | 8 | P2PSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, P3VITALS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C125 | [ORQQPS DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPS_DETAIL) | READ | ORPT, ORMED | 53 | - |  | 
C126 | [ORQQPS LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPS_LIST) | READ | ORPT, ORSTRTDT, ORSTOPDT | 48 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C127 | [ORQQPX IMMUN LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_IMMUN_LIST) | READ | ORPT | 14 | FILE | [9000010.11](http://localhost:9000/schema/9000010_11) | 
C128 | [ORQQPX REMINDER DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_REMINDER_DETAIL) | UTILITY | ORPT, ORIEN | 7 | FILE, JLV, eHMP | [811.9](http://localhost:9000/schema/811_9) | 
C129 | [ORQQPX REMINDERS LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_REMINDERS_LIST) | UTILITY | ORPT | 25 | FILE, PARAMETER, eHMP | [42](http://localhost:9000/schema/42), [811.9](http://localhost:9000/schema/811_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C130 | [ORQQPXRM GEC DIALOG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_GEC_DIALOG) | UTILITY | IEN, DFN, VISIT, NOTEIEN | 1 | COMPUTATION, FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9), [801.5](http://localhost:9000/schema/801_5) | 
C131 | [ORQQPXRM GEC FINISHED?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_GEC_FINISHED%3F) | UTILITY | DFN, FIN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
C132 | [ORQQPXRM GEC STATUS PROMPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_GEC_STATUS_PROMPT) | UTILITY | DFN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
C133 | [ORQQPXRM MENTAL HEALTH RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_MENTAL_HEALTH_RESULTS) | READ | RESULT, ORES | 1 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
C134 | [ORQQPXRM MENTAL HEALTH SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_MENTAL_HEALTH_SAVE) | CHANGE | ORES | &nbsp; | - |  | 
C135 | [ORQQPXRM MHDLL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_MHDLL) | READ | DFN, INPUTS | 8 | - |  | 
C136 | [ORQQPXRM MHV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_MHV) | READ | DFN, NAME, ANS | 12 | - |  | 
C137 | [ORQQPXRM REMINDER DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_DETAIL) | UTILITY | ORPT, ORIEN | &nbsp; | FILE, UNSTRUCTURED READ | [811.9](http://localhost:9000/schema/811_9) | 
C138 | [ORQQPXRM REMINDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_DIALOG) | READ | ORREM, DFN | 5 | FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9) | 
C139 | [ORQQPXRM REMINDER EVALUATION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_EVALUATION) | UTILITY | ORPT, ORLIST | &nbsp; | - |  | 
C140 | [ORQQPXRM REMINDERS APPLICABLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDERS_APPLICABLE) | UTILITY | ORPT, ORLOC | &nbsp; | - |  | 
C141 | __[ORQQPXRM REMINDERS UNEVALUATED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDERS_UNEVALUATED)__ | UTILITY | ORPT, ORLOC | &nbsp; | P3PCE |  | 
C142 | [ORQQPXRM WOMEN HEALTH SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_WOMEN_HEALTH_SAVE) | CHANGE | ORRESULT | 1 | FILE | [790.1](http://localhost:9000/schema/790_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C143 | __[ORQQVI NOTEVIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_NOTEVIT)__ | READ | DFN, NOTEIEN | 4 | P3PCE |  | 
C144 | __[ORQQVI VITALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS)__ | READ | DFN, F1, F2 | 18 | P2PSEL, P3PCE, P3VITALS, RPCEMULATOR |  | 
C145 | [ORQQVI VITALS FOR DATE RANGE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI_VITALS_FOR_DATE_RANGE) | READ | DFN, ORSDT, OREDT | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C146 | [ORQQVI1 DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI1_DETAIL) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
C147 | [ORQQVI1 GRID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI1_GRID) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C148 | [ORQQVI2 VITALS VAL & STORE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVI2_VITALS_VAL_&_STORE) | CHANGE | &nbsp; | &nbsp; | EXTERNAL I/F | [120.5](http://localhost:9000/schema/120_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C149 | [ORQQVS DETAIL NOTES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVS_DETAIL_NOTES) | READ | ORPT, ORVIEN | 19 | QUERY |  | 
C150 | [ORQQVS DETAIL SUMMARY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVS_DETAIL_SUMMARY) | READ | ORPT, ORVIEN | 19 | - |  | 
C151 | [ORQQVS VISITS/APPTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQVS_VISITS_APPTS) | READ | PT, SDT, EDT, DUMMY | 19 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C152 | [ORQQXQA PATIENT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQXQA_PATIENT) | READ | ORPT | 27 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
C153 | [ORQQXQA USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQXQA_USER) | READ | &nbsp; | 33 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C154 | [ORRHCQ QRYITR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORRHCQ_QRYITR) | UTILITY | ORRITR | 3 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C155 | __[ORVAA VAA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORVAA_VAA)__ | READ | DFN | 14 | BUSINESS, P2PSEL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C156 | [ORWCS LIST OF CONSULT REPORTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCS_LIST_OF_CONSULT_REPORTS) | READ | DFN, SERV, BEGDT, ENDDT, STATUS | 16 | - |  | 
C157 | [ORWCS REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCS_REPORT_TEXT) | READ | DFN, ORID | 2 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C158 | [ORWCV DTLVST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_DTLVST) | READ | DFN, IEN, APPTINFO | 13 | - |  | 
C159 | [ORWCV LAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_LAB) | READ | DFN | 3 | - |  | 
C160 | __[ORWCV POLL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_POLL)__ | UTILITY | DFN, IP, HWND | 11 | P3PROBLEMS, P3VITALS, REENTRANCY |  | 
C161 | __[ORWCV START](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_START)__ | UTILITY | DFN, IP, HWND, LOC, NODO, NEWREM | 23 | FILE, P2PSEL, P3VITALS, PARAMETER, REENTRANCY | [101.24](http://localhost:9000/schema/101_24) | ORWCV1 COVERSHEET LIST, ORWOR COVER RETRIEVAL, ORWOR COVER RETRIEVAL NEW
C162 | __[ORWCV STOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_STOP)__ | UTILITY | DFN, IP, HWND | 5 | P2PSEL, P3NVAORDERS, P3VITALS, REENTRANCY |  | 
C163 | __[ORWCV VST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV_VST)__ | READ | DFN, BEG, END, SKIP | 5 | P2PSEL, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C164 | [ORWD FORMID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_FORMID) | READ | ORIFN | 4 | DFN TO K/META, FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [8989.52](http://localhost:9000/schema/8989_52) | 
C165 | [ORWD GET4EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_GET4EDIT) | READ | ORIFN | 14 | DFN TO K/META |  | 
C166 | [ORWD SIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_SIGN) | CHANGE | DFN, ORNP, LOC, ORWSIGN | 14 | XUSEC |  | 
C167 | [ORWD VALIDACT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD_VALIDACT) | READ | ORIFN, ACTION | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C168 | [ORWD1 COMLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD1_COMLOC) | UTILITY | ORDERS | 8 | FILE, LOCATION | [100](http://localhost:9000/schema/100) | 
C169 | [ORWD1 SIG4ANY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD1_SIG4ANY) | UTILITY | ORDERS | 4 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C170 | [ORWD1 SIG4ONE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWD1_SIG4ONE) | READ | ANORDER | 2 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C172 | __[ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_LOAD_FOR_EDIT)__ | READ | ORALIEN | 5 | P3ALLERGIES |  | 
C173 | __[ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SAVE_ALLERGY)__ | CHANGE | ORALIEN, ORDFN, OREDITED | 7 | BULLETIN, P3ALLERGIES, PROTOCOL, RPCEMULATOR, eHMP |  | 
C174 | [ORWDAL32 SEND BULLETIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SEND_BULLETIN) | UTILITY | ORDUZ, ORDFN, ORTEXT, ORCMTS | 4 | BULLETIN |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C175 | [ORWDBA1 GETORDX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_GETORDX) | READ | ORIEN | 16 | FILE | [100](http://localhost:9000/schema/100) | 
C176 | [ORWDBA1 ORPKGTYP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_ORPKGTYP) | UTILITY | ORLST | 5 | FILE, FMUTILITY, HARD CODED | [9.4](http://localhost:9000/schema/9_4) | 
C177 | [ORWDBA1 RCVORCI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_RCVORCI) | CHANGE | DIAG | 21 | - |  | 
C178 | __[ORWDBA1 SCLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_SCLST)__ | CHANGE | DFN, ORLST | 2 | FILE, P3MEDOPORDERS, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C179 | [ORWDBA2 GETDUDC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA2_GETDUDC) | UTILITY | ORCIEN, ORPTIEN | 21 | FILE, FMUTILITY | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C180 | [ORWDBA4 GETTFCI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA4_GETTFCI) | READ | ORIEN | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C181 | __[ORWDCN32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDCN32_DEF)__ | READ | WHY | 11 | IS-A, P3MEDOPORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C182 | [ORWDFH ADDLATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_ADDLATE) | CHANGE | ORVP, ORNP, ORL, MEAL, TIME, BAG | 15 | FILE | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
C183 | [ORWDFH CURISO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_CURISO) | READ | ORVP | 2 | - |  | 
C184 | [ORWDFH CURRENT MEALS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_CURRENT_MEALS) | READ | ORDFN, ORMEAL | 7 | - |  | 
C185 | [ORWDFH ISOLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_ISOLIST) | READ | &nbsp; | 3 | FILE | [119.4](http://localhost:9000/schema/119_4) | 
C186 | [ORWDFH PARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_PARAM) | READ | ORVP, ORLOC | 23 | FILE | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
C187 | [ORWDFH TXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDFH_TXT) | READ | DFN | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C188 | [ORWDPS1 DOWSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_DOWSCH) | READ | DFN, LOCIEN | 14 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C189 | [ORWDPS2 ADMIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_ADMIN) | READ | DFN, SCH, OI, LOC, ADMIN | 3 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C190 | __[ORWDPS2 CHKGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_CHKGRP)__ | READ | ORIFN | 17 | COMPUTED, FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
C191 | __[ORWDPS2 CHKPI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_CHKPI)__ | READ | ODIFN | 7 | FILE, P3MEDOPORDERS | [100](http://localhost:9000/schema/100) | 
C192 | __[ORWDPS2 MAXREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_MAXREF)__ | READ | PAT, DRG, SUP, OI, OUT | 8 | P3MEDOPORDERS |  | 
C193 | [ORWDPS2 QTY2DAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_QTY2DAY) | READ | QTY, UPD, SCH, DUR, PAT, DRG | 13 | COMPUTED |  | 
C194 | [ORWDPS2 REQST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_REQST) | READ | DFN, SCH, OI, LOC, TXT | 5 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C196 | [ORWDPS32 SCSTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_SCSTS) | READ | ORVP, ORDRUG | 4 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C197 | [ORWDPS33 COMPLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS33_COMPLOC) | READ | ORID, LOC | 2 | FILE, IS-A, LOCATION | [100](http://localhost:9000/schema/100) | 
C198 | [ORWDPS33 IVDOSFRM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS33_IVDOSFRM) | READ | ORDERIDS, ALLIV | 12 | FILE | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C199 | __[ORWDPS4 CPINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS4_CPINFO)__ | CHANGE | ORINFO | 9 | P3MEDOPORDERS, P3NVAORDERS |  | 
C200 | [ORWDPS4 CPLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS4_CPLST) | READ | PTIFN, ORIFNS | 12 | FILE | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | 
C201 | __[ORWDPS4 IPOD4OP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS4_IPOD4OP)__ | READ | ORID | 12 | FILE, IS-A, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [9.4](http://localhost:9000/schema/9_4) | 
C202 | [ORWDPS4 ISUDIV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS4_ISUDIV) | READ | ORIFN | 5 | FILE, IS-A | [100](http://localhost:9000/schema/100), [101.43](http://localhost:9000/schema/101_43) | 
C203 | [ORWDPS4 UPDTDG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS4_UPDTDG) | CHANGE | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C204 | [ORWDPS5 ISVTP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS5_ISVTP) | READ | ODIEN | 11 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.02](http://localhost:9000/schema/100_02) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C205 | [ORWDRA32 ISOLATN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_ISOLATN) | READ | DFN | 3 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C206 | [ORWDX CHANGE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_CHANGE) | CHANGE | ORCLST, DFN, ISIMO | 45 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C207 | [ORWDX DLGID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DLGID) | READ | ORIFN | 2 | - |  | 
C208 | [ORWDX DLGQUIK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DLGQUIK) | READ | QO | 1 | DFN TO K/META |  | 
C209 | [ORWDX FORMID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_FORMID) | READ | ORIFN | 4 | DFN TO K/META |  | 
C210 | __[ORWDX LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK)__ | UTILITY | DFN | 1 | LOCK, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS |  | 
C211 | __[ORWDX LOCK ORDER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_LOCK_ORDER)__ | UTILITY | ORIFN | 1 | LOCK, P3MEDOPORDERS, P3NVAORDERS, eHMP |  | 
C212 | __[ORWDX SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_SAVE)__ | CHANGE | ORVP, ORNP, ORL, DLG, ORDG, ORIT, ORIFN, ORDIALOG, ORDEA, ORAPPT, ORSRC, OREVTDF | 56 | FILE, P3MEDOPORDERS, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [9.4](http://localhost:9000/schema/9_4) | 
C213 | __[ORWDX SEND](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_SEND)__ | CHANGE | DFN, ORNP, ORL, ES, ORWREC | &nbsp; | P3MEDOPORDERS, P3NVAORDERS, eHMP |  | 
C214 | [ORWDX SENDED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_SENDED) | CHANGE | ORIENS, TS, LOC | 26 | FILE | [100](http://localhost:9000/schema/100) | 
C215 | [ORWDX UNLKOTH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLKOTH) | UTILITY | ORIFN | 2 | LOCK |  | 
C216 | __[ORWDX UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK)__ | UTILITY | DFN | 1 | LOCK, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS |  | 
C217 | __[ORWDX UNLOCK ORDER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_UNLOCK_ORDER)__ | UTILITY | ORIFN | 1 | LOCK, P3MEDOPORDERS, P3NVAORDERS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C218 | [ORWDX1 DCORIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX1_DCORIG) | CHANGE | ORIEN | 1 | - |  | 
C219 | __[ORWDX1 DCREN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX1_DCREN)__ | CHANGE | ORYARR | 18 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C220 | [ORWDX1 ORDMATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX1_ORDMATCH) | UTILITY | DFN, ORYARR | 12 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C221 | __[ORWDX1 PATWARD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX1_PATWARD)__ | READ | DFN | 5 | FILE, P3MEDOPORDERS | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
C222 | __[ORWDX1 STCHANGE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX1_STCHANGE)__ | UTILITY | DFN, ORYARR | 7 | IS-A, P3MEDOPORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C223 | [ORWDXA ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_ALERT) | CHANGE | ORID, ORDUZ | 3 | - |  | 
C224 | [ORWDXA COMPLETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_COMPLETE) | CHANGE | ORID, ESCODE | 3 | - |  | 
C225 | __[ORWDXA DC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_DC)__ | CHANGE | ORID, ORNP, ORL, REASON, DCORIG, ISNEWORD | 59 | FILE, P3MEDOPORDERS, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
C226 | [ORWDXA DCREQIEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_DCREQIEN) | READ | &nbsp; | 1 | FILE | [100.03](http://localhost:9000/schema/100_03) | 
C227 | [ORWDXA FLAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_FLAG) | CHANGE | ORIFN, OREASON, ORNP | 9 | FILE | [100](http://localhost:9000/schema/100) | 
C228 | [ORWDXA FLAGTXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_FLAGTXT) | READ | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [200](http://localhost:9000/schema/200) | 
C229 | [ORWDXA HOLD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_HOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
C230 | __[ORWDXA OFCPLX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_OFCPLX)__ | READ | ORID, PRTORDER | 20 | FILE, IS-A, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C231 | [ORWDXA UNFLAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_UNFLAG) | CHANGE | ORIFN, OREASON | 7 | FILE | [100](http://localhost:9000/schema/100) | 
C232 | [ORWDXA UNHOLD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_UNHOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
C233 | __[ORWDXA VALID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_VALID)__ | UTILITY | ORID, ACTION, ORNP, ORWNAT | 38 | FILE, IS-A, P3MEDOPORDERS, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
C234 | [ORWDXA VERIFY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_VERIFY) | CHANGE | ORID, ESCODE, ORVER | 7 | - |  | 
C235 | [ORWDXA WCGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_WCGET) | READ | ORID | 2 | FILE | [100](http://localhost:9000/schema/100) | 
C236 | [ORWDXA WCPUT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_WCPUT) | CHANGE | ORID, WCLST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C237 | [ORWDXC ACCEPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_ACCEPT) | UTILITY | DFN, FID, STRT, ORL, OIL, ORIFN, ORREN | 26 | PARAMETER, REENTRANCY |  | 
C238 | [ORWDXC DELAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_DELAY) | UTILITY | DFN, FID, STRT, ORL, OIL | 13 | PARAMETER, REENTRANCY |  | 
C239 | [ORWDXC DELORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_DELORD) | CHANGE | ORIFN | 11 | REENTRANCY |  | 
C240 | [ORWDXC DISPLAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_DISPLAY) | UTILITY | DFN, FID | 4 | PARAMETER, REENTRANCY |  | 
C241 | [ORWDXC SAVECHK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_SAVECHK) | UTILITY | ORVP, RSN, LST | 4 | REENTRANCY |  | 
C242 | __[ORWDXC SESSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_SESSION)__ | UTILITY | ORVP, ORLST | 12 | P3MEDOPORDERS, P3NVAORDERS, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C243 | [ORWDXM AUTOACK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_AUTOACK) | CHANGE | ORVP, ORNP, ORL, ORIT | 11 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C244 | __[ORWDXM1 BLDQRSP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM1_BLDQRSP)__ | UTILITY | ORIT, FLDS, ISIMO, ENCLOC | 151 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.5](http://localhost:9000/schema/100_5), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44), [9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C245 | __[ORWDXM2 CLRRCL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM2_CLRRCL)__ | UTILITY | &nbsp; | 2 | P3MEDOPORDERS, P3NVAORDERS, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C246 | [ORWDXR CANRN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_CANRN) | READ | ORID | 20 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C247 | __[ORWDXR GETPKG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_GETPKG)__ | READ | IFN | 5 | P3MEDOPORDERS |  | 
C248 | [ORWDXR GTORITM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_GTORITM) | READ | ORIFN | 2 | - |  | 
C249 | __[ORWDXR ISCPLX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_ISCPLX)__ | READ | ORID | 14 | COMPUTED, FILE, IS-A, P3MEDOPORDERS, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C250 | [ORWDXR ISNOW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_ISNOW) | READ | ORID | 7 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C251 | __[ORWDXR ISREL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_ISREL)__ | READ | ORIFN | 2 | IS-A, P3MEDOPORDERS |  | 
C252 | [ORWDXR ORCPLX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_ORCPLX) | READ | ORID, ORACT | 18 | FILE | [100](http://localhost:9000/schema/100) | 
C253 | [ORWDXR RENEW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_RENEW) | CHANGE | ORIFN, ORVP, ORNP, ORL, FLDS, CPLX, ORAPPT | 56 | FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
C254 | __[ORWDXR RNWFLDS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR_RNWFLDS)__ | READ | ORIFN | 32 | FILE, P3MEDOPORDERS | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C255 | __[ORWDXR01 CANCHG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_CANCHG)__ | READ | ORIFN, TXTOD | 16 | COMPUTED, FILE, IS-A, P3MEDOPORDERS | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
C256 | [ORWDXR01 OXDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_OXDATA) | READ | ORIEN | 32 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
C257 | [ORWDXR01 SAVCHG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_SAVCHG) | CHANGE | ORID, PARM1, PARM2, TXTOD | 16 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C258 | [ORWDXVB GETALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_GETALL) | READ | DFN, LOC | 35 | FILE, PARAMETER | [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43) | OR VBECS MODIFIERS, OR VBECS REASON FOR REQUEST, OR VBECS REASON SORT ALPHA
C259 | [ORWDXVB RAW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_RAW) | READ | DFN, ORX | 13 | - |  | 
C260 | [ORWDXVB RESULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB_RESULTS) | READ | DFN, ORX | 24 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C261 | [ORWGRPC ALLITEMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ALLITEMS) | READ | DFN | 2 | - |  | 
C262 | [ORWGRPC DATEITEM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_DATEITEM) | READ | OLDEST, NEWEST, FNUM, DFN | 2 | - |  | 
C263 | [ORWGRPC DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_DETAIL) | READ | DFN, DATE1, DATE2, VAL, COMP | 2 | - |  | 
C264 | [ORWGRPC DETAILS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_DETAILS) | READ | DFN, DATE1, DATE2, TYPE, COMP | 2 | UNSTRUCTURED READ |  | 
C265 | [ORWGRPC FASTDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_FASTDATA) | READ | DFN | 1 | - |  | 
C266 | [ORWGRPC FASTITEM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_FASTITEM) | READ | DFN | 1 | - |  | 
C267 | [ORWGRPC FASTLABS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_FASTLABS) | READ | DFN | 1 | - |  | 
C268 | [ORWGRPC FASTTASK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_FASTTASK) | UTILITY | DFN, OLDDFN | 1 | REENTRANCY, TASK |  | 
C269 | [ORWGRPC ITEMDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ITEMDATA) | READ | ITEM, START, DFN | 2 | - |  | 
C270 | [ORWGRPC ITEMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ITEMS) | READ | DFN, TYPE | 2 | - |  | 
C271 | [ORWGRPC LOOKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_LOOKUP) | READ | INFO, FROM, DIR | 1 | - |  | 
C272 | __[ORWGRPC TYPES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TYPES)__ | READ | DFN, SUB | 3 | HARD CODED, NON CLINICAL OPTION, P1BPSEL, PXRMINDX, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C273 | [ORWLR CUMULATIVE REPORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLR_CUMULATIVE_REPORT) | UTILITY | DFN, DAYS, ALPHA, OMEGA | 17 | - |  | 
C274 | [ORWLR CUMULATIVE SECTION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLR_CUMULATIVE_SECTION) | READ | DFN, RPTID, DTRANGE, SECTION | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C275 | [ORWLRR CHART](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_CHART) | READ | DFN, DATE1, DATE2, SPEC, TEST | 1 | - |  | 
C276 | [ORWLRR GRID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_GRID) | READ | DFN, DATE1, DATE2, SPEC, TESTS | 1 | - |  | 
C277 | [ORWLRR INTERIM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_INTERIM) | READ | DFN, DATE1, DATE2 | 4 | JLV, ORWLRR INTERIM |  | 
C278 | [ORWLRR INTERIMG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_INTERIMG) | READ | DFN, DATE1, DIR, FORMAT | 1 | - |  | 
C279 | [ORWLRR INTERIMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_INTERIMS) | READ | DFN, DATE1, DATE2, ORTESTS | 1 | - |  | 
C280 | [ORWLRR MICRO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_MICRO) | READ | DFN, DATE1, DATE2 | 4 | - |  | 
C281 | [ORWLRR NEWOLD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLRR_NEWOLD) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C282 | [ORWMC PATIENT PROCEDURES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWMC_PATIENT_PROCEDURES) | READ | DFN | 1 | - |  | 
C283 | [ORWMC PATIENT PROCEDURES1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWMC_PATIENT_PROCEDURES1) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C284 | [ORWNSS VALSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWNSS_VALSCH) | READ | ORID | 16 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C285 | [ORWOR ACTION TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_ACTION_TEXT) | READ | ORIFN | 6 | FILE | [100](http://localhost:9000/schema/100) | 
C286 | [ORWOR RESULT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_RESULT) | READ | DFN, ORID, ID | 5 | - |  | 
C287 | [ORWOR RESULT HISTORY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_RESULT_HISTORY) | READ | DFN, ORID, ID | 6 | - |  | 
C288 | [ORWOR SHEETS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_SHEETS) | READ | ORVP | 14 | FILE | [100](http://localhost:9000/schema/100), [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
C289 | __[ORWOR UNSIGN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_UNSIGN)__ | READ | ORVP, HAVE | 36 | FILE, P2PSEL, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [103](http://localhost:9000/schema/103), [9.4](http://localhost:9000/schema/9_4) | OR UNSIGNED ORDERS ON EXIT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C290 | [ORWOR1 CHKDIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_CHKDIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C291 | [ORWOR1 GETDSCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_GETDSCH) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C292 | [ORWOR1 GETDSIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_GETDSIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C293 | [ORWOR1 GETDTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_GETDTEXT) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C294 | [ORWOR1 SETDTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_SETDTEXT) | CHANGE | ORDER, ORDEA, ORSIGNER | 10 | - |  | 
C295 | [ORWOR1 SIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR1_SIG) | CHANGE | ID, X1, X2, X3, X4, ORX5, X6, X7 | 28 | FILE, REENTRANCY | [101.52](http://localhost:9000/schema/101_52) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C296 | [ORWORB AUTOUNFLAG ORDERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_AUTOUNFLAG_ORDERS) | CHANGE | DFN, XQAID | &nbsp; | PARAMETER |  | ORPF AUTO UNFLAG
C297 | __[ORWORB FASTUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_FASTUSER)__ | READ | &nbsp; | 59 | FILE, P2PSEL | [2](http://localhost:9000/schema/2) | 
C298 | [ORWORB GET TIU ALERT INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_GET_TIU_ALERT_INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C299 | [ORWORB GETDATA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_GETDATA) | READ | XQAID | 9 | FILE | [8992](http://localhost:9000/schema/8992) | 
C300 | __[ORWORB KILL EXPIR MED ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_KILL_EXPIR_MED_ALERT)__ | CHANGE | ORDFN | 10 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C301 | [ORWORB KILL EXPIR OI ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_KILL_EXPIR_OI_ALERT) | CHANGE | ORDFN, ORNIFN | 8 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
C302 | __[ORWORB KILL UNSIG ORDERS ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_KILL_UNSIG_ORDERS_ALERT)__ | CHANGE | ORVP | 2 | P3MEDOPORDERS, P3NVAORDERS |  | 
C303 | __[ORWORB KILL UNVER MEDS ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_KILL_UNVER_MEDS_ALERT)__ | CHANGE | ORDFN | 14 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C304 | __[ORWORB KILL UNVER ORDERS ALERT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_KILL_UNVER_ORDERS_ALERT)__ | CHANGE | ORDFN | 14 | FILE, P3MEDOPORDERS, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C305 | [ORWORB TEXT FOLLOWUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_TEXT_FOLLOWUP) | READ | DFN, NOTIF, XQADATA | 1 | - |  | 
C306 | [ORWORB UNSIG ORDERS FOLLOWUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_UNSIG_ORDERS_FOLLOWUP) | CHANGE | XQAID | 17 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C307 | __[ORWORR AGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_AGET)__ | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT, ORRECIP | 17 | FILE, P3MEDOPORDERS, P3NVAORDERS, QUERY | [2](http://localhost:9000/schema/2) | 
C308 | [ORWORR GET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_GET) | READ | DFN, FILTER, GROUPS | 10 | QUERY |  | 
C309 | __[ORWORR GET4LST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_GET4LST)__ | UTILITY | TXTVW, ORYD, IFNLST | 1 | FMUTILITY, P3MEDOPORDERS, P3NVAORDERS |  | 
C310 | __[ORWORR GETBYIFN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_GETBYIFN)__ | READ | IFN | 6 | FILE, P3MEDOPORDERS | [100](http://localhost:9000/schema/100) | 
C311 | [ORWORR GETTXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_GETTXT) | READ | IFN | 2 | - |  | 
C312 | [ORWORR RGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORR_RGET) | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT | 3 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C313 | __[ORWPCE ACTPROB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTPROB)__ | READ | DFN, ORDATE | 19 | P3PCE |  | 
C314 | [ORWPCE CPTREQD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_CPTREQD) | READ | IEN | 1 | IS-A |  | 
C315 | __[ORWPCE CXNOSHOW](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_CXNOSHOW)__ | READ | ORDOCIEN | 4 | IS-A, P3PCE |  | 
C316 | [ORWPCE DELETE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_DELETE) | CHANGE | VSTR, DFN | 12 | - |  | 
C317 | [ORWPCE GET VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_VISIT) | READ | IEN, DFN, VSITSTR | 3 | IEN-LOOKUP |  | 
C318 | __[ORWPCE HASVISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HASVISIT)__ | READ | IEN, DFN, ORLOC, ORDTE | 5 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C319 | __[ORWPCE NOTEVSTR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_NOTEVSTR)__ | READ | IEN | 4 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C320 | __[ORWPCE PCE4NOTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PCE4NOTE)__ | READ | IEN, DFN, VSITSTR | 172 | FILE, P3PCE | [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
C321 | __[ORWPCE SAVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SAVE)__ | CHANGE | PCELIST, NOTEIEN, ORLOC | 11 | P3PCE |  | 
C322 | __[ORWPCE SCDIS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCDIS)__ | READ | DFN | 9 | FILE, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, P3PCE | [2](http://localhost:9000/schema/2), [31](http://localhost:9000/schema/31), [391](http://localhost:9000/schema/391) | 
C323 | __[ORWPCE SCSEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SCSEL)__ | READ | DFN, ATM, LOC, VST | 3 | P3PCE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C324 | __[ORWPS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_ACTIVE)__ | READ | DFN, USER, VIEW, UPDATE | 54 | FILE, P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [44](http://localhost:9000/schema/44) | OR MEDS TAB SORT, ORCH CONTEXT MEDS
C325 | __[ORWPS COVER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_COVER)__ | READ | DFN, FILTER | 12 | P2PSEL, P3VITALS, QUERY |  | 
C326 | __[ORWPS DETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_DETAIL)__ | READ | DFN, ID | 5 | JLV, P3MEDOPORDERS |  | 
C327 | __[ORWPS MEDHIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_MEDHIST)__ | READ | DFN, ORIFN | 21 | FILE, P3MEDOPORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C328 | [ORWPS1 REFILL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS1_REFILL) | CHANGE | ORDERID, REFLOC, ORVP, ORNP, ORL | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C329 | [ORWPT ADMITLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ADMITLST) | READ | DFN | 10 | FILE, JLV | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
C330 | [ORWPT APPTLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_APPTLST) | READ | DFN | 9 | LOCATION |  | 
C331 | [ORWPT BYWARD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_BYWARD) | READ | WARD | 7 | FILE, LOCATION | [2](http://localhost:9000/schema/2) | 
C332 | __[ORWPT CWAD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CWAD)__ | READ | DFN | 1 | P3ALLERGIES, P3MEDOPORDERS, P3NVAORDERS, eHMP |  | 
C333 | __[ORWPT DIEDON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DIEDON)__ | READ | DFN | 1 | FILE, P2PSEL, RPCEMULATOR | [2](http://localhost:9000/schema/2) | 
C334 | [ORWPT DISCHARGE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_DISCHARGE) | READ | DFN, ADMITDT | 5 | - |  | 
C335 | __[ORWPT ENCTITL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ENCTITL)__ | READ | DFN, LOC, PROV | 3 | FILE, P2PSEL, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
C336 | [ORWPT FULLSSN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_FULLSSN) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C337 | [ORWPT FULLSSN RPL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_FULLSSN_RPL) | READ | ID | 13 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
C338 | __[ORWPT ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_ID_INFO)__ | READ | DFN | 3 | FILE, P2PSEL, RPCEMULATOR | [2](http://localhost:9000/schema/2) | 
C339 | __[ORWPT INPLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_INPLOC)__ | READ | DFN | 7 | FILE, P3MEDOPORDERS, P3NVAORDERS, RPCEMULATOR | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
C340 | [ORWPT LAST5](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LAST5) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C341 | [ORWPT LAST5 RPL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LAST5_RPL) | READ | ID | 10 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [200](http://localhost:9000/schema/200) | 
C342 | __[ORWPT LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_LIST_ALL)__ | READ | FROM, DIR | 8 | FILE, P2PSEL, RPCEMULATOR | [2](http://localhost:9000/schema/2) | 
C343 | [ORWPT PTINQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_PTINQ) | READ | DFN | 3 | JLV, RPCEMULATOR, UNSTRUCTURED READ |  | 
C344 | [ORWPT SELCHK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELCHK) | CHANGE | DFN | 1 | - |  | 
C345 | __[ORWPT SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SELECT)__ | CHANGE | DFN | 22 | BULLETIN, FILE, JLV, P2PSEL, P3MEDOPORDERS, P3NVAORDERS, REENTRANCY | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
C346 | __[ORWPT SHARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_SHARE)__ | UTILITY | IP, HWND, DFN | 3 | P2PSEL, REENTRANCY |  | 
C347 | __[ORWPT TOP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_TOP)__ | READ | &nbsp; | 3 | FILE, P2PSEL, REENTRANCY | [2](http://localhost:9000/schema/2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C348 | [ORWPT1 PCDETAIL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PCDETAIL) | READ | PATIENT | 50 | FILE | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [404.51](http://localhost:9000/schema/404_51) | 
C349 | __[ORWPT1 PRCARE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT1_PRCARE)__ | READ | PATIENT | 13 | FILE, JLV, P2PSEL, P3MEDOPORDERS, P3NVAORDERS, RPCEMULATOR | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C350 | [ORWPT16 ADMITLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_ADMITLST) | READ | DFN | 9 | FILE | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
C351 | [ORWPT16 APPTLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_APPTLST) | READ | DFN | 6 | - |  | 
C352 | [ORWPT16 DEMOG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_DEMOG) | READ | DFN | 4 | FILE | [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C353 | [ORWPT16 GETVSIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_GETVSIT) | READ | DFN, LOC, ADATE | 6 | - |  | 
C354 | [ORWPT16 ID INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_ID_INFO) | READ | DFN | 9 | FILE | [2](http://localhost:9000/schema/2) | 
C355 | [ORWPT16 LIST ALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_LIST_ALL) | READ | DIR, FROM | 16 | FILE | [2](http://localhost:9000/schema/2) | 
C356 | [ORWPT16 LOOKUP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_LOOKUP) | READ | FROM | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C357 | [ORWRA IMAGING EXAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRA_IMAGING_EXAMS) | READ | DFN | 1 | - |  | 
C358 | [ORWRA IMAGING EXAMS1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRA_IMAGING_EXAMS1) | READ | DFN | 1 | - |  | 
C359 | [ORWRA REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRA_REPORT_TEXT) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 8 | - |  | 
C360 | [ORWRA REPORT TEXT1](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRA_REPORT_TEXT1) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C361 | [ORWRP REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_REPORT_TEXT) | READ | DFN, RPTID, HSTYPE, DTRANGE, EXAMID, ALPHA, OMEGA | 35 | FILE, JLV, UNSTRUCTURED READ, eHMP | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C362 | [ORWRP1 LISTNUTR](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP1_LISTNUTR) | READ | DFN | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C363 | [ORWRP2 HS REPORT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP2_HS_REPORT_TEXT) | READ | ORCOMPS, ORDFN | 7 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C364 | [ORWRP4 HDR MODIFY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP4_HDR_MODIFY) | UTILITY | HANDLE, ID | 13 | FILE | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C365 | [ORWSR CASELIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_CASELIST) | READ | ORDFN | 8 | - |  | 
C366 | [ORWSR IS NON-OR PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_IS_NON-OR_PROCEDURE) | READ | ORCASE | 2 | IS-A |  | 
C367 | [ORWSR LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_LIST) | READ | ORDFN, ORBDT, OREDT, ORCTXT, ORMAX, ORFHIE | 21 | - |  | 
C368 | [ORWSR ONECASE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_ONECASE) | READ | ORTIUDA | 5 | - |  | 
C369 | [ORWSR RPTLIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_RPTLIST) | READ | ORDFN | 25 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C370 | __[ORWTIU CHKTXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_CHKTXT)__ | READ | ORTIUDA | 2 | P3PCE |  | 
C371 | [ORWTIU GET LISTBOX ITEM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_LISTBOX_ITEM) | READ | ORTIUDA | 2 | - |  | 
C372 | [ORWTIU GET SAVED CP FIELDS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_SAVED_CP_FIELDS) | READ | ORTIUDA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C373 | [ORWTPT ATEAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPT_ATEAMS) | READ | &nbsp; | 7 | FILE | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C374 | [ORWU2 COSIGNER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU2_COSIGNER) | READ | ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA | 10 | FILE | [200](http://localhost:9000/schema/200), [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C375 | [PXRM REMINDER DIALOG (TIU)](http://vistadataproject.info/artifacts/devdocs/VISTARPC/PXRM_REMINDER_DIALOG_(TIU)) | UTILITY | ORDLG, DFN | 3 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C376 | [TIU CREATE ADDENDUM RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_CREATE_ADDENDUM_RECORD) | CHANGE | TIUDA, TIUX, SUPPRESS | 1 | - |  | 
C377 | __[TIU CREATE RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_CREATE_RECORD)__ | CHANGE | DFN, TITLE, VDT, VLOC, VSIT, TIUX, VSTR, SUPPRESS, NOASF | 38 | FILE, P3PCE, eHMP | [44](http://localhost:9000/schema/44), [8925](http://localhost:9000/schema/8925) | 
C378 | [TIU DELETE RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_DELETE_RECORD) | CHANGE | TIUDA, TIURSN, OVRRIDE | 10 | FILE | [8925](http://localhost:9000/schema/8925) | 
C379 | [TIU DETAILED DISPLAY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_DETAILED_DISPLAY) | READ | TIUDA, REASSIGN | 4 | - |  | 
C380 | __[TIU DOCUMENTS BY CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_DOCUMENTS_BY_CONTEXT)__ | READ | CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND | 30 | FILE, P3PCE, QUERY | [8925](http://localhost:9000/schema/8925) | 
C381 | [TIU FIELD LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C382 | [TIU FIELD UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_FIELD_UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C383 | [TIU GET ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_ADDITIONAL_SIGNERS) | READ | TIUDA | 14 | FILE | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
C384 | [TIU GET ALERT INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_ALERT_INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C385 | __[TIU GET DOCUMENT PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DOCUMENT_PARAMETERS)__ | READ | TIUDA, TIUTYP | 4 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C386 | [TIU GET DOCUMENT STATUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DOCUMENT_STATUS) | READ | TIUIEN | 5 | FILE | [8925](http://localhost:9000/schema/8925), [8925.6](http://localhost:9000/schema/8925_6) | 
C387 | [TIU GET DOCUMENT TITLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DOCUMENT_TITLE) | READ | TIUDA | 1 | FILE | [8925](http://localhost:9000/schema/8925) | 
C388 | [TIU GET DOCUMENTS FOR REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_DOCUMENTS_FOR_REQUEST) | READ | OVP, SEQUENCE | 18 | FILE | [8925](http://localhost:9000/schema/8925) | 
C389 | [TIU GET LINKED PRF NOTES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_LINKED_PRF_NOTES) | READ | PTDFN, TIUTTL, REVERSE | 27 | FILE | [8925](http://localhost:9000/schema/8925) | 
C390 | [TIU GET PRF ACTIONS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PRF_ACTIONS) | READ | TIUTTL, DFN | 15 | - |  | 
C391 | __[TIU GET RECORD TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_RECORD_TEXT)__ | READ | TIUDA, ACTION | 21 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C392 | __[TIU GET REQUEST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_REQUEST)__ | READ | TIUDA | 10 | FILE, P3ALLERGIES, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C393 | __[TIU HAS AUTHOR SIGNED?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_HAS_AUTHOR_SIGNED%3F)__ | READ | TIUDA, TIUUSR | 5 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C394 | [TIU ID ATTACH ENTRY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ID_ATTACH_ENTRY) | CHANGE | TIUDA, TIUDAD | 5 | - |  | 
C395 | __[TIU ID CAN RECEIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ID_CAN_RECEIVE)__ | READ | TIUDA | 1 | IS-A, P3PCE |  | 
C396 | [TIU ID DETACH ENTRY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ID_DETACH_ENTRY) | CHANGE | TIUDA | 8 | FILE | [8925](http://localhost:9000/schema/8925) | 
C397 | [TIU JUSTIFY DELETE?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_JUSTIFY_DELETE%3F) | READ | TIUDA | 2 | FILE | [8925](http://localhost:9000/schema/8925) | 
C398 | [TIU LINK TO FLAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LINK_TO_FLAG) | CHANGE | TIUIEN, ASSGNDA, ACTIEN, DFN | 5 | FILE | [8925](http://localhost:9000/schema/8925) | 
C399 | [TIU LOAD RECORD FOR EDIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LOAD_RECORD_FOR_EDIT) | READ | TIUDA, DR | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C400 | __[TIU LOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LOCK_RECORD)__ | UTILITY | TIUDA | 2 | LOCK, P3PCE, eHMP |  | 
C401 | [TIU NOTES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_NOTES) | READ | DFN, EARLY, LATE, PERSON, SEQUENCE | 4 | QUERY |  | 
C402 | [TIU NOTES 16 BIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_NOTES_16_BIT) | READ | DFN, EARLY, LATE, ROOTFLAG | 2 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C403 | [TIU NOTES BY VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_NOTES_BY_VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
C404 | __[TIU ONE VISIT NOTE?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ONE_VISIT_NOTE%3F)__ | READ | DOCTYP, DFN, VISIT | 20 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925), [8925.95](http://localhost:9000/schema/8925_95), [9000010](http://localhost:9000/schema/9000010) | 
C405 | [TIU SET ADMINISTRATIVE CLOSURE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_SET_ADMINISTRATIVE_CLOSURE) | CHANGE | TIUDA, MODE, PERSON | 36 | FILE | [8925](http://localhost:9000/schema/8925) | 
C406 | __[TIU SET DOCUMENT TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_SET_DOCUMENT_TEXT)__ | UTILITY | TIUDA, TIUX, SUPPRESS | 28 | FILE, P3PCE, REENTRANCY | [8925](http://localhost:9000/schema/8925) | 
C407 | __[TIU SIGN RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_SIGN_RECORD)__ | CHANGE | TIUDA, TIUX | 1 | P3PCE, eHMP |  | 
C408 | [TIU SUMMARIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_SUMMARIES) | READ | DFN, EARLY, LATE | 4 | QUERY |  | 
C409 | [TIU SUMMARIES BY VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_SUMMARIES_BY_VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
C410 | [TIU TEMPLATE LOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C411 | [TIU TEMPLATE UNLOCK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C412 | __[TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UNLOCK_RECORD)__ | UTILITY | TIUDA | 2 | LOCK, P3ALLERGIES, P3PCE, eHMP |  | 
C413 | [TIU UPDATE ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UPDATE_ADDITIONAL_SIGNERS) | CHANGE | TIUDA, TIULIST | 18 | FILE | [8925.7](http://localhost:9000/schema/8925_7) | 
C414 | __[TIU UPDATE RECORD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_UPDATE_RECORD)__ | CHANGE | TIUDA, TIUX, SUPPRESS | 43 | FILE, P3PCE, eHMP | [8925](http://localhost:9000/schema/8925) | 
C415 | __[TIU WAS THIS SAVED?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_WAS_THIS_SAVED%3F)__ | CHANGE | TIUDA | 11 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C416 | __[TIU WHICH SIGNATURE ACTION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_WHICH_SIGNATURE_ACTION)__ | READ | TIUDA | 7 | FILE, P3PCE, eHMP | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C417 | [VAFCTFU CONVERT ICN TO DFN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/VAFCTFU_CONVERT_ICN_TO_DFN) | READ | ICN | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C418 | [YS GAF API](http://vistadataproject.info/artifacts/devdocs/VISTARPC/YS_GAF_API) | READ | YS | 7 | - |  | 




<small>Generated on 2017-08-24</small>