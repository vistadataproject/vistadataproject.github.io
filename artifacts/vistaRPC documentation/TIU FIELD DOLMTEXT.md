---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD DOLMTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD DOLMTEXT{:/}
 tag | {::nomarkdown}DOLMTEXT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Reads through an array of text and converts all entries of templatefields to their assocaited List Manager text values.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | finds Template Fields and replaces with LM Text
 Input Parameters | {::nomarkdown}TIULIST{:/}
 Lines | ```
 N I,LINE
 S I=0
 F  S I=$O(TIULIST(I)) Q:'I  D
 . S TIUY(I)=$$DOLMLINE(TIULIST(I,0))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIULIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input text to search for template fields.{:/} | 




 Generated on January 13th 2017, 6:55:29 am