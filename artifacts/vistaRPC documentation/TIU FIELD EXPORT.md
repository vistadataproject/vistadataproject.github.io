---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU FIELD EXPORT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD EXPORT{:/}
 tag | {::nomarkdown}EXPORT{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Exports Template Fields in XML format{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLDS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of template field names to export.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EXPORT^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Exports Template Fields as XML
 First comment | {::nomarkdown}FLDS should be an array of Template Field names, not IENs{:/}
 Input parameters | {::nomarkdown}FLDS{:/}
 Code | ```  N I,IEN
 K TIUXML
 D ADD(.TIUXML,"<TEMPLATE_FIELDS>",0)
 S I=0
 F  S I=$O(FLDS(I)) Q:I'>0  D
 . S IEN=$O(^TIU(8927.1,"B",FLDS(I),0))
 . I +IEN D ADDXML(.TIUXML,IEN)
 D ADD(.TIUXML,"</TEMPLATE_FIELDS>",0)```




 Generated on January 14th 2017, 7:26:35 am