---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF REQUEST ENTER_EDIT 

 property | value 
--- | --- 
 label | DSIF REQUEST ENTER_EDIT
 tag | EN
 routine | [DSIFNOT6](http://code.osehra.org/dox/Routine_DSIFNOT6_source.html)
 return value type | SINGLE VALUE
 description | This RPC duplicates the logic from FBCHREQ* routines and the FBCH ENTER REQUEST input template.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number to file 162.2 (Enter mode when false, Edit mode when true) | 
| REQDT | LITERAL | 14 | true | Request Date/Time (Required on enter, optional on edit) | 
| DFN | LITERAL | 99 | true | Patient IEN (Required on enter, optional on edit) | 
| VEN | LITERAL | 99 | true | Vendor IEN (Required on enter, optional on edit) | 
| WHO | LITERAL | 30 | true | Person Who Called (Optional - Free Text 3 to 30 Characters) | 
| ADMDT | LITERAL | 14 | true | Admission Date/Time (Required on enter, optional on edit) | 
| AUTHDT | LITERAL | 14 | true | Authorized From Date/Time (Optional - Default is ADMDT) | 
| ADMDX | LITERAL | 45 | true | Admitting Diagnosis (Optional - Free Text 3 to 45 Characters) | 
| ATPHY | LITERAL | 30 | true | Attending Physician (Optional - Free Text 3 to 30 Characters) | 
| PHYPH | LITERAL | 20 | true | Attending Physicians Phone Number (Optional - Free Text 3 to 20 Characters) | 
| TOC | LITERAL | 1 | true | Type of Contact (Optional - T : Telephone, P - Personal) | 
| REFPROV | LITERAL | 25 | true | Referring provider, pointer to file 200.  \@\ can be passed in for deletion. | 




Generated on January 11th 2017, 6:34:23 am