---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUH POPUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUH POPUP{:/}
 tag | {::nomarkdown}POPUP{:/}
 routine | [ORWUH](http://code.osehra.org/dox/Routine_ORWUH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Retrieves the \What's This\ text for a given control.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get instructions for a given control
 Input Parameters | {::nomarkdown}CTRL{:/}
 Lines | ```{::nomarkdown} N TMP,I,ILST<br/> D GETWP^XPAR(.TMP,"PKG","ORWUH WHATSTHIS",CTRL,.ERR)<br/> S ILST=1,LST(1)=$G(TMP)<br/> S I=0 F  S I=$O(TMP(I)) Q:'I  S ILST=ILST+1,LST(ILST)=TMP(I,0)<br/> I ERR ; Generate an error of some sort<br/>```{:/}
 Leading comment lines | {::nomarkdown}ERROR{:/}




 Generated on January 13th 2017, 7:11:26 am