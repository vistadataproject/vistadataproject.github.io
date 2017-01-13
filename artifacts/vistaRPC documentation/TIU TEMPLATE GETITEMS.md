---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETITEMS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETITEMS{:/}
 tag | {::nomarkdown}GETITEMS{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns all children of a non-Template Node
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N IDX,ITEM,SEQ,ITEMNODE
 K ^TMP("TIU TEMPLATE",$J)
 S TIUY=$NA(^TMP("TIU TEMPLATE",$J))
 I $P($G(^TIU(8927,TIUDA,0)),U,3)'="T" D
 .S (IDX,SEQ)=0
 .F  S SEQ=$O(^TIU(8927,TIUDA,10,"B",SEQ)) Q:'SEQ  D
 ..S ITEM=0
 ..F  S ITEM=$O(^TIU(8927,TIUDA,10,"B",SEQ,ITEM)) Q:'ITEM  D
 ...S ITEMNODE=$G(^TIU(8927,TIUDA,10,ITEM,0))
 ...D ADDNODE(.IDX,$P(ITEMNODE,U,2))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am