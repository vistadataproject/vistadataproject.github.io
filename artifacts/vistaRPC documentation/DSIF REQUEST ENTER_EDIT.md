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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number to file 162.2 (Enter mode when false, Edit mode when true) | 
| vs:Input_Parameter-8994_02 | REQDT | LITERAL | 14 | true | Request Date/Time (Required on enter, optional on edit) | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 99 | true | Patient IEN (Required on enter, optional on edit) | 
| vs:Input_Parameter-8994_02 | VEN | LITERAL | 99 | true | Vendor IEN (Required on enter, optional on edit) | 
| vs:Input_Parameter-8994_02 | WHO | LITERAL | 30 | true | Person Who Called (Optional - Free Text 3 to 30 Characters) | 
| vs:Input_Parameter-8994_02 | ADMDT | LITERAL | 14 | true | Admission Date/Time (Required on enter, optional on edit) | 
| vs:Input_Parameter-8994_02 | AUTHDT | LITERAL | 14 | true | Authorized From Date/Time (Optional - Default is ADMDT) | 
| vs:Input_Parameter-8994_02 | ADMDX | LITERAL | 45 | true | Admitting Diagnosis (Optional - Free Text 3 to 45 Characters) | 
| vs:Input_Parameter-8994_02 | ATPHY | LITERAL | 30 | true | Attending Physician (Optional - Free Text 3 to 30 Characters) | 
| vs:Input_Parameter-8994_02 | PHYPH | LITERAL | 20 | true | Attending Physicians Phone Number (Optional - Free Text 3 to 20 Characters) | 
| vs:Input_Parameter-8994_02 | TOC | LITERAL | 1 | true | Type of Contact (Optional - T : Telephone, P - Personal) | 
| vs:Input_Parameter-8994_02 | REFPROV | LITERAL | 25 | true | Referring provider, pointer to file 200.  \@\ can be passed in for deletion. | 