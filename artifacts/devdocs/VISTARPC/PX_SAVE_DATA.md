---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PX SAVE DATA<br/>
# PX SAVE DATA

The purpose of this RPC is to allow the calling application to save data to PCE, such as Immunization data. See the Integration Control Registration document for the full description of the data needed.

## Properties

Property | Value
--- | ---
Label | SAVE
Routine | [PXRPC](http://code.osehra.org/dox/Routine_PXRPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PCELIST | LIST | 10000 | true | PCELIST (n)&#x3D; HDR ^ Encounter Inpatient? ^ Note has CPT codes? ^ Visit              string [Encounter location; Encounter date/time; Encounter             Service category]  (REQUIRED)        (n)&#x3D;VST^DT^Encounter date/time        (n)&#x3D;VST^PT^Encounter patient (DFN) (n)&#x3D;VST^HL^Encounter location        (n)&#x3D;VST^VC^ Encounter Service Category         If  applicable:                      (n)&#x3D;VST^PR^ Parent for secondary visit        (n)&#x3D;VST^OL^ Outside Location for Historical visits        (n)&#x3D;VST^SC^ Service Connected related?        (n)&#x3D;VST^AO^ Agent Orange related?        (n)&#x3D;VST^IR^ Ionizing Radiation related?        (n)&#x3D;VST^EC^ Environmental Contaminates related?        (n)&#x3D;VST^MST^ Military Sexual Trauma related?        (n)&#x3D;VST^HNC^ Head and/or Neck Cancer related?        (n)&#x3D;VST^CV^ Combat Vet related?        (n)&#x3D;VST^SHD^ Shipboard Hazard and Defense related?         (n)&#x3D;PRV^PRV ^ Provider IEN ^^^ Provider Name ^ Primary Provider?        (n)&#x3D;POV(+:  add, -: delete) ^ ICD diagnosis code ^ Category  ^             Narrative (Diagnosis description) ^ Primary Diagnosis? ^            Provider String ^ Add to Problem List? ^^^ Next comment            sequence # if saving comments        (n)&#x3D;COM^COM (Comments) ^ Next comment sequence # ^ @ &#x3D; no             comments added        (n)&#x3D;CPT (+:  add, -: delete) ^ Procedural  CPT code ^ Category ^             Narrative (Procedure description) ^ Quantity ^ Provider IEN            ^^^ [# of modifiers;  Modifier code/Modifier IEN ^ Next            comment sequence # ^        (n)&#x3D;IMM (+:  add, -: delete) ^ Immunization IEN ^ Category ^             Narrative (Immunization description/name) ^ Series ^            Encounter Provider ^ Reaction ^ Contraindicated? ^ Refused? ^            Next comment sequence # ^ CVX ^ Event Info Source ^ Dosage ^            Route ^ Admin Site ^ Lot# ^ Manufacturer ^ Expiration Date        (n)&#x3D;SK (+:  add, -: delete) ^ Skin Test IEN ^ Category ^             Narrative (Skin Test description/name) ^ Results ^^ Reading            ^^^ Next comment sequence #        (n)&#x3D;PED (+:  add, -: delete) ^ Patient Education IEN ^ Category ^             Narrative (Patient Education description/name) ^ Level of            understanding ^^^^^ ^^ Next comment sequence #        (n)&#x3D;HF (+:  add, -: delete) ^ Health Factor IEN ^ Category ^             Narrative (Health Factor description/name) ^ Level ^^^^^ Next            comment sequence # ^ Get Reminder        (n)&#x3D;XAM(+:  add, -: delete) ^ Exam IEN ^ Category ^ Narrative             (Exam description/name) ^ Results ^^^^^ Next comment sequence            #
LOC | LITERAL | 40 | true | This is the hospital location. This is not used when the information is from an outside source.
PKGNAME | LITERAL | 60 | true | The package name that is sending the data to PCE. This should be the full package name, such as PATIENT CARE ENCOUNTERS. 
SRC | LITERAL | 60 | true | The source of the data - such as VLER E-HEALTH EXCHANGE.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}