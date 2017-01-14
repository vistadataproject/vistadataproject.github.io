---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 VERSION CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 VERSION CHECK{:/}
 tag | {::nomarkdown}CHKVER{:/}
 routine | [MAGGTU4](http://code.osehra.org/dox/Routine_MAGGTU4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure checks the version of the Imaging clientapplication. Depending on the version of the VistA Imaging KIDS install,the client application can be forced to display a warning and/orterminate.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLVER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The client application passes its descriptor as the value of thisparameter. It consists of 3 pieces separated by '':   01: Version (Major.Minor.Patch.Build)  02: empty or \RIV\ for remote image view clients  03: Client name (\CAPTURE\, \CLUTILS\, \DISPLAY\,        \TELEREADER\, or \VISTARAD\) For example, the Clinical Display client Version 3.0 Patch 8 Build (testversion) 21 will pass \3.0.8.21DISPLAY\ as the value of this parameter.If the same client is used for remote image view, the parameter will havethe \3.0.8.21RIVDISPLAY\ value.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}