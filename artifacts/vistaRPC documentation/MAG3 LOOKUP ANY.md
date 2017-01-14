---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG3 LOOKUP ANY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 LOOKUP ANY{:/}
 tag | {::nomarkdown}LKP{:/}
 routine | [MAGGNLKP](http://code.osehra.org/dox/Routine_MAGGNLKP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Lookup using FIND^DIC for general purpose file lookup.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ZYx{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}        ; ZY is parameter sent by calling app (Delphi)        ;    FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^  ^ SCREEN ($P 5-99){:/} | 
| {::nomarkdown}MAGIN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}MAGIN is parameter sent by calling app (Delphi) FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^ FIELDS ^ SCREEN ($P 5-99){:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TAB; DATA : TAB;  LVIEW =Piece 1 TAB;     +LVIEW = 1  :  TAB;          result array is formatted for a magListView controlTAB;              i.e.  ^ delimiter for data and \\ delimiter for IENTAB;     +LVIEW = 0  : TAB;         old way,  \  \ delim for data and '^' delim for IENTAB;  INDX = Piece 2TAB;                       This is the index to search TAB;                       Defaults to \B\{:/} | 




 Generated on January 14th 2017, 7:26:35 am