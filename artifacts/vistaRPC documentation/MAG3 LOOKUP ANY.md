---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 LOOKUP ANY 

 property | value 
--- | --- 
 label | MAG3 LOOKUP ANY
 tag | LKP
 routine | [MAGGNLKP](http://code.osehra.org/dox/Routine_MAGGNLKP_source.html)
 return value type | ARRAY
 description | Lookup using FIND^DIC for general purpose file lookup.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ZYx | LITERAL | 256 | true |         ; ZY is parameter sent by calling app (Delphi)        ;    FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^  ^ SCREEN ($P 5-99) | 
| vs:Input_Parameter-8994_02 | MAGIN | LITERAL | 200 | true | MAGIN is parameter sent by calling app (Delphi) FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^ FIELDS ^ SCREEN ($P 5-99) | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 40 | true | |TAB|; DATA : |TAB|;  LVIEW =Piece 1 |TAB|;     +LVIEW = 1  :  |TAB|;          result array is formatted for a magListView control|TAB|;              i.e.  ^ delimiter for data and \|\ delimiter for IEN|TAB|;     +LVIEW = 0  : |TAB|;         old way,  \  \ delim for data and '^' delim for IEN|TAB|;  INDX = Piece 2|TAB|;                       This is the index to search |TAB|;                       Defaults to \B\ | 