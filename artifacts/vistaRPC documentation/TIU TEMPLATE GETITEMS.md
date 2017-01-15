---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETITEMS{:/}
 tag | {::nomarkdown}GETITEMS{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETITEMS^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Returns all children of a non-Template Node
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N IDX,ITEM,SEQ,ITEMNODE<br> K ^TMP("TIU TEMPLATE",$J)<br> S TIUY=$NA(^TMP("TIU TEMPLATE",$J))<br> I $P($G(^TIU(8927,TIUDA,0)),U,3)'="T" D<br> .S (IDX,SEQ)=0<br> .F  S SEQ=$O(^TIU(8927,TIUDA,10,"B",SEQ)) Q:'SEQ  D<br> ..S ITEM=0<br> ..F  S ITEM=$O(^TIU(8927,TIUDA,10,"B",SEQ,ITEM)) Q:'ITEM  D<br> ...S ITEMNODE=$G(^TIU(8927,TIUDA,10,ITEM,0))<br> ...D ADDNODE(.IDX,$P(ITEMNODE,U,2)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}