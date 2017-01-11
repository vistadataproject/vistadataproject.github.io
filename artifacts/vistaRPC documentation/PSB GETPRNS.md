---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB GETPRNS 

 property | value 
--- | --- 
 label | PSB GETPRNS
 tag | GETPRNS
 routine | [PSBPRN](http://code.osehra.org/dox/Routine_PSBPRN_source.html)
 return value type | GLOBAL ARRAY
 description | Returns all administrations of a PRN order that have NOT had the PRNEffectiveness documented in the current admission or within the hours defined in PRN documentation site parameter whichever is greater of the two.  When the PRN medication is administered a flag is set based on the given PRN Reason.  This flag will dictate whether BCMA will mandate aPAIN SCORE measurement with PRN documentation.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | Patient IEN number. | 
| PSBORD | LITERAL |  | true | Order number from Inpatient Medications. If order number is passed then returns all PRN effectiveness not documented for that order. If order number is NOT passed, then returns all PRN effectiveness not documented for that patient. | 
| PSBSIOPI | LITERAL | 1 | true | This parameter is a true/false flag (1/0).  If true use the new SI/OP Wpfields and return data in the Results array to the GUI Client. The field is not required, so a null will convert into a 0, for false,making this backwards compatible. | 




 Generated on January 11th 2017, 7:15:04 am