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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBDFN | LITERAL |  | true | Patient DFN (IEN) | 
| vs:Input_Parameter-8994_02 | PSBDRUG | LITERAL |  | true | This is the IEN of the drug from File #50. | 
| vs:Input_Parameter-8994_02 | PSBDOSE | LITERAL |  |  | Dosage. | 
| vs:Input_Parameter-8994_02 | PSBRSN | LITERAL |  | true | Missing Dose reason. INTERNALLY-STORED CODE: 1   WILL STAND FOR: DROPPEDINTERNALLY-STORED CODE: 2   WILL STAND FOR: EMPTY PACKAGEINTERNALLY-STORED CODE: 3   WILL STAND FOR: NOT AVAILABLEINTERNALLY-STORED CODE: 4   WILL STAND FOR: WRONG DOSE/DRUG DELIVERED | 
| vs:Input_Parameter-8994_02 | PSBADMIN | LITERAL |  | true | Administration time of the medication. | 
| vs:Input_Parameter-8994_02 | PSBNEED | LITERAL |  | true | Needed date/time of the medication | 
| vs:Input_Parameter-8994_02 | PSBUID | LITERAL |  | true | Unique ID of an IV bag if it's an IV order. | 
| vs:Input_Parameter-8994_02 | PSBON | LITERAL |  | true | Order Number | 
| vs:Input_Parameter-8994_02 | PSBSCHD | LITERAL |  | true | Medication Schedule. | 
| vs:Input_Parameter-8994_02 | PSBCLIN | LITERAL | 30 | true | Clinic Name | 
| vs:Input_Parameter-8994_02 | PSBCLNIEN | LITERAL |  | true | Clinic pointer to the HOSPITAL LOCATION file (#44) for a clinic submitting a missing dose request. | 