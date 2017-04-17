---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Clinical (416)

In Demo: __109 (26.2%)__
Emulated so far: __24 (22%)__


Category | Number | Seen in Demo
--- | --- | ---
CHANGE | 81 (19.5%) | __24 (29.6%)__
READ | 284 (68.3%) | __67 (23.6%)__
UTILITY | 51 (12.3%) | __18 (35.3%)__





These RPCs access at least 23 parameters and 53 files.

\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
C1 | __[DG CHK BS5 XREF ARRAY](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK BS5 XREF ARRAY)__ | READ | DFN | 27 | FILE, P2PSEL, XREF | [2](http://localhost:9000/schema/2) | 
C2 | [DG CHK BS5 XREF Y/N](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK BS5 XREF Y_N) | READ | DFN | 12 | FILE, IS-A, UNSTRUCTURED READ, XREF | [2](http://localhost:9000/schema/2) | 
C3 | __[DG CHK PAT/DIV MEANS TEST](http://vistadataproject.info/artifacts/vistaRPC documentation/DG CHK PAT_DIV MEANS TEST)__ | READ | DFN, DUZ2 | 13 | FILE, P2PSEL | [40.8](http://localhost:9000/schema/40_8) | 
C4 | [DG SENSITIVE RECORD BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/DG SENSITIVE RECORD BULLETIN) | CHANGE | DFN, DGOPT, ACTION | 7 | BULLETIN, FILE | [38.1](http://localhost:9000/schema/38_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C5 | [GMRC LIST CONSULT REQUESTS](http://vistadataproject.info/artifacts/vistaRPC documentation/GMRC LIST CONSULT REQUESTS) | READ | DFN | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C6 | __[GMV ADD VM](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV ADD VM)__ | CHANGE | GMVDATA | 3 | P3PCE, P3VITALS, RPCLOCKER, eHMP |  | 
C7 | [GMV ALLERGY](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV ALLERGY) | READ | DFN | 8 | - |  | 
C8 | __[GMV CLOSEST READING](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV CLOSEST READING)__ | READ | GMVDFN, GMVDT, GMVT, GMVFLAG | 41 | FILE, P3VITALS, eHMP | [120.5](http://localhost:9000/schema/120_5) | 
C9 | __[GMV EXTRACT REC](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV EXTRACT REC)__ | READ | GMRVDATA | 11 | FILE, P3VITALS | [120.5](http://localhost:9000/schema/120_5), [120.51](http://localhost:9000/schema/120_51) | 
C10 | __[GMV LATEST VM](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV LATEST VM)__ | READ | GMRDFN | 2 | P3PCE, P3VITALS |  | 
C11 | __[GMV MARK ERROR](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV MARK ERROR)__ | CHANGE | GMVDATA | 8 | FILE, P3VITALS, RPCLOCKER, eHMP | [120.5](http://localhost:9000/schema/120_5) | 
C12 | __[GMV V/M ALLDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/GMV V_M ALLDATA)__ | READ | GMVDATA | 12 | P3VITALS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C13 | __[OR GET COMBAT VET](http://vistadataproject.info/artifacts/vistaRPC documentation/OR GET COMBAT VET)__ | READ | DFN | 19 | P2PSEL, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C14 | [ORALWORD ALLWORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORALWORD ALLWORD) | READ | DFN, ORX, ORTYPE, PROV | 56 | FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C15 | [ORB DELETE ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB DELETE ALERT) | CHANGE | XQAID, ORKILL | 8 | ALERT, FILE | [8992.1](http://localhost:9000/schema/8992_1) | 
C16 | [ORB FOLLOW-UP ARRAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP ARRAY) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
C17 | [ORB FOLLOW-UP STRING](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP STRING) | READ | ORXQAID | 2 | DFN TO K/META, FILE | [8992](http://localhost:9000/schema/8992), [8992.1](http://localhost:9000/schema/8992_1) | 
C18 | [ORB FOLLOW-UP TYPE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FOLLOW-UP TYPE) | READ | ORXQAID | 5 | DFN TO K/META, FILE | [100.9](http://localhost:9000/schema/100_9) | 
C19 | [ORB FORWARD ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB FORWARD ALERT) | CHANGE | ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT | 4 | ALERT |  | 
C20 | [ORB RENEW ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORB RENEW ALERT) | CHANGE | XQAID | 4 | ALERT, FILE | [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C21 | __[ORCDLR2 CHECK ALL LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCDLR2 CHECK ALL LC TO WC)__ | READ | ORL, ORDERS | 16 | FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C22 | [ORCDLR2 CHECK ONE LC TO WC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCDLR2 CHECK ONE LC TO WC) | READ | ORL, ORIFN, DATE, TYPE, SCH, DUR | 17 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C23 | [ORCHECK DELMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK DELMONO) | UTILITY | &nbsp; | 1 | REENTRANCY |  | 
C24 | [ORCHECK GETMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETMONO) | READ | ORMONO | 5 | REENTRANCY |  | 
C25 | [ORCHECK GETMONOL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETMONOL) | READ | &nbsp; | 4 | REENTRANCY |  | 
C26 | [ORCHECK GETXTRA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK GETXTRA) | READ | ORGL, ORRULE | 3 | REENTRANCY |  | 
C27 | [ORCHECK ISMONO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCHECK ISMONO) | READ | &nbsp; | 3 | IS-A, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C28 | __[ORCNOTE GET TOTAL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORCNOTE GET TOTAL)__ | READ | DFN | 6 | FILE, P2PSEL | [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C29 | [ORDEA HASHINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA HASHINFO) | READ | ORDFN, ORPROV | 18 | - |  | 
C30 | [ORDEA ORDHINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA ORDHINFO) | READ | ORIFN, HASH, OHINFO | 2 | - |  | 
C31 | [ORDEA PINLKCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PINLKCHK) | UTILITY | &nbsp; | 5 | LOCK |  | 
C32 | [ORDEA PINLKSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PINLKSET) | UTILITY | &nbsp; | 3 | LOCK |  | 
C33 | [ORDEA PNDHLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA PNDHLD) | READ | ORID | 3 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C34 | __[ORDEA SIGINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORDEA SIGINFO)__ | READ | ORDFN, ORPROV | 18 | P3ALLERGIES, P3NVAORDERS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C35 | [ORECS01 VSITID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORECS01 VSITID) | READ | VSTSTR | 5 | FILE, IEN-LOOKUP | [9000010](http://localhost:9000/schema/9000010) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C36 | [OREVNTX LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX LIST) | READ | DFN | 12 | FILE | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5), [100.6](http://localhost:9000/schema/100_6) | 
C37 | __[OREVNTX PAT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX PAT)__ | READ | DFN | 8 | FILE, P3NVAORDERS | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C38 | [OREVNTX1 CHGEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CHGEVT) | CHANGE | NEWEVT, ORIDS | 4 | - |  | 
C39 | [OREVNTX1 COMP](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 COMP) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C40 | [OREVNTX1 CURSPE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CURSPE) | READ | PTIFN | 3 | - |  | 
C41 | [OREVNTX1 DELPTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DELPTEVT) | CHANGE | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C42 | [OREVNTX1 DIV](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DIV) | READ | PTEVT | 2 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
C43 | [OREVNTX1 DONE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DONE) | CHANGE | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C44 | [OREVNTX1 EMPTY](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EMPTY) | READ | PTEVT | 2 | FILE, IS-A | [100.2](http://localhost:9000/schema/100_2) | 
C45 | [OREVNTX1 EVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EVT) | READ | PTEVT | 2 | FILE | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
C46 | [OREVNTX1 EXISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 EXISTS) | READ | DFN, EVT | 4 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C47 | __[OREVNTX1 GETSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GETSTS)__ | READ | ORDID | 3 | FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C48 | __[OREVNTX1 GTEVT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GTEVT)__ | READ | PTEVT | 14 | FILE, P3NVAORDERS | [100.2](http://localhost:9000/schema/100_2), [100.5](http://localhost:9000/schema/100_5) | 
C49 | [OREVNTX1 HAVEPRT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 HAVEPRT) | READ | PTEVT | 3 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
C50 | [OREVNTX1 ISDCOD](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISDCOD) | READ | ORIFN | 13 | FILE, IS-A, PARAMETER | [100](http://localhost:9000/schema/100) | OREVNT EXCLUDE DGRP
C51 | [OREVNTX1 ISHDORD](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISHDORD) | READ | ORID | 11 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
C52 | [OREVNTX1 ISPASS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISPASS) | READ | PTEVTID, EVTTYPE | 4 | FILE, IS-A | [100.5](http://localhost:9000/schema/100_5) | 
C53 | [OREVNTX1 LOC](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 LOC) | READ | PTEVT | 3 | FILE, LOCATION | [100.2](http://localhost:9000/schema/100_2) | 
C54 | [OREVNTX1 MATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 MATCH) | READ | DFN, EVT | 7 | FILE | [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
C55 | [OREVNTX1 NAME](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 NAME) | READ | PTEVT | 2 | FILE | [100.5](http://localhost:9000/schema/100_5), [100.2](http://localhost:9000/schema/100_2) | 
C56 | __[OREVNTX1 ODPTEVID](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ODPTEVID)__ | READ | ORID | 2 | FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2) | 
C57 | [OREVNTX1 PUTEVNT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PUTEVNT) | CHANGE | DFN, EVT, ORIFN | 1 | FILE | [100.2](http://localhost:9000/schema/100_2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C58 | __[ORIMO IMOLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO IMOLOC)__ | READ | ORLOC, ORDFN | 14 | FILE, P3NVAORDERS | [44](http://localhost:9000/schema/44) | 
C59 | [ORIMO IMOOD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO IMOOD) | READ | ORDERID | 8 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C60 | [ORK TRIGGER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORK TRIGGER) | READ | ORKDFN, ORKA, ORKMODE, OROIL, ORDODSG | 96 | FILE, LOGIC, PARAMETER | [100.98](http://localhost:9000/schema/100_98), [42](http://localhost:9000/schema/42) | ORK DEBUG ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C61 | __[ORPRF CLEAR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF CLEAR)__ | UTILITY | &nbsp; | 2 | P2PSEL, P3ALLERGIES, P3NVAORDERS, REENTRANCY |  | 
C62 | [ORPRF GETFLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF GETFLG) | READ | PTDFN, FLAGID | 5 | REENTRANCY |  | 
C63 | __[ORPRF HASFLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF HASFLG)__ | READ | PTDFN | 11 | P2PSEL, REENTRANCY |  | 
C64 | [ORPRF TRIGGER POPUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORPRF TRIGGER POPUP) | READ | PTDFN | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C65 | __[ORQOR DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQOR DETAIL)__ | READ | ORID, DFN | 6 | JLV, P3NVAORDERS, UNSTRUCTURED READ, eHMP |  | 
C66 | [ORQOR LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQOR LIST) | READ | PATIENT, GROUP, FLAG, ORSDT, OREDT, ORXREF, GETKID | 15 | FILE | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C67 | [ORQPT ATTENDING/PRIMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT ATTENDING_PRIMARY) | READ | DFN | 5 | - |  | 
C68 | [ORQPT CLINIC PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT CLINIC PATIENTS) | READ | CLIN, ORBDATE, OREDATE, MAXAPPTS, APPTBGN, APPTEND | 42 | PARAMETER, QUERY |  | ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE
C69 | [ORQPT DEFAULT PATIENT LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT DEFAULT PATIENT LIST) | READ | &nbsp; | 30 | FILE, PARAMETER | [100.24](http://localhost:9000/schema/100_24) | *VARIABLE*, ORLP DEFAULT CLINIC START DATE, ORLP DEFAULT CLINIC STOP DATE, ORLP DEFAULT LIST SOURCE, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT TEAM, ORLP DEFAULT WARD
C70 | [ORQPT MAKE RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT MAKE RPL) | UTILITY | ORTL | 12 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
C71 | [ORQPT PATIENT TEAM PROVIDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PATIENT TEAM PROVIDERS) | READ | PT | 8 | FILE, QUERY, XREF | [100.21](http://localhost:9000/schema/100_21) | 
C72 | [ORQPT PROVIDER PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT PROVIDER PATIENTS) | READ | PROV | 5 | FILE, QUERY, XREF | [2](http://localhost:9000/schema/2) | 
C73 | [ORQPT READ RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT READ RPL) | READ | ORJ, ORFROM, ORDIR | 17 | REENTRANCY |  | 
C74 | [ORQPT SPECIALTY PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT SPECIALTY PATIENTS) | READ | SPEC | 5 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C75 | [ORQPT TEAM PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT TEAM PATIENTS) | READ | TEAM, TMPFLAG | 17 | FILE, REENTRANCY | [100.21](http://localhost:9000/schema/100_21) | 
C76 | [ORQPT WARD PATIENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARD PATIENTS) | READ | WARD | 16 | FILE, LOCATION | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
C77 | [ORQPT WARDRMBED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT WARDRMBED) | READ | DFN | 3 | FILE | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C78 | __[ORQQAL DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL DETAIL)__ | READ | DFN, ALLR, ID | 14 | JLV, P3ALLERGIES, RPCLOCKER, UNSTRUCTURED READ |  | 
C79 | __[ORQQAL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL LIST)__ | READ | ORPT | 7 | P2PSEL, P3ALLERGIES, P3NVAORDERS, P3VITALS, RPCLOCKER |  | 
C80 | [ORQQAL LIST REPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQAL LIST REPORT) | READ | ORPT | 17 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C81 | [ORQQCN ADDCMT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ADDCMT) | CHANGE | ORIEN, ORCOM, ORALRT, ORALTO, ORDATE | 7 | ALERT, FILE | [123](http://localhost:9000/schema/123) | 
C82 | [ORQQCN ADMIN COMPLETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ADMIN COMPLETE) | CHANGE | ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE | 1 | - |  | 
C83 | [ORQQCN ASSIGNABLE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ASSIGNABLE MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
C84 | [ORQQCN ATTACH MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN ATTACH MED RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP, ORALTO | 5 | FILE | [123](http://localhost:9000/schema/123) | 
C85 | [ORQQCN CANEDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN CANEDIT) | READ | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C86 | [ORQQCN DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DETAIL) | READ | CONSULT | 5 | FILE, JLV, UNSTRUCTURED READ | [123](http://localhost:9000/schema/123) | 
C87 | [ORQQCN DISCONTINUE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN DISCONTINUE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C88 | [ORQQCN FIND CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN FIND CONSULT) | READ | GMRCIEN | 9 | FILE | [123](http://localhost:9000/schema/123) | 
C89 | [ORQQCN FORWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN FORWARD) | CHANGE | GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM | 2 | FILE | [123](http://localhost:9000/schema/123), [123.5](http://localhost:9000/schema/123_5) | 
C90 | [ORQQCN GET CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET CONSULT) | READ | ORIEN, SHOWADD | 26 | FILE | [123](http://localhost:9000/schema/123), [200](http://localhost:9000/schema/200) | 
C91 | [ORQQCN GET MED RESULT DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET MED RESULT DETAILS) | READ | GMRCRES | 3 | FILE, UNSTRUCTURED READ | [691.5](http://localhost:9000/schema/691_5) | 
C92 | [ORQQCN GET ORDER NUMBER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET ORDER NUMBER) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [100](http://localhost:9000/schema/100) | 
C93 | [ORQQCN LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN LIST) | READ | ORPT, ORSDT, OREDT, ORSERV, ORSTATUS | 13 | FILE, QUERY | [123](http://localhost:9000/schema/123) | 
C94 | [ORQQCN LOAD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN LOAD FOR EDIT) | READ | GMRCO | 6 | FILE | [123](http://localhost:9000/schema/123) | 
C95 | [ORQQCN MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123) | 
C96 | [ORQQCN RECEIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN RECEIVE) | CHANGE | GMRCO, GMRCORNP, GMRCAD, ORCOM | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C97 | [ORQQCN REMOVABLE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN REMOVABLE MED RESULTS) | READ | GMRCO | 2 | FILE | [123](http://localhost:9000/schema/123), [697.2](http://localhost:9000/schema/697_2) | 
C98 | [ORQQCN REMOVE MED RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN REMOVE MED RESULTS) | CHANGE | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP | 2 | FILE | [123](http://localhost:9000/schema/123) | 
C99 | [ORQQCN RESUBMIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN RESUBMIT) | CHANGE | GMRCO, OREDITED | 5 | FILE | [123](http://localhost:9000/schema/123) | 
C100 | [ORQQCN SET ACT MENUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SET ACT MENUS) | READ | GMRCO | 6 | CPRS CONFIG, FILE | [123](http://localhost:9000/schema/123) | 
C101 | [ORQQCN SHOW SF513](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SHOW SF513) | CHANGE | GMRCO | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C102 | [ORQQCN SIGFIND](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SIGFIND) | READ | ORIEN, ORFL, ORCOM, ORALRT, ORALTO, ORDATE | 1 | FILE | [123](http://localhost:9000/schema/123) | 
C103 | __[ORQQCN UNRESOLVED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN UNRESOLVED)__ | READ | ORDFN | 2 | IS-A, P3PCE, PARAMETER |  | ORWOR SHOW CONSULTS
C104 | [ORQQCN URGENCIES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN URGENCIES) | READ | GMRCO | 13 | FILE | [101](http://localhost:9000/schema/101), [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C105 | [ORQQCN2 GET PREREQUISITE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 GET PREREQUISITE) | READ | ORSVC, ORDFN | 4 | - |  | 
C106 | [ORQQCN2 SCHEDULE CONSULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN2 SCHEDULE CONSULT) | CHANGE | ORIEN, ORNP, ORDATE, ORALRT, ORALTO, ORCOM | 7 | FILE | [123](http://localhost:9000/schema/123) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C107 | [ORQQLR DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR DETAIL) | READ | DFN, ORDER | 16 | FILE, UNSTRUCTURED READ | [100](http://localhost:9000/schema/100) | 
C108 | [ORQQLR SEARCH RANGE INPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQLR SEARCH RANGE INPT) | READ | ORPT | 10 | FILE, PARAMETER | [42](http://localhost:9000/schema/42) | ORQQLR SEARCH RANGE INPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C109 | __[ORQQPL ADD SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL ADD SAVE)__ | CHANGE | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH | 12 | P3PROBLEMS, RPCLOCKER, eHMP |  | 
C110 | [ORQQPL AUDIT HIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL AUDIT HIST) | READ | GMPIFN | 21 | FILE | [125.8](http://localhost:9000/schema/125_8) | 
C111 | __[ORQQPL CHECK DUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL CHECK DUP)__ | READ | DFN, TERM, TEXT | 3 | P3PROBLEMS |  | 
C112 | __[ORQQPL DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL DELETE)__ | CHANGE | GMPIFN, GMPROV, GMPVAMC, REASON | 11 | P3PROBLEMS, RPCLOCKER, eHMP |  | 
C113 | __[ORQQPL DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL DETAIL)__ | READ | DFN, PROBIEN, ID | 53 | JLV, P3PROBLEMS, RPCLOCKER, UNSTRUCTURED READ |  | 
C114 | __[ORQQPL EDIT LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL EDIT LOAD)__ | READ | DA | 6 | P3PROBLEMS |  | 
C115 | __[ORQQPL EDIT SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL EDIT SAVE)__ | CHANGE | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH | 14 | P3PROBLEMS, RPCLOCKER, eHMP |  | 
C116 | [ORQQPL INACTIVATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INACTIVATE) | CHANGE | GMPIFN | 16 | - |  | 
C117 | __[ORQQPL INIT PT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL INIT PT)__ | READ | DFN | 15 | P3PROBLEMS |  | 
C118 | __[ORQQPL LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL LIST)__ | READ | DFN, STATUS | 21 | P2PSEL, P3PROBLEMS, P3VITALS |  | 
C119 | __[ORQQPL PROB COMMENTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROB COMMENTS)__ | READ | PIFN | 8 | FILE, JLV, P3PROBLEMS | [9000011](http://localhost:9000/schema/9000011) | 
C120 | __[ORQQPL PROBLEM LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL PROBLEM LIST)__ | READ | DFN, CONTEXT, ORIDT | 13 | P3PROBLEMS, RPCLOCKER |  | 
C121 | __[ORQQPL REPLACE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL REPLACE)__ | CHANGE | DA | 10 | FILE, P3PROBLEMS, RPCLOCKER | [9000011](http://localhost:9000/schema/9000011) | 
C122 | __[ORQQPL UPDATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL UPDATE)__ | CHANGE | UPDARRAY | 8 | P3PROBLEMS, RPCLOCKER |  | 
C123 | [ORQQPL VERIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPL VERIFY) | CHANGE | GMPIFN | 16 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C124 | __[ORQQPP LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPP LIST)__ | READ | ORPT | 8 | P2PSEL, P3ALLERGIES, P3NVAORDERS, P3VITALS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C125 | [ORQQPS DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPS DETAIL) | READ | ORPT, ORMED | 53 | - |  | 
C126 | [ORQQPS LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPS LIST) | READ | ORPT, ORSTRTDT, ORSTOPDT | 48 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C127 | [ORQQPX IMMUN LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX IMMUN LIST) | READ | ORPT | 14 | FILE | [9000010.11](http://localhost:9000/schema/9000010_11) | 
C128 | [ORQQPX REMINDER DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REMINDER DETAIL) | UTILITY | ORPT, ORIEN | 7 | FILE, JLV, eHMP | [811.9](http://localhost:9000/schema/811_9) | 
C129 | [ORQQPX REMINDERS LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPX REMINDERS LIST) | UTILITY | ORPT | 25 | FILE, PARAMETER, eHMP | [42](http://localhost:9000/schema/42), [811.9](http://localhost:9000/schema/811_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C130 | [ORQQPXRM GEC DIALOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC DIALOG) | UTILITY | IEN, DFN, VISIT, NOTEIEN | 1 | COMPUTATION, FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9), [801.5](http://localhost:9000/schema/801_5) | 
C131 | [ORQQPXRM GEC FINISHED?](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC FINISHED%3F) | UTILITY | DFN, FIN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
C132 | [ORQQPXRM GEC STATUS PROMPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM GEC STATUS PROMPT) | UTILITY | DFN | 1 | FILE | [801.5](http://localhost:9000/schema/801_5) | 
C133 | [ORQQPXRM MENTAL HEALTH RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH RESULTS) | READ | RESULT, ORES | 1 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
C134 | [ORQQPXRM MENTAL HEALTH SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MENTAL HEALTH SAVE) | CHANGE | ORES | &nbsp; | - |  | 
C135 | [ORQQPXRM MHDLL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MHDLL) | READ | DFN, INPUTS | 8 | - |  | 
C136 | [ORQQPXRM MHV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM MHV) | READ | DFN, NAME, ANS | 12 | - |  | 
C137 | [ORQQPXRM REMINDER DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER DETAIL) | UTILITY | ORPT, ORIEN | &nbsp; | FILE, UNSTRUCTURED READ | [811.9](http://localhost:9000/schema/811_9) | 
C138 | [ORQQPXRM REMINDER DIALOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER DIALOG) | READ | ORREM, DFN | 5 | FILE | [801.41](http://localhost:9000/schema/801_41), [811.9](http://localhost:9000/schema/811_9) | 
C139 | [ORQQPXRM REMINDER EVALUATION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDER EVALUATION) | UTILITY | ORPT, ORLIST | &nbsp; | - |  | 
C140 | [ORQQPXRM REMINDERS APPLICABLE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDERS APPLICABLE) | UTILITY | ORPT, ORLOC | &nbsp; | - |  | 
C141 | __[ORQQPXRM REMINDERS UNEVALUATED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM REMINDERS UNEVALUATED)__ | UTILITY | ORPT, ORLOC | &nbsp; | P3PCE |  | 
C142 | [ORQQPXRM WOMEN HEALTH SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQPXRM WOMEN HEALTH SAVE) | CHANGE | ORRESULT | 1 | FILE | [790.1](http://localhost:9000/schema/790_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C143 | __[ORQQVI NOTEVIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI NOTEVIT)__ | READ | DFN, NOTEIEN | 4 | P3PCE |  | 
C144 | __[ORQQVI VITALS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI VITALS)__ | READ | DFN, F1, F2 | 18 | P2PSEL, P3PCE, P3VITALS, RPCLOCKER |  | 
C145 | [ORQQVI VITALS FOR DATE RANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI VITALS FOR DATE RANGE) | READ | DFN, ORSDT, OREDT | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C146 | [ORQQVI1 DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI1 DETAIL) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
C147 | [ORQQVI1 GRID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI1 GRID) | READ | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C148 | [ORQQVI2 VITALS VAL & STORE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVI2 VITALS VAL & STORE) | CHANGE | &nbsp; | &nbsp; | EXTERNAL I/F | [120.5](http://localhost:9000/schema/120_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C149 | [ORQQVS DETAIL NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS DETAIL NOTES) | READ | ORPT, ORVIEN | 19 | QUERY |  | 
C150 | [ORQQVS DETAIL SUMMARY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS DETAIL SUMMARY) | READ | ORPT, ORVIEN | 19 | - |  | 
C151 | [ORQQVS VISITS/APPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQVS VISITS_APPTS) | READ | PT, SDT, EDT, DUMMY | 19 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C152 | [ORQQXQA PATIENT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXQA PATIENT) | READ | ORPT | 27 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
C153 | [ORQQXQA USER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQXQA USER) | READ | &nbsp; | 33 | FILE | [100.9](http://localhost:9000/schema/100_9), [8992](http://localhost:9000/schema/8992) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C154 | [ORRHCQ QRYITR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORRHCQ QRYITR) | UTILITY | ORRITR | 3 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C155 | __[ORVAA VAA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORVAA VAA)__ | READ | DFN | 14 | BUSINESS, P2PSEL |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C156 | [ORWCS LIST OF CONSULT REPORTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCS LIST OF CONSULT REPORTS) | READ | DFN, SERV, BEGDT, ENDDT, STATUS | 16 | - |  | 
C157 | [ORWCS REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCS REPORT TEXT) | READ | DFN, ORID | 2 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C158 | [ORWCV DTLVST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV DTLVST) | READ | DFN, IEN, APPTINFO | 13 | - |  | 
C159 | [ORWCV LAB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV LAB) | READ | DFN | 3 | - |  | 
C160 | __[ORWCV POLL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV POLL)__ | UTILITY | DFN, IP, HWND | 11 | P3PROBLEMS, P3VITALS, REENTRANCY |  | 
C161 | __[ORWCV START](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV START)__ | UTILITY | DFN, IP, HWND, LOC, NODO, NEWREM | 23 | FILE, P2PSEL, P3VITALS, PARAMETER, REENTRANCY | [101.24](http://localhost:9000/schema/101_24) | ORWCV1 COVERSHEET LIST, ORWOR COVER RETRIEVAL, ORWOR COVER RETRIEVAL NEW
C162 | __[ORWCV STOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV STOP)__ | UTILITY | DFN, IP, HWND | 5 | P2PSEL, P3NVAORDERS, P3VITALS, REENTRANCY |  | 
C163 | __[ORWCV VST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV VST)__ | READ | DFN, BEG, END, SKIP | 5 | P2PSEL, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C164 | [ORWD FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD FORMID) | READ | ORIFN | 4 | DFN TO K/META, FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [8989.52](http://localhost:9000/schema/8989_52) | 
C165 | [ORWD GET4EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD GET4EDIT) | READ | ORIFN | 14 | DFN TO K/META |  | 
C166 | [ORWD SIGN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SIGN) | CHANGE | DFN, ORNP, LOC, ORWSIGN | 14 | XUSEC |  | 
C167 | [ORWD VALIDACT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD VALIDACT) | READ | ORIFN, ACTION | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C168 | [ORWD1 COMLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 COMLOC) | UTILITY | ORDERS | 8 | FILE, LOCATION | [100](http://localhost:9000/schema/100) | 
C169 | [ORWD1 SIG4ANY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 SIG4ANY) | UTILITY | ORDERS | 4 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C170 | [ORWD1 SIG4ONE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD1 SIG4ONE) | READ | ANORDER | 2 | FILE, IS-A | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C172 | __[ORWDAL32 LOAD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 LOAD FOR EDIT)__ | READ | ORALIEN | 5 | P3ALLERGIES |  | 
C173 | __[ORWDAL32 SAVE ALLERGY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SAVE ALLERGY)__ | CHANGE | ORALIEN, ORDFN, OREDITED | 7 | BULLETIN, P3ALLERGIES, PROTOCOL, RPCLOCKER, eHMP |  | 
C174 | [ORWDAL32 SEND BULLETIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDAL32 SEND BULLETIN) | UTILITY | ORDUZ, ORDFN, ORTEXT, ORCMTS | 4 | BULLETIN |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C175 | [ORWDBA1 GETORDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 GETORDX) | READ | ORIEN | 16 | FILE | [100](http://localhost:9000/schema/100) | 
C176 | [ORWDBA1 ORPKGTYP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 ORPKGTYP) | UTILITY | ORLST | 5 | FILE, FMUTILITY, HARD CODED | [9.4](http://localhost:9000/schema/9_4) | 
C177 | [ORWDBA1 RCVORCI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 RCVORCI) | CHANGE | DIAG | 21 | - |  | 
C178 | __[ORWDBA1 SCLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA1 SCLST)__ | CHANGE | DFN, ORLST | 2 | FILE, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C179 | [ORWDBA2 GETDUDC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA2 GETDUDC) | UTILITY | ORCIEN, ORPTIEN | 21 | FILE, FMUTILITY | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C180 | [ORWDBA4 GETTFCI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDBA4 GETTFCI) | READ | ORIEN | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C181 | [ORWDCN32 DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 DEF) | READ | WHY | 11 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C182 | [ORWDFH ADDLATE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ADDLATE) | CHANGE | ORVP, ORNP, ORL, MEAL, TIME, BAG | 15 | FILE | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
C183 | [ORWDFH CURISO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH CURISO) | READ | ORVP | 2 | - |  | 
C184 | [ORWDFH CURRENT MEALS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH CURRENT MEALS) | READ | ORDFN, ORMEAL | 7 | - |  | 
C185 | [ORWDFH ISOLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ISOLIST) | READ | &nbsp; | 3 | FILE | [119.4](http://localhost:9000/schema/119_4) | 
C186 | [ORWDFH PARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH PARAM) | READ | ORVP, ORLOC | 23 | FILE | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
C187 | [ORWDFH TXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH TXT) | READ | DFN | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C188 | [ORWDPS1 DOWSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DOWSCH) | READ | DFN, LOCIEN | 14 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C189 | [ORWDPS2 ADMIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 ADMIN) | READ | DFN, SCH, OI, LOC, ADMIN | 3 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C190 | __[ORWDPS2 CHKGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 CHKGRP)__ | READ | ORIFN | 17 | COMPUTED, FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
C191 | [ORWDPS2 CHKPI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 CHKPI) | READ | ODIFN | 7 | FILE | [100](http://localhost:9000/schema/100) | 
C192 | [ORWDPS2 MAXREF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 MAXREF) | READ | PAT, DRG, SUP, OI, OUT | 8 | - |  | 
C193 | [ORWDPS2 QTY2DAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 QTY2DAY) | READ | QTY, UPD, SCH, DUR, PAT, DRG | 13 | COMPUTED |  | 
C194 | [ORWDPS2 REQST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 REQST) | READ | DFN, SCH, OI, LOC, TXT | 5 | FILE, LOCATION | [101.43](http://localhost:9000/schema/101_43), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C196 | [ORWDPS32 SCSTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 SCSTS) | READ | ORVP, ORDRUG | 4 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C197 | [ORWDPS33 COMPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 COMPLOC) | READ | ORID, LOC | 2 | FILE, IS-A, LOCATION | [100](http://localhost:9000/schema/100) | 
C198 | [ORWDPS33 IVDOSFRM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 IVDOSFRM) | READ | ORDERIDS, ALLIV | 12 | FILE | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C199 | __[ORWDPS4 CPINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 CPINFO)__ | CHANGE | ORINFO | 9 | P3NVAORDERS |  | 
C200 | [ORWDPS4 CPLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 CPLST) | READ | PTIFN, ORIFNS | 12 | FILE | [100](http://localhost:9000/schema/100), [9.4](http://localhost:9000/schema/9_4) | 
C201 | __[ORWDPS4 IPOD4OP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 IPOD4OP)__ | READ | ORID | 12 | FILE, IS-A, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [9.4](http://localhost:9000/schema/9_4) | 
C202 | [ORWDPS4 ISUDIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 ISUDIV) | READ | ORIFN | 5 | FILE, IS-A | [100](http://localhost:9000/schema/100), [101.43](http://localhost:9000/schema/101_43) | 
C203 | [ORWDPS4 UPDTDG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS4 UPDTDG) | CHANGE | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C204 | [ORWDPS5 ISVTP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS5 ISVTP) | READ | ODIEN | 11 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.02](http://localhost:9000/schema/100_02) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C205 | [ORWDRA32 ISOLATN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 ISOLATN) | READ | DFN | 3 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C206 | [ORWDX CHANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX CHANGE) | CHANGE | ORCLST, DFN, ISIMO | 45 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C207 | [ORWDX DLGID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGID) | READ | ORIFN | 2 | - |  | 
C208 | [ORWDX DLGQUIK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DLGQUIK) | READ | QO | 1 | DFN TO K/META |  | 
C209 | [ORWDX FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX FORMID) | READ | ORIFN | 4 | DFN TO K/META |  | 
C210 | __[ORWDX LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOCK)__ | UTILITY | DFN | 1 | LOCK, P3ALLERGIES, P3NVAORDERS |  | 
C211 | __[ORWDX LOCK ORDER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX LOCK ORDER)__ | UTILITY | ORIFN | 1 | LOCK, P3NVAORDERS, eHMP |  | 
C212 | __[ORWDX SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SAVE)__ | CHANGE | ORVP, ORNP, ORL, DLG, ORDG, ORIT, ORIFN, ORDIALOG, ORDEA, ORAPPT, ORSRC, OREVTDF | 56 | FILE, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43), [2](http://localhost:9000/schema/2), [9.4](http://localhost:9000/schema/9_4) | 
C213 | __[ORWDX SEND](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SEND)__ | CHANGE | DFN, ORNP, ORL, ES, ORWREC | &nbsp; | P3NVAORDERS, eHMP |  | 
C214 | [ORWDX SENDED](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX SENDED) | CHANGE | ORIENS, TS, LOC | 26 | FILE | [100](http://localhost:9000/schema/100) | 
C215 | [ORWDX UNLKOTH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLKOTH) | UTILITY | ORIFN | 2 | LOCK |  | 
C216 | __[ORWDX UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLOCK)__ | UTILITY | DFN | 1 | LOCK, P3ALLERGIES, P3NVAORDERS |  | 
C217 | __[ORWDX UNLOCK ORDER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX UNLOCK ORDER)__ | UTILITY | ORIFN | 1 | LOCK, P3NVAORDERS, eHMP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C218 | [ORWDX1 DCORIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 DCORIG) | CHANGE | ORIEN | 1 | - |  | 
C219 | __[ORWDX1 DCREN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 DCREN)__ | CHANGE | ORYARR | 18 | FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C220 | [ORWDX1 ORDMATCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 ORDMATCH) | UTILITY | DFN, ORYARR | 12 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C221 | [ORWDX1 PATWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 PATWARD) | READ | DFN | 5 | FILE | [2](http://localhost:9000/schema/2), [42](http://localhost:9000/schema/42) | 
C222 | [ORWDX1 STCHANGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX1 STCHANGE) | UTILITY | DFN, ORYARR | 7 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C223 | [ORWDXA ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA ALERT) | CHANGE | ORID, ORDUZ | 3 | - |  | 
C224 | [ORWDXA COMPLETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA COMPLETE) | CHANGE | ORID, ESCODE | 3 | - |  | 
C225 | __[ORWDXA DC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA DC)__ | CHANGE | ORID, ORNP, ORL, REASON, DCORIG, ISNEWORD | 59 | FILE, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [100.2](http://localhost:9000/schema/100_2), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
C226 | [ORWDXA DCREQIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA DCREQIEN) | READ | &nbsp; | 1 | FILE | [100.03](http://localhost:9000/schema/100_03) | 
C227 | [ORWDXA FLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA FLAG) | CHANGE | ORIFN, OREASON, ORNP | 9 | FILE | [100](http://localhost:9000/schema/100) | 
C228 | [ORWDXA FLAGTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA FLAGTXT) | READ | ORID | 4 | FILE | [100](http://localhost:9000/schema/100), [200](http://localhost:9000/schema/200) | 
C229 | [ORWDXA HOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA HOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
C230 | __[ORWDXA OFCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA OFCPLX)__ | READ | ORID, PRTORDER | 20 | FILE, IS-A, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C231 | [ORWDXA UNFLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA UNFLAG) | CHANGE | ORIFN, OREASON | 7 | FILE | [100](http://localhost:9000/schema/100) | 
C232 | [ORWDXA UNHOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA UNHOLD) | CHANGE | ORID, ORNP | 3 | - |  | 
C233 | __[ORWDXA VALID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA VALID)__ | UTILITY | ORID, ACTION, ORNP, ORWNAT | 38 | FILE, IS-A, P3NVAORDERS, eHMP | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41) | 
C234 | [ORWDXA VERIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA VERIFY) | CHANGE | ORID, ESCODE, ORVER | 7 | - |  | 
C235 | [ORWDXA WCGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA WCGET) | READ | ORID | 2 | FILE | [100](http://localhost:9000/schema/100) | 
C236 | [ORWDXA WCPUT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA WCPUT) | CHANGE | ORID, WCLST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C237 | [ORWDXC ACCEPT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC ACCEPT) | UTILITY | DFN, FID, STRT, ORL, OIL, ORIFN, ORREN | 26 | PARAMETER, REENTRANCY |  | 
C238 | [ORWDXC DELAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DELAY) | UTILITY | DFN, FID, STRT, ORL, OIL | 13 | PARAMETER, REENTRANCY |  | 
C239 | [ORWDXC DELORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DELORD) | CHANGE | ORIFN | 11 | REENTRANCY |  | 
C240 | [ORWDXC DISPLAY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC DISPLAY) | UTILITY | DFN, FID | 4 | PARAMETER, REENTRANCY |  | 
C241 | [ORWDXC SAVECHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC SAVECHK) | UTILITY | ORVP, RSN, LST | 4 | REENTRANCY |  | 
C242 | __[ORWDXC SESSION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC SESSION)__ | UTILITY | ORVP, ORLST | 12 | P3NVAORDERS, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C243 | [ORWDXM AUTOACK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM AUTOACK) | CHANGE | ORVP, ORNP, ORL, ORIT | 11 | FILE | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C244 | __[ORWDXM1 BLDQRSP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM1 BLDQRSP)__ | UTILITY | ORIT, FLDS, ISIMO, ENCLOC | 151 | FILE, P3NVAORDERS | [100](http://localhost:9000/schema/100), [100.5](http://localhost:9000/schema/100_5), [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41), [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44), [9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C245 | __[ORWDXM2 CLRRCL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM2 CLRRCL)__ | UTILITY | &nbsp; | 2 | P3NVAORDERS, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C246 | [ORWDXR CANRN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR CANRN) | READ | ORID | 20 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01) | 
C247 | [ORWDXR GETPKG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR GETPKG) | READ | IFN | 5 | - |  | 
C248 | [ORWDXR GTORITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR GTORITM) | READ | ORIFN | 2 | - |  | 
C249 | __[ORWDXR ISCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISCPLX)__ | READ | ORID | 14 | COMPUTED, FILE, IS-A, P3NVAORDERS | [100](http://localhost:9000/schema/100) | 
C250 | [ORWDXR ISNOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISNOW) | READ | ORID | 7 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100) | 
C251 | [ORWDXR ISREL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ISREL) | READ | ORIFN | 2 | IS-A |  | 
C252 | [ORWDXR ORCPLX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR ORCPLX) | READ | ORID, ORACT | 18 | FILE | [100](http://localhost:9000/schema/100) | 
C253 | [ORWDXR RENEW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR RENEW) | CHANGE | ORIFN, ORVP, ORNP, ORL, FLDS, CPLX, ORAPPT | 56 | FILE | [100](http://localhost:9000/schema/100), [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
C254 | [ORWDXR RNWFLDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR RNWFLDS) | READ | ORIFN | 32 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C255 | [ORWDXR01 CANCHG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 CANCHG) | READ | ORIFN, TXTOD | 16 | COMPUTED, FILE, IS-A | [100](http://localhost:9000/schema/100), [100.01](http://localhost:9000/schema/100_01), [100.98](http://localhost:9000/schema/100_98) | 
C256 | [ORWDXR01 OXDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 OXDATA) | READ | ORIEN | 32 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
C257 | [ORWDXR01 SAVCHG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 SAVCHG) | CHANGE | ORID, PARM1, PARM2, TXTOD | 16 | FILE | [100](http://localhost:9000/schema/100) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C258 | [ORWDXVB GETALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB GETALL) | READ | DFN, LOC | 35 | FILE, PARAMETER | [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43) | OR VBECS MODIFIERS, OR VBECS REASON FOR REQUEST, OR VBECS REASON SORT ALPHA
C259 | [ORWDXVB RAW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB RAW) | READ | DFN, ORX | 13 | - |  | 
C260 | [ORWDXVB RESULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB RESULTS) | READ | DFN, ORX | 24 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C261 | [ORWGRPC ALLITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ALLITEMS) | READ | DFN | 2 | - |  | 
C262 | [ORWGRPC DATEITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DATEITEM) | READ | OLDEST, NEWEST, FNUM, DFN | 2 | - |  | 
C263 | [ORWGRPC DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DETAIL) | READ | DFN, DATE1, DATE2, VAL, COMP | 2 | - |  | 
C264 | [ORWGRPC DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC DETAILS) | READ | DFN, DATE1, DATE2, TYPE, COMP | 2 | UNSTRUCTURED READ |  | 
C265 | [ORWGRPC FASTDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTDATA) | READ | DFN | 1 | - |  | 
C266 | [ORWGRPC FASTITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTITEM) | READ | DFN | 1 | - |  | 
C267 | [ORWGRPC FASTLABS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTLABS) | READ | DFN | 1 | - |  | 
C268 | [ORWGRPC FASTTASK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC FASTTASK) | UTILITY | DFN, OLDDFN | 1 | REENTRANCY, TASK |  | 
C269 | [ORWGRPC ITEMDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ITEMDATA) | READ | ITEM, START, DFN | 2 | - |  | 
C270 | [ORWGRPC ITEMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC ITEMS) | READ | DFN, TYPE | 2 | - |  | 
C271 | [ORWGRPC LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC LOOKUP) | READ | INFO, FROM, DIR | 1 | - |  | 
C272 | __[ORWGRPC TYPES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC TYPES)__ | READ | DFN, SUB | 3 | HARD CODED, NON CLINICAL OPTION, P1BPSEL, PXRMINDX, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C273 | [ORWLR CUMULATIVE REPORT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR CUMULATIVE REPORT) | UTILITY | DFN, DAYS, ALPHA, OMEGA | 17 | - |  | 
C274 | [ORWLR CUMULATIVE SECTION](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLR CUMULATIVE SECTION) | READ | DFN, RPTID, DTRANGE, SECTION | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C275 | [ORWLRR CHART](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR CHART) | READ | DFN, DATE1, DATE2, SPEC, TEST | 1 | - |  | 
C276 | [ORWLRR GRID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR GRID) | READ | DFN, DATE1, DATE2, SPEC, TESTS | 1 | - |  | 
C277 | [ORWLRR INTERIM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIM) | READ | DFN, DATE1, DATE2 | 4 | JLV, ORWLRR INTERIM |  | 
C278 | [ORWLRR INTERIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIMG) | READ | DFN, DATE1, DIR, FORMAT | 1 | - |  | 
C279 | [ORWLRR INTERIMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR INTERIMS) | READ | DFN, DATE1, DATE2, ORTESTS | 1 | - |  | 
C280 | [ORWLRR MICRO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR MICRO) | READ | DFN, DATE1, DATE2 | 4 | - |  | 
C281 | [ORWLRR NEWOLD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWLRR NEWOLD) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C282 | [ORWMC PATIENT PROCEDURES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWMC PATIENT PROCEDURES) | READ | DFN | 1 | - |  | 
C283 | [ORWMC PATIENT PROCEDURES1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWMC PATIENT PROCEDURES1) | READ | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C284 | [ORWNSS VALSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS VALSCH) | READ | ORID | 16 | FILE, IS-A | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [44](http://localhost:9000/schema/44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C285 | [ORWOR ACTION TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR ACTION TEXT) | READ | ORIFN | 6 | FILE | [100](http://localhost:9000/schema/100) | 
C286 | [ORWOR RESULT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR RESULT) | READ | DFN, ORID, ID | 5 | - |  | 
C287 | [ORWOR RESULT HISTORY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR RESULT HISTORY) | READ | DFN, ORID, ID | 6 | - |  | 
C288 | [ORWOR SHEETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR SHEETS) | READ | ORVP | 14 | FILE | [100](http://localhost:9000/schema/100), [2](http://localhost:9000/schema/2), [45.7](http://localhost:9000/schema/45_7) | 
C289 | __[ORWOR UNSIGN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR UNSIGN)__ | READ | ORVP, HAVE | 36 | FILE, P2PSEL, P3ALLERGIES, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98), [103](http://localhost:9000/schema/103), [9.4](http://localhost:9000/schema/9_4) | OR UNSIGNED ORDERS ON EXIT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C290 | [ORWOR1 CHKDIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 CHKDIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C291 | [ORWOR1 GETDSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDSCH) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C292 | [ORWOR1 GETDSIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDSIG) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C293 | [ORWOR1 GETDTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 GETDTEXT) | READ | ORDER | 3 | FILE | [100](http://localhost:9000/schema/100) | 
C294 | [ORWOR1 SETDTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 SETDTEXT) | CHANGE | ORDER, ORDEA, ORSIGNER | 10 | - |  | 
C295 | [ORWOR1 SIG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR1 SIG) | CHANGE | ID, X1, X2, X3, X4, ORX5, X6, X7 | 28 | FILE, REENTRANCY | [101.52](http://localhost:9000/schema/101_52) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C296 | [ORWORB AUTOUNFLAG ORDERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB AUTOUNFLAG ORDERS) | CHANGE | DFN, XQAID | &nbsp; | PARAMETER |  | ORPF AUTO UNFLAG
C297 | __[ORWORB FASTUSER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB FASTUSER)__ | READ | &nbsp; | 59 | FILE, P2PSEL | [2](http://localhost:9000/schema/2) | 
C298 | [ORWORB GET TIU ALERT INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GET TIU ALERT INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C299 | [ORWORB GETDATA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB GETDATA) | READ | XQAID | 9 | FILE | [8992](http://localhost:9000/schema/8992) | 
C300 | __[ORWORB KILL EXPIR MED ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL EXPIR MED ALERT)__ | CHANGE | ORDFN | 10 | FILE, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C301 | [ORWORB KILL EXPIR OI ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL EXPIR OI ALERT) | CHANGE | ORDFN, ORNIFN | 8 | FILE | [100.9](http://localhost:9000/schema/100_9) | 
C302 | __[ORWORB KILL UNSIG ORDERS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNSIG ORDERS ALERT)__ | CHANGE | ORVP | 2 | P3NVAORDERS |  | 
C303 | __[ORWORB KILL UNVER MEDS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNVER MEDS ALERT)__ | CHANGE | ORDFN | 14 | FILE, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C304 | __[ORWORB KILL UNVER ORDERS ALERT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB KILL UNVER ORDERS ALERT)__ | CHANGE | ORDFN | 14 | FILE, P3NVAORDERS | [100.9](http://localhost:9000/schema/100_9) | 
C305 | [ORWORB TEXT FOLLOWUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB TEXT FOLLOWUP) | READ | DFN, NOTIF, XQADATA | 1 | - |  | 
C306 | [ORWORB UNSIG ORDERS FOLLOWUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORB UNSIG ORDERS FOLLOWUP) | CHANGE | XQAID | 17 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C307 | __[ORWORR AGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR AGET)__ | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT, ORRECIP | 17 | FILE, P3NVAORDERS, QUERY | [2](http://localhost:9000/schema/2) | 
C308 | [ORWORR GET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GET) | READ | DFN, FILTER, GROUPS | 10 | QUERY |  | 
C309 | __[ORWORR GET4LST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GET4LST)__ | UTILITY | TXTVW, ORYD, IFNLST | 1 | FMUTILITY, P3NVAORDERS |  | 
C310 | [ORWORR GETBYIFN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GETBYIFN) | READ | IFN | 6 | FILE | [100](http://localhost:9000/schema/100) | 
C311 | [ORWORR GETTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR GETTXT) | READ | IFN | 2 | - |  | 
C312 | [ORWORR RGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORR RGET) | READ | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT | 3 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C313 | __[ORWPCE ACTPROB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE ACTPROB)__ | READ | DFN, ORDATE | 19 | P3PCE |  | 
C314 | [ORWPCE CPTREQD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CPTREQD) | READ | IEN | 1 | IS-A |  | 
C315 | __[ORWPCE CXNOSHOW](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE CXNOSHOW)__ | READ | ORDOCIEN | 4 | IS-A, P3PCE |  | 
C316 | [ORWPCE DELETE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE DELETE) | CHANGE | VSTR, DFN | 12 | - |  | 
C317 | [ORWPCE GET VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE GET VISIT) | READ | IEN, DFN, VSITSTR | 3 | IEN-LOOKUP |  | 
C318 | __[ORWPCE HASVISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE HASVISIT)__ | READ | IEN, DFN, ORLOC, ORDTE | 5 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C319 | __[ORWPCE NOTEVSTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE NOTEVSTR)__ | READ | IEN | 4 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C320 | __[ORWPCE PCE4NOTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE PCE4NOTE)__ | READ | IEN, DFN, VSITSTR | 172 | FILE, P3PCE | [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
C321 | __[ORWPCE SAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SAVE)__ | CHANGE | PCELIST, NOTEIEN, ORLOC | 11 | P3PCE |  | 
C322 | __[ORWPCE SCDIS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SCDIS)__ | READ | DFN | 9 | FILE, P3ALLERGIES, P3NVAORDERS, P3PCE | [2](http://localhost:9000/schema/2), [31](http://localhost:9000/schema/31), [391](http://localhost:9000/schema/391) | 
C323 | __[ORWPCE SCSEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPCE SCSEL)__ | READ | DFN, ATM, LOC, VST | 3 | P3PCE |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C324 | __[ORWPS ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS ACTIVE)__ | READ | DFN, USER, VIEW, UPDATE | 54 | FILE, P3ALLERGIES, P3NVAORDERS, PARAMETER | [100](http://localhost:9000/schema/100), [44](http://localhost:9000/schema/44) | OR MEDS TAB SORT, ORCH CONTEXT MEDS
C325 | __[ORWPS COVER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS COVER)__ | READ | DFN, FILTER | 12 | P2PSEL, P3VITALS, QUERY |  | 
C326 | [ORWPS DETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS DETAIL) | READ | DFN, ID | 5 | JLV |  | 
C327 | [ORWPS MEDHIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS MEDHIST) | READ | DFN, ORIFN | 21 | FILE | [100](http://localhost:9000/schema/100), [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C328 | [ORWPS1 REFILL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 REFILL) | CHANGE | ORDERID, REFLOC, ORVP, ORNP, ORL | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C329 | [ORWPT ADMITLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ADMITLST) | READ | DFN | 10 | FILE, JLV | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
C330 | [ORWPT APPTLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT APPTLST) | READ | DFN | 9 | LOCATION |  | 
C331 | [ORWPT BYWARD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT BYWARD) | READ | WARD | 7 | FILE, LOCATION | [2](http://localhost:9000/schema/2) | 
C332 | __[ORWPT CWAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT CWAD)__ | READ | DFN | 1 | P3ALLERGIES, P3NVAORDERS, eHMP |  | 
C333 | __[ORWPT DIEDON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DIEDON)__ | READ | DFN | 1 | FILE, P2PSEL, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
C334 | [ORWPT DISCHARGE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT DISCHARGE) | READ | DFN, ADMITDT | 5 | - |  | 
C335 | __[ORWPT ENCTITL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ENCTITL)__ | READ | DFN, LOC, PROV | 3 | FILE, P2PSEL, P3NVAORDERS, P3PCE, P3PROBLEMS, P3VITALS | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [44](http://localhost:9000/schema/44) | 
C336 | [ORWPT FULLSSN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT FULLSSN) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C337 | [ORWPT FULLSSN RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT FULLSSN RPL) | READ | ID | 13 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
C338 | __[ORWPT ID INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT ID INFO)__ | READ | DFN | 3 | FILE, P2PSEL, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
C339 | __[ORWPT INPLOC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT INPLOC)__ | READ | DFN | 7 | FILE, P3NVAORDERS, RPCLOCKER | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
C340 | [ORWPT LAST5](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LAST5) | READ | ID | 4 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C341 | [ORWPT LAST5 RPL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LAST5 RPL) | READ | ID | 10 | FILE, QUERY | [100.21](http://localhost:9000/schema/100_21), [200](http://localhost:9000/schema/200) | 
C342 | __[ORWPT LIST ALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT LIST ALL)__ | READ | FROM, DIR | 8 | FILE, P2PSEL, RPCLOCKER | [2](http://localhost:9000/schema/2) | 
C343 | [ORWPT PTINQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT PTINQ) | READ | DFN | 3 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
C344 | [ORWPT SELCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SELCHK) | CHANGE | DFN | 1 | - |  | 
C345 | __[ORWPT SELECT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SELECT)__ | CHANGE | DFN | 22 | BULLETIN, FILE, JLV, P2PSEL, P3NVAORDERS, REENTRANCY | [2](http://localhost:9000/schema/2), [405](http://localhost:9000/schema/405), [42](http://localhost:9000/schema/42) | 
C346 | __[ORWPT SHARE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT SHARE)__ | UTILITY | IP, HWND, DFN | 3 | P2PSEL, REENTRANCY |  | 
C347 | __[ORWPT TOP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT TOP)__ | READ | &nbsp; | 3 | FILE, P2PSEL, REENTRANCY | [2](http://localhost:9000/schema/2) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C348 | [ORWPT1 PCDETAIL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT1 PCDETAIL) | READ | PATIENT | 50 | FILE | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200), [404.51](http://localhost:9000/schema/404_51) | 
C349 | __[ORWPT1 PRCARE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT1 PRCARE)__ | READ | PATIENT | 13 | FILE, JLV, P2PSEL, P3NVAORDERS, RPCLOCKER | [2](http://localhost:9000/schema/2), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C350 | [ORWPT16 ADMITLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 ADMITLST) | READ | DFN | 9 | FILE | [405](http://localhost:9000/schema/405), [405.1](http://localhost:9000/schema/405_1), [42](http://localhost:9000/schema/42) | 
C351 | [ORWPT16 APPTLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 APPTLST) | READ | DFN | 6 | - |  | 
C352 | [ORWPT16 DEMOG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 DEMOG) | READ | DFN | 4 | FILE | [2](http://localhost:9000/schema/2), [44](http://localhost:9000/schema/44) | 
C353 | [ORWPT16 GETVSIT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 GETVSIT) | READ | DFN, LOC, ADATE | 6 | - |  | 
C354 | [ORWPT16 ID INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 ID INFO) | READ | DFN | 9 | FILE | [2](http://localhost:9000/schema/2) | 
C355 | [ORWPT16 LIST ALL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 LIST ALL) | READ | DIR, FROM | 16 | FILE | [2](http://localhost:9000/schema/2) | 
C356 | [ORWPT16 LOOKUP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPT16 LOOKUP) | READ | FROM | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C357 | [ORWRA IMAGING EXAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA IMAGING EXAMS) | READ | DFN | 1 | - |  | 
C358 | [ORWRA IMAGING EXAMS1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA IMAGING EXAMS1) | READ | DFN | 1 | - |  | 
C359 | [ORWRA REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA REPORT TEXT) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 8 | - |  | 
C360 | [ORWRA REPORT TEXT1](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRA REPORT TEXT1) | READ | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C361 | [ORWRP REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP REPORT TEXT) | READ | DFN, RPTID, HSTYPE, DTRANGE, EXAMID, ALPHA, OMEGA | 35 | FILE, JLV, UNSTRUCTURED READ, eHMP | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C362 | [ORWRP1 LISTNUTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP1 LISTNUTR) | READ | DFN | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C363 | [ORWRP2 HS REPORT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP2 HS REPORT TEXT) | READ | ORCOMPS, ORDFN | 7 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C364 | [ORWRP4 HDR MODIFY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP4 HDR MODIFY) | UTILITY | HANDLE, ID | 13 | FILE | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C365 | [ORWSR CASELIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR CASELIST) | READ | ORDFN | 8 | - |  | 
C366 | [ORWSR IS NON-OR PROCEDURE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR IS NON-OR PROCEDURE) | READ | ORCASE | 2 | IS-A |  | 
C367 | [ORWSR LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR LIST) | READ | ORDFN, ORBDT, OREDT, ORCTXT, ORMAX, ORFHIE | 21 | - |  | 
C368 | [ORWSR ONECASE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR ONECASE) | READ | ORTIUDA | 5 | - |  | 
C369 | [ORWSR RPTLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWSR RPTLIST) | READ | ORDFN | 25 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C370 | __[ORWTIU CHKTXT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU CHKTXT)__ | READ | ORTIUDA | 2 | P3PCE |  | 
C371 | [ORWTIU GET LISTBOX ITEM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET LISTBOX ITEM) | READ | ORTIUDA | 2 | - |  | 
C372 | [ORWTIU GET SAVED CP FIELDS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTIU GET SAVED CP FIELDS) | READ | ORTIUDA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C373 | [ORWTPT ATEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPT ATEAMS) | READ | &nbsp; | 7 | FILE | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C374 | [ORWU2 COSIGNER](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU2 COSIGNER) | READ | ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA | 10 | FILE | [200](http://localhost:9000/schema/200), [8925](http://localhost:9000/schema/8925) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C375 | [PXRM REMINDER DIALOG (TIU)](http://vistadataproject.info/artifacts/vistaRPC documentation/PXRM REMINDER DIALOG (TIU)) | UTILITY | ORDLG, DFN | 3 | FILE | [801.41](http://localhost:9000/schema/801_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C376 | [TIU CREATE ADDENDUM RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CREATE ADDENDUM RECORD) | CHANGE | TIUDA, TIUX, SUPPRESS | 1 | - |  | 
C377 | __[TIU CREATE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU CREATE RECORD)__ | CHANGE | DFN, TITLE, VDT, VLOC, VSIT, TIUX, VSTR, SUPPRESS, NOASF | 38 | FILE, P3PCE, eHMP | [44](http://localhost:9000/schema/44), [8925](http://localhost:9000/schema/8925) | 
C378 | [TIU DELETE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DELETE RECORD) | CHANGE | TIUDA, TIURSN, OVRRIDE | 10 | FILE | [8925](http://localhost:9000/schema/8925) | 
C379 | [TIU DETAILED DISPLAY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DETAILED DISPLAY) | READ | TIUDA, REASSIGN | 4 | - |  | 
C380 | __[TIU DOCUMENTS BY CONTEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU DOCUMENTS BY CONTEXT)__ | READ | CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND | 30 | FILE, P3PCE, QUERY | [8925](http://localhost:9000/schema/8925) | 
C381 | [TIU FIELD LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C382 | [TIU FIELD UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU FIELD UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C383 | [TIU GET ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET ADDITIONAL SIGNERS) | READ | TIUDA | 14 | FILE | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
C384 | [TIU GET ALERT INFO](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET ALERT INFO) | READ | XQAID | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C385 | __[TIU GET DOCUMENT PARAMETERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT PARAMETERS)__ | READ | TIUDA, TIUTYP | 4 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C386 | [TIU GET DOCUMENT STATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT STATUS) | READ | TIUIEN | 5 | FILE | [8925](http://localhost:9000/schema/8925), [8925.6](http://localhost:9000/schema/8925_6) | 
C387 | [TIU GET DOCUMENT TITLE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENT TITLE) | READ | TIUDA | 1 | FILE | [8925](http://localhost:9000/schema/8925) | 
C388 | [TIU GET DOCUMENTS FOR REQUEST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET DOCUMENTS FOR REQUEST) | READ | OVP, SEQUENCE | 18 | FILE | [8925](http://localhost:9000/schema/8925) | 
C389 | [TIU GET LINKED PRF NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET LINKED PRF NOTES) | READ | PTDFN, TIUTTL, REVERSE | 27 | FILE | [8925](http://localhost:9000/schema/8925) | 
C390 | [TIU GET PRF ACTIONS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET PRF ACTIONS) | READ | TIUTTL, DFN | 15 | - |  | 
C391 | __[TIU GET RECORD TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET RECORD TEXT)__ | READ | TIUDA, ACTION | 21 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C392 | __[TIU GET REQUEST](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU GET REQUEST)__ | READ | TIUDA | 10 | FILE, P3ALLERGIES, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C393 | __[TIU HAS AUTHOR SIGNED?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU HAS AUTHOR SIGNED%3F)__ | READ | TIUDA, TIUUSR | 5 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C394 | [TIU ID ATTACH ENTRY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID ATTACH ENTRY) | CHANGE | TIUDA, TIUDAD | 5 | - |  | 
C395 | __[TIU ID CAN RECEIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID CAN RECEIVE)__ | READ | TIUDA | 1 | IS-A, P3PCE |  | 
C396 | [TIU ID DETACH ENTRY](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ID DETACH ENTRY) | CHANGE | TIUDA | 8 | FILE | [8925](http://localhost:9000/schema/8925) | 
C397 | [TIU JUSTIFY DELETE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU JUSTIFY DELETE%3F) | READ | TIUDA | 2 | FILE | [8925](http://localhost:9000/schema/8925) | 
C398 | [TIU LINK TO FLAG](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LINK TO FLAG) | CHANGE | TIUIEN, ASSGNDA, ACTIEN, DFN | 5 | FILE | [8925](http://localhost:9000/schema/8925) | 
C399 | [TIU LOAD RECORD FOR EDIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOAD RECORD FOR EDIT) | READ | TIUDA, DR | 16 | FILE | [8925](http://localhost:9000/schema/8925) | 
C400 | __[TIU LOCK RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU LOCK RECORD)__ | UTILITY | TIUDA | 2 | LOCK, P3PCE, eHMP |  | 
C401 | [TIU NOTES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES) | READ | DFN, EARLY, LATE, PERSON, SEQUENCE | 4 | QUERY |  | 
C402 | [TIU NOTES 16 BIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES 16 BIT) | READ | DFN, EARLY, LATE, ROOTFLAG | 2 | FILE, QUERY | [2](http://localhost:9000/schema/2) | 
C403 | [TIU NOTES BY VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU NOTES BY VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
C404 | __[TIU ONE VISIT NOTE?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU ONE VISIT NOTE%3F)__ | READ | DOCTYP, DFN, VISIT | 20 | FILE, IS-A, P3PCE | [8925](http://localhost:9000/schema/8925), [8925.95](http://localhost:9000/schema/8925_95), [9000010](http://localhost:9000/schema/9000010) | 
C405 | [TIU SET ADMINISTRATIVE CLOSURE](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SET ADMINISTRATIVE CLOSURE) | CHANGE | TIUDA, MODE, PERSON | 36 | FILE | [8925](http://localhost:9000/schema/8925) | 
C406 | __[TIU SET DOCUMENT TEXT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SET DOCUMENT TEXT)__ | UTILITY | TIUDA, TIUX, SUPPRESS | 28 | FILE, P3PCE, REENTRANCY | [8925](http://localhost:9000/schema/8925) | 
C407 | __[TIU SIGN RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SIGN RECORD)__ | CHANGE | TIUDA, TIUX | 1 | P3PCE, eHMP |  | 
C408 | [TIU SUMMARIES](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SUMMARIES) | READ | DFN, EARLY, LATE | 4 | QUERY |  | 
C409 | [TIU SUMMARIES BY VISIT](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU SUMMARIES BY VISIT) | READ | VISIT, STATUS | 2 | FILE, QUERY | [9000010](http://localhost:9000/schema/9000010) | 
C410 | [TIU TEMPLATE LOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE LOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C411 | [TIU TEMPLATE UNLOCK](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU TEMPLATE UNLOCK) | UTILITY | TIUDA | 2 | LOCK |  | 
C412 | __[TIU UNLOCK RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UNLOCK RECORD)__ | UTILITY | TIUDA | 2 | LOCK, P3ALLERGIES, P3PCE, eHMP |  | 
C413 | [TIU UPDATE ADDITIONAL SIGNERS](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UPDATE ADDITIONAL SIGNERS) | CHANGE | TIUDA, TIULIST | 18 | FILE | [8925.7](http://localhost:9000/schema/8925_7) | 
C414 | __[TIU UPDATE RECORD](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU UPDATE RECORD)__ | CHANGE | TIUDA, TIUX, SUPPRESS | 43 | FILE, P3PCE, eHMP | [8925](http://localhost:9000/schema/8925) | 
C415 | __[TIU WAS THIS SAVED?](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU WAS THIS SAVED%3F)__ | CHANGE | TIUDA | 11 | FILE, P3PCE | [8925](http://localhost:9000/schema/8925) | 
C416 | __[TIU WHICH SIGNATURE ACTION](http://vistadataproject.info/artifacts/vistaRPC documentation/TIU WHICH SIGNATURE ACTION)__ | READ | TIUDA | 7 | FILE, P3PCE, eHMP | [8925](http://localhost:9000/schema/8925), [8925.7](http://localhost:9000/schema/8925_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C417 | [VAFCTFU CONVERT ICN TO DFN](http://vistadataproject.info/artifacts/vistaRPC documentation/VAFCTFU CONVERT ICN TO DFN) | READ | ICN | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
C418 | [YS GAF API](http://vistadataproject.info/artifacts/vistaRPC documentation/YS GAF API) | READ | YS | 7 | - |  | 




<small>Generated on 2017-04-17</small>