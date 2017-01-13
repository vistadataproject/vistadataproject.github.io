---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD IMPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD IMPORT{:/}
 tag | {::nomarkdown}IMPORT{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Imports Template Fields from XML format{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call layer for IMPORT2
 Input Parameters | {::nomarkdown}XMLTMP{:/}
 Lines | ```{::nomarkdown} D IMPORT2(.REPORT,"XMLTMP",1)```{:/}
 Leading comment lines | {::nomarkdown}compatibility and extend the IMPORT function to optionally <br/>specify saving the template field.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUXML{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Template Fields in XML format{:/} | 




 Generated on January 13th 2017, 7:11:27 am