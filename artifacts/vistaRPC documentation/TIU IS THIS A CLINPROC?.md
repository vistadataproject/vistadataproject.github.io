---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU IS THIS A CLINPROC? 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A CLINPROC?{:/}
 tag | {::nomarkdown}ISCP{:/}
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU Document file (#8925.1) IEN for the Title selected.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISCP^[TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 Method comment | RPC that evaluates whether or not a Title is under
 First comment | {::nomarkdown}the CLINICAL PROCEDURES Class<br/>Input  -- TITLE    TIU Document Definition file (#8925.1) IEN<br/>(May be Document Class instead of Title.)<br/>Output -- TIUY     1=True and 0=False{:/}
 Input parameters | {::nomarkdown}TITLE{:/}
 Code | ```  N TIUCLASS<br/> I +$G(TITLE)'>0 S TIUY=0 G ISCPQ<br/> S TIUCLASS=+$$CLASS<br/> I +TIUCLASS'>0 S TIUY=0 G ISCPQ<br/> S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}