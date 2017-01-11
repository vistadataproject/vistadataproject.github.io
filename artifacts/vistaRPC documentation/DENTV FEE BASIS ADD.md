---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV FEE BASIS ADD 

 property | value 
--- | --- 
 label | DENTV FEE BASIS ADD
 tag | ADD
 routine | [DENTVFB](http://code.osehra.org/dox/Routine_DENTVFB_source.html)
 return value type | SINGLE VALUE
 description | This RPC adds, or edits a record in the Dental Fee Basis file (#228.5).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LIST | 30 | true | This is the input array for adding/updating a new record to the Dental FeeBasis file (#228.5).  The following input format is required:   DATA(\DFN\)=DFN (pointer to file 2)   DATA(\DIVISION\)=dental division name (.01 field) from file 225   DATA(\CATEGORY\)=dental category (pointer to file 220.2)   DATA(\DATE\)=date authorized for payment, external MM/DD/YYYY   DATA(\COST\)=amount authorized for payment, dollar format   DATA(\IEN\)=pointer to 228.5 for Updating records | 




Generated on January 11th 2017, 6:34:23 am