---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP USER 

 property | value 
--- | --- 
 label | MAGTP USER
 tag | USERINF
 routine | [MAGTP008](http://code.osehra.org/dox/Routine_MAGTP008_source.html)
 return value type | ARRAY
 description | Initialize session (Version Check, Display Check, collect User Info).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 100 | true | Information about the client and its workstation.^01: MAMMORES -- Screen resolution of main viewer display:format is X_\x\_Y_\,\_ColorType (e.g., 2048x2580,GRAY)where X,Y are resolutions & ColorType={GRAY, COLOR}.^02: Client Vs ....... Client software version for checking.^03: Client O/S Vs ... Client OS version for logging.^04: ClientBuildDayTime ..... for logging. | 




 ###### Generated on January 11th 2017, 6:39:43 am