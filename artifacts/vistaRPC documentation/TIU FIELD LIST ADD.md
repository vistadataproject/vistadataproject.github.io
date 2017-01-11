---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU FIELD LIST ADD 

 property | value 
--- | --- 
 label | TIU FIELD LIST ADD
 tag | XFLDLD
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | ARRAY
 description | Takes in the XML string, in the format XMLSET(1)=\ <TEMPLATE_FIELDS>\ and merges them with the global ^TMP(\TIUFLDXML\,$J).  If the subscript is 1,then it KILLs the global before it merges.  This routine is used so verylarge lists of fields can be processed without many calls to the database.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XMLSET | LIST |  |  | Input in the format of XMLSET(1)=\<FIELD NAME=\12345\>\ | 
| XMLIN | LIST |  |  |  | 