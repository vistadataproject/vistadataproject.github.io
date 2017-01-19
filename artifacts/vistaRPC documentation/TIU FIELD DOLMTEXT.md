---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD DOLMTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD DOLMTEXT{:/}
 tag | {::nomarkdown}DOLMTEXT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Reads through an array of text and converts all entries of templatefields to their assocaited List Manager text values.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIULIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input text to search for template fields.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DOLMTEXT^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | finds Template Fields and replaces with LM Text
 Input parameters | {::nomarkdown}TIULIST{:/}
 Code | {::nomarkdown}  N I,LINE<br> S I=0<br> F  S I=$O(TIULIST(I)) Q:'I  D<br> . S TIUY(I)=$$DOLMLINE(TIULIST(I,0)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}