---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET BOILERPLATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET BOILERPLATE{:/}
 tag | {::nomarkdown}TITLEBP{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a titles boilerplate.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Title IEN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TITLEBP^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Returns a Titles Boilerplate
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  Q:+$G(IEN)'>0
 N I,IDX
 S (I,IDX)=0
 F  S IDX=$O(^TIU(8925.1,IEN,"DFLT",IDX)) Q:+IDX=0  D
 .S I=I+1
 .S Y(I)=^TIU(8925.1,IEN,"DFLT",IDX,0)```




 Generated on January 14th 2017, 7:26:35 am