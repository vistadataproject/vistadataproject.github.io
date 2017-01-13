---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LIST IMPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LIST IMPORT{:/}
 tag | {::nomarkdown}LIMPORT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Calls the import process for a pre-loaded (into ^TMP) list of templatefields.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Calls the import process to import all of the fields in the
 Lines | ```{::nomarkdown} D IMPORT2^TIUSRVF(.RESULT,"^TMP(""TIUFLDXML"",$J)",1)<br/>```{:/}
 Leading comment lines | {::nomarkdown}^TMP global for this process.  Result contains a list of NAME^X^RENAME<br/>strings.{:/}




 Generated on January 13th 2017, 7:11:27 am