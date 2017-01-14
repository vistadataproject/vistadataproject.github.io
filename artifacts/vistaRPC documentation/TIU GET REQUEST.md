---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET REQUEST 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET REQUEST{:/}
 tag | {::nomarkdown}GET1405{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure returns the variable pointer to the REQUESTINGPACKAGE REFERENCE (File #8925, Field #1405). This would be the record inthe Requesting Package (e.g., Consult/Request Tracking or Surgery) forwhich the resulting document has been entered in TIU.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get the Request (field #1405) for a document
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | {::nomarkdown} N TIUDAD,TIUTYP,TIU1405<br/> I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1^TIU Document does not exist" Q<br/> S TIUTYP=$P($G(^TIU(8925,TIUDA,0)),U)<br/> I $P(^TIU(8925,TIUDA,0),U,6)'="" D<br/> . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)<br/> . S TIUTYP=$P($G(^TIU(8925,TIUDAD,0)),U)<br/> I '+TIUTYP S TIUY="-1^TIU parent document does not exist" Q<br/> S TIU1405=$P($G(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14)),U,5)<br/> I '+TIU1405 S TIUY="-1^No Request found for this document" Q<br/> S TIUY=TIU1405{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in the TIU Document File(#8925).{:/} | 




 Generated on January 13th 2017, 7:15:27 am