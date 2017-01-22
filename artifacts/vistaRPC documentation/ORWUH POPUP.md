---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUH POPUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUH POPUP{:/}
 tag | {::nomarkdown}POPUP{:/}
 routine | [ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Retrieves the \What's This\ text for a given control.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | POPUP^[ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
 Method comment | Get instructions for a given control
 Input parameters | {::nomarkdown}CTRL{:/}
 First comment | {::nomarkdown}<pre> ERROR</pre>{:/}
 Code | {::nomarkdown}  N TMP,I,ILST<br> D GETWP^XPAR(.TMP,"PKG","ORWUH WHATSTHIS",CTRL,.ERR)<br> S ILST=1,LST(1)=$G(TMP)<br> S I=0 F  S I=$O(TMP(I)) Q:'I  S ILST=ILST+1,LST(ILST)=TMP(I,0)<br> I ERR ; Generate an error of some sort<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}