---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD IMPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD IMPORT{:/}
 tag | {::nomarkdown}IMPORT{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Imports Template Fields from XML format{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUXML{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Template Fields in XML format{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IMPORT^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Call layer for IMPORT2
 First comment | {::nomarkdown}<pre>compatibility and extend the IMPORT function to optionally <br/>specify saving the template field.</pre>{:/}
 Input parameters | {::nomarkdown}XMLTMP{:/}
 Code | {::nomarkdown}  D IMPORT2(.REPORT,"XMLTMP",1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}