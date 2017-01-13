---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETBOIL 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETBOIL{:/}
 tag | {::nomarkdown}GETBOIL{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a Template's Unexpanded Boilerplate Text
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N IDX,LINE,TYPE
 K ^TMP("TIU TEMPLATE",$J)
 S TIUY=$NA(^TMP("TIU TEMPLATE",$J))
 S (IDX,LINE)=0
 S TYPE=$P($G(^TIU(8927,TIUDA,0)),U,3)
 I (TYPE="T")!(TYPE="G") D
 .F  S LINE=$O(^TIU(8927,TIUDA,2,LINE)) Q:'LINE  D
 ..S IDX=IDX+1
 ..S ^TMP("TIU TEMPLATE",$J,IDX)=$G(^TIU(8927,TIUDA,2,LINE,0))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am