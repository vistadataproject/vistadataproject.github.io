---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB GETORDERTAB 

 property | value 
--- | --- 
 label | PSB GETORDERTAB
 tag | RPC
 routine | [PSBVDLTB](http://code.osehra.org/dox/Routine_PSBVDLTB_source.html)
 return value type | GLOBAL ARRAY
 description | Gives the client VDL information for the specified patient and time frame.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | The patient IEN from ^DPT. | 
| VDL TAB | LITERAL | 30 | true | The tab from the VDL that is being requested. | 
| VDL DATE | LITERAL | 30 | true | The date of the requested data.  If not passed then current date/time areused. | 
| PSBSIOPI | LITERAL | 1 | true |  This parameter is a true/false flag (1/0).  If true use the new SI/OP Wp fields and return data in the Results array to the GUI Client.   The field is not required, so a null will convert into a 0, for false, making this backwards compatible. | 
| PSBCLINORD | LITERAL | 1 | true | This parameter is a True/False flag (1/0).  If true, then return onlyClinic Orders and not Inpatient Medication orders to BCMA, else if false, return only Inpatient Medication orders to BCMA. The field is not required, so a null will convert into a 0, for a default false value, making this backwards compatible. | 




 ###### Generated on January 11th 2017, 6:39:43 am