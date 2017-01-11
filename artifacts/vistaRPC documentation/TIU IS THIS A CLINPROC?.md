---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS THIS A CLINPROC? 

 property | value 
--- | --- 
 label | TIU IS THIS A CLINPROC?
 tag | ISCP
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | SINGLE VALUE
 description | This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.


### Method description

 property | value 
--- | --- 
 Method comment | RPC that evaluates whether or not a Title is under
 Leading comment lines | the CLINICAL PROCEDURES Class,Input  -- TITLE    TIU Document Definition file (#8925.1) IEN,(May be Document Class instead of Title.),Output -- TIUY     1=True and 0=False

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TITLE | LITERAL |  | true | This is the TIU Document file (#8925.1) IEN for the Title selected. | 




 Generated on January 11th 2017, 7:15:04 am