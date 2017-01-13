---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET BOILERPLATE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET BOILERPLATE{:/}
 tag | {::nomarkdown}TITLEBP{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a titles boilerplate.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a Titles Boilerplate
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | {::nomarkdown} Q:+$G(IEN)'>0<br/> N I,IDX<br/> S (I,IDX)=0<br/> F  S IDX=$O(^TIU(8925.1,IEN,"DFLT",IDX)) Q:+IDX=0  D<br/> .S I=I+1<br/> .S Y(I)=^TIU(8925.1,IEN,"DFLT",IDX,0){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Title IEN{:/} | 




 Generated on January 13th 2017, 7:15:27 am