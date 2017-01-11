---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PX SAVE DATA 

 property | value 
--- | --- 
 label | PX SAVE DATA
 tag | SAVE
 routine | [PXRPC](http://code.osehra.org/dox/Routine_PXRPC_source.html)
 return value type | SINGLE VALUE
 description | The purpose of this RPC is to allow the calling application to save data to PCE, such as Immunization data. See the Integration Control Registration document for the full description of the data needed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PCELIST | LIST | 10000 | true | PCELIST (n)= HDR ^ Encounter Inpatient? ^ Note has CPT codes? ^ Visit              string [Encounter location; Encounter date/time; Encounter             Service category]  (REQUIRED)        (n)=VST^DT^Encounter date/time        (n)=VST^PT^Encounter patient (DFN) (n)=VST^HL^Encounter location        (n)=VST^VC^ Encounter Service Category         If  applicable:                      (n)=VST^PR^ Parent for secondary visit        (n)=VST^OL^ Outside Location for Historical visits        (n)=VST^SC^ Service Connected related?        (n)=VST^AO^ Agent Orange related?        (n)=VST^IR^ Ionizing Radiation related?        (n)=VST^EC^ Environmental Contaminates related?        (n)=VST^MST^ Military Sexual Trauma related?        (n)=VST^HNC^ Head and/or Neck Cancer related?        (n)=VST^CV^ Combat Vet related?        (n)=VST^SHD^ Shipboard Hazard and Defense related?         (n)=PRV^PRV ^ Provider IEN ^^^ Provider Name ^ Primary Provider?        (n)=POV(+:  add, -: delete) ^ ICD diagnosis code ^ Category  ^             Narrative (Diagnosis description) ^ Primary Diagnosis? ^            Provider String ^ Add to Problem List? ^^^ Next comment            sequence # if saving comments        (n)=COM^COM (Comments) ^ Next comment sequence # ^ @ = no             comments added        (n)=CPT (+:  add, -: delete) ^ Procedural  CPT code ^ Category ^             Narrative (Procedure description) ^ Quantity ^ Provider IEN            ^^^ [# of modifiers;  Modifier code/Modifier IEN ^ Next            comment sequence # ^        (n)=IMM (+:  add, -: delete) ^ Immunization IEN ^ Category ^             Narrative (Immunization description/name) ^ Series ^            Encounter Provider ^ Reaction ^ Contraindicated? ^ Refused? ^            Next comment sequence # ^ CVX ^ Event Info Source ^ Dosage ^            Route ^ Admin Site ^ Lot# ^ Manufacturer ^ Expiration Date        (n)=SK (+:  add, -: delete) ^ Skin Test IEN ^ Category ^             Narrative (Skin Test description/name) ^ Results ^^ Reading            ^^^ Next comment sequence #        (n)=PED (+:  add, -: delete) ^ Patient Education IEN ^ Category ^             Narrative (Patient Education description/name) ^ Level of            understanding ^^^^^ ^^ Next comment sequence #        (n)=HF (+:  add, -: delete) ^ Health Factor IEN ^ Category ^             Narrative (Health Factor description/name) ^ Level ^^^^^ Next            comment sequence # ^ Get Reminder        (n)=XAM(+:  add, -: delete) ^ Exam IEN ^ Category ^ Narrative             (Exam description/name) ^ Results ^^^^^ Next comment sequence            # | 
| LOC | LITERAL | 40 | true | This is the hospital location. This is not used when the information is from an outside source. | 
| PKGNAME | LITERAL | 60 | true | The package name that is sending the data to PCE. This should be the full package name, such as PATIENT CARE ENCOUNTERS.  | 
| SRC | LITERAL | 60 | true | The source of the data - such as VLER E-HEALTH EXCHANGE. | 




 ###### Generated on January 11th 2017, 6:39:43 am