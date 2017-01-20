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

 Property | Value 
 --- | --- 
 Method | GETITEMS^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Returns all children of a non-Template Node
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N IDX,ITEM,SEQ,ITEMNODE<br> K ^TMP("TIU TEMPLATE",$J)<br> S TIUY=$NA(^TMP("TIU TEMPLATE",$J))<br> I $P($G(^TIU(8927,TIUDA,0)),U,3)'="T" D<br> .S (IDX,SEQ)=0<br> .F  S SEQ=$O(^TIU(8927,TIUDA,10,"B",SEQ)) Q:'SEQ  D<br> ..S ITEM=0<br> ..F  S ITEM=$O(^TIU(8927,TIUDA,10,"B",SEQ,ITEM)) Q:'ITEM  D<br> ...S ITEMNODE=$G(^TIU(8927,TIUDA,10,ITEM,0))<br> ...D ADDNODE(.IDX,$P(ITEMNODE,U,2)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}