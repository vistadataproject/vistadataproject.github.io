---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP PATIENT REG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP PATIENT REG{:/}
 tag | {::nomarkdown}REG{:/}
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will add entries to file 162.2 FEE NOTIFICATION/REQUEST FILE.  The logic was taken from routine: FBCHREQ* and edit template FBCH ENTER REQUEST.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient File (#2) pointer (Required){:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date and Time (Required - FM format)Date and Time that the vendor notifies the COJ of this episode of hospitalization.{:/} | 
| {::nomarkdown}VNDR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Vendor (Required - Pointer to file 161.2 FEE BASIS VENDOR){:/} | 
| {::nomarkdown}DTOA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date & Time of Admission (Required - FM format)This field contains the date and time that you begin accepting responsibility for bills incurred if the veteran is found to be legally and medically entitled.{:/} | 
| {::nomarkdown}PERS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a free text field that contains the name of the person who is notifying you.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file 162.2 FEE NOTIFICATION/REQUEST (Optional - Null = Add, Value = Edit). This field is only used for editting an existing record.{:/} | 
| {::nomarkdown}ADMDX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the admitting diagnosis of the veteran which is usually obtained from the person who called.{:/} | 
| {::nomarkdown}ATPHY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Attending Physician (Optional - Free Text){:/} | 
| {::nomarkdown}ATPHPH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field contains the phone number of the attending physician while the patient was residing in the non-VA facility.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}