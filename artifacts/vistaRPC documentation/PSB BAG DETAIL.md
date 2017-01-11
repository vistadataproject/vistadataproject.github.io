---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB BAG DETAIL 

 property | value 
--- | --- 
 label | PSB BAG DETAIL
 tag | BAGDTL
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | ARRAY
 description | Returns a chronological detailed history on each specific IV bag that isselected.  [0] = -1^No History On File              [0] = Number of Nodes[1] = Action Date/Time^User ID^Action Status^Comments

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBUID | LITERAL |  | true | IV unique ID number. | 
| PSBORD | LITERAL |  | true | IPM order number | 




 ###### Generated on January 11th 2017, 6:39:43 am