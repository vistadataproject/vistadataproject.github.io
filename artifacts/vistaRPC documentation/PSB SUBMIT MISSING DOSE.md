---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB SUBMIT MISSING DOSE 

 property | value 
--- | --- 
 label | PSB SUBMIT MISSING DOSE
 tag | RPC
 routine | [PSBMD](http://code.osehra.org/dox/Routine_PSBMD_source.html)
 return value type | ARRAY
 description | Allows the client to submit a missing dose interactively.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBDFN | LITERAL |  | true | Patient DFN (IEN) | 
| PSBDRUG | LITERAL |  | true | This is the IEN of the drug from File #50. | 
| PSBDOSE | LITERAL |  |  | Dosage. | 
| PSBRSN | LITERAL |  | true | Missing Dose reason. INTERNALLY-STORED CODE: 1   WILL STAND FOR: DROPPEDINTERNALLY-STORED CODE: 2   WILL STAND FOR: EMPTY PACKAGEINTERNALLY-STORED CODE: 3   WILL STAND FOR: NOT AVAILABLEINTERNALLY-STORED CODE: 4   WILL STAND FOR: WRONG DOSE/DRUG DELIVERED | 
| PSBADMIN | LITERAL |  | true | Administration time of the medication. | 
| PSBNEED | LITERAL |  | true | Needed date/time of the medication | 
| PSBUID | LITERAL |  | true | Unique ID of an IV bag if it's an IV order. | 
| PSBON | LITERAL |  | true | Order Number | 
| PSBSCHD | LITERAL |  | true | Medication Schedule. | 
| PSBCLIN | LITERAL | 30 | true | Clinic Name | 
| PSBCLNIEN | LITERAL |  | true | Clinic pointer to the HOSPITAL LOCATION file (#44) for a clinic submitting a missing dose request. | 




Generated on January 11th 2017, 6:34:23 am