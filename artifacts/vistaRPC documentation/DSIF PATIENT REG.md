---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PATIENT REG 

 property | value 
--- | --- 
 label | DSIF PATIENT REG
 tag | REG
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add entries to file 162.2 FEE NOTIFICATION/REQUEST FILE.  The logic was taken from routine: FBCHREQ* and edit template FBCH ENTER REQUEST.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 99 | true | Patient File (#2) pointer (Required) | 
| DATE | LITERAL | 14 | true | Date and Time (Required - FM format)Date and Time that the vendor notifies the COJ of this episode of hospitalization. | 
| VNDR | LITERAL | 99 | true | Vendor (Required - Pointer to file 161.2 FEE BASIS VENDOR) | 
| DTOA | LITERAL | 14 | true | Date & Time of Admission (Required - FM format)This field contains the date and time that you begin accepting responsibility for bills incurred if the veteran is found to be legally and medically entitled. | 
| PERS | LITERAL | 30 | true | This is a free text field that contains the name of the person who is notifying you. | 
| IEN | LITERAL | 99 | true | Internal Entry Number to file 162.2 FEE NOTIFICATION/REQUEST (Optional - Null = Add, Value = Edit). This field is only used for editting an existing record. | 
| ADMDX | LITERAL | 45 | true | This is the admitting diagnosis of the veteran which is usually obtained from the person who called. | 
| ATPHY | LITERAL | 30 | true | Attending Physician (Optional - Free Text) | 
| ATPHPH | LITERAL | 20 | true | This field contains the phone number of the attending physician while the patient was residing in the non-VA facility. | 