---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU FIELD LIST IMPORT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LIST IMPORT{:/}
 tag | {::nomarkdown}LIMPORT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Calls the import process for a pre-loaded (into ^TMP) list of templatefields.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIMPORT^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Calls the import process to import all of the fields in the
 First comment | {::nomarkdown}^TMP global for this process.  Result contains a list of NAME^X^RENAME<br/>strings.{:/}
 Code | ```  D IMPORT2^TIUSRVF(.RESULT,"^TMP(""TIUFLDXML"",$J)",1)<br/>```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}