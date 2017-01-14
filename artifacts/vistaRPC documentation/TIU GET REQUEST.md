---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET REQUEST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET REQUEST{:/}
 tag | {::nomarkdown}GET1405{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure returns the variable pointer to the REQUESTINGPACKAGE REFERENCE (File #8925, Field #1405). This would be the record inthe Requesting Package (e.g., Consult/Request Tracking or Surgery) forwhich the resulting document has been entered in TIU.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in the TIU Document File(#8925).{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GET1405^[TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 Method comment | Get the Request (field #1405) for a document
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | ```  N TIUDAD,TIUTYP,TIU1405
 I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1^TIU Document does not exist" Q
 S TIUTYP=$P($G(^TIU(8925,TIUDA,0)),U)
 I $P(^TIU(8925,TIUDA,0),U,6)'="" D
 . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)
 . S TIUTYP=$P($G(^TIU(8925,TIUDAD,0)),U)
 I '+TIUTYP S TIUY="-1^TIU parent document does not exist" Q
 S TIU1405=$P($G(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14)),U,5)
 I '+TIU1405 S TIUY="-1^No Request found for this document" Q
 S TIUY=TIU1405```




 Generated on January 14th 2017, 7:26:35 am