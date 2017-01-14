---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Order Non Clinical RPCs Slice Breakdown
---


# [All](bdStart) &#8594; Non Clinical (125)



Non Clinical RPCs don't effect a patient's medical record. In a phrase, they mainly 'get file data and parameter settings' and as they don't access patient data, their use needn't be monitored as closely as the Clinical RPCs - they don't involve HIPAA sensitive information.

These RPCs access at least 29 parameters and 28 files.

They come in four flavors (__PRELIMINARY BREAKDOWN__) ...

Name | Number
--- | ---
[Parameter Only](#parameter-only-0) | 0 (0%)
[File Only](#file-only-101) | 101 (80.8%)
[Parameter and File](#parameter-and-file-24) | 24 (19.2%)
[Other](#other-0) | 0 (0%)




### Parameter Only (0)

RPCs that ONLY access parameters and not files. A tag of DUZ means that they access per User data..

Category | Number
--- | ---





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---


### File Only (101)

RPCs that only access files and not parameters.

Category | Number
--- | ---
CHANGE | 3 (3%)
READ | 94 (93.1%)
UTILITY | 4 (4%)





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
F1 | [ORWDXQ DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGNAME) | READ | INAME | 2 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F2 | [OREVNTX1 DFLTDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DFLTDLG) | READ | EVTID | 4 | - | [100.5](http://localhost:9000/schema/100_5), [101.41](http://localhost:9000/schema/101_41) | 
F3 | [OREVNTX1 LOC1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 LOC1) | READ | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F4 | [ORWDXVB SUBCHK](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB SUBCHK) | READ | TSTNM | 4 | COMPUTED | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F5 | [ORWUL FVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVIDX) | READ | IEN, FROM | 7 | QUERY | [101.43](http://localhost:9000/schema/101_43), [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F6 | [ORWDRA32 RAORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 RAORDITM) | READ | FROM, DIR, IMGTYP | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F7 | [ORWDXM PROMPTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM PROMPTS) | READ | DLG | 19 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F8 | [ORWDPS32 MEDISIV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 MEDISIV) | READ | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
F9 | [ORWDPS32 IVAMT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 IVAMT) | READ | OI, ORWTYP | 12 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F10 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DLGIEN) | READ | DLGNAME | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F11 | [ORQQCN GET SERVICE IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET SERVICE IEN) | READ | ORIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43), [123.5](http://localhost:9000/schema/123_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F12 | [ORWDPS1 IVDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 IVDEA) | READ | OI, OITYPE, ORNP | 13 | DUZ | [101.43](http://localhost:9000/schema/101_43), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F13 | [ORWDFH TFPROD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH TFPROD) | READ | &nbsp; | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F14 | [OREVNTX1 PROMPT IDS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PROMPT IDS) | READ | IDS | 7 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F15 | [ORWDPS1 DFLTSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DFLTSPLY) | UTILITY | UPD, SCH, PAT, DRG, OI | 12 | FMUTILITY | [101.43](http://localhost:9000/schema/101_43) | 
F16 | [ORWDPS1 HASOIPI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASOIPI) | READ | QOID | 9 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F17 | [ORWDPS32 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 ISSPLY) | READ | IEN | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F18 | [ORWUL QVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVSUB) | READ | IEN, FIRST, LAST | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
F19 | [ORWUL QVIDX](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QVIDX) | READ | IEN, FROM | 7 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F20 | [ORQQCN STATUS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN STATUS) | READ | &nbsp; | 6 | XREF | [100.01](http://localhost:9000/schema/100_01), [123.1](http://localhost:9000/schema/123_1) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F21 | [ORWDFH DIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH DIETS) | READ | FROM, DIR | 10 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F22 | [ORWDOR VMSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR VMSLCT) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F23 | [ORWDFH ATTR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ATTR) | READ | OI | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F24 | [ORWDPS32 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 FORMALT) | READ | IEN, PSTYPE | 4 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F25 | [ORWDXM DLGNAME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM DLGNAME) | READ | DLG | 7 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F26 | [ORQPT TEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQPT TEAMS) | READ | &nbsp; | 6 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F27 | [ORBCMA5 GETUDID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORBCMA5 GETUDID) | READ | INFO | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F28 | [ORWDOR LKSCRN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDOR LKSCRN) | READ | FROM, DIR, REF, GBL, SCR | 9 | QUERY | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F29 | [OREVNTX1 MULTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 MULTS) | READ | EVTID | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F30 | [ORWDRA32 IMTYPSEL](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 IMTYPSEL) | READ | DUMMY | 9 | - | [100.98](http://localhost:9000/schema/100_98), [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43), [79.2](http://localhost:9000/schema/79_2), [79.3](http://localhost:9000/schema/79_3) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F31 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVC W/SYNONYMS) | READ | ORSTRT, ORWHY, ORSYN, ORIEN | 12 | - | [101.43](http://localhost:9000/schema/101_43), [123.5](http://localhost:9000/schema/123_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F32 | [ORWTPP PLTEAMS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLTEAMS) | READ | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F33 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXR01 ISSPLY) | READ | DLGID, QODLG | 6 | IS-A | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F34 | [ORWTPT GETTEAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPT GETTEAM) | READ | TEAM | 7 | DUZ | [100.21](http://localhost:9000/schema/100_21), [200](http://localhost:9000/schema/200) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F35 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKISITE) | READ | &nbsp; | 7 | LOCATION | [100.7](http://localhost:9000/schema/100_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F36 | [ORWDX DGNM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGNM) | READ | NM | 1 | IEN-LOOKUP | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F37 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FVSUB) | READ | IEN, FIRST, LAST | 6 | QUERY | [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F38 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORIMO ISIVQO) | READ | DLGID | 8 | IS-A | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F39 | [ORWDFH OPDIETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH OPDIETS) | READ | FROM, DIR | 15 | - | [101.43](http://localhost:9000/schema/101_43), [119.9](http://localhost:9000/schema/119_9) | 
F40 | [ORWDFH ISOIEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH ISOIEN) | READ | &nbsp; | 1 | IEN-LOOKUP | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F41 | [ORWDPS1 FORMALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FORMALT) | READ | ORIEN, PSTYPE | 7 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F42 | [ORWDXQ DLGSAVE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ DLGSAVE) | __CHANGE__ | CRC, DNAME, DGRP, RSP | 8 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F43 | [ORWTPP ADDLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP ADDLIST) | __CHANGE__ | VALUE | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F44 | [ORWORDG ALLTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG ALLTREE) | READ | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F45 | [ORWTPD GETSETS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETSETS) | READ | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F46 | [ORWDLR32 LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR32 LOAD) | READ | TESTID | 36 | - | [101.43](http://localhost:9000/schema/101_43), [60](http://localhost:9000/schema/60), [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F47 | [OREVNTX1 PRMPTID](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 PRMPTID) | READ | PRTNM | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F48 | [ORWGRPC RPTPARAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC RPTPARAM) | READ | IEN | 1 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F49 | [ORWD OI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD OI) | READ | XREF, DIR, FROM | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F50 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 FAILDEA) | UTILITY | OI, ORNP, PSTYPE | 13 | DUZ, FMUTILITY, IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F51 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM3 ISUDQO) | READ | DLGID | 11 | COMPUTED, IS-A | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F52 | [ORWORDG IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG IEN) | READ | X | 2 | IEN-LOOKUP | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F53 | [OREVNTX1 GTEVT1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 GTEVT1) | READ | EVT | 10 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F54 | [ORWTPP PLISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP PLISTS) | READ | &nbsp; | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F55 | [ORWDLR33 LASTTIME](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR33 LASTTIME) | UTILITY | &nbsp; | 5 | REENTRANCY | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F56 | [ORWDPS32 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 OISLCT) | READ | OI, PSTYPE, ORVP | 8 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F57 | [ORWOR PKIUSE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR PKIUSE) | READ | &nbsp; | 4 | DUZ | [100.7](http://localhost:9000/schema/100_7) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F58 | [OREVNTX1 DIV1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DIV1) | READ | EVT | 2 | LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F59 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS5 LESGRP) | READ | ORLES | 8 | HARD CODED | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F60 | [ORQQCN SVCTREE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN SVCTREE) | READ | PURPOSE | 9 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F61 | [OREVNTX1 ISPASS1](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 ISPASS1) | READ | EVTID, EVTTYPE | 3 | IS-A | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F62 | [ORWDCN32 ORDRMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 ORDRMSG) | READ | ORDITM | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F63 | [OREVNTX1 CPACT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CPACT) | READ | EVT | 4 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F64 | [ORWDXC FILLID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXC FILLID) | READ | DLG | 8 | - | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F65 | [OREVNTX ACTIVE](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX ACTIVE) | READ | TYPE | 9 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F66 | [ORWDPS1 QOMEDALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 QOMEDALT) | READ | ODIEN | 7 | - | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43), [9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F67 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 QOGRP) | READ | QOIFN | 16 | - | [100.98](http://localhost:9000/schema/100_98), [101.41](http://localhost:9000/schema/101_41) | 
F68 | [ORWDPS2 OISLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS2 OISLCT) | READ | OI, PSTYPE, ORVP, NEEDPI, PKIACTIV | 42 | HARD CODED | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F69 | [ORWDPS1 DOSEALT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 DOSEALT) | READ | DDRUG, CUROI, PSTYPE | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 
F70 | [ORWDPS1 HASROUTE](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 HASROUTE) | READ | QOID | 6 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F71 | [ORWDX ORDITM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX ORDITM) | READ | FROM, DIR, XREF, QOCALL | 12 | QUERY | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F72 | [ORWTPR OCDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR OCDESC) | READ | IEN | 9 | - | [100.8](http://localhost:9000/schema/100_8) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F73 | [ORWCOM DETAILS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM DETAILS) | READ | ID | 5 | - | [101.15](http://localhost:9000/schema/101_15) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F74 | [ORWDFH FINDTYP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH FINDTYP) | READ | DGRP | 2 | - | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F75 | [ORWDCSLT DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCSLT DEF) | READ | &nbsp; | 7 | HARD CODED | [101.43](http://localhost:9000/schema/101_43), [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F76 | [ORWUL FV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL FV4DG) | READ | DGNM | 17 | QUERY | [101.43](http://localhost:9000/schema/101_43), [101.44](http://localhost:9000/schema/101_44) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F77 | [ORWDPS1 ODSLCT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS1 ODSLCT) | READ | PSTYPE, DFN, LOC | 11 | - | [101.42](http://localhost:9000/schema/101_42) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F78 | [ORWDLR LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDLR LOAD) | READ | TESTID | 18 | - | [101.43](http://localhost:9000/schema/101_43), [61](http://localhost:9000/schema/61) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F79 | [ORWDX MSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX MSG) | READ | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F80 | [ORWCOM GETOBJS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCOM GETOBJS) | READ | &nbsp; | 9 | LIST | [101.15](http://localhost:9000/schema/101_15) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F81 | [OREVNTX1 DEFLTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 DEFLTS) | READ | EVTID | 6 | - | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F82 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM FORMID) | READ | DLG | 7 | - | [101.41](http://localhost:9000/schema/101_41), [9.4](http://localhost:9000/schema/9_4) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F83 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXA ISACTOI) | READ | OI | 2 | IS-A | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F84 | [ORWDX DISMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DISMSG) | READ | IEN | 1 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F85 | [ORQQCN GET PROC SVCS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC SVCS) | READ | ORDITM | 3 | XREF | [101.43](http://localhost:9000/schema/101_43), [123.3](http://localhost:9000/schema/123_3), [123.5](http://localhost:9000/schema/123_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F86 | [ORWDRA32 PROCMSG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA32 PROCMSG) | READ | IEN | 2 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F87 | [ORWD SAVEACT](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD SAVEACT) | __CHANGE__ | ORIFN, ACTION, REASON, DFN, ORNP, LOC | 35 | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F88 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX AGAIN) | READ | DLG | 1 | IS-A | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F89 | [ORWTPR NOTDESC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPR NOTDESC) | READ | IEN | 7 | - | [100.9](http://localhost:9000/schema/100_9) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F90 | [ORWDXM MENU](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM MENU) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
F91 | [ORWDXM LOADSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXM LOADSET) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F92 | [ORWNSS QOSCH](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWNSS QOSCH) | READ | QOID | 13 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F93 | [ORWDFH QTY2CC](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDFH QTY2CC) | READ | PRD, STR, QTY | 6 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F94 | [ORWDPS32 DOSES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS32 DOSES) | READ | OI | 13 | - | [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F95 | [ORWD DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWD DEF) | READ | DLG | 14 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F96 | [ORWTPP DELLIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPP DELLIST) | READ | LISTNUM | 1 | DUZ | [100.21](http://localhost:9000/schema/100_21) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F97 | [ORQQCN GET PROC IEN](http://vistadataproject.info/artifacts/vistaRPC documentation/ORQQCN GET PROC IEN) | READ | ORDITM | 1 | - | [101.43](http://localhost:9000/schema/101_43), [123.3](http://localhost:9000/schema/123_3) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F98 | [ORWTPD GETIMG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD GETIMG) | UTILITY | RPT | 10 | - | [101.24](http://localhost:9000/schema/101_24) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F99 | [ORWDX DGRP](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX DGRP) | READ | DLG | 2 | IEN-LOOKUP | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F100 | [ORWDCN32 PROCEDURES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 PROCEDURES) | READ | FROM, DIR | 11 | QUERY | [101](http://localhost:9000/schema/101), [101.43](http://localhost:9000/schema/101_43) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
F101 | [ORWDPS33 GETADDFR](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDPS33 GETADDFR) | READ | OIIEN | 5 | - | [101.43](http://localhost:9000/schema/101_43) | 


### Parameter and File (24)

RPCs that access parameters and files.

Category | Number
--- | ---
CHANGE | 4 (16.7%)
READ | 19 (79.2%)
UTILITY | 1 (4.2%)





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---
PF1 | [ORWOR VWSET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWSET) | __CHANGE__ | VIEW | 5 | DUZ | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF2 | [ORWDXQ GETQNAM](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQNAM) | READ | CRC | 4 | - | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF3 | [OREVNTX1 CMEVTS](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 CMEVTS) | READ | CLOC | 10 | DUZ, LOCATION | [100.5](http://localhost:9000/schema/100_5) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF4 | [ORWPS1 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWPS1 NEWDLG) | READ | INPAT | 6 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW MED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF5 | [OREVNTX1 SETDFLT](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 SETDFLT) | __CHANGE__ | EVT | 5 | DUZ | [100.5](http://localhost:9000/schema/100_5) | OREVNT DEFAULT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF6 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWUL QV4DG) | READ | DGRP | 6 | QUERY | [100.98](http://localhost:9000/schema/100_98) | ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF7 | [ORWTPD ACTDF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD ACTDF) | __CHANGE__ | &nbsp; | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS ALL
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF8 | [ORWDXVB3 DIAGORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB3 DIAGORD) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS DIAGNOSTIC TEST ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF9 | [ORWOR VWGET](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWOR VWGET) | READ | &nbsp; | 19 | - | [100.98](http://localhost:9000/schema/100_98) | ORCH CONTEXT ORDERS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF10 | [OREVNTX1 WRLSTED](http://vistadataproject.info/artifacts/vistaRPC documentation/OREVNTX1 WRLSTED) | READ | LOC, EVTID | &nbsp; | DUZ | [101.41](http://localhost:9000/schema/101_41) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF11 | [ORWRP COLUMN HEADERS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP COLUMN HEADERS) | READ | IFN | 8 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWCH COLUMNS REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF12 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWCV1 COVERSHEET LIST) | READ | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24), [8994](http://localhost:9000/schema/8994) | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF13 | [ORWDXVB COMPORD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXVB COMPORD) | READ | &nbsp; | 3 | - | [101.43](http://localhost:9000/schema/101_43) | OR VBECS COMPONENT ORDER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF14 | [ORWRP LAB REPORT LISTS](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWRP LAB REPORT LISTS) | READ | &nbsp; | 11 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP REPORT LAB LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF15 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG MAPSEQ) | READ | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF16 | [ORWDXQ GETQLST](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDXQ GETQLST) | READ | DGRP, PRE | 7 | - | [101.41](http://localhost:9000/schema/101_41), [101.44](http://localhost:9000/schema/101_44) | ORWDQ QUICK VIEW
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF17 | [ORWGRPC GETDATES](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWGRPC GETDATES) | UTILITY | REPORTID | 2 | - | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF18 | [ORWTPD SUINDV](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWTPD SUINDV) | __CHANGE__ | RPTS, VALUE | 7 | DUZ | [101.24](http://localhost:9000/schema/101_24) | ORWRP TIME/OCC LIMITS INDV
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF19 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDX2 DCREASON) | READ | &nbsp; | 15 | QUERY | [100.02](http://localhost:9000/schema/100_02), [100.03](http://localhost:9000/schema/100_03), [9.4](http://localhost:9000/schema/9_4) | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF20 | [ORWDGX LOAD](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDGX LOAD) | READ | PAR | 15 | - | [101.41](http://localhost:9000/schema/101_41), [101.43](http://localhost:9000/schema/101_43) | *VARIABLE*
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF21 | [ORWORDG GRPSEQB](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWORDG GRPSEQB) | READ | &nbsp; | 4 | - | [100.98](http://localhost:9000/schema/100_98) | ORWOR CATEGORY SEQUENCE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF22 | [ORWDRA DEF](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDRA DEF) | READ | PATID | 9 | HARD CODED | [101.42](http://localhost:9000/schema/101_42), [101.43](http://localhost:9000/schema/101_43) | RA SUBMIT PROMPT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF23 | [ORWU USERINFO](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWU USERINFO) | READ | &nbsp; | 56 | DUZ | [101.13](http://localhost:9000/schema/101_13) | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
PF24 | [ORWDCN32 NEWDLG](http://vistadataproject.info/artifacts/vistaRPC documentation/ORWDCN32 NEWDLG) | READ | ORTYPE, ORLOC | 9 | - | [101.41](http://localhost:9000/schema/101_41) | ORWDX NEW CONSULT, ORWDX NEW PROCEDURE


### Other (0)

All other RPCs - don't access parameters or files. __Careful__ - in many cases these RPCs do use PARAMETERS/FILES but their definitions don't note that and so they end up (for now) in this table.

Category | Number
--- | ---





\# | Name | Category | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | ---






<small>Generated on 2017-01-13</small>