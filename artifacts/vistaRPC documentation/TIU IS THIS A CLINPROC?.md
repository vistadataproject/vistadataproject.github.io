---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS THIS A CLINPROC? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A CLINPROC?{:/}
 tag | {::nomarkdown}ISCP{:/}
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC that evaluates whether or not a Title is under
 Leading comment lines | {::nomarkdown}the CLINICAL PROCEDURES Class<br/>Input  -- TITLE    TIU Document Definition file (#8925.1) IEN<br/>(May be Document Class instead of Title.)<br/>Output -- TIUY     1=True and 0=False{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU Document file (#8925.1) IEN for the Title selected.{:/} | 




 Generated on January 13th 2017, 6:24:32 am