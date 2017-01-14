---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWUH POPUP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWUH POPUP{:/}
 tag | {::nomarkdown}POPUP{:/}
 routine | [ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Retrieves the \What's This\ text for a given control.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | POPUP^[ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
 Method comment | Get instructions for a given control
 First comment | {::nomarkdown}ERROR{:/}
 Input parameters | {::nomarkdown}CTRL{:/}
 Code | ```  N TMP,I,ILST
 D GETWP^XPAR(.TMP,"PKG","ORWUH WHATSTHIS",CTRL,.ERR)
 S ILST=1,LST(1)=$G(TMP)
 S I=0 F  S I=$O(TMP(I)) Q:'I  S ILST=ILST+1,LST(ILST)=TMP(I,0)
 I ERR ; Generate an error of some sort
```




 Generated on January 14th 2017, 7:26:35 am