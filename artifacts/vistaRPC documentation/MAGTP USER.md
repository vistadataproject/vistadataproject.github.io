---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP USER 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP USER{:/}
 tag | {::nomarkdown}USERINF{:/}
 routine | [MAGTP008](http://code.osehra.org/dox/Routine_MAGTP008_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Initialize session (Version Check, Display Check, collect User Info).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Information about the client and its workstation.^01: MAMMORES -- Screen resolution of main viewer display:format is X_\x\_Y_\,\_ColorType (e.g., 2048x2580,GRAY)where X,Y are resolutions & ColorType={GRAY, COLOR}.^02: Client Vs ....... Client software version for checking.^03: Client O/S Vs ... Client OS version for logging.^04: ClientBuildDayTime ..... for logging.{:/} | 




 Generated on January 13th 2017, 7:15:28 am