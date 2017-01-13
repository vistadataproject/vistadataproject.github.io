---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT PARAMETERS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT PARAMETERS{:/}
 tag | {::nomarkdown}DOCPARM{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the parameters by which a given documentor document type is to be processed.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get document parameters for GUI
 Input Parameters | {::nomarkdown}TIUDA<br/>TIUTYP{:/}
 Lines | ```
 I '+$G(TIUTYP),+$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+TIUDA,0))
 I '+$G(TIUTYP) S TIUY(0)="" Q
 D DOCPRM^TIULC1(TIUTYP,.TIUY,$G(TIUDA))
 I '$D(TIUY) S TIUY(0)=""```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the document in the TIU DOCUMENT FILE(#8925).{:/} | 
| {::nomarkdown}TIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the Document Definition in the TIU DOCUMENTDEFINITION FILE (#8925.1).  e.g., TIUTYP=3 corresponds to the ClassProgress Notes, etc.{:/} | 




 Generated on January 13th 2017, 6:55:28 am