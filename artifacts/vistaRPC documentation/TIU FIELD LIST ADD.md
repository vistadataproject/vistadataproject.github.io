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


### Method description

 property | value 
--- | --- 
 Method comment | RESETS/UPDATES THE TMP("TIUFLDXML",$J) GLOBAL
 Leading comment lines | WITH THE STRING PASSED IN "IN".  IF THE 1ST LINE IS SUBSCRIPTED,AS 1, THE PROGRAM CLEARS THE TMP GLOBAL FIRST.  RETURNS "1" IF,THIS CALL WAS SUCCESSFUL, "0" OTHERWISE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XMLSET | LIST |  |  | Input in the format of XMLSET(1)=\<FIELD NAME=\12345\>\ | 
| XMLIN | LIST |  |  |  | 




Generated on January 11th 2017, 6:34:23 am