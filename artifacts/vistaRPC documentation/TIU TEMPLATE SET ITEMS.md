---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET ITEMS 

 property | value 
--- | --- 
 label | TIU TEMPLATE SET ITEMS
 tag | SETITEMS
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | ARRAY
 description | This RPC will create or update the items for a Group, Class, or Root.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number of the Group, Class or Root to which the itemsare to be added or modified. | 
| TIUX | LIST |  | true | This is the list of items to be filed for the entry. It should beformatted as follows: TIUX(SEQ)=IEN of the ITEM in the TEMPLATE file (#8927) e.g., TIUX(1)=172TIUX(2)=173TIUX(3)=174 where the values 172, 173, and 174 are valid pointers to Template fileentries. | 