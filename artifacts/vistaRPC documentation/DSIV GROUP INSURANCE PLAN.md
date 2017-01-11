---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV GROUP INSURANCE PLAN 

 property | value 
--- | --- 
 label | DSIV GROUP INSURANCE PLAN
 tag | GRPPOL
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | ARRAY
 description | Looks up Group Insurance Plan name and returns match or matchesor error message.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 30 | true | Group Insurance Plan name to match. | 
| FIELDS | LITERAL | 245 |  | Field list to return in standard FileMan format.  Defaults to     \@;.03;.01I;.01\ | 
| VDT | LITERAL | 14 |  | Visit Date.Time for policy limitations (coverage) data.Defaults to TODAY. | 




 ###### Generated on January 11th 2017, 6:39:43 am