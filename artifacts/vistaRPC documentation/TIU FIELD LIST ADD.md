---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LIST ADD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LIST ADD{:/}
 tag | {::nomarkdown}XFLDLD{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Takes in the XML string, in the format XMLSET(1)=\ <TEMPLATE_FIELDS>\ and merges them with the global ^TMP(\TIUFLDXML\,$J).  If the subscript is 1,then it KILLs the global before it merges.  This routine is used so verylarge lists of fields can be processed without many calls to the database.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XMLSET{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input in the format of XMLSET(1)=\<FIELD NAME=\12345\>\{:/} | 
| {::nomarkdown}XMLIN{:/} | {::nomarkdown}LIST{:/} |  |  |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | XFLDLD^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | RESETS/UPDATES THE TMP("TIUFLDXML",$J) GLOBAL
 First comment | {::nomarkdown}WITH THE STRING PASSED IN "IN".  IF THE 1ST LINE IS SUBSCRIPTED<br/>AS 1, THE PROGRAM CLEARS THE TMP GLOBAL FIRST.  RETURNS "1" IF<br/>THIS CALL WAS SUCCESSFUL, "0" OTHERWISE.{:/}
 Input parameters | {::nomarkdown}IN{:/}
 Code | {::nomarkdown}  N X<br> S X=0<br> S X=$O(IN(X))<br> I +X=1 K ^TMP("TIUFLDXML",$J)<br> M ^TMP("TIUFLDXML",$J)=IN<br> S RESULT(1)=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}