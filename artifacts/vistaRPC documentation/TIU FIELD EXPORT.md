---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD EXPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD EXPORT{:/}
 tag | {::nomarkdown}EXPORT{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Exports Template Fields in XML format{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLDS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of template field names to export.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EXPORT^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Exports Template Fields as XML
 Input parameters | {::nomarkdown}FLDS{:/}
 First comment | {::nomarkdown}<pre> FLDS should be an array of Template Field names, not IENs</pre>{:/}
 Code | {::nomarkdown}  N I,IEN<br> K TIUXML<br> D ADD(.TIUXML,"<TEMPLATE_FIELDS>",0)<br> S I=0<br> F  S I=$O(FLDS(I)) Q:I'>0  D<br> . S IEN=$O(^TIU(8927.1,"B",FLDS(I),0))<br> . I +IEN D ADDXML(.TIUXML,IEN)<br> D ADD(.TIUXML,"</TEMPLATE_FIELDS>",0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}