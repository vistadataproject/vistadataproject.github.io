---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT PARAMETERS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT PARAMETERS{:/}
 tag | {::nomarkdown}DOCPARM{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the parameters by which a given documentor document type is to be processed.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the document in the TIU DOCUMENT FILE(#8925).{:/} | 
| {::nomarkdown}TIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the Document Definition in the TIU DOCUMENTDEFINITION FILE (#8925.1).  e.g., TIUTYP=3 corresponds to the ClassProgress Notes, etc.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DOCPARM^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Get document parameters for GUI
 Input parameters | {::nomarkdown}TIUDA<br/>TIUTYP{:/}
 Code | ```  I '+$G(TIUTYP),+$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+TIUDA,0))<br/> I '+$G(TIUTYP) S TIUY(0)="" Q<br/> D DOCPRM^TIULC1(TIUTYP,.TIUY,$G(TIUDA))<br/> I '$D(TIUY) S TIUY(0)=""```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}