---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LIST IMPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LIST IMPORT{:/}
 tag | {::nomarkdown}LIMPORT{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Calls the import process for a pre-loaded (into ^TMP) list of templatefields.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIMPORT^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Calls the import process to import all of the fields in the
 First comment | {::nomarkdown}<pre>^TMP global for this process.  Result contains a list of NAME^X^RENAME<br/>strings.</pre>{:/}
 Code | {::nomarkdown}  D IMPORT2^TIUSRVF(.RESULT,"^TMP(""TIUFLDXML"",$J)",1)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}