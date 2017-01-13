---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD EXPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD EXPORT{:/}
 tag | {::nomarkdown}EXPORT{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Exports Template Fields in XML format{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Exports Template Fields as XML
 Input Parameters | {::nomarkdown}FLDS{:/}
 Lines | {::nomarkdown} N I,IEN<br/> K TIUXML<br/> D ADD(.TIUXML,"<TEMPLATE_FIELDS>",0)<br/> S I=0<br/> F  S I=$O(FLDS(I)) Q:I'>0  D<br/> . S IEN=$O(^TIU(8927.1,"B",FLDS(I),0))<br/> . I +IEN D ADDXML(.TIUXML,IEN)<br/> D ADD(.TIUXML,"</TEMPLATE_FIELDS>",0){:/}
 Leading comment lines | {::nomarkdown}FLDS should be an array of Template Field names, not IENs{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLDS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of template field names to export.{:/} | 




 Generated on January 13th 2017, 7:15:27 am