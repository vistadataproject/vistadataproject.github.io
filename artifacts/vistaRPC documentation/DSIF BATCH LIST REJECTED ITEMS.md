---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST REJECTED ITEMS 

 property | value 
--- | --- 
 label | DSIF BATCH LIST REJECTED ITEMS
 tag | LSTREJ
 routine | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
 return value type | GLOBAL ARRAY
 description |  ; Input: Batch # (IEN, if passed in as \nnn;\) ; Output: ;    ; If B9 ;    ; ^TMP($J,\DSIFLRJ\,1)=ien of 162.5 invoice file ; ; If B3 ; ; ^TMP($J,\DSIFLRJ\,x)=ien of 162 payment file.  (may be multiple lines rejected) ; ; ^TMP($J,\DSIFLRJ\,x)=ien of 162 payment file.  (may be multiple lines rejected) ;

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FBBAT | LITERAL | 10 | true | Batch IEN or number IEN;NUMBER | 
| FBTYPE | LITERAL | 2 | true | Batch type (required) | 
| FROM | LITERAL | 7 | true | Date beginning from | 
| TODATE | LITERAL | 7 | true | Until date | 
| FBFROM |  |  |  |  | 




 Generated on January 11th 2017, 7:15:04 am